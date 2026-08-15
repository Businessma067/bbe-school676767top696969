"""Re-extract LOGIC.pdf text with character-level position-aware line building.

PyMuPDF's plain "text" extraction mis-clusters some operator glyphs (rendered
in a different embedded font, e.g. DejaVuSerif's / operators like
u2227(and)/u2228(or)/u2286(subseteq)/etc.) into the wrong reading-order slot -
sometimes as an isolated "line", sometimes appended at the very end of an
unrelated line. This produced garbled/lost/misplaced operators downstream.

Fix: pull every individual CHARACTER with its bounding box (rawdict), cluster
characters into lines by vertical-center proximity (not PyMuPDF's own line/
span grouping), then within each line sort purely by x0 and join - so every
glyph (including the misbehaving operator glyphs) lands in its true inline
position based on real page coordinates.
"""
import re

import fitz

PDF = r"C:\Users\bubli\Downloads\Telegram Desktop\LOGIC.pdf"
OUT = "logic_pdf_extract_v2.txt"

Y_TOL = 3.5  # points; chars within this vertical-center distance are one line


def chars_for_page(page):
    d = page.get_text("rawdict")
    chars = []
    for block in d["blocks"]:
        for line in block.get("lines", []):
            for span in line["spans"]:
                for c in span["chars"]:
                    ch = c["c"]
                    x0, y0, x1, y1 = c["bbox"]
                    yc = (y0 + y1) / 2.0
                    chars.append((yc, x0, x1, ch))
    return chars


def cluster_lines(chars):
    chars = sorted(chars, key=lambda s: (s[0], s[1]))
    lines = []
    cur = []
    cur_y = None
    for yc, x0, x1, ch in chars:
        if cur and abs(yc - cur_y) > Y_TOL:
            lines.append(cur)
            cur = []
            cur_y = None
        cur.append((x0, x1, ch))
        cur_y = yc if cur_y is None else (cur_y * (len(cur) - 1) + yc) / len(cur)
    if cur:
        lines.append(cur)
    out_lines = []
    for line in lines:
        line = sorted(line, key=lambda s: s[0])
        pieces = []
        prev_x1 = None
        for x0, x1, ch in line:
            if prev_x1 is not None and x0 - prev_x1 > 1.2 and ch != " " and pieces and pieces[-1] != " ":
                pieces.append(" ")
            pieces.append(ch)
            prev_x1 = x1
        text = "".join(pieces)
        text = re.sub(r" {2,}", " ", text).rstrip()
        out_lines.append(text)
    return out_lines


def main():
    doc = fitz.open(PDF)
    all_lines = []
    for pno in range(len(doc)):
        page = doc[pno]
        chars = chars_for_page(page)
        lines = cluster_lines(chars)
        all_lines.append(f"===== PAGE {pno + 1} =====")
        all_lines.extend(lines)
    text = "\n".join(all_lines)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(text)
    print("wrote", OUT, len(text), "chars")


if __name__ == "__main__":
    main()
