from __future__ import annotations

from common import task

TASKS = [
    task(
        title="Cancelling a visible linear factor",
        subsection="2.2",
        difficulty="3/5",
        context=r"A tutorial page checks five separate rewriting claims about short algebraic fractions. Each claim names its own excluded values.",
        items=[
            (
                r"Cancelling the common factor $x-2$ in $\dfrac{x^2-4}{x-2}$ for $x\neq 2$ is recorded as leaving $x+2$.",
                True,
                r"""Factor the numerator as a difference of squares:
$$\frac{x^2-4}{x-2}=\frac{(x-2)(x+2)}{x-2}.$$
For $x\neq 2$ the factor $x-2$ cancels, leaving $x+2$.""",
            ),
            (
                r"Reducing the quadratic numerator of $\dfrac{x^2-1}{x-1}$ whenever $x\neq 1$ is said to leave the remainder $x-1$.",
                False,
                r"""The numerator is again a difference of squares:
$$\frac{x^2-1}{x-1}=\frac{(x-1)(x+1)}{x-1}=x+1$$
for $x\neq 1$. The claimed remainder $x-1$ is the cancelled factor, not the surviving one.""",
            ),
            (
                r"Provided the letter $a$ is nonzero, striking $a$ from $\dfrac{a+b}{a}$ is claimed to produce $1+b$.",
                False,
                r"""Split the fraction as a sum:
$$\frac{a+b}{a}=\frac{a}{a}+\frac{b}{a}=1+\frac{b}{a}.$$
The letter $a$ is a factor of the first term only. Cancelling it from the whole numerator as if it produced $1+b$ drops the remaining denominator.""",
            ),
            (
                r"After writing the fraction $\dfrac{x^2+2x}{x+2}$ with $x\neq -2$, a note treats the value as $x$.",
                True,
                r"""Factor $x$ from the numerator:
$$\frac{x^2+2x}{x+2}=\frac{x(x+2)}{x+2}=x$$
for $x\neq -2$.""",
            ),
            (
                r"Taking $\dfrac{x^3-x}{x^2-1}$ whenever $x\neq \pm 1$ as identical to $x$.",
                True,
                r"""Factor $x$ from the numerator and a difference of squares from both ends:
$$\frac{x^3-x}{x^2-1}=\frac{x(x^2-1)}{x^2-1}=x$$
for $x\neq \pm 1$.""",
            ),
        ],
        overview=r"Five independent short rewritings. A cancelled linear factor must actually divide the numerator; striking a letter that is not a factor of every term is illegal; $x^3-x$ over $x^2-1$ cancels to $x$.",
    ),
    task(
        title="A mistaken common denominator",
        subsection="2.2",
        difficulty="3/5",
        context=r"A workshop pair $x$, $y$ is used to test common-denominator habits. Treat every sentence as a standalone identity with its own nonzero letters.",
        items=[
            (
                r"Adding $\dfrac{2}{x}+\dfrac{3}{y}$ with $x\neq 0$ and $y\neq 0$ is performed by taking $x+y$ as the common denominator and writing $\dfrac{5}{x+y}$.",
                False,
                r"""The sum of two fractions is not the sum of numerators over the sum of denominators. The least common denominator of $x$ and $y$ is the product $xy$:
$$\frac{2}{x}+\frac{3}{y}=\frac{2y}{xy}+\frac{3x}{xy}=\frac{2y+3x}{xy}.$$
The quantity $\dfrac{5}{x+y}$ is a different rational expression.""",
            ),
            (
                r"Combining $\dfrac{2}{x}+\dfrac{3}{y}$ for nonzero $x$ and $y$ is claimed to equal $\dfrac{2y+3x}{xy}$.",
                True,
                r"""Clear both denominators against the product $xy$:
$$\frac{2}{x}+\frac{3}{y}=\frac{2\cdot y+3\cdot x}{xy}=\frac{2y+3x}{xy}.$$""",
            ),
            (
                r"Whenever the same denominator $x\neq 0$ is shared, the sum $\dfrac{2}{x}+\dfrac{3}{x}$ is rewritten as $\dfrac{5}{x}$.",
                True,
                r"""Equal denominators add in the numerators:
$$\frac{2}{x}+\frac{3}{x}=\frac{2+3}{x}=\frac{5}{x}.$$""",
            ),
            (
                r"Someone treats $\dfrac{1}{x}+\dfrac{1}{y}$ with $xy\neq 0$ as identical to $\dfrac{x+y}{xy}$.",
                True,
                r"""The common denominator is $xy$:
$$\frac{1}{x}+\frac{1}{y}=\frac{y+x}{xy}=\frac{x+y}{xy}.$$""",
            ),
            (
                r"Taking $5x$ as a least common denominator of $\dfrac{1}{2x}+\dfrac{1}{3x}$ for $x\neq 0$ is said to be legitimate.",
                False,
                r"""The denominators are $2x$ and $3x$. Their least common multiple is $6x$, not $5x$:
$$\frac{1}{2x}+\frac{1}{3x}=\frac{3}{6x}+\frac{2}{6x}=\frac{5}{6x}.$$
The integer $5$ is the resulting numerator, not a factor of the LCD.""",
            ),
        ],
        overview=r"Common denominators are products of the distinct denominator factors. Adding numerators over added denominators, or using a sum of coefficients as an LCD, both fail.",
    ),
    task(
        title="Reciprocals of two-letter sums",
        subsection="2.2",
        difficulty="3/5",
        context=r"A revision card in the letters $a$ and $b$ lists five claims about taking reciprocals and combining unit fractions. Judge each line on its own domain.",
        items=[
            (
                r"Inverting the sum $\dfrac{1}{a}+\dfrac{1}{b}$ for $ab\neq 0$ and $a+b\neq 0$ is said to give $a+b$.",
                False,
                r"""The sum of the unit fractions is $\dfrac{a+b}{ab}$, so its reciprocal is
$$\left(\frac{1}{a}+\frac{1}{b}\right)^{-1}=\frac{ab}{a+b},$$
not $a+b$. Reciprocating a sum is not the same as summing the original letters.""",
            ),
            (
                r"Clearing the inner sum first, $\bigl(a^{-1}+b^{-1}\bigr)^{-1}$ equals $\dfrac{ab}{a+b}$ whenever $a$, $b$, and $a+b$ are nonzero.",
                True,
                r"""$$a^{-1}+b^{-1}=\frac{b+a}{ab},\qquad \bigl(a^{-1}+b^{-1}\bigr)^{-1}=\frac{ab}{a+b}.$$""",
            ),
            (
                r"Whenever $a\neq b$ and $ab\neq 0$, the reciprocal $\bigl(\dfrac{1}{a}-\dfrac{1}{b}\bigr)^{-1}$ is identified with $\dfrac{ab}{b-a}$.",
                True,
                r"""$$\frac{1}{a}-\frac{1}{b}=\frac{b-a}{ab},$$
so
$$\left(\frac{1}{a}-\frac{1}{b}\right)^{-1}=\frac{ab}{b-a}.$$""",
            ),
            (
                r"Under the restriction $b\neq 0$, splitting $\dfrac{a+b}{b}$ produces $1+\dfrac{a}{b}$.",
                True,
                r"""$$\frac{a+b}{b}=\frac{a}{b}+\frac{b}{b}=\frac{a}{b}+1.$$""",
            ),
            (
                r"A notebook records $\dfrac{1}{a+b}=\dfrac{1}{a}+\dfrac{1}{b}$ as an identity for all $a,b$ with $ab(a+b)\neq 0$.",
                False,
                r"""The right-hand side is $\dfrac{a+b}{ab}$. Equality would require
$$\frac{1}{a+b}=\frac{a+b}{ab},$$
or $(a+b)^2=ab$, which is not an identity. The reciprocal of a sum is not the sum of reciprocals.""",
            ),
        ],
        overview=r"The reciprocal of a sum of unit fractions is the product over the sum. Splitting a numerator over a shared denominator is legal; distributing a reciprocal over a sum is not.",
    ),
    task(
        title="Difference of squares in a quotient",
        subsection="2.2",
        difficulty="3/5",
        context=r"An examiner lines up difference-of-squares numerators against linear or quadratic denominators. Each identity carries a different restriction on the letters.",
        items=[
            (
                r"Simplifying $\dfrac{x^2-9}{x+3}$ for $x\neq -3$ is claimed to leave $x-3$.",
                True,
                r"""$$\frac{x^2-9}{x+3}=\frac{(x-3)(x+3)}{x+3}=x-3$$
for $x\neq -3$.""",
            ),
            (
                r"On the domain $x\neq y$, the quotient $\dfrac{x^2-y^2}{x-y}$ is identified with $x+y$.",
                True,
                r"""$$\frac{x^2-y^2}{x-y}=\frac{(x-y)(x+y)}{x-y}=x+y.$$""",
            ),
            (
                r"Provided $x\neq -y$, a candidate writes $\dfrac{x^2-y^2}{x+y}=x+y$.",
                False,
                r"""$$\frac{x^2-y^2}{x+y}=\frac{(x-y)(x+y)}{x+y}=x-y$$
for $x\neq -y$. The surviving factor is the difference, not the sum.""",
            ),
            (
                r"After factoring both ends, $\dfrac{x^2-16}{x^2-4x}$ equals $\dfrac{x+4}{x}$ whenever $x\neq 0$ and $x\neq 4$.",
                True,
                r"""$$\frac{x^2-16}{x^2-4x}=\frac{(x-4)(x+4)}{x(x-4)}=\frac{x+4}{x}$$
for $x\neq 0$ and $x\neq 4$.""",
            ),
            (
                r"With $y\neq 0$ and $2y\neq 1$, the quotient $\dfrac{4y^2-1}{2y-1}$ is treated as identical to $2y-1$.",
                False,
                r"""The numerator is a difference of squares:
$$\frac{(2y-1)(2y+1)}{2y-1}=2y+1$$
for $2y\neq 1$. The claimed remainder $2y-1$ is the cancelled factor, not the surviving one.""",
            ),
        ],
        overview=r"Difference of squares cancels against $x-y$ or $x+y$ according to the sign in the denominator. The surviving factor is the one that was not cancelled; keeping the cancelled factor is the usual error.",
    ),
    task(
        title="A short continued unit fraction",
        subsection="2.2",
        difficulty="3/5",
        context=r"A warm-up nest of unit fractions in a single letter $x$ is written five different ways. Each claim states the values of $x$ it excludes.",
        items=[
            (
                r"Clearing the inner layer of $1+\dfrac{1}{1+\dfrac{1}{x}}$ for $x\neq 0$ and $x\neq -1$ is said to produce $\dfrac{2x+1}{x+1}$.",
                True,
                r"""The innermost sum is
$$1+\frac{1}{x}=\frac{x+1}{x}.$$
Its reciprocal is $\dfrac{x}{x+1}$, and adding $1$ gives
$$1+\frac{x}{x+1}=\frac{x+1+x}{x+1}=\frac{2x+1}{x+1}.$$""",
            ),
            (
                r"Whenever $x\neq 0$ and $x\neq -1$, the shorter nest $\dfrac{1}{1+\dfrac{1}{x}}$ is identified with $\dfrac{x}{x+1}$.",
                True,
                r"""$$1+\frac{1}{x}=\frac{x+1}{x},\qquad \frac{1}{1+\dfrac{1}{x}}=\frac{x}{x+1}.$$""",
            ),
            (
                r"Someone rewrites $\dfrac{1}{1-\dfrac{1}{x}}$ for $x\neq 0$ and $x\neq 1$ as $\dfrac{x}{x+1}$.",
                False,
                r"""$$1-\frac{1}{x}=\frac{x-1}{x},\qquad \frac{1}{1-\dfrac{1}{x}}=\frac{x}{x-1}.$$
The claimed denominator $x+1$ belongs to the plus nest, not the minus nest.""",
            ),
            (
                r"After adding the geometric-looking pieces, $1+\dfrac{1}{x}+\dfrac{1}{x^2}$ equals $\dfrac{x^2+x+1}{x^2}$ for every $x\neq 0$.",
                True,
                r"""The common denominator is $x^2$:
$$1+\frac{1}{x}+\frac{1}{x^2}=\frac{x^2}{x^2}+\frac{x}{x^2}+\frac{1}{x^2}=\frac{x^2+x+1}{x^2}.$$""",
            ),
            (
                r"On the punctured line $x\neq 0$, a marker treats $\bigl(1+\dfrac{1}{x}\bigr)^2$ as $1+\dfrac{1}{x^2}$.",
                False,
                r"""The square of a sum produces a cross term:
$$\left(1+\frac{1}{x}\right)^2=1+\frac{2}{x}+\frac{1}{x^2}=\frac{x^2+2x+1}{x^2}.$$
Dropping $\dfrac{2}{x}$ is the usual binomial-square error.""",
            ),
        ],
        overview=r"A continued unit fraction is cleared from the inside. Plus and minus nests produce $x/(x+1)$ and $x/(x-1)$ respectively; squaring a binomial of fractions still produces a doubled cross term.",
    ),
    task(
        title="Negative exponents read as fractions",
        subsection="2.2",
        difficulty="3/5",
        context=r"A script writes several products of binomials in negative powers of $x$ or $y$. Convert each product to ordinary algebraic fractions before judging it.",
        items=[
            (
                r"Expanding the product $(2x^{-1}-1)(2x^{-1}+1)$ for $x\neq 0$ is claimed to equal $\dfrac{4}{x^2}-1$.",
                True,
                r"""This is a difference of squares in the letter $2x^{-1}$:
$$(2x^{-1}-1)(2x^{-1}+1)=(2x^{-1})^2-1^2=\frac{4}{x^2}-1.$$""",
            ),
            (
                r"A candidate replaces that same product, still for $x\neq 0$, by $\dfrac{1}{4x^2}-1$.",
                False,
                r"""The square is $(2/x)^2=4/x^2$, not $1/(4x^2)$. The latter would come from squaring $1/(2x)$ instead of $2/x$.""",
            ),
            (
                r"Whenever $x\neq 0$, the square $(2x^{-1}-1)^2$ is written as $\dfrac{4}{x^2}-\dfrac{4}{x}+1$.",
                True,
                r"""$$\left(\frac{2}{x}-1\right)^2=\frac{4}{x^2}-2\cdot\frac{2}{x}\cdot 1+1=\frac{4}{x^2}-\frac{4}{x}+1.$$""",
            ),
            (
                r"Provided $y\neq 0$, the signed quotient $\dfrac{4}{-2y}$ is identified with $-\dfrac{2}{y}$.",
                True,
                r"""$$\frac{4}{-2y}=-\frac{4}{2y}=-\frac{2}{y}.$$
No square is present, so the minus sign in the denominator survives.""",
            ),
            (
                r"Someone treats $\dfrac{4}{(-2y)^2}$ for $y\neq 0$ as $-\dfrac{1}{y^2}$.",
                False,
                r"""Squaring removes the minus sign:
$$(-2y)^2=4y^2,\qquad \frac{4}{4y^2}=\frac{1}{y^2}.$$
The claimed extra minus would be correct for $\dfrac{4}{-(2y)^2}$, which is a different expression.""",
            ),
        ],
        overview=r"Negative exponents are ordinary unit fractions. A difference of squares $(2/x)^2-1$ is $4/x^2-1$; a squared negative monomial is positive.",
    ),
    task(
        title="Perfect-square numerators over a linear term",
        subsection="2.2",
        difficulty="3/5",
        context=r"A marker compares several quotients whose numerators are squares or near-squares. Each line excludes a different root of a denominator.",
        items=[
            (
                r"Subtracting $\dfrac{x^2-4}{x+2}$ from $\dfrac{x^2+4x+4}{x+2}$ for $x\neq -2$ is said to leave the constant $4$.",
                True,
                r"""The two numerators share the denominator $x+2$:
$$\frac{(x+2)^2-(x^2-4)}{x+2}=\frac{(x^2+4x+4)-(x^2-4)}{x+2}=\frac{4x+8}{x+2}=\frac{4(x+2)}{x+2}=4.$$
Equivalently, the first quotient is $x+2$ and the second is $x-2$, and $(x+2)-(x-2)=4$.""",
            ),
            (
                r"Reducing $\dfrac{x^2+4x+4}{x+2}$ whenever $x\neq -2$ is claimed to leave $x-2$.",
                False,
                r"""$$x^2+4x+4=(x+2)^2,\qquad \frac{(x+2)^2}{x+2}=x+2.$$
The claimed remainder $x-2$ is $\dfrac{x^2-4}{x+2}$, a different numerator.""",
            ),
            (
                r"Whenever $x\neq 3$, the quotient $\dfrac{x^2-6x+9}{x-3}$ is identified with $x-3$.",
                True,
                r"""$$x^2-6x+9=(x-3)^2,\qquad \frac{(x-3)^2}{x-3}=x-3.$$""",
            ),
            (
                r"On the set $x\neq -3$, a note records $\dfrac{(2x+6)}{x+3}=2$.",
                True,
                r"""$$\frac{2x+6}{x+3}=\frac{2(x+3)}{x+3}=2.$$""",
            ),
            (
                r"With $x\neq 2$, someone writes $\dfrac{3x^2-12}{x-2}=3x-6$.",
                False,
                r"""Factor the numerator:
$$\frac{3(x^2-4)}{x-2}=\frac{3(x-2)(x+2)}{x-2}=3(x+2)=3x+6.$$
The claimed $3x-6$ would be $3(x-2)$, which is the cancelled factor times $3$, not the surviving one.""",
            ),
        ],
        overview=r"A perfect-square numerator over one of its linear factors leaves the other copy of that factor. Subtracting two such quotients with a shared denominator is ordinary subtraction of the simplified linear remainders.",
    ),
    task(
        title="Adding opposite linear denominators",
        subsection="2.2",
        difficulty="3/5",
        context=r"A drill sheet adds or subtracts unit fractions whose denominators are $x\pm 1$ or $x\pm 2$. Each claim states the points that must stay excluded.",
        items=[
            (
                r"Combining $\dfrac{1}{x-2}-\dfrac{1}{x+2}$ for $x\neq \pm 2$ is said to equal $\dfrac{4}{x^2-4}$.",
                True,
                r"""The common denominator is $x^2-4$:
$$\frac{1}{x-2}-\frac{1}{x+2}=\frac{(x+2)-(x-2)}{x^2-4}=\frac{4}{x^2-4}.$$""",
            ),
            (
                r"A script writes $\dfrac{1}{x-1}-\dfrac{1}{x+1}=\dfrac{1}{x^2-1}$ on the domain $x\neq \pm 1$.",
                False,
                r"""$$\frac{1}{x-1}-\frac{1}{x+1}=\frac{(x+1)-(x-1)}{x^2-1}=\frac{2}{x^2-1}.$$
The numerator is $2$, not $1$.""",
            ),
            (
                r"Whenever $x\neq \pm 1$, the sum $\dfrac{1}{1-x}+\dfrac{1}{1+x}$ is identified with $\dfrac{2}{1-x^2}$.",
                True,
                r"""$$\frac{1}{1-x}+\frac{1}{1+x}=\frac{(1+x)+(1-x)}{1-x^2}=\frac{2}{1-x^2}.$$""",
            ),
            (
                r"Provided $x\neq 0$ and $x\neq -1$, the difference $\dfrac{1}{x}-\dfrac{1}{x+1}$ equals $\dfrac{1}{x(x+1)}$.",
                True,
                r"""$$\frac{1}{x}-\frac{1}{x+1}=\frac{(x+1)-x}{x(x+1)}=\frac{1}{x(x+1)}.$$""",
            ),
            (
                r"Under the restrictions $x\neq y$ and $x\neq -y$, a candidate claims $\dfrac{1}{x+y}+\dfrac{1}{x-y}=\dfrac{2y}{x^2-y^2}$.",
                False,
                r"""$$\frac{1}{x+y}+\frac{1}{x-y}=\frac{(x-y)+(x+y)}{x^2-y^2}=\frac{2x}{x^2-y^2}.$$
The surviving numerator is $2x$, not $2y$. The $2y$ numerator appears in the difference of those two unit fractions, not in their sum.""",
            ),
        ],
        overview=r"Opposite linear denominators combine over a difference of squares. The numerator after subtraction is twice the cancelled constant; after addition it is twice the surviving linear letter.",
    ),
    task(
        title="A compound fraction with a swapped ratio",
        subsection="2.2",
        difficulty="4/5",
        context=r"A compound-fraction workshop writes five stacked quotients in the letter $x$. Each stack has its own forbidden points, and several of the claimed simplifications look like each other’s reciprocals.",
        items=[
            (
                r"Simplifying the stack $\dfrac{1-\dfrac{1}{x+1}}{1+\dfrac{1}{x-1}}$ for $x\neq \pm 1$ and $x\neq 0$ is claimed to equal $\dfrac{x-1}{x+1}$.",
                True,
                r"""The numerator collapses first:
$$1-\frac{1}{x+1}=\frac{x+1-1}{x+1}=\frac{x}{x+1}.$$
The denominator is
$$1+\frac{1}{x-1}=\frac{x-1+1}{x-1}=\frac{x}{x-1}.$$
Dividing these gives
$$\frac{x}{x+1}\cdot\frac{x-1}{x}=\frac{x-1}{x+1}.$$""",
            ),
            (
                r"A marker instead records that same stack, still excluding $x\in\{-1,0,1\}$, as $\dfrac{x+1}{x-1}$.",
                False,
                r"""The calculation of the previous line produces $\dfrac{x-1}{x+1}$. The claimed $\dfrac{x+1}{x-1}$ is the reciprocal of the correct simplification.""",
            ),
            (
                r"Whenever $x\neq -1$, the elementary split $1-\dfrac{2}{x+1}$ is identified with $\dfrac{x-1}{x+1}$.",
                True,
                r"""$$1-\frac{2}{x+1}=\frac{x+1-2}{x+1}=\frac{x-1}{x+1}.$$""",
            ),
            (
                r"Provided $x\neq 1$, adding a unit onto $\dfrac{1}{x-1}$ is said to produce $\dfrac{x}{x-1}$.",
                True,
                r"""$$1+\frac{1}{x-1}=\frac{x-1+1}{x-1}=\frac{x}{x-1}.$$""",
            ),
            (
                r"On the domain $x\neq \pm 1$, someone writes $\dfrac{x+1}{x-1}-\dfrac{x-1}{x+1}=\dfrac{2x}{x^2-1}$.",
                False,
                r"""Over the common denominator $x^2-1$,
$$\frac{(x+1)^2-(x-1)^2}{x^2-1}=\frac{(x^2+2x+1)-(x^2-2x+1)}{x^2-1}=\frac{4x}{x^2-1}.$$
The numerator is $4x$, not $2x$.""",
            ),
        ],
        overview=r"A compound fraction is two ordinary fractions stacked: collapse each layer, then multiply by the reciprocal of the lower layer. Swapping the simplified ratio is a standard trap; the difference of a ratio and its reciprocal produces $4x/(x^2-1)$.",
    ),
    task(
        title="Three summands sharing a difference of squares",
        subsection="2.2",
        difficulty="4/5",
        context=r"Three algebraic fractions whose denominators divide $x^2-1$ are combined in several ways. Each claim lists the values $\pm 1$ or further roots that stay out of the domain.",
        items=[
            (
                r"Combining $\dfrac{1}{x-1}+\dfrac{1}{x+1}+\dfrac{2}{x^2-1}$ for $x\neq \pm 1$ is said to leave $\dfrac{2}{x-1}$.",
                True,
                r"""The common denominator is $x^2-1=(x-1)(x+1)$:
$$\frac{(x+1)+(x-1)+2}{x^2-1}=\frac{2x+2}{x^2-1}=\frac{2(x+1)}{(x-1)(x+1)}=\frac{2}{x-1}.$$""",
            ),
            (
                r"Adding $\dfrac{1}{x-1}+\dfrac{2}{x+1}+\dfrac{3}{x^2-1}$ whenever $x\neq \pm 1$ is claimed to equal $\dfrac{3x+2}{x^2-1}$.",
                True,
                r"""$$\frac{(x+1)+2(x-1)+3}{x^2-1}=\frac{x+1+2x-2+3}{x^2-1}=\frac{3x+2}{x^2-1}.$$""",
            ),
            (
                r"Someone writes $\dfrac{1}{x-1}+\dfrac{1}{x+1}=\dfrac{2}{x^2-1}$ on the domain $x\neq \pm 1$.",
                False,
                r"""$$\frac{1}{x-1}+\frac{1}{x+1}=\frac{(x+1)+(x-1)}{x^2-1}=\frac{2x}{x^2-1}.$$
The sum of the two unit fractions is not the unit fraction over the product; the numerator $2x$ survives.""",
            ),
            (
                r"Provided $x\neq \pm 1$, the difference $\dfrac{1}{x-1}-\dfrac{1}{x+1}$ equals $\dfrac{2}{x^2-1}$.",
                True,
                r"""$$\frac{1}{x-1}-\frac{1}{x+1}=\frac{(x+1)-(x-1)}{x^2-1}=\frac{2}{x^2-1}.$$""",
            ),
            (
                r"With both $x\neq \pm 1$, a candidate claims $\dfrac{1}{x-1}+\dfrac{1}{x+1}+\dfrac{1}{x^2-1}=\dfrac{3}{x^2-1}$.",
                False,
                r"""The common denominator is $x^2-1$:
$$\frac{(x+1)+(x-1)+1}{x^2-1}=\frac{2x+1}{x^2-1}.$$
The claimed constant numerator $3$ would require the linear terms to cancel completely, which they do not.""",
            ),
        ],
        overview=r"Three fractions over factors of $x^2-1$ share that quadratic as LCD. Adding the two unit fractions produces $2x/(x^2-1)$; subtracting them produces $2/(x^2-1)$. Adding a third copy $1/(x^2-1)$ produces $(2x+1)/(x^2-1)$, not $3/(x^2-1)$.",
    ),
    task(
        title="A continued nest of unit subtractions",
        subsection="2.2",
        difficulty="4/5",
        context=r"A nested reciprocal $1-1/(1-1/x)$ is unwound on a problem sheet, together with shorter cousins. Each claim lists the inner zeros it excludes.",
        items=[
            (
                r"Clearing the nest $\dfrac{1}{1-\dfrac{1}{1-\dfrac{1}{x}}}$ for $x\neq 0$ and $x\neq 1$ is said to leave $1-x$.",
                True,
                r"""Innermost:
$$1-\frac{1}{x}=\frac{x-1}{x},\qquad \frac{1}{1-\dfrac{1}{x}}=\frac{x}{x-1}.$$
The next layer is
$$1-\frac{x}{x-1}=\frac{x-1-x}{x-1}=\frac{-1}{x-1}.$$
Taking the reciprocal yields
$$\frac{1}{1-\dfrac{1}{1-\dfrac{1}{x}}}=-(x-1)=1-x.$$""",
            ),
            (
                r"A candidate instead records that same nest, still for $x\notin\{0,1\}$, as $x-1$.",
                False,
                r"""The algebra of the previous line produces $1-x=-(x-1)$. The claimed $x-1$ is the opposite sign.""",
            ),
            (
                r"Whenever $x\neq 0$ and $x\neq 1$, the two-layer nest $\dfrac{1}{1-\dfrac{1}{x}}$ is identified with $\dfrac{x}{x-1}$.",
                True,
                r"""$$1-\frac{1}{x}=\frac{x-1}{x},\qquad \frac{1}{1-\dfrac{1}{x}}=\frac{x}{x-1}.$$""",
            ),
            (
                r"Provided $x\neq 0$, $x\neq -1$, and $x\neq -\dfrac{1}{2}$, the plus nest $\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{x}}}$ equals $\dfrac{x+1}{2x+1}$.",
                True,
                r"""$$1+\frac{1}{x}=\frac{x+1}{x},\qquad \frac{1}{1+\dfrac{1}{x}}=\frac{x}{x+1}.$$
Then
$$1+\frac{x}{x+1}=\frac{2x+1}{x+1},\qquad \frac{1}{1+\dfrac{1}{1+\dfrac{1}{x}}}=\frac{x+1}{2x+1}.$$""",
            ),
            (
                r"On the domain $x\neq 1$, someone writes $1+\dfrac{x}{1-x}=\dfrac{1}{1-x}$.",
                True,
                r"""$$1+\frac{x}{1-x}=\frac{1-x+x}{1-x}=\frac{1}{1-x}.$$
(The same identity is $\dfrac{1}{1-x}$ rather than $\dfrac{1}{x-1}$; the two differ by a sign.)""",
            ),
        ],
        overview=r"A nest of unit subtractions is cleared from the inside. The three-layer minus nest simplifies to $1-x$; the matching plus nest simplifies to $(x+1)/(2x+1)$. Sign errors on the last reciprocal are the usual trap.",
    ),
    task(
        title="Powers of $x$ in a stacked quotient",
        subsection="2.2",
        difficulty="4/5",
        context=r"Unit fractions in descending powers of a single letter $x$ are stacked as one quotient. Each identity names the powers that must stay nonzero.",
        items=[
            (
                r"Simplifying $\dfrac{\dfrac{1}{x}+\dfrac{1}{x^2}}{\dfrac{1}{x^2}-\dfrac{1}{x^3}}$ for $x\neq 0$ and $x\neq 1$ is claimed to equal $\dfrac{x(x+1)}{x-1}$.",
                True,
                r"""The numerator is $\dfrac{x+1}{x^2}$. The denominator is $\dfrac{x-1}{x^3}$. Dividing gives
$$\frac{x+1}{x^2}\cdot\frac{x^3}{x-1}=\frac{x(x+1)}{x-1}.$$""",
            ),
            (
                r"A notebook records that same stacked quotient, excluding $x\in\{0,1\}$, as $\dfrac{x+1}{x-1}$.",
                False,
                r"""The calculation keeps an extra factor $x$ from $x^3/x^2$. The correct simplified form is $\dfrac{x(x+1)}{x-1}$, not $\dfrac{x+1}{x-1}$.""",
            ),
            (
                r"Whenever $x\neq 0$ and $x\neq 1$, the sibling stack $\dfrac{\dfrac{1}{x}+\dfrac{1}{x^2}}{\dfrac{1}{x}-\dfrac{1}{x^2}}$ is identified with $\dfrac{x+1}{x-1}$.",
                True,
                r"""Numerator $\dfrac{x+1}{x^2}$, denominator $\dfrac{x-1}{x^2}$, so the quotient is $\dfrac{x+1}{x-1}$.""",
            ),
            (
                r"Provided $x\neq 0$, the sum $\dfrac{1}{x}+\dfrac{1}{x^2}$ equals $\dfrac{x+1}{x^2}$.",
                True,
                r"""$$\frac{1}{x}+\frac{1}{x^2}=\frac{x}{x^2}+\frac{1}{x^2}=\frac{x+1}{x^2}.$$""",
            ),
            (
                r"With $x\neq 0$ and $x\neq 1$, someone writes $\dfrac{1}{x^2}-\dfrac{1}{x^3}=\dfrac{x-1}{x^2}$.",
                False,
                r"""$$\frac{1}{x^2}-\frac{1}{x^3}=\frac{x}{x^3}-\frac{1}{x^3}=\frac{x-1}{x^3}.$$
The common denominator is $x^3$, not $x^2$.""",
            ),
        ],
        overview=r"A stack of negative powers is two ordinary fractions. Multiply by the reciprocal of the lower layer and cancel the powers of $x$; dropping a leftover factor $x$, or using the wrong common power in the denominator, both fail.",
    ),
    task(
        title="Difference of reciprocals over reciprocal squares",
        subsection="2.2",
        difficulty="4/5",
        context=r"A two-letter sheet compares $\dfrac{1}{a}-\dfrac{1}{b}$ with $\dfrac{1}{a^2}-\dfrac{1}{b^2}$. Each claim states which of $a$, $b$, $a\pm b$ must be nonzero.",
        items=[
            (
                r"Simplifying $\dfrac{\dfrac{1}{a}-\dfrac{1}{b}}{\dfrac{1}{a^2}-\dfrac{1}{b^2}}$ for $ab\neq 0$, $a\neq b$, and $a\neq -b$ is said to equal $\dfrac{ab}{a+b}$.",
                True,
                r"""The numerator is $\dfrac{b-a}{ab}$. The denominator is
$$\frac{1}{a^2}-\frac{1}{b^2}=\frac{b^2-a^2}{a^2b^2}=\frac{(b-a)(b+a)}{a^2b^2}.$$
Dividing cancels $b-a$ and leaves
$$\frac{b-a}{ab}\cdot\frac{a^2b^2}{(b-a)(a+b)}=\frac{ab}{a+b}.$$""",
            ),
            (
                r"A marker instead records that stacked quotient, for $ab\neq 0$, $a\neq b$, and $a\neq -b$, as $\dfrac{a+b}{ab}$.",
                False,
                r"""The correct simplification is $\dfrac{ab}{a+b}$, the reciprocal of the claimed expression. Confusing a fraction with its reciprocal is the trap.""",
            ),
            (
                r"Whenever $a\neq \pm b$ and $ab\neq 0$, the difference $\dfrac{1}{a^2}-\dfrac{1}{b^2}$ is identified with $\dfrac{b^2-a^2}{a^2b^2}$.",
                True,
                r"""$$\frac{1}{a^2}-\frac{1}{b^2}=\frac{b^2-a^2}{a^2b^2}.$$""",
            ),
            (
                r"Provided $a\neq b$ and $ab\neq 0$, the first-order difference $\dfrac{1}{a}-\dfrac{1}{b}$ equals $\dfrac{b-a}{ab}$.",
                True,
                r"""$$\frac{1}{a}-\frac{1}{b}=\frac{b-a}{ab}.$$""",
            ),
            (
                r"On the set $xy\neq 0$, $x\neq y$, someone writes $\dfrac{\dfrac{1}{x}-\dfrac{1}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}=\dfrac{x-y}{x+y}$.",
                False,
                r"""$$\frac{\dfrac{1}{x}-\dfrac{1}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}=\frac{\dfrac{y-x}{xy}}{\dfrac{y+x}{xy}}=\frac{y-x}{y+x}=\frac{-(x-y)}{x+y}.$$
The claimed ratio has the opposite sign in the numerator.""",
            ),
        ],
        overview=r"Dividing a difference of unit fractions by a difference of reciprocal squares cancels $b-a$ and leaves $ab/(a+b)$. The reciprocal of that result, or a sign slip on $y-x$, are the standard false simplifications.",
    ),
    task(
        title="Nested $x$ in the denominator twice",
        subsection="2.2",
        difficulty="4/5",
        context=r"A continued-fraction card writes $x+1/x$ inside a further reciprocal. Each claim excludes the inner zeros of its own nest.",
        items=[
            (
                r"Clearing $x+\dfrac{1}{x}$ first, the nest $\dfrac{1}{x+\dfrac{1}{x+\dfrac{1}{x}}}$ for $x\neq 0$ is said to equal $\dfrac{x^2+1}{x(x^2+2)}$.",
                True,
                r"""Innermost:
$$x+\frac{1}{x}=\frac{x^2+1}{x},\qquad \frac{1}{x+\dfrac{1}{x}}=\frac{x}{x^2+1}.$$
Adding the outer $x$ gives
$$x+\frac{x}{x^2+1}=\frac{x(x^2+1)+x}{x^2+1}=\frac{x^3+2x}{x^2+1}=\frac{x(x^2+2)}{x^2+1}.$$
The reciprocal is $\dfrac{x^2+1}{x(x^2+2)}$.""",
            ),
            (
                r"Someone instead writes that nest, still for $x\neq 0$, as $\dfrac{x^2+1}{x^2+2}$.",
                False,
                r"""The simplified form is $\dfrac{x^2+1}{x(x^2+2)}$. Omitting the factor $x$ in the denominator is the error.""",
            ),
            (
                r"Whenever $x\neq 0$, the inner sum $x+\dfrac{1}{x}$ is identified with $\dfrac{x^2+1}{x}$.",
                True,
                r"""$$x+\frac{1}{x}=\frac{x^2}{x}+\frac{1}{x}=\frac{x^2+1}{x}.$$""",
            ),
            (
                r"Provided $x\neq -1$, the shorter nest $\dfrac{1}{x+\dfrac{1}{x+1}}$ equals $\dfrac{x+1}{x(x+1)+1}$.",
                True,
                r"""$$x+\frac{1}{x+1}=\frac{x(x+1)+1}{x+1},\qquad \frac{1}{x+\dfrac{1}{x+1}}=\frac{x+1}{x(x+1)+1}.$$""",
            ),
            (
                r"On the punctured line $x\neq 0$, a candidate claims $\bigl(x+\dfrac{1}{x}\bigr)^2=x^2+\dfrac{1}{x^2}$.",
                False,
                r"""$$\left(x+\frac{1}{x}\right)^2=x^2+2+\frac{1}{x^2}.$$
The cross term $2\cdot x\cdot\dfrac{1}{x}=2$ is missing from the claim.""",
            ),
        ],
        overview=r"A continued nest $1/(x+1/(x+1/x))$ is cleared from the inside and simplifies to $(x^2+1)/(x(x^2+2))$. Dropping the leftover factor $x$, or omitting the $2$ when squaring $x+1/x$, both fail.",
    ),
    task(
        title="Three rewritten pieces and a leftover ratio",
        subsection="2.2",
        difficulty="4/5",
        context=r"An exam line first cancels two difference-of-squares quotients and then adds a third fraction over $x+1$. Each claim has its own excluded roots.",
        items=[
            (
                r"Combining $\dfrac{x^2-4}{x-2}-\dfrac{x^2-1}{x-1}+\dfrac{4}{x+1}$ for $x\notin\{-1,1,2\}$ is said to equal $\dfrac{x+5}{x+1}$.",
                True,
                r"""Cancel the first two quotients:
$$\frac{x^2-4}{x-2}=x+2,\qquad \frac{x^2-1}{x-1}=x+1.$$
The combination becomes
$$(x+2)-(x+1)+\frac{4}{x+1}=1+\frac{4}{x+1}=\frac{x+1+4}{x+1}=\frac{x+5}{x+1}.$$""",
            ),
            (
                r"A script records that same three-term combination, excluding $x\in\{-1,1,2\}$, as $\dfrac{x+1}{x+5}$.",
                False,
                r"""The algebra produces $\dfrac{x+5}{x+1}$. The claimed form is the reciprocal of the correct result.""",
            ),
            (
                r"Whenever $x\neq 2$, the first piece $\dfrac{x^2-4}{x-2}$ is identified with $x+2$.",
                True,
                r"""$$\frac{(x-2)(x+2)}{x-2}=x+2.$$""",
            ),
            (
                r"Provided $x\neq 1$, the second piece $\dfrac{x^2-1}{x-1}$ equals $x+1$.",
                True,
                r"""$$\frac{(x-1)(x+1)}{x-1}=x+1.$$""",
            ),
            (
                r"With $x\neq -2$, someone writes $\dfrac{x^2+6x+9}{x+3}-\dfrac{x^2-9}{x+3}=0$.",
                False,
                r"""Share the denominator $x+3$:
$$\frac{(x+3)^2-(x^2-9)}{x+3}=\frac{x^2+6x+9-x^2+9}{x+3}=\frac{6x+18}{x+3}=\frac{6(x+3)}{x+3}=6.$$
The difference is the constant $6$, not $0$.""",
            ),
        ],
        overview=r"Cancel each difference of squares first, then add the leftover unit-over-linear term. The three-term combination collapses to $(x+5)/(x+1)$. A sibling pair of quotients over $x+3$ collapses to $6$, not to $0$.",
    ),
    task(
        title="A product that collapses to one",
        subsection="2.2",
        difficulty="4/5",
        context=r"A product of a difference of two rational terms with a difference of squares is claimed to be $1$. Companion lines test nearby cancellations in the same letters.",
        items=[
            (
                r"Multiplying $\Bigl(\dfrac{x}{x-2}-\dfrac{x}{x+2}\Bigr)\cdot\dfrac{x^2-4}{4x}$ for $x\neq 0$ and $x\neq \pm 2$ is said to leave $1$.",
                True,
                r"""Factor $x$ from the difference:
$$\frac{x}{x-2}-\frac{x}{x+2}=x\cdot\frac{(x+2)-(x-2)}{x^2-4}=x\cdot\frac{4}{x^2-4}=\frac{4x}{x^2-4}.$$
Then
$$\frac{4x}{x^2-4}\cdot\frac{x^2-4}{4x}=1.$$""",
            ),
            (
                r"A candidate records that same product, still excluding $x\in\{-2,0,2\}$, as $4$.",
                False,
                r"""The two factors are reciprocals of each other (up to the matching $4x$), so the product is $1$, not $4$. The $4$ appears in an intermediate numerator and then cancels.""",
            ),
            (
                r"Whenever $x\neq \pm 2$, the difference $\dfrac{x}{x-2}-\dfrac{x}{x+2}$ is identified with $\dfrac{4x}{x^2-4}$.",
                True,
                r"""As above,
$$x\left(\frac{1}{x-2}-\frac{1}{x+2}\right)=x\cdot\frac{4}{x^2-4}=\frac{4x}{x^2-4}.$$""",
            ),
            (
                r"Provided $x\neq \pm 2$, reducing $\dfrac{4x}{x^2-4}\cdot\dfrac{x-2}{2}$ is claimed to leave $\dfrac{2x}{x+2}$.",
                True,
                r"""$$\frac{4x}{(x-2)(x+2)}\cdot\frac{x-2}{2}=\frac{4x}{2(x+2)}=\frac{2x}{x+2}.$$""",
            ),
            (
                r"On the domain $x\neq \pm 2$, someone writes $\dfrac{x+2}{x-2}+\dfrac{x-2}{x+2}=\dfrac{2x}{x^2-4}$.",
                False,
                r"""$$\frac{(x+2)^2+(x-2)^2}{x^2-4}=\frac{2x^2+8}{x^2-4}=\frac{2(x^2+4)}{x^2-4}.$$
The claimed numerator $2x$ belongs to a different combination.""",
            ),
        ],
        overview=r"The difference $x/(x-2)-x/(x+2)$ simplifies to $4x/(x^2-4)$, which is exactly reciprocal to $(x^2-4)/(4x)$. Their product is $1$. Adding a ratio to its reciprocal produces $2(x^2+4)/(x^2-4)$, not a linear numerator.",
    ),
    task(
        title="A constant disguised as a quotient of squares",
        subsection="2.2",
        difficulty="4/5",
        context=r"Differences of expanded squares are divided by a linear letter and claimed to be constant. Each identity names the letter that must stay nonzero.",
        items=[
            (
                r"Dividing $(x+3)^2-(x-3)^2$ by $x\neq 0$ is said to leave the constant $12$.",
                True,
                r"""Use $A^2-B^2=(A-B)(A+B)$ with $A=x+3$ and $B=x-3$:
$$(A-B)(A+B)=6\cdot(2x)=12x.$$
Then $\dfrac{12x}{x}=12$ for $x\neq 0$.""",
            ),
            (
                r"A marker instead treats $\dfrac{(x+3)^2-(x-3)^2}{x}$ for $x\neq 0$ as the constant $6$.",
                False,
                r"""The product $(A-B)(A+B)=6\cdot 2x=12x$, so the quotient is $12$, not $6$. The $6$ is only $A-B$.""",
            ),
            (
                r"Whenever $x\neq 0$, the sibling quotient $\dfrac{(x+2)^2-(x-2)^2}{x}$ is identified with $8$.",
                True,
                r"""Here $A-B=4$ and $A+B=2x$, so the numerator is $8x$ and the quotient is $8$.""",
            ),
            (
                r"Provided $x\neq 0$, the halved form $\dfrac{(x+2)^2-(x-2)^2}{2x}$ equals $4$.",
                True,
                r"""The numerator is $8x$, so dividing by $2x$ leaves $4$.""",
            ),
            (
                r"With $a\neq b$, someone writes $\dfrac{a}{a-b}+\dfrac{b}{b-a}=0$.",
                False,
                r"""Rewrite the second summand:
$$\frac{b}{b-a}=-\frac{b}{a-b},$$
hence
$$\frac{a}{a-b}+\frac{b}{b-a}=\frac{a-b}{a-b}=1.$$
The two terms add to $1$, not to $0$.""",
            ),
        ],
        overview=r"The difference of two expanded squares is a constant times $x$, so the quotient by $x$ is constant. Opposite linear denominators $a-b$ and $b-a$ make $\frac{a}{a-b}+\frac{b}{b-a}=1$, not $0$.",
    ),
    task(
        title="Same denominator, two different numerators",
        subsection="2.2",
        difficulty="4/5",
        context=r"Several pairs of fractions share a single linear denominator and are subtracted or added. Each claim excludes the root of that denominator.",
        items=[
            (
                r"Collapsing $\dfrac{2x^2+3x}{2x+3}$ whenever $2x+3\neq 0$ is claimed to leave $x$.",
                True,
                r"""Factor $x$ from the numerator:
$$\frac{x(2x+3)}{2x+3}=x$$
for $2x\neq -3$.""",
            ),
            (
                r"Reducing $\dfrac{x^2-4x}{x-4}$ whenever $x\neq 4$ is said to leave $x-4$.",
                False,
                r"""$$\frac{x(x-4)}{x-4}=x$$
for $x\neq 4$. The claimed remainder $x-4$ is the cancelled factor.""",
            ),
            (
                r"Whenever $x\neq -1$, the sum $\dfrac{x}{x+1}+\dfrac{1}{x+1}$ is identified with $1$.",
                True,
                r"""$$\frac{x+1}{x+1}=1.$$""",
            ),
            (
                r"Provided $x\neq y$, the difference $\dfrac{x}{x-y}-\dfrac{y}{x-y}$ equals $1$.",
                True,
                r"""$$\frac{x-y}{x-y}=1.$$""",
            ),
            (
                r"On the set $x\neq \pm 2$, a candidate writes $\dfrac{2x^2-8}{x^2-4}=x$.",
                False,
                r"""$$\frac{2(x^2-4)}{x^2-4}=2$$
for $x\neq \pm 2$. The quotient is the constant $2$, not the letter $x$.""",
            ),
        ],
        overview=r"When two fractions share a denominator, add or subtract the numerators and then cancel. A linear factor in both ends of $\frac{x(2x+3)}{2x+3}$ leaves $x$; it never leaves the cancelled factor itself.",
    ),
    task(
        title="Quadratic over quadratic after factoring",
        subsection="2.2",
        difficulty="4/5",
        context=r"A factoring sheet cancels one linear factor from a ratio of quadratics. Each claim names both the cancelled root and any root that remains in the denominator.",
        items=[
            (
                r"Reducing $\dfrac{x^2-25}{x^2-5x}$ for $x\neq 0$ and $x\neq 5$ is said to leave $\dfrac{x+5}{x}$.",
                True,
                r"""$$\frac{(x-5)(x+5)}{x(x-5)}=\frac{x+5}{x}.$$""",
            ),
            (
                r"A notebook records $\dfrac{x^2-4}{x^2-x-2}=\dfrac{x-2}{x+1}$ whenever $x\neq 2$ and $x\neq -1$.",
                False,
                r"""$$x^2-x-2=(x-2)(x+1),\qquad \frac{(x-2)(x+2)}{(x-2)(x+1)}=\frac{x+2}{x+1}.$$
The surviving numerator is $x+2$, not $x-2$.""",
            ),
            (
                r"Whenever $x\neq \pm 3$, the quotient $\dfrac{x^2-5x+6}{x^2-9}$ is identified with $\dfrac{x-2}{x+3}$.",
                True,
                r"""$$x^2-5x+6=(x-2)(x-3),\qquad x^2-9=(x-3)(x+3),$$
so
$$\frac{(x-2)(x-3)}{(x-3)(x+3)}=\frac{x-2}{x+3}$$
for $x\neq \pm 3$. (The cancelled root $x=3$ is already among those exclusions.)""",
            ),
            (
                r"Provided $x\neq \pm 2$, reducing $\dfrac{3x-6}{x^2-4}$ is claimed to leave $\dfrac{3}{x+2}$.",
                True,
                r"""$$\frac{3(x-2)}{(x-2)(x+2)}=\frac{3}{x+2}.$$""",
            ),
            (
                r"With $x\neq 1$, someone writes $\dfrac{x^3-1}{x-1}=x^2-x+1$.",
                False,
                r"""The difference of cubes is
$$x^3-1=(x-1)(x^2+x+1),\qquad \frac{x^3-1}{x-1}=x^2+x+1.$$
The middle term of the quadratic factor is $+x$, not $-x$.""",
            ),
        ],
        overview=r"Factor both quadratics completely, cancel one shared linear factor, and keep the leftover linear ratio. Difference of cubes produces $x^2+x+1$, not $x^2-x+1$.",
    ),
    task(
        title="Sum of squares is not a square of a sum",
        subsection="2.2",
        difficulty="4/5",
        context=r"A two-letter card compares $\dfrac{x^2+y^2}{x+y}$ with $x+y$ and with nearby genuine cancellations. Each claim states when $x\pm y$ may vanish.",
        items=[
            (
                r"Treating $\dfrac{x^2+y^2}{x+y}$ as identical to $x+y$ whenever $x+y\neq 0$ is claimed to be legitimate.",
                False,
                r"""$$\frac{x^2+y^2}{x+y}=\frac{(x+y)^2-2xy}{x+y}=x+y-\frac{2xy}{x+y}.$$
The extra term vanishes only if $xy=0$, not identically.""",
            ),
            (
                r"Cancelling a genuine square, $\dfrac{x^2+2xy+y^2}{x+y}$ equals $x+y$ for $x\neq -y$.",
                True,
                r"""$$\frac{(x+y)^2}{x+y}=x+y.$$""",
            ),
            (
                r"Whenever $x\neq y$, the companion $\dfrac{x^2-2xy+y^2}{x-y}$ is identified with $x-y$.",
                True,
                r"""$$\frac{(x-y)^2}{x-y}=x-y.$$""",
            ),
            (
                r"Provided $x\neq -y$ and $x\neq y$, the quotient $\dfrac{x^2-y^2}{(x+y)^2}$ equals $\dfrac{x+y}{x-y}$.",
                False,
                r"""$$\frac{(x-y)(x+y)}{(x+y)^2}=\frac{x-y}{x+y}.$$
The claimed form is the reciprocal of the correct simplification.""",
            ),
            (
                r"On the domain $x\neq -y$, someone writes $\dfrac{x^2+4}{x+2}=x+2$.",
                False,
                r"""$$\frac{x^2+4}{x+2}=\frac{(x+2)^2-4x}{x+2}=x+2-\frac{4x}{x+2}.$$
There is no $4x$ cross term in $x^2+4$, so the quotient is not $x+2$.""",
            ),
        ],
        overview=r"Only a genuine expanded square $(x\pm y)^2$ cancels to $x\pm y$. A sum of squares leaves a leftover cross-term correction $-2xy/(x+y)$.",
    ),
    task(
        title="The ratio of $a/b$ minus $b/a$",
        subsection="2.2",
        difficulty="5/5",
        context=r"A two-letter identity sheet stacks $\dfrac{a}{b}\pm\dfrac{b}{a}$ in several ways. Each claim states which of $a$, $b$, and $a^2+b^2$ must stay nonzero.",
        items=[
            (
                r"Simplifying $\dfrac{\dfrac{a}{b}-\dfrac{b}{a}}{\dfrac{a}{b}+\dfrac{b}{a}}$ for $ab\neq 0$ is said to equal $\dfrac{a^2-b^2}{a^2+b^2}$.",
                True,
                r"""The numerator is $\dfrac{a^2-b^2}{ab}$ and the denominator is $\dfrac{a^2+b^2}{ab}$, so the stack is
$$\frac{a^2-b^2}{ab}\cdot\frac{ab}{a^2+b^2}=\frac{a^2-b^2}{a^2+b^2}.$$""",
            ),
            (
                r"A candidate records that same stack, still for $ab\neq 0$, as $\dfrac{a^2+b^2}{a^2-b^2}$.",
                False,
                r"""The algebra produces $\dfrac{a^2-b^2}{a^2+b^2}$. The claimed form is the reciprocal (and would also require $a\neq \pm b$).""",
            ),
            (
                r"Whenever $ab\neq 0$, the difference $\dfrac{a}{b}-\dfrac{b}{a}$ is identified with $\dfrac{a^2-b^2}{ab}$.",
                True,
                r"""$$\frac{a}{b}-\frac{b}{a}=\frac{a^2-b^2}{ab}.$$""",
            ),
            (
                r"Provided $ab\neq 0$, the sum $\dfrac{a}{b}+\dfrac{b}{a}$ equals $\dfrac{a^2+b^2}{ab}$.",
                True,
                r"""$$\frac{a}{b}+\frac{b}{a}=\frac{a^2+b^2}{ab}.$$""",
            ),
            (
                r"With $xy\neq 0$ and $3y+2x\neq 0$, someone writes $\dfrac{\dfrac{3}{x}-\dfrac{2}{y}}{\dfrac{3}{x}+\dfrac{2}{y}}=\dfrac{3x-2y}{3x+2y}$.",
                False,
                r"""$$\frac{\dfrac{3}{x}-\dfrac{2}{y}}{\dfrac{3}{x}+\dfrac{2}{y}}=\frac{\dfrac{3y-2x}{xy}}{\dfrac{3y+2x}{xy}}=\frac{3y-2x}{3y+2x}.$$
The letters in each numerator term follow the opposite denominator, so the correct numerator is $3y-2x$, not $3x-2y$.""",
            ),
        ],
        overview=r"Dividing $a/b-b/a$ by $a/b+b/a$ cancels the shared $ab$ and leaves $(a^2-b^2)/(a^2+b^2)$. Reciprocating that result, or swapping which letter sits with which coefficient, both fail.",
    ),
    task(
        title="Squared negative factors in a monomial quotient",
        subsection="2.2",
        difficulty="5/5",
        context=r"A monomial sheet squares factors such as $-2y$ and compares the result with unsigned cousins. Each claim states the letter that must stay nonzero.",
        items=[
            (
                r"Evaluating $\dfrac{4\cdot(2y)}{(-2y)^2}$ for $y\neq 0$ is said to leave $\dfrac{2}{y}$.",
                True,
                r"""$$(-2y)^2=4y^2,\qquad \frac{8y}{4y^2}=\frac{2}{y}.$$""",
            ),
            (
                r"Someone treats $\dfrac{4\cdot(2y)}{(-2y)^2}$ for $y\neq 0$ as $-\dfrac{2}{y}$.",
                False,
                r"""The square $(-2y)^2=4y^2$ is positive, so the quotient is $\dfrac{2}{y}$, not $-\dfrac{2}{y}$. A minus would survive only if the square were omitted from that factor.""",
            ),
            (
                r"Whenever $y\neq 0$, the unsigned cousin $\dfrac{4}{(-2y)^2}$ is identified with $\dfrac{1}{y^2}$.",
                True,
                r"""$$\frac{4}{4y^2}=\frac{1}{y^2}.$$""",
            ),
            (
                r"Provided $x\neq 1$, reducing $\dfrac{4}{2x-2}$ is claimed to leave $\dfrac{2}{x-1}$.",
                True,
                r"""$$\frac{4}{2(x-1)}=\frac{2}{x-1}$$
for $x\neq 1$.""",
            ),
            (
                r"On the punctured line $y\neq 0$, a marker writes $\dfrac{2\cdot(2y)}{(-2y)^2}=\dfrac{2}{y}$.",
                False,
                r"""$$\frac{4y}{4y^2}=\frac{1}{y}.$$
The claimed $\dfrac{2}{y}$ would require an extra factor $2$ in the numerator, as in $4\cdot(2y)$ rather than $2\cdot(2y)$.""",
            ),
        ],
        overview=r"Squaring a negative monomial removes the minus sign. Coefficients in the numerator must be counted exactly: $8y/(4y^2)=2/y$ while $4y/(4y^2)=1/y$.",
    ),
    task(
        title="Harmonic-type reciprocals of a sum",
        subsection="2.2",
        difficulty="5/5",
        context=r"Several identities rewrite the reciprocal of a sum of unit fractions, the algebraic core of a harmonic mean, without any applied story. Each claim names the letters that must stay nonzero.",
        items=[
            (
                r"Taking twice the reciprocal of $\dfrac{1}{a}+\dfrac{1}{b}$ for $ab\neq 0$ and $a+b\neq 0$ is said to produce $\dfrac{2ab}{a+b}$.",
                True,
                r"""$$\frac{1}{a}+\frac{1}{b}=\frac{a+b}{ab},\qquad \frac{2}{\dfrac{1}{a}+\dfrac{1}{b}}=\frac{2ab}{a+b}.$$""",
            ),
            (
                r"A candidate identifies that same twice-reciprocal, for $ab\neq 0$ and $a+b\neq 0$, with $\dfrac{a+b}{2}$.",
                False,
                r"""The expression $\dfrac{2ab}{a+b}$ is not the arithmetic mean $\dfrac{a+b}{2}$. They agree only in special cases (for instance $a=b$), not identically.""",
            ),
            (
                r"Whenever $abc\neq 0$ and $ab+bc+ca\neq 0$, three times the reciprocal of $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}$ equals $\dfrac{3abc}{ab+bc+ca}$.",
                True,
                r"""$$\frac{1}{a}+\frac{1}{b}+\frac{1}{c}=\frac{ab+bc+ca}{abc},$$
so
$$\frac{3}{\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}}=\frac{3abc}{ab+bc+ca}.$$""",
            ),
            (
                r"Provided $abc\neq 0$ and $bc+ac+ab\neq 0$, inverting $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}$ is claimed to leave $\dfrac{abc}{ab+bc+ca}$.",
                True,
                r"""$$\frac{1}{a}+\frac{1}{b}+\frac{1}{c}=\frac{bc+ac+ab}{abc},$$
so the reciprocal is $\dfrac{abc}{ab+bc+ca}$.""",
            ),
            (
                r"With $ab\neq 0$ and $a\neq -b$, someone writes $\dfrac{2ab}{a+b}=\dfrac{2}{a}+\dfrac{2}{b}$.",
                False,
                r"""Twice the sum of unit fractions is
$$\frac{2}{a}+\frac{2}{b}=\frac{2(a+b)}{ab}.$$
The harmonic-type quantity $\dfrac{2ab}{a+b}$ is the reciprocal of $\dfrac{a+b}{2ab}$, not the sum $\dfrac{2}{a}+\dfrac{2}{b}$.""",
            ),
        ],
        overview=r"The reciprocal of a sum of unit fractions is the product of the letters over the elementary symmetric sum. Doubling it gives $2ab/(a+b)$, which is not the arithmetic mean $(a+b)/2$, and is not the sum $2/a+2/b$.",
    ),
    task(
        title="Three letters in a single combined fraction",
        subsection="2.2",
        difficulty="5/5",
        context=r"The sum $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}$ and close cousins are combined over $abc$. Each claim lists which product of letters must stay nonzero.",
        items=[
            (
                r"Combining $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}$ for $abc\neq 0$ is said to equal $\dfrac{bc+ac+ab}{abc}$.",
                True,
                r"""The common denominator is $abc$:
$$\frac{bc}{abc}+\frac{ac}{abc}+\frac{ab}{abc}=\frac{bc+ac+ab}{abc}.$$""",
            ),
            (
                r"A script writes $\dfrac{1}{a}+\dfrac{1}{b}+\dfrac{1}{c}=\dfrac{a+b+c}{abc}$ whenever $abc\neq 0$.",
                False,
                r"""Each numerator after clearing is the product of the other two letters, not the leftover single letter. The correct numerator is $bc+ac+ab$, not $a+b+c$.""",
            ),
            (
                r"Whenever $ab\neq 0$, the two-letter sum $\dfrac{1}{2a}+\dfrac{1}{2b}$ is identified with $\dfrac{a+b}{2ab}$.",
                True,
                r"""$$\frac{1}{2a}+\frac{1}{2b}=\frac{b+a}{2ab}=\frac{a+b}{2ab}.$$""",
            ),
            (
                r"Provided $abc\neq 0$, the product $\dfrac{a}{b}\cdot\dfrac{b}{c}\cdot\dfrac{c}{a}$ equals $1$.",
                True,
                r"""Every letter appears once in a numerator and once in a denominator, so the product is $1$.""",
            ),
            (
                r"On the set $a\neq \pm b$, someone writes $\dfrac{2a-2b}{a^2-b^2}=\dfrac{2}{a-b}$.",
                False,
                r"""$$\frac{2(a-b)}{(a-b)(a+b)}=\frac{2}{a+b}$$
for $a\neq \pm b$. The surviving denominator is the sum $a+b$, not the cancelled difference.""",
            ),
        ],
        overview=r"Three unit fractions combine over $abc$ with numerator $bc+ac+ab$. Replacing that numerator by $a+b+c$ is the usual error. A two-letter difference over a difference of squares cancels to $2/(a+b)$.",
    ),
    task(
        title="Factoring a quadratic denominator completely",
        subsection="2.2",
        difficulty="5/5",
        context=r"A cancelling drill factors $x^2-5x+6$ and nearby quadratics before reducing. Each claim names the roots that leave the original expression undefined.",
        items=[
            (
                r"Reducing $\dfrac{x-2}{x^2-5x+6}$ for $x\neq 2$ and $x\neq 3$ is said to leave $\dfrac{1}{x-3}$.",
                True,
                r"""$$x^2-5x+6=(x-2)(x-3),\qquad \frac{x-2}{(x-2)(x-3)}=\frac{1}{x-3}.$$""",
            ),
            (
                r"A marker instead records that reduced form, excluding $x\in\{2,3\}$, as $\dfrac{1}{x-2}$.",
                False,
                r"""The cancelled factor is $x-2$, so what remains in the denominator is $x-3$. The claimed $\dfrac{1}{x-2}$ keeps the cancelled factor and drops the surviving one.""",
            ),
            (
                r"Whenever $x\neq 2$ and $x\neq 3$, the reciprocal-looking split $\dfrac{1}{x-2}-\dfrac{1}{x-3}$ equals $\dfrac{-1}{(x-2)(x-3)}$.",
                True,
                r"""$$\frac{1}{x-2}-\frac{1}{x-3}=\frac{(x-3)-(x-2)}{(x-2)(x-3)}=\frac{-1}{(x-2)(x-3)}.$$""",
            ),
            (
                r"Provided $x\neq 0$ and $x\neq \pm 1$, the sum $\dfrac{1}{x(x+1)}+\dfrac{1}{x(x-1)}$ is identified with $\dfrac{2}{x^2-1}$.",
                True,
                r"""$$\frac{1}{x(x+1)}+\frac{1}{x(x-1)}=\frac{(x-1)+(x+1)}{x(x^2-1)}=\frac{2x}{x(x^2-1)}=\frac{2}{x^2-1}.$$""",
            ),
            (
                r"With $x\neq \pm 2$, someone writes $\dfrac{x^2+x-6}{x^2-4}=\dfrac{x-3}{x-2}$.",
                False,
                r"""$$x^2+x-6=(x+3)(x-2),\qquad x^2-4=(x-2)(x+2),$$
so
$$\frac{(x+3)(x-2)}{(x-2)(x+2)}=\frac{x+3}{x+2}.$$
Both the surviving numerator and the surviving denominator are the plus factors, not the minus factors.""",
            ),
        ],
        overview=r"Factor $x^2-5x+6=(x-2)(x-3)$ and cancel $x-2$ to leave $1/(x-3)$. Keeping the cancelled factor, or swapping plus and minus linear factors in a nearby quadratic ratio, both fail.",
    ),
    task(
        title="Opposite factors $a-b$ and $b-a$",
        subsection="2.2",
        difficulty="5/5",
        context=r"Pairs of fractions whose denominators differ by a global minus sign are added. Each claim states $a\neq b$ together with any further nonzero letters.",
        items=[
            (
                r"Adding $\dfrac{1}{a(a-b)}+\dfrac{1}{b(b-a)}$ for $ab\neq 0$ and $a\neq b$ is said to leave $-\dfrac{1}{ab}$.",
                True,
                r"""Rewrite $b-a=-(a-b)$:
$$\frac{1}{a(a-b)}+\frac{1}{b(b-a)}=\frac{1}{a(a-b)}-\frac{1}{b(a-b)}=\frac{b-a}{ab(a-b)}.$$
Since $b-a=-(a-b)$, this is
$$\frac{-(a-b)}{ab(a-b)}=-\frac{1}{ab}.$$""",
            ),
            (
                r"A candidate records that same sum, for $ab\neq 0$ and $a\neq b$, as $+\dfrac{1}{ab}$.",
                False,
                r"""The algebra produces $-\dfrac{1}{ab}$. The extra minus comes from $b-a=-(a-b)$ and is easy to drop.""",
            ),
            (
                r"Whenever $a\neq b$, the bare pair $\dfrac{1}{a-b}+\dfrac{1}{b-a}$ is identified with $0$.",
                True,
                r"""$$\frac{1}{b-a}=-\frac{1}{a-b},$$
so the two unit fractions cancel.""",
            ),
            (
                r"Provided $ab\neq 0$ and $a\neq -b$, the split $\dfrac{1}{a(a+b)}+\dfrac{1}{b(a+b)}$ equals $\dfrac{1}{ab}$.",
                True,
                r"""$$\frac{1}{a(a+b)}+\frac{1}{b(a+b)}=\frac{b+a}{ab(a+b)}=\frac{1}{ab}.$$""",
            ),
            (
                r"With $ab\neq 0$ and $a\neq b$, someone writes $\dfrac{ab}{a-b}+\dfrac{ab}{b-a}=ab$.",
                False,
                r"""The second term is the opposite of the first:
$$\frac{ab}{b-a}=-\frac{ab}{a-b},$$
so the sum is $0$, not $ab$.""",
            ),
        ],
        overview=r"The identity $b-a=-(a-b)$ turns $\frac{1}{a(a-b)}+\frac{1}{b(b-a)}$ into $-1/(ab)$, not $+1/(ab)$. Bare opposite unit fractions cancel to $0$; so do opposite copies of $ab/(a-b)$.",
    ),
    task(
        title="Least common denominator of three distinct linears",
        subsection="2.2",
        difficulty="5/5",
        context=r"Three unit fractions with distinct linear denominators are combined over a cubic LCD. Each claim lists the three excluded roots of its own denominators.",
        items=[
            (
                r"Combining $\dfrac{1}{x}+\dfrac{1}{x+1}+\dfrac{1}{x-1}$ for $x\notin\{-1,0,1\}$ is said to equal $\dfrac{3x^2-1}{x(x^2-1)}$.",
                True,
                r"""The LCD is $x(x^2-1)$:
$$\frac{(x^2-1)+x(x-1)+x(x+1)}{x(x^2-1)}=\frac{x^2-1+x^2-x+x^2+x}{x(x^2-1)}=\frac{3x^2-1}{x(x^2-1)}.$$""",
            ),
            (
                r"A notebook records that same sum, excluding $x\in\{-1,0,1\}$, as $\dfrac{3x^2}{x(x^2-1)}$.",
                False,
                r"""The numerator is $3x^2-1$, not $3x^2$. The constant $-1$ comes from the product $(x-1)(x+1)$ attached to the summand $1/x$.""",
            ),
            (
                r"Whenever $x\notin\{1,2,3\}$, the sum $\dfrac{1}{x-1}+\dfrac{1}{x-2}+\dfrac{1}{x-3}$ is identified with $\dfrac{3x^2-12x+11}{(x-1)(x-2)(x-3)}$.",
                True,
                r"""The numerator is
$$(x-2)(x-3)+(x-1)(x-3)+(x-1)(x-2).$$
Expanding gives
$$(x^2-5x+6)+(x^2-4x+3)+(x^2-3x+2)=3x^2-12x+11.$$""",
            ),
            (
                r"Provided $x\neq \pm 2$ and $x\neq 0$, adding $\dfrac{1}{x+2}+\dfrac{1}{x-2}+\dfrac{1}{x}$ equals $\dfrac{3x^2-4}{x(x^2-4)}$.",
                True,
                r"""$$\frac{(x^2-4)+x(x-2)+x(x+2)}{x(x^2-4)}=\frac{x^2-4+x^2-2x+x^2+2x}{x(x^2-4)}=\frac{3x^2-4}{x(x^2-4)}.$$""",
            ),
            (
                r"On the domain $x\neq \pm 1$ and $x\neq \pm 2$, someone writes $\dfrac{1}{x^2-4}-\dfrac{1}{x^2-1}=\dfrac{3}{x^2-4}$.",
                False,
                r"""The common denominator is $(x^2-4)(x^2-1)$:
$$\frac{(x^2-1)-(x^2-4)}{(x^2-4)(x^2-1)}=\frac{3}{(x^2-4)(x^2-1)}.$$
The factor $x^2-1$ remains in the denominator; the claim drops it.""",
            ),
        ],
        overview=r"The LCD of three distinct linear denominators is their product. Each numerator after clearing is the product of the other two factors; expanding produces a quadratic whose constant term is easy to drop.",
    ),
    task(
        title="A squared $a/b$ sum and a cubic ratio",
        subsection="2.2",
        difficulty="5/5",
        context=r"A mixed exam card places the square of $a/b+b/a$ next to a stacked ratio of unit fractions and a cubic cancellation. Each claim carries the domain of its own letters.",
        items=[
            (
                r"Squaring the sum $\dfrac{a}{b}+\dfrac{b}{a}$ for $ab\neq 0$ is said to equal $\dfrac{(a^2+b^2)^2}{a^2b^2}$.",
                True,
                r"""$$\frac{a}{b}+\frac{b}{a}=\frac{a^2+b^2}{ab},$$
so
$$\left(\frac{a}{b}+\frac{b}{a}\right)^2=\frac{(a^2+b^2)^2}{a^2b^2}.$$""",
            ),
            (
                r"Subtracting in the opposite order, $\dfrac{b}{a}-\dfrac{a}{b}$ for $ab\neq 0$ is claimed to equal $\dfrac{a^2-b^2}{ab}$.",
                False,
                r"""$$\frac{b}{a}-\frac{a}{b}=\frac{b^2-a^2}{ab}=-\frac{a^2-b^2}{ab}.$$
The claimed numerator $a^2-b^2$ matches $\dfrac{a}{b}-\dfrac{b}{a}$, not the swapped order.""",
            ),
            (
                r"Whenever $xy\neq 0$ and $x\neq -y$, the stacked ratio $\dfrac{\dfrac{2}{x}-\dfrac{3}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}$ equals $\dfrac{2y-3x}{x+y}$.",
                True,
                r"""The numerator is $\dfrac{2y-3x}{xy}$ and the denominator is $\dfrac{y+x}{xy}$, so the stack is
$$\frac{2y-3x}{xy}\cdot\frac{xy}{x+y}=\frac{2y-3x}{x+y}.$$""",
            ),
            (
                r"Provided $x\neq y$, the cubic ratio $\dfrac{x^3-y^3}{x^2+xy+y^2}$ equals $x-y$.",
                True,
                r"""Difference of cubes:
$$x^3-y^3=(x-y)(x^2+xy+y^2),$$
so the quotient is $x-y$ for $x\neq y$.""",
            ),
            (
                r"With $x\neq \pm 2$, someone writes $\dfrac{x+2}{x-2}-\dfrac{x-2}{x+2}=\dfrac{4x}{x^2-4}$.",
                False,
                r"""Let $A=x+2$ and $B=x-2$. Then $A-B=4$ and $A+B=2x$, so
$$\frac{A}{B}-\frac{B}{A}=\frac{A^2-B^2}{AB}=\frac{(A-B)(A+B)}{x^2-4}=\frac{8x}{x^2-4}.$$
The claimed numerator $4x$ is half of the correct numerator.""",
            ),
        ],
        overview=r"The square of $a/b+b/a$ is $(a^2+b^2)^2/(a^2b^2)$. Swapping the order of a difference flips the sign of $a^2-b^2$. A ratio minus its reciprocal over $x^2-4$ produces $8x/(x^2-4)$, not $4x/(x^2-4)$. Stacking $2/x-3/y$ over $1/x+1/y$ leaves $(2y-3x)/(x+y)$.",
    ),
    task(
        title="A tall compound fraction and a cubic cancellation",
        subsection="2.2",
        difficulty="5/5",
        context=r"A late problem set mixes a three-layer plus nest, a cubic-over-linear cancellation, and a stacked $(1\pm a/b)$ ratio. Each identity keeps its own excluded values.",
        items=[
            (
                r"Clearing $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{x}}}$ for $x\neq 0$, $x\neq -1$, and $x\neq -\dfrac{1}{2}$ is said to leave $\dfrac{3x+2}{2x+1}$.",
                True,
                r"""Innermost:
$$1+\frac{1}{x}=\frac{x+1}{x},\qquad \frac{1}{1+\dfrac{1}{x}}=\frac{x}{x+1}.$$
The next layer is
$$1+\frac{x}{x+1}=\frac{2x+1}{x+1},\qquad \frac{1}{1+\dfrac{1}{1+\dfrac{1}{x}}}=\frac{x+1}{2x+1}.$$
Adding the outer $1$ yields
$$1+\frac{x+1}{2x+1}=\frac{2x+1+x+1}{2x+1}=\frac{3x+2}{2x+1}.$$""",
            ),
            (
                r"A marker records that three-layer plus nest, for $x\neq 0$, $x\neq -1$, and $x\neq -\dfrac{1}{2}$, as $\dfrac{2x+1}{3x+2}$.",
                False,
                r"""The value is $\dfrac{3x+2}{2x+1}$. The claimed form is the reciprocal.""",
            ),
            (
                r"Whenever $x\neq 2$, the cubic cancellation $\dfrac{x^3-8}{x-2}$ is identified with $x^2+2x+4$.",
                True,
                r"""$$x^3-8=(x-2)(x^2+2x+4),$$
so the quotient is $x^2+2x+4$ for $x\neq 2$.""",
            ),
            (
                r"Provided $x\neq -2$, the sum-of-cubes cousin $\dfrac{x^3+8}{x+2}$ equals $x^2-2x+4$.",
                True,
                r"""$$x^3+8=(x+2)(x^2-2x+4).$$""",
            ),
            (
                r"With $b\neq 0$ and $a\neq b$, someone writes $\dfrac{1+\dfrac{a}{b}}{1-\dfrac{a}{b}}=\dfrac{b-a}{b+a}$.",
                False,
                r"""$$1+\frac{a}{b}=\frac{b+a}{b},\qquad 1-\frac{a}{b}=\frac{b-a}{b},$$
so the stack is $\dfrac{b+a}{b-a}$. The claimed ratio is the reciprocal of the correct simplification.""",
            ),
        ],
        overview=r"A three-layer plus nest of unit fractions simplifies to $(3x+2)/(2x+1)$. Difference and sum of cubes cancel to the usual quadratic factors. The stack $(1+a/b)/(1-a/b)$ is $(b+a)/(b-a)$, not the swapped ratio.",
    ),
    task(
        title="Exam mix of quartic cancellation and reciprocal squares",
        subsection="2.2",
        difficulty="5/5",
        context=r"A closing mixed card draws one quartic cancellation, one squared sum of unit fractions, one difference of reciprocal squares, and two factoring claims, each with its own domain. None of the five lines shares its opening or its excluded values.",
        items=[
            (
                r"Factoring $\dfrac{x^4-1}{x^2-1}$ whenever $x^2\neq 1$ is said to leave $x^2+1$.",
                True,
                r"""$$x^4-1=(x^2-1)(x^2+1),\qquad \frac{x^4-1}{x^2-1}=x^2+1$$
for $x\neq \pm 1$.""",
            ),
            (
                r"Squaring the sum $\dfrac{1}{x}+\dfrac{1}{y}$ for $xy\neq 0$ is claimed to leave $\dfrac{1}{x^2}+\dfrac{1}{y^2}$.",
                False,
                r"""$$\left(\frac{1}{x}+\frac{1}{y}\right)^2=\frac{1}{x^2}+\frac{2}{xy}+\frac{1}{y^2}.$$
The cross term $\dfrac{2}{xy}$ is missing from the claim.""",
            ),
            (
                r"Whenever $x\neq \pm 1$, the difference $\dfrac{1}{(x-1)^2}-\dfrac{1}{(x+1)^2}$ equals $\dfrac{4x}{(x^2-1)^2}$.",
                True,
                r"""Over the common denominator $(x-1)^2(x+1)^2=(x^2-1)^2$,
$$\frac{(x+1)^2-(x-1)^2}{(x^2-1)^2}=\frac{\bigl((x+1)-(x-1)\bigr)\bigl((x+1)+(x-1)\bigr)}{(x^2-1)^2}.$$
The first parenthesis is $2$ and the second is $2x$, so the numerator is $4x$.""",
            ),
            (
                r"Provided $x\neq y$ and $x\neq -y$, the quotient $\dfrac{(x-y)^2}{x^2-y^2}$ is identified with $\dfrac{x-y}{x+y}$.",
                True,
                r"""$$\frac{(x-y)^2}{(x-y)(x+y)}=\frac{x-y}{x+y}.$$""",
            ),
            (
                r"On the domain $x\neq 3$, someone writes $\dfrac{x^2-9}{x-3}=x-3$.",
                False,
                r"""$$\frac{(x-3)(x+3)}{x-3}=x+3$$
for $x\neq 3$. The claimed remainder $x-3$ is the cancelled factor.""",
            ),
        ],
        overview=r"The closing mix repeats no single layout: a cancellation $x^4-1$ over $x^2-1$, a squared sum of unit fractions, a difference of reciprocal squares, a squared linear factor over a difference of squares, and a difference-of-squares quotient that keeps the plus factor $x+3$.",
    ),
]
