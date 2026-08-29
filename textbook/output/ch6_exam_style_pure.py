"""Pure exam-style Ch6.5 bank (MATH 13.18 flavour).

Stem + independent True/False claims with domain conditions.
Varied inequality types — no life/story prompts.
"""

from __future__ import annotations

PURE_SPECS: list[dict] = [
    {
        "title": """Exam mix — linear comparisons""",
        "diff": """3/5""",
        "overview": """Five independent True/False claims on linear and absolute-value inequalities.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                """For all real $x$, it holds that $2x-5>x+1$ if and only if $x>6$.""",
                True,
                """Subtracting $x$ and adding $5$ yields the equivalent condition $x>6$.""",
            ),
            (
                r"""For all real $x$, it holds that $3(x-1)\le 2x+4$ if and only if $x\le 7$.""",
                True,
                r"""Expanding gives $3x-3\le 2x+4$, hence $x\le 7$.""",
            ),
            (
                r"""For all real $x$, it holds that $5-2x\ge 1$ if and only if $x\ge 2$.""",
                False,
                r"""From $5-2x\ge 1$ we obtain $-2x\ge -4$. Dividing by $-2$ reverses the inequality, so $x\le 2$. The claim asserts $x\ge 2$.""",
            ),
            (
                """For all real $x$, it holds that $|x-3|<2$ if and only if $1<x<5$.""",
                True,
                """$|x-3|<2$ means $-2<x-3<2$, which rearranges to $1<x<5$.""",
            ),
            (
                r"""For all real $x$, it holds that $|2x+1|\ge 3$ if and only if $x\le -2$ or $x\ge 1$.""",
                True,
                r"""$|2x+1|\ge 3$ splits into $2x+1\le -3$ or $2x+1\ge 3$, i.e. $x\le -2$ or $x\ge 1$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — quadratic products""",
        "diff": """3/5""",
        "overview": """Five claims on the sign of quadratic products and the corresponding solution sets.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The solution set of $(x-1)(x-4)>0$ is $(-\infty,1)\cup(4,\infty)$.""",
                True,
                """A product of two linear factors is positive outside the open interval between the roots.""",
            ),
            (
                r"""The solution set of $(x+2)(x-3)\le 0$ is $[-2,3]$.""",
                True,
                """The product is non-positive between the roots, and the non-strict inequality includes both endpoints.""",
            ),
            (
                r"""The solution set of $x^{2}-5x+6\ge 0$ is $[2,3]$.""",
                False,
                r"""Factoring gives $(x-2)(x-3)\ge 0$, so the solution is $(-\infty,2]\cup[3,\infty)$, not the interval $[2,3]$.""",
            ),
            (
                """The solution set of $(2-x)(x+1)>0$ is $(-1,2)$.""",
                True,
                """The roots are $-1$ and $2$; the product is positive on the open interval $(-1,2)$.""",
            ),
            (
                """The solution set of $x(x-5)<0$ is $(0,5)$.""",
                True,
                """$x(x-5)<0$ holds precisely when $x$ lies strictly between $0$ and $5$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — rational inequalities""",
        "diff": """4/5""",
        "overview": """Five claims on rational inequalities, including poles and sign charts.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq 2$, the inequality $\dfrac{x-1}{x-2}>0$ has solution set $(-\infty,1)\cup(2,\infty)$.""",
                True,
                r"""The critical points are $x=1$ and the excluded pole $x=2$. Sign analysis yields positivity on $(-\infty,1)\cup(2,\infty)$.""",
            ),
            (
                r"""For $x\neq -1$, the inequality $\dfrac{x}{x+1}\ge 0$ has solution set $(-\infty,-1)\cup[0,\infty)$.""",
                True,
                r"""The expression vanishes at $0$ and is undefined at $-1$; it is non-negative on $(-\infty,-1)\cup[0,\infty)$.""",
            ),
            (
                r"""For $x\neq 0$, the inequality $\dfrac{1}{x}<2$ has solution set $\bigl(\tfrac12,\infty\bigr)$.""",
                False,
                r"""Rewriting $\dfrac{1}{x}-2=\dfrac{1-2x}{x}<0$ and reading the sign chart gives $(-\infty,0)\cup\bigl(\tfrac12,\infty\bigr)$. The claimed set $\bigl(\tfrac12,\infty\bigr)$ is incomplete.""",
            ),
            (
                r"""For $x\neq 3$, the inequality $\dfrac{2x-1}{x-3}\le 0$ has solution set $\bigl[\tfrac12,3\bigr)$.""",
                True,
                r"""A zero at $\tfrac12$ and a pole at $3$ produce the half-open interval $\bigl[\tfrac12,3\bigr)$.""",
            ),
            (
                r"""For $x\neq 1$, the inequality $\dfrac{x+2}{x-1}>1$ has solution set $(-\infty,1)$.""",
                False,
                r"""Simplifying gives $\dfrac{x+2}{x-1}-1=\dfrac{3}{x-1}>0$, which holds exactly when $x>1$. The claimed set $(-\infty,1)$ is wrong.""",
            ),
        ],
    },
    {
        "title": """Exam mix — absolute values""",
        "diff": """4/5""",
        "overview": """Five claims involving absolute values, including distances and nested forms.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The solution set of $|x-2|+|x+1|\ge 5$ is $(-\infty,-2]\cup[3,\infty)$.""",
                True,
                r"""The sum of distances to $-1$ and $2$ equals $3$ on $[-1,2]$ and grows linearly outside that segment. It is at least $5$ precisely on $(-\infty,-2]\cup[3,\infty)$.""",
            ),
            (
                r"""The solution set of $|x-1|<|x+3|$ is $(-1,\infty)$.""",
                True,
                r"""Points closer to $1$ than to $-3$ lie strictly to the right of the midpoint $-1$, i.e. on $(-1,\infty)$.""",
            ),
            (
                r"""The solution set of $|2x-4|\le 6$ is $[-1,5]$.""",
                True,
                r"""$|2x-4|\le 6$ means $-6\le 2x-4\le 6$, hence $-1\le x\le 5$.""",
            ),
            (
                r"""The solution set of $\bigl||x|-2\bigr|\le 1$ is $[1,3]$.""",
                False,
                r"""$\bigl||x|-2\bigr|\le 1$ means $1\le |x|\le 3$, so $x\in[-3,-1]\cup[1,3]$. The claim omits the negative component.""",
            ),
            (
                """The solution set of $|x^{2}-1|<3$ is $(-2,2)$.""",
                True,
                r"""$|x^{2}-1|<3$ rearranges to $-2<x^{2}<4$. Since $x^{2}\ge 0$, this is equivalent to $x^{2}<4$, i.e. $x\in(-2,2)$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — higher-degree products""",
        "diff": """4/5""",
        "overview": """Five claims on cubic and higher-degree product inequalities.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The solution set of $(x-1)(x-2)(x-3)>0$ is $(1,2)\cup(3,\infty)$.""",
                True,
                r"""On a sign chart with roots $1$, $2$, and $3$, the product is positive on $(1,2)\cup(3,\infty)$.""",
            ),
            (
                r"""The solution set of $x^{2}(x-4)<0$ is $(-\infty,4)$.""",
                False,
                r"""For $x\neq 0$ one has $x^{2}>0$, so $x^{2}(x-4)<0$ holds exactly when $x<4$ and $x\neq 0$, i.e. on $(-\infty,0)\cup(0,4)$. The claimed set wrongly includes the root $x=0$.""",
            ),
            (
                r"""The solution set of $(x+1)^{2}(x-2)\ge 0$ is $\{-1\}\cup[2,\infty)$.""",
                True,
                r"""The squared factor is always non-negative and vanishes at $-1$. The product is therefore non-negative on $\{-1\}\cup[2,\infty)$.""",
            ),
            (
                r"""The solution set of $(3-x)(x+2)(x-5)\le 0$ is $(-\infty,-2]\cup[3,5]$.""",
                False,
                r"""Ordering the roots $-2$, $3$, and $5$ and reading the non-positive regions gives $[-2,3]\cup[5,\infty)$, not the claimed set.""",
            ),
            (
                r"""The solution set of $x(x-1)^{2}(x+3)>0$ is $(-\infty,-3)\cup(0,\infty)$.""",
                False,
                r"""The squared factor vanishes at $x=1$ and is otherwise positive, so the sign follows $x(x+3)$ except that $x=1$ is excluded from a strict inequality. The solution is $(-\infty,-3)\cup(0,1)\cup(1,\infty)$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — comparing fractions""",
        "diff": """4/5""",
        "overview": """Five claims obtained by comparing rational expressions.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\neq\pm 1$, the inequality $\dfrac{1}{x-1}>\dfrac{1}{x+1}$ has solution set $(-\infty,-1)\cup(1,\infty)$.""",
                True,
                r"""Bringing to one side yields $\dfrac{2}{x^{2}-1}>0$, which holds precisely when $|x|>1$.""",
            ),
            (
                r"""For $x\neq\pm 2$, the inequality $\dfrac{x+1}{x-2}\le\dfrac{x-1}{x+2}$ has solution set $(-\infty,-2)\cup[0,2)$.""",
                True,
                r"""Rearrangement produces a rational inequality whose solution (excluding the poles $\pm 2$) is $(-\infty,-2)\cup[0,2)$.""",
            ),
            (
                r"""For $x\neq 0$, the inequality $\dfrac{x+3}{x}<2$ has solution set $(0,3)$.""",
                False,
                r"""Rewriting $\dfrac{x+3}{x}-2=\dfrac{3-x}{x}<0$ and reading signs gives $(-\infty,0)\cup(3,\infty)$, not $(0,3)$.""",
            ),
            (
                r"""For $x>0$, the inequality $\dfrac{2}{x}+\dfrac{x}{2}\ge 2$ holds for every such $x$.""",
                True,
                r"""Expanding $\bigl(\sqrt{\dfrac{2}{x}}-\sqrt{\dfrac{x}{2}}\bigr)^{2}\ge 0$ yields $\dfrac{2}{x}+\dfrac{x}{2}\ge 2$ for every $x>0$.""",
            ),
            (
                r"""For $x\neq 4$, the inequality $\dfrac{x}{x-4}\ge 1$ has solution set $[4,\infty)$.""",
                False,
                r"""$\dfrac{x}{x-4}-1=\dfrac{4}{x-4}\ge 0$ holds for $x>4$. The pole $x=4$ is excluded, so the claimed closed ray $[4,\infty)$ is incorrect.""",
            ),
        ],
    },
    {
        "title": """Exam mix — square roots""",
        "diff": """4/5""",
        "overview": """Five claims on inequalities with square roots and their natural domains.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x\ge -1$, the inequality $\sqrt{x+1}<2$ has solution set $[-1,3)$.""",
                True,
                r"""Both sides are non-negative on the stated domain with right-hand side positive, so squaring is valid and gives $x+1<4$, i.e. $x<3$, intersected with $x\ge -1$.""",
            ),
            (
                r"""For $x\ge\tfrac12$, the inequality $\sqrt{2x-1}\ge 1$ has solution set $[1,\infty)$.""",
                True,
                r"""Squaring yields $2x-1\ge 1$, so $x\ge 1$, which already lies inside the domain $x\ge\tfrac12$.""",
            ),
            (
                r"""For $x\ge 0$, the inequality $\sqrt{x}>x-2$ has solution set $[0,4)$.""",
                True,
                """A case split at $x=2$ (where the right-hand side becomes non-negative) shows that the inequality holds exactly on $[0,4)$.""",
            ),
            (
                r"""For $x\ge 0$, the inequality $\sqrt{x}\le x-3$ has solution set $[9,\infty)$.""",
                False,
                r"""The right-hand side must be non-negative, so $x\ge 3$. Squaring then leads to $x\ge\dfrac{7+\sqrt{13}}{2}$. The claimed endpoint $9$ is larger than this threshold, so $[9,\infty)$ is a proper subset, not the full solution set.""",
            ),
            (
                r"""For $x\ge 0$, the inequality $\sqrt{x}\ge x$ has solution set $[0,1]$.""",
                True,
                r"""For $x\ge 0$, $\sqrt{x}\ge x$ is equivalent to $\sqrt{x}(1-\sqrt{x})\ge 0$, hence to $0\le\sqrt{x}\le 1$, i.e. $x\in[0,1]$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — exponential and log""",
        "diff": """3/5""",
        "overview": """Five claims on exponential and logarithmic inequalities.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The solution set of $2^{x}>4$ is $(2,\infty)$.""",
                True,
                """Since $4=2^{2}$ and the exponential base $2>1$ is increasing, $2^{x}>2^{2}$ means $x>2$.""",
            ),
            (
                r"""The solution set of $3^{x-1}\le 9$ is $(-\infty,3]$.""",
                True,
                r"""$9=3^{2}$, so $3^{x-1}\le 3^{2}$ gives $x-1\le 2$, i.e. $x\le 3$.""",
            ),
            (
                r"""For $x>0$, the inequality $\log_{10} x>1$ has solution set $(10,\infty)$.""",
                True,
                r"""The base-$10$ logarithm is increasing, so $\log_{10} x>1=\log_{10} 10$ means $x>10$.""",
            ),
            (
                r"""The solution set of $2^{x}\ge 8$ is $[2,\infty)$.""",
                False,
                r"""$8=2^{3}$, so $2^{x}\ge 2^{3}$ means $x\ge 3$. The claimed ray $[2,\infty)$ is too large.""",
            ),
            (
                r"""For $x>0$, the inequality $\log_{2} x<3$ has solution set $(0,8)$.""",
                True,
                r"""$\log_{2} x<3=\log_{2} 8$ with increasing $\log_{2}$ yields $0<x<8$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — quadratic discriminants""",
        "diff": """3/5""",
        "overview": """Five claims on quadratic inequalities decided by completing the square or the discriminant.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                """The inequality $x^{2}+2x+5>0$ holds for every real $x$.""",
                True,
                """Completing the square gives $(x+1)^{2}+4>0$ for every real $x$.""",
            ),
            (
                r"""The inequality $x^{2}-2x+2\le 0$ has no real solution.""",
                True,
                r"""Completing the square gives $(x-1)^{2}+1\le 0$, which is impossible over the reals.""",
            ),
            (
                """The solution set of $x^{2}-5x+4<0$ is $(1,4)$.""",
                True,
                """Factoring $(x-1)(x-4)<0$ yields the open interval between the roots.""",
            ),
            (
                r"""The solution set of $-x^{2}+4x-3\ge 0$ is $(-\infty,1]\cup[3,\infty)$.""",
                False,
                r"""Multiplying by $-1$ (and reversing) gives $x^{2}-4x+3\le 0$, i.e. $(x-1)(x-3)\le 0$, so $[1,3]$, not the claimed exterior.""",
            ),
            (
                """The inequality $x^{2}+1>2x$ holds for every real $x$ except $x=1$.""",
                True,
                r"""Rearrangement gives $(x-1)^{2}>0$, which holds for every real $x\neq 1$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — parameter $a$""",
        "diff": """4/5""",
        "overview": """Five claims about how a real parameter affects the solution set of an inequality.""",
        "context": """Let $a$ be a real parameter. Which of the following statements is/are correct?""",
        "items": [
            (
                """The quadratic $x^{2}-ax+1>0$ holds for every real $x$ if and only if $|a|<2$.""",
                True,
                """The leading coefficient is positive, so the quadratic is always positive precisely when its discriminant $a^{2}-4$ is negative, i.e. $|a|<2$.""",
            ),
            (
                r"""The inequality $x^{2}+a^{2}\ge 2ax$ holds for every real $x$ and every real $a$.""",
                True,
                r"""Rearrangement gives $(x-a)^{2}\ge 0$, which is true for all real $x$ and $a$.""",
            ),
            (
                r"""For $a>0$, the inequality $ax+1>0$ has solution set $x>-\dfrac{1}{a}$.""",
                True,
                r"""Dividing by the positive number $a$ preserves the inequality and yields $x>-\dfrac{1}{a}$.""",
            ),
            (
                r"""For $a<0$, the inequality $ax+1>0$ has solution set $x>-\dfrac{1}{a}$.""",
                False,
                r"""Dividing by a negative $a$ reverses the inequality, so the solution is $x<-\dfrac{1}{a}$, not the claimed ray.""",
            ),
            (
                r"""The inequality $|x|\le a$ has a nonempty solution set if and only if $a\ge 0$.""",
                True,
                r"""If $a<0$ then $|x|\le a$ is impossible. If $a\ge 0$ the solution is the closed interval $[-a,a]$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — two variables""",
        "diff": """3/5""",
        "overview": """Five claims involving inequalities in two real variables.""",
        "context": """Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For $x,y\neq 0$, it holds that $\dfrac{x}{y}+\dfrac{y}{x}\ge 2$ whenever $xy>0$.""",
                True,
                r"""When $xy>0$ the two terms have the same sign. Writing $\dfrac{x}{y}+\dfrac{y}{x}-2=\dfrac{(x-y)^{2}}{xy}$ shows the sum is at least $2$.""",
            ),
            (
                r"""For all real $x,y$, it holds that $x^{2}+y^{2}\ge 2xy$.""",
                True,
                r"""The identity $x^{2}+y^{2}-2xy=(x-y)^{2}\ge 0$ proves the claim.""",
            ),
            (
                r"""For all real $x,y$, it holds that $|x+y|\le |x|+|y|$.""",
                True,
                r"""This is the triangle inequality for the absolute value on $\mathbb{R}$.""",
            ),
            (
                r"""For all real $x,y$ with $y\neq 0$ and $x\neq -y$, it holds that $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{x+y}$.""",
                False,
                r"""The correct common-denominator sum is $\dfrac{2}{x}+\dfrac{3}{y}=\dfrac{2y+3x}{xy}$. The claimed right-hand side uses denominator $x+y$ instead of $xy$.""",
            ),
            (
                r"""For all real $x,y$, it holds that $|x|-|y|\le |x-y|$.""",
                True,
                r"""This is the reverse triangle inequality: $\bigl||x|-|y|\bigr|\le |x-y|$, which implies $|x|-|y|\le |x-y|$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — positive reals""",
        "diff": """3/5""",
        "overview": """Five claims restricted to positive real numbers.""",
        "context": """Let $x$ and $y$ be positive real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all $x>0$, it holds that $x+\dfrac{1}{x}\ge 2$.""",
                True,
                r"""From $\bigl(\sqrt{x}-\dfrac{1}{\sqrt{x}}\bigr)^{2}\ge 0$ one obtains $x+\dfrac{1}{x}\ge 2$.""",
            ),
            (
                r"""For all $x,y>0$, it holds that $\dfrac{x+y}{2}\ge\sqrt{xy}$.""",
                True,
                """This is the AM–GM inequality for two positive terms.""",
            ),
            (
                r"""For all $x>0$, it holds that $\dfrac{1}{x}<x$ if and only if $x>1$.""",
                True,
                r"""Since $x>0$, multiplying $\dfrac{1}{x}<x$ by $x$ yields $1<x^{2}$, hence $x>1$.""",
            ),
            (
                r"""For all $x,y>0$, it holds that $\dfrac{1}{x}+\dfrac{1}{y}\ge\dfrac{1}{x+y}$.""",
                True,
                r"""The left-hand side equals $\dfrac{x+y}{xy}$. Comparing with $\dfrac{1}{x+y}$ is equivalent to $(x+y)^{2}\ge xy$, which holds for positive $x,y$.""",
            ),
            (
                r"""For all $x>1$, it holds that $\dfrac{1}{x-1}<\dfrac{1}{x}$.""",
                False,
                r"""For $x>1$ both denominators are positive and $x-1<x$, so $\dfrac{1}{x-1}>\dfrac{1}{x}$. The claimed strict inequality has the wrong direction.""",
            ),
        ],
    },
    {
        "title": """Exam mix — systems and intersections""",
        "diff": """4/5""",
        "overview": """Five claims about systems of inequalities and intersections of solution sets.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The system $x>2$ and $x\le 5$ has solution set $(2,5]$.""",
                True,
                r"""Intersecting the open ray $(2,\infty)$ with $(-\infty,5]$ yields $(2,5]$.""",
            ),
            (
                r"""The system $|x|<3$ and $x\ge 1$ has solution set $[1,3)$.""",
                True,
                r"""$|x|<3$ is $(-3,3)$; intersecting with $[1,\infty)$ gives $[1,3)$.""",
            ),
            (
                r"""The system $x^{2}\le 4$ and $x>0$ has solution set $(0,2]$.""",
                True,
                r"""$x^{2}\le 4$ means $[-2,2]$; intersecting with $(0,\infty)$ gives $(0,2]$.""",
            ),
            (
                r"""The system $x\le -1$ or $x\ge 2$, together with $|x|<3$, has solution set $[-3,-1]\cup[2,3)$.""",
                False,
                r"""$|x|<3$ is the open interval $(-3,3)$. Intersecting with $(-\infty,-1]\cup[2,\infty)$ gives $(-3,-1]\cup[2,3)$. The claim incorrectly closes the endpoint $-3$.""",
            ),
            (
                r"""The inequality $(x-1)(x-4)\ge 0$ together with $x\le 2$ has solution set $(-\infty,1]$.""",
                True,
                r"""$(x-1)(x-4)\ge 0$ holds on $(-\infty,1]\cup[4,\infty)$. Intersecting with $x\le 2$ leaves $(-\infty,1]$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — equivalent transformations""",
        "diff": """3/5""",
        "overview": """Five claims about which algebraic steps preserve equivalence of inequalities.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                """For all real $x$, the inequality $3x-1<5$ is equivalent to $x<2$.""",
                True,
                """Adding $1$ and dividing by $3$ (positive) yields the equivalent condition $x<2$.""",
            ),
            (
                """For all real $x$, the inequality $-2x>6$ is equivalent to $x>-3$.""",
                False,
                """Dividing by $-2$ reverses the inequality, so $-2x>6$ is equivalent to $x<-3$, not $x>-3$.""",
            ),
            (
                """For $x>0$, the inequality $x^{2}>4$ is equivalent to $x>2$.""",
                True,
                """On the restricted domain $x>0$, $x^{2}>4$ means $x>2$ (the negative branch $x<-2$ is excluded by $x>0$).""",
            ),
            (
                """For all real $x$, the inequality $x^{2}>4$ is equivalent to $x>2$.""",
                False,
                """Over all reals, $x^{2}>4$ means $x<-2$ or $x>2$. Restricting to $x>2$ alone loses the negative branch.""",
            ),
            (
                r"""For $x\neq 0$, multiplying both sides of $\dfrac{1}{x}<1$ by $x$ yields an equivalent inequality $1<x$.""",
                False,
                r"""The factor $x$ may be negative. Multiplying by $x$ without a case split does not preserve equivalence; the true solution of $\dfrac{1}{x}<1$ is $(-\infty,0)\cup(1,\infty)$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — mixed bag A""",
        "diff": """4/5""",
        "overview": """A mixed selection of linear, rational, and absolute-value claims.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$, it holds that $4-3x\le 1$ if and only if $x\ge 1$.""",
                True,
                r"""$4-3x\le 1$ gives $-3x\le -3$, hence $x\ge 1$ after dividing by $-3$.""",
            ),
            (
                r"""For $x\neq -2$, the inequality $\dfrac{x-1}{x+2}\ge 0$ has solution set $(-\infty,-2)\cup[1,\infty)$.""",
                True,
                r"""A zero at $1$ and a pole at $-2$ produce the non-negative set $(-\infty,-2)\cup[1,\infty)$.""",
            ),
            (
                r"""The solution set of $|x+4|>2$ is $(-\infty,-6)\cup(-2,\infty)$.""",
                True,
                """$|x+4|>2$ means $x+4>2$ or $x+4<-2$, i.e. $x>-2$ or $x<-6$.""",
            ),
            (
                r"""The solution set of $(x-3)^{2}\le 0$ is empty.""",
                False,
                r"""A square is non-positive only when it is zero, so $(x-3)^{2}\le 0$ holds exactly at $x=3$.""",
            ),
            (
                r"""For $x\neq 0$, the inequality $\dfrac{1}{x^{2}}\le 1$ has solution set $(-\infty,-1]\cup[1,\infty)$.""",
                True,
                r"""$\dfrac{1}{x^{2}}\le 1$ rearranges to $1\le x^{2}$ (using $x^{2}>0$), i.e. $|x|\ge 1$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — mixed bag B""",
        "diff": """4/5""",
        "overview": """Another mixed selection: products, roots, and exponentials.""",
        "context": """Let $x$ be a real number. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""The solution set of $(x+3)(5-x)\ge 0$ is $[-3,5]$.""",
                True,
                """The product is non-negative between the roots $-3$ and $5$, inclusive.""",
            ),
            (
                r"""For $x\ge 3$, the inequality $\sqrt{x-3}\le 2$ has solution set $[3,7]$.""",
                True,
                r"""Squaring gives $x-3\le 4$, so $x\le 7$, intersected with the domain $x\ge 3$.""",
            ),
            (
                r"""The solution set of $\bigl(\tfrac12\bigr)^{x}<4$ is $(-\infty,-2)$.""",
                False,
                r"""Since $4=\bigl(\tfrac12\bigr)^{-2}$ and the map $y\mapsto\bigl(\tfrac12\bigr)^{y}$ is decreasing, the inequality is equivalent to $x>-2$. The claimed set $(-\infty,-2)$ is the opposite ray.""",
            ),
            (
                r"""The solution set of $e^{x}>e$ is $(1,\infty)$.""",
                True,
                """The exponential is increasing, so $e^{x}>e^{1}$ means $x>1$.""",
            ),
            (
                r"""For $x\neq -1$, the inequality $\dfrac{x-2}{x+1}<0$ has solution set $(-1,2)$.""",
                True,
                """The fraction is negative between the pole $-1$ and the zero $2$, i.e. on $(-1,2)$.""",
            ),
        ],
    },
    {
        "title": """Exam mix — mixed bag C""",
        "diff": """4/5""",
        "overview": """A final mixed selection with two-variable and one-variable claims.""",
        "context": """Let $x$ and $y$ be real numbers. Which of the following statements is/are correct?""",
        "items": [
            (
                r"""For all real $x$, the inequality $|x-5|\ge 0$ holds.""",
                True,
                r"""The absolute value is non-negative by definition, so $|x-5|\ge 0$ for every real $x$.""",
            ),
            (
                r"""For $x,y>0$ with $x\neq y$, it holds that $\dfrac{x}{y}+\dfrac{y}{x}>2$.""",
                True,
                r"""From $\dfrac{x}{y}+\dfrac{y}{x}-2=\dfrac{(x-y)^{2}}{xy}$ and $x\neq y$, $xy>0$, the difference is strictly positive.""",
            ),
            (
                """The solution set of $3-x>x+1$ is $x<1$.""",
                True,
                """$3-x>x+1$ simplifies to $2>2x$, hence $x<1$.""",
            ),
            (
                r"""For all real $x,y$, it holds that $(x+y)^{2}\le 2(x^{2}+y^{2})$.""",
                True,
                r"""Expanding the claimed inequality is equivalent to $0\le(x-y)^{2}$, which is always true.""",
            ),
            (
                r"""For all real $x$, it holds that $x^{2}\ge x$.""",
                False,
                r"""Rearrangement gives $x^{2}-x=x(x-1)\ge 0$, which fails on the open interval $(0,1)$. For example, $x=\tfrac12$ gives $\tfrac14<\tfrac12$.""",
            ),
        ],
    },
]
