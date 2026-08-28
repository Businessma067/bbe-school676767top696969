from __future__ import annotations

from common import task

TASKS = [
    task(
        title="Cancelled factor kept as the remainder",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Provided $t\neq 3$, reducing $\dfrac{t^2-9}{t-3}$ is recorded as $t+3$. Checking that remainder at $t=0$ is then said to recover the original value $3$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $t\neq 3$.""",
                True,
                
            ),
            (
                r"On $uv\neq 0$, adding $\dfrac{3}{u}+\dfrac{5}{v}$ with common denominator $u+v$ is claimed to produce $\dfrac{8}{u+v}$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: Whenever $w\neq 0$, striking $w$ from $\dfrac{w+k}{w}$ is treated as leaving $1+k$. Substituting $w=1$ is then said to confirm the identity because both sides equal $1+k$ — with the intermediate display still carrying $w$.""",
                False,
                
            ),
            (
                r"After expanding $\bigl(1+\dfrac{1}{z}\bigr)^2$ for $z\neq 0$, a notebook records $1+\dfrac{2}{z}+\dfrac{1}{z^2}$.",
                True,
                
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}$ on $hk\neq 0$ is rewritten as $\dfrac{(h+k)^2}{hk}$.",
                False,
                
            ),
        ],
        overview=r"Five independent fraction claims. A cancelled linear factor is not the remainder; an LCD is a product; striking a letter that is not a factor of every term fails even if a single test point hides the error.",
    ),
    task(
        title="LCD taken as a sum of denominators",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Combining $\dfrac{6}{t}+\dfrac{7}{u}$ on $tu\neq 0$ with common denominator $t+u$ is claimed to produce $\dfrac{13}{t+u}$.",
                False,
                
            ),
            (
                r"Provided $x\neq 0$, the sum $\dfrac{3}{x}+\dfrac{5}{x}$ is recorded as $\dfrac{8}{x}$.",
                True,
                
            ),
            (
                r"Whenever $vw\neq 0$, rewriting $\dfrac{1}{v}+\dfrac{1}{w}$ as $\dfrac{v+w}{vw}$ is accepted.",
                True,
                
            ),
            (
                r"""Relying on the observation that a particular test pair does not immediately refute the line, the marker records the universal claim: After taking $8x$ as a least common denominator of $\dfrac{1}{3x}+\dfrac{1}{5x}$ for $x\neq 0$, a clerk calls that choice legitimate. The claim is filed as settled for every admissible value of the letters.""",
                False,
                
            ),
            (
                r"Clearing $\dfrac{1}{3h}+\dfrac{1}{6h}$ for $h\neq 0$ is said to leave $\dfrac{1}{2h}$.",
                True,
                
            ),
        ],
        overview=r"Common denominators are products of the distinct denominator factors. Adding numerators over added denominators, or using a sum of coefficients as an LCD, both fail; equal denominators really do add in the numerators.",
    ),
    task(
        title="A letter struck from only one term",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Whenever $k\neq 0$, striking $k$ from $\dfrac{k+3}{k}$ is treated as leaving $1+3$.",
                False,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: On $t\neq 0$, splitting $\dfrac{t+8}{t}$ produces $1+\dfrac{8}{t}$. On that basis, a second marker initials the line after comparing only the leading terms.""",
                True,
                
            ),
            (
                r"Reducing $\dfrac{5v+5}{v+1}$ for $v\neq -1$ is recorded as $5$. Checking at $v=0$ is then said to recover the original value $5$.",
                True,
                
            ),
            (
                r"""The working is arranged so that an intermediate numerical check looks supportive; from that support the following identity is asserted on the whole domain: After cancelling in $\dfrac{u(u+7)}{u+7}$ whenever $u\neq -7$, a note leaves $u+7$. No second independent substitution is attempted.""",
                False,
                
            ),
            (
                r"Factoring $\dfrac{3w-3}{w-1}$ whenever $w\neq 1$ is claimed to leave $3$. At $w=0$ that remainder is then said to match the original value $3$.",
                True,
                
            ),
        ],
        overview=r"A letter may be cancelled only when it is a factor of every term. Splitting a sum over a shared denominator is legal; keeping a cancelled linear factor as the remainder is not.",
    ),
    task(
        title="Nested unit fraction with a swapped report",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"After clearing the inner layer of $1+\dfrac{1}{1+\dfrac{1}{x}}$ for $x\neq 0,-1$, a candidate reports $\dfrac{x+1}{2x+1}$ instead of $\dfrac{2x+1}{x+1}$.",
                False,
                
            ),
            (
                r"Collapsing $\dfrac{1}{1+\dfrac{1}{z}}$ for $z\neq 0,-1$ is recorded as $\dfrac{z}{z+1}$.",
                True,
                
            ),
            (
                r"Someone rewrites $\dfrac{1}{1-\dfrac{1}{t}}$ for $t\neq 0,1$ as $\dfrac{t}{t+1}$.",
                False,
                
            ),
            (
                r"Provided $u\neq 0$, adding $1+\dfrac{1}{u}+\dfrac{1}{u^2}$ is said to equal $\dfrac{u^2+u+1}{u^2}$.",
                True,
                
            ),
            (
                r"""According to the examiner's standardisation sheet, the following holds on the stated domain: Squaring $\bigl(1-\dfrac{1}{v}\bigr)$ on $v\neq 0$ is treated as $1-\dfrac{1}{v^2}$, and further instructs candidates to treat any matching numerical check as decisive.""",
                False,
                
            ),
        ],
        overview=r"A continued unit fraction is cleared from the inside. Plus and minus nests produce $z/(z+1)$ and $t/(t-1)$ respectively; swapping a cleared nest with its reciprocal, or dropping a binomial cross term, both fail.",
    ),
    task(
        title="Test point after a difference-of-squares cancel",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Simplifying $\dfrac{x^2-25}{x+5}$ for $x\neq -5$ is claimed to leave $x-5$. Checking at $x=0$ is then said to give $-5$, matching the original $-5$.",
                True,
                
            ),
            (
                r"Cancelling in $\dfrac{y^2-36}{y-6}$ for $y\neq 6$ is recorded as leaving $y-6$. Substituting $y=0$ is then claimed to recover the original $6$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: Provided $h\neq 7$, reducing $\dfrac{h^2-49}{h-7}$ is filed as $h+7$, and that remainder is then treated as equal to $\dfrac{h^2+49}{h+7}$ — with the intermediate display still carrying $\dfrac{h^2-49}{h-7}$.""",
                False,
                
            ),
            (
                r"On $k\neq 3$, the quotient $\dfrac{k^3-27}{k-3}$ is recorded as $k^2+3k+9$. Checking at $k=0$ is then said to recover the original value $9$.",
                True,
                
            ),
            (
                r"""A standardisation remark distributed with the script states that the following holds on the stated domain: With $w\neq 5$, someone writes $\dfrac{w^3-125}{w-5}=w^2-5w+25$, while explicitly permitting the omission of a full symbolic expansion.""",
                False,
                
            ),
        ],
        overview=r"A cancelled linear factor is not the remainder. Difference of cubes produces $k^2+3k+9$; flipping the middle sign, or equating a cancelled remainder to an unrelated plus-denominator fraction, both fail.",
    ),
    task(
        title="Binomial square missing the doubled cross term",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Squaring $\bigl(1+\dfrac{1}{t}\bigr)$ for $t\neq 0$ is claimed to produce $1+\dfrac{1}{t^2}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\bigl(1+\dfrac{1}{t}\bigr)$.""",
                False,
                
            ),
            (
                r"Expanding $\bigl(1-\dfrac{1}{u}\bigr)^2$ on $u\neq 0$ is recorded as $1-\dfrac{2}{u}+\dfrac{1}{u^2}$.",
                True,
                
            ),
            (
                r"Provided $v\neq 0$, rewriting $\bigl(v+\dfrac{1}{v}\bigr)^2$ as $v^2+\dfrac{1}{v^2}$ is accepted.",
                False,
                
            ),
            (
                r"After cancelling a factor of $\dfrac{5y^2-45}{y-3}$ for $y\neq 3$, the remainder $5y-15$ is recorded.",
                False,
                
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}-2$ on $hk\neq 0$ as $\dfrac{(h-k)^2}{hk}$ is accepted.",
                True,
                
            ),
        ],
        overview=r"A binomial square always produces a doubled cross term. The combination $h/k+k/h-2$ is a genuine square in the numerator; keeping a cancelled factor $y-3$ as the remainder is not.",
    ),
    task(
        title="Twice a reciprocal without an arithmetic mean",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Taking twice the reciprocal of $\dfrac{1}{h}+\dfrac{1}{k}$ for $hk\neq 0$ and $h+k\neq 0$ is said to produce $\dfrac{2hk}{h+k}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\dfrac{1}{h}+\dfrac{1}{k}$.""",
                True,
                
            ),
            (
                r"A candidate identifies $\dfrac{2hk}{h+k}$ with $\dfrac{h+k}{2}$ whenever $hk\neq 0$ and $h+k\neq 0$.",
                False,
                
            ),
            (
                r"On $tu\neq 0$, rewriting $\dfrac{t}{u}+\dfrac{u}{t}$ as $\dfrac{t^2+u^2}{tu}$ is accepted.",
                True,
                
            ),
            (
                r"""The working is arranged so that an intermediate numerical check looks supportive; from that support the following identity is asserted on the whole domain: Whenever $v\neq 0$, striking $v$ from $\dfrac{3v+5}{v}$ is treated as leaving $3+5$. No second independent substitution is attempted.""",
                False,
                
            ),
            (
                r"Provided $w\neq -1$, reducing $\dfrac{w^2+2w+1}{w+1}$ is recorded as $w+1$. Checking at $w=0$ is then said to recover the original value $1$.",
                True,
                
            ),
        ],
        overview=r"Twice the reciprocal of a sum of unit fractions is $2hk/(h+k)$, which is not the arithmetic mean $(h+k)/2$. Striking a letter from only one term of a numerator still fails.",
    ),
    task(
        title="Cubic remainder checked at a vanishing test point",
        subsection="2.2",
        difficulty="3/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Provided $t\neq 3$, reducing $\dfrac{t^3-27}{t-3}$ is recorded as $t^2+3t+9$. Checking that remainder at $t=0$ is then said to recover the original value $9$.",
                True,
                
            ),
            (
                r"""With the provisional reading that like terms have already been collected correctly, the following assertion is recorded: On $uv\neq 0$, adding $\dfrac{8}{u}+\dfrac{3}{v}$ with common denominator $u+v$ is claimed to produce $\dfrac{11}{u+v}$. On that basis, the remaining cross-check against a concrete numerical pair is judged unnecessary.""",
                False,
                
            ),
            (
                r"After clearing $\dfrac{1}{1+\dfrac{1}{w}}$ for $w\neq 0,-1$, a candidate reports $\dfrac{w}{w+1}$.",
                True,
                
            ),
            (
                r"Rewriting $\dfrac{h}{k}+\dfrac{k}{h}$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                False,
                
            ),
            (
                r"Whenever $z\neq 6$, cancelling in $\dfrac{z^2-36}{z-6}$ is treated as leaving $z-6$.",
                False,
                
            ),
        ],
        overview=r"A cubic-over-linear difference of cubes cancels to a quadratic whose value at $0$ matches the original fraction. An LCD is still a product; a cancelled linear factor is still not the remainder.",
    ),
    task(
        title="Difference of reciprocals over reciprocal squares",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Dividing $\dfrac{\dfrac{1}{t}-\dfrac{1}{u}}{\dfrac{1}{t^2}-\dfrac{1}{u^2}}$ for $tu\neq 0$, $t\neq u$, and $t\neq -u$ is said to equal $\dfrac{tu}{t+u}$.",
                True,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: Someone treats $\dfrac{\dfrac{1}{v}-\dfrac{1}{w}}{\dfrac{1}{v}+\dfrac{1}{w}}$ on $vw\neq 0$ and $v\neq -w$ as $\dfrac{v-w}{v+w}$. On that basis, the claim is then entered in the answer key without a second expansion.""",
                False,
                
            ),
            (
                r"Provided $x\neq 0$, the difference $\dfrac{1}{x^2}-\dfrac{1}{(x+1)^2}$ is recorded as $\dfrac{2x+1}{x^2(x+1)^2}$.",
                True,
                
            ),
            (
                r"After cancelling $\dfrac{y^2-49}{y-7}$ for $y\neq 7$, a tutor claims the remainder $y+7$ and the original fraction take different values at $y=0$.",
                False,
                
            ),
            (
                r"""A standardisation remark distributed with the script states that the following holds on the stated domain: Combining $\dfrac{3}{h-3}-\dfrac{3}{h+3}$ for $h\neq \pm 3$ is said to equal $\dfrac{18}{h^2-9}$, while explicitly permitting the omission of a full symbolic expansion.""",
                True,
                
            ),
        ],
        overview=r"A difference of unit fractions over a difference of reciprocal squares cancels to $tu/(t+u)$. A sign slip on $w-v$, or claiming that a cancelled remainder disagrees with the original at a legal test point, both fail.",
    ),
    task(
        title="Compound fraction whose simplified ratio is flipped",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Simplifying $\dfrac{1-\dfrac{1}{x+1}}{1+\dfrac{1}{x-1}}$ for $x\neq \pm 1$ and $x\neq 0$ is claimed to equal $\dfrac{x-1}{x+1}$.",
                True,
                
            ),
            (
                r"Clearing $1-\dfrac{5}{t+3}$ for $t\neq -3$ is recorded as $\dfrac{t-2}{t+3}$.",
                True,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: On $u\neq 5$, adding $1+\dfrac{1}{u-5}$ is said to produce $\dfrac{u}{u-5}$ — with the intermediate display still carrying $1+\dfrac{1}{u-5}$.""",
                False,
                
            ),
            (
                r"Whenever $v\neq \pm 3$, someone writes $\dfrac{v+3}{v-3}-\dfrac{v-3}{v+3}=\dfrac{6v}{v^2-9}$.",
                False,
                
            ),
            (
                r"Collapsing $\dfrac{1}{1-\dfrac{1}{w}}$ for $w\neq 0,1$ is recorded as $\dfrac{w}{w-1}$.",
                True,
                
            ),
        ],
        overview=r"A compound fraction is two ordinary layers: collapse each, then multiply by the reciprocal of the lower layer. A ratio minus its reciprocal over $v^2-9$ produces $12v$, not $6v$.",
    ),
    task(
        title="Three poles sharing a product LCD",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Combining $\dfrac{1}{x}+\dfrac{1}{x+1}+\dfrac{1}{x-1}$ for $x\notin\{-1,0,1\}$ is said to equal $\dfrac{3x^2-1}{x(x^2-1)}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\dfrac{1}{x}+\dfrac{1}{x+1}+\dfrac{1}{x-1}$.""",
                True,
                
            ),
            (
                r"A notebook copies $\dfrac{1}{t}+\dfrac{1}{t+3}+\dfrac{1}{t-3}$ after excluding $t\in\{-3,0,3\}$ as $\dfrac{3t^2}{t(t^2-9)}$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: Subtracting $\dfrac{1}{u^2-9}-\dfrac{1}{u^2-1}$ away from $u=\pm 1,\pm 3$ is claimed to equal $\dfrac{8}{u^2-9}$ — with the intermediate display still carrying $u=\pm 1,\pm 3$.""",
                False,
                
            ),
            (
                r"After factoring $\dfrac{v-3}{v^2-8v+15}$ for $v\neq 3,5$, a reduction to $\dfrac{1}{v-5}$ is recorded.",
                True,
                
            ),
            (
                r"On $w\neq \pm 3$, someone writes $\dfrac{w^2+w-6}{w^2-9}=\dfrac{w-2}{w+3}$.",
                False,
                
            ),
        ],
        overview=r"The LCD of three distinct linear denominators is their product; expanding produces a quadratic whose constant term is easy to drop. Cancelling one linear factor from a quadratic ratio leaves the other factor, not the cancelled one.",
    ),
    task(
        title="Continued nest that lands on a linear remainder",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Clearing the nest $\dfrac{1}{1-\dfrac{1}{1-\dfrac{1}{x}}}$ for $x\neq 0,1$ is said to leave $1-x$.",
                True,
                
            ),
            (
                r"Collapsing $\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{u}}}$ for $u\neq 0,-1,-\dfrac{1}{2}$ is said to equal $\dfrac{u+1}{2u+1}$.",
                True,
                
            ),
            (
                r"Provided $v\neq 0$, putting $v+\dfrac{1}{v}$ over one denominator produces $\dfrac{v^2+1}{v}$.",
                True,
                
            ),
            (
                r"""A candidate first checks a single convenient substitution, finds that both sides agree numerically at that point, and then elevates the agreement to a claimed identity: Squaring $h+\dfrac{1}{h}$ without the cross term, someone writes $\bigl(h+\dfrac{1}{h}\bigr)^2=h^2+\dfrac{1}{h^2}$ for $h\neq 0$. The margin note closes without expanding the general case.""",
                False,
                
            ),
            (
                r"Whenever $t\neq 8$, reducing $\dfrac{t^2-64}{t-8}$ is claimed as $t-8$, and that remainder at $t=0$ is said to match the original $-8$.",
                False,
                
            ),
        ],
        overview=r"A three-layer minus nest of unit fractions simplifies to $1-x$; the matching plus nest simplifies to $(u+1)/(2u+1)$. Dropping the $2$ when squaring $h+1/h$, or keeping a cancelled factor as the remainder, both fail.",
    ),
    task(
        title="Stacked negative powers missing a leftover factor",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Simplifying $\dfrac{\dfrac{1}{x}+\dfrac{1}{x^2}}{\dfrac{1}{x^2}-\dfrac{1}{x^3}}$ for $x\neq 0,1$ is claimed to equal $\dfrac{x(x+1)}{x-1}$.",
                True,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: Dividing matching geometric pieces $\dfrac{\dfrac{1}{t}+\dfrac{1}{t^2}}{\dfrac{1}{t}-\dfrac{1}{t^2}}$ is said to leave $\dfrac{t+1}{t-1}$ for $t\neq 0,1$. On that basis, the claim is then entered in the answer key without a second expansion.""",
                True,
                
            ),
            (
                r"On $v\neq 0$ and $v\neq 1$, someone writes $\dfrac{1}{v^2}-\dfrac{1}{v^3}=\dfrac{v-1}{v^2}$.",
                False,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: After cancelling $\dfrac{w^3-27}{w-3}$ for $w\neq 3$, the quadratic $w^2+3w+9$ is recorded, and at $w=0$ that remainder is said to match the original value $9$. Any remaining letters are declared free once that one check has passed.""",
                True,
                
            ),
            (
                r"Combining $\dfrac{h}{k}-\dfrac{k}{h}$ on $hk\neq 0$ is rewritten as $\dfrac{(h-k)^2}{hk}$.",
                False,
                
            ),
        ],
        overview=r"A stack of negative powers is two ordinary fractions. Multiply by the reciprocal of the lower layer; dropping a leftover factor $x$, or using the wrong common power, both fail. Difference of cubes still cancels to $w^2+3w+9$.",
    ),
    task(
        title="Cancel two pieces then add a leftover ratio",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Combining $\dfrac{u^2-25}{u-5}-\dfrac{u^2-9}{u-3}+\dfrac{8}{u+1}$ for $u\notin\{-1,3,5\}$ is said to equal $\dfrac{2(u+5)}{u+1}$.",
                True,
                
            ),
            (
                r"A script records $\dfrac{v^2-49}{v-7}-\dfrac{v^2-9}{v-3}+\dfrac{5}{v+2}$ for $v\notin\{-2,3,7\}$ as $\dfrac{v+7}{v+2}$.",
                False,
                
            ),
            (
                r"Provided $w\neq 8$, the cancelled remainder of $\dfrac{w^2-64}{w-8}$ is $w+8$, and at $w=0$ this is said to match the original $8$.",
                True,
                
            ),
            (
                r"On $h\neq 3$, reducing $\dfrac{h^2+6h+9}{h+3}$ is claimed to leave $h-3$.",
                False,
                
            ),
            (
                r"""The board's model solution records, as if it were an identity, the following holds on the stated domain: Whenever $k\neq -5$, someone writes $\dfrac{k^2+10k+25}{k+5}-\dfrac{k^2-25}{k+5}=0$, with the added remark that domain caveats may be left implicit once written once.""",
                False,
                
            ),
        ],
        overview=r"Cancel each difference of squares first, then add the leftover unit-over-linear term. A pair of quotients over the same linear denominator collapses to a constant, not to zero.",
    ),
    task(
        title="A product of reciprocal rational pieces",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Multiplying $\Bigl(\dfrac{x}{x-3}-\dfrac{x}{x+3}\Bigr)\cdot\dfrac{x^2-9}{6x}$ for $x\neq 0,\pm 3$ is said to leave $1$.",
                True,
                
            ),
            (
                r"Squaring $\bigl(1+\dfrac{1}{k}\bigr)$ for $k\neq 0$ is claimed equal to $1+\dfrac{1}{k^2}$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: After clearing $1+\dfrac{1}{1+\dfrac{1}{v}}$ for $v\neq 0,-1$, a report of $\dfrac{2v+1}{v+1}$ is accepted — with the intermediate display still carrying $v\neq 0,-1$.""",
                True,
                
            ),
            (
                r"Provided $t\neq \pm 3$, reducing $\dfrac{6t}{t^2-9}\cdot\dfrac{t-3}{3}$ is claimed to leave $\dfrac{2t}{t+3}$.",
                True,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: Adding swapped linear ratios $\dfrac{u+5}{u-5}+\dfrac{u-5}{u+5}=\dfrac{2u}{u^2-25}$ off $u=\pm 5$, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                False,
                
            ),
        ],
        overview=r"The difference $x/(x-3)-x/(x+3)$ simplifies to $6x/(x^2-9)$, which is reciprocal to $(x^2-9)/(6x)$. Adding a ratio to its reciprocal produces $2(u^2+25)/(u^2-25)$, not a linear numerator.",
    ),
    task(
        title="Constant from a difference of expanded squares",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Dividing $(x+3)^2-(x-3)^2$ by $x\neq 0$ is said to leave the constant $12$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $(x+3)^2-(x-3)^2$.""",
                True,
                
            ),
            (
                r"On $hk\neq 0$ and $h\neq k$, someone writes $\dfrac{h}{h-k}+\dfrac{k}{k-h}=0$.",
                False,
                
            ),
            (
                r"Provided $v\neq 0$, the halved form $\dfrac{(v+5)^2-(v-5)^2}{2v}$ equals $10$.",
                True,
                
            ),
            (
                r"Whenever $w\neq z$, rewriting $\dfrac{w}{w-z}-\dfrac{z}{w-z}$ as $1$ is accepted.",
                True,
                
            ),
            (
                r"Combining $\dfrac{3}{y}+\dfrac{8}{y}$ for $y\neq 0$ with LCD taken as $y+y=2y$ is claimed to produce $\dfrac{11}{2y}$.",
                False,
                
            ),
        ],
        overview=r"The difference of two expanded squares is a constant times the letter, so the quotient by that letter is constant. Opposite linear denominators $h-k$ and $k-h$ make the paired sum equal $1$, not $0$.",
    ),
    task(
        title="Quadratic over quadratic with the wrong leftover",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Reducing $\dfrac{x^2-25}{x^2-5x}$ for $x\neq 0,5$ is said to leave $\dfrac{x+5}{x}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\dfrac{x^2-25}{x^2-5x}$.""",
                True,
                
            ),
            (
                r"A notebook records $\dfrac{t^2-36}{t^2-t-30}=\dfrac{t-6}{t+5}$ whenever $t\neq 6$ and $t\neq -5$.",
                False,
                
            ),
            (
                r"Factoring both ends of $\dfrac{u^2-8u+15}{u^2-9}$ reduces it to $\dfrac{u-5}{u+3}$ off $u=\pm 3$.",
                True,
                
            ),
            (
                r"""After a quick numerical spot-check that happens to match, the notebook promotes the local agreement into a general rule: Pulling five from $\dfrac{5v-15}{v^2-9}$ is claimed to leave $\dfrac{5}{v+3}$ off $v=\pm 3$. Any remaining letters are declared free once that one check has passed.""",
                True,
                
            ),
            (
                r"With $w\neq 1$, someone writes $\dfrac{w^3-1}{w-1}=w^2-w+1$.",
                False,
                
            ),
        ],
        overview=r"Factor both quadratics completely, cancel one shared linear factor, and keep the leftover linear ratio. Difference of cubes produces $w^2+w+1$, not $w^2-w+1$.",
    ),
    task(
        title="Sum of squares treated as a square of a sum",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Treating $\dfrac{x^2+y^2}{x+y}$ as identical to $x+y$ whenever $x+y\neq 0$ is claimed to be legitimate.",
                False,
                
            ),
            (
                r"""Under the standing hypothesis that every letter is real (and nonzero wherever a denominator appears), the following assertion is recorded: Cancelling a genuine square, $\dfrac{t^2+6t+9}{t+3}$ equals $t+3$ for $t\neq -3$, and at $t=0$ this remainder is said to match the original value $3$. On that basis, the notebook treats the rewritten form as an identity on the whole stated domain.""",
                True,
                
            ),
            (
                r"The companion $\dfrac{v^2-10v+25}{v-5}$ is reduced to $v-5$ for $v\neq 5$, and at $v=0$ the remainder is said to equal the original $-5$.",
                True,
                
            ),
            (
                r"Provided $h\neq -k$ and $h\neq k$, the quotient $\dfrac{h^2-k^2}{(h+k)^2}$ equals $\dfrac{h+k}{h-k}$.",
                False,
                
            ),
            (
                r"On $z\neq -5$, someone writes $\dfrac{z^2+25}{z+5}=z+5$.",
                False,
                
            ),
        ],
        overview=r"Only a genuine expanded square $(t\pm 3)^2$ cancels to $t\pm 3$. A sum of squares leaves a leftover cross-term correction $-2xy/(x+y)$.",
    ),
    task(
        title="Swapped two-letter ratios in a stacked quotient",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Simplifying $\dfrac{\dfrac{h}{k}-\dfrac{k}{h}}{\dfrac{h}{k}+\dfrac{k}{h}}$ for $hk\neq 0$ is said to equal $\dfrac{h^2-k^2}{h^2+k^2}$.",
                True,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: Filing $\dfrac{\dfrac{t}{u}+\dfrac{u}{t}}{\dfrac{t}{u}-\dfrac{u}{t}}$ for $tu\neq 0$ and $t\neq \pm u$ as $\dfrac{t^2-u^2}{t^2+u^2}$. On that basis, a second marker initials the line after comparing only the leading terms.""",
                False,
                
            ),
            (
                r"After cancelling $\dfrac{z^3-125}{z-5}$ for $z\neq 5$, the quadratic $z^2+5z+25$ is recorded, and at $z=0$ it is said to match the original $25$.",
                True,
                
            ),
            (
                r"Provided $xy\neq 0$ and $3y+5x\neq 0$, someone writes $\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{3}{x}+\dfrac{5}{y}}=\dfrac{3x-5y}{3x+5y}$.",
                False,
                
            ),
            (
                r"""In the version circulated to markers, an administrative note asserts that the following holds on the stated domain: On $k\neq 0$, expanding $\bigl(1+\dfrac{1}{k}\bigr)^2$ is recorded as $\dfrac{k^2+2k+1}{k^2}$, together with the instruction that mixed-product coefficients need not be recomputed from scratch.""",
                True,
                
            ),
        ],
        overview=r"Dividing $h/k-k/h$ by $h/k+k/h$ cancels the shared $hk$ and leaves $(h^2-k^2)/(h^2+k^2)$. Reciprocating that result, or swapping which letter sits with which coefficient, both fail.",
    ),
    task(
        title="Squared minus sign in a monomial denominator",
        subsection="2.2",
        difficulty="4/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Evaluating $\dfrac{3\cdot(3k)}{(-3k)^2}$ for $k\neq 0$ is said to leave $\dfrac{1}{k}$.",
                True,
                
            ),
            (
                r"Someone treats $\dfrac{5\cdot(5t)}{(-5t)^2}$ for $t\neq 0$ as $-\dfrac{1}{t}$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then discarding what remains after the principal operation as 'identically zero'. The finished claim reads: Squaring the minus, $\dfrac{9}{(-3u)^2}$ equals $\dfrac{1}{u^2}$ for every $u\neq 0$ — with the intermediate display still carrying $\dfrac{1}{u^2}$.""",
                True,
                
            ),
            (
                r"Provided $v\neq 3$, reducing $\dfrac{15}{5v-15}$ is claimed to leave $\dfrac{3}{v-3}$.",
                True,
                
            ),
            (
                r"Combining $\dfrac{h}{k}+\dfrac{k}{h}-2$ on $hk\neq 0$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                False,
                
            ),
        ],
        overview=r"Squaring a negative monomial removes the minus sign. Coefficients in the numerator must be counted exactly. The combination $h/k+k/h-2$ is $(h-k)^2/hk$, not $(h+k)^2/hk$.",
    ),
    task(
        title="Harmonic-looking product over a two-letter sum",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Taking twice the reciprocal of $\dfrac{1}{t}+\dfrac{1}{u}$ for $tu\neq 0$ and $t+u\neq 0$ produces $\dfrac{2tu}{t+u}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\dfrac{1}{t}+\dfrac{1}{u}$.""",
                True,
                
            ),
            (
                r"Identifying $\dfrac{2hk}{h+k}$ with $\dfrac{h+k}{2}$ whenever $hk\neq 0$ and $h+k\neq 0$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: After cancelling $\dfrac{v^3+27}{v+3}$ for $v\neq -3$, the quadratic $v^2-3v+9$ at $v=0$ is said to match the original $9$ — with the intermediate display still carrying $v\neq -3$.""",
                True,
                
            ),
            (
                r"Clearing the three-layer plus nest $1+\dfrac{1}{1+\dfrac{1}{1+\dfrac{1}{k}}}$ for $k\neq 0,-1,-\dfrac{1}{2}$ is said to leave $\dfrac{3k+2}{2k+1}$.",
                True,
                
            ),
            (
                r"On $w\neq 0$, $\bigl(1-\dfrac{1}{w}\bigr)^2$ is recorded as $1-\dfrac{1}{w^2}$.",
                False,
                
            ),
        ],
        overview=r"Twice the reciprocal of a sum of unit fractions is $2tu/(t+u)$, not the arithmetic mean. A three-layer plus nest of unit fractions simplifies to $(3k+2)/(2k+1)$. Sum of cubes still cancels to $v^2-3v+9$.",
    ),
    task(
        title="Three unit fractions with a false linear numerator",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Combining $\dfrac{1}{h}+\dfrac{1}{k}+\dfrac{1}{t}$ for $hkt\neq 0$ is said to equal $\dfrac{kt+ht+hk}{hkt}$.",
                True,
                
            ),
            (
                r"A script writes $\dfrac{1}{u}+\dfrac{1}{v}+\dfrac{1}{w}=\dfrac{u+v+w}{uvw}$ whenever $uvw\neq 0$.",
                False,
                
            ),
            (
                r"Adding $\dfrac{1}{3x}+\dfrac{1}{6x}$ for $x\neq 0$ is said to leave $\dfrac{1}{2x}$.",
                True,
                
            ),
            (
                r"""Relying on the observation that a particular test pair does not immediately refute the line, the marker records the universal claim: Provided $z\neq \pm 5$, reducing $\dfrac{2z-10}{z^2-25}$ leaves $\dfrac{2}{z+5}$. The claim is filed as settled for every admissible value of the letters.""",
                True,
                
            ),
            (
                r"On $h\neq \pm k$, someone writes $\dfrac{3h-3k}{h^2-k^2}=\dfrac{3}{h-k}$.",
                False,
                
            ),
        ],
        overview=r"Three unit fractions combine over $hkt$ with numerator $kt+ht+hk$. Replacing that numerator by $h+k+t$ is the usual error. A two-letter difference over a difference of squares cancels to $3/(h+k)$.",
    ),
    task(
        title="Cancelled linear factor kept in the denominator",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Reducing $\dfrac{x-5}{x^2-8x+15}$ for $x\neq 5,3$ is said to leave $\dfrac{1}{x-3}$.",
                True,
                
            ),
            (
                r"""Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact, the following assertion is recorded: Copying the reduced form of $\dfrac{t-3}{t^2-8t+15}$ after excluding $t\in\{3,5\}$ as $\dfrac{1}{t-3}$. On that basis, a second marker initials the line after comparing only the leading terms.""",
                False,
                
            ),
            (
                r"Subtracting neighbouring unit factors $\dfrac{1}{u-3}-\dfrac{1}{u-5}$ equals $\dfrac{-2}{(u-3)(u-5)}$ off $u=3,5$.",
                True,
                
            ),
            (
                r"""The working is arranged so that an intermediate numerical check looks supportive; from that support the following identity is asserted on the whole domain: The pair $\dfrac{1}{v(v+1)}+\dfrac{1}{v(v-1)}$ is combined to $\dfrac{2}{v^2-1}$ for $v\neq 0,\pm 1$. No second independent substitution is attempted.""",
                True,
                
            ),
            (
                r"With $w\neq \pm 3$, someone writes $\dfrac{w^2+w-6}{w^2-9}=\dfrac{w+2}{w-3}$.",
                False,
                
            ),
        ],
        overview=r"Factor $x^2-8x+15=(x-5)(x-3)$ and cancel $x-5$ to leave $1/(x-3)$. Keeping the cancelled factor, or swapping a constant in a nearby quadratic ratio, both fail.",
    ),
    task(
        title="Opposite linear factors that differ by a minus",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Adding $\dfrac{1}{h(h-k)}+\dfrac{1}{k(k-h)}$ for $hk\neq 0$ and $h\neq k$ is said to leave $-\dfrac{1}{hk}$.",
                True,
                
            ),
            (
                r"After squaring $\bigl(1+\dfrac{3}{x}\bigr)$ for $x\neq 0$, a candidate drops the cross term and records $1+\dfrac{9}{x^2}$.",
                False,
                
            ),
            (
                r"Bare opposite unit fractions $\dfrac{1}{v-w}+\dfrac{1}{w-v}$ are claimed to vanish for every $v\neq w$.",
                True,
                
            ),
            (
                r"Provided $hk\neq 0$ and $h\neq -k$, the split $\dfrac{1}{h(h+k)}+\dfrac{1}{k(h+k)}$ equals $\dfrac{1}{hk}$.",
                True,
                
            ),
            (
                r"""According to the examiner's standardisation sheet, the following holds on the stated domain: Opposite linear denominators are added as $\dfrac{tu}{t-u}+\dfrac{tu}{u-t}=tu$ after $tu\neq 0$ and $t\neq u$, and further instructs candidates to treat any matching numerical check as decisive.""",
                False,
                
            ),
        ],
        overview=r"The identity $k-h=-(h-k)$ turns $\frac{1}{h(h-k)}+\frac{1}{k(k-h)}$ into $-1/(hk)$, not $+1/(hk)$. Bare opposite unit fractions cancel to $0$; so do opposite copies of $tu/(t-u)$.",
    ),
    task(
        title="Cubic LCD of three neighbouring linears",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Combining $\dfrac{1}{t-3}+\dfrac{1}{t-5}+\dfrac{1}{t-6}$ off $\{3,5,6\}$ is said to equal $\dfrac{3t^2-28t+63}{(t-3)(t-5)(t-6)}$.",
                True,
                
            ),
            (
                r"The three-pole sum $\dfrac{1}{u}+\dfrac{1}{u+5}+\dfrac{1}{u-5}$ is copied as $\dfrac{3u^2}{u(u^2-25)}$ after excluding $u\in\{-5,0,5\}$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then treating the rewritten line as settled on the whole stated domain. The finished claim reads: Dropping a factor, $\dfrac{1}{v^2-25}-\dfrac{1}{v^2-9}$ is claimed to equal $\dfrac{16}{v^2-25}$ away from $v=\pm 3,\pm 5$ — with the intermediate display still carrying $\dfrac{16}{v^2-25}$.""",
                False,
                
            ),
            (
                r"After reducing $\dfrac{w^4-1}{w^2-1}$ whenever $w^2\neq 1$, a remainder $w^2+1$ is recorded.",
                True,
                
            ),
            (
                r"""A standardisation remark distributed with the script states that the following holds on the stated domain: Differencing reciprocal squares $\dfrac{1}{(z-1)^2}-\dfrac{1}{(z+1)^2}$ produces $\dfrac{4z}{(z^2-1)^2}$ off $z=\pm 1$, while explicitly permitting the omission of a full symbolic expansion.""",
                True,
                
            ),
        ],
        overview=r"The LCD of three distinct linear denominators is their product. Subtracting reciprocal quadratics keeps both quadratic factors. A difference of reciprocal squares over $(z\pm 1)^2$ produces $4z/(z^2-1)^2$.",
    ),
    task(
        title="Square of a swapped-ratio sum beside a cubic",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Squaring the sum $\dfrac{h}{k}+\dfrac{k}{h}$ for $hk\neq 0$ is said to equal $\dfrac{(h^2+k^2)^2}{h^2k^2}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\dfrac{h}{k}+\dfrac{k}{h}$.""",
                True,
                
            ),
            (
                r"Subtracting in the opposite order, $\dfrac{k}{h}-\dfrac{h}{k}$ for $hk\neq 0$ is claimed to equal $\dfrac{h^2-k^2}{hk}$.",
                False,
                
            ),
            (
                r"The stacked ratio $\dfrac{\dfrac{3}{x}-\dfrac{5}{y}}{\dfrac{1}{x}+\dfrac{1}{y}}$ reduces to $\dfrac{3y-5x}{x+y}$ for $xy\neq 0$ and $x\neq -y$.",
                True,
                
            ),
            (
                r"Provided $t\neq u$, the cubic ratio $\dfrac{t^3-u^3}{t^2+tu+u^2}$ equals $t-u$.",
                True,
                
            ),
            (
                r"A swapped-ratio difference $\dfrac{v+3}{v-3}-\dfrac{v-3}{v+3}=\dfrac{6v}{v^2-9}$ once $v\neq\pm 3$.",
                False,
                
            ),
        ],
        overview=r"The square of $h/k+k/h$ is $(h^2+k^2)^2/(h^2k^2)$. Swapping the order of a difference flips the sign of $h^2-k^2$. A ratio minus its reciprocal over $v^2-9$ produces $12v/(v^2-9)$, not $6v/(v^2-9)$.",
    ),
    task(
        title="Outer reciprocal of a two-storey $x$-nest",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"""Having first noted the printed data and working without solving the underlying system for each letter separately, an examiner restates the claim as follows: Clearing $\dfrac{1}{x+\dfrac{1}{x+\dfrac{1}{x}}}$ for $x\neq 0$ is said to equal $\dfrac{x^2+1}{x(x^2+2)}$. The same note then ticks the line as settled, arguing that no further algebraic check is required once the rewritten form has been written beside the original expression involving $\dfrac{1}{x+\dfrac{1}{x+\dfrac{1}{x}}}$.""",
                True,
                
            ),
            (
                r"Cancelling $\dfrac{u^3-125}{u-5}$ for $u\neq 5$ is recorded as $u^2+5u+25$, and at $u=0$ that remainder is said to match the original $25$.",
                True,
                
            ),
            (
                r"Combining $\dfrac{6}{t}+\dfrac{8}{u}$ on $tu\neq 0$ over LCD $t+u$ is claimed to produce $\dfrac{14}{t+u}$.",
                False,
                
            ),
            (
                r"""The working is arranged so that an intermediate numerical check looks supportive; from that support the following identity is asserted on the whole domain: With $k\neq 0$ and $h\neq k$, someone writes $\dfrac{1+\dfrac{h}{k}}{1-\dfrac{h}{k}}=\dfrac{k-h}{k+h}$. No second independent substitution is attempted.""",
                False,
                
            ),
            (
                r"On $w\neq 0$, expanding $\bigl(w-\dfrac{1}{w}\bigr)^2$ is recorded as $w^2-2+\dfrac{1}{w^2}$.",
                True,
                
            ),
        ],
        overview=r"A continued nest $1/(x+1/(x+1/x))$ simplifies to $(x^2+1)/(x(x^2+2))$. The stack $(1+h/k)/(1-h/k)$ is $(k+h)/(k-h)$, not the swapped ratio. An LCD remains a product.",
    ),
    task(
        title="Quartic cancel mixed with reciprocal squares",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Factoring $\dfrac{t^4-1}{t^2-1}$ whenever $t^2\neq 1$ is said to leave $t^2+1$.",
                True,
                
            ),
            (
                r"""With the provisional reading that like terms have already been collected correctly, the following assertion is recorded: Squaring the sum $\dfrac{1}{x}+\dfrac{1}{y}$ for $xy\neq 0$ is claimed to leave $\dfrac{1}{x^2}+\dfrac{1}{y^2}$. On that basis, the remaining cross-check against a concrete numerical pair is judged unnecessary.""",
                False,
                
            ),
            (
                r"Subtracting $\dfrac{1}{(u-3)^2}-\dfrac{1}{(u+3)^2}$ produces $\dfrac{12u}{(u^2-9)^2}$ off $u=\pm 3$.",
                True,
                
            ),
            (
                r"The squared-difference quotient $\dfrac{(v-w)^2}{v^2-w^2}$ reduces to $\dfrac{v-w}{v+w}$ for $v\neq\pm w$.",
                True,
                
            ),
            (
                r"On $z\neq 5$, someone writes $\dfrac{z^2-25}{z-5}=z-5$.",
                False,
                
            ),
        ],
        overview=r"A cancellation $t^4-1$ over $t^2-1$ leaves $t^2+1$. A squared sum of unit fractions keeps the cross term $2/xy$. A difference of reciprocal squares over $(u\pm 3)^2$ produces $12u/(u^2-9)^2$.",
    ),
    task(
        title="Two candidate rewritings of a compound stack",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Two candidate rewritings of $\dfrac{1-\dfrac{3}{t}}{1+\dfrac{3}{t}}$ for $t\neq 0,-3$, namely $\dfrac{t-3}{t+3}$ and $\dfrac{t+3}{t-3}$, are treated as equal.",
                False,
                
            ),
            (
                r"""Taking as given that the clerk's intermediate cancellation step introduces no hidden factors, the following assertion is recorded: Provided $u\neq 0,5$, collapsing $\dfrac{1-\dfrac{5}{u}}{1-\dfrac{1}{u}}$ is recorded as $\dfrac{u-5}{u-1}$. On that basis, the claim is then entered in the answer key without a second expansion.""",
                True,
                
            ),
            (
                r"After cancelling $\dfrac{v^3-27}{v-3}$ for $v\neq 3$ as $v^2+3v+9$, a second rewriting $v^2-3v+9$ is treated as the same polynomial.",
                False,
                
            ),
            (
                r"On $hk\neq 0$, rewriting $\dfrac{h}{k}+\dfrac{k}{h}+2$ as $\dfrac{(h+k)^2}{hk}$ is accepted.",
                True,
                
            ),
            (
                r"""A standardisation remark distributed with the script states that the following holds on the stated domain: Clearing $\dfrac{1}{1+\dfrac{1}{w-1}}$ for $w\neq 0,1$ is said to leave $\dfrac{w-1}{w}$, while explicitly permitting the omission of a full symbolic expansion.""",
                True,
                
            ),
        ],
        overview=r"Two candidate simplifications of a compound fraction need not be equal: one may be the reciprocal of the other. The plus combination $h/k+k/h+2$ really is $(h+k)^2/hk$; mixing a difference-of-cubes quadratic with a sum-of-cubes quadratic is not.",
    ),
    task(
        title="Exam mix of leftover cancellation traps",
        subsection="2.2",
        difficulty="5/5",
        context="Evaluate each statement. Mark it TRUE or FALSE.",
        items=[
            (
                r"Provided $w\neq 5$, reducing $\dfrac{w^3-125}{w-5}$ is recorded as $w^2-5w+25$. Checking that remainder at $w=0$ is then said to recover the original value $25$.",
                False,
                
            ),
            (
                r"On $yz\neq 0$, adding $\dfrac{7}{y}+\dfrac{3}{z}$ with common denominator $y+z$ is claimed to produce $\dfrac{10}{y+z}$.",
                False,
                
            ),
            (
                r"""A multi-step margin note proceeds by first clearing shared factors or writing a common denominator, then reading the surviving expression as the claimed remainder, and then substituting a single convenient test value and reading agreement as confirmation. The finished claim reads: After clearing $\dfrac{1}{1-\dfrac{1}{u}}$ for $u\neq 0,1$, a candidate reports $\dfrac{u}{u-1}$ — with the intermediate display still carrying $u\neq 0,1$.""",
                True,
                
            ),
            (
                r"Whenever $x\neq 0$, $\bigl(1+\dfrac{1}{x}\bigr)^2$ is treated as $1+\dfrac{1}{x^2}$.",
                False,
                
            ),
            (
                r"Combining $\dfrac{1}{h^2}-\dfrac{1}{k^2}$ on $hk\neq 0$ as $\dfrac{k^2-h^2}{h^2k^2}$ is accepted.",
                True,
                
            ),
        ],
        overview=r"A closing mix: a cubic with the wrong middle sign that a test at $0$ fails to catch, an LCD-as-sum trap, a minus nest, a binomial square missing its cross term, and a genuine difference of reciprocal squares.",
    ),
]
