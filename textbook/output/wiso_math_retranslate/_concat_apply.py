from pathlib import Path

base = Path(__file__).parent
p1 = (base / "_apply_ch11_p01.py").read_text(encoding="utf-8")
p2 = (base / "_apply_ch11_p01_part2.py").read_text(encoding="utf-8")
p3 = (base / "_apply_ch11_p01_part3.py").read_text(encoding="utf-8")
combined = p1.rstrip() + "\n\n" + p2 + "\n\n" + p3
out = base / "_apply_ch11_p01_all.py"
out.write_text(combined, encoding="utf-8")
print("wrote", out, "chars", len(combined), "PATCH entries", combined.count('PATCH["MATH'))
