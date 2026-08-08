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


def short_explanation(letter: str, verdict: bool, raw: str, model: str, final: str) -> str:
    label = "TRUE" if verdict else "FALSE"
    reason = mathify_for_expl(flatten(raw))
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
            ln = re.split(r",\s*which rearranges to\s+", ln, flags=re.I)[0].strip()
        eqs.append(ln)
    formula = f"$$\n{eqs[0]}\n$$" if eqs else ""
    tip = (
        f"Tip: Keep the final values in view (**{final}**) when testing the claim."
        if final
        else "Tip: Check the claim against the **exact** solved values."
    )
    parts = [f"**{letter}) {label}** — {reason}", ""]
    if formula:
        parts += ["Key relation:", "", formula, ""]
    parts.append(tip)
    return "\n".join(parts).strip()


def build_overview(model: str, final: str) -> str:
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
    eqs = seen[:2]
    if len(eqs) >= 2:
        tex = "$$\n\\begin{cases}\n" + " \\\\\n".join(eqs) + "\n\\end{cases}\n$$"
    elif eqs:
        tex = f"$$\n{eqs[0]}\n$$"
    else:
        tex = mathify_for_expl(model)
    return f"**Model**\n\n{tex}\n\n**Final answer:** {final}".strip()


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

    top, bottom = stem_bounds(page, num)
    # Capture seed bboxes before expansion for prose masking
    seed_bboxes = []
    for t in page.find_tables().tables:
        if t.bbox[1] < bottom and t.bbox[3] > top and not is_verdict(t.extract()):
            seed_bboxes.append(t.bbox)

    tables = extract_stem_tables(page, top, bottom)
    # Mask prose using expanded table areas approx from markdown sizes — use seed bboxes + modest pad
    prose_bboxes = []
    for b in seed_bboxes:
        prose_bboxes.append((b[0], b[1], b[2], min(bottom, b[3] + 60)))
    prose = stem_prose(page, top, bottom, prose_bboxes)
    if not prose:
        # plain-text fallback
        header_end = text.find("\nGIVEN\n")
        if header_end > 0:
            head = text[:header_end]
            lines = head.split("\n")
            skip = 0
            for i, line in enumerate(lines):
                if line.startswith("TASK ") or line.startswith("Format:") or line.startswith("(previously"):
                    skip = i + 1
            # drop obvious column soup lines
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

    ctx_parts = [prose] if prose else []
    if given:
        ctx_parts += ["", f"**Variables:** {given}"]
    context = "\n".join(ctx_parts).strip()

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
            "final_answer": final,
        }
    )
    print(f"task {num:02d}: tables={len(md_parts)} prose_len={len(prose)}")

RAW_OUT.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")

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
    expls = [
        short_explanation("ABCDE"[i], t["answer_key"][i], t["explanations"][i], t["model"], t["final_answer"])
        for i in range(5)
    ]
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
    lines.append(f"    solution_overview: `{esc(build_overview(t['model'], t['final_answer']))}`,")
    lines.append("  },")

lines += ["];", ""]
TS_OUT.write_text("\n".join(lines), encoding="utf-8")
print("wrote", TS_OUT)
print("tasks with tables", sum(1 for t in tasks if t["tables_markdown"]))
