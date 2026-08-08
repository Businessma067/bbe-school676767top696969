# -*- coding: utf-8 -*-
"""Hand-corrected stem tables/contexts for Ch5 tasks the PDF table finder mangled."""
from __future__ import annotations

# Correct markdown tables keyed by task number
TABLE_MARKDOWN: dict[int, str] = {
    15: """| Period | Type | Comp. A (units) | Comp. B (units) | Total Value |
| --- | --- | --- | --- | --- |
| January | Actual | 150 | 90 | $3,150 |
| February | Actual | 130 | 140 | $3,660 |
| March | Forecast | 200 | 100 | $4,700 (projected) |""",
    50: """| Batch | Metal A | Metal B | Total Mass |
| --- | --- | --- | --- |
| Batch 1 | 12 L | 8 L | 182.4 kg |
| Batch 2 | 5 L | 15 L | 209.0 kg |
| Batch 3 (audit) | 9.5 L (conv.) | 6 L | 147.0 kg (recorded) |""",
    52: """| Batch | Suspension A | Suspension B | Total Content |
| --- | --- | --- | --- |
| Batch 1 | 500 mL | 300 mL | 8,880 mg |
| Batch 2 | 200 mL | 700 mL | 12,600 mg |
| Batch 3 (QC) | 0.32 L (=320 mL) | 450 mL | 9,700 mg (recorded) |""",
    54: """| Point | Reading | Reference True Value | Role |
| --- | --- | --- | --- |
| Point 1 | 12.4 | 56.90 | Calibration |
| Point 2 | 31.7 | 124.45 | Calibration |
| Point 3 | 45.0 | 172.20 | Verification (recorded) |""",
    56: """| Route | Truck | Van | Total Fuel |
| --- | --- | --- | --- |
| Route 1 | 850 km | 620 km | 383.6 L |
| Route 2 | 500 km | 900 km | 322.0 L |
| Route 3 (audit) | 155.3 mi (≈250 km) | 400 km | 155.0 L (recorded) |""",
    60: """| Day | Plant A | Plant B | Total Energy |
| --- | --- | --- | --- |
| Day 1 | 14 hrs | 20 hrs | 3,990 MWh |
| Day 2 | 22 hrs | 9 hrs | 4,072 MWh |
| Day 3 (audit) | 1,020 min (=17 hrs) | 11 hrs | 3,553 MWh (recorded) |""",
}

# Stem prose overrides when PDF word extraction glued table crumbs into context
CONTEXT_FIXES: dict[int, str] = {
    12: 'Memo — Pricing Desk: "Hardcover editions are priced exactly $5 above the paperback price this quarter, across the board."',
    15: "Only the January and February rows report actual recorded inventory values. March is a forecast row and cannot be used to solve for today's unit costs. Warehouse floor space and on-site staff are distractors (not needed below).",
}


def sanitize_table_rows(rows: list[list[str]]) -> list[list[str]]:
    """Drop footnote/meta rows and unjam common money/unit spill cells."""
    import re

    if not rows:
        return rows
    header, body = rows[0], rows[1:]
    width = len(header)
    cleaned: list[list[str]] = [header]

    for row in body:
        cells = [(c or "").strip() for c in (row + [""] * width)[:width]]
        joined = " ".join(cells).lower()
        # Footnotes / distractors wrongly captured as grid rows
        if any(
            p in joined
            for p in (
                "not needed below",
                "warehouse floor space",
                "on-site staff",
                "sq ft",
            )
        ):
            continue
        if sum(1 for c in cells if c) <= 1 and len(joined) > 40:
            continue

        # March-style: | 200 | 100 $4,700 | (projected) |  →  | 200 | 100 | $4,700 (projected) |
        if width >= 3:
            for i in range(width - 1):
                m = re.match(
                    r"^(\d+(?:\.\d+)?)\s+(\$[\d,]+(?:\.\d+)?)$",
                    cells[i],
                )
                if m and re.fullmatch(r"\(?(projected|recorded|conv\.?)\)?", cells[i + 1], flags=re.I):
                    cells[i] = m.group(1)
                    cells[i + 1] = f"{m.group(2)} ({cells[i + 1].strip('()')})"
                elif m and not cells[i + 1]:
                    # money spilled into qty cell, empty next
                    cells[i] = m.group(1)
                    cells[i + 1] = m.group(2)

            # | ... | 6 L 147.0 kg | (recorded) | → merge mass into last col
            for i in range(width - 1):
                m = re.match(
                    r"^(\d+(?:\.\d+)?\s*(?:L|km|hrs?|mL))\s+(\d[\d,]*(?:\.\d+)?\s*(?:kg|L|MWh|mg).*)$",
                    cells[i],
                    flags=re.I,
                )
                if m and re.search(r"recorded|projected", cells[i + 1], flags=re.I):
                    cells[i] = m.group(1)
                    tag = cells[i + 1].strip()
                    if "(" not in m.group(2):
                        cells[i + 1] = f"{m.group(2)} {tag}".strip()
                    else:
                        cells[i + 1] = m.group(2)

        cleaned.append(cells)
    return cleaned
