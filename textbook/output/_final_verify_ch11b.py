# -*- coding: utf-8 -*-
import json, re
from pathlib import Path

d = json.loads(Path(__file__).with_name("ch11_raw.json").read_text(encoding="utf-8"))


def get(sid, n):
    s = next(x for x in d["subsections"] if x["id"] == sid)
    return next(t for t in s["tasks"] if t["local_num"] == n)


checks = [
    ("11.1", 16, "explanations"),
    ("11.3", 3, "explanations"),
    ("11.3", 12, "formulas"),
    ("11.3", 16, "explanations"),
    ("11.3", 19, "explanations"),
    ("11.4", 10, "steps"),
    ("11.4", 10, "explanations"),
    ("11.4", 15, "steps"),
    ("11.4", 15, "explanations"),
    ("11.4", 17, "formulas"),
    ("11.4", 17, "steps"),
    ("11.4", 17, "context"),
    ("11.4", 18, "steps"),
    ("11.4", 18, "explanations"),
    ("11.4", 19, "steps"),
    ("11.4", 19, "explanations"),
    ("11.4", 8, "steps"),
    ("11.5", 11, "formulas"),
]
for sid, n, field in checks:
    t = get(sid, n)
    v = t.get(field)
    print("=" * 60)
    print(f"{sid}/{n}/{field}")
    if isinstance(v, list):
        for i, x in enumerate(v):
            print(f"[{i}] {x}")
    else:
        print(v)

print("\n=== e^{-rt}$* / related scars ===")
rx = re.compile(r"e\^\{-rt\}\$\*|rt\$\*|\$e\^\{-rt\}\$\*")
for s in d["subsections"]:
    for t in s["tasks"]:
        for k in ["context", "given", "formulas", "steps", "statements", "explanations"]:
            v = t.get(k)
            items = v if isinstance(v, list) else ([v] if v else [])
            for i, x in enumerate(items):
                if x and rx.search(str(x)):
                    loc = f"{s['id']}/{t['local_num']}/{k}" + (
                        f"[{i}]" if isinstance(v, list) else ""
                    )
                    print(loc, ":", str(x)[:220])

print("\n=== REAL glued power candidates in 11.4 ===")
bad = re.compile(
    r"(?<![\d.^${\\])(0\.98|0\.97|0\.96|0\.95|0\.94|0\.88|1\.20|1\.15|1\.12|1\.08|1\.06|1\.05|1\.04|1\.03|1\.01)(\d{1,2})(?!\d)"
)
for t in next(s for s in d["subsections"] if s["id"] == "11.4")["tasks"]:
    for k in ["formulas", "steps", "explanations", "statements", "context", "given"]:
        v = t.get(k)
        items = v if isinstance(v, list) else ([v] if v else [])
        for i, x in enumerate(items):
            if not x:
                continue
            sx = str(x)
            for m in bad.finditer(sx):
                left = sx[max(0, m.start() - 20) : m.start()]
                if "^{" in left or "$(" in left:
                    continue
                loc = f"11.4/{t['local_num']}/{k}" + (f"[{i}]" if isinstance(v, list) else "")
                sn = sx[max(0, m.start() - 40) : m.end() + 60]
                print(f"{loc}: ...{sn}...")

print("\n=== 11.1/16 E3 fifty-sq check ===")
t = get("11.1", 16)
print(t["explanations"][3])
print("STEPS:", t["steps"][:300])

print("\n=== Chapter-header-like explanation starts ===")
# leftover polish artifacts like 'Chapter 11' or bare section titles starting explanations
hdr = re.compile(r"(?i)^(Chapter\s+\d+|Section\s+11\.|11\.\d\s+[A-Z][a-z]+)")
for s in d["subsections"]:
    for t in s["tasks"]:
        for i, e in enumerate(t.get("explanations") or []):
            if hdr.search(e.strip()):
                print(f"{s['id']}/{t['local_num']} E{i}: {e[:120]}")

print("\n=== Misc high-value residual mangles ===")
misc = [
    ("rA_empty", re.compile(r"\$r_A\$\$")),
    ("Ke0", re.compile(r"\bKe0\b|K\(1 \+ 0\)-t")),
    ("flat_t2", re.compile(r"\(1 \+ r\)t2|\(1\+r\)t2")),
    ("flat_Vk", re.compile(r"V/\(1\+r\)k")),
    ("502scar", re.compile(r"\(502\s*=|502\s*=")),
    ("282scar", re.compile(r"(?<!\^)(?<!\{)=\s*282\b|(?<!\^)784 = 282")),
    ("1062scar", re.compile(r"(?<!\^)(?<!\{)=\s*1062\b")),
    ("srevenue", re.compile(r"(?<!_|\{)srevenue|(?<!_|\{)scost")),
    ("k5glue", re.compile(r"\(k5-1\)|a·\(k5")),
    ("0.985", re.compile(r"(?<![0-9.])0\.985(?![0-9])")),
    ("wrong_1.105_as_power", re.compile(r"1\.10\s*\^\s*5|1\.105(?![0-9])")),
]
for name, rx in misc:
    hits = []
    for s in d["subsections"]:
        for t in s["tasks"]:
            for k in ["context", "given", "formulas", "steps", "statements", "explanations"]:
                v = t.get(k)
                items = v if isinstance(v, list) else ([v] if v else [])
                for i, x in enumerate(items):
                    if not x:
                        continue
                    for m in rx.finditer(str(x)):
                        loc = f"{s['id']}/{t['local_num']}/{k}" + (
                            f"[{i}]" if isinstance(v, list) else ""
                        )
                        sn = str(x)[max(0, m.start() - 30) : m.end() + 50]
                        hits.append((loc, sn))
    print(f"\n[{name}] {len(hits)} hits")
    for loc, sn in hits[:20]:
        print(f"  {loc}: ...{sn}...")
