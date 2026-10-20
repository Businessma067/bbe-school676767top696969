"""One continuous Instagram banner → 3 squares: BBE / WiSo / Demo tariffs."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = Path(__file__).resolve().parent

W, H = 3240, 1080
SQ = 1080

CREAM = (253, 251, 247)
INK = (22, 22, 22)
MUTED = (120, 118, 112)
LINE = (208, 198, 186)
CARD = (255, 255, 255)
SHADOW = (0, 0, 0, 32)

ORANGE = (232, 109, 42)
PURPLE = (99, 70, 189)
TEAL = (15, 150, 120)

ARIAL = r"C:\Windows\Fonts\arial.ttf"
ARIAL_BD = r"C:\Windows\Fonts\arialbd.ttf"
SEGOE_BD = r"C:\Windows\Fonts\segoeuib.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont) -> tuple[int, int]:
    b = draw.textbbox((0, 0), text, font=fnt)
    return b[2] - b[0], b[3] - b[1]


def draw_architecture(draw: ImageDraw.ImageDraw, w: int, h: int) -> None:
    """One continuous facade — lines cross the Instagram seams."""
    horizon = 300

    # long roof lines spanning full width
    draw.line([(0, horizon - 36), (w, horizon - 90)], fill=LINE, width=2)
    draw.line([(0, horizon - 10), (w, horizon - 64)], fill=LINE, width=1)
    draw.line([(0, horizon + 18), (w, horizon - 30)], fill=LINE, width=1)

    # continuous floor bands (cross seams)
    for i, y in enumerate(range(horizon + 40, h - 10, 32)):
        draw.line([(0, y), (w, y)], fill=LINE, width=1 if i % 3 else 2)

    # continuous vertical mullions
    x = 40
    while x < w:
        draw.line([(x, horizon - 20), (x, h)], fill=LINE, width=1)
        x += 64

    # large overlapping facade frames that intentionally cross panel borders
    frames = [
        (60, horizon + 30, 1400, h - 20),
        (980, horizon, 2300, h - 10),
        (1880, horizon + 40, 3180, h - 20),
    ]
    for box in frames:
        draw.rectangle(box, outline=LINE, width=2)

    # plaza rays from a shared vanishing point (flows 1→2→3)
    vx, vy = w // 2, horizon - 40
    for i in range(-6, 20):
        x0 = i * 200
        draw.line([(x0, h), (vx, vy)], fill=LINE, width=1)


def rounded_shadow(base: Image.Image, box: tuple[int, int, int, int], radius: int = 20) -> None:
    x0, y0, x1, y1 = box
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle((x0 + 5, y0 + 9, x1 + 5, y1 + 9), radius=radius, fill=SHADOW)
    shadow = shadow.filter(ImageFilter.GaussianBlur(12))
    base.alpha_composite(shadow)
    ImageDraw.Draw(base).rounded_rectangle(box, radius=radius, fill=CARD)


def draw_logo(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int]) -> None:
    x0, y0, x1, y1 = box
    fold = 18
    draw.rounded_rectangle(box, radius=12, outline=INK, width=3)
    draw.polygon([(x1 - fold - 1, y1 + 1), (x1 + 1, y1 + 1), (x1 + 1, y1 - fold - 1)], fill=CREAM)
    draw.line([(x1 - fold, y1), (x1 - fold, y1 - fold), (x1, y1 - fold)], fill=INK, width=3)
    fnt = font(SEGOE_BD, 30)
    tw, th = text_size(draw, "BBE", fnt)
    draw.text(((x0 + x1 - tw) // 2, (y0 + y1 - th) // 2 - 3), "BBE", font=fnt, fill=INK)


def draw_check(draw: ImageDraw.ImageDraw, xy: tuple[int, int], color: tuple[int, int, int]) -> None:
    x, y = xy
    r = 13
    draw.ellipse((x, y, x + r * 2, y + r * 2), fill=color)
    draw.line([(x + 7, y + 14), (x + 12, y + 19), (x + 20, y + 9)], fill=(255, 255, 255), width=3, joint="curve")


def draw_tariff_card(
    base: Image.Image,
    panel: int,
    *,
    tag: str,
    title: str,
    bullets: list[str],
    accent: tuple[int, int, int],
) -> None:
    """Card fully inside one Instagram square so seams stay clean."""
    draw = ImageDraw.Draw(base)
    f_tag = font(ARIAL_BD, 20)
    f_title = font(SEGOE_BD, 36)
    f_body = font(ARIAL, 24)

    # inset so card doesn't kiss the Instagram gap
    margin_x = 70
    card_w = SQ - margin_x * 2
    card_h = 640
    x0 = panel * SQ + margin_x
    y0 = 250
    x1 = x0 + card_w
    y1 = y0 + card_h

    rounded_shadow(base, (x0, y0, x1, y1), radius=22)
    draw = ImageDraw.Draw(base)

    # accent top strip for continuity cue between tariffs
    draw.rounded_rectangle((x0, y0, x1, y0 + 10), radius=4, fill=accent)
    draw.rectangle((x0, y0 + 6, x1, y0 + 10), fill=accent)

    # tag
    pad_x, pad_y = 12, 6
    tw, th = text_size(draw, tag, f_tag)
    tx, ty = x0 + 32, y0 + 36
    draw.rounded_rectangle((tx, ty, tx + tw + pad_x * 2, ty + th + pad_y * 2), radius=6, fill=accent)
    draw.text((tx + pad_x, ty + pad_y - 1), tag, font=f_tag, fill=(255, 255, 255))

    draw.text((x0 + 32, y0 + 92), title, font=f_title, fill=INK)
    draw.rectangle((x0 + 32, y0 + 146, x0 + 110, y0 + 152), fill=accent)

    y = y0 + 186
    for b in bullets:
        draw_check(draw, (x0 + 34, y + 2), accent)
        draw.text((x0 + 74, y + 2), b, font=f_body, fill=INK)
        y += 58


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    bg = Image.new("RGB", (W, H), CREAM)
    wire = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_architecture(ImageDraw.Draw(wire), W, H)
    a = wire.split()[-1].point(lambda v: int(v * 0.50) if v else 0)
    wire.putalpha(a)

    # cream wash on top so header stays crisp; wire stays visible mid/bottom
    wash = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    wd = ImageDraw.Draw(wash)
    for i in range(260):
        wd.line([(0, i), (W, i)], fill=(*CREAM, int(220 * (1 - i / 260))))

    base = Image.alpha_composite(bg.convert("RGBA"), wire)
    base = Image.alpha_composite(base, wash)
    draw = ImageDraw.Draw(base)

    f_h1 = font(SEGOE_BD, 64)
    f_h2 = font(ARIAL, 30)
    f_url = font(ARIAL, 24)

    # ONE shared header that bridges all three panels
    title = "Preparation Courses"
    tw, _ = text_size(draw, title, f_h1)
    draw.text(((W - tw) // 2, 36), title, font=f_h1, fill=INK)

    sub = "WU Vienna entrance exam prep  ·  three ways to start"
    sw, _ = text_size(draw, sub, f_h2)
    draw.text(((W - sw) // 2, 112), sub, font=f_h2, fill=MUTED)

    # continuous rule under header (crosses seams)
    draw.line([(160, 168), (W - 160, 168)], fill=(186, 176, 164), width=2)

    # gradient accent rail under header: orange -> purple -> teal (reads as 1->2->3 flow)
    for x in range(160, W - 160):
        t = (x - 160) / (W - 320)
        if t < 0.5:
            u = t / 0.5
            c = tuple(int(ORANGE[i] * (1 - u) + PURPLE[i] * u) for i in range(3))
        else:
            u = (t - 0.5) / 0.5
            c = tuple(int(PURPLE[i] * (1 - u) + TEAL[i] * u) for i in range(3))
        draw.line([(x, 176), (x, 182)], fill=c)

    # logo only once — right edge of banner (lands on demo tile)
    draw_logo(draw, (W - 138, 32, W - 36, 134))

    # step markers bridging panels (01 —— 02 —— 03)
    f_step = font(ARIAL_BD, 18)
    steps = [("01  BBE", ORANGE, SQ // 2), ("02  WiSo", PURPLE, SQ + SQ // 2), ("03  Demo", TEAL, 2 * SQ + SQ // 2)]
    for label, color, cx in steps:
        lw, _ = text_size(draw, label, f_step)
        draw.text((cx - lw // 2, 196), label, font=f_step, fill=color)
    # connector dashes between step labels
    draw.line([(SQ // 2 + 90, 208), (SQ + SQ // 2 - 90, 208)], fill=LINE, width=2)
    draw.line([(SQ + SQ // 2 + 90, 208), (2 * SQ + SQ // 2 - 90, 208)], fill=LINE, width=2)

    # continuous soft accent rail behind cards (visual bridge 1→2→3)
    rail = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    rd = ImageDraw.Draw(rail)
    rd.rounded_rectangle((90, 320, W - 90, 860), radius=28, fill=(255, 255, 255, 55))
    base = Image.alpha_composite(base, rail)

    # three tariffs
    draw_tariff_card(
        base,
        0,
        tag="BBE",
        title="Full BBE Course",
        bullets=[
            "Economics • Math • English",
            "6 mock exams",
            "3300+ questions",
            "Full preparation materials",
        ],
        accent=ORANGE,
    )
    draw_tariff_card(
        base,
        1,
        tag="WiSo",
        title="Full WiSo Course",
        bullets=[
            "Wirtschaft • Math • German",
            "6 mock exams",
            "2500+ questions",
            "Full preparation materials",
        ],
        accent=PURPLE,
    )
    draw_tariff_card(
        base,
        2,
        tag="DEMO",
        title="Free Demo Access",
        bullets=[
            "Free demo mock exam",
            "Demo practice tasks",
            "Tutor bot preview",
            "No payment required",
        ],
        accent=TEAL,
    )

    draw = ImageDraw.Draw(base)
    # ONE footer URL centered on full banner (bridges mid bottom)
    url = "bbe-school.com"
    uw, _ = text_size(draw, url, f_url)
    draw.text(((W - uw) // 2, H - 42), url, font=f_url, fill=MUTED)

    rgb = base.convert("RGB")
    rgb.save(OUT / "prep-courses-banner-full.png", "PNG", optimize=True)
    rgb.save(OUT / "prep-courses-banner-full.jpg", "JPEG", quality=95)

    names = ["01-bbe", "02-wiso", "03-demo"]
    for i, name in enumerate(names):
        tile = rgb.crop((i * SQ, 0, (i + 1) * SQ, H))
        tile.save(OUT / f"{name}.png", "PNG", optimize=True)
        tile.save(OUT / f"{name}.jpg", "JPEG", quality=95)

    gap = 12
    preview = Image.new("RGB", (W + 2 * gap, H), (228, 224, 216))
    for i in range(3):
        preview.paste(rgb.crop((i * SQ, 0, (i + 1) * SQ, H)), (i * (SQ + gap), 0))
    preview.save(OUT / "preview-grid-with-gaps.jpg", "JPEG", quality=92)

    print("Saved continuous banner to", OUT)
    for p in sorted(OUT.glob("*.jpg")):
        print(f"  {p.name}: {Image.open(p).size}")


if __name__ == "__main__":
    main()
