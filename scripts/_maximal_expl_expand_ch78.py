#!/usr/bin/env python3
"""Sequential maximal expansion of Ch7-8 tactical explanations."""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ROOT = Path("/workspace")
FILES = [
    ("json", ROOT / "src/data/math-ch7-linear-quadratic.json"),
    ("json", ROOT / "src/data/math-ch7-mixed-exam.json"),
    ("ts", ROOT / "src/data/math-ch8-power-functions.ts"),
    ("json", ROOT / "src/data/math-ch8-exam.json"),
]
DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)
INLINE_RE = re.compile(r"(?<!\$)\$(?!\$)(.+?)\$(?!\$)")
LETTERS = "ABCDE"


def tidy_ws(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def norm_inner(inner: str) -> str:
    return re.sub(r"\s+", " ", inner).strip()


def D(inner: str) -> str:
    return f"$${norm_inner(inner)}$$"


def split_equals_safe(s: str) -> list[str]:
    protected: list[str] = []

    def protect(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"«P{len(protected)-1}»"

    tmp = re.sub(
        r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow|"
        r"Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)",
        protect,
        s,
    )
    parts = tmp.split("=")

    def unprotect(chunk: str) -> str:
        return re.sub(r"«P(\d+)»", lambda m: protected[int(m.group(1))], chunk)

    return [unprotect(p).strip() for p in parts]


def tokenize(text: str) -> list[tuple[str, str]]:
    parts: list[tuple[str, str]] = []
    pos = 0
    for m in DISPLAY_RE.finditer(text):
        if m.start() > pos:
            parts.append(("prose", text[pos:m.start()]))
        parts.append(("disp", norm_inner(m.group(1))))
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


def merge_broken_display_runs(text: str) -> str:
    def once(s: str) -> str:
        pat_a = re.compile(
            r"\$\$([^$]*?)\\(?:qquad|quad)\s*([^=$]+?)\s*\$\$\s*\$\$=\s*([^$]+?)\$\$",
            re.S,
        )

        def repl_a(m: re.Match) -> str:
            left = norm_inner(m.group(1)).rstrip().rstrip(",").strip()
            lhs = norm_inner(m.group(2)).rstrip(",").strip()
            rhs = norm_inner(m.group(3))
            if r"\qquad" in rhs or r"\quad" in rhs:
                bits = re.split(r"\\(?:qquad|quad)\s*", rhs, maxsplit=1)
                first_rhs, rest = bits[0].strip(), bits[1].strip() if len(bits) > 1 else ""
                out = (D(left) + "\n\n" if left else "") + D(f"{lhs}={first_rhs}")
                if rest:
                    out += "\n\n" + D(r"\qquad " + rest)
                return out
            return (D(left) + "\n\n" if left else "") + D(f"{lhs}={rhs}")

        s2, n = pat_a.subn(repl_a, s)
        if n:
            return s2

        pat_b = re.compile(
            r"\$\$\\(?:qquad|quad)\s*([^=$]+?)\s*\$\$\s*\$\$=\s*([^$]+?)\$\$",
            re.S,
        )

        def repl_b(m: re.Match) -> str:
            lhs, rhs = norm_inner(m.group(1)), norm_inner(m.group(2))
            if r"\qquad" in rhs or r"\quad" in rhs:
                bits = re.split(r"\\(?:qquad|quad)\s*", rhs, maxsplit=1)
                out = D(f"{lhs}={bits[0].strip()}")
                if len(bits) > 1 and bits[1].strip():
                    out += "\n\n" + D(r"\qquad " + bits[1].strip())
                return out
            return D(f"{lhs}={rhs}")

        s2, n = pat_b.subn(repl_b, s)
        if n:
            return s2

        pat_d = re.compile(
            r"\$\$([^$]*?)\\(?:qquad|quad)\s*([A-Za-z\\][A-Za-z0-9_\\{}()+\-]*)\s*\$\$"
            r"\s*\$\$\s*(\2\s*=\s*[^$]+?)\$\$",
            re.S,
        )

        def repl_d(m: re.Match) -> str:
            left = norm_inner(m.group(1)).rstrip().rstrip(",").strip()
            second = norm_inner(m.group(3))
            return ((D(left) + "\n\n") if left else "") + D(second)

        s2, n = pat_d.subn(repl_d, s)
        if n:
            return s2

        pat_c = re.compile(
            r"\$\$([^$]*?\\iff)\s*([^=$]+?)\s*\$\$\s*\$\$=\s*([^$]+?)\$\$",
            re.S,
        )
        s2, n = pat_c.subn(
            lambda m: D(norm_inner(m.group(1) + " " + m.group(2) + " = " + m.group(3))),
            s,
        )
        if n:
            return s2
        return s

    prev, cur = None, text
    for _ in range(24):
        if cur == prev:
            break
        prev, cur = cur, once(cur)
    return re.sub(r"\$\$\\(?:qquad|quad)\s*\$\$", "", cur)


def repair_misattributed_qquad(text: str) -> str:
    pat = re.compile(
        r"\$\$([^$=]+)=([^$]*?)\\(?:qquad|quad)\s*([A-Za-z\\][A-Za-z0-9_\\{}()+\-]*)\s*\$\$"
        r"\s*\$\$\s*\1\s*=\s*([^$]+?)\$\$"
        r"(?:\s*\$\$\s*\1\s*=\s*([^$]+?)\$\$)?",
        re.S,
    )

    def repl(m: re.Match) -> str:
        a, val, b, expr = m.group(1).strip(), m.group(2).strip(), m.group(3).strip(), m.group(4).strip()
        out = D(f"{a}={val}") + "\n\n" + D(f"{b}={expr}")
        if m.group(5) is not None:
            out += "\n\n" + D(f"{b}={m.group(5).strip()}")
        return out

    prev, cur = None, text
    for _ in range(8):
        if cur == prev:
            break
        prev, cur = cur, pat.sub(repl, cur)
    return cur


def merge_orphan_equals(text: str) -> str:
    pat = re.compile(r"\$\$([^=$]+?)\$\$\s*\$\$=\s*([^$]+?)\$\$", re.S)
    prev, cur = None, text
    for _ in range(10):
        if cur == prev:
            break
        prev, cur = cur, pat.sub(
            lambda m: D(norm_inner(m.group(1)) + "=" + norm_inner(m.group(2))), cur
        )
    return cur


def split_qquad_equations(body: str) -> list[str] | None:
    s = norm_inner(body)
    if r"\qquad" not in s and r"\quad" not in s:
        return None
    chunks = re.split(r",\s*\\qquad\s*" if re.search(r",\s*\\qquad", s) else r"\\qquad\s*", s)
    eqs = [c.strip().rstrip(",").strip() for c in chunks if c.strip()]
    if len(eqs) < 2 or any("=" not in e for e in eqs):
        return None
    return eqs


def expand_iff_display(body: str) -> str | None:
    s = norm_inner(body)
    if r"\iff" not in s and r"\implies" not in s:
        return None
    parts = [p.strip() for p in re.split(r"\\(?:iff|implies)", s) if p.strip()]
    if len(parts) < 2 or all(r"\text{" in p for p in parts):
        return None
    return "\n\n".join(D(p) for p in parts)


def expand_equals_chain(body: str) -> str | None:
    s = norm_inner(body)
    if r"\begin{" in s or r"\qquad" in s or r"\quad" in s:
        return None
    if re.search(
        r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow|"
        r"Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)",
        s,
    ):
        return None
    parts = split_equals_safe(s)
    if len(parts) < 3:
        return None
    if not re.search(r"\d", s) and len(parts) > 4:
        return None
    blocks = [D(f"{parts[0]}={parts[1]}")]
    lhs = parts[0].strip()
    simple = bool(
        re.match(r"^[A-Za-z\\][A-Za-z0-9_\\{}()]*$", lhs)
        or re.match(r"^[A-Za-z]\\?\w*\([^)]*\)$", lhs)
        or re.match(r"^\\Delta$", lhs)
        or re.match(r"^[A-Za-z]_\{?[A-Za-z0-9]+\}?$", lhs)
    )
    for p in parts[2:]:
        blocks.append(D(f"{lhs}={p}") if simple else D(f"={p}"))
    return "\n\n".join(blocks)


def expand_rel_chain(body: str) -> str | None:
    s = norm_inner(body)
    if r"\iff" in s or r"\implies" in s:
        return None
    m = re.match(r"^(.+?)=(.+?)(\\le|\\ge|\\leq|\\geq|<|>)(.+)$", s)
    if not m:
        return None
    lhs, mid, op, rhs = m.group(1).strip(), m.group(2).strip(), m.group(3), m.group(4).strip()
    if not re.search(r"[+\-*/]|\\cdot|\\frac|\d", mid) or r"\text{" in s:
        return None
    return "\n\n".join([D(f"{lhs}={mid}"), D(f"{mid}{op}{rhs}")])


def deepen_linear_inequality_display(body: str) -> str | None:
    s = norm_inner(body)
    m = re.match(
        r"^(\d+)\s*-\s*(\d+)([A-Za-z])\s*(<|>|\\lt|\\gt|\\le|\\ge|\\leq|\\geq)\s*0$",
        s,
    )
    if not m:
        return None
    c, coef, var, op = m.group(1), m.group(2), m.group(3), m.group(4)
    flip = {"<": ">", ">": "<", r"\lt": ">", r"\gt": "<", r"\le": r"\ge", r"\ge": r"\le",
            r"\leq": r"\geq", r"\geq": r"\leq"}
    return "\n\n".join([D(s), D(f"-{coef}{var}{op}-{c}"), D(f"{var}{flip.get(op, op)}\\frac{{{c}}}{{{coef}}}")])


def expand_one_display(body: str) -> str:
    body = norm_inner(body)
    eqs = split_qquad_equations(body)
    if eqs is not None:
        return "\n\n".join(D(eq) for eq in eqs)
    for fn in (expand_iff_display, expand_rel_chain, expand_equals_chain):
        out = fn(body)
        if out is not None:
            return out
    return D(body)


def expand_all_displays(text: str) -> str:
    prev, cur = None, text
    for _ in range(6):
        if cur == prev:
            break
        prev, cur = cur, DISPLAY_RE.sub(lambda m: expand_one_display(m.group(1)), cur)
    return cur


def apply_linear_inequality_deepen(text: str) -> str:
    """One-shot deepen; skip if the next display is already the moved-term step."""
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val)); i += 1; continue
        deep = deepen_linear_inequality_display(val)
        if deep is None:
            out.append((kind, val)); i += 1; continue
        # Peek ahead for already-deepened marker like -4a<-25
        already = False
        j = i + 1
        while j < len(parts) and parts[j][0] == "prose" and parts[j][1].strip() == "":
            j += 1
        if j < len(parts) and parts[j][0] == "disp":
            if parts[j][1].lstrip().startswith("-"):
                already = True
        if already:
            out.append((kind, val)); i += 1; continue
        # Expand deep into token stream
        for dm in DISPLAY_RE.finditer(deep):
            out.append(("disp", norm_inner(dm.group(1))))
        i += 1
    return reassemble(out)


def try_expand_power_subs(rhs: str) -> str | None:
    def pow_frac(m: re.Match) -> str:
        try:
            return f"\\frac{{{int(m.group(1))**2}}}{{{int(m.group(2))**2}}}"
        except Exception:
            return m.group(0)

    s2 = re.sub(r"\\left\(\\frac\{(\d+)\}\{(\d+)\}\\right\)\^\{2\}", pow_frac, rhs)
    s2 = re.sub(r"\(\\frac\{(\d+)\}\{(\d+)\}\)\^\{2\}", pow_frac, s2)
    if s2 != rhs:
        return s2

    def pow_int(m: re.Match) -> str:
        try:
            return str(int(m.group(1)) ** 2)
        except Exception:
            return m.group(0)

    s3 = re.sub(r"(?<![A-Za-z{])(\d+)\^\{2\}", pow_int, rhs)
    return s3 if s3 != rhs else None


def expand_numeric_eval_jumps(text: str) -> str:
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val)); i += 1; continue
        if (i + 2 < len(parts) and parts[i + 1][0] == "prose" and parts[i + 1][1].strip() == ""
                and parts[i + 2][0] == "disp"):
            nxt = parts[i + 2][1]
            m = re.match(r"^(.+?)=(.+)$", val)
            if m and re.search(r"[+\-]|\\cdot|\\frac|\^", m.group(2)):
                lhs, rhs = m.group(1).strip(), m.group(2).strip()
                expanded = try_expand_power_subs(rhs)
                m2 = re.match(r"^(.+?)=(.+)$", nxt)
                same = nxt.lstrip().startswith("=") or (m2 and m2.group(1).strip() == lhs)
                if expanded and expanded != rhs and same:
                    final = nxt if not nxt.lstrip().startswith("=") else f"{lhs}{nxt.lstrip()}"
                    out += [("disp", f"{lhs}={rhs}"), ("disp", f"{lhs}={expanded}"), ("disp", final)]
                    i += 3
                    continue
        out.append((kind, val)); i += 1
    return reassemble(out)


def lift_inline_multi_eq(text: str) -> str:
    def repl(m: re.Match) -> str:
        inner = m.group(1)
        if inner.count("=") < 2 or re.search(r"\\(?:leq|geq|neq|le|ge)\b", inner):
            return m.group(0)
        parts = split_equals_safe(inner)
        if len(parts) < 3 or not re.search(r"\d|[A-Za-z]\\?\w*\(", inner):
            return m.group(0)
        blocks = [D(f"{parts[0]}={parts[1]}")]
        lhs = parts[0].strip()
        for p in parts[2:]:
            blocks.append(D(f"{lhs}={p}") if re.match(r"^[A-Za-z\\][A-Za-z0-9_\\{}()]*$", lhs) else D(f"={p}"))
        return "\n\n" + "\n\n".join(blocks) + "\n\n"

    chunks, pos = [], 0
    for m in DISPLAY_RE.finditer(text):
        chunks.append(INLINE_RE.sub(repl, text[pos:m.start()])); chunks.append(m.group(0)); pos = m.end()
    chunks.append(INLINE_RE.sub(repl, text[pos:]))
    return "".join(chunks)


def lift_prose_arith(text: str) -> str:
    cre = re.compile(
        r"(gives?|yields?|becomes?|equals?|then)\s+\$([^$]{3,100})\$",
        re.I,
    )

    def handle(prose: str) -> str:
        def repl(m: re.Match) -> str:
            verb, expr = m.group(1), m.group(2).strip()
            mrel = re.match(r"^(.+?)=(.+?)(<|>|\\le|\\ge|\\leq|\\geq)(.+)$", expr)
            if mrel:
                return (f"{verb}\n\n{D(mrel.group(1)+'='+mrel.group(2))}\n\n"
                        f"{D(mrel.group(2)+mrel.group(3)+mrel.group(4))}\n\n")
            parts = split_equals_safe(expr)
            if len(parts) >= 2:
                blocks = [D(f"{parts[0]}={parts[1]}")] + [D(f"={p}") for p in parts[2:]]
                return f"{verb}\n\n" + "\n\n".join(blocks) + "\n\n"
            return m.group(0)
        return cre.sub(repl, prose)

    chunks, pos = [], 0
    for m in DISPLAY_RE.finditer(text):
        chunks.append(handle(text[pos:m.start()])); chunks.append(m.group(0)); pos = m.end()
    chunks.append(handle(text[pos:]))
    return "".join(chunks)


def deepen_compressed_disc_ineq(text: str) -> str:
    def repl(m: re.Match) -> str:
        return (f"{m.group(1)}\n\n{D('\\Delta='+m.group(2)+'-'+m.group(3))}\n\n"
                f"{D('\\Delta='+m.group(4))}\n\n{D(m.group(4)+'<0')}\n\n")
    return re.sub(r"(then\s+)\$?\\Delta=(\d+)-(\d+)=(-?\d+)<0\$?", repl, text, flags=re.I)


def expand_vieta_axis_prose(text: str) -> str:
    text = re.sub(
        r"\$S=-b/a=([^$/]+)/([^$=]+)=([^$]+)\$",
        lambda m: f"{D(r'S=-\\frac{b}{a}')}\n\n{D(f'S={m.group(1)}/{m.group(2)}')}\n\n{D(f'S={m.group(3)}')}",
        text,
    )
    text = re.sub(
        r"\$x=-b/\(2a\)=([^$=]+)=([^$]+)\$",
        lambda m: f"{D(r'x=-\\frac{b}{2a}')}\n\n{D(f'x={m.group(1)}')}\n\n{D(f'x={m.group(2)}')}",
        text,
    )
    return text


def deepen_simple_quadratic_zeros(text: str) -> str:
    def repl(m: re.Match) -> str:
        mm = re.match(r"^x\s*=\s*\\pm\s*(.+)$", norm_inner(m.group(1)))
        if not mm:
            return m.group(0)
        v = mm.group(1).strip()
        return D(f"x=-{v}") + "\n\n" + D(f"x={v}")
    return DISPLAY_RE.sub(repl, text)


def split_qquad_comparisons(text: str) -> str:
    def repl(m: re.Match) -> str:
        body = norm_inner(m.group(1))
        if (r"\qquad" not in body and r"\quad" not in body) or "=" in body:
            return m.group(0)
        parts = [p.strip() for p in re.split(r"\\(?:qquad|quad)\s*", body) if p.strip()]
        if len(parts) < 2 or not all(re.search(r"<|>|\\le|\\ge|\\neq|\\leq|\\geq", p) for p in parts):
            return m.group(0)
        return "\n\n".join(D(p) for p in parts)
    return DISPLAY_RE.sub(repl, text)


def dedupe_consecutive_displays(text: str) -> str:
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    last_disp = None
    for kind, val in parts:
        if kind == "disp":
            if last_disp == val:
                continue
            last_disp = val
            out.append((kind, val))
        else:
            # keep non-blank prose; blank between dupes can be dropped later
            out.append((kind, val))
            if val.strip():
                last_disp = None
    return reassemble(out)


def fix_orphan_commas(text: str) -> str:
    text = re.sub(r"\$\$\s*\n\n\s*,\s*", "$$\n\n", text)
    text = re.sub(r"\$\$\s*,\s+", "$$\n\n", text)
    text = re.sub(r"\n,\s+(so |and |which |therefore )", r"\n\n\1", text, flags=re.I)
    text = re.sub(r"\$\$\s*\n\n\.\s*\n", "$$\n\n", text)
    text = re.sub(r"\$\$\s*\n\n\.\s+", "$$\n\n", text)
    return text


def ensure_header_closer(text: str, letter: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    text = text.strip()
    text = re.sub(r"^\*\*[A-E]\.\*\* → (?:True|False)", f"**{letter}.** → {verd}", text, count=1)
    if not text.startswith(f"**{letter}.**"):
        text = f"**{letter}.** → {verd}\n\n" + text
    if not re.search(r"So the statement is (?:True|False)\.\s*$", text):
        if re.search(r"so the statement is (?:True|False)\.\s*$", text, re.I):
            text = re.sub(r"so the statement is (?:True|False)\.\s*$", f"So the statement is {verd}.", text, flags=re.I)
        else:
            text = text.rstrip() + f"\n\nSo the statement is {verd}."
    else:
        text = re.sub(r"So the statement is (?:True|False)\.\s*$", f"So the statement is {verd}.", text)
    text = re.sub(r"\n*QED\.?\s*$", "", text, flags=re.I)
    return text


def process_explanation(text: str, letter: str, truth: bool) -> str:
    text = merge_broken_display_runs(text)
    text = repair_misattributed_qquad(text)
    text = merge_orphan_equals(text)
    text = expand_vieta_axis_prose(text)
    text = deepen_compressed_disc_ineq(text)
    text = expand_all_displays(text)
    text = apply_linear_inequality_deepen(text)
    text = lift_inline_multi_eq(text)
    text = lift_prose_arith(text)
    text = merge_broken_display_runs(text)
    text = merge_orphan_equals(text)
    text = expand_all_displays(text)
    text = expand_numeric_eval_jumps(text)
    text = deepen_simple_quadratic_zeros(text)
    text = split_qquad_comparisons(text)
    text = dedupe_consecutive_displays(text)
    text = fix_orphan_commas(text)
    text = ensure_header_closer(text, letter, truth)
    return tidy_ws(text)


def audit_explanation(text: str, letter: str, truth: bool, case_id: str) -> list[str]:
    problems = []
    verd = "True" if truth else "False"
    if not text.startswith(f"**{letter}.** → {verd}"):
        problems.append(f"{case_id} {letter}: bad header")
    if text.count("$$") % 2 != 0:
        problems.append(f"{case_id} {letter}: uneven $$")
    if not text.rstrip().endswith(f"So the statement is {verd}."):
        problems.append(f"{case_id} {letter}: bad closer")
    if re.search(r"\\qquad\s*[^=\n]+\$\$\s*\n+\s*\$\$=", text):
        problems.append(f"{case_id} {letter}: dangling qqquad")
    if re.search(r"QED", text, re.I):
        problems.append(f"{case_id} {letter}: QED")
    return problems


def process_json_range(path: Path, start: int, end: int | None):
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    end_i = len(tasks) if end is None else min(end, len(tasks))
    changed, problems = 0, []
    for idx in range(start, end_i):
        t = tasks[idx]
        new_expls = []
        for i, e in enumerate(t["tactical_explanations"]):
            letter, truth = LETTERS[i], bool(t["answer_key"][i])
            new = process_explanation(e, letter, truth)
            if new != e:
                changed += 1
            problems.extend(audit_explanation(new, letter, truth, t["case_id"]))
            new_expls.append(new)
        t["tactical_explanations"] = new_expls
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return changed, problems


_TS_TASK_RE = re.compile(
    r"(answer_key:\s*\[(.*?)\],\s*tactical_explanations:\s*\[)([\s\S]*?)(\n\s*\],)",
    re.S,
)


def process_ts_range(path: Path, start: int, end: int | None):
    text = path.read_text(encoding="utf-8")
    matches = list(_TS_TASK_RE.finditer(text))
    end_i = len(matches) if end is None else min(end, len(matches))
    changed, problems = 0, []
    pieces, last = [], 0
    for ti, m in enumerate(matches):
        pieces.append(text[last:m.start()])
        if start <= ti < end_i:
            truths = []
            for tok in m.group(2).split(","):
                tok = tok.strip()
                if tok in ("true", "True"):
                    truths.append(True)
                elif tok in ("false", "False"):
                    truths.append(False)
            idx, stats = {"n": 0}, {"c": 0}

            def one(mm: re.Match) -> str:
                body = mm.group(1)
                i = idx["n"]; idx["n"] += 1
                letter = LETTERS[i] if i < 5 else "A"
                truth = truths[i] if i < len(truths) else True
                if not re.match(r"\*\*[A-E]\.\*\*", body.lstrip()):
                    return mm.group(0)
                new = process_explanation(body, letter, truth)
                if new != body:
                    stats["c"] += 1
                problems.extend(audit_explanation(new, letter, truth, f"MATH 8.ts-{ti+1}"))
                return f"`{new}`"

            new_inner = re.sub(r"`([\s\S]*?)`", one, m.group(3))
            changed += stats["c"]
            pieces.append(m.group(1) + new_inner + m.group(4))
        else:
            pieces.append(m.group(0))
        last = m.end()
    pieces.append(text[last:])
    path.write_text("".join(pieces), encoding="utf-8")
    return changed, problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--file", type=int, default=None)
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--end", type=int, default=None)
    args = ap.parse_args()
    file_list = FILES if args.file is None else [FILES[args.file]]
    for kind, path in file_list:
        ch, probs = (process_json_range if kind == "json" else process_ts_range)(path, args.start, args.end)
        print(f"{path.name} [{args.start}:{args.end}]: changed {ch}, audit {len(probs)}")
        for p in probs[:20]:
            print(" ", p)


if __name__ == "__main__":
    main()
