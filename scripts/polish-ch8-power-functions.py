#!/usr/bin/env python3
"""Polish Ch8 power-functions tactical explanations toward MATH 13.18 depth.

- Remove duplicated consecutive paragraphs / duplicated openers
- Drop padding filler sentences
- Split short chained $$a=b=c$$ displays into one step per block
- Ensure each letter ends with a plain True/False closer
- Keep TypeScript template literals valid
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TS_PATH = ROOT / "src/data/math-ch8-power-functions.ts"

FILLER = re.compile(
    r"\n*Compare that figure with the threshold or value named in the claim\.?\n*",
    re.I,
)

OPENER_RE = re.compile(
    r"^(Name the recovered power rule, then substitute the claimed input\.|"
    r"Form the ratio so the unknown positive coefficient cancels\.|"
    r"Read the exponent from the overview before comparing growth rates\.|"
    r"Start from the calibrated closed form in the overview\.|"
    r"Check the claim against the recovered scale factor only\.|"
    r"Keep the stated domain in force while you evaluate the model\.|"
    r"Separate the coefficient from the power before arithmetic\.|"
    r"Use the overview(?:’|')s recovered constants; do not rebuild the calibration\.)\s*$"
)


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
        r"\n*(The claim is|The statement is|Thus the statement is|Hence the statement is|"
        r"Therefore the statement is|The mathematical result agrees with the claim, so the statement is|"
        r"Matching these figures to the claim, the statement is|"
        r"Against the claim, the statement is|"
        r"The claim’s comparison is (correct|incorrect), so the statement is)\s+(True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    )
    return letter, verd, body.strip()


def dedupe_paragraphs(body: str) -> str:
    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    out: list[str] = []
    for p in paras:
        if out and out[-1] == p:
            continue
        # drop a second consecutive identical opener-style line even with tiny whitespace diffs
        if out and OPENER_RE.match(out[-1]) and OPENER_RE.match(p) and out[-1] == p:
            continue
        out.append(p)
    return "\n\n".join(out)


def split_chained_displays(body: str) -> str:
    def split_one(m: re.Match) -> str:
        inner = m.group(1).strip()
        if "\n" in inner or "\\begin" in inner:
            return m.group(0)
        # only plain arithmetic / equality chains
        if inner.count("=") < 2:
            return m.group(0)
        parts = [p.strip() for p in inner.split("=")]
        if any(len(p) > 48 for p in parts):
            return m.group(0)
        # Prefer lhs = first, then lhs = next ...
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
        cleaned = re.sub(r"=\s*$", "", cleaned).strip()
        return f"$${cleaned}$$"

    return re.sub(r"\$\$([^$]+?)\$\$", repl, body, flags=re.S)


def deepen_if_thin(body: str, verd: str) -> str:
    """Light deepen: ensure at least one display and an explicit compare sentence."""
    n_disp = len(re.findall(r"\$\$", body)) // 2
    if len(body) >= 260 and n_disp >= 2:
        return body
    # If filler already stripped and still thin, do not invent fake arithmetic.
    # Only add a compare line when missing.
    low = body.lower()
    if "claim" not in low[-160:] and "match" not in low[-160:] and "agree" not in low[-160:]:
        if verd == "True":
            body = body.rstrip() + "\n\nThe computed figure agrees with the claim."
        else:
            body = body.rstrip() + "\n\nThe computed figure disagrees with the claim."
    return body


def polish_letter(text: str) -> str:
    letter, verd, body = strip_header_closer(text)
    if not letter:
        return text
    body = FILLER.sub("\n\n", body)
    body = dedupe_paragraphs(body)
    body = scrub_text_in_displays(body)
    body = split_chained_displays(body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    body = deepen_if_thin(body, verd)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return f"**{letter}.** → {verd}\n\n{body}\n\nSo the statement is {verd}."


def main() -> None:
    text = TS_PATH.read_text(encoding="utf-8")
    chunks = re.split(r"(?=id: `math-8-\d+`)", text)
    out = [chunks[0]]
    lens_before: list[int] = []
    lens_after: list[int] = []
    n = 0

    for ch in chunks[1:]:
        expls = extract_bt_array(ch, "tactical_explanations")
        if len(expls) != 5:
            out.append(ch)
            continue
        lens_before.extend(len(e) for e in expls)
        new_expls = [polish_letter(e) for e in expls]
        lens_after.extend(len(e) for e in new_expls)
        te_m = re.search(r"tactical_explanations:\s*\[[\s\S]*?\n\s*\],", ch)
        if not te_m:
            out.append(ch)
            continue
        ch2 = ch[: te_m.start()] + format_expl_array(new_expls) + "," + ch[te_m.end() :]
        out.append(ch2)
        n += 1

    TS_PATH.write_text("".join(out), encoding="utf-8")

    def med(xs: list[int]) -> int:
        s = sorted(xs)
        return s[len(s) // 2]

    print(
        f"Polished {n} core tasks. "
        f"before median={med(lens_before)} under250={sum(1 for x in lens_before if x<250)}; "
        f"after median={med(lens_after)} under250={sum(1 for x in lens_after if x<250)} "
        f"min={min(lens_after)} max={max(lens_after)}"
    )


if __name__ == "__main__":
    main()
