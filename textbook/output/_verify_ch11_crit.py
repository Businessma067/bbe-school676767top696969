# -*- coding: utf-8 -*-
"""Targeted high-severity remaining issues for Ch11."""
import json
import re
from pathlib import Path

RAW = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch11_raw.json")
OUT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_verify_ch11_crit.txt")
data = json.loads(RAW.read_text(encoding="utf-8"))
buf = []

def emit(*a):
    buf.append(" ".join(str(x) for x in a) + "\n")

def tasks():
    for sec in data["subsections"]:
        for t in sec["tasks"]:
            yield sec["id"], t

# Patterns that are almost certainly bad
RX = [
    ("glued_base_exp", re.compile(r"(?<![\^_{])(?<!\$)(?<![0-9A-Za-z])(1\.0[0-9]|0\.9[0-9]|1\.1[0-9])(\d{1,2})\b")),
    ("pow_as_dollar2", re.compile(r"\)\$2\b|\(\d+\)\$2\b|\)2e-|\(\d+\)2e-|\$2 e\^|\$2e")),
    ("bare_e_rt_glue", re.compile(r"(?<![A-Za-z\\$])e\^\{?-?\d[\d.]*\}\$?\(|Ke0\b|2e-\d|e\^rt\b|(?<![A-Za-z\\$])er\b")),
    ("times_dollar_paren", re.compile(r"(?<![A-Za-z_])(?:\d[\d,]*(?:\.\d+)?|P\(t\*?\))\$\(")),
    ("e_close_paren_arg", re.compile(r"\$e\^\{[^}]+\}\$\(|e\^\{[^}]+\}\$\(|e\^\{-?\d[\d.]*\}\(")),
    ("k_pow_flat", re.compile(r"\(kn\s*-\s*1\)|\(k5-1\)|a·kt-1|\bkt-1\b|\bk5-1\b|/ \(kn")),
    ("sq_perfect_flat", re.compile(r"=\s*(\d{2,})(\d)\s+exactly\b|=\s*(\d{2,5})\s*=\s*(\d{2,3})2\s+exactly")),
    ("sq_scar_282_1062", re.compile(r"=\s*282\s+exactly|=\s*1062\s+exactly|=\s*(\d+)\s*=\s*(\d{2,4})2\s+exactly")),
    ("fifty_sq_scar", re.compile(r"\b502\s*=\s*2,?500\b|\b50\^?2\s*=\s*2,?500\b|(?<!\^)(?<!\{)502\b")),
    ("annuity_nested", re.compile(r"1-\$1/|1-\$\(1\+|\[1-\$|/\s*\$\(|\[\s*\$1\s*-")),
    ("paren_power_flat", re.compile(r"\(1\.0\d+\)\d{1,2}\b|\(1\+r/n\)n\b")),
    ("K_formula_mangle", re.compile(r"K\(1\s*\+\s*0\)-t|Ke0\b|K\(1\+r\)-t")),
    ("Pte_no_times", re.compile(r"P\(t\*?\)$e|P\(t\)\$e|f\(t\)\s*=\s*P\(t\)\$e")),
    ("srevenue", re.compile(r"srevenue|scost|familly|growscontinuously")),
    ("limn_flat", re.compile(r"limn→∞|∑an\b|∑5,000")),
    ("rA_empty_math", re.compile(r"\$r_A\$\$|\$,\s*\$")),
    ("wrong_1_105", re.compile(r"(?<![\d.])1\.105(?!\d)|\$1\.10\^5\$")),
]

hits = []
for sid, t in tasks():
    ln = t.get("local_num")
    for field, val in t.items():
        texts = []
        if isinstance(val, str):
            texts = [(field, val)]
        elif isinstance(val, list):
            for j, item in enumerate(val):
                if isinstance(item, str):
                    texts.append((f"{field}[{j}]", item))
        for fname, text in texts:
            for name, rx in RX:
                for m in rx.finditer(text):
                    lo = max(0, m.start() - 50)
                    hi = min(len(text), m.end() + 50)
                    snip = text[lo:hi].replace("\n", " ")
                    hits.append((sid, ln, fname, name, snip))

emit(f"CRITICAL/HIGH hits: {len(hits)}")
for h in hits:
    emit(f"{h[0]}/{h[1]}/{h[2]} [{h[3]}]: ...{h[4]}...")

# Dump full 11.3/9 and 11.3/3 E4 and 11.4 items with glued decimals explicitly
emit("\n=== FULL 11.3/9 ===")
for sid, t in tasks():
    if sid == "11.3" and t["local_num"] == 9:
        for f in ("context", "formulas", "given", "steps", "explanations"):
            emit(f"-- {f} --")
            emit(t[f] if not isinstance(t[f], list) else "\n".join(f"[{i}] {x}" for i,x in enumerate(t[f])))

emit("\n=== 11.3/3 E4 and related ===")
for sid, t in tasks():
    if sid == "11.3" and t["local_num"] == 3:
        for i,e in enumerate(t["explanations"]):
            emit(f"E{i}: {e}")
        emit("steps:", t["steps"])

emit("\n=== 11.4 glued decimal powers explicit search ===")
g = re.compile(r"(1\.05|1\.08|1\.04|1\.10|0\.97|0\.98|0\.95)(\d{1,2})\b")
for sid, t in tasks():
    if sid != "11.4":
        continue
    blob = json.dumps(t, ensure_ascii=False)
    for m in g.finditer(blob):
        # skip if already katex nearby like ^{n}
        ctx = blob[max(0,m.start()-30):m.end()+30]
        if "^{" in ctx[max(0,ctx.find(m.group())-5):]:
            continue
        emit(f"11.4/{t['local_num']}: {ctx}")

emit("\n=== 11.7 perfect-square scars ===")
for sid, t in tasks():
    if sid != "11.7":
        continue
    blob = json.dumps(t, ensure_ascii=False)
    for pat in [r"=\s*\d+\s+exactly", r"1062", r"282 exactly", r"\b72\b", r"s2"]:
        if re.search(pat, blob):
            pass
    for f in ("steps", "explanations", "given"):
        val = t.get(f)
        texts = val if isinstance(val, list) else [val]
        for i, text in enumerate(texts):
            if not text:
                continue
            if re.search(r"exactly|1062|282\b| Discriminant", text):
                # show lines with exactly or sq scars
                if "exactly" in text or "1062" in text or re.search(r"=\s*28\d\b", text):
                    emit(f"11.7/{t['local_num']}/{f}[{i if isinstance(val,list) else ''}]: {text[:500]}")

emit("\n=== unpaired $ / empty math quick ===")
# naive: count $ after removing currency
CUR = re.compile(r"\$\d+(?:,\d{3})*(?:\.\d+)?")
for sid, t in tasks():
    for field, val in t.items():
        texts = []
        if isinstance(val, str):
            texts = [(field, val)]
        elif isinstance(val, list):
            texts = [(f"{field}[{j}]", x) for j,x in enumerate(val) if isinstance(x,str)]
        for fname, text in texts:
            s = CUR.sub("USD", text)
            # remove well-formed $...$ math non-greedy
            s2 = re.sub(r"\$(?![\d])[^$\n]+?\$", "MATH", s)
            leftover = s2.count("$")
            if leftover or "$$$$" in text or "$$" in text.replace("USD",""):
                # check empty $$
                if leftover or re.search(r"\$\$", text):
                    emit(f"{sid}/{t['local_num']}/{fname} leftover$={leftover} snip={text[:120]!r}")

OUT.write_text("".join(buf), encoding="utf-8")
print("wrote", OUT, "lines", len(buf))
