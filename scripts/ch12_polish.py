"""Post-process Chapter 12 tasks: complete wording, strip markup, add Venn diagrams."""

from __future__ import annotations

import html
import re
from urllib.parse import quote

LETTERS = "ABCDE"

LEAK_RE = re.compile(
    r"(?:^|\n)\s*(?:"
    r"\*\*Answers?:\*\*|Answers?:\s*|Worked(?:\s+answer|\s+solution)?|"
    r"Only counts:|Converted values:|Teaching notes|"
    r"Question\s+\d+|Section\s+\d+|Inclusion-Exclusion Probability|"
    r"#STATEMENT|# Combinatorial Probability"
    r")",
    flags=re.I,
)

MARKER_RE = re.compile(r"#STATEMENT\s*TRUE|#STATEMENTTRUE|#STATEMENT", flags=re.I)

DUP_NUM_RE = re.compile(
    r"(\d[\d,]*(?:\.\d+)?(?:\s*/\s*\d[\d,]*(?:\.\d+)?)?)\s*(?:\$[^$]+\$)\s*\1"
    r"|"
    r"(\$[^$]+\$)\s*(\d[\d,]*(?:\.\d+)?(?:\s*/\s*\d[\d,]*(?:\.\d+)?)?)\s*\3"
)


def expand_math_words(s: str) -> str:
    """Turn common probability tokens into words before stripping leftover TeX."""
    s = s.replace("\\operatorname{Var}(X)", "the variance of X")
    s = s.replace("\\mathrm{Var}(X)", "the variance of X")
    s = s.replace("\\operatorname{SD}(X)", "the standard deviation of X")
    s = re.sub(
        r"\\operatorname\{Var\}\(([A-Za-z][A-Za-z0-9_]*)\)",
        r"the variance of \1",
        s,
    )
    s = re.sub(
        r"\\operatorname\{SD\}\(([A-Za-z][A-Za-z0-9_]*)\)",
        r"the standard deviation of \1",
        s,
    )
    s = re.sub(r"Cov\(([A-Za-z]),([A-Za-z])\)", r"the covariance of \1 and \2", s)
    s = s.replace("Var(X)", "the variance of X")
    s = s.replace("SD(X)", "the standard deviation of X")
    s = re.sub(r"E\(X\^2\)", "the expected value of X squared", s)
    s = re.sub(r"(?<![A-Za-z])E\(([A-Za-z][A-Za-z0-9_]*)\)", r"the expected value of \1", s)
    s = re.sub(r"Var\(([A-Za-z][A-Za-z0-9_]*)\)", r"the variance of \1", s)
    s = re.sub(r"SD\(([A-Za-z][A-Za-z0-9_]*)\)", r"the standard deviation of \1", s)
    s = re.sub(r"\\sigma\^2", "the variance of X", s)
    s = re.sub(r"\\sigma", "the standard deviation of X", s)
    s = re.sub(r"\\mu", "the mean of X", s)
    s = s.replace("σ^2", "the variance of X").replace("σ", "the standard deviation of X")
    s = s.replace("μ", "the mean of X")
    s = re.sub(
        r"\\sim\\operatorname\{Poisson\}\((\d+)\)",
        r"follows a Poisson distribution with mean \1",
        s,
    )
    s = s.replace("\\sim", " follows ")
    s = s.replace("\\ge", " ≥ ").replace("\\le", " ≤ ").replace("\\ne", " ≠ ")
    s = s.replace("\\approx", " ≈ ")
    s = s.replace("\\lambda", " lambda ")
    return s


def strip_markup(text: str, keep_display_math: bool = False) -> str:
    """Remove formatting accidents while optionally preserving $$...$$ blocks."""
    if not text:
        return text
    s = text.replace("\u00a0", " ")
    s = MARKER_RE.sub("", s)
    s = s.replace("**Subtopic:**", "").replace("**Printed subtopic:**", "")
    s = s.replace("**Actual content:**", "")
    s = re.sub(r"\*\*([^*]+)\*\*", r"\1", s)
    s = re.sub(r"`+", "", s)
    s = expand_math_words(s)

    held: list[str] = []
    if keep_display_math:

        def hold(m: re.Match[str]) -> str:
            held.append(m.group(0))
            return f"@@MATH{len(held) - 1}@@"

        s = re.sub(r"\$\$.*?\$\$", hold, s, flags=re.S)

    # Keep ordinary numbers that were wrapped as math
    s = re.sub(r"\$(\d[\d,]*(?:\.\d+)?)\$", r"\1", s)
    s = re.sub(r"\\\((\d[\d,]*(?:\.\d+)?)\\\)", r"\1", s)
    s = s.replace("\\%", "%").replace("\\$", "")
    s = s.replace("\\binom", "C")
    s = s.replace("\\cdot", "·").replace("\\times", "×")
    s = s.replace("\\le ", "≤ ").replace("\\ge ", "≥ ")
    s = s.replace("\\ne ", "≠ ").replace("\\approx", "≈")
    s = s.replace("\\cup", " or ").replace("\\cap", " and ").replace("\\mid", " given ")
    s = s.replace("\\triangle", " symmetric difference ")
    s = re.sub(r"\\text\{([^}]*)\}", r"\1", s)
    s = re.sub(r"\\mathrm\{([^}]*)\}", r"\1", s)
    s = re.sub(r"\\operatorname\{([^}]*)\}", r"\1", s)
    s = re.sub(r"\\frac\{([^}]*)\}\{([^}]*)\}", r"(\1)/(\2)", s)
    s = re.sub(r"\\[a-zA-Z]+\{?", "", s)
    s = s.replace("{,}", ",")
    s = re.sub(r"(?<!\$)\$(?!\$)", "", s)
    s = s.replace("{", "").replace("}", "")
    s = s.replace("\\", "")
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"[ \t]{2,}", " ", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    s = re.sub(r" ,", ",", s)
    s = re.sub(r" \.", ".", s)
    s = re.sub(r"the expected value of X of X", "the expected value of X", s)
    s = re.sub(r"the variance of X of X", "the variance of X", s)
    s = re.sub(r"the standard deviation of X of X", "the standard deviation of X", s)
    s = re.sub(r"the mean of X of X", "the mean of X", s)

    if keep_display_math:
        for i, block in enumerate(held):
            inner = block.strip("$").strip()
            inner = expand_math_words(inner)
            inner = re.sub(r"\\text\{([^}]*)\}", r"\1", inner)
            s = s.replace(f"@@MATH{i}@@", f"\n$$\n{inner.strip()}\n$$\n")

    return s.strip()


def humanize_statement(raw: str, context: str = "") -> str:
    s = expand_math_words(raw or "")
    s = strip_markup(s)
    s = s.replace("$$", "").replace("$", "")
    s = drop_duplicate_numbers(s)
    s = s.strip(" ;")
    if not s:
        return s

    s = re.sub(r"^the probability that the probability", "The probability", s, flags=re.I)

    def cmp_repl(m: re.Match[str]) -> str:
        left = m.group(1).strip()
        words = compare_words(m.group(2))
        right = m.group(3).strip()
        if left.lower() in {
            "the expected value of x",
            "the variance of x",
            "the standard deviation of x",
            "the mean of x",
            "the expected value of x squared",
        }:
            return f"{left} {words} {right}"
        return f"{left} {words} {right}"

    s = re.sub(
        r"(?i)(the expected value of x(?: squared)?|the variance of x|the standard deviation of x|the mean of x)\s*([><≥≤=])\s*([^\n]+)",
        cmp_repl,
        s,
    )
    # Remaining bare comparison operators in claims
    if re.search(r"[><≥≤]", s) and "greater than" not in s.lower() and "less than" not in s.lower():
        s = re.sub(r"\s*>\s*", " is greater than ", s)
        s = re.sub(r"\s*<\s*", " is less than ", s)
        s = re.sub(r"\s*≥\s*", " is at least ", s)
        s = re.sub(r"\s*≤\s*", " is at most ", s)
    if re.search(r"(equals 10|equals 8|n equals)", s, flags=re.I) or (
        re.search(r"\s=\s", s) and len(s) < 40
    ):
        s = re.sub(r"\s*=\s*", " equals ", s)

    s = re.sub(r" {2,}", " ", s).strip()
    low = s.lower()
    subject = infer_subject(context)

    if re.match(r"^(at least one|exactly one|exactly two|all three|none)\b", low):
        rest = re.sub(
            r"^(at least one|exactly one|exactly two|all three|none)\s+",
            "",
            s,
            flags=re.I,
        )
        kind = re.match(
            r"^(at least one|exactly one|exactly two|all three|none)",
            s,
            flags=re.I,
        ).group(1).lower()
        phrase = {
            "at least one": f"The probability that {subject} has at least one of the listed categories",
            "exactly one": f"The probability that {subject} has exactly one of the listed categories",
            "exactly two": f"The probability that {subject} has exactly two of the listed categories",
            "all three": f"The probability that {subject} has all three categories",
            "none": f"The probability that {subject} has none of the listed categories",
        }[kind]
        s = f"{phrase} {rest}".strip()

    # Only rewrite a lone event letter, never "a customer"
    s = re.sub(
        r"^The probability that ([A-Z])(?=[\s=.,]|$)",
        r"The probability of event \1",
        s,
    )

    if re.match(r"^n equals ", s, flags=re.I):
        s = "The unknown value n equals " + s.split("equals", 1)[-1].strip()
    s = re.sub(r"^P\(([^)]+)\)\s*(?:equals|=)\s*", r"The probability that \1 equals ", s)
    s = re.sub(r"^P\(([^)]+)\)\s+", r"The probability that \1 ", s)
    s = re.sub(r"^Delayed\s+", "The probability of a delay is ", s)
    s = re.sub(r"^C=", "The expected cost C equals ", s)
    s = re.sub(r"^[Cc]\s*=\s*", "The expected cost C equals ", s)
    s = re.sub(
        r"Cov\(([A-Za-z]),([A-Za-z])\)\s*=\s*",
        r"The covariance of \1 and \2 equals ",
        s,
    )
    s = re.sub(
        r"(the probability of [^.-]+)-the probability",
        r"\1 minus the probability",
        s,
    )
    s = re.sub(
        r"(the covariance of [A-Za-z] and [A-Za-z])\s*=\s*",
        r"\1 equals ",
        s,
    )
    s = re.sub(r"^([kKpP])=", r"The unknown value \1 equals ", s)
    s = re.sub(r"(\d)\s*the standard deviation", r"\1 times the standard deviation", s)
    s = re.sub(r"the mean of X\s*=\s*", "the mean of X equals ", s)
    s = re.sub(r"the variance of ([A-Za-z])\s*=\s*", r"the variance of \1 equals ", s)
    s = re.sub(r"the expected value of ([A-Za-z])\s*=\s*", r"the expected value of \1 equals ", s)

    s = re.sub(r"\s+", " ", s).strip()
    if s and s[0].islower():
        s = s[0].upper() + s[1:]
    if s and not s.endswith((".", "?", "!")):
        s += "."
    return s


def cut_leak(text: str) -> str:
    if not text:
        return text
    parts = LEAK_RE.split(text, maxsplit=1)
    return parts[0].strip() if parts else text


def drop_duplicate_numbers(text: str) -> str:
    """BUG 1: drop a plain-digit echo of an adjacent math run."""
    s = DUP_NUM_RE.sub(lambda m: m.group(1) or m.group(2) or m.group(0), text)
    s = re.sub(
        r"(\d[\d,]*/\d[\d,]*)\s+\1",
        r"\1",
        s,
    )
    return s


def compare_words(op: str) -> str:
    op = op.strip()
    return {
        ">": "is greater than",
        "<": "is less than",
        "≥": "is at least",
        "≤": "is at most",
        "=": "equals",
        "≠": "is not equal to",
    }.get(op, op)


def infer_subject(context: str) -> str:
    c = (context or "").lower()
    pairs = [
        ("server", "the randomly selected server"),
        ("patient", "the randomly selected patient"),
        ("customer", "the randomly selected customer"),
        ("student", "the randomly selected student"),
        ("employee", "the randomly selected employee"),
        ("diner", "the randomly selected diner"),
        ("car", "the randomly selected car"),
        ("member", "the randomly selected member"),
        ("respondent", "the randomly selected respondent"),
        ("household", "the randomly selected household"),
        ("transaction", "the randomly selected transaction"),
        ("unit", "the randomly selected unit"),
        ("reader", "the randomly selected reader"),
    ]
    for key, phrase in pairs:
        if key in c:
            return phrase
    return "the randomly selected case"


def humanize_context(raw: str) -> str:
    s = drop_duplicate_numbers(raw or "")
    s = cut_leak(s)
    s = MARKER_RE.sub("", s)
    s = re.sub(
        r"(?i)evaluate each statement\.?\s*mark it true or false\.?\s*",
        "",
        s,
    )
    s = re.sub(r"(?i)^\*\*difficulty:[^\n]*\n", "", s)
    s = strip_markup(s, keep_display_math=True)
    s = re.sub(
        r"Evaluate each statement\.?\s*$",
        "For each statement below, decide whether it is true or false.",
        s,
        flags=re.I,
    )
    if re.search(r"begin\{array\}", raw or "") and not re.search(r"[A-Za-z]{12,}", s[:80] if s else ""):
        s = complete_table_context(raw, s)
    return s.strip()


def complete_table_context(raw: str, fallback: str) -> str:
    title_hint = ""
    values = re.findall(r"(-?\$?\d[\d,]*(?:\.\d+)?|-?\\\$\d[\d,]*)", raw)
    probs = re.findall(r"0\.\d+", raw)
    if "array" in raw:
        return (
            "A random variable X takes a small number of possible values, each with a known probability, "
            "as shown in the table. For each statement below, decide whether it is true or false."
        )
    return fallback


def latex_table_to_markdown(raw: str) -> str | None:
    m = re.search(r"\\begin\{array\}.*?\\end\{array\}", raw or "", flags=re.S)
    if not m:
        return None
    body = m.group(0)
    body = body.replace("\\hline", "")
    rows = [r.strip() for r in body.split("\\\\") if r.strip() and "begin" not in r]
    md_rows = []
    for i, row in enumerate(rows):
        row = re.sub(r"\\begin\{array\}[^}]*\}", "", row)
        row = strip_markup(row.replace("&", " | "))
        cells = [c.strip() for c in row.split("|") if c.strip()]
        if not cells:
            continue
        md_rows.append("| " + " | ".join(cells) + " |")
        if i == 0:
            md_rows.append("| " + " | ".join("---" for _ in cells) + " |")
    return "\n".join(md_rows) if md_rows else None


def sanitize_explanation(text: str, overview: str = "") -> str:
    s = cut_leak(text or "")
    s = MARKER_RE.sub("", s)
    if "See the shared solution" in s and overview:
        s = s.replace(
            "See the shared solution for the supporting calculation.",
            strip_markup(overview, keep_display_math=True),
        )
    s = strip_markup(s, keep_display_math=True)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


# ---------------------------------------------------------------------------
# Venn diagrams (inclusion–exclusion questions 24–29)
# ---------------------------------------------------------------------------


def _svg_wrap(inner: str, w: int = 520, h: int = 340) -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'width="{w}" height="{h}" role="img">'
        f'<rect width="{w}" height="{h}" rx="16" fill="#f8f6f2" stroke="#d9d2c5"/>'
        f"{inner}</svg>"
    )


def venn2_svg(a_only, both, b_only, neither, la="A", lb="B") -> str:
    inner = f"""
      <circle cx="200" cy="165" r="110" fill="#c9dff8" fill-opacity="0.55" stroke="#3b6ea5" stroke-width="2"/>
      <circle cx="320" cy="165" r="110" fill="#f7d4c2" fill-opacity="0.55" stroke="#b5683a" stroke-width="2"/>
      <text x="145" y="50" text-anchor="middle" font-size="16" font-family="Georgia,serif" fill="#2b2b2b">{html.escape(la)}</text>
      <text x="375" y="50" text-anchor="middle" font-size="16" font-family="Georgia,serif" fill="#2b2b2b">{html.escape(lb)}</text>
      <text x="155" y="170" text-anchor="middle" font-size="18" font-family="Georgia,serif">{a_only}</text>
      <text x="260" y="170" text-anchor="middle" font-size="18" font-family="Georgia,serif">{both}</text>
      <text x="365" y="170" text-anchor="middle" font-size="18" font-family="Georgia,serif">{b_only}</text>
      <text x="460" y="300" text-anchor="middle" font-size="14" font-family="Georgia,serif">outside: {neither}</text>
    """
    return _svg_wrap(inner)


def venn3_svg(only_a, only_b, only_c, ab, ac, bc, abc, none, la="A", lb="B", lc="C", count=False) -> str:
    def fmt(v):
        if count:
            return str(v)
        if isinstance(v, float) and v < 1:
            return f"{v:.0%}" if v >= 0.01 else str(v)
        return str(v)

    inner = f"""
      <circle cx="210" cy="140" r="100" fill="#c9dff8" fill-opacity="0.45" stroke="#3b6ea5" stroke-width="2"/>
      <circle cx="310" cy="140" r="100" fill="#f7d4c2" fill-opacity="0.45" stroke="#b5683a" stroke-width="2"/>
      <circle cx="260" cy="230" r="100" fill="#d5ebc8" fill-opacity="0.45" stroke="#5a8a3a" stroke-width="2"/>
      <text x="130" y="70" font-size="15" font-family="Georgia,serif">{html.escape(la)}</text>
      <text x="355" y="70" font-size="15" font-family="Georgia,serif">{html.escape(lb)}</text>
      <text x="250" y="325" font-size="15" font-family="Georgia,serif">{html.escape(lc)}</text>
      <text x="160" y="130" text-anchor="middle" font-size="15" font-family="Georgia,serif">{fmt(only_a)}</text>
      <text x="360" y="130" text-anchor="middle" font-size="15" font-family="Georgia,serif">{fmt(only_b)}</text>
      <text x="260" y="275" text-anchor="middle" font-size="15" font-family="Georgia,serif">{fmt(only_c)}</text>
      <text x="260" y="115" text-anchor="middle" font-size="15" font-family="Georgia,serif">{fmt(ab)}</text>
      <text x="195" y="200" text-anchor="middle" font-size="15" font-family="Georgia,serif">{fmt(ac)}</text>
      <text x="325" y="200" text-anchor="middle" font-size="15" font-family="Georgia,serif">{fmt(bc)}</text>
      <text x="260" y="175" text-anchor="middle" font-size="15" font-family="Georgia,serif">{fmt(abc)}</text>
      <text x="430" y="310" text-anchor="middle" font-size="13" font-family="Georgia,serif">none: {fmt(none)}</text>
    """
    return _svg_wrap(inner, 520, 360)


def svg_data_uri(svg: str) -> str:
    return "data:image/svg+xml;utf8," + quote(svg)


VENN_OVERRIDES: dict[int, dict] = {
    24: {
        "title": "Newspaper and TV news survey",
        "context": (
            "In a survey of 50 people, event A is 'reads a newspaper' and event B is 'watches TV news'. "
            "The Venn diagram below shows how many people fall into each region. "
            "One person from the survey is selected at random."
        ),
        "statements": [
            "The probability that the selected person reads a newspaper is greater than 45%.",
            "The probability that the person reads a newspaper or watches TV news equals the probability of reading a newspaper plus the probability of watching TV news minus the probability of doing both.",
            "The probability that the person watches TV news, given that they read a newspaper, equals 40%.",
            "The probability that the person neither reads a newspaper nor watches TV news is less than 15%.",
            "The probability that the person reads a newspaper, given that they watch TV news, is greater than the probability that they watch TV news given that they read a newspaper.",
        ],
        "figure": svg_data_uri(venn2_svg(15, 10, 20, 5, "Newspaper", "TV news")),
        "explanations": [
            "From the diagram, the newspaper circle contains 15 + 10 = 25 people, so the probability is 25/50 = 50%, which is greater than 45%.",
            "This is the inclusion-exclusion identity. It holds for any two events: add the two circles and subtract the overlap so it is not counted twice.",
            "Given newspaper, the overlap is 10 out of the 25 newspaper readers, so 10/25 = 40% exactly.",
            "The outside region contains 5 people, so 5/50 = 10%, which is less than 15%.",
            "The other conditional is 10/30 ≈ 33.3%, which is not greater than 40%. The smaller group (newspaper readers) produces the larger conditional probability.",
        ],
    },
    25: {
        "title": "Email, SMS, and push notification channels",
        "context": (
            "A marketing team studies which notification channels its customers are subscribed to: "
            "Email (A), SMS (B), and Push notifications (C). The Venn diagram below shows the probability "
            "that a randomly selected customer falls into each region, including customers subscribed to none of the three."
        ),
        "statements": [
            "The probability that a customer subscribes to at least one channel is greater than 53%.",
            "The probability that a customer subscribes to exactly two of the three channels equals 18%.",
            "The probability that a customer subscribes to Email, given that they subscribe to SMS or Push, is greater than 41%.",
            "The probability that a customer's Email and SMS subscriptions differ (they subscribe to exactly one of those two) is less than 32%.",
            "The probability that a customer subscribes to all three channels is less than one-quarter of the probability that they subscribe to exactly two channels.",
        ],
        "figure": svg_data_uri(
            venn3_svg(0.12, 0.08, 0.10, 0.07, 0.05, 0.06, 0.04, 0.48, "Email", "SMS", "Push")
        ),
        "explanations": [
            "Read the none region from the diagram: 0.48. Then the probability of at least one channel is 1 − 0.48 = 0.52 = 52%, which is not greater than 53%.",
            "Exactly two is the sum of the three pairwise-only regions: 0.07 + 0.05 + 0.06 = 0.18 = 18%.",
            "SMS or Push has probability 0.40. Email and (SMS or Push) has probability 0.16. So 0.16/0.40 = 40%, which is not greater than 41%.",
            "The symmetric difference of Email and SMS is 0.12 + 0.08 + 0.05 + 0.06 = 0.31 = 31%, which is less than 32%.",
            "All three is 4%. One-quarter of exactly two is 18%/4 = 4.5%. Since 4% is less than 4.5%, the claim holds.",
        ],
    },
    26: {
        "title": "Auto-save, dark mode, and cloud sync",
        "context": (
            "An app studies which features its customers use: Auto-save (P), Dark mode (Q), and Cloud sync (R). "
            "The Venn diagram below shows the probability of a randomly selected customer falling into each region, "
            "including customers who use none of the three features."
        ),
        "statements": [
            "The probability that the customer uses at least one of the three features is greater than 52%.",
            "The probability that the customer uses exactly two of the three features equals 15%.",
            "The probability that the customer uses Auto-save, given that they use Dark mode or Cloud sync, is greater than 37%.",
            "The probability that the customer uses exactly one of Auto-save and Dark mode is greater than 32%.",
            "The probability that the customer uses all three features is less than one-quarter of the probability that they use exactly two features.",
        ],
        "figure": svg_data_uri(
            venn3_svg(0.15, 0.10, 0.08, 0.06, 0.04, 0.05, 0.03, 0.49, "Auto-save", "Dark mode", "Cloud sync")
        ),
        "explanations": [
            "The none region is 0.49, so at least one feature is 1 − 0.49 = 0.51 = 51%, which is not greater than 52%.",
            "Exactly two sums the pairwise-only regions: 0.06 + 0.04 + 0.05 = 0.15 = 15%.",
            "Dark mode or Cloud sync has probability 0.36. Auto-save and that union has probability 0.13. So 0.13/0.36 ≈ 36.1%, which is not greater than 37%.",
            "Exactly one of Auto-save and Dark mode is 0.15 + 0.10 + 0.04 + 0.05 = 0.34 = 34%, which is greater than 32%.",
            "All three is 3%. One-quarter of exactly two is 15%/4 = 3.75%. Since 3% is less than 3.75%, the claim holds.",
        ],
    },
    27: {
        "title": "Sci-fi, fantasy, and mystery readers",
        "context": (
            "A survey studies which genres a reader enjoys: Sci-Fi (A), Fantasy (B), and Mystery (C). "
            "The Venn diagram below shows the probability of a randomly selected reader falling into each region, "
            "including readers who enjoy none of the three genres."
        ),
        "statements": [
            "The probability that the reader enjoys Sci-Fi, given that they enjoy Fantasy, is greater than the probability that the reader enjoys Sci-Fi overall.",
            "The probability that the reader enjoys both Sci-Fi and Fantasy but not Mystery is more than half of the probability that they enjoy both Sci-Fi and Fantasy.",
            "The probability that the reader enjoys Mystery, given that they enjoy Sci-Fi or Fantasy, is greater than 30%.",
            "Sci-Fi and Mystery are independent events, because the product of their probabilities equals the probability of enjoying both.",
            "The probability that the reader enjoys exactly one of the three genres is greater than the probability that they enjoy at least two of the three genres.",
        ],
        "figure": svg_data_uri(
            venn3_svg(0.10, 0.14, 0.12, 0.08, 0.05, 0.07, 0.06, 0.38, "Sci-Fi", "Fantasy", "Mystery")
        ),
        "explanations": [
            "P(Sci-Fi) = 0.10+0.08+0.05+0.06 = 0.29. P(Fantasy) = 0.35. P(both) = 0.14. Given Fantasy, P(Sci-Fi) = 0.14/0.35 = 0.40, which is greater than 0.29.",
            "Both Sci-Fi and Fantasy but not Mystery is the 0.08 region. Half of both genres is 0.14/2 = 0.07. Since 0.08 is greater than 0.07, the claim holds.",
            "Sci-Fi or Fantasy is 0.29+0.35−0.14 = 0.50. Mystery overlapping that union is 0.18. So 0.18/0.50 = 36%, which is greater than 30%.",
            "P(Sci-Fi)×P(Mystery) = 0.29×0.30 = 0.087, but P(both) = 0.11. The two sides disagree, so the events are not independent.",
            "Exactly one is 0.10+0.14+0.12 = 0.36. At least two is 0.08+0.05+0.07+0.06 = 0.26. Since 0.36 is greater than 0.26, the claim holds.",
        ],
    },
    28: {
        "title": "Health, dental, and vision benefits",
        "context": (
            "A survey of company employees records enrollment in three optional benefits: Health insurance (H), "
            "Dental (D), and Vision (V). The Venn diagram below shows the probability that a randomly selected employee "
            "falls into each region, including employees enrolled in none of the three."
        ),
        "statements": [
            "The probability that the employee is enrolled in Health, given that they are enrolled in Dental, is greater than the overall probability of Health enrollment.",
            "The probability that the employee is enrolled in both Health and Dental, but not Vision, is less than half of the probability of both Health and Dental.",
            "The probability that the employee is enrolled in Vision, given that they are enrolled in Health or Dental, is greater than 35%.",
            "Health and Vision are independent events, because the product of their probabilities equals the probability of being enrolled in both.",
            "The probability that the employee is enrolled in exactly one of the three benefits is more than triple the probability of being enrolled in all three.",
        ],
        "figure": svg_data_uri(
            venn3_svg(0.12, 0.09, 0.07, 0.06, 0.05, 0.04, 0.03, 0.54, "Health", "Dental", "Vision")
        ),
        "explanations": [
            "P(Health) = 0.26 and P(Health and Dental) = 0.09, so given Dental the probability is 0.09/0.22 ≈ 40.9%, which is greater than 26%.",
            "Health and Dental but not Vision is 0.06. Half of Health and Dental is 0.09/2 = 0.045. Since 0.06 is greater than 0.045, the 'less than' claim is false.",
            "Health or Dental is 0.39. Vision overlapping that union is 0.12. So 0.12/0.39 ≈ 30.8%, which is not greater than 35%.",
            "P(Health)×P(Vision) = 0.26×0.19 = 0.0494, but P(both) = 0.08. The sides disagree, so the events are not independent.",
            "Exactly one is 0.12+0.09+0.07 = 0.28. Triple all-three is 3×0.03 = 0.09. Since 0.28 is greater than 0.09, the claim holds.",
        ],
    },
    29: {
        "title": "Soccer, basketball, and tennis at a sports club",
        "context": (
            "A sports club has 100 members. The Venn diagram below shows how many members play each combination of "
            "Soccer (S), Basketball (B), and Tennis (T). One member is selected at random."
        ),
        "statements": [
            "The probability that the member plays at least one of the three sports is greater than 90%.",
            "The probability that the member plays none of the three sports equals 1 minus the probability that the member plays at least one.",
            "The probability that the member plays exactly one of the three sports is greater than 60%.",
            "The probability that the member plays exactly two of the three sports, but not all three, is less than 20%.",
            "The probability that the member plays all three sports is less than one-fourth of the probability that the member plays exactly two sports but not all three.",
        ],
        "figure": svg_data_uri(
            venn3_svg(28, 20, 18, 10, 7, 5, 5, 7, "Soccer", "Basketball", "Tennis", count=True)
        ),
        "explanations": [
            "Sum every region inside the three circles: 28+20+18+10+7+5+5 = 93, so 93/100 = 93%, which is greater than 90%.",
            "Playing none and playing at least one are complementary, so the none probability is 1 minus the at-least-one probability by definition.",
            "Exactly one sums the single-sport regions: 28+20+18 = 66, so 66%, which is greater than 60%.",
            "Exactly two (not three) sums 10+7+5 = 22, so 22%, which is not less than 20%.",
            "All three is 5%. One-fourth of exactly two is 22%/4 = 5.5%. Since 5% is less than 5.5%, the claim holds.",
        ],
    },
}


EV_STORY = {
    "Discrete Probability Table": (
        "A discrete random variable X takes the values 0, 1, 2, 3, and 4 with probabilities "
        "0.10, 0.25, 0.30, 0.20, and 0.15 respectively. For each statement below, decide whether it is true or false."
    ),
    "Dice Combinatorics": (
        "Two fair six-sided dice are rolled. Let X be the larger of the two faces; if the dice match, X is that common value. "
        "For each statement below, decide whether it is true or false."
    ),
    "Startup Profit Scenario": (
        "A startup's monthly profit X, measured in dollars, can be a loss of 5,000, break-even at 0, a profit of 10,000, "
        "or a profit of 25,000, with probabilities 0.20, 0.30, 0.35, and 0.15. For each statement below, decide whether it is true or false."
    ),
    "Carnival Spinner with a Processing Fee": (
        "A carnival spinner pays a prize of 0, 5, 20, or 100 dollars with probabilities 0.40, 0.35, 0.20, and 0.05. "
        "A flat 2-dollar processing fee is charged, so the player's net result is the prize minus 2 dollars. "
        "For each statement below, decide whether it is true or false."
    ),
    "Manufacturing Defect Counts": (
        "An inspector records the number of defects X on a randomly chosen manufactured unit. "
        "X equals 0, 1, 2, 3, or 4 with probabilities 0.55, 0.25, 0.12, 0.06, and 0.02. "
        "For each statement below, decide whether it is true or false."
    ),
    "A Vending Machine": (
        "A vending machine fills cups with a random volume X that is equally likely to be any amount between 180 ml and 220 ml. "
        "For each statement below, decide whether it is true or false."
    ),
    "A Call Center": (
        "The number of calls X arriving at a call center in one hour follows a Poisson distribution with mean 6. "
        "For each statement below, decide whether it is true or false."
    ),
    "A Fair Six-Sided Die": (
        "A fair six-sided die is rolled once. X is the number showing on top, and each of the six faces is equally likely. "
        "For each statement below, decide whether it is true or false."
    ),
    "Find the Missing Value": (
        "A random variable X takes the values 0, 10, and an unknown value k with probabilities 0.5, 0.3, and 0.2. "
        "The expected value of X is 8. For each statement below, decide whether it is true or false."
    ),
    "The Vending Machine Puzzle": (
        "A vending machine pays 0, 5, or 10 dollars with probabilities p, 0.4, and 0.6 minus p. "
        "The variance of the payout is 10, and a payout of 0 is less likely than a payout of 10. "
        "For each statement below, decide whether it is true or false."
    ),
    "A Regional Manager": (
        "A regional manager visits a random number of branches N, and at each branch records a random time X. "
        "The total time S is the random sum of those visit times. For each statement below, decide whether it is true or false."
    ),
    "Assembly Line Processing Time": (
        "An assembly line has three independent processing stages. The total time T is a linear combination of the three stage times. "
        "For each statement below, decide whether it is true or false."
    ),
    "A Parking Garage (A Nonlinear Bonus)": (
        "The number of cars X in a parking garage is 0, 1, 2, or 3 with probabilities 0.10, 0.30, 0.40, and 0.20. "
        "A bonus payment Y equals X squared. For each statement below, decide whether it is true or false."
    ),
    "An Extended Warranty (Two Independent Policies)": (
        "A single warranty claim is 0, 150, or 4,000 dollars with probabilities 0.85, 0.12, and 0.03. "
        "Two independent policies are sold, and Y is the sum of the two claims. "
        "For each statement below, decide whether it is true or false."
    ),
    "Standardized Exam Scores": (
        "Exam scores are approximately normal with a mean of 520 and a standard deviation of 85. "
        "For each statement below, decide whether it is true or false."
    ),
}


def apply_venn_override(task: dict) -> dict:
    qnum = task.get("_qnum")
    if task.get("subsection") != "12.2" or qnum not in VENN_OVERRIDES:
        return task
    ov = VENN_OVERRIDES[qnum]
    task["title"] = ov["title"]
    task["context"] = ov["context"]
    task["statements"] = ov["statements"]
    task["figure"] = ov["figure"]
    task["tables_markdown"] = ""
    expls = []
    for i, letter in enumerate(LETTERS):
        verdict = "True" if task["answer_key"][i] else "False"
        body = ov["explanations"][i]
        expls.append(
            f"**Statement {letter} — {verdict}**\n\n{body}\n\n**Takeaway:** {body.split('.')[0]}."
        )
    task["tactical_explanations"] = expls
    task["solution_overview"] = "Read each region of the Venn diagram directly, then form the requested probability from those region values."
    task["_venn_locked"] = True
    return task


def polish_task(task: dict) -> dict:
    task = apply_venn_override(task)
    locked = task.get("_venn_locked")
    ctx = task.get("context") or "" if locked else humanize_context(task.get("context") or "")
    title = task.get("title") or ""
    for key, story in EV_STORY.items():
        if key in title and task.get("subsection") == "12.4":
            table = latex_table_to_markdown(task.get("context") or "")
            ctx = story
            if table:
                task["tables_markdown"] = table
            break
    else:
        table = latex_table_to_markdown(task.get("context") or "")
        if table and not task.get("tables_markdown"):
            task["tables_markdown"] = table

    if task.get("subsection") == "12.4" and (not ctx or ctx.startswith("$$") or "array" in ctx):
        ctx = (
            f"{strip_markup(title).strip('.')}. Describe the random variable X from the situation above, "
            "using the possible values and probabilities in the table. "
            "For each statement below, decide whether it is true or false."
        )

    task["context"] = ctx
    task["title"] = strip_markup(title).split(".")[0][:80]
    if not locked:
        task["statements"] = [humanize_statement(s, ctx) for s in task.get("statements", [])]
    overview = sanitize_explanation(task.get("solution_overview") or "")
    task["solution_overview"] = overview
    if not locked:
        task["tactical_explanations"] = [
            sanitize_explanation(e, overview) for e in task.get("tactical_explanations", [])
        ]
    return task


def validate_tasks(tasks: list[dict]) -> list[str]:
    """Flag malformed questions instead of silently shipping them."""
    flags: list[str] = []
    for t in tasks:
        tid = t.get("id") or t.get("title")
        stem = t.get("context") or ""
        if DUP_NUM_RE.search(stem) or re.search(r"(\d[\d,]*/\d[\d,]*)\s+\1", stem):
            flags.append(f"{tid}: duplicate number pattern in stem")
        if MARKER_RE.search(stem) or "#STATEMENT" in stem.upper():
            flags.append(f"{tid}: literal #STATEMENT marker in stem")
        if len(stem) > 1800:
            flags.append(f"{tid}: stem is anomalously long ({len(stem)} chars); likely leaked explanation")
        stmts = t.get("statements") or []
        if len(stmts) != 5:
            flags.append(f"{tid}: expected 5 statements, got {len(stmts)}")
        for i, s in enumerate(stmts):
            body = (s or "").strip()
            if not body or re.fullmatch(r"[A-E]\.?", body):
                flags.append(f"{tid}: statement {LETTERS[i]} is missing its text")
            if "$" in body or "\\text" in body or "#STATEMENT" in body.upper():
                flags.append(f"{tid}: statement {LETTERS[i]} still has leftover markup")
            if len(body) < 12:
                flags.append(f"{tid}: statement {LETTERS[i]} is too short to be a complete sentence")
        for i, e in enumerate(t.get("tactical_explanations") or []):
            if "Question " in e and "Statement" in e and len(e) > 1200:
                flags.append(f"{tid}: explanation {LETTERS[i]} looks like leaked later questions")
    return flags
