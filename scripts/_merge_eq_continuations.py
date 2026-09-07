#!/usr/bin/env python3
"""Merge adjacent $$…$$ / $$=…$$ continuation chains into aligned displays.

Fixes floating centered `= result` blocks in bank content (not only in the
renderer). Example:

    $$
    \\varepsilon = \\dfrac{-\\frac12\\cdot 80}{20}
    $$

    $$
    = -2
    $$

becomes:

    $$
    \\begin{aligned}
    \\varepsilon &= \\dfrac{-\\frac12\\cdot 80}{20} \\\\
    &= -2
    \\end{aligned}
    $$
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

FILES = [
    "src/data/math-ch1-exam.json",
    "src/data/math-ch1-logic.ts",
    "src/data/math-ch2-cases.json",
    "src/data/math-ch3-exam.json",
    "src/data/math-ch4-cases.json",
    "src/data/math-ch5-exam.json",
    "src/data/math-ch5-linear-equations.ts",
    "src/data/math-ch6-inequalities.json",
    "src/data/math-ch7-linear-quadratic.json",
    "src/data/math-ch7-mixed-exam.json",
    "src/data/math-ch8-exam.json",
    "src/data/math-ch8-power-functions.ts",
    "src/data/math-ch9-polynomials.json",
    "src/data/math-ch9-mixed-exam.json",
    "src/data/math-ch10-exp-log.json",
    "src/data/math-ch11-exam.json",
    "src/data/math-ch11-financial.ts",
    "src/data/math-ch11-differentiation.ts",
    "src/data/math-ch12-exam.json",
    "src/data/math-cases-ch12-probability.json",
    "src/data/math-ch13-exam.json",
    "src/data/math-cases-ch13-binomial.json",
]

DISPLAY_RE = re.compile(r"\$\$([\s\S]*?)\$\$")
SKIP_EQ_CMDS = (
    "neq",
    "leq",
    "geq",
    "eq",
    "approx",
    "equiv",
    "sim",
    "cong",
    "leqslant",
    "geqslant",
    "doteq",
    "coloneqq",
)


def to_aligned_first_line(s: str) -> str:
    depth = 0
    i = 0
    while i < len(s):
        c = s[i]
        if c in "{(":
            depth += 1
        elif c in "})":
            depth = max(0, depth - 1)
        elif c == "=" and depth == 0:
            if i > 0 and s[i - 1] == "\\":
                i += 1
                continue
            before = s[:i].rstrip()
            if any(before.endswith("\\" + cmd) for cmd in SKIP_EQ_CMDS):
                i += 1
                continue
            return f"{s[:i].rstrip()} &={s[i + 1 :]}"
        i += 1
    return f"& {s}"


def format_aligned_chain(bodies: list[str]) -> str:
    lines: list[str] = []
    for k, raw in enumerate(bodies):
        raw = raw.strip()
        if not raw:
            continue
        if k == 0:
            lines.append(to_aligned_first_line(raw))
        elif raw.lstrip().startswith("="):
            lines.append("&" + raw)
        else:
            lines.append("& " + raw)
    return "\\begin{aligned}\n" + " \\\\\n".join(lines) + "\n\\end{aligned}"


def merge_eq_continuations(text: str) -> tuple[str, int]:
    """Greedily merge adjacent display pairs where the next starts with '='."""
    total = 0
    cur = text
    for _ in range(40):
        matches = list(DISPLAY_RE.finditer(cur))
        if len(matches) < 2:
            break
        pieces: list[tuple[str, str]] = []
        last = 0
        for m in matches:
            if m.start() > last:
                pieces.append(("raw", cur[last : m.start()]))
            pieces.append(("disp", m.group(1)))
            last = m.end()
        if last < len(cur):
            pieces.append(("raw", cur[last:]))

        out: list[tuple[str, str]] = []
        merges = 0
        i = 0
        while i < len(pieces):
            kind, val = pieces[i]
            if kind != "disp":
                out.append((kind, val))
                i += 1
                continue

            bodies = [val]
            j = i + 1
            while j < len(pieces):
                if pieces[j][0] == "raw" and pieces[j][1].strip() == "":
                    j += 1
                    continue
                if pieces[j][0] == "disp" and pieces[j][1].strip().startswith("="):
                    bodies.append(pieces[j][1])
                    j += 1
                    continue
                break

            # consume trailing whitespace-only raws that were only separators
            end = j
            # find last display index consumed
            k = i + 1
            consumed_until = i + 1
            bodies2 = [val]
            k = i + 1
            while k < len(pieces):
                if pieces[k][0] == "raw" and pieces[k][1].strip() == "":
                    k += 1
                    continue
                if pieces[k][0] == "disp" and pieces[k][1].strip().startswith("="):
                    bodies2.append(pieces[k][1])
                    k += 1
                    consumed_until = k
                    continue
                break

            if len(bodies2) > 1:
                # skip already-aligned wrappers
                if any("\\begin{aligned}" in b for b in bodies2):
                    out.append((kind, val))
                    i += 1
                    merges += 0
                    continue
                merged = format_aligned_chain(bodies2)
                out.append(("disp", "\n" + merged + "\n"))
                merges += len(bodies2) - 1
                i = consumed_until
            else:
                out.append((kind, val))
                i += 1

        rebuilt = "".join(
            (f"$${body}$$" if k == "disp" else body) for k, body in out
        )
        total += merges
        cur = rebuilt
        if merges == 0:
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
            if isinstance(t.get(field), str) and "$$" in t[field]:
                t[field], n = merge_eq_continuations(t[field])
                total += n
        expls = t.get("tactical_explanations")
        if isinstance(expls, list):
            new = []
            for e in expls:
                if isinstance(e, str) and "$$" in e:
                    e2, n = merge_eq_continuations(e)
                    total += n
                    new.append(e2)
                else:
                    new.append(e)
            t["tactical_explanations"] = new
    path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return total


def fix_ts(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    total = 0
    parts: list[str] = []
    last = 0
    for m in re.finditer(r"`([\s\S]*?)`", text):
        chunk = m.group(1)
        if "$$" not in chunk or "\n" not in chunk:
            continue
        fixed, n = merge_eq_continuations(chunk)
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


def main() -> None:
    grand = 0
    for rel in FILES:
        path = ROOT / rel
        if not path.exists():
            print(f"MISS {rel}")
            continue
        n = fix_json(path) if path.suffix == ".json" else fix_ts(path)
        grand += n
        print(f"{rel}: merges={n}")
    print(f"TOTAL merges={grand}")


if __name__ == "__main__":
    main()
