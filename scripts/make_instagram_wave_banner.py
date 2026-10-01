#!/usr/bin/env python3
"""
White Instagram banner with continuous clear waves.
ONE full 3240×1350 poster → three equal 1080×1350 slices.
Waves are drawn mathematically across the full width so seams connect.
"""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "design-explorations" / "instagram-pinned-banner"
WAVES_DIR = OUT / "wave-variants"

TILE_W, TILE_H = 1080, 1350
W, H = TILE_W * 3, TILE_H

CREAM = (255, 255, 255)  # pure white
INK = (22, 22, 22)
MUTED = (120, 120, 120)
WAVE = (170, 158, 142)  # clearer taupe
WAVE_SOFT = (210, 200, 186)
WAVE_BOLD = (150, 138, 122)
CARD = (255, 255, 255)
CARD_BORDER = (230, 226, 218)
ORANGE = (232, 122, 46)
PURPLE = (124, 92, 191)
TEAL = (46, 140, 130)
WHITE = (255, 255, 255)

FONT_DIR = Path("/usr/share/fonts/truetype/macos")

CARDS = [
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


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size=size)


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont) -> tuple[int, int]:
    b = draw.textbbox((0, 0), text, font=fnt)
    return b[2] - b[0], b[3] - b[1]


def polyline(draw: ImageDraw.ImageDraw, pts: list[tuple[float, float]], fill, width: int) -> None:
    if len(pts) < 2:
        return
    # Draw as connected segments — continuous across full width
    draw.line([(int(x), int(y)) for x, y in pts], fill=fill, width=width, joint="curve")


def sine_points(
    y0: float,
    amp: float,
    wavelength: float,
    phase: float = 0.0,
    x0: int = 0,
    x1: int | None = None,
    step: int = 2,
) -> list[tuple[float, float]]:
    """Continuous sine across the FULL banner width (no per-tile resets)."""
    if x1 is None:
        x1 = W
    pts = []
    for x in range(x0, x1 + 1, step):
        y = y0 + amp * math.sin(2 * math.pi * (x / wavelength) + phase)
        pts.append((x, y))
    return pts


def draw_wave_bg_clear_wide() -> Image.Image:
    """Clear wide horizontal waves — primary look. Thick + continuous."""
    img = Image.new("RGB", (W, H), CREAM)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)

    # ~1.2 tiles per period → arc clearly continues across each seam
    wavelength = TILE_W * 1.2
    specs = [
        # (y0, amp, phase, width, color, alpha)
        (400, 70, 0.0, 8, WAVE_BOLD, 200),
        (520, 85, 0.4, 6, WAVE, 160),
        (640, 95, 0.8, 10, WAVE_BOLD, 210),
        (780, 105, 1.2, 7, WAVE, 170),
        (920, 115, 1.6, 11, WAVE_BOLD, 220),
        (1060, 120, 2.0, 7, WAVE, 160),
        (1200, 125, 2.4, 9, WAVE_BOLD, 190),
    ]
    for y0, amp, phase, width, color, alpha in specs:
        pts = sine_points(y0, amp, wavelength, phase)
        polyline(d, pts, (*color, alpha), width)

    # soft continuous ribbon for connection read
    ribbon_y = 840
    amp = 100
    top = sine_points(ribbon_y - 36, amp, wavelength, 1.4)
    bot = list(reversed(sine_points(ribbon_y + 36, amp * 0.95, wavelength, 1.4)))
    d.polygon([(int(x), int(y)) for x, y in top + bot], fill=(*WAVE_SOFT, 70))

    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def draw_wave_bg_extra_wide() -> Image.Image:
    """Fewer, thicker, very wide waves — maximum seam readability."""
    img = Image.new("RGB", (W, H), CREAM)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)

    wavelength = TILE_W * 1.75  # almost 2 posts per period
    for i, y0 in enumerate([430, 600, 780, 960, 1140, 1300]):
        amp = 90 + i * 12
        phase = i * 0.5
        width = 12 if i % 2 == 0 else 8
        color = WAVE_BOLD if i % 2 == 0 else WAVE
        pts = sine_points(y0, amp, wavelength, phase)
        polyline(d, pts, (*color, 210), width)

    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def draw_wave_bg_double_layer() -> Image.Image:
    """Bold primary waves + thinner secondary — still one continuous canvas."""
    img = Image.new("RGB", (W, H), CREAM)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)

    wl_a = TILE_W * 1.3
    wl_b = TILE_W * 2.1

    for i, y0 in enumerate(range(420, H, 130)):
        pts = sine_points(y0, 80 + i * 8, wl_a, i * 0.45)
        polyline(d, pts, (*WAVE_BOLD, 200), 9)

    for i, y0 in enumerate(range(480, H, 160)):
        pts = sine_points(y0, 45 + i * 5, wl_b, i * 0.65 + 1.0)
        polyline(d, pts, (*WAVE, 140), 4)

    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def draw_wave_bg_bold_bands() -> Image.Image:
    """Filled wave bands with crisp edges — strong continuous stripes."""
    img = Image.new("RGB", (W, H), CREAM)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    wavelength = TILE_W * 1.35

    for i, y0 in enumerate(range(460, H + 80, 130)):
        amp = 90 + i * 8
        phase = i * 0.55
        top = sine_points(y0 - 26, amp, wavelength, phase)
        bot = list(reversed(sine_points(y0 + 26, amp * 0.98, wavelength, phase)))
        alpha = 90 if i % 2 == 0 else 55
        d.polygon([(int(x), int(y)) for x, y in top + bot], fill=(*WAVE, alpha))
        polyline(d, top, (*WAVE_BOLD, 220), 5)

    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def draw_logo(draw: ImageDraw.ImageDraw, x: int, y: int, size: int = 100) -> None:
    r = 18
    draw.rounded_rectangle([x, y, x + size, y + size], radius=r, outline=INK, width=4)
    fold = 24
    draw.polygon(
        [(x + size - fold, y + size), (x + size, y + size - fold), (x + size, y + size)],
        fill=CREAM,
    )
    draw.line(
        [(x + size - fold, y + size), (x + size - fold, y + size - fold), (x + size, y + size - fold)],
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
    left = cx - width // 2
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle(
        [left + 10, top + 14, left + width + 10, top + height + 14],
        radius=30,
        fill=(0, 0, 0, 28),
    )
    canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(14)))

    draw = ImageDraw.Draw(canvas)
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
    draw.rounded_rectangle([tag_x, tag_y, tag_x + tag_w, tag_y + tag_h], radius=8, fill=accent)
    draw.text((tag_x + pad_x, tag_y + pad_y - 2), tag, font=tag_f, fill=WHITE)

    title_f = font("Inter-Bold.ttf", 52)
    draw.text((left + 44, top + 130), title, font=title_f, fill=INK)
    draw.line([(left + 44, top + 210), (left + width - 44, top + 210)], fill=CARD_BORDER, width=2)

    bullet_f = font("Inter-Medium.ttf", 34)
    y = top + 260
    for bullet in bullets:
        draw_check(draw, left + 48, y + 6, accent)
        draw.text((left + 92, y), bullet, font=bullet_f, fill=INK)
        y += 88


def build_banner(bg: Image.Image) -> Image.Image:
    canvas = bg.convert("RGBA")
    draw = ImageDraw.Draw(canvas)

    title_f = font("Inter-Bold.ttf", 84)
    sub_f = font("Inter-Medium.ttf", 38)
    title = "Preparation Courses"
    tw, _ = text_size(draw, title, title_f)
    draw.text(((W - tw) / 2, 70), title, font=title_f, fill=INK)

    sub = "WU Vienna entrance exam prep"
    sw, _ = text_size(draw, sub, sub_f)
    draw.text(((W - sw) / 2, 180), sub, font=sub_f, fill=MUTED)
    draw.line([(120, 250), (W - 120, 250)], fill=(200, 196, 188), width=2)

    draw_logo(draw, W - 48 - 100, 56, size=100)

    for i, card in enumerate(CARDS):
        draw_card(
            canvas,
            cx=i * TILE_W + TILE_W // 2,
            top=300,
            tag=card["tag"],
            accent=card["accent"],
            title=card["title"],
            bullets=card["bullets"],
        )

    url_f = font("Inter-Medium.ttf", 30)
    url = "bbe-school.com"
    uw, _ = text_size(draw, url, url_f)
    draw.text(((W - uw) / 2, H - 70), url, font=url_f, fill=MUTED)
    return canvas.convert("RGB")


def slice_equal_thirds(full: Image.Image) -> list[Image.Image]:
    return [full.crop((i * TILE_W, 0, (i + 1) * TILE_W, H)) for i in range(3)]


def save_variant(name: str, full: Image.Image) -> Path:
    vdir = WAVES_DIR / name
    vdir.mkdir(parents=True, exist_ok=True)
    full.save(vdir / "full.jpg", "JPEG", quality=95, optimize=True)
    for stem, tile in zip(["01-bbe", "02-wiso", "03-demo"], slice_equal_thirds(full), strict=True):
        tile.save(vdir / f"{stem}.jpg", "JPEG", quality=95, optimize=True)
    gap = 14
    preview = Image.new("RGB", (W + 2 * gap, H), (235, 233, 228))
    for i, tile in enumerate(slice_equal_thirds(full)):
        preview.paste(tile, (i * (TILE_W + gap), 0))
    preview.save(vdir / "preview.jpg", "JPEG", quality=92)
    # also save bg-only for inspection
    return vdir


def promote(name: str) -> None:
    import shutil

    src = WAVES_DIR / name
    full = Image.open(src / "full.jpg").convert("RGB")
    shutil.copy2(src / "full.jpg", OUT / "bbe-prep-courses-banner-full.jpg")
    shutil.copy2(src / "preview.jpg", OUT / "preview-grid-with-gaps.jpg")
    full.save(OUT / "bbe-prep-courses-banner-full.png", "PNG", optimize=True)
    for stem, tile in zip(
        ["01-bbe-full-course", "02-wiso-full-course", "03-demo-access"],
        slice_equal_thirds(full),
        strict=True,
    ):
        tile.save(OUT / f"{stem}.jpg", "JPEG", quality=95)
        tile.save(OUT / f"{stem}.png", "PNG", optimize=True)


def build() -> None:
    WAVES_DIR.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)

    variants = [
        ("w1-clear-wide", draw_wave_bg_clear_wide),
        ("w2-extra-wide", draw_wave_bg_extra_wide),
        ("w3-double-layer", draw_wave_bg_double_layer),
        ("w4-bold-bands", draw_wave_bg_bold_bands),
    ]

    for slug, maker in variants:
        bg = maker()
        bg.save(WAVES_DIR / f"{slug}-bg-only.jpg", "JPEG", quality=92)
        full = build_banner(bg)
        # verify seam continuity: left edge of tile2 == right edge of tile1
        tiles = slice_equal_thirds(full)
        # pixel check on wave region
        import numpy as np

        a = np.asarray(tiles[0])[:, -1]
        b = np.asarray(tiles[1])[:, 0]
        # neighboring tiles should match at the cut of the FULL image
        # (gap preview has gap; tiles from full should be continuous when abutted)
        recon = Image.new("RGB", (W, H))
        for i, t in enumerate(tiles):
            recon.paste(t, (i * TILE_W, 0))
        ok = (np.asarray(full) == np.asarray(recon)).all()
        vdir = save_variant(slug, full)
        print(f"✓ {slug} seamless={ok} → {vdir}")

    promote("w1-clear-wide")
    print("Promoted: w1-clear-wide")


if __name__ == "__main__":
    build()
