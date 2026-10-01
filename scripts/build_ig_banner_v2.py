#!/usr/bin/env python3
"""
Build Instagram 3-pin banner — 1080×1440 (3:4) profile-grid format.

Compact white cards sized to content so the campus photo stays visible
around them (not a full-bleed white slab).
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "design-explorations" / "instagram-pinned-banner"
SITE_LOGO = ROOT / "public" / "logo.png"
BG_CANDIDATES = [
    Path("/opt/cursor/artifacts/assets/wu-bg-llc-day-match.jpg"),
    Path("/opt/cursor/artifacts/assets/wu-bg-llc-day.jpg"),
    ROOT / "public" / "wu-vienna" / "campus-plaza.jpg",
]

# Instagram profile grid = 3:4
TILE = 1080
H = 1440
W = TILE * 3
assert TILE * 4 == H * 3

# Compact card — campus shows on all sides
SIDE = 100
PAD_X = 52
PAD_Y = 48
HEADER = 130
FOOTER = 72
LOGO = 68
LOGO_INSET = 40  # equal distance from top-right corner on every tile

ORANGE = (234, 112, 36)
BLUE = (0, 114, 206)
TEAL = (20, 140, 128)
INK = (20, 20, 20)
MUTED = (190, 190, 190)
WHITE = (255, 255, 255)
CARD_BG = (255, 255, 255)
BORDER = (228, 228, 228)

FONT_DIR = Path("/usr/share/fonts/truetype/macos")

# Filled in build() after measuring content — same size for all 3 cards
CARD_W = 0
CARD_H = 0
TOP = 0


def F(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size)


def measure(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont) -> tuple[int, int]:
    b = draw.textbbox((0, 0), text, font=font)
    return b[2] - b[0], b[3] - b[1]


def ink_bbox(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont) -> tuple[int, int, int, int]:
    return draw.textbbox((0, 0), text, font=font)


def cover(im: Image.Image, tw: int, th: int) -> Image.Image:
    iw, ih = im.size
    s = max(tw / iw, th / ih)
    nw, nh = int(iw * s), int(ih * s)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    x, y = (nw - tw) // 2, (nh - th) // 2
    return im.crop((x, y, x + tw, y + th))


def make_tile_bg() -> Image.Image:
    """One LLC crop at tile size — same photo on every pin."""
    src = next(p for p in BG_CANDIDATES if p.exists())
    print(f"bg = {src} (identical on all 3 tiles)")
    im = cover(Image.open(src).convert("RGB"), TILE, H)
    im = ImageEnhance.Brightness(im).enhance(0.62)
    im = ImageEnhance.Contrast(im).enhance(1.10)
    im = ImageEnhance.Color(im).enhance(1.0)

    overlay = Image.new("RGBA", (TILE, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    d.rectangle([0, 0, TILE, H], fill=(0, 0, 0, 55))
    for y in range(0, 220):
        a = int(150 * (1 - y / 220))
        d.line([(0, y), (TILE, y)], fill=(0, 0, 0, a))
    for y in range(H - 110, H):
        a = int(110 * ((y - (H - 110)) / 110))
        d.line([(0, y), (TILE, y)], fill=(0, 0, 0, a))
    return Image.alpha_composite(im.convert("RGBA"), overlay).convert("RGB")


def make_bg() -> Image.Image:
    """Repeat the exact same tile background three times (not a panorama slice)."""
    tile = make_tile_bg()
    canvas = Image.new("RGB", (W, H))
    for i in range(3):
        canvas.paste(tile, (i * TILE, 0))
    return canvas


def draw_centered(
    draw: ImageDraw.ImageDraw,
    cx: float,
    cy: float,
    text: str,
    font: ImageFont.ImageFont,
    fill: tuple[int, int, int],
) -> tuple[int, int]:
    x0, y0, x1, y1 = ink_bbox(draw, text, font)
    tw, th = x1 - x0, y1 - y0
    draw.text((cx - tw / 2 - x0, cy - th / 2 - y0), text, font=font, fill=fill)
    return tw, th


def site_logo(size: int = LOGO) -> Image.Image:
    return Image.open(SITE_LOGO).convert("RGBA").resize((size, size), Image.Resampling.LANCZOS)


def paste_logo(canvas: Image.Image, x: int, y: int, size: int = LOGO) -> None:
    canvas.alpha_composite(site_logo(size), (x, y))


def check(draw: ImageDraw.ImageDraw, x: int, y: int, color: tuple[int, int, int]) -> None:
    draw.line([(x, y + 12), (x + 10, y + 22), (x + 28, y + 1)], fill=color, width=5)


def content_metrics(
    draw: ImageDraw.ImageDraw,
    tag: str,
    title: str,
    bullets: list[str],
) -> dict:
    tag_f = F("Inter-Bold.ttf", 30)
    title_f = F("Inter-Bold.ttf", 48)
    body_f = F("Inter-Medium.ttf", 34)

    GAP_TAG = 22
    GAP_TITLE = 22
    GAP_RULE = 30
    ROW = 78
    CHECK_W = 40
    TAG_BX, TAG_BY = 20, 10

    tag_x0, tag_y0, tag_x1, tag_y1 = ink_bbox(draw, tag, tag_f)
    tag_tw, tag_th = tag_x1 - tag_x0, tag_y1 - tag_y0
    tag_box_w = tag_tw + TAG_BX * 2
    tag_box_h = tag_th + TAG_BY * 2

    title_x0, title_y0, title_x1, title_y1 = ink_bbox(draw, title, title_f)
    title_w = title_x1 - title_x0
    title_h = title_y1 - title_y0

    bullet_meta = []
    for b in bullets:
        bx0, by0, bx1, by1 = ink_bbox(draw, b, body_f)
        bullet_meta.append((b, bx0, by0, bx1 - bx0, by1 - by0))
    bullet_h = max(h for *_, h in bullet_meta)
    list_w = CHECK_W + max(w for *_, w, _h in bullet_meta)
    list_h = (len(bullets) - 1) * ROW + bullet_h
    content_h = tag_box_h + GAP_TAG + title_h + GAP_TITLE + 2 + GAP_RULE + list_h
    content_w = max(tag_box_w, title_w, list_w)

    return {
        "tag_f": tag_f,
        "title_f": title_f,
        "body_f": body_f,
        "GAP_TAG": GAP_TAG,
        "GAP_TITLE": GAP_TITLE,
        "GAP_RULE": GAP_RULE,
        "ROW": ROW,
        "CHECK_W": CHECK_W,
        "TAG_BX": TAG_BX,
        "TAG_BY": TAG_BY,
        "tag_box_w": tag_box_w,
        "tag_box_h": tag_box_h,
        "title_w": title_w,
        "title_h": title_h,
        "bullet_meta": bullet_meta,
        "list_w": list_w,
        "content_h": content_h,
        "content_w": content_w,
    }


def card(
    canvas: Image.Image,
    left: int,
    top: int,
    tag: str,
    accent: tuple[int, int, int],
    title: str,
    bullets: list[str],
) -> None:
    global CARD_W, CARD_H
    sh = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(sh)
    sd.rounded_rectangle(
        [left + 6, top + 10, left + CARD_W + 6, top + CARD_H + 10],
        radius=26,
        fill=(0, 0, 0, 90),
    )
    canvas.alpha_composite(sh.filter(ImageFilter.GaussianBlur(12)))

    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.rounded_rectangle(
        [left, top, left + CARD_W, top + CARD_H],
        radius=26,
        fill=(*CARD_BG, 255),
        outline=(*BORDER, 255),
        width=2,
    )
    canvas.alpha_composite(layer)
    draw = ImageDraw.Draw(canvas)

    m = content_metrics(draw, tag, title, bullets)
    cx = left + CARD_W / 2
    y = top + PAD_Y

    tag_x = int(round(cx - m["tag_box_w"] / 2))
    draw.rounded_rectangle(
        [tag_x, y, tag_x + m["tag_box_w"], y + m["tag_box_h"]],
        radius=8,
        fill=accent,
    )
    draw_centered(draw, cx, y + m["tag_box_h"] / 2, tag, m["tag_f"], WHITE)
    y += m["tag_box_h"] + m["GAP_TAG"]

    draw_centered(draw, cx, y + m["title_h"] / 2, title, m["title_f"], INK)
    y += m["title_h"] + m["GAP_TITLE"]

    rule_w = max(int(m["title_w"] * 1.02), int(m["list_w"] * 0.9))
    rule_w = min(rule_w, CARD_W - 2 * PAD_X)
    draw.line([(cx - rule_w / 2, y), (cx + rule_w / 2, y)], fill=BORDER, width=2)
    y += 2 + m["GAP_RULE"]

    col_left = int(round(cx - m["list_w"] / 2))
    for b, bx0, by0, _bw, bh in m["bullet_meta"]:
        check_y = y + max(0, (bh - 26) // 2)
        check(draw, col_left, check_y, accent)
        draw.text((col_left + m["CHECK_W"] - bx0, y - by0), b, font=m["body_f"], fill=INK)
        y += m["ROW"]


def build() -> Image.Image:
    global CARD_W, CARD_H, TOP

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

    # One shared compact size from the widest/tallest content
    max_cw = 0
    max_ch = 0
    for tag, _a, title, bullets in cards:
        m = content_metrics(draw, tag, title, bullets)
        max_cw = max(max_cw, m["content_w"])
        max_ch = max(max_ch, m["content_h"])

    CARD_W = min(TILE - 2 * SIDE, max_cw + 2 * PAD_X)
    CARD_H = max_ch + 2 * PAD_Y
    # Center card in the band between header and footer — campus visible around it
    avail_top = HEADER
    avail_bot = FOOTER
    TOP = avail_top + (H - avail_top - avail_bot - CARD_H) // 2

    print(f"compact card {CARD_W}x{CARD_H} at TOP={TOP} (tile {TILE}x{H})")

    for i, (tag, accent, title, bullets) in enumerate(cards):
        left = i * TILE + (TILE - CARD_W) // 2
        card(canvas, left, TOP, tag, accent, title, bullets)

    # Same header / logo / footer on every tile
    title_f = F("Inter-Bold.ttf", 40)
    sub_f = F("Inter-Medium.ttf", 20)
    t = "Preparation Courses"
    tw, th = measure(draw, t, title_f)
    s = "WU Vienna entrance exam prep"
    sw, sh = measure(draw, s, sub_f)
    block_h = th + 6 + sh
    title_y = (HEADER - block_h) // 2

    url_f = F("Inter-Medium.ttf", 22)
    u = "bbe-school.com"
    uw, uh = measure(draw, u, url_f)
    url_y = H - FOOTER + (FOOTER - uh) // 2

    for i in range(3):
        cx = i * TILE + TILE / 2
        draw.text((cx - tw / 2 + 2, title_y + 2), t, font=title_f, fill=(0, 0, 0, 140))
        draw.text((cx - tw / 2, title_y), t, font=title_f, fill=WHITE)
        draw.text((cx - sw / 2, title_y + th + 6), s, font=sub_f, fill=MUTED)

        logo_x = i * TILE + TILE - LOGO_INSET - LOGO
        logo_y = LOGO_INSET
        paste_logo(canvas, logo_x, logo_y, LOGO)

        draw.text((cx - uw / 2, url_y), u, font=url_f, fill=MUTED)

    return canvas.convert("RGB")


def verify(full: Image.Image) -> None:
    assert full.size == (W, H), full.size
    assert TILE == 1080 and H == 1440
    arr = np.asarray(full)

    # Card must be compact — campus should dominate the tile
    left = TILE + (TILE - CARD_W) // 2
    card_arr = arr[TOP : TOP + CARD_H, left : left + CARD_W]
    white = (card_arr[:, :, 0] > 245) & (card_arr[:, :, 1] > 245) & (card_arr[:, :, 2] > 245)
    assert white.mean() > 0.65, white.mean()

    tile0 = arr[:, :TILE]
    tile_white = (tile0[:, :, 0] > 245) & (tile0[:, :, 1] > 245) & (tile0[:, :, 2] > 245)
    white_frac = float(tile_white.mean())
    print(f"layout card={CARD_W}x{CARD_H} TOP={TOP} white_frac_in_tile={white_frac:.2f}")
    assert CARD_H < H * 0.62, CARD_H  # card not a full-bleed slab
    assert white_frac < 0.45, white_frac  # most of the photo is visible

    # margins of campus around card
    top_margin = TOP
    bot_margin = H - (TOP + CARD_H)
    side_margin = (TILE - CARD_W) // 2
    print(f"campus margins T/B={top_margin}/{bot_margin} L/R={side_margin}")
    assert top_margin >= 160 and bot_margin >= 100
    assert side_margin >= 80

    blue_mask = (
        (card_arr[:, :, 2] > 150)
        & (card_arr[:, :, 0] < 40)
        & (card_arr[:, :, 2] > card_arr[:, :, 1] + 20)
    )
    blues = card_arr[blue_mask]
    assert len(blues) > 80, len(blues)
    mean = blues.mean(0)
    print(f"WiSo accent mean RGB = {mean.astype(int)}")
    assert mean[0] < 40

    for i in range(3):
        logo_x = i * TILE + TILE - LOGO_INSET - LOGO
        logo_y = LOGO_INSET
        assert (i + 1) * TILE - (logo_x + LOGO) == LOGO_INSET
        assert logo_y == LOGO_INSET
        patch = arr[logo_y : logo_y + LOGO, logo_x : logo_x + LOGO]
        dark = (patch[:, :, 0] < 40) & (patch[:, :, 1] < 40) & (patch[:, :, 2] < 40)
        assert dark.mean() > 0.55

    # Background must be identical on all three tiles (sample outside cards/logos)
    patches = []
    for i in range(3):
        # bottom-left campus strip — no card, no logo
        p = arr[H - 80 : H - 20, i * TILE + 40 : i * TILE + 200]
        patches.append(p.astype(np.float64).mean(axis=(0, 1)))
        t = full.crop((i * TILE, 0, (i + 1) * TILE, H))
        assert t.size == (1080, 1440)
    diffs = [
        float(np.linalg.norm(patches[0] - patches[1])),
        float(np.linalg.norm(patches[1] - patches[2])),
    ]
    print(f"bg identity diffs (should be ~0) = {diffs}")
    assert max(diffs) < 1.0, diffs
    print("VERIFY OK — same LLC bg on all 3, logos corner-aligned, 3:4")


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
    posts = OUT / "ig-posts"
    posts.mkdir(parents=True, exist_ok=True)
    post_names = ["1-bbe.jpg", "2-wiso.jpg", "3-demo.jpg"]
    for i, name in enumerate(names):
        tile = full.crop((i * TILE, 0, (i + 1) * TILE, H))
        tile.save(fresh / f"{name}.jpg", "JPEG", quality=95)
        tile.save(OUT / f"{name}.jpg", "JPEG", quality=95)
        tile.save(OUT / f"{name}.png", "PNG", optimize=True)
        tile.save(posts / post_names[i], "JPEG", quality=95)

    gap = 14
    preview = Image.new("RGB", (W + 2 * gap, H), (24, 24, 26))
    for i in range(3):
        preview.paste(full.crop((i * TILE, 0, (i + 1) * TILE, H)), (i * (TILE + gap), 0))
    preview.save(fresh / "preview.jpg", "JPEG", quality=92)
    preview.save(OUT / "preview-grid-with-gaps.jpg", "JPEG", quality=92)

    grid = Image.new("RGB", (W, H), (18, 18, 20))
    for i in range(3):
        grid.paste(full.crop((i * TILE, 0, (i + 1) * TILE, H)), (i * TILE, 0))
    grid.save(fresh / "ig-grid-3x4.jpg", "JPEG", quality=92)
    grid.save(OUT / "ig-grid-3x4.jpg", "JPEG", quality=92)

    print(f"Wrote compact-card 3:4 set to {fresh}")


if __name__ == "__main__":
    main()
