# -*- coding: utf-8 -*-
import json, re
from pathlib import Path

p = Path(__file__).with_name("ch11_raw.json")
d = json.loads(p.read_text(encoding="utf-8"))

FIELDS = ["context", "given", "formulas", "steps", "statements", "explanations", "title"]


def fields(task):
    out = []
    for k in FIELDS:
        v = task.get(k)
        if v is None:
            continue
        if isinstance(v, list):
            for i, x in enumerate(v):
                out.append((f"{k}[{i}]", str(x)))
        else:
            out.append((k, str(v)))
    return out


# Known false-positive-prone glued decimal powers: capture candidate then filter
GLUED_DEC = re.compile(r"(?<![0-9.])((?:0|1)\.\d{2})(\d{1,2})(?!\d)")

# Targets often meant as base^exp when nearby prose mentions "to the Nth"
KNOWN_GLUE_TARGETS = {
    ("1.05", "10"),
    ("0.97", "20"),
    ("1.04", "15"),
    ("1.08", "10"),
    ("1.08", "11"),
    ("0.98", "10"),
    ("1.12", "10"),
    ("1.02", "8"),
    ("1.06", "7"),
    ("1.06", "6"),
    ("0.94", "15"),
    ("0.98", "5"),
    ("0.98", "19"),
    ("1.01", "11"),
    ("1.03", "11"),
    ("1.01", "20"),
    ("1.03", "20"),
    ("1.15", "5"),
    ("1.15", "6"),
}


def snip(s, m, w=70):
    a = max(0, m.start() - 40)
    b = min(len(s), m.end() + w)
    return s[a:b].replace("\n", " ")


issues = []

PATTERNS = [
    ("flat_1-kn", re.compile(r"\(1\s*-\s*kn\)")),
    ("flat_kn-1", re.compile(r"\(kn\s*-\s*1\)")),
    ("flat_kt-1", re.compile(r"(?<!\$)(?<!\{)a[·\.]?kt-1\b|:\s*a[·\.]?kt-1\b")),
    ("flat_k5", re.compile(r"\(k5-1\)|a·\(k5")),
    ("pow_as_$2", re.compile(r"\)\$2\b|\([0-9.]+\)\$2")),
    ("pow_as_2e", re.compile(r"\)2e-|\([0-9.]+\)2e-")),
    ("rA_empty_math", re.compile(r"\$r_A\$\$")),
    ("times_$paren", re.compile(r"(?<!\$)(?<![A-Za-z_])\d[\d,]*\$\(")),
    ("e_rt_(t)_scar", re.compile(r"\$e\^\{[^}]+\}(?:\$)?\([0-9.]|e\^\{-0\.\d+\}\([0-9]|× \$e\^\{[^}]+\}\([0-9]")),
    ("disc_282_scar", re.compile(r"=\s*282\b")),
    ("disc_1062_scar", re.compile(r"=\s*1062\b")),
    ("fifty_sq_scar", re.compile(r"\(502\s*=|502\s*=\s*2.?500")),
    ("K_r0_mangle", re.compile(r"K\(1 \+ 0\)-t|\bKe0\b")),
    ("Chapter_header", re.compile(r"(?m)^\s*Chapter\s+\d+")),
    ("limn_flat", re.compile(r"limn→∞")),
    ("sum_an_flat", re.compile(r"∑an\b")),
    ("np_flat", re.compile(r"1/np\b|∑n=1\s*∞\s*1/np|n1\.5\b|n0\.5\b")),
    ("Pte_no_times", re.compile(r"P\(t\)\$e\^\{|/\)?P\(t\)\$e")),
    ("(1+r)t2_flat", re.compile(r"\(1 \+ r\)t2\b|\(1\+r\)t2\b")),
    ("V/(1+r)k_flat", re.compile(r"V/\(1\+r\)k\b")),
]

# Dump all 11.4 formulas
print("=== 11.4 FORMULAS FIELD (tasks 1-20) ===")
s4 = next(s for s in d["subsections"] if s["id"] == "11.4")
for t in s4["tasks"]:
    n = t["local_num"]
    f = t.get("formulas", "")
    print(f"\n--- 11.4/{n} ---")
    print(f)

print("\n=== HARVEST TASKS 11.3/9,16,19 FULL CRITICAL FIELDS ===")
s3 = next(s for s in d["subsections"] if s["id"] == "11.3")
for want in (9, 16, 19):
    t = next(x for x in s3["tasks"] if x["local_num"] == want)
    print(f"\n######## 11.3/{want} {t['title']} ########")
    for k in ("context", "given", "formulas", "steps"):
        print(f"-- {k} --")
        print(t.get(k, ""))
    print("-- explanations --")
    for i, e in enumerate(t.get("explanations", [])):
        print(f"[{i}] {e}")

print("\n=== 11.7 discriminant expl[4] for tasks 6,8 ===")
s7 = next(s for s in d["subsections"] if s["id"] == "11.7")
for want in (6, 8):
    t = next(x for x in s7["tasks"] if x["local_num"] == want)
    print(f"\n11.7/{want} E4:")
    print(t["explanations"][4])

print("\n=== PATTERN HITS (filtered real issues) ===")
for sec in d["subsections"]:
    sid = sec["id"]
    for t in sec["tasks"]:
        ln = t["local_num"]
        for fname, text in fields(t):
            for tag, rx in PATTERNS:
                for m in rx.finditer(text):
                    issues.append((f"{sid}/{ln}/{fname}", tag, snip(text, m)))
            # glued decimal powers that look like base^exp scars
            for m in GLUED_DEC.finditer(text):
                base, exp = m.group(1), m.group(2)
                # skip ordinary numbers like 1.1052, 0.9524, money-ish, years
                if len(exp) >= 3:
                    continue
                # skip if this is clearly already inside $...^{...}$
                left = text[max(0, m.start() - 12) : m.start()]
                if "^{" in left or "$(" in left:
                    continue
                # skip rates that are just multi-decimal like 1.1052 if base 1.10 and exp 52 - already excluded by 2-digit after 2dp?
                # pattern: 1.10 + 52 would be 1.1052 - base=1.10 exp=52 - we skip len>=3
                # 1.105 matches base=1.10 exp=5 — potential scar OR legitimate K≈1.105
                if (base, exp) == ("1.10", "5"):
                    # only flag if nearby suggests false 'power' rewrite; keep as watch
                    ctx = text[max(0, m.start() - 30) : m.end() + 30]
                    if "e^{" in ctx or "continuous" in ctx.lower() or "K_cont" in ctx or "K ≈" in ctx or "K≈" in ctx:
                        continue  # legitimate 1.105 / 1.1052 continuous factor
                if (base, exp) in KNOWN_GLUE_TARGETS or (
                    base.startswith("0.") or base.startswith("1.")
                ) and exp.isdigit() and int(exp) >= 5:
                    # further filter: flag only if nearby mentions power/^n or formula uses it as k^n
                    ctx = text[max(0, m.start() - 80) : m.end() + 80]
                    if re.search(
                        r"to the |power|raised|/\(0\.|/\(1\.|·\(1\s*-|·\(|s\d+\s*=|wrong exponent|nth",
                        ctx,
                        re.I,
                    ) or (base, exp) in KNOWN_GLUE_TARGETS:
                        issues.append(
                            (
                                f"{sid}/{ln}/{fname}",
                                f"glued_dec_pow({base}^{exp}?)",
                                snip(text, m),
                            )
                        )

# Chapter headers anywhere
print("\n=== CHAPTER / SECTION HEADER SCANS ===")
hdr = re.compile(r"(?i)\bChapter\s+11\b|\bChapter\s+\d+\b")
for sec in d["subsections"]:
    for t in sec["tasks"]:
        for fname, text in fields(t):
            for m in hdr.finditer(text):
                print(f"{sec['id']}/{t['local_num']}/{fname}: ...{snip(text, m)}...")

# Deduplicate & print issues sorted by priority groups
prio = {
    "pow_as_$2": 1,
    "pow_as_2e": 1,
    "rA_empty_math": 1,
    "disc_282_scar": 1,
    "disc_1062_scar": 1,
    "fifty_sq_scar": 1,
    "K_r0_mangle": 1,
    "e_rt_(t)_scar": 1,
    "flat_1-kn": 2,
    "flat_kn-1": 2,
    "flat_kt-1": 2,
    "flat_k5": 2,
    "times_$paren": 2,
    "limn_flat": 2,
    "sum_an_flat": 2,
    "np_flat": 2,
    "(1+r)t2_flat": 2,
    "V/(1+r)k_flat": 2,
    "Pte_no_times": 3,
    "Chapter_header": 2,
}

# filter glued that are clearly money/rates: 0.074424 etc — pattern uses only 2dp after point so 0.074424 would be 0.07 + 4424 len4 skip

seen = set()
uniq = []
for loc, tag, s in issues:
    key = (loc, tag, s)
    if key in seen:
        continue
    seen.add(key)
    uniq.append((prio.get(tag, 5) if not tag.startswith("glued") else 2, loc, tag, s))

uniq.sort(key=lambda x: (x[0], x[1], x[2]))
print(f"\n=== ISSUES ({len(uniq)}) ===")
for pr, loc, tag, s in uniq:
    print(f"P{pr}\t{loc}\t[{tag}]\t{s}")

# Special dump: 11.4 formulas remaining (1-kn) list
print("\n=== 11.4 formulas still with flat kn ===")
for t in s4["tasks"]:
    f = t.get("formulas", "")
    if re.search(r"\(1\s*-\s*kn\)|\(kn\s*-\s*1\)|kt-1", f):
        print(f"11.4/{t['local_num']}: {f}")

# Check 0.985 specifically and 1.105
print("\n=== 0.985 / 1.105 / 502 / 282 / 1062 raw hits ===")
rxs = {
    "0.985": re.compile(r"(?<![0-9.])0\.985(?![0-9])"),
    "1.105": re.compile(r"(?<![0-9.])1\.105(?![0-9])"),
    "1.1052": re.compile(r"1\.1052"),
    "502=": re.compile(r"502\s*="),
    "282": re.compile(r"=\s*282\b|784 = 282"),
    "1062": re.compile(r"=\s*1062\b|11,236 = 1062"),
}
for sec in d["subsections"]:
    for t in sec["tasks"]:
        for fname, text in fields(t):
            for name, rx in rxs.items():
                for m in rx.finditer(text):
                    print(f"{sec['id']}/{t['local_num']}/{fname} [{name}]: {snip(text, m, 90)}")
