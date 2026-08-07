#!/usr/bin/env python3
"""BBE School Economics textbook — calm classic layout (Fuhrmann-like)."""
from __future__ import annotations

import json
from pathlib import Path

from reportlab.lib.colors import HexColor, black, white, Color
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
    HRFlowable,
    Flowable,
)
from reportlab.pdfgen import canvas as pdfcanvas

ROOT = Path(__file__).resolve().parent
CONTENT = json.loads((ROOT / "output" / "book-content.json").read_text(encoding="utf-8"))
OUT_PDF = ROOT / "output" / "bbe-economics-textbook.pdf"
OUT_MANIFEST = ROOT / "output" / "chapter-pages.json"
OUT_TEXT = ROOT / "output" / "book-plain.txt"

# Quiet palette — textbook, not UI kit
INK = HexColor("#1F1F1F")
MUTED = HexColor("#666666")
RULE = HexColor("#BBBBBB")
ACCENT = HexColor("#B85A28")  # spare caramel — chapter labels only
SOFT = HexColor("#F5F5F5")
GRID = HexColor("#DDDDDD")

W, H = A4
L_M, R_M, T_M, B_M = 20 * mm, 20 * mm, 18 * mm, 16 * mm

plain_parts: list[str] = []


class DocState:
    footer = "Introduction to Business and Economics"
    chapter: int | None = None
    skip_chrome = False


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
    "\u2191": "up",
    "\u2193": "down",
    "\u2192": "->",
    "\u2190": "<-",
    "\u2022": "-",
})


def esc(s: str) -> str:
    s = (s or "").translate(_UNICODE_FIX)
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br/>")


def styles():
    b = getSampleStyleSheet()
    return {
        "cover_kicker": ParagraphStyle("ck", parent=b["Normal"], fontName="Helvetica", fontSize=10,
                                       textColor=ACCENT, spaceAfter=14),
        "cover_title": ParagraphStyle("ct", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=28,
                                      textColor=INK, leading=34, spaceAfter=14),
        "cover_sub": ParagraphStyle("cs", parent=b["Normal"], fontName="Helvetica", fontSize=11,
                                    textColor=MUTED, leading=15),
        "h_toc": ParagraphStyle("ht", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=18,
                                textColor=INK, spaceAfter=12),
        "toc_ch": ParagraphStyle("tc", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=11,
                                 textColor=INK, spaceBefore=10, spaceAfter=3),
        "toc_sec": ParagraphStyle("ts", parent=b["Normal"], fontName="Helvetica", fontSize=9.5,
                                  textColor=MUTED, leftIndent=12, leading=12, spaceAfter=1),
        "ch_num": ParagraphStyle("cn", parent=b["Normal"], fontName="Helvetica", fontSize=10,
                                 textColor=ACCENT, spaceBefore=28, spaceAfter=4),
        "ch_title": ParagraphStyle("cht", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=20,
                                   textColor=INK, leading=24, spaceAfter=12),
        "sec": ParagraphStyle("sec", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=12,
                              textColor=INK, spaceBefore=14, spaceAfter=6, leading=15),
        "body": ParagraphStyle("body", parent=b["Normal"], fontName="Helvetica", fontSize=10,
                               textColor=INK, leading=13.8, alignment=TA_JUSTIFY, spaceAfter=7),
        "def": ParagraphStyle("def", parent=b["Normal"], fontName="Helvetica", fontSize=10,
                              textColor=INK, leading=13.6, alignment=TA_JUSTIFY, spaceBefore=4,
                              spaceAfter=8, leftIndent=8, rightIndent=8),
        "example": ParagraphStyle("ex", parent=b["Normal"], fontName="Helvetica-Oblique", fontSize=9.7,
                                  textColor=INK, leading=13.2, alignment=TA_JUSTIFY, spaceBefore=4,
                                  spaceAfter=8, leftIndent=10),
        "formula": ParagraphStyle("fm", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=10,
                                  textColor=INK, leading=14, alignment=TA_CENTER, spaceBefore=6,
                                  spaceAfter=6),
        "caption": ParagraphStyle("cap", parent=b["Normal"], fontName="Helvetica-Oblique", fontSize=8.5,
                                  textColor=MUTED, alignment=TA_CENTER, spaceBefore=3, spaceAfter=10),
        "bullet": ParagraphStyle("bu", parent=b["Normal"], fontName="Helvetica", fontSize=10,
                                 textColor=INK, leading=13.2, leftIndent=12, spaceAfter=2),
        "cell": ParagraphStyle("cell", parent=b["Normal"], fontName="Helvetica", fontSize=8.2,
                               textColor=INK, leading=10.5),
        "cell_h": ParagraphStyle("cellh", parent=b["Normal"], fontName="Helvetica-Bold", fontSize=8.2,
                                 textColor=INK, leading=10.5),
    }


S = styles()


# ─── Figures (simple black-line diagrams) ─────────────────────────────
class Diagram(Flowable):
    """Vector figures matching classic textbook line drawings."""

    def __init__(self, fig_id: str, caption: str, width: float):
        super().__init__()
        self.fig_id = fig_id
        self.caption = caption
        self.width = width
        self.height = 175

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        # taller for some
        if self.fig_id in ("circular-flow", "bcg-matrix", "ownership-overview"):
            self.height = 190
        elif self.fig_id in ("supply-curve", "demand-curve", "equilibrium"):
            self.height = 165
        else:
            self.height = 155
        return self.width, self.height + 22

    def draw(self):
        c = self.canv
        c.saveState()
        y0 = 22  # leave room for caption below via platypus; draw diagram above
        h = self.height
        w = self.width
        # light frame
        c.setStrokeColor(RULE)
        c.setLineWidth(0.6)
        c.rect(0, y0, w, h, stroke=1, fill=0)
        fn = FIGURES.get(self.fig_id, _fig_placeholder)
        fn(c, 8, y0 + 8, w - 16, h - 16)
        c.setFillColor(MUTED)
        c.setFont("Helvetica-Oblique", 8)
        # caption drawn by platypus separately; small id mark
        c.restoreState()


def _label(c, x, y, text, size=8, bold=False):
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    c.drawCentredString(x, y, text)


def _fig_placeholder(c, x, y, w, h):
    _label(c, x + w / 2, y + h / 2, "Figure")


def _fig_circular_flow(c, x, y, w, h):
    # three boxes: Households / Businesses / Government
    bw, bh = w * 0.28, 28
    positions = {
        "hh": (x + w * 0.36, y + h - 40),
        "biz": (x + 10, y + 20),
        "gov": (x + w - bw - 10, y + 20),
    }
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    for key, (px, py) in positions.items():
        c.setFillColor(SOFT)
        c.rect(px, py, bw, bh, stroke=1, fill=1)
    _label(c, positions["hh"][0] + bw / 2, positions["hh"][1] + 10, "Private households", 7, True)
    _label(c, positions["biz"][0] + bw / 2, positions["biz"][1] + 10, "Businesses", 7, True)
    _label(c, positions["gov"][0] + bw / 2, positions["gov"][1] + 10, "Government", 7, True)
    # arrows as lines with labels
    c.setStrokeColor(INK)
    c.setLineWidth(0.8)
    # hh <-> biz
    c.line(positions["hh"][0] + 10, positions["hh"][1], positions["biz"][0] + bw / 2, positions["biz"][1] + bh)
    c.line(positions["hh"][0] + bw - 10, positions["hh"][1], positions["gov"][0] + bw / 2, positions["gov"][1] + bh)
    c.line(positions["biz"][0] + bw, positions["biz"][1] + bh / 2, positions["gov"][0], positions["gov"][1] + bh / 2)
    c.setFont("Helvetica", 6.5)
    c.setFillColor(MUTED)
    c.drawString(x + w * 0.15, y + h * 0.55, "Labour / wages")
    c.drawString(x + w * 0.55, y + h * 0.55, "Taxes / transfers")
    c.drawString(x + w * 0.35, y + 8, "Goods, services, subsidies")


def _fig_curve(c, x, y, w, h, rising=True, title=""):
    # axes
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    ox, oy = x + 28, y + 24
    c.line(ox, oy, ox, y + h - 12)
    c.line(ox, oy, x + w - 12, oy)
    _label(c, ox - 14, y + h - 18, "P", 8, True)
    _label(c, x + w - 18, oy - 12, "Q", 8, True)
    # curve
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.6)
    p = c.beginPath()
    if rising:
        p.moveTo(ox + 10, oy + 15)
        p.lineTo(ox + (w - 50) * 0.9, oy + (h - 50) * 0.85)
    else:
        p.moveTo(ox + 10, oy + (h - 50) * 0.85)
        p.lineTo(ox + (w - 50) * 0.9, oy + 15)
    c.drawPath(p, stroke=1, fill=0)
    if title:
        _label(c, x + w / 2, y + h - 14, title, 8, True)


def _fig_supply(c, x, y, w, h):
    _fig_curve(c, x, y, w, h, rising=True, title="Supply")


def _fig_demand(c, x, y, w, h):
    _fig_curve(c, x, y, w, h, rising=False, title="Demand")


def _fig_equilibrium(c, x, y, w, h):
    ox, oy = x + 28, y + 24
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    c.line(ox, oy, ox, y + h - 12)
    c.line(ox, oy, x + w - 12, oy)
    _label(c, ox - 14, y + h - 18, "P", 8, True)
    _label(c, x + w - 18, oy - 12, "Q", 8, True)
    # S and D
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.5)
    c.line(ox + 12, oy + 18, ox + w * 0.62, oy + h * 0.7)
    c.setStrokeColor(INK)
    c.line(ox + 12, oy + h * 0.7, ox + w * 0.62, oy + 18)
    # equilibrium point
    ex, ey = ox + w * 0.33, oy + h * 0.38
    c.setFillColor(ACCENT)
    c.circle(ex, ey, 3.2, stroke=0, fill=1)
    c.setDash(2, 2)
    c.setStrokeColor(MUTED)
    c.line(ox, ey, ex, ey)
    c.line(ex, oy, ex, ey)
    c.setDash()
    c.setFont("Helvetica", 7)
    c.setFillColor(INK)
    c.drawString(ex + 6, ey + 4, "E (equilibrium)")
    c.drawString(ox + 4, oy + h * 0.72, "S")
    c.drawString(ox + w * 0.55, oy + h * 0.72, "D")


def _fig_sectors(c, x, y, w, h):
    labels = [
        ("Primary", "Natural resources\n& raw materials"),
        ("Secondary", "Manufacturing\n& construction"),
        ("Tertiary", "Services"),
    ]
    gap = 8
    bw = (w - 2 * gap) / 3
    for i, (t, sub) in enumerate(labels):
        px = x + i * (bw + gap)
        py = y + h * 0.25
        c.setFillColor(SOFT)
        c.setStrokeColor(INK)
        c.roundRect(px, py, bw, h * 0.55, 4, stroke=1, fill=1)
        _label(c, px + bw / 2, py + h * 0.4, t, 9, True)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        for j, line in enumerate(sub.split("\n")):
            c.drawCentredString(px + bw / 2, py + h * 0.28 - j * 9, line)
        if i < 2:
            c.setStrokeColor(INK)
            c.setLineWidth(1)
            c.line(px + bw + 1, py + h * 0.28, px + bw + gap - 1, py + h * 0.28)
            # arrow head
            mid = px + bw + gap / 2
            c.line(mid - 3, py + h * 0.28 + 3, mid + 2, py + h * 0.28)
            c.line(mid - 3, py + h * 0.28 - 3, mid + 2, py + h * 0.28)


def _fig_ownership(c, x, y, w, h):
    rows = [
        ("Sole trader", "One owner", "Unlimited liability"),
        ("Partnership", "Two+ owners", "Shared / unlimited*"),
        ("Corporation", "Shareholders", "Limited liability"),
    ]
    rh = h / 4
    for i, (a, b, d) in enumerate(rows):
        py = y + h - (i + 1) * rh - 4
        c.setStrokeColor(INK)
        c.setFillColor(SOFT if i % 2 == 0 else white)
        c.rect(x, py, w, rh - 4, stroke=1, fill=1)
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(INK)
        c.drawString(x + 8, py + rh / 2 - 6, a)
        c.setFont("Helvetica", 7.5)
        c.drawString(x + w * 0.32, py + rh / 2 - 6, b)
        c.drawString(x + w * 0.58, py + rh / 2 - 6, d)
    c.setFont("Helvetica", 6)
    c.setFillColor(MUTED)
    c.drawString(x + 4, y + 2, "*Limited partners have limited liability in a limited partnership.")


def _fig_mix(c, x, y, w, h):
    # 4Ps around Product
    cx, cy = x + w / 2, y + h / 2
    c.setFillColor(SOFT)
    c.setStrokeColor(INK)
    c.circle(cx, cy, 22, stroke=1, fill=1)
    _label(c, cx, cy - 3, "Product", 8, True)
    boxes = [("Price", cx - w * 0.38, cy + h * 0.22), ("Place", cx + w * 0.18, cy + h * 0.22),
             ("Promotion", cx - w * 0.1, cy - h * 0.38)]
    for t, bx, by in boxes:
        c.setFillColor(white)
        c.roundRect(bx, by, 70, 20, 3, stroke=1, fill=1)
        _label(c, bx + 35, by + 6, t, 8, True)
        c.setStrokeColor(MUTED)
        c.line(cx, cy, bx + 35, by + 10)


def _fig_plc(c, x, y, w, h):
    ox, oy = x + 24, y + 22
    c.setStrokeColor(INK)
    c.line(ox, oy, ox, y + h - 10)
    c.line(ox, oy, x + w - 10, oy)
    _label(c, ox - 10, y + h - 14, "Sales", 7, True)
    _label(c, x + w - 28, oy - 12, "Time", 7, True)
    # hump curve
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.5)
    path = c.beginPath()
    path.moveTo(ox + 8, oy + 8)
    path.curveTo(ox + w * 0.15, oy + h * 0.15, ox + w * 0.25, oy + h * 0.75, ox + w * 0.4, oy + h * 0.7)
    path.curveTo(ox + w * 0.55, oy + h * 0.65, ox + w * 0.65, oy + h * 0.45, ox + w * 0.78, oy + 18)
    c.drawPath(path, stroke=1, fill=0)
    stages = ["Intro", "Growth", "Maturity", "Decline"]
    for i, s in enumerate(stages):
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        c.drawCentredString(ox + w * (0.12 + i * 0.2), oy + 4, s)


def _fig_bcg(c, x, y, w, h):
    m = 18
    qw, qh = (w - m) / 2, (h - m) / 2
    cells = [
        (x, y + qh + m / 2, "Stars", "High growth\nHigh share"),
        (x + qw + m / 2, y + qh + m / 2, "Question marks", "High growth\nLow share"),
        (x, y, "Cash cows", "Low growth\nHigh share"),
        (x + qw + m / 2, y, "Poor dogs", "Low growth\nLow share"),
    ]
    for px, py, title, sub in cells:
        c.setStrokeColor(INK)
        c.setFillColor(SOFT)
        c.rect(px, py, qw - 4, qh - 4, stroke=1, fill=1)
        _label(c, px + (qw - 4) / 2, py + qh * 0.55, title, 8, True)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        for i, line in enumerate(sub.split("\n")):
            c.drawCentredString(px + (qw - 4) / 2, py + qh * 0.35 - i * 9, line)
    c.setFont("Helvetica", 6.5)
    c.setFillColor(MUTED)
    c.drawCentredString(x + w / 2, y - 2, "Relative market share  →")
    c.saveState()
    c.translate(x - 2, y + h / 2)
    c.rotate(90)
    c.drawCentredString(0, 0, "Market growth  →")
    c.restoreState()


def _fig_fs(c, x, y, w, h):
    items = [
        ("Balance sheet", "Assets, liabilities,\nequity (point in time)"),
        ("Income statement", "Revenues, costs,\nprofit or loss (period)"),
        ("Cash flow statement", "Operating, investing,\nfinancing cash flows"),
    ]
    bw = (w - 16) / 3
    for i, (t, s) in enumerate(items):
        px = x + i * (bw + 8)
        c.setFillColor(SOFT)
        c.setStrokeColor(INK)
        c.roundRect(px, y + 20, bw, h - 40, 3, stroke=1, fill=1)
        _label(c, px + bw / 2, y + h - 55, t, 7.5, True)
        c.setFont("Helvetica", 6.5)
        c.setFillColor(MUTED)
        for j, line in enumerate(s.split("\n")):
            c.drawCentredString(px + bw / 2, y + h - 72 - j * 9, line)
    c.setStrokeColor(INK)
    c.line(x + 10, y + 12, x + w - 10, y + 12)
    _label(c, x + w / 2, y + 2, "Financial statement", 8, True)


def _fig_bs(c, x, y, w, h):
    # two-column T-account style
    mid = x + w / 2
    c.setStrokeColor(INK)
    c.setLineWidth(1)
    c.line(mid, y + 8, mid, y + h - 8)
    c.line(x + 8, y + h - 28, x + w - 8, y + h - 28)
    _label(c, x + w * 0.25, y + h - 20, "Assets", 9, True)
    _label(c, x + w * 0.75, y + h - 20, "Liabilities + Equity", 9, True)
    left = ["Non-current assets", "Current assets", "  Inventory", "  Receivables", "  Cash"]
    right = ["Equity", "Non-current liabilities", "Current liabilities", "  Trade payables", "  Short-term loans"]
    c.setFont("Helvetica", 7.5)
    c.setFillColor(INK)
    for i, t in enumerate(left):
        c.drawString(x + 14, y + h - 48 - i * 14, t)
    for i, t in enumerate(right):
        c.drawString(mid + 12, y + h - 48 - i * 14, t)
    c.setFont("Helvetica-Oblique", 7)
    c.setFillColor(MUTED)
    c.drawCentredString(x + w / 2, y + 12, "Assets = Liabilities + Equity")


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


def make_table(headers, rows, width):
    ncols = max(len(headers), 1)
    col_w = width / ncols
    style_cell = S["cell"]
    style_h = S["cell_h"]

    def cell(text, header=False):
        return Paragraph(esc(str(text)), style_h if header else style_cell)

    data = [[cell(h, True) for h in headers]]
    for row in rows:
        # pad/truncate
        r = list(row) + [""] * (ncols - len(row))
        data.append([cell(r[i]) for i in range(ncols)])

    t = Table(data, colWidths=[col_w] * ncols, repeatRows=1)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SOFT),
        ("TEXTCOLOR", (0, 0), (-1, -1), INK),
        ("GRID", (0, 0), (-1, -1), 0.4, RULE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
    ]))
    return t


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
    foot = (STATE.footer or "")[:70]
    canvas.drawRightString(W - R_M, H - 10 * mm, foot)
    canvas.line(L_M, 11 * mm, W - R_M, 11 * mm)
    canvas.drawString(L_M, 6.5 * mm, "Introduction to Business and Economics")
    canvas.drawRightString(W - R_M, 6.5 * mm, str(doc.page))
    canvas.restoreState()


def blocks_to_flowables(blocks, width):
    out = []
    for b in blocks:
        t = b.get("type")
        if t == "p":
            out.append(Paragraph(esc(b["text"]), S["body"]))
            plain_parts.append(b["text"])
        elif t == "definition":
            # Classic textbook: bold term + running text, no coloured box
            out.append(Paragraph(
                f"<b>{esc(b['term'])}.</b>  {esc(b['text'])}",
                S["def"],
            ))
            plain_parts.append(f"{b['term']}: {b['text']}")
        elif t == "bullets":
            for item in b.get("items", []):
                out.append(Paragraph(f"•  {esc(item)}", S["bullet"]))
                plain_parts.append(item)
            out.append(Spacer(1, 4))
        elif t == "example":
            title = esc(b.get("title") or "Example")
            out.append(Paragraph(f"<b>{title}.</b>  {esc(b['text'])}", S["example"]))
            plain_parts.append(b["text"])
        elif t == "formula":
            label = esc(b.get("label") or "Formula")
            out.append(Spacer(1, 4))
            out.append(HRFlowable(width="100%", thickness=0.4, color=RULE, spaceBefore=2, spaceAfter=4))
            out.append(Paragraph(f"{label}:  {esc(b['text'])}", S["formula"]))
            out.append(HRFlowable(width="100%", thickness=0.4, color=RULE, spaceBefore=4, spaceAfter=6))
            plain_parts.append(b["text"])
        elif t == "table":
            caps = b.get("caption") or ""
            headers = b.get("headers") or []
            rows = b.get("rows") or []
            out.append(Spacer(1, 6))
            out.append(KeepTogether([
                make_table(headers, rows, width),
                Paragraph(esc(caps), S["caption"]) if caps else Spacer(1, 4),
            ]))
            plain_parts.append(caps + " | " + " / ".join(headers))
        elif t == "figure":
            fid = b.get("id") or ""
            caps = b.get("caption") or fid
            out.append(Spacer(1, 6))
            out.append(KeepTogether([
                Diagram(fid, caps, width),
                Paragraph(esc(caps), S["caption"]),
            ]))
            plain_parts.append(caps)
        # silently ignore trap/statement/application/takeaways if any remain
        elif t == "takeaways":
            out.append(Paragraph("<b>Summary</b>", S["sec"]))
            for item in b.get("items", []):
                out.append(Paragraph(f"•  {esc(item)}", S["bullet"]))
        elif t in ("trap", "statement", "application"):
            continue
        elif b.get("text"):
            out.append(Paragraph(esc(b["text"]), S["body"]))
    return out


def build():
    width = W - L_M - R_M
    story = []

    # Cover — quiet
    STATE.skip_chrome = True
    story.append(Spacer(1, 55))
    story.append(Paragraph("BBE SCHOOL", S["cover_kicker"]))
    story.append(Paragraph("Introduction to<br/>Business and Economics", S["cover_title"]))
    story.append(HRFlowable(width=90, thickness=1.2, color=ACCENT, spaceBefore=4, spaceAfter=14))
    story.append(Paragraph(
        "Study material for the Economics Full Course<br/>"
        "Chapters 2 to 6",
        S["cover_sub"],
    ))
    story.append(Spacer(1, 40))
    story.append(Paragraph(
        "An original course textbook prepared for this platform. "
        "It covers the same syllabus progression as the WU BBE entrance pathway "
        "in a calm, structured form: chapters, definitions, worked examples, "
        "tables and figures.",
        S["cover_sub"],
    ))
    story.append(PageBreak())

    # TOC
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
        story.append(HRFlowable(width="100%", thickness=0.5, color=RULE, spaceAfter=10))
        story.append(Paragraph(esc(ch["intro"]), S["body"]))
        plain_parts.append(f"Chapter {ch['num']}. {ch['title']}\n{ch['intro']}")

        for sec in ch["sections"]:
            story.append(Paragraph(f"{sec['id']}  {esc(sec['title'])}", S["sec"]))
            plain_parts.append(f"{sec['id']} {sec['title']}")
            story.extend(blocks_to_flowables(sec["blocks"], width))

        story.append(PageBreak())

    STATE.footer = "Introduction to Business and Economics"
    story.append(Spacer(1, 80))
    story.append(Paragraph("End of the Full Course theory chapters", S["ch_title"]))
    story.append(Paragraph(
        "Return to the Economics Full Course practice area for the chapter you have studied. "
        "Read the figures and tables carefully — they summarise relationships that often appear in exam statements.",
        S["body"],
    ))

    doc = BaseDocTemplate(
        str(OUT_PDF),
        pagesize=A4,
        leftMargin=L_M,
        rightMargin=R_M,
        topMargin=T_M,
        bottomMargin=B_M,
        title="BBE School — Introduction to Business and Economics",
        author="BBE School",
    )
    frame = Frame(L_M, B_M, width, H - T_M - B_M, id="normal")
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=lambda c, d: None, onPageEnd=chrome)])

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
    doc.build(story)

    chapters_sorted = sorted(ranges.values(), key=lambda x: x["startPage"])
    for i, r in enumerate(chapters_sorted):
        if i + 1 < len(chapters_sorted):
            r["endPage"] = chapters_sorted[i + 1]["startPage"] - 1
        else:
            r["endPage"] = max(r["startPage"], doc.page - 1)

    manifest = {"pageCount": doc.page, "chapters": chapters_sorted}
    OUT_MANIFEST.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    OUT_TEXT.write_text("\n\n".join(plain_parts), encoding="utf-8")
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    build()
