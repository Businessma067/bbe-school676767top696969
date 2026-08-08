# -*- coding: utf-8 -*-
"""Rebuild Chapter 5 from PDF: prose + real UI tables (no screenshots)."""
from __future__ import annotations

import json
import math
import re
from pathlib import Path

import pymupdf

PDF = Path(r"c:\Users\bubli\Downloads\Linear_Equations_All_60_Tasks_Reranked-1.pdf")
ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW_OUT = ROOT / "textbook" / "output" / "linear_eq_60_raw.json"
TS_OUT = ROOT / "src" / "data" / "math-ch5-linear-equations.ts"
OVERRIDE_PATHS = [
    ROOT / "textbook" / "output" / "ch5_expl_overrides.json",
]

doc = pymupdf.open(str(PDF))

HEADER_TOKENS = {
    "invoice",
    "notebooks",
    "pens",
    "session",
    "adult",
    "tickets",
    "child",
    "revenue",
    "qty",
    "price",
    "metric",
    "value",
    "receipt",
    "total",
    "nitrogen",
    "oxygen",
    "units",
    "item",
    "amount",
    "rate",
    "hours",
    "cost",
    "plant",
    "fund",
    "balance",
    "return",
    "order",
    "pages",
    "billed",
    "type",
    "mw",
    "output",
    "fee",
}


def clean(s: str) -> str:
    s = (
        s.replace("\u2212", "-")
        .replace("\u00d7", "\\times ")
        .replace("\u2192", "\\to ")
        .replace("\u2014", "—")
        .replace("\u2013", "–")
    )
    return re.sub(r"[ \t]+\n", "\n", s).strip()


def flatten(s: str) -> str:
    return re.sub(r"\s+", " ", clean(s)).strip()


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def leftish(page: pymupdf.Page, needle: str) -> list[pymupdf.Rect]:
    return [
        r
        for r in page.search_for(needle)
        if r.x0 < page.rect.width * 0.45 and r.y0 < page.rect.height * 0.7
    ]


def stem_bounds(page: pymupdf.Page, task_num: int) -> tuple[float, float]:
    top = 48.0
    fmt = page.search_for("Format:")
    if fmt:
        top = min(fmt, key=lambda r: r.y0).y1 + 2
    else:
        hits = page.search_for(f"TASK {task_num}")
        if hits:
            top = hits[0].y1 + 2
    anchors = leftish(page, "GIVEN") + leftish(page, "STATEMENTS")
    if not anchors:
        anchors = page.search_for("STATEMENTS")
    bottom = min(anchors, key=lambda r: r.y0).y0 - 2 if anchors else page.rect.height * 0.45
    return top, bottom


def is_verdict(rows: list[list]) -> bool:
    if not rows:
        return True
    head = " ".join(str(c or "") for c in rows[0]).lower()
    return "verdict" in head


def words_in_rect(page: pymupdf.Page, rect: pymupdf.Rect):
    out = []
    for w in page.get_text("words"):
        x0, y0, x1, y1, word, *_ = w
        if y1 < rect.y0 - 1 or y0 > rect.y1 + 1:
            continue
        if x1 < rect.x0 - 2 or x0 > rect.x1 + 2:
            continue
        out.append((x0, y0, x1, y1, word))
    return out


def cluster_rows(words, y_tol=3.5):
    if not words:
        return []
    words = sorted(words, key=lambda w: (w[1], w[0]))
    rows = [[words[0]]]
    cy = words[0][1]
    for w in words[1:]:
        if abs(w[1] - cy) <= y_tol:
            rows[-1].append(w)
        else:
            rows.append([w])
            cy = w[1]
    return [sorted(r, key=lambda z: z[0]) for r in rows]


def column_edges_from_header(header_row) -> list[float]:
    """Cluster header words into cells; return x0 of each cell."""
    if not header_row:
        return []
    cells = [[header_row[0]]]
    for w in header_row[1:]:
        if w[0] - cells[-1][-1][2] > 22:
            cells.append([w])
        else:
            cells[-1].append(w)
    return [c[0][0] for c in cells]


def assign_to_cols(row, col_xs: list[float]) -> list[str]:
    bins = [[] for _ in col_xs]
    for w in row:
        idx = 0
        for i, cx in enumerate(col_xs):
            if w[0] + 1 >= cx - 4:
                idx = i
        bins[idx].append(w[4])
    cells = [" ".join(b).strip() for b in bins]

    # Currency glued into previous column → split into last column
    if len(cells) >= 2 and not cells[-1]:
        m = re.match(r"^(.*?)(\$[\d,]+(?:\.\d+)?)$", cells[-2])
        if m and m.group(1).strip():
            cells[-2], cells[-1] = m.group(1).strip(), m.group(2)
        elif m and not m.group(1).strip():
            # lone money in penultimate with empty last — move money to last
            cells[-2], cells[-1] = "", m.group(2)

    # "Receipt Total" + "$50.00" with empty middle
    if len(cells) >= 3 and cells[0] and not cells[1] and not cells[2]:
        m = re.search(r"(\$[\d,]+(?:\.\d+)?)", cells[0])
        if m:
            money = m.group(1)
            cells[0] = cells[0].replace(money, "").strip()
            cells[-1] = money
    if len(cells) >= 3 and cells[0] and cells[1].startswith("$") and not cells[2]:
        cells[2] = cells[1]
        cells[1] = ""

    return cells


def expand_table(page: pymupdf.Page, seed_bbox, seed_rows: list[list[str]], stem_bottom: float) -> list[list[str]]:
    """Take a partially extracted table and fill missing rows via word geometry."""
    rect = pymupdf.Rect(seed_bbox[0] - 2, seed_bbox[1] - 2, seed_bbox[2] + 2, stem_bottom)
    words = words_in_rect(page, rect)
    rows = cluster_rows(words)
    if not rows:
        return [[str(c or "").strip() for c in r] for r in seed_rows]

    # Find header row: best match to seed header tokens
    seed_header = [str(c or "").strip() for c in seed_rows[0]]
    seed_join = " ".join(seed_header).lower()
    header_idx = 0
    best = -1
    for i, row in enumerate(rows[:8]):
        rt = " ".join(w[4] for w in row).lower()
        score = sum(1 for tok in seed_header if tok and tok.lower() in rt)
        if score > best:
            best = score
            header_idx = i

    header_words = rows[header_idx]
    col_xs = column_edges_from_header(header_words)
    if len(col_xs) < 2:
        # fall back to equal width
        width = len(seed_header) or 2
        span = rect.width
        col_xs = [rect.x0 + i * span / width for i in range(width)]

    header_cells = assign_to_cols(header_words, col_xs)
    # Prefer seed header labels if lengths match-ish
    if abs(len(header_cells) - len(seed_header)) <= 1 and len(seed_header) >= 2:
        # pad
        while len(header_cells) < len(seed_header):
            header_cells.append("")
        header_cells = header_cells[: len(seed_header)]
        # replace empty with seed
        header_cells = [h or s for h, s in zip(header_cells, seed_header)]

    body = []
    for row in rows[header_idx + 1 :]:
        rt = " ".join(w[4] for w in row).strip()
        low = rt.lower()
        if not rt:
            continue
        if low.startswith("let ") or low.startswith("given"):
            break
        # long prose ends table
        if len(rt) > 70 and rt.endswith("."):
            break
        cells = assign_to_cols(row, col_xs)
        width = max(len(header_cells), len(seed_header))
        cells = (cells + [""] * width)[:width]
        header_cells = (header_cells + [""] * width)[:width]
        if any(cells):
            body.append(cells)

    # If expansion failed, keep seed
    if not body and len(seed_rows) > 1:
        return [[str(c or "").strip() for c in r] for r in seed_rows]

    out = [header_cells] + body
    # Drop empty columns
    width = max(len(r) for r in out)
    norm = [(r + [""] * width)[:width] for r in out]
    keep = [i for i in range(width) if any(r[i].strip() for r in norm)]
    return [[r[i] for i in keep] for r in norm]


def extract_stem_tables(page: pymupdf.Page, stem_top: float, stem_bottom: float) -> list[list[list[str]]]:
    tabs = page.find_tables()
    seeds = []
    for t in tabs.tables:
        if t.bbox[1] > stem_bottom - 5:
            continue
        if t.bbox[3] < stem_top + 5:
            continue
        rows = t.extract()
        if is_verdict(rows):
            continue
        seeds.append((t.bbox, rows))

    # Merge vertically close seed bboxes by expanding each into one region table.
    # Group seeds that share similar x-span and are stacked.
    tables: list[list[list[str]]] = []
    i = 0
    while i < len(seeds):
        bbox, rows = seeds[i]
        # Collect stacked fragments belonging to same visual block (receipts etc.)
        group = [(bbox, rows)]
        j = i + 1
        while j < len(seeds):
            nb, nr = seeds[j]
            # same left edge-ish and close vertically
            if abs(nb[0] - bbox[0]) < 8 and nb[1] - group[-1][0][3] < 40:
                group.append((nb, nr))
                j += 1
            else:
                break

        # One expanded region for the group
        y0 = group[0][0][1]
        y1 = max(g[0][3] for g in group)
        # Expand toward stem bottom a bit for missing rows, but stop before next seed far away
        expand_to = stem_bottom
        if j < len(seeds):
            expand_to = min(stem_bottom, seeds[j][0][1] - 4)
        # If group already has gap to next, allow reading until next or +90px
        expand_to = min(expand_to, max(y1 + 100, y1))

        # Prefer the first seed's header geometry, expand through group bottom
        union = (group[0][0][0], y0, group[0][0][2], expand_to)
        # Flatten seed rows: first header, then all content rows from fragments
        seed_rows = [group[0][1][0]]
        for _, r in group:
            # skip repeating headers
            for row in r:
                if row == seed_rows[0]:
                    continue
                # skip header-like qty/price repeats inside fragment
                low = [str(c or "").lower() for c in row]
                if low == [str(c or "").lower() for c in seed_rows[0]]:
                    continue
                seed_rows.append(row)

        table = expand_table(page, union, seed_rows, expand_to)
        if len(table) >= 2:
            tables.append(table)
        i = j if j > i else i + 1

    return tables


def table_to_markdown(rows: list[list[str]]) -> str:
    if not rows:
        return ""
    width = max(len(r) for r in rows)
    norm = [(r + [""] * width)[:width] for r in rows]
    keep = [i for i in range(width) if any((r[i] or "").strip() for r in norm)]
    norm = [[r[i] for i in keep] for r in norm]
    # Reject nonsense "tables" that are clearly prose
    header = norm[0]
    if len(header) > 8:
        return ""
    joined = " ".join(header).lower()
    if len(joined) > 80 and sum(1 for h in header if h.lower() in HEADER_TOKENS) < 2:
        return ""
    body = norm[1:]
    lines = [
        "| " + " | ".join(header) + " |",
        "| " + " | ".join("---" for _ in header) + " |",
    ]
    for r in body:
        lines.append("| " + " | ".join(r) + " |")
    return "\n".join(lines)


def stem_prose(page: pymupdf.Page, top: float, bottom: float, table_bboxes: list) -> str:
    """Collect sentence-like text in the stem, excluding table rectangles."""
    words = []
    for w in page.get_text("words"):
        x0, y0, x1, y1, word, *_ = w
        if y0 < top - 1 or y1 > bottom + 1:
            continue
        inside = False
        for bbox in table_bboxes:
            if y0 >= bbox[1] - 2 and y1 <= bbox[3] + 2 and x0 >= bbox[0] - 4 and x1 <= bbox[2] + 4:
                inside = True
                break
        if not inside:
            words.append((x0, y0, x1, y1, word))
    rows = cluster_rows(words, y_tol=4.0)
    parts = []
    for row in rows:
        rt = " ".join(w[4] for w in row).strip()
        if not rt:
            continue
        low = rt.lower()
        if low in HEADER_TOKENS:
            continue
        # skip short numeric/currency lines
        if re.fullmatch(r"\$?[\d,]+(?:\.\d+)?%?", rt):
            continue
        if len(rt) < 20 and not rt.endswith("."):
            continue
        parts.append(rt)
    prose = " ".join(parts)
    return re.sub(r"\s{2,}", " ", prose).strip()


def mathify_for_expl(text: str) -> str:
    text = clean(text)
    money = {}

    def keep(m: re.Match) -> str:
        k = f"§M{len(money)}§"
        money[k] = m.group(0)
        return k

    text = re.sub(r"\$\d{1,3}(?:,\d{3})*(?:\.\d+)?", keep, text)

    def wrap(m: re.Match) -> str:
        return f"${m.group(0)}$"

    text = re.sub(
        r"(?<![A-Za-z0-9$§])("
        r"[+\-]?(?:\d*\.?\d*)?[a-zA-Z]"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r"\s*=\s*[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r")(?![A-Za-z0-9$§])",
        wrap,
        text,
    )
    text = re.sub(
        r"(?<![A-Za-z0-9$§])("
        r"[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*(?:[+\-]|\\times)\s*[+\-]?\d+(?:\.\d+)?)+"
        r"\s*=\s*[+\-]?\d+(?:\.\d+)?"
        r")(?![A-Za-z0-9$§])",
        wrap,
        text,
    )
    for k, v in money.items():
        text = text.replace(k, v)
    return text


def is_label_row(row: list[str]) -> bool:
    if not row:
        return False
    return bool(str(row[0]).strip()) and all(not str(c).strip() for c in row[1:])


def normalize_sectioned_table(rows: list[list[str]]) -> list[list[str]]:
    """
    Fix PDF layout where a section label (e.g. 'Vendor A') sits on its own row
    between/near data rows — fold it into the Vendor/first column instead.
    """
    if len(rows) < 2:
        return rows
    header, body = rows[0], [r[:] for r in rows[1:]]

    def order_num(row: list[str]) -> int | None:
        if len(row) < 2:
            return None
        try:
            return int(str(row[1]).strip())
        except ValueError:
            return None

    out: list[list[str]] = []
    i = 0
    while i < len(body):
        row = body[i]
        if is_label_row(row):
            label = str(row[0]).strip()
            if out and not str(out[-1][0]).strip():
                out[-1][0] = label
            j = i + 1
            last_ord: int | None = None
            while j < len(body) and not is_label_row(body[j]):
                nxt = body[j][:]
                ord_n = order_num(nxt)
                # New vendor/group usually restarts at order 1 after a higher order.
                if last_ord is not None and ord_n is not None and ord_n <= last_ord:
                    break
                if not str(nxt[0]).strip():
                    nxt[0] = label
                out.append(nxt)
                if ord_n is not None:
                    last_ord = ord_n
                j += 1
            i = j
            continue
        out.append(row[:])
        i += 1
    return [header] + out


def _scrub_tip_prose(tip: str) -> str:
    """Clean PDF coaching sentences without wiping ordinary English words."""
    tip = flatten(tip)
    tip = re.sub(r"\bLet\s+[a-zA-Z]\w*(?:\s+and\s+[a-zA-Z]\w*)?\s*=\s*[^.;]+[.;]?", "", tip, flags=re.I)
    tip = re.sub(r"\bfind\s+[a-z]\s+and\s+[a-z]\b", "find the two unknowns", tip, flags=re.I)
    tip = re.sub(r"\bto find\s+[a-z]\s+and\s+[a-z]\b", "to find the two unknowns", tip, flags=re.I)
    tip = re.sub(r"\s{2,}", " ", tip).strip(" ;,.")
    return tip


def contextual_notes(
    fmt: str,
    narrative: str,
    given: str,
    general: str,
    statements: list[str],
    answer_key: list[bool],
) -> list[tuple[str, str]]:
    """
    Sparse, case-specific coaching — only when a real trap or setup twist exists.
    Skip plain sum-and-difference cases; never lecture about 'simplest system'.
    """
    narrative_l = (narrative or "").lower()
    given_l = (given or "").lower()
    general_l = (general or "").lower()
    stmts_l = " ".join(statements).lower()
    blob = " ".join([fmt, narrative_l, given_l, general_l, stmts_l])
    notes: list[tuple[str, str]] = []

    def add(label: str, text: str) -> None:
        text = re.sub(r"\s{2,}", " ", text).strip()
        if len(text) < 28:
            return
        for _, existing in notes:
            if text[:50].lower() in existing.lower() or existing[:50].lower() in text.lower():
                return
        notes.append((label, text))

    # Skip preacher notes about how "simple" the case is
    def is_boilerplate(s: str) -> bool:
        low = s.lower()
        return any(
            p in low
            for p in (
                "simplest possible",
                "round numbers",
                "main traps are statement",
                "no fees, no percentages",
            )
        )

    # --- Explicit unused / distractor column (PDF must mark it) ---
    unused_hit = re.search(
        r"([^.]*\b(?:not needed|need not|do not affect|does not affect|should be set aside|"
        r"play no role|distractor|cannot be used|not every figure|"
        r"loyalty[- ](?:card |discount )?note|advertised figures|"
        r"claim to (?:be )?check|claim to verify|gross figures cannot)"
        r"[^.]*\.)",
        " ".join([given, narrative]),
        flags=re.I,
    )
    if unused_hit:
        tip = _scrub_tip_prose(unused_hit.group(1))
        if len(tip) >= 40 and not is_boilerplate(tip):
            add("Distractor", tip + ("" if tip.endswith(".") else "."))

    # --- Peel constants: delivery / setup / connection / service / late penalty ---
    if re.search(
        r"\b(delivery fee|setup fee|connection fee|signup fee|handling fee|dispatch fee|"
        r"service (?:fee|charge)|fixed (?:monthly )?fee|occupancy tax|late penalty|"
        r"\d+%\s*(?:occupancy )?tax|\d+%\s*service)\b",
        blob,
    ) and not re.search(r"\bno (?:fees|separate connection fee)\b", blob):
        add(
            "Peel-first",
            "Strip the fixed fee, tax, or penalty out of each total before writing the "
            "two-unknown system — leave only the pure price × quantity rows.",
        )

    # --- Two rival vendors / suppliers / carriers (true multi-system) ---
    if re.search(
        r"\b(two suppliers|two vendors|vendor a\b|vendor b\b|supplier a\b|supplier b\b|"
        r"quotations from two|competitor charges|deciding between two|"
        r"two ride-hailing|citycab|quickcopy|printfast express|"
        r"skylink mobile|basic\b.{0,40}\bstandard\b.{0,80}\boverage)\b",
        blob,
    ):
        add(
            "Two boards",
            "Treat each vendor/plan as its own board: solve one price pair completely, "
            "then start the other — never pour both totals into one messy system.",
        )

    # --- Interest / portfolio split ---
    if re.search(r"\b(simple annual (?:interest|return)|interest|bond portfolio|equity portfolio|"
                 r"fund a pays|account a pays)\b", blob) and re.search(r"%", blob):
        add(
            "Interest mix",
            "Write principal₁ + principal₂ = total and r₁·p₁ + r₂·p₂ = interest earned. "
            "The rates are coefficients — do not average them and split the pile in half.",
        )

    # --- Base + overage / per-distance energy (not bare "per unit" prices) ---
    if re.search(
        r"\b(overage|over (?:their )?allowance|per (?:gb|mile|km|page|kilogram)\b|"
        r"fixed (?:dispatch|connection|handling|setup|monthly) fee plus|"
        r"rate per (?:mile|km|kg|page|compute)|per-compute|per-storage|"
        r"\$\d+(?:\.\d+)?/gb|\$\d+(?:\.\d+)? per mile)\b",
        blob,
    ):
        add(
            "Base + rate",
            "Each bill is (fixed piece) + (usage × rate). Subtract the fixed piece first "
            "(or keep it as a shared unknown) so you do not invent a third fake variable.",
        )

    # --- Gross vs net / returns ---
    if re.search(r"\b(net sales|gross sales|returns must be subtracted|minus returns)\b", blob):
        add(
            "Net, not gross",
            "Only *net* units (or net dollars) belong in the price equations. "
            "Gross − returns comes first; plugging gross totals skews both unknowns.",
        )

    # --- Mixture / ratio batches (not mere "concentration = unknown") ---
    if re.search(
        r"\b(mixed\s+\d+\s*:\s*\d+|volume ratio|mass-per-liter|stock solution|"
        r"blend(?:s|ed)? (?:of |two |molten |shipment)|ratio-blended)\b",
        blob,
    ):
        add(
            "Mixture",
            "Turn the given ratio into two linked amounts (or one free unknown + a multiple) "
            "before writing the cost/mass equation — do not treat the ratio as a second price.",
        )
    elif re.search(r"\b(mg/ml|mg\\.? ?/? ?ml|concentration)\b", blob) and re.search(
        r"\b(suspension|batch)\b", blob
    ):
        add(
            "Concentration",
            "Here volumes are the known coefficients and the unknowns are the two concentrations "
            "(mg/mL). Convert every volume to the same unit before multiplying.",
        )

    # --- Work-rate / % complete / plant output ---
    if re.search(
        r"\b(% finished|percent finished|overhaul|technician|mwh-per-hour|operating time|"
        r"alvarez|bianchi|power plants?)\b",
        blob,
    ):
        add(
            "Rate × time",
            "Each person/plant contributes (rate)×(hours). Percents finished are just the "
            "right-hand sides — convert them to decimals before eliminating.",
        )

    # --- Scaled / double client / water-damaged missing cell ---
    if re.search(r"\b(exactly double|scaled rep(?:lica)?|water-damaged|logged in min|"
                 r"coverage was missing|volume was lost|distance was)\b", blob):
        add(
            "Missing cell",
            "When one entry is missing but another row is an exact scale (or double), "
            "rebuild the lost quantity from that proportion first, then solve for prices.",
        )

    # --- Calibration / linear convert ---
    if re.search(r"\b(scale factor|true value|calibration|offset)\b", blob):
        add(
            "Affine map",
            "Here the two unknowns *are* the slope and intercept of "
            "True = (scale)×Reading + offset. Two calibration points → one 2×2 system.",
        )

    # --- Meet / opposite travel ---
    if re.search(r"\b(opposite docks|meet (?:in|after)|combined,? they cover|closing speed)\b", blob):
        add(
            "Closing speed",
            "When two craft move toward each other, the distance equation is "
            "(speed₁ + speed₂)×time = stretch — one equation is a sum of rates, not a difference.",
        )

    # --- Age puzzles ---
    if re.search(r"\b(years ago|elder|younger|age)\b", blob) and re.search(r"\b(was twice|three times|older)\b", blob):
        add(
            "Ages shift",
            "Ages change by the same number of years on both sides. Translate "
            "'n years ago' by subtracting n from *both* present ages before equating.",
        )

    # --- Markup over wholesale ---
    if re.search(r"\b(marks? up|markup|over wholesale|profit margin)\b", blob) and re.search(r"%", blob):
        add(
            "Markup",
            "Selling price = wholesale × (1 + markup). If statements quote markups, "
            "convert them to multipliers before comparing order totals.",
        )

    # --- Receipt: known lines then mystery ---
    if re.search(r"\b(receipt)\b", blob) and re.search(
        r"\b(already known|bread and egg|loyalty[- ](?:card )?|organic apples)\b", blob
    ):
        add(
            "Receipt",
            "Knock off every known-priced line first; only the leftover money feeds "
            "the system for the mystery items.",
        )

    # --- Ad / forecast / claim is not data ---
    if (
        re.search(r"\b(forecast|projected|projection|\$\d[\d,]* \(projected\))\b", blob)
        or (
            re.search(r"\b(ad boasts|advertised|customer service claims|flyer)\b", blob)
            and re.search(r"\b(not needed|distractor|claim|verify|check)\b", blob + given_l + general_l)
        )
    ):
        add(
            "Source check",
            "Projected rows, ads, and verbal claims are for judging statements — "
            "only measured invoices/logs go into the solving system.",
        )

    # --- Boundary language across several false claims ---
    boundary_false_n = sum(
        1
        for stmt, ans in zip(statements, answer_key)
        if (not ans)
        and re.search(r"\b(more than|less than|exceed(?:ed|s)?|strictly|at least|at most)\b", stmt, flags=re.I)
    )
    if boundary_false_n >= 2:
        add(
            "Exact vs strict",
            "Several false claims swing on *exact* equality vs *more than* / *less than*. "
            "Compute the exact value, then compare — a near miss is still false.",
        )

    # Prefer the most specific notes; never more than 2
    priority = [
        "Distractor",
        "Peel-first",
        "Receipt",
        "Two boards",
        "Interest mix",
        "Base + rate",
        "Net, not gross",
        "Mixture",
        "Concentration",
        "Rate × time",
        "Missing cell",
        "Affine map",
        "Closing speed",
        "Ages shift",
        "Markup",
        "Source check",
        "Exact vs strict",
    ]
    notes.sort(key=lambda pair: priority.index(pair[0]) if pair[0] in priority else 99)
    return notes[:2]


def format_coach_block(notes: list[tuple[str, str]]) -> str:
    if not notes:
        return ""
    parts = []
    for label, text in notes:
        parts.append(f"**{label}:** {text}")
    return "\n\n".join(parts)


def extract_model_eqs(model: str) -> list[str]:
    eqs = []
    for ln in clean(model).split("\n"):
        ln = ln.strip()
        if "=" not in ln:
            continue
        if " (" in ln:
            left = ln.split(" (")[0].strip()
            if re.search(r"[a-zA-Z].*=", left):
                ln = left
        if "which rearranges" in ln.lower():
            eqs.extend(
                [
                    p.strip()
                    for p in re.split(r",\s*which rearranges to\s+", ln, flags=re.I)
                    if "=" in p
                ]
            )
        else:
            eqs.append(ln)
    seen = []
    for e in eqs:
        if e not in seen:
            seen.append(e)
    return seen


def format_model_tex(model: str) -> str:
    eqs = extract_model_eqs(model)[:4]
    if len(eqs) >= 2:
        return "$$\n\\begin{cases}\n" + " \\\\\n".join(eqs[:2]) + "\n\\end{cases}\n$$"
    if eqs:
        return f"$$\n{eqs[0]}\n$$"
    return mathify_for_expl(model)


def format_solution_steps(solution: str) -> str:
    """Turn PDF step-by-step prose into readable steps with inline KaTeX only (no duplicates)."""
    sol = clean(solution)
    sol = re.sub(r"Final Answer:\s*.*", "", sol, flags=re.S).strip()
    if not sol:
        return ""

    money = {}

    def keep_money(m: re.Match) -> str:
        k = f"§M{len(money)}§"
        money[k] = m.group(0)
        return k

    work = re.sub(r"\$\d{1,3}(?:,\d{3})*(?:\.\d+)?", keep_money, sol)
    for k, v in list(money.items()):
        work = work.replace(k, v)

    work = re.sub(
        r"\$([^$=]+)=([^$]+)\$\s*=\s*([+\-]?\d+(?:\.\d+)?)",
        r"$\1=\2=\3$",
        work,
    )

    sentences = re.split(r"(?<=[.!?])\s+(?=[A-Z(\"\\$])", work)
    sentences = [s.strip() for s in sentences if s.strip()]

    blocks: list[str] = []
    for i, sent in enumerate(sentences, start=1):
        prose = mathify_for_expl(sent)
        prose = re.sub(
            r"\$([^$]+)\$\s*=\s*([+\-]?\d+(?:\.\d+)?)",
            r"$\1=\2$",
            prose,
        )
        # Avoid repeating the same equation twice inside one sentence
        prose = re.sub(r"(\$[^$]+\$)\s*;\s*\1", r"\1", prose)
        blocks.append(f"**Step {i}.** {prose}")

    return "\n\n".join(blocks)


def _first_sentences(text: str, n: int = 2) -> str:
    parts = re.split(r"(?<=[.!?])\s+", flatten(text))
    parts = [p.strip() for p in parts if p.strip()]
    return " ".join(parts[:n]).strip()


def setup_blurb(title: str, context: str) -> str:
    """Short case-specific lead-in (unique because each stem is unique)."""
    lead = _first_sentences(context, 2)
    if not lead:
        lead = flatten(title)
    if lead and not lead.endswith("."):
        lead += "."
    return (
        f"**What's going on.** {lead} "
        "Name the two unknowns however you like, write one equation per independent observation, "
        "solve the system, then judge each claim with those values."
    )


def craft_statement_tip(stmt: str, verdict: bool, reason: str) -> str:
    """One short tip tied to THIS claim — prefers detail from the reason text."""
    s = stmt.lower()
    r = reason.lower()
    # Pull a concrete fragment from the reason (percent, dollar, or small calc)
    detail = ""
    m = re.search(
        r"(\d+(?:\.\d+)?\s*%|\$\d[\d,]*(?:\.\d+)?|\d+(?:\.\d+)?/\d+(?:\.\d+)?|\d+(?:\.\d+)?\s*mg)",
        reason,
    )
    if m:
        detail = m.group(1).replace("$", r"\$")

    if not verdict:
        if re.search(r"\b(more than|less than|exceed|at least|at most)\b", s):
            bit = f" (here the key figure is {detail})" if detail else ""
            return (
                f"**Why it fails.** Bound language is the trap{bit}: compute the exact value, "
                "then ask whether it really clears or misses the threshold as written."
            )
        if re.search(r"\b(fee|tax|loyalty|forecast|advertised|projected)\b", s + " " + r):
            return (
                "**Why it fails.** A fee, tax, ad, or forecast is being mixed into the solving "
                "equations — peel or ignore it, then recompute the claim."
            )
        if re.search(r"\b(percent|%|ratio|proportion|share)\b", s):
            bit = f" The check hinges on {detail}." if detail else ""
            return (
                f"**Why it fails.** Name the base of the percent/share before comparing.{bit}"
            )
        if re.search(r"\b(double|twice|half|transfer|moved|pooled)\b", s):
            return (
                "**Why it fails.** Replay the hypothetical from the solved values and change "
                "only what the statement changes — mis-transfer and double-count are common."
            )
        bit = f" Key figure: {detail}." if detail else ""
        return (
            f"**Why it fails.** Recompute from the solved unknowns: the claim's number, "
            f"direction, or scenario does not match.{bit}"
        )

    if re.search(r"\b(more than|less than|exceed|at least|at most)\b", s):
        bit = f" Margin clue: {detail}." if detail else ""
        return (
            f"**Watch.** True, but the margin can be thin — do not round a near miss "
            f"into the opposite call.{bit}"
        )
    if re.search(r"\b(percent|%|proportion|share|ratio)\b", s):
        bit = f" ({detail})" if detail else ""
        return (
            f"**Watch.** Confirm the percent/share is of the base the wording actually names{bit}."
        )
    if re.search(r"\b(if |were |would |had )\b", s):
        return (
            "**Watch.** Counterfactuals keep the same unit prices/rates; only the changed "
            "quantities (or the imagined tweak) move."
        )
    if detail:
        return f"**Watch.** The arithmetic centers on {detail} — keep that figure in view when scanning the other claims."
    return ""


def expand_statement_reason(stmt: str, verdict: bool, raw: str) -> str:
    """Frame the PDF check so each A–E block reads like a short argument, not a stamp."""
    reason = mathify_for_expl(flatten(raw))
    if not reason:
        reason = "Compare the claim directly to the solved values from the system above."
    if not reason.endswith((".", "!", "?")):
        reason += "."

    if verdict:
        opener = "Here is the check."
    else:
        opener = "Here is where the claim breaks."

    tip = craft_statement_tip(stmt, verdict, reason)
    parts = [opener, "", reason]
    if tip:
        parts += ["", tip]
    return "\n".join(parts)


def statement_explanation(
    letter: str,
    verdict: bool,
    stmt: str,
    raw: str,
    model: str,
    final: str,
    coach: str,
    is_first: bool,
) -> str:
    del model, final, coach, is_first  # no more repeated model / values / coach spam
    label = "TRUE" if verdict else "FALSE"
    body = expand_statement_reason(stmt, verdict, raw)
    return f"**{letter}) {stmt}** — **{label}**\n\n{body}".strip()


def build_overview(
    model: str,
    solution: str,
    final: str,
    coach: str,
    title: str = "",
    context: str = "",
) -> str:
    parts = [
        setup_blurb(title, context),
        "",
        "**Model.**",
        "",
        format_model_tex(model),
        "",
        "**Solve.**",
        "",
    ]
    steps = format_solution_steps(solution)
    if steps:
        parts.append(steps)
    else:
        parts.append(
            "Eliminate or substitute: clear a variable, solve the remaining one-variable equation, "
            "back-substitute, and spot-check both originals."
        )
    parts += ["", f"**Answer.** {final}"]
    if coach:
        parts += ["", coach]
    return "\n".join(parts).strip()


tasks = []
for num in range(1, 61):
    page = doc[num]
    text = page.get_text()
    title_m = re.search(rf"TASK\s+{num}\s+[—\-]\s*(.+)", text)
    title = title_m.group(1).split("\n")[0].strip() if title_m else f"Task {num}"
    dm = re.search(r"Difficulty:\s*([0-9.]+)/10", text)
    diff10 = float(dm.group(1)) if dm else 5.0

    gm = re.search(r"GIVEN\n([\s\S]*?)\nSTATEMENTS\n", text)
    given = flatten(gm.group(1)) if gm else ""

    sm = re.search(r"STATEMENTS\n([\s\S]*?)\nMATHEMATICAL MODEL", text)
    stmts_raw = sm.group(1).strip() if sm else ""
    statements = []
    for lab in "ABCDE":
        mm = re.search(rf"{lab}\.\s+(.*?)(?=\n[A-E]\.\s|\Z)", stmts_raw, re.S)
        if mm:
            statements.append(flatten(mm.group(1)))

    mm2 = re.search(r"MATHEMATICAL MODEL\n([\s\S]*?)\nSTEP-BY-STEP SOLUTION", text)
    model = mm2.group(1).strip() if mm2 else ""
    solm = re.search(r"STEP-BY-STEP SOLUTION\n([\s\S]*?)\nSTATEMENT ANALYSIS", text)
    solution = solm.group(1).strip() if solm else ""
    am = re.search(r"STATEMENT ANALYSIS\n([\s\S]*?)\nGENERAL EXPLANATION\n", text)
    analysis = am.group(1).strip() if am else ""
    genm = re.search(r"GENERAL EXPLANATION\n([\s\S]*)", text)
    general = flatten(genm.group(1)) if genm else ""

    answers, explanations = [], []
    for lab in "ABCDE":
        mm = re.search(
            rf"(?:^|\n){lab}\n(TRUE|FALSE)\n([\s\S]*?)(?=\n[A-E]\n(?:TRUE|FALSE)\n|\Z)",
            analysis,
        )
        if mm:
            answers.append(mm.group(1) == "TRUE")
            explanations.append(flatten(mm.group(2)))
        else:
            answers.append(False)
            explanations.append("")

    final = ""
    fm = re.search(r"Final Answer:\s*(.*)", clean(solution), re.S)
    if fm:
        final = flatten(fm.group(1))

    fmt_m = re.search(r"Format:\s*([^|\n]+)", text)
    fmt = fmt_m.group(1).strip() if fmt_m else ""

    # Narrative for coach detection (before stripping tables out of prose)
    narrative_for_coach = ""
    header_end = text.find("\nGIVEN\n")
    if header_end > 0:
        head = text[:header_end]
        lines = head.split("\n")
        skip = 0
        for i, line in enumerate(lines):
            if line.startswith("TASK ") or line.startswith("Format:") or line.startswith("(previously"):
                skip = i + 1
        narrative_for_coach = flatten(" ".join(lines[skip:]))

    top, bottom = stem_bounds(page, num)
    seed_bboxes = []
    for t in page.find_tables().tables:
        if t.bbox[1] < bottom and t.bbox[3] > top and not is_verdict(t.extract()):
            seed_bboxes.append(t.bbox)

    tables = extract_stem_tables(page, top, bottom)
    tables = [normalize_sectioned_table(tab) for tab in tables]
    prose_bboxes = []
    for b in seed_bboxes:
        prose_bboxes.append((b[0], b[1], b[2], min(bottom, b[3] + 60)))
    prose = stem_prose(page, top, bottom, prose_bboxes)
    if not prose:
        if header_end > 0:
            head = text[:header_end]
            lines = head.split("\n")
            skip = 0
            for i, line in enumerate(lines):
                if line.startswith("TASK ") or line.startswith("Format:") or line.startswith("(previously"):
                    skip = i + 1
            keep = []
            for ln in lines[skip:]:
                s = ln.strip()
                if not s:
                    continue
                if s.lower() in HEADER_TOKENS:
                    continue
                if re.fullmatch(r"\$?[\d,]+(?:\.\d+)?", s):
                    continue
                if len(s) < 18 and not s.endswith("."):
                    continue
                keep.append(s)
            prose = flatten(" ".join(keep))

    md_parts = []
    for tab in tables:
        md = table_to_markdown(tab)
        if md:
            md_parts.append(md)
    tables_md = "\n\n".join(md_parts)

    # Coach from stem + statements + GIVEN only (skip page TOC / GENERAL sermon text)
    coach = format_coach_block(
        contextual_notes(
            "",
            prose or narrative_for_coach,
            given,
            "",
            statements,
            answers,
        )
    )

    # Context = narrative only (no forced Variables / Let x = ...)
    context = prose.strip()

    tasks.append(
        {
            "num": num,
            "title": title,
            "difficulty_10": diff10,
            "context": context,
            "tables_markdown": tables_md,
            "statements": statements,
            "answer_key": answers,
            "explanations": explanations,
            "model": model,
            "solution": solution,
            "final_answer": final,
            "coach": coach,
        }
    )
    print(f"task {num:02d}: tables={len(md_parts)} coach={'yes' if coach else 'no'}")

RAW_OUT.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")

overrides: dict[str, dict] = {}
for path in OVERRIDE_PATHS:
    if not path.exists():
        continue
    try:
        blob = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"WARN: bad override JSON {path}: {exc}")
        continue
    for key, val in blob.items():
        if isinstance(val, dict) and "tactical_explanations" in val and "solution_overview" in val:
            overrides[str(key)] = val
    print(f"loaded overrides from {path.name}: {len(blob)} entries")

lines = [
    "/**",
    " * Chapter 5 — Linear equations in two unknowns",
    " * Structured prose + markdown tables from PDF (UI-native, no screenshots).",
    " */",
    "",
    'import type { MathTask } from "@/data/math-chapters";',
    "",
    "export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [",
]

for t in tasks:
    d5 = max(1, min(5, math.ceil(float(t["difficulty_10"]) / 2.0)))
    n = t["num"]
    ov = overrides.get(str(n))
    if ov and len(ov.get("tactical_explanations") or []) == 5:
        expls = [str(x) for x in ov["tactical_explanations"]]
        overview = str(ov["solution_overview"])
    else:
        expls = [
            statement_explanation(
                "ABCDE"[i],
                t["answer_key"][i],
                t["statements"][i],
                t["explanations"][i],
                t["model"],
                t["final_answer"],
                t.get("coach") or "",
                is_first=(i == 0),
            )
            for i in range(5)
        ]
        overview = build_overview(
            t["model"],
            t.get("solution") or "",
            t["final_answer"],
            t.get("coach") or "",
            title=clean(t["title"]),
            context=t.get("context") or "",
        )
    lines.append("  {")
    lines.append(f'    id: "math-5-{n}",')
    lines.append(f'    case_id: "MATH 5.{n:02d}",')
    lines.append(f'    title: `{esc(clean(t["title"]))}`,')
    lines.append(f"    context: `{esc(t['context'])}`,")
    if t["tables_markdown"]:
        lines.append(f"    tables_markdown: `{esc(t['tables_markdown'])}`,")
    lines.append("    statements: [")
    for s in t["statements"]:
        lines.append(f"      `{esc(s)}`,")
    lines.append("    ],")
    lines.append(
        "    answer_key: [" + ", ".join("true" if a else "false" for a in t["answer_key"]) + "],"
    )
    lines.append("    tactical_explanations: [")
    for e in expls:
        lines.append(f"      `{esc(e)}`,")
    lines.append("    ],")
    lines.append(f'    difficulty_level: "{d5}/5",')
    lines.append(f"    sort_order: {n},")
    lines.append(
        f"    solution_overview: `{esc(overview)}`,"
    )
    lines.append("  },")

lines += ["];", ""]
TS_OUT.write_text("\n".join(lines), encoding="utf-8")
print("wrote", TS_OUT)
print("tasks with tables", sum(1 for t in tasks if t["tables_markdown"]))
