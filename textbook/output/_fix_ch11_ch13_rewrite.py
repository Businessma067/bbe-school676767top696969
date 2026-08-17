#!/usr/bin/env python3
"""
Rewrite every Ch11 Part 3 numbered step to Ch13 format:
  prose outside $...$, formulas/numbers inside $...$.
Never leave \\times / \\approx / \\% outside math.
"""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")

TEX_CMD = (
    r"times|approx|leq|geq|ln|log|frac|quad|mathrm|cdot|div|sqrt|"
    r"left|right|infty|cdotp|mid|to|rightarrow"
)


def normalize_ts_escapes(s: str) -> str:
    """Collapse \\\cmd / \\\\cmd / etc. to exactly \\cmd in .ts source (two backslashes)."""
    s = re.sub(rf"\\{{3,}}({TEX_CMD}|%)", r"\\\\\1", s)
    return s


def dollars_balanced(s: str) -> bool:
    return s.replace("\\$", "").count("$") % 2 == 0


def outside_has_tex(s: str) -> bool:
    """True if TeX commands appear outside $...$ spans."""
    check = re.sub(r"\\\$", "", s)
    # wipe math spans
    check = re.sub(r"\$[^$]*\$", "", check)
    return bool(re.search(rf"\\({TEX_CMD}|%)", check))


def ch13_step(body: str) -> str:
    body = normalize_ts_escapes(body.strip())
    if not body:
        return body

    # Already good
    if dollars_balanced(body) and not outside_has_tex(body):
        # still fix "At r = 9\%:" style if r= is outside — covered by outside_has_tex for \%
        if not re.search(r"(?<!\$)\bAt [a-zA-Z] =", body):
            return body

    # --- Rebuild from a $ -stripped skeleton, then re-wrap ---
    currency: list[str] = []

    def save_cur(m: re.Match[str]) -> str:
        currency.append(m.group(0))
        return f"¤{len(currency)-1}¤"

    s = re.sub(r"\\\$", save_cur, body)
    # Drop existing math delimiters (we will re-add)
    s = s.replace("$", "")

    # Normalize "At r = 9\%:" and "At t = 2:"
    s = re.sub(
        rf"\bAt ([A-Za-z]) = ([0-9.]+)(?:\\%)?:",
        lambda m: f"At §{m.group(1)} = {m.group(2)}\\%§:",
        s,
    )
    s = re.sub(
        r"\bAt ([A-Za-z]) = ([0-9.]+):",
        lambda m: f"At §{m.group(1)} = {m.group(2)}§:",
        s,
    )

    # Split into alternating prose connectors and chunks
    # Connectors kept as prose: ", so ", ": " (after label), leading labels
    pieces = re.split(r"(,\s+so\s+)", s)
    rebuilt: list[str] = []
    for piece in pieces:
        if re.fullmatch(r",\s+so\s+", piece or ""):
            rebuilt.append(", so ")
            continue
        rebuilt.append(_wrap_piece(piece or ""))
    s = "".join(rebuilt)

    # Restore §math§ → $math$
    s = s.replace("§", "$")

    # Restore currency
    for i, c in enumerate(currency):
        s = s.replace(f"¤{i}¤", c)

    s = normalize_ts_escapes(s)
    s = s.replace("$$", "$")
    # Period outside closing math
    s = s.rstrip()
    if s.endswith("$."):
        pass
    elif s.endswith("$"):
        s += "."
    elif not s.endswith("."):
        s += "."
    # Fix "$.$" 
    s = s.replace("$.$.", "$.")

    if not dollars_balanced(s):
        # fail-safe: one big math wrap of non-prose
        return body if dollars_balanced(body) and not outside_has_tex(body) else body
    return s


def _wrap_piece(piece: str) -> str:
    """Wrap equation subchunks; keep short English labels as prose."""
    piece = piece.strip()
    if not piece:
        return piece

    # Label: rest  (Excess over ¤0¤: calc)
    m = re.match(
        r"^((?:Excess over|Gap|Difference|Interest|Growth|Premium|Ratio|"
        r"Periodic rate|Nominal annual rate|Total growth|Target ratio|"
        r"First gap|Second gap|Extra interest)[^:]*):\s*(.*)$",
        piece,
        re.I,
    )
    if m:
        label, rest = m.group(1), m.group(2).strip()
        if rest:
            return f"{label}: {_eq(rest)}"
        return label

    # At §r = 9\%§: rest
    m = re.match(r"^(At §[^§]+§:)\s*(.*)$", piece)
    if m:
        head, rest = m.group(1), m.group(2).strip()
        if not rest:
            return head
        # rest may be "rt = 0.36, e^{...} \approx ..., so K = ..."
        # already split by ", so " at top level; here only comma-eqs
        return head + " " + _comma_eqs(rest)

    return _comma_eqs(piece)


def _comma_eqs(s: str) -> str:
    parts = [p.strip() for p in s.split(",") if p.strip()]
    return ", ".join(_eq(p) for p in parts)


def _eq(s: str) -> str:
    s = s.strip().rstrip(".")
    if not s:
        return s
    if s.startswith("§") and s.endswith("§"):
        return s
    # pure prose (no = and no tex)
    if not re.search(rf"=|\\({TEX_CMD}|%)|e\^|¤", s) and re.fullmatch(
        r"[A-Za-z][A-Za-z0-9 .'-]*", s or "x"
    ):
        return s
    return f"§{s}§"


def main() -> None:
    src = PATH.read_text(encoding="utf-8")
    src = normalize_ts_escapes(src)

    def repl_block(m: re.Match[str]) -> str:
        head, mid, tail = m.group(1), m.group(2), m.group(3)
        lines = []
        for line in mid.split("\n"):
            mm = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
            if mm:
                lines.append(f"{mm.group(1)} {ch13_step(mm.group(2))}")
            else:
                lines.append(line)
        mid2 = "\n".join(lines)
        mid2 = re.sub(
            r"(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)", r"\1\n\n\2", mid2
        )
        return head + mid2 + tail

    new_src, n = re.subn(
        r"(\*\*Part 3: Solve\.\*\*\n\n)(.*?)(\n\n\*\*Answer\.\*\*)",
        repl_block,
        src,
        flags=re.S,
    )
    PATH.write_text(new_src, encoding="utf-8")
    print("rewrote_blocks", n)

    # Verify 11-53
    t = PATH.read_text(encoding="utf-8")
    i = t.find("id: `math-11-53`")
    j = t.find("**Part 3: Solve.**", i)
    k = t.find("**Answer.**", j)
    print("--- math-11-53 ---")
    print(t[j:k])

    # Count remaining outside-tex on Part 3 lines
    bad = 0
    samples = []
    for m in re.finditer(
        r"\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*", t, re.S
    ):
        for line in m.group(1).split("\n"):
            mm = re.match(r"^\*\*\d+\.\*\*\s+(.*)$", line)
            if not mm:
                continue
            if outside_has_tex(mm.group(1)):
                bad += 1
                if len(samples) < 12:
                    samples.append(line[:120])
    print("remaining_outside_tex", bad)
    for s in samples:
        print(" ", s)


if __name__ == "__main__":
    main()
