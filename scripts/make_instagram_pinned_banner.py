#!/usr/bin/env python3
"""
Build Instagram pinned banners: ONE full poster → 3 equal 1080×1350 slices.

Generates many darkened WU Vienna campus variants for comparison.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "design-explorations" / "instagram-pinned-banner"
VARIANTS_DIR = OUT / "variants"

TILE_W, TILE_H = 1080, 1350
W, H = TILE_W * 3, TILE_H  # 3240 × 1350

CREAM = (247, 245, 241)
INK = (22, 22, 22)
MUTED = (120, 120, 120)
MUTED_LT = (190, 190, 190)
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
            "100+ Free practice tasks",
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


def cover_resize(im: Image.Image, tw: int, th: int, focus: str = "center") -> Image.Image:
    iw, ih = im.size
    scale = max(tw / iw, th / ih)
    nw, nh = max(1, int(iw * scale)), max(1, int(ih * scale))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    if focus == "left":
        left, top = 0, (nh - th) // 2
    elif focus == "right":
        left, top = nw - tw, (nh - th) // 2
    elif focus == "top":
        left, top = (nw - tw) // 2, 0
    elif focus == "bottom":
        left, top = (nw - tw) // 2, nh - th
    else:
        left, top = (nw - tw) // 2, (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def darken_photo(
    im: Image.Image,
    *,
    brightness: float = 0.55,
    contrast: float = 1.12,
    color: float = 0.9,
    vignette: float = 0.55,
    top_fade: float = 0.55,
    bottom_fade: float = 0.35,
    cool: bool = False,
) -> Image.Image:
    """Professional darkened campus grade on FULL canvas."""
    im = ImageEnhance.Brightness(im).enhance(brightness)
    im = ImageEnhance.Contrast(im).enhance(contrast)
    im = ImageEnhance.Color(im).enhance(color)

    if cool:
        cool_wash = Image.new("RGB", im.size, (20, 35, 55))
        im = Image.blend(im, cool_wash, 0.18)

    base = im.convert("RGBA")
    overlay = Image.new("RGBA", im.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)

    # top readability band
    for y in range(0, 360):
        a = int(220 * top_fade * (1 - y / 360))
        d.line([(0, y), (W, y)], fill=(0, 0, 0, a))

    # bottom fade
    for y in range(H - 160, H):
        a = int(200 * bottom_fade * ((y - (H - 160)) / 160))
        d.line([(0, y), (W, y)], fill=(0, 0, 0, a))

    # soft vignette
    vig = Image.new("L", (W, H), 0)
    vd = ImageDraw.Draw(vig)
    steps = 90
    for i in range(steps):
        a = int(255 * vignette * (i / steps) ** 1.7)
        vd.rectangle([i * 6, i * 4, W - i * 6, H - i * 4], outline=a)
    vig = vig.filter(ImageFilter.GaussianBlur(55))
    dark = Image.new("RGB", (W, H), (5, 6, 10))
    graded = Image.composite(dark, base.convert("RGB"), vig)
    return Image.alpha_composite(graded.convert("RGBA"), overlay).convert("RGB")


def draw_logo(draw: ImageDraw.ImageDraw, x: int, y: int, size: int = 100, light: bool = True) -> None:
    color = WHITE if light else INK
    fill_corner = (12, 14, 18) if light else CREAM
    r = 18
    draw.rounded_rectangle([x, y, x + size, y + size], radius=r, outline=color, width=4)
    fold = 24
    draw.polygon(
        [(x + size - fold, y + size), (x + size, y + size - fold), (x + size, y + size)],
        fill=fill_corner,
    )
    draw.line(
        [(x + size - fold, y + size), (x + size - fold, y + size - fold), (x + size, y + size - fold)],
        fill=color,
        width=3,
    )
    fnt = font("Inter-Bold.ttf", 38)
    label = "BBE"
    tw, th = text_size(draw, label, fnt)
    draw.text((x + (size - tw) / 2, y + (size - th) / 2 - 2), label, font=fnt, fill=color)


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
    glass: bool = False,
) -> None:
    left = cx - width // 2
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)

    # shadow
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle(
        [left + 10, top + 14, left + width + 10, top + height + 14],
        radius=30,
        fill=(0, 0, 0, 90),
    )
    canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(16)))

    if glass:
        d.rounded_rectangle(
            [left, top, left + width, top + height],
            radius=30,
            fill=(18, 20, 24, 210),
            outline=(255, 255, 255, 40),
            width=2,
        )
        title_c, body_c, border_c = WHITE, (220, 220, 220), (255, 255, 255, 40)
    else:
        d.rounded_rectangle(
            [left, top, left + width, top + height],
            radius=30,
            fill=(*CARD, 255),
            outline=(*CARD_BORDER, 255),
            width=2,
        )
        title_c, body_c, border_c = INK, INK, CARD_BORDER

    canvas.alpha_composite(layer)
    draw = ImageDraw.Draw(canvas)

    tag_f = font("Inter-Bold.ttf", 34)
    tw, th = text_size(draw, tag, tag_f)
    pad_x, pad_y = 22, 12
    tag_w, tag_h = tw + pad_x * 2, th + pad_y * 2
    tag_x, tag_y = left + 44, top + 40
    draw.rounded_rectangle([tag_x, tag_y, tag_x + tag_w, tag_y + tag_h], radius=8, fill=accent)
    draw.text((tag_x + pad_x, tag_y + pad_y - 2), tag, font=tag_f, fill=WHITE)

    title_f = font("Inter-Bold.ttf", 58)
    draw.text((left + 44, top + 120), title, font=title_f, fill=title_c)
    draw.line([(left + 44, top + 205), (left + width - 44, top + 205)], fill=border_c, width=2)

    bullet_f = font("Inter-Medium.ttf", 40)
    y = top + 250
    for bullet in bullets:
        draw_check(draw, left + 48, y + 8, accent)
        draw.text((left + 92, y), bullet, font=bullet_f, fill=body_c)
        y += 92


def build_banner(bg: Image.Image, *, glass_cards: bool = False) -> Image.Image:
    canvas = bg.convert("RGBA")
    draw = ImageDraw.Draw(canvas)

    title_f = font("Inter-Bold.ttf", 96)
    sub_f = font("Inter-Medium.ttf", 44)
    title = "Preparation Courses"
    tw, _ = text_size(draw, title, title_f)
    # soft text shadow for readability
    draw.text(((W - tw) / 2 + 2, 68), title, font=title_f, fill=(0, 0, 0, 160))
    draw.text(((W - tw) / 2, 66), title, font=title_f, fill=WHITE)

    sub = "WU Vienna entrance exam prep"
    sw, _ = text_size(draw, sub, sub_f)
    draw.text(((W - sw) / 2, 185), sub, font=sub_f, fill=MUTED_LT)
    draw.line([(120, 258), (W - 120, 258)], fill=(255, 255, 255, 55), width=2)

    draw_logo(draw, W - 48 - 100, 52, size=108, light=True)

    for i, card in enumerate(CARDS):
        cx = i * TILE_W + TILE_W // 2
        draw_card(
            canvas,
            cx=cx,
            top=290,
            tag=card["tag"],
            accent=card["accent"],
            title=card["title"],
            bullets=card["bullets"],
            glass=glass_cards,
            height=800,
        )

    url_f = font("Inter-Medium.ttf", 34)
    url = "bbe-school.com"
    uw, _ = text_size(draw, url, url_f)
    draw.text(((W - uw) / 2, H - 70), url, font=url_f, fill=MUTED_LT)
    return canvas.convert("RGB")


def slice_equal_thirds(full: Image.Image) -> list[Image.Image]:
    assert full.size == (W, H), full.size
    return [full.crop((i * TILE_W, 0, (i + 1) * TILE_W, H)) for i in range(3)]


def save_variant(name: str, full: Image.Image) -> Path:
    vdir = VARIANTS_DIR / name
    vdir.mkdir(parents=True, exist_ok=True)
    full.save(vdir / "full.jpg", "JPEG", quality=93, optimize=True)
    stems = ["01-bbe", "02-wiso", "03-demo"]
    for stem, tile in zip(stems, slice_equal_thirds(full), strict=True):
        tile.save(vdir / f"{stem}.jpg", "JPEG", quality=93, optimize=True)
    # gap preview
    gap = 12
    preview = Image.new("RGB", (W + 2 * gap, H), (20, 20, 22))
    for i, tile in enumerate(slice_equal_thirds(full)):
        preview.paste(tile, (i * (TILE_W + gap), 0))
    preview.save(vdir / "preview.jpg", "JPEG", quality=90)
    return vdir


def make_contact_sheet(paths: list[Path], out: Path, cols: int = 2) -> None:
    thumbs = []
    for p in paths:
        im = Image.open(p).convert("RGB")
        # scale width to 1600 for readable sheet
        tw = 1600
        th = int(im.height * (tw / im.width))
        thumbs.append(im.resize((tw, th), Image.Resampling.LANCZOS))
    if not thumbs:
        return
    tw, th = thumbs[0].size
    rows = (len(thumbs) + cols - 1) // cols
    pad = 24
    label_h = 48
    sheet = Image.new(
        "RGB",
        (cols * tw + (cols + 1) * pad, rows * (th + label_h) + (rows + 1) * pad),
        (18, 18, 20),
    )
    draw = ImageDraw.Draw(sheet)
    fnt = font("Inter-Bold.ttf", 28)
    for idx, (im, p) in enumerate(zip(thumbs, paths, strict=True)):
        r, c = divmod(idx, cols)
        x = pad + c * (tw + pad)
        y = pad + r * (th + label_h + pad)
        sheet.paste(im, (x, y))
        draw.text((x, y + th + 8), p.parent.name, font=fnt, fill=WHITE)
    sheet.save(out, "JPEG", quality=90)


def prepare_backgrounds() -> list[tuple[str, Image.Image, dict]]:
    """Return (slug, graded_bg, banner_kwargs) variants."""
    artifact = Path("/opt/cursor/artifacts/assets")
    real = ROOT / "public" / "wu-vienna"

    sources: list[tuple[str, Path, dict]] = [
        # Daytime LLC (requested default) — keep daylight readable, light top fade only
        (
            "00-llc-day-cards",
            artifact / "wu-bg-llc-day-match.jpg",
            dict(brightness=0.88, contrast=1.05, vignette=0.28, top_fade=0.4, bottom_fade=0.15, color=1.05),
        ),
        (
            "00b-llc-day-soft",
            artifact / "wu-bg-llc-day.jpg",
            dict(brightness=0.9, contrast=1.04, vignette=0.25, top_fade=0.38, bottom_fade=0.12, color=1.08),
        ),
        (
            "00c-llc-day-bright",
            artifact / "wu-bg-llc-day-match.jpg",
            dict(brightness=0.95, contrast=1.02, vignette=0.22, top_fade=0.35, bottom_fade=0.1, color=1.08),
        ),
        # Keep a few strong backups
        ("01-llc-level-cards", artifact / "wu-bg-llc-level.jpg", dict(brightness=0.55, contrast=1.14, vignette=0.52, top_fade=0.52)),
        ("07-llc-dusk-cards", artifact / "wu-bg-llc-dusk.jpg", dict(brightness=0.56, contrast=1.15, vignette=0.5, top_fade=0.5)),
        ("11-real-plaza-dark", real / "campus-plaza.jpg", dict(brightness=0.55, contrast=1.12, vignette=0.45, top_fade=0.5, color=1.0)),
    ]

    out: list[tuple[str, Image.Image, dict]] = []
    for slug, path, grade in sources:
        if not path.exists():
            print(f"skip missing {path}")
            continue
        focus = "center"
        if "plaza" in slug:
            focus = "center"
        elif "teaching" in slug:
            focus = "center"
        raw = cover_resize(Image.open(path).convert("RGB"), W, H, focus=focus)
        # slight sharpen after upscale
        raw = raw.filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=2))
        graded = darken_photo(raw, **grade)
        glass = "glass" in slug
        out.append((slug, graded, {"glass_cards": glass}))
    return out


def promote_default(name: str) -> None:
    """Copy chosen variant into the top-level banner paths."""
    src = VARIANTS_DIR / name
    if not src.exists():
        return
    import shutil

    shutil.copy2(src / "full.jpg", OUT / "bbe-prep-courses-banner-full.jpg")
    shutil.copy2(src / "preview.jpg", OUT / "preview-grid-with-gaps.jpg")
    full = Image.open(src / "full.jpg").convert("RGB")
    full.save(OUT / "bbe-prep-courses-banner-full.png", "PNG", optimize=True)
    for stem, tile in zip(
        ["01-bbe-full-course", "02-wiso-full-course", "03-demo-access"],
        slice_equal_thirds(full),
        strict=True,
    ):
        tile.save(OUT / f"{stem}.png", "PNG", optimize=True)
        tile.save(OUT / f"{stem}.jpg", "JPEG", quality=95, optimize=True)


def build() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    VARIANTS_DIR.mkdir(parents=True, exist_ok=True)

    previews: list[Path] = []
    for slug, bg, kwargs in prepare_backgrounds():
        full = build_banner(bg, **kwargs)
        vdir = save_variant(slug, full)
        previews.append(vdir / "preview.jpg")
        print(f"✓ {slug} → {vdir}")

    make_contact_sheet(previews, OUT / "contact-sheet-all-variants.jpg", cols=2)
    # Also a taller 3-col sheet of full banners
    fulls = sorted(VARIANTS_DIR.glob("*/full.jpg"))
    make_contact_sheet(fulls, OUT / "contact-sheet-fulls.jpg", cols=2)

    # Default: daytime LLC
    default = "00-llc-day-cards"
    if (VARIANTS_DIR / default).exists():
        promote_default(default)
        print(f"Promoted default: {default}")

    print(f"\nAll variants in {VARIANTS_DIR}")
    print(f"Contact sheet: {OUT / 'contact-sheet-all-variants.jpg'}")


if __name__ == "__main__":
    build()
