"""Restore complete Chapter 12.3 / 12.4 wording from the original PDF text.

The markdown extracts compress later questions. This module reads the
normalized PDF extracts and rebuilds full stems, A–E statements, tables,
and diagrams.
"""

from __future__ import annotations

import html
import re
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
EXTRACT_DIR = ROOT / "textbook" / "output" / "ch12_extract"
LETTERS = "ABCDE"

PAGE_RE = re.compile(r"===== PAGE \d+ =====")
NOTATION_DUMP_RE = re.compile(
    r"Notation and formulas used throughout[\s\S]*?(?=Difficulty:|Evaluate each statement|Two stocks|A machine|A vending|A regional|Three independent)",
    flags=re.I,
)


def svg_data_uri(svg: str) -> str:
    return "data:image/svg+xml;utf8," + quote(svg)


def _svg_wrap(inner: str, w: int = 560, h: int = 280) -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'width="{w}" height="{h}" role="img">'
        f'<rect width="{w}" height="{h}" rx="16" fill="#f8f6f2" stroke="#d9d2c5"/>'
        f"{inner}</svg>"
    )


def dist_bar_svg(
    values: list[str],
    probs: list[float],
    title: str = "",
    y_label: str = "Probability",
) -> str:
    w, h = 560, 300
    left, right, top, bottom = 58, 24, 42 if title else 24, 48
    plot_w = w - left - right
    plot_h = h - top - bottom
    mx = max(probs) if probs else 1
    ymax = min(1.0, max(0.12, mx * 1.18))
    n = max(len(values), 1)
    gap = 12
    bar_w = max(18, (plot_w - gap * (n + 1)) / n)
    ticks = [0, 0.25 * ymax, 0.5 * ymax, 0.75 * ymax, ymax]
    inner = []
    if title:
        inner.append(
            f'<text x="{w/2}" y="26" text-anchor="middle" font-size="15" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{html.escape(title)}</text>'
        )
    inner.append(
        f'<line x1="{left}" y1="{top}" x2="{left}" y2="{top+plot_h}" '
        f'stroke="#7a7268" stroke-width="1.4"/>'
        f'<line x1="{left}" y1="{top+plot_h}" x2="{left+plot_w}" y2="{top+plot_h}" '
        f'stroke="#7a7268" stroke-width="1.4"/>'
    )
    for t in ticks:
        y = top + plot_h - (t / ymax) * plot_h
        inner.append(
            f'<line x1="{left-4}" y1="{y:.1f}" x2="{left+plot_w}" y2="{y:.1f}" '
            f'stroke="#e6e0d6" stroke-width="1"/>'
            f'<text x="{left-8}" y="{y+4:.1f}" text-anchor="end" font-size="11" '
            f'font-family="Georgia,serif" fill="#5c564e">{t:.2f}</text>'
        )
    inner.append(
        f'<text x="18" y="{top+plot_h/2}" text-anchor="middle" font-size="11" '
        f'font-family="Georgia,serif" fill="#5c564e" '
        f'transform="rotate(-90 18 {top+plot_h/2})">{html.escape(y_label)}</text>'
    )
    for i, (lab, p) in enumerate(zip(values, probs)):
        bh = (p / ymax) * plot_h
        x = left + gap + i * (bar_w + gap)
        y = top + plot_h - bh
        inner.append(
            f'<rect x="{x:.1f}" y="{y:.1f}" width="{bar_w:.1f}" height="{bh:.1f}" '
            f'rx="4" fill="#c9dff8" stroke="#3b6ea5" stroke-width="1.2"/>'
            f'<text x="{x+bar_w/2:.1f}" y="{y-6:.1f}" text-anchor="middle" font-size="11" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{p:g}</text>'
            f'<text x="{x+bar_w/2:.1f}" y="{top+plot_h+18}" text-anchor="middle" font-size="12" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{html.escape(str(lab))}</text>'
        )
    inner.append(
        f'<text x="{left+plot_w/2}" y="{h-10}" text-anchor="middle" font-size="12" '
        f'font-family="Georgia,serif" fill="#5c564e">Value of X</text>'
    )
    return _svg_wrap("".join(inner), w, h)


def two_way_table_svg(rows: list[list[str]], caption: str = "") -> str:
    n_r, n_c = len(rows), len(rows[0])
    w = 560
    cell_h = 36
    top = 36 if caption else 18
    h = top + n_r * cell_h + 18
    left, right = 18, 18
    cell_w = (w - left - right) / n_c
    inner = []
    if caption:
        inner.append(
            f'<text x="{w/2}" y="24" text-anchor="middle" font-size="14" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{html.escape(caption)}</text>'
        )
    for r, row in enumerate(rows):
        for c, val in enumerate(row):
            x = left + c * cell_w
            y = top + r * cell_h
            fill = "#efeae2" if r == 0 or c == 0 else "#ffffff"
            if r == n_r - 1 or c == n_c - 1:
                fill = "#e4eef8" if fill != "#efeae2" else "#efeae2"
            weight = "700" if r == 0 or c == 0 or r == n_r - 1 or c == n_c - 1 else "400"
            inner.append(
                f'<rect x="{x:.1f}" y="{y:.1f}" width="{cell_w:.1f}" height="{cell_h}" '
                f'fill="{fill}" stroke="#cbbfae"/>'
                f'<text x="{x+cell_w/2:.1f}" y="{y+cell_h/2+5:.1f}" text-anchor="middle" '
                f'font-size="13" font-weight="{weight}" font-family="Georgia,serif" '
                f'fill="#2b2b2b">{html.escape(val)}</text>'
            )
    return _svg_wrap("".join(inner), w, h)


def factory_tree_svg() -> str:
    """Three-stage factory inspection tree (machines → defect → detection)."""
    w, h = 820, 430
    nodes = [
        # (x, y, label)
        (70, 210, "Item"),
        (230, 80, "M1\n0.50"),
        (230, 210, "M2\n0.30"),
        (230, 340, "M3\n0.20"),
        (420, 40, "D\n0.02"),
        (420, 120, "not D\n0.98"),
        (420, 170, "D\n0.05"),
        (420, 250, "not D\n0.95"),
        (420, 300, "D\n0.10"),
        (420, 380, "not D\n0.90"),
        (640, 20, "Detected 0.85"),
        (640, 55, "Not 0.15"),
        (640, 100, "Detected 0.02"),
        (640, 135, "Not 0.98"),
        (640, 155, "Detected 0.85"),
        (640, 190, "Not 0.15"),
        (640, 230, "Detected 0.02"),
        (640, 265, "Not 0.98"),
        (640, 285, "Detected 0.85"),
        (640, 320, "Not 0.15"),
        (640, 360, "Detected 0.02"),
        (640, 395, "Not 0.98"),
    ]
    edges = [
        (0, 1), (0, 2), (0, 3),
        (1, 4), (1, 5), (2, 6), (2, 7), (3, 8), (3, 9),
        (4, 10), (4, 11), (5, 12), (5, 13),
        (6, 14), (6, 15), (7, 16), (7, 17),
        (8, 18), (8, 19), (9, 20), (9, 21),
    ]
    inner = [
        '<text x="410" y="22" text-anchor="middle" font-size="15" '
        'font-family="Georgia,serif" fill="#2b2b2b">'
        "Factory inspection tree</text>"
    ]
    for a, b in edges:
        x1, y1, _ = nodes[a]
        x2, y2, _ = nodes[b]
        inner.append(
            f'<line x1="{x1+36}" y1="{y1}" x2="{x2-40}" y2="{y2}" '
            f'stroke="#8a8175" stroke-width="1.2"/>'
        )
    for x, y, label in nodes:
        lines = label.split("\n")
        rh = 18 + 14 * len(lines)
        rw = 92 if len(lines[0]) > 8 else 78
        inner.append(
            f'<rect x="{x-rw/2}" y="{y-rh/2}" width="{rw}" height="{rh}" rx="8" '
            f'fill="#fff" stroke="#3b6ea5"/>'
        )
        for i, line in enumerate(lines):
            inner.append(
                f'<text x="{x}" y="{y - (len(lines)-1)*7 + i*14 + 4}" text-anchor="middle" '
                f'font-size="11" font-family="Georgia,serif" fill="#2b2b2b">'
                f"{html.escape(line)}</text>"
            )
    inner.append(
        '<text x="410" y="418" text-anchor="middle" font-size="11" '
        'font-family="Georgia,serif" fill="#5c564e">'
        "D = defective. Detection probabilities: 0.85 if defective, 0.02 if not defective."
        "</text>"
    )
    return _svg_wrap("".join(inner), w, h)


def markdown_table(headers: list[str], rows: list[list[str]]) -> str:
    lines = ["| " + " | ".join(headers) + " |"]
    lines.append("| " + " | ".join("---" for _ in headers) + " |")
    for row in rows:
        lines.append("| " + " | ".join(row) + " |")
    return "\n".join(lines)


def clean_pdf_text(s: str) -> str:
    s = PAGE_RE.sub(" ", s)
    s = s.replace("\u00a0", " ")
    s = s.replace("½", "1/2").replace("⅓", "1/3").replace("⅔", "2/3")
    s = s.replace("¼", "1/4").replace("¾", "3/4").replace("⅕", "1/5")
    s = s.replace("⅖", "2/5").replace("⅗", "3/5").replace("⅘", "4/5")
    s = s.replace("−", "-").replace("×", "×")
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def split_ae_inline(blob: str) -> list[str]:
    blob = clean_pdf_text(blob)
    blob = re.sub(r"\s+([A-E])\s+(?=P\(|E\(|Var\(|SD\(|μ|σ|Chebyshev|The |Both |Format |Portfolio|If |Using |p equals|k equals)", r"\n\1 ", blob)
    parts = re.split(r"(?:^|\n)\s*([A-E])\s+", blob)
    found: dict[str, str] = {}
    i = 1
    while i + 1 < len(parts):
        letter = parts[i]
        body = clean_pdf_text(parts[i + 1])
        body = re.split(
            r"(?:Question\s+\d+|Step\s+\d+|Formula:|Section\s+\d+)",
            body,
            maxsplit=1,
        )[0]
        body = re.sub(r"\s+", " ", body).strip(" .;")
        if body:
            found[letter] = body
        i += 2
    if len(found) < 5:
        raise ValueError(f"Could not split A–E from: {blob[:180]!r}")
    return [found[L] for L in LETTERS]


# ---------------------------------------------------------------------------
# Conditional probability
# ---------------------------------------------------------------------------


def parse_conditional_pdf() -> list[dict]:
    text = (EXTRACT_DIR / "conditional_norm.txt").read_text()
    text = PAGE_RE.sub(" ", text)
    pattern = re.compile(
        r"Question\s+(\d+)\s+(?:===== PAGE \d+ =====\s+)?(?:Difficulty:|Subtopic:)",
    )
    matches = list(pattern.finditer(text))
    by_num: dict[int, dict] = {}
    for i, m in enumerate(matches):
        qnum = int(m.group(1))
        if qnum in by_num:
            continue  # later hit is the answer key
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[m.start() : end]
        # Cut if the next piece is the answer writeup for the same number
        block = re.split(rf"Question\s+{qnum}\s+(?:\(|A\s+TRUE|A\s+FALSE)", block, maxsplit=1)[0]
        block = clean_pdf_text(block)
        body = re.sub(
            r"^Question\s+\d+\s+(?:Difficulty:[^.]*?|Subtopic:[^.]*?)?\s*"
            r"Evaluate each statement\.?\s*Mark it TRUE or FALSE\.?\s*",
            "",
            block,
            count=1,
            flags=re.I,
        )
        body = re.sub(r"^Difficulty:\s*[^\s]+(?:\s*\([^)]+\))?\s*", "", body)
        body = re.sub(r"^Subtopic:\s*Conditional Probability\s*", "", body, flags=re.I)
        body = re.sub(r"Evaluate each statement\.?\s*Mark it TRUE or FALSE\.?\s*", "", body, flags=re.I)
        am = re.search(r"\sA\s+P\(", body)
        if not am:
            am = re.search(r"\sA\s+", body)
        if not am:
            raise ValueError(f"No statement A in conditional Q{qnum}: {body[:200]!r}")
        stem = clean_pdf_text(body[: am.start()]).strip()
        stmts = split_ae_inline(body[am.start() :])
        item = {
            "qnum": qnum,
            "title": stem.split(".")[0][:80],
            "context": stem,
            "statements": stmts,
        }
        if qnum == 34:
            headers = ["", "Positive", "Negative", "Total"]
            rows = [
                ["Disease", "18", "2", "20"],
                ["No disease", "15", "165", "180"],
                ["Total", "33", "167", "200"],
            ]
            item["tables_markdown"] = markdown_table(headers, rows)
            item["figure"] = svg_data_uri(
                two_way_table_svg(
                    [headers] + rows,
                    "Diagnostic test: disease status by test result",
                )
            )
        if qnum == 35:
            item["figure"] = svg_data_uri(factory_tree_svg())
        by_num[qnum] = item
    missing = [n for n in range(1, 41) if n not in by_num]
    if missing:
        raise ValueError(f"Missing conditional questions from PDF: {missing}")
    return [by_num[n] for n in range(1, 41)]


# ---------------------------------------------------------------------------
# Expected value
# ---------------------------------------------------------------------------


TABLE_LINE_RE = re.compile(
    r"^(x|Outcome|Payout \(X\)|Payout|Value)\s+(.+)$",
    flags=re.I,
)


def extract_named_table(block: str) -> tuple[str, list[str], list[str]] | None:
    lines = [ln.strip() for ln in block.splitlines() if ln.strip()]
    for i, ln in enumerate(lines[:-1]):
        m = TABLE_LINE_RE.match(ln)
        if not m:
            continue
        nxt = lines[i + 1]
        m2 = re.match(r"^(P\(X\s*=\s*x\)|Probability)\s+(.+)$", nxt, flags=re.I)
        if not m2:
            continue
        headers = [m.group(1).strip()] + m.group(2).split()
        p_label = m2.group(1)
        p_vals = m2.group(2).split()
        if len(p_vals) == len(headers) - 1:
            return markdown_table(headers, [[p_label] + p_vals]), headers[1:], p_vals
    return None


def extract_px_pairs(stem: str) -> tuple[list[str], list[str]]:
    pairs = re.findall(
        r"P\(\s*X\s*=\s*([^)]+)\)\s*=\s*([0-9]+(?:\.[0-9]+)?(?:\s*-\s*p)?|p|q)",
        stem,
    )
    if len(pairs) >= 2:
        return [p[0].strip() for p in pairs], [p[1].strip() for p in pairs]
    # "$0 with probability 0.70, $10 with probability 0.25, and $50 with probability 0.05"
    alt = re.findall(
        r"(\$?-?[0-9][\d,]*(?:\.\d+)?(?:¢| ml| dollars)?)\s+with probability\s+([0-9]+(?:\.[0-9]+)?|p|q)",
        stem,
        flags=re.I,
    )
    if len(alt) >= 2:
        return [a[0] for a in alt], [a[1] for a in alt]
    # "X = $0 with probability 0.50, X = $100 with probability 0.35"
    alt2 = re.findall(
        r"X\s*=\s*(\$?-?[0-9][\d,]*(?:\.\d+)?(?:¢)?)\s+with probability\s+([0-9]+(?:\.[0-9]+)?|p|q)",
        stem,
        flags=re.I,
    )
    if len(alt2) >= 2:
        return [a[0] for a in alt2], [a[1] for a in alt2]
    return [], []


def parse_one_ev_block(block: str) -> dict:
    block = NOTATION_DUMP_RE.sub(" ", block)
    block = PAGE_RE.sub("\n", block)
    head = re.match(
        r"Question\s+\d+\s+[—\-]\s*(.+)",
        block.strip(),
    )
    title = head.group(1).strip() if head else "Expected value"
    title = re.split(r"\n", title, maxsplit=1)[0].strip()
    body = re.sub(r"^Question[^\n]*\n", "", block.strip(), count=1)
    body = re.sub(r"^Difficulty:[^\n]*\n", "", body, flags=re.I)
    body = re.sub(
        r"Evaluate each statement\.?\s*Mark it TRUE or FALSE\.?\s*",
        "",
        body,
        flags=re.I,
    )
    table_info = extract_named_table(body)
    if table_info:
        body = re.sub(
            r"(?im)^(x|Outcome|Payout \(X\)|Payout|Value)\s+.+\n(?:P\(X\s*=\s*x\)|Probability)\s+.+\n?",
            "",
            body,
        )
    # Drop standalone caption lines that only name the diagram
    body = re.sub(
        r"\n\s*Probability distribution of[^\n]+\n",
        "\n",
        body,
        flags=re.I,
    )
    body = re.sub(
        r"\n\s*Format [AB]: probability distribution[^\n]+\n",
        "\n",
        body,
        flags=re.I,
    )
    am = re.search(r"(?:^|\n)\s*A\s+(?:E\(|Var\(|SD\(|μ|σ|P\(|The |Both |Format |Portfolio|Chebyshev|p equals|k equals|If )", body)
    if not am:
        am = re.search(r"(?:^|\n)\s*A\s+", body)
    if not am:
        raise ValueError(f"No statement A in EV block {title}: {body[:220]!r}")
    stem = clean_pdf_text(body[: am.start()])
    stem = re.sub(r"^Difficulty:\s*\S+(?:\s*[—\-].*?)?(?=\s+[A-Z])", "", stem)
    stem = re.sub(r"^Difficulty:\s*\S+\s*", "", stem)
    stem = re.sub(
        r"(?:x|Outcome|Payout \(X\)|Payout|Value)\s+[-$\d,.]+(?:\s+[-$\d,.]+)+\s+(?:P\(X\s*=\s*x\)|Probability)\s+[0-9.]+(?:\s+[0-9.]+)+",
        " ",
        stem,
        flags=re.I,
    )
    stem = re.sub(r"\s+", " ", stem).strip()
    stmts = split_ae_inline(body[am.start() :])
    item: dict = {
        "title": title[:100],
        "context": stem,
        "statements": stmts,
    }
    values: list[str] = []
    probs: list[str] = []
    if table_info:
        md, values, probs = table_info
        item["tables_markdown"] = md
    else:
        values, probs = extract_px_pairs(stem)
        if values and probs and all(re.fullmatch(r"[0-9.]+", p) for p in probs):
            item["tables_markdown"] = markdown_table(
                ["x"] + values,
                [["P(X = x)"] + probs],
            )
    if title.lower().startswith("heads in three"):
        values, probs = ["0", "1", "2", "3"], ["0.125", "0.375", "0.375", "0.125"]
        item["tables_markdown"] = markdown_table(
            ["x", "0", "1", "2", "3"],
            [["P(X = x)", "1/8", "3/8", "3/8", "1/8"]],
        )
    if "comparing two formats" in title.lower():
        a_vals, a_ps = ["0", "1", "2", "3", "4"], [0.05, 0.20, 0.35, 0.30, 0.10]
        b_vals, b_ps = ["0", "1", "2", "3", "4"], [0.15, 0.20, 0.15, 0.30, 0.20]
        item["tables_markdown"] = (
            markdown_table(["x"] + a_vals, [["Format A"] + [str(p) for p in a_ps]])
            + "\n\n"
            + markdown_table(["x"] + b_vals, [["Format B"] + [str(p) for p in b_ps]])
        )
        # side-by-side bars in one wide svg
        item["figure"] = svg_data_uri(
            _two_dist_svg(a_vals, a_ps, b_vals, b_ps)
        )
    elif values and all(re.fullmatch(r"[0-9.]+", p) for p in probs):
        item["figure"] = svg_data_uri(
            dist_bar_svg(values, [float(p) for p in probs], title=title)
        )
    return item


def _two_dist_svg(a_vals, a_ps, b_vals, b_ps) -> str:
    # Compose two small charts stacked.
    a = dist_bar_svg(a_vals, a_ps, "Format A")
    b = dist_bar_svg(b_vals, b_ps, "Format B")
    # Unwrap inner and stack
    def inner(svg: str) -> str:
        m = re.search(r"<rect width.*?</svg>", svg, flags=re.S)
        return m.group(0)[:-6] if m else svg

    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 620" width="560" height="620" role="img">'
        f'<g>{inner(a)}</g><g transform="translate(0,310)">{inner(b)}</g></svg>'
    )


def parse_ev_pdf() -> list[dict]:
    text = (EXTRACT_DIR / "ev_var_norm.txt").read_text()
    sections = re.split(r"Section 1 — Questions", text)
    items: list[dict] = []
    for sec in sections[1:]:
        qsec = re.split(r"Section 2", sec, maxsplit=1)[0]
        chunks = re.split(r"(?=Question\s+\d+\s+[—\-]\s+)", qsec)
        for chunk in chunks:
            if not re.match(r"Question\s+\d+\s+[—\-]", chunk.strip()):
                continue
            if re.search(r"Step 0 —|Step 1 —", chunk[:500]):
                continue
            items.append(parse_one_ev_block(chunk))
    if len(items) != 41:
        raise ValueError(f"Expected 41 EV questions from PDF, got {len(items)}: {[x['title'] for x in items]}")
    return items


def overlay_pdf_stems(tasks: list[dict], pdf_items: list[dict], label: str) -> list[dict]:
    if len(tasks) != len(pdf_items):
        raise ValueError(
            f"{label}: parsed {len(tasks)} markdown tasks vs {len(pdf_items)} PDF questions"
        )
    for task, pdf in zip(tasks, pdf_items):
        if pdf.get("title"):
            task["title"] = pdf["title"]
        task["context"] = pdf["context"]
        task["statements"] = pdf["statements"]
        if pdf.get("figure"):
            task["figure"] = pdf["figure"]
        if pdf.get("tables_markdown"):
            task["tables_markdown"] = pdf["tables_markdown"]
        task["_pdf_locked_stem"] = True
    return tasks


# ---------------------------------------------------------------------------
# Per-statement explanations from the original PDFs
# ---------------------------------------------------------------------------


_WRAPUP_RE = (
    r"(?:Question\s+\d+|Step\s+\d+\s+[—\-]|Section\s+\d+|Common traps|"
    r"(?:All five|Four of the five|Three of the five|Two of the five|"
    r"Only one of the five|One of the five) statements)"
)


def _cut_next_question(chunk: str, current: int) -> str:
    m = re.search(rf"Question\s+(?!{current}\b)\d+\b", chunk[12:])
    return chunk[: m.start() + 12] if m else chunk


def _letter_bodies(block: str) -> tuple[dict[str, bool], dict[str, str]]:
    """Split an answer writeup into A–E verdicts and bodies."""
    parts = re.split(r"(?:^|(?<=\s))([A-E])\s+(TRUE|FALSE)\b\s*", block)
    verdicts: dict[str, bool] = {}
    bodies: dict[str, str] = {}
    i = 1
    while i + 2 < len(parts):
        letter = parts[i]
        verdict = parts[i + 1].upper() == "TRUE"
        body = clean_pdf_text(parts[i + 2])
        body = re.split(_WRAPUP_RE, body, maxsplit=1)[0]
        body = re.sub(r"\s+", " ", body).strip()
        if letter not in verdicts:
            verdicts[letter] = verdict
            bodies[letter] = body
        i += 3
    return verdicts, bodies

_ARITH_RE = re.compile(
    r"(?P<val>-?\$?\d[\d,]*(?:\.\d+)?)\s*%?\s*,?\s+"
    r"which is\s+(?P<neg>not\s+)?(?P<op>greater than|less than)\s+"
    r"(?P<thr>\$?-?\d[\d,]*(?:\.\d+)?)\s*%?",
    flags=re.I,
)


def explanation_arithmetic_flags(label: str, expls: list[str]) -> list[str]:
    """Flag explanations whose own 'which is (not) greater/less than' claim is false."""
    flags: list[str] = []
    for i, text in enumerate(expls):
        for m in _ARITH_RE.finditer(text or ""):
            val_s = m.group("val").replace(",", "").replace("$", "")
            thr_s = m.group("thr").replace(",", "").replace("$", "")
            if not val_s or not thr_s:
                continue
            val = float(val_s)
            thr = float(thr_s)
            rel = val > thr if m.group("op").lower() == "greater than" else val < thr
            sentence_true = (not rel) if m.group("neg") else rel
            if not sentence_true:
                flags.append(
                    f"{label} {LETTERS[i]}: arithmetic in {m.group(0)!r} does not hold"
                )
    return flags


def format_pdf_explanation(letter: str, is_true: bool, body: str) -> str:
    verdict = "True" if is_true else "False"
    text = (body or "").strip()
    formula = ""
    fm = re.search(r"\bFormula:\s*(.+)$", text)
    if fm:
        formula = re.split(_WRAPUP_RE, fm.group(1), maxsplit=1)[0].strip().rstrip(".")
        text = text[: fm.start()].strip()
    text = re.sub(r"\s+", " ", text).strip()
    sentences = [
        s.strip()
        for s in re.split(r"(?<=[.!?])\s+(?=[A-Z(])", text)
        if s.strip()
    ]
    takeaway = sentences[-1] if sentences else f"The statement is {verdict.lower()}."
    if len(takeaway) > 240:
        takeaway = takeaway[:237].rsplit(" ", 1)[0] + "."
    lines = [f"Statement {letter} — {verdict}", "", text or f"The statement is {verdict.lower()}."]
    if formula:
        tex = formula

        def _p_wrap(m: re.Match[str]) -> str:
            inner = m.group(1)
            if "=" in inner or "\\" in inner:
                return f"P({inner})"
            return f"P(\\text{{{inner}}})"

        tex = re.sub(r"\bP\(([^)]+)\)", _p_wrap, tex)
        tex = tex.replace(" / ", "/").replace(" × ", "\\times ")
        lines.extend(["", f"$$\n{tex}\n$$"])
    lines.extend(["", f"Takeaway: {takeaway}"])
    return "\n".join(lines)


def find_pdf_answer_block(text: str, qnum: int) -> str | None:
    for m in re.finditer(rf"Question\s+{qnum}\b", text):
        rest = text[m.start() : m.start() + 12000]
        chunk = _cut_next_question(rest, qnum)
        if re.search(r"\bA\s+(TRUE|FALSE)\b", chunk) and re.search(
            r"\bE\s+(TRUE|FALSE)\b", chunk
        ):
            return chunk
    return None


def parse_conditional_explanations() -> list[dict]:
    text = PAGE_RE.sub(" ", (EXTRACT_DIR / "conditional_norm.txt").read_text())
    items = []
    for n in range(1, 41):
        block = find_pdf_answer_block(text, n)
        if not block:
            raise ValueError(f"Missing conditional PDF explanations for Q{n}")
        verdicts, bodies = _letter_bodies(block)
        if any(L not in bodies for L in LETTERS):
            raise ValueError(f"Conditional Q{n} missing letters {set(LETTERS) - set(bodies)}")
        items.append({"verdicts": [verdicts[L] for L in LETTERS], "bodies": [bodies[L] for L in LETTERS]})
    return items


def parse_ev_explanations() -> list[dict]:
    """Collect 41 EV answer writeups in the same order as parse_ev_pdf()."""
    text = PAGE_RE.sub("\n", (EXTRACT_DIR / "ev_var_norm.txt").read_text())
    items: list[dict] = []
    chunks = re.split(r"(?=Question\s+\d+\s+(?:\(|—))", text)
    for chunk in chunks:
        if not re.match(r"Question\s+\d+\s+(?:\(|—)", chunk.strip()):
            continue
        if not re.search(r"\bA\s+(TRUE|FALSE)\b", chunk):
            continue
        if "Evaluate each statement" in chunk[:500]:
            continue
        verdicts, bodies = _letter_bodies(chunk)
        if any(L not in bodies for L in LETTERS):
            continue
        joined = " ".join(bodies[L] for L in LETTERS)
        if len(joined) < 80:
            continue
        items.append({"verdicts": [verdicts[L] for L in LETTERS], "bodies": [bodies[L] for L in LETTERS]})
    if len(items) != 41:
        raise ValueError(f"Expected 41 EV explanation blocks, got {len(items)}")
    return items


def parse_incl_explanations() -> dict[int, dict]:
    text = PAGE_RE.sub(" ", (EXTRACT_DIR / "incl_excl_norm.txt").read_text())
    out: dict[int, dict] = {}
    for n in range(1, 30):
        block = find_pdf_answer_block(text, n)
        if not block:
            continue
        verdicts, bodies = _letter_bodies(block)
        if any(L not in bodies for L in LETTERS):
            continue
        out[n] = {"verdicts": [verdicts[L] for L in LETTERS], "bodies": [bodies[L] for L in LETTERS]}
    return out


def overlay_pdf_explanations(
    tasks: list[dict],
    pdf_expls: list[dict],
    label: str,
    mismatches: list[str],
) -> list[dict]:
    if len(tasks) != len(pdf_expls):
        raise ValueError(f"{label}: {len(tasks)} tasks vs {len(pdf_expls)} PDF explanation blocks")
    for i, (task, pdf) in enumerate(zip(tasks, pdf_expls), start=1):
        stored = task.get("answer_key") or []
        if stored != pdf["verdicts"]:
            mismatches.append(
                f"{label} Q{i} ({task.get('title','')}): stored {stored} vs PDF {pdf['verdicts']}"
            )
        task["tactical_explanations"] = [
            format_pdf_explanation(L, stored[j] if stored else pdf["verdicts"][j], pdf["bodies"][j])
            for j, L in enumerate(LETTERS)
        ]
        mismatches.extend(
            explanation_arithmetic_flags(
                f"{label} Q{i} ({task.get('title','')})",
                task["tactical_explanations"],
            )
        )
        task["_pdf_locked_expl"] = True
    return tasks

