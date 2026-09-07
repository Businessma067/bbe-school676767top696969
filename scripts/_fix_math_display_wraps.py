#!/usr/bin/env python3
"""Merge adjacent $$ display blocks that were split mid-equation.

Fixes the visual bug where KaTeX centers each $$ separately, so:

    $$
    = 70,\\qquad C'_{+}(25)
    $$

    $$
    = 45
    $$

renders as a broken wrap (`= 70,` left, `C'_{+}(25)` right, `= 45` below).

Also fixes `= 0\\implies x` / `= value` splits and parameter lists like
`j = 0.072,\\qquad m` / `= 4`.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FILES = [
    "src/data/math-ch1-exam.json",
    "src/data/math-ch2-cases.json",
    "src/data/math-ch3-exam.json",
    "src/data/math-ch4-cases.json",
    "src/data/math-ch5-exam.json",
    "src/data/math-ch6-inequalities.json",
    "src/data/math-ch7-linear-quadratic.json",
    "src/data/math-ch7-mixed-exam.json",
    "src/data/math-ch8-exam.json",
    "src/data/math-ch9-polynomials.json",
    "src/data/math-ch9-mixed-exam.json",
    "src/data/math-ch10-exp-log.json",
    "src/data/math-ch11-exam.json",
    "src/data/math-ch12-exam.json",
    "src/data/math-ch13-exam.json",
    "src/data/math-cases-ch12-probability.json",
    "src/data/math-cases-ch13-binomial.json",
    "src/data/math-ch1-logic.ts",
    "src/data/math-ch5-linear-equations.ts",
    "src/data/math-ch8-power-functions.ts",
    "src/data/math-ch11-financial.ts",
    "src/data/math-ch11-differentiation.ts",
]

DISPLAY_RE = re.compile(r"\$\$([\s\S]*?)\$\$")

# After last \qquad / \quad: domain annotation like (x>0) — not an orphan LHS.
DOMAIN_AFTER_SEP = re.compile(r"^\\?\(")
# Trailing separator then an identifier / expression with no '='.
ORPHAN_TAIL = re.compile(
    r"^(?P<head>[\s\S]*?)(?P<sep>,?\s*\\(?:qquad|quad)\s*)(?P<lhs>[^\n=]+?)\s*$"
)
IMPLIES_ORPHAN = re.compile(
    r"^(?P<head>[\s\S]*?\\implies\s*)(?P<var>[A-Za-z\\\\][A-Za-z0-9_\\\\^{}]*)\s*$"
)
NEXT_EQ = re.compile(r"^=\s*(?P<rhs>[\s\S]+)$")


def _is_domain_or_annotation(lhs: str) -> bool:
    s = lhs.strip()
    if not s:
        return True
    if DOMAIN_AFTER_SEP.match(s):
        return True
    # Pure inequality lists / annotations without looking like next LHS
    if s.startswith(("\\text", "\\mathrm", "\\leqslant", "\\geq", "\\le", "\\ge", "<", ">")):
        return True
    # k>0 style without commas already handled by domain paren; bare k>0:
    if re.fullmatch(r"[A-Za-z][A-Za-z0-9_]*\s*[<>≤≥]=?\s*[^,\\\\]+", s):
        return True
    return False


def _orphan_lhs(body: str) -> tuple[str, str, str] | None:
    """Return (head, sep, lhs) if body ends with orphan LHS after qquad/quad."""
    m = ORPHAN_TAIL.match(body.strip())
    if not m:
        return None
    lhs = m.group("lhs").strip()
    if _is_domain_or_annotation(lhs):
        return None
    # Must look like a math LHS / symbol, not a trailing remark
    if "=" in lhs:
        return None
    # Avoid pure number lists: 0,\quad 2,\quad -2
    if re.fullmatch(r"[-+]?\d+(?:\.\d+)?", lhs):
        return None
    return m.group("head").rstrip(), m.group("sep"), lhs


def _implies_orphan(body: str) -> tuple[str, str] | None:
    m = IMPLIES_ORPHAN.match(body.strip())
    if not m:
        return None
    return m.group("head"), m.group("var")


def merge_displays(text: str) -> tuple[str, int]:
    """Greedily merge broken adjacent display pairs. Returns (new_text, merge_count)."""
    matches = list(DISPLAY_RE.finditer(text))
    if len(matches) < 2:
        return text, 0

    # Work on list of pieces: either raw text or ('$$', body)
    pieces: list[tuple[str, str]] = []
    last = 0
    for m in matches:
        if m.start() > last:
            pieces.append(("raw", text[last : m.start()]))
        pieces.append(("disp", m.group(1)))
        last = m.end()
    if last < len(text):
        pieces.append(("raw", text[last:]))

    merges = 0
    i = 0
    out: list[tuple[str, str]] = []
    while i < len(pieces):
        kind, val = pieces[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue

        # Look ahead over whitespace-only raw to next disp
        j = i + 1
        mid_raw = ""
        while j < len(pieces) and pieces[j][0] == "raw" and pieces[j][1].strip() == "":
            mid_raw += pieces[j][1]
            j += 1
        if j >= len(pieces) or pieces[j][0] != "disp":
            out.append((kind, val))
            i += 1
            continue

        cur = val.strip()
        nxt = pieces[j][1].strip()
        nxt_m = NEXT_EQ.match(nxt)

        merged_body: str | None = None

        orphan = _orphan_lhs(cur)
        if orphan and nxt_m:
            head, sep, lhs = orphan
            rhs = nxt_m.group("rhs").strip()
            # Prefer: keep head as own equation; put lhs = rhs as next complete line
            # If head itself starts with '=' or is a continuation, join carefully.
            if head.strip():
                # head may already be a full eq or a continuation
                # Rebuild as: head  AND  lhs = rhs  in ONE display when both short,
                # or two complete displays. Single display is better for the screenshot case.
                # If head ends with '=' result unfinished... head is everything before sep.
                head_s = head.strip()
                # When head is like "= 70" (continuation) and lhs is next derivative:
                #   "= 70" + "C'_{+}(25)" + "= 45" → two statements with qquad if short
                if re.match(r"^=", head_s) and len(head_s) < 40 and len(lhs) < 40 and len(rhs) < 60:
                    merged_body = f"{head_s},\\qquad {lhs} = {rhs}"
                elif len(head_s) < 80 and len(lhs) < 50 and len(rhs) < 80:
                    # Full first eq + second eq on one line
                    # Avoid double-joining if head already has many qquads
                    merged_body = f"{head_s},\\qquad {lhs} = {rhs}"
                else:
                    # Split into two complete displays via a marker we'll expand later
                    merged_body = f"{head_s}\n$$\n\n$$\n{lhs} = {rhs}"
            else:
                merged_body = f"{lhs} = {rhs}"

        else:
            imp = _implies_orphan(cur)
            if imp and nxt_m:
                head, var = imp
                rhs = nxt_m.group("rhs").strip()
                merged_body = f"{head}{var} = {rhs}"

        # Fold "= result, \qquad LHS = rhs" into the previous complete equation.
        if merged_body is None and nxt_m:
            if (
                "=" in cur
                and "\\implies" not in cur
                and _orphan_lhs(cur) is None
                and re.match(
                    r"^=\s*[^,\n]+,\s*\\(?:qquad|quad)\s*.+=",
                    nxt,
                )
            ):
                # prev: C'_-(25)=2*25+20   next: =70,\qquad C'_+(25)=45
                merged_body = f"{cur.strip()} {nxt}"

        if merged_body is None:
            out.append((kind, val))
            i += 1
            continue

        # Replace current+gap+next with merged (may contain embedded $$ for two-block form)
        if "\n$$\n\n$$\n" in merged_body:
            a, b = merged_body.split("\n$$\n\n$$\n", 1)
            out.append(("disp", "\n" + a.strip() + "\n"))
            out.append(("raw", "\n\n"))
            out.append(("disp", "\n" + b.strip() + "\n"))
        else:
            out.append(("disp", "\n" + merged_body.strip() + "\n"))
        merges += 1
        i = j + 1  # skip mid raw + next disp

    # Rebuild; may need another pass for chains (A orphan B orphan C)
    rebuilt = "".join(
        (f"$${body}$$" if k == "disp" else body) for k, body in out
    )
    return rebuilt, merges


def fix_text(text: str) -> tuple[str, int]:
    total = 0
    cur = text
    for _ in range(12):  # chain merges
        cur, n = merge_displays(cur)
        total += n
        if n == 0:
            break
    return cur, total


def fix_json(path: Path) -> int:
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data if isinstance(data, list) else data.get("tasks") or data.get("cases")
    if not isinstance(tasks, list):
        return 0
    total = 0
    for t in tasks:
        for field in ("solution_overview", "context"):
            if field in t and isinstance(t[field], str):
                t[field], n = fix_text(t[field])
                total += n
        expls = t.get("tactical_explanations")
        if isinstance(expls, list):
            new = []
            for e in expls:
                if isinstance(e, str):
                    e2, n = fix_text(e)
                    total += n
                    new.append(e2)
                else:
                    new.append(e)
            t["tactical_explanations"] = new
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return total


def fix_ts(path: Path) -> int:
    """Fix display wraps inside backtick template literals in TS banks."""
    text = path.read_text(encoding="utf-8")
    total = 0

    def repl_backtick(m: re.Match) -> str:
        nonlocal total
        body = m.group(1)
        if "$$" not in body:
            return m.group(0)
        # Only touch solution_overview / explanations / context-like large strings
        fixed, n = fix_text(body)
        total += n
        return "`" + fixed + "`"

    # Replace each `...` that contains $$ — careful with nested; TS uses ` for expls
    # Process from solution_overview and tactical_explanations regions only.
    parts = []
    last = 0
    for m in re.finditer(r"`([\s\S]*?)`", text):
        chunk = m.group(1)
        if "$$" not in chunk:
            continue
        # skip import paths etc (no newlines short)
        if "\n" not in chunk and len(chunk) < 80:
            continue
        fixed, n = fix_text(chunk)
        if n:
            parts.append(text[last : m.start()])
            parts.append("`" + fixed + "`")
            last = m.end()
            total += n
    if not parts:
        return 0
    parts.append(text[last:])
    path.write_text("".join(parts), encoding="utf-8")
    return total


def count_remaining(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    # approximate: orphan + next eq pattern still present
    n = 0
    for m in DISPLAY_RE.finditer(text):
        body = m.group(1).strip()
        if _orphan_lhs(body) or _implies_orphan(body):
            # check if followed by = block
            rest = text[m.end() :]
            nm = DISPLAY_RE.match(rest.lstrip())
            # fragile; just count orphans
            n += 1
    return n


def main() -> None:
    dry = "--dry" in sys.argv
    grand = 0
    for rel in FILES:
        path = ROOT / rel
        if not path.exists():
            print(f"MISS {rel}")
            continue
        if dry:
            print(f"SKIP write {rel}")
            continue
        if path.suffix == ".json":
            n = fix_json(path)
        else:
            n = fix_ts(path)
        grand += n
        print(f"{rel}: merges={n}")
    print(f"TOTAL merges={grand}")


if __name__ == "__main__":
    main()
