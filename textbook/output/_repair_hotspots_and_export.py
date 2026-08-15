# -*- coding: utf-8 -*-
"""Repair mangled hotspot formulas before Composer/inherited agents rewrite subsections."""
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch11_raw.json")
d = json.loads(p.read_text(encoding="utf-8"))

sub = next(s for s in d["subsections"] if s["id"] == "11.1")

t = next(x for x in sub["tasks"] if x["local_num"] == 4)
t["given"] = (
    "• Monthly periodic rate: $i_m = 1.75\\% = 0.0175$\n"
    "• Months per year: $n = 12$"
)
t["formulas"] = (
    "• Nominal annual rate $= 12 i_m$\n"
    "• Effective annual rate $R = (1 + i_m)^{12} - 1$"
)

# other monthly-rate twin if present
for n in range(1, 21):
    t = next(x for x in sub["tasks"] if x["local_num"] == n)
    f = t.get("formulas") or ""
    if "monthly rate $" in f or "=(1+i_m)" in f or "monthly rate R" in f:
        t["formulas"] = (
            "• Nominal annual rate $= 12 i_m$\n"
            "• Effective annual rate $R = (1 + i_m)^{12} - 1$"
        )

for n in (17, 18):
    t = next(x for x in sub["tasks"] if x["local_num"] == n)
    t["formulas"] = (
        "• Present value $S_0 = T / (1 + r/n)^{nt}$ (T = target future amount)\n"
        "• Effective annual rate $R = (1 + r/n)^{n} - 1$"
    )

t = next(x for x in sub["tasks"] if x["local_num"] == 17)
t["given"] = (
    "• Target amount T = $25,000 after t = 7 years\n"
    "• Account X: r = 5.00%, n = 12 (monthly)\n"
    "• Account Y: r = 5.10%, n = 4 (quarterly)"
)

sub2 = next(s for s in d["subsections"] if s["id"] == "11.2")
for t in sub2["tasks"]:
    f = t.get("formulas") or ""
    if "fraction" in f.lower() or ("v(t)" in f and "delta" in f.lower()) or "\\delta" in f:
        if "v(t)" in f or "v_0" in f or "remaining" in f.lower():
            t["formulas"] = (
                "• Value: $v(t) = v_0 e^{-\\delta t}$\n"
                "• Fraction remaining equals $e^{-\\delta t}$\n"
                "• Time for a given fraction $f$: $t = -\\ln(f)/\\delta = \\ln(1/f)/\\delta$"
            )

sub4 = next(s for s in d["subsections"] if s["id"] == "11.4")
t = next(x for x in sub4["tasks"] if x["local_num"] == 20)
t["given"] = (
    "• Tranche 1: a = $25,000 per year, k = 1, n = 9 years\n"
    "• Tranche 2: a = $18,000, k = 1.07, n = 9 years\n"
    "• Tranche 3: a = $30,000, k = 0.92, infinite horizon\n"
    "• Fee stream (separate): $f_n = 1{,}000/n$"
)
for i, e in enumerate(t.get("explanations") or []):
    e = e.replace(
        "$225,000.00+$215,603.80=$440,603.80",
        "$225,000.00 + $215,603.80 = $440,603.80",
    )
    e = e.replace(
        "225,000.00+215,603.80=$440,603.80",
        "$225,000.00 + $215,603.80 = $440,603.80",
    )
    e = e.replace(
        "225,000.00+215,603.80+375,000.00",
        "$225,000.00 + $215,603.80 + $375,000.00",
    )
    e = e.replace("f100", "$f_{100}$")
    e = e.replace("$$f_{100}$$", "$f_{100}$")
    t["explanations"][i] = e
st = t.get("steps") or ""
st = st.replace("f100", "$f_{100}$")
t["steps"] = st

p.write_text(json.dumps(d, ensure_ascii=False, indent=2), encoding="utf-8")
print("hotspots repaired")

# re-export inputs for agents
out = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch11_subsection_fixes")
for sub in d["subsections"]:
    path = out / f"{sub['id']}_INPUT.json"
    path.write_text(json.dumps(sub["tasks"], ensure_ascii=False, indent=2), encoding="utf-8")
    # delete incomplete output if any
    for dead in (out / f"{sub['id']}.json",):
        if dead.exists():
            dead.unlink()
            print("removed stale", dead.name)
    print("exported", path.name, len(sub["tasks"]))
