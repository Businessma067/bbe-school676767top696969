"""Five separate homepage share cards. Not wired into the site."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = Path(__file__).resolve().parent / "variants"
LIB = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\public\wu-vienna\library-interior.jpg")

W, H = 2400, 1260
CREAM = (242, 241, 237)
INK = (22, 22, 22)
MUTED = (98, 96, 90)
RED = (179, 57, 42)
INDIGO = (67, 56, 202)
WHITE = (255, 255, 255)

GEORGIA = r"C:\Windows\Fonts\georgia.ttf"
GEORGIA_BD = r"C:\Windows\Fonts\georgiab.ttf"
SEGOE = r"C:\Windows\Fonts\segoeui.ttf"
SEGOE_BD = r"C:\Windows\Fonts\segoeuib.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size)


def tw(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> int:
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0]


def cover(w: int, h: int, focus: tuple[float, float]) -> Image.Image:
    im = Image.open(LIB).convert("RGB")
    sw, sh = im.size
    scale = max(w / sw, h / sh)
    im = im.resize((round(sw * scale), round(sh * scale)), Image.Resampling.LANCZOS)
    nw, nh = im.size
    cx = max(0, min(round(nw * focus[0] - w / 2), nw - w))
    cy = max(0, min(round(nh * focus[1] - h / 2), nh - h))
    return im.crop((cx, cy, cx + w, cy + h))


def save(im: Image.Image, name: str) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    rgb = im.convert("RGB")
    rgb.resize((1200, 630), Image.Resampling.LANCZOS).save(OUT / name, "PNG", optimize=True)
    print(OUT / name)


def button(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], label: str, fnt: ImageFont.FreeTypeFont) -> None:
    draw.rounded_rectangle(box, radius=16, fill=RED)
    x0, y0, x1, y1 = box
    label_w = tw(draw, label, fnt)
    draw.text((x0 + ((x1 - x0) - label_w) / 2 - 16, y0 + ((y1 - y0) - fnt.size) / 2 - 2), label, font=fnt, fill=WHITE)
    ax = x0 + ((x1 - x0) + label_w) / 2
    ay = (y0 + y1) / 2
    draw.line([(ax, ay), (ax + 26, ay)], fill=WHITE, width=4)
    draw.line([(ax + 14, ay - 10), (ax + 26, ay), (ax + 14, ay + 10)], fill=WHITE, width=4)


def left_scrim(base: Image.Image, reach: int, alpha: int = 214) -> None:
    shade = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(shade)
    for x in range(reach):
        t = 1 - x / reach
        a = int(alpha * (t ** 1.35))
        d.line([(x, 0), (x, H)], fill=(16, 16, 16, a))
    base.alpha_composite(shade)


def v1_bleed() -> None:
    """University fills the frame. Type sits on a dark left wash, one size family."""
    base = cover(W, H, (0.72, 0.38)).convert("RGBA")
    left_scrim(base, 1680, 220)
    draw = ImageDraw.Draw(base)
    f_brand = font(SEGOE_BD, 36)
    f_eye = font(SEGOE_BD, 32)
    f_h = font(GEORGIA_BD, 84)
    f_body = font(SEGOE, 40)
    f_btn = font(SEGOE_BD, 36)
    x = 112
    y = 168
    draw.text((x, y), "BBE School", font=f_brand, fill=WHITE)
    y += 88
    draw.text((x, y), "ENTRANCE EXAM  ·  2027", font=f_eye, fill=(255, 196, 184))
    y += 72
    for line in ("Practice the", "WU entrance exam."):
        draw.text((x, y), line, font=f_h, fill=WHITE)
        y += 98
    y += 8
    draw.text((x, y), "BBE and WiSo. One platform.", font=f_body, fill=(236, 234, 228))
    y += 64
    for line in ("3,000+ questions", "Timed mock exams", "Your own mock"):
        draw.text((x, y), line, font=f_body, fill=WHITE)
        y += 52
    y += 28
    button(draw, (x, y, x + 520, y + 104), "Try free practice", f_btn)
    save(base, "01-photo.png")


def v2_poster() -> None:
    """No photo. One column, facts in a single even row."""
    base = Image.new("RGBA", (W, H), CREAM + (255,))
    draw = ImageDraw.Draw(base)
    f_brand = font(SEGOE_BD, 36)
    f_eye = font(SEGOE_BD, 32)
    f_h = font(GEORGIA_BD, 92)
    f_body = font(SEGOE, 42)
    f_fact = font(SEGOE_BD, 40)
    f_btn = font(SEGOE_BD, 36)
    lines = [
        ("BBE School", f_brand, INK),
        ("ENTRANCE EXAM  ·  2027", f_eye, RED),
        ("Practice the", f_h, INK),
        ("WU entrance exam.", f_h, INK),
        ("BBE and WiSo. One platform.", f_body, MUTED),
    ]
    gaps = [36, 56, 8, 48, 64]
    block_h = sum(fnt.size + gap for (_, fnt, _), gap in zip(lines, gaps)) + 104
    y = (H - block_h) // 2
    for (text, fnt, fill), gap in zip(lines, gaps):
        draw.text(((W - tw(draw, text, fnt)) / 2, y), text, font=fnt, fill=fill)
        y += fnt.size + gap
    facts = ["3,000+ questions", "Timed mock exams", "Your own mock"]
    dot = "·"
    gap = 28
    row_w = sum(tw(draw, fact, f_fact) for fact in facts) + 2 * (tw(draw, dot, f_fact) + gap * 2)
    cursor = (W - row_w) // 2
    for i, fact in enumerate(facts):
        if i:
            draw.text((cursor, y), dot, font=f_fact, fill=RED)
            cursor += tw(draw, dot, f_fact) + gap
        draw.text((cursor, y), fact, font=f_fact, fill=INK)
        cursor += tw(draw, fact, f_fact) + gap
    y += 72
    button(draw, ((W - 520) // 2, y, (W + 520) // 2, y + 104), "Try free practice", f_btn)
    save(base, "02-poster.png")


def _th(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> int:
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[3] - box[1]


def _pill(draw: ImageDraw.ImageDraw, x: int, y: int, label: str, fnt: ImageFont.FreeTypeFont, bg: tuple[int, int, int]) -> int:
    pad_x, h = 36, 68
    w = tw(draw, label, fnt) + pad_x * 2
    draw.rounded_rectangle((x, y, x + w, y + h), radius=h // 2, fill=bg)
    draw.text((x + w / 2, y + h / 2), label, font=fnt, fill=WHITE, anchor="mm")
    return w


def _button(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, label: str, fnt: ImageFont.FreeTypeFont) -> None:
    draw.rounded_rectangle((x, y, x + w, y + h), radius=16, fill=RED)
    gap, arrow = 18, 28
    group = tw(draw, label, fnt) + gap + arrow
    start = x + (w - group) / 2
    mid = y + h / 2
    draw.text((start, mid), label, font=fnt, fill=WHITE, anchor="lm")
    ax = start + tw(draw, label, fnt) + gap
    draw.line([(ax, mid), (ax + arrow, mid)], fill=WHITE, width=4)
    draw.line([(ax + arrow - 12, mid - 10), (ax + arrow, mid), (ax + arrow - 12, mid + 10)], fill=WHITE, width=4)


def v3_split() -> None:
    """Photo split. Original copy, larger pills/bullets/button, one left edge."""
    base = Image.new("RGBA", (W, H), CREAM + (255,))
    split = 1240
    photo = cover(W - split, H, (0.62, 0.4))
    base.paste(photo, (split, 0))
    draw = ImageDraw.Draw(base)
    draw.rectangle((split - 8, 0, split, H), fill=RED)

    f_logo = font(SEGOE_BD, 30)
    f_brand = font(SEGOE_BD, 40)
    f_eye = font(SEGOE_BD, 28)
    f_h = font(GEORGIA_BD, 88)
    f_sub = font(SEGOE, 36)
    f_pill = font(SEGOE_BD, 30)
    f_item = font(SEGOE, 40)
    f_btn = font(SEGOE_BD, 38)

    x = 100
    mark = 88
    head = ["Practice the", "WU entrance exam."]
    items = ["3,000+ practice questions", "Full timed mock exams", "Build your own mock"]
    row = 64
    gaps = [40, 36, 10, 28, 32, 36, 40]
    block = (
        mark
        + gaps[0]
        + _th(draw, "ENTRANCE EXAM  ·  2027", f_eye)
        + gaps[1]
        + sum(_th(draw, line, f_h) + gaps[2] for line in head)
        + gaps[3]
        + _th(draw, "BBE and WiSo. One platform.", f_sub)
        + gaps[4]
        + 68
        + gaps[5]
        + row * len(items)
        + gaps[6]
        + 112
    )
    y = (H - block) // 2

    draw.rounded_rectangle((x, y, x + mark, y + mark), radius=18, fill=INK)
    draw.text((x + mark / 2, y + mark / 2), "BBE", font=f_logo, fill=WHITE, anchor="mm")
    draw.text((x + mark + 22, y + mark / 2), "BBE School", font=f_brand, fill=INK, anchor="lm")
    y += mark + gaps[0]

    draw.text((x, y), "ENTRANCE EXAM  ·  2027", font=f_eye, fill=RED, anchor="lt")
    y += _th(draw, "ENTRANCE EXAM  ·  2027", f_eye) + gaps[1]

    for i, line in enumerate(head):
        draw.text((x, y), line, font=f_h, fill=INK, anchor="lt")
        y += _th(draw, line, f_h) + (gaps[2] if i == 0 else gaps[3])

    draw.text((x, y), "BBE and WiSo. One platform.", font=f_sub, fill=MUTED, anchor="lt")
    y += _th(draw, "BBE and WiSo. One platform.", f_sub) + gaps[4]

    w_bbe = _pill(draw, x, y, "BBE", f_pill, INK)
    _pill(draw, x + w_bbe + 16, y, "WiSo", f_pill, INDIGO)
    y += 68 + gaps[5]

    dot = 20
    for item in items:
        mid = y + row / 2
        draw.ellipse((x, mid - dot / 2, x + dot, mid + dot / 2), fill=RED)
        draw.text((x + 44, mid), item, font=f_item, fill=INK, anchor="lm")
        y += row
    y += gaps[6]
    _button(draw, x, y, 560, 112, "Try free practice", f_btn)
    save(base, "03-split.png")


def v4_dark() -> None:
    """Ink field, university barely there, three equal fact blocks."""
    photo = cover(W, H, (0.5, 0.35)).convert("RGBA")
    photo = Image.blend(Image.new("RGBA", (W, H), INK + (255,)), photo, 0.28)
    dim = Image.new("RGBA", (W, H), (12, 12, 12, 150))
    photo.alpha_composite(dim)
    draw = ImageDraw.Draw(photo)
    f_brand = font(SEGOE_BD, 34)
    f_eye = font(SEGOE_BD, 30)
    f_h = font(GEORGIA_BD, 80)
    f_body = font(SEGOE, 36)
    f_num = font(GEORGIA_BD, 48)
    f_btn = font(SEGOE_BD, 34)
    x = 120
    draw.text((x, 100), "BBE School", font=f_brand, fill=WHITE)
    draw.text((x, 164), "ENTRANCE EXAM  ·  2027", font=f_eye, fill=(232, 140, 124))
    y = 250
    for line in ("Practice the", "WU entrance exam."):
        draw.text((x, y), line, font=f_h, fill=WHITE)
        y += 94
    draw.text((x, y + 8), "BBE and WiSo. One platform.", font=f_body, fill=(210, 208, 202))
    facts = [
        ("3,000+", "practice questions"),
        ("Timed", "mock exams"),
        ("Custom", "mock builder"),
    ]
    box_w, box_h = 680, 210
    gap = 36
    top = 760
    left = 120
    for i, (title, sub) in enumerate(facts):
        bx = left + i * (box_w + gap)
        draw.rounded_rectangle((bx, top, bx + box_w, top + box_h), radius=20, fill=(46, 46, 46))
        draw.text((bx + 36, top + 40), title, font=f_num, fill=WHITE)
        draw.text((bx + 36, top + 118), sub, font=f_body, fill=(214, 212, 206))
    button(draw, (1860, 96, 2280, 200), "Try free practice", f_btn)
    save(photo, "04-dark.png")


def v5_tracks() -> None:
    """Two equal doors, BBE and WiSo, university behind them."""
    base = cover(W, H, (0.55, 0.36)).convert("RGBA")
    veil = Image.new("RGBA", (W, H), (14, 14, 14, 130))
    base.alpha_composite(veil)
    draw = ImageDraw.Draw(base)
    f_h = font(GEORGIA_BD, 68)
    f_brand = font(SEGOE_BD, 32)
    f_track = font(GEORGIA_BD, 72)
    f_body = font(SEGOE, 36)
    f_btn = font(SEGOE_BD, 34)
    draw.text((120, 72), "BBE School", font=f_brand, fill=WHITE)
    title = "Practice the WU entrance exam"
    draw.text(((W - tw(draw, title, f_h)) / 2, 150), title, font=f_h, fill=WHITE)
    sub = "2027  ·  one platform"
    draw.text(((W - tw(draw, sub, f_body)) / 2, 240), sub, font=f_body, fill=(230, 228, 222))

    cards = [
        (CREAM, INK, MUTED, "BBE", "English", "Economics  ·  Math  ·  English"),
        (INDIGO, WHITE, (226, 224, 236), "WiSo", "German", "Economics  ·  Math  ·  German"),
    ]
    card_w, card_h = 980, 400
    gap = 48
    left = (W - (card_w * 2 + gap)) // 2
    top = 340
    for i, (bg, fg, soft, name, lang, subjects) in enumerate(cards):
        x0 = left + i * (card_w + gap)
        draw.rounded_rectangle((x0, top, x0 + card_w, top + card_h), radius=28, fill=bg)
        draw.text((x0 + 56, top + 56), name, font=f_track, fill=fg)
        draw.text((x0 + 56, top + 164), lang, font=f_body, fill=soft)
        draw.rectangle((x0 + 56, top + 236, x0 + 150, top + 242), fill=RED)
        draw.text((x0 + 56, top + 268), subjects, font=f_body, fill=fg)
    button(draw, ((W - 520) // 2, top + card_h + 40, (W + 520) // 2, top + card_h + 144), "Try free practice", f_btn)
    save(base, "05-tracks.png")


def _ink_box(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int, int, int]:
    return draw.textbbox((0, 0), text, font=fnt)


def _center_ink(
    draw: ImageDraw.ImageDraw,
    cx: float,
    cy: float,
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
) -> None:
    x0, y0, x1, y1 = _ink_box(draw, text, fnt)
    draw.text((cx - (x1 - x0) / 2 - x0, cy - (y1 - y0) / 2 - y0), text, font=fnt, fill=fill)


def _put_ink(
    draw: ImageDraw.ImageDraw,
    x: int,
    top: int,
    text: str,
    fnt: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
) -> int:
    x0, y0, x1, y1 = _ink_box(draw, text, fnt)
    draw.text((x - x0, top - y0), text, font=fnt, fill=fill)
    return y1 - y0


def v6_light() -> None:
    """Dark campus, site colors, regular type, one shared left edge."""
    photo = cover(W, H, (0.62, 0.4)).convert("RGBA")
    night = Image.new("RGBA", (W, H), (12, 14, 16, 255))
    base = Image.blend(photo, night, 0.58)
    draw = ImageDraw.Draw(base)

    f_logo = font(SEGOE, 28)
    f_brand = font(SEGOE, 40)
    f_eye = font(SEGOE, 28)
    f_h = font(GEORGIA, 76)
    f_box = font(SEGOE, 36)
    f_btn = font(SEGOE, 36)

    eye = "ENTRANCE EXAM  ·  2027"
    head = ("Practice the", "WU entrance exam.")
    labels = (
        "3,000+ questions",
        "Timed mock exams",
        "Mock builder",
        "Flash cards",
        "Matching",
        "Tutor exam",
    )

    def ih(text: str, fnt: ImageFont.FreeTypeFont) -> int:
        box = _ink_box(draw, text, fnt)
        return box[3] - box[1]

    mark = 76
    gap = 40
    box_w, box_h, gap_x, gap_y = 680, 120, 24, 20
    btn_w, btn_h = 460, 96
    pad = 36
    head_h = ih(head[0], f_h) + 18 + ih(head[1], f_h)
    block = mark + gap + ih(eye, f_eye) + gap + head_h + gap + box_h * 2 + gap_y + gap + btn_h
    y = (H - block) // 2
    grid_w = box_w * 3 + gap_x * 2
    x = (W - grid_w) / 2

    draw.rounded_rectangle((x, y, x + mark, y + mark), radius=16, fill=WHITE)
    lb = _ink_box(draw, "BBE", f_logo)
    draw.text(
        (x + (mark - (lb[2] - lb[0])) / 2 - lb[0], y + (mark - (lb[3] - lb[1])) / 2 - lb[1]),
        "BBE",
        font=f_logo,
        fill=INK,
    )
    bb = _ink_box(draw, "BBE School", f_brand)
    draw.text((x + mark + 20 - bb[0], y + (mark - (bb[3] - bb[1])) / 2 - bb[1]), "BBE School", font=f_brand, fill=WHITE)
    y += mark + gap

    y += _put_ink(draw, x, y, eye, f_eye, WHITE) + gap
    for i, line in enumerate(head):
        y += _put_ink(draw, x, y, line, f_h, WHITE) + (18 if i == 0 else gap)

    for i, label in enumerate(labels):
        col, row = i % 3, i // 3
        x0 = x + col * (box_w + gap_x)
        y0 = y + row * (box_h + gap_y)
        draw.rounded_rectangle((x0, y0, x0 + box_w, y0 + box_h), radius=16, fill=(247, 246, 243))
        ib = _ink_box(draw, label, f_box)
        draw.text((x0 + pad - ib[0], y0 + (box_h - (ib[3] - ib[1])) / 2 - ib[1]), label, font=f_box, fill=INK)
    y += box_h * 2 + gap_y + gap

    draw.rounded_rectangle((x, y, x + btn_w, y + btn_h), radius=14, fill=RED)
    word = "Try free practice"
    wb = _ink_box(draw, word, f_btn)
    arrow = 26
    group = (wb[2] - wb[0]) + 16 + arrow
    gx = x + (btn_w - group) / 2
    draw.text((gx - wb[0], y + (btn_h - (wb[3] - wb[1])) / 2 - wb[1]), word, font=f_btn, fill=WHITE)
    ax = gx + (wb[2] - wb[0]) + 16
    ay = y + btn_h / 2
    draw.line([(ax, ay), (ax + arrow, ay)], fill=WHITE, width=3)
    draw.line([(ax + arrow - 10, ay - 8), (ax + arrow, ay), (ax + arrow - 10, ay + 8)], fill=WHITE, width=3)
    save(base, "06-light.png")


if __name__ == "__main__":
    v1_bleed()
    v2_poster()
    v3_split()
    v4_dark()
    v5_tracks()
    v6_light()
