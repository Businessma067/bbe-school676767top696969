import re

raw = open("textbook/output/logic_pdf_extract.txt", encoding="utf-8").read()
parts = re.split(r"(?=Task \d+(?:\.|\n))", raw)
part = next(p for p in parts if re.match(r"Task 23(?:\.|\n)", p))
lines = part.split("\n")
out = []
for i, l in enumerate(lines[:30]):
    out.append(f"{i}: {l!r}")
open("textbook/output/_debug_t23b_out.txt", "w", encoding="utf-8").write("\n".join(out))
