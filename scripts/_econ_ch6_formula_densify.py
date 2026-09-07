#!/usr/bin/env python3
"""Densify over-split $$ displays in unlocked Ch6 economics letters.

Merges one-token-per-display arithmetic into 2–4 denser displays per letter,
puts named lookups into prose, and drops the robotic plug-in cue.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("src/data/economics-cases-ch6-subtopics.json")
UNLOCK = 218

_SPLIT = re.compile(r"(\$\$[\s\S]*?\$\$)")
_FILLER = re.compile(
    r"(?:^|\n+)\s*Plug in the (?:table|truck) figures — one step per display:\s*(?:\n+|$)"
)
_NAME_RATIO = re.compile(
    r"^Name the (?:ratio|identity|growth identity|decline identity|coverage identity) in words:[^\n]*\n*",
    re.M,
)


def _inner(block: str) -> str:
    return block[2:-2].strip() if block.startswith("$$") else block.strip()


def _dd(inner: str) -> str:
    return f"$$\n{inner.strip()}\n$$"


def _is_math(tok: str) -> bool:
    return tok.startswith("$$")


def _classify(inner: str) -> str:
    s = inner.strip()
    if re.fullmatch(r"\\text\{[^}]+\}:", s):
        return "label_only"
    if re.fullmatch(r"=\s*[0-9,.\-+]+", s):
        return "bare_eq"
    if re.fullmatch(r"\\approx\s+[0-9,.\-+]+(?:\\%)?", s):
        return "approx"
    if re.fullmatch(r"\\approx\s+inf", s, re.I):
        return "approx"
    if re.search(r"[<>]|\\le|\\ge", s) and re.search(r"\d", s) and "\n" not in s and len(s) < 100:
        # avoid eating long prose-like math
        if not re.search(r"\\frac|\\text\{[^}]+\} = \\frac", s):
            return "compare"
    if re.fullmatch(r"\\frac\{[^}]+\}\s*\{\s*[^}]+\s*\}", s):
        return "frac_only"
    if re.fullmatch(r"\\frac\{[^}]+\}\s*\{\s*[^}]+\s*\}\s*-\s*1", s):
        return "frac_minus_one"
    # definition / symbolic identity (little or no bare digits as sole RHS)
    if (
        re.search(r"\\frac\{\\text\{", s)
        or re.search(r"\\text\{[^}]+\} = \\frac\{\\text\{", s)
        or re.search(r"\\text\{(?:growth|decline)\} = \\frac\{Y_", s)
    ) and not re.search(r"\\approx", s):
        # allow digits only inside useful life etc. — treat symbolic growth as def
        if not re.search(r"=\s*[0-9]", s):
            return "def"
    if re.search(r"\\text\{[^}]+\} = \\frac\{\\text\{", s) and not re.search(r"\d", s):
        return "def"
    # Symbolic LHS = expression with no digits (e.g. WC = CA - CL)
    if (
        re.search(r"=", s)
        and not re.search(r"\d", s)
        and "\\approx" not in s
        and ("-" in s or "+" in s or "\\frac" in s or "\\times" in s)
    ):
        return "def"
    # simple Label = number (optional \text)
    if re.fullmatch(
        r"(?:\\text\{[^}]+\}|[A-Za-z][A-Za-z0-9_{}\\^]*)\s*=\s*[0-9,.\-+]+",
        s,
    ):
        return "assign"
    # two assigns joined with \quad
    if "\\quad" in s and "=" in s and "\\frac" not in s and "\\approx" not in s:
        return "assign_pair"
    # sum / difference builds
    if re.search(r"=", s) and re.search(r"(?:\+|-)", s) and "\\frac" not in s and "\\approx" not in s:
        if s.count("=") == 1:
            return "sum_build" if "+" in s else "expr_eq"
        return "chained"
    # bare arithmetic without LHS: 46,000 - 7,000
    if (
        re.fullmatch(r"[0-9,.\-+]+(?:\s*[+\-]\s*[0-9,.\-+]+)+", s)
        and "\\frac" not in s
    ):
        return "bare_arith"
    # frac with multiply in numerator already counts as frac_only via fullmatch fail
    if re.fullmatch(r"\\frac\{[^}]+\}\s*\{\s*[^}]+\s*\}", s):
        return "frac_only"
    if re.search(r"\\frac", s) and ("=" in s or "\\approx" in s):
        return "named_eq"
    if re.search(r"\\times", s) and "=" in s:
        return "named_eq"
    # frac with \times in num: \frac{3 \times 17,000}{170,000}
    if re.match(r"^\\frac\{", s) and "\\approx" not in s and "=" not in s:
        return "frac_only"
    return "other"


def _assign_to_prose(inner: str) -> str:
    """Turn CA = 276 or \\text{CA} = 276 into 'CA = 276'."""
    s = inner.strip()
    s = re.sub(r"\\text\{([^}]+)\}", r"\1", s)
    s = s.replace(r"\,", "")
    s = re.sub(r"\s*,?\s*\\quad\s*,?\s*", ", ", s)
    s = re.sub(r"\s*,\s*,\s*", ", ", s)
    s = re.sub(r"\s+", " ", s).strip(" ,")
    return s


def _merge_expr_bare(expr: str, bare: str) -> str:
    bare_val = bare.strip().lstrip("=").strip()
    expr = expr.strip()
    if expr.endswith(bare_val):
        return expr
    if re.search(r"=\s*" + re.escape(bare_val) + r"\s*$", expr):
        return expr
    return f"{expr} = {bare_val}"


def _merge_frac_approx(frac: str, approxes: list[str], name: str | None = None) -> str:
    """Merge \\frac{a}{b} + \\approx x + optional \\approx y% into one display."""
    frac = frac.strip()
    # strip leading = from bare-style
    parts = [frac]
    for a in approxes:
        a = a.strip()
        if a.startswith("\\approx"):
            parts.append(a)
        else:
            parts.append(f"\\approx {a}")
    body = " ".join(parts)
    if name:
        # avoid double-naming if frac already has LHS
        if "=" not in frac.split("\\frac")[0]:
            return f"{name} = {body}"
    return body


def _looks_already_dense(blocks: list[str]) -> bool:
    if len(blocks) <= 4:
        cats = [_classify(_inner(b)) for b in blocks]
        # still densify if we have isolated assign/bare/approx sequences
        bad = sum(1 for c in cats if c in {"assign", "bare_eq", "approx", "frac_only", "compare"})
        return bad <= 1
    return False


def densify_body(text: str) -> str:
    """Densify one explanation string; preserve TRUE/FALSE header and closer."""
    if "$$" not in text:
        return text

    # Drop robotic plug-in cue early
    text = _FILLER.sub("\n\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)

    parts = _SPLIT.split(text)
    # Rebuild as list of tokens: ('prose', str) | ('math', inner, cat)
    tokens: list[tuple] = []
    for p in parts:
        if not p:
            continue
        if p.startswith("$$"):
            inner = _inner(p)
            tokens.append(("math", inner, _classify(inner)))
        else:
            tokens.append(("prose", p))

    out: list[tuple] = []
    i = 0
    while i < len(tokens):
        kind = tokens[i][0]
        if kind == "prose":
            out.append(tokens[i])
            i += 1
            continue

        # Gather a run of math (+ tiny prose between them like blank)
        run = []
        j = i
        while j < len(tokens):
            if tokens[j][0] == "math":
                run.append(tokens[j])
                j += 1
            elif tokens[j][0] == "prose" and tokens[j][1].strip() == "":
                j += 1
            else:
                break

        merged = _merge_math_run(run)
        out.extend(merged)
        i = j

    # Flatten back to string
    chunks: list[str] = []
    pending_assigns: list[str] = []

    def flush_assigns():
        nonlocal pending_assigns
        if not pending_assigns:
            return
        joined = ", ".join(pending_assigns)
        prev = "".join(chunks[-2:]) if chunks else ""
        # Skip if every numeric value already appears in the preceding prose
        nums = re.findall(r"[0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]+)?|[0-9]+(?:\.[0-9]+)?", joined)
        if nums and all(n in prev[-300:] for n in nums):
            pending_assigns = []
            return
        if re.search(r"From the extract", prev[-200:], re.I):
            prose = f"Inputs used: {joined}."
        else:
            prose = f"From the extract: {joined}."
        chunks.append("\n\n" + prose + "\n\n")
        pending_assigns = []

    for tok in out:
        if tok[0] == "prose":
            flush_assigns()
            chunks.append(tok[1])
        elif tok[0] == "assign_prose":
            pending_assigns.append(tok[1])
        else:
            flush_assigns()
            chunks.append("\n\n" + _dd(tok[1]) + "\n\n" if tok[0] == "math" else tok[1])

    flush_assigns()
    result = "".join(chunks)
    result = re.sub(r"\n{3,}", "\n\n", result)
    result = result.strip() + "\n"

    # Drop standalone compare displays that sit right before an interp sentence
    result = re.sub(
        r"\n\$\$\n([^$]*?[<>]|\\le|\\ge[^$]*?)\n\$\$\n+(Compare to the claim)",
        r"\n\n\2",
        result,
    )
    # If two consecutive "Compare to the claim" lines, drop the short cue-only one
    result = re.sub(
        r"Compare to the claim’s hurdle\s*(?:\([^)]*\))?\.\s*\n+Compare to the claim’s hurdle:",
        "Compare to the claim’s hurdle:",
        result,
    )

    # Clean leftover blank noise
    result = re.sub(r"\n{3,}", "\n\n", result)
    return result.strip() + "\n"


def _merge_math_run(run: list[tuple]) -> list[tuple]:
    """Merge a consecutive math run into denser math / assign_prose tokens."""
    if not run:
        return []

    items = [(inner, cat) for _, inner, cat in run]
    # Special: depreciation asset groups (label_only present)
    if any(c == "label_only" for _, c in items):
        return _merge_dep_assets(items)

    # Pull every simple lookup assign into one prose list first, so CA / Inv / CL
    # stay together even when a calc step sits between them.
    # Keep sum_build→assign chains (CA = a+b+c then CA = total) as math, not prose.
    prose_assigns: list[str] = []
    remaining: list[tuple[str, str]] = []
    i = 0
    while i < len(items):
        inner, cat = items[i]
        if cat == "sum_build" and i + 1 < len(items) and items[i + 1][1] == "assign":
            lhs = inner.split("=", 1)[0].strip()
            nxt_lhs = items[i + 1][0].split("=", 1)[0].strip()
            if lhs == nxt_lhs:
                total = items[i + 1][0].split("=", 1)[1].strip()
                remaining.append((f"{inner} = {total}", "chained"))
                i += 2
                continue
        if cat == "sum_build" and i + 1 < len(items) and items[i + 1][1] == "bare_eq":
            remaining.append((_merge_expr_bare(inner, items[i + 1][0]), "chained"))
            i += 2
            continue
        # WC = 352 - 228 then WC = 124 → chain (don't prose the result)
        if cat == "expr_eq" and i + 1 < len(items) and items[i + 1][1] == "assign":
            lhs = inner.split("=", 1)[0].strip()
            nxt_lhs = items[i + 1][0].split("=", 1)[0].strip()
            if lhs == nxt_lhs:
                total = items[i + 1][0].split("=", 1)[1].strip()
                remaining.append((_merge_expr_bare(inner, f"= {total}"), "chained"))
                i += 2
                continue
        if cat in {"assign", "assign_pair"}:
            prose_assigns.append(_assign_to_prose(inner))
            i += 1
            continue
        remaining.append((inner, cat))
        i += 1

    out: list[tuple] = []
    # Emit symbolic definitions first, then lookup prose, then numeric steps.
    defs = [(inn, c) for inn, c in remaining if c == "def"]
    rest = [(inn, c) for inn, c in remaining if c != "def"]
    for inner, _cat in defs:
        out.append(("math", inner))
    for a in prose_assigns:
        out.append(("assign_prose", a))

    i = 0
    while i < len(rest):
        inner, cat = rest[i]

        # Drop redundant symbolic growth shell when numeric steps follow
        if (
            cat in {"def", "named_eq", "frac_only"}
            and re.fullmatch(r"\\frac\{Y_2 - Y_1\}\{Y_1\}", inner.strip())
            and i + 1 < len(rest)
            and rest[i + 1][1] in {"expr_eq", "bare_arith", "chained"}
        ):
            i += 1
            continue
        # Also when classified as named_eq with growth text already shown above
        if re.fullmatch(r"\\frac\{Y_2 - Y_1\}\{Y_1\}", inner.strip()):
            # peek if later rest has numeric growth
            if any(c in {"expr_eq", "chained"} for _, c in rest[i + 1 : i + 4]):
                i += 1
                continue

        # expr_eq / bare_arith + bare_eq → chain
        if cat in {"expr_eq", "bare_arith"} and i + 1 < len(rest) and rest[i + 1][1] == "bare_eq":
            out.append(("math", _merge_expr_bare(inner, rest[i + 1][0])))
            i += 2
            continue

        # Symbolic identity like WC = CA - CL kept; densify numeric siblings
        if cat == "expr_eq" and re.search(r"[A-Za-z]", inner.split("=", 1)[-1]) and not re.search(r"\d", inner):
            out.append(("math", inner))
            i += 1
            continue

        # frac_only + approx(+approx%) or = result [+ optional frac_minus_one chain]
        if cat == "frac_only":
            approxes = []
            j = i + 1
            # accept = 8,500 as a result step
            if j < len(rest) and rest[j][1] == "bare_eq":
                out.append(("math", _merge_expr_bare(inner, rest[j][0])))
                i = j + 1
                continue
            while j < len(rest) and rest[j][1] == "approx":
                a = rest[j][0]
                # drop bogus ≈ inf from bad upstream expand
                if re.search(r"\\approx\s+inf\b", a, re.I):
                    j += 1
                    continue
                approxes.append(a)
                j += 1
            # surplus pattern: frac, approx, frac-1, approx, approx%
            if j < len(rest) and rest[j][1] == "frac_minus_one" and approxes:
                first = _merge_frac_approx(inner, approxes[:1])
                rest_approx = []
                k = j + 1
                while k < len(rest) and rest[k][1] == "approx":
                    rest_approx.append(rest[k][0])
                    k += 1
                second = _merge_frac_approx(rest[j][0], rest_approx)
                out.append(("math", first))
                out.append(("math", second))
                i = k
                continue
            if approxes:
                out.append(("math", _merge_frac_approx(inner, approxes)))
                i = j
                continue

        # frac_minus_one + approxes
        if cat == "frac_minus_one":
            approxes = []
            j = i + 1
            while j < len(rest) and rest[j][1] == "approx":
                approxes.append(rest[j][0])
                j += 1
            if approxes:
                out.append(("math", _merge_frac_approx(inner, approxes)))
                i = j
                continue

        if cat == "named_eq":
            out.append(("math", inner))
            i += 1
            continue

        # Drop isolated compare displays (interp covers the hurdle)
        if cat == "compare":
            i += 1
            continue

        if cat == "chained":
            out.append(("math", inner))
            i += 1
            continue

        if cat in {"bare_eq", "approx", "other", "sum_build", "expr_eq", "bare_arith"}:
            out.append(("math", inner))
            i += 1
            continue

        out.append(("math", inner))
        i += 1

    return out


def _merge_dep_assets(items: list[tuple[str, str]]) -> list[tuple]:
    """Densify straight-line per-asset charge blocks."""
    out: list[tuple] = []
    i = 0
    while i < len(items):
        inner, cat = items[i]
        if cat == "label_only":
            label = inner.strip()
            # Expect: (cost-resid) , bare, frac, approx  OR similar
            j = i + 1
            chunk = []
            while j < len(items) and items[j][1] != "label_only":
                # stop before final Combined assign if label exhausted
                chunk.append(items[j])
                j += 1
                if len(chunk) >= 4:
                    break
            # Try pattern: expr/other, bare, frac, approx
            if len(chunk) >= 4 and chunk[1][1] == "bare_eq" and chunk[2][1] in {"frac_only", "other"}:
                dep = _merge_expr_bare(chunk[0][0], chunk[1][0])
                approxes = []
                for c in chunk[3:]:
                    if c[1] == "approx" and not re.search(r"\\approx\s+inf\b", c[0], re.I):
                        approxes.append(c[0])
                frac_line = _merge_frac_approx(chunk[2][0], approxes) if approxes else (
                    _merge_expr_bare(chunk[2][0], chunk[3][0]) if len(chunk) > 3 and chunk[3][1] == "bare_eq" else chunk[2][0]
                )
                out.append(("math", f"{label}\n{dep}\n{frac_line}"))
                i = i + 1 + len(chunk)
                continue
            # shorter: bare_arith + bare_eq inside asset
            if len(chunk) >= 2 and chunk[0][1] in {"bare_arith", "other", "expr_eq"} and chunk[1][1] == "bare_eq":
                dep = _merge_expr_bare(chunk[0][0], chunk[1][0])
                rest_chunk = chunk[2:]
                if rest_chunk and rest_chunk[0][1] == "frac_only":
                    approxes = [c[0] for c in rest_chunk[1:] if c[1] == "approx" and not re.search(r"inf", c[0], re.I)]
                    if rest_chunk[1:] and rest_chunk[1][1] == "bare_eq":
                        frac_line = _merge_expr_bare(rest_chunk[0][0], rest_chunk[1][0])
                    else:
                        frac_line = _merge_frac_approx(rest_chunk[0][0], approxes) if approxes else rest_chunk[0][0]
                    out.append(("math", f"{label}\n{dep}\n{frac_line}"))
                    i = i + 1 + len(chunk)
                    continue
                out.append(("math", f"{label}\n{dep}"))
                i = i + 1 + 2
                continue
            out.append(("math", label))
            i += 1
            continue
        if cat == "assign":
            out.append(("assign_prose", _assign_to_prose(inner)))
            i += 1
            continue
        if cat == "compare":
            i += 1
            continue
        # merge frac+approx etc via small recursive-like handling
        if cat == "frac_only":
            approxes = []
            j = i + 1
            if j < len(items) and items[j][1] == "bare_eq":
                out.append(("math", _merge_expr_bare(inner, items[j][0])))
                i = j + 1
                continue
            while j < len(items) and items[j][1] == "approx":
                if not re.search(r"\\approx\s+inf\b", items[j][0], re.I):
                    approxes.append(items[j][0])
                j += 1
            out.append(("math", _merge_frac_approx(inner, approxes) if approxes else inner))
            i = j
            continue
        if cat in {"expr_eq", "sum_build", "bare_arith", "other"} and i + 1 < len(items) and items[i + 1][1] == "bare_eq":
            out.append(("math", _merge_expr_bare(inner, items[i + 1][0])))
            i += 2
            continue
        out.append(("math", inner))
        i += 1
    return out


def densify_letter(text: str) -> str:
    if "$$" not in text and "one step per display" not in text:
        return text
    return densify_body(text)


def count_dollars(text: str) -> int:
    return len(re.findall(r"\$\$", text)) // 2


def process(write: bool = True) -> dict:
    data = json.loads(PATH.read_text())
    assert len(data) >= UNLOCK
    locked = [list(c["tactical_explanations"]) for c in data[UNLOCK:]]

    changed = 0
    letter_changes = []
    before_after_qr = None

    for i, case in enumerate(data[:UNLOCK]):
        new_expls = list(case["tactical_explanations"])
        for j, expl in enumerate(case["tactical_explanations"]):
            if not isinstance(expl, str):
                continue
            if "$$" not in expl and "one step per display" not in expl:
                continue
            new = densify_letter(expl)
            if new != expl:
                changed += 1
                letter_changes.append((case.get("case_id"), "ABCDE"[j], count_dollars(expl), count_dollars(new)))
                # capture one acid-test / quick-ratio style sample
                if before_after_qr is None and (
                    "Acid-test" in expl or "quick" in expl.lower() or "CA} - \\text{Inventory}" in expl
                ):
                    before_after_qr = (expl, new, case.get("case_id"), "ABCDE"[j])
                new_expls[j] = new
        case["tactical_explanations"] = new_expls

    for i, case in enumerate(data[UNLOCK:]):
        assert case["tactical_explanations"] == locked[i]

    if write:
        PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    return {
        "letters_changed": changed,
        "sample_pairs": letter_changes[:5],
        "avg_before": sum(x[2] for x in letter_changes) / max(len(letter_changes), 1),
        "avg_after": sum(x[3] for x in letter_changes) / max(len(letter_changes), 1),
        "qr": before_after_qr,
    }


if __name__ == "__main__":
    info = process(write=True)
    print(json.dumps({k: v for k, v in info.items() if k != "qr"}, indent=2))
    if info["qr"]:
        before, after, cid, L = info["qr"]
        print("\n===== QR BEFORE", cid, L, "=====")
        print(before)
        print("\n===== QR AFTER", cid, L, "=====")
        print(after)
