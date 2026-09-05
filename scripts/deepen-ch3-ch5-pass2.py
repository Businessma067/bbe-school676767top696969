#!/usr/bin/env python3
"""Second pass: fix closers and deepen short Ch3/Ch5 letters after header conversion."""

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

FIN_OPENERS = [
    "Name the financial quantity in the claim, then read it from the shared solve.",
    "The overview already fixed the inputs; this letter only checks the named figure.",
    "Pull the recovered rate, factor, or balance and compare it with the claim.",
    "Use the shared periodic rate and accumulation factor already recovered above.",
    "Compare the claim against the value produced by the overview formulas.",
]

SYS_OPENERS = [
    "The overview already solved the two-unknown system; this letter reads that solution.",
    "Use the recovered pair $(x,y)$ without rebuilding the invoices or transfer rules.",
    "The shared elimination is done; only the claim-specific check remains.",
    "Read the recovered unit prices or counts, then test the named figure.",
    "Start from the overview answer line and apply only the extra arithmetic the claim needs.",
]


def fix_closer(text: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    # Strip any existing closers
    text = re.sub(
        r"[,.]?\s*So the statement is (?:True|False)\.?\s*$",
        "",
        text.strip(),
        flags=re.I,
    )
    text = re.sub(
        r"[,.]?\s*so the statement is (?:True|False)\.?\s*$",
        "",
        text.strip(),
        flags=re.I,
    )
    text = text.rstrip(" ,")
    if not text.endswith((".", "!", "?")):
        text += "."
    return text + f"\n\nSo the statement is {verd}."


def deepen_short(body: str, letter_idx: int, truth: bool, kind: str) -> str:
    body = body.strip()
    # Already has a solid opener rhythm and enough displays — just fix closer later
    openers = FIN_OPENERS if kind == "fin" else SYS_OPENERS
    opener = openers[letter_idx % len(openers)]

    # Printed-total one-liners
    m = re.match(
        r"^(.*? is printed at .+?\.)\s*The claim is (.+?)[,.]?\s*$",
        body,
        re.I | re.S,
    )
    if m and "$$" not in body:
        printed, claim = m.group(1), m.group(2).rstrip(".")
        return (
            f"{opener}\n\n"
            f"{printed}\n\n"
            f"The claim names {claim}. Those two totals "
            + ("agree." if truth else "do not agree.")
        )

    # Recovered-only without display
    if "overview recovered" in body.lower() and body.count("$$") == 0:
        m2 = re.search(r"\$([^$]+)\$", body)
        expr = m2.group(1) if m2 else None
        if expr:
            return (
                f"{opener}\n\n"
                f"$$\n{expr}\n$$\n\n"
                + (
                    "That recovered value is exactly the figure named in the claim."
                    if truth
                    else "That recovered value is not the figure named in the claim."
                )
            )

    # Short body with one display — prepend opener if missing a tutoring lead-in
    if len(body) < 260 and not body.startswith(
        (
            "The overview",
            "Name the",
            "Pull the",
            "Use the",
            "Compare the",
            "Read the",
            "Start from",
            "This is not",
            "The monthly",
            "The quarterly",
            "The effective",
            "The one-year",
            "The gap",
            "Annual",
            "Six years",
            "Three years",
            "Total",
            "Invoice",
            "North",
            "Moving",
            "Clearing",
            "For a",
            "An ordinary",
            "An effective",
            "Continuous",
            "Each dated",
            "A constant",
            "Value the",
            "The mortgage",
            "Net present",
            "Solve the",
            "Discounting",
            "Introduce",
            "Translate",
            "Build the",
            "Set up",
            "The patron",
            "Revenue at",
            "Total volume",
            "Mango",
            "Dividing",
            "The stem",
            "Combined",
            "Compare the",
            "Because",
            "A system",
            "Test ",
            "The parameter",
            "Pass counts",
            "Express",
            "Premium",
            "With $",
            "The reversed",
            "Downstream",
            "Upstream",
            "The overview's",
            "Cod baskets",
            "Robot",
            "Twice",
            "Local",
            "Without",
            "By construction",
            "Interest in",
            "Principal",
            "After ",
            "Add the",
            "The year-",
            "The first",
            "The final",
            "The undiscounted",
            "A payment",
            "The contract",
            "Immediately",
            "The third",
            "The sixth",
            "The geometric",
            "An arithmetic",
            "Apply the",
            "Dollar growth",
            "The six-year",
            "Substitute",
            "This letter",
            "Here that",
        )
    ):
        # Only prepend if body doesn't already look tutor-like
        if not re.match(r"^[A-Z].{20,}", body):
            pass
        elif "overview recovered" in body.lower() or len(body) < 220:
            if not body.startswith(opener[:20]):
                body = f"{opener}\n\n{body}"

    # Expand minimal recovered+display gaps
    if len(body) < 240 and "overview recovered" in body.lower() and "$$" in body:
        if "gap" not in body.lower() and "comparing" not in body.lower() and "claim" in body.lower():
            body = body.rstrip(".") + (
                "\n\nMatching these figures to the claim settles the verdict."
                if truth
                else "\n\nThe mismatch with the claim settles the verdict."
            )

    return body


def process_expl(expl: str, letter_idx: int, truth: bool, kind: str) -> str:
    verd = "True" if truth else "False"
    letter = "ABCDE"[letter_idx]
    m = re.match(
        r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n([\s\S]*)$",
        expl.strip(),
    )
    if not m:
        hdr = f"**{letter}.** → {verd}"
        body = expl
    else:
        hdr = f"**{letter}.** → {verd}"
        body = m.group(2)
    body = deepen_short(body, letter_idx, truth, kind)
    body = fix_closer(body, truth)
    return f"{hdr}\n\n{body.strip()}"


def rewrite_ts(path: Path, kind: str) -> dict:
    text = path.read_text(encoding="utf-8")
    parts = re.split(r"(?=case_id:\s*`)", text)
    out = [parts[0]]
    lens = []
    for part in parts[1:]:
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
            process_expl(e, i, a, kind) for i, (e, a) in enumerate(zip(expls, aks))
        ]
        for e in new_expls:
            lens.append(len(e))
        new_inner = ",\n".join(f"      `{e}`" for e in new_expls) + ",\n    "
        part = part[: mex.start(2)] + "\n" + new_inner + part[mex.end(2) :]
        out.append(part)
    path.write_text("".join(out), encoding="utf-8")
    return {
        "med": statistics.median(lens),
        "min": min(lens),
        "thin180": sum(1 for x in lens if x < 180),
        "n_letters": len(lens),
    }


def rewrite_exam(path: Path, kind: str) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    lens = []
    for t in data["tasks"]:
        new = []
        for i, (e, a) in enumerate(zip(t["tactical_explanations"], t["answer_key"])):
            ne = process_expl(e, i, bool(a), kind)
            # Extra expand for still-short stub lookups
            if len(ne) < 220:
                hm = re.match(
                    r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n([\s\S]*)$",
                    ne,
                )
                if hm:
                    body = re.sub(
                        r"\n\nSo the statement is (?:True|False)\.\s*$",
                        "",
                        hm.group(2),
                    )
                    if "Write the recovered" not in body and "State the recovered" not in body:
                        body = body.rstrip() + (
                            "\n\nWrite the recovered value beside the claimed figure and read the comparison directly."
                            if "$$" in body
                            else "\n\nState the recovered figure in a display, then compare it with the claim."
                        )
                    ne = f"{hm.group(1)}\n\n{fix_closer(body, bool(a))}"
            new.append(ne)
            lens.append(len(ne))
        t["tactical_explanations"] = new
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return {
        "med": statistics.median(lens),
        "min": min(lens),
        "thin180": sum(1 for x in lens if x < 180),
    }


def main() -> None:
    print("ch3 core", rewrite_ts(CH3_CORE, "fin"))
    print("ch5 core", rewrite_ts(CH5_CORE, "sys"))
    print("ch3 exam", rewrite_exam(CH3_EXAM, "fin"))
    print("ch5 exam", rewrite_exam(CH5_EXAM, "sys"))


if __name__ == "__main__":
    main()
