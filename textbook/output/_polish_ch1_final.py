# -*- coding: utf-8 -*-
"""Strip leftover junk and fix contrappositive typos; restore vertical rules."""
from __future__ import annotations

import importlib.util
import json
import re
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)


def format_rules_column(ctx: str) -> str:
    if not ctx:
        return ctx
    if re.search(r"\n\n(?:\(\d+\)|\d+\.)\s", ctx):
        return ctx
    m = re.search(
        r"^(.*?\b(?:rules?|conditions?|clues?|statements?)\s*:?\s*)(\d+\.\s+.+)$",
        ctx,
        re.I | re.S,
    )
    if m and re.search(r"\d+\.\s+.+\d+\.\s+", m.group(2)):
        lead, rest = m.group(1).rstrip(), m.group(2).strip()
        parts = re.split(r"(?=\d+\.\s+)", rest)
        parts = [p.strip() for p in parts if p.strip()]
        if len(parts) >= 2:
            return lead + "\n\n" + "\n\n".join(parts)
    if re.search(r"\(1\).*\(2\)", ctx) and "\n\n(1)" not in ctx:
        m2 = re.search(r"^(.*?)(\(1\).+)$", ctx, re.S)
        if m2:
            lead, rest = m2.group(1).strip(), m2.group(2).strip()
            parts = re.split(r"(?=\(\d+\))", rest)
            parts = [p.strip() for p in parts if p.strip()]
            last = parts[-1]
            m3 = re.match(r"(\(\d+\)\s+.+\.)\s+([A-Z].{12,})$", last)
            if m3 and not m3.group(2).startswith("("):
                parts[-1] = m3.group(1)
                parts.append(m3.group(2))
            body = "\n\n".join(parts)
            return f"{lead}\n\n{body}" if lead else body
    return ctx


def clean(s: str) -> str:
    if not s:
        return s
    s = s.replace("contrappositives", "contrapositives")
    s = s.replace("contrappositive", "contrapositive")
    s = re.sub(r"\s*🔥\s*SUPER DUPER HARD\s*🔥\s*", " ", s)
    s = re.sub(r"\s*🔥[^🔥\n]*🔥\s*", " ", s)
    # Dedup near-identical consecutive sentences/paragraphs
    paras = [p.strip() for p in s.split("\n\n") if p.strip()]
    out = []
    for p in paras:
        if out and out[-1][:80] == p[:80]:
            continue
        out.append(p)
    s = "\n\n".join(out)
    s = re.sub(r"\n{3,}", "\n\n", s)
    s = re.sub(r"[ \t]{2,}", " ", s)
    return s.strip()


def rebuild_overview(t: dict) -> str:
    """Keep situation + model; restore vertical rules in the situation half."""
    ov = t["solution_overview"]
    # Split situation (context-like) from model blurb
    ctx = format_rules_column(t["context"])
    # Reuse model paragraphs after first blank-line block that isn't just context
    # Safer: rebuild from context + existing model after first paragraph group
    parts = [p for p in ov.split("\n\n") if p.strip()]
    # Find where model starts: first para matching shared-engine / shared objects / seven people
    model_idx = None
    for i, p in enumerate(parts):
        if p.startswith("The numbered rules") or p.startswith("The shared objects") or p.startswith(
            "Work from the given"
        ) or p.startswith("Fix the truth") or p.startswith("Read the quantified") or p.startswith(
            "The seven people"
        ):
            model_idx = i
            break
    if model_idx is None:
        # fallback: context + cleaned overview without answer
        return clean(ctx + "\n\n" + ov)
    model = "\n\n".join(parts[model_idx:])
    return clean(ctx + "\n\n" + model)


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    for t in tasks:
        t["context"] = clean(format_rules_column(t["context"]))
        t["statements"] = [clean(s) for s in t["statements"]]
        t["tactical_explanations"] = [clean(e) for e in t["tactical_explanations"]]
        t["solution_overview"] = rebuild_overview(t)
    build.write_ts(tasks)
    DUMP.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
    print("polished", len(tasks))


if __name__ == "__main__":
    main()
