"""Homepage share card. Not wired into the site."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

OUT = Path(__file__).resolve().parent

# 2× of the 1200×630 Open Graph frame, then downscaled.
W, H = 2400, 1260

CREAM = (242, 241, 237)
INK = (22, 22, 22)
MUTED = (98, 96, 90)
CARD = (255, 255, 255)
LINE = (228, 226, 220)
RED = (179, 57, 42)
INDIGO = (67, 56, 202)
WHITE = (255, 255, 255)
ROW = (247, 246, 243)

GEORGIA = r"C:\Windows\Fonts\georgia.ttf"
GEORGIA_BD = r"C:\Windows\Fonts\georgiab.ttf"
SEGOE = r"C:\Windows\Fonts\segoeui.ttf"
SEGOE_BD = r"C:\Windows\Fonts\segoeuib.ttf"
SEGOE_SM = r"C:\Windows\Fonts\seguisb.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def text_width(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> int:
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0]


def draw_tracked(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    tracking: int,
) -> None:
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += text_width(draw, ch, fnt) + tracking


def rounded_shadow(base: Image.Image, box: tuple[int, int, int, int], radius: int) -> None:
    x0, y0, x1, y1 = box
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle((x0 + 8, y0 + 22, x1 + 8, y1 + 36), radius=radius, fill=(22, 22, 22, 70))
    shadow = shadow.filter(ImageFilter.GaussianBlur(26))
    base.alpha_composite(shadow)


def pill(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    label: str,
    fnt: ImageFont.FreeTypeFont,
    bg: tuple[int, int, int],
    fg: tuple[int, int, int],
    pad_x: int = 22,
    pad_y: int = 10,
) -> int:
    tw = text_width(draw, label, fnt)
    x, y = xy
    h = fnt.size + pad_y * 2
    w = tw + pad_x * 2
    draw.rounded_rectangle((x, y, x + w, y + h), radius=h // 2, fill=bg)
    draw.text((x + pad_x, y + pad_y - 2), label, font=fnt, fill=fg)
    return w


def wrap(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont, max_w: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for word in words:
        trial = word if not cur else f"{cur} {word}"
        if text_width(draw, trial, fnt) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


CAMPUS = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\public\wu-vienna\library-interior.jpg")


def cover_crop(im: Image.Image, w: int, h: int, focus: tuple[float, float]) -> Image.Image:
    sw, sh = im.size
    scale = max(w / sw, h / sh)
    resized = im.resize((round(sw * scale), round(sh * scale)), Image.Resampling.LANCZOS)
    nw, nh = resized.size
    cx = max(0, min(round(nw * focus[0] - w / 2), nw - w))
    cy = max(0, min(round(nh * focus[1] - h / 2), nh - h))
    return resized.crop((cx, cy, cx + w, cy + h))


def new_canvas() -> Image.Image:
    return Image.new("RGBA", (W, H), CREAM + (255,))


def draw_offer(base: Image.Image, *, big: bool = False) -> None:
    draw = ImageDraw.Draw(base)

    f_logo = font(SEGOE_BD, 42 if big else 28)
    f_brand = font(SEGOE_BD, 50 if big else 34)
    f_eye = font(SEGOE_BD, 34 if big else 24)
    f_h = font(GEORGIA_BD, 98 if big else 92)
    f_sub = font(SEGOE, 48 if big else 34)
    f_item = font(SEGOE, 46 if big else 32)
    f_cta = font(SEGOE_BD, 42 if big else 30)
    f_pill = font(SEGOE_BD, 32 if big else 22)

    left = 88 if big else 112
    mark_size = 96 if big else 72
    mark_top = 64 if big else 118

    mark = (left, mark_top, left + mark_size, mark_top + mark_size)
    draw.rounded_rectangle(mark, radius=18, fill=INK)
    bbe = "BBE"
    bw = text_width(draw, bbe, f_logo)
    draw.text((left + (mark_size - bw) / 2, mark_top + (mark_size - f_logo.size) / 2 - 2), bbe, font=f_logo, fill=WHITE)
    draw.text((left + mark_size + 22, mark_top + (26 if big else 22)), "BBE School", font=f_brand, fill=INK)

    eye_y = mark_top + mark_size + (32 if big else 40)
    draw_tracked(draw, (left, eye_y), "ENTRANCE EXAM  ·  2027", f_eye, RED, 3)

    headline = ["Practice the", "WU entrance exam."]
    y = eye_y + (52 if big else 56)
    line_h = 114 if big else 108
    for line in headline:
        draw.text((left, y), line, font=f_h, fill=INK)
        y += line_h

    draw.text((left, y + 16), "BBE and WiSo. One platform.", font=f_sub, fill=MUTED)

    py = y + (84 if big else 88)
    pill(draw, (left, py), "BBE", f_pill, INK, WHITE, 32 if big else 28, 16 if big else 14)
    pill(draw, (left + (168 if big else 140), py), "WiSo", f_pill, INDIGO, WHITE, 32 if big else 28, 16 if big else 14)

    items = [
        "3,000+ practice questions",
        "Full timed mock exams",
        "Build your own mock",
    ]
    iy = py + (96 if big else 92)
    for item in items:
        dot = 28 if big else 22
        draw.ellipse((left + 4, iy + 16, left + 4 + dot, iy + 16 + dot), fill=RED)
        draw.text((left + (52 if big else 48), iy), item, font=f_item, fill=INK)
        iy += 76 if big else 58

    btn_w = 560 if big else 430
    btn_h = 108 if big else 84
    btn = (left, iy + 32, left + btn_w, iy + 32 + btn_h)
    draw.rounded_rectangle(btn, radius=16, fill=RED)
    label = "Try free practice"
    lw = text_width(draw, label, f_cta)
    draw.text((btn[0] + (btn_w - lw) / 2 - 18, btn[1] + (btn_h - f_cta.size) / 2 - 4), label, font=f_cta, fill=WHITE)
    ax = btn[0] + (btn_w + lw) / 2 - 2
    ay = btn[1] + btn_h / 2
    draw.line([(ax, ay), (ax + 26, ay)], fill=WHITE, width=4)
    draw.line([(ax + 14, ay - 10), (ax + 26, ay), (ax + 14, ay + 10)], fill=WHITE, width=4)


def draw_question_card(base: Image.Image) -> None:
    draw = ImageDraw.Draw(base)
    # Product card — sits in the same cream field, aligned with the copy block.
    card = (1288, 148, 2288, 1112)
    rounded_shadow(base, card, 36)
    draw = ImageDraw.Draw(base)
    draw.rounded_rectangle(card, radius=36, fill=CARD)
    draw.rectangle((card[0] + 36, card[1], card[2] - 36, card[1] + 10), fill=RED)

    f_kicker = font(SEGOE_BD, 20)
    f_title = font(GEORGIA_BD, 42)
    f_mode = font(SEGOE, 22)
    f_task = font(SEGOE_BD, 20)
    f_stem = font(SEGOE, 24)
    f_stmt = font(SEGOE, 24)
    f_check = font(SEGOE_BD, 22)
    f_count = font(SEGOE, 22)

    cx = card[0] + 44
    inner_r = card[2] - 44
    draw_tracked(draw, (cx, card[1] + 40), "CHAPTER 3", f_kicker, MUTED, 2)
    draw.text((cx, card[1] + 74), "Types of businesses", font=f_title, fill=INK)

    mode = (cx, card[1] + 142, cx + 196, card[1] + 188)
    draw.rounded_rectangle(mode, radius=23, outline=LINE, width=2)
    draw.ellipse((cx + 16, card[1] + 154, cx + 34, card[1] + 172), outline=INK, width=2)
    draw.text((cx + 46, card[1] + 150), "Timed mode", font=f_mode, fill=INK)

    draw.text((cx, card[1] + 214), "TASK 2", font=f_task, fill=MUTED)
    draw.text((cx, card[1] + 248), "A wine-growing business. Which statements hold?", font=f_stem, fill=INK)

    statements = [
        "Hillside vineyards are the land factor.",
        "Seasonal pickers supply labour.",
        "A leased bottling line still counts as capital.",
        "Blending know-how is a production factor.",
        "Barrel orders are capital, not entrepreneurship.",
    ]
    row_top = card[1] + 308
    row_h = 102
    row_box = 90
    for i, stmt in enumerate(statements):
        y0 = row_top + i * row_h
        draw.rounded_rectangle((cx, y0, inner_r, y0 + row_box), radius=16, fill=ROW)
        letter = chr(ord("A") + i)
        draw.text((cx + 22, y0 + 28), letter, font=f_check, fill=MUTED)
        draw.text((cx + 62, y0 + 28), stmt, font=f_stmt, fill=INK)
        box = (inner_r - 54, y0 + 28, inner_r - 24, y0 + 58)
        draw.rounded_rectangle(box, radius=6, outline=(190, 188, 182), width=2)

    footer_y = row_top + 5 * row_h + 8
    cta = (cx, footer_y, cx + 292, footer_y + 64)
    draw.rounded_rectangle(cta, radius=12, fill=INK)
    cl = "Check answers"
    cw = text_width(draw, cl, f_check)
    draw.text((cta[0] + (292 - cw) / 2, cta[1] + 16), cl, font=f_check, fill=WHITE)
    count = "2 / 116"
    draw.text((inner_r - text_width(draw, count, f_count), footer_y + 18), count, font=f_count, fill=MUTED)


def draw_campus_card(base: Image.Image) -> None:
    # White mat so the sky does not melt into the cream background.
    plate = (1188, 56, 2344, 1204)
    rounded_shadow(base, plate, 40)
    draw = ImageDraw.Draw(base)
    draw.rounded_rectangle(plate, radius=44, fill=WHITE)
    draw.rounded_rectangle(plate, radius=44, outline=(210, 206, 198), width=3)

    inset = 22
    card = (plate[0] + inset, plate[1] + inset, plate[2] - inset, plate[3] - inset)
    x0, y0, x1, y1 = card
    cw, ch = x1 - x0, y1 - y0
    src = Image.open(CAMPUS).convert("RGB")
    # Library & Learning Center: keep the curved galleries, drop the empty floor.
    src = src.crop((0, 0, src.width, int(src.height * 0.78)))
    photo = cover_crop(src, cw, ch, (0.58, 0.42))
    frame = Image.new("RGBA", base.size, (0, 0, 0, 0))
    frame.paste(photo, (x0, y0))
    mask = Image.new("L", base.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle(card, radius=28, fill=255)
    base.paste(frame, (0, 0), mask)

    shade = Image.new("RGBA", base.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shade)
    band = 360
    for i in range(band):
        alpha = int(210 * (i / band) ** 1.25)
        sd.line([(x0, y1 - band + i), (x1, y1 - band + i)], fill=(8, 8, 8, alpha))
    shade.putalpha(ImageChops.multiply(shade.getchannel("A"), mask))
    base.alpha_composite(shade)

    draw = ImageDraw.Draw(base)
    f_place = font(GEORGIA_BD, 68)
    f_cap = font(SEGOE, 36)
    draw.text((x0 + 44, y1 - 168), "WU Vienna", font=f_place, fill=WHITE)
    draw.text((x0 + 44, y1 - 88), "The campus you're preparing for", font=f_cap, fill=WHITE)


def save(base: Image.Image, stem: str) -> None:
    rgb = base.convert("RGB")
    rgb.save(OUT / f"{stem}@2x.png", "PNG", optimize=True)
    small = rgb.resize((1200, 630), Image.Resampling.LANCZOS)
    small.save(OUT / f"{stem}.png", "PNG", optimize=True)
    small.save(OUT / f"{stem}.jpg", "JPEG", quality=92, optimize=True)
    print(OUT / f"{stem}.png")


def main() -> None:
    question = new_canvas()
    draw_offer(question)
    draw_question_card(question)
    save(question, "homepage-og")

    campus = new_canvas()
    draw_offer(campus, big=True)
    draw_campus_card(campus)
    save(campus, "homepage-og-campus")


if __name__ == "__main__":
    main()
