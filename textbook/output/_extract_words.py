import fitz
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

PDF = r"C:\Users\bubli\Downloads\Telegram Desktop\LOGIC.pdf"
doc = fitz.open(PDF)

# Find a page that contains a Task with a ∪ symbol per the plain "text" extraction,
# then inspect its "dict" spans to see how PyMuPDF represents/positions that glyph.
for pno in range(len(doc)):
    t = doc[pno].get_text("text")
    if "Task 23" in t and "prime number" in t:
        print("PAGE", pno)
        d = doc[pno].get_text("rawdict")
        for block in d["blocks"]:
            for line in block.get("lines", []):
                for span in line["spans"]:
                    if "true" in "".join(c["c"] for c in span["chars"]):
                        for c in span["chars"]:
                            print(repr(c["c"]), c["bbox"])
        break
