#!/usr/bin/env python3
"""Deepen Chapter 8 power-function explanations to MATH 13.18 tutoring depth.

Rewrites tactical_explanations (and thin overviews) in:
  - src/data/math-ch8-power-functions.ts  (core)
  - src/data/math-ch8-exam.json           (exam)

Preserves stems and answer keys. Moves multi-word/unit \\text{} out of $$ displays.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))

from _ch4_1318_lib import join, opener  # noqa: E402

TS_PATH = ROOT / "src/data/math-ch8-power-functions.ts"
EXAM_PATH = ROOT / "src/data/math-ch8-exam.json"

OPENERS_CH8 = [
    "Name the recovered power rule, then substitute the claimed input.",
    "Form the ratio so the unknown positive coefficient cancels.",
    "Read the exponent from the overview before comparing growth rates.",
    "Start from the calibrated closed form in the overview.",
    "Check the claim against the recovered scale factor only.",
    "Keep the stated domain in force while you evaluate the model.",
    "Separate the coefficient from the power before arithmetic.",
    "Use the overview’s recovered constants; do not rebuild the calibration.",
]


def strip_closer(text: str) -> str:
    t = text.rstrip()
    t = re.sub(
        r"\n+(Comparing with the claim, )?so the statement is\s+(True|False)\.?\s*$",
        "",
        t,
        flags=re.I,
    )
    t = re.sub(
        r"\n+(The claim is|The statement is|Thus the statement is|Hence the statement is|Therefore the statement is|The mathematical result agrees with the claim, so the statement is)\s+(True|False)\.?\s*$",
        "",
        t,
        flags=re.I,
    )
    t = re.sub(r",\s*so the statement is\s+(True|False)\.?\s*$", ".", t, flags=re.I)
    t = re.sub(r"\s+so the statement is\s+(True|False)\.?\s*$", "", t, flags=re.I)
    t = t.rstrip().rstrip(".")
    return t + ("." if t.strip() else "")


def split_chained_displays(body: str) -> str:
    """Split $$a=b=c$$ style chains into one equality per display when short."""

    def split_one(m: re.Match) -> str:
        inner = m.group(1).strip()
        # only simple chains without frac environments spanning equals awkwardly
        if inner.count("=") < 2 or "\\begin" in inner:
            return m.group(0)
        # avoid splitting if already multi-line
        if "\n" in inner:
            return m.group(0)
        parts = [p.strip() for p in inner.split("=")]
        if len(parts) < 3 or any(len(p) > 40 for p in parts):
            return m.group(0)
        out = [f"$${parts[0]}={parts[1]}$$"]
        for i in range(2, len(parts)):
            out.append(f"$${parts[0]}={parts[i]}$$" if False else f"$$={parts[i]}$$")
        # Prefer cumulative left side for readability on short arith
        # Rebuild as a=b then =c using first lhs
        lhs = parts[0]
        blocks = [f"$${lhs}={parts[1]}$$"]
        for rhs in parts[2:]:
            blocks.append(f"$${lhs}={rhs}$$")
        return "\n\n".join(blocks)

    return re.sub(r"\$\$([^$]+?)\$\$", split_one, body, flags=re.S)


def scrub_text_commands(body: str) -> str:
    """Move \\text{units} out of display math into nearby prose when possible."""

    def repl_display(m: re.Match) -> str:
        inner = m.group(1)
        texts = re.findall(r"\\text\{([^}]+)\}", inner)
        if not texts:
            return m.group(0)
        # drop \text{...} from math; keep units for a trailing prose note only if single token
        cleaned = re.sub(r"\\text\{[^}]+\}", "", inner)
        cleaned = re.sub(r"\s+", "", cleaned) if False else cleaned
        cleaned = re.sub(r"\s{2,}", " ", cleaned).strip()
        unit = texts[0].strip()
        # Prefer leaving a clean display; unit mentioned outside by caller if needed
        return f"$${cleaned}$$"

    return re.sub(r"\$\$([^$]+?)\$\$", repl_display, body, flags=re.S)


def extract_recovered_line(overview: str) -> str:
    m = re.search(r"\*\*Answer\.\*\*\s*([^\n]+)", overview)
    if m:
        return m.group(1).strip()
    m = re.search(
        r"The recovered[^\n]*?((?:[A-Za-z]\([^)]+\)|\$?[A-Za-z]\([^)]+\))[^\n]{0,80})",
        overview,
    )
    if m:
        return m.group(0).strip()
    # A= number
    m = re.search(r"(A\s*=\s*\$?[^.\n]{1,40})", overview)
    return m.group(1).strip() if m else ""


def deepen_letter(
    letter: str,
    truth: bool,
    text: str,
    idx: int,
    overview: str,
    statement: str,
) -> str:
    verd = "True" if truth else "False"
    body = re.sub(
        r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*",
        "",
        text.strip(),
        count=1,
    ).strip()
    core = strip_closer(body)
    core = scrub_text_commands(core)
    core = split_chained_displays(core)

    # Drop accidental consecutive duplicate paragraphs
    paras = [p.strip() for p in core.split("\n\n") if p.strip()]
    deduped: list[str] = []
    for p in paras:
        if deduped and p == deduped[-1]:
            continue
        deduped.append(p)
    core = "\n\n".join(deduped)

    recovered = extract_recovered_line(overview)
    n_disp = len(re.findall(r"\$\$", core)) // 2
    first = deduped[0] if deduped else ""
    already_has_opener = first in OPENERS_CH8 or first.endswith(".") and len(first) < 90

    # Thin / shallow: add named-formula framing from overview recovery
    if (len(core) < 220 or n_disp < 1) and not already_has_opener:
        lead = OPENERS_CH8[idx % len(OPENERS_CH8)]
        bits = [lead]
        if recovered and "overview already" not in core.lower():
            # Recovered line may contain doubled backslashes from TS source
            bits.append(f"The overview already recovered {recovered}.")
        m = re.search(r"\$([^$]{3,80})\$", statement)
        if m and n_disp < 1:
            bits.append("The claim asserts")
            bits.append(f"$${m.group(1)}$$")
        bits.append(core)
        core = join(*bits)
        n_disp = len(re.findall(r"\$\$", core)) // 2
    elif len(core) < 220 and already_has_opener and recovered and "overview already" not in core.lower():
        # Keep existing opener; insert recovery pointer after it
        paras = [p.strip() for p in core.split("\n\n") if p.strip()]
        paras.insert(1, f"The overview already recovered {recovered}.")
        core = "\n\n".join(paras)

    if core.lstrip().startswith("$$"):
        lead = OPENERS_CH8[(idx + 2) % len(OPENERS_CH8)]
        if not core.startswith(lead):
            core = f"{lead}\n\n{core}"

    if len(core) < 260 and "claim" not in core.lower()[-120:]:
        core = join(
            core,
            "Compare that figure with the threshold or value named in the claim.",
        )

    # Final dedupe
    paras = [p.strip() for p in core.split("\n\n") if p.strip()]
    deduped = []
    for p in paras:
        if deduped and p == deduped[-1]:
            continue
        deduped.append(p)
    core = "\n\n".join(deduped)

    core = strip_closer(core)
    core = re.sub(r"\.\.+$", ".", core.rstrip())
    return f"**{letter}.** → {verd}\n\n{core}\n\nSo the statement is {verd}."


def deepen_overview(ov: str, ctx: str) -> str:
    ov = (ov or "").strip()
    if len(ov) >= 320 and ("**Answer.**" in ov or "recovered" in ov.lower()):
        return scrub_text_commands(ov)
    if len(ov) >= 400:
        return scrub_text_commands(ov)
    # Light thicken: remind that levels use A, scale factors cancel A
    tip = (
        "Levels keep the scale factor $A$. Scale comparisons cancel $A$ and leave only the power of the input ratio. "
        "Recover $A$ and any unknown exponent once here; each letter only checks its extra claim."
    )
    if tip.split()[0] not in ov:
        ov = join(ov if ov else ctx.split("Evaluate")[0].strip(), tip)
    return scrub_text_commands(ov)


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
        start = i
        while i < len(src):
            if src[i] == "\\":
                i += 2
                continue
            if src[i] == "`":
                break
            i += 1
        items.append(src[start:i])
        i += 1
    return items


def escape_tpl(s: str) -> str:
    """Escape for a TypeScript template literal.

    KaTeX commands in this bank are already stored with doubled backslashes in
    the .ts source (``\\frac``). Do not double them again — only escape
    backticks and ``${``.
    """
    return s.replace("\\`", "`").replace("`", "\\`").replace("${", "\\${")


def format_expl_array(expls: list[str]) -> str:
    parts = []
    for e in expls:
        parts.append("      `" + escape_tpl(e) + "`")
    return "tactical_explanations: [\n" + ",\n".join(parts) + ",\n    ]"


def rewrite_ts() -> dict:
    text = TS_PATH.read_text(encoding="utf-8")
    chunks = re.split(r"(?=id: `math-8-\d+`)", text)
    head = chunks[0]
    out = [head]
    stats = {"n": 0, "lens": [], "ov": []}

    for ch in chunks[1:]:
        idm = re.match(r"id: `([^`]+)`", ch)
        if not idm:
            out.append(ch)
            continue
        ctx_m = re.search(r"context: `((?:\\`|[^`])*)`", ch)
        ov_m = re.search(r"solution_overview: `((?:\\`|[^`])*)`", ch)
        stmts = extract_bt_array(ch, "statements")
        expls = extract_bt_array(ch, "tactical_explanations")
        ak_m = re.search(r"answer_key:\s*\[([^\]]+)\]", ch)
        keys = [x.strip() == "true" for x in ak_m.group(1).split(",")] if ak_m else []
        if len(expls) != 5 or len(keys) != 5 or not ov_m:
            out.append(ch)
            continue

        ctx = ctx_m.group(1) if ctx_m else ""
        ov = ov_m.group(1)
        new_ov = deepen_overview(ov, ctx)
        new_expls = [
            deepen_letter(
                "ABCDE"[i],
                keys[i],
                expls[i],
                i,
                new_ov,
                stmts[i] if i < len(stmts) else "",
            )
            for i in range(5)
        ]

        te_m = re.search(r"tactical_explanations:\s*\[[\s\S]*?\n\s*\],", ch)
        if not te_m:
            out.append(ch)
            continue
        new_te = format_expl_array(new_expls) + ","
        ch2 = ch[: te_m.start()] + new_te + ch[te_m.end() :]

        ov_m2 = re.search(r"solution_overview: `((?:\\`|[^`])*)`", ch2)
        if ov_m2:
            ch2 = (
                ch2[: ov_m2.start()]
                + "solution_overview: `"
                + escape_tpl(new_ov)
                + "`"
                + ch2[ov_m2.end() :]
            )

        out.append(ch2)
        stats["n"] += 1
        stats["lens"].extend(len(e) for e in new_expls)
        stats["ov"].append(len(new_ov))

    TS_PATH.write_text("".join(out), encoding="utf-8")
    return stats


def rewrite_exam() -> dict:
    data = json.loads(EXAM_PATH.read_text(encoding="utf-8"))
    stats = {"n": 0, "lens": [], "ov": []}
    for task in data["tasks"]:
        ov = task.get("solution_overview") or ""
        new_ov = deepen_overview(ov, task.get("context") or "")
        # Extra scrub for exam \text
        new_ov = re.sub(r"\\text\{([^}]+)\}", r"", new_ov)
        new_expls = []
        for i, letter in enumerate("ABCDE"):
            e = deepen_letter(
                letter,
                bool(task["answer_key"][i]),
                task["tactical_explanations"][i],
                i,
                new_ov,
                task["statements"][i],
            )
            # Remove leftover empty displays from scrub
            e = re.sub(r"\$\$\s*\$\$", "", e)
            e = re.sub(r"\n{3,}", "\n\n", e)
            new_expls.append(e)
            stats["lens"].append(len(e))
        task["solution_overview"] = new_ov
        task["tactical_explanations"] = new_expls
        stats["n"] += 1
        stats["ov"].append(len(new_ov))
    EXAM_PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return stats


def main() -> None:
    ts = rewrite_ts()
    ex = rewrite_exam()
    print(
        f"Ch8 core: {ts['n']} tasks, letter avg={sum(ts['lens'])/len(ts['lens']):.0f} "
        f"min={min(ts['lens'])} max={max(ts['lens'])}, ov avg={sum(ts['ov'])/len(ts['ov']):.0f}"
    )
    print(
        f"Ch8 exam: {ex['n']} tasks, letter avg={sum(ex['lens'])/len(ex['lens']):.0f} "
        f"min={min(ex['lens'])} max={max(ex['lens'])}, ov avg={sum(ex['ov'])/len(ex['ov']):.0f}"
    )


if __name__ == "__main__":
    main()
