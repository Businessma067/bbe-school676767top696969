# -*- coding: utf-8 -*-
"""Expand Ch5 A–E explanation bodies without re-adding tip spam."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
OUT = ROOT / "textbook" / "output"
OV_PATH = OUT / "ch5_expl_overrides.json"
RAW = json.loads((OUT / "linear_eq_60_raw.json").read_text(encoding="utf-8"))
BY = {t["num"]: t for t in RAW}

TIP_RE = re.compile(
    r"\n\s*\*\*(Watch|Why it fails)\.\*\*\s*(.+?)\s*$",
    flags=re.S,
)


def flatten(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").strip())


def mathify(text: str) -> str:
    """Light KaTeX wrapping for algebra fragments; preserve money."""
    money: dict[str, str] = {}

    def keep(m: re.Match) -> str:
        k = f"§M{len(money)}§"
        money[k] = m.group(0)
        return k

    work = re.sub(r"\$\d{1,3}(?:,\d{3})*(?:\.\d+)?", keep, text)
    work = re.sub(
        r"(?<![A-Za-z0-9$§])("
        r"[+\-]?(?:\d*\.?\d*)?[a-zA-Z]"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r"\s*=\s*[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r")(?![A-Za-z0-9$§])",
        r"$\1$",
        work,
    )
    for k, v in money.items():
        work = work.replace(k, v)
    return work


def split_header_body(expl: str) -> tuple[str, str, str]:
    """Return (header_line, body_without_tip, tip_block_or_empty)."""
    tip_m = TIP_RE.search(expl)
    tip = ""
    core = expl
    if tip_m:
        tip = tip_m.group(0).strip()
        core = expl[: tip_m.start()].rstrip()
    lines = core.split("\n", 1)
    header = lines[0].strip()
    body = lines[1].strip() if len(lines) > 1 else ""
    return header, body, tip


def short_final(final: str) -> str:
    parts = [p.strip() for p in (final or "").split("|") if p.strip()]
    # Keep the unknown values; drop long audit clauses if many parts
    if len(parts) >= 2:
        return " · ".join(parts[:2])
    return final.strip()


def contains_loose(hay: str, needle: str) -> bool:
    if not needle or len(needle) < 20:
        return False
    a = re.sub(r"[^a-z0-9.%]+", "", hay.lower())
    b = re.sub(r"[^a-z0-9.%]+", "", needle.lower())
    return b[:60] in a if len(b) >= 40 else b in a


def expand_body(
    stmt: str,
    verdict: bool,
    body: str,
    pdf_reason: str,
    final: str,
) -> str:
    pdf = mathify(flatten(pdf_reason))
    body = body.strip()
    # Drop weak one-liners like "Here is the check."
    body = re.sub(
        r"^(Here is the check\.|Here is where the claim breaks\.)\s*",
        "",
        body,
        flags=re.I,
    ).strip()

    paras: list[str] = []

    lead = (
        "This claim holds under the solved system."
        if verdict
        else "This claim does not hold once the system is solved correctly."
    )
    vals = short_final(final)
    if vals:
        lead += f" The recovered values are: **{vals}**."
    paras.append(lead)

    if body:
        # Keep existing narrative if it already has substance
        paras.append(body)

    if pdf and not contains_loose(body, pdf):
        label = "Direct check" if verdict else "Where it breaks"
        paras.append(f"**{label}.** {pdf}")

    if not verdict:
        paras.append(
            "Compare that recomputed figure with the wording of the statement "
            "(quantity, direction, and any threshold such as *more than* / *less than*). "
            "The mismatch is why the claim is false."
        )
    else:
        # Only add verification note if body was short
        if len(body) < 160:
            paras.append(
                "Substituting the solved unknowns into the scenario described by the "
                "statement reproduces the claimed relationship, so the statement is true."
            )

    # De-dupe near-identical consecutive paragraphs
    out: list[str] = []
    for p in paras:
        p = re.sub(r"\s{2,}", " ", p).strip()
        if not p:
            continue
        if out and (p[:80].lower() in out[-1].lower() or out[-1][:80].lower() in p.lower()):
            # keep the longer one
            if len(p) > len(out[-1]):
                out[-1] = p
            continue
        out.append(p)
    return "\n\n".join(out)


def expand_from_46_blob(blob: str) -> str:
    """Rebuild rich body from the structured Verdict/Model/Solve agents wrote."""
    text = blob.replace("\r\n", "\n").strip()
    going = re.search(
        r"What's going on:\s*(.+?)(?:\nModel:|\nSolve:|\nAnswer:|\nTip:|\Z)",
        text,
        flags=re.I | re.S,
    )
    model = re.search(
        r"Model:\s*(.+?)(?:\nSolve:|\nAnswer:|\nTip:|\Z)",
        text,
        flags=re.I | re.S,
    )
    solve = re.search(
        r"Solve:\s*(.+?)(?:\nAnswer:|\nTip:|\Z)",
        text,
        flags=re.I | re.S,
    )
    bits = []
    if going:
        bits.append(flatten(going.group(1)))
    if model:
        bits.append("**Setup.** " + mathify(flatten(model.group(1))))
    if solve:
        bits.append("**Computation.** " + mathify(flatten(solve.group(1))))
    return "\n\n".join(bits)


def main() -> None:
    data = json.loads(OV_PATH.read_text(encoding="utf-8"))
    # Optional: richer source for 46–60 structured blobs
    src46 = {}
    p46 = OUT / "ch5_expl_override_46_60.json"
    if p46.exists():
        src46 = json.loads(p46.read_text(encoding="utf-8"))

    src31 = {}
    p31 = OUT / "ch5_expl_override_31_45.json"
    if p31.exists():
        src31 = json.loads(p31.read_text(encoding="utf-8"))

    for key, entry in data.items():
        num = int(key)
        task = BY[num]
        letters = "ABCDE"
        new_expls = []
        for i, expl in enumerate(entry["tactical_explanations"]):
            header, body, tip = split_header_body(expl)
            verdict = "TRUE" in header.split("—")[-1]

            # Prefer full structured body from 46–60 / 31–45 sources when available
            if str(num) in src46 and letters[i] in src46[str(num)]:
                rich = expand_from_46_blob(src46[str(num)][letters[i]])
                if len(rich) > len(body):
                    body = rich
            elif str(num) in src31:
                cell = (src31[str(num)].get("tactical_explanations") or {}).get(letters[i])
                if isinstance(cell, dict):
                    reasoning = flatten(str(cell.get("reasoning") or ""))
                    # Optional: include a short model line for context
                    model = flatten(str(cell.get("model") or "")).split("\n")
                    model_line = model[0] if model else ""
                    bits = [reasoning]
                    if model_line and "=" in model_line and model_line not in reasoning:
                        bits.append(f"**Related model relation.** ${mathify(model_line).strip('$')}$")
                    body = "\n\n".join(bits)

            expanded = expand_body(
                task["statements"][i],
                verdict,
                body,
                task["explanations"][i],
                task.get("final_answer") or "",
            )
            block = f"{header}\n\n{expanded}"
            if tip:
                # tip already starts with **Watch.** / **Why it fails.**
                block += "\n\n" + tip
            new_expls.append(block.strip())
        entry["tactical_explanations"] = new_expls

    OV_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")

    lens = [len(e) for v in data.values() for e in v["tactical_explanations"]]
    print(
        "expanded",
        len(lens),
        "mean",
        round(sum(lens) / len(lens)),
        "min",
        min(lens),
        "max",
        max(lens),
        "under300",
        sum(1 for x in lens if x < 300),
    )


if __name__ == "__main__":
    main()
