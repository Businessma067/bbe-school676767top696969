#!/usr/bin/env python3
"""Pass 2: deepen remaining thin Ch3/Ch5 letters; dedupe formula intros."""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FILES = {
    "fin_core": ROOT / "src/data/math-ch11-financial.ts",
    "sys_core": ROOT / "src/data/math-ch5-linear-equations.ts",
    "fin_exam": ROOT / "src/data/math-ch3-exam.json",
    "sys_exam": ROOT / "src/data/math-ch5-exam.json",
}

TARGET = 360
HDR_RE = re.compile(r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n([\s\S]*)$")
CLOSER_RE = re.compile(r"\n*\s*So the statement is (?:True|False)\.?\s*$", re.I)


def strip_closer(body: str) -> str:
    return CLOSER_RE.sub("", body.strip()).rstrip()


def fix_closer(body: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    body = strip_closer(body)
    if not body.endswith((".", "!", "?")):
        body += "."
    return body + f"\n\nSo the statement is {verd}."


def dedupe_formula_leads(body: str) -> str:
    """Remove duplicated EAR/FV lead sentences after a general-formula prepend."""
    # Pattern: general formula block, then "Substitute...", then a sentence that
    # again says "The effective annual rate compounds the recovered..."
    body = re.sub(
        r"(Substitute the recovered periodic rate and compounding count:\n\n)"
        r"The effective annual rate compounds the recovered [^\n]+:\n\n",
        r"\1",
        body,
    )
    body = re.sub(
        r"(Substitute the recovered periodic rate and compounding count:\n\n)"
        r"The gap is the effective annual rate minus the nominal quote\.[^\n]*\n\n",
        r"\1The percentage-point gap is that effective rate minus the nominal quote.\n\n",
        body,
    )
    # Duplicate general EAR formula blocks
    body = re.sub(
        r"(The effective annual rate compounds the periodic rate across every compounding date in one year:\n\n"
        r"\$\$\nR = \(1\+i\)\^\{n\} - 1\n\$\$\n\n"
        r"Substitute the recovered[^\n]*:\n\n)"
        r"The effective annual rate compounds the periodic rate across every compounding date in one year:\n\n"
        r"\$\$\nR = \(1\+i\)\^\{n\} - 1\n\$\$\n\n"
        r"Substitute the recovered[^\n]*:\n\n",
        r"\1",
        body,
    )
    return body


def deepen_thin(body: str, truth: bool, kind: str) -> str:
    b = strip_closer(body)
    b = dedupe_formula_leads(b)
    if len(b) >= TARGET - 40:  # already near target before closer
        return fix_closer(b, truth)

    # --- printed / overview priced totals ---
    m = re.match(
        r"(?:The (?:Saturday|Sunday|overview)[^\n]*?(?:printed|priced) at .+?\.)\s*(.*)$",
        b,
        re.S | re.I,
    )
    if m and "$$" not in b:
        head = b[: m.start(1)].strip()
        rest = m.group(1).strip()
        b = (
            "Once unit prices are recovered, the stem total for this session is fixed. "
            "Read that printed total:\n\n"
            f"{head}\n\n"
        )
        cm = re.search(r"The claim names (.+?)[\.\s]", rest)
        if truth:
            b += (
                "The claim names that same total. The printed figure and the claim agree."
                if not cm
                else f"The claim names {cm.group(1).strip()}. The printed figure and the claim agree."
            )
        else:
            b += (
                f"The claim names {cm.group(1).strip()}. The printed figure and the claim do not agree."
                if cm
                else "The printed figure does not match the claim."
            )
        return fix_closer(b, truth)

    # --- overview recovered single value without enough teaching ---
    m = re.match(
        r"The overview (?:already )?recovered \$(.+?)\$ as (.+?)\.\s*(.*)$",
        b,
        re.S,
    )
    if m and len(b) < TARGET:
        expr, role, rest = m.group(1).strip(), m.group(2).strip(), m.group(3).strip()
        parts = [
            f"The shared elimination already recovered {role}. "
            f"State that value in its own display before testing the claim:",
            f"$$\n{expr}\n$$",
        ]
        # keep existing compare math if present
        if "$$" in rest:
            parts.append(rest)
        else:
            cm = re.search(r"The claim (?:writes|is|says|names) (.+?)[\.\n]", rest)
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
                # keep numeric compare if present like 24 != 28
                if rest.strip():
                    parts.append(rest.strip())
                parts.append(
                    "The recovered value and the claim do not agree."
                    if not truth
                    else "The recovered value and the claim agree."
                )
        return fix_closer("\n\n".join(parts), truth)

    # --- overview recovered x= / short compare ---
    m = re.match(
        r"The overview recovered \$(.+?)\$\.\s*The claim (?:says|is) (.+?)\.\s*Comparing,\s*\$\$(.+?)\$\$(.*)$",
        b,
        re.S,
    )
    if m and len(b) < TARGET:
        expr, claim, cmp_, rest = (
            m.group(1).strip(),
            m.group(2).strip(),
            m.group(3).strip(),
            m.group(4).strip(),
        )
        b = (
            "Read the recovered unknown from the shared solve, then compare it with the claim:\n\n"
            f"$$\n{expr}\n$$\n\n"
            f"The claim is {claim}. Comparing those figures:\n\n"
            f"$$\n{cmp_}\n$$\n\n"
            + (
                "The recovered value and the claim agree."
                if truth
                else "The recovered value and the claim do not agree."
            )
        )
        return fix_closer(b, truth)

    # --- short single-display calc (doubling time, growth factor, etc.) ---
    if b.count("$$") == 1 and len(b) < TARGET:
        first = b.split("\n", 1)[0]
        # doubling / ln
        if "ln" in b.lower() or r"\ln" in b:
            if "doubling" in b.lower() or "months" in b.lower() or "years" in b.lower():
                dm = re.search(r"\$\$\s*(.+?)\s*\$\$", b, re.S)
                expr = dm.group(1).strip() if dm else ""
                rest = re.sub(r"\$\$.*?\$\$", "", b, flags=re.S).strip()
                # extract claim line
                claim_line = ""
                for line in rest.split("\n"):
                    if "claim" in line.lower() or "we have" in line.lower():
                        claim_line += line.strip() + " "
                b = (
                    "Solve the growth equation for time by taking logarithms of both sides. "
                    "With periodic rate $i$, the doubling (or target-multiple) time is\n\n"
                    "$$\nt = \\frac{\\ln M}{\\ln(1+i)}\n$$\n\n"
                    "Substitute the recovered rate and target multiple:\n\n"
                    f"$$\n{expr}\n$$\n\n"
                    f"{claim_line.strip()}"
                )
                return fix_closer(b, truth)
        if "e^{" in b or "growth factor" in b.lower():
            dm = re.search(r"\$\$\s*(.+?)\s*\$\$", b, re.S)
            expr = dm.group(1).strip() if dm else ""
            rest = re.sub(r"\$\$.*?\$\$", "", b, flags=re.S).strip()
            b = (
                "Continuous compounding uses the exponential growth factor:\n\n"
                "$$\ne^{rt}\n$$\n\n"
                "Substitute the recovered force of interest and holding time:\n\n"
                f"$$\n{expr}\n$$\n\n"
                f"{rest}"
            )
            return fix_closer(b, truth)

    # --- NPV / accept rule ---
    if "NPV" in b and len(b) < TARGET:
        b = (
            "Net present value is the discounted cash inflow total minus the initial outlay. "
            "The decision rule accepts the project when that difference is positive.\n\n"
            + b
        )
        return fix_closer(b, truth)

    # --- finite-sum / k!=1 conceptual ---
    if "finite-sum" in b.lower() or "well-defined" in b.lower():
        if len(b) < TARGET:
            b = (
                "A geometric series of payments has a closed finite-sum formula only when "
                "the common ratio differs from $1$:\n\n"
                "$$\ns_n = a\\frac{k^{n}-1}{k-1}, \\qquad k \\ne 1\n$$\n\n"
                + b
            )
            return fix_closer(b, truth)

    # --- first-order condition short ---
    if "first-order" in b.lower() or "P'(t" in b:
        if len(b) < TARGET:
            b = (
                "At an interior optimum the derivative of the objective must vanish. "
                "Check the overview's first-order condition against the claimed stationarity figure.\n\n"
                + b
            )
            return fix_closer(b, truth)

    # --- equality check x != y ---
    if re.search(r"Equality would require|rate ratio|still-water|units digit", b, re.I):
        if len(b) < TARGET:
            b = (
                "Use the recovered pair from the overview; this letter only tests the named comparison.\n\n"
                + b
            )
            return fix_closer(b, truth)

    # --- overview reconstructed / overview priced ---
    if re.match(r"The overview (?:reconstructed|priced|recovered)", b) and len(b) < TARGET:
        b = (
            "Read the figure already produced by the shared solve, then compare it with the claim.\n\n"
            + b
        )
        # ensure display if inline money compare
        if "$$" not in b:
            money = re.findall(r"\\\$[\d,]+(?:\.\d+)?|\$[\d,]+", b)
            # skip
        return fix_closer(b, truth)

    # --- PV discount short ---
    if re.search(r"PV_\d\s*=\s*\\frac|discounted one year|Add the three recovered", b):
        if len(b) < TARGET:
            if "Add the three" in b:
                b = (
                    "Present value of a cash stream is the sum of the individually discounted dated amounts "
                    "already recovered in the overview:\n\n"
                    + b
                )
            else:
                b = (
                    "Discount each dated cash flow back to today at the recovered rate. "
                    "For a payment one year out:\n\n"
                    "$$\nPV = \\frac{C}{1+r}\n$$\n\n"
                    + b
                )
            return fix_closer(b, truth)

    # --- half-life ---
    if "half-life" in b.lower() and len(b) < TARGET:
        b = (
            "Continuous half-life solves $\\tfrac{1}{2} = e^{-rt}$ for time:\n\n"
            "$$\nt = \\frac{\\ln 2}{r}\n$$\n\n"
            + re.sub(
                r"^Continuous half-life solves.*?:\n\n",
                "",
                b,
                count=1,
                flags=re.S,
            )
        )
        return fix_closer(b, truth)

    # --- remaining short with displays: add teach lead ---
    if len(b) < 300:
        if kind == "fin":
            lead = (
                "Name the financial quantity in the claim, substitute the recovered inputs, "
                "and compare the result with the stated figure."
            )
        else:
            lead = (
                "Start from the overview's recovered unknowns, apply only this claim's extra check, "
                "and compare with the stated figure."
            )
        if not b.startswith(lead[:20]):
            b = f"{lead}\n\n{b}"

    # ensure compare language
    low = b.lower()
    if not any(
        k in low
        for k in (
            "agree",
            "match",
            "we have",
            "settles",
            "do not",
            "does not",
            "\\ne",
            "both sides",
            "exactly as claimed",
            "well-defined",
            "holds",
            "supports",
        )
    ):
        b = b.rstrip(".") + (
            ".\n\nMatching these figures to the claim settles the verdict."
            if truth
            else ".\n\nThe mismatch with the claim settles the verdict."
        )

    return fix_closer(b, truth)


def process(expl: str, idx: int, truth: bool, kind: str) -> str:
    letter = "ABCDE"[idx]
    verd = "True" if truth else "False"
    hdr = f"**{letter}.** → {verd}"
    m = HDR_RE.match(expl.strip())
    body = m.group(2) if m else expl
    body = dedupe_formula_leads(strip_closer(body))
    if len(expl) < TARGET:
        out = deepen_thin(body, truth, kind)
    else:
        out = fix_closer(body, truth)
        # still dedupe long letters that got duplicate leads
        hm = HDR_RE.match(f"{hdr}\n\n{out}")
        if hm:
            out = fix_closer(dedupe_formula_leads(strip_closer(hm.group(2))), truth)
    out = re.sub(r"\n{3,}", "\n\n", out)
    out = re.sub(
        r"(So the statement is (?:True|False)\.)\s*So the statement is (?:True|False)\.\s*$",
        r"\1",
        out,
    )
    return f"{hdr}\n\n{out.strip()}"


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
        new = [process(e, i, a, kind) for i, (e, a) in enumerate(zip(expls, aks))]
        lens.extend(map(len, new))
        inner = ",\n".join(f"      `{e}`" for e in new) + ",\n    "
        part = part[: mex.start(2)] + "\n" + inner + part[mex.end(2) :]
        out.append(part)
    path.write_text("".join(out), encoding="utf-8")
    return summarize(lens)


def rewrite_exam(path: Path, kind: str) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    lens = []
    for t in data["tasks"]:
        new = [
            process(e, i, bool(a), kind)
            for i, (e, a) in enumerate(zip(t["tactical_explanations"], t["answer_key"]))
        ]
        # Fix mistaken overview lead on full-system mixed letters
        fixed = []
        for e in new:
            if kind == "sys" and re.search(r"\\Delta\s*=", e):
                e = re.sub(
                    r"(^\*\*[A-E]\.\*\*\s*→\s*(?:True|False)\n\n)"
                    r"Start from the overview's recovered unknowns, apply only this claim's extra check, "
                    r"and compare with the stated figure\.\n\n",
                    r"\1Translate the stem into a $2\\times 2$ system, then solve for the claimed unknown.\n\n",
                    e,
                )
            fixed.append(e)
            lens.append(len(e))
        t["tactical_explanations"] = fixed
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return summarize(lens)


def summarize(lens: list[int]) -> dict:
    return {
        "n": len(lens),
        "median": statistics.median(lens),
        "mean": round(statistics.mean(lens), 1),
        "min": min(lens),
        "thin250": sum(1 for x in lens if x < 250),
        "thin300": sum(1 for x in lens if x < 300),
        "thin360": sum(1 for x in lens if x < 360),
    }


def main() -> None:
    print("fin core", rewrite_ts(FILES["fin_core"], "fin"))
    print("sys core", rewrite_ts(FILES["sys_core"], "sys"))
    print("fin exam", rewrite_exam(FILES["fin_exam"], "fin"))
    print("sys exam", rewrite_exam(FILES["sys_exam"], "sys"))


if __name__ == "__main__":
    main()
