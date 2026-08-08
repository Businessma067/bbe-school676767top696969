#!/usr/bin/env python3
"""
BBE Path Economics — premium learning-system PDF (reportlab only).
"""
from __future__ import annotations

import json
import math
import re
from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    KeepTogether,
    PageBreak,
    Flowable,
)

ROOT = Path(__file__).resolve().parent
CONTENT = json.loads((ROOT / "output" / "book-content.json").read_text(encoding="utf-8"))
OUT_PDF = ROOT / "output" / "bbe-economics-textbook.pdf"
OUT_MANIFEST = ROOT / "output" / "chapter-pages.json"
OUT_TEXT = ROOT / "output" / "book-plain.txt"

ACCENT = HexColor("#C45C1A")
ACCENT_SOFT = HexColor("#FBF0E6")
ACCENT_LIGHT = HexColor("#E8A06A")
INK = HexColor("#1F1A17")
MUTED = HexColor("#5C534C")
TRAP_BG = HexColor("#F8EDE8")
EXAM_BG = HexColor("#F3F0EA")
SCENE_BG = HexColor("#F7F4F0")
THINK_BG = HexColor("#EEF4F1")
CONNECT_BG = HexColor("#F5F2EE")
MECH_BG = HexColor("#FBF0E6")
GRID = HexColor("#F0E8DE")  # very light — guides must never compete with labels
AXIS = HexColor("#4A423B")
CURVE2 = HexColor("#8A6A4F")
NOTE = HexColor("#3F3730")
RULE = HexColor("#D9D0C6")
FIG_EDGE = HexColor("#C9C0B6")
FIG_FILL = HexColor("#FCFAF7")

W, H = A4
L_M, R_M, T_M, B_M = 19 * mm, 19 * mm, 20 * mm, 18 * mm
PAD = 12

plain_parts: list[str] = []
TABLE_N = 0
FIGURE_N = 0
PLACEHOLDER_FIGS: list[str] = []


class DocState:
    footer_chapter = ""
    chapter: int | None = None
    skip_chrome = False
    cover_pages: set[int] = set()


STATE = DocState()

_UNICODE_FIX = str.maketrans({
    "\u2014": "-",
    "\u2013": "-",
    "\u2018": "'",
    "\u2019": "'",
    "\u201c": '"',
    "\u201d": '"',
    "\u2026": "...",
    "\u00a0": " ",
    "\u2191": " rises",
    "\u2193": " falls",
    "\u2192": " -> ",
    "\u2190": " <- ",
    "\u21d2": " => ",
    "\u220e": "",
    "\u2022": "-",
    "\u00b7": "-",
    "\u2264": "<=",
    "\u2265": ">=",
    "\u00d7": "x",
    "\u2212": "-",
    "\u20ac": "EUR ",
})


def esc(s: str) -> str:
    s = (s or "").translate(_UNICODE_FIX)
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\n", "<br/>")
    )


def rich(s: str) -> str:
    """Escape text but honour **semantic bold** markers like the Fuhrmann book."""
    s = (s or "").translate(_UNICODE_FIX)
    parts = re.split(r"\*\*(.+?)\*\*", s)
    out = []
    for i, part in enumerate(parts):
        piece = (
            part.replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("\n", "<br/>")
        )
        out.append(f"<b>{piece}</b>" if i % 2 else piece)
    return "".join(out)


def strip_label(caption: str, kind: str = "") -> str:
    """Drop 'Figure 13.' / 'Table 9:' style prefixes — captions are descriptive only."""
    s = (caption or "").strip()
    s = re.sub(r"^\s*(figure|table|fig\.?|tab\.?)\s*\d*\s*[.:\u2014\-–—]?\s*", "", s, flags=re.I)
    return s.strip()


def lead_bold(term: str, text: str) -> str:
    """Strong bold lead-in for definitions (Fuhrmann-style emphasis)."""
    term = (term or "").strip()
    text = (text or "").strip()
    for prefix in (term, f"The {term}", f"A {term}", f"An {term}"):
        if prefix and text.lower().startswith(prefix.lower()):
            rest = text[len(prefix):]
            return f"<b>{esc(text[: len(prefix)])}</b>{esc(rest)}"
    return f"<b>{esc(term)}</b> {esc(text)}"


def fit_header_label(canvas, label: str, max_w: float, size: float = 8.0) -> tuple[str, float]:
    """Shrink / truncate on word boundaries so the running head never mid-cuts a word."""
    label = label.translate(_UNICODE_FIX).strip()
    if not label:
        return "", size
    font = "Helvetica-Bold"
    while size > 6.0 and canvas.stringWidth(label, font, size) > max_w:
        size -= 0.25
    if canvas.stringWidth(label, font, size) <= max_w:
        return label, size
    words = label.split()
    out = ""
    for w in words:
        trial = (out + " " + w).strip()
        if canvas.stringWidth(trial + "...", font, size) <= max_w:
            out = trial
        else:
            break
    if not out and words:
        # Extremely long single token — hard cut as last resort
        token = words[0]
        while token and canvas.stringWidth(token + "...", font, size) > max_w:
            token = token[:-1]
        out = token
    return (out + "...") if out else "", size


def styles():
    b = getSampleStyleSheet()
    return {
        "cover_brand": ParagraphStyle(
            "cbr", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=13, textColor=ACCENT, spaceAfter=14,
        ),
        "cover_title": ParagraphStyle(
            "cti", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=30, textColor=INK, leading=36, spaceAfter=10,
        ),
        "cover_sub": ParagraphStyle(
            "csu", parent=b["Normal"], fontName="Helvetica",
            fontSize=13, textColor=MUTED, leading=17, spaceAfter=6,
        ),
        "cover_method": ParagraphStyle(
            "cme", parent=b["Normal"], fontName="Helvetica",
            fontSize=11, textColor=INK, leading=15, spaceBefore=16, spaceAfter=4,
        ),
        "toc_h": ParagraphStyle(
            "th", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=19, textColor=INK, spaceAfter=14,
        ),
        "toc_ch": ParagraphStyle(
            "tc", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=12.5, textColor=ACCENT, spaceBefore=12, spaceAfter=3,
        ),
        "toc_sec": ParagraphStyle(
            "ts", parent=b["Normal"], fontName="Helvetica",
            fontSize=10.5, textColor=INK, leftIndent=14, leading=13.5, spaceAfter=1.5,
        ),
        "ch_label": ParagraphStyle(
            "chl", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=11, textColor=ACCENT, spaceBefore=4, spaceAfter=4,
        ),
        "ch_title": ParagraphStyle(
            "cht", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=24, textColor=INK, leading=28, spaceBefore=2, spaceAfter=10,
        ),
        "sec": ParagraphStyle(
            "sec", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=14, textColor=ACCENT, leading=17, spaceBefore=14, spaceAfter=7,
        ),
        "body": ParagraphStyle(
            "body", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=15.6, alignment=TA_JUSTIFY, spaceAfter=8,
        ),
        "body_boldlead": ParagraphStyle(
            "bbl", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=15.6, alignment=TA_JUSTIFY, spaceAfter=8,
        ),
        "example": ParagraphStyle(
            "ex", parent=b["Normal"], fontName="Helvetica-Oblique",
            fontSize=11.5, textColor=INK, leading=15.6, alignment=TA_JUSTIFY, spaceAfter=8,
        ),
        "obj_h": ParagraphStyle(
            "oh", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=12, textColor=INK, spaceBefore=6, spaceAfter=6,
        ),
        "obj_item": ParagraphStyle(
            "oi", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=15.2, leftIndent=18, spaceAfter=3,
        ),
        "recap_h": ParagraphStyle(
            "rh", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=14, textColor=ACCENT, spaceBefore=10, spaceAfter=8,
        ),
        "caption": ParagraphStyle(
            "cap", parent=b["Normal"], fontName="Helvetica-Oblique",
            fontSize=11.5, textColor=ACCENT, alignment=TA_LEFT, spaceBefore=3, spaceAfter=10,
        ),
        "bullet": ParagraphStyle(
            "bu", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=15.2, leftIndent=16, spaceAfter=4,
        ),
        "body_emph": ParagraphStyle(
            "bem", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=15.6, alignment=TA_JUSTIFY, spaceAfter=8,
        ),
        "callout_label": ParagraphStyle(
            "cl", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=9.5, textColor=ACCENT, leading=12, spaceAfter=2,
        ),
        "callout_title": ParagraphStyle(
            "ctt", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=11.5, textColor=INK, leading=14.5, spaceAfter=2,
        ),
        "callout_body": ParagraphStyle(
            "cb", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.2, textColor=INK, leading=15, alignment=TA_JUSTIFY, spaceAfter=0,
        ),
        "formula": ParagraphStyle(
            "fo", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=15.2, alignment=TA_LEFT,
        ),
        "formula_vars": ParagraphStyle(
            "fv", parent=b["Normal"], fontName="Helvetica-Oblique",
            fontSize=10.5, textColor=MUTED, leading=13.5, spaceBefore=3,
        ),
        "worked_h": ParagraphStyle(
            "wh", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=12, textColor=ACCENT, leading=15, spaceAfter=4,
        ),
        "worked_step": ParagraphStyle(
            "ws", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=15.2, leftIndent=16, spaceAfter=3,
        ),
        "worked_result": ParagraphStyle(
            "wr", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=11.5, textColor=INK, leading=15.2, spaceBefore=4, spaceAfter=6,
        ),
        "take_h": ParagraphStyle(
            "tkh", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=12, textColor=INK, spaceBefore=4, spaceAfter=5,
        ),
        "check_h": ParagraphStyle(
            "ckh", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=12, textColor=INK, spaceBefore=4, spaceAfter=5,
        ),
        "cell": ParagraphStyle(
            "cell", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=14.8, alignment=TA_LEFT,
        ),
        "cell_b": ParagraphStyle(
            "cellb", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=11.5, textColor=INK, leading=14.8, alignment=TA_LEFT,
        ),
        "cell_c": ParagraphStyle(
            "cellc", parent=b["Normal"], fontName="Helvetica",
            fontSize=11.5, textColor=INK, leading=14.8, alignment=TA_CENTER,
        ),
        "cell_h": ParagraphStyle(
            "cellh", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=11.5, textColor=white, leading=14.8, alignment=TA_CENTER,
        ),
        "cell_h_l": ParagraphStyle(
            "cellhl", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=11.5, textColor=white, leading=14.8, alignment=TA_LEFT,
        ),
        "compare_h": ParagraphStyle(
            "cmh", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=11.5, textColor=white, leading=14, alignment=TA_CENTER,
        ),
        "compare_item": ParagraphStyle(
            "cmi", parent=b["Normal"], fontName="Helvetica",
            fontSize=11, textColor=INK, leading=14, alignment=TA_LEFT,
        ),
        "end_title": ParagraphStyle(
            "et", parent=b["Normal"], fontName="Helvetica-Bold",
            fontSize=19, textColor=INK, leading=23, spaceAfter=10,
        ),
    }


S = styles()


# ─── Square accent bullet ─────────────────────────────────────────────
class SquareBullet(Flowable):
    def __init__(self, text: str, width: float, style_name: str = "bullet"):
        super().__init__()
        self.width = width
        # Bullets: first clause bold when marked with **…**; else lead phrase before —/:
        raw = (text or "").strip()
        if "**" in raw:
            html = rich(raw)
        else:
            m = re.match(r"^(.+?)(\s*[—–\-:]\s*)(.+)$", raw, flags=re.S)
            if m and len(m.group(1)) <= 48:
                html = f"<b>{esc(m.group(1))}</b>{esc(m.group(2))}{rich(m.group(3)) if '**' in m.group(3) else esc(m.group(3))}"
            else:
                html = esc(raw)
        self._p = Paragraph(html, S[style_name])
        self._h = 0

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        _, self._h = self._p.wrap(self.width - 16, ah)
        self.height = max(self._h, 10) + 2
        return self.width, self.height

    def draw(self):
        c = self.canv
        c.setFillColor(ACCENT)
        c.rect(0, self.height - 11, 5.5, 5.5, stroke=0, fill=1)
        self._p.drawOn(c, 12, 1)


# ─── Callout with left accent strip ───────────────────────────────────
class Callout(Flowable):
    """Soft box with a solid left accent bar and a small uppercase label."""

    def __init__(
        self,
        label: str,
        body_flowables: list,
        width: float,
        bg=ACCENT_SOFT,
        bar=ACCENT,
        pad: float = 8,
    ):
        super().__init__()
        self.label = (label or "").upper()
        self.body = body_flowables
        self.width = width
        self.bg = bg
        self.bar = bar
        self.pad = pad
        self._inner_w = 0
        self._label_h = 0
        self._body_h = 0
        self.height = 0

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        bar_w = 4.0
        self._inner_w = self.width - bar_w - 2 * self.pad
        label_p = Paragraph(esc(self.label), S["callout_label"])
        _, self._label_h = label_p.wrap(self._inner_w, ah)
        self._label_p = label_p
        y = 0
        for f in self.body:
            _, h = f.wrap(self._inner_w, ah)
            y += h
        self._body_h = y
        self.height = self.pad + self._label_h + 2 + self._body_h + self.pad
        return self.width, self.height

    def draw(self):
        c = self.canv
        c.saveState()
        c.setFillColor(self.bg)
        c.setStrokeColor(RULE)
        c.setLineWidth(0.4)
        # Square corners (finance/account style — not rounded pills)
        c.rect(0, 0, self.width, self.height, stroke=1, fill=1)
        c.setFillColor(self.bar)
        c.rect(0, 0, 4, self.height, stroke=0, fill=1)
        x = 4 + self.pad
        y = self.height - self.pad - self._label_h
        self._label_p.drawOn(c, x, y)
        y -= 2
        for f in self.body:
            fw, fh = f.wrap(self._inner_w, self.height)
            y -= fh
            f.drawOn(c, x, y)
        c.restoreState()


def callout(label: str, text: str, width: float, bg, title: str = "") -> KeepTogether:
    parts = []
    if title:
        parts.append(Paragraph(esc(title), S["callout_title"]))
    if text:
        parts.append(Paragraph(esc(text), S["callout_body"]))
    if not parts:
        parts.append(Paragraph("", S["callout_body"]))
    return KeepTogether([
        Spacer(1, 3),
        Callout(label, parts, width, bg=bg),
        Spacer(1, 6),
    ])


# ─── Tables (Fuhrmann-style: orange header, dashed internals, no outer box) ─
def _is_numeric_cell(val) -> bool:
    s = str(val or "").strip()
    if not s:
        return False
    s = (
        s.replace(",", "")
        .replace("€", "")
        .replace("%", "")
        .replace("≈", "")
        .replace("~", "")
        .replace(" ", "")
    )
    if s.endswith("k") or s.endswith("K"):
        s = s[:-1]
    try:
        float(s)
        return True
    except ValueError:
        return False


def make_table(headers, rows, width, caption: str = "", center_body: bool = False):
    """Square finance table: orange header, dashed grid, numbers never wrap."""
    from reportlab.pdfbase.pdfmetrics import stringWidth

    global TABLE_N
    TABLE_N += 1
    ncols = max(len(headers), 1)
    headers = list(headers) + [""] * max(0, ncols - len(headers))
    norm_rows = []
    for row in rows:
        r = list(row) + [""] * max(0, ncols - len(row))
        norm_rows.append(r[:ncols])

    # Per-column alignment: money/numbers RIGHT, labels LEFT
    aligns = []
    for i in range(ncols):
        vals = [r[i] for r in norm_rows if str(r[i]).strip()]
        hdr = str(headers[i]).strip().lower()
        if hdr in ("eur", "€", "$", "%", "year 1", "year 2") or (
            vals and all(_is_numeric_cell(v) for v in vals)
        ):
            aligns.append("RIGHT")
        elif center_body:
            aligns.append("CENTER")
        else:
            aligns.append("LEFT")

    # Classic 4-col T-account: label | EUR | label | EUR
    hdrs_l = [str(h).strip().lower() for h in headers]
    if ncols == 4 and hdrs_l[1] in ("eur", "€", "€") and hdrs_l[3] in ("eur", "€", "€"):
        eur_w = max(52, stringWidth("000,000", "Helvetica-Bold", 11.5) + 18)
        label_w = (width - 2 * eur_w) / 2
        col_ws = [label_w, eur_w, label_w, eur_w]
    else:
        # Numeric cols get hard min width from content so "31,000" stays one line
        col_ws = [0.0] * ncols
        flex = []
        for i in range(ncols):
            samples = [str(headers[i])] + [str(r[i]) for r in norm_rows]
            font = "Helvetica-Bold" if i == 0 else "Helvetica"
            need = max(stringWidth(s, font, 11.5) for s in samples) + 16
            if aligns[i] in ("RIGHT", "CENTER"):
                col_ws[i] = max(need, 44)
            else:
                flex.append(i)
                col_ws[i] = need
        used = sum(col_ws)
        if used > width and flex:
            # shrink label cols first
            over = used - width
            flex_total = sum(col_ws[i] for i in flex) or 1
            for i in flex:
                col_ws[i] = max(48, col_ws[i] - over * (col_ws[i] / flex_total))
        elif used < width:
            rem = width - used
            if flex:
                for i in flex:
                    col_ws[i] += rem / len(flex)
            else:
                col_ws[-1] += rem

    label_col = ncols >= 3 and aligns[0] == "LEFT"

    def cell_para(text, header=False, align="LEFT", bold_label=False):
        raw = str(text)
        # Short numeric cells: plain string (ReportLab will not wrap mid-number)
        if not header and align == "RIGHT" and _is_numeric_cell(raw) and len(raw) <= 14:
            return raw.translate(_UNICODE_FIX)
        if header:
            style = S["cell_h"] if align != "LEFT" else S["cell_h_l"]
        elif bold_label:
            style = S["cell_b"]
        elif align == "CENTER":
            style = S["cell_c"]
        elif align == "RIGHT":
            style = ParagraphStyle("cellr", parent=S["cell"], alignment=TA_RIGHT)
        else:
            style = S["cell"]
        return Paragraph(rich(raw) if "**" in raw else esc(raw), style)

    data = [[cell_para(headers[i], True, aligns[i]) for i in range(ncols)]]
    for r in norm_rows:
        data.append([
            cell_para(r[i], False, aligns[i], bold_label=(label_col and i == 0))
            for i in range(ncols)
        ])

    t = Table(data, colWidths=col_ws, repeatRows=1)
    cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), ACCENT),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("TEXTCOLOR", (0, 1), (-1, -1), INK),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        # Square grid — dashed internals, solid bottom rule (no rounded chrome)
        ("BOX", (0, 0), (-1, -1), 0.9, ACCENT),
        ("LINEBELOW", (0, 0), (-1, -2), 0.55, ACCENT_LIGHT, 1, (1.5, 2.5)),
        ("LINEAFTER", (0, 0), (-2, -1), 0.55, ACCENT_LIGHT, 1, (1.5, 2.5)),
        ("LINEBELOW", (0, -1), (-1, -1), 1.0, ACCENT),
    ]
    for i, al in enumerate(aligns):
        cmds.append(("ALIGN", (i, 0), (i, -1), al))
    t.setStyle(TableStyle(cmds))

    cap = strip_label(caption, "table")
    parts = [Spacer(1, 2), t]
    if cap:
        parts.append(Paragraph(rich(cap), S["caption"]))
    parts.append(Spacer(1, 6))
    return KeepTogether(parts)


def make_compare(block: dict, width: float):
    """Two-column comparison using the same table chrome (no orange outer box)."""
    left = block.get("left") or {}
    right = block.get("right") or {}
    title = block.get("title") or ""
    headers = [left.get("title") or "A", right.get("title") or "B"]
    li = left.get("items") or []
    ri = right.get("items") or []
    n = max(len(li), len(ri))
    rows = []
    for i in range(n):
        rows.append([
            li[i] if i < len(li) else "",
            ri[i] if i < len(ri) else "",
        ])
    parts = []
    if title:
        parts.append(Paragraph(f"<b>{esc(title)}</b>", S["body_boldlead"]))
    parts.append(make_table(headers, rows, width, caption="Comparison"))
    return KeepTogether(parts)


# ─── Drawing toolkit ──────────────────────────────────────────────────
def _txt(c, x, y, s, size=11.5, bold=False, color=None, align="c", italic=False):
    s = (s or "").translate(_UNICODE_FIX)
    if bold and italic:
        font = "Helvetica-BoldOblique"
    elif bold:
        font = "Helvetica-Bold"
    elif italic:
        font = "Helvetica-Oblique"
    else:
        font = "Helvetica"
    c.setFont(font, size)
    c.setFillColor(color or INK)
    if align == "c":
        c.drawCentredString(x, y, s)
    elif align == "r":
        c.drawRightString(x, y, s)
    else:
        c.drawString(x, y, s)


def _box(c, x, y, w, h, fill=white, stroke=None, dashed=False, lw=0.7, radius=0):
    # Soft grey edges by default — avoid stacking orange outlines inside figures
    if stroke is None:
        stroke = FIG_EDGE
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(lw)
    if dashed:
        c.setDash(1.6, 1.6)
    if radius:
        c.roundRect(x, y, w, h, radius, stroke=1, fill=1)
    else:
        c.rect(x, y, w, h, stroke=1, fill=1)
    c.setDash()


def _head(c, x, y, ang, size=5.5, color=ACCENT):
    p = c.beginPath()
    p.moveTo(x, y)
    p.lineTo(x - size * math.cos(ang - 0.42), y - size * math.sin(ang - 0.42))
    p.lineTo(x - size * math.cos(ang + 0.42), y - size * math.sin(ang + 0.42))
    p.close()
    c.setFillColor(color)
    c.drawPath(p, fill=1, stroke=0)


def _arrow(c, x1, y1, x2, y2, color=ACCENT, lw=1.1, head=5.5, dashed=False):
    c.setStrokeColor(color)
    c.setLineWidth(lw)
    c.setDash(2.5, 2) if dashed else c.setDash()
    ang = math.atan2(y2 - y1, x2 - x1)
    c.line(x1, y1, x2 - head * 0.8 * math.cos(ang), y2 - head * 0.8 * math.sin(ang))
    c.setDash()
    _head(c, x2, y2, ang, head, color)


def _h_arrow_labeled(c, x1, x2, y, label, color=ACCENT, lw=1.15, head=5.5, size=9):
    """Horizontal arrow with a clean label gap — text never sits on the shaft."""
    if x2 < x1:
        x1, x2 = x2, x1
        to_right = False
    else:
        to_right = True
    font = "Helvetica"
    tw = c.stringWidth(label, font, size)
    mid = (x1 + x2) / 2
    gap = tw / 2 + 6
    # leave a white pocket for the label
    c.setFillColor(FIG_FILL)
    c.rect(mid - gap, y - 5, gap * 2, 12, stroke=0, fill=1)
    c.setStrokeColor(color)
    c.setLineWidth(lw)
    c.setDash()
    if to_right:
        c.line(x1, y, mid - gap, y)
        c.line(mid + gap, y, x2 - head * 0.8, y)
        _head(c, x2, y, 0, head, color)
    else:
        c.line(x2, y, mid + gap, y)
        c.line(mid - gap, y, x1 + head * 0.8, y)
        _head(c, x1, y, math.pi, head, color)
    _txt(c, mid, y - 3, label, size, False, INK)


def _arrow2(c, x1, y1, x2, y2, color=NOTE, lw=0.9, head=4.5):
    c.setStrokeColor(color)
    c.setLineWidth(lw)
    c.setDash()
    c.line(x1, y1, x2, y2)
    ang = math.atan2(y2 - y1, x2 - x1)
    _head(c, x2, y2, ang, head, color)
    _head(c, x1, y1, ang + math.pi, head, color)


def _tree(c, parent_x, y_from, children_x, y_to, color=ACCENT, lw=1.0):
    my = (y_from + y_to) / 2
    c.setStrokeColor(color)
    c.setLineWidth(lw)
    c.setDash()
    c.line(parent_x, y_from, parent_x, my)
    lo, hi = min(children_x + [parent_x]), max(children_x + [parent_x])
    if hi - lo > 0.5:
        c.line(lo, my, hi, my)
    for cx in children_x:
        c.line(cx, my, cx, y_to + 4.5)
        _head(c, cx, y_to, -math.pi / 2, 5.0, color)


def _chart(c, x, y, w, h, title, subtitle, max_q, max_p, q_step, p_step,
           x_label="Quantity", y_label="Price"):
    top = 0.0
    if title:
        _txt(c, x, y + h - 9, title, 12, True, ACCENT, "l")
        if subtitle:
            tw = c.stringWidth(title, "Helvetica-Bold", 12)
            _txt(c, x + tw + 6, y + h - 9, subtitle, 11, False, INK, "l")
        top = 22.0

    ox, oy = x + 48, y + 36
    pw, ph = w - 66, h - top - 48

    c.setStrokeColor(GRID)
    c.setLineWidth(0.4)
    c.setDash(1, 2)
    p = p_step
    while p <= max_p + 0.001:
        yy = oy + ph * (p / max_p)
        c.line(ox, yy, ox + pw, yy)
        p += p_step
    q = q_step
    while q <= max_q + 0.001:
        xx = ox + pw * (q / max_q)
        c.line(xx, oy, xx, oy + ph)
        q += q_step
    c.setDash()

    c.setStrokeColor(AXIS)
    c.setLineWidth(0.9)
    c.line(ox, oy, ox, oy + ph + 9)
    c.line(ox, oy, ox + pw + 9, oy)
    _head(c, ox, oy + ph + 11, math.pi / 2, 5, AXIS)
    _head(c, ox + pw + 11, oy, 0, 5, AXIS)

    p = 0
    while p <= max_p + 0.001:
        yy = oy + ph * (p / max_p)
        c.setStrokeColor(AXIS)
        c.setLineWidth(0.6)
        c.line(ox - 3, yy, ox, yy)
        _txt(c, ox - 5, yy - 2.5, str(int(p)), 11.5, False, INK, "r")
        p += p_step
    q = 0
    while q <= max_q + 0.001:
        xx = ox + pw * (q / max_q)
        c.line(xx, oy - 3, xx, oy)
        _txt(c, xx, oy - 12, str(int(q)), 11.5, False, INK)
        q += q_step

    c.saveState()
    c.translate(ox - 30, oy + ph / 2)
    c.rotate(90)
    _txt(c, 0, 0, y_label, 12, True, AXIS)
    c.restoreState()
    _txt(c, ox + pw + 9, oy - 24, x_label, 12, True, AXIS, "r")

    return ox, oy, pw, ph, (lambda v: ox + pw * (v / max_q)), (lambda v: oy + ph * (v / max_p))


def _curve(c, pts, color=ACCENT, lw=2.0, dashed=False):
    c.setStrokeColor(color)
    c.setLineWidth(lw)
    c.setDash(3, 2) if dashed else c.setDash()
    p = c.beginPath()
    p.moveTo(*pts[0])
    for pt in pts[1:]:
        p.lineTo(*pt)
    c.drawPath(p, stroke=1, fill=0)
    c.setDash()


def _marker(c, x, y, label, dx=5, dy=4):
    c.setFillColor(white)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.2)
    c.circle(x, y, 3.2, stroke=1, fill=1)
    _txt(c, x + dx, y + dy, label, 12, True, ACCENT, "l")


def _guides(c, ox, oy, px, py):
    c.setStrokeColor(NOTE)
    c.setLineWidth(0.6)
    c.setDash(1.5, 2)
    c.line(ox, py, px, py)
    c.line(px, oy, px, py)
    c.setDash()


# ─── Figures ──────────────────────────────────────────────────────────
def _fig_placeholder(c, x, y, w, h, fig_id: str = ""):
    _txt(c, x + w / 2, y + h / 2 + 6, "Figure", 13, True, ACCENT)
    if fig_id:
        _txt(c, x + w / 2, y + h / 2 - 10, fig_id, 11, False, MUTED)


def _fig_supply(c, x, y, w, h):
    ox, oy, pw, ph, PX, PY = _chart(
        c, x, y, w, h, "Supply", "hours of tutoring offered per week",
        45, 250, 5, 50, "Quantity supplied (hours)", "Price (EUR per hour)")

    def sup(q):
        return 20 + 5 * q

    _curve(c, [(PX(4), PY(sup(4))), (PX(43), PY(sup(43)))], ACCENT, 2.2)
    _txt(c, PX(43) + 5, PY(sup(43)) - 2, "S", 12, True, ACCENT, "l")

    # Horizontal price guides only (no long vertical dashes through annotations)
    for q, name, dx, dy in ((12, "A", 7, 9), (34, "B", 7, 9)):
        px, py = PX(q), PY(sup(q))
        c.setStrokeColor(MUTED)
        c.setLineWidth(0.55)
        c.setDash(1.5, 2)
        c.line(ox, py, px - 5, py)
        # short stub toward the x-axis only — never a full drop through labels
        c.line(px, py - 5, px, py - 18)
        c.setDash()
        _marker(c, px, py, name, dx, dy)

    # Notes only in the empty upper-left pocket above the curve
    _txt(c, ox + 8, oy + ph - 12,
         "higher price -> higher quantity supplied", 10, False, INK, "l", italic=True)
    _txt(c, ox + 8, oy + ph - 26,
         "(ceteris paribus)", 10, False, MUTED, "l", italic=True)
    _txt(c, ox + 8, oy + ph - 44,
         "A to B: only price changed — move along S", 10, False, INK, "l", italic=True)


def _fig_demand(c, x, y, w, h):
    ox, oy, pw, ph, PX, PY = _chart(
        c, x, y, w, h, "Demand", "hours of tutoring bought per week",
        100, 250, 10, 50, "Quantity demanded (hours)", "Price (EUR per hour)")

    def dem(q, shift=0.0):
        return 258 - 2.4 * (q + shift)

    _curve(c, [(PX(8), PY(dem(8))), (PX(92), PY(dem(92)))], ACCENT, 2.2)
    _txt(c, PX(92) + 5, PY(dem(92)) + 2, "D", 12, True, ACCENT, "l")

    _curve(c, [(PX(8), PY(dem(8, 26))), (PX(66), PY(dem(66, 26)))], CURVE2, 1.5, dashed=True)
    _txt(c, PX(66) + 5, PY(dem(66, 26)) + 2, "D1", 11, True, CURVE2, "l")

    # Arrow between curves in clear mid band
    _arrow(c, PX(52), PY(130), PX(28), PY(130), CURVE2, 1.2, 6)
    _txt(c, PX(55), PY(145), "fall in demand -> whole curve shifts to D1",
         10, False, INK, "l", italic=True)
    _txt(c, ox + 8, oy + 20, "price change: move along D", 10, False, INK, "l", italic=True)
    _txt(c, ox + 8, oy + 6, "income, tastes, substitutes: D shifts", 10, False, INK, "l", italic=True)


def _fig_equilibrium(c, x, y, w, h):
    ox, oy, pw, ph, PX, PY = _chart(
        c, x, y, w, h, "Market equilibrium", "supply and demand in one market",
        100, 250, 10, 50, "Quantity (hours)", "Price (EUR per hour)")

    def sup(q):
        return 40 + 2.2 * q

    def dem(q):
        return 258 - 2.4 * q

    qe = (258 - 40) / (2.2 + 2.4)
    pe = sup(qe)

    _curve(c, [(PX(8), PY(sup(8))), (PX(92), PY(sup(92)))], ACCENT, 2.2)
    _curve(c, [(PX(8), PY(dem(8))), (PX(92), PY(dem(92)))], AXIS, 1.9)
    _txt(c, PX(92) + 5, PY(sup(92)) - 2, "S", 12, True, ACCENT, "l")
    _txt(c, PX(92) + 5, PY(dem(92)) + 2, "D", 12, True, AXIS, "l")

    ph_hi = 200
    x_lo = PX((258 - ph_hi) / 2.4)
    x_hi = PX((ph_hi - 40) / 2.2)
    _arrow2(c, x_lo, PY(ph_hi), x_hi, PY(ph_hi))
    _txt(c, (x_lo + x_hi) / 2, PY(ph_hi) + 8, "surplus: Qs > Qd -> price falls",
         10, False, INK)

    ph_lo = 90
    x_lo2 = PX((ph_lo - 40) / 2.2)
    x_hi2 = PX((258 - ph_lo) / 2.4)
    _arrow2(c, x_lo2, PY(ph_lo), x_hi2, PY(ph_lo))
    _txt(c, (x_lo2 + x_hi2) / 2, PY(ph_lo) - 12, "shortage: Qd > Qs -> price rises",
         10, False, INK)

    # Guides stop short of the marker; P*/Q* sit clear of the dashes
    c.setStrokeColor(MUTED)
    c.setLineWidth(0.55)
    c.setDash(1.5, 2)
    c.line(ox, PY(pe), PX(qe) - 6, PY(pe))
    c.line(PX(qe), oy, PX(qe), PY(pe) - 6)
    c.setDash()
    _marker(c, PX(qe), PY(pe), "E", 8, 7)
    _txt(c, ox - 6, PY(pe) + 5, "P*", 11, True, ACCENT, "r")
    _txt(c, PX(qe) + 10, oy - 16, "Q*", 11, True, ACCENT, "l")


def _fig_circular_flow(c, x, y, w, h):
    """Three-sector circular flow: taxes up, public goods/transfers down, HH↔Biz opposite flows."""
    bw, bh = w * 0.20, 42
    gx = x + (w - bw) / 2
    gov_h = 28
    gov_bottom = y + h - gov_h - 2

    lx, rx = x + 2, x + w - bw - 2
    base = y + max(30, int(h * 0.28))

    _box(c, gx, gov_bottom, bw, gov_h, ACCENT_SOFT, stroke=FIG_EDGE, dashed=False, radius=0)
    _txt(c, gx + bw / 2, gov_bottom + 10, "Government", 11, True, ACCENT)

    _box(c, lx, base, bw, bh, white, stroke=FIG_EDGE, dashed=False, radius=0)
    _txt(c, lx + bw / 2, base + bh / 2 + 5, "Private", 11, True, INK)
    _txt(c, lx + bw / 2, base + bh / 2 - 7, "households", 11, True, INK)

    _box(c, rx, base, bw, bh, white, stroke=FIG_EDGE, dashed=False, radius=0)
    _txt(c, rx + bw / 2, base + bh / 2 - 3, "Businesses", 11, True, INK)

    # Horizontal exchange corridor between the two boxes
    x1, x2 = lx + bw + 8, rx - 8
    mid = (x1 + x2) / 2
    lanes = [
        (base + bh * 0.82, "Goods and services", "to_hh"),
        (base + bh * 0.60, "Payments for goods and services", "to_biz"),
        (base + bh * 0.38, "Labour and other resources", "to_biz"),
        (base + bh * 0.16, "Wages, rent, interest and profit", "to_hh"),
    ]
    for ly, label, direction in lanes:
        # to_hh: Businesses → Households (left); to_biz: Households → Businesses (right)
        if direction == "to_hh":
            _h_arrow_labeled(c, x2, x1, ly, label, ACCENT, 1.25, 6.5, 9)
        else:
            _h_arrow_labeled(c, x1, x2, ly, label, ACCENT, 1.25, 6.5, 9)

    # Taxes: outer vertical arrows UP into government
    tax_lx = lx + bw * 0.22
    tax_rx = rx + bw * 0.78
    tax_from = base + bh + 3
    tax_to = gov_bottom - 1
    _arrow(c, tax_lx, tax_from, tax_lx, tax_to, MUTED, 1.15, 5.5)
    _txt(c, tax_lx + 6, (tax_from + tax_to) / 2 - 2, "taxes", 9, False, MUTED, "l")
    _arrow(c, tax_rx, tax_from, tax_rx, tax_to, MUTED, 1.15, 5.5)
    _txt(c, tax_rx - 6, (tax_from + tax_to) / 2 - 2, "taxes", 9, False, MUTED, "r")

    # Public goods / transfers / subsidies: inner vertical arrows DOWN (labeled on each side)
    down_lx = lx + bw * 0.78
    down_rx = rx + bw * 0.22
    mid_down = (gov_bottom + base + bh) / 2
    _arrow(c, down_lx, gov_bottom - 1, down_lx, base + bh + 3, ACCENT, 1.2, 6)
    _arrow(c, down_rx, gov_bottom - 1, down_rx, base + bh + 3, ACCENT, 1.2, 6)
    _txt(c, down_lx + 5, mid_down + 6, "public goods,", 8.5, False, INK, "l")
    _txt(c, down_lx + 5, mid_down - 5, "transfers", 8.5, False, INK, "l")
    _txt(c, down_rx - 5, mid_down + 6, "subsidies &", 8.5, False, INK, "r")
    _txt(c, down_rx - 5, mid_down - 5, "public goods", 8.5, False, INK, "r")

    _txt(c, x + w / 2, y + 5,
         "real flows and monetary flows run in opposite directions",
         9.5, False, MUTED, italic=True)


def _fig_sectors(c, x, y, w, h):
    data = [
        ("Primary", "Extraction", "farming, fishing, mining, forestry"),
        ("Secondary", "Manufacturing", "cars, machinery, clothes, food processing"),
        ("Tertiary", "Services", "retail, banking, transport, education"),
    ]
    gap = 26
    bw = (w - 2 * gap) / 3
    top = y + h - 12
    bh = h - 34
    for i, (title, kind, examples) in enumerate(data):
        px = x + i * (bw + gap)
        py = top - bh
        _box(c, px, py, bw, bh, white)
        _txt(c, px + bw / 2, py + bh - 16, title, 12, True, ACCENT)
        _txt(c, px + bw / 2, py + bh - 29, kind, 11, True, INK)
        words = examples.split(", ")
        half = (len(words) + 1) // 2
        _txt(c, px + bw / 2, py + bh - 45, ", ".join(words[:half]), 11.5, False, INK)
        _txt(c, px + bw / 2, py + bh - 57, ", ".join(words[half:]), 11.5, False, INK)
        if i < 2:
            _arrow(c, px + bw + 4, py + bh / 2, px + bw + gap - 4, py + bh / 2, ACCENT, 1.2, 6)
    _txt(c, x + w / 2, y + 4,
         "the more developed an economy, the larger the share of the tertiary sector",
         10.5, False, INK, italic=True)


def _fig_ownership(c, x, y, w, h):
    def node(px, py, bw, bh, title, sub="", size=9.5, fill=white, title_color=INK):
        _box(c, px, py, bw, bh, fill)
        if sub:
            _txt(c, px + bw / 2, py + bh / 2 + 4, title, size, True, title_color)
            _txt(c, px + bw / 2, py + bh / 2 - 9, sub, 10.5, False, MUTED)
        else:
            _txt(c, px + bw / 2, py + bh / 2 - 3, title, size, True, title_color)

    root_w, root_h = w * 0.60, 28
    root_x = x + (w - root_w) / 2
    root_y = y + h - root_h
    node(root_x, root_y, root_w, root_h, "Forms of business ownership", "", 10, ACCENT_SOFT, ACCENT)

    mid_w, mid_h = w * 0.44, 42
    mid_y = y + h * 0.44
    lx, rx = x, x + w - mid_w
    node(lx, mid_y, mid_w, mid_h, "Unincorporated", "no separate legal person; owner = manager", 10.5, white, ACCENT)
    node(rx, mid_y, mid_w, mid_h, "Incorporated", "separate legal person; limited liability", 10.5, white, ACCENT)

    _tree(c, root_x + root_w / 2, root_y, [lx + mid_w / 2, rx + mid_w / 2], mid_y + mid_h)

    leaf_h = 38
    leaf_y = y + 10
    gap = 10
    lw_ = (w - 2 * gap) / 3
    leaves = [
        ("Sole trader", "one owner"),
        ("Partnership", "two or more owners"),
        ("Corporation / LLC", "shareholders"),
    ]
    xs = []
    for i, (t, s) in enumerate(leaves):
        px = x + i * (lw_ + gap)
        node(px, leaf_y, lw_, leaf_h, t, s, 10, white, INK)
        xs.append(px + lw_ / 2)

    _tree(c, lx + mid_w / 2, mid_y, xs[:2], leaf_y + leaf_h)
    _tree(c, rx + mid_w / 2, mid_y, xs[2:], leaf_y + leaf_h)


def _fig_mix(c, x, y, w, h):
    cx, cy = x + w / 2, y + h / 2
    r = 33
    bw, bh = w * 0.34, 44
    items = [
        ("Product", "quality, design, range, service", x + 2, y + h - bh - 2, 1, 0),
        ("Price", "list price, discounts, terms", x + w - bw - 2, y + h - bh - 2, 0, 0),
        ("Place", "channels, coverage, logistics", x + 2, y + 2, 1, 1),
        ("Promotion", "advertising, sales, PR", x + w - bw - 2, y + 2, 0, 1),
    ]
    for _, _, bx, by, fx, fy in items:
        tx_, ty_ = bx + bw * fx, by + bh * (1 - fy)
        ang = math.atan2(ty_ - cy, tx_ - cx)
        c.setStrokeColor(ACCENT_LIGHT)
        c.setLineWidth(0.9)
        c.setDash(2, 2)
        c.line(cx + (r + 2) * math.cos(ang), cy + (r + 2) * math.sin(ang), tx_, ty_)
        c.setDash()

    for title, sub, bx, by, _, _ in items:
        _box(c, bx, by, bw, bh, white)
        _txt(c, bx + bw / 2, by + bh - 17, title, 12, True, ACCENT)
        _txt(c, bx + bw / 2, by + bh - 30, sub, 10.5, False, INK)

    c.setFillColor(ACCENT_SOFT)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.0)
    c.setDash()
    c.circle(cx, cy, r, stroke=1, fill=1)
    _txt(c, cx, cy + 4, "Marketing", 12, True, ACCENT)
    _txt(c, cx, cy - 6, "mix", 12, True, ACCENT)
    _txt(c, cx, cy - 18, "the four Ps", 10.5, False, MUTED)


def _fig_plc(c, x, y, w, h):
    ox, oy = x + 42, y + 30
    pw, ph = w - 56, h - 46
    zero = oy + ph * 0.22

    c.setStrokeColor(AXIS)
    c.setLineWidth(0.9)
    c.line(ox, oy, ox, oy + ph + 8)
    c.line(ox, zero, ox + pw + 8, zero)
    _head(c, ox, oy + ph + 10, math.pi / 2, 5, AXIS)
    _head(c, ox + pw + 10, zero, 0, 5, AXIS)
    _txt(c, ox - 5, zero - 2, "0", 11.5, False, INK, "r")

    stages = [("Introduction", 0.00, 0.17), ("Growth", 0.17, 0.44),
              ("Maturity", 0.44, 0.74), ("Decline", 0.74, 1.00)]
    c.setStrokeColor(GRID)
    c.setLineWidth(0.6)
    c.setDash(1.5, 2)
    for _, _, end in stages[:-1]:
        c.line(ox + pw * end, oy, ox + pw * end, oy + ph)
    c.setDash()
    for name, a, b in stages:
        _txt(c, ox + pw * (a + b) / 2, oy + ph + 1, name, 11.5, True, ACCENT)

    sales = c.beginPath()
    sales.moveTo(ox, zero + 3)
    sales.curveTo(ox + pw * 0.16, zero + ph * 0.08,
                  ox + pw * 0.28, zero + ph * 0.48,
                  ox + pw * 0.50, zero + ph * 0.56)
    sales.curveTo(ox + pw * 0.66, zero + ph * 0.62,
                  ox + pw * 0.80, zero + ph * 0.42,
                  ox + pw * 0.98, zero + ph * 0.10)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2.0)
    c.drawPath(sales, stroke=1, fill=0)
    _txt(c, ox + pw * 0.50, zero + ph * 0.62, "Sales", 12, True, ACCENT)

    profit = c.beginPath()
    profit.moveTo(ox, zero - ph * 0.13)
    profit.curveTo(ox + pw * 0.18, zero - ph * 0.14,
                   ox + pw * 0.26, zero + ph * 0.10,
                   ox + pw * 0.46, zero + ph * 0.30)
    profit.curveTo(ox + pw * 0.60, zero + ph * 0.42,
                   ox + pw * 0.76, zero + ph * 0.18,
                   ox + pw * 0.98, zero - ph * 0.10)
    c.setStrokeColor(CURVE2)
    c.setLineWidth(1.5)
    c.setDash(3, 2)
    c.drawPath(profit, stroke=1, fill=0)
    c.setDash()
    _txt(c, ox + pw * 0.30, zero + ph * 0.03, "Profit", 12, True, CURVE2)

    c.saveState()
    c.translate(ox - 28, oy + ph / 2)
    c.rotate(90)
    _txt(c, 0, 0, "Sales and profit", 11.5, True, AXIS)
    c.restoreState()
    _txt(c, ox + pw + 10, zero - 16, "Time", 11.5, True, AXIS, "r")
    _txt(c, ox + 4, oy + 2, "losses in the introduction stage; profit peaks before sales do",
         9.5, False, INK, "l", italic=True)


def _fig_bcg(c, x, y, w, h):
    ox, oy = x + 34, y + 30
    pw, ph = w - 44, h - 44
    qw, qh = pw / 2, ph / 2

    cells = [
        (0, 1, "Stars", "high growth, high share", "invest to defend the position"),
        (1, 1, "Question marks", "high growth, low share", "invest selectively or drop"),
        (0, 0, "Cash cows", "low growth, high share", "harvest cash for the stars"),
        (1, 0, "Poor dogs", "low growth, low share", "withdraw or reposition"),
    ]
    for col, row, title, cond, action in cells:
        px = ox + col * qw
        py = oy + row * qh
        fill = ACCENT_SOFT if (col + row) % 2 == 0 else white
        _box(c, px, py, qw, qh, fill, ACCENT_LIGHT, dashed=True, lw=0.8)
        _txt(c, px + qw / 2, py + qh - 22, title, 13, True, ACCENT)
        _txt(c, px + qw / 2, py + qh - 36, cond, 11, False, INK)
        _txt(c, px + qw / 2, py + qh - 50, action, 11.5, False, INK, italic=True)

    c.setStrokeColor(AXIS)
    c.setLineWidth(0.9)
    c.line(ox, oy, ox, oy + ph + 8)
    c.line(ox, oy, ox + pw + 8, oy)
    _head(c, ox, oy + ph + 10, math.pi / 2, 5, AXIS)
    _head(c, ox + pw + 10, oy, 0, 5, AXIS)

    c.saveState()
    c.translate(ox - 24, oy + ph / 2)
    c.rotate(90)
    _txt(c, 0, 0, "Market growth", 11.5, True, AXIS)
    c.restoreState()
    _txt(c, ox - 5, oy + ph - 8, "high", 10.5, False, INK, "r")
    _txt(c, ox - 5, oy + 6, "low", 10.5, False, INK, "r")

    _txt(c, ox + pw / 2, oy - 20, "Relative market share", 11.5, True, AXIS)
    _txt(c, ox + qw / 2, oy - 10, "high", 10.5, False, INK)
    _txt(c, ox + qw * 1.5, oy - 10, "low", 10.5, False, INK)


def _fig_fs(c, x, y, w, h):
    root_w, root_h = w * 0.46, 24
    root_x = x + (w - root_w) / 2
    root_y = y + h - root_h
    _box(c, root_x, root_y, root_w, root_h, ACCENT_SOFT)
    _txt(c, root_x + root_w / 2, root_y + 8, "Financial statements", 12, True, ACCENT)

    items = [
        ("Balance sheet", "what the business owns", "and how it is financed"),
        ("Income statement", "revenues minus expenses", "over a period"),
        ("Cash flow statement", "money actually received", "and paid out"),
    ]
    gap = 12
    bw = (w - 2 * gap) / 3
    bh = 52
    by = y + 12
    xs = []
    for i, (t, l1, l2) in enumerate(items):
        px = x + i * (bw + gap)
        _box(c, px, by, bw, bh, white)
        _txt(c, px + bw / 2, by + bh - 17, t, 12, True, ACCENT)
        _txt(c, px + bw / 2, by + bh - 30, l1, 11.5, False, INK)
        _txt(c, px + bw / 2, by + bh - 42, l2, 11.5, False, INK)
        xs.append(px + bw / 2)
    _tree(c, root_x + root_w / 2, root_y, xs, by + bh)


def _fig_bs(c, x, y, w, h):
    """Fuhrmann-style T-account: orange rules, dotted separator ABOVE totals, clear gap."""
    # Inner white panel with thin orange border (outer cream frame comes from Diagram)
    note_h = 14
    panel_b = y + note_h
    panel_h = h - note_h
    mid = x + w / 2
    top = panel_b + panel_h
    _box(c, x, panel_b, w, panel_h, white, ACCENT, dashed=False, lw=1.0)

    head_y = top - 22
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.0)
    c.line(x, head_y, x + w, head_y)
    c.line(mid, panel_b, mid, top)
    _txt(c, x + w * 0.25, head_y + 7, "Assets", 12, True, ACCENT)
    _txt(c, x + w * 0.75, head_y + 7, "Equity and liabilities", 12, True, ACCENT)

    left = [("Tools and benches", "18,000"), ("Delivery van", "14,000"),
            ("Inventory (bikes)", "9,200"), ("Cash and bank", "4,800")]
    right = [("Owner's equity", "26,000"), ("Bank loan", "20,000")]

    row_gap = 15
    for i, (la, lv) in enumerate(left):
        yy = head_y - 18 - i * row_gap
        _txt(c, x + 10, yy, la, 11, False, INK, "l")
        _txt(c, mid - 10, yy, lv, 11, False, INK, "r")
    for i, (ra, rv) in enumerate(right):
        yy = head_y - 18 - i * row_gap
        _txt(c, mid + 10, yy, ra, 11, False, INK, "l")
        _txt(c, x + w - 10, yy, rv, 11, False, INK, "r")

    # Totals sit clearly BELOW the dotted rule (never on the dashes)
    tot_baseline = panel_b + 8
    rule_y = tot_baseline + 14
    c.setStrokeColor(ACCENT_LIGHT)
    c.setLineWidth(0.75)
    c.setDash(1.2, 2.2)
    c.line(x + 10, rule_y, mid - 10, rule_y)
    c.line(mid + 10, rule_y, x + w - 10, rule_y)
    c.setDash()
    _txt(c, x + 10, tot_baseline, "Total assets", 11, True, INK, "l")
    _txt(c, mid - 10, tot_baseline, "46,000", 11, True, INK, "r")
    _txt(c, mid + 10, tot_baseline, "Total equity and liabilities", 11, True, INK, "l")
    _txt(c, x + w - 10, tot_baseline, "46,000", 11, True, INK, "r")

    _txt(c, x + w / 2, y + 2,
         "Northline opening: assets = equity + liabilities",
         10, False, MUTED, italic=True)


def _fig_economic_systems(c, x, y, w, h):
    cols = [
        ("Market", "Private actors decide", ["Prices coordinate", "Property rights", "Limited central plan"]),
        ("Planned", "State decides", ["Targets & quotas", "Public ownership", "Central allocation"]),
        ("Mixed", "Shared decisions", ["Markets + rules", "Public goods", "Regulation & tax"]),
    ]
    gap = 14
    bw = (w - 2 * gap) / 3
    bh = h - 28
    by = y + 18
    for i, (title, sub, bullets) in enumerate(cols):
        px = x + i * (bw + gap)
        fill = ACCENT_SOFT if i == 2 else white
        _box(c, px, by, bw, bh, fill)
        _txt(c, px + bw / 2, by + bh - 18, title, 13, True, ACCENT)
        _txt(c, px + bw / 2, by + bh - 34, sub, 11, False, MUTED)
        for j, line in enumerate(bullets):
            _txt(c, px + 12, by + bh - 58 - j * 18, "-  " + line, 11.5, False, INK, "l")
    _txt(c, x + w / 2, y + 4,
         "systems differ by who decides what is produced, how, and for whom",
         10.5, False, INK, italic=True)


def _fig_stakeholder_map(c, x, y, w, h):
    cx, cy = x + w / 2, y + h / 2 + 4
    fw, fh = 78, 36
    _box(c, cx - fw / 2, cy - fh / 2, fw, fh, ACCENT_SOFT, dashed=False, lw=1.1, radius=0)
    _txt(c, cx, cy + 4, "The firm", 12, True, ACCENT)
    _txt(c, cx, cy - 10, "(business)", 10.5, False, MUTED)

    groups = [
        ("Owners /\nshareholders", 0.5 * math.pi),
        ("Employees", 0.15 * math.pi),
        ("Customers", -0.15 * math.pi),
        ("Suppliers", -0.5 * math.pi),
        ("Lenders /\nbanks", -0.85 * math.pi),
        ("Government", math.pi),
        ("Local\ncommunity", 0.85 * math.pi),
    ]
    r = min(w, h) * 0.36
    bw, bh = 78, 30
    for label, ang in groups:
        px = cx + r * math.cos(ang)
        py = cy + r * math.sin(ang)
        _arrow(c, cx + 28 * math.cos(ang), cy + 16 * math.sin(ang),
               px - 22 * math.cos(ang), py - 10 * math.sin(ang), ACCENT_LIGHT, 0.9, 4.5)
        _box(c, px - bw / 2, py - bh / 2, bw, bh, white, radius=0)
        lines = label.split("\n")
        if len(lines) == 1:
            _txt(c, px, py - 3, lines[0], 10.5, True, INK)
        else:
            _txt(c, px, py + 4, lines[0], 10.5, True, INK)
            _txt(c, px, py - 8, lines[1], 10.5, True, INK)
    _txt(c, x + w / 2, y + 3,
         "stakeholders can support or constrain the firm — interests may conflict",
         10, False, INK, italic=True)


def _fig_finance_sources(c, x, y, w, h):
    mid = x + w / 2
    top = y + h - 8
    _txt(c, mid, top - 4, "Sources of finance", 13, True, ACCENT)

    gap = 18
    bw = (w - gap) / 2
    bh = h - 56
    by = y + 28

    # Equity
    _box(c, x, by, bw, bh, ACCENT_SOFT, dashed=False, lw=1.0)
    _txt(c, x + bw / 2, by + bh - 18, "Equity", 13, True, ACCENT)
    _txt(c, x + bw / 2, by + bh - 34, "ownership capital", 11, False, MUTED)
    equity = [
        "Owner's capital / shares",
        "Retained profits",
        "New share issues",
        "No fixed repayment duty",
        "Dilutes control if sold",
    ]
    for i, line in enumerate(equity):
        _txt(c, x + 12, by + bh - 56 - i * 16, "-  " + line, 11.5, False, INK, "l")

    # Debt
    _box(c, x + bw + gap, by, bw, bh, white, dashed=False, lw=1.0)
    _txt(c, x + bw + gap + bw / 2, by + bh - 18, "Debt", 13, True, ACCENT)
    _txt(c, x + bw + gap + bw / 2, by + bh - 34, "borrowed capital", 11, False, MUTED)
    debt = [
        "Bank loans & overdrafts",
        "Trade credit",
        "Bonds / leases",
        "Interest + contractual repayment",
        "Does not sell ownership",
    ]
    for i, line in enumerate(debt):
        _txt(c, x + bw + gap + 12, by + bh - 56 - i * 16, "-  " + line, 11.5, False, INK, "l")

    _txt(c, mid, y + 8, "vs", 12, True, ACCENT)
    _txt(c, mid, y + 3,
         "choose by cost, risk, control, and how long the money is needed",
         10, False, INK, italic=True)


FIGURES = {
    "circular-flow": _fig_circular_flow,
    "supply-curve": _fig_supply,
    "demand-curve": _fig_demand,
    "equilibrium": _fig_equilibrium,
    "economic-sectors": _fig_sectors,
    "ownership-overview": _fig_ownership,
    "marketing-mix": _fig_mix,
    "product-life-cycle": _fig_plc,
    "bcg-matrix": _fig_bcg,
    "financial-statements": _fig_fs,
    "balance-sheet": _fig_bs,
    "economic-systems": _fig_economic_systems,
    "stakeholder-map": _fig_stakeholder_map,
    "finance-sources": _fig_finance_sources,
}

FIG_HEIGHTS = {
    "circular-flow": 268,
    "supply-curve": 228,
    "demand-curve": 228,
    "equilibrium": 242,
    "economic-sectors": 148,
    "ownership-overview": 230,
    "marketing-mix": 210,
    "product-life-cycle": 220,
    "bcg-matrix": 225,
    "financial-statements": 165,
    "balance-sheet": 188,
    "economic-systems": 175,
    "stakeholder-map": 250,
    "finance-sources": 210,
}


class Diagram(Flowable):
    def __init__(self, fig_id: str, width: float):
        super().__init__()
        self.fig_id = fig_id
        self.width = width
        self.height = FIG_HEIGHTS.get(fig_id, 170)
        self.used_placeholder = fig_id not in FIGURES

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        self.height = FIG_HEIGHTS.get(self.fig_id, 170)
        return self.width, self.height

    def draw(self):
        c = self.canv
        c.saveState()
        # Quiet frame: light fill + thin grey edge (no dashed orange box)
        c.setFillColor(FIG_FILL)
        c.setStrokeColor(FIG_EDGE)
        c.setLineWidth(0.7)
        c.rect(0, 0, self.width, self.height, stroke=1, fill=1)
        drawer = FIGURES.get(self.fig_id)
        ix, iy = PAD, PAD
        iw, ih = self.width - 2 * PAD, self.height - 2 * PAD
        if drawer is None:
            if self.fig_id and self.fig_id not in PLACEHOLDER_FIGS:
                PLACEHOLDER_FIGS.append(self.fig_id)
            _fig_placeholder(c, ix, iy, iw, ih, self.fig_id)
        else:
            drawer(c, ix, iy, iw, ih)
        c.restoreState()


def figure_block(fid: str, caption: str, width: float):
    global FIGURE_N
    FIGURE_N += 1
    if fid and fid not in FIGURES and fid not in PLACEHOLDER_FIGS:
        PLACEHOLDER_FIGS.append(fid)
    # Caption without "Figure N." — descriptive italic line only
    cap = strip_label(caption, "figure")
    parts = [Diagram(fid, width)]
    if cap:
        parts.append(Paragraph(rich(cap), S["caption"]))
    parts.append(Spacer(1, 4))
    return KeepTogether(parts)


class SetHeader(Flowable):
    def __init__(self, title: str = ""):
        super().__init__()
        self.title = title
        self.width = self.height = 0

    def draw(self):
        STATE.footer_chapter = self.title


class ChapterStart(Flowable):
    def __init__(self, num: int, title: str):
        super().__init__()
        self.num, self.title = num, title
        self.width = self.height = 0

    def draw(self):
        STATE.chapter = self.num
        STATE.footer_chapter = self.title
        STATE.skip_chrome = False


def chrome(canvas, doc):
    # Cover: no page number / no chrome
    if doc.page in STATE.cover_pages or STATE.skip_chrome:
        return
    canvas.saveState()

    # Running header — light band + chapter title (no thick orange frame)
    if STATE.footer_chapter and doc.page > 2:
        max_w = W - L_M - R_M - 8
        label, size = fit_header_label(canvas, STATE.footer_chapter, max_w, 9.0)
        if label:
            canvas.setFillColor(ACCENT_SOFT)
            canvas.rect(L_M, H - 13 * mm, W - L_M - R_M, 7 * mm, stroke=0, fill=1)
            canvas.setFillColor(ACCENT)
            canvas.setFont("Helvetica-Bold", size)
            canvas.drawRightString(W - R_M - 4, H - 10.5 * mm, label)

    # Footer
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(L_M, 12 * mm, W - R_M, 12 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8.5)
    canvas.drawString(L_M, 7 * mm, "BBE ECONOMICS \xb7 FULL COURSE")
    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 10)
    canvas.drawRightString(W - R_M, 7 * mm, str(doc.page))
    canvas.restoreState()


def formula_block(b: dict, width: float):
    """Soft wash + thick orange rule on top only (Fuhrmann callout style)."""
    label = b.get("label") or ""
    text = b.get("text") or ""
    vars_s = b.get("vars") or ""
    bits = []
    if label:
        bits.append(f"<b>{esc(label)}</b>")
    bits.append(f"<b>{esc(text)}</b>" if not label else esc(text))
    body = Paragraph("<br/>".join(bits), S["formula"])
    rows = [[body]]
    if vars_s:
        rows.append([Paragraph(rich(vars_s) if "**" in vars_s else f"<i>{esc(vars_s)}</i>", S["formula_vars"])])
    box = Table(rows, colWidths=[width])
    box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ACCENT_SOFT),
        ("LINEABOVE", (0, 0), (-1, 0), 2.2, ACCENT),  # top accent only
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return KeepTogether([Spacer(1, 3), box, Spacer(1, 7)])


def worked_block(b: dict, width: float):
    parts = [Paragraph(esc(b.get("title") or "Worked example"), S["worked_h"])]
    for i, step in enumerate(b.get("steps") or [], 1):
        parts.append(Paragraph(f"<b>{i}.</b>  {esc(step)}", S["worked_step"]))
        plain_parts.append(step)
    if b.get("result"):
        parts.append(Paragraph(f"Result: {esc(b['result'])}", S["worked_result"]))
        plain_parts.append(b["result"])
    return KeepTogether([Spacer(1, 2), *parts, Spacer(1, 4)])


def _prose(text: str, style="body"):
    """Body text with optional **semantic bold** markers."""
    return Paragraph(rich(text or ""), S[style])


def blocks_to_flowables(blocks, width):
    """Prose-first rendering: almost everything is flowing text, not UI cards."""
    out = []
    for b in blocks:
        t = b.get("type")

        if t == "p":
            out.append(_prose(b.get("text") or ""))
            plain_parts.append(b.get("text") or "")

        elif t == "subhead":
            sid = (b.get("id") or "").strip()
            title = (b.get("title") or "").strip()
            label = f"{sid} {title}".strip() if sid else title
            if label:
                out.append(Paragraph(esc(label), S["sec"]))
                plain_parts.append(label)

        elif t == "scene":
            title = (b.get("title") or "").strip()
            text = (b.get("text") or "").strip()
            body = f"{title}. {text}" if title and not text.startswith(title) else text
            out.append(_prose(body))
            plain_parts.append(body)

        elif t == "idea":
            term = b.get("term") or ""
            text = b.get("text") or ""
            # Bold the defined term; honour **…** inside the explanation
            term_s = (term or "").strip()
            text_s = (text or "").strip()
            if term_s and text_s.lower().startswith(term_s.lower()):
                rest = text_s[len(term_s):]
                html = f"<b>{esc(text_s[: len(term_s)])}</b>{rich(rest)}"
            elif term_s:
                html = f"<b>{esc(term_s)}</b> — {rich(text_s)}"
            else:
                html = rich(text_s)
            out.append(Paragraph(html, S["body_boldlead"]))
            plain_parts.append(f"{term}: {text}")

        elif t == "mechanism":
            title = (b.get("title") or "").strip()
            text = (b.get("text") or "").strip()
            body = f"{title}. {text}" if title and not text.lower().startswith(title.lower()) else text
            out.append(_prose(body))
            plain_parts.append(body)

        elif t == "think":
            # Soft inline prompt — no coloured box
            prompt = (b.get("prompt") or b.get("text") or "").strip()
            if prompt:
                out.append(Paragraph(f"<i>{esc(prompt)}</i>", S["example"]))
                plain_parts.append(prompt)

        elif t == "trap":
            text = (b.get("text") or "").strip()
            clean = re.sub(r"^(common\s+mistake|trap)\s*[:.—-]\s*", "", text, flags=re.I)
            # Keep as ordinary prose — no forced "A common mistake:" label
            out.append(_prose(clean))
            plain_parts.append(clean)

        elif t == "exam":
            text = (b.get("text") or "").strip()
            clean = re.sub(r"^(exam(\s+recognition)?|in the exam)\s*[:.—-]\s*", "", text, flags=re.I)
            out.append(_prose(clean))
            plain_parts.append(clean)

        elif t == "connect":
            out.append(_prose(b.get("text") or ""))
            plain_parts.append(b.get("text") or "")

        elif t == "formula":
            # Light formula strip only (not a full callout card)
            out.append(formula_block(b, width))
            plain_parts.append(b.get("text") or "")

        elif t == "worked":
            title = b.get("title") or "Example"
            steps = b.get("steps") or []
            result = b.get("result") or ""
            joined = " ".join(str(s).rstrip(".") + "." for s in steps)
            body = f"{title}. {joined}"
            if result:
                body += f" {result}"
            out.append(Paragraph(f"<i>{esc(body)}</i>", S["example"]))
            plain_parts.append(body)

        elif t == "takeaways":
            for item in b.get("items") or []:
                out.append(SquareBullet(item, width))
                plain_parts.append(item)
            out.append(Spacer(1, 4))

        elif t == "check":
            # Skip self-check boxes in the PDF — chapter recap covers revision
            continue

        elif t == "bullets":
            for item in b.get("items") or []:
                out.append(SquareBullet(item, width))
                plain_parts.append(item)
            out.append(Spacer(1, 4))

        elif t == "table":
            rows = b.get("rows") or []
            center = bool(rows) and all(len(str(c)) < 18 for r in rows for c in r)
            out.append(Spacer(1, 4))
            out.append(make_table(
                b.get("headers") or [], rows, width, b.get("caption") or "", center_body=center,
            ))

        elif t == "figure":
            out.append(Spacer(1, 4))
            out.append(figure_block(b.get("id") or "", b.get("caption") or "", width))

        elif t == "compare":
            # Two short prose paragraphs instead of a dual card
            title = (b.get("title") or "").strip()
            if title:
                out.append(Paragraph(f"<b>{esc(title)}</b>", S["subsec"]))
            left = b.get("left") or {}
            right = b.get("right") or {}
            for side in (left, right):
                st = (side.get("title") or "").strip()
                items = side.get("items") or []
                if not st and not items:
                    continue
                joined = "; ".join(str(i) for i in items)
                text = f"{st}: {joined}." if st else f"{joined}."
                out.append(_prose(text))
                plain_parts.append(text)

        elif t == "definition":
            out.append(Paragraph(lead_bold(b.get("term") or "", b.get("text") or ""), S["body_boldlead"]))
            plain_parts.append(f"{b.get('term')}: {b.get('text')}")

        elif t == "example":
            title = b.get("title") or "Example"
            out.append(Paragraph(
                f"<b>{esc(title)}.</b> <i>{esc(b.get('text') or '')}</i>", S["body"],
            ))
            plain_parts.append(b.get("text") or "")

        elif b.get("text"):
            out.append(_prose(b["text"]))
            plain_parts.append(b["text"])

    return out


def build():
    global TABLE_N, FIGURE_N, CONTENT
    # Reload in case export just ran
    CONTENT = json.loads((ROOT / "output" / "book-content.json").read_text(encoding="utf-8"))
    TABLE_N = FIGURE_N = 0
    PLACEHOLDER_FIGS.clear()
    plain_parts.clear()

    cfg = CONTENT.get("config") or {}
    brand = cfg.get("brand") or "BBE SCHOOL"
    title = cfg.get("title") or "Economics Full Course"
    subtitle = cfg.get("subtitle") or "A learning system"
    method = cfg.get("method") or "BBE Path"
    tagline = cfg.get("methodTagline") or "Scene → Idea → Mechanism → Practice → Exam"
    chapters = CONTENT.get("chapters") or []

    width = W - L_M - R_M
    story = []

    # Cover
    class CoverAccent(Flowable):
        def __init__(self):
            super().__init__()
            self.width = width
            self.height = 8

        def draw(self):
            c = self.canv
            c.setFillColor(ACCENT)
            c.rect(0, 2, 42, 5, stroke=0, fill=1)
            c.setFillColor(ACCENT_SOFT)
            c.rect(48, 2, self.width - 48, 5, stroke=0, fill=1)

    class MethodSteps(Flowable):
        def __init__(self, steps, w):
            super().__init__()
            self.steps = steps
            self.width = w
            self.height = 28

        def draw(self):
            c = self.canv
            n = max(1, len(self.steps))
            gap = 6
            bw = (self.width - gap * (n - 1)) / n
            for i, step in enumerate(self.steps):
                x = i * (bw + gap)
                c.setFillColor(ACCENT_SOFT)
                c.rect(x, 4, bw, 20, stroke=0, fill=1)
                c.setFillColor(ACCENT)
                c.setFont("Helvetica-Bold", 9)
                c.drawCentredString(x + bw / 2, 11, step)

    STATE.skip_chrome = True
    story.append(Spacer(1, 42 * mm))
    story.append(CoverAccent())
    story.append(Spacer(1, 14))
    story.append(Paragraph(esc(brand), S["cover_brand"]))
    story.append(Paragraph(esc(title), S["cover_title"]))
    story.append(Paragraph(esc(subtitle), S["cover_sub"]))
    story.append(Spacer(1, 8))
    story.append(Paragraph(esc(method), S["cover_method"]))
    story.append(Spacer(1, 6))
    story.append(MethodSteps(
        ["Scene", "Idea", "Mechanism", "Practice", "Exam"],
        width,
    ))
    story.append(Spacer(1, 16))
    story.append(Paragraph(
        "Original teaching for the Economics Full Course — built for exam recognition, "
        "not for reading like a traditional textbook reprint.",
        S["cover_sub"],
    ))
    story.append(Spacer(1, 8))
    story.append(Paragraph("Chapters 2 – 6", S["cover_sub"]))
    story.append(PageBreak())

    # TOC
    STATE.skip_chrome = False
    STATE.footer_chapter = ""
    story.append(Paragraph("Contents", S["toc_h"]))
    for ch in chapters:
        story.append(Paragraph(f"Chapter {ch['num']}  {esc(ch['title'])}", S["toc_ch"]))
        for sec in ch.get("sections") or []:
            story.append(Paragraph(f"{sec['id']}  {esc(sec['title'])}", S["toc_sec"]))
    story.append(PageBreak())

    ranges: dict[int, dict] = {}
    for ch in chapters:
        story.append(ChapterStart(ch["num"], ch["title"]))
        story.append(Paragraph(f"Chapter {ch['num']}", S["ch_label"]))
        story.append(Paragraph(esc(ch["title"]), S["ch_title"]))
        if ch.get("intro"):
            story.append(Paragraph(esc(ch["intro"]), S["body"]))
            plain_parts.append(f"Chapter {ch['num']}. {ch['title']}\n{ch['intro']}")

        objectives = ch.get("objectives") or []
        if objectives:
            story.append(Paragraph("Learning objectives", S["obj_h"]))
            for i, obj in enumerate(objectives, 1):
                story.append(Paragraph(f"<b>{i}.</b>  {esc(obj)}", S["obj_item"]))
                plain_parts.append(obj)
            story.append(Spacer(1, 6))

        for sec in ch.get("sections") or []:
            story.append(Paragraph(f"{sec['id']}  {esc(sec['title'])}", S["sec"]))
            plain_parts.append(f"{sec['id']} {sec['title']}")
            story.extend(blocks_to_flowables(sec.get("blocks") or [], width))

        recap = ch.get("recap") or []
        if recap:
            story.append(Spacer(1, 8))
            story.append(Paragraph("Chapter recap", S["recap_h"]))
            for item in recap:
                story.append(SquareBullet(item, width))
                plain_parts.append(item)

        story.append(PageBreak())

    story.append(SetHeader(""))
    story.append(Spacer(1, 50 * mm))
    story.append(Paragraph("End of the Full Course theory", S["end_title"]))
    story.append(Paragraph(
        "You have walked the BBE Path from scene to exam language across Chapters 2–6. "
        "Continue with practice tasks for the chapter you have just studied.",
        S["body"],
    ))

    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUT_PDF),
        pagesize=A4,
        leftMargin=L_M,
        rightMargin=R_M,
        topMargin=T_M,
        bottomMargin=B_M,
        title=f"{title} — BBE School",
        author="BBE School",
    )
    frame = Frame(L_M, B_M, width, H - T_M - B_M, id="normal")
    doc.addPageTemplates([
        PageTemplate(id="main", frames=[frame], onPage=lambda c, d: None, onPageEnd=chrome),
    ])

    def after_flowable(flowable):
        if isinstance(flowable, ChapterStart):
            ranges[flowable.num] = {
                "chapter": flowable.num,
                "title": flowable.title,
                "startPage": doc.page,
                "endPage": doc.page,
            }
        elif STATE.chapter in ranges:
            ranges[STATE.chapter]["endPage"] = doc.page

    doc.afterFlowable = after_flowable

    # Mark cover as chrome-free once we know page 1 is the cover
    STATE.cover_pages = {1}
    STATE.skip_chrome = False
    doc.build(story)

    chapters_sorted = sorted(ranges.values(), key=lambda x: x["startPage"])
    for i, r in enumerate(chapters_sorted):
        if i + 1 < len(chapters_sorted):
            r["endPage"] = chapters_sorted[i + 1]["startPage"] - 1
        else:
            r["endPage"] = max(r["startPage"], doc.page - 1)

    manifest = {
        "pageCount": doc.page,
        "chapters": chapters_sorted,
        "placeholderFigures": list(PLACEHOLDER_FIGS),
    }
    OUT_MANIFEST.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    OUT_TEXT.write_text("\n\n".join(plain_parts), encoding="utf-8")
    print(json.dumps(manifest, indent=2))
    if PLACEHOLDER_FIGS:
        print("PLACEHOLDER_FIGURES:", ", ".join(PLACEHOLDER_FIGS))
    else:
        print("PLACEHOLDER_FIGURES: (none)")


if __name__ == "__main__":
    build()
