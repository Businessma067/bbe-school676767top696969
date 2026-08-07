#!/usr/bin/env python3
"""
BBE Economics textbook — visual clone of Fuhrmann (2019) layout,
with blue accents replaced by BBE orange.
"""
from __future__ import annotations

import json
import math
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

    cap = (caption or "").strip()
    if not cap.lower().startswith("table"):
        cap = f"Table {TABLE_N}. {cap}" if cap else f"Table {TABLE_N}."
    # "Table N." bold + rest italic — approximate with one caption style
    cap_para = Paragraph(f"<b>{esc(cap.split('.')[0]+'.')}</b>{esc('.' + '.'.join(cap.split('.')[1:]) if '.' in cap else '')}", S["caption"])
    # simpler:
    cap_para = Paragraph(esc(cap), S["caption"])

    return KeepTogether([t, cap_para, Spacer(1, 6)])


# ─── Figures (dashed orange frame + soft fill) ────────────────────────
class Diagram(Flowable):
    def __init__(self, fig_id: str, width: float):
        super().__init__()
        self.fig_id = fig_id
        self.width = width
        self.height = 170

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        if self.fig_id in ("circular-flow", "ownership-overview", "bcg-matrix", "equilibrium"):
            self.height = 195
        elif self.fig_id in ("supply-curve", "demand-curve"):
            self.height = 180
        else:
            self.height = 160
        return self.width, self.height

    def draw(self):
        c = self.canv
        c.saveState()
        # soft fill + dashed accent border (Fuhrmann figure frame)
        c.setFillColor(ACCENT_SOFT)
        c.setStrokeColor(ACCENT)
        c.setDash(2, 2)
        c.setLineWidth(1.0)
        c.rect(0, 0, self.width, self.height, stroke=1, fill=1)
        c.setDash()
        fn = FIGURES.get(self.fig_id, _fig_placeholder)
        fn(c, 10, 10, self.width - 20, self.height - 20)
        c.restoreState()


def _label(c, x, y, text, size=8, bold=False, color=None, align="c"):
    c.setFillColor(color or INK)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    if align == "c":
        c.drawCentredString(x, y, text)
    elif align == "r":
        c.drawRightString(x, y, text)
    else:
        c.drawString(x, y, text)


def _fig_placeholder(c, x, y, w, h):
    _label(c, x + w / 2, y + h / 2, "Figure", color=ACCENT)


def _axis(c, x, y, w, h, max_p=250, max_q=45, q_step=5):
    ox, oy = x + 34, y + 26
    pw, ph = w - 48, h - 44
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    c.line(ox, oy, ox, oy + ph)
    c.line(ox, oy, ox + pw, oy)
    # light grid
    c.setStrokeColor(HexColor("#DDDDDD"))
    c.setLineWidth(0.4)
    for i in range(1, 6):
        yy = oy + ph * (i / 5)
        c.line(ox, yy, ox + pw, yy)
    c.setFillColor(FOOTER_GRAY)
    c.setFont("Helvetica", 6.5)
    for i in range(6):
        p = max_p - i * (max_p // 5)
        yy = oy + ph * (1 - i / 5)
        c.setStrokeColor(INK)
        c.setLineWidth(0.5)
        c.line(ox - 3, yy, ox, yy)
        c.drawRightString(ox - 5, yy - 2, str(p))
    n = max(1, max_q // q_step)
    for i in range(0, n + 1):
        q = i * q_step
        xx = ox + pw * (q / max_q)
        c.line(xx, oy, xx, oy - 3)
        c.drawCentredString(xx, oy - 11, str(q))
    c.setFillColor(INK)
    c.setFont("Helvetica", 7)
    c.saveState()
    c.translate(ox - 18, oy + ph / 2)
    c.rotate(90)
    c.drawCentredString(0, 0, "Price")
    c.restoreState()
    c.drawString(ox + pw - 42, oy - 20, "Quantity")
    return ox, oy, pw, ph


def _fig_supply(c, x, y, w, h):
    _label(c, x + 8, y + h - 6, "Supply", 9, True, ACCENT, "l")
    c.setFillColor(FOOTER_GRAY)
    c.setFont("Helvetica", 8)
    c.drawString(x + 52, y + h - 6, "per week")
    ox, oy, pw, ph = _axis(c, x, y, w, h - 10, 250, 45, 5)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2.2)
    c.line(ox + pw * 0.1, oy + ph * 0.18, ox + pw * 0.88, oy + ph * 0.88)
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(ox + pw * 0.88 - 10, oy + ph * 0.88 + 3, "S")


def _fig_demand(c, x, y, w, h):
    _label(c, x + 8, y + h - 6, "Demand", 9, True, ACCENT, "l")
    c.setFillColor(FOOTER_GRAY)
    c.setFont("Helvetica", 8)
    c.drawString(x + 58, y + h - 6, "per week")
    ox, oy, pw, ph = _axis(c, x, y, w, h - 10, 250, 100, 10)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2.2)
    c.line(ox + pw * 0.08, oy + ph * 0.88, ox + pw * 0.9, oy + ph * 0.16)
    c.setFillColor(ACCENT)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(ox + pw * 0.9 - 4, oy + ph * 0.16 + 3, "D")


def _fig_equilibrium(c, x, y, w, h):
    _label(c, x + 8, y + h - 6, "Market", 9, True, ACCENT, "l")
    ox, oy, pw, ph = _axis(c, x, y, w, h - 10, 250, 100, 10)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2)
    c.line(ox + pw * 0.08, oy + ph * 0.2, ox + pw * 0.88, oy + ph * 0.88)
    c.setStrokeColor(INK)
    c.line(ox + pw * 0.08, oy + ph * 0.88, ox + pw * 0.88, oy + ph * 0.2)
    ex, ey = ox + pw * 0.42, oy + ph * (150 / 250)
    c.setDash(1.5, 1.5)
    c.setStrokeColor(FOOTER_GRAY)
    c.setLineWidth(0.7)
    c.line(ox, ey, ex, ey)
    c.line(ex, oy, ex, ey)
    c.setDash()
    c.setFillColor(ACCENT)
    c.circle(ex, ey, 3.5, stroke=0, fill=1)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(ex + 5, ey + 3, "E")
    c.setFillColor(ACCENT)
    c.drawString(ox + 4, oy + ph * 0.9, "S")
    c.setFillColor(INK)
    c.drawString(ox + pw * 0.82, oy + ph * 0.9, "D")


def _arrow(c, x1, y1, x2, y2):
    c.setStrokeColor(ACCENT)
    c.setFillColor(ACCENT)
    c.setLineWidth(1.2)
    c.line(x1, y1, x2, y2)
    ang = math.atan2(y2 - y1, x2 - x1)
    path = c.beginPath()
    path.moveTo(x2, y2)
    path.lineTo(x2 - 6 * math.cos(ang - 0.4), y2 - 6 * math.sin(ang - 0.4))
    path.lineTo(x2 - 6 * math.cos(ang + 0.4), y2 - 6 * math.sin(ang + 0.4))
    path.close()
    c.drawPath(path, fill=1, stroke=0)


def _fig_circular_flow(c, x, y, w, h):
    bw, bh = w * 0.30, 30
    boxes = {
        "hh": (x + (w - bw) / 2, y + h - 42),
        "biz": (x + 8, y + 24),
        "gov": (x + w - bw - 8, y + 24),
    }
    for key, (px, py) in boxes.items():
        c.setFillColor(white)
        c.setStrokeColor(ACCENT)
        c.setDash(1.5, 1.5)
        c.setLineWidth(1)
        c.roundRect(px, py, bw, bh, 2, stroke=1, fill=1)
        c.setDash()
    _label(c, boxes["hh"][0] + bw / 2, boxes["hh"][1] + 11, "Private households", 7.5, True, ACCENT)
    _label(c, boxes["biz"][0] + bw / 2, boxes["biz"][1] + 11, "Businesses", 7.5, True, ACCENT)
    _label(c, boxes["gov"][0] + bw / 2, boxes["gov"][1] + 11, "Government", 7.5, True, ACCENT)
    _arrow(c, boxes["hh"][0] + 20, boxes["hh"][1], boxes["biz"][0] + bw / 2, boxes["biz"][1] + bh)
    _arrow(c, boxes["biz"][0] + bw / 2, boxes["biz"][1] + bh, boxes["hh"][0] + bw * 0.35, boxes["hh"][1])
    _arrow(c, boxes["hh"][0] + bw - 20, boxes["hh"][1], boxes["gov"][0] + bw / 2, boxes["gov"][1] + bh)
    _arrow(c, boxes["gov"][0] + bw / 2, boxes["gov"][1] + bh, boxes["hh"][0] + bw * 0.7, boxes["hh"][1])
    _arrow(c, boxes["biz"][0] + bw, boxes["biz"][1] + bh / 2, boxes["gov"][0], boxes["gov"][1] + bh / 2)
    c.setFont("Helvetica", 6.2)
    c.setFillColor(FOOTER_GRAY)
    c.drawString(x + w * 0.08, y + h * 0.5, "Labour / wages")
    c.drawString(x + w * 0.58, y + h * 0.5, "Taxes / transfers")
    c.drawCentredString(x + w / 2, y + 8, "Goods, services and subsidies")


def _fig_sectors(c, x, y, w, h):
    labels = [("Primary", "Natural resources"), ("Secondary", "Manufacturing"), ("Tertiary", "Services")]
    gap = 10
    bw = (w - 2 * gap) / 3
    for i, (t, s) in enumerate(labels):
        px = x + i * (bw + gap)
        py = y + 30
        c.setFillColor(white)
        c.setStrokeColor(ACCENT)
        c.setDash(1.5, 1.5)
        c.rect(px, py, bw, h - 55, stroke=1, fill=1)
        c.setDash()
        _label(c, px + bw / 2, py + h - 85, t, 9, True, ACCENT)
        c.setFont("Helvetica", 7)
        c.setFillColor(INK)
        c.drawCentredString(px + bw / 2, py + h - 105, s)
        if i < 2:
            _arrow(c, px + bw + 1, py + (h - 55) / 2, px + bw + gap - 1, py + (h - 55) / 2)


def _fig_ownership(c, x, y, w, h):
    # Tree like Fuhrmann Fig 9 — dashed boxes + orange arrows
    top_w = w * 0.62
    tx = x + (w - top_w) / 2
    ty = y + h - 36
    def box(px, py, bw, bh, text, size=7.5):
        c.setFillColor(ACCENT_SOFT)
        c.setStrokeColor(ACCENT)
        c.setDash(1.5, 1.5)
        c.setLineWidth(1)
        c.rect(px, py, bw, bh, stroke=1, fill=1)
        c.setDash()
        _label(c, px + bw / 2, py + bh / 2 - 3, text, size, True, ACCENT)
    box(tx, ty, top_w, 26, "Forms of business ownership / legal structure", 7.5)
    mid_y = y + h * 0.52
    bw = w * 0.40
    left_x, right_x = x + 6, x + w - bw - 6
    box(left_x, mid_y, bw, 40, "Unincorporated businesses", 8)
    box(right_x, mid_y, bw, 40, "Incorporated businesses", 8)
    _arrow(c, tx + top_w / 2, ty, left_x + bw / 2, mid_y + 40)
    _arrow(c, tx + top_w / 2, ty, right_x + bw / 2, mid_y + 40)
    # note lines under mid boxes
    c.setFont("Helvetica", 6.2)
    c.setFillColor(INK)
    c.drawCentredString(left_x + bw / 2, mid_y + 8, "Owner(s) = manager(s)")
    c.drawCentredString(right_x + bw / 2, mid_y + 8, "Separate legal person")
    bot = y + 16
    sw = (w - 24) / 3
    for i, t in enumerate(["Sole trader / sole proprietor", "Partnership", "Corporation / LLC"]):
        box(x + 4 + i * (sw + 8), bot, sw, 32, t, 6.5)
        parent = left_x + bw / 2 if i < 2 else right_x + bw / 2
        _arrow(c, parent, mid_y, x + 4 + i * (sw + 8) + sw / 2, bot + 32)


def _fig_mix(c, x, y, w, h):
    cx, cy = x + w / 2, y + h / 2 + 6
    c.setFillColor(ACCENT_SOFT)
    c.setStrokeColor(ACCENT)
    c.setDash(1.5, 1.5)
    c.circle(cx, cy, 24, stroke=1, fill=1)
    c.setDash()
    _label(c, cx, cy - 3, "Product", 8, True, ACCENT)
    for t, bx, by in (("Price", cx - w * 0.36, cy + 40), ("Place", cx + w * 0.16, cy + 40), ("Promotion", cx - 36, cy - 68)):
        c.setFillColor(white)
        c.setStrokeColor(ACCENT)
        c.setDash(1.5, 1.5)
        c.rect(bx, by, 74, 20, stroke=1, fill=1)
        c.setDash()
        _label(c, bx + 37, by + 6, t, 8, True, ACCENT)
        c.setStrokeColor(ACCENT)
        c.setDash()
        c.setLineWidth(1)
        c.line(cx, cy, bx + 37, by + 10)


def _fig_plc(c, x, y, w, h):
    ox, oy = x + 28, y + 28
    pw, ph = w - 46, h - 50
    c.setStrokeColor(INK)
    c.line(ox, oy, ox, oy + ph)
    c.line(ox, oy, ox + pw, oy)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2)
    p = c.beginPath()
    p.moveTo(ox + 4, oy + 4)
    p.curveTo(ox + pw * 0.2, oy + ph * 0.25, ox + pw * 0.3, oy + ph * 0.85, ox + pw * 0.48, oy + ph * 0.78)
    p.curveTo(ox + pw * 0.65, oy + ph * 0.7, ox + pw * 0.78, oy + ph * 0.35, ox + pw * 0.92, oy + 12)
    c.drawPath(p, stroke=1, fill=0)
    c.setFont("Helvetica", 6.5)
    c.setFillColor(FOOTER_GRAY)
    for i, s in enumerate(["Intro", "Growth", "Maturity", "Decline"]):
        c.drawCentredString(ox + pw * (0.14 + i * 0.22), oy - 12, s)


def _fig_bcg(c, x, y, w, h):
    pad = 18
    qw, qh = (w - pad) / 2, (h - pad) / 2
    cells = [
        (x, y + qh + pad / 2, "Stars"),
        (x + qw + pad / 2, y + qh + pad / 2, "Question marks"),
        (x, y + 6, "Cash cows"),
        (x + qw + pad / 2, y + 6, "Poor dogs"),
    ]
    for px, py, title in cells:
        c.setFillColor(ACCENT_SOFT)
        c.setStrokeColor(ACCENT)
        c.setDash(1.5, 1.5)
        c.rect(px, py, qw - 6, qh - 10, stroke=1, fill=1)
        c.setDash()
        _label(c, px + (qw - 6) / 2, py + (qh - 10) / 2 - 2, title, 8.5, True, ACCENT)


def _fig_fs(c, x, y, w, h):
    items = ["Balance sheet", "Income statement", "Cash flow statement"]
    bw = (w - 20) / 3
    for i, t in enumerate(items):
        px = x + i * (bw + 10)
        c.setFillColor(ACCENT_SOFT)
        c.setStrokeColor(ACCENT)
        c.setDash(1.5, 1.5)
        c.rect(px, y + 24, bw, h - 48, stroke=1, fill=1)
        c.setDash()
        _label(c, px + bw / 2, y + h / 2, t, 8, True, ACCENT)
    _label(c, x + w / 2, y + 8, "Financial statement", 8, True, ACCENT)


def _fig_bs(c, x, y, w, h):
    mid = x + w / 2
    c.setFillColor(white)
    c.setStrokeColor(ACCENT)
    c.setDash(1.5, 1.5)
    c.rect(x + 4, y + 6, w - 8, h - 12, stroke=1, fill=1)
    c.setDash()
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1)
    c.line(mid, y + 6, mid, y + h - 6)
    c.line(x + 4, y + h - 30, x + w - 4, y + h - 30)
    _label(c, x + w * 0.25, y + h - 22, "Assets", 9, True, ACCENT)
    _label(c, x + w * 0.75, y + h - 22, "Equity and liabilities", 9, True, ACCENT)
    left = [("Non-current assets", ""), ("Current assets", ""), ("  Inventory", ""), ("  Cash", ""), ("Total", "")]
    right = [("Equity", ""), ("Non-current liabilities", ""), ("Current liabilities", ""), ("", ""), ("Total", "")]
    c.setFont("Helvetica", 7.5)
    c.setFillColor(INK)
    for i, ((la, _), (ra, _)) in enumerate(zip(left, right)):
        yy = y + h - 46 - i * 14
        c.drawString(x + 12, yy, la)
        c.drawString(mid + 10, yy, ra)


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


def figure_block(fid: str, caption: str, width: float):
    global FIGURE_N
    FIGURE_N += 1
    cap = (caption or "").strip()
    if not cap.lower().startswith("figure"):
        cap = f"Figure {FIGURE_N}. {cap}" if cap else f"Figure {FIGURE_N}."
    # Caption beside/below like Fuhrmann: "Figure N." bold orange
    return KeepTogether([
        Diagram(fid, width * 0.92 if width > 400 else width),
        Paragraph(esc(cap), S["caption"]),
        Spacer(1, 4),
    ])


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
    if STATE.skip_chrome and doc.page == 1:
        return
    canvas.saveState()
    # Running chapter title in top-right accent band (simplified slanted header)
    if STATE.footer_chapter and doc.page > 2:
        canvas.setFillColor(ACCENT_SOFT)
        canvas.rect(W * 0.45, H - 14 * mm, W * 0.55 - R_M + 10, 9 * mm, stroke=0, fill=1)
        canvas.setFillColor(ACCENT)
        canvas.setFont("Helvetica-Bold", 7.5)
        canvas.drawRightString(W - R_M, H - 10.5 * mm, STATE.footer_chapter[:48])

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
            out.append(Paragraph(
                f"<b>{esc(b['term'])}</b> {esc(b['text'])}",
                S["body_boldlead"],
            ))
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

    STATE.footer_chapter = ""
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
