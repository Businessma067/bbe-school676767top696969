#!/usr/bin/env python3
"""Export each textbook figure as a standalone PNG for TheoryReader."""
from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))

# Load generate_pdf as a module without running main
spec = importlib.util.spec_from_file_location("generate_pdf", ROOT / "generate_pdf.py")
mod = importlib.util.module_from_spec(spec)
assert spec.loader
# Prevent main() side effects: patch CONTENT load already happens at import —
# generate_pdf reads book-content.json at import time. That's fine.
spec.loader.exec_module(mod)

import pymupdf
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4

OUT = ROOT.parent / "public" / "bbe-theory" / "figs"
OUT.mkdir(parents=True, exist_ok=True)

# Usable content width matches TheoryReader max-w-3xl ~ roughly PDF text width
FIG_W = 480
PAD = 10

for fig_id, drawer in mod.FIGURES.items():
    h = mod.FIG_HEIGHTS.get(fig_id, 180)
    page_h = h + 2 * PAD
    page_w = FIG_W + 2 * PAD
    tmp = OUT / f"_{fig_id}.pdf"
    c = canvas.Canvas(str(tmp), pagesize=(page_w, page_h))
    c.setFillColor(mod.FIG_FILL)
    c.setStrokeColor(mod.FIG_EDGE)
    c.setLineWidth(0.7)
    c.rect(0, 0, page_w, page_h, stroke=1, fill=1)
    drawer(c, PAD, PAD, FIG_W, h)
    c.save()

    doc = pymupdf.open(tmp)
    page = doc[0]
    pix = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False)
    out_png = OUT / f"{fig_id}.png"
    pix.save(str(out_png))
    doc.close()
    tmp.unlink(missing_ok=True)
    print(f"wrote {out_png.relative_to(ROOT.parent)} ({pix.width}x{pix.height})")

print(f"exported {len(mod.FIGURES)} figures")
