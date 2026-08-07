#!/usr/bin/env python3
"""BBE Economics textbook — classic academic format (Fuhrmann-like tables & figures)."""
from __future__ import annotations

import json
import math
from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER
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
    HRFlowable,
    Flowable,
)

ROOT = Path(__file__).resolve().parent
CONTENT = json.loads((ROOT / "output" / "book-content.json").read_text(encoding="utf-8"))
OUT_PDF = ROOT / "output" / "bbe-economics-textbook.pdf"
OUT_MANIFEST = ROOT / "output" / "chapter-pages.json"
OUT_TEXT = ROOT / "output" / "book-plain.txt"

INK = HexColor("#1A1A1A")
MUTED = HexColor("#5A5A5A")
RULE = HexColor("#AAAAAA")
SOFT = HexColor("#F2F2F2")
ACCENT = HexColor("#A85A2A")
LINE = HexColor("#333333")

W, H = A4
L_M, R_M, T_M, B_M = 20 * mm, 20 * mm, 18 * mm, 16 * mm

plain_parts: list[str] = []
TABLE_N = 0
FIGURE_N = 0


class DocState:
    footer = "Introduction to Business and Economics"
    chapter: int | None = None
    skip_chrome = False


STATE = DocState()

_UNICODE_FIX = str.maketrans({
    "\u2014": "-", "\u2013": "-", "\u2018": "'", "\u2019": "'",
    "\u201c": '"', "\u201d": '"', "\u2026": "...", "\u00a0": " ",
    "\u2191": " rises", "\u2193": " falls", "\u2192": " -> ", "\u2190": " <- ",
})


def esc(s: str) -> str:
    s = (s or "").translate(_UNICODE_FIX)
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br/>")


def styles():
    b = getSampleStyleSheet()
    return {
        "cover_kicker": ParagraphStyle("ck", parent=b["Normal"], fontName="Helvetica", fontSize=10, textColor=ACCENT, spaceAfter=12),
        "cover_title": ParagraphStyle("ct", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=26, textColor=INK, leading=32, spaceAfter=12),
        "cover_sub": ParagraphStyle("cs", parent=b["Normal"], fontName="Helvetica", fontSize=10.5, textColor=MUTED, leading=14.5),
        "h_toc": ParagraphStyle("ht", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=16, textColor=INK, spaceAfter=10),
        "toc_ch": ParagraphStyle("tc", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=10.5, textColor=INK, spaceBefore=9, spaceAfter=2),
        "toc_sec": ParagraphStyle("ts", parent=b["Normal"], fontName="Helvetica", fontSize=9, textColor=MUTED, leftIndent=12, leading=11.5, spaceAfter=1),
        "ch_num": ParagraphStyle("cn", parent=b["Normal"], fontName="Helvetica", fontSize=10, textColor=ACCENT, spaceBefore=20, spaceAfter=3),
        "ch_title": ParagraphStyle("cht", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=18, textColor=INK, leading=22, spaceAfter=10),
        "sec": ParagraphStyle("sec", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=11.5, textColor=INK, spaceBefore=13, spaceAfter=5, leading=14),
        "body": ParagraphStyle("body", parent=b["Normal"], fontName="Helvetica", fontSize=10, textColor=INK, leading=13.6, alignment=TA_JUSTIFY, spaceAfter=6),
        "frame_title": ParagraphStyle("ft", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=8, textColor=ACCENT, spaceAfter=3),
        "frame_body": ParagraphStyle("fb", parent=b["Normal"], fontName="Helvetica", fontSize=9.5, textColor=INK, leading=12.8, alignment=TA_JUSTIFY),
        "frame_formula": ParagraphStyle("ff", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=10, textColor=INK, leading=13, alignment=TA_CENTER),
        "caption": ParagraphStyle("cap", parent=b["Normal"], fontName="Helvetica-Oblique", fontSize=8.2, textColor=MUTED, alignment=TA_LEFT, spaceBefore=2, spaceAfter=9),
        "bullet": ParagraphStyle("bu", parent=b["Normal"], fontName="Helvetica", fontSize=10, textColor=INK, leading=13, leftIndent=10, spaceAfter=2),
        "cell": ParagraphStyle("cell", parent=b["Normal"], fontName="Helvetica", fontSize=8, textColor=INK, leading=10.2),
        "cell_h": ParagraphStyle("cellh", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=8, textColor=INK, leading=10.2),
        "cell_first": ParagraphStyle("cellf", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=8, textColor=INK, leading=10.2),
    }


S = styles()


# ─── Framed notes (definition / formula / example) ────────────────────
class FramedNote(Flowable):
    """Neat academic frame — thin border, optional left accent bar."""

    def __init__(self, title: str, body: str, width: float, kind: str = "note"):
        super().__init__()
        self.title = title
        self.body = body
        self.box_w = width
        self.kind = kind
        body_style = S["frame_formula"] if kind == "formula" else S["frame_body"]
        self._title_p = Paragraph(esc(title), S["frame_title"]) if title else None
        self._body_p = Paragraph(esc(body), body_style)
        self._th = self._bh = 0

    def wrap(self, availWidth, availHeight):
        self.box_w = min(self.box_w, availWidth)
        inner = self.box_w - 18
        self._th = 0
        if self._title_p:
            _, self._th = self._title_p.wrap(inner, 40)
        _, self._bh = self._body_p.wrap(inner, 2000)
        self.height = 10 + self._th + (4 if self._th else 0) + self._bh + 10
        return self.box_w, self.height

    def draw(self):
        c = self.canv
        c.saveState()
        c.setStrokeColor(LINE)
        c.setLineWidth(0.9)
        c.setFillColor(white)
        c.rect(0, 0, self.box_w, self.height, stroke=1, fill=1)
        # left accent
        c.setFillColor(ACCENT if self.kind != "example" else HexColor("#4A6A8A"))
        c.rect(0, 0, 2.8, self.height, stroke=0, fill=1)
        y = self.height - 8
        if self._title_p:
            self._title_p.drawOn(c, 10, y - self._th)
            y -= self._th + 4
        self._body_p.drawOn(c, 10, 8)
        c.restoreState()


# ─── Classic book tables ──────────────────────────────────────────────
def make_table(headers, rows, width, caption: str = ""):
    """Academic table: thick outer rules, header band, readable cells — Fuhrmann-like."""
    global TABLE_N
    TABLE_N += 1
    ncols = max(len(headers), 1)

    # Wider first column for feature/label tables
    if ncols >= 3:
        first = width * 0.30
        rest = (width - first) / (ncols - 1)
        col_ws = [first] + [rest] * (ncols - 1)
    elif ncols == 2:
        col_ws = [width * 0.42, width * 0.58]
    else:
        col_ws = [width / ncols] * ncols

    def cell(text, header=False, first_col=False):
        st = S["cell_h"] if header else (S["cell_first"] if first_col else S["cell"])
        return Paragraph(esc(str(text)), st)

    data = [[cell(h, True) for h in headers]]
    for row in rows:
        r = list(row) + [""] * max(0, ncols - len(row))
        data.append([cell(r[i], first_col=(i == 0)) for i in range(ncols)])

    t = Table(data, colWidths=col_ws, repeatRows=1)
    t.setStyle(TableStyle([
        # Header
        ("BACKGROUND", (0, 0), (-1, 0), SOFT),
        ("TEXTCOLOR", (0, 0), (-1, -1), INK),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("ALIGN", (0, 0), (-1, 0), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        # Classic book rules (booktabs-ish + light verticals)
        ("BOX", (0, 0), (-1, -1), 1.0, INK),
        ("LINEBELOW", (0, 0), (-1, 0), 0.9, INK),
        ("INNERGRID", (0, 1), (-1, -1), 0.35, RULE),
        ("LINEAFTER", (0, 0), (-2, -1), 0.35, RULE),
    ]))

    parts = []
    if caption:
        # Prefer clean "Table N. …" even if caption already has a number
        cap = caption.strip()
        if not cap.lower().startswith("table"):
            cap = f"Table {TABLE_N}. {cap}"
        parts.append(Paragraph(esc(cap), S["caption"]))
    else:
        parts.append(Paragraph(f"Table {TABLE_N}.", S["caption"]))
    parts.append(t)
    parts.append(Spacer(1, 8))
    return KeepTogether(parts)


# ─── Figures ──────────────────────────────────────────────────────────
class Diagram(Flowable):
    def __init__(self, fig_id: str, caption: str, width: float):
        super().__init__()
        self.fig_id = fig_id
        self.caption = caption
        self.width = width
        self.height = 180

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        tall = {"circular-flow", "bcg-matrix", "ownership-overview", "equilibrium", "stakeholders"}
        self.height = 200 if self.fig_id in tall else (175 if "curve" in self.fig_id or self.fig_id == "supply-curve" else 160)
        if self.fig_id in ("supply-curve", "demand-curve", "equilibrium"):
            self.height = 185
        return self.width, self.height + 4

    def draw(self):
        c = self.canv
        c.saveState()
        # no outer frame around charts — cleaner like print books; charts have their own axes
        fn = FIGURES.get(self.fig_id, _fig_placeholder)
        fn(c, 4, 4, self.width - 8, self.height - 8)
        c.restoreState()


def _label(c, x, y, text, size=8, bold=False, align="c"):
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    if align == "c":
        c.drawCentredString(x, y, text)
    elif align == "r":
        c.drawRightString(x, y, text)
    else:
        c.drawString(x, y, text)


def _fig_placeholder(c, x, y, w, h):
    _label(c, x + w / 2, y + h / 2, "Figure")


def _axis_box(c, x, y, w, h, max_p=250, max_q=45, q_step=5):
    """Draw numbered P/Q axes like Fuhrmann supply/demand figures."""
    ox, oy = x + 36, y + 28
    plot_w, plot_h = w - 50, h - 48
    c.setStrokeColor(INK)
    c.setLineWidth(1.0)
    c.line(ox, oy, ox, oy + plot_h)
    c.line(ox, oy, ox + plot_w, oy)
    # price ticks
    c.setFont("Helvetica", 6.5)
    c.setFillColor(MUTED)
    for i in range(6):
        p = max_p - i * (max_p // 5)
        yy = oy + plot_h * (1 - i / 5)
        c.setStrokeColor(RULE)
        c.setLineWidth(0.4)
        c.line(ox - 3, yy, ox, yy)
        c.drawRightString(ox - 5, yy - 2, str(p))
    # quantity ticks
    n = max(1, max_q // q_step)
    for i in range(0, n + 1):
        q = i * q_step
        xx = ox + plot_w * (q / max_q)
        c.line(xx, oy, xx, oy - 3)
        c.drawCentredString(xx, oy - 12, str(q))
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawCentredString(ox - 22, oy + plot_h + 6, "Price")
    c.drawString(ox + plot_w - 40, oy - 22, "Quantity")
    return ox, oy, plot_w, plot_h


def _fig_supply(c, x, y, w, h):
    ox, oy, pw, ph = _axis_box(c, x, y, w, h, max_p=250, max_q=45, q_step=5)
    # upward supply: from (5,50) toward (40,220)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.8)
    x1, y1 = ox + pw * (5 / 45), oy + ph * (50 / 250)
    x2, y2 = ox + pw * (40 / 45), oy + ph * (220 / 250)
    c.line(x1, y1, x2, y2)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x2 - 18, y2 + 4, "S")
    c.setFont("Helvetica-Oblique", 7)
    c.setFillColor(MUTED)
    c.drawCentredString(x + w / 2, y + h - 8, "Supply per week")


def _fig_demand(c, x, y, w, h):
    ox, oy, pw, ph = _axis_box(c, x, y, w, h, max_p=250, max_q=100, q_step=10)
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.8)
    x1, y1 = ox + pw * (10 / 100), oy + ph * (220 / 250)
    x2, y2 = ox + pw * (90 / 100), oy + ph * (40 / 250)
    c.line(x1, y1, x2, y2)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x2 - 5, y2 + 4, "D")
    c.setFont("Helvetica-Oblique", 7)
    c.setFillColor(MUTED)
    c.drawCentredString(x + w / 2, y + h - 8, "Demand per week")


def _fig_equilibrium(c, x, y, w, h):
    ox, oy, pw, ph = _axis_box(c, x, y, w, h, max_p=250, max_q=100, q_step=10)
    # S and D crossing at P=150, Q ~ 45
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.6)
    c.line(ox + pw * 0.08, oy + ph * 0.2, ox + pw * 0.85, oy + ph * 0.88)  # S
    c.setStrokeColor(INK)
    c.line(ox + pw * 0.08, oy + ph * 0.88, ox + pw * 0.85, oy + ph * 0.2)  # D
    # E at intersection approx
    ex = ox + pw * 0.42
    ey = oy + ph * (150 / 250)
    c.setDash(1.5, 1.5)
    c.setStrokeColor(MUTED)
    c.setLineWidth(0.7)
    c.line(ox, ey, ex, ey)
    c.line(ex, oy, ex, ey)
    c.setDash()
    c.setFillColor(ACCENT)
    c.circle(ex, ey, 3.5, stroke=0, fill=1)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(ex + 6, ey + 3, "E  (P*=150)")
    c.drawString(ox + 6, oy + ph * 0.9, "S")
    c.drawString(ox + pw * 0.78, oy + ph * 0.9, "D")


def _arrow(c, x1, y1, x2, y2):
    c.setStrokeColor(INK)
    c.setLineWidth(0.9)
    c.line(x1, y1, x2, y2)
    ang = math.atan2(y2 - y1, x2 - x1)
    size = 5
    c.line(x2, y2, x2 - size * math.cos(ang - 0.4), y2 - size * math.sin(ang - 0.4))
    c.line(x2, y2, x2 - size * math.cos(ang + 0.4), y2 - size * math.sin(ang + 0.4))


def _fig_circular_flow(c, x, y, w, h):
    bw, bh = w * 0.30, 32
    hh = (x + (w - bw) / 2, y + h - 48)
    biz = (x + 16, y + 28)
    gov = (x + w - bw - 16, y + 28)
    c.setLineWidth(1)
    for (px, py), label in ((hh, "Private households"), (biz, "Businesses"), (gov, "Government")):
        c.setFillColor(SOFT)
        c.setStrokeColor(INK)
        c.roundRect(px, py, bw, bh, 3, stroke=1, fill=1)
        _label(c, px + bw / 2, py + 12, label, 7.5, True)
    # arrows with labels
    _arrow(c, hh[0] + 20, hh[1], biz[0] + bw * 0.6, biz[1] + bh)
    _arrow(c, biz[0] + bw * 0.55, biz[1] + bh, hh[0] + bw * 0.35, hh[1])
    _arrow(c, hh[0] + bw - 20, hh[1], gov[0] + bw * 0.4, gov[1] + bh)
    _arrow(c, gov[0] + bw * 0.45, gov[1] + bh, hh[0] + bw * 0.7, hh[1])
    _arrow(c, biz[0] + bw, biz[1] + bh / 2, gov[0], gov[1] + bh / 2)
    c.setFont("Helvetica", 6.2)
    c.setFillColor(MUTED)
    c.drawString(x + w * 0.12, y + h * 0.52, "Labour")
    c.drawString(x + w * 0.22, y + h * 0.62, "Wages / goods")
    c.drawString(x + w * 0.58, y + h * 0.55, "Taxes")
    c.drawString(x + w * 0.62, y + h * 0.42, "Transfers / public goods")
    c.drawCentredString(x + w / 2, y + 10, "Goods, services and subsidies between businesses & government")


def _fig_sectors(c, x, y, w, h):
    labels = [
        ("Primary sector", "Extraction of natural\nresources (farming, mining)"),
        ("Secondary sector", "Manufacturing and\nconstruction"),
        ("Tertiary sector", "Services\n(retail, finance, care)"),
    ]
    gap = 10
    bw = (w - 2 * gap) / 3
    for i, (t, sub) in enumerate(labels):
        px = x + i * (bw + gap)
        py = y + 36
        c.setFillColor(SOFT)
        c.setStrokeColor(INK)
        c.setLineWidth(1)
        c.rect(px, py, bw, h - 70, stroke=1, fill=1)
        _label(c, px + bw / 2, py + h - 95, t, 8, True)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        for j, line in enumerate(sub.split("\n")):
            c.drawCentredString(px + bw / 2, py + h - 115 - j * 10, line)
        if i < 2:
            c.setStrokeColor(INK)
            c.setLineWidth(1)
            midy = py + (h - 70) / 2
            c.line(px + bw, midy, px + bw + gap, midy)
            c.line(px + bw + gap - 5, midy + 3, px + bw + gap, midy)
            c.line(px + bw + gap - 5, midy - 3, px + bw + gap, midy)
    c.setFont("Helvetica-Oblique", 7)
    c.setFillColor(MUTED)
    c.drawCentredString(x + w / 2, y + 14, "Value is added as materials move towards final services")


def _fig_ownership(c, x, y, w, h):
    # Tree like Fuhrmann Figure 9
    top_w, top_h = w * 0.55, 26
    tx = x + (w - top_w) / 2
    ty = y + h - 34
    c.setFillColor(SOFT)
    c.setStrokeColor(INK)
    c.rect(tx, ty, top_w, top_h, stroke=1, fill=1)
    _label(c, tx + top_w / 2, ty + 9, "Forms of business ownership", 8, True)

    mid_y = y + h * 0.52
    box_w = w * 0.42
    box_h = 48
    left_x, right_x = x + 8, x + w - box_w - 8
    for px, title, lines in (
        (left_x, "Unincorporated", ["Owner(s) = manager(s)", "Sole trader  |  Partnership"]),
        (right_x, "Incorporated", ["Separate legal person", "Corporation / LLC"]),
    ):
        c.setFillColor(white)
        c.rect(px, mid_y, box_w, box_h, stroke=1, fill=1)
        _label(c, px + box_w / 2, mid_y + box_h - 14, title, 8, True)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        for i, line in enumerate(lines):
            c.drawCentredString(px + box_w / 2, mid_y + box_h - 28 - i * 10, line)
        # stem from top
        c.setStrokeColor(INK)
        c.line(tx + top_w / 2, ty, px + box_w / 2, mid_y + box_h)

    # bottom detail boxes
    bot_y = y + 18
    bw = (w - 24) / 3
    details = [("Sole trader", "1 owner\nUnlimited liability"),
               ("Partnership", "2+ owners\nShared liability"),
               ("Corporation", "Shareholders\nLimited liability")]
    for i, (t, s) in enumerate(details):
        px = x + 4 + i * (bw + 8)
        c.setFillColor(SOFT)
        c.rect(px, bot_y, bw, 42, stroke=1, fill=1)
        _label(c, px + bw / 2, bot_y + 28, t, 7.5, True)
        c.setFont("Helvetica", 6)
        c.setFillColor(MUTED)
        for j, line in enumerate(s.split("\n")):
            c.drawCentredString(px + bw / 2, bot_y + 16 - j * 9, line)


def _fig_mix(c, x, y, w, h):
    cx, cy = x + w / 2, y + h / 2 + 8
    c.setFillColor(SOFT)
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    c.circle(cx, cy, 26, stroke=1, fill=1)
    _label(c, cx, cy - 3, "Product", 8, True)
    items = [
        ("Price", cx - w * 0.36, cy + 42),
        ("Place", cx + w * 0.18, cy + 42),
        ("Promotion", cx - 35, cy - 70),
    ]
    for t, bx, by in items:
        c.setFillColor(white)
        c.rect(bx, by, 72, 22, stroke=1, fill=1)
        _label(c, bx + 36, by + 7, t, 8, True)
        c.setStrokeColor(MUTED)
        c.setLineWidth(0.8)
        c.line(cx, cy, bx + 36, by + 11)
        c.setStrokeColor(INK)


def _fig_plc(c, x, y, w, h):
    ox, oy = x + 30, y + 30
    pw, ph = w - 50, h - 55
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    c.line(ox, oy, ox, oy + ph)
    c.line(ox, oy, ox + pw, oy)
    _label(c, ox - 8, oy + ph + 4, "Sales / profit", 7, True)
    _label(c, ox + pw - 10, oy - 14, "Time", 7, True)
    # sales curve
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.7)
    p = c.beginPath()
    p.moveTo(ox + 6, oy + 6)
    p.curveTo(ox + pw * 0.18, oy + ph * 0.2, ox + pw * 0.28, oy + ph * 0.85, ox + pw * 0.45, oy + ph * 0.8)
    p.curveTo(ox + pw * 0.6, oy + ph * 0.75, ox + pw * 0.72, oy + ph * 0.45, ox + pw * 0.9, oy + 14)
    c.drawPath(p, stroke=1, fill=0)
    # profit dashed lower
    c.setDash(2, 2)
    c.setStrokeColor(MUTED)
    c.setLineWidth(1)
    p2 = c.beginPath()
    p2.moveTo(ox + 6, oy + 2)
    p2.curveTo(ox + pw * 0.2, oy - 4, ox + pw * 0.3, oy + ph * 0.55, ox + pw * 0.5, oy + ph * 0.5)
    p2.curveTo(ox + pw * 0.65, oy + ph * 0.45, ox + pw * 0.78, oy + ph * 0.2, ox + pw * 0.9, oy + 4)
    c.drawPath(p2, stroke=1, fill=0)
    c.setDash()
    stages = ["Introduction", "Growth", "Maturity", "Decline"]
    c.setFont("Helvetica", 6.5)
    c.setFillColor(MUTED)
    for i, s in enumerate(stages):
        c.drawCentredString(ox + pw * (0.14 + i * 0.22), oy - 14, s)
    c.setFillColor(INK)
    c.setFont("Helvetica", 6.5)
    c.drawString(ox + pw * 0.7, oy + ph * 0.7, "Sales")
    c.drawString(ox + pw * 0.55, oy + ph * 0.35, "Profit")


def _fig_bcg(c, x, y, w, h):
    pad = 22
    qw, qh = (w - pad) / 2, (h - pad) / 2
    cells = [
        (x, y + qh + pad / 2, "Stars", "High growth / high share"),
        (x + qw + pad / 2, y + qh + pad / 2, "Question marks", "High growth / low share"),
        (x, y + 8, "Cash cows", "Low growth / high share"),
        (x + qw + pad / 2, y + 8, "Poor dogs", "Low growth / low share"),
    ]
    for px, py, title, sub in cells:
        c.setStrokeColor(INK)
        c.setFillColor(SOFT)
        c.setLineWidth(0.9)
        c.rect(px, py, qw - 6, qh - 10, stroke=1, fill=1)
        _label(c, px + (qw - 6) / 2, py + qh * 0.52, title, 8.5, True)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        c.drawCentredString(px + (qw - 6) / 2, py + qh * 0.28, sub)
    c.setFont("Helvetica", 6.5)
    c.setFillColor(MUTED)
    c.drawCentredString(x + w / 2, y - 2, "Relative market share  (high <- -> low)")


def _fig_fs(c, x, y, w, h):
    items = [
        ("Balance sheet", "Assets · liabilities · equity\n(at a point in time)"),
        ("Income statement", "Revenues · costs · profit/loss\n(over a period)"),
        ("Cash flow statement", "Operating · investing · financing\ncash flows"),
    ]
    bw = (w - 20) / 3
    for i, (t, s) in enumerate(items):
        px = x + i * (bw + 10)
        c.setFillColor(SOFT)
        c.setStrokeColor(INK)
        c.rect(px, y + 28, bw, h - 50, stroke=1, fill=1)
        _label(c, px + bw / 2, y + h - 55, t, 8, True)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        for j, line in enumerate(s.split("\n")):
            c.drawCentredString(px + bw / 2, y + h - 75 - j * 10, line)
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    c.line(x + 8, y + 18, x + w - 8, y + 18)
    _label(c, x + w / 2, y + 6, "Financial statements of a business", 8, True)


def _fig_bs(c, x, y, w, h):
    # Classic T-form balance sheet with euro sample
    mid = x + w / 2
    c.setStrokeColor(INK)
    c.setLineWidth(1.1)
    c.rect(x + 4, y + 8, w - 8, h - 16, stroke=1, fill=0)
    c.line(mid, y + 8, mid, y + h - 8)
    c.line(x + 4, y + h - 32, x + w - 4, y + h - 32)
    _label(c, x + w * 0.25, y + h - 24, "Assets (euros)", 8.5, True)
    _label(c, x + w * 0.75, y + h - 24, "Equity and liabilities (euros)", 8.5, True)

    left = [
        ("Office equipment", "25,000"),
        ("Vehicle", "8,000"),
        ("Inventory", "12,500"),
        ("Cash and bank", "3,500"),
        ("Total assets", "49,000"),
    ]
    right = [
        ("Owner's equity", "24,000"),
        ("Bank loan", "25,000"),
        ("", ""),
        ("", ""),
        ("Total equity + liabilities", "49,000"),
    ]
    c.setFont("Helvetica", 7.5)
    for i, ((la, lv), (ra, rv)) in enumerate(zip(left, right)):
        yy = y + h - 48 - i * 16
        bold = i == len(left) - 1
        c.setFont("Helvetica-Bold" if bold else "Helvetica", 7.5)
        c.setFillColor(INK)
        c.drawString(x + 14, yy, la)
        c.drawRightString(mid - 10, yy, lv)
        c.drawString(mid + 12, yy, ra)
        c.drawRightString(x + w - 14, yy, rv)
        if bold:
            c.setStrokeColor(INK)
            c.setLineWidth(0.6)
            c.line(x + 12, yy + 11, mid - 8, yy + 11)
            c.line(mid + 10, yy + 11, x + w - 12, yy + 11)


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


class ChapterStart(Flowable):
    def __init__(self, num: int, title: str):
        super().__init__()
        self.num, self.title = num, title
        self.width = self.height = 0

    def draw(self):
        STATE.chapter = self.num
        STATE.footer = f"Chapter {self.num}  |  {self.title}"
        STATE.skip_chrome = False


def chrome(canvas, doc):
    if STATE.skip_chrome and doc.page == 1:
        return
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(L_M, H - 12 * mm, W - R_M, H - 12 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(L_M, H - 10 * mm, "BBE School")
    canvas.drawRightString(W - R_M, H - 10 * mm, (STATE.footer or "")[:70])
    canvas.line(L_M, 11 * mm, W - R_M, 11 * mm)
    canvas.drawString(L_M, 6.5 * mm, "Introduction to Business and Economics")
    canvas.drawRightString(W - R_M, 6.5 * mm, str(doc.page))
    canvas.restoreState()


def figure_block(fid: str, caption: str, width: float):
    global FIGURE_N
    FIGURE_N += 1
    cap = caption.strip()
    if not cap.lower().startswith("figure"):
        cap = f"Figure {FIGURE_N}. {cap}"
    return KeepTogether([
        Diagram(fid, cap, width),
        Paragraph(esc(cap), S["caption"]),
        Spacer(1, 4),
    ])


def blocks_to_flowables(blocks, width):
    out = []
    for b in blocks:
        t = b.get("type")
        if t == "p":
            out.append(Paragraph(esc(b["text"]), S["body"]))
            plain_parts.append(b["text"])
        elif t == "definition":
            out.append(Spacer(1, 3))
            out.append(FramedNote(
                "Definition",
                f"{b['term']}.  {b['text']}",
                width,
                kind="definition",
            ))
            out.append(Spacer(1, 6))
            plain_parts.append(f"{b['term']}: {b['text']}")
        elif t == "bullets":
            for item in b.get("items", []):
                out.append(Paragraph(f"•  {esc(item)}", S["bullet"]))
                plain_parts.append(item)
            out.append(Spacer(1, 3))
        elif t == "example":
            out.append(Spacer(1, 3))
            out.append(FramedNote(
                b.get("title") or "Worked example",
                b["text"],
                width,
                kind="example",
            ))
            out.append(Spacer(1, 6))
            plain_parts.append(b["text"])
        elif t == "formula":
            out.append(Spacer(1, 3))
            label = b.get("label") or "Formula"
            out.append(FramedNote(label, b["text"], width, kind="formula"))
            out.append(Spacer(1, 6))
            plain_parts.append(b["text"])
        elif t == "table":
            out.append(Spacer(1, 4))
            out.append(make_table(b.get("headers") or [], b.get("rows") or [], width, b.get("caption") or ""))
            plain_parts.append(b.get("caption") or "table")
        elif t == "figure":
            out.append(Spacer(1, 4))
            out.append(figure_block(b.get("id") or "", b.get("caption") or "", width))
            plain_parts.append(b.get("caption") or "")
        elif t == "takeaways":
            out.append(Paragraph("<b>Summary</b>", S["sec"]))
            for item in b.get("items", []):
                out.append(Paragraph(f"•  {esc(item)}", S["bullet"]))
        elif t in ("trap", "statement", "application"):
            # occasional interesting aside, framed lightly
            title = "Watch out" if t == "trap" else ("In practice" if t == "application" else "Quick check")
            body = b.get("text") or b.get("claim") or ""
            if body:
                out.append(Spacer(1, 3))
                out.append(FramedNote(title, body, width, kind="example"))
                out.append(Spacer(1, 6))
        elif b.get("text"):
            out.append(Paragraph(esc(b["text"]), S["body"]))
    return out


def build():
    global TABLE_N, FIGURE_N
    TABLE_N = FIGURE_N = 0
    width = W - L_M - R_M
    story = []

    STATE.skip_chrome = True
    story.append(Spacer(1, 50))
    story.append(Paragraph("BBE SCHOOL", S["cover_kicker"]))
    story.append(Paragraph("Introduction to<br/>Business and Economics", S["cover_title"]))
    story.append(HRFlowable(width=80, thickness=1.1, color=ACCENT, spaceBefore=2, spaceAfter=12))
    story.append(Paragraph("Study material for the Economics Full Course — Chapters 2 to 6", S["cover_sub"]))
    story.append(Spacer(1, 28))
    story.append(Paragraph(
        "A course textbook written for this platform. Clear explanations, worked examples, "
        "comparison tables and figures follow the same learning path as the WU BBE entrance syllabus.",
        S["cover_sub"],
    ))
    story.append(PageBreak())

    STATE.skip_chrome = False
    STATE.footer = "Contents"
    STATE.chapter = None
    story.append(Paragraph("Contents", S["h_toc"]))
    story.append(HRFlowable(width="100%", thickness=0.5, color=RULE, spaceAfter=8))
    for ch in CONTENT["chapters"]:
        story.append(Paragraph(f"Chapter {ch['num']}  —  {esc(ch['title'])}", S["toc_ch"]))
        for sec in ch["sections"]:
            story.append(Paragraph(f"{sec['id']}&nbsp;&nbsp;{esc(sec['title'])}", S["toc_sec"]))
    story.append(PageBreak())

    ranges: dict[int, dict] = {}
    for ch in CONTENT["chapters"]:
        story.append(ChapterStart(ch["num"], ch["title"]))
        story.append(Paragraph(f"Chapter {ch['num']}", S["ch_num"]))
        story.append(Paragraph(esc(ch["title"]), S["ch_title"]))
        story.append(HRFlowable(width="100%", thickness=0.55, color=RULE, spaceAfter=9))
        story.append(Paragraph(esc(ch["intro"]), S["body"]))
        plain_parts.append(f"Chapter {ch['num']}. {ch['title']}\n{ch['intro']}")
        for sec in ch["sections"]:
            story.append(Paragraph(f"{sec['id']}  {esc(sec['title'])}", S["sec"]))
            plain_parts.append(f"{sec['id']} {sec['title']}")
            story.extend(blocks_to_flowables(sec["blocks"], width))
        story.append(PageBreak())

    STATE.footer = "Introduction to Business and Economics"
    story.append(Spacer(1, 70))
    story.append(Paragraph("End of Full Course theory (Chapters 2-6)", S["ch_title"]))
    story.append(Paragraph(
        "Continue in the Economics Full Course practice area. Re-read each figure and table once: "
        "exam statements often test exactly these relationships.",
        S["body"],
    ))

    doc = BaseDocTemplate(
        str(OUT_PDF), pagesize=A4,
        leftMargin=L_M, rightMargin=R_M, topMargin=T_M, bottomMargin=B_M,
        title="BBE School — Introduction to Business and Economics", author="BBE School",
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
