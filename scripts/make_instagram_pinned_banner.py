#!/usr/bin/env python3
"""
Build ONE continuous Instagram pinned banner, then slice into 3 equal tiles.

Format: Instagram portrait 4:5 per tile → 1080×1350 each → full 3240×1350.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "design-explorations" / "instagram-pinned-banner"
BG_CANDIDATES = [
    Path("/opt/cursor/artifacts/assets/ig-prep-bg-wide-cream.jpg"),
    Path("/opt/cursor/artifacts/assets/ig-prep-bg-cream.jpg"),
]

# Instagram feed max portrait = 4:5
TILE_W, TILE_H = 1080, 1350
W, H = TILE_W * 3, TILE_H  # 3240 × 1350

CREAM = (247, 245, 241)
INK = (22, 22, 22)
MUTED = (110, 110, 110)
LINE = (210, 200, 188)
CARD = (255, 255, 255)
CARD_BORDER = (230, 226, 218)
ORANGE = (232, 122, 46)
PURPLE = (124, 92, 191)
TEAL = (46, 140, 130)

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
    """One continuous wireframe — drawn on the FULL canvas before any slice."""
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    stroke = (*LINE, 50)
    soft = (*LINE, 34)

    vanishing = (W // 2 + 80, int(H * 0.36))
    for x in range(-240, W + 240, 72):
        d.line([(x, H + 60), vanishing], fill=stroke, width=2)

    for i, y in enumerate(range(int(H * 0.42), H + 30, 46)):
        t = i / 18
        inset = int(24 + t * 50)
        d.line([(inset, y), (W - inset, y)], fill=soft, width=1)

    for x in range(32, W - 32, 68):
        d.line([(x, 220), (x, int(H * 0.55))], fill=soft, width=1)
    for y in range(240, int(H * 0.55), 52):
        d.line([(32, y), (W - 32, y)], fill=soft, width=1)

    for i in range(12):
        x0 = -160 + i * 340
        d.line([(x0, 160), (x0 + 980, int(H * 0.72))], fill=(*LINE, 26), width=2)

    blurred = overlay.filter(ImageFilter.GaussianBlur(0.45))
    return Image.alpha_composite(base.convert("RGBA"), blurred)


def draw_logo(draw: ImageDraw.ImageDraw, x: int, y: int, size: int = 100) -> None:
    r = 18
    draw.rounded_rectangle([x, y, x + size, y + size], radius=r, outline=INK, width=4)
    fold = 24
    draw.polygon(
        [
            (x + size - fold, y + size),
            (x + size, y + size - fold),
            (x + size, y + size),
        ],
        fill=CREAM,
    )
    draw.line(
        [
            (x + size - fold, y + size),
            (x + size - fold, y + size - fold),
            (x + size, y + size - fold),
        ],
        fill=INK,
        width=3,
    )
    fnt = font("Inter-Bold.ttf", 38)
    label = "BBE"
    tw, th = text_size(draw, label, fnt)
    draw.text((x + (size - tw) / 2, y + (size - th) / 2 - 2), label, font=fnt, fill=INK)


def draw_check(draw: ImageDraw.ImageDraw, x: int, y: int, color: tuple[int, int, int]) -> None:
    draw.line([(x, y + 12), (x + 9, y + 21), (x + 26, y)], fill=color, width=4)


def draw_card(
    canvas: Image.Image,
    *,
    cx: int,
    top: int,
    tag: str,
    accent: tuple[int, int, int],
    title: str,
    bullets: list[str],
    width: int = 820,
    height: int = 780,
) -> None:
    """Card kept inside one tile (safe margin from slice edges)."""
    draw = ImageDraw.Draw(canvas)
    left = cx - width // 2

    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle(
        [left + 10, top + 12, left + width + 10, top + height + 12],
        radius=30,
        fill=(0, 0, 0, 30),
    )
    canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(14)))

    draw.rounded_rectangle(
        [left, top, left + width, top + height],
        radius=30,
        fill=CARD,
        outline=CARD_BORDER,
        width=2,
    )

    tag_f = font("Inter-Bold.ttf", 30)
    tw, th = text_size(draw, tag, tag_f)
    pad_x, pad_y = 20, 12
    tag_w, tag_h = tw + pad_x * 2, th + pad_y * 2
    tag_x, tag_y = left + 44, top + 44
    draw.rounded_rectangle(
        [tag_x, tag_y, tag_x + tag_w, tag_y + tag_h],
        radius=8,
        fill=accent,
    )
    draw.text((tag_x + pad_x, tag_y + pad_y - 2), tag, font=tag_f, fill=(255, 255, 255))

    title_f = font("Inter-Bold.ttf", 52)
    draw.text((left + 44, top + 130), title, font=title_f, fill=INK)
    draw.line([(left + 44, top + 210), (left + width - 44, top + 210)], fill=CARD_BORDER, width=2)

    bullet_f = font("Inter-Medium.ttf", 34)
    y = top + 260
    for bullet in bullets:
        draw_check(draw, left + 48, y + 6, accent)
        draw.text((left + 92, y), bullet, font=bullet_f, fill=INK)
        y += 88


def build_full_banner() -> Image.Image:
    """Compose the entire poster as ONE image (never per-tile)."""
    base = Image.new("RGB", (W, H), CREAM)
    for path in BG_CANDIDATES:
        if path.exists():
            wash = cover_resize(Image.open(path).convert("RGB"), W, H)
            wash = ImageEnhance.Brightness(wash).enhance(1.08)
            wash = ImageEnhance.Color(wash).enhance(0.5)
            base = Image.blend(base, wash, 0.5)
            break

    canvas = draw_architecture(base)
    draw = ImageDraw.Draw(canvas)

    # --- shared header (once, across the full width) ---
    title_f = font("Inter-Bold.ttf", 84)
    sub_f = font("Inter-Medium.ttf", 38)
    title = "Preparation Courses"
    tw, _ = text_size(draw, title, title_f)
    draw.text(((W - tw) / 2, 70), title, font=title_f, fill=INK)

    sub = "WU Vienna entrance exam prep"
    sw, _ = text_size(draw, sub, sub_f)
    draw.text(((W - sw) / 2, 180), sub, font=sub_f, fill=MUTED)

    # continuous rule under header
    draw.line([(120, 250), (W - 120, 250)], fill=(200, 196, 188), width=2)

    # logo once — top-right of the full banner (lands in tile 3)
    draw_logo(draw, W - 48 - 100, 56, size=100)

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

    # Cards centered in each third — margins keep them clear of slice edges
    card_top = 300
    for i, card in enumerate(cards):
        cx = i * TILE_W + TILE_W // 2
        draw_card(
            canvas,
            cx=cx,
            top=card_top,
            tag=card["tag"],
            accent=card["accent"],
            title=card["title"],
            bullets=card["bullets"],
            width=820,
            height=780,
        )

    # shared footer once
    url_f = font("Inter-Medium.ttf", 30)
    url = "bbe-school.com"
    uw, _ = text_size(draw, url, url_f)
    draw.text(((W - uw) / 2, H - 70), url, font=url_f, fill=MUTED)

    return canvas.convert("RGB")


def slice_equal_thirds(full: Image.Image) -> list[Image.Image]:
    """Strict equal vertical slices — no gaps, no guides, no re-layout."""
    assert full.size == (W, H), full.size
    return [full.crop((i * TILE_W, 0, (i + 1) * TILE_W, H)) for i in range(3)]


def build() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    # 1) Create the full poster first
    full = build_full_banner()
    full.save(OUT / "bbe-prep-courses-banner-full.png", "PNG", optimize=True)
    full.save(OUT / "bbe-prep-courses-banner-full.jpg", "JPEG", quality=95, optimize=True)

    # 2) Slice into 3 equal portrait tiles
    tiles = slice_equal_thirds(full)
    stems = [
        "01-bbe-full-course",
        "02-wiso-full-course",
        "03-demo-access",
    ]
    for stem, tile in zip(stems, tiles, strict=True):
        assert tile.size == (TILE_W, TILE_H), tile.size
        tile.save(OUT / f"{stem}.png", "PNG", optimize=True)
        tile.save(OUT / f"{stem}.jpg", "JPEG", quality=95, optimize=True)

    # Preview with Instagram-like gaps (visual only — not used for posting)
    gap = 14
    preview = Image.new("RGB", (W + 2 * gap, H), (235, 233, 228))
    for i, tile in enumerate(tiles):
        preview.paste(tile, (i * (TILE_W + gap), 0))
    preview.save(OUT / "preview-grid-with-gaps.jpg", "JPEG", quality=92)

    print(f"Full banner: {full.size} → 3 × {TILE_W}×{TILE_H}")
    print(f"Wrote assets to {OUT}")
    for p in sorted(OUT.iterdir()):
        if p.suffix.lower() in {".png", ".jpg"}:
            im = Image.open(p)
            print(f"  {p.name}: {im.size}")


if __name__ == "__main__":
    build()
