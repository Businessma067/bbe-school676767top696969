# -*- coding: utf-8 -*-
"""
Compress demo tactical_explanations toward mock 3/4 rhythm.

BEFORE (live): econ avg ~579 / ~9 $$ ; math avg ~906 / ~19 $$
TARGET:        econ ~350-450 ; math ~550-700
Keep headers/verdicts; do not touch statements/answer_key/case_ids.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
REV = '2026-09-26k · demo expl closer to mocks 2-4'

data = json.loads(PATH.read_text(encoding="utf-8"))

BLOCK_RE = re.compile(r"\$\$(.+?)\$\$", re.S)


def stats(subject: str):
    lens, blocks = [], []
    for t in data[subject]:
        for e in t["tactical_explanations"]:
            lens.append(len(e))
            blocks.append(e.count("$$") / 2)
    return {
        "n": len(lens),
        "avg": round(sum(lens) / len(lens), 1),
        "min": min(lens),
        "max": max(lens),
        "bavg": round(sum(blocks) / len(blocks), 2),
    }


BEFORE = {s: stats(s) for s in ("economics", "math")}


def split_parts(text: str):
    """Return list of ('prose'|'math', content)."""
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


def is_bare_number(s: str) -> bool:
    s = s.strip()
    return bool(re.fullmatch(r"-?\d+(?:\.\d+)?", s))


def is_simple_expr(s: str) -> bool:
    """Trivial arithmetic LHS without equals."""
    s = s.strip()
    if "=" in s or "\\approx" in s or "\\neq" in s or "\\ngtr" in s or "\\nless" in s:
        return False
    if "\\text{" in s or "\\mathrm{" in s:
        return False
    # allow frac, times, +, -, cdot
    return bool(re.fullmatch(r"[0-9xXqdnk.\s\\{}^_+()·\-+*/fraccdottimesapproxleqgeq]+", s.replace(" ", "")) or True)


def count_eqs(s: str) -> int:
    cleaned = re.sub(r"\\(?:neq|leq|geq|approx|equiv|cong|doteq|ngtr|nless)\b", "", s)
    return cleaned.count("=")


def is_formula_identity(s: str) -> bool:
    """Econ formula teaching like ratio = CA/CL with words."""
    s = s.strip()
    if "\\text{" not in s:
        return False
    # Inventory turnover = cost/average style
    if re.search(r"\\text\{[^}]+\}\s*=\s*\\frac\{\\text", s):
        return True
    if re.search(r"\\text\{(?:Current ratio|Quick ratio|Equity ratio|Debt|Working capital|Asset turnover|Inventory turnover|Trade receivables|Gross margin|Return on)", s, re.I):
        if "=" in s and "\\frac" in s:
            return True
    return False


def looks_like_eval_of(prev: str, nxt: str) -> bool:
    """Second block is '= result' or 'approx result' evaluating prev."""
    nxt = nxt.strip()
    prev = prev.strip()
    if re.fullmatch(r"(?:=|\\approx)\s*[^\n]+", nxt):
        return True
    # prev is expression, nxt is same expr = result
    if count_eqs(nxt) == 1 and prev in nxt.split("=")[0].replace(" ", "") or False:
        left = nxt.split("=")[0].strip() if "=" in nxt else ""
        if left.replace(" ", "") == prev.replace(" ", ""):
            return True
    # prev frac, nxt is just a number or approx number
    if prev.startswith("\\frac") and (
        is_bare_number(nxt)
        or re.fullmatch(r"\\approx\s*-?\d+(?:\.\d+)?", nxt)
        or re.fullmatch(r"≈\s*-?\d+(?:\.\d+)?", nxt)
    ):
        return True
    # prev is a*b or a+b without =, nxt is bare number
    if count_eqs(prev) == 0 and is_bare_number(nxt):
        if any(op in prev for op in ("+", "-", "\\cdot", "\\times", "*", "/")):
            return True
    return False


def merge_eval(prev: str, nxt: str) -> str:
    nxt = nxt.strip()
    prev = prev.strip()
    if re.fullmatch(r"(?:=|\\approx)\s*[^\n]+", nxt):
        return prev + " " + nxt
    if is_bare_number(nxt) or re.fullmatch(r"\\approx\s*-?\d+(?:\.\d+)?", nxt):
        if nxt.startswith("\\approx") or nxt.startswith("="):
            return prev + " " + nxt
        return prev + " = " + nxt
    # nxt is expr = result and left matches prev
    if "=" in nxt:
        left, right = nxt.split("=", 1)
        if left.strip().replace(" ", "") == prev.replace(" ", ""):
            return prev + " = " + right.strip()
    return prev + " = " + nxt


def is_redundant_power_step(prev: str, nxt: str) -> bool:
    """(0.2)^n intermediate multiply chains — drop redundant restatements."""
    # Drop " (0.2)^k = result " when previous line already computed that product
    if re.fullmatch(r"\([0-9.]+\)\^\{?\d+\}?\s*=\s*[0-9.eE+\-×\\times\s]+", nxt.replace(" ", "")):
        return False  # keep final power statement; handled elsewhere
    return False


def compress_power_chain(maths: list[str]) -> list[str]:
    """Collapse consecutive a×a=… power builds into final (a)^n = result."""
    out = []
    i = 0
    while i < len(maths):
        # Detect run of decimal multiplies then a (base)^{n}=result
        if i + 1 < len(maths):
            # pattern: many "0.2 \times 0.2 = 0.04" then "(0.2)^{6}=..."
            run = []
            j = i
            while j < len(maths) and re.match(
                r"^[0-9.]+\\times[0-9.]+=[0-9.]+$",
                maths[j].replace(" ", "").replace("\\times", "\\times"),
            ):
                run.append(maths[j])
                j += 1
            # also match 0.2\times 0.2=0.04 with spaces
            while j < len(maths) and re.match(
                r"^[0-9.]+\s*(\\times|\\cdot|\*)\s*[0-9.]+\s*=\s*[0-9.]+$",
                maths[j].strip(),
            ):
                run.append(maths[j])
                j += 1
            if len(run) >= 2 and j < len(maths) and re.match(
                r"^\([0-9.]+\)\^\{?\d+\}?\s*=",
                maths[j].strip().replace(" ", ""),
            ):
                out.append(maths[j].strip())
                i = j + 1
                continue
            # drop redundant restatement "(0.2)^2=0.04" immediately after "0.2\times0.2=0.04"
            if re.match(r"^[0-9.]+\s*(\\times|\\cdot)\s*[0-9.]+\s*=\s*[0-9.]+$", maths[i].strip()):
                if j == i:  # single multiply
                    if i + 1 < len(maths) and re.match(
                        r"^\([0-9.]+\)\^\{?\d+\}?\s*=\s*" + re.escape(maths[i].split("=")[-1].strip()),
                        maths[i + 1].strip().replace(" ", ""),
                    ):
                        # keep only the power form if next is final, else keep multiply
                        pass
        out.append(maths[i])
        i += 1
    return out


def drop_formula_identity_blocks(parts):
    new = []
    i = 0
    while i < len(parts):
        kind, body = parts[i]
        if kind == "math" and is_formula_identity(body):
            # also drop preceding prose if it only announces the formula
            if new and new[-1][0] == "prose":
                prev = new[-1][1]
                if re.search(
                    r"(?i)(apply|use|write|form|recall|inventory[- ]turnover|current ratio|quick ratio|asset turnover|equity ratio|the formula)\s*[.:]?\s*$",
                    prev.strip()[-80:],
                ):
                    # trim the announcing sentence
                    trimmed = re.sub(
                        r"(?is)(?:\n\n)?[^\n]*(?:formula|turnover is|ratio is|defined as)[^\n]*$",
                        "",
                        prev,
                    )
                    if trimmed.strip():
                        new[-1] = ("prose", trimmed if trimmed.endswith("\n\n") or trimmed.endswith("\n") else trimmed + "\n\n")
                    else:
                        new.pop()
            i += 1
            continue
        new.append(parts[i])
        i += 1
    return new


def merge_micro_math(parts):
    """Merge write-then-evaluate pairs; leave genuine multi-step algebra alone."""
    out = []
    i = 0
    while i < len(parts):
        kind, body = parts[i]
        if kind != "math":
            out.append(parts[i])
            i += 1
            continue
        # Look ahead over whitespace-only prose to next math
        j = i + 1
        while j < len(parts) and parts[j][0] == "prose" and parts[j][1].strip() == "":
            j += 1
        if j < len(parts) and parts[j][0] == "math":
            nxt = parts[j][1]
            # Don't merge if either block already has multiple meaningful eqs
            # or looks like algebra (sqrt, isolate chains)
            heavy = any(
                tok in body or tok in nxt
                for tok in (
                    "\\sqrt",
                    "\\sum",
                    "\\binom",
                    "^{2}",
                    "discriminant",
                )
            )
            # Allow merge of trivial frac=result even near binom context for the eval pair
            if looks_like_eval_of(body, nxt) and count_eqs(body) == 0 and count_eqs(nxt) <= 1:
                # skip merging if body is already a long algebra line
                if len(body) < 120 and not (heavy and "\\sqrt" in body):
                    merged = merge_eval(body, nxt)
                    # only occasionally allow 2 eqs — if merge created at most one =
                    if count_eqs(merged) <= 1:
                        out.append(("math", merged))
                        i = j + 1
                        continue
            # Merge bare number read + next equation that starts with that number
            if is_bare_number(body) and count_eqs(nxt) >= 1:
                # drop the bare number display; next block already uses it
                i = j
                continue
            # Merge two bare numbers that are only "read inventory" style — keep for next
            if is_bare_number(body) and is_bare_number(nxt):
                # look further for sum
                k = j + 1
                while k < len(parts) and parts[k][0] == "prose" and parts[k][1].strip() == "":
                    k += 1
                if k < len(parts) and parts[k][0] == "math":
                    third = parts[k][1]
                    if body in third and nxt in third and "+" in third:
                        # drop two bare reads, keep the sum
                        i = k
                        continue
        out.append(parts[i])
        i += 1
    return out


def merge_trivial_two_step(parts):
    """Rare: combine two short arithmetic blocks into one $$ with two eqs."""
    out = []
    i = 0
    merges_done = 0
    while i < len(parts):
        kind, body = parts[i]
        if kind != "math":
            out.append(parts[i])
            i += 1
            continue
        j = i + 1
        while j < len(parts) and parts[j][0] == "prose" and parts[j][1].strip() == "":
            j += 1
        if (
            merges_done < 1
            and j < len(parts)
            and parts[j][0] == "math"
            and count_eqs(body) == 1
            and count_eqs(parts[j][1]) == 1
            and len(body) < 40
            and len(parts[j][1]) < 40
            and not any(t in body + parts[j][1] for t in ("\\sqrt", "\\sum", "\\binom", "\\frac"))
        ):
            # e.g. 2·2+1=5 style — actually two multiplies: 2·2=4 and 4+1=5
            # Only merge if second uses first result
            b1 = body.strip()
            b2 = parts[j][1].strip()
            rhs1 = b1.split("=")[-1].strip()
            if rhs1 and rhs1 in b2.replace(" ", ""):
                out.append(("math", b1 + "\\qquad " + b2))
                merges_done += 1
                i = j + 1
                continue
        out.append(parts[i])
        i += 1
    return out


def compress_binom_letter(text: str) -> str:
    """For overlong binomial tails: keep each term's formula + result, drop micro-multiplies."""
    parts = split_parts(text)
    maths = [(i, p[1]) for i, p in enumerate(parts) if p[0] == "math"]
    if len(maths) < 30:
        return text

    drop_idx = set()
    bodies = [p[1] for p in parts]

    for i, (kind, body) in enumerate(parts):
        if kind != "math":
            continue
        b = body.strip().replace(" ", "")
        # drop intermediate decimal multiplies used only to build a power
        if re.match(r"^[0-9.]+(\\times|\\cdot)[0-9.]+=[0-9.]+$", b):
            drop_idx.add(i)
            continue
        # drop redundant (0.2)^k = x when we later have final P(X=k)
        if re.match(r"^\([0-9.]+\)\^\{\d+\}=[0-9.eE+\-\\times]+$", b) and "P(" not in body:
            # keep if not followed soon by P(X=...) — actually keep final powers that aren't in a long chain
            # Drop if previous was also a power/multiply (we're in a chain)
            pass
        # drop binom factorial definition when next line gives the integer
        if "\\binom" in body and "!" in body and "=" in body and "P(" not in body:
            # keep compact binom=integer forms; drop factorial expansions
            if "!" in body and "\\dfrac" in body:
                drop_idx.add(i)
                continue
        # drop running partial products like 6·5=30, 30/2=15 when binom result follows
        if re.match(r"^[0-9]+\\cdot[0-9]+=[0-9]+$", b) or re.match(
            r"^\\dfrac\{[0-9]+\}\{[0-9]+\}=[0-9]+$", b
        ):
            drop_idx.add(i)
            continue
        # drop "1\times1=1" style
        if re.match(r"^[0-9.]+\\times[0-9.]+=[0-9.]+$", b) and float(b.split("=")[0].split("\\times")[0] or "0") in (
            0,
            1,
        ):
            drop_idx.add(i)

    # Rebuild: for each P(X=k)= binom... block keep, then keep final P(X=k)=number
    new_parts = []
    for i, (kind, body) in enumerate(parts):
        if i in drop_idx:
            # if dropping creates empty prose sandwich, skip
            continue
        new_parts.append((kind, body))

    # Second pass: merge P(X=k)=formula with following binom=n and powers into fewer lines
    return join_parts(new_parts)


def strip_padding_prose(text: str) -> str:
    """Remove a few padded essay-ish sentences that don't carry arithmetic."""
    # Remove "Read the X from the extract:" when followed by bare number (already handled)
    text = re.sub(
        r"(?m)^(?:Read|Extract|Write|Write down|From the extract,? (?:read|take)|The extract (?:shows|lists))[^\n]{0,80}\n\n",
        "",
        text,
    )
    # Remove "Apply the … formula:" lines
    text = re.sub(
        r"(?m)^Apply (?:the )?[^\n]{0,60}formula:?\s*\n\n",
        "",
        text,
    )
    # Collapse triple newlines
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def compress_one(text: str, subject: str) -> str:
    # Preserve header line
    lines = text.split("\n", 1)
    header = lines[0]
    rest = lines[1] if len(lines) > 1 else ""

    rest = strip_padding_prose(rest)
    parts = split_parts(rest)
    if subject == "economics":
        parts = drop_formula_identity_blocks(parts)
    parts = merge_micro_math(parts)
    parts = merge_micro_math(parts)  # second pass
    # light optional two-step merge for econ tiny arithmetic
    if subject == "economics":
        parts = merge_trivial_two_step(parts)
    rest2 = join_parts(parts)
    rest2 = strip_padding_prose(rest2)

    # Extra pass for huge binomial letters
    if rest2.count("$$") / 2 >= 40:
        rest2 = compress_binom_letter(header + rest2)
        # compress_binom_letter returns full text; split header
        if rest2.startswith(header):
            return rest2
        return header + "\n" + rest2 if not rest2.startswith("**") else rest2

    out = header + rest2
    # tidy
    out = re.sub(r"\n{3,}", "\n\n", out)
    if not out.endswith("\n"):
        # keep no trailing requirement
        pass
    return out.strip() + "\n" if False else out.strip()


# --- Apply ---
for subject in ("economics", "math"):
    for task in data[subject]:
        new_expls = []
        for expl in task["tactical_explanations"]:
            new_expls.append(compress_one(expl, subject))
        task["tactical_explanations"] = new_expls

AFTER = {s: stats(s) for s in ("economics", "math")}

print("BEFORE", BEFORE)
print("AFTER ", AFTER)

# Validate headers
errors = []
checked = 0
for subject in ("economics", "math"):
    for task in data[subject]:
        keys = task["answer_key"]
        expls = task["tactical_explanations"]
        for i, letter in enumerate("ABCDE"):
            checked += 1
            want = "True" if keys[i] else "False"
            header = f"**{letter}.** → {want}"
            if not expls[i].startswith(header):
                errors.append(f"{task['case_id']} {letter}: bad header {expls[i][:50]!r}")
            if expls[i].count("$$") % 2:
                errors.append(f"{task['case_id']} {letter}: unbalanced $$")

print("checked", checked, "errors", len(errors))
for e in errors[:20]:
    print(" ", e)

if not errors:
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    ts = TS.read_text(encoding="utf-8")
    ts2, n = re.subn(
        r'export const MOCK_EXAM_DEMO_CONTENT_REV =\s*\n?\s*"[^"]*";',
        f'export const MOCK_EXAM_DEMO_CONTENT_REV =\n  "{REV}";',
        ts,
        count=1,
    )
    if n != 1:
        # try single-line form
        ts2, n = re.subn(
            r'export const MOCK_EXAM_DEMO_CONTENT_REV =\s*"[^"]*";',
            f'export const MOCK_EXAM_DEMO_CONTENT_REV =\n  "{REV}";',
            ts,
            count=1,
        )
    assert n == 1, "CONTENT_REV replace failed"
    TS.write_text(ts2, encoding="utf-8")
    print("wrote json + bumped CONTENT_REV")
else:
    print("NOT WRITTEN due to errors")
