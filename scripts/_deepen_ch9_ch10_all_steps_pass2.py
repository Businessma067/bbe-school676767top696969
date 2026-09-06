#!/usr/bin/env python3
"""Sequential maximal deepen for Ch9 polynomials / mixed exam and Ch10 exp-log.

Gold density: MATH 6.113 E.
One task at a time; audit after each letter.
Does not change statements or answer_key.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
sys.path.insert(0, str(Path(__file__).resolve().parent))

from _deepen_ch910_helpers import (  # noqa: E402
    deepen_thin_explog,
    regenerate_difference_letter,
    unpack_triple_products,
)
from _deepen_ch910_poly_regen import (  # noqa: E402
    extract_named_polys,
    regen_poly_eval_letter,
)

FILES = {
    "ch9": ROOT / "src/data/math-ch9-polynomials.json",
    "mixed": ROOT / "src/data/math-ch9-mixed-exam.json",
    "ch10": ROOT / "src/data/math-ch10-exp-log.json",
}
LETTERS = "ABCDE"
DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)


def tidy(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def norm(inner: str) -> str:
    return re.sub(r"\s+", " ", inner).strip()


def D(inner: str) -> str:
    return f"$${norm(inner)}$$"


def split_eq(s: str) -> list[str]:
    protected: list[str] = []

    def prot(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"«P{len(protected) - 1}»"

    tmp = re.sub(
        r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow|"
        r"Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)",
        prot,
        s,
    )
    parts = tmp.split("=")

    def unprot(chunk: str) -> str:
        return re.sub(r"«P(\d+)»", lambda m: protected[int(m.group(1))], chunk)

    return [unprot(p).strip() for p in parts]


def expand_equals_chain(body: str) -> str | None:
    s = norm(body)
    if r"\begin{" in s or r"\qquad" in s or r"\quad" in s:
        return None
    if re.search(
        r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow|"
        r"Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)",
        s,
    ):
        return None
    parts = split_eq(s)
    if len(parts) < 3:
        return None
    blocks = [D(f"{parts[0]}={parts[1]}")]
    lhs = parts[0].strip()
    simple = bool(
        re.match(r"^[A-Za-z\\][A-Za-z0-9_\\{}()]*$", lhs)
        or re.match(r"^[A-Za-z]\\?\w*\([^)]*\)$", lhs)
        or re.match(r"^\\(?:frac|bigl|tfrac).*", lhs)
    )
    for part in parts[2:]:
        blocks.append(D(f"{lhs}={part}") if simple else D(f"={part}"))
    return "\n\n".join(blocks)


def expand_Rightarrow_pack(body: str) -> str | None:
    s = norm(body)
    if r"\Rightarrow" not in s and r"\implies" not in s:
        return None
    parts = [p.strip() for p in re.split(r"\\(?:Rightarrow|implies)", s) if p.strip()]
    if len(parts) < 2:
        return None
    return "\n\n".join(D(p) for p in parts)


def unpack_signed_sum_display(body: str) -> str | None:
    s = norm(body).replace("−", "-").replace(" ", "")
    if "=" in s or r"\cdot" in body or "^" in s:
        return None
    if not re.fullmatch(r"[+\-]?\d+(?:\.\d+)?(?:[+\-]\d+(?:\.\d+)?){2,}", s):
        return None
    toks = re.findall(r"[+\-]?\d+(?:\.\d+)?", s if s[0] in "+-" else "+" + s)
    nums = [float(t) for t in toks]
    steps = []
    run = nums[0]

    def fmt(x: float) -> str:
        return str(int(x)) if abs(x - round(x)) < 1e-12 else str(x)

    for n in nums[1:]:
        prev = run
        run = run + n
        op = "+" if n >= 0 else "-"
        steps.append(D(f"{fmt(prev)}{op}{fmt(abs(n))}={fmt(run)}"))
    return "\n\n".join(steps)


def expand_one_display(body: str) -> str:
    for fn in (expand_equals_chain, expand_Rightarrow_pack, unpack_signed_sum_display):
        out = fn(body)
        if out is not None:
            return out
    return D(body)


def expand_all_displays(text: str) -> str:
    prev, cur = None, text
    for _ in range(8):
        if cur == prev:
            break
        prev, cur = cur, DISPLAY_RE.sub(lambda m: expand_one_display(m.group(1)), cur)
    return cur


def tokenize(text: str) -> list[tuple[str, str]]:
    parts: list[tuple[str, str]] = []
    pos = 0
    for m in DISPLAY_RE.finditer(text):
        if m.start() > pos:
            parts.append(("prose", text[pos : m.start()]))
        parts.append(("disp", norm(m.group(1))))
        pos = m.end()
    if pos < len(text):
        parts.append(("prose", text[pos:]))
    return parts


def reassemble(parts: list[tuple[str, str]]) -> str:
    buf: list[str] = []
    for kind, val in parts:
        if kind == "prose":
            buf.append(val)
        else:
            if buf and not buf[-1].endswith("\n") and buf[-1]:
                buf.append("\n\n")
            buf.append(D(val))
    return "".join(buf)


def _pow_eval(expr: str) -> str | None:
    def powi(m: re.Match) -> str:
        base, exp = int(m.group(1)), int(m.group(2))
        return str(base**exp)

    s2 = re.sub(r"(?<![A-Za-z{])(\d+)\^\{(\d+)\}", powi, expr)
    s2 = re.sub(r"(?<![A-Za-z{])(\d+)\^(\d+)", powi, s2)
    return s2 if s2 != expr else None


def _cdot_eval_once(expr: str) -> str | None:
    m = re.search(r"(?<![A-Za-z{])(\d+)\\cdot(-?\d+)", expr)
    if not m:
        return None
    a, b = int(m.group(1)), int(m.group(2))
    return expr[: m.start()] + str(a * b) + expr[m.end() :]


def unpack_eval_display(lhs: str, rhs: str) -> list[str] | None:
    steps = [rhs]
    cur = rhs
    for _ in range(6):
        nxt = _pow_eval(cur)
        if not nxt or nxt == cur:
            break
        if nxt not in steps:
            steps.append(nxt)
        cur = nxt
    for _ in range(8):
        nxt = _cdot_eval_once(cur)
        if not nxt or nxt == cur:
            break
        if nxt not in steps:
            steps.append(nxt)
        cur = nxt
    if len(steps) <= 1:
        return None
    return [f"{lhs}={s}" for s in steps]


def expand_numeric_eval_chain(text: str) -> str:
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue
        m = re.match(r"^(.+?)=(.+)$", val)
        if not m or not re.search(r"\^|\\cdot", m.group(2)):
            out.append((kind, val))
            i += 1
            continue
        lhs, rhs = m.group(1).strip(), m.group(2).strip()
        # Skip signed bases like (-1)^{3} — too easy to mangle
        if re.search(r"\(-?\d+\)\^", rhs):
            out.append((kind, val))
            i += 1
            continue
        chain = unpack_eval_display(lhs, rhs)
        if not chain:
            out.append((kind, val))
            i += 1
            continue
        existing = {val}
        j = i + 1
        while j < len(parts):
            if parts[j][0] == "prose" and not parts[j][1].strip():
                j += 1
                continue
            if parts[j][0] != "disp":
                break
            mm = re.match(r"^(.+?)=(.+)$", parts[j][1])
            if mm and mm.group(1).strip() == lhs:
                existing.add(parts[j][1])
                j += 1
                continue
            break
        emitted: set[str] = set()
        for step in chain:
            if step not in emitted:
                out.append(("disp", step))
                emitted.add(step)
        for e in list(existing):
            if e not in emitted and e.startswith(lhs + "="):
                out.append(("disp", e))
                emitted.add(e)
        i = j
    return reassemble(out)


def fix_broken_difference_quad_packs(text: str) -> str:
    """Split packed $$=1,\\quad 9-2$$ difference displays."""
    pat = re.compile(
        r"\$\$\s*([+\-]?\d+(?:\.\d+)?)\s*-\s*([+\-]?\d+(?:\.\d+)?)\s*\$\$"
        r"\s*\$\$\s*=\s*([+\-]?\d+(?:\.\d+)?)\s*,\s*\\quad\s*"
        r"([+\-]?\d+(?:\.\d+)?)\s*-\s*([+\-]?\d+(?:\.\d+)?)\s*\$\$",
        re.S,
    )

    def repl(m: re.Match) -> str:
        a, b, res, c, d = m.groups()
        return D(f"{a}-{b}") + "\n\n" + D(f"={res}") + "\n\n" + D(f"{c}-{d}")

    prev, cur = None, text
    for _ in range(12):
        if cur == prev:
            break
        prev, cur = cur, pat.sub(repl, cur)
    return cur


def dedupe_consecutive_displays(text: str) -> str:
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    for kind, val in parts:
        if kind == "disp" and out and out[-1][0] == "disp" and out[-1][1] == val:
            continue
        out.append((kind, val))
    return reassemble(out)


def ensure_header_closer(text: str, letter: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    text = text.strip()
    text = re.sub(r"\bQED\.?\s*", "", text, flags=re.I)
    text = re.sub(
        r"^\*\*[A-E]\.\*\* → (?:True|False)",
        f"**{letter}.** → {verd}",
        text,
        count=1,
    )
    if not text.startswith(f"**{letter}.**"):
        text = f"**{letter}.** → {verd}\n\n" + text
    text = re.sub(
        r"(?i)so the statement is (?:True|False)\.\s*$",
        f"So the statement is {verd}.",
        text,
    )
    if not re.search(r"So the statement is (?:True|False)\.\s*$", text):
        text = text.rstrip() + f"\n\nSo the statement is {verd}."
    return tidy(text)


def process_explanation(
    text: str,
    letter: str,
    truth: bool,
    stmt: str = "",
    context: str = "",
    tables_markdown: str | None = None,
    bank: str = "ch9",
) -> str:
    if bank in ("ch9", "mixed") and tables_markdown:
        regen = regenerate_difference_letter(stmt, tables_markdown, letter, truth)
        if regen is not None:
            return regen

    text = fix_broken_difference_quad_packs(text)
    text = expand_all_displays(text)
    text = expand_numeric_eval_chain(text)
    text = unpack_triple_products(text)
    text = expand_all_displays(text)
    if bank == "ch10":
        text = deepen_thin_explog(text, stmt, context, letter, truth)
    text = dedupe_consecutive_displays(text)
    text = ensure_header_closer(text, letter, truth)
    return tidy(text)


def audit_explanation(text: str, letter: str, truth: bool, case_id: str) -> list[str]:
    problems = []
    verd = "True" if truth else "False"
    if not text.startswith(f"**{letter}.** → {verd}"):
        problems.append(f"{case_id} {letter}: bad header")
    if text.count("$$") % 2 != 0:
        problems.append(f"{case_id} {letter}: uneven $$")
    if not text.rstrip().endswith(f"So the statement is {verd}."):
        problems.append(f"{case_id} {letter}: bad closer")
    if re.search(r"QED", text, re.I):
        problems.append(f"{case_id} {letter}: QED")
    for m in DISPLAY_RE.finditer(text):
        body = norm(m.group(1))
        if r"\begin{" in body or r"\qquad" in body:
            continue
        if re.search(r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow)", body):
            continue
        if len(split_eq(body)) >= 3:
            problems.append(f"{case_id} {letter}: a=b=c `{body[:60]}`")
            break
    return problems


def process_json_range(path: Path, start: int, end: int | None):
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    # process in sort_order / case_id order but write back by index
    order = sorted(range(len(tasks)), key=lambda i: (tasks[i].get("sort_order", 0), tasks[i].get("case_id", "")))
    end_i = len(order) if end is None else min(end, len(order))
    changed, problems, ranges = 0, [], []
    bank = "ch10" if "ch10" in path.name else ("mixed" if "mixed" in path.name else "ch9")
    for pos in range(start, end_i):
        idx = order[pos]
        t = tasks[idx]
        new_expls = []
        task_changed = False
        for i, e in enumerate(t["tactical_explanations"]):
            letter, truth = LETTERS[i], bool(t["answer_key"][i])
            new = process_explanation(
                e,
                letter,
                truth,
                t["statements"][i],
                t.get("context", ""),
                t.get("tables_markdown"),
                bank=bank,
            )
            if new != e:
                changed += 1
                task_changed = True
            problems.extend(audit_explanation(new, letter, truth, t["case_id"]))
            new_expls.append(new)
        t["tactical_explanations"] = new_expls
        if task_changed:
            ranges.append(t["case_id"])
        disp = [e.count("$$") // 2 for e in new_expls]
        print(f"  audited {t['case_id']} A–E displays={disp}")
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return changed, problems, ranges


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--file", choices=list(FILES), required=True)
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--end", type=int, default=None)
    args = ap.parse_args()
    path = FILES[args.file]
    ch, probs, ranges = process_json_range(path, args.start, args.end)
    print(f"{path.name} [{args.start}:{args.end}]: changed {ch} letters, audit_issues {len(probs)}")
    if ranges:
        print(f"  cases: {ranges[0]} … {ranges[-1]} ({len(ranges)} tasks)")
    for pr in probs[:40]:
        print(" ", pr)


if __name__ == "__main__":
    main()
