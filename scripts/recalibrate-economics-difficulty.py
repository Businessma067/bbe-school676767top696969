#!/usr/bin/env python3
"""Recalibrate economics case difficulty_level with a fair content-based rubric.

Scale: 1/5 easiest … 5/5 hardest.

Design goals
------------
- Absolute content gates so short definitional cases cannot become 5/5 just
  because they use words like "only" / "always" on FALSE claims.
- Soft-capped feature weights so one signal (traps, tech terms, chart) cannot
  dominate.
- Even global mix (~20% each level) while preserving score order: a case rated
  harder must have a higher content score than one rated easier (within the
  same bank), subject to absolute caps.
- Covers BBE (English) and WiSo (German) live subtopic banks.

Usage:
  python3 scripts/recalibrate-economics-difficulty.py
"""

from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BBE_FILES = [
    ROOT / "src/data/economics-cases-ch2-subtopics.json",
    ROOT / "src/data/economics-cases-ch3-subtopics.json",
    ROOT / "src/data/economics-cases-ch4-subtopics.json",
    ROOT / "src/data/economics-cases-ch5-subtopics.json",
    ROOT / "src/data/economics-cases-ch6-subtopics.json",
]
WISO_FILES = [
    ROOT / "src/data/wiso-economics-cases-ch1-subtopics.json",
    ROOT / "src/data/wiso-economics-cases-ch2-subtopics.json",
    ROOT / "src/data/wiso-economics-cases-ch3-subtopics.json",
    ROOT / "src/data/wiso-economics-cases-ch4-subtopics.json",
]
PILOT_FILES = [
    ROOT / "src/data/economics-cases-ch4-pilot.json",
]
MAIN_FILES = BBE_FILES + WISO_FILES
FILES = MAIN_FILES + PILOT_FILES
SLOT_PLANS = [
    ROOT / "scripts/ch4-slot-plan.json",
    ROOT / "scripts/ch5-slot-plan.json",
    ROOT / "scripts/ch6-slot-plan.json",
]
OVERLAY_PATH = ROOT / "src/data/economics-difficulty-by-case-id.json"

# Strong absolute / universal claims (EN + DE)
TRAP = re.compile(
    r"\b(always|never|only|necessarily|solely|exclusively|impossible|"
    r"inevitable|guaranteed|definitely|in all cases|"
    r"under all circumstances|no matter|regardless|without exception|"
    r"in every case|for all firms|for every|none of|no firm|no business|"
    r"nothing but|under no circumstances|"
    r"immer|niemals|ausschlie(?:ss|ß)lich|zwingend|unm[oö]glich|"
    r"unvermeidlich|garantiert|auf jeden fall|in allen f[aä]llen|"
    r"unter allen umst[aä]nden|ohne ausnahme|f[uü]r alle unternehmen|"
    r"keinesfalls|lediglich|ausschlie(?:ss|ß)lich)\b",
    re.I,
)
COMPARE = re.compile(
    r"\b(whereas|unlike|rather than|as opposed|compared with|compared to|"
    r"versus|although|even if|even though|despite|in contrast|"
    r"on the other hand|instead of|differ(?:s|ent)? from|"
    r"w[aä]hrend|im gegensatz|anders als|vielmehr|anstatt|statt|"
    r"obwohl|auch wenn|trotz|hingegen|dagegen|im vergleich|"
    r"unterscheidet sich|unterscheiden sich)\b",
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
    r"quick ratio|roe|roa|ros|ebit|"
    # German WiSo terms
    r"preiselastizit[aä]t|grenzkosten|opportunita(?:ts|̈ts)kosten|"
    r"gleichgewicht|oligopol|oligopson|polypol|monopol|monopson|"
    r"externalit[aä]t|externe effekte|wohlfahrtsverlust|"
    r"konsumentenrente|produzentenrente|preisdifferenzierung|"
    r"vollkommene konkurrenz|inflation|zinssatz|abzinsung|"
    r"liquidit[aä]t|solvenz|abschreibung|umlaufverm[oö]gen|"
    r"cashflow|bilanz|gewinn[- ]?und[- ]?verlust|variable kosten|"
    r"fixe kosten|skaleneffekte|ertragsgesetz|nutzen|"
    r"substitutionseffekt|einkommenseffekt|marktversagen|"
    r"[oö]ffentliches gut|Trittbrettfahrer|adverse selektion|"
    r"moral hazard|herfindahl|konzentrationsrate|markteintrittsbarriere|"
    r"sunk costs|versunkene kosten|wirtschaftlicher gewinn|"
    r"deckungsbeitrag|segmentierung|positionierung|"
    r"eigenkapital|fremdkapital|eigenkapitalquote|quick ratio|"
    r"erdsystemgrenzen|nachhaltigkeit|digitale transformation|"
    r"bruttoinlandsprodukt|bip|volkswirtschaft|betriebswirtschaft|"
    r"angebot|nachfrage|marktform|kartell|preisbildung)\b",
    re.I,
)
NEG = re.compile(
    r"\b(not|never|neither|nor|without|unless|except|cannot|"
    r"does not|do not|is not|are not|no longer|"
    r"nicht|nie|weder|noch|ohne|au(?:ss|ß)er|kann nicht|"
    r"ist nicht|sind nicht|kein|keine|keinen|keinem)\b",
    re.I,
)
COMPLEX_CLAUSE = re.compile(
    r"\b(if|when|because|since|which|provided that|as long as|unless|whereas|"
    r"wenn|weil|da|welche[rsn]?|sofern|solange|au(?:ss|ß)er wenn|w[aä]hrend)\b|,|;|—",
    re.I,
)
CHART = re.compile(r"\[\[CHART|\[\[TABLE", re.I)
TABLEISH = re.compile(
    r"\b(table|chart|figure|balance sheet|income statement|cash[- ]flow statement|"
    r"tabelle|diagramm|abbildung|bilanz|gewinn[- ]?und[- ]?verlustrechnung|"
    r"cashflow[- ]?rechnung)\b",
    re.I,
)

LEVELS = ["1/5", "2/5", "3/5", "4/5", "5/5"]

# Even spread across 1–5 (~20% each)
TARGET_SHARES = [0.20, 0.20, 0.20, 0.20, 0.20]


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
        + 0.30 * min(f["false_traps"], 3)
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
    """Soft fairness gates — only demote clearly trivial short definitional cases.

    Ranking is driven by content score + even quintiles. Caps exist so a
    40-word definition drill cannot become 5/5 just from trap wording, without
    collapsing the whole bank into 2/5.
    """
    idx = LEVELS.index(level)
    words = f["words"]

    trivial = (
        not f["has_chart"]
        and f["long_stmts"] == 0
        and f["very_long"] == 0
        and f["tech"] < 2
        and f["comps"] == 0
        and f["avg_stmt"] <= 16
        and words <= 90
    )
    short_def = (
        not f["has_chart"]
        and f["long_stmts"] == 0
        and f["very_long"] == 0
        and f["tech"] < 2
        and f["avg_stmt"] <= 18
        and words <= 110
    )

    # Pure short definition drills: never above 3/5
    if trivial:
        idx = min(idx, 2)
    elif short_def and f["false_traps"] + f["comps"] + f["tech"] == 0:
        idx = min(idx, 3)

    # Charts / heavy numeric analysis deserve at least mid difficulty
    if f["has_chart"]:
        idx = max(idx, 2)
    if f["has_chart"] and (f["tech"] >= 3 or f["nums"] >= 10):
        idx = max(idx, 3)

    return LEVELS[idx]


def max_allowed_idx(f: dict) -> int:
    return LEVELS.index(absolute_cap(f, "5/5"))


def min_allowed_idx(f: dict) -> int:
    """Floor from chart/numeric content (absolute_cap can raise)."""
    floored = absolute_cap(f, "1/5")
    return LEVELS.index(floored)


def chapter_key(case_id: str) -> str:
    m = re.search(r"(?:CASE|WISO)\s+(\d+)", case_id, re.I)
    return m.group(1) if m else "?"


def target_counts(n: int) -> list[int]:
    raw = [int(n * s) for s in TARGET_SHARES]
    while sum(raw) < n:
        # Prefer filling middle/hard bands when rounding short
        for i in (2, 1, 3, 0, 4):
            if sum(raw) >= n:
                break
            raw[i] += 1
    while sum(raw) > n:
        for i in (4, 0, 3, 1, 2):
            if sum(raw) <= n:
                break
            if raw[i] > 0:
                raw[i] -= 1
    return raw


def assign_levels(rows: list[dict]) -> None:
    """Even mix by score rank, respecting absolute content caps.

    Harder scores get higher levels. Caps can demote a case; vacated hard
    slots are filled by the next-highest eligible cases so the bank still
    spans 1–5 evenly when content allows.
    """
    if not rows:
        return

    for r in rows:
        r["max_i"] = max_allowed_idx(r["feat"])
        r["min_i"] = min_allowed_idx(r["feat"])

    # Hardest first
    rows.sort(key=lambda r: (r["score"], r["case"]["case_id"]), reverse=True)
    n = len(rows)
    targets = target_counts(n)
    assigned = [None] * n
    counts = [0] * 5

    # Fill from hardest level down so scarce hard-eligible cases take hard slots
    for lvl_i in range(4, -1, -1):
        need = targets[lvl_i]
        for i, r in enumerate(rows):
            if assigned[i] is not None:
                continue
            if counts[lvl_i] >= need:
                break
            if r["min_i"] <= lvl_i <= r["max_i"]:
                assigned[i] = lvl_i
                counts[lvl_i] += 1

    # Anything still unassigned: clamp to nearest allowed level
    for i, r in enumerate(rows):
        if assigned[i] is not None:
            continue
        # Prefer the target band matching residual score rank
        preferred = min(4, max(0, int(round(4 * (1 - i / max(n - 1, 1))))))
        preferred = min(r["max_i"], max(r["min_i"], preferred))
        assigned[i] = preferred
        counts[preferred] += 1

    for i, r in enumerate(rows):
        r["new"] = LEVELS[assigned[i]]

    # Light within-chapter ladder: ensure every chapter with ≥15 cases
    # still shows all five levels when content allows, without undoing
    # global evenness.
    by_ch: dict[str, list[dict]] = defaultdict(list)
    for r in rows:
        by_ch[chapter_key(r["case"]["case_id"])].append(r)

    for _ch, group in by_ch.items():
        if len(group) < 15:
            continue
        present = {LEVELS.index(r["new"]) for r in group}
        for missing in range(5):
            if missing in present:
                continue
            # Promote/demote the nearest eligible case by score
            candidates = [
                r
                for r in group
                if r["min_i"] <= missing <= r["max_i"] and LEVELS.index(r["new"]) != missing
            ]
            if not candidates:
                continue
            # Prefer cases already closest in level
            candidates.sort(
                key=lambda r: (
                    abs(LEVELS.index(r["new"]) - missing),
                    -r["score"] if missing > LEVELS.index(r["new"]) else r["score"],
                )
            )
            pick = candidates[0]
            # Only move if the chapter still keeps ≥1 of the donor level
            donor = LEVELS.index(pick["new"])
            if sum(1 for r in group if LEVELS.index(r["new"]) == donor) <= 1:
                continue
            pick["new"] = LEVELS[missing]
            present.add(missing)


def write_sql_migration(mapping: dict[str, str]) -> Path:
    ts = "20260920170000"
    path = ROOT / f"supabase/migrations/{ts}_economics_difficulty_even_recalibration.sql"
    items = sorted(
        mapping.items(),
        key=lambda kv: [int(x) if x.isdigit() else x for x in re.findall(r"\d+|\D+", kv[0])],
    )
    # Only BBE CASE ids live in supabase economics_cases
    bbe_items = [(cid, lvl) for cid, lvl in items if cid.upper().startswith("CASE ")]
    if not bbe_items:
        return path
    lines = [
        "-- Even content-based economics difficulty recalibration (1/5–5/5).",
        "-- Updates BOTH full and demo tiers for matching case_ids, then mirrors",
        "-- any remaining demo rows from their full-tier twin.",
        "-- Source: scripts/recalibrate-economics-difficulty.py",
        "",
        "UPDATE public.economics_cases AS e",
        "SET difficulty_level = v.difficulty_level,",
        "    updated_at = now()",
        "FROM (VALUES",
        ",\n".join(f"  ('{cid.replace(chr(39), chr(39) * 2)}', '{lvl}')" for cid, lvl in bbe_items),
        ") AS v(case_id, difficulty_level)",
        "WHERE e.case_id = v.case_id;",
        "",
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


def update_overlay(mapping: dict[str, str]) -> None:
    overlay = json.loads(OVERLAY_PATH.read_text()) if OVERLAY_PATH.exists() else {}
    before = dict(overlay)
    overlay.update(mapping)
    OVERLAY_PATH.write_text(json.dumps(overlay, indent=2, sort_keys=True) + "\n")
    changed = sum(1 for k, v in mapping.items() if before.get(k) != v)
    print(f"updated overlay {OVERLAY_PATH.relative_to(ROOT)} (+{len(mapping)} keys, {changed} changed)")


def calibrate_bank(label: str, files: list[Path]) -> list[dict]:
    cases_by_file: dict[Path, list] = {}
    all_rows: list[dict] = []
    for path in files:
        if not path.exists():
            print(f"skip missing {path.relative_to(ROOT)}")
            continue
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
    print(f"\n{label} dist", dict(sorted(dist.items())))
    print(f"{label} changed {changed}/{len(all_rows)}")

    by_ch: dict[str, Counter] = defaultdict(Counter)
    for r in all_rows:
        by_ch[chapter_key(r["case"]["case_id"])][r["new"]] += 1
    for ch in sorted(by_ch, key=lambda x: int(x) if x.isdigit() else 99):
        print(f"  ch{ch}", dict(sorted(by_ch[ch].items())))

    # Monotonicity check: mean score should rise with level
    print(f"\n{label} mean score by level:")
    by_lvl: dict[str, list[float]] = defaultdict(list)
    for r in all_rows:
        by_lvl[r["new"]].append(r["score"])
    prev = -1.0
    for lvl in LEVELS:
        scores = by_lvl[lvl]
        mean = sum(scores) / len(scores) if scores else 0.0
        flag = "OK" if mean >= prev - 0.05 else "WARN non-monotonic"
        print(f"  {lvl}: n={len(scores)} mean={mean:.2f} {flag}")
        prev = mean

    print(f"\n{label} samples:")
    for lvl in LEVELS:
        group = sorted(by_lvl_rows(all_rows, lvl), key=lambda r: r["score"])
        if not group:
            continue
        pick = group[len(group) // 2]
        print(
            f"  {lvl}: {pick['case']['case_id']} — {pick['case'].get('title', '')[:50]} "
            f"(score={pick['score']:.2f})"
        )

    return all_rows


def by_lvl_rows(rows: list[dict], lvl: str) -> list[dict]:
    return [r for r in rows if r["new"] == lvl]


def main() -> None:
    bbe_rows = calibrate_bank("BBE", BBE_FILES + PILOT_FILES)
    wiso_rows = calibrate_bank("WISO", WISO_FILES)

    mapping = {r["case"]["case_id"]: r["new"] for r in bbe_rows + wiso_rows}

    out_map = ROOT / "scripts/economics-difficulty-recalibration.json"
    out_map.write_text(json.dumps(mapping, indent=2, sort_keys=True) + "\n")
    print("wrote", out_map.relative_to(ROOT), len(mapping))

    sql_path = write_sql_migration(mapping)
    if sql_path.exists():
        print("wrote", sql_path.relative_to(ROOT))

    sync_slot_plans(mapping)
    update_overlay(mapping)

    # Spot checks
    for r in bbe_rows:
        if r["case"]["case_id"] == "CASE 2.1.01":
            print(f"\nCASE 2.1.01 → {r['new']} (score={r['score']:.2f})")
            break


if __name__ == "__main__":
    main()
