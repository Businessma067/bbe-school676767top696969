"""
Branded visuals for the BBE Economics PDF — cover, chapter heroes, photo plates.
Drawn to match the site: ivory, espresso, caramel ember accent. No orange block headers.
"""
from __future__ import annotations

from pathlib import Path

from reportlab.lib.colors import Color, HexColor, white, black
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Flowable, KeepTogether, Spacer

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / "assets"
PHOTOS = ASSETS / "photos"
GENERATED = ASSETS / "generated"
FONTS = ASSETS / "fonts"

IVORY = HexColor("#F7F3EC")
IVORY_DEEP = HexColor("#EFE8DC")
ESPRESSO = HexColor("#1A1614")
INK = HexColor("#1F1A17")
MUTED = HexColor("#5C534C")
CARAMEL = HexColor("#C45C1A")
CARAMEL_SOFT = HexColor("#F4E6D8")
RULE = HexColor("#D9D0C6")
PAPER = HexColor("#FCFAF7")

FONT_REG = "Helvetica"
FONT_BOLD = "Helvetica-Bold"
FONT_ITALIC = "Helvetica-Oblique"
FONT_DISP = "Helvetica-Bold"


def register_fonts() -> None:
    global FONT_REG, FONT_BOLD, FONT_ITALIC, FONT_DISP
    mapping = [
        ("BBE-Sans", FONTS / "DMSans-Regular.ttf", "reg"),
        ("BBE-Sans-Bold", FONTS / "DMSans-Bold.ttf", "bold"),
        ("BBE-Sans-Italic", FONTS / "DMSans-Italic.ttf", "italic"),
        ("BBE-Display", FONTS / "SpaceGrotesk-Bold.ttf", "disp"),
        ("BBE-Display-Reg", FONTS / "SpaceGrotesk-Regular.ttf", "disp_reg"),
    ]
    registered = {}
    for name, path, key in mapping:
        if path.exists() and path.stat().st_size > 1000:
            try:
                pdfmetrics.registerFont(TTFont(name, str(path)))
                registered[key] = name
            except Exception:
                pass
    FONT_REG = registered.get("reg", "Helvetica")
    FONT_BOLD = registered.get("bold", "Helvetica-Bold")
    FONT_ITALIC = registered.get("italic", "Helvetica-Oblique")
    # Display falls back to bold sans if Space Grotesk missing
    FONT_DISP = registered.get("disp") or registered.get("bold") or "Helvetica-Bold"


register_fonts()

CHAPTER_PHOTOS = {
    2: PHOTOS / "ch2-market.jpg",
    3: PHOTOS / "ch3-workshop.jpg",
    4: PHOTOS / "ch4-handshake.jpg",
    5: PHOTOS / "ch5-cafe.jpg",
    6: PHOTOS / "ch6-ledger.jpg",
}

CHAPTER_EXTRA = {
    2: (PHOTOS / "ch2-city.jpg", "City markets and workplaces — real flows of goods and money."),
    3: (PHOTOS / "ch3-storefront.jpg", "Firms look different from the street — type of business shapes the ledger."),
    4: (PHOTOS / "ch4-office.jpg", "Ownership and financing decide who carries risk and who keeps control."),
    5: (PHOTOS / "ch5-retail.jpg", "Marketing is the bridge from product to customer — place, price, promise."),
    6: (PHOTOS / "ch6-desk.jpg", "Statements turn transactions into a readable story of the firm."),
}

# Extra plates inserted between sections (not only chapter openers)
SECTION_PHOTO_POOL = {
    2: [
        (PHOTOS / "mid-grocery.jpg", "Everyday buying and selling is where scarcity becomes real."),
        (PHOTOS / "mid-shop.jpg", "Prices, queues and choices — microeconomics in motion."),
        (PHOTOS / "ch2-city.jpg", "Households and firms meet in city markets every day."),
    ],
    3: [
        (PHOTOS / "mid-factory.jpg", "Different factors of production shape how a firm works."),
        (PHOTOS / "mid-tools.jpg", "Tools, labour and know-how combine into a business system."),
        (PHOTOS / "ch3-storefront.jpg", "From the street, every firm tells a different production story."),
    ],
    4: [
        (PHOTOS / "mid-meeting.jpg", "Ownership structure decides who carries risk and who decides."),
        (PHOTOS / "mid-team.jpg", "Partners, managers and investors pull different levers."),
        (PHOTOS / "ch4-office.jpg", "Finance is the language that turns ownership into action."),
    ],
    5: [
        (PHOTOS / "mid-cafe.jpg", "Place and experience are part of the marketing mix."),
        (PHOTOS / "mid-shop.jpg", "Retail shelves show product, price and promotion together."),
        (PHOTOS / "ch5-retail.jpg", "Customer insight comes before the next product bet."),
    ],
    6: [
        (PHOTOS / "mid-laptop.jpg", "Numbers become useful when they tell a clean story."),
        (PHOTOS / "ch6-desk.jpg", "Books record what the firm owns, owes and earned."),
        (PHOTOS / "mid-meeting.jpg", "Managers read statements before they approve the next move."),
    ],
}


def photo_exists(path: Path | None) -> bool:
    return bool(path and path.exists() and path.stat().st_size > 2000)


def _draw_image_cover(c, path: Path, x: float, y: float, w: float, h: float) -> None:
    """Draw photo to fully cover the box (crop overflow), never letterbox."""
    if not photo_exists(path):
        return
    ir = ImageReader(str(path))
    iw, ih = ir.getSize()
    if iw <= 0 or ih <= 0:
        return
    scale = max(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    c.saveState()
    clip = c.beginPath()
    clip.rect(x, y, w, h)
    c.clipPath(clip, stroke=0)
    c.drawImage(
        ir,
        x + (w - dw) / 2,
        y + (h - dh) / 2,
        width=dw,
        height=dh,
        mask="auto",
    )
    c.restoreState()


def _draw_arcs(c, x: float, y: float, w: float, h: float, color=CARAMEL, alpha: float = 0.18) -> None:
    """Soft concentric arcs — signature background motif (circular flow echo)."""
    c.saveState()
    try:
        c.setFillColor(Color(color.red, color.green, color.blue, alpha=alpha))
        c.setStrokeColor(Color(color.red, color.green, color.blue, alpha=alpha + 0.12))
    except TypeError:
        c.setStrokeColor(color)
        c.setFillColor(color)
    c.setLineWidth(1.1)
    cx, cy = x + w * 0.92, y + h * 0.55
    for i, r in enumerate((38, 72, 112, 158, 210)):
        c.setLineWidth(0.6 + (i % 2) * 0.5)
        c.circle(cx, cy, r, stroke=1, fill=0)
    # Ember tick
    c.setFillColor(CARAMEL)
    c.circle(x + 18, y + h - 22, 3.2, stroke=0, fill=1)
    c.restoreState()


def _draw_diagonal_wash(c, x, y, w, h) -> None:
    c.saveState()
    c.setFillColor(IVORY_DEEP)
    p = c.beginPath()
    p.moveTo(x, y)
    p.lineTo(x + w * 0.55, y)
    p.lineTo(x + w * 0.38, y + h)
    p.lineTo(x, y + h)
    p.close()
    c.drawPath(p, stroke=0, fill=1)
    c.restoreState()


class CoverPage(Flowable):
    """Full first-page composition: ivory field, arcs, campus photo, brand typography."""

    def __init__(self, brand: str, title: str, subtitle: str, method: str, width: float, page_h: float):
        super().__init__()
        self.brand = brand
        self.title = title
        self.subtitle = subtitle
        self.method = method
        self.width = width
        # Almost full usable page height
        self.height = page_h - 28 * mm

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        return self.width, self.height

    def draw(self):
        c = self.canv
        w, h = self.width, self.height
        c.saveState()

        # Ivory plate
        c.setFillColor(IVORY)
        c.rect(-2, -2, w + 4, h + 4, stroke=0, fill=1)
        _draw_diagonal_wash(c, 0, h * 0.42, w, h * 0.58)
        _draw_arcs(c, 0, h * 0.35, w, h * 0.65)

        brand_arcs = GENERATED / "brand-arcs.png"
        if photo_exists(brand_arcs):
            try:
                c.setFillAlpha(0.22)
            except Exception:
                pass
            # Soft atmosphere strip across the top third
            c.drawImage(
                str(brand_arcs),
                -4,
                h * 0.55,
                width=w + 8,
                height=h * 0.48,
                preserveAspectRatio=True,
                anchor="c",
                mask="auto",
            )
            try:
                c.setFillAlpha(1)
            except Exception:
                pass

        # Photo band — campus / academic world
        cover = PHOTOS / "cover-campus.jpg"
        photo_h = h * 0.34
        photo_y = 18
        if photo_exists(cover):
            _draw_image_cover(c, cover, 0, photo_y, w, photo_h)
            # Gradient veil (stacked translucent rects)
            for i in range(10):
                t = i / 10
                try:
                    c.setFillColor(Color(IVORY.red, IVORY.green, IVORY.blue, alpha=0.08 + t * 0.1))
                except TypeError:
                    c.setFillColor(IVORY)
                c.rect(0, photo_y + photo_h - 28 + i * 2.2, w, 3.2, stroke=0, fill=1)
            # Caramel underline under photo
            c.setFillColor(CARAMEL)
            c.rect(0, photo_y - 3, w * 0.28, 3, stroke=0, fill=1)
            c.setFillColor(RULE)
            c.rect(w * 0.28 + 6, photo_y - 2, w * 0.72 - 6, 1.2, stroke=0, fill=1)

        # Brand mark
        y = h - 28
        c.setFillColor(CARAMEL)
        c.setFont(FONT_BOLD, 11)
        c.drawString(0, y, self.brand.upper())
        c.setStrokeColor(CARAMEL)
        c.setLineWidth(1.6)
        c.line(0, y - 6, 54, y - 6)

        # Title
        y -= 42
        c.setFillColor(ESPRESSO)
        c.setFont(FONT_DISP, 28)
        # wrap title manually
        words = self.title.split()
        lines, cur = [], ""
        for word in words:
            trial = (cur + " " + word).strip()
            if c.stringWidth(trial, FONT_DISP, 28) < w - 8:
                cur = trial
            else:
                if cur:
                    lines.append(cur)
                cur = word
        if cur:
            lines.append(cur)
        for line in lines[:3]:
            c.drawString(0, y, line)
            y -= 34

        y -= 4
        c.setFillColor(MUTED)
        c.setFont(FONT_REG, 12)
        for line in _wrap(c, self.subtitle, FONT_REG, 12, w - 10)[:3]:
            c.drawString(0, y, line)
            y -= 16

        y -= 10
        c.setFillColor(ESPRESSO)
        c.setFont(FONT_BOLD, 10)
        c.drawString(0, y, self.method)
        y -= 14
        # Path steps — thin separators, not orange tiles
        steps = ["Scene", "Idea", "Mechanism", "Practice", "Exam"]
        c.setFont(FONT_REG, 9.5)
        x = 0
        for i, step in enumerate(steps):
            c.setFillColor(CARAMEL if i == 0 else MUTED)
            c.drawString(x, y, step)
            tw = c.stringWidth(step, FONT_REG, 9.5)
            if i < len(steps) - 1:
                c.setStrokeColor(RULE)
                c.setLineWidth(0.8)
                c.line(x + tw + 6, y + 3, x + tw + 22, y + 3)
                x += tw + 30
            else:
                x += tw

        y -= 22
        c.setFillColor(MUTED)
        c.setFont(FONT_ITALIC, 9.5)
        c.drawString(0, y, "Original teaching for the Economics Full Course — Chapters 2 to 6.")

        c.restoreState()


def _wrap(c, text: str, font: str, size: float, max_w: float) -> list[str]:
    words = (text or "").split()
    lines, cur = [], ""
    for word in words:
        trial = (cur + " " + word).strip()
        if c.stringWidth(trial, font, size) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


class ChapterHero(Flowable):
    """Chapter opener: photo strip + large number + title. No orange header block."""

    def __init__(self, num: int, title: str, width: float):
        super().__init__()
        self.num = num
        self.title = title
        self.width = width
        self.height = 118

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        self.height = 122
        return self.width, self.height

    def draw(self):
        c = self.canv
        w, h = self.width, self.height
        c.saveState()

        photo = CHAPTER_PHOTOS.get(self.num)
        band_h = 78
        if photo_exists(photo):
            _draw_image_cover(c, photo, 0, h - band_h, w, band_h)
            # Darkening veil for brand overlay readability
            try:
                c.setFillColor(Color(0.08, 0.06, 0.05, alpha=0.22))
            except TypeError:
                c.setFillColor(ESPRESSO)
            c.rect(0, h - band_h, w, 22, stroke=0, fill=1)
            _draw_arcs(c, w * 0.55, h - band_h, w * 0.5, band_h, color=CARAMEL_SOFT, alpha=0.28)
        else:
            c.setFillColor(IVORY_DEEP)
            c.rect(0, h - band_h, w, band_h, stroke=0, fill=1)
            _draw_arcs(c, 0, h - band_h, w, band_h)

        # Caramel accent bar under photo
        c.setFillColor(CARAMEL)
        c.rect(0, h - band_h - 3, 36, 3, stroke=0, fill=1)
        c.setFillColor(RULE)
        c.rect(40, h - band_h - 2, w - 40, 1, stroke=0, fill=1)

        # Big chapter number
        c.setFillColor(ESPRESSO)
        c.setFont(FONT_DISP, 26)
        c.drawString(0, 28, f"{self.num:02d}")

        # Title next to / below number
        c.setFont(FONT_DISP, 15)
        title_x = 48
        max_w = w - title_x
        lines = _wrap(c, self.title, FONT_DISP, 15, max_w)
        ty = 36
        for line in lines[:2]:
            c.drawString(title_x, ty, line)
            ty -= 18

        c.setFillColor(MUTED)
        c.setFont(FONT_REG, 8.5)
        c.drawString(0, 8, "BBE ECONOMICS  ·  FULL COURSE THEORY")

        c.restoreState()


class PhotoPlate(Flowable):
    """In-flow photograph with caption — site-like, edge-to-edge of content width."""

    def __init__(self, path: Path, caption: str, width: float, height: float = 118):
        super().__init__()
        self.path = path
        self.caption = caption or ""
        self.width = width
        self.img_h = height
        self.height = height + (18 if self.caption else 4)

    def wrap(self, aw, ah):
        self.width = min(self.width, aw)
        return self.width, self.height

    def draw(self):
        if not photo_exists(self.path):
            return
        c = self.canv
        c.saveState()
        _draw_image_cover(c, self.path, 0, self.height - self.img_h, self.width, self.img_h)
        # Thin caramel corner accent
        c.setFillColor(CARAMEL)
        c.rect(0, self.height - self.img_h, 22, 2.4, stroke=0, fill=1)
        if self.caption:
            c.setFillColor(CARAMEL)
            c.setFont(FONT_BOLD, 8.5)
            for i, line in enumerate(_wrap(c, self.caption, FONT_BOLD, 8.5, self.width - 4)[:2]):
                c.drawString(0, 6 - i * 10, line)
        c.restoreState()


def chapter_extra_photo(num: int, width: float):
    extra = CHAPTER_EXTRA.get(num)
    if not extra:
        return None
    path, caption = extra
    if not photo_exists(path):
        return None
    return KeepTogether([Spacer(1, 6), PhotoPlate(path, caption, width, height=108), Spacer(1, 8)])


def section_mid_photo(num: int, section_index: int, width: float):
    """Insert a live photo after selected sections so chapters are not text-only walls."""
    pool = SECTION_PHOTO_POOL.get(num) or []
    available = [(p, cap) for p, cap in pool if photo_exists(p)]
    if not available:
        return None
    # After 1st, 3rd, 5th… section (0-based: 0, 2, 4…)
    if section_index % 2 != 0:
        return None
    path, caption = available[(section_index // 2) % len(available)]
    return KeepTogether([Spacer(1, 8), PhotoPlate(path, caption, width, height=102), Spacer(1, 6)])


def end_page_photo(width: float):
    path = PHOTOS / "end-study.jpg"
    if not photo_exists(path):
        return []
    return [
        Spacer(1, 10),
        PhotoPlate(path, "Keep going — theory sticks when you practise the same ideas in exam tasks.", width, height=120),
    ]


def draw_running_chrome(canvas, doc, *, page_w, page_h, l_m, r_m, chapter_label: str, skip: bool):
    """Page chrome — espresso rules + caramel tick (not a grey band)."""
    if skip:
        return
    canvas.saveState()

    # Thin espresso rule
    canvas.setStrokeColor(ESPRESSO)
    canvas.setLineWidth(0.7)
    y = page_h - 12.5 * mm
    canvas.line(l_m, y, page_w - r_m, y)
    # Ember tick at left
    canvas.setStrokeColor(CARAMEL)
    canvas.setLineWidth(2.2)
    canvas.line(l_m, y, l_m + 18, y)

    if chapter_label and doc.page > 2:
        canvas.setFillColor(ESPRESSO)
        canvas.setFont(FONT_BOLD, 8)
        label = chapter_label
        max_w = page_w - l_m - r_m - 24
        while canvas.stringWidth(label, FONT_BOLD, 8) > max_w and len(label) > 12:
            label = label[:-2]
        if label != chapter_label:
            label = label.rstrip() + "…"
        canvas.drawRightString(page_w - r_m, y + 4, label)

    # Footer
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(l_m, 12 * mm, page_w - r_m, 12 * mm)
    canvas.setFillColor(ESPRESSO)
    canvas.setFont(FONT_BOLD, 8)
    canvas.drawString(l_m, 7 * mm, "BBE SCHOOL  ·  ECONOMICS FULL COURSE")
    canvas.setFont(FONT_BOLD, 9)
    canvas.drawRightString(page_w - r_m, 7 * mm, str(doc.page))

    # Soft caramel arcs (brand motif), not grey wash
    try:
        canvas.setStrokeColor(Color(CARAMEL.red, CARAMEL.green, CARAMEL.blue, alpha=0.14))
    except TypeError:
        canvas.setStrokeColor(CARAMEL_SOFT)
    canvas.setLineWidth(0.9)
    canvas.circle(page_w + 28, page_h * 0.38, 88, stroke=1, fill=0)
    canvas.circle(page_w + 28, page_h * 0.38, 118, stroke=1, fill=0)

    canvas.restoreState()
