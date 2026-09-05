#!/usr/bin/env python3
"""Deepen Ch8 power-functions explanations to MATH 13.18 step style.

Starts from a clean bank (no corrupted recovered-$$ lines). For each letter:
  - keep real math already present
  - split short chained $$a=b=c$$ displays
  - normalize closer to \"So the statement is True/False.\"
  - add a varied opener when missing
  - never inject overview \"recovered A=...$$\" scars
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TS_PATH = ROOT / "src/data/math-ch8-power-functions.ts"

OPENERS = [
    "Name the recovered power rule, then substitute the claimed input.",
    "Form the ratio so the unknown positive coefficient cancels.",
    "Read the exponent from the overview before comparing growth rates.",
    "Start from the calibrated closed form in the overview.",
    "Keep the stated domain in force while you evaluate the model.",
    "Separate the coefficient from the power before arithmetic.",
    "Use the overview’s recovered constants; do not rebuild the calibration.",
    "Compare the claim against the scale factor that survives after cancellation.",
]


def escape_tpl(s: str) -> str:
    return s.replace("\\`", "`").replace("`", "\\`").replace("${", "\\${")


def extract_bt_array(src: str, field: str) -> list[str]:
    m = re.search(rf"{field}:\s*\[", src)
    if not m:
        return []
    i = m.end()
    items: list[str] = []
    while i < len(src):
        while i < len(src) and src[i] in " \n\t,":
            i += 1
        if i < len(src) and src[i] == "]":
            break
        if i >= len(src) or src[i] != "`":
            break
        i += 1
        buf: list[str] = []
        while i < len(src):
            if src[i] == "\\" and i + 1 < len(src):
                buf.append(src[i : i + 2])
                i += 2
                continue
            if src[i] == "`":
                break
            buf.append(src[i])
            i += 1
        items.append("".join(buf))
        i += 1
    return items


def format_expl_array(expls: list[str]) -> str:
    parts = ["      `" + escape_tpl(e) + "`" for e in expls]
    return "tactical_explanations: [\n" + ",\n".join(parts) + ",\n    ]"


def strip_header_closer(text: str) -> tuple[str, str, str]:
    m = re.match(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\s*", text.strip())
    if not m:
        return "", "", text.strip()
    letter, verd = m.group(1), m.group(2)
    body = text.strip()[m.end() :].strip()
    body = re.sub(
        r"\n*(Comparing with the claim, )?so the statement is\s+(True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    )
    body = re.sub(
        r",\s*so the statement is\s+(True|False)\.?\s*$",
        ".",
        body,
        flags=re.I,
    )
    body = re.sub(
        r"\n*(The claim is|The statement is|Thus the statement is|Hence the statement is|"
        r"Therefore the statement is|The mathematical result agrees with the claim, so the statement is)\s+(True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    )
    return letter, verd, body.strip().rstrip(".")


def split_chained_displays(body: str) -> str:
    def split_one(m: re.Match) -> str:
        inner = m.group(1).strip()
        if "\n" in inner or "\\begin" in inner:
            return m.group(0)
        if inner.count("=") < 2:
            return m.group(0)
        parts = [p.strip() for p in inner.split("=")]
        if any(len(p) > 48 for p in parts):
            return m.group(0)
        # For leading "=" continuations like $$=5\cdot8=40$$, keep cumulative lhs-less style
        if parts[0] == "":
            blocks = [f"$$={parts[1]}$$"]
            for rhs in parts[2:]:
                blocks.append(f"$$={rhs}$$")
            return "\n\n".join(blocks)
        lhs = parts[0]
        blocks = [f"$${lhs}={parts[1]}$$"]
        for rhs in parts[2:]:
            blocks.append(f"$${lhs}={rhs}$$")
        return "\n\n".join(blocks)

    return re.sub(r"\$\$([^$]+?)\$\$", split_one, body, flags=re.S)


def scrub_text_in_displays(body: str) -> str:
    def repl(m: re.Match) -> str:
        inner = m.group(1)
        if "\\text{" not in inner:
            return m.group(0)
        cleaned = re.sub(r"\\text\{[^}]*\}", "", inner)
        cleaned = re.sub(r"\s{2,}", " ", cleaned).strip()
        return f"$${cleaned}$$"

    return re.sub(r"\$\$([^$]+?)\$\$", repl, body, flags=re.S)


def has_opener(body: str) -> bool:
    first = body.split("\n\n", 1)[0].strip()
    return any(first.startswith(o.split(",")[0]) for o in OPENERS) or first.startswith(
        "The overview"
    )


def promote_inline_equations(body: str) -> str:
    """Lift short standalone inline equalities into display blocks when few displays exist."""
    if len(re.findall(r"\$\$", body)) // 2 >= 2:
        return body

    def repl(m: re.Match) -> str:
        inner = m.group(1).strip()
        if "=" not in inner or len(inner) > 60:
            return m.group(0)
        if "\\text" in inner:
            return m.group(0)
        # Only promote when the inline math is essentially its own clause
        return f"\n\n$${inner}$$\n\n"

    parts = re.split(r"(\$\$[^$]*\$\$)", body)
    out = []
    for part in parts:
        if part.startswith("$$"):
            out.append(part)
            continue
        # Promote only $...$ that sit between punctuation / line edges, not mid-sentence nouns
        def maybe(m: re.Match) -> str:
            start, end = m.start(), m.end()
            before = part[max(0, start - 1) : start]
            after = part[end : end + 1]
            if before and before not in " \n":
                return m.group(0)
            if after and after not in " \n.,;:":
                return m.group(0)
            # Avoid promoting tiny recovered tags mid sentence like recovered $A=8$ from...
            # Allow when followed by . or newline or end
            if after in ".," or after == "" or after == "\n":
                return repl(m)
            return m.group(0)

        out.append(re.sub(r"(?<!\$)\$([^$]{3,60})\$(?!\$)", maybe, part))
    body2 = re.sub(r"\n{3,}", "\n\n", "".join(out)).strip()
    # Repair "word \n\n$$...\n\n . more" → "word\n\n$$...\$$\n\nMore"
    body2 = re.sub(r"\$\$\s*\n\n\s*\.\s*", "$$\n\n", body2)
    body2 = re.sub(r"\s+\n\n\$\$", "\n\n$$", body2)
    body2 = re.sub(r",\s*$", ".", body2)
    return body2


def tidy_body(body: str) -> str:
    body = re.sub(r"\$\$\s*\n\n\s*\.", "$$.\n\n", body)
    body = re.sub(r"\.\s*\n\n\s*\.", ".", body)
    body = re.sub(r",\s*$", ".", body)
    # Fix "recovered \n\n$$x=8$$\n\n. The claim" leftovers
    body = re.sub(
        r"(recovered[^\n]*?)\s*\$\$([^$]+)\$\$\s*\.\s*",
        lambda m: f"{m.group(1).rstrip()} ${m.group(2).strip()}$. ",
        body,
        flags=re.I,
    )
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return body


def deepen_letter(text: str, idx: int) -> str:
    letter, verd, body = strip_header_closer(text)
    if not letter:
        return text

    body = re.sub(
        r"(?m)^The overview already recovered[^\n]*\$\$.*\n?",
        "",
        body,
    )
    body = re.sub(
        r"\n*Compare that figure with the threshold or value named in the claim\.?\n*",
        "\n\n",
        body,
        flags=re.I,
    )
    body = scrub_text_in_displays(body)
    body = promote_inline_equations(body)
    body = split_chained_displays(body)
    body = tidy_body(body)

    if not has_opener(body):
        body = f"{OPENERS[idx % len(OPENERS)]}\n\n{body}"

    low_tail = body.lower()[-140:]
    if not any(
        k in low_tail
        for k in ("claim", "match", "agree", "disagree", "equals", "equal ", "threshold", "we have")
    ):
        if verd == "True":
            body += "\n\nThe computed figure agrees with the claim."
        else:
            body += "\n\nThe computed figure disagrees with the claim."

    if body.count("$$") % 2:
        body = re.sub(r"\$\$\s*\.?\s*$", "", body).rstrip()
        if body.count("$$") % 2:
            pos = body.rfind("$$")
            if pos >= 0:
                body = body[:pos] + body[pos + 2 :]

    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    body = re.sub(r",\s*$", ".", body)
    return f"**{letter}.** → {verd}\n\n{body}\n\nSo the statement is {verd}."


def scrub_overview(ov: str) -> str:
    ov = ov.strip()
    ov = re.sub(r"\\text\{[^}]*\}", "", ov)
    # remove mechanical tip duplication
    tip = "Levels keep the scale factor"
    if ov.count(tip) > 1:
        parts = ov.split(tip)
        ov = parts[0] + tip + parts[-1]
    return re.sub(r"\n{3,}", "\n\n", ov).strip()


def main() -> None:
    text = TS_PATH.read_text(encoding="utf-8")
    chunks = re.split(r"(?=id: `math-8-\d+`)", text)
    out = [chunks[0]]
    before: list[int] = []
    after: list[int] = []
    n = 0

    for ch in chunks[1:]:
        expls = extract_bt_array(ch, "tactical_explanations")
        if len(expls) != 5:
            out.append(ch)
            continue
        before.extend(len(e) for e in expls)
        new_expls = [deepen_letter(e, i) for i, e in enumerate(expls)]
        after.extend(len(e) for e in new_expls)

        te_m = re.search(r"tactical_explanations:\s*\[[\s\S]*?\n\s*\],", ch)
        if not te_m:
            out.append(ch)
            continue
        ch2 = ch[: te_m.start()] + format_expl_array(new_expls) + "," + ch[te_m.end() :]

        ov_m = re.search(r"solution_overview: `((?:\\.|[^`])*)`", ch2)
        if ov_m:
            ov = scrub_overview(ov_m.group(1).replace("\\n", "\n") if False else ov_m.group(1))
            # overview is stored with literal \n escapes already as two-char in some banks;
            # keep as-is content from capture (raw template body)
            ov_raw = ov_m.group(1)
            ov_clean = scrub_overview(ov_raw.replace("\\n", "\n")).replace("\n", "\\n")
            # Actually template literals contain real newlines, not \n escapes.
            ov_clean = scrub_overview(ov_raw)
            ch2 = (
                ch2[: ov_m.start()]
                + "solution_overview: `"
                + escape_tpl(ov_clean)
                + "`"
                + ch2[ov_m.end() :]
            )

        out.append(ch2)
        n += 1

    TS_PATH.write_text("".join(out), encoding="utf-8")

    def med(xs: list[int]) -> int:
        s = sorted(xs)
        return s[len(s) // 2]

    # validate
    odd = sum(1 for e in after if False)
    text2 = "".join(out)
    chunks2 = re.split(r"(?=id: `math-8-\d+`)", text2)
    odd = 0
    scars = 0
    for ch in chunks2[1:]:
        m = re.search(r"tactical_explanations: \[([\s\S]*?)\n    \],", ch)
        if not m:
            continue
        for e in re.findall(r"`((?:\\.|[^`])*)`", m.group(1)):
            u = e.replace("\\n", "\n")
            if u.count("$$") % 2:
                odd += 1
            if re.search(r"recovered[^\n]*\$\$", u):
                scars += 1

    print(
        f"Deepened {n} core tasks. before median={med(before)} under250={sum(1 for x in before if x<250)}; "
        f"after median={med(after)} under250={sum(1 for x in after if x<250)} "
        f"min={min(after)} max={max(after)} odd$$={odd} scars={scars}"
    )


if __name__ == "__main__":
    main()
