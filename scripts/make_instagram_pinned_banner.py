#!/usr/bin/env python3
"""Build a 3-tile Instagram pinned banner: BBE / WiSo / Demo Access."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "design-explorations" / "instagram-pinned-banner"
BG_SRC = Path("/opt/cursor/artifacts/assets/ig-prep-bg-cream.jpg")

W, H = 3240, 1080
SQ = 1080

CREAM = (247, 245, 241)
INK = (22, 22, 22)
MUTED = (110, 110, 110)
LINE = (210, 200, 188)
CARD = (255, 255, 255)
CARD_BORDER = (230, 226, 218)
ORANGE = (232, 122, 46)  # BBE
PURPLE = (124, 92, 191)  # WiSo
TEAL = (46, 140, 130)  # Demo

FONT_DIR = Path("/usr/share/fonts/truetype/macos")


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size=size)


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont) -> tuple[int, int]:
    b = draw.textbbox((0, 0), text, font=fnt)
    return b[2] - b[0], b[3] - b[1]


def cover_resize(im: Image.Image, tw: int, th: int) -> Image.Image:
    iw, ih = im.size
    scale = max(tw / iw, th / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def draw_architecture(base: Image.Image) -> Image.Image:
    """Faint continuous architectural wireframe across the full banner."""
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    stroke = (*LINE, 48)
    soft = (*LINE, 32)

    # One continuous floor grid (flows across tile seams)
    vanishing = (W // 2 + 120, int(H * 0.38))
    for x in range(-200, W + 200, 70):
        d.line([(x, H + 40), vanishing], fill=stroke, width=2)

    for i, y in enumerate(range(480, H + 20, 42)):
        # widen toward bottom — continuous bands, not per-tile boxes
        t = i / 14
        inset = int(30 + t * 40)
        d.line([(inset, y), (W - inset, y)], fill=soft, width=1)

    # Continuous facade lattice across the full width (not 3 separate grids)
    for x in range(40, W - 40, 64):
        d.line([(x, 160), (x, 560)], fill=soft, width=1)
    for y in range(180, 560, 48):
        d.line([(40, y), (W - 40, y)], fill=soft, width=1)

    # Long diagonal beams crossing seams
    for i in range(10):
        x0 = -100 + i * 360
        d.line([(x0, 120), (x0 + 900, 780)], fill=(*LINE, 28), width=2)

    blurred = overlay.filter(ImageFilter.GaussianBlur(0.5))
    return Image.alpha_composite(base.convert("RGBA"), blurred)


def draw_logo(draw: ImageDraw.ImageDraw, x: int, y: int, size: int = 96) -> None:
    """Rounded square BBE mark with dog-ear, matching site posters."""
    r = 18
    draw.rounded_rectangle([x, y, x + size, y + size], radius=r, outline=INK, width=4)
    # dog-ear fold
    fold = 22
    draw.polygon(
        [
            (x + size - fold, y + size),
            (x + size, y + size - fold),
            (x + size, y + size),
        ],
        fill=CREAM,
    )
    draw.line(
        [(x + size - fold, y + size), (x + size - fold, y + size - fold), (x + size, y + size - fold)],
        fill=INK,
        width=3,
        joint="curve",
    )
    fnt = font("Inter-Bold.ttf", 36)
    label = "BBE"
    tw, th = text_size(draw, label, fnt)
    draw.text((x + (size - tw) / 2, y + (size - th) / 2 - 2), label, font=fnt, fill=INK)


def draw_check(draw: ImageDraw.ImageDraw, x: int, y: int, color: tuple[int, int, int]) -> None:
    # thin check stroke
    draw.line([(x, y + 10), (x + 8, y + 18), (x + 22, y)], fill=color, width=4)


def draw_card(
    canvas: Image.Image,
    *,
    cx: int,
    top: int,
    tag: str,
    accent: tuple[int, int, int],
    title: str,
    bullets: list[str],
    width: int = 780,
    height: int = 620,
) -> None:
    draw = ImageDraw.Draw(canvas)
    left = cx - width // 2
    # soft shadow
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle(
        [left + 8, top + 10, left + width + 8, top + height + 10],
        radius=28,
        fill=(0, 0, 0, 28),
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(12))
    canvas.alpha_composite(shadow)

    draw.rounded_rectangle(
        [left, top, left + width, top + height],
        radius=28,
        fill=CARD,
        outline=CARD_BORDER,
        width=2,
    )

    # tag
    tag_f = font("Inter-Bold.ttf", 28)
    tw, th = text_size(draw, tag, tag_f)
    pad_x, pad_y = 18, 10
    tag_w, tag_h = tw + pad_x * 2, th + pad_y * 2
    tag_x, tag_y = left + 40, top + 36
    draw.rounded_rectangle(
        [tag_x, tag_y, tag_x + tag_w, tag_y + tag_h],
        radius=8,
        fill=accent,
    )
    draw.text((tag_x + pad_x, tag_y + pad_y - 2), tag, font=tag_f, fill=(255, 255, 255))

    title_f = font("Inter-Bold.ttf", 48)
    draw.text((left + 40, top + 110), title, font=title_f, fill=INK)

    # divider
    draw.line([(left + 40, top + 180), (left + width - 40, top + 180)], fill=CARD_BORDER, width=2)

    bullet_f = font("Inter-Medium.ttf", 32)
    y = top + 220
    for bullet in bullets:
        draw_check(draw, left + 44, y + 6, accent)
        draw.text((left + 84, y), bullet, font=bullet_f, fill=INK)
        y += 72


def build() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    # Base cream + optional soft photo wash
    base = Image.new("RGB", (W, H), CREAM)
    if BG_SRC.exists():
        wash = cover_resize(Image.open(BG_SRC).convert("RGB"), W, H)
        wash = ImageEnhance.Brightness(wash).enhance(1.08)
        wash = ImageEnhance.Color(wash).enhance(0.55)
        base = Image.blend(base, wash, 0.55)

    canvas = draw_architecture(base)

    draw = ImageDraw.Draw(canvas)
    title_f = font("Inter-Bold.ttf", 72)
    sub_f = font("Inter-Medium.ttf", 34)

    # Continuous top rule across the whole banner (reads as one strip)
    draw.line([(48, 36), (W - 48, 36)], fill=(200, 196, 188), width=2)

    # Per-tile header: same system, product-aware so each post stands alone
    # while the row still feels like one banner.
    tile_headers = [
        ("Preparation Courses", "BBE track · WU Vienna"),
        ("Preparation Courses", "WiSo track · WU Vienna"),
        ("Preparation Courses", "Free demo · WU Vienna"),
    ]
    for i, (title, sub) in enumerate(tile_headers):
        cx = i * SQ + SQ // 2
        tw, _ = text_size(draw, title, title_f)
        draw.text((cx - tw / 2, 56), title, font=title_f, fill=INK)
        sw, _ = text_size(draw, sub, sub_f)
        draw.text((cx - sw / 2, 148), sub, font=sub_f, fill=MUTED)
        draw.line([(cx - 160, 200), (cx + 160, 200)], fill=(200, 196, 188), width=2)

    # Logo on every tile (top-right) for standalone posts
    for i in range(3):
        draw_logo(draw, i * SQ + SQ - 96 - 48, 40, size=88)

    cards = [
        {
            "tag": "BBE",
            "accent": ORANGE,
            "title": "Full BBE Course",
            "bullets": [
                "Economics • Math • English",
                "6 mock exams",
                "3300+ questions",
                "Full preparation materials",
            ],
        },
        {
            "tag": "WiSo",
            "accent": PURPLE,
            "title": "Full WiSo Course",
            "bullets": [
                "Wirtschaft • Math • German",
                "6 mock exams",
                "2500+ questions",
                "Full preparation materials",
            ],
        },
        {
            "tag": "DEMO",
            "accent": TEAL,
            "title": "Demo Access",
            "bullets": [
                "Free practice tasks",
                "Sample mock exam",
                "Try BBE & WiSo tracks",
                "No credit card required",
            ],
        },
    ]

    for i, card in enumerate(cards):
        draw_card(
            canvas,
            cx=i * SQ + SQ // 2,
            top=240,
            tag=card["tag"],
            accent=card["accent"],
            title=card["title"],
            bullets=card["bullets"],
        )

    # Footer URL per tile
    url_f = font("Inter-Medium.ttf", 26)
    for i in range(3):
        cx = i * SQ + SQ // 2
        u = "bbe-school.com"
        uw, _ = text_size(draw, u, url_f)
        draw.text((cx - uw / 2, H - 56), u, font=url_f, fill=MUTED)

    rgb = canvas.convert("RGB")

    full_png = OUT / "bbe-prep-courses-banner-full.png"
    full_jpg = OUT / "bbe-prep-courses-banner-full.jpg"
    rgb.save(full_png, "PNG", optimize=True)
    rgb.save(full_jpg, "JPEG", quality=95, optimize=True)

    names = [
        ("01-bbe-full-course", "BBE"),
        ("02-wiso-full-course", "WiSo"),
        ("03-demo-access", "Demo"),
    ]
    for i, (stem, _) in enumerate(names):
        tile = rgb.crop((i * SQ, 0, (i + 1) * SQ, H))
        tile.save(OUT / f"{stem}.png", "PNG", optimize=True)
        tile.save(OUT / f"{stem}.jpg", "JPEG", quality=95, optimize=True)

    # Grid preview with Instagram-like gaps
    gap = 14
    preview = Image.new("RGB", (W + 2 * gap, H), (235, 233, 228))
    for i in range(3):
        tile = rgb.crop((i * SQ, 0, (i + 1) * SQ, H))
        preview.paste(tile, (i * (SQ + gap), 0))
    preview.save(OUT / "preview-grid-with-gaps.jpg", "JPEG", quality=92)

    print(f"Wrote assets to {OUT}")
    for p in sorted(OUT.iterdir()):
        if p.suffix.lower() in {".png", ".jpg"}:
            im = Image.open(p)
            print(f"  {p.name}: {im.size}")


if __name__ == "__main__":
    build()
