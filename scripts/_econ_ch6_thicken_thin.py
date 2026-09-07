#!/usr/bin/env python3
"""Thicken Ch6 thin/jump-to-figure tactical explanations.

Rewrites letters that are short or that jump straight to a formula with almost
no teaching prose. Ratio/identity claims: name the identity, plug case figures
in separate $$ steps, interpret against the claim, closer.
Does not change statements, answer_key, context, or ids.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))

from _econ_ch6_deepen_lib import (  # noqa: E402
    PATH,
    LETTERS,
    enrich,
    fmt,
    growth,
    parse_dep,
    parse_tables,
    pct,
    subject_keys,
    getv,
    conceptual,
    THEORY,
)

THIN_LEN = 280
JUMP_LEN = 320


def wrap(truth: bool, lead: str, body: str) -> str:
    h = "TRUE — " if truth else "FALSE — "
    c = "The statement is true." if truth else "The statement is false."
    return f"{h}{lead.strip()}\n\n{body.strip()}\n\n{c}"


def needs_thicken(expl: str) -> bool:
    if len(expl) < THIN_LEN:
        return True
    if len(expl) < JUMP_LEN:
        parts = [p for p in expl.split("\n\n") if p.strip()]
        # header, then immediate $$
        if len(parts) >= 2 and parts[1].strip().startswith("$$"):
            return True
        if "A student who" in expl:
            return True
    return False


def interp(truth: bool, detail: str) -> str:
    if truth:
        return (
            f"Reading the arithmetic against the claim: {detail} "
            "so the statement holds."
        )
    return (
        f"Reading the arithmetic against the claim: {detail} "
        "so the statement does not hold."
    )


def ratio_pct_body(
    identity: str,
    symbol: str,
    num_label: str,
    den_label: str,
    num: float,
    den: float,
    actual_pct: float,
    claim_line: str,
    truth: bool,
    holds_detail: str,
    fails_detail: str,
) -> str:
    return f"""Name the identity in words: {identity}.

From the extract, {num_label} = {fmt(num)} and {den_label} = {fmt(den)}. Plug the figures step by step:

$$
{symbol} = \\frac{{\\text{{{num_label}}}}}{{\\text{{{den_label}}}}}
$$

$$
{symbol} = \\frac{{{fmt(num)}}}{{{fmt(den)}}}
$$

$$
{symbol} = {pct(actual_pct)}\\%
$$

{claim_line}

{interp(truth, holds_detail if truth else fails_detail)}"""


def ratio_x_body(
    identity: str,
    symbol: str,
    num_label: str,
    den_label: str,
    num: float,
    den: float,
    actual: float,
    claim_line: str,
    truth: bool,
    holds_detail: str,
    fails_detail: str,
    extra_prep: str = "",
) -> str:
    prep = (extra_prep.strip() + "\n\n") if extra_prep.strip() else ""
    return f"""Name the identity in words: {identity}.

{prep}From the extract, {num_label} = {fmt(num)} and {den_label} = {fmt(den)}. Plug the figures step by step:

$$
{symbol} = \\frac{{\\text{{{num_label}}}}}{{\\text{{{den_label}}}}}
$$

$$
{symbol} = \\frac{{{fmt(num)}}}{{{fmt(den)}}}
$$

$$
{symbol} = {actual:.4f}
$$

{claim_line}

{interp(truth, holds_detail if truth else fails_detail)}"""


def try_maximal(stmt: str, truth: bool, tables: dict) -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    amt = enrich(amt_raw) if amt_raw else {}
    for k, v in amt_raw.items():
        amt.setdefault(k, v)
    months = tables["months"]
    sl = stmt.lower()

    # ── growth ──────────────────────────────────────────────────────────
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
            g = growth(a, b)
            g_pct = g * 100
            lead = (
                f"Percentage change for {subj} is the Year-2 figure minus the Year-1 figure, "
                "divided by the Year-1 figure."
            )
            if direction == "up":
                ok = g_pct > th
                detail_ok = f"growth is {pct(g)}%, which is more than the claimed {th:g}%"
                detail_bad = f"growth is {pct(g)}%, which is not more than the claimed {th:g}%"
                body = f"""Name the identity in words: growth rate = (Year 2 − Year 1) ÷ Year 1.

From the extract:

$$
\\text{{{subj}}}_{{\\text{{Y1}}}} = {fmt(a)}, \\quad
\\text{{{subj}}}_{{\\text{{Y2}}}} = {fmt(b)}
$$

$$
\\frac{{{fmt(b)} - {fmt(a)}}}{{{fmt(a)}}} = {pct(g)}\\%
$$

The statement claims growth of more than {th:g}%.

{interp(truth, detail_ok if truth else detail_bad)}"""
            else:
                decline = -g_pct
                detail_ok = f"the decline is {decline:.1f}%, which is more than the claimed {th:g}%"
                detail_bad = f"the decline is {decline:.1f}%, which is not more than the claimed {th:g}%"
                body = f"""Name the identity in words: decline rate = (Year 1 − Year 2) ÷ Year 1 when the balance falls.

From the extract:

$$
\\text{{{subj}}}_{{\\text{{Y1}}}} = {fmt(a)}, \\quad
\\text{{{subj}}}_{{\\text{{Y2}}}} = {fmt(b)}
$$

$$
\\frac{{{fmt(a)} - {fmt(b)}}}{{{fmt(a)}}} = {decline:.1f}\\%
$$

The statement claims a fall of more than {th:g}%.

{interp(truth, detail_ok if truth else detail_bad)}"""
            return wrap(truth, lead, body)

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
            g = growth(a, b)
            lead = "Operating-cash-flow growth uses the same percentage-change identity as other line items."
            body = f"""Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1.

$$
\\text{{CFO}}_{{\\text{{Y1}}}} = {fmt(a)}, \\quad \\text{{CFO}}_{{\\text{{Y2}}}} = {fmt(b)}
$$

$$
\\frac{{{fmt(b)} - {fmt(a)}}}{{{fmt(a)}}} = {pct(g)}\\%
$$

Claimed: more than {th:g}%. Actual {pct(g)}%.

{interp(truth, f"actual growth {pct(g)}% {'exceeds' if g*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

    m = re.match(r"Revenue grew by exactly (\d+(?:\.\d+)?)% from Year 1 to Year 2\.?$", stmt, re.I)
    if m and "revenue" in tables["y1"] and "revenue" in tables["y2"]:
        claimed = float(m.group(1))
        a, b = tables["y1"]["revenue"], tables["y2"]["revenue"]
        g = growth(a, b) * 100
        lead = "Exact revenue growth must match the stated percentage with no rounding slack beyond the claim."
        body = f"""Name the identity in words: revenue growth = (Year 2 revenue − Year 1 revenue) ÷ Year 1 revenue.

$$
\\text{{Rev}}_{{\\text{{Y1}}}} = {fmt(a)}, \\quad \\text{{Rev}}_{{\\text{{Y2}}}} = {fmt(b)}
$$

$$
\\frac{{{fmt(b)} - {fmt(a)}}}{{{fmt(a)}}} = {g:.1f}\\%
$$

Claimed exactly {claimed:g}%. Actual {g:.1f}%.

{interp(truth, f"actual growth {g:.1f}% {'equals' if abs(g-claimed)<0.05 else 'does not equal'} the claimed {claimed:g}%")}"""
        return wrap(truth, lead, body)

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
        lead = (
            "Non-current liabilities are the long-term funding claims; here they are "
            "long-term bank loan plus bonds payable, compared with total equity."
        )
        holds = (which == "more" and ratio * 100 > th) or (which == "less" and ratio * 100 < th)
        body = f"""Name the identity in words: NCL-to-equity share = (long-term bank loan + bonds payable) ÷ total equity.

$$
\\text{{NCL}} = {fmt(bs['lt'])} + {fmt(bs['bonds'])} = {fmt(ncl)}
$$

$$
\\text{{Equity}} = {fmt(eq)}
$$

$$
\\frac{{{fmt(ncl)}}}{{{fmt(eq)}}} = {pct(ratio)}\\%
$$

Threshold: {which} than {th:g}% in Year {yr}. Actual {pct(ratio)}%.

{interp(truth, f"Year {yr} NCL/equity is {pct(ratio)}%, which is {'consistent with' if holds else 'inconsistent with'} '{which} than {th:g}%'")}"""
        return wrap(truth, lead, body)

    m = re.match(
        r"The (equity|debt) ratio (improved|fell) by more than (\d+(?:\.\d+)?) percentage points between Year 1 and Year 2\.?$",
        stmt,
        re.I,
    )
    if m and y1 and y2:
        kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
        if kind == "equity":
            r1, r2 = y1["er"], y2["er"]
            n1, n2 = y1["equity"], y2["equity"]
        else:
            r1, r2 = y1["dr"], y2["dr"]
            n1, n2 = y1["liab"], y2["liab"]
        delta = (r2 - r1) * 100
        lead = (
            f"The {kind} ratio is {kind} divided by total assets; the statement is about the "
            "change in that ratio between the two years, measured in percentage points."
        )
        body = f"""Name the identity in words: {kind} ratio = {kind} ÷ total assets; Δ = Year-2 ratio − Year-1 ratio (in pp).

$$
R_{{Y1}} = \\frac{{{fmt(n1)}}}{{{fmt(y1['assets'])}}} = {pct(r1)}\\%
$$

$$
R_{{Y2}} = \\frac{{{fmt(n2)}}}{{{fmt(y2['assets'])}}} = {pct(r2)}\\%
$$

$$
\\Delta = {delta:+.1f}\\text{{ percentage points}}
$$

Required: {verb} by more than {th:g} pp. Actual change {delta:+.1f} pp.

{interp(truth, f"the change is {delta:+.1f} pp versus the claim that it {verb} by more than {th:g} pp")}"""
        return wrap(truth, lead, body)

    m = re.match(
        r"The share of total assets held in non-current assets fell by more than (\d+(?:\.\d+)?) percentage points from Year 1 to Year 2\.?$",
        stmt,
        re.I,
    )
    if m and y1 and y2:
        th = float(m.group(1))
        s1, s2 = y1["nca"] / y1["assets"], y2["nca"] / y2["assets"]
        fall = (s1 - s2) * 100
        lead = (
            "The non-current asset share is non-current assets divided by total assets; "
            "the claim is about how many percentage points that share fell."
        )
        body = f"""Name the identity in words: NCA share = non-current assets ÷ total assets.

Non-current assets = buildings + machinery + office equipment + patents.

$$
S_{{Y1}} = \\frac{{{fmt(y1['nca'])}}}{{{fmt(y1['assets'])}}} = {pct(s1)}\\%
$$

$$
S_{{Y2}} = \\frac{{{fmt(y2['nca'])}}}{{{fmt(y2['assets'])}}} = {pct(s2)}\\%
$$

$$
\\text{{Fall}} = {fall:.1f}\\text{{ percentage points}}
$$

Threshold: fell by more than {th:g} pp. Actual fall {fall:.1f} pp.

{interp(truth, f"the share fell by {fall:.1f} pp, which {'exceeds' if fall > th else 'does not exceed'} {th:g} pp")}"""
        return wrap(truth, lead, body)

    m = re.match(
        r"The combined total of equity and non-current liabilities exceeds non-current assets by more than (\d+(?:\.\d+)?)%(?: in Year ([12]))?\.?$",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        yr = int(m.group(2)) if m.group(2) else None
        bs = (y1 if yr == 1 else y2 if yr == 2 else amt) or y2 or y1
        if bs and bs.get("nca"):
            excess = (bs["equity"] + bs["ncl"]) / bs["nca"] - 1
            lead = (
                "Long-term financing is equity plus non-current liabilities; the claim "
                "compares that pool with non-current assets."
            )
            body = f"""Name the identity in words: surplus = (equity + non-current liabilities) ÷ non-current assets − 1.

$$
\\text{{Equity}} + \\text{{NCL}} = {fmt(bs['equity'])} + {fmt(bs['ncl'])} = {fmt(bs['equity'] + bs['ncl'])}
$$

$$
\\text{{NCA}} = {fmt(bs['nca'])}
$$

$$
\\frac{{{fmt(bs['equity'] + bs['ncl'])}}}{{{fmt(bs['nca'])}}} - 1 = {pct(excess)}\\%
$$

Threshold: more than {th:g}%. Actual surplus {pct(excess)}%.

{interp(truth, f"the surplus is {pct(excess)}%, which {'exceeds' if excess*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

    m = re.match(r"(.+?) make up (more|less) than (\d+(?:\.\d+)?)% of (.+?)\.?$", stmt, re.I)
    if m:
        subj, which, th, ofwhat = m.group(1), m.group(2).lower(), float(m.group(3)), m.group(4)
        if "average inventory" in subj.lower() and amt_raw:
            i0 = amt_raw.get("inventory at the beginning of the year")
            i1 = amt_raw.get("inventory at the end of the year")
            a0 = amt_raw.get("total assets at the beginning of the year")
            a1 = amt_raw.get("total assets at the end of the year")
            if None not in (i0, i1, a0, a1):
                avg_i, avg_a = (i0 + i1) / 2, (a0 + a1) / 2
                share = avg_i / avg_a
                lead = (
                    "Average inventory and average assets are midpoints of the beginning "
                    "and ending balances on the extract."
                )
                body = f"""Name the identity in words: average-inventory share = average inventory ÷ average total assets.

$$
\\text{{Avg inventory}} = \\frac{{{fmt(i0)} + {fmt(i1)}}}{{2}} = {fmt(avg_i)}
$$

$$
\\text{{Avg assets}} = \\frac{{{fmt(a0)} + {fmt(a1)}}}{{2}} = {fmt(avg_a)}
$$

$$
\\frac{{{fmt(avg_i)}}}{{{fmt(avg_a)}}} = {pct(share)}\\%
$$

Threshold: {which} than {th:g}%. Actual {pct(share)}%.

{interp(truth, f"the share is {pct(share)}% versus '{which} than {th:g}%'")}"""
                return wrap(truth, lead, body)
        try:
            ym = re.search(r"year\s*([12])", ofwhat, re.I)
            yr = int(ym.group(1)) if ym else None
        except Exception:
            yr = None
        bs = y1 if yr == 1 else y2 if yr == 2 else (amt or y2 or y1)
        if bs:
            aliases = {
                "non-current assets": "nca",
                "current assets": "ca",
                "total assets": "assets",
                "inventory": "inventory",
                "trade receivables": "receivables",
                "cash and cash equivalents": "cash",
                "buildings": "buildings",
                "non-current liabilities": "ncl",
                "current liabilities": "cl",
            }
            sk = aliases.get(re.sub(r"\s+in year [12]$", "", subj.lower()).strip(), subj.lower())
            dk = aliases.get(re.sub(r"\s+in year [12]$", "", ofwhat.lower()).strip(), ofwhat.lower())
            num, den = bs.get(sk), bs.get(dk)
            if num is not None and den:
                ratio = num / den
                lead = f"This is a composition claim: express {subj} as a percentage of {ofwhat}."
                body = ratio_pct_body(
                    f"{subj} share of {ofwhat} = {subj} ÷ {ofwhat}",
                    "Share",
                    subj,
                    ofwhat,
                    num,
                    den,
                    ratio,
                    f"Threshold: {which} than {th:g}%. Actual {pct(ratio)}%.",
                    truth,
                    f"actual share {pct(ratio)}% matches '{which} than {th:g}%'",
                    f"actual share {pct(ratio)}% does not match '{which} than {th:g}%'",
                )
                return wrap(truth, lead, body)

    # Current ratio
    m = re.match(r"The current ratio (exceeds|is below|is exactly) (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        verb, th = m.group(1).lower(), float(m.group(2))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            cr = bs["ca"] / bs["cl"]
            lead = (
                "The current ratio is the standard liquidity cover of current assets "
                "over current liabilities."
            )
            inv, recv, cash = bs.get("inventory", 0), bs.get("receivables", 0), bs.get("cash", 0)
            pay, od = bs.get("payables", 0), bs.get("overdraft", 0)
            body = f"""Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = {fmt(inv)} + {fmt(recv)} + {fmt(cash)} = {fmt(bs['ca'])}
$$

$$
CL = {fmt(pay)} + {fmt(od)} = {fmt(bs['cl'])}
$$

$$
\\text{{Current ratio}} = \\frac{{{fmt(bs['ca'])}}}{{{fmt(bs['cl'])}}} = {cr:.4f}
$$

Claimed: {verb} {th:g}. Actual {cr:.2f}.

{interp(truth, f"actual current ratio {cr:.2f} versus '{verb} {th:g}'")}"""
            return wrap(truth, lead, body)

    m = re.match(r"The current ratio in Year ([12]) is exactly (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m and (y1 or y2):
        yr, th = int(m.group(1)), float(m.group(2))
        bs = y1 if yr == 1 else y2
        cr = bs["cr"]
        lead = f"Year {yr} current ratio uses that year's current assets and current liabilities."
        body = f"""Name the identity in words: current ratio = current assets ÷ current liabilities.

$$
CA_{{Y{yr}}} = {fmt(bs['ca'])}, \\quad CL_{{Y{yr}}} = {fmt(bs['cl'])}
$$

$$
\\frac{{{fmt(bs['ca'])}}}{{{fmt(bs['cl'])}}} = {cr:.4f}
$$

Claimed exactly {th:.2f}. Actual {cr:.2f}.

{interp(truth, f"actual {cr:.2f} {'equals' if abs(cr-th)<0.005 else 'does not equal'} the claimed {th:.2f}")}"""
        return wrap(truth, lead, body)

    m = re.match(
        r"Current liabilities are covered by current assets less than (\d+(?:\.\d+)?) times over in Year ([12])\.?$",
        stmt,
        re.I,
    )
    if m and (y1 or y2):
        th, yr = float(m.group(1)), int(m.group(2))
        bs = y1 if yr == 1 else y2
        cr = bs["cr"]
        lead = f"This is the Year {yr} current ratio read as coverage of current liabilities."
        body = f"""Name the identity in words: coverage = current assets ÷ current liabilities.

$$
\\frac{{{fmt(bs['ca'])}}}{{{fmt(bs['cl'])}}} = {cr:.4f}
$$

Threshold: less than {th:g}. Actual {cr:.2f}.

{interp(truth, f"actual coverage {cr:.2f} is {'less than' if cr < th else 'not less than'} {th:g}")}"""
        return wrap(truth, lead, body)

    m = re.match(r"The (equity|debt) ratio (is below|exceeds) (\d+(?:\.\d+)?)%\.?$", stmt, re.I)
    if m:
        kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
        bs = amt if amt.get("assets") else (y2 or y1)
        if bs and bs.get("assets"):
            num = bs["equity"] if kind == "equity" else bs["liab"]
            ratio = num / bs["assets"]
            lead = (
                f"The {kind} ratio places {kind} against total assets so the financing "
                "structure can be judged on one balance sheet."
            )
            body = ratio_pct_body(
                f"{kind} ratio = {kind} ÷ total assets",
                kind.title()[0] + "R",
                kind,
                "total assets",
                num,
                bs["assets"],
                ratio,
                f"Claimed: {verb} {th:g}%. Actual {pct(ratio)}%.",
                truth,
                f"actual {kind} ratio {pct(ratio)}% matches '{verb} {th:g}%'",
                f"actual {kind} ratio {pct(ratio)}% does not match '{verb} {th:g}%'",
            )
            return wrap(truth, lead, body)

    m = re.match(
        r"After excluding inventory, the remaining current assets still cover current liabilities more than (\d+(?:\.\d+)?) times over\.?$",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            acid = (bs["ca"] - bs["inventory"]) / bs["cl"]
            lead = (
                "The acid-test (quick) ratio is a stricter liquidity test: inventory is "
                "removed from current assets before dividing by current liabilities."
            )
            body = f"""Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = {fmt(bs['ca'])}, \\quad \\text{{Inventory}} = {fmt(bs['inventory'])}, \\quad CL = {fmt(bs['cl'])}
$$

$$
CA - \\text{{Inventory}} = {fmt(bs['ca'])} - {fmt(bs['inventory'])} = {fmt(bs['ca'] - bs['inventory'])}
$$

$$
\\text{{Acid-test}} = \\frac{{{fmt(bs['ca'] - bs['inventory'])}}}{{{fmt(bs['cl'])}}} = {acid:.4f}
$$

Threshold: more than {th:g}. Actual {acid:.2f}.

{interp(truth, f"acid-test {acid:.2f} is {'more than' if acid > th else 'not more than'} {th:g}")}"""
            return wrap(truth, lead, body)

    m = re.match(r"The acid-test ratio exceeds (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            acid = (bs["ca"] - bs["inventory"]) / bs["cl"]
            lead = (
                "The acid-test ratio excludes inventory from current assets, then divides "
                "by current liabilities."
            )
            body = f"""Name the identity in words: acid-test = (current assets − inventory) ÷ current liabilities.

$$
\\frac{{{fmt(bs['ca'])} - {fmt(bs['inventory'])}}}{{{fmt(bs['cl'])}}} = {acid:.4f}
$$

Threshold: exceeds {th:g}. Actual {acid:.2f}.

{interp(truth, f"acid-test {acid:.2f} {'exceeds' if acid > th else 'does not exceed'} {th:g}")}"""
            return wrap(truth, lead, body)

    # Working capital
    if "working capital" in sl and (amt or y1 or y2):
        if "doubled" in sl and y1 and y2:
            lead = (
                "Working capital each year is current assets minus current liabilities; "
                "doubling compares Year 2 with twice Year 1."
            )
            body = f"""Name the identity in words: working capital = current assets − current liabilities.

$$
WC_{{Y1}} = {fmt(y1['ca'])} - {fmt(y1['cl'])} = {fmt(y1['wc'])}
$$

$$
WC_{{Y2}} = {fmt(y2['ca'])} - {fmt(y2['cl'])} = {fmt(y2['wc'])}
$$

$$
2 \\times WC_{{Y1}} = {fmt(2 * y1['wc'])}
$$

Doubling requires $WC_{{Y2}} \\ge {fmt(2 * y1['wc'])}$. Actual Year-2 WC is {fmt(y2['wc'])}.

{interp(truth, f"Year-2 WC {fmt(y2['wc'])} {'meets' if y2['wc'] >= 2*y1['wc'] else 'does not meet'} the doubling test against {fmt(2*y1['wc'])}")}"""
            return wrap(truth, lead, body)
        if "turned positive" in sl and y1 and y2:
            lead = (
                "Working capital turns positive when current assets exceed current "
                "liabilities after having been non-positive."
            )
            body = f"""Name the identity in words: working capital = current assets − current liabilities.

$$
WC_{{Y1}} = {fmt(y1['ca'])} - {fmt(y1['cl'])} = {fmt(y1['wc'])}
$$

$$
WC_{{Y2}} = {fmt(y2['ca'])} - {fmt(y2['cl'])} = {fmt(y2['wc'])}
$$

Year 1 is {"non-positive" if y1['wc'] <= 0 else "already positive"}; Year 2 is {"positive" if y2['wc'] > 0 else "not positive"}.

{interp(truth, f"WC moves from {fmt(y1['wc'])} to {fmt(y2['wc'])}, which {'fits' if (y1['wc'] <= 0 < y2['wc']) else 'does not fit'} 'turned positive'")}"""
            return wrap(truth, lead, body)
        bs = amt if amt.get("ca") else (y2 or y1)
        if bs:
            lead = (
                "Working capital is the euro surplus (or deficit) of current assets over "
                "current liabilities on this balance sheet."
            )
            # Try to match claimed WC amount in statement
            claimed_m = re.search(r"€\s*([\d,]+)\s*thousand", stmt)
            claimed = claimed_m.group(1).replace(",", "") if claimed_m else None
            body = f"""Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total {fmt(bs['ca'])} and current liabilities total {fmt(bs['cl'])}:

$$
WC = CA - CL
$$

$$
CA = {fmt(bs['ca'])}, \\quad CL = {fmt(bs['cl'])}
$$

$$
WC = {fmt(bs['ca'])} - {fmt(bs['cl'])} = {fmt(bs['wc'])}
$$

{"The statement cites working capital of €" + claimed + " thousand and that it is positive. " if claimed else ""}Calculated WC is {fmt(bs['wc'])}, which is {"positive" if bs['wc'] > 0 else "not positive"}.

{interp(truth, f"WC = {fmt(bs['wc'])} {'is positive as claimed' if bs['wc'] > 0 else 'is not positive'}")}"""
            return wrap(truth, lead, body)

    if "retained earnings grew faster than total equity" in sl and y1 and y2:
        rg = growth(y1["retained"], y2["retained"])
        eg = growth(y1["equity"], y2["equity"])
        lead = (
            "Compare percentage growth in retained earnings with percentage growth in "
            "total equity over the same two years."
        )
        body = f"""Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\\text{{RE}}_{{\\text{{Y1}}}} = {fmt(y1['retained'])}, \\quad \\text{{RE}}_{{\\text{{Y2}}}} = {fmt(y2['retained'])}
$$

$$
\\text{{RE growth}} = {pct(rg)}\\%
$$

$$
\\text{{Equity}}_{{\\text{{Y1}}}} = {fmt(y1['equity'])}, \\quad \\text{{Equity}}_{{\\text{{Y2}}}} = {fmt(y2['equity'])}
$$

$$
\\text{{Equity growth}} = {pct(eg)}\\%
$$

{interp(truth, f"RE growth {pct(rg)}% {'exceeds' if rg > eg else 'does not exceed'} equity growth {pct(eg)}%")}"""
        return wrap(truth, lead, body)

    m = re.search(
        r"total equity increased by exactly €([\d,]+) thousand from Year 1 to Year 2",
        stmt,
        re.I,
    )
    if m and y1 and y2:
        claimed = float(m.group(1).replace(",", ""))
        inc = y2["equity"] - y1["equity"]
        lead = (
            "With share capital unchanged, the euro increase in total equity equals the "
            "change in retained earnings."
        )
        body = f"""Name the identity in words: Δ equity = Year-2 equity − Year-1 equity.

$$
\\text{{Equity}}_{{\\text{{Y1}}}} = {fmt(y1['equity'])}, \\quad \\text{{Equity}}_{{\\text{{Y2}}}} = {fmt(y2['equity'])}
$$

$$
\\Delta Equity = {fmt(y2['equity'])} - {fmt(y1['equity'])} = {fmt(inc)}
$$

Claimed exactly €{fmt(claimed)} thousand. Actual €{fmt(inc)} thousand.

{interp(truth, f"the increase is €{fmt(inc)} thousand versus claimed €{fmt(claimed)} thousand")}"""
        return wrap(truth, lead, body)

    # Shares / market
    if months:
        prices = [x["price"] for x in months]
        vols = [x["vol"] for x in months]
        start, end = prices[0], prices[-1]
        max_p, min_p = max(prices), min(prices)
        max_vol = max(vols)
        rise = (end - start) / start if start else float("nan")
        shares = amt_raw.get("shares outstanding")
        op_res = amt_raw.get("operating result (€ thousands)") or amt_raw.get("operating result")
        total_vol = amt_raw.get("total shares traded (six months)") or sum(vols)

        m = re.match(
            r"The closing share price rose by more than (\d+(?:\.\d+)?)% from first to last month\.?$",
            stmt,
            re.I,
        )
        if m:
            th = float(m.group(1))
            lead = (
                "Price appreciation from the first listed month to the last is a simple "
                "percentage change on the closing prices."
            )
            body = f"""Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{{\\text{{first}}}} = {fmt(start)}, \\quad P_{{\\text{{last}}}} = {fmt(end)}
$$

$$
\\frac{{{fmt(end)} - {fmt(start)}}}{{{fmt(start)}}} = {pct(rise)}\\%
$$

Threshold: more than {th:g}%. Actual {pct(rise)}%.

{interp(truth, f"the rise is {pct(rise)}%, which {'exceeds' if rise*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

        m = re.match(
            r"Market capitalisation at the last month exceeds €(\d+(?:\.\d+)?) million\.?$",
            stmt,
            re.I,
        )
        if m and shares:
            th = float(m.group(1))
            mcap = end * shares / 1_000_000
            lead = (
                "Market capitalisation values the equity at the latest closing price times "
                "shares outstanding."
            )
            body = f"""Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{{\\text{{last}}}} = {fmt(end)}, \\quad \\text{{Shares}} = {fmt(shares)}
$$

$$
\\text{{MCap}} = {fmt(end)} \\times {fmt(shares)} = €{mcap:.2f}\\text{{ million}}
$$

Threshold: exceeds €{th:g} million. Actual €{mcap:.2f} million.

{interp(truth, f"market cap €{mcap:.2f}m {'exceeds' if mcap > th else 'does not exceed'} €{th:g}m")}"""
            return wrap(truth, lead, body)

        m = re.match(
            r"Market capitalisation rose by more than (\d+(?:\.\d+)?)% over the period\.?$",
            stmt,
            re.I,
        )
        if m and shares:
            th = float(m.group(1))
            m0, m1 = start * shares / 1e6, end * shares / 1e6
            g = (m1 - m0) / m0
            lead = (
                "With shares outstanding unchanged, market-cap growth equals the percentage "
                "change in the share price between first and last month."
            )
            body = f"""Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\\text{{MCap}}_{{\\text{{first}}}} = {fmt(start)} \\times {fmt(shares)} = €{m0:.2f}\\text{{m}}
$$

$$
\\text{{MCap}}_{{\\text{{last}}}} = {fmt(end)} \\times {fmt(shares)} = €{m1:.2f}\\text{{m}}
$$

$$
\\frac{{{m1:.2f} - {m0:.2f}}}{{{m0:.2f}}} = {pct(g)}\\%
$$

Threshold: more than {th:g}%. Actual {pct(g)}%.

{interp(truth, f"MCap rose {pct(g)}%, which {'exceeds' if g*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

        m = re.match(r"Earnings per share exceeds €(\d+(?:\.\d+)?)\.?$", stmt, re.I)
        if m and shares and op_res is not None:
            th = float(m.group(1))
            eps = op_res / (shares / 1000)
            lead = (
                "EPS here links the operating result (in € thousands) to shares outstanding "
                "(scaled to thousands of shares)."
            )
            body = f"""Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\\text{{Operating result}} = {fmt(op_res)}, \\quad \\frac{{\\text{{Shares}}}}{{1,000}} = {fmt(shares / 1000)}
$$

$$
EPS = \\frac{{{fmt(op_res)}}}{{{fmt(shares / 1000)}}} = €{eps:.4f}
$$

Threshold: exceeds €{th:g}. Actual ≈ €{eps:.2f}.

{interp(truth, f"EPS €{eps:.2f} {'exceeds' if eps > th else 'does not exceed'} €{th:g}")}"""
            return wrap(truth, lead, body)

        m = re.match(
            r"Highest closing price is more than (\d+(?:\.\d+)?)% above the lowest\.?$",
            stmt,
            re.I,
        )
        if m:
            th = float(m.group(1))
            spread = (max_p - min_p) / min_p
            lead = (
                "The high–low gap is the percentage by which the peak closing price exceeds "
                "the trough closing price in the table."
            )
            body = f"""Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{{\\max}} = {fmt(max_p)}, \\quad P_{{\\min}} = {fmt(min_p)}
$$

$$
\\frac{{{fmt(max_p)} - {fmt(min_p)}}}{{{fmt(min_p)}}} = {pct(spread)}\\%
$$

Threshold: more than {th:g}%. Actual {pct(spread)}%.

{interp(truth, f"the gap is {pct(spread)}%, which {'exceeds' if spread*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

        m = re.match(
            r"Total shares traded over six months exceed (\d+(?:\.\d+)?)% of shares outstanding\.?$",
            stmt,
            re.I,
        )
        if m and shares:
            th = float(m.group(1))
            turn = total_vol / shares
            lead = (
                "Six-month share turnover compares cumulative volume traded with the number "
                "of shares outstanding."
            )
            body = f"""Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\\text{{Volume}} = {fmt(total_vol)}, \\quad \\text{{Shares}} = {fmt(shares)}
$$

$$
\\frac{{{fmt(total_vol)}}}{{{fmt(shares)}}} = {pct(turn)}\\%
$$

Threshold: exceed {th:g}%. Actual {pct(turn)}%.

{interp(truth, f"turnover {pct(turn)}% {'exceeds' if turn*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

        m = re.match(r"Peak monthly share turnover exceeds ([\d,]+) shares\.?$", stmt, re.I)
        if m:
            th = float(m.group(1).replace(",", ""))
            peak_month = months[vols.index(max_vol)]["month"]
            lead = (
                "Peak monthly turnover is simply the largest shares-traded figure among the "
                "months in the table."
            )
            body = f"""Scan each month's volume and take the maximum.

$$
\\text{{Peak volume}} = {fmt(max_vol)} \\quad ({peak_month})
$$

Threshold: exceeds {fmt(th)}. Actual {fmt(max_vol)}.

{interp(truth, f"peak volume {fmt(max_vol)} {'exceeds' if max_vol > th else 'does not exceed'} {fmt(th)}")}"""
            return wrap(truth, lead, body)

        if "share turnover peaked in the same month as the highest closing price" in sl:
            ip, iv = prices.index(max_p), vols.index(max_vol)
            lead = (
                "Compare the month that records the highest closing price with the month "
                "that records the highest volume."
            )
            body = f"""$$
\\text{{Peak price month}} = {months[ip]['month']} \\ (€{fmt(max_p)})
$$

$$
\\text{{Peak volume month}} = {months[iv]['month']} \\ ({fmt(max_vol)}\\ \\text{{shares}})
$$

These months {"are the same" if ip == iv else "differ"}.

{interp(truth, f"peak price and peak volume months {'coincide' if ip == iv else 'do not coincide'}")}"""
            return wrap(truth, lead, body)

        if "closing price rose in more than half of the month-to-month steps" in sl:
            rising = sum(1 for i in range(1, len(prices)) if prices[i] > prices[i - 1])
            steps = len(prices) - 1
            lead = (
                "Count how many consecutive month pairs show a higher closing price, then "
                "compare with half of the steps."
            )
            body = f"""There are {steps} month-to-month steps in the table.

$$
\\text{{Upward steps}} = {rising}
$$

More than half of {steps} requires more than {steps / 2:g} upward steps. Actual upward steps: {rising}.

{interp(truth, f"{rising} upward steps {'exceed' if rising > steps/2 else 'do not exceed'} half of {steps}")}"""
            return wrap(truth, lead, body)

        if "last closing price is below the first" in sl:
            lead = "Compare the first and last closing prices directly."
            body = f"""$$
P_{{\\text{{first}}}} = {fmt(start)}
$$

$$
P_{{\\text{{last}}}} = {fmt(end)}
$$

Last is {"below" if end < start else "not below"} first.

{interp(truth, f"last {fmt(end)} {'is below' if end < start else 'is not below'} first {fmt(start)}")}"""
            return wrap(truth, lead, body)

        m = re.match(r"Shares outstanding equal ([\d,]+)\.?$", stmt, re.I)
        if m and shares is not None:
            claimed = float(m.group(1).replace(",", ""))
            lead = "Shares outstanding are read from the annual figures attached to the price table."
            body = f"""$$
\\text{{Shares outstanding}} = {fmt(shares)}
$$

The statement claims {fmt(claimed)}.

{interp(truth, f"extract reports {fmt(shares)} versus claimed {fmt(claimed)}")}"""
            return wrap(truth, lead, body)

        m = re.match(r"Operating result is below €([\d,]+) thousand\.?$", stmt, re.I)
        if m and op_res is not None:
            th = float(m.group(1).replace(",", ""))
            lead = "Operating result is taken from the annual figures beside the share table."
            body = f"""$$
\\text{{Operating result}} = €{fmt(op_res)}\\text{{ thousand}}
$$

Threshold: below €{fmt(th)} thousand.

{interp(truth, f"operating result €{fmt(op_res)}k is {'below' if op_res < th else 'not below'} €{fmt(th)}k")}"""
            return wrap(truth, lead, body)

    # Activity / turnover
    if amt_raw and any(
        k in sl
        for k in (
            "asset turnover",
            "inventory turnover",
            "receivables turnover",
            "trade receivables turnover",
            "remains outstanding",
            "collection",
            "cost of sales amounts",
            "revenue exceeds",
            "total assets grew during",
            "trade receivables grew",
            "inventory grew by more than",
            "average inventory make",
        )
    ):
        rev, cos = amt_raw.get("revenue"), amt_raw.get("cost of sales")
        a0 = amt_raw.get("total assets at the beginning of the year")
        a1 = amt_raw.get("total assets at the end of the year")
        i0 = amt_raw.get("inventory at the beginning of the year")
        i1 = amt_raw.get("inventory at the end of the year")
        r0 = amt_raw.get("trade receivables at the beginning of the year")
        r1 = amt_raw.get("trade receivables at the end of the year")

        if rev and a0 and a1 and "asset turnover" in sl:
            avg_a = (a0 + a1) / 2
            at = rev / avg_a
            m = re.search(r"is (above|exactly) (\d+(?:\.\d+)?)", stmt, re.I)
            if m:
                th = float(m.group(2))
                lead = (
                    "Asset turnover shows how many times revenue covers average total assets "
                    "over the year."
                )
                body = f"""Name the identity in words: asset turnover = revenue ÷ average total assets.

$$
\\text{{Avg assets}} = \\frac{{{fmt(a0)} + {fmt(a1)}}}{{2}} = {fmt(avg_a)}
$$

$$
AT = \\frac{{{fmt(rev)}}}{{{fmt(avg_a)}}} = {at:.4f}
$$

Claimed {m.group(1)} {th:g}. Actual {at:.2f}.

{interp(truth, f"asset turnover {at:.2f} versus '{m.group(1)} {th:g}'")}"""
                return wrap(truth, lead, body)

        if cos and i0 and i1 and "inventory turnover" in sl:
            avg_i = (i0 + i1) / 2
            it = cos / avg_i
            if "with inventory turnover of about" in sl:
                lead = (
                    "Inventory turnover = cost of sales ÷ average inventory; a higher figure "
                    "means stock moves faster and ties up less cash."
                )
                body = f"""Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\\text{{Avg inventory}} = \\frac{{{fmt(i0)} + {fmt(i1)}}}{{2}} = {fmt(avg_i)}
$$

$$
IT = \\frac{{{fmt(cos)}}}{{{fmt(avg_i)}}} = {it:.2f}
$$

That reading matches the definition used in the claim.

{interp(truth, f"inventory turnover is about {it:.2f}, consistent with the stated interpretation")}"""
                return wrap(truth, lead, body)
            m = re.search(r"is (below|exactly) (\d+(?:\.\d+)?)", stmt, re.I)
            if m:
                th = float(m.group(2))
                lead = "Inventory turnover relates cost of sales to average inventory held."
                body = f"""Name the identity in words: inventory turnover = cost of sales ÷ average inventory.

$$
\\text{{Avg inventory}} = \\frac{{{fmt(i0)} + {fmt(i1)}}}{{2}} = {fmt(avg_i)}
$$

$$
IT = \\frac{{{fmt(cos)}}}{{{fmt(avg_i)}}} = {it:.4f}
$$

Claimed {m.group(1)} {th:g}. Actual {it:.2f}.

{interp(truth, f"inventory turnover {it:.2f} versus '{m.group(1)} {th:g}'")}"""
                return wrap(truth, lead, body)

        if rev and r0 and r1:
            avg_r = (r0 + r1) / 2
            rt = rev / avg_r
            if "trade receivables turnover" in sl or "receivables turnover" in sl:
                m = re.search(r"exceeds (\d+(?:\.\d+)?)", stmt, re.I)
                if m:
                    th = float(m.group(1))
                    lead = (
                        "Receivables turnover shows how many times revenue covers average "
                        "trade receivables."
                    )
                    body = f"""Name the identity in words: receivables turnover = revenue ÷ average trade receivables.

$$
\\text{{Avg receivables}} = \\frac{{{fmt(r0)} + {fmt(r1)}}}{{2}} = {fmt(avg_r)}
$$

$$
RT = \\frac{{{fmt(rev)}}}{{{fmt(avg_r)}}} = {rt:.4f}
$$

Threshold: exceeds {th:g}. Actual {rt:.2f}.

{interp(truth, f"receivables turnover {rt:.2f} {'exceeds' if rt > th else 'does not exceed'} {th:g}")}"""
                    return wrap(truth, lead, body)
            m = re.search(r"more than (\d+) days", stmt, re.I)
            if m and "receivable" in sl:
                th = float(m.group(1))
                days = 365 / rt
                lead = (
                    "Collection days convert receivables turnover into an approximate "
                    "outstanding period."
                )
                body = f"""Name the identity in words: collection days ≈ 365 ÷ receivables turnover.

$$
RT = \\frac{{{fmt(rev)}}}{{{fmt(avg_r)}}} = {rt:.4f}
$$

$$
\\text{{Days}} = \\frac{{365}}{{{rt:.4f}}} = {days:.1f}
$$

Threshold: more than {th:g} days. Actual {days:.0f} days.

{interp(truth, f"collection days {days:.0f} {'exceed' if days > th else 'do not exceed'} {th:g}")}"""
                return wrap(truth, lead, body)
            if "inventory turnover is higher than trade receivables turnover" in sl and cos and i0 and i1:
                it = cos / ((i0 + i1) / 2)
                lead = "Compare the two activity ratios computed from the same extract."
                body = f"""$$
IT = {it:.4f}
$$

$$
RT = {rt:.4f}
$$

Inventory turnover is {"higher" if it > rt else "not higher"} than receivables turnover.

{interp(truth, f"IT {it:.2f} {'>' if it > rt else '≤'} RT {rt:.2f}")}"""
                return wrap(truth, lead, body)

        m = re.search(r"trade receivables grew by more than (\d+(?:\.\d+)?)%", stmt, re.I)
        if m and r0 and r1:
            th = float(m.group(1))
            g = growth(r0, r1)
            lead = "Receivables growth compares ending with beginning trade receivables."
            body = f"""Name the identity in words: growth = (ending − beginning) ÷ beginning.

$$
R_{{0}} = {fmt(r0)}, \\quad R_{{1}} = {fmt(r1)}
$$

$$
\\frac{{{fmt(r1)} - {fmt(r0)}}}{{{fmt(r0)}}} = {pct(g)}\\%
$$

Threshold: more than {th:g}%. Actual {pct(g)}%.

{interp(truth, f"growth {pct(g)}% {'exceeds' if g*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

        if "total assets grew during the year" in sl and a0 and a1:
            lead = "Compare beginning and ending total assets on the extract."
            body = f"""$$
\\text{{Assets}}_{{\\text{{begin}}}} = {fmt(a0)}
$$

$$
\\text{{Assets}}_{{\\text{{end}}}} = {fmt(a1)}
$$

Assets {"grew" if a1 > a0 else "did not grow"} during the year.

{interp(truth, f"assets move from {fmt(a0)} to {fmt(a1)}")}"""
            return wrap(truth, lead, body)

        m = re.search(r"cost of sales amounts to more than (\d+(?:\.\d+)?)% of revenue", stmt, re.I)
        if m and cos and rev:
            th = float(m.group(1))
            ratio = cos / rev
            lead = "Cost of sales as a share of revenue is the COS-to-revenue ratio."
            body = ratio_pct_body(
                "COS share = cost of sales ÷ revenue",
                "COS\\%",
                "cost of sales",
                "revenue",
                cos,
                rev,
                ratio,
                f"Threshold: more than {th:g}%. Actual {pct(ratio)}%.",
                truth,
                f"COS share {pct(ratio)}% exceeds {th:g}%",
                f"COS share {pct(ratio)}% does not exceed {th:g}%",
            )
            return wrap(truth, lead, body)

        m = re.search(r"revenue exceeds €([\d,]+) thousand", stmt, re.I)
        if m and rev:
            th = float(m.group(1).replace(",", ""))
            lead = "Revenue is read directly from the extract and compared with the stated threshold."
            body = f"""$$
\\text{{Revenue}} = €{fmt(rev)}\\text{{ thousand}}
$$

Threshold: exceeds €{fmt(th)} thousand.

{interp(truth, f"revenue €{fmt(rev)}k {'exceeds' if rev > th else 'does not exceed'} €{fmt(th)}k")}"""
            return wrap(truth, lead, body)

        m = re.search(r"inventory grew by more than (\d+(?:\.\d+)?)%", stmt, re.I)
        if m and i0 and i1 and "year 1" not in sl:
            th = float(m.group(1))
            g = growth(i0, i1)
            lead = "Inventory growth compares ending inventory with beginning inventory."
            body = f"""Name the identity in words: growth = (ending − beginning) ÷ beginning.

$$
I_{{0}} = {fmt(i0)}, \\quad I_{{1}} = {fmt(i1)}
$$

$$
\\frac{{{fmt(i1)} - {fmt(i0)}}}{{{fmt(i0)}}} = {pct(g)}\\%
$$

Threshold: more than {th:g}%. Actual {pct(g)}%.

{interp(truth, f"inventory growth {pct(g)}% {'exceeds' if g*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

    # P&L ratios
    if tables["y1"] and tables["y2"] and "revenue" in tables["y1"] and any(
        k in sl
        for k in (
            "gross profit",
            "operating margin",
            "finance costs",
            "effective tax",
            "covers finance",
            "operating result covers",
        )
    ):
        p1, p2 = tables["y1"], tables["y2"]
        m = re.search(
            r"gross profit margin.*?more than (\d+(?:\.\d+)?) percentage points higher in Year 2 than in Year 1",
            stmt,
            re.I,
        )
        if m:
            th = float(m.group(1))
            g1 = p1["gross profit"] / p1["revenue"]
            g2 = p2["gross profit"] / p2["revenue"]
            delta = (g2 - g1) * 100
            lead = (
                "Gross margin is gross profit divided by revenue; the claim compares the "
                "Year-2 margin with Year 1 in percentage points."
            )
            body = f"""Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{{1}} = \\frac{{{fmt(p1['gross profit'])}}}{{{fmt(p1['revenue'])}}} = {pct(g1)}\\%
$$

$$
GPM_{{2}} = \\frac{{{fmt(p2['gross profit'])}}}{{{fmt(p2['revenue'])}}} = {pct(g2)}\\%
$$

$$
\\Delta = {delta:.1f}\\text{{ percentage points}}
$$

Threshold: more than {th:g} pp higher in Year 2. Actual Δ = {delta:.1f} pp.

{interp(truth, f"margin rose by {delta:.1f} pp versus more than {th:g} pp")}"""
            return wrap(truth, lead, body)

        m = re.search(r"operating margin.*?exceeds (\d+(?:\.\d+)?)% in Year ([12])", stmt, re.I)
        if m:
            th, yr = float(m.group(1)), int(m.group(2))
            p = p1 if yr == 1 else p2
            om = p["operating result"] / p["revenue"]
            lead = f"Operating margin in Year {yr} is operating result divided by revenue."
            body = ratio_pct_body(
                "operating margin = operating result ÷ revenue",
                "OM",
                "operating result",
                "revenue",
                p["operating result"],
                p["revenue"],
                om,
                f"Threshold: exceeds {th:g}% in Year {yr}. Actual {pct(om)}%.",
                truth,
                f"operating margin {pct(om)}% exceeds {th:g}%",
                f"operating margin {pct(om)}% does not exceed {th:g}%",
            )
            return wrap(truth, lead, body)

        m = re.search(
            r"operating result covers finance costs more than (\d+(?:\.\d+)?) times over in Year ([12])",
            stmt,
            re.I,
        )
        if m:
            th, yr = float(m.group(1)), int(m.group(2))
            p = p1 if yr == 1 else p2
            opv, fc = p["operating result"], abs(p["finance costs"])
            cov = opv / fc
            lead = f"Interest coverage in Year {yr} is operating result divided by finance costs."
            body = ratio_x_body(
                "interest coverage = operating result ÷ finance costs",
                "Coverage",
                "operating result",
                "finance costs",
                opv,
                fc,
                cov,
                f"Threshold: more than {th:g}. Actual {cov:.2f}.",
                truth,
                f"coverage {cov:.2f} exceeds {th:g}",
                f"coverage {cov:.2f} does not exceed {th:g}",
            )
            return wrap(truth, lead, body)

        m = re.search(
            r"finance costs grew by more than (\d+(?:\.\d+)?)% between Year 1 and Year 2, outpacing the growth in the operating result",
            stmt,
            re.I,
        )
        if m:
            th = float(m.group(1))
            fg = growth(abs(p1["finance costs"]), abs(p2["finance costs"]))
            og = growth(p1["operating result"], p2["operating result"])
            lead = (
                "Compare finance-cost growth with operating-result growth; the claim needs "
                "both a finance-cost rise above the threshold and outpacing of operating result."
            )
            body = f"""Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\\text{{FC growth}} = {pct(fg)}\\%
$$

$$
\\text{{OR growth}} = {pct(og)}\\%
$$

Finance costs {"did" if fg * 100 > th else "did not"} grow by more than {th:g}%; they {"do" if fg > og else "do not"} outpace operating result.

{interp(truth, f"FC growth {pct(fg)}% vs threshold {th:g}% and OR growth {pct(og)}%")}"""
            return wrap(truth, lead, body)

        m = re.search(r"effective tax rate.*?below (\d+(?:\.\d+)?)% in Year ([12])", stmt, re.I)
        if m:
            th, yr = float(m.group(1)), int(m.group(2))
            p = p1 if yr == 1 else p2
            etr = abs(p["income taxes"]) / p["profit before tax"]
            lead = f"Effective tax rate in Year {yr} is income taxes divided by profit before tax."
            body = ratio_pct_body(
                "effective tax rate = income taxes ÷ profit before tax",
                "ETR",
                "income taxes",
                "profit before tax",
                abs(p["income taxes"]),
                p["profit before tax"],
                etr,
                f"Threshold: below {th:g}% in Year {yr}. Actual {pct(etr)}%.",
                truth,
                f"ETR {pct(etr)}% is below {th:g}%",
                f"ETR {pct(etr)}% is not below {th:g}%",
            )
            return wrap(truth, lead, body)

        m = re.search(
            r"effective tax rate rose by more than (\d+(?:\.\d+)?) percentage points",
            stmt,
            re.I,
        )
        if m:
            th = float(m.group(1))
            t1 = abs(p1["income taxes"]) / p1["profit before tax"]
            t2 = abs(p2["income taxes"]) / p2["profit before tax"]
            delta = (t2 - t1) * 100
            lead = "Compute each year's effective tax rate, then the change in percentage points."
            body = f"""Name the identity in words: ETR = income taxes ÷ profit before tax; Δ = ETR₂ − ETR₁.

$$
ETR_{{1}} = {pct(t1)}\\%
$$

$$
ETR_{{2}} = {pct(t2)}\\%
$$

$$
\\Delta = {delta:+.1f}\\text{{ percentage points}}
$$

Threshold: rose by more than {th:g} pp. Actual {delta:+.1f} pp.

{interp(truth, f"ETR changed by {delta:+.1f} pp versus more than {th:g} pp")}"""
            return wrap(truth, lead, body)

    # Depreciation
    if any(k in sl for k in ("depreciat", "carrying value", "written down", "residual value", "useful life")):
        assets = parse_dep(tables["raw"])
        if assets:
            ann = {k: (a["cost"] - a["resid"]) / a["life"] for k, a in assets.items()}
            mach = truck = comp = None
            for k in assets:
                lk = k.lower()
                if "machin" in lk or re.search(r"asset a\b", lk):
                    mach = k
                if "truck" in lk or "delivery" in lk or re.search(r"asset b\b", lk):
                    truck = k
                if "computer" in lk or re.search(r"asset c\b", lk):
                    comp = k
            keys = list(assets.keys())
            if mach is None and keys:
                mach = keys[0]
            if truck is None and len(keys) > 1:
                truck = keys[1]
            if comp is None and len(keys) > 2:
                comp = keys[2]

            m = re.search(r"combined annual depreciation for the three assets is €([\d,.]+)", stmt, re.I)
            if m and len(ann) >= 3:
                claimed = float(m.group(1).replace(",", ""))
                total = sum(ann.values())
                lead = (
                    "Straight-line annual charge for each asset is (cost − residual) ÷ useful "
                    "life; sum the three charges."
                )
                steps = "\n\n".join(
                    f"""$$
\\text{{{k}}}: \\frac{{{fmt(assets[k]['cost'])} - {fmt(assets[k]['resid'])}}}{{{fmt(assets[k]['life'])}}} = {fmt(round(v))}
$$"""
                    for k, v in ann.items()
                )
                body = f"""Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

{steps}

$$
\\text{{Combined}} = {fmt(round(total))}
$$

Claimed €{fmt(claimed)}. Actual ≈ €{fmt(round(total))}.

{interp(truth, f"combined charge ≈ €{fmt(round(total))} versus claimed €{fmt(claimed)}")}"""
                return wrap(truth, lead, body)

            m = re.search(r"after three years, the delivery truck's carrying value is €([\d,.]+)", stmt, re.I)
            if m and truck:
                claimed = float(m.group(1).replace(",", ""))
                a = assets[truck]
                bv = a["cost"] - 3 * ann[truck]
                lead = "Carrying value after three years subtracts three annual charges from cost."
                body = f"""Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\\text{{Annual charge}} = \\frac{{{fmt(a['cost'])} - {fmt(a['resid'])}}}{{{fmt(a['life'])}}} = {fmt(round(ann[truck]))}
$$

$$
BV_{{3}} = {fmt(a['cost'])} - 3 \\times {fmt(round(ann[truck]))} = {fmt(round(bv))}
$$

Claimed €{fmt(claimed)}. Actual ≈ €{fmt(round(bv))}.

{interp(truth, f"carrying value ≈ €{fmt(round(bv))} versus claimed €{fmt(claimed)}")}"""
                return wrap(truth, lead, body)

            m = re.search(
                r"after three years, the computer equipment, originally costing €([\d,.]+), is fully written down to nil",
                stmt,
                re.I,
            )
            if m and comp:
                a = assets[comp]
                lead = (
                    "With nil residual, the asset is fully written down once elapsed years "
                    "reach useful life."
                )
                body = f"""$$
\\text{{Cost}} = €{fmt(a['cost'])}, \\quad \\text{{Life}} = {fmt(a['life'])}\\text{{ years}}, \\quad \\text{{Residual}} = €{fmt(a['resid'])}
$$

After 3 years: {"fully written down to nil" if 3 >= a["life"] else "not yet fully written down"}.

{interp(truth, f"3 years {'≥' if 3 >= a['life'] else '<'} life {fmt(a['life'])} with residual {fmt(a['resid'])}")}"""
                return wrap(truth, lead, body)

            m = re.search(
                r"after three years, the combined carrying value of all three assets exceeds €([\d,.]+)",
                stmt,
                re.I,
            )
            if m and len(assets) >= 3:
                claimed = float(m.group(1).replace(",", ""))
                total_bv = 0.0
                steps = []
                for k, a in assets.items():
                    if 3 >= a["life"]:
                        bv = a["resid"]
                    else:
                        bv = a["cost"] - 3 * ann[k]
                    total_bv += bv
                    steps.append(
                        f"""$$
\\text{{{k}}}\\ BV_{{3}} = {fmt(round(bv))}
$$"""
                    )
                lead = (
                    "Sum each asset's carrying value after three years (floored at residual "
                    "once fully depreciated)."
                )
                body = f"""Name the identity in words: combined BV = sum of each asset's cost − min(3, life) × annual charge (at residual if fully depreciated).

{chr(10).join(steps)}

$$
\\text{{Combined BV}} \\approx €{fmt(round(total_bv))}
$$

Threshold: exceeds €{fmt(claimed)}.

{interp(truth, f"combined BV ≈ €{fmt(round(total_bv))} versus exceeds €{fmt(claimed)}")}"""
                return wrap(truth, lead, body)

            m = re.search(
                r"after three years, more than (\d+(?:\.\d+)?)% of the machinery's purchase price has been depreciated",
                stmt,
                re.I,
            )
            if m and mach:
                th = float(m.group(1))
                frac = (3 * ann[mach]) / assets[mach]["cost"]
                lead = "Depreciated share of machinery cost after three years is three charges over purchase price."
                body = f"""Name the identity in words: depreciated share = (3 × annual charge) ÷ cost.

$$
\\text{{Annual}} = {fmt(round(ann[mach]))}, \\quad \\text{{Cost}} = {fmt(assets[mach]['cost'])}
$$

$$
\\frac{{3 \\times {fmt(round(ann[mach]))}}}{{{fmt(assets[mach]['cost'])}}} = {pct(frac)}\\%
$$

Threshold: more than {th:g}%. Actual {pct(frac)}%.

{interp(truth, f"depreciated share {pct(frac)}% {'exceeds' if frac*100 > th else 'does not exceed'} {th:g}%")}"""
                return wrap(truth, lead, body)

            m = re.search(
                r"delivery truck's annual depreciation charge is more than (\d+(?:\.\d+)?)% higher than the computer",
                stmt,
                re.I,
            )
            if m and truck and comp:
                th = float(m.group(1))
                prem = (ann[truck] - ann[comp]) / ann[comp]
                lead = "Compare the truck's straight-line annual charge with the computer's."
                body = f"""$$
\\text{{Truck annual}} = {fmt(round(ann[truck]))}, \\quad \\text{{Computer annual}} = {fmt(round(ann[comp]))}
$$

$$
\\frac{{{fmt(round(ann[truck]))} - {fmt(round(ann[comp]))}}}{{{fmt(round(ann[comp]))}}} = {pct(prem)}\\%
$$

Threshold: more than {th:g}% higher. Actual premium {pct(prem)}%.

{interp(truth, f"premium {pct(prem)}% versus more than {th:g}%")}"""
                return wrap(truth, lead, body)

            m = re.search(
                r"machinery accounts for more than (\d+(?:\.\d+)?)% of the combined annual depreciation",
                stmt,
                re.I,
            )
            if m and mach:
                th = float(m.group(1))
                share = ann[mach] / sum(ann.values())
                lead = "Machinery's share of combined annual depreciation is its charge over the total of all charges."
                body = ratio_pct_body(
                    "machinery share = machinery annual charge ÷ combined annual charges",
                    "Share",
                    "machinery charge",
                    "combined charges",
                    ann[mach],
                    sum(ann.values()),
                    share,
                    f"Threshold: more than {th:g}%. Actual {pct(share)}%.",
                    truth,
                    f"share {pct(share)}% exceeds {th:g}%",
                    f"share {pct(share)}% does not exceed {th:g}%",
                )
                return wrap(truth, lead, body)

            m = re.search(r"machinery's annual depreciation charge is exactly €([\d,.]+)", stmt, re.I)
            if m and mach:
                claimed = float(m.group(1).replace(",", ""))
                a = assets[mach]
                lead = "Machinery annual charge under straight-line with nil residual is cost ÷ life."
                body = f"""Name the identity in words: annual charge = (cost − residual) ÷ life.

$$
\\frac{{{fmt(a['cost'])} - {fmt(a['resid'])}}}{{{fmt(a['life'])}}} = {fmt(round(ann[mach]))}
$$

Claimed exactly €{fmt(claimed)}. Actual ≈ €{fmt(round(ann[mach]))}.

{interp(truth, f"charge ≈ €{fmt(round(ann[mach]))} versus claimed €{fmt(claimed)}")}"""
                return wrap(truth, lead, body)

            m = re.search(
                r"asset a's annual depreciation charge is more than (\d+(?:\.\d+)?)% higher than asset b's",
                stmt,
                re.I,
            )
            if m and mach and truck:
                th = float(m.group(1))
                prem = (ann[mach] - ann[truck]) / ann[truck]
                lead = "Compare Asset A's and Asset B's straight-line annual charges."
                body = f"""$$
A = {fmt(round(ann[mach]))}, \\quad B = {fmt(round(ann[truck]))}
$$

$$
\\frac{{{fmt(round(ann[mach]))} - {fmt(round(ann[truck]))}}}{{{fmt(round(ann[truck]))}}} = {pct(prem)}\\%
$$

Threshold: more than {th:g}% higher. Actual premium {pct(prem)}%.

{interp(truth, f"premium {pct(prem)}% versus more than {th:g}%")}"""
                return wrap(truth, lead, body)

            # conceptual depreciation thins
            if "residual value" in sl and "ignored" in sl:
                return wrap(
                    truth,
                    "Straight-line depreciation uses cost minus residual value over useful life.",
                    "Name the identity in words: depreciable amount = cost − residual; annual charge = depreciable amount ÷ life.\n\n"
                    "Residual value is deducted before spreading. Claiming that residual value is ignored contradicts the straight-line rule.",
                )
            if "without recording depreciation" in sl and "overstated" in sl:
                return wrap(
                    truth,
                    "Depreciation writes assets down as their service potential is consumed.",
                    "If depreciation is omitted, non-current assets stay at historical cost and are overstated relative to the consumption of benefits already taken.",
                )
            if "same amount each year" in sl and "straight-line" in sl:
                return wrap(
                    truth,
                    "Straight-line spreads the depreciable amount evenly over useful life.",
                    "With a fixed (cost − residual) and fixed life, each year receives the same charge — cost ÷ life when residual is nil.",
                )
            if "charged directly against cash" in sl or ("cash payment" in sl and "depreciation" in sl):
                return wrap(
                    truth,
                    "Depreciation is a non-cash allocation of a past capital outlay.",
                    "The cash left when the asset was bought; the annual charge allocates that past outlay and does not require a fresh cash payment when recorded.",
                )
            if "shorter useful life" in sl and "higher annual" in sl:
                return wrap(
                    truth,
                    "Fewer years raise the annual straight-line charge for the same depreciable amount.",
                    "All else equal, shortening useful life increases (cost − residual) ÷ life.",
                )
            if "residual value reduces the amount" in sl:
                return wrap(
                    truth,
                    "Depreciable amount = cost − residual value.",
                    "A positive residual reduces what is spread over useful life, so annual charges are lower than if residual were nil.",
                )
            if "land is not subject to depreciation" in sl:
                return wrap(
                    truth,
                    "Land has an indefinite useful life and is not depreciated.",
                    "Unlike buildings and machinery, land does not wear out through ordinary use, so no systematic write-down is applied.",
                )
            if "fully written down to nil residual value at the end of its useful life" in sl:
                return wrap(
                    truth,
                    "Nil residual means carrying value reaches zero at the end of useful life.",
                    "Once the full cost has been allocated over the life, book value is nil when residual is nil.",
                )

    # Misc ratios
    m = re.match(
        r"Non-current assets exceed current assets by more than (\d+(?:\.\d+)?)% of current assets\.?$",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("nca") else (y2 or y1)
        if bs and bs.get("ca"):
            excess = (bs["nca"] - bs["ca"]) / bs["ca"]
            lead = "Express how far non-current assets exceed current assets as a percentage of current assets."
            body = f"""Name the identity in words: excess = (NCA − CA) ÷ CA.

$$
NCA = {fmt(bs['nca'])}, \\quad CA = {fmt(bs['ca'])}
$$

$$
\\frac{{{fmt(bs['nca'])} - {fmt(bs['ca'])}}}{{{fmt(bs['ca'])}}} = {pct(excess)}\\%
$$

Threshold: more than {th:g}%. Actual {pct(excess)}%.

{interp(truth, f"excess {pct(excess)}% {'exceeds' if excess*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

    m = re.match(
        r"Trade payables amount to more than (\d+(?:\.\d+)?)% of total current liabilities\.?$",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("payables") else (y2 or y1)
        if bs and bs.get("cl"):
            ratio = bs["payables"] / bs["cl"]
            lead = "Trade payables as a share of current liabilities is payables ÷ current liabilities."
            body = ratio_pct_body(
                "payables share = trade payables ÷ current liabilities",
                "Share",
                "trade payables",
                "current liabilities",
                bs["payables"],
                bs["cl"],
                ratio,
                f"Threshold: more than {th:g}%. Actual {pct(ratio)}%.",
                truth,
                f"share {pct(ratio)}% exceeds {th:g}%",
                f"share {pct(ratio)}% does not exceed {th:g}%",
            )
            return wrap(truth, lead, body)

    m = re.match(
        r"Non-current liabilities make up more than (\d+(?:\.\d+)?)% of total liabilities\.?$",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("ncl") else (y2 or y1)
        if bs and bs.get("liab"):
            ratio = bs["ncl"] / bs["liab"]
            lead = "Non-current liabilities as a share of total liabilities is NCL ÷ total liabilities."
            body = ratio_pct_body(
                "NCL share = non-current liabilities ÷ total liabilities",
                "Share",
                "non-current liabilities",
                "total liabilities",
                bs["ncl"],
                bs["liab"],
                ratio,
                f"Threshold: more than {th:g}%. Actual {pct(ratio)}%.",
                truth,
                f"share {pct(ratio)}% exceeds {th:g}%",
                f"share {pct(ratio)}% does not exceed {th:g}%",
            )
            return wrap(truth, lead, body)

    m = re.search(r"return on equity.*?exceeds (\d+(?:\.\d+)?)%", stmt, re.I)
    if m and amt_raw:
        th = float(m.group(1))
        opv = amt_raw.get("operating result") or amt_raw.get("operating result (€ thousands)")
        eq = amt_raw.get("total equity")
        if opv and eq:
            lead = "ROE on this extract is operating result divided by total equity."
            body = ratio_pct_body(
                "ROE = operating result ÷ total equity",
                "ROE",
                "operating result",
                "total equity",
                opv,
                eq,
                opv / eq,
                f"Threshold: exceeds {th:g}%. Actual {pct(opv/eq)}%.",
                truth,
                f"ROE {pct(opv/eq)}% exceeds {th:g}%",
                f"ROE {pct(opv/eq)}% does not exceed {th:g}%",
            )
            return wrap(truth, lead, body)

    m = re.search(r"return on capital employed.*?exceeds (\d+(?:\.\d+)?)%", stmt, re.I)
    if m and amt_raw:
        th = float(m.group(1))
        opv = amt_raw.get("operating result") or amt_raw.get("operating result (€ thousands)")
        eq = amt_raw.get("total equity")
        lt = amt_raw.get("long-term bank loan", 0) or 0
        bonds = amt_raw.get("bonds payable", 0) or 0
        if opv and eq is not None:
            cap = eq + lt + bonds
            lead = (
                "ROCE relates operating result to capital employed: equity plus non-current "
                "liabilities."
            )
            body = f"""Name the identity in words: ROCE = operating result ÷ (equity + non-current liabilities).

$$
\\text{{Capital employed}} = {fmt(eq)} + {fmt(lt)} + {fmt(bonds)} = {fmt(cap)}
$$

$$
ROCE = \\frac{{{fmt(opv)}}}{{{fmt(cap)}}} = {pct(opv/cap)}\\%
$$

Threshold: exceeds {th:g}%. Actual {pct(opv/cap)}%.

{interp(truth, f"ROCE {pct(opv/cap)}% {'exceeds' if (opv/cap)*100 > th else 'does not exceed'} {th:g}%")}"""
            return wrap(truth, lead, body)

    m = re.search(
        r"cash flow from operating activities amounts to less than (\d+(?:\.\d+)?)% of the operating result",
        stmt,
        re.I,
    )
    if m and amt_raw:
        th = float(m.group(1))
        cf = amt_raw.get("cash flow from operating activities")
        opv = amt_raw.get("operating result")
        if cf is not None and opv:
            ratio = abs(cf) / opv
            lead = (
                "Operating-cash conversion here is cash flow from operating activities as a "
                "percentage of operating result."
            )
            body = ratio_pct_body(
                "conversion = operating cash flow ÷ operating result",
                "Conv",
                "operating cash flow",
                "operating result",
                abs(cf),
                opv,
                ratio,
                f"Threshold: less than {th:g}%. Actual {pct(ratio)}%.",
                truth,
                f"conversion {pct(ratio)}% is less than {th:g}%",
                f"conversion {pct(ratio)}% is not less than {th:g}%",
            )
            return wrap(truth, lead, body)

    if "acid-test" in sl and "more conservative" in sl:
        return wrap(
            truth,
            "The acid-test excludes inventory from current assets before dividing by current liabilities.",
            "Leaving inventory out makes the quick ratio less than or equal to the current ratio, "
            "so it is the more conservative liquidity test on the same balance sheet.",
        )

    return None


def thicken_conceptual(stmt: str, truth: bool, subsection: str, title: str, old: str) -> str:
    """Expand thin conceptual letters with fuller stem-tied prose."""
    # Prefer existing conceptual() if it already produces enough depth
    base = conceptual(stmt, truth, subsection, title)
    if len(base) >= 280 and "A student who" not in base:
        # Still expand known short conceptual patterns below
        if len(old) >= 280 and not needs_thicken(old):
            return old

    sl = stmt.lower()
    # Inventory / classification short patterns
    if re.search(r"inventory.*?correctly classified as a current asset", sl) or (
        "inventory is held for sale" in (old.lower() if old else "")
    ):
        return wrap(
            truth,
            "Inventory is held for sale or for consumption in the operating cycle.",
            "On the balance sheet that places inventory among current assets. It is not an "
            "intangible (no physical stock for sale) and not a non-current operating asset "
            "(those are used in the business beyond one year rather than turned over as stock).\n\n"
            f"Applied to this stem: \"{stmt.strip()}\"",
        )
    if "shareholder sells shares to another" in sl and "corporation always receives" in sl:
        return wrap(
            truth,
            "Secondary-market trades move cash between investors, not into the company.",
            "When one shareholder sells shares to another on the exchange, the issuer is not "
            "a party to that trade and does not receive new share capital from it. Fresh equity "
            "cash arrives only from primary issues or similar company transactions.\n\n"
            f"Applied to this stem: \"{stmt.strip()}\"",
        )
    if "reasonable assurance" in sl:
        return wrap(
            truth,
            "Audits provide reasonable assurance, not absolute certainty.",
            "The auditor's opinion addresses the risk of material misstatement in the "
            "financial statements. It is not a guarantee that every figure is exact or that "
            "the business will prosper.\n\n"
            f"Applied to this stem: \"{stmt.strip()}\"",
        )
    if "identical statutory format" in sl and "management" in sl:
        return wrap(
            truth,
            "Management reports are not bound to the statutory published format.",
            "Internal management accounts may use whatever layout, detail, and frequency "
            "managers need. Statutory formats govern published financial statements, not "
            "internal packs.\n\n"
            f"Applied to this stem: \"{stmt.strip()}\"",
        )
    if "land is not subject to depreciation" in sl or ("land has an indefinite" in old.lower()):
        return wrap(
            truth,
            "Land has an indefinite useful life and is not depreciated.",
            "Buildings and equipment wear out or become obsolete; land ordinarily does not. "
            "Therefore land stays at cost (subject to impairment rules) without a systematic "
            "depreciation charge.\n\n"
            f"Applied to this stem: \"{stmt.strip()}\"",
        )
    if "depreciation is a non-cash" in old.lower() or (
        "charged directly against cash" in sl
    ):
        return wrap(
            truth,
            "Depreciation is a non-cash allocation of a past capital outlay.",
            "Cash was spent when the asset was acquired. The annual depreciation charge "
            "spreads that past cost over useful life; recording it does not require a new "
            "cash payment.\n\n"
            f"Applied to this stem: \"{stmt.strip()}\"",
        )
    if "depreciation writes assets down" in old.lower() or (
        "without recording depreciation" in sl
    ):
        return wrap(
            truth,
            "Depreciation writes assets down as benefits are consumed.",
            "Omitting depreciation leaves non-current assets at historical cost and overstates "
            "them relative to the service potential already used up.\n\n"
            f"Applied to this stem: \"{stmt.strip()}\"",
        )

    # If conceptual base is still thin, add stem application
    if len(base) < 280:
        closer = "The statement is true." if truth else "The statement is false."
        mid = base
        if mid.startswith("TRUE — ") or mid.startswith("FALSE — "):
            mid = mid.split(" — ", 1)[1]
        if mid.rstrip().endswith(closer):
            mid = mid.rstrip()[: -len(closer)].rstrip()
        parts = mid.split("\n\n")
        lead = parts[0]
        rest = "\n\n".join(parts[1:])
        theory = THEORY.get((subsection or "6.1")[:3], THEORY["6.1"])
        body = (
            f"{rest}\n\n"
            f"Using the stem facts: \"{stmt.strip()}\"\n\n"
            f"{theory}"
        )
        return wrap(truth, lead, body)
    return base if needs_thicken(old) else old


def deepen_letter(case: dict, i: int) -> str:
    old = case["tactical_explanations"][i]
    stmt = case["statements"][i]
    truth = bool(case["answer_key"][i])
    if not needs_thicken(old):
        return old
    tables = parse_tables(case.get("context") or "")
    expl = try_maximal(stmt, truth, tables)
    if expl is None:
        expl = thicken_conceptual(
            stmt, truth, case.get("subsection") or "6.1", case.get("title") or "", old
        )
    # Safety: header/closer
    want = "TRUE — " if truth else "FALSE — "
    closer = "The statement is true." if truth else "The statement is false."
    if not expl.startswith(want):
        expl = want + expl.split(" — ", 1)[1] if " — " in expl else want + expl
    if not expl.rstrip().endswith(closer):
        expl = expl.rstrip() + "\n\n" + closer
    if "A student who" in expl:
        expl = re.sub(r"\s*A student who.*?$", "", expl, flags=re.S).rstrip() + "\n\n" + closer
    return expl


def process_range(start: int, count: int, write: bool = True) -> dict:
    original = json.loads(PATH.read_text())
    cases = sorted(original, key=lambda c: c["case_id"])
    targets = cases[start : start + count]
    rewritten = 0
    lens = []
    errs = []
    first_id = targets[0]["case_id"] if targets else None
    last_id = targets[-1]["case_id"] if targets else None
    updated = {}
    for case in targets:
        new_expls = []
        for i in range(len(case["tactical_explanations"])):
            old = case["tactical_explanations"][i]
            new = deepen_letter(case, i)
            if new != old:
                rewritten += 1
            new_expls.append(new)
            lens.append(len(new))
            want = "TRUE — " if case["answer_key"][i] else "FALSE — "
            closer = (
                "The statement is true." if case["answer_key"][i] else "The statement is false."
            )
            if not new.startswith(want):
                errs.append(f"{case['case_id']} {LETTERS[i]} header")
            if not new.rstrip().endswith(closer):
                errs.append(f"{case['case_id']} {LETTERS[i]} closer")
            if "A student who" in new:
                errs.append(f"{case['case_id']} {LETTERS[i]} filler")
        updated[case["case_id"]] = new_expls
    if write:
        for c in original:
            if c["case_id"] in updated:
                c["tactical_explanations"] = updated[c["case_id"]]
        PATH.write_text(json.dumps(original, ensure_ascii=False, indent=2) + "\n")
    return {
        "start": start,
        "count": len(targets),
        "range": f"{first_id}–{last_id}",
        "rewritten": rewritten,
        "avg_len": round(sum(lens) / len(lens)) if lens else 0,
        "under_180": sum(1 for L in lens if L < 180),
        "errs": errs,
    }


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--count", type=int, default=25)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    info = process_range(args.start, args.count, write=not args.dry_run)
    print(json.dumps(info, indent=2))
