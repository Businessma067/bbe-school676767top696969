#!/usr/bin/env python3
"""
Build Instagram 3-pin banner FROM SCRATCH.

One canvas 3240×1350 → three equal 1080×1350 tiles.
- Daytime WU campus background
- White cards geometrically centered in each tile
- WiSo accent = true blue (R=0)
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "design-explorations" / "instagram-pinned-banner"
BG_CANDIDATES = [
    Path("/opt/cursor/artifacts/assets/wu-bg-llc-day-match.jpg"),
    Path("/opt/cursor/artifacts/assets/wu-bg-llc-day.jpg"),
    ROOT / "public" / "wu-vienna" / "campus-plaza.jpg",
]

TILE = 1080
H = 1350
W = TILE * 3

# Exact layout — card centered in each 1080×1350 tile
SIDE = 52
CARD_W = TILE - 2 * SIDE  # 976
CARD_H = 980
TOP = (H - CARD_H) // 2  # 185
BOTTOM = H - TOP - CARD_H  # 185  ← equal

PAD = 52
ORANGE = (234, 112, 36)
BLUE = (0, 114, 206)  # true blue, R=0
TEAL = (20, 140, 128)
INK = (20, 20, 20)
MUTED = (170, 170, 170)
WHITE = (255, 255, 255)
CARD_BG = (255, 255, 255)
BORDER = (228, 228, 228)

FONT_DIR = Path("/usr/share/fonts/truetype/macos")


def F(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size)


def measure(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont) -> tuple[int, int]:
    b = draw.textbbox((0, 0), text, font=font)
    return b[2] - b[0], b[3] - b[1]


def cover(im: Image.Image, tw: int, th: int) -> Image.Image:
    iw, ih = im.size
    s = max(tw / iw, th / ih)
    nw, nh = int(iw * s), int(ih * s)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    x, y = (nw - tw) // 2, (nh - th) // 2
    return im.crop((x, y, x + tw, y + th))


def make_bg() -> Image.Image:
    src = next(p for p in BG_CANDIDATES if p.exists())
    im = cover(Image.open(src).convert("RGB"), W, H)
    im = ImageEnhance.Brightness(im).enhance(0.86)
    im = ImageEnhance.Contrast(im).enhance(1.06)
    im = ImageEnhance.Color(im).enhance(1.05)

    # Soft top/bottom fades for type only — keep daytime look
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for y in range(0, 220):
        a = int(140 * (1 - y / 220))
        d.line([(0, y), (W, y)], fill=(0, 0, 0, a))
    for y in range(H - 100, H):
        a = int(100 * ((y - (H - 100)) / 100))
        d.line([(0, y), (W, y)], fill=(0, 0, 0, a))
    return Image.alpha_composite(im.convert("RGBA"), overlay).convert("RGB")


def logo(draw: ImageDraw.ImageDraw, x: int, y: int, size: int = 70) -> None:
    draw.rounded_rectangle([x, y, x + size, y + size], radius=14, outline=WHITE, width=3)
    f = F("Inter-Bold.ttf", 28)
    tw, th = measure(draw, "BBE", f)
    draw.text((x + (size - tw) / 2, y + (size - th) / 2 - 1), "BBE", font=f, fill=WHITE)


def check(draw: ImageDraw.ImageDraw, x: int, y: int, color: tuple[int, int, int]) -> None:
    draw.line([(x, y + 14), (x + 11, y + 25), (x + 30, y + 1)], fill=color, width=5)


def card(
    canvas: Image.Image,
    left: int,
    top: int,
    tag: str,
    accent: tuple[int, int, int],
    title: str,
    bullets: list[str],
) -> None:
    # shadow
    sh = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(sh)
    sd.rounded_rectangle(
        [left + 8, top + 12, left + CARD_W + 8, top + CARD_H + 12],
        radius=28,
        fill=(0, 0, 0, 80),
    )
    canvas.alpha_composite(sh.filter(ImageFilter.GaussianBlur(14)))

    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.rounded_rectangle(
        [left, top, left + CARD_W, top + CARD_H],
        radius=28,
        fill=(*CARD_BG, 255),
        outline=(*BORDER, 255),
        width=2,
    )
    canvas.alpha_composite(layer)
    draw = ImageDraw.Draw(canvas)

    tag_f = F("Inter-Bold.ttf", 34)
    title_f = F("Inter-Bold.ttf", 58)
    body_f = F("Inter-Medium.ttf", 40)

    # Fixed vertical rhythm from top of card (same on all three)
    x0 = left + PAD
    y = top + PAD

    # tag
    tw, th = measure(draw, tag, tag_f)
    bx, by = 22, 10
    draw.rounded_rectangle([x0, y, x0 + tw + bx * 2, y + th + by * 2], radius=8, fill=accent)
    draw.text((x0 + bx, y + by - 1), tag, font=tag_f, fill=WHITE)
    y += th + by * 2 + 28

    # title
    draw.text((x0, y), title, font=title_f, fill=INK)
    _, title_h = measure(draw, title, title_f)
    y += title_h + 26

    # rule
    draw.line([(x0, y), (left + CARD_W - PAD, y)], fill=BORDER, width=2)
    y += 36

    # bullets — equal spacing
    row = 96
    for b in bullets:
        _, bh = measure(draw, b, body_f)
        check(draw, x0, y + max(0, (bh - 28) // 2), accent)
        draw.text((x0 + 48, y), b, font=body_f, fill=INK)
        y += row


def build() -> Image.Image:
    canvas = make_bg().convert("RGBA")
    draw = ImageDraw.Draw(canvas)

    cards = [
        ("BBE", ORANGE, "Full BBE Course", [
            "Economics • Math • English",
            "6 mock exams",
            "3300+ questions",
            "Full preparation materials",
        ]),
        ("WiSo", BLUE, "Full WiSo Course", [
            "Wirtschaft • Math • German",
            "6 mock exams",
            "2500+ questions",
            "Full preparation materials",
        ]),
        ("DEMO", TEAL, "Demo Access", [
            "100+ Free practice tasks",
            "Sample mock exam",
            "Try BBE & WiSo tracks",
            "No credit card required",
        ]),
    ]

    # Three identical cards — same TOP, same size, equal SIDE in each tile
    for i, (tag, accent, title, bullets) in enumerate(cards):
        left = i * TILE + SIDE
        assert left + CARD_W == i * TILE + TILE - SIDE
        card(canvas, left, TOP, tag, accent, title, bullets)

    # Header in top margin band (above cards)
    title_f = F("Inter-Bold.ttf", 52)
    sub_f = F("Inter-Medium.ttf", 26)
    t = "Preparation Courses"
    tw, th = measure(draw, t, title_f)
    title_y = max(18, (TOP - th - 34) // 2)
    draw.text(((W - tw) / 2 + 2, title_y + 2), t, font=title_f, fill=(0, 0, 0, 140))
    draw.text(((W - tw) / 2, title_y), t, font=title_f, fill=WHITE)
    s = "WU Vienna entrance exam prep"
    sw, sh = measure(draw, s, sub_f)
    draw.text(((W - sw) / 2, title_y + th + 8), s, font=sub_f, fill=MUTED)

    logo(draw, W - SIDE - 70, max(16, (TOP - 70) // 2), 70)

    # Footer centered in bottom margin
    url_f = F("Inter-Medium.ttf", 24)
    u = "bbe-school.com"
    uw, uh = measure(draw, u, url_f)
    url_y = TOP + CARD_H + (BOTTOM - uh) // 2
    draw.text(((W - uw) / 2, url_y), u, font=url_f, fill=MUTED)

    return canvas.convert("RGB")


def verify(full: Image.Image) -> None:
    arr = np.asarray(full)
    # WiSo tile = middle
    tile = arr[:, TILE : 2 * TILE]
    # Find white card bounds
    white = (tile[:, :, 0] > 245) & (tile[:, :, 1] > 245) & (tile[:, :, 2] > 245)
    rows = np.where(white.mean(axis=1) > 0.3)[0]
    cols = np.where(white.mean(axis=0) > 0.25)[0]
    top_m = int(rows.min())
    bot_m = H - 1 - int(rows.max())
    left_m = int(cols.min())
    right_m = TILE - 1 - int(cols.max())
    print(f"card margins top={top_m} bottom={bot_m} left={left_m} right={right_m}")
    assert abs(top_m - bot_m) <= 3, (top_m, bot_m)
    assert abs(left_m - right_m) <= 3, (left_m, right_m)

    # WiSo badge color — must be blue with low red
    badge = tile[top_m + 40 : top_m + 100, left_m + 40 : left_m + 160]
    sat = badge[(badge.max(2) - badge.min(2)) > 60]
    sat = sat[sat.mean(1) < 200]
    mean = sat.mean(0)
    print(f"WiSo accent mean RGB = {mean.astype(int)} (R should be near 0, B highest)")
    assert mean[2] > mean[0] + 80, mean
    assert mean[0] < 40, mean
    print("VERIFY OK")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    fresh = OUT / "v2-fresh"
    fresh.mkdir(parents=True, exist_ok=True)

    full = build()
    verify(full)

    full.save(fresh / "full.jpg", "JPEG", quality=95)
    full.save(OUT / "bbe-prep-courses-banner-full.jpg", "JPEG", quality=95)
    full.save(OUT / "bbe-prep-courses-banner-full.png", "PNG", optimize=True)

    names = ["01-bbe-full-course", "02-wiso-full-course", "03-demo-access"]
    for i, name in enumerate(names):
        tile = full.crop((i * TILE, 0, (i + 1) * TILE, H))
        tile.save(fresh / f"{name}.jpg", "JPEG", quality=95)
        tile.save(OUT / f"{name}.jpg", "JPEG", quality=95)
        tile.save(OUT / f"{name}.png", "PNG", optimize=True)

    gap = 14
    preview = Image.new("RGB", (W + 2 * gap, H), (24, 24, 26))
    for i in range(3):
        tile = full.crop((i * TILE, 0, (i + 1) * TILE, H))
        preview.paste(tile, (i * (TILE + gap), 0))
    preview.save(fresh / "preview.jpg", "JPEG", quality=92)
    preview.save(OUT / "preview-grid-with-gaps.jpg", "JPEG", quality=92)

    print(f"Wrote fresh set to {fresh}")
    print(f"Also updated {OUT}")


if __name__ == "__main__":
    main()
