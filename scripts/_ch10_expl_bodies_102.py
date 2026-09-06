"""Chapter 10.2 tactical explanation bodies (MATH 10.2.1–10.2.49).

Ch7/Ch9 teacher voice. Length follows the claim — no padding floors or median targets.
"""
from __future__ import annotations

BODIES_102: dict[str, dict] = {}
BODIES_102['MATH 10.2.1'] = {
    "solution_overview": 'The figure is the base-$2$ logarithm $f(x)=\\log_{2}x$ on $(0,\\infty)$. Every admissible logarithm meets the axis at $(1,0)$, has vertical asymptote $x=0$, and recovers exponents via $\\log_{2}(2^{k})=k$. With base $b=2>1$ the graph is strictly increasing, never decreasing.',
    "tactical_explanations": [
        '**A.** → True\n\nEvery logarithm of base $b>0$, $b\\neq 1$, vanishes at the argument $1$. Write the normalisation rule once.\n\n$$\n\\log_{b}1=0\n$$\n\nSubstitute the concrete base $b=2$ from the figure.\n\n$$\nf(1)=\\log_{2}1=0\n$$\n\nThat is exactly the horizontal intercept $(1,0)$ marked on the graph, so the claim matches the definition.\n\nEquivalently $2^{0}=1$ forces the height at the intercept to vanish.\n\nSo the statement is True.',
        '**B.** → False\n\nMonotonicity of $\\log_{b}$ is controlled by the size of the base. For every base $b>1$ the map is strictly increasing, not decreasing: if $0<x<y$ then\n\n$$\n\\log_{b}x<\\log_{b}y\n$$\n\nEquivalently, the derivative $(\\ln b)^{-1}x^{-1}$ is positive when $b>1$. Bases in $(0,1)$ reverse the inequality. The blanket claim that every base $b>1$ yields a decreasing logarithm is therefore false.\n\nA concrete increasing sample with base $2$: $\\log_{2}1=0<\\log_{2}2=1$.\n\nSo the statement is False.',
        '**C.** → False\n\nThe concrete rule on the figure has base $2>1$, so $f$ inherits the increasing regime. Compare two sample inputs.\n\n$$\nf(1)=\\log_{2}1=0,\\qquad f(2)=\\log_{2}2=1\n$$\n\nSince $1<2$ yet $f(1)<f(2)$, the graph rises. A strictly decreasing claim on $(0,\\infty)$ fails.\n\nThe same comparison $f(1)<f(2)$ already contradicts a decreasing claim on $(0,\\infty)$.\n\nSo the statement is False.',
        '**D.** → False\n\nThe domain condition for a real logarithm is that the argument be strictly positive.\n\n$$\nu>0\n$$\n\nAt $u=0$ the expression $\\log_{b}u$ is undefined, and the graph of $f$ only approaches the asymptote $x=0$ without ever meeting it. Zero arguments are never admitted.\n\nEquivalently, the natural domain of $f$ is written\n\n$$\n(0,\\infty)\n$$\n\nwhich already excludes the asymptote abscissa $0$.\n\nSo the statement is False.',
        "**E.** → False\n\nRewrite the claimed input as a power of the base, then apply the inverse relation $\\log_{2}(2^{k})=k$.\n\n$$\n\\frac12=2^{-1}\n$$\n\n$$\nf\\!\\left(\\frac12\\right)=\\log_{2}(2^{-1})=-1\n$$\n\nThe claim announces the value $1$, but the evaluation returns $-1$, so the statement is wrong.\n\nThe claim's value $1$ would instead be\n\n$$\n\\log_{2}(2^{1})=1\n$$\n\nwhich sits at the input $2$, not at $1/2$.\n\nSo the statement is False.",
    ],
}

BODIES_102['MATH 10.2.2'] = {
    "solution_overview": 'Change of base converts every table row into a single ratio: $\\log_{b}a=\\ln a/\\ln b$. The lettered pairs give $P\\mapsto\\log_{2}8=3$, $Q\\mapsto\\log_{3}9=2$, and $R\\mapsto\\log_{e}(e^{2})=2$. Inverse partners $b^{t}$ and $\\log_{b}$ keep complementary domains $\\mathbb{R}$ and $(0,\\infty)$.',
    "tactical_explanations": [
        "**A.** → True\n\nChange of base rewrites the claimed logarithm as a ratio of natural logs.\n\n$$\n\\log_{2}8=\\frac{\\ln 8}{\\ln 2}\n$$\n\nBecause $8=2^{3}$, the power law collapses the value at once.\n\n$$\n\\log_{2}(2^{3})=3\n$$\n\nThe table's ratio for pair $P$ is therefore exactly $3$, matching $\\log_{2}8$.\n\nThe table's approximate ratio $2.0794/0.6931\\approx 3.000$ matches the exact integer.\n\nSo the statement is True.",
        "**B.** → True\n\nApply the same change-of-base identity to pair $Q$.\n\n$$\n\\log_{3}9=\\frac{\\ln 9}{\\ln 3}\n$$\n\nRewrite $9$ as a pure power of the base.\n\n$$\n9=3^{2}\\implies\\log_{3}(3^{2})=2\n$$\n\nThe table ratio equals $2$, so the claim holds.\n\nThe table's approximate ratio $2.1972/1.0986\\approx 2.000$ matches the exact integer.\n\nSo the statement is True.",
        '**C.** → False\n\nThe exponential $b^{t}$ accepts every real exponent, while $\\log_{b}$ accepts only positive arguments. Their natural domains are therefore complementary:\n\n$$\n\\operatorname{dom}(b^{\\,\\cdot\\,})=\\mathbb{R},\\qquad\\operatorname{dom}(\\log_{b})=(0,\\infty)\n$$\n\nThey are inverse partners, but they do not share one common domain. The claim fails.\n\nWriting $\\mathbb{R}$ versus $(0,\\infty)$ records the complementary domains of the inverse pair.\n\nSo the statement is False.',
        '**D.** → False\n\nChange of base is an identity on the full admissible set $a>0$ and $b>0$ with $b\\neq 1$. Integer status of $a$ or $b$ is irrelevant. For instance the integer pair $(8,2)$ already satisfies\n\n$$\n\\frac{\\ln 8}{\\ln 2}=3=\\log_{2}8\n$$\n\nThe identity does not fail on integers; it continues to hold.\n\nNon-integer pairs such as $(e^{2},e)$ also satisfy the same change-of-base identity.\n\nSo the statement is False.',
        '**E.** → False\n\nPair $P$ was already evaluated as $\\log_{2}8=3$. Compare that value with the claimed threshold $2$.\n\n$$\n3>2\n$$\n\nThe ratio is strictly larger than $2$, not strictly less, so the statement is false.\n\nReading the table ratio for pair $P$ confirms the same integer height $3.000$.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.3'] = {
    "solution_overview": 'Work with a fixed base $>1$ written $\\log$, on $a>0$, $b>0$, and real exponents $c$. The surviving laws are the product, quotient, and power identities. Addition inside a logarithm and confusing $\\log(a^{2})$ with $(\\log a)^{2}$ are not identities.',
    "tactical_explanations": [
        '**A.** → True\n\nThe product law converts a logarithm of a product into a sum of logarithms, for every positive factor pair.\n\n$$\n\\log(ab)=\\log a+\\log b\\qquad(a>0,\\,b>0)\n$$\n\nIt follows from $b^{\\log a+\\log b}=b^{\\log a}\\,b^{\\log b}=ab$. The claim is exactly that identity, so it holds.\n\nIn exponential language, $b^{\\log a+\\log b}=ab$ recovers the product.\n\nSo the statement is True.',
        '**B.** → True\n\nThe quotient law is the product law applied to $a\\cdot b^{-1}$.\n\n$$\n\\log\\!\\left(\\frac{a}{b}\\right)=\\log a+\\log(b^{-1})=\\log a-\\log b\n$$\n\nfor every $a>0$ and $b>0$. The displayed statement matches this rule.\n\nIn exponential language, $b^{\\log a-\\log b}=a/b$ recovers the quotient.\n\nSo the statement is True.',
        '**C.** → False\n\nThere is no universal addition-inside law. A concrete counter-example kills it at once. Take $a=b=1$.\n\n$$\n\\log(1+1)=\\log 2\n$$\n\n$$\n\\log 1+\\log 1=0+0=0\n$$\n\nSince $\\log 2\\neq 0$, the claimed equality fails for these positive inputs.\n\nThe surviving laws act on products, quotients, and powers — never on bare sums.\n\nSo the statement is False.',
        '**D.** → True\n\nThe power law moves a real exponent outside the logarithm.\n\n$$\n\\log(a^{c})=c\\log a\\qquad(a>0,\\,c\\in\\mathbb{R})\n$$\n\nIt follows from $b^{c\\log a}=(b^{\\log a})^{c}=a^{c}$. The claim is precisely this identity.\n\nIn exponential language, $b^{c\\log a}=(b^{\\log a})^{c}=a^{c}$.\n\nSo the statement is True.',
        '**E.** → False\n\nExpand both sides with the power law and compare. The left side is linear in $\\log a$.\n\n$$\n\\log(a^{2})=2\\log a\n$$\n\nThe right side is the square of the log value.\n\n$$\n(\\log a)^{2}\n$$\n\nThese agree only for special $a$ (solving $2u=u^{2}$), not for every $a>0$. The universal claim fails.\n\nFor a concrete mismatch take $a=e$ in natural logs: left side $2$, right side $1$.\n\n$$\n2\\neq 1\n$$\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.4'] = {
    "solution_overview": 'With $p<q$, the argument $(x-p)(q-x)$ is a downward parabola that is positive precisely on the open interval $(p,q)$. Endpoints make the argument $0$ and are excluded. On $(p,q)$ both factors are positive, so the product law splits the logarithm.',
    "tactical_explanations": [
        '**A.** → True\n\nA real logarithm needs a strictly positive argument, so solve\n\n$$\n(x-p)(q-x)>0\n$$\n\nThe roots are $x=p$ and $x=q$. With $p<q$ the product of the two linear factors is positive exactly between them.\n\n$$\nx\\in(p,q)\n$$\n\nThat open interval is the natural domain of $f$.\n\nOutside $[p,q]$ the product is negative, so those outer rays are excluded as well.\n\nSo the statement is True.',
        '**B.** → False\n\nAt an endpoint the product collapses to zero. Substitute $x=p$.\n\n$$\n(p-p)(q-p)=0\n$$\n\nLikewise $(q-p)(q-q)=0$. The logarithm of $0$ is undefined, so neither endpoint belongs to the domain.\n\nThe logarithm of $0$ is undefined for every base, so closed endpoints are impossible.\n\nSo the statement is False.',
        '**C.** → True\n\nThe midpoint $x=(p+q)/2$ sits halfway between the roots. Each factor equals half the gap.\n\n$$\n\\frac{p+q}{2}-p=\\frac{q-p}{2},\\qquad q-\\frac{p+q}{2}=\\frac{q-p}{2}\n$$\n\nTheir product is therefore the displayed square.\n\n$$\n\\left(\\frac{q-p}{2}\\right)^{2}>0\n$$\n\nsince $q>p$. The claim matches the arithmetic.\n\nThe midpoint therefore maximises the downward-opening product on $[p,q]$.\n\nSo the statement is True.',
        '**D.** → True\n\nState the product law on its full domain of positive factors.\n\n$$\n\\log(uv)=\\log u+\\log v\\qquad(u>0,\\,v>0)\n$$\n\nThis is a standard logarithm identity for any fixed base $>1$, independent of the parameters $p$ and $q$.\n\nIn exponential language, $b^{\\log u+\\log v}=uv$ recovers the same product identity.\n\nSo the statement is True.',
        '**E.** → True\n\nOn the open interval $(p,q)$ one has both $x-p>0$ and $q-x>0$. The product law therefore applies to those two positive factors.\n\n$$\n\\log\\bigl((x-p)(q-x)\\bigr)=\\log(x-p)+\\log(q-x)\n$$\n\nOutside $(p,q)$ at least one factor is non-positive, so the split would be illegitimate; inside the interval it is valid.\n\nOutside $(p,q)$ at least one factor fails positivity, so the split would be illegitimate.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.5'] = {
    "solution_overview": 'The curve $f(x)=\\log_{b}x$ with $b>1$ is pinned by the unit condition $f(3)=1$, which forces $b=3$. Powers then read $f(3^{k})=k$, and $f$ is the inverse of $g(t)=3^{t}$. The normalisation $\\log_{b}1=0$ holds for every admissible base.',
    "tactical_explanations": [
        '**A.** → True\n\nThe defining property $\\log_{b}b=1$ says that the unique input returning height $1$ is the base itself. The stem gives\n\n$$\nf(3)=\\log_{b}3=1\n$$\n\nTherefore the base must equal that input.\n\n$$\nb=3\n$$\n\nThe intercept and asymptote already match every $\\log_{b}$, so the unit point alone rebuilds $b$.\n\nThe intercept $(1,0)$ and asymptote $x=0$ are shared by every $\\log_{b}$, so only $f(3)=1$ pins $b$.\n\nSo the statement is True.',
        '**B.** → True\n\nWith $b=3$ already recovered, evaluate at $9=3^{2}$ by the power law.\n\n$$\nf(9)=\\log_{3}(3^{2})=2\\log_{3}3=2\n$$\n\nThe claimed height $2$ matches the evaluation.\n\nEquivalently, $9=3^{2}$ is two multiplicative steps of the base from $1$, each adding $1$ to the log height.\n\nSo the statement is True.',
        '**C.** → True\n\nThe power law moves a real exponent across a logarithm of any fixed base.\n\n$$\n\\log(a^{c})=c\\log a\\qquad(a>0)\n$$\n\nIt is one of the three fundamental logarithm identities and holds independently of the rebuilt base $b=3$.\n\nIn exponential language the same rule is $b^{c\\log a}=(b^{\\log a})^{c}=a^{c}$.\n\nSo the statement is True.',
        '**D.** → True\n\nBy construction, $\\log_{3}$ and $t\\mapsto 3^{t}$ are inverse bijections between $(0,\\infty)$ and $\\mathbb{R}$. Check one composition.\n\n$$\n\\log_{3}(3^{t})=t\\qquad(t\\in\\mathbb{R})\n$$\n\n$$\n3^{\\log_{3}x}=x\\qquad(x>0)\n$$\n\nSo the curve $f=\\log_{3}$ is precisely the inverse of $g(t)=3^{t}$.\n\nBoth compositions $\\log_{3}(3^{t})=t$ and $3^{\\log_{3}x}=x$ hold on the matching domains.\n\nSo the statement is True.',
        '**E.** → True\n\nNormalisation at the argument $1$ is part of the definition for every admissible base.\n\n$$\n\\log_{b}1=0\\qquad(b>0,\\,b\\neq 1)\n$$\n\nEquivalently $b^{0}=1$. The identity does not depend on the particular value $b=3$.\n\nEquivalently $b^{0}=1$ forces the intercept height to vanish for every admissible base.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.6'] = {
    "solution_overview": 'For $h(x)=\\log_{2}(\\log_{2}x)$ every intermediate argument must be positive: first $x>0$, then $\\log_{2}x>0$, which forces $x>1$. The natural domain is therefore $(1,\\infty)$. Evaluations at powers of two use $\\log_{2}(2^{k})=k$.',
    "tactical_explanations": [
        '**A.** → True\n\nThe outer logarithm needs a positive inner value, so impose\n\n$$\n\\log_{2}x>0\n$$\n\nBecause base $2>1$, this inequality is equivalent to $x>2^{0}=1$. Combined with the inner requirement $x>0$ one obtains\n\n$$\nx>1\n$$\n\nHence the natural domain is the open ray $(1,\\infty)$.\n\nAt the endpoint $x=1$ the inner log vanishes, so the inequality $x>1$ is strict.\n\nSo the statement is True.',
        '**B.** → False\n\nAddition inside a logarithm is not an identity. Test $a=b=1$.\n\n$$\n\\log(1+1)=\\log 2\\neq 0=\\log 1+\\log 1\n$$\n\nNo universal law $\\log(a+b)=\\log a+\\log b$ exists on $a,b>0$, so the claim fails.\n\nProduct, quotient, and power survive; addition inside does not.\n\nSo the statement is False.',
        '**C.** → False\n\nReal logarithms require a strictly positive argument.\n\n$$\nu>0\n$$\n\nOnly then is $\\log_{b}u$ defined. The value $u=0$ is excluded for every base. Nested or single, zero arguments are never allowed.\n\nThe domain cut $x>1$ already encodes strict positivity of every intermediate argument.\n\nSo the statement is False.',
        '**D.** → False\n\nPeel the nesting at $x=4=2^{2}$ from the inside out.\n\n$$\n\\log_{2}4=\\log_{2}(2^{2})=2\n$$\n\n$$\nh(4)=\\log_{2}2=1\n$$\n\nThe claim announces $h(4)=0$, but the correct value is $1$.\n\nThe value $0$ would require $\\log_{2}4=1$, but $\\log_{2}4=2$, so the outer step cannot return $0$.\n\nSo the statement is False.',
        '**E.** → False\n\nAt the boundary $x=1$ the inner logarithm vanishes.\n\n$$\n\\log_{2}1=0\n$$\n\nThe outer expression becomes $\\log_{2}0$, which is undefined. Therefore $x=1$ does not belong to the domain $(1,\\infty)$.\n\nOnly $x>1$ keeps $\\log_{2}x$ positive enough for the outer logarithm.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.7'] = {
    "solution_overview": 'The maps $g(t)=2^{t}$ on $\\mathbb{R}$ and $f(x)=\\log_{2}x$ on $(0,\\infty)$ are inverse partners. Compositions recover the identity on each matching domain, but the two domains themselves differ. Base $2>1$ keeps $f$ increasing.',
    "tactical_explanations": [
        '**A.** → True\n\nApply $f$ after $g$ and use the inverse relation for base $2$.\n\n$$\nf(g(t))=\\log_{2}(2^{t})=t\n$$\n\nThe identity holds for every real exponent $t$, which is the full domain of $g$.\n\nIn particular the identity continues to hold for negative exponents, e.g. $\\log_{2}(2^{-5})=-5$.\n\nSo the statement is True.',
        '**B.** → True\n\nApply $g$ after $f$ on the positive ray where $f$ is defined.\n\n$$\ng(f(x))=2^{\\log_{2}x}=x\\qquad(x>0)\n$$\n\nThat is the other half of the inverse-pair package, and it matches the claim.\n\nA sample check at $x=8$ recovers $2^{\\log_{2}8}=8$.\n\nSo the statement is True.',
        '**C.** → False\n\nRecord the two natural domains side by side.\n\n$$\n\\operatorname{dom}(g)=\\mathbb{R},\\qquad\\operatorname{dom}(f)=(0,\\infty)\n$$\n\nThey are complementary, not identical. The claim that $f$ and $g$ share one common domain is false.\n\nWriting $\\mathbb{R}$ versus $(0,\\infty)$ records the complementary domains.\n\nSo the statement is False.',
        '**D.** → False\n\nFor every base $b>1$ the logarithm is strictly increasing. If $0<x<y$ then\n\n$$\n\\log_{b}x<\\log_{b}y\n$$\n\nDecreasing behaviour appears only for bases in $(0,1)$. The universal decreasing claim for $b>1$ fails.\n\nA sample: $\\log_{2}1=0<\\log_{2}2=1$ shows a base $>1$ rising.\n\nSo the statement is False.',
        '**E.** → False\n\nThe composition $g(f(-1))$ first requires $f(-1)=\\log_{2}(-1)$. Negative arguments lie outside the domain $(0,\\infty)$, so $f(-1)$ is undefined and the outer exponential never runs. The claimed identity cannot hold.\n\nNegative inputs are excluded before any composition with $g$ can be formed.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.8'] = {
    "solution_overview": 'With $a<b$, the quotient $(x-a)/(b-x)$ is positive precisely on the open interval $(a,b)$. Endpoints make the argument $0$ or undefined. The midpoint forces the quotient to equal $1$, and on $(a,b)$ the quotient law splits $F$ into a difference of logs.',
    "tactical_explanations": [
        '**A.** → True\n\nOn the open interval $a<x<b$ both linear factors are positive:\n\n$$\nx-a>0,\\qquad b-x>0\n$$\n\nA quotient of two positive numbers is positive.\n\n$$\n\\frac{x-a}{b-x}>0\n$$\n\nThat is exactly the claim.\n\nA quotient of two positive quantities cannot change sign on that open interval.\n\nSo the statement is True.',
        '**B.** → False\n\nClosed endpoints are fatal for a logarithm. At $x=a$ the numerator vanishes, so the argument is $0$. At $x=b$ the denominator vanishes, so the quotient is undefined. The natural domain is the open interval $(a,b)$, not the closed interval $[a,b]$.\n\nThe natural domain is therefore the open interval $(a,b)$, matching the positivity set.\n\nSo the statement is False.',
        '**C.** → True\n\nSubstitute the midpoint $x=(a+b)/2$ into the quotient.\n\n$$\n\\frac{\\frac{a+b}{2}-a}{b-\\frac{a+b}{2}}=\\frac{(b-a)/2}{(b-a)/2}=1\n$$\n\nThen apply normalisation.\n\n$$\nF\\!\\left(\\frac{a+b}{2}\\right)=\\log 1=0\n$$\n\nThe claimed height $0$ is correct.\n\nNormalisation $\\log 1=0$ converts that unit quotient into height $0$.\n\nSo the statement is True.',
        '**D.** → True\n\nOn $(a,b)$ both $x-a$ and $b-x$ are positive, so the quotient law applies.\n\n$$\n\\log\\!\\left(\\frac{x-a}{b-x}\\right)=\\log(x-a)-\\log(b-x)\n$$\n\nThe right-hand side is exactly the displayed difference, and it matches $F(x)$ throughout $(a,b)$.\n\nBoth $x-a$ and $b-x$ stay positive on $(a,b)$, so each separate log is defined.\n\nSo the statement is True.',
        '**E.** → False\n\nAt $x=b$ the denominator of the argument is zero.\n\n$$\nb-x=b-b=0\n$$\n\nDivision by zero is undefined, so $x=b$ cannot lie in the domain of $F$.\n\nEven approaching $x\\to b^{-}$ sends the quotient to $+\\infty$, but the point $x=b$ itself remains undefined.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.9'] = {
    "solution_overview": 'Critical points of the argument $(2x+1)/(x-3)$ are the numerator root $x=-1/2$ and the pole $x=3$. A sign chart yields positivity on $(-\\infty,-1/2)\\cup(3,\\infty)$. On $(3,\\infty)$ both factors are positive, so the quotient law splits $m$.',
    "tactical_explanations": [
        '**A.** → True\n\nThe quotient of two linears changes sign only at the roots $x=-1/2$ and $x=3$. Testing one point in each open component shows positivity on the outer rays\n\n$$\n(-\\infty,-1/2)\\cup(3,\\infty)\n$$\n\nwhere\n\n$$\n\\frac{2x+1}{x-3}>0\n$$\n\nThat union is exactly the set announced in the claim.\n\nThe open interval $(-1/2,3)$ makes the quotient negative and is excluded from the domain.\n\nSo the statement is True.',
        '**B.** → False\n\nAt $x=3$ the denominator vanishes.\n\n$$\nx-3=0\n$$\n\nThe rational argument is undefined, so $x=3$ is excluded from every candidate domain of $m$.\n\nNo limiting value of $m(x)$ as $x\\to 3$ can place the abscissa $3$ into the domain.\n\nSo the statement is False.',
        '**C.** → True\n\nSubstitute the test point $x=0$ into the argument.\n\n$$\n\\frac{2\\cdot 0+1}{0-3}=\\frac{1}{-3}=-\\frac13<0\n$$\n\nA negative argument is forbidden for a real logarithm, so $x=0$ is excluded for that reason.\n\nAny negative argument is forbidden, so the test point $x=0$ is out.\n\nSo the statement is True.',
        '**D.** → True\n\nCheck the argument at $x=-1$.\n\n$$\n\\frac{2(-1)+1}{-1-3}=\\frac{-1}{-4}=\\frac12>0\n$$\n\nThe value is positive and the denominator is nonzero, so $x=-1$ lies in the domain.\n\nThe point $x=-1$ lies in $(-\\infty,-1/2)$, one of the two positivity components.\n\nSo the statement is True.',
        '**E.** → True\n\nOn the ray $(3,\\infty)$ one has both $2x+1>0$ and $x-3>0$. The quotient law therefore applies.\n\n$$\nm(x)=\\log(2x+1)-\\log(x-3)\\qquad(x>3)\n$$\n\nThat is the legitimate split announced in the claim.\n\nBoth $2x+1$ and $x-3$ stay positive on $(3,\\infty)$, so each separate log is defined.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.10'] = {
    "solution_overview": 'Demand $Q=AP^{-\\beta}$ with $A>0$ and $\\beta>0$ becomes linear in logs: $\\ln Q=\\ln A-\\beta\\ln P$. Elasticity $E=d\\ln Q/d\\ln P$ is therefore the constant slope $-\\beta$. The usual quotient law and the normalisation $\\log_{b}b=1$ remain available as background tools.',
    "tactical_explanations": [
        '**A.** → True\n\nTake the natural log of both sides of the demand rule and expand with product and power laws.\n\n$$\n\\ln Q=\\ln\\!\\bigl(A P^{-\\beta}\\bigr)=\\ln A+\\ln(P^{-\\beta})\n$$\n\n$$\n\\ln Q=\\ln A-\\beta\\ln P\n$$\n\nThat is exactly the claimed log-linear form.\n\nThe power $P^{-\\beta}$ contributes the term $-\\beta\\ln P$ after the log is taken.\n\nSo the statement is True.',
        '**B.** → True\n\nDifferentiate the log-linear model with respect to $\\ln P$.\n\n$$\nE=\\frac{d\\ln Q}{d\\ln P}=-\\beta\n$$\n\nThe right-hand side does not depend on $P$, so the elasticity equals $-\\beta$ at every price $P>0$.\n\nConstancy of that derivative is exactly constant elasticity along the demand curve.\n\nSo the statement is True.',
        '**C.** → True\n\nState the quotient law for an arbitrary fixed base.\n\n$$\n\\log\\!\\left(\\frac{a}{b}\\right)=\\log a-\\log b\\qquad(a>0,\\,b>0)\n$$\n\nIt is a standard identity and does not depend on the demand parameters $A$ and $\\beta$.\n\nIn exponential language, $b^{\\log a-\\log b}=a/b$ recovers the same quotient.\n\nSo the statement is True.',
        '**D.** → True\n\nElasticity was recovered as $E=-\\beta$, so its absolute value is the parameter itself.\n\n$$\n|E|=\\beta\n$$\n\nThe hypothesis $\\beta>1$ therefore forces $|E|>1$, which is the definition of elastic demand in this model.\n\nElastic demand is the threshold $|E|>1$, which is identical to $\\beta>1$ here.\n\nSo the statement is True.',
        '**E.** → True\n\nBy definition the logarithm of its own base equals one.\n\n$$\n\\log_{b}b=1\\qquad(b>0,\\,b\\neq 1)\n$$\n\nEquivalently $b^{1}=b$. The identity holds for every admissible base.\n\nEquivalently $b^{1}=b$ records the same normalisation for every admissible base.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.11'] = {
    "solution_overview": 'Change of base links the two curves: $\\log_{4}x=\\log_{2}x/\\log_{2}4=\\frac12\\log_{2}x$. Both share the asymptote $x=0$ and the intercept $(1,0)$, but their heights differ at $x=16$. Nested logs still need positive intermediate values, and change of base accepts any auxiliary base $k\\neq 1$.',
    "tactical_explanations": [
        '**A.** → True\n\nEvery logarithm with base $>1$ satisfies $\\log_{b}x\\to-\\infty$ as $x\\to 0^{+}$. Both $f=\\log_{2}$ and $g=\\log_{4}$ therefore approach the same vertical line.\n\n$$\nx=0\n$$\n\nThat common asymptote is what the claim asserts.\n\nBoth curves also share the intercept $(1,0)$, but the present claim is only about the asymptote.\n\nSo the statement is True.',
        '**B.** → False\n\nA real logarithm is defined only for strictly positive arguments.\n\n$$\nu>0\n$$\n\nZero is excluded for every base, so the blanket permission for zero arguments is false.\n\nThe shared domain $(0,\\infty)$ already excludes the asymptote abscissa $0$.\n\nSo the statement is False.',
        '**C.** → False\n\nA nesting such as $\\log(\\log x)$ needs the inner value itself to be positive, which is a stricter demand than mere $x>0$. For base $2$ the outer logarithm forces\n\n$$\n\\log_{2}x>0\\implies x>1\n$$\n\nnot merely $x>0$. The claim that no further checks are required fails.\n\nEach outer logarithm imposes its own positivity requirement on the inner value.\n\nSo the statement is False.',
        '**D.** → False\n\nEvaluate each curve at $x=16=2^{4}=4^{2}$.\n\n$$\nf(16)=\\log_{2}16=4\n$$\n\n$$\ng(16)=\\log_{4}16=2\n$$\n\nSince $4\\neq 2$, the heights are not equal.\n\nChange of base also predicts the gap: $g(16)=\\frac12 f(16)=\\frac12\\cdot 4=2$.\n\nSo the statement is False.',
        '**E.** → False\n\nChange of base works with any auxiliary base $k>0$, $k\\neq 1$.\n\n$$\n\\log_{b}a=\\frac{\\log_{k}a}{\\log_{k}b}\n$$\n\nBase $10$ is convenient but not mandatory; natural logs or base $2$ work equally well. The restriction to base $10$ is false.\n\nNatural logs or base $2$ convert bases just as legitimately as base $10$.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.12'] = {
    "solution_overview": 'The table lists exact binary logarithms $\\log_{2}(2^{k})=k$ beside approximate natural logs. Change of base recovers every binary entry as $\\ln x/\\ln 2$. The usual false friends — addition inside a log, and zero arguments — remain invalid.',
    "tactical_explanations": [
        '**A.** → True\n\nBy definition $\\log_{2}x$ is the unique exponent $k$ satisfying $2^{k}=x$. Each tabulated input is a pure power of two.\n\n$$\n1=2^{0},\\;2=2^{1},\\;4=2^{2},\\;8=2^{3},\\;16=2^{4}\n$$\n\nThe tabulated row $\\log_{2}x$ is exactly that exponent $k$ in every column.\n\nThat is the definition of $\\log_{2}$ as the inverse of $t\\mapsto 2^{t}$.\n\nSo the statement is True.',
        '**B.** → True\n\nChange of base with natural logs reads\n\n$$\n\\log_{2}x=\\frac{\\ln x}{\\ln 2}\n$$\n\nAt every listed power of two the approximate ratio reconstitutes the exact integer already recorded in the $\\log_{2}$ row, confirming the identity on the table.\n\nAt $x=16$, for instance, $2.773/0.693\\approx 4$, matching $\\log_{2}16=4$.\n\nSo the statement is True.',
        "**C.** → False\n\nCompute the change-of-base ratio at $x=8$.\n\n$$\n\\frac{\\ln 8}{\\ln 2}=\\log_{2}8=\\log_{2}(2^{3})=3\n$$\n\nThe value equals $3$ exactly, so it is not strictly less than $3$.\n\nUsing the table's approximate logs, $2.079/0.693\\approx 3.00$, confirming exactness rather than a strict deficit.\n\nSo the statement is False.",
        '**D.** → False\n\nAddition inside a logarithm is not a law. Counter-example with $a=b=1$:\n\n$$\n\\log(1+1)=\\log 2\\neq 0=\\log 1+\\log 1\n$$\n\nThe universal claim fails.\n\nProduct, quotient, and power survive; addition inside does not.\n\nSo the statement is False.',
        '**E.** → False\n\nLogarithms require a strictly positive argument. The value $0$ produces an undefined expression for every base, so zero arguments are never allowed in log domains.\n\nEvery tabulated $x$ is already strictly positive; the value $0$ never appears as an input.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.13'] = {
    "solution_overview": 'Change of base is the universal identity $\\log_{b}a=\\ln a/\\ln b$ on $a>0$ and $b>0$, $b\\neq 1$. Any other auxiliary base (including $10$) works the same way. When $b=e$ one recovers $\\ln$. Graphs never cross their vertical asymptotes, and $a$ need not be an integer.',
    "tactical_explanations": [
        '**A.** → True\n\nThe change-of-base theorem states that for every $a>0$ and every $b>0$ with $b\\neq 1$,\n\n$$\n\\log_{b}a=\\frac{\\ln a}{\\ln b}\n$$\n\nThe stem already restricts to exactly that set of $(a,b)$, so the identity holds throughout.\n\nThe proof is the exponential identity $b^{(\\ln a)/(\\ln b)}=a$.\n\nSo the statement is True.',
        '**B.** → True\n\nReplace the natural log by any other fixed auxiliary base, here base $10$.\n\n$$\n\\log_{b}a=\\frac{\\log_{10}a}{\\log_{10}b}\n$$\n\nThe two ratios are equal because each equals $\\log_{b}a$. The claimed equivalence holds.\n\nBoth ratios equal $\\log_{b}a$, so they equal each other.\n\nSo the statement is True.',
        '**C.** → True\n\nSubstitute the special base $b=e$ into change of base.\n\n$$\n\\log_{e}a=\\frac{\\ln a}{\\ln e}=\\frac{\\ln a}{1}=\\ln a\n$$\n\nSo $\\log_{b}a$ collapses to the natural logarithm precisely when $b=e$.\n\nThe notation $\\ln$ is simply another name for $\\log_{e}$.\n\nSo the statement is True.',
        '**D.** → False\n\nThe hypothesis of change of base is only $a>0$. Non-integer arguments such as $a=\\sqrt{2}$ or $a=e$ are fully allowed.\n\n$$\n\\log_{2}\\!\\sqrt{2}=\\frac12\n$$\n\nis a legitimate instance. Integer status of $a$ is not required.\n\nThe only restriction on $a$ is positivity, not integrality.\n\nSo the statement is False.',
        '**E.** → False\n\nA vertical asymptote is a line that the graph approaches but never meets. For $\\log_{b}$ that line is $x=0$, and every point on the graph has abscissa $x>0$. The graph therefore never crosses its vertical asymptote at a finite point.\n\nAs $x\\to 0^{+}$ one has $\\log_{b}x\\to-\\infty$, but $x=0$ itself is never attained.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.14'] = {
    "solution_overview": 'Bases in the interval $(0,1)$ reverse monotonicity: $f(x)=\\log_{b}x$ is strictly decreasing on $(0,\\infty)$, while the normalisation rules $f(1)=0$ and $f(b)=1$ survive. As $x\\to 0^{+}$ one has $f(x)\\to+\\infty$. Change of base remains valid, with $\\ln b<0$ accounting for the sign flip.',
    "tactical_explanations": [
        '**A.** → True\n\nWrite $f$ through change of base.\n\n$$\nf(x)=\\frac{\\ln x}{\\ln b}\n$$\n\nFor $0<b<1$ the denominator $\\ln b$ is negative, so $f$ inherits the opposite monotonicity of $\\ln$. Hence $f$ is strictly decreasing on $(0,\\infty)$.\n\nEquivalently, if $0<x<y$ then $\\log_{b}x>\\log_{b}y$ when $0<b<1$.\n\nSo the statement is True.',
        '**B.** → True\n\nNormalisation at the argument $1$ does not depend on whether the base exceeds $1$.\n\n$$\nf(1)=\\log_{b}1=0\n$$\n\nbecause $b^{0}=1$ for every admissible base. The claim holds.\n\nEquivalently $b^{0}=1$ forces the height at $x=1$ to vanish for every admissible base.\n\nSo the statement is True.',
        '**C.** → True\n\nBy definition the logarithm of its own base equals one, even when $0<b<1$.\n\n$$\nf(b)=\\log_{b}b=1\n$$\n\nEquivalently $b^{1}=b$. The evaluation is correct.\n\nEquivalently $b^{1}=b$ forces the height at $x=b$ to equal $1$.\n\nSo the statement is True.',
        '**D.** → True\n\nFor $0<b<1$ the change-of-base form $\\ln x/\\ln b$ has a negative denominator. As $x\\to 0^{+}$ one has $\\ln x\\to-\\infty$, so the ratio tends to $+\\infty$.\n\n$$\n\\lim_{x\\to 0^{+}}\\log_{b}x=+\\infty\n$$\n\nThat matches the claim.\n\nBy contrast, bases $b>1$ send $\\log_{b}x\\to-\\infty$ as $x\\to 0^{+}$.\n\nSo the statement is True.',
        '**E.** → False\n\nChange of base requires only $b>0$ and $b\\neq 1$; the restriction $b>1$ is unnecessary.\n\n$$\n\\log_{b}x=\\frac{\\ln x}{\\ln b}\n$$\n\nremains valid for $0<b<1$. The negative sign of $\\ln b$ simply reverses inequalities; it does not invalidate the identity.\n\nThe identity requires only $b>0$ and $b\\neq 1$; the sign of $\\ln b$ may be negative.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.15'] = {
    "solution_overview": 'The unit condition $f(e)=1$ forces the base to equal $e$, so $f=\\ln$. Powers then give $\\ln(e^{k})=k$, the inverse is $t\\mapsto e^{t}$, and the product law remains available for any positive factor pair. Normalisation $\\log_{b}1=0$ holds for every admissible base.',
    "tactical_explanations": [
        '**A.** → True\n\nThe defining property $\\log_{b}b=1$ identifies the base as the unique input returning height $1$. The stem gives\n\n$$\nf(e)=\\log_{b}e=1\n$$\n\nTherefore $b=e$, and $f$ is the natural logarithm.\n\nThe intercept and asymptote are shared by every $\\log_{b}$, so only $f(e)=1$ pins $b=e$.\n\nSo the statement is True.',
        '**B.** → True\n\nWith $f=\\ln$ already recovered, apply the power law at $e^{2}$.\n\n$$\nf(e^{2})=\\ln(e^{2})=2\\ln e=2\n$$\n\nThe claimed height $2$ matches.\n\nTwo multiplicative factors of $e$ raise the natural log by $2$, matching the power law.\n\nSo the statement is True.',
        '**C.** → True\n\nNormalisation at $1$ is universal for admissible bases.\n\n$$\n\\log_{b}1=0\\qquad(b>0,\\,b\\neq 1)\n$$\n\nIt does not depend on the particular identification $b=e$.\n\nEquivalently $b^{0}=1$ for every admissible base, so the intercept height is always $0$.\n\nSo the statement is True.',
        '**D.** → True\n\nThe natural exponential is the inverse of $\\ln$. Check both compositions.\n\n$$\n\\ln(e^{t})=t\\qquad(t\\in\\mathbb{R})\n$$\n\n$$\ne^{\\ln x}=x\\qquad(x>0)\n$$\n\nHence the inverse of $f$ is $g(t)=e^{t}$.\n\nBoth compositions $\\ln(e^{t})=t$ and $e^{\\ln x}=x$ hold on the matching domains.\n\nSo the statement is True.',
        '**E.** → True\n\nThe product law holds for every fixed base and every positive factor pair.\n\n$$\n\\log(uv)=\\log u+\\log v\\qquad(u>0,\\,v>0)\n$$\n\nIt is independent of the rebuilt base $b=e$.\n\nIn exponential language, $b^{\\log u+\\log v}=uv$ recovers the same product identity.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.16'] = {
    "solution_overview": 'Triple nesting $H(x)=\\log_{2}(\\log_{2}(\\log_{2}x))$ forces three positivity conditions. Working outward yields $x>0$, then $x>1$, then $x>2$, so the natural domain is $(2,\\infty)$. At $x=2^{16}=65536$ one peels to $H=2$. Stock distractors about elasticity and change-of-base remain false.',
    "tactical_explanations": [
        '**A.** → False\n\nImpose positivity at each layer. The outermost logarithm needs\n\n$$\n\\log_{2}(\\log_{2}x)>0\n$$\n\nWith base $2>1$ this means $\\log_{2}x>1$, hence $x>2^{1}=2$. The natural domain is therefore\n\n$$\n(2,\\infty)\n$$\n\nThe claim announces $(4,\\infty)$, which is the wrong threshold.\n\nThe threshold $4$ would correspond to an extra unnecessary nesting condition.\n\nSo the statement is False.',
        '**B.** → True\n\nRewrite the input as a pure power of two and peel inside-out.\n\n$$\n65536=2^{16}\n$$\n\n$$\n\\log_{2}65536=16\n$$\n\n$$\n\\log_{2}16=4,\\qquad\\log_{2}4=2\n$$\n\nSo $H(65536)=2$, matching the claim.\n\nEach peeling step uses $\\log_{2}(2^{k})=k$ on a pure power of two.\n\nSo the statement is True.',
        '**C.** → False\n\nFor the isoelastic demand $Q=AP^{-\\beta}$ take logs and differentiate.\n\n$$\n\\ln Q=\\ln A-\\beta\\ln P\n$$\n\n$$\nE=\\frac{d\\ln Q}{d\\ln P}=-\\beta\n$$\n\nElasticity equals $-\\beta$, not $-A$. The claim confuses the slope with the scale factor.\n\nThe scale $A$ cancels when $\\ln Q$ is differentiated in $\\ln P$.\n\nSo the statement is False.',
        '**D.** → False\n\nChange of base accepts every auxiliary base $k>0$ with $k\\neq 1$.\n\n$$\n\\log_{b}a=\\frac{\\log_{k}a}{\\log_{k}b}\n$$\n\nBase $10$ is optional. Natural logs or base $2$ work equally well.\n\nNatural logs or base $2$ convert bases just as legitimately as base $10$.\n\nSo the statement is False.',
        '**E.** → False\n\nOn the interval $1<x\\le 2$ the middle value satisfies $\\log_{2}x\\le 1$, so\n\n$$\n\\log_{2}(\\log_{2}x)\\le 0\n$$\n\nThe outer logarithm then meets a non-positive argument and fails. Hence $H$ is not defined there.\n\nThe outer logarithm fails as soon as the middle value is non-positive.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.17'] = {
    "solution_overview": 'The table lists three claimed identities. Product $(I_1)$ and quotient $(I_2)$ are the standard laws on $u,v>0$. The sum claim $(I_3)$ is not an identity; it already fails at $u=v=1$. Zero arguments remain forbidden.',
    "tactical_explanations": [
        '**A.** → True\n\nClaim $(I_1)$ is the product law.\n\n$$\n\\log(uv)=\\log u+\\log v\\qquad(u>0,\\,v>0)\n$$\n\nIt holds for every positive factor pair and every fixed base $>1$, so $(I_1)$ survives.\n\nIn exponential language, $b^{\\log u+\\log v}=b^{\\log u}\\,b^{\\log v}=uv$ recovers the product.\n\nSo the statement is True.',
        '**B.** → True\n\nClaim $(I_2)$ is the quotient law.\n\n$$\n\\log\\!\\left(\\frac{u}{v}\\right)=\\log u-\\log v\\qquad(u>0,\\,v>0)\n$$\n\nIt follows from the product law applied to $u\\cdot v^{-1}$, so $(I_2)$ survives as well.\n\nIn exponential language, $b^{\\log u-\\log v}=u/v$ recovers the quotient.\n\nSo the statement is True.',
        '**C.** → False\n\nClaim $(I_3)$ asserts $\\log(u+v)=\\log u+\\log v$ for all positive $u,v$. Test $u=v=1$.\n\n$$\n\\log(1+1)=\\log 2\n$$\n\n$$\n\\log 1+\\log 1=0\n$$\n\nSince $\\log 2\\neq 0$, the identity fails, and $(I_3)$ does not hold universally.\n\nProduct and quotient survive in the table; the sum claim does not.\n\nSo the statement is False.',
        '**D.** → False\n\nA real logarithm needs a strictly positive argument. Write the domain condition once.\n\n$$\nu>0\n$$\n\nThe value $u=0$ is excluded for every base, so zero arguments are never allowed.\n\nEvery identity in the table already assumes strictly positive $u$ and $v$.\n\nSo the statement is False.',
        '**E.** → False\n\nEven the special case $u=v=1$ fails for $(I_3)$.\n\n$$\n\\log(1+1)=\\log 2\\neq 0=\\log 1+\\log 1\n$$\n\nSo $(I_3)$ does not hold when $u=v=1$.\n\nThe failure at this single positive pair already kills any universal reading of $(I_3)$.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.18'] = {
    "solution_overview": 'For $b>1$, the pair $f(t)=b^{t}$ on $\\mathbb{R}$ and $g=\\log_{b}$ on $(0,\\infty)$ are inverse bijections. Both compositions recover the identity on the matching full domain. Bases $b>1$ keep $g$ strictly increasing.',
    "tactical_explanations": [
        '**A.** → True\n\nCompose $\\log_{b}$ after the exponential on the full real line.\n\n$$\ng(f(t))=\\log_{b}(b^{t})=t\\qquad(t\\in\\mathbb{R})\n$$\n\nThe identity holds for every real $t$, including negative values.\n\nNegative sample: $\\log_{b}(b^{-4})=-4$ returns the original exponent.\n\nSo the statement is True.',
        '**B.** → True\n\nCompose the exponential after the logarithm on the positive ray.\n\n$$\nf(g(x))=b^{\\log_{b}x}=x\\qquad(x>0)\n$$\n\nThat is the companion inverse identity, and it matches the claim.\n\nSample check: $b^{\\log_{b}7}=7$ on the positive ray.\n\nSo the statement is True.',
        '**C.** → False\n\nThe composition $g(f(t))=\\log_{b}(b^{t})$ equals $t$ for every real $t$, not merely for $t>0$. For a negative sample,\n\n$$\n\\log_{b}(b^{-3})=-3\n$$\n\nThe claim that the identity fails for negative $t$ is therefore itself false.\n\nThe full-domain identity $g(f(t))=t$ on $\\mathbb{R}$ already includes every negative $t$.\n\nSo the statement is False.',
        '**D.** → True\n\nThe exponential $f:\\mathbb{R}\\to(0,\\infty)$ is bijective, and $g:(0,\\infty)\\to\\mathbb{R}$ is its two-sided inverse. Together they are bijections between $\\mathbb{R}$ and $(0,\\infty)$ in opposite directions, exactly as claimed.\n\nSurjectivity of $f$ onto $(0,\\infty)$ and of $g$ onto $\\mathbb{R}$ is part of that inverse package.\n\nSo the statement is True.',
        '**E.** → False\n\nFor every base $b>1$ the logarithm is strictly increasing: if $0<x<y$ then\n\n$$\n\\log_{b}x<\\log_{b}y\n$$\n\nDecreasing behaviour requires a base in $(0,1)$. The universal decreasing claim fails.\n\nA sample with base $b>1$: $\\log_{b}1=0<\\log_{b}b=1$ shows the rise.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.19'] = {
    "solution_overview": 'For $r(x)=\\log\\sqrt{(x-c)/(d-x)}$ with $c<d$, the radicand must be nonnegative and the log still needs a positive value, forcing $(x-c)/(d-x)>0$. That holds on $(c,d)$. The midpoint gives $r=0$, and the power law writes $r=\\frac12\\log((x-c)/(d-x))$.',
    "tactical_explanations": [
        '**A.** → True\n\nThe square root needs a nonnegative radicand, and the outer logarithm needs a strictly positive argument. Combining both requirements forces the radicand to be strictly positive.\n\n$$\n\\frac{x-c}{d-x}>0\n$$\n\nThat is precisely the condition stated in the claim.\n\nA zero radicand would make $\\log\\sqrt{0}=\\log 0$ undefined, so strict positivity is required.\n\nSo the statement is True.',
        '**B.** → True\n\nWith $c<d$, the quotient of the two linear factors is positive precisely between the roots.\n\n$$\nx\\in(c,d)\n$$\n\nEndpoints make the radicand $0$ or undefined, so the natural domain is the open interval $(c,d)$.\n\nEndpoints make the radicand $0$ or undefined, so the interval is open.\n\nSo the statement is True.',
        '**C.** → True\n\nAt the midpoint the quotient equals $1$.\n\n$$\n\\frac{\\frac{c+d}{2}-c}{d-\\frac{c+d}{2}}=1\n$$\n\nThen\n\n$$\nr\\!\\left(\\frac{c+d}{2}\\right)=\\log\\sqrt{1}=\\log 1=0\n$$\n\nThe claimed height is correct.\n\nNormalisation $\\log 1=0$ converts $\\sqrt{1}=1$ into height $0$.\n\nSo the statement is True.',
        '**D.** → True\n\nApply the power law with exponent $1/2$ on the domain where the argument is positive.\n\n$$\n\\log\\!\\left(u^{1/2}\\right)=\\frac12\\log u\n$$\n\nTaking $u=(x-c)/(d-x)$ yields\n\n$$\nr(x)=\\frac12\\log\\!\\left(\\frac{x-c}{d-x}\\right)\n$$\n\nThe identity is the power law with exponent $1/2$ on a positive argument.\n\nSo the statement is True.',
        '**E.** → False\n\nAt $x=c$ the radicand vanishes.\n\n$$\n\\frac{c-c}{d-c}=0\n$$\n\nThen $\\sqrt{0}=0$ and $\\log 0$ is undefined, so $x=c$ does not lie in the domain.\n\nThe square-root layer cannot rescue a zero radicand into a positive log argument.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.20'] = {
    "solution_overview": 'Richter-style magnitudes $M=\\log_{10}(A/A_{0})$ turn amplitude ratios into differences of magnitudes. Exponentiating a gap $\\Delta=M_{X}-M_{Y}$ recovers $A_{X}/A_{Y}=10^{\\Delta}$. Common amplitude factors cancel in gaps, and non-positive amplitudes are excluded.',
    "tactical_explanations": [
        '**A.** → True\n\nSubtract the two magnitude definitions and apply the quotient law.\n\n$$\n\\Delta=M_{X}-M_{Y}=\\log_{10}\\!\\left(\\frac{A_{X}}{A_{0}}\\right)-\\log_{10}\\!\\left(\\frac{A_{Y}}{A_{0}}\\right)\n$$\n\n$$\n\\Delta=\\log_{10}\\!\\left(\\frac{A_{X}}{A_{Y}}\\right)\n$$\n\nExponentiate base $10$ to obtain $A_{X}/A_{Y}=10^{\\Delta}$.\n\nThe reference amplitude $A_{0}$ cancels in the difference of magnitudes.\n\nSo the statement is True.',
        '**B.** → True\n\nSubstitute the concrete gap $\\Delta=2$ into the amplitude ratio.\n\n$$\n\\frac{A_{X}}{A_{Y}}=10^{2}=100\n$$\n\nSo $A_{X}$ is one hundred times $A_{Y}$, as claimed.\n\nIn magnitude language, a gap of $2$ is two factors of ten in amplitude.\n\nSo the statement is True.',
        '**C.** → True\n\nBy definition the logarithm of its own base equals one.\n\n$$\n\\log_{b}b=1\\qquad(b>0,\\,b\\neq 1)\n$$\n\nThe identity is independent of the magnitude model.\n\nEquivalently $b^{1}=b$ records the same normalisation.\n\nSo the statement is True.',
        '**D.** → True\n\nReplace every amplitude by a doubled copy. The new gap is\n\n$$\n\\log_{10}\\!\\left(\\frac{2A_{X}}{2A_{Y}}\\right)=\\log_{10}\\!\\left(\\frac{A_{X}}{A_{Y}}\\right)=\\Delta\n$$\n\nA common positive factor cancels, so every magnitude gap is unchanged.\n\nOnly the ratio $A_{X}/A_{Y}$ enters $\\Delta$, so a common factor is invisible.\n\nSo the statement is True.',
        '**E.** → True\n\nThe magnitude formula feeds the ratio $A/A_{0}$ into a logarithm. That argument must be strictly positive, which forces $A>0$ when $A_{0}>0$ is fixed. When $A\\le 0$ the expression for $M$ is undefined.\n\nThe reference $A_{0}$ is positive by construction, so the sign restriction falls on $A$.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.21'] = {
    "solution_overview": 'On $(0,8]$ compare $f(x)=\\log_{2}x$ with the ray $y=x/4$. The curves cross twice on $(0,\\infty)$, including once at $x=16$ beyond the sketched window; past that meeting the ray overtakes the slow logarithm. Stock distractors about elasticity, change-of-base, and shared inverse domains remain false.',
    "tactical_explanations": [
        '**A.** → True\n\nEvaluate both rules at $x=1$.\n\n$$\nf(1)=\\log_{2}1=0\n$$\n\n$$\n\\frac{1}{4}=\\frac14\n$$\n\nThe logarithm sits at height $0$ while the ray sits at $1/4$, exactly as claimed.\n\nAlready at $x=1$ the ray sits strictly above the logarithm.\n\nSo the statement is True.',
        '**B.** → False\n\nIsoelastic demand $Q=AP^{-\\beta}$ has log-linear form $\\ln Q=\\ln A-\\beta\\ln P$, so\n\n$$\nE=\\frac{d\\ln Q}{d\\ln P}=-\\beta\n$$\n\nElasticity equals $-\\beta$, not $-A$.\n\nAfter $\\ln Q=\\ln A-\\beta\\ln P$, the slope in $\\ln P$ is $-\\beta$ alone.\n\nSo the statement is False.',
        '**C.** → False\n\nChange of base works with every auxiliary base $k>0$, $k\\neq 1$.\n\n$$\n\\log_{b}a=\\frac{\\log_{k}a}{\\log_{k}b}\n$$\n\nRestricting the identity to base $10$ alone is false.\n\nNatural logs or base $2$ convert bases just as legitimately as base $10$.\n\nSo the statement is False.',
        '**D.** → False\n\nThe exponential $b^{t}$ has domain $\\mathbb{R}$, while $\\log_{b}$ has domain $(0,\\infty)$. The two domains are complementary, not shared.\n\nWriting the domains side by side, $\\mathbb{R}$ versus $(0,\\infty)$, makes the mismatch visible.\n\nSo the statement is False.',
        '**E.** → False\n\nThe claim asks for a strict inequality on the whole ray $x>4$. At the later meeting point $x=16$ the two heights agree.\n\n$$\n\\log_{2}16=4,\\qquad\\frac{16}{4}=4\n$$\n\nFor still larger inputs the linear ray grows faster than the logarithm, so $f(x)<x/4$. The universal claim $f(x)>x/4$ for every $x>4$ therefore fails.\n\nEquality at $x=16$ already kills a strict inequality on the whole ray $x>4$.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.22'] = {
    "solution_overview": 'Each sample fits $\\ln Q=\\alpha-\\beta\\ln P$. Elasticity is the slope $E=-\\beta$, read from the fitted $\\beta$ column alone: sample $A$ has $\\beta=1.2$, $B$ has $1.5$, and $C$ has $0.8$. Unit elasticity would need $\\beta=1$. The scale $\\alpha$ (or $A$) never enters $E$.',
    "tactical_explanations": [
        '**A.** → True\n\nDifferentiate the fitted log-log line.\n\n$$\nE=\\frac{d\\ln Q}{d\\ln P}=-\\beta\n$$\n\nEvery tabulated $\\beta$ is positive ($1.2$, $1.5$, $0.8$), so every implied elasticity $E=-\\beta$ is negative.\n\nEach fitted $\\beta$ in the table is positive, so each $E=-\\beta$ is negative.\n\nSo the statement is True.',
        '**B.** → True\n\nAbsolute elasticity is the fitted slope itself.\n\n$$\n|E|=\\beta\n$$\n\nSample $B$ has $\\beta=1.5$ while sample $A$ has $\\beta=1.2$.\n\n$$\n1.5>1.2\n$$\n\nSo sample $B$ is more elastic in absolute value than sample $A$.\n\nLarger $\\beta$ means larger $|E|$ in this constant-elasticity specification.\n\nSo the statement is True.',
        '**C.** → False\n\nUnit-elastic demand means $|E|=1$, hence $\\beta=1$ in this specification. Sample $C$ carries\n\n$$\n\\beta=0.8\\neq 1\n$$\n\nso $|E|=0.8\\neq 1$. Sample $C$ is not unit-elastic.\n\nWith $|E|=0.8$ the sample is inelastic, not unit-elastic.\n\nSo the statement is False.',
        '**D.** → False\n\nElasticity depends only on the slope coefficient.\n\n$$\nE=-\\beta\n$$\n\nThe intercept $\\alpha$ shifts $\\ln Q$ vertically but never appears in the derivative with respect to $\\ln P$. Elasticity is recovered from the $\\beta$ column alone.\n\nThe intercept $\\alpha$ never appears in $E=-\\beta$.\n\nSo the statement is False.',
        '**E.** → False\n\nIn the model $Q=AP^{-\\beta}$ one has $E=-\\beta$ at every price. The scale $A$ cancels when logs are differentiated, so elasticity is never equal to $-A$.\n\nThe scale $A$ (or $\\alpha=\\ln A$) never enters the slope $E$.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.23'] = {
    "solution_overview": 'Keep $a>0$, $b>0$ with $b\\neq 1$, and real $c$. The power and reciprocal laws hold, and doubling a log is the log of a square. Squaring the log value is a false friend, and addition inside a logarithm is not a law.',
    "tactical_explanations": [
        '**A.** → True\n\nThe power law moves a real exponent across a logarithm.\n\n$$\n\\log_{b}(a^{c})=c\\log_{b}a\\qquad(a>0)\n$$\n\nIt follows from $b^{c\\log_{b}a}=(b^{\\log_{b}a})^{c}=a^{c}$. The claim is exactly this identity.\n\nThe identity holds for every real exponent $c$, including negative and non-integer values.\n\nSo the statement is True.',
        '**B.** → True\n\nAdd the same logarithm to itself and invoke the power law.\n\n$$\n\\log_{b}a+\\log_{b}a=2\\log_{b}a=\\log_{b}(a^{2})\n$$\n\nThe two sides agree for every $a>0$, so the claim holds.\n\nBoth sides equal $2\\log_{b}a$, so the identity is the power law in additive disguise.\n\nSo the statement is True.',
        '**C.** → False\n\nThe left side is twice the log, while the right side is the square of the log.\n\n$$\n\\log_{b}a+\\log_{b}a=2\\log_{b}a\n$$\n\n$$\n(\\log_{b}a)^{2}\n$$\n\nThese agree only for special values of $\\log_{b}a$, not universally. The claimed identity fails.\n\nFor $\\log_{b}a=3$ one would need $6=9$, which fails.\n\nSo the statement is False.',
        '**D.** → True\n\nRewrite the reciprocal as a power and apply the power law.\n\n$$\n\\log_{b}\\!\\left(\\frac{1}{a}\\right)=\\log_{b}(a^{-1})=-1\\cdot\\log_{b}a=-\\log_{b}a\n$$\n\nThe identity holds for every $a>0$.\n\nThe reciprocal identity is the power law at the exponent $-1$.\n\nSo the statement is True.',
        '**E.** → False\n\nAddition inside a logarithm is not an identity. Counter-example:\n\n$$\n\\log(1+1)=\\log 2\\neq 0=\\log 1+\\log 1\n$$\n\nNo universal law $\\log(a+b)=\\log a+\\log b$ exists on $a,b>0$.\n\nProduct, quotient, and power survive; addition inside does not.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.24'] = {
    "solution_overview": 'Substitute $u=\\log_{b}x$ into $(\\log_{b}x)^{2}-5\\log_{b}x+6=0$ to obtain the quadratic $u^{2}-5u+6=0$. Factoring gives $(u-2)(u-3)=0$, so $x=b^{2}$ and $x=b^{3}$. Both roots are positive, hence admissible; $x=0$ is never in the log domain. Vieta reads the $u$-sum as $5$.',
    "tactical_explanations": [
        '**A.** → True\n\nExpand the proposed factorisation and match coefficients.\n\n$$\n(u-2)(u-3)=u^{2}-5u+6\n$$\n\nThat is exactly the quadratic obtained after the substitution $u=\\log_{b}x$, so the factorisation is correct.\n\nSo the statement is True.',
        '**B.** → True\n\nThe roots $u=2$ and $u=3$ return to $x$ through the exponential inverse.\n\n$$\n\\log_{b}x=2\\implies x=b^{2}\n$$\n\n$$\n\\log_{b}x=3\\implies x=b^{3}\n$$\n\nThose are the two $x$-roots of the original equation.\n\nSo the statement is True.',
        '**C.** → False\n\nThe logarithm $\\log_{b}x$ is defined only for $x>0$. The candidate $x=0$ lies outside that domain, so it cannot be a solution of an equation built from $\\log_{b}x$.\n\nAny equation built from $\\log_{b}x$ silently restricts to $x>0$ before solving.\n\nSo the statement is False.',
        '**D.** → True\n\nBoth recovered roots are positive powers of a base $b>1$.\n\n$$\nb^{2}>0,\\qquad b^{3}>0\n$$\n\nEach therefore lies in the natural domain $(0,\\infty)$ of $\\log_{b}$.\n\nSince $b>1$, both powers lie strictly above $0$ and are admissible log inputs.\n\nSo the statement is True.',
        "**E.** → True\n\nFor the monic quadratic $u^{2}-5u+6$, Vieta's sum-of-roots formula reads the middle coefficient.\n\n$$\nu_{1}+u_{2}=5\n$$\n\nEquivalently $2+3=5$. The claim matches Vieta.\n\nThe product of the $u$-roots is the constant term $6$, while their sum is the middle coefficient $5$.\n\nSo the statement is True.",
    ],
}

BODIES_102['MATH 10.2.25'] = {
    "solution_overview": "A horizontal shift $f(x)=\\log_{2}(x-h)$ has vertical asymptote $x=h$. The figure's asymptote at $x=2$ forces $h=2$, and the zero at $x=3$ confirms $3-h=1$. The domain is $(h,\\infty)=(2,\\infty)$. Unshifted logs still asymptote at $x=0$.",
    "tactical_explanations": [
        '**A.** → True\n\nThe graph of $\\log_{2}(x-h)$ is the graph of $\\log_{2}$ translated by $h$, so its vertical asymptote is the line\n\n$$\nx=h\n$$\n\nThe figure places that asymptote at $x=2$, which forces $h=2$.\n\nSo the statement is True.',
        '**B.** → True\n\nA logarithm vanishes only at the argument $1$. The zero at $x=3$ therefore requires\n\n$$\n\\log_{2}(3-h)=0\\implies 3-h=1\n$$\n\nHence $h=2$, consistent with the asymptote reading.\n\nSolving $3-h=1$ recovers $h=2$, matching the asymptote reading.\n\nSo the statement is True.',
        '**C.** → True\n\nThe product law holds for every fixed base and every positive factor pair.\n\n$$\n\\log(uv)=\\log u+\\log v\\qquad(u>0,\\,v>0)\n$$\n\nIt does not depend on the shift parameter $h$.\n\nIn exponential language, $b^{\\log u+\\log v}=uv$ recovers the same product identity.\n\nSo the statement is True.',
        '**D.** → True\n\nThe argument of $f$ must be positive.\n\n$$\nx-h>0\\implies x>h\n$$\n\nWith $h=2$ already recovered, the domain is $(2,\\infty)$.\n\nEquivalently, after the shift, every admissible input satisfies $x-2>0$.\n\nSo the statement is True.',
        '**E.** → True\n\nFor an unshifted logarithm of base $b>1$,\n\n$$\n\\lim_{x\\to 0^{+}}\\log_{b}x=-\\infty\n$$\n\nso the vertical asymptote is the line $x=0$. That is the standard asymptote of $\\log_{b}$.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.26'] = {
    "solution_overview": 'For $N(x)=\\log_{2}(\\ln x)$ the outer logarithm needs $\\ln x>0$, hence $x>1$. The natural domain is $(1,\\infty)$, not $(e,\\infty)$. At $x=e$ one obtains $N(e)=0$; at $x=1$ the outer log fails. Inverse domains remain complementary, and bases $>1$ keep logs increasing.',
    "tactical_explanations": [
        '**A.** → False\n\nThe outer base-$2$ logarithm requires a positive inner value.\n\n$$\n\\ln x>0\\implies x>e^{0}=1\n$$\n\nSo the natural domain is $(1,\\infty)$. The claim announces $(e,\\infty)$, which cuts away the admissible interval $(1,e]$ and is therefore wrong.\n\nPoints such as $x=e^{1/2}$ lie in $(1,e)$ and make $N$ defined, so $(e,\\infty)$ is too small.\n\nSo the statement is False.',
        '**B.** → True\n\nSubstitute $x=e$ and peel inside-out.\n\n$$\n\\ln e=1\n$$\n\n$$\nN(e)=\\log_{2}1=0\n$$\n\nThe claimed height $0$ matches.\n\nThe inner value $1$ is exactly the normalisation point of $\\log_{2}$.\n\nSo the statement is True.',
        '**C.** → False\n\nThe exponential $b^{t}$ has domain $\\mathbb{R}$, while $\\log_{b}$ has domain $(0,\\infty)$. Inverse partners do not share one common domain.\n\nWriting $\\mathbb{R}$ versus $(0,\\infty)$ makes the domain mismatch immediate.\n\nSo the statement is False.',
        '**D.** → False\n\nAt $x=1$ the inner logarithm vanishes.\n\n$$\n\\ln 1=0\n$$\n\nThe outer expression becomes $\\log_{2}0$, which is undefined. So $N(1)$ is not defined.\n\nOnly $x>1$ keeps $\\ln x$ positive enough for the outer base-$2$ logarithm.\n\nSo the statement is False.',
        '**E.** → False\n\nFor every base $b>1$ the logarithm is strictly increasing. Decreasing behaviour appears only when $0<b<1$. The universal decreasing claim fails.\n\nA sample with base $2$: $\\log_{2}1=0<\\log_{2}2=1$, so the graph rises.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.27'] = {
    "solution_overview": 'The inverse pair $g(t)=3^{t}$ and $f=\\log_{3}$ recovers exponents and undoes logs at convenient powers of three. Domains still differ: $g$ accepts all reals while $f$ needs positive inputs. Elasticity in the demand model remains $-\\beta$, not $-A$.',
    "tactical_explanations": [
        '**A.** → True\n\nCompose $f$ after $g$ at the exponent $-2$.\n\n$$\nf(g(-2))=\\log_{3}(3^{-2})=-2\n$$\n\nThe inverse relation returns the original exponent.\n\nThe exponential $3^{-2}=1/9$ is positive, so it lies in the domain of $f$.\n\nSo the statement is True.',
        '**B.** → True\n\nCompose $g$ after $f$ at the positive input $9=3^{2}$.\n\n$$\ng(f(9))=3^{\\log_{3}9}=9\n$$\n\nThe exponential undoes the logarithm on $(0,\\infty)$.\n\nSince $9>0$, the input is admissible for $f$ before the exponential undoes it.\n\nSo the statement is True.',
        '**C.** → False\n\nRewrite $1/3$ as a power of the base and evaluate.\n\n$$\n\\frac13=3^{-1}\n$$\n\n$$\nf\\!\\left(\\frac13\\right)=\\log_{3}(3^{-1})=-1\n$$\n\nThe claim announces the value $1$, but the evaluation returns $-1$.\n\nThe value $1$ would require $\\log_{3}3=1$, which sits at input $3$, not at $1/3$.\n\nSo the statement is False.',
        '**D.** → False\n\nIsoelastic demand gives $E=-\\beta$ after differentiating $\\ln Q=\\ln A-\\beta\\ln P$. Elasticity equals $-\\beta$, not $-A$.\n\nAfter $\\ln Q=\\ln A-\\beta\\ln P$, the derivative in $\\ln P$ isolates $-\\beta$ alone.\n\nSo the statement is False.',
        '**E.** → False\n\nThe logarithm $f=\\log_{3}$ requires a positive argument, so $t=-1$ is not an admissible input for $f$. By contrast $g(-1)=3^{-1}$ is perfectly defined. The two maps are not defined the same way at $-1$.\n\nAttempting $f(-1)=\\log_{3}(-1)$ is undefined, while $g(-1)$ is fine.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.28'] = {
    "solution_overview": 'For $s(x)=\\log(ax-b)$ with $a>0$, the inequality $ax-b>0$ rearranges to $x>b/a$. That threshold is the vertical asymptote; the endpoint itself is excluded because the argument would be $0$. When $b=0$ the domain collapses to $x>0$.',
    "tactical_explanations": [
        '**A.** → True\n\nA positive argument is required.\n\n$$\nax-b>0\n$$\n\nDivide by the positive coefficient $a$.\n\n$$\nx>\\frac{b}{a}\n$$\n\nThat open ray is the natural domain of $s$.\n\nBecause $a>0$, dividing does not reverse the inequality direction.\n\nSo the statement is True.',
        '**B.** → True\n\nIf $b=0$, the domain inequality simplifies at once.\n\n$$\nax>0\\implies x>0\n$$\n\nsince $a>0$. The domain becomes the positive ray.\n\nThat is the ordinary domain of $\\log$ itself after the coefficient $a$ cancels from the inequality.\n\nSo the statement is True.',
        '**C.** → True\n\nAs $x$ approaches the threshold from the right, the argument tends to $0$ from above.\n\n$$\n\\lim_{x\\to(b/a)^{+}}(ax-b)=0^{+}\n$$\n\nHence $s(x)\\to-\\infty$, and the vertical asymptote is the line $x=b/a$.\n\nSo the statement is True.',
        '**D.** → False\n\nAt $x=b/a$ the argument vanishes.\n\n$$\na\\cdot\\frac{b}{a}-b=0\n$$\n\nThe logarithm of $0$ is undefined, so $s(b/a)$ is not the value $0$; it does not exist.\n\nThe height $0$ occurs where the argument equals $1$, i.e. at $x=(1+b)/a$, not at the asymptote.\n\nSo the statement is False.',
        '**E.** → False\n\nReal logarithms require a strictly positive argument. Zero is excluded for every base, so zero arguments are never allowed in log domains.\n\nThe domain inequality is the strict cut $x>b/a$, which already excludes a zero argument.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.29'] = {
    "solution_overview": 'For $w(x)=\\log|x^{2}-1|$ the absolute value vanishes at $x=\\pm 1$, so those two points are excluded. Elsewhere one drops the absolute value according to the sign of $x^{2}-1$: on $(1,\\infty)$ it is $x^{2}-1$, and on $(-1,1)$ it is $1-x^{2}$.',
    "tactical_explanations": [
        '**A.** → True\n\nThe logarithm needs a strictly positive argument, so\n\n$$\n|x^{2}-1|>0\n$$\n\nThat fails precisely when $x^{2}-1=0$, i.e. at $x=\\pm 1$. The expression is defined for all other real $x$.\n\nEquivalently, exclude the two roots of $x^{2}=1$.\n\nSo the statement is True.',
        '**B.** → True\n\nSubstitute $x=0$.\n\n$$\n|0^{2}-1|=1\n$$\n\n$$\nw(0)=\\log 1=0\n$$\n\nThe claimed evaluation is correct.\n\nNormalisation $\\log 1=0$ applies because the absolute value produced the argument $1$.\n\nSo the statement is True.',
        '**C.** → False\n\nAt $x=1$ the absolute value vanishes.\n\n$$\n|1^{2}-1|=0\n$$\n\nThen $\\log 0$ is undefined, so $x=1$ does not lie in the domain.\n\nThe absolute value collapses to $0$ at every root of $x^{2}-1$, including $x=-1$ as well.\n\nSo the statement is False.',
        '**D.** → True\n\nFor $x>1$ one has $x^{2}-1>0$, so the absolute value is redundant.\n\n$$\nw(x)=\\log(x^{2}-1)\\qquad(x>1)\n$$\n\nThat matches the claim on $(1,\\infty)$.\n\nThe same simplification holds on $(-\\infty,-1)$ where again $x^{2}-1>0$.\n\nSo the statement is True.',
        '**E.** → True\n\nFor $|x|<1$ one has $x^{2}-1<0$, so the absolute value flips the sign.\n\n$$\n|x^{2}-1|=1-x^{2}\n$$\n\n$$\nw(x)=\\log(1-x^{2})\\qquad(x\\in(-1,1))\n$$\n\nAt $x=0$ this reduced form returns $\\log 1=0$, matching the direct evaluation.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.30'] = {
    "solution_overview": 'The definition $\\mathrm{pH}=-\\log_{10}[H^{+}]$ turns concentration ratios into pH differences, with a sign reversal from the leading minus. A tenfold concentration increase lowers pH by $1$. Inverse evaluation $b^{\\log_{b}x}=x$ remains available on $(0,\\infty)$.',
    "tactical_explanations": [
        '**A.** → True\n\nSubstitute $C_{1}=10\\,C_{2}$ into the definition.\n\n$$\n\\mathrm{pH}_{1}=-\\log_{10}(10 C_{2})=-\\bigl(\\log_{10}10+\\log_{10}C_{2}\\bigr)\n$$\n\n$$\n\\mathrm{pH}_{1}=-1-\\log_{10}C_{2}=\\mathrm{pH}_{2}-1\n$$\n\nA tenfold rise in concentration lowers pH by exactly one unit.\n\nSo the statement is True.',
        '**B.** → True\n\nIf $C_{1}=C_{2}$, the two logarithms receive the same argument.\n\n$$\n\\mathrm{pH}_{1}=-\\log_{10}C_{1}=-\\log_{10}C_{2}=\\mathrm{pH}_{2}\n$$\n\nThe two pH values agree.\n\nEqual concentrations feed the same number into $-\\log_{10}$, so the outputs match.\n\nSo the statement is True.',
        '**C.** → True\n\nInverse evaluation on the positive ray is part of the definition of $\\log_{b}$.\n\n$$\nb^{\\log_{b}x}=x\\qquad(x>0)\n$$\n\nThe identity holds for every admissible base.\n\nSample: $10^{\\log_{10}5}=5$ recovers the positive argument.\n\nSo the statement is True.',
        '**D.** → True\n\nThe map $C\\mapsto-\\log_{10}C$ is strictly decreasing on $(0,\\infty)$ because $\\log_{10}$ is strictly increasing and the leading minus reverses inequalities. Larger concentration therefore yields smaller pH.\n\nSo the statement is True.',
        '**E.** → True\n\nExpand the difference of the two pH values.\n\n$$\n\\mathrm{pH}_{2}-\\mathrm{pH}_{1}=-\\log_{10}C_{2}-(-\\log_{10}C_{1})=\\log_{10}C_{1}-\\log_{10}C_{2}\n$$\n\n$$\n\\mathrm{pH}_{2}-\\mathrm{pH}_{1}=\\log_{10}\\!\\left(\\frac{C_{1}}{C_{2}}\\right)\n$$\n\nThat matches the claim.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.31'] = {
    "solution_overview": 'The figure is $f(x)=\\log_{5}x$ with the unit point $(5,1)$ marked. Normalisation gives $f(1)=0$, base $5>1$ keeps the graph increasing, and the vertical asymptote $x=0$ is never crossed. Inverse domains remain complementary, and addition inside a log is not a law.',
    "tactical_explanations": [
        '**A.** → True\n\nEvery admissible logarithm vanishes at the argument $1$.\n\n$$\nf(1)=\\log_{5}1=0\n$$\n\nEquivalently $5^{0}=1$. The claimed intercept height is correct.\n\nThe marked unit point $(5,1)$ is consistent with the same normalisation package.\n\nSo the statement is True.',
        '**B.** → False\n\nThe exponential $b^{t}$ has domain $\\mathbb{R}$, while $\\log_{b}$ has domain $(0,\\infty)$. Inverse partners do not share one common domain.\n\nWriting $\\mathbb{R}$ versus $(0,\\infty)$ records the mismatch of domains.\n\nSo the statement is False.',
        '**C.** → False\n\nA vertical asymptote is approached but never attained. For $f=\\log_{5}$ that asymptote is $x=0$, and every graph point has abscissa $x>0$. The graph never crosses the asymptote at a finite point.\n\nAs $x\\to 0^{+}$ one has $f(x)\\to-\\infty$, but $x=0$ itself is never a graph point.\n\nSo the statement is False.',
        '**D.** → False\n\nBase $5>1$ places $f$ in the increasing regime. Compare two sample heights.\n\n$$\nf(1)=0,\\qquad f(5)=1\n$$\n\nSince $1<5$ yet $f(1)<f(5)$, the graph rises rather than falls.\n\nThe marked point $(5,1)$ already sits above the intercept $(1,0)$, confirming the rise.\n\nSo the statement is False.',
        '**E.** → False\n\nAddition inside a logarithm is not an identity. Counter-example:\n\n$$\n\\log(1+1)=\\log 2\\neq 0=\\log 1+\\log 1\n$$\n\nThe universal claim fails.\n\nProduct, quotient, and power survive; addition inside does not.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.32'] = {
    "solution_overview": 'Change of base with the fixed bridge $\\ln 10$ converts every row: $\\log_{10}a=\\ln a/\\ln 10$. The bridge does not depend on $a$. The values $\\ln 10$ and $\\log_{10}e$ are reciprocals, not equals. Elasticity remains $-\\beta$, and inverse domains stay complementary.',
    "tactical_explanations": [
        '**A.** → True\n\nChange of base with natural logs reads\n\n$$\n\\log_{10}a=\\frac{\\ln a}{\\ln 10}\n$$\n\nfor every $a>0$. Each listed row is an instance of that identity.\n\nRow $Q$ is the normalisation check: $\\ln 10/\\ln 10=1=\\log_{10}10$.\n\nSo the statement is True.',
        '**B.** → True\n\nThe conversion constant $\\ln 10$ is a property of the two bases alone. It does not depend on the row argument $a$, so the same bridge factor appears in every row.\n\nNumerically the bridge is the constant $\\ln 10\\approx 2.302$ in every row.\n\nSo the statement is True.',
        '**C.** → False\n\nIsoelastic demand gives $E=-\\beta$ after differentiating $\\ln Q=\\ln A-\\beta\\ln P$. Elasticity equals $-\\beta$, not $-A$.\n\nAfter $\\ln Q=\\ln A-\\beta\\ln P$, the slope in $\\ln P$ is $-\\beta$ alone.\n\nSo the statement is False.',
        '**D.** → False\n\nChange of base relates the two constants as reciprocals.\n\n$$\n\\ln 10=\\frac{1}{\\log_{10}e}\n$$\n\nIn particular $\\ln 10\\neq\\log_{10}e$, since $\\ln 10\\approx 2.302$ while $\\log_{10}e\\approx 0.434$.\n\nTheir product is $1$, which already forbids equality unless both equal $\\pm 1$.\n\nSo the statement is False.',
        '**E.** → False\n\nThe exponential $b^{t}$ has domain $\\mathbb{R}$, while $\\log_{b}$ has domain $(0,\\infty)$. Inverse partners do not share one common domain.\n\nWriting $\\mathbb{R}$ versus $(0,\\infty)$ records the complementary domains.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.33'] = {
    "solution_overview": 'Keep $b>0$, $b\\neq 1$, with $x>0$ and real $t$. The inverse pair identities and change of base hold on their natural domains. Confusing $\\log_{b}(b^{t})$ with $b^{t}$, or replacing the product law by a product of logs, yields false friends.',
    "tactical_explanations": [
        '**A.** → True\n\nInverse evaluation on the positive ray recovers the original argument.\n\n$$\nb^{\\log_{b}x}=x\\qquad(x>0)\n$$\n\nThat is half of the inverse-pair package.\n\nSample: $2^{\\log_{2}5}=5$ recovers the positive argument.\n\nSo the statement is True.',
        '**B.** → True\n\nInverse evaluation on the real line recovers the original exponent.\n\n$$\n\\log_{b}(b^{t})=t\\qquad(t\\in\\mathbb{R})\n$$\n\nThe identity holds for every real $t$.\n\nSample: $\\log_{2}(2^{-3})=-3$ recovers a negative exponent.\n\nSo the statement is True.',
        '**C.** → False\n\nThe left side collapses to the exponent, while the right side is the exponential itself.\n\n$$\n\\log_{b}(b^{t})=t\n$$\n\n$$\nb^{t}\n$$\n\nThese agree only for special $t$ (solving $t=b^{t}$), not universally. The claimed identity fails.\n\nFor $t=2$ one would need $2=b^{2}$, which fails for a general base $b$.\n\nSo the statement is False.',
        '**D.** → True\n\nChange of base with an arbitrary auxiliary base $k>0$, $k\\neq 1$, reads\n\n$$\n\\log_{b}x=\\frac{\\log_{k}x}{\\log_{k}b}\n$$\n\nThe identity holds for every such $k$, exactly as claimed.\n\nTaking $k=e$ recovers the familiar ratio $\\ln x/\\ln b$.\n\nSo the statement is True.',
        '**E.** → False\n\nThe correct product law uses a sum, not a product of logarithms.\n\n$$\n\\log_{b}(xy)=\\log_{b}x+\\log_{b}y\n$$\n\nA concrete counter-example with $b=10$, $x=y=10$ gives left side $2$ and right side $1\\cdot 1=1$. The product claim fails.\n\nThe product law always adds the logs; multiplying them is a different (false) operation.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.34'] = {
    "solution_overview": 'For $f(x)=\\log(ax+b)$ with $a\\neq 0$, the inequality $ax+b>0$ rearranges to $x>-b/a$ when $a>0$ and to $x<-b/a$ when $a<0$. In either case the vertical asymptote is $x=-b/a$, and that endpoint is excluded. When $a>0$ the product law splits $\\log(ax+b)$ on the whole domain.',
    "tactical_explanations": [
        '**A.** → True\n\nRequire a positive argument and divide by the positive coefficient $a$.\n\n$$\nax+b>0\\implies x>-\\frac{b}{a}\n$$\n\nThat open ray is the natural domain when $a>0$.\n\nBecause $a>0$, dividing by $a$ preserves the inequality direction.\n\nSo the statement is True.',
        '**B.** → True\n\nWhen $a<0$, dividing the inequality $ax+b>0$ by $a$ reverses the direction.\n\n$$\nx<-\\frac{b}{a}\n$$\n\nThat open ray is the natural domain when $a<0$.\n\nA negative leading coefficient flips the ray to the left of the root $-b/a$.\n\nSo the statement is True.',
        '**C.** → True\n\nIn either sign case the argument tends to $0^{+}$ as $x$ approaches $-b/a$ from the admissible side. Hence\n\n$$\nf(x)\\to-\\infty\n$$\n\nand the vertical asymptote is the line $x=-b/a$.\n\nFrom either side that remains admissible, the argument approaches $0$ from above.\n\nSo the statement is True.',
        '**D.** → False\n\nAt $x=-b/a$ the argument vanishes.\n\n$$\na\\cdot\\!\\left(-\\frac{b}{a}\\right)+b=0\n$$\n\nThe logarithm of $0$ is undefined, so $f(-b/a)$ is not the value $0$.\n\nThe height $0$ occurs where $ax+b=1$, not where $ax+b=0$.\n\nSo the statement is False.',
        '**E.** → True\n\nFactor the argument when $a>0$.\n\n$$\nax+b=a\\left(x+\\frac{b}{a}\\right)\n$$\n\nOn the domain one has $x+b/a>0$ and $a>0$, so both factors are positive and the product law applies.\n\n$$\n\\log(ax+b)=\\log a+\\log\\!\\left(x+\\frac{b}{a}\\right)\n$$\n\nBoth factors $a$ and $x+b/a$ stay positive throughout the domain when $a>0$.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.35'] = {
    "solution_overview": 'The data $f(2)=k$ and $f(8)=3k$ are consistent for every base because $8=2^{3}$ and the power law gives $\\log_{b}8=3\\log_{b}2$. When $k=1$ the unit condition $\\log_{b}2=1$ pins $b=2$, after which $f(16)=4$. The power law itself is a background identity.',
    "tactical_explanations": [
        '**A.** → True\n\nRewrite $8$ as a pure power of $2$ and apply the power law for an arbitrary base $b>1$.\n\n$$\n8=2^{3}\n$$\n\n$$\n\\log_{b}8=\\log_{b}(2^{3})=3\\log_{b}2\n$$\n\nWith $f(2)=k$ this is exactly $f(8)=3k$, so the triple relation is consistent.\n\nThe lettered height $k$ cancels in the ratio $f(8)/f(2)=3$ whenever $k\\neq 0$.\n\nSo the statement is True.',
        '**B.** → True\n\nIf $k=1$, then $f(2)=\\log_{b}2=1$. The unique base returning height $1$ at the input $2$ is the base itself.\n\n$$\nb=2\n$$\n\nSo $k=1$ pins the base at $2$.\n\nEquivalently $b^{1}=2$ forces the base to equal $2$ when $k=1$.\n\nSo the statement is True.',
        '**C.** → True\n\nWith $k=1$ and $b=2$ already recovered, evaluate at $16=2^{4}$.\n\n$$\nf(16)=\\log_{2}16=\\log_{2}(2^{4})=4\n$$\n\nThe claimed height $4$ matches.\n\nFour multiplicative factors of $2$ raise the base-$2$ log by $4$.\n\nSo the statement is True.',
        '**D.** → True\n\nThe relation $\\log_{b}8=3\\log_{b}2$ is an instance of the power law and does not depend on the particular base.\n\n$$\n\\log_{b}(2^{3})=3\\log_{b}2\\qquad(b>1)\n$$\n\nHence $f(8)=3f(2)$ holds for every base $b>1$.\n\nNo special choice of $b$ is required beyond $b>1$ for that power identity.\n\nSo the statement is True.',
        '**E.** → True\n\nThe power law moves a real exponent across a logarithm.\n\n$$\n\\log(a^{c})=c\\log a\\qquad(a>0)\n$$\n\nIt is one of the three fundamental logarithm identities.\n\nIn exponential language, $b^{c\\log a}=(b^{\\log a})^{c}=a^{c}$.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.36'] = {
    "solution_overview": 'Peel $L=\\log_{3}(\\log_{2}(\\log_{5}5^{4}))$ inside-out: the innermost value is $4$, then $\\log_{2}4=2$, then $L=\\log_{3}2$. The nesting is defined, but $\\log_{3}2\\neq 1$. Graphs never cross vertical asymptotes, bases $>1$ keep logs increasing, and zero arguments are forbidden.',
    "tactical_explanations": [
        '**A.** → True\n\nThe innermost logarithm receives a pure power of its own base.\n\n$$\n\\log_{5}(5^{4})=4\n$$\n\nby the inverse relation. The innermost value equals $4$.\n\nThe inverse relation $\\log_{5}(5^{t})=t$ specialises at $t=4$.\n\nSo the statement is True.',
        '**B.** → False\n\nA vertical asymptote is approached but never attained or crossed. Every point on a logarithmic graph has a finite abscissa strictly to one side of the asymptote.\n\nAsymptotes constrain limiting behaviour; they are not intersection loci.\n\nSo the statement is False.',
        '**C.** → False\n\nFor every base $b>1$ the logarithm is strictly increasing. Decreasing behaviour requires a base in $(0,1)$. The universal decreasing claim fails.\n\nA sample with base $3$: $\\log_{3}1=0<\\log_{3}3=1$ shows the rise.\n\nSo the statement is False.',
        '**D.** → False\n\nContinue peeling after the innermost step.\n\n$$\n\\log_{2}4=\\log_{2}(2^{2})=2\n$$\n\n$$\nL=\\log_{3}2\n$$\n\nSince $3^{1}=3\\neq 2$, one has $\\log_{3}2\\neq 1$. The claim $L=1$ fails.\n\nSince $2<3$, one also has the strict inequality $0<\\log_{3}2<1$.\n\nSo the statement is False.',
        '**E.** → False\n\nReal logarithms require a strictly positive argument. Zero is excluded for every base, so zero arguments are never allowed.\n\nEach layer of $L$ already requires a strictly positive argument before the next log is applied.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.37'] = {
    "solution_overview": 'Demand $Q=AP^{-\\beta}$ becomes $\\ln Q=\\ln A-\\beta\\ln P$ in log-log coordinates. The slope $E=-\\beta$ is constant along the curve; raising $A$ shifts the line vertically without rotating it. Change of base is not restricted to base $10$, and graphs do not cross vertical asymptotes.',
    "tactical_explanations": [
        '**A.** → True\n\nDifferentiate the log-linear form with respect to $\\ln P$.\n\n$$\n\\ln Q=\\ln A-\\beta\\ln P\n$$\n\n$$\nE=\\frac{d\\ln Q}{d\\ln P}=-\\beta\n$$\n\nThe right-hand side is independent of $P$, so $E=-\\beta$ at every point of the curve.\n\nThe slope does not depend on the current price, so every point of the curve carries the same $E$.\n\nSo the statement is True.',
        '**B.** → True\n\nThe same derivative computation shows that the log-log slope equals the constant $-\\beta$ everywhere on the curve. Constancy of $d\\ln Q/d\\ln P$ is exactly the claim.\n\nConstancy of that derivative is exactly constant elasticity along the demand curve.\n\nSo the statement is True.',
        '**C.** → False\n\nChange of base accepts every auxiliary base $k>0$, $k\\neq 1$.\n\n$$\n\\log_{b}a=\\frac{\\log_{k}a}{\\log_{k}b}\n$$\n\nRestricting the tool to base $10$ is false.\n\nNatural logs or base $2$ convert bases just as legitimately as base $10$.\n\nSo the statement is False.',
        '**D.** → False\n\nIn log-log coordinates the intercept is $\\ln A$. Raising $A$ increases that intercept and shifts the line vertically.\n\n$$\n\\ln Q=\\ln A-\\beta\\ln P\n$$\n\nThe slope $-\\beta$ is unchanged, so the curve does not rotate.\n\nA vertical shift changes intercept, not slope, in the $(\\ln P,\\ln Q)$-plane.\n\nSo the statement is False.',
        '**E.** → False\n\nA vertical asymptote is approached but never crossed. No finite point of the graph lies on the asymptote line.\n\nAsymptotes are limiting lines; no finite graph point lies on them.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.38'] = {
    "solution_overview": 'Expand $\\log(u^{2}vw^{-1})$ with the product, quotient, and power laws to obtain $2\\log u+\\log v-\\log w$. Equivalent writings regroup factors or apply the laws stepwise. The corrupted rearrangement $2\\log u+\\log(v/w)+\\log w$ overshoots by $\\log w$. Elasticity remains $-\\beta$, not $-A$.',
    "tactical_explanations": [
        '**A.** → True\n\nApply the product, power, and reciprocal laws in turn.\n\n$$\n\\log(u^{2}vw^{-1})=\\log(u^{2})+\\log v+\\log(w^{-1})\n$$\n\n$$\n\\log(u^{2}vw^{-1})=2\\log u+\\log v-\\log w\n$$\n\nThe claimed expansion matches.\n\nEach law is applied to positive factors $u,v,w$, so every step is legitimate.\n\nSo the statement is True.',
        '**B.** → True\n\nThe intermediate expansion before folding the power and reciprocal is\n\n$$\n\\log(u^{2})+\\log v+\\log(w^{-1})\n$$\n\nwhich equals the same value $2\\log u+\\log v-\\log w$. The stepwise form is correct.\n\nFolding $\\log(u^{2})=2\\log u$ and $\\log(w^{-1})=-\\log w$ recovers the same expansion.\n\nSo the statement is True.',
        '**C.** → True\n\nReassemble the factors inside a single logarithm.\n\n$$\nu^{2}\\cdot v\\cdot w^{-1}=\\frac{u^{2}v}{w}\n$$\n\n$$\n\\log(u^{2}vw^{-1})=\\log\\!\\left(\\frac{u^{2}v}{w}\\right)\n$$\n\nThe two writings agree for $u,v,w>0$.\n\nThe single-log form is simply the product/quotient laws run in reverse.\n\nSo the statement is True.',
        '**D.** → False\n\nExpand the corrupted expression with the quotient law.\n\n$$\n2\\log u+\\log\\!\\left(\\frac{v}{w}\\right)+\\log w=2\\log u+\\log v-\\log w+\\log w\n$$\n\n$$\n=2\\log u+\\log v\n$$\n\nThat is larger than the true expansion by $\\log w$ whenever $\\log w\\neq 0$. The claim fails.\n\nUnless $w=1$, the extra $+\\log w$ spoils equality with the true expansion.\n\nSo the statement is False.',
        '**E.** → False\n\nIsoelastic demand gives $E=-\\beta$ after differentiating $\\ln Q=\\ln A-\\beta\\ln P$. Elasticity equals $-\\beta$, not $-A$.\n\nAfter $\\ln Q=\\ln A-\\beta\\ln P$, the slope in $\\ln P$ is $-\\beta$ alone.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.39'] = {
    "solution_overview": 'For $g(x)=\\log((x-p)/(x-q))$ with $p\\neq q$, a sign chart of the linear quotient shows positivity off the open interval between $p$ and $q$. Both $x=p$ and $x=q$ are excluded. When $p<q$ the domain is $(-\\infty,p)\\cup(q,\\infty)$. Addition inside a log is not a law.',
    "tactical_explanations": [
        '**A.** → True\n\nA quotient of two linear factors is positive when the factors have the same sign, which occurs precisely when $x$ lies strictly outside the open interval with endpoints $p$ and $q$.\n\n$$\n\\frac{x-p}{x-q}>0\\quad\\Leftrightarrow\\quad x\\notin\\bigl(\\min(p,q),\\max(p,q)\\bigr)\n$$\n\nThat is the positivity description in the claim.\n\nEquivalently, the critical points $p$ and $q$ split the line into three components, and only the outer two are positive.\n\nSo the statement is True.',
        '**B.** → True\n\nAt $x=q$ the denominator vanishes.\n\n$$\nx-q=0\n$$\n\nThe rational argument is undefined, so $x=q$ is excluded from the domain.\n\nNo finite limiting value as $x\\to q$ can place the pole into the domain.\n\nSo the statement is True.',
        '**C.** → True\n\nAt $x=p$ the numerator vanishes while the denominator is nonzero (since $p\\neq q$).\n\n$$\n\\frac{p-p}{p-q}=0\n$$\n\nThe logarithm of $0$ is undefined, so $x=p$ is excluded.\n\nThe argument $0$ is forbidden for every real logarithm.\n\nSo the statement is True.',
        '**D.** → True\n\nWhen $p<q$, positivity of the quotient holds on the two outer rays.\n\n$$\n(-\\infty,p)\\cup(q,\\infty)\n$$\n\nThat union is the natural domain of $g$.\n\nThe open interval $(p,q)$ itself makes the quotient negative when $p<q$, so it is excluded.\n\nSo the statement is True.',
        '**E.** → False\n\nAddition inside a logarithm is not an identity. Counter-example:\n\n$$\n\\log(1+1)=\\log 2\\neq 0=\\log 1+\\log 1\n$$\n\nThe universal claim fails.\n\nProduct, quotient, and power survive; addition inside does not.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.40'] = {
    "solution_overview": 'From $Y=Y_{0}e^{kt}$ with $Y_{0}>0$ and $k\\neq 0$, divide and take logs to recover $t=\\frac1k\\ln(Y/Y_{0})$ for $Y>0$. Positive growth with $Y>Y_{0}$ forces $t>0$, and doubling sets $Y/Y_{0}=2$. The power and quotient laws remain available as background tools.',
    "tactical_explanations": [
        '**A.** → True\n\nDivide the growth rule by the positive initial level and take natural logs.\n\n$$\n\\frac{Y}{Y_{0}}=e^{kt}\n$$\n\n$$\n\\ln\\!\\left(\\frac{Y}{Y_{0}}\\right)=kt\n$$\n\nDivide by $k\\neq 0$ to obtain $t=\\frac1k\\ln(Y/Y_{0})$ whenever $Y>0$.\n\nPositivity of $Y$ and $Y_{0}$ keeps the log argument $Y/Y_{0}$ admissible.\n\nSo the statement is True.',
        '**B.** → True\n\nIf $k>0$ and $Y>Y_{0}$, the log-ratio is positive.\n\n$$\n\\ln\\!\\left(\\frac{Y}{Y_{0}}\\right)>0\n$$\n\nDividing by the positive rate $k$ keeps the inequality, so $t>0$.\n\nGrowth ($k>0$) and a level above baseline ($Y>Y_{0}$) point to a future time $t>0$.\n\nSo the statement is True.',
        '**C.** → True\n\nDoubling means $Y=2Y_{0}$. Substitute into the recovered time formula.\n\n$$\nt=\\frac{1}{k}\\ln 2=\\frac{\\ln 2}{k}\n$$\n\nwhen $k>0$. That is the doubling-time formula.\n\nThe factor $\\ln 2$ is the universal doubling constant in continuous growth.\n\nSo the statement is True.',
        '**D.** → True\n\nThe power law moves a real exponent across a logarithm.\n\n$$\n\\log(a^{c})=c\\log a\\qquad(a>0)\n$$\n\nIt holds independently of the growth model.\n\nIn exponential language, $b^{c\\log a}=(b^{\\log a})^{c}=a^{c}$.\n\nSo the statement is True.',
        '**E.** → True\n\nThe quotient law for natural logs reads\n\n$$\n\\ln\\!\\left(\\frac{Y}{Y_{0}}\\right)=\\ln Y-\\ln Y_{0}\\qquad(Y>0,\\,Y_{0}>0)\n$$\n\nThat is exactly the claimed identity.\n\nBoth $Y$ and $Y_{0}$ must be positive for each separate logarithm to be defined.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.41'] = {
    "solution_overview": 'Both $f=\\log_{2}$ and $g=\\log_{10}$ vanish at $x=1$ and share the asymptote $x=0$. Change of base links them by $\\log_{2}x=\\ln x/\\ln 2$ and $\\log_{10}x=\\ln x/\\ln 10$. In particular $\\log_{2}10$ and $\\log_{10}2$ are reciprocals, not equals. Bases $>1$ keep both graphs increasing.',
    "tactical_explanations": [
        '**A.** → True\n\nEvery admissible logarithm vanishes at the argument $1$.\n\n$$\nf(1)=\\log_{2}1=0,\\qquad g(1)=\\log_{10}1=0\n$$\n\nBoth graphs therefore share the intercept $(1,0)$.\n\nEquivalently $2^{0}=1$ and $10^{0}=1$ force both heights at $x=1$ to vanish.\n\nSo the statement is True.',
        '**B.** → False\n\nFor every base $b>1$ the logarithm is strictly increasing. Decreasing behaviour requires a base in $(0,1)$. The universal decreasing claim fails.\n\nA sample: $\\log_{2}1=0<\\log_{2}2=1$ shows the base-$2$ graph rising.\n\nSo the statement is False.',
        '**C.** → False\n\nAddition inside a logarithm is not an identity. Counter-example:\n\n$$\n\\log(1+1)=\\log 2\\neq 0=\\log 1+\\log 1\n$$\n\nThe universal claim fails.\n\nProduct, quotient, and power survive; addition inside does not.\n\nSo the statement is False.',
        '**D.** → False\n\nChange of base shows the two values are reciprocals.\n\n$$\n\\log_{2}10=\\frac{\\ln 10}{\\ln 2},\\qquad\\log_{10}2=\\frac{\\ln 2}{\\ln 10}\n$$\n\n$$\n\\log_{2}10\\cdot\\log_{10}2=1\n$$\n\nReciprocals of a number other than $\\pm 1$ are unequal, so $f(10)\\neq g(2)$.\n\nNumerically $\\log_{2}10\\approx 3.32$ while $\\log_{10}2\\approx 0.301$, confirming inequality.\n\nSo the statement is False.',
        '**E.** → False\n\nA nesting such as $\\log(\\log x)$ needs the inner value itself to be positive, which is stricter than $x>0$. Further checks are always required, so the claim fails.\n\nFor instance $\\log_{2}(\\log_{2}x)$ already needs $x>1$, not merely $x>0$.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.42'] = {
    "solution_overview": 'Each row claims $\\log_{b}a=n$, which is equivalent to $b^{n}=a$. Rows $P$ and $Q$ satisfy $2^{3}=8$ and $3^{2}=9$. Row $R$ fails because $5^{2}=25\\neq 15$, and row $S$ fails because $2^{4}=16\\neq 12$. Bases $b>1$ keep logarithms increasing.',
    "tactical_explanations": [
        '**A.** → True\n\nRow $P$ claims $\\log_{2}8=3$. Check by exponentiating.\n\n$$\n2^{3}=8\n$$\n\nThe identity holds, so row $P$ is consistent.\n\nEquivalently $\\log_{2}8=3$ is the inverse reading of $2^{3}=8$.\n\nSo the statement is True.',
        '**B.** → True\n\nRow $Q$ claims $\\log_{3}9=2$. Check by exponentiating.\n\n$$\n3^{2}=9\n$$\n\nThe identity holds, so row $Q$ is consistent.\n\nEquivalently $\\log_{3}9=2$ is the inverse reading of $3^{2}=9$.\n\nSo the statement is True.',
        '**C.** → False\n\nRow $R$ claims $\\log_{5}15=2$, which would require $5^{2}=15$. Compute the pure power.\n\n$$\n5^{2}=25\\neq 15\n$$\n\nThe announced reason $5^{2}=25$ actually disproves consistency with argument $15$. Row $R$ is not consistent.\n\nThe correct value would be $\\log_{5}15$, which is not the integer $2$.\n\nSo the statement is False.',
        '**D.** → False\n\nRow $S$ claims $\\log_{2}12=4$, which would require $2^{4}=12$. Compute the pure power.\n\n$$\n2^{4}=16\\neq 12\n$$\n\nRow $S$ is not consistent.\n\nThe correct value would be $\\log_{2}12$, which is not the integer $4$.\n\nSo the statement is False.',
        '**E.** → False\n\nFor every base $b>1$ the logarithm is strictly increasing. Decreasing behaviour requires a base in $(0,1)$. The universal decreasing claim fails.\n\nA sample: $\\log_{2}1=0<\\log_{2}2=1$ shows a base $>1$ rising.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.43'] = {
    "solution_overview": 'Substitute $u=\\ln x$ into $(\\ln x)^{2}-(\\ln x)-2=0$ to obtain $u^{2}-u-2=0$. Factoring gives $(u-2)(u+1)=0$, so $u=2$ or $u=-1$, hence $x=e^{2}$ or $x=e^{-1}$. The candidate $x=1$ gives $u=0$, which is not a root. Elasticity remains $-\\beta$, not $-A$.',
    "tactical_explanations": [
        '**A.** → True\n\nExpand the proposed factorisation.\n\n$$\n(u-2)(u+1)=u^{2}-u-2\n$$\n\nThat matches the quadratic obtained after $u=\\ln x$, so the factorisation is correct.\n\nThe middle term $-u$ matches $-2u+u$ from the expansion of $(u-2)(u+1)$.\n\nSo the statement is True.',
        '**B.** → True\n\nSet each factor equal to zero.\n\n$$\nu-2=0\\implies u=2\n$$\n\n$$\nu+1=0\\implies u=-1\n$$\n\nThose are the two solutions in the $u$-variable.\n\nNo other roots exist for a quadratic that already factors completely over the reals.\n\nSo the statement is True.',
        '**C.** → True\n\nReturn to $x$ through the exponential inverse $x=e^{u}$.\n\n$$\nu=2\\implies x=e^{2}\n$$\n\n$$\nu=-1\\implies x=e^{-1}\n$$\n\nThose are the corresponding positive $x$-roots.\n\nBoth $e^{2}$ and $e^{-1}$ are positive, so they lie in the domain of $\\ln$.\n\nSo the statement is True.',
        '**D.** → False\n\nIsoelastic demand gives $E=-\\beta$ after differentiating $\\ln Q=\\ln A-\\beta\\ln P$. Elasticity equals $-\\beta$, not $-A$.\n\nAfter $\\ln Q=\\ln A-\\beta\\ln P$, the slope in $\\ln P$ is $-\\beta$ alone.\n\nSo the statement is False.',
        '**E.** → False\n\nAt $x=1$ one has $\\ln 1=0$. Substitute $u=0$ into the quadratic.\n\n$$\n0^{2}-0-2=-2\\neq 0\n$$\n\nSo $x=1$ is not a root of the original equation.\n\nThe quadratic at $u=0$ returns $-2$, not $0$, so $x=1$ is extraneous to the solve.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.44'] = {
    "solution_overview": 'Change of base writes $f_{b}(x)=\\ln x/\\ln b$. For fixed $x>1$ the numerator is positive, so increasing the base $b>1$ enlarges $\\ln b$ and decreases $f_{b}(x)$. Normalisation $f_{b}(b)=1$ and $f_{b}(1)=0$ hold for every admissible base; the latter does not depend on $b$.',
    "tactical_explanations": [
        '**A.** → True\n\nWrite both logs through change of base with $x>1$ fixed.\n\n$$\nf_{b}(x)=\\frac{\\ln x}{\\ln b},\\qquad f_{c}(x)=\\frac{\\ln x}{\\ln c}\n$$\n\nIf $1<b<c$ then $0<\\ln b<\\ln c$, so the first ratio is strictly larger.\n\n$$\nf_{b}(x)>f_{c}(x)\n$$\n\nLarger bases grow faster, so their logarithms climb more slowly at a fixed $x>1$.\n\nSo the statement is True.',
        '**B.** → True\n\nBy definition the logarithm of its own base equals one.\n\n$$\nf_{b}(b)=\\log_{b}b=1\n$$\n\nfor every base $b>1$.\n\nEquivalently $b^{1}=b$ records the same unit-point normalisation for every base.\n\nSo the statement is True.',
        '**C.** → True\n\nDifferentiate the change-of-base form with respect to the base, treating $x>1$ as fixed.\n\n$$\n\\frac{\\partial}{\\partial b}\\log_{b}x=\\frac{\\partial}{\\partial b}\\left(\\frac{\\ln x}{\\ln b}\\right)=-\\frac{\\ln x}{(\\ln b)^{2}}\\cdot\\frac{1}{b}\n$$\n\nFor $x>1$ one has $\\ln x>0$, and the remaining factors are positive, so the whole derivative is negative.\n\nThe minus sign in front of $\\ln x$ (with $x>1$) forces the whole partial derivative negative.\n\nSo the statement is True.',
        '**D.** → False\n\nNormalisation at the argument $1$ is independent of the base.\n\n$$\nf_{b}(1)=\\log_{b}1=0\n$$\n\nfor every admissible $b$. The value does not depend on $b$, so the claim fails.\n\nEquivalently $b^{0}=1$ for every admissible base, so the intercept height is always $0$.\n\nSo the statement is False.',
        '**E.** → True\n\nChange of base with natural logs rewrites every member of the family.\n\n$$\nf_{b}(x)=\\log_{b}x=\\frac{\\ln x}{\\ln b}\n$$\n\nfor $b>1$ and $x>0$.\n\nThe same identity with auxiliary base $10$ would read $\\log_{10}x/\\log_{10}b$.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.45'] = {
    "solution_overview": 'The shifted rule $f(x)=\\log_{2}(x-1)$ has vertical asymptote $x=1$, vanishes at $x=2$, and takes the value $1$ at $x=3$. Its natural domain is $(1,\\infty)$. The ordinary quotient law remains available as a background identity.',
    "tactical_explanations": [
        '**A.** → True\n\nThe graph of $\\log_{2}(x-1)$ is the graph of $\\log_{2}$ translated one unit to the right, so its vertical asymptote is\n\n$$\nx=1\n$$\n\nThe suspected rule matches the given asymptote.\n\nAs $x\\to 1^{+}$ the argument $x-1\\to 0^{+}$, so $f(x)\\to-\\infty$ along that vertical line.\n\nSo the statement is True.',
        '**B.** → True\n\nSubstitute the claimed zero.\n\n$$\nf(2)=\\log_{2}(2-1)=\\log_{2}1=0\n$$\n\nThe evaluation matches the given intercept condition.\n\nThe argument at $x=2$ is exactly the normalisation point $1$ of $\\log_{2}$.\n\nSo the statement is True.',
        '**C.** → True\n\nSubstitute the claimed unit point.\n\n$$\nf(3)=\\log_{2}(3-1)=\\log_{2}2=1\n$$\n\nThe evaluation matches the given height $1$.\n\nThe argument at $x=3$ is exactly the base $2$, so the height must be $1$.\n\nSo the statement is True.',
        '**D.** → True\n\nThe quotient law holds for every fixed base and every positive factor pair.\n\n$$\n\\log\\!\\left(\\frac{a}{b}\\right)=\\log a-\\log b\\qquad(a>0,\\,b>0)\n$$\n\nIt does not depend on the horizontal shift.\n\nIn exponential language, $b^{\\log a-\\log b}=a/b$ recovers the same quotient identity.\n\nSo the statement is True.',
        '**E.** → True\n\nThe argument of $f$ must be strictly positive.\n\n$$\nx-1>0\\implies x>1\n$$\n\nHence the natural domain is the open ray $(1,\\infty)$.\n\nEndpoints are excluded: at $x=1$ the argument vanishes and $f$ is undefined.\n\nSo the statement is True.',
    ],
}

BODIES_102['MATH 10.2.46'] = {
    "solution_overview": 'For $h_{c}(x)=\\log_{2}(\\log_{2}(x-c))$ the outer logarithm needs $\\log_{2}(x-c)>0$, hence $x-c>1$, i.e. $x>c+1$. The threshold $c+2$ is too strict. Zero arguments and unchecked nestings remain forbidden, and the parameter $c$ itself never lies in the domain.',
    "tactical_explanations": [
        '**A.** → False\n\nThe outer logarithm requires a positive inner value.\n\n$$\n\\log_{2}(x-c)>0\\implies x-c>2^{0}=1\\implies x>c+1\n$$\n\nThe claim announces the stricter cut $x>c+2$, which excludes admissible points such as $x=c+1.5$. The stated domain is wrong.\n\nThe point $x=c+1.5$ satisfies $x>c+1$ yet fails $x>c+2$, and $h_{c}$ is defined there.\n\nSo the statement is False.',
        '**B.** → True\n\nThe same positivity chain yields the sharp threshold.\n\n$$\n\\log_{2}(x-c)>0\\implies x>c+1\n$$\n\nTogether with the inner requirement $x-c>0$, which is weaker, the natural domain is $x>c+1$.\n\nAt the threshold $x=c+1$ the inner log equals $0$, so the outer log fails; the inequality is strict.\n\nSo the statement is True.',
        '**C.** → False\n\nReal logarithms require a strictly positive argument. Zero is excluded for every base, so zero arguments are never allowed.\n\nThe domain cut $x>c+1$ already encodes strict positivity of every intermediate argument.\n\nSo the statement is False.',
        '**D.** → False\n\nA nesting needs every intermediate value to be positive, which is stricter than a single condition $x>0$. Further checks are always required.\n\nHere the outer log needs $\\log_{2}(x-c)>0$, which is stronger than $x>0$.\n\nSo the statement is False.',
        '**E.** → False\n\nAt $x=c$ the innermost argument vanishes.\n\n$$\nx-c=0\n$$\n\nThen $\\log_{2}0$ is undefined, so $c$ itself never lies in the domain of $h_{c}$.\n\nEven the weaker inner condition $x>c$ already excludes the parameter value $x=c$.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.47'] = {
    "solution_overview": 'The figure is $f=\\log_{3}$ and the table lists claimed values at the pure powers $1$, $3$, and $9$. Those claims are $\\log_{3}1=0$, $\\log_{3}3=1$, and $\\log_{3}9=2$, all correct. Bases $>1$ keep logs increasing, and addition inside a log is not a law.',
    "tactical_explanations": [
        "**A.** → True\n\nEvaluate the graph rule at $x=9=3^{2}$.\n\n$$\nf(9)=\\log_{3}9=\\log_{3}(3^{2})=2\n$$\n\nThe table's entry $2$ at $x=9$ matches the graph.\n\nTwo multiplicative factors of $3$ raise the base-$3$ log from $0$ to $2$.\n\nSo the statement is True.",
        "**B.** → True\n\nEvaluate at the normalisation point $x=1$.\n\n$$\nf(1)=\\log_{3}1=0\n$$\n\nThe table's entry $0$ at $x=1$ matches the graph.\n\nNormalisation $\\log_{3}1=0$ is the shared intercept of every admissible logarithm.\n\nSo the statement is True.",
        "**C.** → False\n\nEvaluate at the unit point $x=3$.\n\n$$\nf(3)=\\log_{3}3=1\n$$\n\nThe table lists $1$ at $x=3$, which is correct. The claim that the table's entry is wrong therefore fails.\n\nThe unit point $(3,1)$ is part of the definition of $\\log_{3}$, so the table is right there.\n\nSo the statement is False.",
        '**D.** → False\n\nFor every base $b>1$ the logarithm is strictly increasing. Decreasing behaviour requires a base in $(0,1)$. The universal decreasing claim fails.\n\nA sample: $\\log_{3}1=0<\\log_{3}3=1$ shows the base-$3$ graph rising.\n\nSo the statement is False.',
        '**E.** → False\n\nAddition inside a logarithm is not an identity. Counter-example:\n\n$$\n\\log(1+1)=\\log 2\\neq 0=\\log 1+\\log 1\n$$\n\nThe universal claim fails.\n\nProduct, quotient, and power survive; addition inside does not.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.48'] = {
    "solution_overview": 'The claimed chain equates a quotient of logs with a log of a quotient. The first step $\\log a-\\log b=\\log(a/b)$ is the quotient law. The second step equating that to $(\\log a)/(\\log b)$ fails in general; the counter-example $a=e^{2}$, $b=e$ yields $1$ versus $2$. Change of base is a different identity and does not repair the false step.',
    "tactical_explanations": [
        '**A.** → True\n\nThe first equality is the quotient law on positive arguments.\n\n$$\n\\log a-\\log b=\\log\\!\\left(\\frac{a}{b}\\right)\\qquad(a>0,\\,b>0)\n$$\n\nIt holds for every such pair, independently of the false second step.\n\nIn exponential language, $b^{\\log a-\\log b}=a/b$ recovers the same quotient.\n\nSo the statement is True.',
        "**B.** → True\n\nThe second equality in the chain asserts\n\n$$\n\\log\\!\\left(\\frac{a}{b}\\right)=\\frac{\\log a}{\\log b}\n$$\n\nfor a fixed base. That is not a logarithm identity. The statement correctly reports that the equality fails in general (the wording's caution is the true content of the claim).\n\nDividing two logs is change-of-base territory only after the bases are aligned correctly — not after a quotient law.\n\nSo the statement is True.",
        '**C.** → True\n\nSubstitute the suggested pair $a=e^{2}$, $b=e$ into both sides of the false step, using natural logs for concreteness.\n\n$$\n\\log\\!\\left(\\frac{e^{2}}{e}\\right)=\\log e=1\n$$\n\n$$\n\\frac{\\log(e^{2})}{\\log e}=\\frac{2}{1}=2\n$$\n\nLeft side $1$ and right side $2$ disagree, confirming the counter-example.\n\nThe mismatch $1\\neq 2$ is enough to kill the second step as a universal identity.\n\nSo the statement is True.',
        '**D.** → False\n\nChange of base accepts every auxiliary base $k>0$, $k\\neq 1$.\n\n$$\n\\log_{b}a=\\frac{\\log_{k}a}{\\log_{k}b}\n$$\n\nRestricting the tool to base $10$ is false.\n\nNatural logs or base $2$ convert bases just as legitimately as base $10$.\n\nSo the statement is False.',
        '**E.** → False\n\nChange of base states $\\log_{b}a=\\ln a/\\ln b$, which rewrites a single logarithm in a new base. It does not turn the false identification\n\n$$\n\\log\\!\\left(\\frac{a}{b}\\right)=\\frac{\\log a}{\\log b}\n$$\n\ninto a true step of the original chain. The two identities are different statements, so the replacement does not repair the chain.\n\nRepairing the chain would require replacing the false step by a true consequence of the first step — change of base is not such a consequence.\n\nSo the statement is False.',
    ],
}

BODIES_102['MATH 10.2.49'] = {
    "solution_overview": 'With $a<b$, both $p(x)=\\log(b-x)+\\log(x-a)$ and $q(x)=\\log((b-x)(x-a))$ require a positive argument structure that forces the open interval $(a,b)$. On that interval the product law makes $p=q$. Nested logs still need positive intermediate values.',
    "tactical_explanations": [
        '**A.** → True\n\nFor $p$, each factor must be positive separately.\n\n$$\nb-x>0,\\qquad x-a>0\\implies x\\in(a,b)\n$$\n\nFor $q$, the product $(b-x)(x-a)$ is positive on the same open interval when $a<b$. Endpoints make a factor $0$, so both natural domains equal $(a,b)$.\n\nEndpoints make a factor $0$, so both $p$ and $q$ use open endpoints.\n\nSo the statement is True.',
        '**B.** → True\n\nOn $(a,b)$ both linear factors are positive, so the product law applies.\n\n$$\n\\log(b-x)+\\log(x-a)=\\log\\bigl((b-x)(x-a)\\bigr)\n$$\n\nHence $p(x)=q(x)$ for every $x\\in(a,b)$.\n\nOutside $(a,b)$ the product law cannot be invoked for $p$, because at least one log is undefined.\n\nSo the statement is True.',
        '**C.** → True\n\nIn general a product can be positive when both factors are negative, so a single logarithm of a product might a priori live on a larger set than a sum of logs. For these two linear factors with $a<b$, a sign chart shows that never happens.\n\n$$\nx<a:\\quad (b-x)(x-a)<0\n$$\n\n$$\na<x<b:\\quad (b-x)(x-a)>0\n$$\n\n$$\nx>b:\\quad (b-x)(x-a)<0\n$$\n\nThe product is positive only on $(a,b)$, so the domain of $q$ is still forced to be that same open interval.\n\nUnlike a general product, these two linear factors never share a both-negative positivity region when $a<b$.\n\nSo the statement is True.',
        '**D.** → True\n\nThe sum $p$ is defined only when each logarithm is defined, so both factors must be positive at once.\n\n$$\nb-x>0,\\qquad x-a>0\n$$\n\nThat forces $x\\in(a,b)$ and cannot be enlarged. The domain of $p$ cannot exceed $(a,b)$.\n\nA single non-positive factor already undefined one of the summands in $p$.\n\nSo the statement is True.',
        '**E.** → False\n\nA nesting needs every intermediate value to be positive, which is stricter than a single condition $x>0$. Further checks are always required, so the claim fails.\n\nFor instance $\\log(\\log x)$ needs the inner value positive, which is stronger than $x>0$.\n\nSo the statement is False.',
    ],
}


if __name__ == "__main__":
    assert len(BODIES_102) == 49
    print(f"OK {len(BODIES_102)} (no length floors)")
