#!/usr/bin/env python3
"""Rewrite unlocked Ch6 numeric letters with maximal stepped $$ formulas.

Scope: first 218 cases in economics-cases-ch6-subtopics.json.
Only letters whose statement/context requires computing a number
(ratio, %, growth, totals). Non-numeric letters are left unchanged.

Format (per brief):
  TRUE — / FALSE — identity in words
  $$ one algebraic/arithmetic move per display $$
  Compare to the claim’s hurdle
  So the statement is True. / So the statement is False.
"""

from __future__ import annotations

import json
import math
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import _econ_ch6_thicken_thin as thick  # noqa: E402
from _econ_ch6_deepen_lib import (  # noqa: E402
    PATH,
    LETTERS,
    enrich,
    fmt,
    getv,
    growth,
    parse_dep,
    parse_tables,
    pct,
    subject_keys,
    try_numeric,
)

UNLOCK = 218

# ── detection ───────────────────────────────────────────────────────────────

_CONCEPTUAL = re.compile(
    r"(?:"
    r"^a high equity ratio indicates|"
    r"^return on equity and return on capital employed are most meaningful|"
    r"^when one shareholder sells shares|"
    r"^low inventory turnover always proves|"
    r"^land is depreciated|"
    r"^land is not subject to depreciation|"
    r"^under the straight-line method, the depreciable cost is spread evenly|"
    r"^depreciation recognises that|"
    r"^depreciation each year requires|"
    r"^unlike wages or energy costs, depreciation|"
    r"^after depreciation, the carrying value|"
    r"^cost of sales is deducted from revenue|"
    r"trade payables of €.+correctly classified|"
    r"^market capitalisation is the total market value|"
    r"^when reconciling profit to cash|"
    r"^for this .+, the dividends paid line of|"
    r"^a negative cash flow from investing activities is always|"
    r"^dividends paid rose from year 1 to year 2\.?$|"
    r"^earnings per share is|"
    r"^working capital is defined|"
    r"^when a .+ repays part of a long-term bank loan|"
    r"^when a .+ collects trade receivables|"
    r"^when a .+ buys new machinery"
    r")",
    re.I,
)

_CALC = re.compile(
    r"(?:"
    r"grew by more than \d|"
    r"fell by more than \d|"
    r"grew by exactly \d|"
    r"increased by exactly €|"
    r"the current ratio (exceeds|is below|is exactly)|"
    r"the current ratio in year|"
    r"current liabilities are covered by current assets|"
    r"after excluding inventory, the remaining current assets|"
    r"the acid-test ratio exceeds|"
    r"the (equity|debt) ratio (is below|exceeds|improved|fell)|"
    r"working capital of €|"
    r"working capital .+doubled|"
    r"working capital turned positive|"
    r"non-current liabilities amount to|"
    r"the combined total of equity and non-current liabilities|"
    r"make up (more|less) than \d|"
    r"the share of total assets held in non-current|"
    r"retained earnings grew faster than total equity|"
    r"the closing share price rose by more than|"
    r"market capitalisation at the last month exceeds|"
    r"market capitalisation rose by more than|"
    r"earnings per share exceeds €|"
    r"highest closing price is more than|"
    r"total shares traded over six months exceed|"
    r"peak monthly share turnover exceeds|"
    r"share turnover peaked in the same month|"
    r"closing price rose in more than half|"
    r"last closing price is below the first|"
    r"shares outstanding equal|"
    r"operating result is below €|"
    r"asset turnover|"
    r"inventory turnover (is |of about)|"
    r"receivables turnover|"
    r"trade receivables turnover|"
    r"more than \d+ days|"
    r"gross (profit )?margin|"
    r"operating (?:profit )?margin|"
    r"net (?:profit )?margin|"
    r"return on equity exceeds|"
    r"return on capital employed|"
    r"the operating result covers finance costs|"
    r"annual depreciation|"
    r"depreciation charge|"
    r"after three years|"
    r"effective tax rate|"
    r"proceeds from .+borrowing were|"
    r"cash flow from financing activities was (higher|lower)|"
    r"cash flow from operating activities grew|"
    r"positive on this balance sheet|"
    r"cost of sales amounts to|"
    r"revenue exceeds|"
    r"total assets grew during|"
    r"trade receivables grew|"
    r"inventory grew by more than|"
    r"average inventory make|"
    r"finance costs .+ (more|less) than|"
    r"interest cover|"
    r"ROCE|"
    r"ROE "
    r")",
    re.I,
)


def needs_numeric(stmt: str) -> bool:
    if _CONCEPTUAL.search(stmt.strip()):
        return False
    return bool(_CALC.search(stmt))


# ── wrap / helpers matching the brief ───────────────────────────────────────

def wrap(truth: bool, lead: str, body: str) -> str:
    h = "TRUE — " if truth else "FALSE — "
    c = "So the statement is True." if truth else "So the statement is False."
    return f"{h}{lead.strip()}\n\n{body.strip()}\n\n{c}"


def interp(truth: bool, detail: str) -> str:
    if truth:
        return f"Compare to the claim’s hurdle: {detail} So the arithmetic supports the claim."
    return f"Compare to the claim’s hurdle: {detail} So the arithmetic misses the claim."


def dd(*lines: str) -> str:
    """One display math block; each call is one step."""
    inner = "\n".join(lines)
    return f"$$\n{inner}\n$$"


def stepped_growth(subj: str, a: float, b: float, th: float, truth: bool, direction: str = "up") -> str:
    g = growth(a, b)
    g_pct = g * 100
    diff = b - a
    lead = f"Percentage growth for {subj} is (Year 2 − Year 1) ÷ Year 1."
    if direction == "up":
        ok = g_pct > th
        body = "\n\n".join(
            [
                "Name the growth identity in words.",
                dd(r"\text{growth} = \frac{Y_2 - Y_1}{Y_1}"),
                "Plug in the table figures — one step per display:",
                dd(rf"Y_1 = {fmt(a)}, \quad Y_2 = {fmt(b)}"),
                dd(rf"Y_2 - Y_1 = {fmt(b)} - {fmt(a)}"),
                dd(rf"= {fmt(diff)}"),
                dd(rf"\frac{{{fmt(diff)}}}{{{fmt(a)}}}"),
                dd(rf"\approx {g:.4f}"),
                dd(rf"\approx {pct(g)}\%"),
                f"The claim wants growth of more than {th:g}%.",
                dd(rf"{pct(g)}\% {'>' if ok else r'\le '} {th:g}\%"),
                interp(
                    truth,
                    f"actual growth is {pct(g)}%, which is "
                    f"{'more than' if ok else 'not more than'} the claimed {th:g}%.",
                ),
            ]
        )
    else:
        decline = -g_pct
        ok = decline > th
        body = "\n\n".join(
            [
                "Name the decline identity in words.",
                dd(r"\text{decline} = \frac{Y_1 - Y_2}{Y_1}"),
                "Plug in the table figures — one step per display:",
                dd(rf"Y_1 = {fmt(a)}, \quad Y_2 = {fmt(b)}"),
                dd(rf"Y_1 - Y_2 = {fmt(a)} - {fmt(b)}"),
                dd(rf"= {fmt(a - b)}"),
                dd(rf"\frac{{{fmt(a - b)}}}{{{fmt(a)}}}"),
                dd(rf"\approx {-g:.4f}"),
                dd(rf"\approx {decline:.1f}\%"),
                f"The claim wants a fall of more than {th:g}%.",
                dd(rf"{decline:.1f}\% {'>' if ok else r'\le '} {th:g}\%"),
                interp(
                    truth,
                    f"actual decline is {decline:.1f}%, which is "
                    f"{'more than' if ok else 'not more than'} the claimed {th:g}%.",
                ),
            ]
        )
    return wrap(truth, lead, body)


def stepped_ratio_x(
    name: str,
    num_label: str,
    den_label: str,
    num: float,
    den: float,
    actual: float,
    claim_line: str,
    truth: bool,
    detail: str,
    extra_prep: str = "",
) -> tuple[str, str]:
    """Return (lead, body) for a ×-style ratio with maximal steps."""
    lead = f"{name} = {num_label} ÷ {den_label}."
    parts = [
        f"Name the ratio in words: {name}.",
        dd(
            rf"\text{{{name}}} = \frac{{\text{{{num_label}}}}}{{\text{{{den_label}}}}}"
        ),
    ]
    if extra_prep:
        parts.append(extra_prep)
    parts.extend(
        [
            "Plug in the table figures — one step per display:",
            dd(rf"\text{{{num_label}}} = {fmt(num)}"),
            dd(rf"\text{{{den_label}}} = {fmt(den)}"),
            dd(rf"\frac{{{fmt(num)}}}{{{fmt(den)}}}"),
            dd(rf"\approx {actual:.4f}"),
            claim_line,
            interp(truth, detail),
        ]
    )
    return lead, "\n\n".join(parts)


def stepped_ratio_pct(
    name: str,
    num_label: str,
    den_label: str,
    num: float,
    den: float,
    actual_frac: float,
    claim_line: str,
    truth: bool,
    detail: str,
) -> tuple[str, str]:
    lead = f"{name} = {num_label} ÷ {den_label}, expressed as a percentage."
    body = "\n\n".join(
        [
            f"Name the ratio in words: {name}.",
            dd(
                rf"\text{{{name}}} = \frac{{\text{{{num_label}}}}}{{\text{{{den_label}}}}}"
            ),
            "Plug in the table figures — one step per display:",
            dd(rf"\text{{{num_label}}} = {fmt(num)}"),
            dd(rf"\text{{{den_label}}} = {fmt(den)}"),
            dd(rf"\frac{{{fmt(num)}}}{{{fmt(den)}}}"),
            dd(rf"\approx {actual_frac:.4f}"),
            dd(rf"\approx {pct(actual_frac)}\%"),
            claim_line,
            interp(truth, detail),
        ]
    )
    return lead, body


# ── extra handlers for gaps in try_maximal ──────────────────────────────────

def extra_handlers(stmt: str, truth: bool, tables: dict, ctx: str = "") -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    sl = stmt.lower()

    # Residual value ignored — show the straight-line calc that uses residual
    m = re.match(
        r"Residual value of the €([\d,]+) delivery truck is ignored when calculating its annual depreciation\.?$",
        stmt,
        re.I,
    )
    if m and ctx:
        assets = parse_dep(ctx)
        truck = None
        for k, v in assets.items():
            if "truck" in k.lower() or abs(v["cost"] - float(m.group(1).replace(",", ""))) < 1:
                truck = v
                break
        if truck:
            cost, life, resid = truck["cost"], truck["life"], truck["resid"]
            dep_amt = cost - resid
            annual = dep_amt / life
            lead = "Straight-line depreciation uses cost minus residual value over useful life."
            body = "\n\n".join(
                [
                    "Name the identity in words: annual depreciation = (cost − residual) ÷ useful life.",
                    dd(
                        r"\text{Annual dep.} = \frac{\text{cost} - \text{residual}}{\text{useful life}}"
                    ),
                    "Plug in the truck figures — one step per display:",
                    dd(rf"\text{{Cost}} = {fmt(cost)}"),
                    dd(rf"\text{{Residual}} = {fmt(resid)}"),
                    dd(rf"\text{{Cost}} - \text{{Residual}} = {fmt(cost)} - {fmt(resid)}"),
                    dd(rf"= {fmt(dep_amt)}"),
                    dd(rf"\text{{Useful life}} = {fmt(life)}"),
                    dd(rf"\frac{{{fmt(dep_amt)}}}{{{fmt(life)}}}"),
                    dd(rf"= {fmt(annual)}"),
                    "Residual is subtracted before dividing — it is not ignored.",
                    interp(
                        truth,
                        f"using residual {fmt(resid)} gives annual depreciation {fmt(annual)}, "
                        "so the claim that residual is ignored is false.",
                    ),
                ]
            )
            return wrap(truth, lead, body)

    m = re.match(
        r"Proceeds from new borrowing were (lower|higher) in Year 2 than in Year 1\.?$",
        stmt,
        re.I,
    )
    if m and tables["y1"] and tables["y2"]:
        keys = [
            "proceeds from new borrowing",
            "proceeds of new borrowing",
            "new borrowing",
            "proceeds from long-term borrowing",
        ]
        a = b = None
        for k in keys:
            if k in tables["y1"] and k in tables["y2"]:
                a, b = tables["y1"][k], tables["y2"][k]
                break
        # fuzzy
        if a is None:
            for k in tables["y1"]:
                if "borrow" in k:
                    a = tables["y1"][k]
                    b = tables["y2"].get(k)
                    if b is not None:
                        break
        if a is not None and b is not None:
            verb = m.group(1).lower()
            ok = (verb == "lower" and b < a) or (verb == "higher" and b > a)
            lead = "Compare Year-2 proceeds from new borrowing with Year 1."
            body = "\n\n".join(
                [
                    "Read the borrowing proceeds line from each year.",
                    dd(rf"\text{{Borrowing}}_{{\text{{Y1}}}} = {fmt(a)}"),
                    dd(rf"\text{{Borrowing}}_{{\text{{Y2}}}} = {fmt(b)}"),
                    dd(rf"{fmt(b)} {'<' if b < a else '>' if b > a else '='} {fmt(a)}"),
                    f"The claim says Year 2 is {verb} than Year 1.",
                    interp(
                        truth,
                        f"Year 2 ({fmt(b)}) is {'lower' if b < a else 'higher' if b > a else 'equal'} "
                        f"versus Year 1 ({fmt(a)}).",
                    ),
                ]
            )
            return wrap(truth, lead, body)

    m = re.match(
        r"Cash flow from financing activities was (higher|lower) in Year 2 than in Year 1\.?$",
        stmt,
        re.I,
    )
    if m and tables["y1"] and tables["y2"]:
        a = tables["y1"].get("cash flow from financing activities")
        b = tables["y2"].get("cash flow from financing activities")
        if a is not None and b is not None:
            verb = m.group(1).lower()
            lead = "Compare financing cash flow across the two years."
            body = "\n\n".join(
                [
                    "Read cash flow from financing activities for each year.",
                    dd(rf"\text{{CFF}}_{{\text{{Y1}}}} = {fmt(a)}"),
                    dd(rf"\text{{CFF}}_{{\text{{Y2}}}} = {fmt(b)}"),
                    dd(rf"{fmt(b)} {'<' if b < a else '>' if b > a else '='} {fmt(a)}"),
                    f"The claim says Year 2 is {verb} than Year 1.",
                    interp(
                        truth,
                        f"Year-2 CFF {fmt(b)} is "
                        f"{'higher' if b > a else 'lower' if b < a else 'equal'} than Year-1 CFF {fmt(a)}.",
                    ),
                ]
            )
            return wrap(truth, lead, body)

    m = re.match(
        r"The operating result covers finance costs less than (\d+(?:\.\d+)?) times over in Year ([12])\.?$",
        stmt,
        re.I,
    )
    if m and (y1 or y2):
        th, yr = float(m.group(1)), int(m.group(2))
        raw = tables["y1"] if yr == 1 else tables["y2"]
        op = raw.get("operating result")
        fc = raw.get("finance costs")
        if op is not None and fc:
            cover = abs(op) / abs(fc) if isinstance(op, (int, float)) else float("nan")
            # finance costs often shown as positive expense or negative
            fc_v = abs(float(fc))
            op_v = float(op)
            cover = op_v / fc_v if fc_v else float("nan")
            lead = "Interest cover = operating result ÷ finance costs."
            body = "\n\n".join(
                [
                    "Name the coverage identity in words.",
                    dd(
                        r"\text{Interest cover} = \frac{\text{operating result}}{\text{finance costs}}"
                    ),
                    "Plug in the table figures — one step per display:",
                    dd(rf"\text{{Operating result}} = {fmt(op_v)}"),
                    dd(rf"\text{{Finance costs}} = {fmt(fc_v)}"),
                    dd(rf"\frac{{{fmt(op_v)}}}{{{fmt(fc_v)}}}"),
                    dd(rf"\approx {cover:.4f}"),
                    f"The claim wants cover of less than {th:g} times in Year {yr}.",
                    dd(rf"{cover:.4f} {'<' if cover < th else r'\ge '} {th:g}"),
                    interp(
                        truth,
                        f"cover is {cover:.2f} times, which is "
                        f"{'less than' if cover < th else 'not less than'} {th:g}.",
                    ),
                ]
            )
            return wrap(truth, lead, body)

    return None


# ── restep: expand compressed $$ blocks from try_maximal ────────────────────

_EQ_PCT = re.compile(
    r"\$\$\s*\\frac\{([^}]+)\}\s*\{\s*([^}]+)\s*\}\s*=\s*([0-9.+-]+)\\%\s*\$\$",
    re.S,
)
_EQ_NUM = re.compile(
    r"\$\$\s*\\frac\{([^}]+)\}\s*\{\s*([^}]+)\s*\}\s*=\s*([0-9.+-]+)\s*\$\$",
    re.S,
)
_EQ_NAMED_FRAC_NUM = re.compile(
    r"\$\$\s*([^\n=:]+?)\s*=\s*\\frac\{([^}]+)\}\s*\{\s*([^}]+)\s*\}\s*=\s*([0-9,.+-]+)(?:\\%)?\s*\$\$",
    re.S,
)
_EQ_LABELED_FRAC = re.compile(
    r"\$\$\s*([^:\n]+):\s*\\frac\{([^}]+)\}\s*\{\s*([^}]+)\s*\}\s*=\s*([0-9,.\-+]+)\s*\$\$",
    re.S,
)
_EQ_FRAC_MINUS_ONE_PCT = re.compile(
    r"\$\$\s*\\frac\{([^}]+)\}\s*\{\s*([^}]+)\s*\}\s*-\s*1\s*=\s*([0-9.+-]+)\\%\s*\$\$",
    re.S,
)
_EQ_INLINE_SUM = re.compile(
    r"\$\$\s*([^\n=]+?)\s*=\s*([0-9,.\-+]+(?:\s*\+\s*[0-9,.\-+]+)+)\s*=\s*([0-9,.\-+]+)\s*\$\$",
    re.S,
)
_EQ_DIFF = re.compile(
    r"\$\$\s*([^\n=]+?)\s*=\s*([0-9,.\-+]+)\s*-\s*([0-9,.\-+]+)\s*=\s*([0-9,.\-+]+)\s*\$\$",
    re.S,
)


def _parse_float(s: str) -> float | None:
    s = s.strip().replace(",", "").replace(r"\,", "")
    s = re.sub(r"\\text\{[^}]*\}", "", s)
    s = re.sub(r"[^\d.\-+eE]", "", s)
    try:
        return float(s) if s else None
    except ValueError:
        return None


def expand_frac_pct(num: str, den: str, pct_str: str) -> str:
    """Maximal steps for a percentage ratio already reduced to one line."""
    parts = []
    n = num.strip()
    d = den.strip()
    m = re.match(r"^([0-9,.\-+]+)\s*-\s*([0-9,.\-+]+)$", n)
    if m:
        b, a = m.group(1), m.group(2)
        bf, af = _parse_float(b), _parse_float(a)
        if bf is not None and af is not None:
            diff = bf - af
            parts.extend(
                [
                    dd(r"\frac{Y_2 - Y_1}{Y_1}"),
                    dd(rf"Y_2 = {b}, \quad Y_1 = {a}"),
                    dd(rf"Y_2 - Y_1 = {b} - {a}"),
                    dd(rf"= {fmt(diff)}"),
                    dd(rf"\frac{{{fmt(diff)}}}{{{a}}}"),
                ]
            )
            ratio = diff / af if af else float("nan")
            parts.append(dd(rf"\approx {ratio:.4f}"))
            parts.append(dd(rf"\approx {pct_str}\%"))
            return "\n\n".join(parts)
    nf, df = _parse_float(n), _parse_float(d)
    parts = [dd(rf"\frac{{{n}}}{{{d}}}")]
    if nf is not None and df:
        parts.append(dd(rf"\approx {nf / df:.4f}"))
    parts.append(dd(rf"\approx {pct_str}\%"))
    return "\n\n".join(parts)


def expand_frac_num(num: str, den: str, val: str) -> str:
    n, d = num.strip(), den.strip()
    m = re.match(r"^([0-9,.\-+]+)\s*-\s*([0-9,.\-+]+)$", n)
    parts = []
    if m:
        a, b = m.group(1), m.group(2)
        af, bf = _parse_float(a), _parse_float(b)
        if af is not None and bf is not None:
            parts.extend(
                [
                    dd(rf"{a} - {b}"),
                    dd(rf"= {fmt(af - bf)}"),
                    dd(rf"\frac{{{fmt(af - bf)}}}{{{d}}}"),
                ]
            )
        else:
            parts.append(dd(rf"\frac{{{n}}}{{{d}}}"))
    else:
        parts.append(dd(rf"\frac{{{n}}}{{{d}}}"))
    # strip thousands commas from approx value display if present
    parts.append(dd(rf"\approx {val}"))
    return "\n\n".join(parts)


def maximalize_math(expl: str) -> str:
    """Split compressed display equations into one-step-per-display form."""

    def repl_pct(m: re.Match) -> str:
        return expand_frac_pct(m.group(1), m.group(2), m.group(3))

    def repl_num(m: re.Match) -> str:
        return expand_frac_num(m.group(1), m.group(2), m.group(3))

    def repl_named(m: re.Match) -> str:
        _lhs, num, den, val = m.group(1), m.group(2), m.group(3), m.group(4)
        # If original ended with \%, treat as percent
        full = m.group(0)
        if "\\%" in full:
            return expand_frac_pct(num, den, val)
        return expand_frac_num(num, den, val)

    def repl_labeled(m: re.Match) -> str:
        label, num, den, val = m.group(1).strip(), m.group(2), m.group(3), m.group(4)
        return "\n\n".join(
            [
                dd(rf"{label}:"),
                expand_frac_num(num, den, val),
            ]
        )

    def repl_surplus(m: re.Match) -> str:
        num, den, pct_str = m.group(1).strip(), m.group(2).strip(), m.group(3)
        nf, df = _parse_float(num), _parse_float(den)
        parts = [
            dd(rf"\frac{{{num}}}{{{den}}}"),
        ]
        if nf is not None and df:
            parts.append(dd(rf"\approx {nf / df:.4f}"))
            parts.append(dd(rf"\frac{{{num}}}{{{den}}} - 1"))
            parts.append(dd(rf"\approx {nf / df - 1:.4f}"))
        parts.append(dd(rf"\approx {pct_str}\%"))
        return "\n\n".join(parts)

    def repl_sum(m: re.Match) -> str:
        lhs, sum_expr, total = m.group(1), m.group(2), m.group(3)
        return "\n\n".join(
            [
                dd(rf"{lhs} = {sum_expr}"),
                dd(rf"{lhs} = {total}"),
            ]
        )

    def repl_diff(m: re.Match) -> str:
        lhs, a, b, total = m.group(1), m.group(2), m.group(3), m.group(4)
        return "\n\n".join(
            [
                dd(rf"{lhs} = {a} - {b}"),
                dd(rf"{lhs} = {total}"),
            ]
        )

    out = expl
    # Order matters: labeled/named/surplus before plain frac=pct
    out = _EQ_LABELED_FRAC.sub(repl_labeled, out)
    out = _EQ_NAMED_FRAC_NUM.sub(repl_named, out)
    out = _EQ_FRAC_MINUS_ONE_PCT.sub(repl_surplus, out)
    out = _EQ_PCT.sub(repl_pct, out)
    out = _EQ_NUM.sub(repl_num, out)
    out = _EQ_INLINE_SUM.sub(repl_sum, out)
    out = _EQ_DIFF.sub(repl_diff, out)
    return out


def fix_closer(expl: str, truth: bool) -> str:
    want = "So the statement is True." if truth else "So the statement is False."
    # strip any existing closers
    out = re.sub(
        r"\n*\s*(?:So )?the statement is (?:true|false)\.?\s*$",
        "",
        expl.strip(),
        flags=re.I,
    )
    # also remove thicken_thin "The statement is true."
    out = re.sub(
        r"\n*\s*The statement is (?:true|false)\.?\s*$",
        "",
        out,
        flags=re.I,
    )
    return out.rstrip() + "\n\n" + want


def fix_header(expl: str, truth: bool) -> str:
    want = "TRUE — " if truth else "FALSE — "
    if expl.startswith("TRUE — ") or expl.startswith("FALSE — "):
        body = expl.split(" — ", 1)[1]
        return want + body
    return want + expl


def ensure_plug_cue(expl: str) -> str:
    """If there are multiple $$ blocks but no plug-in cue, add one before first numeric frac."""
    if "Plug in the table figures" in expl:
        return expl
    # insert after first $$...$$ that looks like a definition (contains \text{...} = \frac{\text)
    parts = re.split(r"(\$\$[\s\S]*?\$\$)", expl)
    if len(parts) < 3:
        return expl
    # find first display, then insert cue before second if second looks like numbers
    displays = [i for i, p in enumerate(parts) if p.startswith("$$")]
    if len(displays) >= 2:
        idx = displays[1]
        # only if second has digits
        if re.search(r"\d", parts[idx]):
            parts[idx] = "\n\nPlug in the table figures — one step per display:\n\n" + parts[idx]
            return "".join(parts)
    return expl


# ── rewrite growth bodies from scratch when try_maximal matched growth ──────

def rebuild_growth_if_applicable(stmt: str, truth: bool, tables: dict) -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    m = re.match(
        r"(.+?) (grew|fell) by more than (\d+(?:\.\d+)?)% between Year 1 and Year 2\.?$",
        stmt,
        re.I,
    )
    if m and y1 and y2:
        subj, direction, th = m.group(1), m.group(2).lower(), float(m.group(3))
        a = getv(y1, tables, subject_keys(subj), 1)
        b = getv(y2, tables, subject_keys(subj), 2)
        if a is not None and b is not None:
            return stepped_growth(
                subj, a, b, th, truth, "up" if direction == "grew" else "down"
            )
    m = re.match(
        r"Cash flow from operating activities grew by more than (\d+(?:\.\d+)?)% from Year 1 to Year 2\.?$",
        stmt,
        re.I,
    )
    if m and tables["y1"] and tables["y2"]:
        th = float(m.group(1))
        a = tables["y1"].get("cash flow from operating activities")
        b = tables["y2"].get("cash flow from operating activities")
        if a is not None and b is not None:
            return stepped_growth("Cash flow from operating activities", a, b, th, truth, "up")
    return None


def rebuild_current_ratio(stmt: str, truth: bool, tables: dict) -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    amt = enrich(amt_raw) if amt_raw else {}
    for k, v in amt_raw.items():
        amt.setdefault(k, v)

    m = re.match(r"The current ratio (exceeds|is below|is exactly) (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        verb, th = m.group(1).lower(), float(m.group(2))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            cr = bs["ca"] / bs["cl"]
            inv, recv, cash = bs.get("inventory", 0), bs.get("receivables", 0), bs.get("cash", 0)
            pay, od = bs.get("payables", 0), bs.get("overdraft", 0)
            lead = "Current ratio = current assets ÷ current liabilities."
            if verb == "exceeds":
                ok = cr > th
                detail = f"actual {cr:.2f} {'exceeds' if ok else 'does not exceed'} {th:g}."
            elif verb == "is below":
                ok = cr < th
                detail = f"actual {cr:.2f} is {'below' if ok else 'not below'} {th:g}."
            else:
                ok = abs(cr - th) < 0.005
                detail = f"actual {cr:.2f} {'equals' if ok else 'does not equal'} {th:g}."
            body = "\n\n".join(
                [
                    "Name the ratio in words: current ratio.",
                    dd(
                        r"\text{Current ratio} = \frac{\text{current assets}}{\text{current liabilities}}"
                    ),
                    "Build current assets and current liabilities from the extract:",
                    dd(rf"CA = {fmt(inv)} + {fmt(recv)} + {fmt(cash)}"),
                    dd(rf"CA = {fmt(bs['ca'])}"),
                    dd(rf"CL = {fmt(pay)} + {fmt(od)}"),
                    dd(rf"CL = {fmt(bs['cl'])}"),
                    "Plug in the table figures — one step per display:",
                    dd(rf"\frac{{{fmt(bs['ca'])}}}{{{fmt(bs['cl'])}}}"),
                    dd(rf"\approx {cr:.4f}"),
                    f"Compare to the claim’s hurdle (“{verb} {th:g}”).",
                    dd(rf"{cr:.4f} {'>' if cr > th else '<' if cr < th else '='} {th:g}"),
                    interp(truth, detail),
                ]
            )
            return wrap(truth, lead, body)
    return None


def rebuild_ncl_equity(stmt: str, truth: bool, tables: dict) -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    m = re.match(
        r"Non-current liabilities amount to (more|less) than (\d+(?:\.\d+)?)% of total equity in Year ([12])\.?$",
        stmt,
        re.I,
    )
    if m and (y1 or y2):
        which, th, yr = m.group(1).lower(), float(m.group(2)), int(m.group(3))
        bs = y1 if yr == 1 else y2
        ncl, eq = bs["ncl"], bs["equity"]
        ratio = ncl / eq if eq else float("nan")
        holds = (which == "more" and ratio * 100 > th) or (which == "less" and ratio * 100 < th)
        lead = "NCL-to-equity share = non-current liabilities ÷ total equity."
        body = "\n\n".join(
            [
                "Name the ratio in words: non-current liabilities as a percentage of total equity.",
                dd(
                    r"\text{NCL share} = \frac{\text{non-current liabilities}}{\text{total equity}}"
                ),
                "Non-current liabilities combine the long-term loan and bonds lines:",
                dd(rf"\text{{NCL}} = {fmt(bs['lt'])} + {fmt(bs['bonds'])}"),
                dd(rf"\text{{NCL}} = {fmt(ncl)}"),
                dd(rf"\text{{Equity}} = {fmt(eq)}"),
                "Plug in the table figures — one step per display:",
                dd(rf"\frac{{{fmt(ncl)}}}{{{fmt(eq)}}}"),
                dd(rf"\approx {ratio:.4f}"),
                dd(rf"\approx {pct(ratio)}\%"),
                f"Compare to the claim’s hurdle (“{which} than {th:g}%” in Year {yr}).",
                dd(rf"{pct(ratio)}\% {'<' if ratio*100 < th else '>'} {th:g}\%"),
                interp(
                    truth,
                    f"Year {yr} NCL/equity is {pct(ratio)}%, which is "
                    f"{'consistent with' if holds else 'inconsistent with'} “{which} than {th:g}%”.",
                ),
            ]
        )
        return wrap(truth, lead, body)
    return None


# ── main rewrite path ───────────────────────────────────────────────────────

def rebuild_acid_test(stmt: str, truth: bool, tables: dict) -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    amt = enrich(amt_raw) if amt_raw else {}
    for k, v in amt_raw.items():
        amt.setdefault(k, v)

    th = None
    m = re.match(
        r"After excluding inventory, the remaining current assets still cover current liabilities more than (\d+(?:\.\d+)?) times over\.?$",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        claim = f"more than {th:g}"
    m2 = re.match(r"The acid-test ratio exceeds (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m2:
        th = float(m2.group(1))
        claim = f"exceeds {th:g}"
    if th is None:
        return None
    bs = amt if amt.get("cl") else (y2 or y1)
    if not (bs and bs.get("cl")):
        return None
    quick = bs["ca"] - bs["inventory"]
    acid = quick / bs["cl"]
    lead = "Acid-test (quick) ratio = (current assets − inventory) ÷ current liabilities."
    body = "\n\n".join(
        [
            "Name the ratio in words: acid-test ratio.",
            dd(
                r"\text{Acid-test} = \frac{\text{current assets} - \text{inventory}}{\text{current liabilities}}"
            ),
            "Plug in the table figures — one step per display:",
            dd(rf"\text{{CA}} = {fmt(bs['ca'])}"),
            dd(rf"\text{{Inventory}} = {fmt(bs['inventory'])}"),
            dd(rf"\text{{CA}} - \text{{Inventory}} = {fmt(bs['ca'])} - {fmt(bs['inventory'])}"),
            dd(rf"= {fmt(quick)}"),
            dd(rf"\text{{CL}} = {fmt(bs['cl'])}"),
            dd(rf"\frac{{{fmt(quick)}}}{{{fmt(bs['cl'])}}}"),
            dd(rf"\approx {acid:.4f}"),
            f"Compare to the claim’s hurdle (“{claim}”).",
            dd(rf"{acid:.4f} {'>' if acid > th else r'\le '} {th:g}"),
            interp(
                truth,
                f"acid-test {acid:.2f} is {'more than' if acid > th else 'not more than'} {th:g}.",
            ),
        ]
    )
    return wrap(truth, lead, body)


def rebuild_lt_financing(stmt: str, truth: bool, tables: dict) -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    amt = enrich(amt_raw) if amt_raw else {}
    for k, v in amt_raw.items():
        amt.setdefault(k, v)
    m = re.match(
        r"The combined total of equity and non-current liabilities exceeds non-current assets by more than (\d+(?:\.\d+)?)%(?: in Year ([12]))?\.?$",
        stmt,
        re.I,
    )
    if not m:
        return None
    th = float(m.group(1))
    yr = int(m.group(2)) if m.group(2) else None
    bs = (y1 if yr == 1 else y2 if yr == 2 else amt) or y2 or y1
    if not (bs and bs.get("nca")):
        return None
    pool = bs["equity"] + bs["ncl"]
    excess = pool / bs["nca"] - 1
    lead = "Long-term financing surplus = (equity + non-current liabilities) ÷ non-current assets − 1."
    body = "\n\n".join(
        [
            "Name the identity in words: surplus of long-term financing over non-current assets.",
            dd(
                r"\text{Surplus} = \frac{\text{equity} + \text{NCL}}{\text{NCA}} - 1"
            ),
            "Plug in the table figures — one step per display:",
            dd(rf"\text{{Equity}} + \text{{NCL}} = {fmt(bs['equity'])} + {fmt(bs['ncl'])}"),
            dd(rf"= {fmt(pool)}"),
            dd(rf"\text{{NCA}} = {fmt(bs['nca'])}"),
            dd(rf"\frac{{{fmt(pool)}}}{{{fmt(bs['nca'])}}}"),
            dd(rf"\approx {pool / bs['nca']:.4f}"),
            dd(rf"\frac{{{fmt(pool)}}}{{{fmt(bs['nca'])}}} - 1"),
            dd(rf"\approx {excess:.4f}"),
            dd(rf"\approx {pct(excess)}\%"),
            f"Compare to the claim’s hurdle (“more than {th:g}%”).",
            dd(rf"{pct(excess)}\% {'>' if excess * 100 > th else r'\le '} {th:g}\%"),
            interp(
                truth,
                f"the surplus is {pct(excess)}%, which "
                f"{'exceeds' if excess * 100 > th else 'does not exceed'} {th:g}%.",
            ),
        ]
    )
    return wrap(truth, lead, body)


def rebuild_equity_ratio(stmt: str, truth: bool, tables: dict) -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    amt = enrich(amt_raw) if amt_raw else {}
    for k, v in amt_raw.items():
        amt.setdefault(k, v)
    m = re.match(r"The (equity|debt) ratio (is below|exceeds) (\d+(?:\.\d+)?)%\.?$", stmt, re.I)
    if not m:
        return None
    kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
    bs = amt if amt.get("assets") else (y2 or y1)
    if not (bs and bs.get("assets")):
        return None
    num = bs["equity"] if kind == "equity" else bs["liab"]
    ratio = num / bs["assets"]
    lead = f"{kind.title()} ratio = {kind} ÷ total assets."
    if verb == "is below":
        ok = ratio * 100 < th
        detail = f"actual {pct(ratio)}% is {'below' if ok else 'not below'} {th:g}%."
    else:
        ok = ratio * 100 > th
        detail = f"actual {pct(ratio)}% {'exceeds' if ok else 'does not exceed'} {th:g}%."
    body = "\n\n".join(
        [
            f"Name the ratio in words: {kind} ratio.",
            dd(rf"\text{{{kind.title()} ratio}} = \frac{{\text{{{kind}}}}}{{\text{{total assets}}}}"),
            "Plug in the table figures — one step per display:",
            dd(rf"\text{{{kind.title()}}} = {fmt(num)}"),
            dd(rf"\text{{Total assets}} = {fmt(bs['assets'])}"),
            dd(rf"\frac{{{fmt(num)}}}{{{fmt(bs['assets'])}}}"),
            dd(rf"\approx {ratio:.4f}"),
            dd(rf"\approx {pct(ratio)}\%"),
            f"Compare to the claim’s hurdle (“{verb} {th:g}%”).",
            dd(rf"{pct(ratio)}\% {'<' if ratio*100 < th else '>'} {th:g}\%"),
            interp(truth, detail),
        ]
    )
    return wrap(truth, lead, body)


def rewrite_letter(stmt: str, truth: bool, tables: dict, ctx: str = "") -> str | None:
    """Build a from-scratch stepped explanation, or None if not numeric/computable."""
    # Prefer dedicated maximal rebuilders for the highest-volume patterns
    for builder in (
        rebuild_growth_if_applicable,
        rebuild_current_ratio,
        rebuild_ncl_equity,
        rebuild_acid_test,
        rebuild_lt_financing,
        rebuild_equity_ratio,
    ):
        out = builder(stmt, truth, tables)
        if out:
            return out

    out = extra_handlers(stmt, truth, tables, ctx=ctx)
    if out:
        return out

    # Fall back to try_maximal / try_numeric, then maximalize compressed math
    raw = thick.try_maximal(stmt, truth, tables)
    if raw is None:
        raw = try_numeric(stmt, truth, tables)
    if raw is None:
        return None

    # Patch wrap-style closer and expand math
    expl = maximalize_math(raw)
    expl = ensure_plug_cue(expl)
    # Replace "Name the identity in words: X." lead duplication — keep structure
    expl = fix_header(expl, truth)
    expl = fix_closer(expl, truth)
    # Soften thicken interp lines that say "so the statement holds"
    expl = re.sub(
        r"so the statement (holds|does not hold)\.",
        lambda m: "so the arithmetic "
        + ("supports the claim." if m.group(1) == "holds" else "misses the claim."),
        expl,
        flags=re.I,
    )
    return expl


def process(write: bool = True) -> dict:
    original = json.loads(PATH.read_text())
    assert len(original) >= UNLOCK
    locked_snapshot = [list(c["tactical_explanations"]) for c in original[UNLOCK:]]

    rewritten = 0
    skipped_non_numeric = 0
    skipped_no_builder = 0
    samples = []
    errs = []

    for i, case in enumerate(original[:UNLOCK]):
        tables = parse_tables(case.get("context") or "")
        new_expls = list(case["tactical_explanations"])
        for j, (stmt, truth) in enumerate(zip(case["statements"], case["answer_key"])):
            if not needs_numeric(stmt):
                skipped_non_numeric += 1
                continue
            new = rewrite_letter(stmt, bool(truth), tables, ctx=case.get("context") or "")
            if new is None:
                skipped_no_builder += 1
                continue
            # Validate header/closer/$$ presence
            want_h = "TRUE — " if truth else "FALSE — "
            want_c = "So the statement is True." if truth else "So the statement is False."
            if not new.startswith(want_h):
                errs.append(f"{case['case_id']} {LETTERS[j]} header")
            if not new.rstrip().endswith(want_c):
                errs.append(f"{case['case_id']} {LETTERS[j]} closer")
            if "$$" not in new:
                errs.append(f"{case['case_id']} {LETTERS[j]} missing $$")
            rewritten += 1  # every letter that got a stepped rebuild
            new_expls[j] = new
            if len(samples) < 3:
                samples.append((case["case_id"], LETTERS[j], new))
        case["tactical_explanations"] = new_expls

    # Locked untouched
    for i, case in enumerate(original[UNLOCK:]):
        assert case["tactical_explanations"] == locked_snapshot[i]

    if write:
        PATH.write_text(json.dumps(original, ensure_ascii=False, indent=2) + "\n")

    return {
        "rewritten": rewritten,
        "skipped_non_numeric": skipped_non_numeric,
        "skipped_no_builder": skipped_no_builder,
        "errs": errs,
        "sample0": samples[0] if samples else None,
    }


if __name__ == "__main__":
    # Patch thicken wrap closer so any leftover path matches brief
    thick.wrap = wrap
    thick.interp = interp
    info = process(write=True)
    print(json.dumps({k: v for k, v in info.items() if k != "sample0"}, indent=2))
    if info["sample0"]:
        cid, L, text = info["sample0"]
        print(f"\n=== SAMPLE {cid} {L} ===\n{text}")
