#!/usr/bin/env python3
"""Deepen Ch3 financial + Ch5 linear explanations to MATH 13.18 teacher depth.

Safe transforms only:
- expand clean recovered lookups with named formula → display → compare
- prepend missing general formulas on EAR/FV/continuous checks
- strengthen short claim arithmetic with explicit compare
- hand-fix known corrupted letters from prior passes

Does NOT chain generic expanders that can smash existing $$ blocks.
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CH3_CORE = ROOT / "src/data/math-ch11-financial.ts"
CH5_CORE = ROOT / "src/data/math-ch5-linear-equations.ts"
CH3_EXAM = ROOT / "src/data/math-ch3-exam.json"
CH5_EXAM = ROOT / "src/data/math-ch5-exam.json"

TARGET = 340

GENERIC = [
    "Name the financial quantity in the claim, then read it from the shared solve.",
    "The overview already fixed the inputs; this letter only checks the named figure.",
    "Pull the recovered rate, factor, or balance and compare it with the claim.",
    "Use the shared periodic rate and accumulation factor already recovered above.",
    "Compare the claim against the value produced by the overview formulas.",
    "The overview already recovered the quantity this claim names.",
    "Read the recovered value from the shared solve.",
    "This letter only checks the recovered figure against the claim.",
    "The shared solve already produced the number being claimed.",
    "Compare the claim with the value recovered in the overview.",
    "The overview already solved the two-unknown system; this letter reads that solution.",
    "Use the recovered pair $(x,y)$ without rebuilding the invoices or transfer rules.",
    "Use the recovered pair without rebuilding the invoices or transfer rules.",
    "The shared elimination is done; only the claim-specific check remains.",
    "Read the recovered unit prices or counts, then test the named figure.",
    "Start from the overview answer line and apply only the extra arithmetic the claim needs.",
    "Write the recovered value beside the claimed figure and read the comparison directly.",
    "State the recovered figure in a display, then compare it with the claim.",
]

HDR_RE = re.compile(r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n([\s\S]*)$")
CLOSER_RE = re.compile(r"\n*\s*So the statement is (?:True|False)\.?\s*$", re.I)

# (case_id, letter) -> body without header/closer
HAND_FIXES: dict[tuple[str, str], str] = {
    ("MATH 11.103", "B"): """\
Year-1 interest is the contractual rate times the opening loan balance:

$$
I_1 = r K
$$

Substitute $r = 0.10$ and $K = 45{,}000$:

$$
I_1 = 0.10 \\times 45{,}000
$$

$$
I_1 = 4{,}500.00
$$

The claim is \\$5,000.00. We have \\$4,500.00, so the figures do not agree.""",
    ("MATH 11.103", "C"): """\
After payment 3 the overview already carried the outstanding balance forward. That recovered figure is

$$
B_3 \\approx 20{,}602.37
$$

The claim names \\$20{,}602.37. The recovered balance and the claim agree.""",
    ("MATH 11.107", "A"): """\
The year-end equivalent folds simple interest on the four quarterly deposits into one year-end amount:

$$
a = D(4 + 1.5 r)
$$

Substitute $D = 250$ and $r = 0.08$:

$$
a = 250(4 + 1.5 \\times 0.08)
$$

$$
a = 250 \\times 4.12 = 1{,}030
$$

The claim is \\$1,100.00. We have \\$1,030, so the figures do not agree.""",
    ("MATH 11.107", "B"): """\
Once the year-end equivalent $a = 1{,}030$ is known, its four-year future value is the ordinary annuity accumulation:

$$
F_4 = \\frac{a}{r}\\bigl[(1+r)^{4}-1\\bigr]
$$

Substitute $a = 1{,}030$ and $r = 0.08$:

$$
F_4 = \\frac{1{,}030}{0.08}\\bigl[(1.08)^{4}-1\\bigr]
$$

$$
F_4 \\approx 4{,}641.30
$$

The claim is about \\$4,700.00. We have about \\$4,641.30, so the figures do not agree.""",
    ("MATH 11.107", "D"): """\
Treating the four deposits as a flat \\$1,000 year-end deposit replaces $a$ by $1{,}000$ in the same annuity formula:

$$
F_4^{\\mathrm{simp}} = \\frac{1{,}000}{0.08}\\bigl[(1.08)^{4}-1\\bigr]
$$

$$
F_4^{\\mathrm{simp}} \\approx 4{,}506.11
$$

The claim is about \\$4,506.11. The simplified balance and the claim agree.""",
}


def strip_closer(body: str) -> str:
    return CLOSER_RE.sub("", body.strip()).rstrip()


def fix_closer(body: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    body = strip_closer(body)
    body = re.sub(
        r"(So the statement is (?:True|False)\.)\s*$",
        "",
        body,
        flags=re.I,
    ).rstrip()
    if not body.endswith((".", "!", "?")):
        body += "."
    return body + f"\n\nSo the statement is {verd}."


def strip_generics(body: str) -> str:
    body = body.strip()
    changed = True
    while changed:
        changed = False
        for g in GENERIC:
            if body.startswith(g):
                body = body[len(g) :].lstrip(" \n")
                changed = True
                break
    # drop leftover "That matches/does not match the claimed figure." spam lines alone after strip
    return body.strip()


def fin_rule(role: str) -> tuple[str, str | None]:
    r = role.lower()
    if "monthly periodic" in r:
        return (
            "The monthly periodic rate is the nominal annual quote divided by twelve compounding dates:",
            r"i_m = \frac{r}{12}",
        )
    if "quarterly periodic" in r:
        return (
            "The quarterly periodic rate is the nominal annual quote divided by four compounding dates:",
            r"i = \frac{r}{4}",
        )
    if "daily periodic" in r:
        return (
            "The daily periodic rate is the nominal annual quote divided by 365 compounding dates:",
            r"i_d = \frac{r}{365}",
        )
    if re.search(r"\bperiodic rate\b", r):
        return (
            "The periodic rate splits the nominal annual quote by the compounding frequency:",
            r"i = \frac{r}{n}",
        )
    if "number of" in r and "period" in r:
        return (
            "The number of compounding periods is frequency times holding time:",
            r"nt = n \cdot t",
        )
    if "equal annual payment" in r or "monthly payment" in r or "payment" in r:
        return (
            "The annuity payment uses the recovered rate and term from the overview:",
            r"a = \frac{rK}{1-(1+r)^{-n}}",
        )
    if "required deposit" in r or "present value" in r or "fair value" in r:
        return (
            "Present value discounts the future cash amount by the recovered accumulation factor:",
            r"PV = \frac{FV}{(1+i)^{nt}}",
        )
    if "future value" in r or "balance" in r or "total" in r:
        return (
            "Compound growth scales the opening principal by the recovered accumulation factor:",
            r"FV = P(1+i)^{nt}",
        )
    if "continuous" in r:
        return (
            "Continuous compounding uses the force of interest from the overview:",
            r"A = P e^{rt}",
        )
    if "irr" in r or "internal rate" in r:
        return (
            "The internal rate of return is the discount rate that zeros NPV in the overview:",
            None,
        )
    if "dividend" in r or "perpetuity" in r or "lease" in r:
        return (
            f"The overview already recovered {role}. Read that valuation figure directly:",
            None,
        )
    return (
        f"The overview already recovered {role}. State that figure in its own display:",
        None,
    )


def sys_rule(role: str) -> tuple[str, str | None]:
    return (
        f"The overview already recovered {role}. Read that value from the shared solve:",
        None,
    )


def deepen_quantity_lookup(body: str, truth: bool, kind: str) -> str | None:
    m = re.match(
        r"Here that quantity is (.+?)\.\s*"
        r"\$\$\s*(.+?)\s*\$\$\s*"
        r"(.*)$",
        body.strip(),
        re.S,
    )
    if not m:
        return None
    role, expr, rest = m.group(1).strip(), m.group(2).strip(), m.group(3).strip()
    # skip if display already looks corrupted
    if "claim" in expr.lower() or expr.strip() in {"4", "true", "false"}:
        return None
    lead, formula = fin_rule(role) if kind == "fin" else sys_rule(role)
    parts = [lead]
    if formula:
        parts.append(f"$$\n{formula}\n$$")
        parts.append("Substituting the stem inputs recovered in the overview gives")
    parts.append(f"$$\n{expr}\n$$")
    cm = re.search(r"The claim names (.+?)\.", rest)
    if truth:
        parts.append(
            "The claim names that same figure. The recovered value and the claim agree."
        )
    elif cm:
        parts.append(
            f"The claim names {cm.group(1).strip()}. "
            f"Against the recovered value those figures do not agree."
        )
    else:
        parts.append("That recovered value is not the figure named in the claim.")
    return "\n\n".join(parts)


def deepen_invoice(body: str, truth: bool) -> str | None:
    m = re.search(r"(Invoice .+? is printed at .+?\.)\s*(.*)$", body, re.S | re.I)
    if not m:
        return None
    printed, rest = m.group(1), m.group(2)
    parts = [
        "Once the unit prices are recovered, each stem invoice total is fixed. "
        "Read the printed total for this claim:",
        printed,
    ]
    cm = re.search(r"The claim names (.+?)\.", rest)
    if truth:
        parts.append(
            "The claim names that same printed total. The invoice total and the claim agree."
            if not cm
            else f"The claim names {cm.group(1).strip()}. The invoice total and the claim agree."
        )
    else:
        parts.append(
            f"The claim names {cm.group(1).strip()}. The invoice total and the claim do not agree."
            if cm
            else "The printed total does not match the claim."
        )
    return "\n\n".join(parts)


def deepen_pair_arith(body: str, truth: bool) -> str | None:
    m = re.match(
        r"The overview recovered \$(.+?)\$ and \$(.+?)\$\.\s*(.+)$",
        body.strip(),
        re.S,
    )
    if not m:
        return None
    x, y, rest = m.group(1).strip(), m.group(2).strip(), m.group(3).strip()
    parts = [
        "The overview already recovered the pair from the shared elimination. "
        "This letter only applies the extra arithmetic the claim needs.",
        f"The recovered values are ${x}$ and ${y}$.",
        rest,
    ]
    low = rest.lower()
    if "claim" in low and not any(
        k in low for k in ("agree", "match", "we have", "both sides")
    ):
        parts.append(
            "The computed figure matches the claim."
            if truth
            else "The computed figure does not match the claim."
        )
    return "\n\n".join(parts)


def prepend_general_formula(body: str) -> str:
    """If a calc letter jumps straight into a concrete EAR/FV, name the general rule first."""
    b = body.strip()
    if r"R = (1+i)" in b or r"R=(1+i)" in b or r"FV = P(1+i)" in b:
        return b

    # EAR concrete
    if re.search(r"R(?:_\{?\w*\}?)?\s*=\s*\(1\.\d+", b) and "effective" in b.lower():
        first, _, rest = b.partition("\n")
        return (
            "The effective annual rate compounds the periodic rate across every "
            "compounding date in one year:\n\n"
            "$$\nR = (1+i)^{n} - 1\n$$\n\n"
            "Substitute the recovered periodic rate and compounding count:\n\n"
            f"{b}"
        )

    # FV concrete with multiplication
    if re.search(r"FV\s*=\s*[\d{,}\\]+\s*\\times", b) or re.search(
        r"FV\s*=\s*\d", b
    ):
        if "balance" in b.lower() or "credits" in b.lower() or "principal" in b.lower() or "FV" in b[:80]:
            return (
                "Future value compounds the opening principal by the accumulation factor:\n\n"
                "$$\nFV = P(1+i)^{nt}\n$$\n\n"
                f"{b}"
            )

    # continuous A = P e^{rt} already concrete
    if re.search(r"A\s*=\s*P\s*e\^", b) or re.search(r"A\s*=\s*[\d{,}]+\s*\\times\s*e\^", b):
        if r"A = P e^{rt}" not in b:
            return (
                "Continuous compounding multiplies the principal by the exponential growth factor:\n\n"
                "$$\nA = P e^{rt}\n$$\n\n"
                f"{b}"
            )

    # gap letter
    if b.lower().startswith("the gap is") and r"R = (1+i)" not in b:
        return (
            "The percentage-point gap is the effective annual rate minus the nominal quote. "
            "First form the effective rate, then subtract:\n\n"
            f"{b}"
        )

    return b


def deepen_transfer_or_gap(body: str, truth: bool) -> str | None:
    b = body.strip()
    if not re.search(
        r"starts at the recovered|Moving \$|Today's gap|receives \$\d|not the overview",
        b,
    ):
        return None
    lead = (
        "Use the recovered holdings from the overview; do not rebuild the original transfer system."
    )
    if b.startswith(lead):
        out = b
    else:
        out = f"{lead}\n\n{b}"
    if "claim" in out.lower() and not re.search(
        r"agree|match|We have|Both sides", out, re.I
    ):
        out = out.rstrip(".") + (
            ".\n\nThe computed figure matches the claim."
            if truth
            else ".\n\nThe computed figure does not match the claim."
        )
    return out


def strengthen_compare(body: str, truth: bool) -> str:
    b = body.strip()
    low = b.lower()
    if any(
        k in low
        for k in (
            "agree",
            "match",
            "we have",
            "settles the verdict",
            "both sides",
            "exactly the figure",
            "not the figure",
            "do not agree",
            "does not agree",
            "\\ne",
            "≠",
            "against the recovered",
            "against the claim",
            "comparing that",
            "comparing these",
            "comparing those",
            "exactly as claimed",
            "not $",
            "not \\$",
        )
    ):
        return b
    if truth:
        return b.rstrip(".") + ".\n\nMatching these figures to the claim settles the verdict."
    return b.rstrip(".") + ".\n\nThe mismatch with the claim settles the verdict."


def clean_spam(body: str) -> str:
    body = re.sub(
        r"(That matches the claimed figure\.\s*)+",
        "That matches the claimed figure.\n\n",
        body,
    )
    body = re.sub(
        r"(That does not match the claimed figure\.\s*)+",
        "That does not match the claimed figure.\n\n",
        body,
    )
    body = re.sub(
        r"(Matching these figures to the claim settles the verdict\.\s*)+",
        "Matching these figures to the claim settles the verdict.\n\n",
        body,
    )
    body = re.sub(
        r"(The mismatch with the claim settles the verdict\.\s*)+",
        "The mismatch with the claim settles the verdict.\n\n",
        body,
    )
    body = re.sub(r"\n{3,}", "\n\n", body)
    return body.strip()


def deepen_body(body: str, truth: bool, kind: str) -> str:
    body = strip_closer(body)
    body = strip_generics(body)

    # Prefer specific structural deepeners
    if "invoice" in body.lower() and "printed at" in body.lower():
        inv = deepen_invoice(body, truth)
        if inv:
            body = inv
    elif body.strip().startswith("Here that quantity is"):
        looked = deepen_quantity_lookup(body, truth, kind)
        if looked:
            body = looked
    elif body.strip().startswith("The overview recovered $"):
        pair = deepen_pair_arith(body, truth)
        if pair:
            body = pair
    else:
        tr = deepen_transfer_or_gap(body, truth)
        if tr:
            body = tr
        elif kind == "fin" and len(body) < TARGET:
            body = prepend_general_formula(body)

    # Exam / remaining short: if still thin and has math, add a calm teaching lead
    if len(body) < 280:
        if kind == "fin":
            if not body.startswith(
                (
                    "The ",
                    "Future",
                    "Continuous",
                    "Year-",
                    "Once ",
                    "Substitute",
                    "Name ",
                    "Present",
                    "Compound",
                    "An ",
                    "A ",
                    "Offer",
                    "Semi-",
                    "Annual",
                    "Dollar",
                    "Doubling",
                    "Interest",
                    "Principal",
                    "Add ",
                    "Treat",
                    "Treating",
                )
            ):
                body = (
                    "Name the financial rule behind the claim, then substitute the recovered inputs.\n\n"
                    + body
                )
        else:
            if not body.startswith(
                (
                    "The ",
                    "Use ",
                    "Once ",
                    "Translate",
                    "Introduce",
                    "Build ",
                    "Set ",
                    "This ",
                    "North",
                    "Revenue",
                    "Total",
                    "Combined",
                    "Pass ",
                    "Express",
                    "Premium",
                    "With ",
                    "Let ",
                )
            ):
                body = (
                    "Use the recovered values from the overview for this claim-specific check.\n\n"
                    + body
                )

    body = strengthen_compare(body, truth)
    body = clean_spam(body)
    return fix_closer(body, truth)


def process_expl(
    expl: str,
    letter_idx: int,
    truth: bool,
    kind: str,
    case_id: str | None = None,
) -> str:
    letter = "ABCDE"[letter_idx]
    verd = "True" if truth else "False"
    hdr = f"**{letter}.** → {verd}"

    if case_id and (case_id, letter) in HAND_FIXES:
        return f"{hdr}\n\n{fix_closer(HAND_FIXES[(case_id, letter)], truth)}"

    m = HDR_RE.match(expl.strip())
    body = m.group(2) if m else expl

    # Always deepen thin letters; lightly normalize longer ones
    if len(expl) < TARGET or "so the statement is" not in expl.lower():
        body = deepen_body(body, truth, kind)
    else:
        # still strip leftover generic openers on long letters if present
        cleaned = strip_generics(strip_closer(body))
        if cleaned != strip_closer(body) or len(expl) < 400 and expl.count("$$") <= 2:
            body = deepen_body(body, truth, kind)
        else:
            body = fix_closer(cleaned, truth)

    body = clean_spam(body)
    body = re.sub(
        r"(So the statement is (?:True|False)\.)\s*So the statement is (?:True|False)\.\s*$",
        r"\1",
        body,
    )
    return f"{hdr}\n\n{body.strip()}"


def rewrite_ts(path: Path, kind: str) -> dict:
    text = path.read_text(encoding="utf-8")
    parts = re.split(r"(?=case_id:\s*`)", text)
    out = [parts[0]]
    lens: list[int] = []
    for part in parts[1:]:
        cid_m = re.search(r"case_id:\s*`([^`]+)`", part)
        cid = cid_m.group(1) if cid_m else None
        mak = re.search(r"answer_key:\s*\[(.*?)\]", part, re.S)
        mex = re.search(
            r"(tactical_explanations:\s*\[)(.*?)(\]\s*,\s*\n\s*(?:difficulty|sort_order|solution_overview|graph))",
            part,
            re.S,
        )
        if not mak or not mex:
            out.append(part)
            continue
        aks = [
            t.strip() == "true"
            for t in mak.group(1).split(",")
            if t.strip() in ("true", "false")
        ]
        expls = re.findall(r"`((?:\\`|[^`])*)`", mex.group(2))
        if len(aks) != 5 or len(expls) != 5:
            out.append(part)
            continue
        new_expls = [
            process_expl(e, i, a, kind, cid) for i, (e, a) in enumerate(zip(expls, aks))
        ]
        lens.extend(len(e) for e in new_expls)
        new_inner = ",\n".join(f"      `{e}`" for e in new_expls) + ",\n    "
        part = part[: mex.start(2)] + "\n" + new_inner + part[mex.end(2) :]
        out.append(part)
    path.write_text("".join(out), encoding="utf-8")
    return stats(lens)


def rewrite_exam(path: Path, kind: str) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    lens: list[int] = []
    for t in data["tasks"]:
        cid = t.get("case_id")
        new = []
        for i, (e, a) in enumerate(zip(t["tactical_explanations"], t["answer_key"])):
            # Mixed exam letters that rebuild a full system should not get
            # "overview recovered" framing — only deepen if thin/compressed.
            ne = process_expl(e, i, bool(a), kind, cid)
            # If letter already contains a full 2x2 solve, strip mistaken overview leads
            if kind == "sys" and re.search(r"\\Delta\s*=", ne) and "overview" in ne.lower()[:120]:
                ne = re.sub(
                    r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False)\n\n)"
                    r"Use the recovered values from the overview for this claim-specific check\.\n\n",
                    r"\1Translate the stem into a $2\\times 2$ system, then solve for the claimed unknown.\n\n",
                    ne,
                )
                ne = re.sub(
                    r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False)\n\n)"
                    r"Start from the overview.*?\n\n",
                    r"\1Translate the stem into a $2\\times 2$ system, then solve for the claimed unknown.\n\n",
                    ne,
                    flags=re.S,
                )
            new.append(ne)
            lens.append(len(ne))
        t["tactical_explanations"] = new
    path.write_text(
        json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    return stats(lens)


def stats(lens: list[int]) -> dict:
    return {
        "n": len(lens),
        "median": statistics.median(lens) if lens else 0,
        "mean": round(statistics.mean(lens), 1) if lens else 0,
        "min": min(lens) if lens else 0,
        "max": max(lens) if lens else 0,
        "thin250": sum(1 for x in lens if x < 250),
        "thin300": sum(1 for x in lens if x < 300),
        "thin360": sum(1 for x in lens if x < 360),
    }


def main() -> None:
    print("ch3 core", rewrite_ts(CH3_CORE, "fin"))
    print("ch5 core", rewrite_ts(CH5_CORE, "sys"))
    print("ch3 exam", rewrite_exam(CH3_EXAM, "fin"))
    print("ch5 exam", rewrite_exam(CH5_EXAM, "sys"))


if __name__ == "__main__":
    main()
