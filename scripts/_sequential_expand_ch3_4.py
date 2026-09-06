#!/usr/bin/env python3
"""Sequential maximal expansion for Ch3 financial + Ch3 exam + Ch4 cases.

Walks tasks one-by-one (case_id ascending). For each letter A→E:
- keep rule formulas
- expand plug-ins into separate $$ steps
- fix corrupted \\sum_{k=...} splits
- audit headers / keys / $$ balance

Usage:
  python3 scripts/_sequential_expand_ch3_4.py --file financial --start 0 --count 12
  python3 scripts/_sequential_expand_ch3_4.py --file exam --start 0 --count 20
  python3 scripts/_sequential_expand_ch3_4.py --file ch4 --start 0 --count 15
"""

from __future__ import annotations

import argparse
import json
import math
import re
from pathlib import Path

ROOT = Path("/workspace")
FILES = {
    "financial": ROOT / "src/data/math-ch11-financial.ts",
    "exam": ROOT / "src/data/math-ch3-exam.json",
    "ch4": ROOT / "src/data/math-ch4-cases.json",
}

LETTERS = "ABCDE"
HEADER_RE = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\b", re.I)
CLOSER_RE = re.compile(r"So the statement is (True|False)\.?\s*$", re.I | re.M)
DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)

REL_CMD = (
    r"\\(?:neq|leq|geq|approx|equiv|iff|Rightarrow|Leftarrow|"
    r"Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)"
)

FILLER_RES = [
    re.compile(
        r"\n*\s*Hold the recovered value next to the claimed figure[^\n]*\.?\s*",
        re.I,
    ),
    re.compile(r"\n*\s*QED\.?\s*", re.I),
    re.compile(
        r"\n*\s*(?:Arithmetic already displayed|Accept\.|Reject\.)[^\n]*\.?\s*",
        re.I,
    ),
]


def tidy(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def fmt_block(inner: str) -> str:
    inner = inner.strip()
    if "\n" in inner or len(inner) > 48:
        return f"$$\n{inner}\n$$"
    return f"$${inner}$$"


def fmt_num(x: float, decimals: int = 6) -> str:
    if abs(x - round(x)) < 1e-9:
        return str(int(round(x)))
    return f"{x:.{decimals}f}".rstrip("0").rstrip(".")


def split_equals_outside_commands(s: str) -> list[str]:
    protected: list[str] = []

    def protect(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"«P{len(protected) - 1}»"

    tmp = re.sub(REL_CMD, protect, s)
    tmp = re.sub(r"\\sum_\{[^{}]*\}", protect, tmp)
    tmp = re.sub(r"\\[A-Za-z]+_\{[^{}]*\}", protect, tmp)

    parts: list[str] = []
    depth = 0
    buf: list[str] = []
    for ch in tmp:
        if ch == "{":
            depth += 1
            buf.append(ch)
        elif ch == "}":
            depth = max(0, depth - 1)
            buf.append(ch)
        elif ch == "=" and depth == 0:
            prev = buf[-1] if buf else ""
            if prev in "<>!":
                buf.append(ch)
            else:
                parts.append("".join(buf))
                buf = []
        else:
            buf.append(ch)
    parts.append("".join(buf))

    def unprotect(chunk: str) -> str:
        return re.sub(r"«P(\d+)»", lambda m: protected[int(m.group(1))], chunk)

    return [unprotect(p) for p in parts]


def split_approx(s: str) -> list[str]:
    parts: list[str] = []
    depth = 0
    buf: list[str] = []
    i = 0
    token = r"\approx"
    while i < len(s):
        if s[i] == "{":
            depth += 1
            buf.append(s[i])
            i += 1
        elif s[i] == "}":
            depth = max(0, depth - 1)
            buf.append(s[i])
            i += 1
        elif depth == 0 and s.startswith(token, i):
            parts.append("".join(buf))
            buf = []
            i += len(token)
        else:
            buf.append(s[i])
            i += 1
    parts.append("".join(buf))
    return parts


def is_numeric_expr(s: str) -> bool:
    t = s.strip()
    t = re.sub(
        r"\\(?:mathrm|text|operatorname|left|right|big|Big|bigl|bigr|cdot|times|"
        r"div|pm|mp|frac|dfrac|tfrac|ln|log|exp|sin|cos|tan|sqrt|overline|"
        r"underline|binom|approx|neq|leq|geq|quad|qquad|%|,)+",
        "",
        t,
    )
    t = re.sub(r"\\[a-zA-Z]+", "", t)
    t = re.sub(r"[\d\s\.\,\;\:\+\-\*\/\^\{\}\(\)\[\]\\|&=<>!_']+", "", t)
    return not bool(re.search(r"[a-zA-Z]", t))


def looks_like_equation_to_solve(body: str) -> bool:
    s = body.strip()
    if r"\approx" in s:
        return False
    parts = split_equals_outside_commands(s)
    if len(parts) != 2:
        return False
    left = parts[0].strip()
    if is_numeric_expr(left):
        return False
    if re.search(r"(?<![A-Za-z\\])[xyztuvw]\b", left) or re.search(
        r"(?<![A-Za-z])[xyzt](?![A-Za-z])", left
    ):
        return True
    return False


def has_arithmetic_op(s: str) -> bool:
    return bool(
        re.search(r"(\\times|\\cdot|\\div|\+|(?<!\\)-|\\frac|\\ln|\\log|\^|/|\*)", s)
    )


def expand_chain_body(body: str) -> str | None:
    s = body.strip()
    if not s or r"\qquad" in s or r"\quad" in s or r"\begin{" in s:
        return None
    if looks_like_equation_to_solve(s):
        return None

    if r"\approx" in s:
        approx_parts = [p.strip() for p in split_approx(s) if p.strip()]
        if len(approx_parts) < 2:
            return None
        first = approx_parts[0]
        if (
            len(approx_parts) == 2
            and not has_arithmetic_op(first)
            and "=" not in first
            and len(first) <= 40
        ):
            return None
        blocks: list[str] = []
        eq0 = [p.strip() for p in split_equals_outside_commands(first) if p.strip()]
        if len(eq0) >= 2:
            blocks.append(fmt_block(f"{eq0[0]} = {eq0[1]}"))
            for extra in eq0[2:]:
                blocks.append(fmt_block(f"= {extra}"))
        else:
            blocks.append(fmt_block(first))
        for ap in approx_parts[1:]:
            sub = [p.strip() for p in split_equals_outside_commands(ap) if p.strip()]
            if len(sub) >= 2:
                blocks.append(fmt_block(rf"\approx {sub[0]}"))
                for nxt in sub[1:]:
                    blocks.append(fmt_block(f"= {nxt}"))
            else:
                blocks.append(fmt_block(rf"\approx {ap}"))
        if len(blocks) < 2:
            return None
        return "\n\n".join(blocks)

    eq_parts = [p.strip() for p in split_equals_outside_commands(s)]
    if len(eq_parts) >= 3:
        if re.search(r"\bA\s*$", eq_parts[0]) and any(
            re.search(r"\bB\s*$", p) for p in eq_parts
        ):
            return None
        blocks = [fmt_block(f"{eq_parts[0]} = {eq_parts[1]}")]
        for p in eq_parts[2:]:
            blocks.append(fmt_block(f"= {p}"))
        return "\n\n".join(blocks)

    if len(eq_parts) == 2:
        left, right = eq_parts[0], eq_parts[1]
        if is_numeric_expr(left) and has_arithmetic_op(left):
            return "\n\n".join([fmt_block(left), fmt_block(f"= {right}")])

    if r"\Rightarrow" in s:
        parts = [p.strip() for p in re.split(r"\\Rightarrow", s) if p.strip()]
        if len(parts) >= 2 and any(has_arithmetic_op(p) or "=" in p for p in parts):
            blocks = [fmt_block(parts[0])]
            for p in parts[1:]:
                blocks.append(fmt_block(rf"\Rightarrow {p}"))
            return "\n\n".join(blocks)

    return None


def expand_displays(text: str) -> tuple[str, int]:
    expanded = 0

    def repl(m: re.Match) -> str:
        nonlocal expanded
        body = m.group(1)
        new = expand_chain_body(body)
        if new is None:
            return m.group(0)
        compact_old = ("$$" + body.strip() + "$$").replace("\n", "").replace(" ", "")
        if new.replace("\n", "").replace(" ", "") == compact_old:
            return m.group(0)
        expanded += 1
        return new

    return DISPLAY_RE.sub(repl, text), expanded


def fix_broken_sum_splits(expl: str) -> str:
    """Repair $$\\sum_{k$$ $$= 1}^{n}...$$ style corruption from earlier equals-splitting."""
    out = expl
    out = re.sub(
        r"\$\$\s*([^$]*\\sum_\{k)\s*\$\$\s*\$\$\s*=\s*([01]\}\^[^\n$]*)\s*\$\$",
        lambda m: fmt_block(f"{m.group(1).strip()}={m.group(2).strip()}"),
        out,
        flags=re.S,
    )
    return out


def expand_ln_ratio_plugin(expl: str) -> str:
    """Expand t = ln(a)/ln(b) or ln(a)/c when the numeric result only appears in prose."""
    for m in list(DISPLAY_RE.finditer(expl)):
        body = m.group(1)
        if r"\frac{\ln" not in body.replace(" ", ""):
            # tolerate whitespace variants
            if not re.search(r"\\frac\{\\ln", body):
                continue
        mm = re.search(
            r"\\frac\{\\ln\s*([0-9.]+)\}\{(?:\\ln\(?([0-9.]+)\)?|([0-9.]+))\}",
            body,
        )
        if not mm:
            continue
        after = expl[m.end() :]
        next_disp = DISPLAY_RE.search(after)
        between = after[: next_disp.start()] if next_disp else after[:220]
        if r"\ln" in between:
            continue
        if not re.search(r"\d", between):
            continue
        # Avoid double-expanding
        if re.search(r"\\ln\s+[0-9.]+\s*\\approx", after[:300]):
            continue

        a = float(mm.group(1))
        if mm.group(2):
            b = float(mm.group(2))
            ln_a, ln_b = math.log(a), math.log(b)
            t = ln_a / ln_b
            inject = "\n\n".join(
                [
                    m.group(0),
                    fmt_block(rf"\ln {fmt_num(a)} \approx {fmt_num(ln_a, 6)}"),
                    fmt_block(rf"\ln({fmt_num(b)}) \approx {fmt_num(ln_b, 6)}"),
                    fmt_block(
                        rf"t \approx \frac{{{fmt_num(ln_a, 6)}}}{{{fmt_num(ln_b, 6)}}}"
                    ),
                    fmt_block(rf"t \approx {fmt_num(t, 2)}"),
                ]
            )
        else:
            c = float(mm.group(3))
            ln_a = math.log(a)
            t = ln_a / c
            inject = "\n\n".join(
                [
                    m.group(0),
                    fmt_block(rf"\ln {fmt_num(a)} \approx {fmt_num(ln_a, 6)}"),
                    fmt_block(
                        rf"t \approx \frac{{{fmt_num(ln_a, 6)}}}{{{fmt_num(c)}}}"
                    ),
                    fmt_block(rf"t \approx {fmt_num(t, 2)}"),
                ]
            )
        return expl[: m.start()] + inject + expl[m.end() :]
    return expl


def expand_we_have_jump(expl: str) -> str:
    """Expand 'We have $a \\ne b$.' into explicit computed-vs-claim displays."""
    m = re.search(r"We have \$([^$]+)\\ne\s*([^$]+)\$\.", expl)
    if not m:
        m = re.search(r"We have \$([^$]+)\$\s*\\ne\s*\$([^$]+)\$\.", expl)
    if not m:
        return expl
    left, right = m.group(1).strip(), m.group(2).strip()
    prior = expl[: m.start()]
    if re.search(
        rf"\$\$\s*{re.escape(left)}\s*\\ne\s*{re.escape(right)}\s*\$\$",
        prior[-240:],
    ):
        return expl
    replacement = (
        f"The computed value is\n\n$${left}$$\n\n"
        f"The claim is\n\n$${right}$$\n\n"
        f"Since ${left} \\ne {right}$, the figures disagree."
    )
    return prior + replacement + expl[m.end() :]


def expand_inline_check_arithmetic(expl: str) -> str:
    def repl(m: re.Match) -> str:
        left = m.group(1).strip()
        right = m.group(2).strip()
        return (
            f"Check:\n\n$${left}$$\n\n$$= {right}$$\n\n"
            f"and half of ${right}$ is "
        )

    return re.sub(
        r"Check:\s*\$([^$]+)=([^$]+)\$\s*,\s*and half of",
        repl,
        expl,
    )


def pull_overview_plugin_steps(expl: str, overview: str) -> str:
    """If a thin letter cites the overview, splice missing numeric overview displays."""
    if not overview:
        return expl
    nd = expl.count("$$") // 2
    cites = bool(
        re.search(
            r"(overview (?:recovered|isolated)|same isolation|recovered that)",
            expl,
            re.I,
        )
    )
    if nd >= 5:
        return expl
    if not cites and nd > 0:
        return expl
    if not cites and nd == 0 and not re.search(r"\d", expl):
        return expl

    ov_blocks = [b.strip() for b in DISPLAY_RE.findall(overview)]
    numeric_blocks = [b for b in ov_blocks if re.search(r"\d", b)]
    if len(numeric_blocks) < 2:
        return expl
    missing = [b for b in numeric_blocks[:8] if b not in expl]
    if not missing:
        return expl

    lines = expl.strip().split("\n")
    insert_at = 1
    for i, line in enumerate(lines):
        if i == 0:
            continue
        if line.strip() == "":
            insert_at = i + 1
            break
    j = insert_at
    while j < len(lines) and lines[j].strip():
        j += 1
    insert_at = j
    splice = "\n\nSubstitute the recovered stem inputs:\n\n" + "\n\n".join(
        fmt_block(b) for b in missing
    )
    return "\n".join(lines[:insert_at] + [splice] + lines[insert_at:])


def expand_ch4_case_branch_prose(expl: str) -> str:
    pattern = re.compile(
        r"If \$([^$]+)\$\s*,\s*then \$([^$]+)\$ and \$([^$]+)\$\.",
        re.M,
    )

    def repl(m: re.Match) -> str:
        a, b, c = m.group(1).strip(), m.group(2).strip(), m.group(3).strip()
        c_parts = split_equals_outside_commands(c)
        blocks = [fmt_block(a), fmt_block(b)]
        if len(c_parts) >= 2:
            blocks.append(fmt_block(f"{c_parts[0]} = {c_parts[1]}"))
            for extra in c_parts[2:]:
                blocks.append(fmt_block(f"= {extra}"))
        else:
            blocks.append(fmt_block(c))
        return "For this divisor:\n\n" + "\n\n".join(blocks) + "\n\n"

    return pattern.sub(repl, expl)


def expand_zero_display_numeric(expl: str) -> str:
    if expl.count("$$") // 2 > 0:
        return expl
    out = expl
    m = re.search(
        r"so \$(\d+)\$ litres of acid sit in \$(\d+)\$ litres, which is \$(\d+)\\?%\$?, not \$(\d+)\\?%\$?",
        out,
    )
    if m:
        a, b, c, d = m.groups()
        inject = (
            f"so ${a}$ litres of acid sit in ${b}$ litres:\n\n"
            f"$$\\frac{{{a}}}{{{b}}}$$\n\n"
            f"$$= {c}\\%$$\n\n"
            f"The claim is ${d}\\%$.\n\n"
            f"$${c}\\% \\ne {d}\\%$$"
        )
        return out[: m.start()] + inject + out[m.end() :]

    m = re.search(
        r"The two numbers that add to \$(\d+)\$ and multiply to \$(\d+)\$ are \$(\d+)\$ and \$(\d+)\$\.",
        out,
    )
    if m:
        s, p, a, b = m.groups()
        block = (
            f"Find numbers $u,v$ with\n\n"
            f"$$u + v = {s}$$\n\n"
            f"$$uv = {p}$$\n\n"
            f"The quadratic $t^{{2}}-{s}t+{p}=0$ has roots\n\n"
            f"$$t={a},\\quad t={b}$$\n\n"
        )
        return out[: m.start()] + block + out[m.end() :]
    return out


def expand_mortgage_pmt_plugin(expl: str) -> str:
    m = re.search(
        r"\$\$\s*(PMT\s*=\s*[0-9,]+\s*\\cdot\s*\\frac\{([0-9.]+)\}\{1-\(1\.([0-9]+)\)\^\{?-?(\d+)\}?\})\s*\$\$"
        r"\s*\n\n\$\$\s*PMT\s*\\approx\s*([0-9,.]+)\s*\$\$",
        expl,
        re.S,
    )
    if not m:
        return expl
    formula = m.group(1)
    i = float(m.group(2))
    frac = m.group(3)
    n = int(m.group(4))
    base = float("1." + frac)
    pm = re.search(r"PMT\s*=\s*([0-9,]+)", formula)
    if not pm:
        return expl
    P = float(pm.group(1).replace(",", ""))
    inv = base ** (-n)
    pmt = P * i / (1 - inv)
    replacement = "\n\n".join(
        [
            fmt_block(formula),
            fmt_block(rf"(1.{frac})^{{-{n}}}"),
            fmt_block(rf"\approx {fmt_num(inv, 8)}"),
            fmt_block(rf"1-(1.{frac})^{{-{n}}} \approx {fmt_num(1 - inv, 8)}"),
            fmt_block(
                rf"\frac{{{m.group(2)}}}{{1-(1.{frac})^{{-{n}}}}} "
                rf"\approx {fmt_num(i / (1 - inv), 8)}"
            ),
            fmt_block(rf"PMT \approx {fmt_num(pmt, 2)}"),
        ]
    )
    return expl[: m.start()] + "\n\n" + replacement + expl[m.end() :]


def ensure_header(expl: str, letter: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    expl = expl.strip()
    if re.match(rf"^\*\*{letter}\.\*\*\s*→\s*{verd}\b", expl):
        return expl
    expl = re.sub(
        r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)",
        f"**{letter}.** → {verd}",
        expl,
        count=1,
    )
    if not re.match(rf"^\*\*{letter}\.\*\*", expl):
        expl = f"**{letter}.** → {verd}\n\n{expl}"
    return expl


def ensure_closer(expl: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    expl = expl.strip()
    if re.search(rf"So the statement is {verd}\.?\s*$", expl):
        return expl
    if re.search(r"So the statement is (True|False)\.?\s*$", expl):
        return re.sub(
            r"So the statement is (True|False)\.?\s*$",
            f"So the statement is {verd}.",
            expl,
        )
    return expl.rstrip(".") + f".\n\nSo the statement is {verd}."


def scrub_filler(expl: str) -> str:
    for cre in FILLER_RES:
        expl = cre.sub("\n\n", expl)
    return expl


def process_explanation(expl: str, letter: str, truth: bool, overview: str) -> str:
    expl = ensure_header(expl, letter, truth)
    expl = scrub_filler(expl)
    expl = fix_broken_sum_splits(expl)
    expl = expand_ch4_case_branch_prose(expl)
    expl = expand_zero_display_numeric(expl)
    expl = expand_inline_check_arithmetic(expl)
    expl = pull_overview_plugin_steps(expl, overview)
    expl = expand_ln_ratio_plugin(expl)
    expl = expand_we_have_jump(expl)
    expl = expand_mortgage_pmt_plugin(expl)
    expl, _ = expand_displays(expl)
    expl, _ = expand_displays(expl)
    expl = ensure_closer(expl, truth)
    expl = re.sub(
        r"(So the statement is (?:True|False)\.\n\n)+So the statement is",
        "So the statement is",
        expl,
    )
    return tidy(expl)


def audit_explanation(expl: str, letter: str, truth: bool) -> list[str]:
    issues = []
    m = HEADER_RE.match(expl.strip())
    if not m:
        issues.append("bad header")
    else:
        if m.group(1).upper() != letter:
            issues.append("letter mismatch")
        want = "True" if truth else "False"
        if m.group(2).capitalize() != want:
            issues.append(f"header {m.group(2)} vs key {want}")
    cm = CLOSER_RE.search(expl)
    if not cm:
        issues.append("missing closer")
    else:
        want = "True" if truth else "False"
        if cm.group(1).capitalize() != want:
            issues.append(f"closer {cm.group(1)} vs key {want}")
    if expl.count("$$") % 2:
        issues.append("unbalanced $$")
    if re.search(r"\\sum_\{k\s*\$\$", expl):
        issues.append("broken sum split")
    return issues


def extract_backtick_string(text: str, pos: int) -> tuple[int, int, str] | None:
    if pos >= len(text) or text[pos] != "`":
        return None
    i = pos + 1
    start = i
    while i < len(text):
        if text[i] == "\\":
            i += 2
            continue
        if text[i] == "`":
            return start, i, text[start:i]
        i += 1
    return None


def extract_backtick_arrays(
    text: str, field: str
) -> list[tuple[int, int, list[tuple[int, int, str]]]]:
    results = []
    for m in re.finditer(rf"{field}:\s*\[", text):
        i = m.end()
        arr_start = m.start()
        strings: list[tuple[int, int, str]] = []
        depth = 1
        while i < len(text) and depth:
            ch = text[i]
            if ch == "`":
                got = extract_backtick_string(text, i)
                if not got:
                    break
                s0, s1, body = got
                strings.append((s0, s1, body))
                i = s1 + 1
            elif ch == "[":
                depth += 1
                i += 1
            elif ch == "]":
                depth -= 1
                if depth == 0:
                    results.append((arr_start, i + 1, strings))
                    break
                i += 1
            else:
                i += 1
    return results


def extract_overview_strings(text: str) -> list[str]:
    out: list[str] = []
    for m in re.finditer(r"solution_overview:\s*`", text):
        got = extract_backtick_string(text, m.end() - 1)
        if got:
            out.append(got[2])
    return out


def unescape_ts_body(s: str) -> str:
    return s.replace("\\\\", "\\")


def escape_ts_body(s: str) -> str:
    return s.replace("\\", "\\\\")


def load_json_tasks(path: Path) -> tuple[list[dict], bool]:
    raw = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(raw, dict) and "tasks" in raw:
        return raw["tasks"], True
    return raw, False


def process_json_batch(path: Path, start: int, count: int) -> dict:
    tasks, wrapped = load_json_tasks(path)
    end = min(len(tasks), start + count)
    changed_letters = 0
    visited = []
    for ti in range(start, end):
        t = tasks[ti]
        cid = t.get("case_id", f"#{ti}")
        overview = t.get("solution_overview") or ""
        key = t.get("answer_key") or []
        expls = t.get("tactical_explanations") or []
        new_expls = []
        for i, e in enumerate(expls):
            letter = LETTERS[i] if i < 5 else chr(ord("A") + i)
            truth = bool(key[i]) if i < len(key) else True
            new = process_explanation(e, letter, truth, overview)
            issues = audit_explanation(new, letter, truth)
            if issues:
                raise RuntimeError(f"{path.name} {cid} {letter}: {issues}")
            if new != e:
                changed_letters += 1
            new_expls.append(new)
        t["tactical_explanations"] = new_expls
        visited.append(cid)
        print(f"  OK {cid}")
    out = {"tasks": tasks} if wrapped else tasks
    path.write_text(
        json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return {
        "visited": visited,
        "changed_letters": changed_letters,
        "first": visited[0] if visited else None,
        "last": visited[-1] if visited else None,
    }


def process_ts_batch(path: Path, start: int, count: int) -> dict:
    text = path.read_text(encoding="utf-8")
    overviews = [unescape_ts_body(o) for o in extract_overview_strings(text)]
    expl_arrays = extract_backtick_arrays(text, "tactical_explanations")
    cids = re.findall(r"case_id:\s*`([^`]+)`", text)

    key_arrays = []
    for m in re.finditer(r"answer_key:\s*\[", text):
        i = m.end()
        depth = 1
        start_i = i
        while i < len(text) and depth:
            if text[i] == "[":
                depth += 1
            elif text[i] == "]":
                depth -= 1
            i += 1
        inner = text[start_i : i - 1]
        vals = [
            tok.lower() == "true" for tok in re.findall(r"true|false", inner, re.I)
        ]
        key_arrays.append(vals)

    n_tasks = min(len(expl_arrays), len(key_arrays), len(cids))
    end = min(n_tasks, start + count)
    pieces: list[tuple[int, int, str]] = []
    visited = []
    changed_letters = 0
    for ti in range(start, end):
        cid = cids[ti]
        overview = overviews[ti] if ti < len(overviews) else ""
        key = key_arrays[ti]
        _a0, _a1, strings = expl_arrays[ti]
        for i, (s0, s1, body_raw) in enumerate(strings):
            if i >= 5:
                break
            letter = LETTERS[i]
            truth = bool(key[i]) if i < len(key) else True
            body = unescape_ts_body(body_raw)
            new = process_explanation(body, letter, truth, overview)
            issues = audit_explanation(new, letter, truth)
            if issues:
                raise RuntimeError(f"{path.name} {cid} {letter}: {issues}")
            new_raw = escape_ts_body(new)
            if new_raw != body_raw:
                changed_letters += 1
                pieces.append((s0, s1, new_raw))
        visited.append(cid)
        print(f"  OK {cid}")

    for s0, s1, new in sorted(pieces, key=lambda x: -x[0]):
        text = text[:s0] + new + text[s1:]
    path.write_text(text, encoding="utf-8")
    return {
        "visited": visited,
        "changed_letters": changed_letters,
        "first": visited[0] if visited else None,
        "last": visited[-1] if visited else None,
    }


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--file", choices=list(FILES), required=True)
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--count", type=int, default=12)
    args = ap.parse_args()
    path = FILES[args.file]
    print(f"Processing {args.file} tasks [{args.start}:{args.start + args.count}]")
    if path.suffix == ".json":
        stats = process_json_batch(path, args.start, args.count)
    else:
        stats = process_ts_batch(path, args.start, args.count)
    print("STATS", json.dumps(stats, indent=2))


if __name__ == "__main__":
    main()
