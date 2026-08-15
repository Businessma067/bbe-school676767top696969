# -*- coding: utf-8 -*-
import json
import re
import sys
from pathlib import Path

OUT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_verify_ch11_spot_out.txt")
_buf = []

def emit(*a, **k):
    sep = k.get("sep", " ")
    end = k.get("end", "\n")
    _buf.append(sep.join(str(x) for x in a) + end)

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch11_raw.json")
data = json.loads(p.read_text(encoding="utf-8"))

sec0 = data["subsections"][0]
emit("sec keys", list(sec0.keys()))
for k, v in sec0.items():
    if isinstance(v, list) and v and isinstance(v[0], dict):
        emit("list", k, "len", len(v), "keys", list(v[0].keys()))


def tasks_of(sec):
    for key in ("tasks", "problems", "items", "questions", "exercises"):
        if key in sec and isinstance(sec[key], list):
            return sec[key]
    for k, v in sec.items():
        if isinstance(v, list) and v and isinstance(v[0], dict) and (
            "steps" in v[0] or "explanations" in v[0] or "title" in v[0]
        ):
            return v
    return []


def get(sec_id, num):
    for sec in data["subsections"]:
        if sec["id"] != sec_id:
            continue
        for i, t in enumerate(tasks_of(sec), 1):
            ln = t.get("local_num")
            if ln == num or str(ln) == str(num):
                return t
            tid = str(t.get("id") or t.get("number") or t.get("n") or i)
            if tid in (str(num), f"{sec_id}/{num}", f"{num}"):
                return t
        ts = tasks_of(sec)
        if 1 <= num <= len(ts):
            return ts[num - 1]
    return None


def dump_fields(t, fields=None):
    if not t:
        emit("  MISSING")
        return
    fields = fields or [
        "local_num", "title", "context", "formulas", "given",
        "steps", "explanations",
    ]
    for f in fields:
        if f not in t:
            continue
        v = t[f]
        if isinstance(v, list):
            emit(f"  {f}:")
            for i, item in enumerate(v):
                s = item if isinstance(item, str) else json.dumps(item, ensure_ascii=False)
                emit(f"    [{i}] {s}")
        else:
            emit(f"  {f}: {v}")


SPOTS = [
    ("11.1", 9),
    ("11.1", 16),
    ("11.2", 14),
    ("11.2", 20),
    ("11.3", 9),
    ("11.4", 1),
    ("11.4", 5),
    ("11.4", 6),
    ("11.5", 5),
    ("11.5", 6),
    ("11.5", 7),
    ("11.6", 10),
]

emit("\n=== SPOT CHECKS ===")
for sec_id, num in SPOTS:
    emit(f"\n######## {sec_id}/{num} ########")
    t = get(sec_id, num)
    dump_fields(t)

emit("\n=== 11.7 search discriminant/72/s2 ===")
for sec in data["subsections"]:
    if sec["id"] != "11.7":
        continue
    for i, t in enumerate(tasks_of(sec), 1):
        blob = json.dumps(t, ensure_ascii=False)
        hit = any(
            x in blob.lower()
            for x in ("discriminant", "sqrt{72}", "s2 =", '"s2"', "s_2")
        ) or re.search(r"\bs2\b", blob)
        if hit or ("72" in blob and ("sqrt" in blob.lower() or "discriminant" in blob.lower())):
            emit(f"\n-- task local_num={t.get('local_num')} title={t.get('title','')[:80]}")
            dump_fields(t)

emit("\n=== HEADER-LIKE PREFIXES in explanations (11.2-11.4) ===")
header_hits = 0
for sec in data["subsections"]:
    if sec["id"] not in ("11.2", "11.3", "11.4"):
        continue
    for i, t in enumerate(tasks_of(sec), 1):
        expl = t.get("explanations") or []
        for j, e in enumerate(expl):
            if not isinstance(e, str):
                continue
            start = e[:160]
            if re.match(r"(?i)^(worksheet|chapter\s+\d|11\.\d\b|section\s|11\.\d\s*/\s*)", e):
                emit(f"{sec['id']}/{t.get('local_num')} E{j} HEADER_START: {start!r}")
                header_hits += 1
            if re.match(
                r"^(and |or |of |for |with |to |from |vs\.? |under |plus |then |rates |maturity |equipment |bank |payment |horizon |fund )",
                e,
                re.I,
            ):
                emit(f"{sec['id']}/{t.get('local_num')} E{j} LOWER_START: {start!r}")
                header_hits += 1
emit(f"header-like hits: {header_hits}")

# All-chapter explanation header fragment scan
emit("\n=== ALL CHAPTER explanation starts starting with subsection title words ===")
title_words = {
    "11.1": "Discrete Compounding",
    "11.2": "Continuous Compounding",
    "11.3": None,
    "11.4": "Geometric Series",
    "11.5": None,
    "11.6": None,
    "11.7": None,
}
for sec in data["subsections"]:
    stitle = sec.get("title") or ""
    for t in tasks_of(sec):
        for j, e in enumerate(t.get("explanations") or []):
            if not isinstance(e, str):
                continue
            if stitle and e.startswith(stitle):
                emit(f"{sec['id']}/{t.get('local_num')} E{j} starts with sec title: {e[:140]!r}")
            # classic worksheet leftover patterns from polish
            for pat in (
                r"^11\.\d",
                r"(?i)^worksheet",
                r"(?i)^chapter\s",
                r"(?i)^problem\s+\d",
                r"(?i)^exercise\s",
            ):
                if re.match(pat, e):
                    emit(f"{sec['id']}/{t.get('local_num')} E{j} PAT {pat}: {e[:140]!r}")

PATTERNS = [
    ("glued_pow_decimal", re.compile(r"(?<![^{\d])(?<!\^)(?<!\{)(?<!\{)\b(1\.05|1\.08|1\.10|0\.97|0\.98|1\.06|1\.04|0\.95)(\d{1,2})\b")),
    ("kn_minus", re.compile(r"\(kn\s*-\s*1\)|\bkn\s*-\s*1\b|/\(kn\s*-\s*1\)")),
    ("kt_minus", re.compile(r"a·kt-1|\bkt-1\b|a·kn\b")),
    ("currency_times_paren", re.compile(r"(?<![A-Za-z])\d[\d,]*(?:\.\d+)?\$\(")),
    ("e_times_paren_after", re.compile(r"(?:\$e\^\{[^}]+\}|e\^\{[^}]+\})\$?\(")),
    ("Pte_glue", re.compile(r"P\([^)]*\)\$e|\$e\^\{[^}]+\}\$\(")),
    ("nested_annuity", re.compile(r"1\s*/\s*\$\(|\[1\s*-\s*\$1/|1-\$\(1\+r\)|\[\s*\$1\s*-")),
    ("empty_math", re.compile(r"\$\s*\$")),
    ("k5_glue", re.compile(r"\bk5-1\b|\(k5-1\)")),
    ("katex_1_10_5", re.compile(r"\$1\.10\^5\$|1\.10\^5")),
    ("e_brace_bad", re.compile(r"e\^\{\(r_?A|e\^\(rA|e\^\{rAt\}|\\delta Bt|e\^\{\(rA")),
    ("501_80", re.compile(r"501/80")),
    ("flat_e_rt", re.compile(r"(?<!\$)(?<![A-Za-z\\])e\^rt\b|(?<!\$)e\^\(")),
    ("sqrt72", re.compile(r"sqrt.?72|\\\\sqrt\{72\}|√72|disc.*72", re.I)),
    ("s2_glue", re.compile(r"(?<![A-Za-z_\\])s2(?![0-9A-Za-z])|s2\s*=")),
    ("1/\$(", re.compile(r"/\$\(")),
    ("limn", re.compile(r"limn→∞|an\s*=")),
]

emit("\n=== MANGLE SCAN (high severity) ===")
seen = set()
for sec in data["subsections"]:
    for t in tasks_of(sec):
        i = t.get("local_num")
        for field, val in t.items():
            texts = []
            if isinstance(val, str):
                texts = [(field, val)]
            elif isinstance(val, list):
                for j, item in enumerate(val):
                    if isinstance(item, str):
                        texts.append((f"{field}[{j}]", item))
            for fname, text in texts:
                for name, rx in PATTERNS:
                    for m in rx.finditer(text):
                        lo = max(0, m.start() - 45)
                        hi = min(len(text), m.end() + 45)
                        snip = text[lo:hi].replace("\n", " ")
                        key = (sec["id"], i, fname, name, snip)
                        if key in seen:
                            continue
                        seen.add(key)
                        emit(f"{sec['id']}/{i}/{fname} [{name}]: ...{snip}...")

emit("\nDone.")
OUT.write_text("".join(_buf), encoding="utf-8")
print(f"wrote {OUT} chars={len(''.join(_buf))}", file=sys.stderr)