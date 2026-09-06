#!/usr/bin/env python3
"""Second maximal deepen pass for Ch3 financial + Ch3 exam + Ch4 equations.

Imports the sequential expander, then overlays stronger deepeners for:
- finance ln / e^{rt} / growth×principal / annuity brackets
- equation rearrange jumps (never setup → x=…)
- packed a=b=c prose and product/sum arithmetic

Usage:
  python3 scripts/_deepen_ch3_4_maximal_pass.py --file financial --start 0 --count 15
  python3 scripts/_deepen_ch3_4_maximal_pass.py --file exam --start 0 --count 20
  python3 scripts/_deepen_ch3_4_maximal_pass.py --file ch4 --start 0 --count 15
"""

from __future__ import annotations

import argparse
import importlib.util
import math
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
BASE = ROOT / "scripts/_sequential_expand_ch3_4.py"


def load_base():
    spec = importlib.util.spec_from_file_location("seq_base", BASE)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


B = load_base()
DISPLAY_RE = B.DISPLAY_RE
fmt_block = B.fmt_block
fmt_num = B.fmt_num
split_equals_outside_commands = B.split_equals_outside_commands


def _fmt_signed(n: float) -> str:
    if abs(n - round(n)) < 1e-12:
        return str(int(round(n)))
    return fmt_num(n, 6)


def _next_is_bare_approx_number(after: str) -> bool:
    nxt = DISPLAY_RE.search(after)
    if not nxt:
        return False
    body = nxt.group(1).strip()
    return bool(re.match(r"\\approx\s*-?[0-9]", body)) or bool(
        re.match(r"-?[0-9][0-9.,]*\s*$", body)
    )


def expand_ln_ratio_plugin(expl: str) -> str:
    for m in list(DISPLAY_RE.finditer(expl)):
        body = m.group(1)
        if not re.search(r"\\frac\{\\ln", body):
            continue
        after = expl[m.end() :]
        if re.search(r"\$\$\s*\\ln[^$]*\\approx", after[:220]):
            continue
        if re.search(r"\$\$\s*\\ln\s+[0-9.]+", after[:120]) and re.search(
            r"\$\$\s*\\approx", after[:220]
        ):
            continue

        mm = re.search(
            r"\\frac\{\\ln\s*\(?([0-9.]+)\)?\}\{(?:\\ln\s*\(?([0-9.]+)\)?|([0-9.]+))\}",
            body,
        )
        mm2 = None
        if not mm:
            mm2 = re.search(
                r"\\frac\{\\ln\\bigl?\(?\\frac\{([0-9.,]+)\}\{([0-9.,]+)\}\\bigr?\)?\}"
                r"\{\\ln\s*([0-9.]+)\}",
                body,
            )
        if not mm and not mm2:
            continue

        nxt = DISPLAY_RE.search(after)
        between = after[: nxt.start()] if nxt else after[:220]
        if r"\ln" in between and not _next_is_bare_approx_number(after):
            continue
        if not re.search(r"\d", between) and not _next_is_bare_approx_number(after):
            continue

        end_cut = m.end()
        if nxt and _next_is_bare_approx_number(after):
            end_cut = m.end() + nxt.end()

        if mm:
            a = float(mm.group(1))
            if mm.group(2):
                b = float(mm.group(2))
                ln_a, ln_b = math.log(a), math.log(b)
                t = ln_a / ln_b
                inject = "\n\n".join(
                    [
                        m.group(0),
                        fmt_block(rf"\ln {fmt_num(a)}"),
                        fmt_block(rf"\approx {fmt_num(ln_a, 6)}"),
                        fmt_block(rf"\ln({fmt_num(b)})"),
                        fmt_block(rf"\approx {fmt_num(ln_b, 6)}"),
                        fmt_block(
                            rf"\frac{{{fmt_num(ln_a, 6)}}}{{{fmt_num(ln_b, 6)}}}"
                        ),
                        fmt_block(rf"\approx {fmt_num(t, 2)}"),
                    ]
                )
            else:
                c = float(mm.group(3))
                ln_a = math.log(a)
                t = ln_a / c
                inject = "\n\n".join(
                    [
                        m.group(0),
                        fmt_block(rf"\ln {fmt_num(a)}"),
                        fmt_block(rf"\approx {fmt_num(ln_a, 6)}"),
                        fmt_block(
                            rf"\frac{{{fmt_num(ln_a, 6)}}}{{{fmt_num(c)}}}"
                        ),
                        fmt_block(rf"\approx {fmt_num(t, 2)}"),
                    ]
                )
        else:
            num = float(mm2.group(1).replace(",", ""))
            den = float(mm2.group(2).replace(",", ""))
            b = float(mm2.group(3))
            ratio = num / den
            ln_r, ln_b = math.log(ratio), math.log(b)
            t = ln_r / ln_b
            inject = "\n\n".join(
                [
                    m.group(0),
                    fmt_block(
                        rf"\frac{{{fmt_num(num)}}}{{{fmt_num(den)}}}"
                    ),
                    fmt_block(rf"= {fmt_num(ratio, 6)}"),
                    fmt_block(rf"\ln({fmt_num(ratio, 6)})"),
                    fmt_block(rf"\approx {fmt_num(ln_r, 6)}"),
                    fmt_block(rf"\ln({fmt_num(b)})"),
                    fmt_block(rf"\approx {fmt_num(ln_b, 6)}"),
                    fmt_block(
                        rf"\frac{{{fmt_num(ln_r, 6)}}}{{{fmt_num(ln_b, 6)}}}"
                    ),
                    fmt_block(rf"\approx {fmt_num(t, 2)}"),
                ]
            )
        return expl[: m.start()] + inject + expl[end_cut:]
    return expl


def _linear_middle_steps(body: str, body2: str) -> str | None:
    a = re.sub(r"\s+", " ", body).strip()
    b = re.sub(r"\s+", " ", body2).strip()

    m1 = re.match(r"^x\s*([\+\-])\s*([0-9.]+)\s*=\s*(-?[0-9.]+)$", a)
    m2 = re.match(r"^x\s*=\s*(-?[0-9.]+)$", b)
    if m1 and m2:
        op, k_s, n_s = m1.group(1), m1.group(2), m1.group(3)
        if op == "+":
            return fmt_block(rf"x + {k_s} - {k_s} = {n_s} - {k_s}")
        return fmt_block(rf"x - {k_s} + {k_s} = {n_s} + {k_s}")

    m1 = re.match(r"^(-?[0-9.]+)\s*x\s*=\s*(-?[0-9.]+)$", a)
    m2 = re.match(r"^x\s*=\s*(-?[0-9.]+)$", b)
    if m1 and m2:
        return fmt_block(rf"x = \frac{{{m1.group(2)}}}{{{m1.group(1)}}}")

    m1 = re.match(r"^\\frac\{x\}\{([0-9.]+)\}\s*=\s*(-?[0-9.]+)$", a)
    m2 = re.match(r"^x\s*=\s*(-?[0-9.]+)$", b)
    if m1 and m2:
        c_s, n_s = m1.group(1), m1.group(2)
        return fmt_block(rf"x = {n_s} \cdot {c_s}")

    m1 = re.match(
        r"^\\frac\{x\s*([\+\-])\s*([0-9.]+)\}\{([0-9.]+)\}\s*=\s*(-?[0-9.]+)$", a
    )
    m2 = re.match(r"^x\s*([\+\-])\s*([0-9.]+)\s*=\s*(-?[0-9.]+)$", b)
    if m1 and m2:
        op, k_s, c_s, n_s = m1.groups()
        return fmt_block(rf"x {op} {k_s} = {n_s} \cdot {c_s}")

    m1 = re.match(r"^(-?[0-9.]*)\s*x\s*([\+\-])\s*([0-9.]+)\s*=\s*(-?[0-9.]+)$", a)
    m2 = re.match(r"^(-?[0-9.]*)\s*x\s*=\s*(-?[0-9.]+)$", b)
    if m1 and m2:
        coef_s, op, k_s, n_s = m1.groups()
        coef_s = coef_s or "1"
        if coef_s in {"", "+", "-"}:
            coef_s = "-1" if coef_s == "-" else "1"
        if op == "+":
            return fmt_block(rf"{coef_s}x = {n_s} - {k_s}")
        return fmt_block(rf"{coef_s}x = {n_s} + {k_s}")

    m1 = re.match(r"^\\frac\{([0-9.]+)\}\{([0-9.]+)\}x\s*=\s*(-?[0-9.]+)$", a)
    m2 = re.match(r"^x\s*=\s*(-?[0-9.]+)$", b)
    if m1 and m2:
        p, q, n = m1.groups()
        return fmt_block(rf"x = {n} \cdot \frac{{{q}}}{{{p}}}")

    m1 = re.match(
        r"^\\frac\{([0-9.]+)\}\{([0-9.]+)\}x\s*([\+\-])\s*([0-9.]+)\s*=\s*(-?[0-9.]+)$",
        a,
    )
    m2 = re.match(r"^\\frac\{([0-9.]+)\}\{([0-9.]+)\}x\s*=\s*(-?[0-9.]+)$", b)
    if m1 and m2:
        p, q, op, k, n = m1.groups()
        if op == "+":
            return fmt_block(rf"\frac{{{p}}}{{{q}}}x = {n} - {k}")
        return fmt_block(rf"\frac{{{p}}}{{{q}}}x = {n} + {k}")

    m1 = re.match(
        r"^x\s*=\s*\\frac\{([0-9.]+)\s*\\cdot\s*([0-9.]+)\}\{([0-9.]+)\}$", a
    )
    m2 = re.match(r"^x\s*=\s*\\frac\{([0-9.]+)\}\{([0-9.]+)\}$", b)
    if m1 and m2:
        a1, a2, _den = m1.groups()
        return fmt_block(rf"{a1} \cdot {a2} = {_fmt_signed(float(a1) * float(a2))}")

    m1 = re.match(
        r"^x\s*=\s*\\frac\{([0-9.]+)\s*\\cdot\s*\(([0-9.]+)\s*-\s*([0-9.]+)\)\}"
        r"\{([0-9.]+)\s*-\s*([0-9.]+)\}$",
        a,
    )
    if m1 and re.match(r"^x\s*=\s*\\frac", b):
        p, u, v, r, s = m1.groups()
        return "\n\n".join(
            [
                fmt_block(rf"{u} - {v} = {_fmt_signed(float(u) - float(v))}"),
                fmt_block(rf"{r} - {s} = {_fmt_signed(float(r) - float(s))}"),
                fmt_block(
                    rf"{p} \cdot {_fmt_signed(float(u) - float(v))} = "
                    rf"{_fmt_signed(float(p) * (float(u) - float(v)))}"
                ),
            ]
        )

    m1 = re.match(r"^([0-9.]+)\s*\\cdot\s*([0-9.]+)\s*\+\s*([0-9.]+)$", a)
    m2 = re.match(r"^=\s*([0-9.]+)$", b)
    if m1 and m2:
        u, v, w = m1.groups()
        prod = float(u) * float(v)
        return "\n\n".join(
            [
                fmt_block(rf"{u} \cdot {v}"),
                fmt_block(rf"= {_fmt_signed(prod)}"),
                fmt_block(rf"{_fmt_signed(prod)} + {w}"),
            ]
        )

    m1 = re.match(r"^([0-9.]+)\^\{?2\}?\s*\+\s*([0-9.]+)\^\{?2\}?$", a)
    m2 = re.match(r"^=\s*([0-9.]+)\s*\+\s*([0-9.]+)$", b)
    if m1 and m2:
        u, v = m1.groups()
        return "\n\n".join(
            [
                fmt_block(rf"{u}^{{2}} = {_fmt_signed(float(u) ** 2)}"),
                fmt_block(rf"{v}^{{2}} = {_fmt_signed(float(v) ** 2)}"),
            ]
        )

    return None


def expand_linear_adjacent_jumps(expl: str) -> str:
    parts: list[str] = []
    last = 0
    matches = list(DISPLAY_RE.finditer(expl))
    i = 0
    changed = False
    while i < len(matches):
        m = matches[i]
        parts.append(expl[last : m.start()])
        body = m.group(1).strip()
        if i + 1 < len(matches):
            m2 = matches[i + 1]
            gap = expl[m.end() : m2.start()]
            body2 = m2.group(1).strip()
            gap_plain = re.sub(r"\$[^$]*\$", "", gap)
            gap_plain = re.sub(r"\s+", " ", gap_plain).strip()
            allow_gap = gap.strip() == "" or (
                len(gap_plain) <= 80
                and not re.search(r"So the statement", gap_plain, re.I)
            )
            if allow_gap:
                inserted = _linear_middle_steps(body, body2)
                if inserted:
                    cue = gap.strip()
                    parts.append(fmt_block(body))
                    parts.append("\n\n" + cue + "\n\n" if cue else "\n\n")
                    parts.append(inserted)
                    parts.append("\n\n")
                    parts.append(fmt_block(body2))
                    last = m2.end()
                    i += 2
                    changed = True
                    continue
        parts.append(m.group(0))
        last = m.end()
        i += 1
    parts.append(expl[last:])
    return "".join(parts) if changed else expl


def expand_prose_abc_chains(expl: str) -> str:
    def repl(m: re.Match) -> str:
        inner = m.group(1)
        if inner.count("=") < 2:
            return m.group(0)
        if any(
            tok in inner
            for tok in (r"\neq", r"\ne", r"\leq", r"\geq", r"\approx")
        ):
            return m.group(0)
        if not re.search(r"\d", inner):
            return m.group(0)
        parts = [p.strip() for p in split_equals_outside_commands(inner) if p.strip()]
        if len(parts) < 3:
            return m.group(0)
        blocks = [fmt_block(f"{parts[0]} = {parts[1]}")]
        for p in parts[2:]:
            blocks.append(fmt_block(f"= {p}"))
        return "\n\n" + "\n\n".join(blocks) + "\n\n"

    return re.sub(r"(?<!\$)\$([^$\n]+=[^$\n]+=[^$\n]+)\$", repl, expl)


def expand_exp_factor_plugin(expl: str) -> str:
    pat = re.compile(
        r"\$\$\s*((?:\\mathrm\{PDV\}[_0-9A-Za-z]*|[A-Za-z]_\{[^}]+\}|[A-Za-z]\([^)]+\)|"
        r"[A-Za-z_][A-Za-z0-9_]*)\s*=\s*"
        r"([0-9][0-9,]*(?:\.[0-9]+)?)\s*(?:\\times\s*)?e\^\{(-?[0-9.]+)\})\s*\$\$"
        r"(?:\s*\n\n\$\$\s*(?:=|\\approx)\s*([0-9,.]+)\s*\$\$)?",
        re.S,
    )
    m = pat.search(expl)
    if not m:
        return expl
    after = expl[m.end() :]
    nxt = DISPLAY_RE.search(after)
    if nxt and re.match(r"e\^\{", nxt.group(1).strip()):
        return expl
    full_inner = m.group(1).strip()
    K = m.group(2)
    exp = m.group(3)
    approx = m.group(4)
    e_val = math.exp(float(exp))
    Kf = float(K.replace(",", ""))
    prod = Kf * e_val
    approx_s = approx if approx else fmt_num(prod, 2)
    blocks = [
        fmt_block(full_inner),
        fmt_block(rf"e^{{{exp}}}"),
        fmt_block(rf"\approx {fmt_num(e_val, 6)}"),
        fmt_block(rf"{K} \times {fmt_num(e_val, 6)}"),
        fmt_block(rf"\approx {approx_s}"),
    ]
    return expl[: m.start()] + "\n\n".join(blocks) + expl[m.end() :]


def expand_growth_factor_times_principal(expl: str) -> str:
    matches = list(DISPLAY_RE.finditer(expl))
    for m in matches:
        body = m.group(1).strip()
        mm = re.match(
            r"(.+?)\s*=\s*"
            r"([0-9][0-9,]*(?:\.[0-9]+)?)\s*\\times\s*\((1\.[0-9]+)\)\^\{?(-?\d+)\}?$",
            re.sub(r"\s+", " ", body),
        )
        if not mm:
            continue
        window = expl[m.end() : m.end() + 500]
        if re.search(rf"{re.escape(mm.group(2))}\s*\\times\s*[0-9]", window):
            continue
        local = list(DISPLAY_RE.finditer(expl[m.end() :]))
        factor_disp = None
        factor = None
        for j, lm in enumerate(local[:6]):
            b = lm.group(1).strip()
            if factor_disp is None and re.match(r"\\approx\s*[0-9]", b):
                if j >= 1 and (
                    "^" in local[j - 1].group(1) or "e^{" in local[j - 1].group(1)
                ):
                    factor_disp = lm
                    factor = re.search(r"([0-9][0-9.,]*)", b).group(1)
                    break
        if factor_disp is None or factor is None:
            continue
        insert_at = m.end() + factor_disp.end()
        K = mm.group(2)
        inject = "\n\n" + fmt_block(rf"{K} \times {factor}")
        if f"{K} \\times {factor}" in expl[insert_at : insert_at + 120]:
            continue
        return expl[:insert_at] + inject + expl[insert_at:]
    return expl


def expand_annuity_bracket_jump(expl: str) -> str:
    pat = re.compile(
        r"\$\$\s*([^$]*\\frac\{([0-9][0-9,]*(?:\.[0-9]+)?)\}\{([0-9.]+)\}"
        r"\s*\\left\[?\s*1\s*-\s*\\frac\{1\}\{\((1\.[0-9]+)\)\^\{?(\d+)\}?\}"
        r"\s*\\right\]?)\s*\$\$\s*\n\n\$\$\s*=\s*([0-9][0-9.,]*)\s*\$\$",
        re.S,
    )

    def repl(m: re.Match) -> str:
        full, pmt, i_s, base, n_s, result = m.groups()
        n = int(n_s)
        i = float(i_s)
        inv = (float(base)) ** (-n)
        bracket = 1 - inv
        pre = float(pmt.replace(",", "")) / i
        return "\n\n".join(
            [
                fmt_block(full),
                fmt_block(rf"({base})^{{-{n}}}"),
                fmt_block(rf"\approx {fmt_num(inv, 8)}"),
                fmt_block(rf"1 - ({base})^{{-{n}}}"),
                fmt_block(rf"\approx {fmt_num(bracket, 8)}"),
                fmt_block(rf"\frac{{{pmt}}}{{{i_s}}}"),
                fmt_block(rf"= {fmt_num(pre, 4)}"),
                fmt_block(rf"{fmt_num(pre, 4)} \times {fmt_num(bracket, 8)}"),
                fmt_block(rf"= {result}"),
            ]
        )

    return pat.sub(repl, expl, count=1)


def expand_rate_time_products_in_exp(expl: str) -> str:
    pattern = re.compile(
        r"\$\$\s*([^$]*e\^\{([0-9.]+)\s*\\times\s*([0-9.]+)\s*\+\s*([0-9.]+)\s*\\times\s*([0-9.]+)\})([^$]*)\s*\$\$",
        re.S,
    )

    def repl(m: re.Match) -> str:
        full, a, t1, b, t2, rest = (
            m.group(1),
            m.group(2),
            m.group(3),
            m.group(4),
            m.group(5),
            m.group(6),
        )
        p1 = float(a) * float(t1)
        p2 = float(b) * float(t2)
        s = p1 + p2
        return "\n\n".join(
            [
                fmt_block(full + rest),
                fmt_block(rf"{a} \times {t1} = {_fmt_signed(p1)}"),
                fmt_block(rf"{b} \times {t2} = {_fmt_signed(p2)}"),
                fmt_block(rf"{_fmt_signed(p1)} + {_fmt_signed(p2)} = {_fmt_signed(s)}"),
            ]
        )

    return pattern.sub(repl, expl)


def expand_half_ab_product(expl: str) -> str:
    pattern = re.compile(
        r"\$\$\s*(A\s*=\s*\\(?:frac|tfrac)\{1\}\{2\}\\cdot\s*([0-9.]+)\\cdot\s*([0-9.]+))\s*\$\$"
        r"\s*\n\n\$\$\s*A\s*=\s*\\frac\{([0-9.]+)\}\{2\}\s*\$\$",
        re.S,
    )

    def repl(m: re.Match) -> str:
        a, b = m.group(2), m.group(3)
        prod = float(a) * float(b)
        return "\n\n".join(
            [
                fmt_block(m.group(1)),
                fmt_block(rf"{a} \cdot {b}"),
                fmt_block(rf"= {_fmt_signed(prod)}"),
                fmt_block(rf"A = \frac{{{_fmt_signed(prod)}}}{{2}}"),
            ]
        )

    return pattern.sub(repl, expl)


def process_explanation(expl: str, letter: str, truth: bool, overview: str) -> str:
    expl = B.ensure_header(expl, letter, truth)
    expl = B.scrub_filler(expl)
    expl = B.fix_broken_sum_splits(expl)
    expl = B.expand_ch4_case_branch_prose(expl)
    expl = B.expand_zero_display_numeric(expl)
    expl = B.expand_inline_check_arithmetic(expl)
    expl = expand_prose_abc_chains(expl)
    expl = B.pull_overview_plugin_steps(expl, overview)
    for _ in range(5):
        nxt = expand_ln_ratio_plugin(expl)
        if nxt == expl:
            break
        expl = nxt
    for _ in range(4):
        nxt = expand_exp_factor_plugin(expl)
        if nxt == expl:
            break
        expl = nxt
    for _ in range(3):
        nxt = expand_growth_factor_times_principal(expl)
        if nxt == expl:
            break
        expl = nxt
    expl = expand_annuity_bracket_jump(expl)
    expl = expand_rate_time_products_in_exp(expl)
    expl = expand_half_ab_product(expl)
    expl = B.expand_we_have_jump(expl)
    expl = B.expand_mortgage_pmt_plugin(expl)
    for _ in range(4):
        nxt = expand_linear_adjacent_jumps(expl)
        if nxt == expl:
            break
        expl = nxt
    expl, _ = B.expand_displays(expl)
    expl, _ = B.expand_displays(expl)
    expl = B.ensure_closer(expl, truth)
    expl = re.sub(
        r"(So the statement is (?:True|False)\.\n\n)+So the statement is",
        "So the statement is",
        expl,
    )
    return B.tidy(expl)


# Monkeypatch base processors so batch writers use deepeners
B.process_explanation = process_explanation
B.expand_ln_ratio_plugin = expand_ln_ratio_plugin


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--file", choices=list(B.FILES), required=True)
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--count", type=int, default=12)
    args = ap.parse_args()
    path = B.FILES[args.file]
    print(f"Deepen-pass {args.file} tasks [{args.start}:{args.start + args.count}]")
    if path.suffix == ".json":
        stats = B.process_json_batch(path, args.start, args.count)
    else:
        stats = B.process_ts_batch(path, args.start, args.count)
    print("STATS", stats)


if __name__ == "__main__":
    main()
