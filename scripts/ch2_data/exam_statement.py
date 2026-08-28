"""Rewrite Chapter 2 statements into direct exam-style claims (no life scenarios)."""

from __future__ import annotations

import re

_NARRATIVE = re.compile(
    r"\b("
    r"clerk|student|marker|examiner|note|booklet|tutor|candidate|"
    r"reports|reported|records|ticks|accepts|claims the|is said to|is claimed|is then (?:said|claimed)|"
    r"hunting|after collecting|after expanding|without expanding|evaluating \$|at \$\(|"
    r"the remaining terms are not needed|substituting|inserting|checking that|"
    r"dropping bars via|recording \||cancelled by habit|"
    r"under the standing domain label \$D_\d+\$|"
    r"checklist|accepted on|is accepted"
    r")\b",
    re.I,
)

_OBVIOUS = re.compile(
    r"^(?:"
    r"Expanding \$\([^)]+\+\s*[^)]+\+\s*[^)]+\)\^2\$ and subtracting|"
    r"After collecting only the \$[a-z]+\$ term in|"
    r"Hunting \$[a-z]+\$ in|"
    r"Subtracting \$\([a-z][+-][a-z]\)\^2\$ from \$\([a-z][+-][a-z]\)\^2\$|"
    r"An examiner lists|"
    r"Factoring \$[a-z]+\^2-\d+\$ as \$\([a-z][+-]\d+\)\^2\$|"
    r"With the elementary data \$[a-z]\+[a-z]=\d+\$ and \$[a-z][a-z]=\d+"
    r")",
    re.I,
)


def has_narrative(statement: str) -> bool:
    return bool(_NARRATIVE.search(statement))


def is_obvious(statement: str) -> bool:
    return bool(_OBVIOUS.search(statement.strip()))


def is_numeric_plug(statement: str) -> bool:
    s = statement.strip()
    if re.search(r"\b(?:Inserting|Substituting|Checking (?:that|at)|at \$[a-z]=-?\d|Given \$[a-z]=-?\d)", s, re.I):
        return True
    if re.search(r"\bEvaluating\b", s, re.I):
        return True
    if re.search(r"at \$\([^)]*\d", s):
        return True
    if re.search(r"\$[a-z]\+[a-z]=\d+", s):
        return True
    if re.search(r"\$\([a-z],[^)]*\d+\)", s):
        return True
    if re.search(r"=\s*-?\d+\$.*(?:said|claimed|recover|match|produce|leave)", s, re.I):
        return True
    if re.search(r"\$\d+[a-z]?[,)]", s):  # concrete numeric assignment in claim
        if re.search(r"Given|Inserting|Substituting|at \$|=\s*\d|With \$", s, re.I):
            return True
    return False


def is_verbose_verbal(statement: str) -> bool:
    s = statement.strip()
    return bool(
        re.search(
            r"(?:The product of the sum of the squares|Matching \$[a-z]+\^2)",
            s,
            re.I,
        )
    )


def _strip_noise(s: str) -> str:
    s = re.sub(
        r"\.\s*The remaining terms are not needed to judge the claim\.?\s*$",
        ".",
        s,
        flags=re.I,
    )
    s = re.sub(r",?\s*without expanding\.?\s*$", ".", s, flags=re.I)
    s = re.sub(r"\s{2,}", " ", s)
    return s.strip()


def to_exam_statement(statement: str) -> str:
    s = statement.strip()

    # Coefficient collection
    m = re.search(
        r"(?:After collecting only|Hunting) the \$(\$[^$]+|\$[^$]+\$)\$ term in \$(.+?)\$, "
        r"(?:a marker )?records (?:its )?(?:the )?coefficient (?:of \$(\$[^$]+|\$[^$]+\$)\$ )?as \$(.+?)\$",
        s,
        re.I,
    )
    if m:
        var = m.group(1).strip("$")
        return f"In ${m.group(2)}$ the coefficient of ${var}$ equals ${m.group(4)}$."

    # Expand subtract narrative
    m = re.search(
        r"(?:A student expands|After expanding) \$(.+?)\$, subtracts \$(.+?)\$, "
        r"(?:and )?(?:claims|reports) (.+?)\.\s*$",
        s,
        re.I,
    )
    if m:
        claim = m.group(3).rstrip(".").strip()
        if claim.lower().startswith("the difference"):
            inner = claim.replace("the difference is ", "").replace("remainder ", "")
            return f"For every real value where defined, ${m.group(1)}-({m.group(2)})={inner}$."
        return f"For every real value where defined, ${m.group(1)}-({m.group(2)})={claim}$."

    # Clerk remainder
    m = re.search(
        r"Expanding \$(.+?)\$ and subtracting \$(.+?)\$, (?:a clerk )?reports the remainder \$(.+?)\$",
        s,
        re.I,
    )
    if m:
        return (
            f"For all real values in ${m.group(1)}$, subtracting ${m.group(2)}$ "
            f"from the expansion leaves ${m.group(3)}$."
        )

    # Given sum/product reports
    m = re.search(
        r"Given \$(.+?)\$ and \$(.+?)\$, (?:a \w+ )?(?:reports|concludes) \$(.+?)\$",
        s,
        re.I,
    )
    if m:
        return f"If ${m.group(1)}$ and ${m.group(2)}$, then ${m.group(3)}$."

    m = re.search(
        r"Whenever \$(.+?)\$ and \$(.+?)\$, (?:a note )?(?:reports|concludes) \$(.+?)\$",
        s,
        re.I,
    )
    if m:
        return f"If ${m.group(1)}$ and ${m.group(2)}$, then ${m.group(3)}$."

    # Polarisation
    m = re.search(
        r"Subtracting \$(.+?)\$ from \$(.+?)\$ (?:is claimed to leave|equals) \$(.+?)\$",
        s,
        re.I,
    )
    if m:
        return f"For every real pair, ${m.group(2)}-{m.group(1)}={m.group(3)}$."

    # is said to / is accepted / is recorded
    s = re.sub(r" is said to produce ", " equals ", s, flags=re.I)
    s = re.sub(r" is said to leave ", " equals ", s, flags=re.I)
    s = re.sub(r" is said to match ", " equals ", s, flags=re.I)
    s = re.sub(r" is then (?:said|claimed) to ", " equals ", s, flags=re.I)
    s = re.sub(r" is accepted\.?\s*$", ".", s, flags=re.I)
    s = re.sub(r" is recorded as ", " equals ", s, flags=re.I)

    # Note concludes
    s = re.sub(
        r"^A note concludes that ",
        "For every real pair, ",
        s,
        flags=re.I,
    )
    s = re.sub(r"^An examiner lists ", "The identity ", s, flags=re.I)

    # Strip role words
    for word in (
        r"a clerk",
        r"a student",
        r"a marker",
        r"an examiner",
        r"a note",
        r"a booklet",
        r"a tutor",
    ):
        s = re.sub(word, "", s, flags=re.I)

    s = _strip_noise(s)
    if not s.endswith((".", "?")):
        s += "."
    return s.strip()
