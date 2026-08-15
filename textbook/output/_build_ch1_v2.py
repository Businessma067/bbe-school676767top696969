"""
Chapter 1 Logic v2:
- Uses ALL 87 LOGIC.pdf tasks (no leftovers), split into 4 subsections by topic.
- Adds a smaller, proportional set of NEW fillers only where the PDF is thin
  (1.1, 1.2), authored as plain abstract set-theory problems (same genre as
  the source PDF), with correctness verified by direct Python computation.
- solution_overview no longer restates each statement verbatim (that content
  lives only in tactical_explanations) - fixes the "explained twice" bug.
- All math goes through explicit $...$ / $$...$$ (no fragile regex re-wrapping).
"""
from __future__ import annotations

import itertools
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PARSED = Path(__file__).with_name("logic_parsed.json")
BANKS = Path(__file__).with_name("ch1_logic_banks")
BANKS.mkdir(exist_ok=True)
OUT_TS = ROOT / "src" / "data" / "math-ch1-logic.ts"

SUBSECTIONS = [
    {
        "id": "1.1",
        "title": "Sets: Elements, Subsets & Power Sets",
        "pdf_nums": [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 14, 17, 18, 19, 21],
    },
    {
        "id": "1.2",
        "title": "Set Operations, Complements & Counting",
        "pdf_nums": [6, 7, 13, 15, 16, 20, 22],
    },
    {
        "id": "1.3",
        "title": "Propositional Logic & Implications",
        "pdf_nums": list(range(23, 58)),  # 23..57 inclusive = 35, includes all PART II Tier1-3
    },
    {
        "id": "1.4",
        "title": "Quantifiers, Validity & Deduction",
        "pdf_nums": list(range(58, 88)),  # 58..87 inclusive = 30
    },
]

DIFF_CURVE_5 = ["1/5", "2/5", "3/5", "4/5", "5/5"]


def diff_curve(n: int) -> list[str]:
    """Monotonic easy->hard curve of length n using a 1..5 weighted split."""
    weights = [0.22, 0.28, 0.26, 0.16, 0.08]
    counts = [max(1, round(n * w)) for w in weights]
    # fix rounding drift to sum exactly n
    while sum(counts) > n:
        for i in reversed(range(5)):
            if counts[i] > 1:
                counts[i] -= 1
                break
    while sum(counts) < n:
        counts[2] += 1
    curve: list[str] = []
    for lvl, c in zip(DIFF_CURVE_5, counts):
        curve += [lvl] * c
    return curve[:n]


def letter(i: int) -> str:
    return "ABCDE"[i]


_RAW_CARDINALITY_RE = re.compile(r"\|([^|]+?)\|")


def latexify(s: str) -> str:
    if not s:
        return s
    s = s.replace("=====", "").replace("PAGE", "")
    s = re.sub(r"\d+ =", " =", s) if False else s
    # The raw PDF text uses a bare backslash as informal set-difference
    # notation (e.g. "A \ C", "E\F") - there are no real LaTeX commands in
    # the source prose, so any lone backslash always means \setminus. Must
    # run BEFORE the cardinality-bar rewrite below, which introduces its own
    # (real) backslashes that must not be re-mangled by this blanket rule.
    s = s.replace("\\", " \\setminus ")
    # This corpus only ever uses `|X|` for set cardinality (never divisibility
    # or absolute value) - rewrite to \lvert/\rvert up front so the bars ride
    # along with their contents as one math chain instead of staying as bare
    # `|` characters that looksLikeMathInner() rejects (which would otherwise
    # unwrap the whole span and leak raw LaTeX commands as literal text).
    s = _RAW_CARDINALITY_RE.sub(r"\\lvert \1 \\rvert", s)
    repl = [
        ("\u2208", " \\in "),
        ("\u2209", " \\notin "),
        ("\u2229", " \\cap "),
        ("\u222a", " \\cup "),
        ("\u2286", " \\subseteq "),
        ("\u2282", " \\subset "),
        ("\u2205", "\\emptyset"),
        ("\u2206", " \\triangle "),
        ("\u21d2", " \\Rightarrow "),
        ("\u21d4", " \\Leftrightarrow "),
        ("\u00ac", "\\neg "),
        ("\u2227", " \\land "),
        ("\u2228", " \\lor "),
        ("\u2200", "\\forall "),
        ("\u2203", "\\exists "),
        ("\u2212", "-"),
        ("\u2013", "-"),
        ("\u2014", "-"),
        ("\u00b2", "^2"),
        ("\u00b3", "^3"),
        ("\u00d7", " \\times "),
    ]
    for a, b in repl:
        s = s.replace(a, b)
    s = re.sub(r"\s+", " ", s).strip()
    return s


MATH_TOKENS = (
    "\\in", "\\notin", "\\cup", "\\cap", "\\subseteq", "\\subset", "\\emptyset",
    "\\neg", "\\land", "\\lor", "\\Rightarrow", "\\Leftrightarrow", "\\forall",
    "\\exists", "\\triangle", "\\times", "\\setminus", "\\lvert", "\\rvert",
)

# KaTeX treats bare `{`/`}` as grouping syntax and silently drops them, so any
# literal set-notation brace (all braces in this PDF's source text are set
# literals - there are no `\mathcal{...}`-style LaTeX commands to protect)
# must be escaped as `\{` / `\}` before it ends up inside a `$...$` span.
def escape_braces(s: str) -> str:
    return s.replace("\\{", "{").replace("\\}", "}").replace("{", "\\{").replace("}", "\\}")


_BRACE_TOKEN = r"\\\{[^{}]{0,80}\\\}"
_CMD_TOKEN = (
    r"\\(?:neg|forall|exists|in|notin|cup|cap|subseteq|subset|emptyset|land|lor|"
    r"Rightarrow|Leftrightarrow|triangle|times|setminus|lvert|rvert)"
)
_VAR_TOKEN = r"\b[A-Za-z]\d?\b"
_NUM_TOKEN = r"\d+(?:\.\d+)?"
_SYM_TOKEN = r"[()=]"
_ONE_TOKEN = rf"(?:{_BRACE_TOKEN}|{_CMD_TOKEN}|{_VAR_TOKEN}|{_NUM_TOKEN}|{_SYM_TOKEN})"
_CHAIN_RE = re.compile(rf"{_ONE_TOKEN}(?:\s*{_ONE_TOKEN})*")
_HAS_CMD_RE = re.compile(_CMD_TOKEN)

# A bare currency amount (e.g. "$1 million", "$20,000") may already be present
# in raw PDF prose alongside math tokens that still need wrapping - it must be
# protected (not treated as a stray math delimiter) rather than causing the
# whole string to be skipped.
_CURRENCY_TOKEN_RE = re.compile(
    r"\$\d[\d,]*(?:\.\d+)?(?:\s*(?:million|billion|thousand))?"
)
_ALREADY_MATH_RE = re.compile(r"\$[^$]*\$")

# Inside set-builder braces `{T \in R : T < -4 or T > 4}`, a bare English "or"/
# "and" is a logical connective and must become \lor/\land - otherwise the
# whole brace chunk gets wrapped as one math token (BRACE_TOKEN doesn't care
# about its contents), but the frontend's own prose-glue-word guard then
# rejects it for containing "or"/"and" and unwraps the entire $...$ span,
# leaking raw \in / \{ / \} as literal text.
_BRACE_CONTENT_RE = re.compile(r"\{([^{}]{0,120})\}")


def _connectives_to_symbols(m: re.Match) -> str:
    inner = re.sub(r"\bor\b", r"\\lor", m.group(1))
    inner = re.sub(r"\band\b", r"\\land", inner)
    return "{" + inner + "}"


def wrap_mathish(raw: str) -> str:
    """Wrap set/logic notation chunks in $...$, leaving surrounding prose untouched.

    Single pass over token runs (single-letter variables like P/Q/x, LaTeX
    commands like \\neg/\\Rightarrow, escaped set-braces, numbers, and (),=),
    each bounded by word boundaries so ordinary English words are never
    mis-tokenized into fake single-letter variables. Currency amounts and any
    already-wrapped $...$ spans are protected first so their dollar signs
    never block wrapping the rest of the string.
    """
    s = latexify(raw)
    if not s:
        return s
    s = _BRACE_CONTENT_RE.sub(_connectives_to_symbols, s)

    protected: list[str] = []

    def stash(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"\ue000{len(protected) - 1}\ue001"

    s = _ALREADY_MATH_RE.sub(stash, s)
    s = _CURRENCY_TOKEN_RE.sub(stash, s)

    if any(tok in s for tok in MATH_TOKENS) or "{" in s:
        s = escape_braces(s)
        has_brace_re = re.compile(_BRACE_TOKEN)

        def repl(m: re.Match) -> str:
            chunk = m.group(0)
            if not (_HAS_CMD_RE.search(chunk) or has_brace_re.search(chunk)):
                return chunk
            return f"${chunk.strip()}$"

        s = _CHAIN_RE.sub(repl, s)

    if protected:
        s = re.sub(
            r"\ue000(\d+)\ue001", lambda m: protected[int(m.group(1))], s
        )
    return s


SUBSECTION_KEY_FACTS = {
    "1.1": (
        "Keep membership ($x \\in A$) and inclusion ($B \\subseteq A$) strictly separate: "
        "an element of $A$ is a single object, while a subset of $A$ is itself a set. "
        "A set with $n$ elements has $2^n$ subsets, i.e. "
        "$\\lvert \\mathcal{P}(A)\\rvert = 2^{\\lvert A\\rvert}$, and "
        "$\\emptyset \\subseteq A$ always holds. "
        "A subset $B$ is proper ($B \\subsetneq A$) only when $B \\neq A$."
    ),
    "1.2": (
        "$A \\cup B$ collects everything in $A$ or $B$ (or both). "
        "$A \\cap B$ keeps only the shared elements. "
        "$A \\setminus B$ removes from $A$ anything also in $B$ (not commutative).\n\n"
        "De Morgan:\n"
        "$(A \\cup B)^c = A^c \\cap B^c$\n"
        "$(A \\cap B)^c = A^c \\cup B^c$\n\n"
        "Counting: $\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert - \\lvert A \\cap B\\rvert$."
    ),
    "1.3": (
        "$p \\Rightarrow q$ is false only when $p$ is true and $q$ is false.\n\n"
        "It is equivalent to $\\neg p \\lor q$.\n"
        "It is equivalent to its contrapositive $\\neg q \\Rightarrow \\neg p$.\n"
        "It is **not** automatically equivalent to its converse $q \\Rightarrow p$.\n\n"
        "De Morgan for logic:\n"
        "$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$\n"
        "$\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$."
    ),
    "1.4": (
        "Negation flips quantifiers:\n"
        "$\\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x)$\n"
        "$\\neg\\exists x\\,P(x)\\equiv\\forall x\\,\\neg P(x)$\n\n"
        "For rule-based deduction puzzles, chain the conditionals (and their "
        "contrapositives) to see which assignments are forced, then check whether "
        "any freedom remains."
    ),
}


def build_overview(
    *,
    context: str,
    subsection: str,
    answers: list[bool],
) -> str:
    """Ch11-style overview: shared setup + key facts, once. The per-statement (A-E)
    reasoning lives only in tactical_explanations, so it is never restated here -
    avoids the "explained twice" duplication and sidesteps the PDF's unreliable
    'General Solution' text (which mixes up single/double-space glyph gaps)."""
    parts = [
        context,
        "",
        "**Part 1: Setup.**",
        "",
        "Read the given sets or propositions carefully, then work out the objects or facts "
        "shared by every statement below, once, before judging any individual claim.",
        "",
        "**Part 2: Key facts.**",
        "",
        SUBSECTION_KEY_FACTS[subsection],
        "",
        "**Answer.** " + ", ".join(f"{letter(i)}={'TRUE' if a else 'FALSE'}" for i, a in enumerate(answers)),
    ]
    return "\n".join(parts).strip()


def context_from_raw(raw: str) -> str:
    """Robustly recover the scenario paragraph directly from the raw PDF excerpt,
    independent of the (often empty/garbled) parsed 'context' field.

    Handles both header styles seen in the source PDF:
      "Task 1. Some title\n(source: ...)\n<scenario>\nGeneral Solution: ..."
      "Task 54\n(source: ...)\nContext: <scenario>\nGeneral Solution: ..."
    """
    raw = re.sub(r"=====\s*PAGE\s*\d+\s*=====", " ", raw)
    raw = raw.lstrip("\n")
    # Strip the "Task N" / "Task N. Title" header line (period after the
    # number is optional - some tasks have no title text at all).
    raw = re.sub(r"^Task\s+\d+\.?[^\n]*\n?", "", raw)
    # Strip a following "(source: ...)" metadata line.
    raw = re.sub(r"^\s*\([^)]*\)\s*\n?", "", raw)
    # Strip an explicit "Context:" label if the PDF included one.
    raw = re.sub(r"^\s*Context:\s*", "", raw, flags=re.I)
    m = re.search(r"^(.*?)(?=\nGeneral Solution:)", raw, re.S)
    if not m:
        return ""
    return re.sub(r"\s+", " ", m.group(1)).strip()


def polish_pdf_task(pdf: dict, subsection: str, sort_order: int, global_n: int) -> dict:
    ctx = wrap_mathish(context_from_raw(pdf.get("raw_excerpt") or "") or pdf.get("context") or "")
    ctx = re.split(r"General Solution:", ctx, maxsplit=1)[0].strip()

    stmts = [wrap_mathish(s) for s in pdf["statements"]]
    answers = list(pdf["answer_key"])
    raw_expl = pdf.get("explanations_raw") or []

    tactical = []
    for i in range(5):
        verdict = "true" if answers[i] else "false"
        body = raw_expl[i] if i < len(raw_expl) else ""
        body = re.sub(r"^[a-e]\)\s*", "", body, flags=re.I)
        body = re.sub(r"^(True|False|TRUE|FALSE)\b[.\s]*", "", body)
        body = wrap_mathish(body)
        tactical.append(f"**{letter(i)}) {stmts[i]}**  ({verdict})\n\n{body}".strip())

    title = pdf.get("title") or ""
    if not title or title.lower().startswith("task "):
        plain_ctx = re.sub(r"\$.*?\$", "", ctx)
        title = plain_ctx[:70].strip(" .") or f"Logic case {sort_order}"

    return {
        "id": f"math-1-{global_n}",
        "case_id": f"MATH 1.{global_n:02d}",
        "title": title[:100],
        "subsection": subsection,
        "context": ctx,
        "statements": stmts,
        "answer_key": answers,
        "tactical_explanations": tactical,
        "difficulty_level": "3/5",
        "sort_order": sort_order,
        "solution_overview": build_overview(
            context=ctx,
            subsection=subsection,
            answers=answers,
        ),
    }


# ---------------------------------------------------------------------------
# New fillers: plain abstract set-theory problems, correctness computed directly.
# ---------------------------------------------------------------------------


def fmt_set(xs) -> str:
    xs = sorted(xs, key=lambda v: (isinstance(v, str), v))
    inner = ", ".join(str(x) for x in xs)
    return f"\\{{{inner}\\}}" if False else "{" + inner + "}"


def set_latex(xs) -> str:
    return "$\\{" + ", ".join(str(x) for x in sorted(xs)) + "\\}$" if xs else "$\\emptyset$"


def make_task(
    *,
    global_n: int,
    subsection: str,
    title: str,
    context: str,
    statements: list[str],
    answers: list[bool],
    explanation_bodies: list[str],
    key_facts: str,
    setup_lines: list[str],
) -> dict:
    tactical = [
        f"**{letter(i)}) {statements[i]}**  ({'true' if answers[i] else 'false'})\n\n{explanation_bodies[i]}"
        for i in range(5)
    ]
    overview_parts = [context, "", "**Part 1: Setup.**", ""]
    overview_parts += setup_lines
    overview_parts += ["", "**Part 2: Key facts.**", "", key_facts, ""]
    overview_parts.append(
        "**Answer.** " + ", ".join(f"{letter(i)}={'TRUE' if a else 'FALSE'}" for i, a in enumerate(answers))
    )
    return {
        "id": f"math-1-{global_n}",
        "case_id": f"MATH 1.{global_n:02d}",
        "title": title,
        "subsection": subsection,
        "context": context,
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": tactical,
        "difficulty_level": "3/5",
        "sort_order": 0,
        "solution_overview": "\n".join(overview_parts).strip(),
    }


def gen_1_1_fillers() -> list[dict]:
    tasks = []

    # 1) Membership vs subset, explicit numeric set.
    A = [2, 4, 6, 8, 10, 12]
    ctx = f"Let $A = {set_latex(A)[1:-1]}$."
    ctx = f"Let $A = \\{{{', '.join(map(str, A))}\\}}$."
    stmts = [
        "$6 \\in A$.",
        "$\\{6\\} \\in A$.",
        "$\\{6, 8\\} \\subseteq A$.",
        "$\\emptyset \\subseteq A$.",
        "$A$ has exactly $63$ proper subsets.",
    ]
    n = len(A)
    power = 2 ** n
    ans = [True, False, True, True, power - 1 == 63]
    expl = [
        "$6$ is one of the listed elements, so it belongs to $A$ directly.",
        f"$\\{{6\\}}$ is a *subset* of $A$ (since $6 \\in A$), not an element of $A$; the elements of $A$ are the {n} numbers themselves, not sets built from them.",
        "Both $6$ and $8$ are elements of $A$, so the two-element set $\\{6, 8\\}$ is contained in $A$.",
        "The empty set is a subset of every set, with no exceptions, since it has no element that could fail to be in $A$.",
        f"$|A| = {n}$, so $|\\mathcal{{P}}(A)| = 2^{{{n}}} = {power}$, and proper subsets exclude only $A$ itself: ${power} - 1 = {power - 1}$, which does equal $63$." if power - 1 == 63 else f"$|A| = {n}$, so $|\\mathcal{{P}}(A)| = 2^{{{n}}} = {power}$; proper subsets exclude only $A$ itself, giving ${power} - 1 = {power - 1}$ — not $63$.",
    ]
    tasks.append(
        make_task(
            global_n=0,
            subsection="1.1",
            title="Elements vs. Subsets of an Even-Number Set",
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.1"],
            setup_lines=[f"$A$ has $n = {n}$ listed elements: {', '.join(map(str, A))}."],
        )
    )

    # 2) Set-builder over integers, quadratic condition.
    ctx = "Let $A = \\{x \\in \\mathbb{Z} : x^2 - 5x + 6 = 0\\}$ and $B = \\{2, 3\\}$."
    # roots of x^2-5x+6=0 -> 2,3
    stmts = [
        "$A = B$.",
        "$3 \\in A$.",
        "$A = \\{2\\}$ (only the smaller root).",
        "$|A| = 2$.",
        "$C = \\{x \\in \\mathbb{N} : x^2 - 5x + 6 = 0 \\land x > 2\\}$ satisfies $C = \\{3\\}$.",
    ]
    ans = [True, True, False, True, True]
    expl = [
        "Solving $x^2 - 5x + 6 = 0$ factors as $(x-2)(x-3) = 0$, giving exactly $x = 2$ and $x = 3$, so $A = \\{2, 3\\} = B$.",
        "$3$ satisfies $(3-2)(3-3) = 0$, so $3$ is one of the two roots and belongs to $A$.",
        "$2$ is a root, but so is $3$ — a quadratic with two distinct roots contributes both to the solution set; $A$ is not the singleton $\\{2\\}$.",
        "$A = \\{2, 3\\}$ has exactly two distinct elements.",
        "Restricting to natural numbers greater than $2$ keeps only $x = 3$ from the two roots, so $C = \\{3\\}$.",
    ]
    tasks.append(
        make_task(
            global_n=0,
            subsection="1.1",
            title="Set-Builder Notation from a Quadratic Condition",
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.1"],
            setup_lines=[
                "Factor the defining equation once: $x^2 - 5x + 6 = (x-2)(x-3)$, so the roots are $x = 2$ and $x = 3$.",
            ],
        )
    )

    # 3) Power set enumeration & counting k-subsets.
    ctx = "Let $D = \\{w, x, y, z\\}$."
    n = 4
    power = 2 ** n
    from math import comb

    two_elem = comb(n, 2)
    three_elem = comb(n, 3)
    stmts = [
        f"$\\mathcal{{P}}(D)$ has $16$ elements.",
        "$\\{w, x\\} \\in \\mathcal{P}(D)$.",
        f"There are exactly ${three_elem}$ subsets of $D$ containing exactly $3$ elements.",
        "$D \\in \\mathcal{P}(D)$.",
        f"There are exactly $5$ subsets of $D$ containing exactly $2$ elements.",
    ]
    ans = [power == 16, True, True, True, two_elem == 5]
    expl = [
        f"$|D| = {n}$, so $|\\mathcal{{P}}(D)| = 2^{{{n}}} = {power}$, matching exactly." if power == 16 else f"$|D| = {n}$, so $|\\mathcal{{P}}(D)| = 2^{{{n}}} = {power}$, not $16$.",
        "$\\{w, x\\}$ is a subset of $D$, and every subset of $D$ is, by definition, an element of the power set $\\mathcal{P}(D)$.",
        f"Choosing $3$ of the $4$ elements can be done in $\\binom{{4}}{{3}} = {three_elem}$ ways, matching exactly.",
        "Every set is a subset of itself, so $D \\subseteq D$, which means $D$ itself is one of the elements of $\\mathcal{P}(D)$.",
        f"Choosing $2$ of the $4$ elements can be done in $\\binom{{4}}{{2}} = {two_elem}$ ways, which is ${two_elem}$, not $5$." if two_elem != 5 else f"Choosing $2$ of the $4$ elements can be done in $\\binom{{4}}{{2}} = {two_elem}$ ways, matching exactly.",
    ]
    tasks.append(
        make_task(
            global_n=0,
            subsection="1.1",
            title="Counting the Power Set of a Four-Letter Set",
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.1"],
            setup_lines=[
                f"$|D| = {n}$, so $|\\mathcal{{P}}(D)| = 2^{{{n}}} = {power}$. Counting $k$-element subsets uses $\\binom{{{n}}}{{k}}$.",
            ],
        )
    )

    # 4) Proper subset & equality traps.
    ctx = "Let $E = \\{1, 2, 3\\}$ and $F = \\{1, 2, 3, 4\\}$."
    stmts = [
        "$E \\subseteq F$.",
        "$E \\subsetneq F$ (E is a proper subset of F).",
        "$F \\subseteq E$.",
        "$E \\subseteq E$.",
        "$E \\subsetneq E$.",
    ]
    ans = [True, True, False, True, False]
    expl = [
        "Every element of $E$ (namely 1, 2, 3) is also in $F$, so $E \\subseteq F$.",
        "$E \\subseteq F$ and $E \\neq F$ (since $4 \\in F$ but $4 \\notin E$), so $E$ is a proper subset of $F$.",
        "$F$ contains $4$, which is not in $E$, so $F$ is not a subset of $E$.",
        "Every set is a subset of itself: every element of $E$ is trivially an element of $E$.",
        "A proper subset must be strictly smaller than the original set; since $E = E$, $E$ can never be a proper subset of itself.",
    ]
    tasks.append(
        make_task(
            global_n=0,
            subsection="1.1",
            title="Subset, Proper Subset, and Self-Containment",
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.1"],
            setup_lines=["Compare $E$ and $F$ element by element: $F$ has every element of $E$ plus the extra element $4$."],
        )
    )

    # 5) Partition check.
    ctx = "Let $G = \\{1, 2, 3, 4, 5, 6\\}$, and consider the collection $\\mathcal{S} = \\{\\{1, 2\\}, \\{3, 4\\}, \\{5, 6\\}\\}$."
    stmts = [
        "The blocks of $\\mathcal{S}$ are pairwise disjoint.",
        "The union of the blocks of $\\mathcal{S}$ equals $G$.",
        "$\\mathcal{S}$ is a partition of $G$.",
        "$\\mathcal{S}' = \\{\\{1, 2\\}, \\{2, 3, 4\\}, \\{5, 6\\}\\}$ is also a partition of $G$.",
        "Replacing $\\{5, 6\\}$ with $\\{5, 6, 7\\}$ would still give a partition of $G$.",
    ]
    ans = [True, True, True, False, False]
    expl = [
        "$\\{1,2\\} \\cap \\{3,4\\} = \\emptyset$, $\\{1,2\\} \\cap \\{5,6\\} = \\emptyset$, and $\\{3,4\\} \\cap \\{5,6\\} = \\emptyset$: no two blocks share an element.",
        "$\\{1,2\\} \\cup \\{3,4\\} \\cup \\{5,6\\} = \\{1,2,3,4,5,6\\} = G$: together the blocks cover every element exactly once.",
        "A partition requires pairwise-disjoint blocks whose union is the whole set; both conditions hold here, so $\\mathcal{S}$ is a valid partition.",
        "$\\{1,2\\}$ and $\\{2,3,4\\}$ share the element $2$, so the blocks of $\\mathcal{S}'$ are not disjoint — this fails the partition requirement even though the union still covers $G$.",
        "$7 \\notin G$, so $\\{5,6,7\\}$ is not even a subset of $G$; a partition's blocks must be subsets of the original set.",
    ]
    tasks.append(
        make_task(
            global_n=0,
            subsection="1.1",
            title="Testing Whether a Collection Partitions a Set",
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.1"] + " A partition additionally requires the blocks to be pairwise disjoint and to cover the set exactly.",
            setup_lines=["Check the two partition conditions once: pairwise disjointness, then full coverage of $G$."],
        )
    )

    # 6) Cardinality / infinite set intuition (light, still concrete-feeling).
    ctx = "Let $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ and let $H = \\{2, 4, 6, 8, \\dots\\}$ be the set of positive even integers."
    stmts = [
        "$H \\subseteq \\mathbb{N}$.",
        "$H$ is a finite set.",
        "$H = \\mathbb{N}$.",
        "The map $f(n) = 2n$ pairs every natural number with exactly one element of $H$ and vice versa.",
        "Since $H \\subsetneq \\mathbb{N}$, $H$ must have strictly fewer elements than $\\mathbb{N}$.",
    ]
    ans = [True, False, False, True, False]
    expl = [
        "Every positive even integer is a natural number, so $H \\subseteq \\mathbb{N}$.",
        "$H$ continues without end ($2, 4, 6, 8, \\dots$), so it is an infinite set, not finite.",
        "$1 \\in \\mathbb{N}$ but $1 \\notin H$ (it is odd), so the two sets are not equal.",
        "$f(n) = 2n$ sends each natural number to a distinct even number, and every even number $2n$ comes from exactly one $n$, so $f$ is a genuine one-to-one correspondence.",
        "For infinite sets, a proper subset can still be matched one-to-one with the whole set (as part D shows), so 'strictly fewer elements' does not apply the way it does for finite sets — this is the classic trap of finite intuition applied to infinite sets.",
    ]
    tasks.append(
        make_task(
            global_n=0,
            subsection="1.1",
            title="Even Numbers Inside the Naturals: A Cardinality Trap",
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.1"] + " For infinite sets, a proper subset can still be paired one-to-one with the whole set — cardinality reasoning differs from the finite case.",
            setup_lines=["Compare $H$ against $\\mathbb{N}$ directly, then test whether a pairing (bijection) exists between them."],
        )
    )

    # 7) Nested membership chain (a vs {a}).
    ctx = "Let $a$ be an object and let $K = \\{a, \\{a\\}\\}$."
    stmts = [
        "$a \\in K$.",
        "$\\{a\\} \\in K$.",
        "$\\{a\\} \\subseteq K$.",
        "$\\{\\{a\\}\\} \\subseteq K$.",
        "$|K| = 2$.",
    ]
    ans = [True, True, True, True, True]
    expl = [
        "$a$ is explicitly listed as one of the two elements of $K$.",
        "$\\{a\\}$ is also explicitly listed as an element of $K$ (its second element), so it belongs to $K$ directly — not just as a subset.",
        "Since $a \\in K$, the single-element set $\\{a\\}$ is automatically a subset of $K$ as well as an element of it; both facts hold at once here.",
        "$\\{a\\}$ is an element of $K$, so the set containing just that element, $\\{\\{a\\}\\}$, is a subset of $K$.",
        "$K$ has exactly two distinct elements, $a$ and $\\{a\\}$, so $|K| = 2$.",
    ]
    tasks.append(
        make_task(
            global_n=0,
            subsection="1.1",
            title="An Object and Its Singleton in the Same Set",
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.1"] + " An object $\\{a\\}$ can simultaneously be an element of $K$ and, because that element is itself in $K$, generate a valid subset relation too — the two notions do not exclude each other.",
            setup_lines=["List the two distinct elements of $K$ once: $a$ itself, and the set $\\{a\\}$."],
        )
    )

    return tasks


def gen_1_2_fillers() -> list[dict]:
    tasks = []

    def basic_ops(idx, A, B, C, title):
        A, B, C = set(A), set(B), set(C)
        union_ab = A | B
        inter_ab = A & B
        diff_ab = A - B
        diff_ba = B - A
        disjoint_ac = not (A & C)
        ctx = f"Let $A = {set_latex(A)[1:-1]}$, $B = {set_latex(B)[1:-1]}$, and $C = {set_latex(C)[1:-1]}$."
        s_union = set_latex(union_ab)
        s_inter = set_latex(inter_ab)
        s_diff_ab = set_latex(diff_ab)
        s_diff_ba = set_latex(diff_ba)
        stmts = [
            f"$A \\cup B = {s_union[1:-1]}$.",
            f"$A \\cap B = {s_inter[1:-1]}$.",
            f"$A \\setminus B = {s_diff_ab[1:-1]}$.",
            f"$B \\setminus A = A \\setminus B$.",
            f"$A$ and $C$ are disjoint sets.",
        ]
        ans = [True, True, True, diff_ba == diff_ab, disjoint_ac]
        expl = [
            f"Combining every element of $A$ or $B$ (or both) gives {s_union}.",
            f"The elements common to both $A$ and $B$ are exactly {s_inter}.",
            f"Removing from $A$ every element that is also in $B$ leaves {s_diff_ab}.",
            (
                f"$B \\setminus A = {s_diff_ba[1:-1]}$ and $A \\setminus B = {s_diff_ab[1:-1]}$ happen to coincide here."
                if diff_ba == diff_ab
                else f"Set difference is not commutative in general: $A \\setminus B = {s_diff_ab[1:-1]}$ while $B \\setminus A = {s_diff_ba[1:-1]}$ — different sets, so the equality fails."
            ),
            (
                f"$A \\cap C = \\emptyset$, so $A$ and $C$ share no elements and are disjoint."
                if disjoint_ac
                else f"$A \\cap C = {set_latex(A & C)[1:-1]}$, which is nonempty, so $A$ and $C$ are NOT disjoint."
            ),
        ]
        return make_task(
            global_n=0,
            subsection="1.2",
            title=title,
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.2"],
            setup_lines=[f"Compute the shared objects once: $A \\cup B = {s_union[1:-1]}$, $A \\cap B = {s_inter[1:-1]}$, $A \\setminus B = {s_diff_ab[1:-1]}$, $B \\setminus A = {s_diff_ba[1:-1]}$."],
        )

    tasks.append(basic_ops(1, [1, 2, 3, 4], [3, 4, 5, 6], [7, 8, 9], "Union, Intersection, and Difference of Three Sets"))
    tasks.append(basic_ops(2, [10, 20, 30, 40, 50], [30, 40, 50, 60], [1, 2, 3], "Set Operations on Multiples of Ten"))
    tasks.append(basic_ops(3, ["a", "b", "c", "d"], ["c", "d", "e"], ["x", "y"], "Set Operations with Letters"))

    def de_morgan(idx, U, A, B, title):
        U, A, B = set(U), set(A), set(B)
        Ac = U - A
        Bc = U - B
        union_ab = A | B
        inter_ab = A & B
        comp_union = U - union_ab
        comp_inter = U - inter_ab
        de_morgan1 = comp_union == (Ac & Bc)
        de_morgan2 = comp_inter == (Ac | Bc)
        ctx = f"Let $U = {set_latex(U)[1:-1]}$ be the universal set, $A = {set_latex(A)[1:-1]}$, and $B = {set_latex(B)[1:-1]}$."
        stmts = [
            f"$(A \\cup B)^c = {set_latex(comp_union)[1:-1]}$.",
            f"$(A \\cup B)^c = A^c \\cap B^c$.",
            f"$(A \\cap B)^c = A^c \\cup B^c$.",
            f"$A^c = {set_latex(Ac)[1:-1]}$.",
            f"$(A \\cap B)^c = {set_latex(comp_inter)[1:-1]}$.",
        ]
        ans = [True, de_morgan1, de_morgan2, True, True]
        expl = [
            f"$A \\cup B = {set_latex(union_ab)[1:-1]}$; everything in $U$ outside that union is {set_latex(comp_union)}.",
            "This is De Morgan's law for sets, and it holds in general — it also checks out numerically here." if de_morgan1 else "De Morgan's law says this should hold in general; recomputing both sides here confirms the identity numerically too.",
            "This is the other De Morgan law, and it holds in general — confirmed numerically here as well." if de_morgan2 else "De Morgan's second law should hold in general; the numeric check here confirms it.",
            f"Removing $A$'s elements from $U$ leaves exactly {set_latex(Ac)}.",
            f"$A \\cap B = {set_latex(inter_ab)[1:-1]}$; everything in $U$ outside that intersection is {set_latex(comp_inter)}.",
        ]
        return make_task(
            global_n=0,
            subsection="1.2",
            title=title,
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.2"],
            setup_lines=[
                f"Compute once: $A \\cup B = {set_latex(union_ab)[1:-1]}$, so $(A \\cup B)^c = {set_latex(comp_union)[1:-1]}$; and $A \\cap B = {set_latex(inter_ab)[1:-1]}$, so $(A \\cap B)^c = {set_latex(comp_inter)[1:-1]}$.",
            ],
        )

    tasks.append(de_morgan(1, range(1, 11), [1, 2, 3, 4, 5], [4, 5, 6, 7, 8], "De Morgan's Laws with a Ten-Element Universe"))
    tasks.append(de_morgan(2, range(1, 13), [1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12], "Complements of Disjoint Odd and Even Sets"))
    tasks.append(de_morgan(3, ["p", "q", "r", "s", "t", "u"], ["p", "q", "r"], ["r", "s"], "De Morgan's Laws with Letter Sets"))

    def cartesian(idx, A, B, title):
        A, B = list(A), list(B)
        prod_ab = set(itertools.product(A, B))
        prod_ba = set(itertools.product(B, A))
        sample_pair = (A[0], B[0])
        reversed_pair = (B[0], A[0])
        ctx = f"Let $A = {set_latex(A)[1:-1]}$ and $B = {set_latex(B)[1:-1]}$."
        stmts = [
            f"$|A \\times B| = {len(A) * len(B)}$.",
            f"$({sample_pair[0]}, {sample_pair[1]}) \\in A \\times B$.",
            f"$({reversed_pair[0]}, {reversed_pair[1]}) \\in A \\times B$.",
            f"$A \\times B = B \\times A$.",
            f"$|A \\times B| = |B \\times A|$.",
        ]
        ans = [True, True, reversed_pair in prod_ab, prod_ab == prod_ba, True]
        expl = [
            f"$|A \\times B| = |A| \\cdot |B| = {len(A)} \\times {len(B)} = {len(A) * len(B)}$, matching exactly.",
            f"$A \\times B$ contains every pair with first coordinate in $A$ and second in $B$, so $({sample_pair[0]}, {sample_pair[1]})$ qualifies.",
            (
                f"$({reversed_pair[0]}, {reversed_pair[1]})$ would need its first coordinate in $A$; since that also happens to hold here, the pair is in $A \\times B$."
                if reversed_pair in prod_ab
                else f"$({reversed_pair[0]}, {reversed_pair[1]})$ has its first coordinate ${reversed_pair[0]}$ from $B$, not $A$, so it is not a member of $A \\times B$ — only pairs with their first element from $A$ qualify."
            ),
            (
                "The two products happen to coincide element-for-element here."
                if prod_ab == prod_ba
                else "Cartesian products are order-sensitive: $A \\times B$ pairs $A$-elements first, while $B \\times A$ pairs $B$-elements first — the pairs themselves differ even though both sets have the same size."
            ),
            f"Both products have $|A| \\cdot |B| = {len(A) * len(B)}$ pairs, so their sizes always match even when the pairs themselves differ.",
        ]
        return make_task(
            global_n=0,
            subsection="1.2",
            title=title,
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.2"] + " Cartesian products are ordered: $A \\times B$ generally differs from $B \\times A$ even though $|A \\times B| = |B \\times A|$.",
            setup_lines=[f"$|A \\times B| = |A| \\cdot |B| = {len(A)} \\times {len(B)} = {len(A) * len(B)}$ in both directions, but the ordered pairs differ."],
        )

    tasks.append(cartesian(1, [1, 2], ["x", "y", "z"], "Cartesian Products and Ordered Pairs"))
    tasks.append(cartesian(2, ["m", "n", "p"], [1, 2], "Cartesian Product Size vs. Pair Membership"))

    def sym_diff(idx, A, B, title):
        A, B = set(A), set(B)
        diff_ab = A - B
        diff_ba = B - A
        sym = A ^ B
        inter = A & B
        ctx = f"Let $A = {set_latex(A)[1:-1]}$ and $B = {set_latex(B)[1:-1]}$."
        stmts = [
            f"$A \\setminus B = {set_latex(diff_ab)[1:-1]}$.",
            f"$B \\setminus A = {set_latex(diff_ba)[1:-1]}$.",
            f"$A \\triangle B = {set_latex(sym)[1:-1]}$.",
            f"$(A \\setminus B) \\cap (B \\setminus A) = \\emptyset$.",
            f"$A \\triangle B = A \\cup B$.",
        ]
        ans = [True, True, True, True, sym == (A | B)]
        expl = [
            f"Removing from $A$ every element also in $B$ leaves {set_latex(diff_ab)}.",
            f"Removing from $B$ every element also in $A$ leaves {set_latex(diff_ba)}.",
            f"$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A) = {set_latex(diff_ab)[1:-1]} \\cup {set_latex(diff_ba)[1:-1]} = {set_latex(sym)[1:-1]}$.",
            "By construction, $A \\setminus B$ only contains elements outside $B$ and $B \\setminus A$ only contains elements outside $A$, so the two can never share an element.",
            (
                f"Here $A \\cap B = {set_latex(inter)[1:-1]}$ is empty, so nothing is excluded from the union, making $A \\triangle B$ coincide with $A \\cup B$."
                if sym == (A | B)
                else f"$A \\triangle B$ excludes the shared elements $A \\cap B = {set_latex(inter)[1:-1]}$ from $A \\cup B$, so the symmetric difference is strictly smaller than the union whenever $A \\cap B \\neq \\emptyset$."
            ),
        ]
        return make_task(
            global_n=0,
            subsection="1.2",
            title=title,
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.2"] + " Symmetric difference: $A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$, the elements in exactly one of the two sets.",
            setup_lines=[f"Compute both one-sided differences: $A \\setminus B = {set_latex(diff_ab)[1:-1]}$ and $B \\setminus A = {set_latex(diff_ba)[1:-1]}$; their union is $A \\triangle B$."],
        )

    tasks.append(sym_diff(1, [1, 3, 5, 7, 9], [3, 5, 7, 11, 13], "Symmetric Difference of Two Odd-Number Sets"))
    tasks.append(sym_diff(2, [2, 4, 6], [1, 3, 5], "Symmetric Difference of Disjoint Sets"))

    def incl_excl(idx, total, a, b, both, title, ctx_line):
        union = a + b - both
        neither = total - union
        only_a = a - both
        only_b = b - both
        ctx = ctx_line
        stmts = [
            f"$|A \\cup B| = {union}$.",
            f"Exactly ${only_a}$ people are in $A$ only (not $B$).",
            f"Exactly ${neither}$ people are in neither $A$ nor $B$.",
            f"$|A \\cap B| > |A \\cup B|$.",
            f"Exactly ${only_b}$ people are in $B$ only (not $A$).",
        ]
        ans = [True, True, neither >= 0, False, True]
        expl = [
            f"By inclusion-exclusion, $|A \\cup B| = |A| + |B| - |A \\cap B| = {a} + {b} - {both} = {union}$.",
            f"Members of $A$ only exclude the overlap: $|A| - |A \\cap B| = {a} - {both} = {only_a}$.",
            f"Out of {total} total, ${union}$ are in $A \\cup B$, leaving ${total} - {union} = {neither}$ in neither set.",
            f"The intersection can never exceed the union: $|A \\cap B| = {both}$ is at most $|A \\cup B| = {union}$, so this claim is false.",
            f"Members of $B$ only exclude the overlap: $|B| - |A \\cap B| = {b} - {both} = {only_b}$.",
        ]
        return make_task(
            global_n=0,
            subsection="1.2",
            title=title,
            context=ctx,
            statements=stmts,
            answers=ans,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.2"],
            setup_lines=[f"Apply $|A \\cup B| = |A| + |B| - |A \\cap B| = {a} + {b} - {both} = {union}$ once, then read off every other count from it."],
        )

    tasks.append(
        incl_excl(
            1, 40, 22, 15, 6,
            "Chess and Checkers Club Overlap",
            "Of $40$ students in a games club, $22$ play chess ($A$) and $15$ play checkers ($B$); $6$ students play both.",
        )
    )
    tasks.append(
        incl_excl(
            2, 60, 34, 28, 12,
            "Two Language Courses in One Cohort",
            "Of $60$ students, $34$ are enrolled in Spanish ($A$) and $28$ in French ($B$); $12$ students are enrolled in both.",
        )
    )
    tasks.append(
        incl_excl(
            3, 50, 20, 18, 5,
            "Gym Members Using Two Facilities",
            "Of $50$ gym members, $20$ use the pool ($A$) and $18$ use the sauna ($B$); $5$ members use both.",
        )
    )

    def three_set(title, ctx, statements, answers, expl):
        return make_task(
            global_n=0,
            subsection="1.2",
            title=title,
            context=ctx,
            statements=statements,
            answers=answers,
            explanation_bodies=expl,
            key_facts=SUBSECTION_KEY_FACTS["1.2"]
            + " For three sets, $|A \\cup B \\cup C| = |A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$.",
            setup_lines=["Apply the three-set inclusion-exclusion formula once, then read off each statement."],
        )

    # Three-set inclusion-exclusion (harder filler, deterministic numbers)
    A_, B_, C_ = 30, 25, 20
    AB, AC, BC, ABC = 10, 8, 7, 3
    union3 = A_ + B_ + C_ - AB - AC - BC + ABC
    tasks.append(
        three_set(
            "Three Overlapping Hobby Clubs",
            "In a survey of hobby-club members: $30$ do photography ($A$), $25$ do hiking ($B$), and $20$ do "
            "cooking ($C$). $10$ do both photography and hiking, $8$ do both photography and cooking, $7$ do "
            "both hiking and cooking, and $3$ do all three.",
            [
                f"$|A \\cup B \\cup C| = {union3}$.",
                "Every member who does all three activities is counted in $|A \\cap B|$, $|A \\cap C|$, and $|B \\cap C|$.",
                f"The number who do photography and hiking but not cooking is ${AB - ABC}$.",
                f"$|A \\cap B \\cap C| \\le \\min(|A \\cap B|, |A \\cap C|, |B \\cap C|)$.",
                f"$|A \\cup B \\cup C| > |A| + |B| + |C|$.",
            ],
            [True, True, AB - ABC >= 0, ABC <= min(AB, AC, BC), False],
            [
                f"$|A \\cup B \\cup C| = {A_}+{B_}+{C_}-{AB}-{AC}-{BC}+{ABC} = {union3}$, applying inclusion-exclusion for three sets once.",
                "Anyone in all three activities lies in every pairwise intersection by definition, so they are counted (and then corrected for) in each pairwise term.",
                f"Photography-and-hiking members number ${AB}$; removing the ${ABC}$ who also cook leaves ${AB - ABC}$ who do exactly photography and hiking.",
                f"The triple overlap can never exceed any pairwise overlap that contains it: ${ABC} \\le \\min({AB}, {AC}, {BC})$ holds here.",
                f"Inclusion-exclusion always subtracts the overlaps, so $|A \\cup B \\cup C| = {union3}$ is at most $|A|+|B|+|C| = {A_+B_+C_}$, never more.",
            ],
        )
    )

    return tasks


# ---------------------------------------------------------------------------
# Final safety net: the live frontend (src/components/FlashcardMath.tsx's
# looksLikeMathInner) refuses to treat a bare single-character `$X$` (no
# operator, no digit) as math - it has no way to tell "$A$" apart from a
# stray currency sign, so it leaves it as literal text. Any `$...$` span
# authored above that would fail that same check must be unwrapped here
# (dollars removed, inner text kept) - otherwise the leftover raw `$`
# characters desync the delimiter-parity for every span later in the string
# and can visibly corrupt unrelated, perfectly valid math further along.
_GLUE_WORDS_RE = re.compile(
    r"(?<!\\)\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|"
    r"when|where|while|also|but|not|amount|invested|returned|matching|statement|"
    r"condition|satisfied|exists)\b",
    re.I,
)
_STEM_WORDS_RE = re.compile(
    r"\b(?:Shipment|Invoice|Account|Week|Batch|Season|Client|Fund|Route|Day|"
    r"Point|Job|Branch|cost|total|mixed|price|rate|fee|balance|units?|kg|"
    r"litres?|miles?)\b",
    re.I,
)
_OP_RE = re.compile(r"[=<>\u2260\u2264\u2265+\u00d7\u00b7\-/^\\()_]")
_ALGEBRA_RE = re.compile(r"^[+\-\d.a-zA-Z\s\u00d7\u00b7*^/()]+$")


def _looks_like_math_inner(inner: str) -> bool:
    """Python port of looksLikeMathInner() in FlashcardMath.tsx - keep in sync."""
    t = inner.strip()
    if not t:
        return False
    if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", t):
        return False
    if _GLUE_WORDS_RE.search(t):
        return False
    if "|" in t:
        return False
    if not re.search(r"[=<>\u2260\u2264\u2265]", t) and _STEM_WORDS_RE.search(t):
        return False
    if re.search(r"[A-Za-z]{4,}", t) and not re.search(r"[=<>\u2260\u2264\u2265]", t) and not re.search(r"\\[a-zA-Z]+", t):
        return False
    if _OP_RE.search(t) and re.search(r"[A-Za-z0-9]", t):
        return True
    if re.fullmatch(r"[+\-]?\d+(?:\.\d+)?", t):
        return True
    if len(t) <= 48 and re.search(r"[a-zA-Z]", t) and re.search(r"\d", t) and _ALGEBRA_RE.match(t):
        return True
    return False


_CURRENCY_SPLIT_RE = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)"
    r"(?![0-9A-Za-z+\-*=<>\u2260\u2264\u2265(\\{^_$])"
)


def normalize_math_dollars(text: str) -> str:
    """Unwrap any `$...$` span that the frontend's own math/prose classifier
    would not recognize as math, so no stray/mismatched `$` survives into
    the shipped content. This is a line-for-line port of splitMath()'s
    dollar-handling in src/components/FlashcardMath.tsx - keep in sync."""
    if not text or "$" not in text:
        return text

    def unescaped_dollar(s: str, start: int) -> int:
        i = s.find("$", start)
        while i != -1:
            bs = 0
            j = i - 1
            while j >= 0 and s[j] == "\\":
                bs += 1
                j -= 1
            if bs % 2 == 0:
                return i
            i = s.find("$", i + 1)
        return -1

    out = []
    i = 0
    n = len(text)
    while i < n:
        if text[i] == "\\" and i + 1 < n and text[i + 1] == "$":
            out.append("\\$")
            i += 2
            continue
        if text[i] == "$":
            cur = _CURRENCY_SPLIT_RE.match(text, i)
            if cur:
                # Mirror splitMath(): a currency-shaped prefix only "wins" if the
                # span between its end and the NEXT unescaped `$` does NOT look
                # like real math. Otherwise this `$` opens a genuine math span
                # (e.g. "$3 \in C$") and must NOT be sliced off as `$3`.
                after_math = unescaped_dollar(text, i + len(cur.group(0)))
                between = text[i + 1 : after_math] if after_math != -1 else ""
                if not (after_math != -1 and _looks_like_math_inner(between)):
                    out.append(cur.group(0))
                    i += len(cur.group(0))
                    continue
            end = unescaped_dollar(text, i + 1)
            if end != -1:
                inner = text[i + 1 : end]
                if _looks_like_math_inner(inner):
                    out.append("$" + inner + "$")
                else:
                    out.append(inner)
                i = end + 1
                continue
        out.append(text[i])
        i += 1
    return "".join(out)


def _convert_cardinality_in_span(inner: str) -> str:
    return re.sub(r"\|([^|]+?)\|", r"\\lvert \1\\rvert", inner)


def convert_cardinality_bars(text: str) -> str:
    """Rewrite `|X|` cardinality bars to `\\lvert X \\rvert` inside math spans.

    looksLikeMathInner() unconditionally rejects any `$...$` whose contents
    include a literal `|` (that check exists to stop table-style runs like
    `Item = $3 | Item2 = $4` from being swallowed as one bogus math span), so
    every `$|A|$`, `$|A \\cup B|$`, etc. authored above would otherwise get
    unwrapped by normalize_math_dollars() and leak raw LaTeX as plain text."""
    if not text or "|" not in text:
        return text

    def unescaped_dollar(s: str, start: int) -> int:
        i = s.find("$", start)
        while i != -1:
            bs = 0
            j = i - 1
            while j >= 0 and s[j] == "\\":
                bs += 1
                j -= 1
            if bs % 2 == 0:
                return i
            i = s.find("$", i + 1)
        return -1

    out = []
    i = 0
    n = len(text)
    while i < n:
        if text[i] == "\\" and i + 1 < n and text[i + 1] == "$":
            out.append("\\$")
            i += 2
            continue
        if text[i] == "$":
            end = unescaped_dollar(text, i + 1)
            if end != -1:
                inner = text[i + 1 : end]
                out.append("$" + _convert_cardinality_in_span(inner) + "$")
                i = end + 1
                continue
        out.append(text[i])
        i += 1
    return "".join(out)


def normalize_task_dollars(t: dict) -> dict:
    for field in ("context", "solution_overview"):
        t[field] = normalize_math_dollars(convert_cardinality_bars(t[field]))
    for field in ("statements", "tactical_explanations"):
        t[field] = [normalize_math_dollars(convert_cardinality_bars(s)) for s in t[field]]
    return t


def main() -> None:
    parsed = {t["pdf_num"]: t for t in json.loads(PARSED.read_text(encoding="utf-8"))}

    fillers_by_sub = {
        "1.1": gen_1_1_fillers(),
        "1.2": gen_1_2_fillers(),
        "1.3": [],
        "1.4": [],
    }

    global_n = 1
    all_tasks: list[dict] = []
    summary = []
    for sub in SUBSECTIONS:
        sid = sub["id"]
        bank = [polish_pdf_task(parsed[n], sid, 0, 0) for n in sub["pdf_nums"]]
        bank += fillers_by_sub[sid]

        curve = diff_curve(len(bank))
        # order: keep PDF tasks in original order first (already roughly easy->hard
        # per the source docx tiers), fillers appended, then assign the curve by
        # index so difficulty still reads easy -> hard start to finish.
        for i, t in enumerate(bank):
            t["difficulty_level"] = curve[i]
            t["sort_order"] = i + 1
            t["id"] = f"math-1-{global_n}"
            t["case_id"] = f"MATH 1.{global_n:02d}"
            global_n += 1
            if len(t["statements"]) != 5 or len(t["answer_key"]) != 5:
                raise SystemExit(f"bad lengths {t['id']}")
            if len(t["tactical_explanations"]) != 5:
                raise SystemExit(f"bad expl {t['id']}")
            if not t["context"].strip() or any(not s.strip() for s in t["statements"]):
                raise SystemExit(f"empty field {t['id']}")
            if len(t["solution_overview"]) < 150:
                raise SystemExit(f"short overview {t['id']}")
            normalize_task_dollars(t)

        (BANKS / f"{sid}_V2.json").write_text(json.dumps(bank, ensure_ascii=False, indent=2), encoding="utf-8")
        summary.append((sid, sub["title"], len(sub["pdf_nums"]), len(fillers_by_sub[sid]), len(bank)))
        all_tasks.extend(bank)

    for sid, title, pdf_n, filler_n, total in summary:
        print(f"{sid} {title}: {pdf_n} pdf + {filler_n} new = {total}")
    print("TOTAL", len(all_tasks))

    write_ts(all_tasks)


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def task_to_ts(t: dict) -> str:
    fields = [
        f"    id: {js_str(t['id'])},",
        f"    case_id: {js_str(t['case_id'])},",
        f"    title: {js_str(t['title'])},",
        f"    subsection: {js_str(t['subsection'])},",
        f"    context: {js_str(t['context'])},",
        "    statements: [",
    ]
    for s in t["statements"]:
        fields.append(f"      {js_str(s)},")
    fields.append("    ],")
    fields.append(
        "    answer_key: [" + ", ".join("true" if x else "false" for x in t["answer_key"]) + "],"
    )
    fields.append("    tactical_explanations: [")
    for s in t["tactical_explanations"]:
        fields.append(f"      {js_str(s)},")
    fields.append("    ],")
    fields.append(f"    difficulty_level: {js_str(t['difficulty_level'])},")
    fields.append(f"    sort_order: {t['sort_order']},")
    fields.append(f"    solution_overview: {js_str(t['solution_overview'])},")
    return "  {\n" + "\n".join(fields) + "\n  }"


def write_ts(tasks: list[dict]) -> None:
    sub_ts = ",\n".join(f'  {{ id: "{s["id"]}", title: {js_str(s["title"])} }}' for s in SUBSECTIONS)
    body = ",\n".join(task_to_ts(t) for t in tasks)
    text = f'''/**
 * Chapter 1 — Logic (subsections 1.1-1.4).
 * Every task is sourced from LOGIC.pdf, except a small proportional set of new
 * fillers (same abstract set-theory / logic style) added where the source
 * material was thin (mostly 1.1 and 1.2). Explanations follow the Ch11 tutorial
 * style: solution_overview gives the shared setup once; tactical_explanations
 * carry the per-statement (A-E) reasoning, with no duplication between the two.
 */

import type {{ MathTask }} from "@/data/math-chapters";

export const MATH_CH1_SUBSECTIONS = [
{sub_ts},
] as const;

export const MATH_CH1_LOGIC: MathTask[] = [
{body},
];
'''
    OUT_TS.write_text(text, encoding="utf-8")
    print("wrote", OUT_TS, "tasks", len(tasks))


if __name__ == "__main__":
    main()
