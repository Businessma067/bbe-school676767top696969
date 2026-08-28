from __future__ import annotations

from common import task

CTX = "Evaluate each statement. Mark it TRUE or FALSE."

TASKS = [
    task(
        title="A stacked power compared with a product after a rewrite",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: After rewriting $(x^{-2})^{-3}$ for $x\neq 0$, a clerk compares it with the product $x^{-2}x^{-3}$ and reports that both leave $x^{-5}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $(x^{-2})^{-3}$.""",
                False,
                
            ),
            (
                r"On $w\neq 0$, simplifying $w^{5}w^{-2}/w^{-1}$ is claimed to leave $w^{4}$. A marker then substitutes $w=2$ and ticks $16$.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: Whenever $t>0$, a note treats $((t^{2})^{3})^{1/2}$ as $t^{5/2}$, adding $2+3$ before taking the outer half-power — with the intermediate display still carrying $((t^{2})^{3})^{1/2}$.""",
                False,
                
            ),
            (
                r"Provided $a\neq 0$, rewriting $a^{-4}(a^{2})^{2}$ as $1$ is accepted, because the second factor is said to cancel the first.",
                True,
                
            ),
            (
                r"For $b\neq 0$, a candidate records $((b^{-1})^{2})^{-1}$ as $b^{-3}$, mixing a stack with the product $b^{-1}b^{-2}$.",
                False,
                
            ),
        ],
        overview=r"Five independent exponent claims. A stack multiplies; a product adds. After rewriting, $(x^{-2})^{-3}=x^{6}$ is not the same as $x^{-2}x^{-3}=x^{-5}$.",
    ),
    task(
        title="A minus in the denominator that has to be flipped twice",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Clearing $\dfrac{p^{3}p^{-1}}{p^{-2}}$ for $p\neq 0$ is recorded as $p^{4}$. Substituting $p=2$ is then said to recover $16$.",
                True,
                
            ),
            (
                r"Working with $q\neq 0$, a slip writes $\dfrac{1}{q^{-3}}=-q^{3}$, reading the minus in the exponent as a change of sign.",
                False,
                
            ),
            (
                r"Provided $r\neq 0$, inverting $\dfrac{r^{-4}}{r^{-1}}$ is claimed to leave $r^{-3}$, the same monomial as the uninverted quotient.",
                False,
                
            ),
            (
                r"""A candidate first checks a single convenient substitution, finds that both sides agree numerically at that point, and then elevates the agreement to a claimed identity: Someone records $\dfrac{s^{6}}{s^{-1}s^{2}}$ as $s^{3}$ whenever $s\neq 0$, treating both denominator exponents as minuses. The margin note closes without expanding the general case.""",
                False,
                
            ),
            (
                r"On $u\neq 0$, rewriting $\dfrac{u^{-1}+u^{-2}}{u^{-2}}$ as $u+1$ is accepted after a common denominator is cleared in the numerator.",
                True,
                
            ),
        ],
        overview=r"Five independent reciprocal-power checks. A minus in a denominator flips when the quotient is written as a product; inverting a simplified quotient is a further step.",
    ),
    task(
        title="Products of roots versus roots of sums",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Whenever $a,b>0$, treating $\sqrt{a}+\sqrt{b}$ as $\sqrt{a+b}$ is accepted as an identity.",
                False,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: Taking nonnegative letters, the product $\sqrt{12}\sqrt{3}$ is rewritten as $6$. On that basis, the claim is then entered in the answer key without a second expansion.""",
                True,
                
            ),
            (
                r"On $c,d\ge 0$, the product rule $\sqrt{c}\sqrt{d}=\sqrt{cd}$ is printed as valid.",
                True,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: Combining radicands, $\sqrt{18}+\sqrt{32}$ is claimed to equal $\sqrt{50}$. Any remaining letters are declared free once that one check has passed.""",
                False,
                
            ),
            (
                r"A booklet claims $\sqrt{27}\sqrt{3}=9$ as positive square roots.",
                True,
                
            ),
        ],
        overview=r"Five independent surd claims. Products of square roots may pass inside one radicand; sums may not. $\sqrt{12}\sqrt{3}=6$, but $\sqrt{18}+\sqrt{32}\neq\sqrt{50}$.",
    ),
    task(
        title="Zero exponents mixed with a cancelled stack",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Whenever $a\neq 0$, rewriting $\dfrac{a^{5}}{a^{5}}$ as $a^{0}$ and then as $1$ is accepted.",
                True,
                
            ),
            (
                r"A booklet treats $0^{-3}\cdot 0^{3}$ as $0^{0}$ and then as $1$, by the product rule for exponents.",
                False,
                
            ),
            (
                r"On $x\neq 0$, cancelling $x^{3}x^{-3}x^{0}$ is claimed to leave $x^{0}$, hence $1$.",
                True,
                
            ),
            (
                r"Treating $(2b)^{0}=2b^{0}$ for every $b\neq 0$ is offered, so the left side is read as $2$.",
                False,
                
            ),
            (
                r"""The board's model solution records, as if it were an identity, the following holds on the stated domain: On $c,d\neq 0$, rewriting $\bigl((cd)^{3}\bigr)^{0}(c^{0}+d^{0})$ as $2$ is accepted, with the added remark that domain caveats may be left implicit once written once.""",
                True,
                
            ),
        ],
        overview=r"Five independent zero-exponent claims. On a nonzero base, $a^{0}=1$. A negative power of $0$ is undefined; $(2b)^{0}$ is not $2b^{0}$.",
    ),
    task(
        title="Integer values of short fractional powers",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"Reducing $27^{2/3}$ to the integer $9$ is treated as correct.",
                True,
                
            ),
            (
                r"Rewriting $32^{2/5}$ as $8$ is entered on a mark scheme.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: Evaluating $8^{2/3}\cdot 4^{-1/2}$ as the integer $4$ is entered on a mark scheme — with the intermediate display still carrying $4$.""",
                False,
                
            ),
            (
                r"Extracting $\sqrt[3]{54}$ as $3\sqrt[3]{2}$ is claimed in the reals.",
                True,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: Simplifying $\sqrt{48}$ to $6\sqrt{2}$ as a positive square root is accepted, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                False,
                
            ),
        ],
        overview=r"Five independent numerical powers. $27^{2/3}=9$ and $\sqrt[3]{54}=3\sqrt[3]{2}$, but $32^{2/5}=4$ and $8^{2/3}\cdot 4^{-1/2}=2$.",
    ),
    task(
        title="Like surds collected after extracting squares",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Combining $\sqrt{50}-\sqrt{18}$ as positive square roots is recorded as $2\sqrt{2}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\sqrt{50}-\sqrt{18}$.""",
                True,
                
            ),
            (
                r"Reducing $\sqrt{12}+\sqrt{27}$ is claimed to equal $\sqrt{39}$.",
                False,
                
            ),
            (
                r"Extracting $\sqrt{32}=4\sqrt{2}$ as a positive square root is accepted.",
                True,
                
            ),
            (
                r"A note writes $\sqrt{45}-\sqrt{20}=\sqrt{25}$ as positive roots.",
                False,
                
            ),
            (
                r"Taking positive roots, $\sqrt{8}+\sqrt{18}$ is rewritten as $5\sqrt{2}$.",
                True,
                
            ),
        ],
        overview=r"Five independent like-surd reductions. Extract the largest square, then add coefficients. $\sqrt{50}-\sqrt{18}=2\sqrt{2}$; $\sqrt{12}+\sqrt{27}$ is $5\sqrt{3}$, not $\sqrt{39}$.",
    ),
    task(
        title="A negative exponent swapping a quotient",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Raising the quotient $(x/y)^{-2}$ for $x,y>0$ is recorded as $(y/x)^{2}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $(x/y)^{-2}$.""",
                True,
                
            ),
            (
                r"A mistaken swap writes $(p/q)^{-3}=p^{3}/q^{3}$ for $p,q>0$.",
                False,
                
            ),
            (
                r"Whenever $u,v>0$, treating $(u/v)^{4}=u^{4}/v^{4}$ is accepted.",
                True,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: Inverting first, $(a^{-1}/b^{-1})^{2}$ is claimed to equal $a^{2}/b^{2}$ for $a,b\neq 0$. Any remaining letters are declared free once that one check has passed.""",
                False,
                
            ),
            (
                r"On $c,d>0$, rewriting $(c/d)^{0}=0$ is printed as valid.",
                False,
                
            ),
        ],
        overview=r"Five independent quotient-power claims. A negative exponent swaps the fraction; $(x/y)^{-2}=(y/x)^{2}$, which is not $x^{2}/y^{2}$. A zero exponent is $1$.",
    ),
    task(
        title="Cube roots split over products only",
        subsection="2.3",
        difficulty="3/5",
        context=CTX,
        items=[
            (
                r"The cube-root product $\sqrt[3]{2}\sqrt[3]{4}$ is rewritten as $2$ in the reals.",
                True,
                
            ),
            (
                r"""Under the standing hypothesis that every letter is real (and nonzero wherever a denominator appears), the following assertion is recorded: Splitting a sum, $\sqrt[3]{27}+\sqrt[3]{1}$ is claimed to equal $\sqrt[3]{28}$. On that basis, the notebook treats the rewritten form as an identity on the whole stated domain.""",
                False,
                
            ),
            (
                r"Extracting $\sqrt[3]{54}=3\sqrt[3]{2}$ in the reals is accepted.",
                True,
                
            ),
            (
                r"A student writes $\sqrt[3]{24}=8\sqrt[3]{3}$ in the reals.",
                False,
                
            ),
            (
                r"Factoring $\sqrt[3]{32}$ as $4\sqrt[3]{2}$ is recorded as valid.",
                False,
                
            ),
        ],
        overview=r"Five independent cube-root lines. Products split; sums do not. $\sqrt[3]{2}\sqrt[3]{4}=2$ and $\sqrt[3]{54}=3\sqrt[3]{2}$, while $\sqrt[3]{24}=2\sqrt[3]{3}$.",
    ),
    task(
        title="Several fractional exponents on one letter",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"After combining exponents on $x>0$, $\bigl(x^{-2}x^{5/2}/x^{-1/2}\bigr)^{2}$ is recorded as $x^{2}$.",
                True,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: Clearing $y^{3/2}/y^{-3/2}$ for $y>0$ is claimed to leave $y^{0}$. On that basis, a second marker initials the line after comparing only the leading terms.""",
                False,
                
            ),
            (
                r"Working with $z>0$, the stack $(z^{1/3})^{-3/2}$ is rewritten as $z^{-1/2}$.",
                True,
                
            ),
            (
                r"Someone records $(w^{2/3})^{3}=w^{5/3}$ for $w>0$, adding the exponents.",
                False,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: On $t>0$, the product $t^{-1/2}t^{3/2}$ is entered as $t$, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                True,
                
            ),
        ],
        overview=r"Five independent fractional-power calculations. Inside the mixed quotient the exponents total $1$, and the outer square makes $x^{2}$. Stacking multiplies; a quotient subtracts.",
    ),
    task(
        title="Denesting a nested radical by the wrong conjugate",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Denesting $\sqrt{8+2\sqrt{15}}$ is claimed to equal $\sqrt{5}-\sqrt{3}$.",
                False,
                
            ),
            (
                r"Squaring $\sqrt{5}+\sqrt{3}$ is recorded as $8+2\sqrt{15}$ in the positive reals.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: Matching positive roots, $\sqrt{18+2\sqrt{45}}$ is rewritten as $\sqrt{15}+\sqrt{3}$ — with the intermediate display still carrying $\sqrt{15}+\sqrt{3}$.""",
                True,
                
            ),
            (
                r"A naive split writes $\sqrt{12+2\sqrt{32}}=\sqrt{12}+\sqrt{32}$ as positive square roots.",
                False,
                
            ),
            (
                r"Taking positive roots, $\sqrt{8-2\sqrt{15}}$ is accepted as $\sqrt{5}-\sqrt{3}$.",
                True,
                
            ),
        ],
        overview=r"Five independent nested-radical checks. $\sqrt{8+2\sqrt{15}}=\sqrt{5}+\sqrt{3}$; the minus conjugate denests the minus companion. Splitting a radicand as a sum of roots fails.",
    ),
    task(
        title="Rationalising by the conjugate of the other binomial",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Rationalising $6/(\sqrt{7}-2)$ is recorded as $2(\sqrt{7}+2)$ in the positive reals. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $6/(\sqrt{7}-2)$.""",
                True,
                
            ),
            (
                r"Clearing $1/(\sqrt{5}-\sqrt{3})$ is claimed to equal $(\sqrt{5}-\sqrt{3})/2$, the conjugate already in the denominator.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: The product $(\sqrt{12}-\sqrt{3})(\sqrt{12}+\sqrt{3})$ is rewritten as $9$ — with the intermediate display still carrying $9$.""",
                True,
                
            ),
            (
                r"Someone rationalises $4/(\sqrt{18}-\sqrt{8})$ and claims the value $\sqrt{18}+\sqrt{8}$ without dividing by the difference of squares.",
                False,
                
            ),
            (
                r"On the positive denominator $\sqrt{5}-1$, the unit $1/(\sqrt{5}-1)$ is rewritten as $(\sqrt{5}+1)/4$.",
                True,
                
            ),
        ],
        overview=r"Five independent rationalising checks. Multiply by the opposite conjugate and divide by the difference of squares. Claiming the conjugate that already sat in the denominator is the usual trap.",
    ),
    task(
        title="A binomial square of a root and its reciprocal",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"On $x>0$, expanding $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ is recorded as $x+1/x$ with the cross term omitted.",
                False,
                
            ),
            (
                r"Expanding $\bigl(\sqrt{y}+y^{-1/2}\bigr)^{2}$ for $y>0$ is claimed to equal $y+2+1/y$.",
                True,
                
            ),
            (
                r"Whenever $t>0$, the product $\sqrt{t}\cdot t^{-1/2}$ is accepted as $1$.",
                True,
                
            ),
            (
                r"""Relying on the observation that a particular test pair does not immediately refute the line, the marker records the universal claim: A candidate writes $\bigl(u^{1/2}-2u^{-1/2}\bigr)^{2}=u+4/u$ for $u>0$, dropping $-4$. The claim is filed as settled for every admissible value of the letters.""",
                False,
                
            ),
            (
                r"Working with $w>0$, $\bigl(\sqrt{w}-1/\sqrt{w}\bigr)^{2}$ is rewritten as $(w-1)^{2}/w$.",
                True,
                
            ),
        ],
        overview=r"Five independent binomial-square checks. $(\sqrt{x}-x^{-1/2})^{2}=x-2+1/x$; the cross term is identically $\pm 2$ or $\pm 4$ and must not be dropped.",
    ),
    task(
        title="Rewriting a new base from a given power",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Given $2^{k}=5$, a note rewrites $4^{k}$ as $25$ without solving for $k$.",
                True,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: Under the hypothesis $3^{n}=2$, the power $9^{n}$ is recorded as $4$. On that basis, a second marker initials the line after comparing only the leading terms.""",
                True,
                
            ),
            (
                r"From $2^{k}=5$, a student concludes $2^{3k}=15$.",
                False,
                
            ),
            (
                r"""The working is arranged so that an intermediate numerical check looks supportive; from that support the following identity is asserted on the whole domain: Provided $2^{m}=3$, rewriting $8^{m}$ as $27$ is accepted. No second independent substitution is attempted.""",
                True,
                
            ),
            (
                r"Starting from $5^{t}=4$, a slip writes $25^{t}=8$.",
                False,
                
            ),
        ],
        overview=r"Five independent given-power rewrites. A new base is written as a power of the given base, then the given value is raised to that integer. No logarithm is taken.",
    ),
    task(
        title="Distributing an outer exponent across two letters",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Expanding $(a^{m}b^{n})^{k}$ for $a,b>0$ is recorded as $a^{mk}b^{nk}$.",
                True,
                
            ),
            (
                r"A note claims $(a^{m})^{k}=a^{m+k}$ identically for $a>0$.",
                False,
                
            ),
            (
                r"Whenever $c,d>0$, treating $(c^{2}d^{3})^{4}$ as $c^{8}d^{12}$ is accepted.",
                True,
                
            ),
            (
                r"Someone records $(p^{3}q^{-1})^{2}=p^{5}q$ for $p,q>0$, adding $2$ to the first exponent.",
                False,
                
            ),
            (
                r"""According to the examiner's standardisation sheet, the following holds on the stated domain: On $u,v>0$, the quotient $(u^{2}v)^{3}/(uv^{2})^{3}$ is rewritten as $(u/v)^{3}$, and further instructs candidates to treat any matching numerical check as decisive.""",
                True,
                
            ),
        ],
        overview=r"Five independent two-letter power claims. $(a^{m}b^{n})^{k}=a^{mk}b^{nk}$, not $a^{m+k}$. Adding the outer exponent is the product trap.",
    ),
    task(
        title="Fractional powers of twelve, twenty-seven, and thirty-two",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Rewriting $27^{4/3}$ as $81$ is treated as valid.",
                True,
                
            ),
            (
                r"Reducing $32^{3/5}$ to $4$ is treated as correct.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: Evaluating $27^{2/3}\cdot 8^{-1/3}$ as $9/2$ is accepted — with the intermediate display still carrying $9/2$.""",
                True,
                
            ),
            (
                r"A candidate records $\sqrt{18}\cdot\sqrt{8}=\sqrt{26}$ as positive square roots.",
                False,
                
            ),
            (
                r"""A standardisation remark distributed with the script states that the following holds on the stated domain: Changing $4^{5/2}$ into $32$ is printed as valid, while explicitly permitting the omission of a full symbolic expansion.""",
                True,
                
            ),
        ],
        overview=r"Five independent numerical rewrites. $27^{4/3}=81$ and $4^{5/2}=32$, but $32^{3/5}=8$ and $\sqrt{18}\sqrt{8}=12$, not $\sqrt{26}$.",
    ),
    task(
        title="Rewriting four, eight, and thirty-two as powers of two",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Changing $4^{m-n}$ into $2^{2m-2n}$ for integers $m,n$ is accepted. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $4^{m-n}$.""",
                True,
                
            ),
            (
                r"A slip expands $8^{m}$ as $2^{m+3}$ as an identity in the integer $m$.",
                False,
                
            ),
            (
                r"Reducing $2^{m+n}4^{m-n}/8^{m}$ to $2^{-n}$ for integers $m,n$ is recorded as valid.",
                True,
                
            ),
            (
                r"Someone writes $32^{k}=2^{k+5}$ for every integer $k$.",
                False,
                
            ),
            (
                r"On integer $n$, rewriting $4^{n}/2^{n}=2^{n}$ is accepted.",
                True,
                
            ),
        ],
        overview=r"Five independent change-of-base lines. Rewrite $4=2^{2}$, $8=2^{3}$, $32=2^{5}$, then multiply exponents. Adding the index $3$ or $5$ is the product trap.",
    ),
    task(
        title="Fourth roots of even powers",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Extracting $\sqrt[4]{a^{2}b^{6}}$ for $a,b>0$ is recorded as $a^{1/2}b^{3/2}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\sqrt[4]{a^{2}b^{6}}$.""",
                True,
                
            ),
            (
                r"Combining $\sqrt[4]{16}\sqrt[4]{81}$ as positive fourth roots is claimed to equal $12$.",
                False,
                
            ),
            (
                r"A student writes $\sqrt[4]{x^{4}}=x^{2}$ for every $x>0$.",
                False,
                
            ),
            (
                r"""The working is arranged so that an intermediate numerical check looks supportive; from that support the following identity is asserted on the whole domain: On $c>0$, $\sqrt[4]{c^{8}}=c^{2}$ is accepted. No second independent substitution is attempted.""",
                True,
                
            ),
            (
                r"Someone records $\sqrt[4]{32}=4\sqrt[4]{2}$ as a positive fourth root.",
                False,
                
            ),
        ],
        overview=r"Five independent fourth-root claims. Divide exponents by $4$. $\sqrt[4]{a^{2}b^{6}}=a^{1/2}b^{3/2}$ and $\sqrt[4]{c^{8}}=c^{2}$, while $\sqrt[4]{x^{4}}=x$ on $x>0$.",
    ),
    task(
        title="A minus sign stranded in a denominator",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Working with $a,b\neq 0$, the quotient $a^{5}b^{-3}/(a^{-2}b^{4})$ is recorded as $a^{7}/b^{7}$.",
                True,
                
            ),
            (
                r"""With the provisional reading that like terms have already been collected correctly, the following assertion is recorded: Forgetting to invert, a slip writes $c^{4}/c^{-3}=c$ whenever $c\neq 0$. On that basis, the remaining cross-check against a concrete numerical pair is judged unnecessary.""",
                False,
                
            ),
            (
                r"Subtracting exponents, $d^{5}/d^{-2}=d^{7}$ for $d\neq 0$ is accepted.",
                True,
                
            ),
            (
                r"A candidate records $e^{-3}/e^{4}=e$ for $e\neq 0$.",
                False,
                
            ),
            (
                r"Provided $f\neq 0$, inverting $1/f^{-5}$ is rewritten as $f^{5}$.",
                True,
                
            ),
        ],
        overview=r"Five independent monomial quotients. A negative exponent in a denominator flips sign. $a^{5}b^{-3}/(a^{-2}b^{4})=a^{7}/b^{7}$; forgetting the flip leaves $c^{4}/c^{-3}$ looking like $c$.",
    ),
    task(
        title="Stacked roots multiplying reciprocal exponents",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"Stacking a fourth root on a cube root, $\sqrt[4]{\sqrt[3]{x}}=x^{1/12}$ for $x>0$ is accepted.",
                True,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: The stacked form $\sqrt[3]{\sqrt{y}}$ is recorded as $y^{5/6}$ for $y>0$, adding the reciprocal exponents. On that basis, the claim is then entered in the answer key without a second expansion.""",
                False,
                
            ),
            (
                r"On $z>0$, a cube root of a square $\sqrt[3]{z^{2}}$ is rewritten as $z^{2/3}$.",
                True,
                
            ),
            (
                r"A fourth root of a cube, $\sqrt[4]{w^{3}}$ is claimed to equal $w^{4/3}$ on $w>0$.",
                False,
                
            ),
            (
                r"""A standardisation remark distributed with the script states that the following holds on the stated domain: Taking $t>0$, $\sqrt{\sqrt{\sqrt{t}}}$ is claimed to equal $t^{1/6}$, while explicitly permitting the omission of a full symbolic expansion.""",
                False,
                
            ),
        ],
        overview=r"Five independent stacked-root rewrites. Reciprocal exponents multiply: a cube root inside a fourth root is $x^{1/12}$. Adding $1/2+1/3$ is the wrong operation.",
    ),
    task(
        title="Conjugate surds multiplying to a difference of radicands",
        subsection="2.3",
        difficulty="4/5",
        context=CTX,
        items=[
            (
                r"The numerical product $(\sqrt{5}+\sqrt{3})(\sqrt{5}-\sqrt{3})$ equals $2$ in the positive reals.",
                True,
                
            ),
            (
                r"Adding radicands, $(\sqrt{12}+\sqrt{3})(\sqrt{12}-\sqrt{3})$ is claimed to equal $15$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: In two letters, $(\sqrt{a}+\sqrt{b})(\sqrt{a}-\sqrt{b})=a-b$ for $a,b\ge 0$ is accepted — with the intermediate display still carrying $a,b\ge 0$.""",
                True,
                
            ),
            (
                r"A note writes $(\sqrt{8}-\sqrt{2})^{2}=6$ as an identity on the positive reals.",
                False,
                
            ),
            (
                r"On $p,q\ge 0$, $(\sqrt{p}+\sqrt{q})^{2}=p+q+2\sqrt{pq}$ is printed as valid.",
                True,
                
            ),
        ],
        overview=r"Five independent conjugate-surd claims. The product of conjugates is a difference of radicands. Each separate square still carries a cross term $\pm 2\sqrt{\,\cdot\,}$.",
    ),
    task(
        title="A sixth power in the numerator against a squared denominator",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Combining $(x^{1/2}y^{-1/3})^{6}/(x^{-1}y^{2})^{2}$ on $x,y>0$ is recorded as $x^{5}/y^{6}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $(x^{1/2}y^{-1/3})^{6}/(x^{-1}y^{2})^{2}$.""",
                True,
                
            ),
            (
                r"A slip writes the stack $(y^{-1/3})^{6}=y^{-1/18}$ for $y>0$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: On $a>0$, $(a^{3/4})^{8/3}$ is rewritten as $a^{2}$ — with the intermediate display still carrying $(a^{3/4})^{8/3}$.""",
                True,
                
            ),
            (
                r"Someone records $(b^{-2}c^{1/2})^{4}=b^{2}c^{2}$ for $b,c>0$.",
                False,
                
            ),
            (
                r"Working with $u,v>0$, $(u^{-1}v^{3})^{2}(u^{2}v^{-1})^{3}$ is claimed to equal $u^{4}v^{3}$.",
                True,
                
            ),
        ],
        overview=r"Five independent two-letter stacks. Distribute the outer exponents, then add or subtract. $(x^{1/2}y^{-1/3})^{6}/(x^{-1}y^{2})^{2}=x^{5}/y^{6}$.",
    ),
    task(
        title="Independent traps from nested roots to given powers",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Denesting $\sqrt{24+2\sqrt{80}}$ is claimed to equal $\sqrt{20}-\sqrt{4}$.",
                False,
                
            ),
            (
                r"Given $2^{k}=5$, rewriting $2^{3k}$ as $125$ is accepted without solving for $k$.",
                True,
                
            ),
            (
                r"Working with $x>0$, the expansion of $\bigl(\sqrt{x}-x^{-1/2}\bigr)^{2}$ is recorded as $x-2+1/x$.",
                True,
                
            ),
            (
                r"""A candidate first checks a single convenient substitution, finds that both sides agree numerically at that point, and then elevates the agreement to a claimed identity: Whenever $a,b>0$, treating $\sqrt{a}\sqrt{b}$ as $\sqrt{a+b}$ is accepted as an identity. The margin note closes without expanding the general case.""",
                False,
                
            ),
            (
                r"Rationalising $1/(\sqrt{48}-\sqrt{12})$ is claimed to equal $\sqrt{48}+\sqrt{12}$.",
                False,
                
            ),
        ],
        overview=r"Five independent calculations: a minus-conjugate denesting, a given-power cube, a binomial square of a root and its reciprocal, $\sqrt{a}\sqrt{b}$ versus $\sqrt{a+b}$, and a rationalised unit.",
    ),
    task(
        title="A powered monomial quotient in two letters",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"The quotient identity $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$ holds for $a,b>0$.",
                True,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: A matching reciprocal form claims that same quotient equals $(a/b)^{k(n-m)}$ for $a,b>0$. On that basis, the claim is then entered in the answer key without a second expansion.""",
                False,
                
            ),
            (
                r"Expanding only a cube, $(p^{2}q^{-3})^{3}=p^{6}q^{-9}$ on $p,q>0$ is accepted.",
                True,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: Treating $(r^{m}s^{n})^{k}$ as $r^{m+k}s^{n}$ for $r,s>0$ is offered as an identity. Any remaining letters are declared free once that one check has passed.""",
                False,
                
            ),
            (
                r"Collecting $u^{6}v^{-4}/(u^{-2}v^{3})$ for $u,v>0$ is rewritten as $u^{8}/v^{7}$.",
                True,
                
            ),
        ],
        overview=r"Five independent monomial-quotient claims. After distributing $k$, $(a^{m}b^{n})^{k}/(a^{n}b^{m})^{k}=(a/b)^{k(m-n)}$. Adding the outer exponent instead of multiplying it is the trap.",
    ),
    task(
        title="Nested radicals rewritten as a single rational power",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Whenever $x>0$, the nest $\sqrt{x\sqrt{x}}$ is rewritten as $x^{3/4}$.",
                True,
                
            ),
            (
                r"A three-storey cube nest $\sqrt[3]{y\sqrt[3]{y\sqrt[3]{y}}}$ is recorded as $y^{13/27}$ on $y>0$.",
                True,
                
            ),
            (
                r"On $z>0$, $\sqrt{z\sqrt{z\sqrt{z}}}$ is claimed to equal $z^{1/2}$.",
                False,
                
            ),
            (
                r"Stacking $\sqrt[4]{w^{2}}$ as $w^{1/2}$ for $w>0$ is accepted.",
                True,
                
            ),
            (
                r"""The board's model solution records, as if it were an identity, the following holds on the stated domain: Someone records $\sqrt{\sqrt{t^{3}}}=t^{3/2}$ on $t>0$, with the added remark that domain caveats may be left implicit once written once.""",
                False,
                
            ),
        ],
        overview=r"Five independent nests, each with its own index. Write every root as a reciprocal exponent and multiply. $\sqrt{x\sqrt{x}}=x^{3/4}$ and the three-storey cube nest is $y^{13/27}$.",
    ),
    task(
        title="Cancelling one conjugate factor, not two",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Cancelling one factor on $a>b>0$, $(\sqrt{a}-\sqrt{b})^{2}/(a-b)$ is recorded as $(\sqrt{a}-\sqrt{b})/(\sqrt{a}+\sqrt{b})$.",
                True,
                
            ),
            (
                r"Dividing $(c-d)/(\sqrt{c}-\sqrt{d})$ for $c>d>0$ is claimed to leave $\sqrt{c}-\sqrt{d}$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: Factoring $p-q=(\sqrt{p}-\sqrt{q})(\sqrt{p}+\sqrt{q})$ on $p,q\ge 0$ is accepted — with the intermediate display still carrying $p,q\ge 0$.""",
                True,
                
            ),
            (
                r"A candidate cancels twice in $(\sqrt{u}-\sqrt{v})^{2}/(u-v)$ and obtains $1/(u-v)$ for $u>v>0$.",
                False,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: On $m>n>0$, $(m-n)/(\sqrt{m}+\sqrt{n})$ is rewritten as $\sqrt{m}-\sqrt{n}$, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                True,
                
            ),
        ],
        overview=r"Five independent conjugate-cancellation claims. Write $a-b$ as a conjugate product. Then $(\sqrt{a}-\sqrt{b})^{2}/(a-b)$ keeps one factor of $\sqrt{a}-\sqrt{b}$ in the numerator.",
    ),
    task(
        title="Multiplying, stacking, and dividing exponents on one base",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Given $3^{y}=2$, the rewrite $9^{y}=4$ follows without solving for $y$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $3^{y}=2$.""",
                True,
                
            ),
            (
                r"A product-of-powers slip writes $x^{m}x^{n}=x^{mn}$ for $x>0$.",
                False,
                
            ),
            (
                r"A rational-power identity $(x^{m/n})^{n}=x^{m}$ holds for $x>0$ and $n\neq 0$.",
                True,
                
            ),
            (
                r"A mistaken quotient rule $x^{m}/x^{n}=x^{m/n}$ is claimed for $x>0$.",
                False,
                
            ),
            (
                r"Three powers multiplying, $t^{m}t^{n}t^{-m-n}=1$ for $t>0$ is accepted.",
                True,
                
            ),
        ],
        overview=r"Five independent exponent-arithmetic claims. Products add, stacks multiply, quotients subtract. Given $3^{y}=2$, one may still rewrite $9^{y}=(3^{y})^{2}=4$.",
    ),
    task(
        title="A mixed sheet of roots, conjugates, and a missing two",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Combining $\sqrt{48}-\sqrt{12}+\sqrt{27}$ as positive square roots is recorded as $5\sqrt{3}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\sqrt{48}-\sqrt{12}+\sqrt{27}$.""",
                True,
                
            ),
            (
                r"Denesting $\sqrt{12+2\sqrt{32}}$ is claimed to equal $\sqrt{8}-\sqrt{4}$.",
                False,
                
            ),
            (
                r"Rationalising $3/(\sqrt{5}-1)$ is recorded as $3(\sqrt{5}+1)/4$.",
                True,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: On $x>0$, expanding $(\sqrt{x}+1/\sqrt{x})^{2}$ is claimed as $x+1/x$, omitting the middle $+2$. Any remaining letters are declared free once that one check has passed.""",
                False,
                
            ),
            (
                r"Evaluating $32^{2/5}\cdot 27^{-1/3}$ as $4/3$ is accepted.",
                True,
                
            ),
        ],
        overview=r"Five independent mixed calculations: a like-surd combination equal to $5\sqrt{3}$, a minus-conjugate denesting trap, a rationalised unit, a missing cross term $+2$, and $32^{2/5}\cdot 27^{-1/3}=4/3$.",
    ),
    task(
        title="Adding reciprocal powers is not multiplying them",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Adding $x^{-1}+x^{-2}$ for $x\neq 0$ is recorded as $(x+1)/x^{2}$.",
                True,
                
            ),
            (
                r"""Under the standing hypothesis that every letter is real (and nonzero wherever a denominator appears), the following assertion is recorded: A marker writes $y^{-1}+y^{-2}=1/(y+y^{2})$ as an identity on $y\neq 0$. On that basis, the notebook treats the rewritten form as an identity on the whole stated domain.""",
                False,
                
            ),
            (
                r"Squaring a reciprocal, $z^{-2}=(z^{-1})^{2}$ for $z\neq 0$ is accepted.",
                True,
                
            ),
            (
                r"Someone records $w^{-1}+w^{-2}=w^{-3}$ for every $w\neq 0$.",
                False,
                
            ),
            (
                r"On $u\neq 0$, $u^{-4}u^{2}$ is claimed to equal $u^{-8}$.",
                False,
                
            ),
        ],
        overview=r"Five independent reciprocal-power claims. Adding $x^{-1}+x^{-2}$ needs a common denominator; it is not $x^{-3}$ and not $1/(x+x^{2})$. Products still add exponents.",
    ),
    task(
        title="Changing bases inside a stacked fractional power",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"Reducing $(4^{3/2})^{2/3}$ to $4$ is treated as correct.",
                True,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: A slip writes $(8^{2/3})^{3/2}=8^{2/3+3/2}$ as an identity. On that basis, a second marker initials the line after comparing only the leading terms.""",
                False,
                
            ),
            (
                r"On $t>0$, $(t^{-3})^{2/3}=t^{-2}$ is accepted.",
                True,
                
            ),
            (
                r"Evaluating $16^{3/4}\cdot 8^{-1/3}$ as $2$ is entered.",
                False,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: Given $4^{k}=5$, rewriting $2^{2k}$ as $5$ without solving for $k$ is accepted, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                True,
                
            ),
        ],
        overview=r"Five independent stacked fractional powers. Multiply the two exponents, or rewrite each base as a power of $2$. Adding the fractional exponents is the product trap.",
    ),
    task(
        title="Exam leftover traps from powers and nested roots",
        subsection="2.3",
        difficulty="5/5",
        context=CTX,
        items=[
            (
                r"A leftover nested form, $\sqrt{x^{3}}=x^{3/2}$ on $x>0$ is accepted.",
                True,
                
            ),
            (
                r"Dividing two square roots, $\sqrt{45}/\sqrt{5}=\sqrt{9}$ on the positive reals is claimed.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first stacking or combining the exponents by the printed power rule, then equating the simplified monomial with the target written in the margin, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: A false binomial square $(\sqrt{12}+\sqrt{3})^{2}=15$ is claimed.""",
                False,
                
            ),
            (
                r"Raising a two-thirds power, $(x^{2/3})^{3}=x^{2}$ holds on $x>0$.",
                True,
                
            ),
            (
                r"A product of two copies $\sqrt{x}\cdot\sqrt{x}$ is said to equal $x^{1/4}$ on $x>0$.",
                False,
                
            ),
        ],
        overview=r"Five leftover independent claims. Fractional powers still add, subtract, and multiply in the usual way. A binomial square of roots keeps the cross term; $\sqrt{x}\cdot\sqrt{x}=x$.",
    ),
]
