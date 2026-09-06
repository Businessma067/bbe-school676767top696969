#!/usr/bin/env python3
"""Expand every Ch3–5 tactical_explanation into maximal stepped algebra.

Keep rule formulas. Split packed plug-in arithmetic into separate $$ blocks.
Do not touch statements or answer_key.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")

JSON_FILES = [
    ROOT / "src/data/math-ch3-exam.json",
    ROOT / "src/data/math-ch4-cases.json",
    ROOT / "src/data/math-ch5-exam.json",
]
TS_FILES = [
    ROOT / "src/data/math-ch11-financial.ts",
    ROOT / "src/data/math-ch5-linear-equations.ts",
]

DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)

REL_CMD = (
    r"\\(?:neq|leq|geq|approx|equiv|iff|Rightarrow|Leftarrow|"
    r"Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)"
)


def split_equals_outside_commands(s: str) -> list[str]:
    protected: list[str] = []

    def protect(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"«P{len(protected) - 1}»"

    tmp = re.sub(REL_CMD, protect, s)
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


def fmt_block(inner: str) -> str:
    inner = inner.strip()
    if "\n" in inner or len(inner) > 48:
        return f"$$\n{inner}\n$$"
    return f"$${inner}$$"


def expand_chain_body(body: str) -> str | None:
    s = body.strip()
    if not s:
        return None
    if r"\qquad" in s or r"\quad" in s:
        return None
    if r"\begin{" in s:
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
            and not has_arithmetic_op(approx_parts[1])
            and "=" not in approx_parts[1]
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

    if r"\Rightarrow" in s and s.count(r"\Rightarrow") >= 1:
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


def overview_steps_for_var(overview: str, var_lhs: str) -> list[str] | None:
    blocks = [b.strip() for b in DISPLAY_RE.findall(overview)]
    if not blocks:
        return None
    var = var_lhs.strip()
    var_flat = re.sub(r"\\mathrm\{([^{}]*)\}", r"\1", var)
    var_flat = re.sub(r"\s+", "", var_flat)

    def lhs_of(b: str) -> str | None:
        flat = re.sub(r"\s+", " ", b).strip()
        if flat.startswith("="):
            return "="
        if r"\approx" in flat:
            left = split_approx(flat)[0].strip()
        else:
            parts = split_equals_outside_commands(flat)
            left = parts[0].strip() if parts else ""
        left = re.sub(r"\\mathrm\{([^{}]*)\}", r"\1", left)
        left = re.sub(r"\s+", "", left)
        return left

    out: list[str] = []
    started = False
    for b in blocks:
        lhs = lhs_of(b)
        if lhs == var_flat or (started and lhs == "="):
            started = True
            out.append(b)
            continue
        if started:
            if lhs == var_flat:
                out.append(b)
                continue
            break
    return out if len(out) >= 1 else None


GIVES_RE = re.compile(
    r"(Substituting the stem inputs recovered in the overview gives|"
    r"Substituting the recovered (?:values|inputs|figures)[^\n]*gives|"
    r"Plug(?:ging)? in the recovered[^\n]*gives|"
    r"which gives)\s*\n\n"
    r"\$\$(.+?)\$\$",
    re.S | re.I,
)


def expand_gives_with_overview(expl: str, overview: str) -> tuple[str, int]:
    if not overview:
        return expl, 0
    n = 0

    def var_from_body(body: str) -> str | None:
        body = body.strip()
        parts = split_equals_outside_commands(body)
        if len(parts) >= 2:
            return parts[0].strip()
        if r"\approx" in body:
            left = split_approx(body)[0].strip()
            left = split_equals_outside_commands(left)[0].strip()
            return left or None
        return None

    def steps_near_value(overview: str, value_hint: str) -> list[str] | None:
        hint = re.sub(r"[\s,]", "", value_hint)
        blocks = [b.strip() for b in DISPLAY_RE.findall(overview)]
        hit = None
        for i, b in enumerate(blocks):
            flat = re.sub(r"[\s,]", "", b)
            if hint and hint in flat:
                hit = i
                break
        if hit is None:
            return None
        start = max(0, hit - 4)
        # Prefer walking back while LHS matches hit's LHS
        hit_lhs = None
        flat_hit = re.sub(r"\s+", " ", blocks[hit]).strip()
        if r"\approx" in flat_hit:
            hit_lhs = split_approx(flat_hit)[0].strip()
        else:
            ps = split_equals_outside_commands(flat_hit)
            hit_lhs = ps[0].strip() if ps else None
        if hit_lhs:
            start = hit
            while start > 0:
                prev = blocks[start - 1]
                flat = re.sub(r"\s+", " ", prev).strip()
                if flat.startswith("="):
                    start -= 1
                    continue
                left = (
                    split_approx(flat)[0].strip()
                    if r"\approx" in flat
                    else split_equals_outside_commands(flat)[0].strip()
                )
                if re.sub(r"\s+", "", left) == re.sub(r"\s+", "", hit_lhs):
                    start -= 1
                    continue
                break
        return blocks[start : hit + 1]

    def repl(m: re.Match) -> str:
        nonlocal n
        body = m.group(2).strip()
        var = var_from_body(body)
        steps = overview_steps_for_var(overview, var) if var else None
        if not steps or (steps and len(steps) < 2):
            rhs = body
            if r"\approx" in body:
                rhs = split_approx(body)[-1]
            elif "=" in body:
                rhs = split_equals_outside_commands(body)[-1]
            num = re.search(r"\d[\d,]*\.?\d*", rhs.replace("\\%", "%"))
            if num:
                near = steps_near_value(overview, num.group(0))
                if near and len(near) >= len(steps or []):
                    steps = near
        if not steps:
            expanded = expand_chain_body(body)
            if expanded:
                n += 1
                return "Substitute the recovered stem inputs:\n\n" + expanded
            return m.group(0)
        blocks = []
        for s in steps:
            if not re.search(r"\d", s) and (
                r"\frac{r}" in s or r"e^{rt}" in s or r"(1+i)^{nt}" in s
            ):
                continue
            blocks.append(fmt_block(s))
        if not blocks:
            return m.group(0)
        n += 1
        return "Substitute the recovered stem inputs:\n\n" + "\n\n".join(blocks)

    return GIVES_RE.sub(repl, expl), n


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


def balance_dollars(s: str) -> bool:
    return s.count("$$") % 2 == 0


def process_explanation(
    expl: str, letter: str, truth: bool, overview: str
) -> tuple[str, dict]:
    stats = {"displays": 0, "gives": 0}
    expl = ensure_header(expl, letter, truth)
    expl, g = expand_gives_with_overview(expl, overview)
    stats["gives"] += g
    expl, d = expand_displays(expl)
    stats["displays"] += d
    expl = re.sub(r"\n{3,}", "\n\n", expl).strip()
    expl = ensure_closer(expl, truth)
    expl = re.sub(
        r"(So the statement is (?:True|False)\.\n\n)+So the statement is",
        "So the statement is",
        expl,
    )
    return expl, stats


def process_json(path: Path) -> dict:
    raw = json.loads(path.read_text(encoding="utf-8"))
    is_wrapped = isinstance(raw, dict) and "tasks" in raw
    tasks = raw["tasks"] if is_wrapped else raw
    stats = {"displays": 0, "gives": 0, "changed": 0}
    for t in tasks:
        overview = t.get("solution_overview") or ""
        key = t.get("answer_key") or []
        expls = t.get("tactical_explanations") or []
        new_expls = []
        for i, e in enumerate(expls):
            letter = "ABCDE"[i]
            truth = bool(key[i]) if i < len(key) else True
            new, st = process_explanation(e, letter, truth, overview)
            stats["displays"] += st["displays"]
            stats["gives"] += st["gives"]
            if new != e:
                stats["changed"] += 1
            if not balance_dollars(new):
                raise RuntimeError(f"{path.name} {t.get('id')} {letter}: unbalanced $$")
            # header/key check
            m = re.match(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)", new)
            if not m or m.group(1) != letter or (m.group(2) == "True") != truth:
                raise RuntimeError(
                    f"{path.name} {t.get('id')} {letter}: header/key mismatch"
                )
            new_expls.append(new)
        t["tactical_explanations"] = new_expls
    out = {"tasks": tasks} if is_wrapped else tasks
    path.write_text(
        json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return stats


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


def process_ts(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    stats = {"displays": 0, "gives": 0, "changed": 0}

    overviews = [unescape_ts_body(o) for o in extract_overview_strings(text)]
    expl_arrays = extract_backtick_arrays(text, "tactical_explanations")

    key_arrays = []
    for m in re.finditer(r"answer_key:\s*\[", text):
        i = m.end()
        depth = 1
        start = i
        while i < len(text) and depth:
            if text[i] == "[":
                depth += 1
            elif text[i] == "]":
                depth -= 1
            i += 1
        inner = text[start : i - 1]
        vals = [tok.lower() == "true" for tok in re.findall(r"true|false", inner, re.I)]
        key_arrays.append(vals)

    if not (len(overviews) == len(expl_arrays) == len(key_arrays)):
        print(
            f"WARN {path.name}: overview={len(overviews)} expl={len(expl_arrays)} "
            f"key={len(key_arrays)}"
        )

    pieces: list[tuple[int, int, str]] = []
    n_tasks = min(len(expl_arrays), len(key_arrays), max(len(overviews), len(expl_arrays)))
    for ti in range(n_tasks):
        _a0, _a1, strings = expl_arrays[ti]
        overview = overviews[ti] if ti < len(overviews) else ""
        key = key_arrays[ti] if ti < len(key_arrays) else [True] * 5
        for i, (s0, s1, body_raw) in enumerate(strings):
            if i >= 5:
                break
            letter = "ABCDE"[i]
            truth = bool(key[i]) if i < len(key) else True
            body = unescape_ts_body(body_raw)
            if not re.match(r"\*\*[A-E]\.\*\*", body.strip()):
                continue
            new, st = process_explanation(body, letter, truth, overview)
            new_raw = escape_ts_body(new)
            stats["displays"] += st["displays"]
            stats["gives"] += st["gives"]
            if new_raw != body_raw:
                stats["changed"] += 1
                pieces.append((s0, s1, new_raw))
            if not balance_dollars(new):
                raise RuntimeError(f"{path.name} task#{ti} {letter}: unbalanced $$")
            m = re.match(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)", new)
            if not m or m.group(1) != letter or (m.group(2) == "True") != truth:
                raise RuntimeError(f"{path.name} task#{ti} {letter}: header/key mismatch")

    for s0, s1, new in sorted(pieces, key=lambda x: -x[0]):
        text = text[:s0] + new + text[s1:]

    path.write_text(text, encoding="utf-8")
    return stats


def main() -> None:
    assert expand_chain_body(r"2 \cdot 5 + 6 = 16") is not None
    assert expand_chain_body(r"2x + 6 = 14") is None
    assert (
        expand_chain_body(r"S(6) = 6,000 \times (1.02)^{24} \approx 9,650.61")
        is not None
    )
    assert (
        expand_chain_body(
            r"\frac{9,650.61-6,000}{6,000} \approx 0.6084 = 60.84\%"
        )
        is not None
    )
    print("unit checks OK")

    grand = {"displays": 0, "gives": 0, "changed": 0}
    for path in JSON_FILES:
        st = process_json(path)
        print(f"{path.name}: {st}")
        for k in grand:
            grand[k] += st[k]
    for path in TS_FILES:
        st = process_ts(path)
        print(f"{path.name}: {st}")
        for k in grand:
            grand[k] += st[k]
    print("TOTAL", grand)


if __name__ == "__main__":
    main()
