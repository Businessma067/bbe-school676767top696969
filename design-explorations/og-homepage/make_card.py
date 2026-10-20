"""Fresh homepage share card. Same composition as the first one."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = Path(__file__).resolve().parent
W, H = 2400, 1260

CREAM = (242, 241, 237)
INK = (22, 22, 22)
MUTED = (110, 108, 102)
RED = (179, 57, 42)
INDIGO = (67, 56, 202)
WHITE = (255, 255, 255)
ROW = (246, 245, 242)
LINE = (226, 224, 218)

GEORGIA_BD = r"C:\Windows\Fonts\georgiab.ttf"
SEGOE = r"C:\Windows\Fonts\segoeui.ttf"
SEGOE_BD = r"C:\Windows\Fonts\segoeuib.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def ink(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int, int, int]:
    return draw.textbbox((0, 0), text, font=fnt)


def put(draw: ImageDraw.ImageDraw, x: int, top: int, text: str, fnt: ImageFont.FreeTypeFont, fill: tuple[int, int, int]) -> int:
    x0, y0, x1, y1 = ink(draw, text, fnt)
    draw.text((x - x0, top - y0), text, font=fnt, fill=fill)
    return y1 - y0


def put_box(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
) -> None:
    x0, y0, x1, y1 = box
    a, b, c, d = ink(draw, text, fnt)
    w, h = c - a, d - b
    draw.text((x0 + (x1 - x0 - w) / 2 - a, y0 + (y1 - y0 - h) / 2 - b), text, font=fnt, fill=fill)


def pill(
    draw: ImageDraw.ImageDraw,
    x: int,
    y: int,
    label: str,
    fnt: ImageFont.FreeTypeFont,
    bg: tuple[int, int, int],
    fg: tuple[int, int, int] = WHITE,
) -> int:
    a, b, c, d = ink(draw, label, fnt)
    w, h = (c - a) + 56, 60
    draw.rounded_rectangle((x, y, x + w, y + h), radius=h // 2, fill=bg)
    put_box(draw, (x, y, x + w, y + h), label, fnt, fg)
    return w


def cover(path: Path, focus: tuple[float, float]) -> Image.Image:
    im = Image.open(path).convert("RGB")
    sw, sh = im.size
    scale = max(W / sw, H / sh)
    im = im.resize((round(sw * scale), round(sh * scale)), Image.Resampling.LANCZOS)
    nw, nh = im.size
    cx = max(0, min(round(nw * focus[0] - W / 2), nw - W))
    cy = max(0, min(round(nh * focus[1] - H / 2), nh - H))
    return im.crop((cx, cy, cx + W, cy + H))


def main() -> None:
    photo = cover(Path(r"C:\Users\bubli\Projects\bbe-school-fixed\public\wu-vienna\library-interior.jpg"), (0.62, 0.4))
    night = Image.new("RGB", (W, H), (10, 12, 14))
    base = Image.blend(photo, night, 0.64).convert("RGBA")
    draw = ImageDraw.Draw(base)

    f_logo = font(SEGOE_BD, 26)
    f_brand = font(SEGOE_BD, 36)
    f_eye = font(SEGOE_BD, 26)
    f_h = font(GEORGIA_BD, 84)
    f_sub = font(SEGOE, 34)
    f_pill = font(SEGOE_BD, 26)
    f_item = font(SEGOE, 34)
    f_btn = font(SEGOE_BD, 32)

    x = 120
    gap = 36
    mark = 76
    head = ("Practice the", "WU entrance exam.")
    items = ("3,000+ practice questions", "Full timed mock exams", "Build your own mock")
    eye = "ENTRANCE EXAM  ·  2027"
    sub = "BBE and WiSo. One platform."

    head_h = ink(draw, head[0], f_h)[3] - ink(draw, head[0], f_h)[1]
    head_h += 12 + (ink(draw, head[1], f_h)[3] - ink(draw, head[1], f_h)[1])
    eye_h = ink(draw, eye, f_eye)[3] - ink(draw, eye, f_eye)[1]
    sub_h = ink(draw, sub, f_sub)[3] - ink(draw, sub, f_sub)[1]
    row = 58
    btn_h = 96
    block = mark + gap + eye_h + gap + head_h + gap + sub_h + gap + 60 + gap + row * 3 + gap + btn_h
    y = (H - block) // 2

    draw.rounded_rectangle((x, y, x + mark, y + mark), radius=16, fill=WHITE)
    put_box(draw, (x, y, x + mark, y + mark), "BBE", f_logo, INK)
    bb = ink(draw, "BBE School", f_brand)
    draw.text((x + mark + 18 - bb[0], y + (mark - (bb[3] - bb[1])) / 2 - bb[1]), "BBE School", font=f_brand, fill=WHITE)
    y += mark + gap

    y += put(draw, x, y, eye, f_eye, RED) + gap
    for i, line in enumerate(head):
        y += put(draw, x, y, line, f_h, WHITE) + (12 if i == 0 else gap)
    y += put(draw, x, y, sub, f_sub, WHITE) + gap

    w1 = pill(draw, x, y, "BBE", f_pill, WHITE, INK)
    pill(draw, x + w1 + 14, y, "WiSo", f_pill, INDIGO, WHITE)
    y += 60 + gap

    dot = 16
    for item in items:
        ib = ink(draw, item, f_item)
        ih = ib[3] - ib[1]
        top = y + (row - ih) / 2
        mid = y + row / 2
        draw.ellipse((x, mid - dot / 2, x + dot, mid + dot / 2), fill=RED)
        draw.text((x + 36 - ib[0], top - ib[1]), item, font=f_item, fill=WHITE)
        y += row
    y += gap

    btn_w = 480
    draw.rounded_rectangle((x, y, x + btn_w, y + btn_h), radius=14, fill=RED)
    word = "Try free practice"
    wb = ink(draw, word, f_btn)
    arrow = 24
    group = (wb[2] - wb[0]) + 14 + arrow
    gx = x + (btn_w - group) / 2
    draw.text((gx - wb[0], y + (btn_h - (wb[3] - wb[1])) / 2 - wb[1]), word, font=f_btn, fill=WHITE)
    ax = gx + (wb[2] - wb[0]) + 14
    ay = y + btn_h / 2
    draw.line([(ax, ay), (ax + arrow, ay)], fill=WHITE, width=3)
    draw.line([(ax + arrow - 9, ay - 8), (ax + arrow, ay), (ax + arrow - 9, ay + 8)], fill=WHITE, width=3)

    # Question card
    card = (1320, 150, 2280, 1110)
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle((card[0] + 6, card[1] + 16, card[2] + 6, card[3] + 22), radius=32, fill=(22, 22, 22, 40))
    base.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(18)))
    draw = ImageDraw.Draw(base)
    draw.rounded_rectangle(card, radius=28, fill=WHITE)
    draw.rectangle((card[0] + 28, card[1], card[2] - 28, card[1] + 8), fill=RED)

    f_k = font(SEGOE_BD, 20)
    f_title = font(GEORGIA_BD, 40)
    f_meta = font(SEGOE, 22)
    f_stmt = font(SEGOE, 24)
    f_check = font(SEGOE_BD, 22)
    cx = card[0] + 40
    right = card[2] - 40

    put(draw, cx, card[1] + 36, "CHAPTER 3", f_k, MUTED)
    put(draw, cx, card[1] + 68, "Types of businesses", f_title, INK)

    mode = (cx, card[1] + 132, cx + 190, card[1] + 176)
    draw.rounded_rectangle(mode, radius=22, outline=LINE, width=2)
    draw.ellipse((cx + 16, card[1] + 144, cx + 34, card[1] + 162), outline=INK, width=2)
    put(draw, cx + 46, card[1] + 142, "Timed mode", f_meta, INK)

    put(draw, cx, card[1] + 200, "TASK 2", f_k, MUTED)
    put(draw, cx, card[1] + 232, "A wine-growing business. Which statements hold?", f_meta, INK)

    statements = (
        "Hillside vineyards are the land factor.",
        "Seasonal pickers supply labour.",
        "A leased bottling line still counts as capital.",
        "Blending know-how is a production factor.",
        "Barrel orders are capital, not entrepreneurship.",
    )
    top = card[1] + 290
    rh = 96
    for i, stmt in enumerate(statements):
        y0 = top + i * rh
        draw.rounded_rectangle((cx, y0, right, y0 + 84), radius=14, fill=ROW)
        put(draw, cx + 20, y0 + 26, chr(ord("A") + i), f_check, MUTED)
        put(draw, cx + 58, y0 + 26, stmt, f_stmt, INK)
        box = (right - 52, y0 + 26, right - 22, y0 + 56)
        draw.rounded_rectangle(box, radius=6, outline=(176, 174, 168), width=2)

    foot = top + 5 * rh + 8
    draw.rounded_rectangle((cx, foot, cx + 280, foot + 60), radius=12, fill=INK)
    put_box(draw, (cx, foot, cx + 280, foot + 60), "Check answers", f_check, WHITE)
    count = "2 / 116"
    cb = ink(draw, count, f_meta)
    draw.text((right - (cb[2] - cb[0]) - cb[0], foot + (60 - (cb[3] - cb[1])) / 2 - cb[1]), count, font=f_meta, fill=MUTED)

    rgb = base.convert("RGB")
    rgb.resize((1200, 630), Image.Resampling.LANCZOS).save(OUT / "card.png", "PNG", optimize=True)
    print(OUT / "card.png")


if __name__ == "__main__":
    main()
