#!/usr/bin/env python3
"""
BBE Economics textbook — visual clone of Fuhrmann (2019) layout,
with blue accents replaced by BBE orange.
"""
from __future__ import annotations

import json
import math
import re
from pathlib import Path

from reportlab.lib.colors import HexColor, Color, white, black
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle,
    KeepTogether, PageBreak, Flowable, ListFlowable, ListItem,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parent
CONTENT = json.loads((ROOT / "output" / "book-content.json").read_text(encoding="utf-8"))
OUT_PDF = ROOT / "output" / "bbe-economics-textbook.pdf"
OUT_MANIFEST = ROOT / "output" / "chapter-pages.json"
OUT_TEXT = ROOT / "output" / "book-plain.txt"

# Fuhrmann blues → BBE orange equivalents
ACCENT = HexColor("#C45C1A")          # was #0076A3
ACCENT_LIGHT = HexColor("#E8A06A")    # was #5CADCE (dashed lines)
ACCENT_SOFT = HexColor("#FBF0E6")     # figure / box wash
INK = HexColor("#231F20")             # body text (exact Fuhrmann)
FOOTER_GRAY = HexColor("#9A9A9A")
ROW_DASH = HexColor("#E0B080")

W, H = A4
# Fuhrmann-like generous margins
L_M, R_M, T_M, B_M = 22 * mm, 22 * mm, 20 * mm, 18 * mm

plain_parts: list[str] = []
TABLE_N = 0
FIGURE_N = 0


class DocState:
    footer_chapter = ""
    chapter: int | None = None
    skip_chrome = False


STATE = DocState()

_UNICODE_FIX = str.maketrans({
    "\u2014": "-", "\u2013": "-", "\u2018": "'", "\u2019": "'",
    "\u201c": '"', "\u201d": '"', "\u2026": "...", "\u00a0": " ",
    "\u2191": " rises", "\u2193": " falls", "\u2192": " -> ", "\u220e": "",
})


def esc(s: str) -> str:
    s = (s or "").translate(_UNICODE_FIX)
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br/>")


def strip_label(caption: str, kind: str) -> str:
    """Drop any hand-written 'Figure 3.' / 'Table 2:' prefix so numbering stays global."""
    return re.sub(rf"^\s*{kind}\s*\d*\s*[.:—-]?\s*", "", (caption or "").strip(), flags=re.I)


def lead_bold(term: str, text: str) -> str:
    """Bold the term without repeating it when the sentence already opens with it."""
    term = (term or "").strip()
    text = (text or "").strip()
    for prefix in (term, f"The {term}", f"A {term}", f"An {term}"):
        if prefix and text.lower().startswith(prefix.lower()):
            return f"<b>{esc(text[:len(prefix)])}</b>{esc(text[len(prefix):])}"
    return f"<b>{esc(term)}</b> {esc(text)}"


def styles():
    b = getSampleStyleSheet()
    return {
        "cover_brand": ParagraphStyle("cbr", parent=b["Normal"], fontName="Helvetica", fontSize=11, textColor=ACCENT, spaceAfter=10),
        "cover_title": ParagraphStyle("cti", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=26, textColor=INK, leading=31, spaceAfter=10),
        "cover_sub": ParagraphStyle("csu", parent=b["Normal"], fontName="Helvetica", fontSize=10.5, textColor=FOOTER_GRAY, leading=14),
        "toc_h": ParagraphStyle("th", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=16, textColor=INK, spaceAfter=10),
        "toc_ch": ParagraphStyle("tc", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=11, textColor=ACCENT, spaceBefore=10, spaceAfter=2),
        "toc_sec": ParagraphStyle("ts", parent=b["Normal"], fontName="Helvetica", fontSize=9.5, textColor=INK, leftIndent=14, leading=12, spaceAfter=1),
        # Fuhrmann: chapter 21pt accent, section 14pt accent
        "ch_title": ParagraphStyle("cht", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=20, textColor=ACCENT, leading=24, spaceBefore=8, spaceAfter=12),
        "sec": ParagraphStyle("sec", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=13, textColor=ACCENT, leading=16, spaceBefore=12, spaceAfter=6),
        "subsec": ParagraphStyle("ss", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=11, textColor=INK, leading=14, spaceBefore=8, spaceAfter=4),
        # Body ~11pt like Fuhrmann
        "body": ParagraphStyle("body", parent=b["Normal"], fontName="Helvetica", fontSize=10.5, textColor=INK, leading=14.2, alignment=TA_JUSTIFY, spaceAfter=7),
        "body_boldlead": ParagraphStyle("bbl", parent=b["Normal"], fontName="Helvetica", fontSize=10.5, textColor=INK, leading=14.2, alignment=TA_JUSTIFY, spaceAfter=7),
        "caption": ParagraphStyle("cap", parent=b["Normal"], fontName="Helvetica-Oblique", fontSize=9, textColor=ACCENT, alignment=TA_LEFT, spaceBefore=3, spaceAfter=10),
        "caption_strong": ParagraphStyle("caps", parent=b["Normal"], fontName="Helvetica-BoldOblique", fontSize=9, textColor=ACCENT, alignment=TA_LEFT, spaceBefore=3, spaceAfter=2),
        "bullet": ParagraphStyle("bu", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=10.5, textColor=INK, leading=14, leftIndent=16, spaceAfter=3),
        "example": ParagraphStyle("ex", parent=b["Normal"], fontName="Helvetica-Oblique", fontSize=10.2, textColor=INK, leading=13.8, alignment=TA_JUSTIFY, spaceAfter=7, leftIndent=4),
        "cell": ParagraphStyle("cell", parent=b["Normal"], fontName="Helvetica", fontSize=8.5, textColor=INK, leading=11, alignment=TA_LEFT),
        "cell_c": ParagraphStyle("cellc", parent=b["Normal"], fontName="Helvetica", fontSize=8.5, textColor=INK, leading=11, alignment=TA_CENTER),
        "cell_h": ParagraphStyle("cellh", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=8.5, textColor=white, leading=11, alignment=TA_CENTER),
        "cell_h_l": ParagraphStyle("cellhl", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=8.5, textColor=white, leading=11, alignment=TA_LEFT),
    }


S = styles()


# ─── Square accent bullet (Fuhrmann marker) ───────────────────────────
class SquareBullet(Flowable):
    def __init__(self, text: str, width: float):
        super().__init__()
        self.width = width
        self._p = Paragraph(esc(text), S["bullet"])
        self._h = 0

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        _, self._h = self._p.wrap(self.width - 16, ah)
        self.height = max(self._h, 10) + 2
        return self.width, self.height

    def draw(self):
        c = self.canv
        # solid orange square like Fuhrmann
        c.setFillColor(ACCENT)
        c.rect(0, self.height - 11, 5.5, 5.5, stroke=0, fill=1)
        self._p.drawOn(c, 12, 1)


# ─── Fuhrmann-style table ─────────────────────────────────────────────
def make_table(headers, rows, width, caption: str = "", center_body: bool = False):
    """Solid orange header, white text; dashed row/column separators; caption below."""
    global TABLE_N
    TABLE_N += 1
    ncols = max(len(headers), 1)

    if ncols >= 3:
        first = width * 0.28
        rest = (width - first) / (ncols - 1)
        col_ws = [first] + [rest] * (ncols - 1)
    elif ncols == 2:
        col_ws = [width * 0.5, width * 0.5]
    else:
        col_ws = [width / ncols] * ncols

    body_style = S["cell_c"] if center_body else S["cell"]
    head_style = S["cell_h"] if center_body else S["cell_h_l"]

    def cell(text, header=False):
        return Paragraph(esc(str(text)), head_style if header else body_style)

    data = [[cell(h, True) for h in headers]]
    for row in rows:
        r = list(row) + [""] * max(0, ncols - len(row))
        data.append([cell(r[i]) for i in range(ncols)])

    t = Table(data, colWidths=col_ws, repeatRows=1)
    # Fuhrmann: NO heavy outer box; solid header; dashed internals
    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), ACCENT),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("TEXTCOLOR", (0, 1), (-1, -1), INK),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        # dashed horizontal lines under each body row
        ("LINEBELOW", (0, 0), (-1, -2), 0.6, ACCENT_LIGHT, 1, (1, 2)),
        # dashed vertical separators
        ("LINEAFTER", (0, 0), (-2, -1), 0.7, ACCENT_LIGHT, 1, (1, 2)),
        # subtle bottom edge
        ("LINEBELOW", (0, -1), (-1, -1), 0.8, ACCENT),
    ]
    t.setStyle(TableStyle(style_cmds))

    cap = strip_label(caption, "table")
    cap = f"Table {TABLE_N}. {cap}" if cap else f"Table {TABLE_N}."
    return KeepTogether([t, Paragraph(esc(cap), S["caption"]), Spacer(1, 6)])


# ─── Drawing toolkit ──────────────────────────────────────────────────
GRID = HexColor("#E8DACB")
AXIS = HexColor("#4A423B")
CURVE2 = HexColor("#8A6A4F")
NOTE = HexColor("#7A6A5C")

PAD = 12  # inner padding of every figure frame


def _txt(c, x, y, s, size=7.5, bold=False, color=None, align="c", italic=False):
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


def _box(c, x, y, w, h, fill=white, stroke=ACCENT, dashed=True, lw=1.0, radius=0):
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


def _arrow2(c, x1, y1, x2, y2, color=NOTE, lw=0.9, head=4.5):
    """Double-headed measurement arrow."""
    c.setStrokeColor(color)
    c.setLineWidth(lw)
    c.setDash()
    c.line(x1, y1, x2, y2)
    ang = math.atan2(y2 - y1, x2 - x1)
    _head(c, x2, y2, ang, head, color)
    _head(c, x1, y1, ang + math.pi, head, color)


def _tree(c, parent_x, y_from, children_x, y_to, color=ACCENT, lw=1.0):
    """Orthogonal parent → children connector (stub, bus, drops)."""
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
    """Axes with arrow heads, dotted grid, ticks. Returns plot transforms."""
    top = 0.0
    if title:
        _txt(c, x, y + h - 8, title, 8.5, True, ACCENT, "l")
        if subtitle:
            tw = c.stringWidth(title, "Helvetica-Bold", 8.5)
            _txt(c, x + tw + 6, y + h - 8, subtitle, 7, False, FOOTER_GRAY, "l")
        top = 18.0

    ox, oy = x + 40, y + 30
    pw, ph = w - 54, h - top - 40

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
        _txt(c, ox - 5, yy - 2.2, str(int(p)), 6, False, FOOTER_GRAY, "r")
        p += p_step
    q = 0
    while q <= max_q + 0.001:
        xx = ox + pw * (q / max_q)
        c.line(xx, oy - 3, xx, oy)
        _txt(c, xx, oy - 10, str(int(q)), 6, False, FOOTER_GRAY)
        q += q_step

    c.saveState()
    c.translate(ox - 27, oy + ph / 2)
    c.rotate(90)
    _txt(c, 0, 0, y_label, 7, True, AXIS)
    c.restoreState()
    _txt(c, ox + pw + 9, oy - 21, x_label, 7, True, AXIS, "r")

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
    c.circle(x, y, 3, stroke=1, fill=1)
    _txt(c, x + dx, y + dy, label, 7, True, ACCENT, "l")


def _guides(c, ox, oy, px, py):
    c.setStrokeColor(NOTE)
    c.setLineWidth(0.6)
    c.setDash(1.5, 2)
    c.line(ox, py, px, py)
    c.line(px, oy, px, py)
    c.setDash()


# ─── Figures ──────────────────────────────────────────────────────────
def _fig_placeholder(c, x, y, w, h):
    _txt(c, x + w / 2, y + h / 2, "Figure", 9, True, ACCENT)


def _fig_supply(c, x, y, w, h):
    ox, oy, pw, ph, PX, PY = _chart(
        c, x, y, w, h, "Supply", "hours of tutoring offered per week",
        45, 250, 5, 50, "Quantity supplied (hours)", "Price (EUR per hour)")

    def sup(q):
        return 20 + 5 * q

    _curve(c, [(PX(4), PY(sup(4))), (PX(43), PY(sup(43)))], ACCENT, 2.0)
    _txt(c, PX(43) + 4, PY(sup(43)) - 2, "S", 9, True, ACCENT, "l")

    for q, name in ((12, "A"), (34, "B")):
        _guides(c, ox, oy, PX(q), PY(sup(q)))
        _marker(c, PX(q), PY(sup(q)), name, 5, -10)

    _txt(c, ox + 6, oy + ph - 8, "a higher price raises the quantity supplied (ceteris paribus)",
         6.4, False, NOTE, "l", italic=True)
    _txt(c, PX(25), PY(72), "from A to B only the price changed,", 6.3, False, NOTE, "l", italic=True)
    _txt(c, PX(25), PY(48), "so we move along the same curve S", 6.3, False, NOTE, "l", italic=True)


def _fig_demand(c, x, y, w, h):
    ox, oy, pw, ph, PX, PY = _chart(
        c, x, y, w, h, "Demand", "hours of tutoring bought per week",
        100, 250, 10, 50, "Quantity demanded (hours)", "Price (EUR per hour)")

    def dem(q, shift=0.0):
        return 258 - 2.4 * (q + shift)

    _curve(c, [(PX(8), PY(dem(8))), (PX(92), PY(dem(92)))], ACCENT, 2.0)
    _txt(c, PX(92) + 4, PY(dem(92)) + 2, "D", 9, True, ACCENT, "l")

    _curve(c, [(PX(8), PY(dem(8, 26))), (PX(66), PY(dem(66, 26)))], CURVE2, 1.4, dashed=True)
    _txt(c, PX(66) + 4, PY(dem(66, 26)) + 2, "D1", 8, True, CURVE2, "l")

    _arrow(c, PX(57.5), PY(120), PX(31.5), PY(120), CURVE2, 1.1, 5.5)
    _txt(c, PX(70), PY(205), "a fall in demand shifts", 6.3, False, NOTE, "l", italic=True)
    _txt(c, PX(70), PY(183), "the whole curve to D1", 6.3, False, NOTE, "l", italic=True)
    _txt(c, PX(9), PY(70), "price change: move along D", 6.3, False, NOTE, "l", italic=True)
    _txt(c, PX(9), PY(48), "non-price factors: D shifts to D1", 6.3, False, NOTE, "l", italic=True)


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

    _curve(c, [(PX(8), PY(sup(8))), (PX(92), PY(sup(92)))], ACCENT, 2.0)
    _curve(c, [(PX(8), PY(dem(8))), (PX(92), PY(dem(92)))], AXIS, 1.8)
    _txt(c, PX(92) + 4, PY(sup(92)) - 2, "S", 9, True, ACCENT, "l")
    _txt(c, PX(92) + 4, PY(dem(92)) + 2, "D", 9, True, AXIS, "l")

    # surplus band (price above equilibrium)
    ph_hi = 200
    _arrow2(c, PX((258 - ph_hi) / 2.4), PY(ph_hi), PX((ph_hi - 40) / 2.2), PY(ph_hi))
    _txt(c, PX(50), PY(ph_hi) + 5, "surplus: Qs > Qd, price falls", 6.2, False, NOTE)

    # shortage band (price below equilibrium)
    ph_lo = 90
    _arrow2(c, PX((ph_lo - 40) / 2.2), PY(ph_lo), PX((258 - ph_lo) / 2.4), PY(ph_lo))
    _txt(c, PX(48), PY(ph_lo) - 11, "shortage: Qd > Qs, price rises", 6.2, False, NOTE)

    _guides(c, ox, oy, PX(qe), PY(pe))
    _marker(c, PX(qe), PY(pe), "E", 6, 4)
    _txt(c, ox - 5, PY(pe) + 4, "P*", 7, True, ACCENT, "r")
    _txt(c, PX(qe), oy - 19, "Q*", 7, True, ACCENT)


def _fig_circular_flow(c, x, y, w, h):
    bw, bh = w * 0.24, 92
    lx = x + 2
    rx = x + w - bw - 2
    base = y + 24
    gov_h = 26
    gov_y = y + h - gov_h
    gx = x + (w - bw) / 2

    _box(c, gx, gov_y, bw, gov_h, ACCENT_SOFT, radius=2)
    _txt(c, gx + bw / 2, gov_y + 9, "Government", 8, True, ACCENT)

    for px, l1, l2 in ((lx, "Private", "households"), (rx, "Businesses", "")):
        _box(c, px, base, bw, bh, white, radius=2)
        if l2:
            _txt(c, px + bw / 2, base + bh / 2 + 2, l1, 8, True, ACCENT)
            _txt(c, px + bw / 2, base + bh / 2 - 8, l2, 8, True, ACCENT)
        else:
            _txt(c, px + bw / 2, base + bh / 2 - 3, l1, 8, True, ACCENT)

    # four flow lanes running between the two boxes
    x1, x2 = lx + bw + 6, rx - 6
    lanes = [
        (base + 76, "Goods and services", "left"),
        (base + 54, "Payments for goods and services", "right"),
        (base + 32, "Labour and other resources", "right"),
        (base + 10, "Wages, rent, interest and profit", "left"),
    ]
    for ly, label, direction in lanes:
        if direction == "left":
            _arrow(c, x2, ly, x1, ly, ACCENT, 1.1, 5.5)
        else:
            _arrow(c, x1, ly, x2, ly, ACCENT, 1.1, 5.5)
        _txt(c, (x1 + x2) / 2, ly + 4, label, 6.4, False, NOTE)

    # taxes up to government, public goods back down
    for px, side in ((lx + bw * 0.4, "r"), (rx + bw * 0.6, "l")):
        _arrow(c, px, base + bh, px, gov_y - 3, ACCENT_LIGHT, 1.0, 5)
        _txt(c, px + (-3 if side == "r" else 3), (base + bh + gov_y) / 2 - 3,
             "taxes", 6.2, False, NOTE, side)
    _txt(c, x + w / 2, gov_y - 12, "public goods, transfers and subsidies", 6.4, False, NOTE)

    _txt(c, x + w / 2, y + 4, "real flows and monetary flows run in opposite directions",
         6.4, False, NOTE, italic=True)


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
        _txt(c, px + bw / 2, py + bh - 16, title, 9, True, ACCENT)
        _txt(c, px + bw / 2, py + bh - 29, kind, 7.2, True, INK)
        # wrap the example list onto two lines
        words = examples.split(", ")
        half = (len(words) + 1) // 2
        _txt(c, px + bw / 2, py + bh - 45, ", ".join(words[:half]), 6.3, False, NOTE)
        _txt(c, px + bw / 2, py + bh - 55, ", ".join(words[half:]), 6.3, False, NOTE)
        if i < 2:
            _arrow(c, px + bw + 4, py + bh / 2, px + bw + gap - 4, py + bh / 2, ACCENT, 1.2, 6)
    _txt(c, x + w / 2, y + 4,
         "the more developed an economy, the larger the share of the tertiary sector",
         6.5, False, NOTE, italic=True)


def _fig_ownership(c, x, y, w, h):
    def node(px, py, bw, bh, title, sub="", size=7.6, fill=white):
        _box(c, px, py, bw, bh, fill)
        if sub:
            _txt(c, px + bw / 2, py + bh / 2 + 1, title, size, True, ACCENT)
            _txt(c, px + bw / 2, py + bh / 2 - 9, sub, 6.3, False, NOTE)
        else:
            _txt(c, px + bw / 2, py + bh / 2 - 3, title, size, True, ACCENT)

    root_w, root_h = w * 0.60, 24
    root_x = x + (w - root_w) / 2
    root_y = y + h - root_h
    node(root_x, root_y, root_w, root_h, "Forms of business ownership", "", 8, ACCENT_SOFT)

    mid_w, mid_h = w * 0.44, 34
    mid_y = y + h * 0.46
    lx, rx = x, x + w - mid_w
    node(lx, mid_y, mid_w, mid_h, "Unincorporated", "no separate legal person; owner = manager")
    node(rx, mid_y, mid_w, mid_h, "Incorporated", "separate legal person; limited liability")

    _tree(c, root_x + root_w / 2, root_y, [lx + mid_w / 2, rx + mid_w / 2], mid_y + mid_h)

    leaf_h = 30
    leaf_y = y + 12
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
        node(px, leaf_y, lw_, leaf_h, t, s, 7.2)
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
    # connectors run from the circle edge to the box corner facing the centre
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
        _txt(c, bx + bw / 2, by + bh - 17, title, 9, True, ACCENT)
        _txt(c, bx + bw / 2, by + bh - 30, sub, 6.4, False, NOTE)

    c.setFillColor(ACCENT_SOFT)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.1)
    c.setDash(1.6, 1.6)
    c.circle(cx, cy, r, stroke=1, fill=1)
    c.setDash()
    _txt(c, cx, cy + 4, "Marketing", 8.5, True, ACCENT)
    _txt(c, cx, cy - 6, "mix", 8.5, True, ACCENT)
    _txt(c, cx, cy - 18, "the four Ps", 6.3, False, NOTE)


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
    _txt(c, ox - 5, zero - 2, "0", 6, False, FOOTER_GRAY, "r")

    stages = [("Introduction", 0.00, 0.17), ("Growth", 0.17, 0.44),
              ("Maturity", 0.44, 0.74), ("Decline", 0.74, 1.00)]
    c.setStrokeColor(GRID)
    c.setLineWidth(0.6)
    c.setDash(1.5, 2)
    for _, _, end in stages[:-1]:
        c.line(ox + pw * end, oy, ox + pw * end, oy + ph)
    c.setDash()
    for name, a, b in stages:
        _txt(c, ox + pw * (a + b) / 2, oy + ph + 1, name, 6.6, True, ACCENT)

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
    _txt(c, ox + pw * 0.50, zero + ph * 0.62, "Sales", 7.5, True, ACCENT)

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
    _txt(c, ox + pw * 0.30, zero + ph * 0.03, "Profit", 7.5, True, CURVE2)

    c.saveState()
    c.translate(ox - 28, oy + ph / 2)
    c.rotate(90)
    _txt(c, 0, 0, "Sales and profit", 7, True, AXIS)
    c.restoreState()
    _txt(c, ox + pw + 10, zero - 16, "Time", 7, True, AXIS, "r")
    _txt(c, ox + 4, oy + 2, "losses in the introduction stage; profit peaks before sales do",
         6.3, False, NOTE, "l", italic=True)


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
        _txt(c, px + qw / 2, py + qh - 20, title, 9, True, ACCENT)
        _txt(c, px + qw / 2, py + qh - 33, cond, 6.5, False, INK)
        _txt(c, px + qw / 2, py + qh - 45, action, 6.3, False, NOTE, italic=True)

    c.setStrokeColor(AXIS)
    c.setLineWidth(0.9)
    c.line(ox, oy, ox, oy + ph + 8)
    c.line(ox, oy, ox + pw + 8, oy)
    _head(c, ox, oy + ph + 10, math.pi / 2, 5, AXIS)
    _head(c, ox + pw + 10, oy, 0, 5, AXIS)

    c.saveState()
    c.translate(ox - 22, oy + ph / 2)
    c.rotate(90)
    _txt(c, 0, 0, "Market growth", 7, True, AXIS)
    c.restoreState()
    _txt(c, ox - 5, oy + ph - 8, "high", 6, False, FOOTER_GRAY, "r")
    _txt(c, ox - 5, oy + 6, "low", 6, False, FOOTER_GRAY, "r")

    _txt(c, ox + pw / 2, oy - 20, "Relative market share", 7, True, AXIS)
    _txt(c, ox + qw / 2, oy - 10, "high", 6, False, FOOTER_GRAY)
    _txt(c, ox + qw * 1.5, oy - 10, "low", 6, False, FOOTER_GRAY)


def _fig_fs(c, x, y, w, h):
    root_w, root_h = w * 0.46, 24
    root_x = x + (w - root_w) / 2
    root_y = y + h - root_h
    _box(c, root_x, root_y, root_w, root_h, ACCENT_SOFT)
    _txt(c, root_x + root_w / 2, root_y + 8, "Financial statements", 8.5, True, ACCENT)

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
        _txt(c, px + bw / 2, by + bh - 17, t, 7.8, True, ACCENT)
        _txt(c, px + bw / 2, by + bh - 30, l1, 6.4, False, NOTE)
        _txt(c, px + bw / 2, by + bh - 40, l2, 6.4, False, NOTE)
        xs.append(px + bw / 2)
    _tree(c, root_x + root_w / 2, root_y, xs, by + bh)


def _fig_bs(c, x, y, w, h):
    mid = x + w / 2
    top = y + h
    bottom = y + 16
    _box(c, x, bottom, w, top - bottom, white, ACCENT, dashed=False, lw=0.9)

    head_y = top - 24
    c.setStrokeColor(ACCENT)
    c.setLineWidth(0.9)
    c.line(x, head_y, x + w, head_y)
    c.line(mid, bottom, mid, top)
    _txt(c, x + w * 0.25, head_y + 8, "Assets", 8.5, True, ACCENT)
    _txt(c, x + w * 0.75, head_y + 8, "Equity and liabilities", 8.5, True, ACCENT)

    left = [("Office equipment", "25,000"), ("Van", "8,000"),
            ("Inventory", "12,500"), ("Cash and bank", "3,500")]
    right = [("Owner's equity", "24,000"), ("Bank loan", "25,000"), ("", ""), ("", "")]

    for i, ((la, lv), (ra, rv)) in enumerate(zip(left, right)):
        yy = head_y - 16 - i * 14
        if la:
            _txt(c, x + 12, yy, la, 7.4, False, INK, "l")
            _txt(c, mid - 12, yy, lv, 7.4, False, INK, "r")
        if ra:
            _txt(c, mid + 12, yy, ra, 7.4, False, INK, "l")
            _txt(c, x + w - 12, yy, rv, 7.4, False, INK, "r")

    tot_y = bottom + 10
    c.setStrokeColor(ACCENT_LIGHT)
    c.setLineWidth(0.7)
    c.setDash(1, 2)
    c.line(x + 12, tot_y + 10, mid - 12, tot_y + 10)
    c.line(mid + 12, tot_y + 10, x + w - 12, tot_y + 10)
    c.setDash()
    _txt(c, x + 12, tot_y, "Total assets", 7.6, True, INK, "l")
    _txt(c, mid - 12, tot_y, "49,000", 7.6, True, INK, "r")
    _txt(c, mid + 12, tot_y, "Total equity and liabilities", 7.6, True, INK, "l")
    _txt(c, x + w - 12, tot_y, "49,000", 7.6, True, INK, "r")

    _txt(c, x + w / 2, y + 3, "assets = equity + liabilities (both sides always balance)",
         6.6, False, NOTE, italic=True)


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
}

FIG_HEIGHTS = {
    "circular-flow": 232,
    "supply-curve": 205,
    "demand-curve": 205,
    "equilibrium": 220,
    "economic-sectors": 132,
    "ownership-overview": 200,
    "marketing-mix": 196,
    "product-life-cycle": 205,
    "bcg-matrix": 210,
    "financial-statements": 150,
    "balance-sheet": 158,
}


class Diagram(Flowable):
    def __init__(self, fig_id: str, width: float):
        super().__init__()
        self.fig_id = fig_id
        self.width = width
        self.height = FIG_HEIGHTS.get(fig_id, 170)

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        self.height = FIG_HEIGHTS.get(self.fig_id, 170)
        return self.width, self.height

    def draw(self):
        c = self.canv
        c.saveState()
        c.setFillColor(ACCENT_SOFT)
        c.setStrokeColor(ACCENT)
        c.setDash(2, 2)
        c.setLineWidth(1.0)
        c.rect(0, 0, self.width, self.height, stroke=1, fill=1)
        c.setDash()
        FIGURES.get(self.fig_id, _fig_placeholder)(
            c, PAD, PAD, self.width - 2 * PAD, self.height - 2 * PAD)
        c.restoreState()


def figure_block(fid: str, caption: str, width: float):
    global FIGURE_N
    FIGURE_N += 1
    cap = strip_label(caption, "figure")
    cap = f"Figure {FIGURE_N}. {cap}" if cap else f"Figure {FIGURE_N}."
    return KeepTogether([
        Diagram(fid, width),
        Paragraph(esc(cap), S["caption"]),
        Spacer(1, 4),
    ])


class SetHeader(Flowable):
    """Changes the running head at render time (not while the story is assembled)."""

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
    if doc.page == 1:  # cover stays clean
        return
    canvas.saveState()
    # Running chapter title in top-right accent band (simplified slanted header)
    if STATE.footer_chapter and doc.page > 2:
        label = STATE.footer_chapter.translate(_UNICODE_FIX)
        size = 7.5
        max_w = W * 0.52 - R_M
        while size > 5.5 and canvas.stringWidth(label, "Helvetica-Bold", size) > max_w:
            size -= 0.25
        band_w = min(canvas.stringWidth(label, "Helvetica-Bold", size) + 22, W * 0.6)
        canvas.setFillColor(ACCENT_SOFT)
        canvas.rect(W - R_M - band_w, H - 14 * mm, band_w, 9 * mm, stroke=0, fill=1)
        canvas.setFillColor(ACCENT)
        canvas.setFont("Helvetica-Bold", size)
        canvas.drawRightString(W - R_M - 10, H - 10.5 * mm, label)

    # Footer — Fuhrmann style
    canvas.setStrokeColor(HexColor("#D0D0D0"))
    canvas.setLineWidth(0.5)
    canvas.line(L_M, 12 * mm, W - R_M, 12 * mm)
    canvas.setFillColor(FOOTER_GRAY)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(L_M, 7 * mm, "INTRODUCTION TO BUSINESS AND ECONOMICS")
    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawRightString(W - R_M, 7 * mm, str(doc.page))
    canvas.restoreState()


def blocks_to_flowables(blocks, width):
    """Render like Fuhrmann: flowing prose, bold definitions inline, square bullets, no UI cards."""
    out = []
    for b in blocks:
        t = b.get("type")
        if t == "p":
            out.append(Paragraph(esc(b["text"]), S["body"]))
            plain_parts.append(b["text"])
        elif t == "definition":
            # Fuhrmann: bold term woven into prose — NOT a coloured card
            out.append(Paragraph(lead_bold(b["term"], b["text"]), S["body_boldlead"]))
            plain_parts.append(f"{b['term']}: {b['text']}")
        elif t == "bullets":
            for item in b.get("items", []):
                out.append(SquareBullet(item, width))
                plain_parts.append(item)
            out.append(Spacer(1, 4))
        elif t == "example":
            title = b.get("title") or "Example"
            out.append(Paragraph(
                f"<b>{esc(title)}.</b> <i>{esc(b['text'])}</i>",
                S["example"],
            ))
            plain_parts.append(b["text"])
        elif t == "formula":
            # light dashed formula strip (still book-like)
            label = b.get("label") or ""
            text = f"<b>{esc(label)}:</b> {esc(b['text'])}" if label else f"<b>{esc(b['text'])}</b>"
            data = [[Paragraph(text, S["body"])]]
            tw = Table(data, colWidths=[width])
            tw.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), ACCENT_SOFT),
                ("BOX", (0, 0), (-1, -1), 0.9, ACCENT, 1, (1, 2)),  # dashed
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]))
            out.append(Spacer(1, 3))
            out.append(tw)
            out.append(Spacer(1, 6))
            plain_parts.append(b["text"])
        elif t == "table":
            # detect simple numeric tables → center
            rows = b.get("rows") or []
            center = bool(rows) and all(len(str(c)) < 18 for r in rows for c in r)
            out.append(Spacer(1, 4))
            out.append(make_table(b.get("headers") or [], rows, width, b.get("caption") or "", center_body=center))
        elif t == "figure":
            out.append(Spacer(1, 4))
            out.append(figure_block(b.get("id") or "", b.get("caption") or "", width))
        elif t == "takeaways":
            for item in b.get("items", []):
                out.append(SquareBullet(item, width))
        elif t in ("trap", "statement", "application"):
            # fold into a square-bullet insight, not a card
            body = b.get("text") or b.get("claim") or ""
            if body:
                out.append(SquareBullet(body, width))
        elif b.get("text"):
            out.append(Paragraph(esc(b["text"]), S["body"]))
    return out


def build():
    global TABLE_N, FIGURE_N
    TABLE_N = FIGURE_N = 0
    width = W - L_M - R_M
    story = []

    # Cover — calm, Fuhrmann-like
    STATE.skip_chrome = True
    story.append(Spacer(1, 50))
    story.append(Paragraph("BBE SCHOOL", S["cover_brand"]))
    story.append(Paragraph("Introduction to<br/>Business and Economics", S["cover_title"]))
    story.append(Spacer(1, 8))
    story.append(Paragraph("Study material for the Economics Full Course", S["cover_sub"]))
    story.append(Paragraph("Chapters 2 – 6", S["cover_sub"]))
    story.append(PageBreak())

    STATE.skip_chrome = False
    STATE.footer_chapter = ""
    story.append(Paragraph("Contents", S["toc_h"]))
    for ch in CONTENT["chapters"]:
        story.append(Paragraph(f"{ch['num']}  {esc(ch['title'])}", S["toc_ch"]))
        for sec in ch["sections"]:
            story.append(Paragraph(f"{sec['id']}  {esc(sec['title'])}", S["toc_sec"]))
    story.append(PageBreak())

    ranges: dict[int, dict] = {}
    for ch in CONTENT["chapters"]:
        story.append(ChapterStart(ch["num"], ch["title"]))
        # Fuhrmann chapter head: "2   Basic economic concepts"
        story.append(Paragraph(f"{ch['num']}&nbsp;&nbsp;&nbsp;{esc(ch['title'])}", S["ch_title"]))
        story.append(Paragraph(esc(ch["intro"]), S["body"]))
        plain_parts.append(f"Chapter {ch['num']}. {ch['title']}\n{ch['intro']}")

        for sec in ch["sections"]:
            story.append(Paragraph(f"{sec['id']}  {esc(sec['title'])}", S["sec"]))
            plain_parts.append(f"{sec['id']} {sec['title']}")
            story.extend(blocks_to_flowables(sec["blocks"], width))
        story.append(PageBreak())

    story.append(SetHeader(""))
    story.append(Spacer(1, 60))
    story.append(Paragraph("End of Full Course theory", S["ch_title"]))
    story.append(Paragraph(
        "Continue with practice tasks for the chapter you have just studied.",
        S["body"],
    ))

    doc = BaseDocTemplate(
        str(OUT_PDF), pagesize=A4,
        leftMargin=L_M, rightMargin=R_M, topMargin=T_M, bottomMargin=B_M,
        title="Introduction to Business and Economics — BBE School",
        author="BBE School",
    )
    frame = Frame(L_M, B_M, width, H - T_M - B_M, id="normal")
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=lambda c, d: None, onPageEnd=chrome)])

    def after_flowable(flowable):
        if isinstance(flowable, ChapterStart):
            ranges[flowable.num] = {"chapter": flowable.num, "title": flowable.title, "startPage": doc.page, "endPage": doc.page}
        elif STATE.chapter in ranges:
            ranges[STATE.chapter]["endPage"] = doc.page

    doc.afterFlowable = after_flowable
    doc.build(story)

    chapters_sorted = sorted(ranges.values(), key=lambda x: x["startPage"])
    for i, r in enumerate(chapters_sorted):
        r["endPage"] = chapters_sorted[i + 1]["startPage"] - 1 if i + 1 < len(chapters_sorted) else max(r["startPage"], doc.page - 1)

    manifest = {"pageCount": doc.page, "chapters": chapters_sorted}
    OUT_MANIFEST.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    OUT_TEXT.write_text("\n\n".join(plain_parts), encoding="utf-8")
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    build()
