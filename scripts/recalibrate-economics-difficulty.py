#!/usr/bin/env python3
"""Recalibrate economics case difficulty_level with a fair content-based rubric.

Scale: 1/5 easiest … 5/5 hardest.

Design goals
------------
- Absolute content gates so short definitional cases cannot become 5/5 just
  because they use words like "only" / "always" on FALSE claims.
- Soft-capped feature weights so one signal (traps, tech terms, chart) cannot
  dominate.
- Global score → level with a balanced mix (~15/25/30/20/10), then light
  within-chapter smoothing so each chapter still has easy → hard practice.

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
SLOT_PLANS = [
    ROOT / "scripts/ch4-slot-plan.json",
    ROOT / "scripts/ch5-slot-plan.json",
    ROOT / "scripts/ch6-slot-plan.json",
]

# Strong absolute / universal claims (not everyday "all" / "any" / "must")
TRAP = re.compile(
    r"\b(always|never|only|necessarily|solely|exclusively|impossible|"
    r"inevitable|guaranteed|definitely|in all cases|"
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
    r"shareholders.? equity|net working capital|gearing|equity ratio|"
    r"quick ratio|roe|roa|ros|ebit)\b",
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
TABLEISH = re.compile(
    r"\b(table|chart|figure|balance sheet|income statement|cash[- ]flow statement)\b",
    re.I,
)

LEVELS = ["1/5", "2/5", "3/5", "4/5", "5/5"]

# Target global mix (fair exam bank): easier than the previous trap-heavy curve
GLOBAL_CUTS = [
    (0.15, "1/5"),
    (0.40, "2/5"),
    (0.70, "3/5"),
    (0.90, "4/5"),
    (1.01, "5/5"),
]


def features(c: dict) -> dict:
    stmts = c.get("statements") or []
    expls = c.get("tactical_explanations") or []
    ctx = c.get("context") or ""
    body = " ".join([ctx, *stmts])
    words = len(body.split()) if body.strip() else 0
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
    has_chart = 1 if CHART.search(ctx) or TABLEISH.search(ctx) else 0
    nums = len(re.findall(r"\d+(?:[.,]\d+)?", body))
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
        "nums": nums,
    }


def raw_score(f: dict) -> float:
    """Soft-capped composite — no single feature can force 5/5 alone."""
    return (
        0.012 * min(f["words"], 220)
        + 0.08 * min(f["avg_stmt"], 40)
        + 0.04 * min(f["max_stmt"], 55)
        + 0.28 * min(f["traps_stmt"], 3)
        + 0.08 * min(f["traps_ctx"], 2)
        + 0.30 * min(f["false_traps"], 3)  # common exam false-claim style; soft weight
        + 0.40 * min(f["comps"], 4)
        + 0.18 * min(f["tech"], 8)
        + 0.06 * min(f["negs"], 8)
        + 0.10 * min(f["false_negs"], 4)
        + 0.05 * min(f["stmt_complexity"], 20)
        + 0.0025 * min(f["expl_words"], 300)
        + 0.35 * min(f["long_stmts"], 3)
        + 0.45 * min(f["very_long"], 2)
        + 0.85 * f["has_chart"]
        + 0.04 * min(f["nums"], 20)
    )


def absolute_cap(f: dict, level: str) -> str:
    """Hard fairness gates from content shape (override percentile if needed)."""
    idx = LEVELS.index(level)
    words = f["words"]
    # Distinct dimensions of hardness (trap count alone is NOT enough for 5/5)
    dims = 0
    if f["false_traps"] >= 2:
        dims += 1
    if f["comps"] >= 2:  # need real contrast density, not one "rather than"
        dims += 1
    if f["long_stmts"] + f["very_long"] >= 1:
        dims += 1
    if f["has_chart"]:
        dims += 1
    if f["tech"] >= 3:
        dims += 1
    if f["avg_stmt"] >= 28:
        dims += 1
    if words >= 160:
        dims += 1

    short_def = (
        not f["has_chart"]
        and f["long_stmts"] == 0
        and f["very_long"] == 0
        and f["tech"] < 3
        and f["avg_stmt"] <= 22
    )

    # Classic short T/F intros (scarcity, sector labels, etc.): traps are exam style,
    # not hard reasoning — keep them in the easy band.
    if short_def and words <= 120:
        idx = min(idx, 1)  # ≤ 2/5
    elif short_def and words <= 150:
        idx = min(idx, 2)  # ≤ 3/5
    elif not f["has_chart"] and words <= 140 and dims <= 1:
        idx = min(idx, 3)  # ≤ 4/5

    # 5/5 requires breadth: chart/numeric OR several independent hard dimensions
    if idx >= 4:
        if f["has_chart"] and (f["tech"] >= 3 or f["nums"] >= 8 or f["words"] >= 180):
            pass  # keep 5/5
        elif dims >= 4 and (f["long_stmts"] + f["very_long"] >= 1 or words >= 150):
            pass
        else:
            idx = 3

    if idx >= 3 and dims < 2 and not f["has_chart"] and words < 140:
        idx = min(idx, 2)

    # Charts / heavy numeric analysis floor at 3/5
    if f["has_chart"] and f["tech"] + min(f["nums"], 15) >= 6:
        idx = max(idx, 2)
    if f["has_chart"] and (f["tech"] >= 4 or f["nums"] >= 12):
        idx = max(idx, 3)

    return LEVELS[idx]


def level_from_percentile(p: float) -> str:
    for cut, lab in GLOBAL_CUTS:
        if p < cut:
            return lab
    return "5/5"


def assign_levels(rows: list[dict]) -> None:
    """Global percentile mix, then absolute caps, then light chapter smoothing."""
    rows.sort(key=lambda r: (r["score"], r["case"]["case_id"]))
    n = len(rows)
    for rank, r in enumerate(rows):
        base = level_from_percentile(rank / n)
        r["new"] = absolute_cap(r["feat"], base)

    # Within each chapter, gently rebalance if one level ate everything
    by_ch: dict[str, list[dict]] = defaultdict(list)
    for r in rows:
        m = re.search(r"CASE\s+(\d+)", r["case"]["case_id"])
        by_ch[m.group(1) if m else "?"].append(r)

    for ch, group in by_ch.items():
        group.sort(key=lambda r: (r["score"], r["case"]["case_id"]))
        gn = len(group)
        if gn < 20:
            continue
        # Re-apply chapter-local percentiles, then keep absolute caps
        for rank, r in enumerate(group):
            local = level_from_percentile(rank / gn)
            # Blend: take the easier of global-capped and local (avoids ch3 all-1/5
            # and ch6 all-5/5 while still respecting content caps)
            g_idx = LEVELS.index(r["new"])
            l_idx = LEVELS.index(absolute_cap(r["feat"], local))
            # Weight local chapter rank a bit more so each chapter has a fair ladder
            mid = int(round(0.4 * g_idx + 0.6 * l_idx))
            r["new"] = absolute_cap(r["feat"], LEVELS[mid])


def write_sql_migration(mapping: dict[str, str]) -> Path:
    ts = "20260906173000"
    path = ROOT / f"supabase/migrations/{ts}_economics_difficulty_fair_recalibration.sql"
    items = sorted(
        mapping.items(),
        key=lambda kv: [int(x) if x.isdigit() else x for x in re.findall(r"\d+|\D+", kv[0])],
    )
    lines = [
        "-- Fair content-based economics difficulty recalibration (1/5–5/5).",
        "-- Updates BOTH full and demo tiers for matching case_ids, then mirrors",
        "-- any remaining demo rows from their full-tier twin.",
        "-- Source: scripts/recalibrate-economics-difficulty.py",
        "",
        "UPDATE public.economics_cases AS e",
        "SET difficulty_level = v.difficulty_level,",
        "    updated_at = now()",
        "FROM (VALUES",
        ",\n".join(f"  ('{cid.replace(chr(39), chr(39) * 2)}', '{lvl}')" for cid, lvl in items),
        ") AS v(case_id, difficulty_level)",
        "WHERE e.case_id = v.case_id;",
        "",
        "-- Keep demo previews aligned with full-tier ratings for shared case_ids",
        "UPDATE public.economics_cases AS d",
        "SET difficulty_level = f.difficulty_level,",
        "    updated_at = now()",
        "FROM public.economics_cases AS f",
        "WHERE d.tier = 'demo'",
        "  AND f.tier = 'full'",
        "  AND d.case_id = f.case_id;",
        "",
    ]
    path.write_text("\n".join(lines))
    return path


def sync_slot_plans(mapping: dict[str, str]) -> None:
    for plan_path in SLOT_PLANS:
        if not plan_path.exists():
            continue
        plan = json.loads(plan_path.read_text())
        changed = 0
        for slots in plan.values():
            for s in slots:
                lvl = mapping.get(s.get("case_id"))
                if lvl and s.get("difficulty_level") != lvl:
                    changed += 1
                if lvl:
                    s["difficulty_level"] = lvl
        plan_path.write_text(json.dumps(plan, indent=2) + "\n")
        print(f"synced {plan_path.relative_to(ROOT)} ({changed} changed)")


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

    assign_levels(all_rows)

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
    print(f"changed {changed}/{len(all_rows)}")

    by_ch: dict[str, Counter] = defaultdict(Counter)
    for r in all_rows:
        m = re.search(r"CASE\s+(\d+)", r["case"]["case_id"])
        ch = m.group(1) if m else "?"
        by_ch[ch][r["new"]] += 1
    for ch in sorted(by_ch, key=lambda x: int(x) if x.isdigit() else 99):
        print(f"  ch{ch}", dict(sorted(by_ch[ch].items())))

    # Sanity samples
    print("\nSamples:")
    by_lvl: dict[str, list] = defaultdict(list)
    for r in all_rows:
        by_lvl[r["new"]].append(r)
    for lvl in LEVELS:
        pick = sorted(by_lvl[lvl], key=lambda r: r["score"])[len(by_lvl[lvl]) // 2]
        print(
            f"  {lvl}: {pick['case']['case_id']} — {pick['case']['title'][:50]} "
            f"(score={pick['score']:.2f})"
        )

    # Gate check: 2.1.01 should not be max difficulty
    for r in all_rows:
        if r["case"]["case_id"] == "CASE 2.1.01":
            print(f"\nCASE 2.1.01 → {r['new']} (score={r['score']:.2f})")

    mapping = {
        r["case"]["case_id"]: r["new"]
        for r in all_rows
        if r["path"] in MAIN_FILES or r["path"] in PILOT_FILES
    }
    # Prefer main over pilot if duplicate ids (shouldn't happen)
    mapping = {
        r["case"]["case_id"]: r["new"]
        for r in all_rows
        if r["path"] in MAIN_FILES
    }
    for r in all_rows:
        if r["path"] in PILOT_FILES and r["case"]["case_id"] not in mapping:
            mapping[r["case"]["case_id"]] = r["new"]

    out_map = ROOT / "scripts/economics-difficulty-recalibration.json"
    out_map.write_text(json.dumps(mapping, indent=2, sort_keys=True) + "\n")
    print("wrote", out_map.relative_to(ROOT), len(mapping))

    sql_path = write_sql_migration(mapping)
    print("wrote", sql_path.relative_to(ROOT))

    sync_slot_plans(mapping)


if __name__ == "__main__":
    main()
