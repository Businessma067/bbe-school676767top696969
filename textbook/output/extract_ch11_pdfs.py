# -*- coding: utf-8 -*-
"""Extract text from all Ch11 subsection PDFs."""
from __future__ import annotations

from pathlib import Path
import fitz

IN = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\input\ch11")
OUT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch11_extract")
OUT.mkdir(parents=True, exist_ok=True)

for pdf in sorted(IN.glob("11.*.pdf")):
    doc = fitz.open(pdf)
    pages = []
    for i, page in enumerate(doc, 1):
        pages.append(f"\n===== PAGE {i} =====\n")
        pages.append(page.get_text("text"))
    text = "".join(pages)
    dest = OUT / f"{pdf.stem}.txt"
    dest.write_text(text, encoding="utf-8")
    print(f"{pdf.name}: {doc.page_count} pages, {len(text)} chars -> {dest.name}")
    doc.close()

# also write a combined index of first lines
index = []
for txt in sorted(OUT.glob("11.*.txt")):
    body = txt.read_text(encoding="utf-8")
    head = "\n".join(body.splitlines()[:40])
    index.append(f"######## {txt.name} ########\n{head}\n")
(OUT / "_heads.txt").write_text("\n".join(index), encoding="utf-8")
print("wrote _heads.txt")
