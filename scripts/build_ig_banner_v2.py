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
SITE_LOGO = ROOT / "public" / "logo.png"  # same asset as bbe-school.com/logo.png
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


def ink_bbox(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont) -> tuple[int, int, int, int]:
    """Return (x0, y0, x1, y1) of glyph ink relative to (0,0)."""
    return draw.textbbox((0, 0), text, font=font)


def draw_centered(
    draw: ImageDraw.ImageDraw,
    cx: float,
    cy: float,
    text: str,
    font: ImageFont.ImageFont,
    fill: tuple[int, int, int],
) -> tuple[int, int]:
    """Draw text with ink box centered on (cx, cy). Returns (ink_w, ink_h)."""
    x0, y0, x1, y1 = ink_bbox(draw, text, font)
    tw, th = x1 - x0, y1 - y0
    draw.text((cx - tw / 2 - x0, cy - th / 2 - y0), text, font=font, fill=fill)
    return tw, th


def site_logo(size: int = 72) -> Image.Image:
    """Site BBE logo from public/logo.png — just resized for the banner."""
    im = Image.open(SITE_LOGO).convert("RGBA")
    return im.resize((size, size), Image.Resampling.LANCZOS)


def paste_logo(canvas: Image.Image, x: int, y: int, size: int = 72) -> None:
    if canvas.mode != "RGBA":
        raise ValueError("canvas must be RGBA to paste logo")
    canvas.alpha_composite(site_logo(size), (x, y))


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
    title_f = F("Inter-Bold.ttf", 56)
    body_f = F("Inter-Medium.ttf", 40)

    GAP_TAG = 28
    GAP_TITLE = 28
    GAP_RULE = 36
    ROW = 92
    CHECK_W = 44
    CHECK_H = 28
    TAG_BX, TAG_BY = 24, 12
    cx = left + CARD_W / 2  # horizontal center of card

    # --- measure ink boxes ---
    tag_x0, tag_y0, tag_x1, tag_y1 = ink_bbox(draw, tag, tag_f)
    tag_tw, tag_th = tag_x1 - tag_x0, tag_y1 - tag_y0
    tag_box_w = tag_tw + TAG_BX * 2
    tag_box_h = tag_th + TAG_BY * 2

    title_x0, title_y0, title_x1, title_y1 = ink_bbox(draw, title, title_f)
    title_w = title_x1 - title_x0
    title_h = title_y1 - title_y0

    bullet_meta: list[tuple[str, int, int, int, int]] = []
    for b in bullets:
        bx0, by0, bx1, by1 = ink_bbox(draw, b, body_f)
        bullet_meta.append((b, bx0, by0, bx1 - bx0, by1 - by0))
    bullet_h = max(h for *_, h in bullet_meta)
    list_w = CHECK_W + max(w for *_, w, _h in bullet_meta)
    list_h = (len(bullets) - 1) * ROW + bullet_h
    content_h = tag_box_h + GAP_TAG + title_h + GAP_TITLE + 2 + GAP_RULE + list_h

    # Geometric center + small optical nudge (header weight reads high)
    y = top + (CARD_H - content_h) // 2 + 16

    # Tag — centered
    tag_x = int(round(cx - tag_box_w / 2))
    draw.rounded_rectangle(
        [tag_x, y, tag_x + tag_box_w, y + tag_box_h],
        radius=8,
        fill=accent,
    )
    draw_centered(draw, cx, y + tag_box_h / 2, tag, tag_f, WHITE)
    y += tag_box_h + GAP_TAG

    # Title — centered
    draw_centered(draw, cx, y + title_h / 2, title, title_f, INK)
    y += title_h + GAP_TITLE

    # Rule — centered under title, width from content column
    rule_w = max(int(title_w * 1.05), int(list_w * 0.92), int(CARD_W * 0.55))
    rule_w = min(rule_w, int(CARD_W * 0.78))
    draw.line([(cx - rule_w / 2, y), (cx + rule_w / 2, y)], fill=BORDER, width=2)
    y += 2 + GAP_RULE

    # Bullets — ONE left-aligned column, column itself centered in the card
    # (so checkmarks form a straight vertical line — "ровно")
    col_left = int(round(cx - list_w / 2))
    for b, bx0, by0, _bw, bh in bullet_meta:
        check_y = y + max(0, (bh - CHECK_H) // 2)
        check(draw, col_left, check_y, accent)
        draw.text((col_left + CHECK_W - bx0, y - by0), b, font=body_f, fill=INK)
        y += ROW


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
        card(canvas, left, TOP, tag, accent, title, bullets)

    # Header — centered on full banner, vertically centered in top band
    title_f = F("Inter-Bold.ttf", 52)
    sub_f = F("Inter-Medium.ttf", 26)
    t = "Preparation Courses"
    tw, th = measure(draw, t, title_f)
    s = "WU Vienna entrance exam prep"
    sw, sh = measure(draw, s, sub_f)
    block_h = th + 8 + sh
    title_y = (TOP - block_h) // 2
    draw.text(((W - tw) / 2 + 2, title_y + 2), t, font=title_f, fill=(0, 0, 0, 140))
    draw.text(((W - tw) / 2, title_y), t, font=title_f, fill=WHITE)
    draw.text(((W - sw) / 2, title_y + th + 8), s, font=sub_f, fill=MUTED)

    # Site BBE logo pasted on every tile (public/logo.png)
    LOGO = 72
    logo_y = (TOP - LOGO) // 2
    for i in range(3):
        logo_x = i * TILE + TILE - SIDE - LOGO
        paste_logo(canvas, logo_x, logo_y, LOGO)

    # Footer centered in bottom margin
    url_f = F("Inter-Medium.ttf", 24)
    u = "bbe-school.com"
    uw, uh = measure(draw, u, url_f)
    url_y = TOP + CARD_H + (BOTTOM - uh) // 2
    draw.text(((W - uw) / 2, url_y), u, font=url_f, fill=MUTED)

    return canvas.convert("RGB")


def verify(full: Image.Image) -> None:
    arr = np.asarray(full)
    # WiSo tile = middle — look only in expected card band (ignore logos above)
    tile = arr[TOP : TOP + CARD_H, TILE + SIDE : TILE + SIDE + CARD_W]
    white = (tile[:, :, 0] > 245) & (tile[:, :, 1] > 245) & (tile[:, :, 2] > 245)
    assert white.mean() > 0.7, white.mean()

    # Layout constants
    print(f"layout TOP={TOP} BOTTOM={BOTTOM} SIDE={SIDE} CARD={CARD_W}x{CARD_H}")
    assert TOP == BOTTOM
    assert SIDE == (TILE - CARD_W) // 2 or abs(2 * SIDE + CARD_W - TILE) <= 1

    # WiSo blue accent somewhere in card (centered content)
    blue_mask = (
        (tile[:, :, 2] > 150)
        & (tile[:, :, 0] < 40)
        & (tile[:, :, 2] > tile[:, :, 1] + 20)
    )
    blues = tile[blue_mask]
    assert len(blues) > 100, len(blues)
    mean = blues.mean(0)
    print(f"WiSo accent mean RGB = {mean.astype(int)} (n={len(blues)})")
    assert mean[2] > mean[0] + 80, mean
    assert mean[0] < 40, mean

    # Site logo pasted — dark square with white BBE letters
    LOGO = 72
    for i in range(3):
        logo_x = i * TILE + TILE - SIDE - LOGO
        logo_y = (TOP - LOGO) // 2
        patch = arr[logo_y : logo_y + LOGO, logo_x : logo_x + LOGO]
        dark = (patch[:, :, 0] < 40) & (patch[:, :, 1] < 40) & (patch[:, :, 2] < 40)
        letters = (patch[:, :, 0] > 200) & (patch[:, :, 1] > 200) & (patch[:, :, 2] > 200)
        print(
            f"logo tile{i} at ({logo_x},{logo_y}) "
            f"dark={dark.mean():.2f} letters={letters.mean():.2f}"
        )
        assert dark.mean() > 0.55, dark.mean()
        assert letters.mean() > 0.05, letters.mean()
        # corner of site logo is solid black
        assert arr[logo_y + 2, logo_x + 2].max() < 40

    # Content block centered inside each card (ignore border ring)
    inset = 24
    for i, name in enumerate(["BBE", "WiSo", "Demo"]):
        card = arr[
            TOP + inset : TOP + CARD_H - inset,
            i * TILE + SIDE + inset : i * TILE + SIDE + CARD_W - inset,
        ]
        ink = ~((card[:, :, 0] > 245) & (card[:, :, 1] > 245) & (card[:, :, 2] > 245))
        ys, xs = np.where(ink)
        assert len(xs) > 200, (name, len(xs))
        inner_w = CARD_W - 2 * inset
        inner_h = CARD_H - 2 * inset
        left_pad = int(xs.min())
        right_pad = int(inner_w - 1 - xs.max())
        top_pad = int(ys.min())
        bot_pad = int(inner_h - 1 - ys.max())
        print(
            f"{name} card pads L/R={left_pad}/{right_pad} T/B={top_pad}/{bot_pad} "
            f"ink_cx={xs.mean():.1f} (mid={inner_w/2:.1f})"
        )
        # L/R pads of the content column must match (checkmarks form a straight edge)
        assert abs(left_pad - right_pad) <= 12, (name, left_pad, right_pad)
        # +28 optical nudge → bottom pad slightly smaller than top; still even-ish
        assert top_pad > 140 and bot_pad > 140, (name, top_pad, bot_pad)
        assert abs(top_pad - bot_pad) <= 50, (name, top_pad, bot_pad)
        # ink mean can sit left of mid because checks are left of text — pads matter more
        assert abs(xs.mean() - inner_w / 2) <= 40, (name, xs.mean())
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
