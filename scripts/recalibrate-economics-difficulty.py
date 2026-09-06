#!/usr/bin/env python3
"""Recalibrate economics case difficulty_level with a content-based rubric.

Produces a consistent 1/5–5/5 scale across chapters 2–6 based on reading load,
trap language (especially absolute wording on FALSE claims), comparative
reasoning, technical density, and chart/table interpretation.

Usage:
  python3 scripts/recalibrate-economics-difficulty.py
"""

from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAIN_FILES = [
    ROOT / "src/data/economics-cases-ch2-subtopics.json",
    ROOT / "src/data/economics-cases-ch3-subtopics.json",
    ROOT / "src/data/economics-cases-ch4-subtopics.json",
    ROOT / "src/data/economics-cases-ch5-subtopics.json",
    ROOT / "src/data/economics-cases-ch6-subtopics.json",
]
PILOT_FILES = [
    ROOT / "src/data/economics-cases-ch4-pilot.json",
]
FILES = MAIN_FILES + PILOT_FILES

TRAP = re.compile(
    r"\b(always|never|only|must|necessarily|solely|exclusively|impossible|"
    r"cannot|inevitable|guaranteed|definitely|in all cases|"
    r"under all circumstances|no matter|regardless|without exception|"
    r"in every case|for all firms|for every|none of|no firm|no business|"
    r"nothing but|under no circumstances)\b",
    re.I,
)
COMPARE = re.compile(
    r"\b(whereas|unlike|rather than|as opposed|compared with|compared to|"
    r"versus|although|even if|even though|despite|in contrast|"
    r"on the other hand|instead of|differ(?:s|ent)? from)\b",
    re.I,
)
TECH = re.compile(
    r"\b(elasticity|marginal|opportunity cost|ceteris paribus|equilibrium|"
    r"oligopol(?:y|istic)|externality|externalities|deadweight|"
    r"consumer surplus|producer surplus|price discrimination|"
    r"perfect competition|monopol(?:y|istic)|gdp|inflation|interest rate|"
    r"discount(?:ed)?|npv|irr|roi|current ratio|liquidity|solvency|"
    r"amorti[sz]ation|depreciation|working capital|cash flow|balance sheet|"
    r"income statement|variable cost|fixed cost|economies of scale|"
    r"diminishing returns|indifference|utility|substitution effect|"
    r"income effect|cross[- ]price|price elasticity|market failure|"
    r"public good|free rider|asymmetric information|adverse selection|"
    r"moral hazard|nash|prisoner.?s dilemma|herfindahl|concentration ratio|"
    r"barrier to entry|sunk cost|accounting profit|economic profit|"
    r"normal profit|break[- ]even|contribution margin|segmentation|"
    r"positioning|psychographic|demographic|operating activities|"
    r"investing activities|financing activities|retained earnings|"
    r"shareholders.? equity|net working capital)\b",
    re.I,
)
NEG = re.compile(
    r"\b(not|never|neither|nor|without|unless|except|cannot|"
    r"does not|do not|is not|are not|no longer)\b",
    re.I,
)
COMPLEX_CLAUSE = re.compile(
    r"\b(if|when|because|since|which|provided that|as long as|unless|whereas)\b|,|;|—",
    re.I,
)
CHART = re.compile(r"\[\[CHART|\[\[TABLE", re.I)

# Exam-bank shape: 10% / 22% / 36% / 22% / 10%
CUTS = [(0.10, "1/5"), (0.32, "2/5"), (0.68, "3/5"), (0.90, "4/5"), (1.01, "5/5")]


def features(c: dict) -> dict:
    stmts = c.get("statements") or []
    expls = c.get("tactical_explanations") or []
    ctx = c.get("context") or ""
    body = " ".join([ctx, *stmts])
    words = len(body.split())
    stmt_lens = [len(s.split()) for s in stmts] or [0]
    avg_stmt = sum(stmt_lens) / len(stmt_lens)
    max_stmt = max(stmt_lens)

    stmt_text = " ".join(stmts)
    traps_stmt = len(TRAP.findall(stmt_text))
    traps_ctx = len(TRAP.findall(ctx))
    comps = len(COMPARE.findall(body))
    tech = len(TECH.findall(body))
    negs = len(NEG.findall(stmt_text))
    false_traps = 0
    false_negs = 0
    stmt_complexity = 0
    for s, ans in zip(stmts, c.get("answer_key") or []):
        stmt_complexity += len(COMPLEX_CLAUSE.findall(s))
        if ans is False:
            false_traps += len(TRAP.findall(s))
            false_negs += len(NEG.findall(s))
    expl_words = len(" ".join(expls).split()) if expls else 0
    long_stmts = sum(1 for n in stmt_lens if n >= 28)
    very_long = sum(1 for n in stmt_lens if n >= 40)
    has_chart = 1 if CHART.search(ctx) else 0
    spread = (max_stmt - min(stmt_lens)) if stmt_lens else 0
    return {
        "words": words,
        "avg_stmt": avg_stmt,
        "max_stmt": max_stmt,
        "traps_stmt": traps_stmt,
        "traps_ctx": traps_ctx,
        "false_traps": false_traps,
        "comps": comps,
        "tech": tech,
        "negs": negs,
        "false_negs": false_negs,
        "stmt_complexity": stmt_complexity,
        "expl_words": expl_words,
        "long_stmts": long_stmts,
        "very_long": very_long,
        "has_chart": has_chart,
        "spread": spread,
    }


def raw_score(f: dict) -> float:
    return (
        0.010 * f["words"]
        + 0.10 * f["avg_stmt"]
        + 0.05 * f["max_stmt"]
        + 0.75 * f["traps_stmt"]
        + 0.15 * f["traps_ctx"]
        + 0.95 * f["false_traps"]
        + 0.55 * f["comps"]
        + 0.22 * f["tech"]
        + 0.12 * f["negs"]
        + 0.20 * f["false_negs"]
        + 0.08 * f["stmt_complexity"]
        + 0.0035 * min(f["expl_words"], 450)
        + 0.50 * f["long_stmts"]
        + 0.65 * f["very_long"]
        + 1.10 * f["has_chart"]
        + 0.03 * f["spread"]
    )


def main() -> None:
    cases_by_file: dict[Path, list] = {}
    all_rows: list[dict] = []
    for path in FILES:
        data = json.loads(path.read_text())
        cases_by_file[path] = data
        for i, c in enumerate(data):
            f = features(c)
            all_rows.append(
                {"path": path, "idx": i, "case": c, "feat": f, "score": raw_score(f)}
            )

    all_rows.sort(key=lambda r: (r["score"], r["case"]["case_id"]))
    n = len(all_rows)
    for rank, r in enumerate(all_rows):
        p = rank / n
        for cut, lab in CUTS:
            if p < cut:
                r["new"] = lab
                break
        else:
            r["new"] = "5/5"

    changed = 0
    for r in all_rows:
        if r["case"]["difficulty_level"] != r["new"]:
            changed += 1
        r["case"]["difficulty_level"] = r["new"]

    for path, data in cases_by_file.items():
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
        print(f"wrote {path.relative_to(ROOT)} ({len(data)})")

    dist = Counter(r["new"] for r in all_rows)
    print("dist", dict(sorted(dist.items())))
    print(f"changed {changed}/{n}")

    by_ch: dict[str, Counter] = defaultdict(Counter)
    for r in all_rows:
        m = re.search(r"CASE\s+(\d+)", r["case"]["case_id"])
        ch = m.group(1) if m else "?"
        by_ch[ch][r["new"]] += 1
    for ch in sorted(by_ch, key=lambda x: int(x) if x.isdigit() else 99):
        print(f"  ch{ch}", dict(sorted(by_ch[ch].items())))

    mapping = {
        r["case"]["case_id"]: r["new"]
        for r in all_rows
        if r["path"] in MAIN_FILES
    }
    out_map = ROOT / "scripts/economics-difficulty-recalibration.json"
    out_map.write_text(json.dumps(mapping, indent=2, sort_keys=True) + "\n")
    print("wrote", out_map.relative_to(ROOT), len(mapping))


if __name__ == "__main__":
    main()
