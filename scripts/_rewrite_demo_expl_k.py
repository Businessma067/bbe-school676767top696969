# -*- coding: utf-8 -*-
"""
Rewrite demo tactical_explanations toward mock 3/4 rhythm.

Strategy:
1. Load lean authored bodies from patch_demo_explanations.py (NEW dict).
2. Strong-compress the live over-expanded bodies.
3. Per letter, pick the candidate nearest the subject target center,
   preferring authored when both are in band.
4. Hand-fix a few extreme outliers (binomial tails).
5. Validate 115 headers; bump CONTENT_REV; write JSON.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src" / "data" / "mock-exam-demo-sourced.json"
TS = ROOT / "src" / "lib" / "mock-exam-demo-content.ts"
PATCH = ROOT / "scripts" / "patch_demo_explanations.py"
REV = "2026-09-26k · demo expl closer to mocks 2-4"

TARGET = {
    "economics": (350, 450, 400),  # lo, hi, center
    "math": (550, 700, 625),
}

data = json.loads(PATH.read_text(encoding="utf-8"))

# ---------------------------------------------------------------------------
# Extract NEW from patch_demo_explanations.py without running its writer
# ---------------------------------------------------------------------------
patch_src = PATCH.read_text(encoding="utf-8")
# Cut off at Apply section so we don't write
cut = patch_src.find("# Apply + validate")
assert cut > 0
# Also remove the initial json load/write side effects by replacing PATH load
preamble = (
    "import json\nfrom pathlib import Path\n"
    "NEW = {}\n"
)
# Take from NEW = {} declaration through just before Apply
start = patch_src.find("NEW = {}")
assert start > 0
body = patch_src[start:cut]
# Execute in isolation
ns: dict = {}
exec(preamble + body, ns, ns)
AUTH = ns["NEW"]
assert len(AUTH) == 23, len(AUTH)

# ---------------------------------------------------------------------------
# Stats helpers
# ---------------------------------------------------------------------------
BLOCK_RE = re.compile(r"\$\$(.+?)\$\$", re.S)


def measure(expls):
    lens = [len(e) for e in expls]
    blocks = [e.count("$$") // 2 for e in expls]
    return {
        "n": len(lens),
        "avg": round(sum(lens) / len(lens), 1),
        "min": min(lens),
        "max": max(lens),
        "bavg": round(sum(blocks) / len(blocks), 2),
    }


def subject_stats(subject):
    xs = []
    for t in data[subject]:
        xs.extend(t["tactical_explanations"])
    return measure(xs)


BEFORE = {s: subject_stats(s) for s in ("economics", "math")}

# ---------------------------------------------------------------------------
# Strong compressor on live (over-expanded) text
# ---------------------------------------------------------------------------

def is_formula_identity(s: str) -> bool:
    s = s.strip()
    if "\\text{" not in s:
        return False
    if re.search(
        r"\\text\{(?:Current ratio|Quick ratio|Equity ratio|Debt ratio|Working capital|"
        r"Asset turnover|Inventory turnover|Trade receivables|Gross|Return on|Cash ratio)",
        s,
        re.I,
    ):
        return True
    if re.search(r"\\text\{[^}]+\}\s*=\s*\\frac\{\\text", s):
        return True
    return False


def is_bare_number(s: str) -> bool:
    return bool(re.fullmatch(r"-?\d+(?:\.\d+)?(?:\\%)?", s.strip()))


def eqs(s: str) -> int:
    cleaned = re.sub(r"\\(?:neq|leq|geq|approx|equiv|cong|doteq|ngtr|nless)\b", "", s)
    return cleaned.count("=")


def split_parts(text: str):
    parts = []
    pos = 0
    for m in BLOCK_RE.finditer(text):
        if m.start() > pos:
            parts.append(("prose", text[pos : m.start()]))
        parts.append(("math", m.group(1).strip()))
        pos = m.end()
    if pos < len(text):
        parts.append(("prose", text[pos:]))
    return parts


def join_parts(parts):
    out = []
    for kind, body in parts:
        if kind == "prose":
            out.append(body)
        else:
            out.append("$$\n" + body + "\n$$")
    return "".join(out)


def compress_strong(text: str) -> str:
    """Aggressive merge of micro-steps; keep real algebra stepped."""
    text = text.strip()
    # Drop formula-announce prose
    text = re.sub(
        r"(?im)^(?:Apply|Use|Recall|Write) (?:the )?[^\n]{0,70}(?:formula|definition|identity):?\s*\n\n",
        "",
        text,
    )
    text = re.sub(
        r"(?im)^(?:From the extract,\s*)?(?:read|extract|write)[^\n]{0,90}\n\n",
        "",
        text,
    )

    parts = split_parts(text)
    # Drop formula-identity math blocks
    parts = [(k, b) for (k, b) in parts if not (k == "math" and is_formula_identity(b))]

    # Pass: drop bare-number displays when a later math block contains them
    math_bodies = [b for k, b in parts if k == "math"]
    joined_math = "\n".join(math_bodies)
    filtered = []
    for k, b in parts:
        if k == "math" and is_bare_number(b):
            # keep if this number never appears elsewhere in math (rare)
            if b.strip() in joined_math.replace(b, "", 1):
                continue
        filtered.append((k, b))
    parts = filtered

    # Pass: merge expression + evaluation
    out = []
    i = 0
    while i < len(parts):
        k, b = parts[i]
        if k != "math":
            out.append(parts[i])
            i += 1
            continue
        j = i + 1
        while j < len(parts) and parts[j][0] == "prose" and not parts[j][1].strip():
            j += 1
        if j < len(parts) and parts[j][0] == "math":
            nxt = parts[j][1].strip()
            b0 = b.strip()
            # frac then =/approx/number
            if eqs(b0) == 0 and (
                re.fullmatch(r"(?:=|\\approx)\s*.+", nxt)
                or is_bare_number(nxt)
                or (nxt.startswith("\\approx"))
            ):
                if re.fullmatch(r"(?:=|\\approx)\s*.+", nxt):
                    merged = b0 + " " + nxt
                elif nxt.startswith("\\approx"):
                    merged = b0 + " " + nxt
                else:
                    merged = b0 + " = " + nxt
                out.append(("math", merged))
                i = j + 1
                continue
            # expr = result already on nxt with same LHS
            if eqs(b0) == 0 and eqs(nxt) == 1:
                left, right = nxt.split("=", 1)
                if left.strip().replace(" ", "") == b0.replace(" ", ""):
                    out.append(("math", b0 + " = " + right.strip()))
                    i = j + 1
                    continue
            # trivial multiply then use: 6·4=24 and 90-24=66 → keep separate unless both tiny
            if (
                eqs(b0) == 1
                and eqs(nxt) == 1
                and len(b0) <= 28
                and len(nxt) <= 28
                and not any(t in b0 + nxt for t in ("\\sqrt", "\\sum", "\\binom", "\\int"))
            ):
                rhs = b0.split("=")[-1].strip()
                if rhs and rhs in nxt.replace(" ", ""):
                    out.append(("math", b0 + "\\qquad " + nxt))
                    i = j + 1
                    continue
            # drop redundant rounding 3.8736 ≈ 3.87 when prev already ≈ 3.87
            if "\\approx" in b0 and re.fullmatch(
                r"-?\d+(?:\.\d+)?\s*\\approx\s*-?\d+(?:\.\d+)?", nxt.replace(" ", "")
            ):
                # skip nxt
                out.append(("math", b0))
                i = j + 1
                continue
        out.append(parts[i])
        i += 1

    # Pass: collapse binom factorial / power micro-chains
    parts2 = []
    i = 0
    while i < len(out):
        k, b = out[i]
        if k != "math":
            parts2.append(out[i])
            i += 1
            continue
        bs = b.strip().replace(" ", "")
        # drop intermediate a\times b=c decimal chains
        if re.fullmatch(r"[0-9.]+(\\times|\\cdot)[0-9.]+=[0-9.]+", bs):
            i += 1
            continue
        # drop factorial product pieces like 6·5=30
        if re.fullmatch(r"[0-9]+\\cdot[0-9]+=[0-9]+", bs):
            i += 1
            continue
        # drop dfrac{n!}{k!(n-k)!} expansions when a plain binom= follows later — drop long dfrac with !
        if "!" in b and "\\dfrac" in b and "\\binom" in b:
            i += 1
            continue
        if "!" in b and "\\dfrac" in b and re.search(r"\\dfrac\{[0-9\\cdot\s]+\}", b):
            i += 1
            continue
        parts2.append(out[i])
        i += 1

    text2 = join_parts(parts2)
    text2 = re.sub(r"\n{3,}", "\n\n", text2)
    # Drop leftover empty "Sum the two…" etc if next is already the sum
    text2 = re.sub(
        r"(?im)^(?:Sum the two[^\n]*|Divide by 2[^\n]*|Add (?:the )?[^\n]*|Subtract[^\n]*|"
        r"Compare[^\n]*|Assemble[^\n]*|Expand[^\n]* one factor[^\n]*):\s*\n\n",
        "",
        text2,
    )
    text2 = re.sub(r"\n{3,}", "\n\n", text2)
    return text2.strip()


def compress_binom_tail(text: str) -> str:
    """Keep each P(X=k) formula + compact evaluation; drop micro-arithmetic."""
    # If not a binomial letter, fall back
    if "P(X" not in text and "\\binom" not in text:
        return compress_strong(text)

    header, _, rest = text.partition("\n")
    # Rebuild from scratch with a lighter pattern using regex extraction
    # Extract p if present
    # Keep intro through the sum formula
    parts = split_parts(text)
    kept = []
    i = 0
    while i < len(parts):
        k, b = parts[i]
        if k == "prose":
            # keep short prose; drop "Expand (0.2)^n one factor"
            if re.search(r"(?i)one factor at a time|expand \(\d", b):
                i += 1
                continue
            kept.append((k, b))
            i += 1
            continue
        bs = b.strip()
        # Always keep sum formula and P(X=k)=binom... formula lines
        if "\\sum" in bs or re.match(r"^P\(X\s*[=≠\\le\\ge<>]", bs) or bs.startswith("P(X"):
            kept.append((k, bs))
            i += 1
            continue
        if bs.startswith("\\binom") and eqs(bs) <= 1 and "!" not in bs:
            kept.append((k, bs))
            i += 1
            continue
        # Keep final probability assignments P(X=k)=0.00
        if re.match(r"^P\(X", bs) and eqs(bs) == 1:
            kept.append((k, bs))
            i += 1
            continue
        # Keep compact power (0.8)^2=0.64
        if re.match(r"^\([0-9.]+\)\^", bs) and eqs(bs) == 1 and len(bs) < 40:
            kept.append((k, bs))
            i += 1
            continue
        # Keep comparison / running sum lines with +
        if ("P(X" in bs or "+" in bs) and ("\\le" in bs or "\\approx" in bs or eqs(bs) >= 1):
            if "!" not in bs and "\\times" not in bs or len(bs) < 60:
                if "!" not in bs:
                    kept.append((k, bs))
                    i += 1
                    continue
        # Keep final inequality vs 0.5
        if "0.5" in bs or "\\le" in bs or "\\ge" in bs:
            kept.append((k, bs))
            i += 1
            continue
        # drop everything else (micro multiplies, factorial expansions)
        i += 1

    out = join_parts(kept)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.strip()


# ---------------------------------------------------------------------------
# Hybrid pick per letter
# ---------------------------------------------------------------------------

def in_band(n, lo, hi):
    return lo <= n <= hi


def pick(subject: str, authored: str | None, live: str) -> str:
    lo, hi, center = TARGET[subject]
    # Strong-compress live
    if live.count("$$") // 2 >= 40 or len(live) > 2000:
        compressed = compress_binom_tail(live)
        # if still huge, compress_strong again
        if len(compressed) > 2200:
            compressed = compress_strong(compressed)
    else:
        compressed = compress_strong(live)

    candidates = []
    if authored:
        candidates.append(("auth", authored.strip()))
    candidates.append(("comp", compressed.strip()))
    # Also consider live if somehow already short
    if len(live) < hi + 50:
        candidates.append(("live", live.strip()))

    # Prefer authored if in band
    for tag, c in candidates:
        if tag == "auth" and in_band(len(c), lo, hi):
            return c
    # Prefer any in band closest to center
    inband = [(tag, c) for tag, c in candidates if in_band(len(c), lo - 40, hi + 80)]
    if inband:
        inband.sort(key=lambda tc: abs(len(tc[1]) - center))
        return inband[0][1]

    # Otherwise pick closest to center
    candidates.sort(key=lambda tc: abs(len(tc[1]) - center))
    return candidates[0][1]


# ---------------------------------------------------------------------------
# Apply
# ---------------------------------------------------------------------------
choices = {"auth": 0, "comp": 0, "live": 0, "other": 0}

for subject in ("economics", "math"):
    for task in data[subject]:
        cid = task["case_id"]
        auth_list = AUTH.get(cid)
        new_expls = []
        for i, live in enumerate(task["tactical_explanations"]):
            authored = auth_list[i] if auth_list else None
            # Ensure authored header matches live key
            if authored:
                want = "True" if task["answer_key"][i] else "False"
                letter = "ABCDE"[i]
                if not authored.startswith(f"**{letter}.** → {want}"):
                    # fix header only
                    authored = re.sub(
                        r"^\*\*[A-E]\.\*\* → (?:True|False)",
                        f"**{letter}.** → {want}",
                        authored,
                        count=1,
                    )
            chosen = pick(subject, authored, live)
            # track
            if authored and chosen == authored.strip():
                choices["auth"] += 1
            elif chosen == compress_strong(live).strip() or chosen.startswith(live[:30]):
                choices["comp"] += 1
            else:
                choices["other"] += 1
            new_expls.append(chosen)
        task["tactical_explanations"] = new_expls

AFTER = {s: subject_stats(s) for s in ("economics", "math")}
print("BEFORE", BEFORE)
print("AFTER ", AFTER)
print("choice buckets", choices)

# Validate
errors = []
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if task["answer_key"][i] else "False"
            expl = task["tactical_explanations"][i]
            header = f"**{letter}.** → {want}"
            if not expl.startswith(header):
                errors.append(f"{task['case_id']} {letter}: {expl[:60]!r}")
            if expl.count("$$") % 2:
                errors.append(f"{task['case_id']} {letter}: unbalanced $$")

print("checked", checked, "errors", len(errors))
for e in errors[:30]:
    print(" ", e)

if errors:
    raise SystemExit(1)

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

ts = TS.read_text(encoding="utf-8")
ts2, n = re.subn(
    r'export const MOCK_EXAM_DEMO_CONTENT_REV\s*=\s*\n?\s*"[^"]*";',
    f'export const MOCK_EXAM_DEMO_CONTENT_REV =\n  "{REV}";',
    ts,
    count=1,
)
assert n == 1, "CONTENT_REV bump failed"
TS.write_text(ts2, encoding="utf-8")
print("wrote json + CONTENT_REV")

# Per-case report
lines = ["subject case letter len blocks src_guess"]
for subject in ("economics", "math"):
    for task in data[subject]:
        for i, e in enumerate(task["tactical_explanations"]):
            lines.append(
                f"{subject}\t{task['case_id']}\t{'ABCDE'[i]}\t{len(e)}\t{e.count('$$')//2}"
            )
Path("scripts/_demo_expl_after_report.tsv").write_text("\n".join(lines), encoding="utf-8")
print("report written")
