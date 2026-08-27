"""Generate MATH 13.18 explanation bodies for Chapter 2 tasks.

Each body is raw prose plus ``$$...$$`` blocks — no letter header, no verdict
closer. ``assemble.py`` binds headers and applies ``finish()`` closers.

Public API
----------
``generate_body(statement, truth, subsection, index_in_task) -> str``

Helpers for writers: ``disp``, ``step``, ``short``, ``inline``.
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from typing import Callable

Writer = Callable[["Ctx"], str]

# ---------------------------------------------------------------------------
# Layout helpers (no headers / closers)
# ---------------------------------------------------------------------------


def disp(formula: str) -> str:
    """One display-math block; assemble normalises surrounding blank lines."""
    inner = formula.strip().strip("$")
    return f"$${inner}$$"


def inline(formula: str) -> str:
    inner = formula.strip().strip("$")
    return f"${inner}$"


def step(prose: str, formula: str) -> str:
    """Named step label (Ch4 style) followed by display math."""
    label = prose.rstrip(": ")
    return f"{label}:\n\n{disp(formula)}"


def short(prose: str) -> str:
    """Conceptual block with inline math only — no ``$$`` paragraphs."""
    return prose.strip()


def _join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and p.strip())


# ---------------------------------------------------------------------------
# Statement parsing
# ---------------------------------------------------------------------------

_LATEX = re.compile(r"\$([^$]+)\$")
_FRAC = re.compile(r"\\(?:d)?frac\{([^{}]+)\}\{([^{}]+)\}")
_BINOM_SQ = re.compile(r"\(([^()]+)\)\s*\^\s*2")
_SUM_PROD = re.compile(
    r"([a-zA-Z])\s*\+\s*([a-zA-Z])\s*=\s*(-?\d+(?:\.\d+)?)"
    r".*?"
    r"\1\s*\2\s*=\s*(-?\d+(?:\.\d+)?)",
    re.S,
)
_THREE_SUM = re.compile(
    r"([a-zA-Z])\s*\+\s*([a-zA-Z])\s*\+\s*([a-zA-Z])\s*=\s*0", re.I
)
_ASSIGN = re.compile(r"([a-zA-Z])\s*=\s*(-?\d+(?:\.\d+)?)")
_SUBST_POINT = re.compile(
    r"(?:substitut(?:e|ing)|at)\s+\$?([a-zA-Z])\s*=\s*(-?\d+(?:\.\d+)?)",
    re.I,
)
_AT_POINT = re.compile(r"at\s+\$?([a-zA-Z])\s*=\s*(-?\d+(?:\.\d+)?)", re.I)


@dataclass
class Ctx:
    statement: str
    truth: bool
    subsection: str
    index_in_task: int
    profile: str  # "short" | "medium" | "stepped"

    @property
    def latex(self) -> list[str]:
        return [m.group(1) for m in _LATEX.finditer(self.statement)]


def length_profile(index_in_task: int) -> str:
    """Within-task slot: B short, C stepped, A/D/E medium (MATH 13.18)."""
    if index_in_task == 1:
        return "short"
    if index_in_task == 2:
        return "stepped"
    return "medium"


def _parse_sum_terms(inner: str) -> list[str]:
    compact = inner.replace(" ", "")
    raw = [p for p in re.findall(r"[+-]?[^+-]+", compact) if p]
    return [t[1:] if t.startswith("+") else t for t in raw]


def _binomial_cross_pair(statement: str) -> tuple[str, str]:
    m = _BINOM_SQ.search(statement)
    if not m:
        return "U", "V"
    terms = _parse_sum_terms(m.group(1))
    if len(terms) >= 2:
        return terms[0], terms[1]
    return "U", "V"


def _sum_product_pair(text: str) -> tuple[str, str, str, str] | None:
    m = _SUM_PROD.search(text)
    if not m:
        return None
    a, b, s, p = m.group(1), m.group(2), m.group(3), m.group(4)
    return a, b, s, p


def _eval_simple(expr: str) -> str | None:
    """Best-effort numeric evaluation for small integer expressions."""
    expr = expr.replace(r"\cdot", "*").replace(r"\qquad", " ")
    expr = re.sub(r"(\d+)\^(\d+)", r"\1**\2", expr)
    expr = re.sub(r"[{}\\]", "", expr)
    if not re.fullmatch(r"[\d\s+\-*/().]+", expr.replace(" ", "")):
        return None
    try:
        val = eval(expr, {"__builtins__": {}})  # noqa: S307 — controlled ints
        if isinstance(val, float) and val.is_integer():
            return str(int(val))
        return str(val)
    except Exception:
        return None


# ---------------------------------------------------------------------------
# Pattern detection (specific → general)
# ---------------------------------------------------------------------------

_PATTERNS: list[tuple[str, re.Pattern[str] | Callable[[str], bool]]] = [
    ("vanishing_sum_cubes", re.compile(r"a\^3\+b\^3|c\^3=3|r\^3\+s\^3\+t\^3", re.I)),
    ("square_sum_substitution", re.compile(r"\^2-2\\?cdot|\^2\+.*\^2=|\^2-2[a-zA-Z]", re.I)),
    ("symmetric_distance", re.compile(r"\|[^|]+\-[^|]+\|.*\+.*=|\|u-v\|", re.I)),
    ("cube_difference", re.compile(r"\^3\s*-\s*\([^)]+\)\^3|\^3-B\^3", re.I)),
    ("polarisation", re.compile(r"\^2\s*-\s*\([^)]+\-\s*[^)]+\)\^2|4rs|4[a-zA-Z]{2}", re.I)),
    ("sophie_germain", re.compile(r"f\^4\+4g\^4|2fg", re.I)),
    ("difference_of_cubes_remainder", re.compile(r"\^3-\d+|1331", re.I)),
    ("denest_sqrt", re.compile(r"\\sqrt\{[^}]+\+2\\sqrt", re.I)),
    ("nested_unit_fraction", re.compile(r"1\+\\(?:d)?frac\{1\}\{1\+", re.I)),
    ("binomial_cross_coefficient", re.compile(
        r"coefficient (?:of \$[^$]*[a-zA-Z]{2}|as \$[+-]?\d+)|"
        r"mixed product|\$[a-zA-Z]{2}\$ term|cross term",
        re.I,
    )),
    ("binomial_expand_subtract", re.compile(
        r"expands?\s+\([^)]+\)\^2.*subtract|subtracts?\s+\$[^$]+\$.*zero",
        re.I,
    )),
    ("binomial_wrong_expansion", re.compile(
        r"lists?\s+\([^)]+\)\^2\s*=|standard expansion|middle coefficient",
        re.I,
    )),
    ("complete_square", re.compile(r"completing the square|\([a-zA-Z]-\d+\)\^2\+", re.I)),
    ("perfect_square_match", re.compile(r"matching \$[^$]+\$ with \$?\([^)]+\)\^2", re.I)),
    ("difference_of_squares_factor", re.compile(r"\^2-\d+.*\(\w-\d+\)\^2|difference of squares", re.I)),
    ("diff_of_squares_group", re.compile(r"\([a-zA-Z]-[a-zA-Z]\)\([a-zA-Z]\+[a-zA-Z]\)|\(x-s\)\(x\+s\)", re.I)),
    ("am_gm_inequality", re.compile(r"\^2\+e\^2\\ge 2|\(\w-\w\)\^2\\ge 0", re.I)),
    ("fraction_cancel", re.compile(r"reduc(?:e|ing)|cancell|factor.*\\(?:d)?frac", re.I)),
    ("fraction_lcd_sum", re.compile(r"common denominator|combining \$\\(?:d)?frac|adding \$\\(?:d)?frac", re.I)),
    ("fraction_split", re.compile(r"splitting \$\\(?:d)?frac|\d+\}\{\\w\}|term-by-term", re.I)),
    ("fraction_strike", re.compile(r"striking \$?[a-zA-Z]\$? from", re.I)),
    ("exponent_stack", re.compile(r"\([^)]+\)\^\{[^}]+\}\)|power of a power|\)\^\{-", re.I)),
    ("exponent_negative_reciprocal", re.compile(r"\\frac\{1\}\{[^}]+\^-|reciprocal.*\^-", re.I)),
    ("exponent_quotient", re.compile(r"\\frac\{[^}]+\^[^}]+\}\{[^}]+\^|simplifying \$\\(?:d)?frac\{[^}]*\^", re.I)),
    ("sqrt_sum_no_split", re.compile(r"\\sqrt\{[^}]+\}\+\\sqrt|\\sqrt\{a\}\+\\sqrt\{b\}", re.I)),
    ("sqrt_product", re.compile(r"\\sqrt\{[^}]+\}\\sqrt|\\sqrt\{a\}\\sqrt\{b\}", re.I)),
    ("sqrt_principal", re.compile(r"\\sqrt\{[^}]+\^2\}|principal (?:square )?root", re.I)),
    ("abs_distance_sum", re.compile(r"\|[^|]+\|\+\|[^|]+\|.*constant|\|k-1\|\+\|k-6\|", re.I)),
    ("abs_quotient", re.compile(r"\|[^|]+\|/\s*[a-zA-Z]|\\frac\{\|", re.I)),
    ("abs_drop_bars", re.compile(r"dropping the bars|drop(?:ping)? the bars|replace.*\|[^|]+\| by", re.I)),
    ("abs_piecewise", re.compile(r"\|[^|]+\-[^|]+\|.*half-line|\|w-4\||rewriting \$?\|", re.I)),
    ("counterexample_at_point", re.compile(r"counter-example|disagree at \$|already disagree at", re.I)),
]


def detect_pattern(statement: str, subsection: str) -> str:
    text = statement
    for name, probe in _PATTERNS:
        if callable(probe):
            if probe(text):
                return name
        elif probe.search(text):
            return name
    if subsection.startswith("2.2"):
        return "fraction_generic"
    if subsection.startswith("2.3"):
        return "exponent_generic"
    if subsection.startswith("2.4"):
        return "absolute_value_generic"
    if subsection.startswith("2.5"):
        return "mixed_generic"
    return "expanding_generic"


# ---------------------------------------------------------------------------
# Writers
# ---------------------------------------------------------------------------


def _w_square_sum_substitution(c: Ctx) -> str:
    pair = _sum_product_pair(c.statement)
    if pair:
        a, b, s, p = pair
        target = re.search(rf"{a}\^2\+{b}\^2\s*=\s*(-?\d+)", c.statement)
        target_val = target.group(1) if target else "?"
        calc = _eval_simple(f"{s}**2-2*{p}")
        if c.profile == "short":
            if calc:
                return short(
                    f"The elementary identity ${a}^2+{b}^2=({a}+{b})^2-2{a}{b}$ "
                    f"turns the given data into "
                    f"${inline(f'({a}+{b})^2-2{a}{b}={s}^2-2·{p}={calc}')}$."
                )
            return short(
                f"Substitute ${a}+{b}={s}$ and ${a}{b}={p}$ into "
                f"${a}^2+{b}^2=({a}+{b})^2-2{a}{b}$."
            )
        if c.profile == "stepped":
            parts = [
                f"The square-sum identity rewrites ${a}^2+{b}^2$ without solving for ${a}$ or ${b}$:",
                step("Identity", f"{a}^2+{b}^2=({a}+{b})^2-2{a}{b}"),
                step(
                    "Substitute",
                    f"({a}+{b})^2-2{a}{b}={s}^2-2\\cdot {p}"
                    + (f"={calc}" if calc else ""),
                ),
            ]
            if target_val != "?":
                parts.append(
                    f"The arithmetic {'matches' if c.truth else 'does not match'} "
                    f"the reported ${a}^2+{b}^2={target_val}$."
                )
            return _join(*parts)
        body = (
            f"The elementary identity ${a}^2+{b}^2=({a}+{b})^2-2{a}{b}$ "
            f"converts the given data into a number:"
        )
        mid = f"({a}+{b})^2-2{a}{b}={s}^2-2\\cdot {p}"
        if calc:
            mid += f"={calc}"
        return _join(body, disp(mid))


def _w_binomial_cross_coefficient(c: Ctx) -> str:
    m = _BINOM_SQ.search(c.statement)
    inner = m.group(1) if m else "U+V"
    u, v = _binomial_cross_pair(c.statement)
    cross = f"2\\cdot({u})\\cdot({v})"
    coeff_m = re.search(r"coefficient (?:of \$)?([^$.]+?)(?:\$|\.|,)", c.statement, re.I)
    claimed = coeff_m.group(1).strip() if coeff_m else "the printed value"
    if c.profile == "short":
        return short(
            f"In a square of a sum, each mixed product is doubled. "
            f"The pair contributes ${cross}$, not the undoubled product."
        )
    if c.profile == "stepped":
        expand = f"({inner})^2"
        return _join(
            "Expand the binomial square and isolate the cross term:",
            step("Expand", expand),
            step("Cross term", cross),
            f"The collected coefficient {'matches' if c.truth else 'contradicts'} {claimed}.",
        )
    return _join(
        "In a square of a sum, each mixed product is doubled. The relevant pair contributes",
        disp(cross),
        f"The collected coefficient {'matches' if c.truth else 'is not'} {claimed}.",
    )


def _w_cube_difference(c: Ctx) -> str:
    if c.profile == "stepped":
        return _join(
            "Set $A=m+n$ and $B=m-n$. Then $A-B=2n$ and",
            step("Factor", r"A^3-B^3=(A-B)(A^2+AB+B^2)"),
            step("Expand", r"A^2+AB+B^2=3m^2+n^2"),
            "The difference is $2n(3m^2+n^2)$.",
        )
    return _join(
        "Set $A=m+n$ and $B=m-n$. Then $A-B=2n$ and",
        disp(r"A^3-B^3=(A-B)(A^2+AB+B^2)"),
        "The quadratic factor expands to $3m^2+n^2$, so the difference is $2n(3m^2+n^2)$.",
    )


def _w_vanishing_sum_cubes(c: Ctx) -> str:
    assigns = dict(_ASSIGN.findall(c.statement))
    if c.profile == "short":
        return short(
            "The vanishing-sum identity $a^3+b^3+c^3=3abc$ requires $a+b+c=0$. "
            "The printed third value must be $c=-(a+b)$, not a free choice."
        )
    if len(assigns) >= 2:
        a, b = assigns.get("a"), assigns.get("b")
        if a and b:
            c_val = -(int(a) + int(b))
            wrong = assigns.get("c", "?")
            return _join(
                f"The vanishing-sum rule needs $c=-(a+b)={c_val}$, not $c={wrong}$. "
                f"With the printed values one has $a+b+c\\neq 0$, and",
                step(
                    "Direct cubes",
                    f"{a}^3+({assigns.get('b')})^3+({wrong})^3,"
                    f"\\qquad 3\\cdot {a}\\cdot ({assigns.get('b')})\\cdot ({wrong})",
                ),
                "The two sides disagree.",
            )
    return _join(
        "The identity $a^3+b^3+c^3=3abc$ collapses only when $a+b+c=0$.",
        "The note uses values that do not sum to zero, so the shortcut fails.",
    )


def _w_polarisation(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "Expand $(r+s)^2$ and $(r-s)^2$; subtracting removes the squares "
            "and leaves the doubled cross term $4rs$."
        )
    if c.profile == "stepped":
        return _join(
            "Expand the two binomial squares:",
            step("First square", r"(r+s)^2=r^2+2rs+s^2"),
            step("Second square", r"(r-s)^2=r^2-2rs+s^2"),
            "Their difference is $4rs$.",
        )
    return _join(
        "Expand the two binomial squares:",
        disp(r"(r+s)^2=r^2+2rs+s^2,\qquad (r-s)^2=r^2-2rs+s^2"),
        "Their difference is $4rs$.",
    )


def _w_binomial_wrong_expansion(c: Ctx) -> str:
    u, v = _binomial_cross_pair(c.statement)
    cross = f"2\\cdot({u})\\cdot({v})"
    if c.profile == "short":
        return short(
            f"The cross term in $(U+V)^2$ is $2UV$, not $UV$: the middle coefficient must be ${cross}$."
        )
    return _join(
        "The cross term in $(U+V)^2$ is $2UV$, not $UV$:",
        disp(cross),
        "The listed middle coefficient is the undoubled product.",
    )


def _w_binomial_expand_subtract(c: Ctx) -> str:
    m = _BINOM_SQ.search(c.statement)
    inner = m.group(1) if m else "3t-1"
    sub = re.search(r"subtracts?\s+\$([^$]+)\$", c.statement, re.I)
    subbed = sub.group(1) if sub else "9t^2+1"
    if c.profile == "short":
        return short(
            f"The binomial square $({inner})^2$ still carries a cross term; "
            f"subtracting ${subbed}$ does not collapse everything to zero."
        )
    return _join(
        "The binomial square still carries a cross term:",
        disp(f"({inner})^2=9t^2-6t+1") if inner == "3t-1" else disp(f"({inner})^2"),
        f"Subtracting ${subbed}$ leaves a nonzero linear term, not the zero polynomial.",
    )


def _w_difference_of_squares_factor(c: Ctx) -> str:
    var_m = re.search(r"(\w)\^2-(\d+)", c.statement)
    v, n = (var_m.group(1), var_m.group(2)) if var_m else ("w", "16")
    root = int(n) ** 0.5
    root = int(root) if root == int(root) else root
    if c.profile == "short":
        return short(
            f"A difference of squares factors as $({v}-{root})({v}+{root})$, "
            f"not as a square of a difference $({v}-{root})^2$."
        )
    return _join(
        "A difference of squares is not a square of a difference:",
        disp(
            rf"{v}^2-{n}=({v}-{root})({v}+{root}),\qquad "
            rf"({v}-{root})^2={v}^2-{2*root}{v}+{root}^2"
        ),
        f"At the test point ${v}=0$ the two polynomials already disagree.",
    )


def _w_complete_square(c: Ctx) -> str:
    tri = re.search(r"(\w)\^2([+-]\d+\w)([+-]\d+)", c.statement)
    if tri:
        v, mid, const = tri.group(1), tri.group(2), tri.group(3)
        b = int(re.search(r"([+-]?\d+)", mid).group(1))  # type: ignore[union-attr]
        half = b // 2
    else:
        v, half, const = "x", -4, "20"
    sq = half * half
    if c.profile == "stepped":
        return _join(
            f"Half of the linear coefficient is ${half}$, and $({half})^2={sq}$.",
            step("Complete", f"{v}^2{b if 'b' in dir() else '-8'}{v}+{const}=({v}{half})^2+{int(const)-sq}"),
            step(
                "Rewrite",
                f"{v}^2-8{v}+20=({v}-4)^2+4",
            ),
        )
    return _join(
        f"Half of $-8$ is $-4$, and $(-4)^2=16$. Add and subtract $16$:",
        disp(f"{v}^2-8{v}+20=({v}^2-8{v}+16)+4=({v}-4)^2+4"),
        "The leftover constant is $+4$, not zero.",
    )


def _w_perfect_square_match(c: Ctx) -> str:
    tri_m = re.search(r"\$([^$]+)\$ with \$?\(([^)]+)\)\^2", c.statement)
    tri = tri_m.group(1) if tri_m else "n^2+6n+8"
    shift = tri_m.group(2) if tri_m else "n+3"
    k = re.search(r"\+(\d+)\)", shift)
    k_val = k.group(1) if k else "3"
    if c.profile == "short":
        return short(
            f"A monic perfect square with middle term $6n$ needs constant ${k_val}^2$, "
            f"not the constant in ${tri}$."
        )
    return _join(
        f"A monic perfect square with middle term $6n$ would need constant ${k_val}^2$:",
        disp(f"({shift})^2"),
        f"The given trinomial is not that square.",
    )


def _w_am_gm(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "Nonnegativity of $(d-e)^2$ rearranges to $d^2+e^2\\ge 2de$, "
            "with equality only when $d=e$."
        )
    return _join(
        "Expand the square:",
        disp(r"(d-e)^2=d^2-2de+e^2\ge 0"),
        "which rearranges to $d^2+e^2\\ge 2de$.",
    )


def _w_diff_of_squares_group(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "Difference of squares in the outer letters: "
            "$(x-s)(x+s)=x^2-s^2$."
        )
    return _join(
        "Difference of squares in $x$ and $s$:",
        disp(r"(x-s)(x+s)=x^2-s^2=x^2-(y+z)^2"),
        "The grouping is an identity in the three letters.",
    )


def _w_fraction_cancel(c: Ctx) -> str:
    frac = _FRAC.search(c.statement)
    num, den = (frac.group(1), frac.group(2)) if frac else ("t^2-9", "t-3")
    point = _AT_POINT.search(c.statement) or _SUBST_POINT.search(c.statement)
    if c.profile == "stepped" and point:
        v, val = point.group(1), point.group(2)
        return _join(
            "Factor the numerator and cancel the common linear factor:",
            step("Factor", f"\\frac{{{num}}}{{{den}}}"),
            step(
                f"At the test point ${v}={val}$",
                f"\\text{{remainder at }} {v}={val}",
            ),
            "A single test point cannot certify an identity unless the algebra matches.",
        )
    if c.profile == "short":
        return short(
            "A cancelled linear factor is not the remainder; "
            "factor first, then cancel only the shared factor."
        )
    return _join(
        "Difference of squares (or another factorisation) clears the denominator:",
        disp(f"\\frac{{{num}}}{{{den}}}"),
        "The surviving expression is the true remainder on the stated domain.",
    )


def _w_fraction_lcd_sum(c: Ctx) -> str:
    fracs = _FRAC.findall(c.statement)
    if len(fracs) >= 2:
        d1, d2 = fracs[0][1], fracs[1][1]
    else:
        d1, d2 = "t", "u"
    if c.profile == "short":
        return short(
            f"Least common denominator of ${d1}$ and ${d2}$ is their product, "
            f"not their sum ${d1}+{d2}$."
        )
    if c.profile == "stepped":
        return _join(
            "Clear to the product denominator:",
            step("LCD", f"{d1}\\cdot {d2}"),
            step(
                "Combine",
                f"\\frac{{\\cdots}}{{{d1}}}+\\frac{{\\cdots}}{{{d2}}}"
                f"=\\frac{{\\cdots}}{{{d1}{d2}}}",
            ),
        )
    return _join(
        f"Least common denominator of ${d1}$ and ${d2}$ is the product ${d1}{d2}$:",
        disp(f"\\frac{{\\cdots}}{{{d1}}}+\\frac{{\\cdots}}{{{d2}}}=\\frac{{\\cdots}}{{{d1}{d2}}}"),
        "Adding numerators over added denominators is not an identity.",
    )


def _w_fraction_split(c: Ctx) -> str:
    frac = _FRAC.search(c.statement)
    num, den = (frac.group(1), frac.group(2)) if frac else ("w+k", "w")
    if c.profile == "short":
        return short(
            f"Split $\\frac{{{num}}}{{{den}}}$ term by term; "
            f"a letter struck from the whole numerator is not the same operation."
        )
    return _join(
        "Split the fraction term by term:",
        disp(f"\\frac{{{num}}}{{{den}}}=1+\\frac{{k}}{{{den}}}"),
        "The claimed remainder agrees with the true split only at isolated test points.",
    )


def _w_fraction_strike(c: Ctx) -> str:
    return _w_fraction_split(c)


def _w_nested_unit_fraction(c: Ctx) -> str:
    if c.profile == "stepped":
        return _join(
            "Work from the innermost layer outward:",
            step("Inner", r"1+\frac{1}{x}=\frac{x+1}{x}"),
            step("Reciprocal", r"\frac{1}{1+\frac{1}{x}}=\frac{x}{x+1}"),
            step("Outer", r"1+\frac{x}{x+1}=\frac{2x+1}{x+1}"),
        )
    return _join(
        r"Innermost, $1+\dfrac{1}{x}=\dfrac{x+1}{x}$. Its reciprocal is $\dfrac{x}{x+1}$, and adding $1$ gives",
        disp(r"1+\frac{x}{x+1}=\frac{2x+1}{x+1}"),
    )


def _w_exponent_stack(c: Ctx) -> str:
    if c.profile == "stepped":
        return _join(
            "A stacked power multiplies exponents; a product adds them:",
            step("Stack", r"(x^{-2})^{-3}=x^{6}"),
            step("Product", r"x^{-2}x^{-3}=x^{-5}"),
            "The two rules produce different results.",
        )
    if "product" in c.statement.lower() or r"x^{-2}x^{-3}" in c.statement:
        return _join(
            "Power of a power multiplies:",
            disp(r"(x^{-2})^{-3}=x^{6}"),
            disp(r"x^{-2}x^{-3}=x^{-5}"),
            "The two results are different.",
        )
    return _join(
        "Innermost stack multiplies exponents:",
        disp(r"(t^{2})^{3}=t^{6}"),
        disp(r"(t^{6})^{1/2}=t^{3}"),
        "Adding exponents first would be the product rule, not the power-of-a-power rule.",
    )


def _w_exponent_quotient(c: Ctx) -> str:
    if c.profile == "stepped":
        return _join(
            "Combine numerator factors, then subtract the denominator exponent:",
            step("Numerator", r"p^{3}p^{-1}=p^{2}"),
            step("Quotient", r"\frac{p^{2}}{p^{-2}}=p^{4}"),
        )
    return _join(
        "Add exponents in the product, then subtract the denominator:",
        disp(r"\frac{w^{5}w^{-2}}{w^{-1}}=w^{4}"),
    )


def _w_exponent_negative_reciprocal(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "A negative exponent denotes a reciprocal: "
            r"$\frac{1}{q^{-3}}=q^{3}$, without an extra minus sign."
        )
    return _join(
        "A negative exponent is a reciprocal:",
        disp(r"\frac{1}{q^{-3}}=q^{3}"),
        "An extra minus sign would describe $-q^{3}$.",
    )


def _w_sqrt_product(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "On nonnegative radicands, "
            r"$\sqrt{a}\sqrt{b}=\sqrt{ab}$."
        )
    return _join(
        "On the nonnegative reals a product of square roots is the square root of the product:",
        disp(r"\sqrt{12}\sqrt{3}=\sqrt{36}=6"),
    )


def _w_sqrt_sum_no_split(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "Square roots do not split over addition: "
            r"$(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}\neq a+b$."
        )
    return _join(
        "Square roots do not split over addition. Squaring the sum produces",
        disp(r"(\sqrt{a}+\sqrt{b})^{2}=a+b+2\sqrt{ab}"),
        "For $a=b=1$ one has $\\sqrt{2}\\neq 2$.",
    )


def _w_sqrt_principal(c: Ctx) -> str:
    point = _SUBST_POINT.search(c.statement) or _AT_POINT.search(c.statement)
    if point and c.profile != "medium":
        v, val = point.group(1), point.group(2)
        return _join(
            f"Substitute ${v}={val}$:",
            disp(f"\\sqrt{{({val})^2}}=\\sqrt{{{int(val)**2}}}"),
            f"The principal root is nonnegative, not ${val}$.",
        )
    if c.profile == "short":
        return short(
            r"The principal square root gives $\sqrt{n^2}=|n|$, "
            "not the inside $n$ when $n$ may be negative."
        )
    return _join(
        "The principal square root is the unique nonnegative number whose square is $n^2$:",
        disp(r"\sqrt{n^2}=|n|"),
    )


def _w_abs_piecewise(c: Ctx) -> str:
    inner = re.search(r"\|([^|]+)\|", c.statement)
    expr = inner.group(1) if inner else "w-4"
    if c.profile == "stepped":
        return _join(
            f"On the stated half-line the inside ${expr}$ has fixed sign:",
            step("Rewrite", f"|{expr}|"),
            step("Combine", f"(4-w)+w=4"),
        )
    return _join(
        f"On the half-line where ${expr}<0$, the bars flip the sign:",
        disp(f"|{expr}|=4-w"),
        "Adding the letter then cancels it, leaving the claimed constant.",
    )


def _w_abs_drop_bars(c: Ctx) -> str:
    inner = re.search(r"\|([^|]+)\|", c.statement)
    expr = inner.group(1) if inner else "2u+1"
    if c.profile == "short":
        return short(
            f"Dropping the bars requires ${expr}\\ge 0$; "
            "one negative test point refutes a claimed identity."
        )
    return _join(
        f"Dropping the bars requires ${expr}\\ge 0$. For a counter-example take $u=-2$:",
        step(
            "At the test point",
            r"|2\cdot(-2)+1|=3,\qquad 2\cdot(-2)+1=-3",
        ),
    )


def _w_abs_quotient(c: Ctx) -> str:
    num = re.search(r"\|([^|]+)\|", c.statement)
    expr = num.group(1) if num else "n"
    var = re.search(r"/\s*([a-zA-Z])", c.statement)
    v = var.group(1) if var else expr[0]
    if "negative" in c.statement.lower() or r"\ell<0" in c.statement or r"w<0" in c.statement:
        half = f"${v}<0$"
        rewrite = f"|{v}|=-{v}"
        val = "-1"
    elif re.search(rf"{v}>0", c.statement):
        half = f"${v}>0$"
        rewrite = f"|{v}|={v}"
        val = "1"
    else:
        half = f"${v}\\neq 0$"
        rewrite = f"|{v}|=\\pm {v}"
        val = "\\pm 1"
    if c.profile == "short":
        return short(
            f"On {half}, ${rewrite}$, so $|{expr}|/{v}={val}$."
        )
    return _join(
        f"If {half} then ${rewrite}$, hence",
        disp(f"\\frac{{|{expr}|}}{{{v}}}={val}"),
    )


def _w_abs_distance_sum(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "Between the two marks the two distances add to the segment length, "
            "a constant independent of the interior point."
        )
    return _join(
        "Between the marks the two distances add to the length of the segment:",
        disp(r"|k-1|+|k-6|=6-1=5"),
    )


def _w_symmetric_distance(c: Ctx) -> str:
    pair = _sum_product_pair(c.statement)
    if pair:
        a, b, s, p = pair
        s_i, p_i = int(s), int(p)
        inner = s_i * s_i - 4 * p_i
        root = int(inner**0.5) if inner >= 0 and int(inner**0.5) ** 2 == inner else None
        if c.profile == "stepped":
            return _join(
                "The squared distance comes from symmetric data:",
                step("Identity", f"({a}-{b})^2=({a}+{b})^2-4{a}{b}"),
                step(
                    "Substitute",
                    f"({a}-{b})^2={s}^2-4\\cdot {p}={inner}",
                ),
                step("Root", f"|{a}-{b}|={root if root else r'\\sqrt{' + str(inner) + r'}'}"),
            )
        calc = f"{s}^2-4\\cdot {p}={inner}"
        if root is not None:
            calc += f",\\qquad |{a}-{b}|={root}"
        return _join(
            "The elementary identity",
            disp(f"({a}-{b})^2=({a}+{b})^2-4{a}{b}={calc}"),
        )
    return _join(
        "Use $(u-v)^2=(u+v)^2-4uv$ before taking the square root.",
    )


def _w_difference_of_cubes_remainder(c: Ctx) -> str:
    if c.profile == "stepped":
        return _join(
            "Difference of cubes leaves three terms in the quotient:",
            step("Factor", r"\frac{j^3-1331}{j-11}=j^2+11j+121"),
            step(
                "At the test point",
                r"j=0 \Rightarrow 121 \text{ on both sides, but } j=1 \Rightarrow 133 \neq 122",
            ),
        )
    return _join(
        "Difference of cubes with $1331=11^3$ gives",
        disp(r"\frac{j^3-1331}{j-11}=j^2+11j+121"),
        "A dropped linear term can vanish at one test point yet fail elsewhere.",
    )


def _w_sophie_germain(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "Adding and subtracting $4f^2g^2$ turns $f^4+4g^4$ into a difference of squares."
        )
    return _join(
        "Adding and subtracting $4f^2g^2$ produces a difference of squares:",
        disp(
            r"f^4+4g^4=(f^2+2g^2)^2-(2fg)^2"
            r"=(f^2-2fg+2g^2)(f^2+2fg+2g^2)"
        ),
    )


def _w_denest_sqrt(c: Ctx) -> str:
    if c.profile == "stepped":
        return _join(
            "Square the candidate conjugates:",
            step(
                "Sum form",
                r"(1+\sqrt{13})^2=14+2\sqrt{13}",
            ),
            step(
                "Difference form",
                r"(\sqrt{13}-1)^2=14-2\sqrt{13}",
            ),
            r"Both $1+\sqrt{13}$ and the principal root are positive.",
        )
    return _join(
        "Square the two candidate conjugates:",
        disp(
            r"(1+\sqrt{13})^2=14+2\sqrt{13},\qquad"
            r"(\sqrt{13}-1)^2=14-2\sqrt{13}"
        ),
        r"The sum form matches $\sqrt{14+2\sqrt{13}}$.",
    )


def _w_counterexample_at_point(c: Ctx) -> str:
    return _w_abs_drop_bars(c)


def _w_expanding_generic(c: Ctx) -> str:
    if c.profile == "short":
        return short(
            "Expand or factor with the named elementary identity; "
            "compare the result to the printed claim."
        )
    return _join(
        "Apply the relevant binomial or factor identity:",
        disp(r"(a+b)^2=a^2+2ab+b^2"),
    )


def _w_fraction_generic(c: Ctx) -> str:
    return _w_fraction_lcd_sum(c)


def _w_exponent_generic(c: Ctx) -> str:
    return _w_exponent_quotient(c)


def _w_absolute_value_generic(c: Ctx) -> str:
    return _w_abs_piecewise(c)


def _w_mixed_generic(c: Ctx) -> str:
    if c.subsection == "2.5" and c.index_in_task == 2:
        return _w_exponent_stack(c)
    return _w_expanding_generic(c)


_WRITERS: dict[str, Writer] = {
    "square_sum_substitution": _w_square_sum_substitution,
    "binomial_cross_coefficient": _w_binomial_cross_coefficient,
    "binomial_wrong_expansion": _w_binomial_wrong_expansion,
    "cube_difference": _w_cube_difference,
    "vanishing_sum_cubes": _w_vanishing_sum_cubes,
    "polarisation": _w_polarisation,
    "binomial_expand_subtract": _w_binomial_expand_subtract,
    "difference_of_squares_factor": _w_difference_of_squares_factor,
    "complete_square": _w_complete_square,
    "perfect_square_match": _w_perfect_square_match,
    "am_gm_inequality": _w_am_gm,
    "diff_of_squares_group": _w_diff_of_squares_group,
    "fraction_cancel": _w_fraction_cancel,
    "fraction_lcd_sum": _w_fraction_lcd_sum,
    "fraction_split": _w_fraction_split,
    "fraction_strike": _w_fraction_strike,
    "nested_unit_fraction": _w_nested_unit_fraction,
    "exponent_stack": _w_exponent_stack,
    "exponent_quotient": _w_exponent_quotient,
    "exponent_negative_reciprocal": _w_exponent_negative_reciprocal,
    "sqrt_product": _w_sqrt_product,
    "sqrt_sum_no_split": _w_sqrt_sum_no_split,
    "sqrt_principal": _w_sqrt_principal,
    "abs_piecewise": _w_abs_piecewise,
    "abs_drop_bars": _w_abs_drop_bars,
    "abs_quotient": _w_abs_quotient,
    "abs_distance_sum": _w_abs_distance_sum,
    "symmetric_distance": _w_symmetric_distance,
    "difference_of_cubes_remainder": _w_difference_of_cubes_remainder,
    "sophie_germain": _w_sophie_germain,
    "denest_sqrt": _w_denest_sqrt,
    "counterexample_at_point": _w_counterexample_at_point,
    "expanding_generic": _w_expanding_generic,
    "fraction_generic": _w_fraction_generic,
    "exponent_generic": _w_exponent_generic,
    "absolute_value_generic": _w_absolute_value_generic,
    "mixed_generic": _w_mixed_generic,
}


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------


def generate_body(
    statement: str,
    truth: bool,
    subsection: str,
    index_in_task: int,
) -> str:
    """Return explanation prose + display math only (no header, no closer)."""
    pattern = detect_pattern(statement, subsection)
    profile = length_profile(index_in_task)
    ctx = Ctx(
        statement=statement.strip(),
        truth=bool(truth),
        subsection=subsection.strip(),
        index_in_task=index_in_task,
        profile=profile,
    )
    writer = _WRITERS.get(pattern, _w_expanding_generic)
    body = writer(ctx).strip()
    # Never emit verdict language — assemble owns closers.
    body = re.sub(
        r",?\s*so the statement is (?:True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    )
    body = re.sub(
        r"(?:Matching these figures to the claim, )?"
        r"the statement is (?:True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    )
    return body.strip()


def preview_task(items: list[tuple[str, bool]], subsection: str) -> list[str]:
    """Debug helper: generate all five bodies for a task."""
    return [
        generate_body(stmt, truth, subsection, i)
        for i, (stmt, truth) in enumerate(items)
    ]


if __name__ == "__main__":
    from s21 import TASKS as T21  # noqa: WPS433 — local dev preview

    t0 = T21[0]
    for i, stmt in enumerate(t0["statements"]):
        body = generate_body(stmt, t0["answer_key"][i], t0["subsection"], i)
        print(f"--- {('ABCDE'[i])} pattern={detect_pattern(stmt, t0['subsection'])} profile={length_profile(i)} ---")
        print(body)
        print()
