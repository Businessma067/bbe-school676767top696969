#!/usr/bin/env python3
"""Rewrite Ch3 financial + Ch5 linear-equation explanations to MATH 13.18 depth.

- Core .ts banks: convert headers to **A.** → True/False; deepen thin recovered letters.
- Exam JSON: replace stub shared-model letters (11.134–143, 5.71–80); polish mixed exams.
"""

from __future__ import annotations

import json
import re
import statistics
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from _ch35_exam_stub_bodies import CH3_STUBS, CH5_STUBS  # noqa: E402

CH3_CORE = ROOT / "src/data/math-ch11-financial.ts"
CH5_CORE = ROOT / "src/data/math-ch5-linear-equations.ts"
CH3_EXAM = ROOT / "src/data/math-ch3-exam.json"
CH5_EXAM = ROOT / "src/data/math-ch5-exam.json"

PAREN_HDR = re.compile(
    r"^\*\*([A-E])\)\s*(.+?)\.\*\*\s*\((true|false)\)\s*\n\n",
    re.I | re.S,
)
ARROW_HDR = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\b")
RECOVERED = re.compile(
    r"^The overview recovered \$(.+?)\$ as (.+?)\.\s*The claim is (?:that same figure|\$?(.+?))[,.]?\s*so the statement is (True|False)\.?$",
    re.I | re.S,
)
RECOVERED_SIMPLE = re.compile(
    r"^The overview recovered \$(.+?)\$ as (.+?)\.\s*The claim is (.+?),?\s*so the statement is (True|False)\.?$",
    re.I | re.S,
)

LOOKUP_OPENERS = [
    "The overview already recovered the quantity this claim names.",
    "Read the recovered value from the shared solve.",
    "This letter only checks the recovered figure against the claim.",
    "The shared solve already produced the number being claimed.",
    "Compare the claim with the value recovered in the overview.",
]


def wrap(letter: str, truth: bool, body: str) -> str:
    verd = "True" if truth else "False"
    body = body.strip()
    if "so the statement is" not in body.lower():
        body = body.rstrip(" ,.") + f", so the statement is {verd}."
    # Ensure capital So when needed
    body = re.sub(
        r",\s*so the statement is",
        ", so the statement is",
        body,
        count=1,
    )
    if not body.endswith("."):
        body += "."
    # Prefer "So the statement is" as a final sentence when body ends with ", so..."
    if re.search(r",\s*so the statement is (True|False)\.?$", body):
        body = re.sub(
            r",\s*so the statement is (True|False)\.?$",
            r".\n\nSo the statement is \1.",
            body,
        )
    elif not re.search(r"So the statement is (True|False)\.?$", body):
        # already has lowercase so the statement - upgrade trailing form
        body = re.sub(
            r"so the statement is (True|False)\.?$",
            r"So the statement is \1.",
            body,
            count=1,
            flags=re.I,
        )
    return f"**{letter}.** → {verd}\n\n{body}"


def convert_header(expl: str, letter: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    m = PAREN_HDR.match(expl)
    if m:
        body = expl[m.end() :]
        return f"**{letter}.** → {verd}\n\n{body.lstrip()}"
    if ARROW_HDR.match(expl.strip()):
        # force verdict to match key
        return re.sub(
            r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)",
            f"**{letter}.** → {verd}",
            expl.strip(),
            count=1,
        )
    # bare body
    return wrap(letter, truth, expl)


def deepen_thin_lookup(body: str, letter_idx: int, truth: bool) -> str | None:
    """Expand ultra-short overview-recovered lookups into a short 13.18 check."""
    body = body.strip()
    if "$$" in body:
        return None
    if len(body) >= 220:
        return None
    # Patterns: recovered X as Y. The claim is ...
    m = re.match(
        r"The overview recovered \$(.+?)\$ as (.+?)\.\s*(.*)$",
        body,
        re.S,
    )
    if not m:
        # Invoice printed / similar one-liners
        m2 = re.match(
            r"(Invoice .+? is printed at .+?\.)\s*The claim is (.+?),?\s*so the statement is (True|False)\.?$",
            body,
            re.I | re.S,
        )
        if m2:
            opener = LOOKUP_OPENERS[letter_idx % len(LOOKUP_OPENERS)]
            printed = m2.group(1)
            claim = m2.group(2).rstrip(".")
            verd = "True" if truth else "False"
            return (
                f"{opener}\n\n"
                f"{printed}\n\n"
                f"The claim names {claim}. "
                f"Comparing those figures shows the statement is {verd}."
            )
        return None

    expr = m.group(1).strip()
    role = m.group(2).strip().rstrip(".")
    rest = m.group(3).strip()
    opener = LOOKUP_OPENERS[letter_idx % len(LOOKUP_OPENERS)]
    verd = "True" if truth else "False"

    # Extract claim figure if present
    claim_m = re.search(
        r"The claim is (?:that same figure|(.+?)),?\s*so the statement is",
        rest,
        re.I,
    )
    if claim_m and claim_m.group(1):
        claim_bit = claim_m.group(1).strip().rstrip(".")
        compare = (
            f"The claim names {claim_bit}. "
            f"Against the recovered value, the statement is {verd}."
        )
    else:
        compare = (
            f"That is exactly the figure named in the claim, so the statement is {verd}."
            if truth
            else f"That recovered value does not match the claim, so the statement is {verd}."
        )

    return (
        f"{opener} Here that quantity is {role}.\n\n"
        f"$$\n{expr}\n$$\n\n"
        f"{compare}"
    )


def ensure_closer(expl: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    if re.search(r"so the statement is\s+(True|False)", expl, re.I):
        # normalize capitalization of final So
        expl = re.sub(
            r"([.!?])\s*so the statement is\s+(True|False)\.?\s*$",
            rf"\1\n\nSo the statement is \2.",
            expl,
            count=1,
            flags=re.I,
        )
        expl = re.sub(
            r"so the statement is\s+(True|False)\.?\s*$",
            rf"So the statement is \1.",
            expl,
            count=1,
            flags=re.I,
        )
        return expl.rstrip() + ("\n" if expl.endswith("\n") else "")
    return expl.rstrip() + f"\n\nSo the statement is {verd}."


def rewrite_core_ts(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    parts = re.split(r"(?=case_id:\s*`)", text)
    out = [parts[0]]
    letter_lens: list[int] = []
    ov_lens: list[int] = []
    n = 0

    for part in parts[1:]:
        mak = re.search(r"answer_key:\s*\[(.*?)\]", part, re.S)
        if not mak:
            out.append(part)
            continue
        aks = [
            tok.strip() == "true"
            for tok in mak.group(1).split(",")
            if tok.strip() in ("true", "false")
        ]
        if len(aks) != 5:
            out.append(part)
            continue

        mex = re.search(
            r"(tactical_explanations:\s*\[)(.*?)(\]\s*,\s*\n\s*(?:difficulty|sort_order|solution_overview|graph))",
            part,
            re.S,
        )
        if not mex:
            out.append(part)
            continue

        inner = mex.group(2)
        expls = re.findall(r"`((?:\\`|[^`])*)`", inner)
        if len(expls) != 5:
            out.append(part)
            continue

        new_expls = []
        for i, (expl, truth) in enumerate(zip(expls, aks)):
            letter = "ABCDE"[i]
            converted = convert_header(expl, letter, truth)
            # split header/body
            hm = re.match(
                r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n([\s\S]*)$",
                converted.strip(),
            )
            if hm:
                hdr, body = hm.group(1), hm.group(2)
                deepened = deepen_thin_lookup(body, i, truth)
                if deepened:
                    body = deepened
                body = ensure_closer(
                    body
                    if "so the statement is" in body.lower()
                    else body,
                    truth,
                )
                # avoid double closers
                body = re.sub(
                    r"(So the statement is (?:True|False)\.)\s*So the statement is (?:True|False)\.\s*$",
                    r"\1",
                    body,
                )
                new_e = f"{hdr}\n\n{body.strip()}"
            else:
                new_e = ensure_closer(converted, truth)
            new_expls.append(new_e)
            letter_lens.append(len(new_e))

        # rebuild inner array
        new_inner = ",\n".join(f"      `{e}`" for e in new_expls) + ",\n    "
        part = part[: mex.start(2)] + "\n" + new_inner + part[mex.end(2) :]

        mov = re.search(r"solution_overview:\s*`((?:\\`|[^`])*)`", part)
        if mov:
            ov_lens.append(len(mov.group(1)))
        n += 1
        out.append(part)

    path.write_text("".join(out), encoding="utf-8")
    return {
        "n": n,
        "med_letter": statistics.median(letter_lens) if letter_lens else 0,
        "med_ov": statistics.median(ov_lens) if ov_lens else 0,
        "min_letter": min(letter_lens) if letter_lens else 0,
        "thin180": sum(1 for x in letter_lens if x < 180),
    }


def polish_mixed_exam_letter(task: dict, idx: int) -> str:
    """Light polish for already-deep mixed exam letters (vary openers)."""
    letter = "ABCDE"[idx]
    truth = bool(task["answer_key"][idx])
    expl = task["tactical_explanations"][idx]
    expl = convert_header(expl, letter, truth)
    expl = ensure_closer(expl, truth)

    # Ch5 mixed: soften identical "Let $x$ represent ... Translate both" openers
    openers = [
        "Introduce the two unknowns and write both stem conditions as equations.",
        "Translate each independent observation into a linear equation before solving.",
        "Name the two unknowns, then record the two constraints from the stem.",
        "Build the $2\\times 2$ system from the stem, then solve for the claimed unknown.",
        "Set up both equations from the wording, then recover the value the claim names.",
    ]
    body_m = re.match(
        r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n([\s\S]*)$",
        expl.strip(),
    )
    if not body_m:
        return expl
    hdr, body = body_m.group(1), body_m.group(2)
    if body.startswith("Let $x$ represent") and "Translate both independent conditions" in body:
        body = re.sub(
            r"^Let \$x\$ represent .+? Translate both independent conditions before testing the claim\.\s*",
            openers[idx] + "\n\n",
            body,
            count=1,
            flags=re.S,
        )
    return f"{hdr}\n\n{body.strip()}"


def polish_mixed_overview(task: dict, chapter: str) -> str:
    ov = (task.get("solution_overview") or "").strip()
    # Already a topic list — expand into a short tutoring frame without solving each letter.
    if ov.startswith("Topics:"):
        lines = [ln.strip() for ln in ov.splitlines() if ln.strip()]
        topics = lines[0]
        bullets = [ln for ln in lines[1:] if re.match(r"^[A-E]\.", ln)]
        if chapter == "ch3":
            head = (
                "Each letter is an independent financial claim. "
                "Name the matching formula, substitute the stem numbers, "
                "and compare with the stated figure."
            )
        else:
            head = (
                "Each letter is an independent two-unknown linear system. "
                "Translate the stem once for that letter, solve, and test the claim."
            )
        body = head + "\n\n" + topics
        if bullets:
            body += "\n\n" + "\n".join(bullets)
        return body
    return ov


def rewrite_exam(path: Path, stubs: dict[str, tuple[str, list[str]]], chapter: str) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    letter_lens: list[int] = []
    ov_lens: list[int] = []

    for t in tasks:
        cid = t["case_id"]
        if cid in stubs:
            ov, bodies = stubs[cid]
            if len(bodies) != 5:
                raise SystemExit(f"{cid} needs 5 bodies")
            t["solution_overview"] = ov.strip()
            t["tactical_explanations"] = [
                wrap(letter, bool(ans), body)
                for letter, ans, body in zip("ABCDE", t["answer_key"], bodies)
            ]
        else:
            t["solution_overview"] = polish_mixed_overview(t, chapter)
            t["tactical_explanations"] = [
                polish_mixed_exam_letter(t, i) for i in range(5)
            ]

        ov_lens.append(len(t["solution_overview"]))
        for e in t["tactical_explanations"]:
            letter_lens.append(len(e))
            if "So the statement is" not in e and "so the statement is" not in e.lower():
                raise SystemExit(f"missing closer in {cid}")
            if "${" in e:
                raise SystemExit(f"forbidden ${{ in {cid}")

    data["explanation_style"] = (
        "MATH 13.18 tutoring: shared solution_overview once when letters share a model; "
        "each claim as **A.** → True/False with formula → substitute → compare → "
        "'So the statement is True/False.'"
    )
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return {
        "n": len(tasks),
        "med_letter": statistics.median(letter_lens),
        "med_ov": statistics.median(ov_lens),
        "min_letter": min(letter_lens),
        "thin180": sum(1 for x in letter_lens if x < 180),
    }


def main() -> None:
    print("Rewriting Ch3 core…")
    r3 = rewrite_core_ts(CH3_CORE)
    print("  ", r3)
    print("Rewriting Ch5 core…")
    r5 = rewrite_core_ts(CH5_CORE)
    print("  ", r5)
    print("Rewriting Ch3 exam…")
    e3 = rewrite_exam(CH3_EXAM, CH3_STUBS, "ch3")
    print("  ", e3)
    print("Rewriting Ch5 exam…")
    e5 = rewrite_exam(CH5_EXAM, CH5_STUBS, "ch5")
    print("  ", e5)


if __name__ == "__main__":
    main()
