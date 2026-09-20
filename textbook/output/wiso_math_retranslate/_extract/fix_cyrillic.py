import json
from pathlib import Path

p = Path(r"src/data/wiso/math-de-ch11.json")
ov = json.loads(p.read_text(encoding="utf-8"))
src = json.loads(
    Path(r"textbook/output/wiso_math_retranslate/ch11-p03.json").read_text(encoding="utf-8")
)
ids = [c["case_id"] for c in src]

# Fix known corruption: Katakana/Cyrillic lookalikes for "logik"
bad = "\u30ed\u30b8\u043a"  # ロ ジ к
fixed = 0
odd_report = []
for cid in ids:
    new_expls = []
    for i, t in enumerate(ov[cid]["tactical_explanations"]):
        nt = t.replace(bad, "logik")
        # also catch any other non-Latin/common-German/math chars
        cleaned = []
        for ch in nt:
            o = ord(ch)
            if 0x0400 <= o <= 0x04FF or 0x3040 <= o <= 0x30FF:
                odd_report.append((cid, chr(65 + i), ch, hex(o)))
                # skip replacing unknown; report only
            cleaned.append(ch)
        if nt != t:
            fixed += 1
        new_expls.append(nt)
    ov[cid]["tactical_explanations"] = new_expls

p.write_text(json.dumps(ov, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# verify
left = []
for cid in ids:
    for i, t in enumerate(ov[cid]["tactical_explanations"]):
        for ch in t:
            o = ord(ch)
            if 0x0400 <= o <= 0x04FF or 0x3040 <= o <= 0x30FF:
                left.append((cid, chr(65 + i), hex(o)))

out = Path(r"textbook/output/wiso_math_retranslate/_extract/_fix_report.txt")
lines = [f"fixed={fixed}", f"left={len(left)}"]
for row in left[:20]:
    lines.append(str(row))
e = ov["MATH 11.57"]["tactical_explanations"][2]
idx = e.find("reine")
lines.append("snippet=" + e[idx : idx + 35])
out.write_text("\n".join(lines), encoding="utf-8")
print("wrote", out)
