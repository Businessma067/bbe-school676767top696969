"""Repair mangled statements/context using raw_excerpt from logic_parsed.json."""
from __future__ import annotations

import json
import re
from pathlib import Path

PARSED = Path(__file__).with_name("logic_parsed.json")
BANKS = Path(__file__).with_name("ch1_logic_banks")


def fix_ops(s: str) -> str:
    s = s.replace("===== PAGE", " PAGE")
    s = re.sub(r"\s*PAGE \d+\s*=====\s*", " ", s)
    # join split operators: "A \n C" with ∪ on next line already flattened in raw
    s = re.sub(r"\s+", " ", s)
    # common scars: "A C = ... ∪" → "A ∪ C = ..."
    s = re.sub(r"\b([A-Z])\s+([A-Z])\s*=\s*([^.]*)\s*∪", r"\1 ∪ \2 = \3", s)
    s = re.sub(r"\b([A-Z])\s+([A-Z])\s*=", r"\1 ∪ \2 =", s)  # risky; only if ∪ orphan elsewhere
    s = re.sub(r"\bis a subset of ([A-Z])\.\s*∅", r"∅ is a subset of \1.", s)
    s = re.sub(r"^is a subset of ([A-Z])\.\s*∅", r"∅ is a subset of \1.", s)
    s = re.sub(r"\b(\d+)\s+([A-Z])\.\s*∈", r"\1 ∈ \2.", s)
    s = re.sub(r"\b([A-Za-z0-9}]+)\s+([A-Z])\.\s*∈", r"\1 ∈ \2.", s)
    s = re.sub(r"\{x\s+Z\s*:", r"{x ∈ Z :", s)
    s = re.sub(r"\{x\s+N\s*:", r"{x ∈ N :", s)
    s = re.sub(r"−3\s+N", r"−3 ∉ N", s)
    return s.strip(" .") + ("." if s.strip() and not s.strip().endswith((".", "?", "!")) else "")


def extract_from_raw(raw: str) -> tuple[str, list[str]]:
    # context: from Let/Context to a)
    ctx = ""
    m = re.search(
        r"(?:Context:\s*)?(Let .+?)(?=\nGeneral Solution:|\na\))",
        raw,
        re.S,
    )
    if m:
        ctx = re.sub(r"\s+", " ", m.group(1)).strip()
        # repair "x  Z" patterns in context
        ctx = ctx.replace("x  Z", "x ∈ Z").replace("x  N", "x ∈ N")
        ctx = re.sub(r"\s+∈\s*$", "", ctx)
        ctx = re.sub(r"\{x ∈ Z :", "{x ∈ Z :", ctx)

    stmts = []
    # Work on raw with operators joined onto previous line when alone
    lines = raw.splitlines()
    joined = []
    ops = {"∪", "∩", "∈", "∉", "⊆", "⊂", "△", "⇒", "⇔", "∨", "∧", "¬"}
    for line in lines:
        t = line.strip()
        if t in ops and joined:
            # attach operator into previous content at the gap marker
            prev = joined[-1]
            # if prev has pattern like "A \n C" already collapsed differently
            joined[-1] = prev + " " + t
        elif t in ops:
            joined.append(t)
        else:
            joined.append(line)
    text = "\n".join(joined)

    for letter in "abcde":
        sm = re.search(
            rf"(?ms)^{letter}\)\s*(.+?)(?=\n(?:[a-e]\)|Explanations:|Answers))",
            text,
        )
        if not sm:
            continue
        st = re.sub(r"\s+", " ", sm.group(1)).strip()
        st = re.sub(r"\s*===== PAGE \d+ =====\s*", " ", st)
        # Fix "A C = {..} ∪" → "A ∪ C = {..}"
        st = re.sub(r"^([A-Z])\s+([A-Z])\s*=\s*(.+?)\s*∪\s*$", r"\1 ∪ \2 = \3", st)
        st = re.sub(r"^([A-Z])\s+([A-Z])\s*=\s*(.+)$", r"\1 ∪ \2 = \3", st)
        st = re.sub(r"^is a subset of ([A-Z])\.\s*∅$", r"∅ is a subset of \1.", st)
        st = re.sub(r"^∅\s*$", "∅", st)
        st = re.sub(r"^(\d+)\s+([A-Z])\.\s*∈$", r"\1 ∈ \2.", st)
        st = re.sub(r"^(\d+)\s+([A-Z])\.\s*∈", r"\1 ∈ \2.", st)
        st = re.sub(r"^([^\s]+)\s+([A-Z])\.\s*∈$", r"\1 ∈ \2.", st)
        # "A C = ..." where ∪ was prepended to joined prev oddly
        st = st.replace(" .", ".")
        stmts.append(st)
    return ctx, stmts


def main() -> None:
    parsed = json.loads(PARSED.read_text(encoding="utf-8"))
    by_num = {t["pdf_num"]: t for t in parsed}
    repaired = 0
    for t in parsed:
        ctx, stmts = extract_from_raw(t["raw_excerpt"])
        if ctx:
            t["context"] = ctx
        if len(stmts) == 5:
            t["statements"] = stmts
            repaired += 1
        # clean explanations
        expl = []
        for e in t.get("explanations_raw") or []:
            e2 = re.sub(r"\s*===== PAGE \d+ =====\s*", " ", e)
            e2 = re.sub(r"\s+", " ", e2).strip()
            expl.append(e2)
        t["explanations_raw"] = expl
    PARSED.write_text(json.dumps(parsed, ensure_ascii=False, indent=2), encoding="utf-8")
    print("repaired statements", repaired, "/", len(parsed))

    # refresh INPUT banks from repaired parsed
    import importlib.util

    spec = importlib.util.spec_from_file_location(
        "classify", Path(__file__).with_name("_classify_logic_banks.py")
    )
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader
    spec.loader.exec_module(mod)
    mod.main()

    # show samples
    for n in (1, 2, 3, 6, 7):
        t = by_num[n]
        print(f"--- {n} ---")
        print("CTX:", t["context"][:120])
        for s in t["statements"]:
            print(" ", s)


if __name__ == "__main__":
    main()
