#!/usr/bin/env python3
"""BBE School Economics textbook — ReportLab generator."""
from __future__ import annotations

import json
from pathlib import Path

from reportlab.lib.colors import Color, HexColor, white, black
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
    ListFlowable,
    ListItem,
    HRFlowable,
)
from reportlab.platypus.flowables import Flowable

ROOT = Path(__file__).resolve().parent
CONTENT = json.loads((ROOT / "output" / "book-content.json").read_text(encoding="utf-8"))
OUT_PDF = ROOT / "output" / "bbe-economics-textbook.pdf"
OUT_MANIFEST = ROOT / "output" / "chapter-pages.json"
OUT_TEXT = ROOT / "output" / "book-plain.txt"

CARAMEL = HexColor("#C96A2B")
AMBER = HexColor("#E0A04A")
ESPRESSO = HexColor("#1A1A1A")
TAUPE = HexColor("#737373")
IVORY = HexColor("#FBF8F4")
DEF_BG = HexColor("#F7F3EC")
EX_BG = HexColor("#F4F8F3")
EX_BORDER = HexColor("#5A8F6B")
TRAP_BG = HexColor("#FDF2F0")
TRAP_BORDER = HexColor("#C45C3A")
STMT_BG = HexColor("#F3F6FA")
STMT_BORDER = HexColor("#4A6FA5")
TAKE_BG = HexColor("#FFF8EF")
LINE = HexColor("#E5E0D8")

W, H = A4
L_M, R_M, T_M, B_M = 18 * mm, 18 * mm, 18 * mm, 16 * mm

plain_parts: list[str] = []
# page number -> chapter (set while building via onPage + state)
chapter_page_marks: list[tuple[int, int, str]] = []  # (page, ch_num, event) event=start|active


class DocState:
    footer = "BBE School · Economics"
    pending_footer: str | None = None
    chapter: int | None = None
    chapter_title = ""
    skip_chrome = False


STATE = DocState()

_UNICODE_FIX = str.maketrans({
    "\u2014": "-",  # em dash
    "\u2013": "-",  # en dash
    "\u2018": "'",
    "\u2019": "'",
    "\u201c": '"',
    "\u201d": '"',
    "\u2026": "...",
    "\u00a0": " ",
})


def esc(s: str) -> str:
    s = s.translate(_UNICODE_FIX)
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\n", "<br/>")
    )


def styles():
    base = getSampleStyleSheet()
    return {
        "cover_brand": ParagraphStyle(
            "cover_brand", parent=base["Normal"], fontName="Helvetica", fontSize=11,
            textColor=CARAMEL, tracking=2, spaceAfter=12,
        ),
        "cover_title": ParagraphStyle(
            "cover_title", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=30,
            textColor=ESPRESSO, leading=36, spaceAfter=16,
        ),
        "cover_sub": ParagraphStyle(
            "cover_sub", parent=base["Normal"], fontName="Helvetica", fontSize=11,
            textColor=TAUPE, leading=16,
        ),
        "h_contents": ParagraphStyle(
            "h_contents", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=20,
            textColor=ESPRESSO, spaceAfter=10,
        ),
        "ch_label": ParagraphStyle(
            "ch_label", parent=base["Normal"], fontName="Helvetica", fontSize=10,
            textColor=CARAMEL, spaceBefore=8, spaceAfter=2,
        ),
        "ch_title": ParagraphStyle(
            "ch_title", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=12,
            textColor=ESPRESSO, spaceAfter=4,
        ),
        "toc_sec": ParagraphStyle(
            "toc_sec", parent=base["Normal"], fontName="Helvetica", fontSize=9,
            textColor=TAUPE, leftIndent=10, spaceAfter=1, leading=12,
        ),
        "divider_label": ParagraphStyle(
            "divider_label", parent=base["Normal"], fontName="Helvetica", fontSize=10,
            textColor=CARAMEL, spaceBefore=40, spaceAfter=6,
        ),
        "divider_title": ParagraphStyle(
            "divider_title", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=22,
            textColor=ESPRESSO, leading=26, spaceAfter=16,
        ),
        "body": ParagraphStyle(
            "body", parent=base["Normal"], fontName="Helvetica", fontSize=10.2,
            textColor=ESPRESSO, leading=14.2, alignment=TA_JUSTIFY, spaceAfter=8,
        ),
        "sec_id": ParagraphStyle(
            "sec_id", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8,
            textColor=AMBER,
        ),
        "sec_title": ParagraphStyle(
            "sec_title", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10,
            textColor=white,
        ),
        "call_title": ParagraphStyle(
            "call_title", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.2,
            textColor=CARAMEL, spaceAfter=3,
        ),
        "call_body": ParagraphStyle(
            "call_body", parent=base["Normal"], fontName="Helvetica", fontSize=9.1,
            textColor=ESPRESSO, leading=12.4, alignment=TA_LEFT,
        ),
        "take_h": ParagraphStyle(
            "take_h", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10,
            textColor=CARAMEL, spaceBefore=4, spaceAfter=4,
        ),
        "take_i": ParagraphStyle(
            "take_i", parent=base["Normal"], fontName="Helvetica", fontSize=9.5,
            textColor=ESPRESSO, leading=13, leftIndent=4, spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "bullet", parent=base["Normal"], fontName="Helvetica", fontSize=10,
            textColor=ESPRESSO, leading=13.5, leftIndent=8, spaceAfter=2,
        ),
        "footer": ParagraphStyle(
            "footer", parent=base["Normal"], fontName="Helvetica", fontSize=7.5,
            textColor=TAUPE,
        ),
    }


S = styles()


class SectionBanner(Flowable):
    def __init__(self, sid: str, title: str, width: float):
        super().__init__()
        self.sid = sid
        self.title = title
        selfBoxW = width
        self.width = width
        self.height = 26

    def draw(self):
        self.canv.setFillColor(ESPRESSO)
        self.canv.roundRect(0, 0, self.width, self.height, 3, fill=1, stroke=0)
        self.canv.setFillColor(AMBER)
        self.canv.setFont("Helvetica-Bold", 8)
        self.canv.drawString(8, 9, self.sid)
        self.canv.setFillColor(white)
        self.canv.setFont("Helvetica-Bold", 9.5)
        self.canv.drawString(36, 9, self.title[:78])


class Callout(Flowable):
    def __init__(self, title: str, body: str, bg, border, icon: str, width: float):
        super().__init__()
        self.title = f"{icon}  {title}"
        self.body = body
        self.bg = bg
        self.border = border
        self.width = width
        self._title = Paragraph(esc(self.title), ParagraphStyle(
            "ct", fontName="Helvetica-Bold", fontSize=8.2, textColor=border, leading=11,
        ))
        self._body = Paragraph(esc(body), S["call_body"])
        self._th, self._bh = 0, 0

    def wrap(self, availWidth, availHeight):
        w = min(self.width, availWidth)
        self.width = w
        tw, self._th = self._title.wrap(w - 22, 1000)
        bw, self._bh = self._body.wrap(w - 22, 1000)
        self.height = 10 + self._th + 4 + self._bh + 10
        return self.width, self.height

    def draw(self):
        c = self.canv
        c.setFillColor(self.bg)
        c.setStrokeColor(self.border)
        c.setLineWidth(0.8)
        c.roundRect(0, 0, self.width, self.height, 4, fill=1, stroke=1)
        c.setFillColor(self.border)
        c.rect(0, 0, 3.2, self.height, fill=1, stroke=0)
        self._title.drawOn(c, 12, self.height - 8 - self._th)
        self._body.drawOn(c, 12, 10)


def chrome(canvas, doc):
    page = doc.page
    if STATE.skip_chrome and page == 1:
        return
    canvas.saveState()
    canvas.setFillColor(CARAMEL)
    canvas.rect(0, H - 4, W, 4, fill=1, stroke=0)
    canvas.setFillColor(TAUPE)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(L_M, H - 12 * mm, "BBE SCHOOL")
    foot = (STATE.footer or "")[:58]
    canvas.drawRightString(W - R_M, H - 12 * mm, foot)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(L_M, 11 * mm, W - R_M, 11 * mm)
    canvas.drawString(L_M, 6.5 * mm, "Full Course Theory")
    canvas.drawRightString(W - R_M, 6.5 * mm, str(page))
    canvas.restoreState()
    if STATE.chapter is not None:
        chapter_page_marks.append((page, STATE.chapter, "active"))


def cover_page(canvas, doc):
    # drawn as flowables mostly; extra art:
    canvas.saveState()
    canvas.setFillColor(CARAMEL)
    canvas.rect(0, 0, 13, H, fill=1, stroke=0)
    canvas.setFillColor(ESPRESSO)
    canvas.rect(0, 0, W, 118, fill=1, stroke=0)
    canvas.setFillColor(white)
    canvas.setFont("Helvetica", 11)
    canvas.drawString(L_M + 18, 76, "Designed for the WU BBE entrance-exam pathway")
    canvas.setFillColor(HexColor("#C8C8C8"))
    canvas.setFont("Helvetica", 9)
    canvas.drawString(L_M + 18, 54, "Original BBE School edition  ·  Built for this platform")
    canvas.restoreState()


def build_callout(title, body, bg, border, icon, width):
    return KeepTogether([
        Callout(title, body, bg, border, icon, width),
        Spacer(1, 8),
    ])


def blocks_to_flowables(blocks, width):
    out = []
    for b in blocks:
        t = b.get("type")
        if t == "p":
            out.append(Paragraph(esc(b["text"]), S["body"]))
            plain_parts.append(b["text"])
        elif t == "definition":
            out.append(build_callout(
                f"Definition — {b['term']}", b["text"], DEF_BG, CARAMEL, "◆", width
            ))
            plain_parts.append(f"{b['term']}: {b['text']}")
        elif t == "bullets":
            for item in b["items"]:
                out.append(Paragraph(f"•  {esc(item)}", S["bullet"]))
                plain_parts.append(item)
            out.append(Spacer(1, 4))
        elif t == "example":
            out.append(build_callout(b.get("title") or "Worked example", b["text"], EX_BG, EX_BORDER, "▶", width))
        elif t == "formula":
            out.append(build_callout(b.get("label") or "Formula", b["text"], IVORY, AMBER, "ƒ", width))
        elif t == "trap":
            out.append(build_callout(b.get("title") or "Exam trap", b["text"], TRAP_BG, TRAP_BORDER, "!", width))
        elif t == "statement":
            ans = "TRUE" if b.get("answer") else "FALSE"
            body = f"Statement: {b['claim']}<br/><br/>Answer: {ans}<br/>Why: {b['why']}"
            # use raw with esc on parts
            body = (
                f"Statement: {esc(b['claim'])}<br/><br/>"
                f"Answer: {ans}<br/>Why: {esc(b['why'])}"
            )
            out.append(build_callout("Sample exam statement", body.replace("<br/>", "\n"), STMT_BG, STMT_BORDER, "?", width))
            # Callout esc() again — pass unescaped and let Callout esc; fix by passing plain
            out.pop()
            plain_body = f"Statement: {b['claim']}\n\nAnswer: {ans}\nWhy: {b['why']}"
            out.append(build_callout("Sample exam statement", plain_body, STMT_BG, STMT_BORDER, "?", width))
        elif t == "application":
            out.append(build_callout(b.get("title") or "In practice", b["text"], TAKE_BG, CARAMEL, "★", width))
        elif t == "takeaways":
            out.append(Paragraph("Key takeaways", S["take_h"]))
            for item in b["items"]:
                out.append(Paragraph(f"→  {esc(item)}", S["take_i"]))
                plain_parts.append(item)
            out.append(Spacer(1, 6))
    return out


class ChapterStart(Flowable):
    """Zero-size marker to update STATE when drawn."""
    def __init__(self, num: int, title: str):
        super().__init__()
        self.num = num
        self.title = title
        self.width = 0
        self.height = 0

    def draw(self):
        STATE.chapter = self.num
        STATE.chapter_title = self.title
        STATE.footer = f"Chapter {self.num} · {self.title}"
        STATE.skip_chrome = False
        chapter_page_marks.append((None, self.num, "start_draw"))  # page filled in chrome


def build():
    width = W - L_M - R_M
    story = []

    # Cover
    STATE.skip_chrome = True
    story.append(Spacer(1, 70))
    story.append(Paragraph("BBE SCHOOL", S["cover_brand"]))
    story.append(Paragraph("Introduction to<br/>Business &amp;<br/>Economics", S["cover_title"]))
    story.append(Spacer(1, 12))
    story.append(Paragraph(
        "A premium course textbook for the Economics Full Course.<br/>"
        "Clear theory · worked examples · exam traps · practice statements.",
        S["cover_sub"],
    ))
    story.append(Spacer(1, 24))
    story.append(Paragraph("<font color='#C96A2B'><b>CHAPTERS 2–6  ·  FULL COURSE THEORY</b></font>", S["cover_sub"]))
    story.append(PageBreak())

    # TOC
    STATE.skip_chrome = False
    STATE.footer = "Contents"
    STATE.chapter = None
    story.append(Paragraph("Contents", S["h_contents"]))
    story.append(HRFlowable(width=70, thickness=2, color=CARAMEL, spaceAfter=14))
    for ch in CONTENT["chapters"]:
        story.append(Paragraph(f"Chapter {ch['num']}", S["ch_label"]))
        story.append(Paragraph(esc(ch["title"]), S["ch_title"]))
        for sec in ch["sections"]:
            story.append(Paragraph(f"{sec['id']}&nbsp;&nbsp;&nbsp;{esc(sec['title'])}", S["toc_sec"]))
        story.append(Spacer(1, 6))
    story.append(PageBreak())

    chapter_starts_pages = {}  # filled after build via marks — we track differently

    # Chapters
    for ch in CONTENT["chapters"]:
        story.append(ChapterStart(ch["num"], ch["title"]))
        story.append(Paragraph(f"CHAPTER {ch['num']}", S["divider_label"]))
        story.append(Paragraph(esc(ch["title"]), S["divider_title"]))
        story.append(Paragraph(esc(ch["intro"]), S["body"]))
        plain_parts.append(f"Chapter {ch['num']}. {ch['title']}\n{ch['intro']}")
        story.append(Spacer(1, 10))
        chips = "   ·   ".join(s["id"] for s in ch["sections"])
        story.append(build_callout("In this chapter", chips, HexColor("#F3E4D6"), CARAMEL, "§", width))
        story.append(PageBreak())

        for sec in ch["sections"]:
            story.append(KeepTogether([
                SectionBanner(sec["id"], sec["title"], width),
                Spacer(1, 10),
            ]))
            plain_parts.append(f"{sec['id']} {sec['title']}")
            story.extend(blocks_to_flowables(sec["blocks"], width))
            story.append(Spacer(1, 8))

        story.append(PageBreak())

    # Closing
    STATE.footer = "BBE School · Economics"
    story.append(Spacer(1, 120))
    story.append(Paragraph("You are ready to practise", S["divider_title"]))
    story.append(Paragraph(
        "Return to the Economics Full Course and open Practice for the chapter you just studied. "
        "Use the Key takeaways as a checklist, then attack True/False statements with the traps in mind."
        "<br/><br/>Theory explains. Practice proves it.",
        S["body"],
    ))
    story.append(Spacer(1, 20))
    story.append(Paragraph("<font color='#C96A2B'><b>BBE School  ·  Economics Full Course</b></font>", S["body"]))

    doc = BaseDocTemplate(
        str(OUT_PDF),
        pagesize=A4,
        leftMargin=L_M,
        rightMargin=R_M,
        topMargin=T_M,
        bottomMargin=B_M,
        title="BBE School — Introduction to Business & Economics",
        author="BBE School",
    )
    frame = Frame(L_M, B_M, width, H - T_M - B_M, id="normal")
    doc.addPageTemplates([
        PageTemplate(id="main", frames=[frame], onPage=lambda c, d: None, onPageEnd=chrome),
    ])

    # Track chapter ranges by monitoring state during multiBuild
    ranges: dict[int, dict] = {}

    def after_flowable(flowable):
        if isinstance(flowable, ChapterStart):
            p = doc.page
            ranges[flowable.num] = {
                "chapter": flowable.num,
                "title": flowable.title,
                "startPage": p,
                "endPage": p,
            }
        elif STATE.chapter is not None and STATE.chapter in ranges:
            ranges[STATE.chapter]["endPage"] = doc.page

    doc.afterFlowable = after_flowable
    doc.build(story)

    # Finalize end pages — last page of each chapter is day before next start or doc.page
    chapters_sorted = sorted(ranges.values(), key=lambda x: x["startPage"])
    for i, r in enumerate(chapters_sorted):
        if i + 1 < len(chapters_sorted):
            r["endPage"] = chapters_sorted[i + 1]["startPage"] - 1
        else:
            # leave last content page (exclude closing practice page if possible)
            r["endPage"] = max(r["startPage"], doc.page - 1)

    manifest = {"pageCount": doc.page, "chapters": chapters_sorted}
    OUT_MANIFEST.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    OUT_TEXT.write_text("\n\n".join(plain_parts), encoding="utf-8")
    print(json.dumps(manifest, indent=2))


if __name__ == "__main__":
    build()
