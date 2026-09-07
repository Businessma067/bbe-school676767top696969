#!/usr/bin/env python3
"""Chapter 6 economics maximal explanation deepen (accounting/finance statements)."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")
LETTERS = "ABCDE"

THEORY = {
    "6.1": (
        "The balance sheet identity is Assets = Liabilities + Equity. "
        "Classification follows intended use and timing: non-current vs current assets and liabilities; "
        "inventory is held for sale; fixed assets are used in operations beyond one year; "
        "equity is the owners' residual claim and is not a scheduled debt repayment."
    ),
    "6.2": (
        "The income statement reports period performance (revenue, costs, profit). "
        "The cash-flow statement splits operating, investing, and financing cash movements. "
        "Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables "
        "is operating cash, not new revenue."
    ),
    "6.3": (
        "Single-year statements need cautious reading: policies, estimates, and one-offs matter. "
        "Ratios (liquidity, gearing, margins, returns) put line items in context. "
        "Financial accounting serves external users; audits give reasonable, not absolute, assurance."
    ),
    "6.4": (
        "Short extracts still obey the same classification and measurement rules: "
        "current ratio, equity ratio, working capital, and straight-line depreciation "
        "(cost minus residual, spread over useful life)."
    ),
    "6.5": (
        "Activity ratios use averages: asset turnover = revenue / average assets; "
        "inventory turnover = cost of sales / average inventory; "
        "receivables turnover = revenue / average receivables; days ≈ 365 / turnover. "
        "Market capitalisation = price × shares; EPS relates earnings to shares outstanding."
    ),
}


def parse_num(s: str):
    s = s.strip().replace("**", "").replace(",", "").replace("€", "").replace(" ", "")
    if not s or s in ("—", "-"):
        return None
    paren = s.startswith("(") and s.endswith(")")
    if paren:
        s = s[1:-1]
    try:
        v = float(s) if "." in s else int(s)
    except ValueError:
        return None
    return -v if paren else v


def parse_tables(ctx: str) -> dict[str, Any]:
    data: dict[str, Any] = {"y1": {}, "y2": {}, "amt": {}, "months": [], "raw": ctx}
    lines = ctx.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("|") and i + 1 < len(lines) and "---" in lines[i + 1]:
            header = [c.strip() for c in line.strip("|").split("|")]
            i += 2
            hdr = [h.lower() for h in header]
            twocol = len(header) >= 3 and any("year 1" in h for h in hdr)
            is_share = any("month" in h for h in hdr) and any("price" in h for h in hdr)
            while i < len(lines) and lines[i].startswith("|"):
                if "---" in lines[i]:
                    i += 1
                    continue
                cells = [c.strip().replace("**", "") for c in lines[i].strip("|").split("|")]
                i += 1
                if not cells or all(not c for c in cells[1:]):
                    continue
                label = cells[0]
                if is_share and len(cells) >= 3:
                    price, vol = parse_num(cells[1]), parse_num(cells[2])
                    if price is not None:
                        data["months"].append({"month": label, "price": float(price), "vol": float(vol or 0)})
                    continue
                key = label.lower()
                if twocol and len(cells) >= 3:
                    a, b = parse_num(cells[1]), parse_num(cells[2])
                    if a is not None:
                        data["y1"][key] = float(a)
                    if b is not None:
                        data["y2"][key] = float(b)
                elif len(cells) >= 2:
                    a = parse_num(cells[1])
                    if a is not None:
                        data["amt"][key] = float(a)
            continue
        i += 1
    return data


def enrich(d: dict[str, float]) -> dict[str, float]:
    out = dict(d)

    def g(*ks):
        for k in ks:
            if k in out:
                return out[k]
        return 0.0

    buildings, machinery = g("buildings"), g("machinery")
    office, patents = g("office equipment"), g("patents, trademarks and licences")
    inv, recv, cash = g("inventory"), g("trade receivables"), g("cash and cash equivalents")
    assets = g("total assets")
    equity = g("total equity")
    share, retained = g("share capital"), g("retained earnings")
    lt, bonds = g("long-term bank loan"), g("bonds payable")
    pay, od = g("trade payables"), g("bank overdraft")
    liab = g("total liabilities")
    nca = buildings + machinery + office + patents
    if nca == 0 and buildings:
        nca = buildings
    ca = inv + recv + cash
    if ca == 0 and (inv or cash):
        ca = inv + cash
    ncl = lt + bonds if (lt or bonds) else lt
    cl = pay + od if (pay or od) else pay
    out.update(
        nca=nca, ca=ca, ncl=ncl, cl=cl, buildings=buildings, machinery=machinery,
        office=office, patents=patents, inventory=inv, receivables=recv, cash=cash,
        assets=assets, equity=equity, share=share, retained=retained, lt=lt, bonds=bonds,
        payables=pay, overdraft=od, liab=liab, wc=ca - cl,
        cr=(ca / cl) if cl else float("nan"),
        acid=((ca - inv) / cl) if cl else float("nan"),
        er=(equity / assets) if assets else float("nan"),
        dr=(liab / assets) if assets else float("nan"),
    )
    return out


def fmt(n: float) -> str:
    if abs(n - round(n)) < 1e-9:
        return f"{int(round(n)):,}"
    return f"{n:.4f}".rstrip("0").rstrip(".")


def pct(frac: float, d: int = 1) -> str:
    return f"{frac * 100:.{d}f}"


def wrap(truth: bool, lead: str, body: str) -> str:
    h = "TRUE — " if truth else "FALSE — "
    c = "The statement is true." if truth else "The statement is false."
    return f"{h}{lead.strip()}\n\n{body.strip()}\n\n{c}"


def growth(a: float, b: float) -> float:
    return (b - a) / a if a else float("nan")


def parse_dep(ctx: str) -> dict[str, dict[str, float]]:
    assets = {}
    for line in ctx.splitlines():
        if not line.startswith("|"):
            continue
        cells = [c.strip().replace("**", "") for c in line.strip("|").split("|")]
        if len(cells) < 2 or "purchase price" not in cells[1].lower():
            continue
        detail = cells[1]
        cm = re.search(r"€\s*([\d,]+)", detail)
        lm = re.search(r"(\d+)\s*-?\s*year useful life", detail, re.I)
        if not cm or not lm:
            continue
        cost = float(cm.group(1).replace(",", ""))
        life = float(lm.group(1))
        rm = re.search(r"€\s*([\d,]+)\s*residual", detail, re.I)
        resid = float(rm.group(1).replace(",", "")) if rm else 0.0
        assets[cells[0]] = {"cost": cost, "life": life, "resid": resid}
    return assets


def subject_keys(subject: str) -> list[str]:
    s = subject.lower().strip()
    m = {
        "total equity": ["equity", "total equity"],
        "total assets": ["assets", "total assets"],
        "total liabilities": ["liab", "total liabilities"],
        "inventory": ["inventory"],
        "trade payables": ["payables", "trade payables"],
        "trade receivables": ["receivables", "trade receivables"],
        "cash and cash equivalents": ["cash", "cash and cash equivalents"],
        "cash flow from operating activities": ["cash flow from operating activities"],
        "revenue": ["revenue"],
        "the operating result": ["operating result"],
        "operating result": ["operating result"],
        "profit for the year": ["profit for the year"],
        "finance costs": ["finance costs"],
        "retained earnings": ["retained", "retained earnings"],
        "buildings": ["buildings"],
        "cost of sales": ["cost of sales"],
        "dividends paid": ["dividends paid"],
    }
    return m.get(s, [s])


def getv(bs: dict, tables: dict, keys: list[str], yr=None):
    for k in keys:
        if k in bs:
            return bs[k]
    raw = tables["y1"] if yr == 1 else tables["y2"] if yr == 2 else tables.get("amt", {})
    for k in keys:
        if k in raw:
            return float(raw[k])
    return None


# ── numeric explainers ─────────────────────────────────────────────────────

def expl_growth(truth, subject, y1, y2, th, direction):
    g = growth(y1, y2)
    g_pct = g * 100
    lead = (
        f"Use the case figures for {subject} and compute the percentage change "
        f"between Year 1 and Year 2 before comparing it with the claimed threshold."
    )
    if direction == "up":
        ok = g_pct > th
        cmp = f"{pct(g)}\\% {'>' if ok else '\\le '} {th:g}\\%"
        verdict = f"The actual growth is {pct(g)}%, which is {'more than' if ok else 'not more than'} the claimed {th:g}%."
    else:
        decline = -g_pct
        ok = decline > th
        cmp = f"{decline:.1f}\\% {'>' if ok else '\\le '} {th:g}\\%"
        verdict = f"The actual decline is {decline:.1f}%, which is {'more than' if ok else 'not more than'} the claimed {th:g}%."
    body = f"""From the extract:

$$
\\text{{{subject}}}_{{\\text{{Y1}}}} = {fmt(y1)}, \\quad
\\text{{{subject}}}_{{\\text{{Y2}}}} = {fmt(y2)}
$$

$$
\\frac{{{fmt(y2)} - {fmt(y1)}}}{{{fmt(y1)}}} = {pct(g)}\\%
$$

$$
{cmp}
$$

{verdict}"""
    return wrap(truth, lead, body)


def try_numeric(stmt: str, truth: bool, tables: dict) -> str | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    amt = enrich(amt_raw) if amt_raw else {}
    for k, v in amt_raw.items():
        amt.setdefault(k, v)
    months = tables["months"]
    sl = stmt.lower()

    m = re.match(r"(.+?) (grew|fell) by more than (\d+(?:\.\d+)?)% between Year 1 and Year 2\.?$", stmt, re.I)
    if m and y1 and y2:
        subj, direction, th = m.group(1), m.group(2).lower(), float(m.group(3))
        a = getv(y1, tables, subject_keys(subj), 1)
        b = getv(y2, tables, subject_keys(subj), 2)
        if a is not None and b is not None:
            return expl_growth(truth, subj, a, b, th, "up" if direction == "grew" else "down")

    m = re.match(r"Cash flow from operating activities grew by more than (\d+(?:\.\d+)?)% from Year 1 to Year 2\.?$", stmt, re.I)
    if m and tables["y1"] and tables["y2"]:
        th = float(m.group(1))
        a = tables["y1"].get("cash flow from operating activities")
        b = tables["y2"].get("cash flow from operating activities")
        if a is not None and b is not None:
            return expl_growth(truth, "Cash flow from operating activities", a, b, th, "up")

    m = re.match(r"Revenue grew by exactly (\d+(?:\.\d+)?)% from Year 1 to Year 2\.?$", stmt, re.I)
    if m and "revenue" in tables["y1"] and "revenue" in tables["y2"]:
        claimed = float(m.group(1))
        a, b = tables["y1"]["revenue"], tables["y2"]["revenue"]
        g = growth(a, b) * 100
        lead = "Compute revenue growth from the two years and compare with the exact percentage claimed."
        body = f"""$$
\\frac{{{fmt(b)} - {fmt(a)}}}{{{fmt(a)}}} = {g:.1f}\\%
$$

Claimed exactly {claimed:g}%. Actual {g:.1f}%."""
        return wrap(truth, lead, body)

    m = re.match(r"Non-current liabilities amount to (more|less) than (\d+(?:\.\d+)?)% of total equity in Year ([12])\.?$", stmt, re.I)
    if m and (y1 or y2):
        which, th, yr = m.group(1).lower(), float(m.group(2)), int(m.group(3))
        bs = y1 if yr == 1 else y2
        ncl, eq = bs["ncl"], bs["equity"]
        ratio = ncl / eq if eq else float("nan")
        lead = f"Non-current liabilities = long-term bank loan + bonds. Divide by Year {yr} equity."
        body = f"""$$
\\text{{NCL}} = {fmt(bs['lt'])} + {fmt(bs['bonds'])} = {fmt(ncl)}
$$

$$
\\frac{{{fmt(ncl)}}}{{{fmt(eq)}}} = {pct(ratio)}\\%
$$

Threshold: {which} than {th:g}%. Actual {pct(ratio)}%."""
        return wrap(truth, lead, body)

    m = re.match(r"The (equity|debt) ratio (improved|fell) by more than (\d+(?:\.\d+)?) percentage points between Year 1 and Year 2\.?$", stmt, re.I)
    if m and y1 and y2:
        kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
        if kind == "equity":
            r1, r2 = y1["er"], y2["er"]
            n1, n2 = y1["equity"], y2["equity"]
        else:
            r1, r2 = y1["dr"], y2["dr"]
            n1, n2 = y1["liab"], y2["liab"]
        delta = (r2 - r1) * 100
        lead = f"Compute each year's {kind} ratio from the balance-sheet totals, then the change in percentage points."
        body = f"""$$
R_{{Y1}} = \\frac{{{fmt(n1)}}}{{{fmt(y1['assets'])}}} = {pct(r1)}\\%
$$

$$
R_{{Y2}} = \\frac{{{fmt(n2)}}}{{{fmt(y2['assets'])}}} = {pct(r2)}\\%
$$

$$
\\Delta = {delta:+.1f}\\text{{ percentage points}}
$$

Required: {verb} by more than {th:g} pp. Actual change {delta:+.1f} pp."""
        return wrap(truth, lead, body)

    m = re.match(r"The share of total assets held in non-current assets fell by more than (\d+(?:\.\d+)?) percentage points from Year 1 to Year 2\.?$", stmt, re.I)
    if m and y1 and y2:
        th = float(m.group(1))
        s1, s2 = y1["nca"] / y1["assets"], y2["nca"] / y2["assets"]
        lead = "Non-current assets = buildings + machinery + office equipment + patents; divide by total assets each year."
        body = f"""$$
S_{{Y1}} = \\frac{{{fmt(y1['nca'])}}}{{{fmt(y1['assets'])}}} = {pct(s1)}\\%
$$

$$
S_{{Y2}} = \\frac{{{fmt(y2['nca'])}}}{{{fmt(y2['assets'])}}} = {pct(s2)}\\%
$$

Fall = {pct(s1 - s2)} pp; threshold more than {th:g} pp."""
        return wrap(truth, lead, body)

    m = re.match(r"The combined total of equity and non-current liabilities exceeds non-current assets by more than (\d+(?:\.\d+)?)%(?: in Year ([12]))?\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        yr = int(m.group(2)) if m.group(2) else None
        bs = (y1 if yr == 1 else y2 if yr == 2 else amt) or y2 or y1
        if bs and bs.get("nca"):
            excess = (bs["equity"] + bs["ncl"]) / bs["nca"] - 1
            lead = "Long-term financing = equity + non-current liabilities; express the surplus over non-current assets as a percentage."
            body = f"""$$
\\frac{{{fmt(bs['equity'])} + {fmt(bs['ncl'])}}}{{{fmt(bs['nca'])}}} - 1 = {pct(excess)}\\%
$$

Threshold: more than {th:g}%. Actual surplus {pct(excess)}%."""
            return wrap(truth, lead, body)

    m = re.match(r"(.+?) make up (more|less) than (\d+(?:\.\d+)?)% of (.+?)\.?$", stmt, re.I)
    if m:
        subj, which, th, ofwhat = m.group(1), m.group(2).lower(), float(m.group(3)), m.group(4)
        if "average inventory" in subj.lower() and amt_raw:
            i0, i1 = amt_raw.get("inventory at the beginning of the year"), amt_raw.get("inventory at the end of the year")
            a0, a1 = amt_raw.get("total assets at the beginning of the year"), amt_raw.get("total assets at the end of the year")
            if None not in (i0, i1, a0, a1):
                avg_i, avg_a = (i0 + i1) / 2, (a0 + a1) / 2
                share = avg_i / avg_a
                lead = "Average inventory and average assets are midpoints of beginning and ending balances."
                body = f"""$$
\\frac{{({fmt(i0)}+{fmt(i1)})/2}}{{({fmt(a0)}+{fmt(a1)})/2}} = {pct(share)}\\%
$$

Threshold: {which} than {th:g}%. Actual {pct(share)}%."""
                return wrap(truth, lead, body)
        yr = int(m.group(0).lower().split("year ")[-1][0]) if "year " in ofwhat.lower() else None
        try:
            ym = re.search(r"year\s*([12])", ofwhat, re.I)
            yr = int(ym.group(1)) if ym else None
        except Exception:
            yr = None
        bs = y1 if yr == 1 else y2 if yr == 2 else (amt or y2 or y1)
        if bs:
            aliases = {
                "non-current assets": "nca", "current assets": "ca", "total assets": "assets",
                "inventory": "inventory", "trade receivables": "receivables",
                "cash and cash equivalents": "cash", "buildings": "buildings",
                "non-current liabilities": "ncl", "current liabilities": "cl",
            }
            sk = aliases.get(re.sub(r"\s+in year [12]$", "", subj.lower()).strip(), subj.lower())
            dk = aliases.get(re.sub(r"\s+in year [12]$", "", ofwhat.lower()).strip(), ofwhat.lower())
            num, den = bs.get(sk), bs.get(dk)
            if num is not None and den:
                ratio = num / den
                lead = f"Form the percentage share of {subj} in {ofwhat} from the extract."
                body = f"""$$
\\frac{{{fmt(num)}}}{{{fmt(den)}}} = {pct(ratio)}\\%
$$

Threshold: {which} than {th:g}%. Actual {pct(ratio)}%."""
                return wrap(truth, lead, body)

    m = re.match(r"The current ratio (exceeds|is below|is exactly) (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        verb, th = m.group(1).lower(), float(m.group(2))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            cr = bs["ca"] / bs["cl"]
            lead = "Current ratio = current assets ÷ current liabilities."
            body = f"""$$
CA = {fmt(bs.get('inventory',0))} + {fmt(bs.get('receivables',0))} + {fmt(bs.get('cash',0))} = {fmt(bs['ca'])}
$$

$$
CL = {fmt(bs.get('payables',0))} + {fmt(bs.get('overdraft',0))} = {fmt(bs['cl'])}
$$

$$
\\text{{Current ratio}} = {cr:.4f}
$$

Claimed: {verb} {th:g}. Actual {cr:.2f}."""
            return wrap(truth, lead, body)

    m = re.match(r"The current ratio in Year ([12]) is exactly (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m and (y1 or y2):
        yr, th = int(m.group(1)), float(m.group(2))
        bs = y1 if yr == 1 else y2
        cr = bs["cr"]
        lead = f"Year {yr} current ratio = current assets ÷ current liabilities."
        body = f"""$$
\\frac{{{fmt(bs['ca'])}}}{{{fmt(bs['cl'])}}} = {cr:.4f}
$$

Claimed exactly {th:.2f}. Actual {cr:.2f}."""
        return wrap(truth, lead, body)

    m = re.match(r"Current liabilities are covered by current assets less than (\d+(?:\.\d+)?) times over in Year ([12])\.?$", stmt, re.I)
    if m and (y1 or y2):
        th, yr = float(m.group(1)), int(m.group(2))
        bs = y1 if yr == 1 else y2
        cr = bs["cr"]
        lead = f"This is the Year {yr} current ratio."
        body = f"""$$
\\frac{{{fmt(bs['ca'])}}}{{{fmt(bs['cl'])}}} = {cr:.4f}
$$

Threshold: less than {th:g}. Actual {cr:.2f}."""
        return wrap(truth, lead, body)

    m = re.match(r"The (equity|debt) ratio (is below|exceeds) (\d+(?:\.\d+)?)%\.?$", stmt, re.I)
    if m:
        kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
        bs = amt if amt.get("assets") else (y2 or y1)
        if bs and bs.get("assets"):
            num = bs["equity"] if kind == "equity" else bs["liab"]
            ratio = num / bs["assets"]
            lead = f"{kind.title()} ratio = {kind} ÷ total assets."
            body = f"""$$
\\frac{{{fmt(num)}}}{{{fmt(bs['assets'])}}} = {pct(ratio)}\\%
$$

Claimed: {verb} {th:g}%. Actual {pct(ratio)}%."""
            return wrap(truth, lead, body)

    m = re.match(r"After excluding inventory, the remaining current assets still cover current liabilities more than (\d+(?:\.\d+)?) times over\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            acid = (bs["ca"] - bs["inventory"]) / bs["cl"]
            lead = "Acid-test ratio = (current assets − inventory) ÷ current liabilities."
            body = f"""$$
\\frac{{{fmt(bs['ca'])} - {fmt(bs['inventory'])}}}{{{fmt(bs['cl'])}}} = {acid:.4f}
$$

Threshold: more than {th:g}. Actual {acid:.2f}."""
            return wrap(truth, lead, body)

    m = re.match(r"The acid-test ratio exceeds (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            acid = (bs["ca"] - bs["inventory"]) / bs["cl"]
            lead = "Acid-test ratio = (current assets − inventory) ÷ current liabilities."
            body = f"""$$
{acid:.4f}\\text{{ versus threshold }}{th:g}
$$"""
            return wrap(truth, lead, body)

    if "working capital" in sl and (amt or y1 or y2):
        if "doubled" in sl and y1 and y2:
            lead = "Working capital = current assets − current liabilities each year."
            body = f"""$$
WC_{{Y1}} = {fmt(y1['wc'])}, \\quad WC_{{Y2}} = {fmt(y2['wc'])}
$$

Doubling needs $WC_{{Y2}} > 2\\times{fmt(y1['wc'])} = {fmt(2*y1['wc'])}$."""
            return wrap(truth, lead, body)
        if "turned positive" in sl and y1 and y2:
            lead = "Working capital = current assets − current liabilities."
            body = f"""$$
WC_{{Y1}} = {fmt(y1['wc'])}, \\quad WC_{{Y2}} = {fmt(y2['wc'])}
$$"""
            return wrap(truth, lead, body)
        bs = amt if amt.get("ca") else (y2 or y1)
        if bs:
            lead = "Working capital = current assets − current liabilities."
            body = f"""$$
WC = {fmt(bs['ca'])} - {fmt(bs['cl'])} = {fmt(bs['wc'])}
$$

Working capital is {"positive" if bs['wc'] > 0 else "not positive"}."""
            return wrap(truth, lead, body)

    if "retained earnings grew faster than total equity" in sl and y1 and y2:
        rg, eg = growth(y1["retained"], y2["retained"]), growth(y1["equity"], y2["equity"])
        lead = "Compare percentage growth in retained earnings with growth in total equity."
        body = f"""$$
\\text{{RE growth}} = {pct(rg)}\\%, \\quad \\text{{Equity growth}} = {pct(eg)}\\%
$$"""
        return wrap(truth, lead, body)

    m = re.search(r"total equity increased by exactly €([\d,]+) thousand from Year 1 to Year 2", stmt, re.I)
    if m and y1 and y2:
        claimed = float(m.group(1).replace(",", ""))
        inc = y2["equity"] - y1["equity"]
        lead = "With share capital unchanged, the equity increase equals the retained-earnings change."
        body = f"""$$
\\Delta Equity = {fmt(y2['equity'])} - {fmt(y1['equity'])} = {fmt(inc)}
$$

Claimed exactly €{fmt(claimed)} thousand. Actual €{fmt(inc)} thousand."""
        return wrap(truth, lead, body)

    # Shares
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

        m = re.match(r"The closing share price rose by more than (\d+(?:\.\d+)?)% from first to last month\.?$", stmt, re.I)
        if m:
            th = float(m.group(1))
            lead = "Percentage change from first to last closing price."
            body = f"""$$
\\frac{{{fmt(end)} - {fmt(start)}}}{{{fmt(start)}}} = {pct(rise)}\\%
$$

Threshold more than {th:g}%. Actual {pct(rise)}%."""
            return wrap(truth, lead, body)

        m = re.match(r"Market capitalisation at the last month exceeds €(\d+(?:\.\d+)?) million\.?$", stmt, re.I)
        if m and shares:
            th = float(m.group(1))
            mcap = end * shares / 1_000_000
            lead = "Market capitalisation = last price × shares outstanding."
            body = f"""$$
{fmt(end)} \\times {fmt(shares)} = €{mcap:.2f}\\text{{ million}}
$$

Threshold exceeds €{th:g}m. Actual €{mcap:.2f}m."""
            return wrap(truth, lead, body)

        m = re.match(r"Market capitalisation rose by more than (\d+(?:\.\d+)?)% over the period\.?$", stmt, re.I)
        if m and shares:
            th = float(m.group(1))
            m0, m1 = start * shares / 1e6, end * shares / 1e6
            g = (m1 - m0) / m0
            lead = "Market-cap change uses the same shares at first and last prices (equals the price change)."
            body = f"""$$
€{m0:.2f}m \\to €{m1:.2f}m = {pct(g)}\\%
$$

Threshold more than {th:g}%. Actual {pct(g)}%."""
            return wrap(truth, lead, body)

        m = re.match(r"Earnings per share exceeds €(\d+(?:\.\d+)?)\.?$", stmt, re.I)
        if m and shares and op_res is not None:
            th = float(m.group(1))
            eps = op_res / (shares / 1000)
            lead = "EPS = operating result (€ thousands) ÷ (shares ÷ 1,000)."
            body = f"""$$
EPS = \\frac{{{fmt(op_res)}}}{{{fmt(shares/1000)}}} = €{eps:.4f}
$$

Threshold exceeds €{th:g}. Actual ≈ €{eps:.2f}."""
            return wrap(truth, lead, body)

        m = re.match(r"Highest closing price is more than (\d+(?:\.\d+)?)% above the lowest\.?$", stmt, re.I)
        if m:
            th = float(m.group(1))
            spread = (max_p - min_p) / min_p
            lead = "Percentage gap of highest versus lowest closing price."
            body = f"""$$
\\frac{{{fmt(max_p)} - {fmt(min_p)}}}{{{fmt(min_p)}}} = {pct(spread)}\\%
$$

Threshold more than {th:g}%. Actual {pct(spread)}%."""
            return wrap(truth, lead, body)

        m = re.match(r"Total shares traded over six months exceed (\d+(?:\.\d+)?)% of shares outstanding\.?$", stmt, re.I)
        if m and shares:
            th = float(m.group(1))
            turn = total_vol / shares
            lead = "Six-month volume ÷ shares outstanding."
            body = f"""$$
\\frac{{{fmt(total_vol)}}}{{{fmt(shares)}}} = {pct(turn)}\\%
$$

Threshold exceed {th:g}%. Actual {pct(turn)}%."""
            return wrap(truth, lead, body)

        m = re.match(r"Peak monthly share turnover exceeds ([\d,]+) shares\.?$", stmt, re.I)
        if m:
            th = float(m.group(1).replace(",", ""))
            lead = "Identify the maximum monthly shares-traded figure."
            body = f"""Peak volume = {fmt(max_vol)} in {months[vols.index(max_vol)]['month']}.
Threshold exceeds {fmt(th)}. Actual {fmt(max_vol)}."""
            return wrap(truth, lead, body)

        if "share turnover peaked in the same month as the highest closing price" in sl:
            ip, iv = prices.index(max_p), vols.index(max_vol)
            lead = "Compare the month of peak price with the month of peak volume."
            body = f"""Peak price month: {months[ip]['month']} (€{fmt(max_p)}).
Peak volume month: {months[iv]['month']} ({fmt(max_vol)} shares).
These {"match" if ip == iv else "differ"}."""
            return wrap(truth, lead, body)

        if "closing price rose in more than half of the month-to-month steps" in sl:
            rising = sum(1 for i in range(1, len(prices)) if prices[i] > prices[i - 1])
            steps = len(prices) - 1
            lead = "Count upward month-to-month price steps."
            body = f"""Rose in {rising} of {steps} steps. More than half of {steps} requires more than {steps/2:g}."""
            return wrap(truth, lead, body)

        if "last closing price is below the first" in sl:
            lead = "Compare first and last closing prices."
            body = f"""$$
{fmt(start)} \\to {fmt(end)}
$$"""
            return wrap(truth, lead, body)

        m = re.match(r"Shares outstanding equal ([\d,]+)\.?$", stmt, re.I)
        if m and shares is not None:
            claimed = float(m.group(1).replace(",", ""))
            lead = "Read shares outstanding from the annual figures."
            body = f"""Extract reports {fmt(shares)}; statement claims {fmt(claimed)}."""
            return wrap(truth, lead, body)

        m = re.match(r"Operating result is below €([\d,]+) thousand\.?$", stmt, re.I)
        if m and op_res is not None:
            th = float(m.group(1).replace(",", ""))
            lead = "Read operating result and compare with the threshold."
            body = f"""Operating result = €{fmt(op_res)} thousand; threshold below €{fmt(th)} thousand."""
            return wrap(truth, lead, body)

    # Turnover / activity / COS share on turnover extracts
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
        a0, a1 = amt_raw.get("total assets at the beginning of the year"), amt_raw.get("total assets at the end of the year")
        i0, i1 = amt_raw.get("inventory at the beginning of the year"), amt_raw.get("inventory at the end of the year")
        r0, r1 = amt_raw.get("trade receivables at the beginning of the year"), amt_raw.get("trade receivables at the end of the year")
        if rev and a0 and a1 and "asset turnover" in sl:
            avg_a = (a0 + a1) / 2
            at = rev / avg_a
            m = re.search(r"is (above|exactly) (\d+(?:\.\d+)?)", stmt, re.I)
            if m:
                th = float(m.group(2))
                lead = "Asset turnover = revenue ÷ average total assets."
                body = f"""$$
\\text{{Avg assets}} = {fmt(avg_a)}, \\quad AT = \\frac{{{fmt(rev)}}}{{{fmt(avg_a)}}} = {at:.4f}
$$

Claimed {m.group(1)} {th:g}. Actual {at:.2f}."""
                return wrap(truth, lead, body)
        if cos and i0 and i1 and "inventory turnover" in sl:
            avg_i = (i0 + i1) / 2
            it = cos / avg_i
            if "with inventory turnover of about" in sl:
                lead = "Higher inventory turnover means stock sells and is replaced faster, tying up less cash in inventory."
                body = f"""$$
IT = \\frac{{{fmt(cos)}}}{{{fmt(avg_i)}}} = {it:.2f}
$$

That interpretation matches the definition."""
                return wrap(truth, lead, body)
            m = re.search(r"is (below|exactly) (\d+(?:\.\d+)?)", stmt, re.I)
            if m:
                th = float(m.group(2))
                lead = "Inventory turnover = cost of sales ÷ average inventory."
                body = f"""$$
IT = \\frac{{{fmt(cos)}}}{{{fmt(avg_i)}}} = {it:.4f}
$$

Claimed {m.group(1)} {th:g}. Actual {it:.2f}."""
                return wrap(truth, lead, body)
        if rev and r0 and r1:
            avg_r = (r0 + r1) / 2
            rt = rev / avg_r
            if "trade receivables turnover" in sl or "receivables turnover" in sl:
                m = re.search(r"exceeds (\d+(?:\.\d+)?)", stmt, re.I)
                if m:
                    th = float(m.group(1))
                    lead = "Receivables turnover = revenue ÷ average trade receivables."
                    body = f"""$$
RT = \\frac{{{fmt(rev)}}}{{{fmt(avg_r)}}} = {rt:.4f}
$$

Threshold exceeds {th:g}. Actual {rt:.2f}."""
                    return wrap(truth, lead, body)
            m = re.search(r"more than (\d+) days", stmt, re.I)
            if m and "receivable" in sl:
                th = float(m.group(1))
                days = 365 / rt
                lead = "Collection days ≈ 365 ÷ receivables turnover."
                body = f"""$$
\\frac{{365}}{{{rt:.4f}}} = {days:.1f}\\text{{ days}}
$$

Threshold more than {th:g} days. Actual {days:.0f} days."""
                return wrap(truth, lead, body)
            if "inventory turnover is higher than trade receivables turnover" in sl and cos and i0 and i1:
                it = cos / ((i0 + i1) / 2)
                lead = "Compare inventory turnover with receivables turnover."
                body = f"""$$
IT = {it:.4f}, \\quad RT = {rt:.4f}
$$"""
                return wrap(truth, lead, body)

        m = re.search(r"trade receivables grew by more than (\d+(?:\.\d+)?)%", stmt, re.I)
        if m and r0 and r1:
            th = float(m.group(1))
            g = growth(r0, r1)
            lead = "Beginning vs ending trade receivables."
            body = f"""$$
\\frac{{{fmt(r1)}-{fmt(r0)}}}{{{fmt(r0)}}} = {pct(g)}\\%
$$

Threshold more than {th:g}%. Actual {pct(g)}%."""
            return wrap(truth, lead, body)
        if "total assets grew during the year" in sl and a0 and a1:
            lead = "Compare beginning and ending total assets."
            body = f"""$$
{fmt(a0)} \\to {fmt(a1)}
$$"""
            return wrap(truth, lead, body)
        m = re.search(r"cost of sales amounts to more than (\d+(?:\.\d+)?)% of revenue", stmt, re.I)
        if m and cos and rev:
            th = float(m.group(1))
            ratio = cos / rev
            lead = "Cost of sales ÷ revenue."
            body = f"""$$
\\frac{{{fmt(cos)}}}{{{fmt(rev)}}} = {pct(ratio)}\\%
$$

Threshold more than {th:g}%. Actual {pct(ratio)}%."""
            return wrap(truth, lead, body)
        m = re.search(r"revenue exceeds €([\d,]+) thousand", stmt, re.I)
        if m and rev:
            th = float(m.group(1).replace(",", ""))
            lead = "Read revenue from the extract."
            body = f"""Revenue = €{fmt(rev)} thousand; threshold exceeds €{fmt(th)} thousand."""
            return wrap(truth, lead, body)
        m = re.search(r"inventory grew by more than (\d+(?:\.\d+)?)%", stmt, re.I)
        if m and i0 and i1 and "year 1" not in sl:
            th = float(m.group(1))
            g = growth(i0, i1)
            lead = "Beginning vs ending inventory."
            body = f"""$$
{pct(g)}\\%\\text{{ growth; threshold more than }}{th:g}\\%
$$"""
            return wrap(truth, lead, body)

    # P&L
    if tables["y1"] and tables["y2"] and "revenue" in tables["y1"] and any(
        k in sl for k in ("gross profit", "operating margin", "finance costs", "effective tax", "covers finance", "operating result covers")
    ):
        p1, p2 = tables["y1"], tables["y2"]
        m = re.search(r"gross profit margin.*?more than (\d+(?:\.\d+)?) percentage points higher in Year 2 than in Year 1", stmt, re.I)
        if m:
            th = float(m.group(1))
            g1 = p1["gross profit"] / p1["revenue"]
            g2 = p2["gross profit"] / p2["revenue"]
            lead = "Gross margin = gross profit ÷ revenue; compare Year 2 with Year 1 in percentage points."
            body = f"""$$
GPM_{{1}} = {pct(g1)}\\%, \\quad GPM_{{2}} = {pct(g2)}\\%
$$

$$
\\Delta = {(g2-g1)*100:.1f}\\text{{ pp (threshold more than }}{th:g}\\text{{ pp)}}
$$"""
            return wrap(truth, lead, body)
        m = re.search(r"operating margin.*?exceeds (\d+(?:\.\d+)?)% in Year ([12])", stmt, re.I)
        if m:
            th, yr = float(m.group(1)), int(m.group(2))
            p = p1 if yr == 1 else p2
            om = p["operating result"] / p["revenue"]
            lead = f"Operating margin = operating result ÷ revenue in Year {yr}."
            body = f"""$$
\\frac{{{fmt(p['operating result'])}}}{{{fmt(p['revenue'])}}} = {pct(om)}\\%
$$

Threshold exceeds {th:g}%. Actual {pct(om)}%."""
            return wrap(truth, lead, body)
        m = re.search(r"operating result covers finance costs more than (\d+(?:\.\d+)?) times over in Year ([12])", stmt, re.I)
        if m:
            th, yr = float(m.group(1)), int(m.group(2))
            p = p1 if yr == 1 else p2
            opv, fc = p["operating result"], abs(p["finance costs"])
            lead = f"Interest coverage = operating result ÷ finance costs in Year {yr}."
            body = f"""$$
\\frac{{{fmt(opv)}}}{{{fmt(fc)}}} = {opv/fc:.4f}
$$

Threshold more than {th:g}. Actual {opv/fc:.2f}."""
            return wrap(truth, lead, body)
        m = re.search(r"finance costs grew by more than (\d+(?:\.\d+)?)% between Year 1 and Year 2, outpacing the growth in the operating result", stmt, re.I)
        if m:
            th = float(m.group(1))
            fg = growth(abs(p1["finance costs"]), abs(p2["finance costs"]))
            og = growth(p1["operating result"], p2["operating result"])
            lead = "Compare finance-cost growth with operating-result growth."
            body = f"""$$
\\text{{FC growth}} = {pct(fg)}\\%, \\quad \\text{{OR growth}} = {pct(og)}\\%
$$

FC {"did" if fg*100 > th else "did not"} exceed {th:g}% growth; {"does" if fg > og else "does not"} outpace OR."""
            return wrap(truth, lead, body)
        m = re.search(r"effective tax rate.*?below (\d+(?:\.\d+)?)% in Year ([12])", stmt, re.I)
        if m:
            th, yr = float(m.group(1)), int(m.group(2))
            p = p1 if yr == 1 else p2
            etr = abs(p["income taxes"]) / p["profit before tax"]
            lead = f"Effective tax rate = income taxes ÷ profit before tax in Year {yr}."
            body = f"""$$
{pct(etr)}\\%\\text{{ versus threshold below }}{th:g}\\%
$$"""
            return wrap(truth, lead, body)
        m = re.search(r"effective tax rate rose by more than (\d+(?:\.\d+)?) percentage points", stmt, re.I)
        if m:
            th = float(m.group(1))
            t1 = abs(p1["income taxes"]) / p1["profit before tax"]
            t2 = abs(p2["income taxes"]) / p2["profit before tax"]
            lead = "Effective tax rate each year, then the pp change."
            body = f"""$$
{pct(t1)}\\% \\to {pct(t2)}\\% = {(t2-t1)*100:+.1f}\\text{{ pp}}
$$

Threshold rose by more than {th:g} pp."""
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
                lead = "Annual charge = (cost − residual) ÷ life for each asset; sum the three."
                parts = " + ".join(fmt(round(v)) for v in ann.values())
                body = f"""$$
{parts} = {fmt(round(total))}
$$

Claimed €{fmt(claimed)}. Actual ≈ €{fmt(round(total))}."""
                return wrap(truth, lead, body)

            m = re.search(r"after three years, the delivery truck's carrying value is €([\d,.]+)", stmt, re.I)
            if m and truck:
                claimed = float(m.group(1).replace(",", ""))
                a = assets[truck]
                bv = a["cost"] - 3 * ann[truck]
                lead = "Carrying value after 3 years = cost − 3 × annual charge."
                body = f"""$$
{fmt(a['cost'])} - 3 \\times {fmt(round(ann[truck]))} = {fmt(round(bv))}
$$

Claimed €{fmt(claimed)}. Actual ≈ €{fmt(round(bv))}."""
                return wrap(truth, lead, body)

            m = re.search(r"after three years, the computer equipment, originally costing €([\d,.]+), is fully written down to nil", stmt, re.I)
            if m and comp:
                a = assets[comp]
                lead = "Nil residual and elapsed years ≥ useful life ⇒ carrying value nil."
                body = f"""Cost €{fmt(a['cost'])}, life {fmt(a['life'])} years, residual €{fmt(a['resid'])}.
After 3 years: {'fully written down' if 3 >= a['life'] else 'not yet fully written down'}."""
                return wrap(truth, lead, body)

            m = re.search(r"after three years, the combined carrying value of all three assets exceeds €([\d,.]+)", stmt, re.I)
            if m and len(assets) >= 3:
                claimed = float(m.group(1).replace(",", ""))
                total_bv = 0.0
                for k, a in assets.items():
                    if 3 >= a["life"]:
                        bv = a["resid"]
                    else:
                        bv = a["cost"] - 3 * ann[k]
                    total_bv += bv
                lead = "Sum carrying values after three years (floored at residual / fully depreciated)."
                body = f"""Combined carrying value ≈ €{fmt(round(total_bv))}.
Threshold exceeds €{fmt(claimed)}."""
                return wrap(truth, lead, body)

            m = re.search(r"after three years, more than (\d+(?:\.\d+)?)% of the machinery's purchase price has been depreciated", stmt, re.I)
            if m and mach:
                th = float(m.group(1))
                frac = (3 * ann[mach]) / assets[mach]["cost"]
                lead = "3 × annual charge ÷ machinery cost."
                body = f"""$$
{pct(frac)}\\%\\text{{ depreciated; threshold more than }}{th:g}\\%
$$"""
                return wrap(truth, lead, body)

            m = re.search(r"delivery truck's annual depreciation charge is more than (\d+(?:\.\d+)?)% higher than the computer", stmt, re.I)
            if m and truck and comp:
                th = float(m.group(1))
                prem = (ann[truck] - ann[comp]) / ann[comp]
                lead = "Percentage premium of truck annual charge over computer charge."
                body = f"""$$
\\frac{{{fmt(round(ann[truck]))}-{fmt(round(ann[comp]))}}}{{{fmt(round(ann[comp]))}}} = {pct(prem)}\\%
$$"""
                return wrap(truth, lead, body)

            m = re.search(r"machinery accounts for more than (\d+(?:\.\d+)?)% of the combined annual depreciation", stmt, re.I)
            if m and mach:
                th = float(m.group(1))
                share = ann[mach] / sum(ann.values())
                lead = "Machinery charge ÷ combined annual depreciation."
                body = f"""$$
{pct(share)}\\%\\text{{; threshold more than }}{th:g}\\%
$$"""
                return wrap(truth, lead, body)

            m = re.search(r"machinery's annual depreciation charge is exactly €([\d,.]+)", stmt, re.I)
            if m and mach:
                claimed = float(m.group(1).replace(",", ""))
                lead = "Machinery annual charge = cost ÷ life (nil residual)."
                body = f"""$$
{fmt(round(ann[mach]))}\\text{{ vs claimed }}{fmt(claimed)}
$$"""
                return wrap(truth, lead, body)

            m = re.search(r"asset a's annual depreciation charge is more than (\d+(?:\.\d+)?)% higher than asset b's", stmt, re.I)
            if m and mach and truck:
                th = float(m.group(1))
                prem = (ann[mach] - ann[truck]) / ann[truck]
                lead = "Compare Asset A and Asset B straight-line annual charges."
                body = f"""$$
A={fmt(round(ann[mach]))}, B={fmt(round(ann[truck]))}, \\text{{premium}}={pct(prem)}\\%
$$

Threshold more than {th:g}%."""
                return wrap(truth, lead, body)

            if "residual value" in sl and "ignored" in sl:
                lead = "Straight-line uses (cost − residual) ÷ life; residual is not ignored."
                body = "Deducting residual value reduces the depreciable amount. Claiming it is ignored is false."
                return wrap(truth, lead, body)
            if "without recording depreciation" in sl and "overstated" in sl:
                lead = "Depreciation writes assets down as benefits are consumed."
                body = "Omitting depreciation leaves assets at historical cost and overstates non-current assets."
                return wrap(truth, lead, body)
            if "same amount each year" in sl and "straight-line" in sl:
                lead = "Straight-line spreads depreciable cost evenly over useful life."
                body = "With nil residual, each year charges cost ÷ life — a constant amount."
                return wrap(truth, lead, body)
            if "charged directly against cash" in sl or ("cash payment" in sl and "depreciation" in sl):
                lead = "Depreciation is a non-cash allocation of a past capital outlay."
                body = "The annual charge does not require a fresh cash payment when recorded."
                return wrap(truth, lead, body)
            if "shorter useful life" in sl and "higher annual" in sl:
                lead = "Fewer years ⇒ larger annual straight-line charge for the same depreciable amount."
                body = "All else equal, a shorter useful life raises the yearly charge."
                return wrap(truth, lead, body)
            if "residual value reduces the amount" in sl:
                lead = "Depreciable amount = cost − residual value."
                body = "A positive residual for Asset B reduces what is spread over its life."
                return wrap(truth, lead, body)
            if "land is not subject to depreciation" in sl:
                lead = "Land has an indefinite useful life and is not depreciated."
                body = "Unlike buildings and machinery, land does not wear out through ordinary use."
                return wrap(truth, lead, body)
            if "fully written down to nil residual value at the end of its useful life" in sl:
                lead = "Nil residual ⇒ carrying value reaches zero at the end of useful life."
                body = "Asset A's cost is fully allocated by the final year when residual is nil."
                return wrap(truth, lead, body)

    # Misc ratio claims
    m = re.match(r"Non-current assets exceed current assets by more than (\d+(?:\.\d+)?)% of current assets\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("nca") else (y2 or y1)
        if bs and bs.get("ca"):
            excess = (bs["nca"] - bs["ca"]) / bs["ca"]
            lead = "Express (NCA − CA) as a percentage of CA."
            body = f"""$$
{pct(excess)}\\%\\text{{; threshold more than }}{th:g}\\%
$$"""
            return wrap(truth, lead, body)

    m = re.match(r"Trade payables amount to more than (\d+(?:\.\d+)?)% of total current liabilities\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("payables") else (y2 or y1)
        if bs and bs.get("cl"):
            ratio = bs["payables"] / bs["cl"]
            lead = "Trade payables ÷ current liabilities."
            body = f"""$$
{pct(ratio)}\\%\\text{{; threshold more than }}{th:g}\\%
$$"""
            return wrap(truth, lead, body)

    m = re.match(r"Non-current liabilities make up more than (\d+(?:\.\d+)?)% of total liabilities\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("ncl") else (y2 or y1)
        if bs and bs.get("liab"):
            ratio = bs["ncl"] / bs["liab"]
            lead = "NCL ÷ total liabilities."
            body = f"""$$
{pct(ratio)}\\%\\text{{; threshold more than }}{th:g}\\%
$$"""
            return wrap(truth, lead, body)

    m = re.search(r"return on equity.*?exceeds (\d+(?:\.\d+)?)%", stmt, re.I)
    if m and amt_raw:
        th = float(m.group(1))
        opv = amt_raw.get("operating result") or amt_raw.get("operating result (€ thousands)")
        eq = amt_raw.get("total equity")
        if opv and eq:
            lead = "ROE here = operating result ÷ total equity."
            body = f"""$$
\\frac{{{fmt(opv)}}}{{{fmt(eq)}}} = {pct(opv/eq)}\\%
$$"""
            return wrap(truth, lead, body)

    m = re.search(r"return on capital employed.*?exceeds (\d+(?:\.\d+)?)%", stmt, re.I)
    if m and amt_raw:
        th = float(m.group(1))
        opv = amt_raw.get("operating result") or amt_raw.get("operating result (€ thousands)")
        eq = amt_raw.get("total equity")
        lt = amt_raw.get("long-term bank loan", 0)
        bonds = amt_raw.get("bonds payable", 0)
        if opv and eq is not None:
            cap = eq + lt + bonds
            lead = "ROCE = operating result ÷ (equity + non-current liabilities)."
            body = f"""$$
\\frac{{{fmt(opv)}}}{{{fmt(cap)}}} = {pct(opv/cap)}\\%
$$"""
            return wrap(truth, lead, body)

    m = re.search(r"cash flow from operating activities amounts to less than (\d+(?:\.\d+)?)% of the operating result", stmt, re.I)
    if m and amt_raw:
        th = float(m.group(1))
        cf = amt_raw.get("cash flow from operating activities")
        opv = amt_raw.get("operating result")
        if cf is not None and opv:
            ratio = abs(cf) / opv
            lead = "Operating cash flow ÷ operating result."
            body = f"""$$
{pct(ratio)}\\%\\text{{; threshold less than }}{th:g}\\%
$$"""
            return wrap(truth, lead, body)

    if "acid-test" in sl and "more conservative" in sl:
        lead = "The acid-test excludes inventory from current assets."
        body = "Leaving inventory out makes the quick ratio ≤ the current ratio, so it is the more conservative liquidity test."
        return wrap(truth, lead, body)

    return None


# ── conceptual ─────────────────────────────────────────────────────────────

CLASS_RX = [
    (re.compile(r"classified as inventory because inventory can include any physical", re.I),
     "Inventory is stock held for sale, not every physical item owned. Equipment used in operations is a non-current tangible asset."),
    (re.compile(r"held by a dealer for resale.*?non-current asset because the dealer is a business", re.I),
     "Resale intent makes dealer stock inventory (current). Being a business does not turn resale stock into a non-current operating asset."),
    (re.compile(r"kept in service by an operating business for more than one year is classified as a non-current tangible", re.I),
     "Operating use beyond one year meets the non-current tangible (fixed) asset definition."),
    (re.compile(r"must always be classified identically on every balance sheet regardless of how it is held", re.I),
     "Classification follows how the reporting entity holds the item (use vs resale), not physical form alone."),
    (re.compile(r"may be a non-current asset for one business and inventory for another, depending on whether it is used or held for sale", re.I),
     "Intended use decides the line: operations → non-current; held for sale → inventory."),
    (re.compile(r"depends mainly on its purchase price rather than on management's inten", re.I),
     "Price affects measurement; classification between fixed asset and inventory follows intended use."),
    (re.compile(r"depends on management's intention to use it in operations rather than", re.I),
     "Management intent to use in operations (typically >1 year) places the item among non-current assets."),
    (re.compile(r"acquired for resale still counts among non-current assets as long as it remains unsold", re.I),
     "Resale intent puts the item in inventory from acquisition; time unsold does not make it non-current."),
    (re.compile(r"used daily in a business's own operations should be recorded as inventory because it wears out", re.I),
     "Wear is handled by depreciating a fixed asset. Daily operating use supports non-current classification, not inventory."),
    (re.compile(r"buyer must continue to record it as inventory", re.I),
     "After sale, the buyer's intent governs: use in operations → buyer's non-current asset, not inventory."),
]


def conceptual(stmt: str, truth: bool, subsection: str, title: str) -> str:
    for rx, prose in CLASS_RX:
        if rx.search(stmt):
            lead = "Balance-sheet classification follows intended use and the current/non-current split, not physical appearance alone."
            return wrap(truth, lead, prose)

    sl = stmt.lower()
    theory = THEORY.get(subsection[:3], THEORY["6.1"])

    if re.search(r"correctly classified as a current liability", sl):
        return wrap(truth, "Current liabilities are due within one year or the operating cycle.",
                    "Trade payables to suppliers are routinely short-term; the euro amount does not change that rule.")
    if re.search(r"reclassified as a current liability because nothing in the extract indicates", sl):
        return wrap(truth, "Long-term loans stay non-current unless a near-term maturity is shown.",
                    "Silence about repayment within one year is not grounds to force reclassification into current liabilities.")
    if "within equity" in sl and ("loan" in sl or "bank" in sl):
        return wrap(truth, "Borrowed funds are liabilities; equity is the owners' residual interest.",
                    "A bank loan creates an obligation to a lender and cannot be classified as equity.")
    if "overdraft" in sl and "non-current" in sl:
        return wrap(truth, "Bank overdrafts are current liabilities.",
                    "Even if renewed in practice, overdrafts are presented as current, not with long-term debt.")
    if re.search(r"inventory.*?correctly classified as a current asset", sl):
        return wrap(truth, "Inventory is held for sale or consumption in the cycle.",
                    "It is a current asset — not an intangible and not a non-current operating asset.")
    if "non-current assets normally have a useful life of more than one year" in sl:
        return wrap(truth, "Non-current assets are held for use beyond one accounting period.",
                    "Useful life beyond one year plus operating intent (not ordinary resale) define the category.")
    if "shareholder sells shares to another" in sl and "corporation always receives" in sl:
        return wrap(truth, "Secondary-market trades move cash between investors.",
                    "The company is not a party to that trade and does not receive new share capital from it.")
    if "secondary-market trading changes who owns" in sl or (
        "does not, by itself, inject fresh equity" in sl
    ):
        return wrap(
            truth,
            "On a stock exchange, existing shares change hands between investors.",
            "That transfer does not raise new capital for the issuer; fresh equity cash comes only from primary issues or similar company transactions.",
        )
    if "external financial reporting" in sl or ("financial accounting rather than management" in sl):
        return wrap(truth, "Financial accounting reports for external users; management accounting is internal.",
                    "A published extract for lenders or shareholders is financial accounting by purpose and audience.")
    if "could not rely on it at all" in sl and "one financial year" in sl:
        return wrap(truth, "Single-year statements are routinely used, often with comparatives.",
                    "One year limits trends but does not make the extract useless to external users.")
    if "reasonable assurance" in sl:
        return wrap(truth, "Audits provide reasonable assurance, not absolute certainty.",
                    "The opinion addresses material misstatement risk, not a guarantee.")
    if "identical statutory format" in sl and "management" in sl:
        return wrap(truth, "Management reports are not bound to the statutory published format.",
                    "Internal reports may use whatever layout managers need.")
    if "never be disclosed to any party outside" in sl:
        return wrap(truth, "Published figures exist for outside readers.",
                    "Shareholders, lenders, and tax authorities routinely see such amounts.")
    if "not for guaranteeing the business will remain profitable" in sl:
        return wrap(truth, "Auditors opine on fair presentation of figures, not future profits.",
                    "That correctly limits the audit role.")
    if "tax authorities have no legitimate interest" in sl:
        return wrap(truth, "Tax authorities are a standard external user of financial statements.",
                    "Reported profit feeds assessments; denying any interest is false.")
    if "added back" in sl and "depreciation" in sl and "indirect" in sl:
        return wrap(truth, "Under the indirect method, non-cash expenses are added back to profit.",
                    "Depreciation reduced profit without using cash, so it is added back when reconciling to operating cash.")
    if "profit" in sl and "cash" in sl and ("never" in sl or "can never" in sl or "while still" in sl):
        return wrap(truth, "Profit and cash movement are different measures.",
                    "A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections)."
                    if not truth or "while still" in sl else
                    "Equating every profit with an automatic cash increase is wrong.")

    # Generic deepen tied to theory + statement structure
    lead = theory.split(".")[0] + "."
    if "because" in stmt:
        main, reason = stmt.split("because", 1)
        if truth:
            body = (
                f"The claim states: {main.strip()}. The reason given — {reason.strip()} — "
                f"fits the chapter rule. {theory}"
            )
        else:
            body = (
                f"The claim states: {main.strip()}. The reason — {reason.strip()} — "
                f"does not support that label under the chapter definitions. {theory}"
            )
    else:
        snippet = stmt if len(stmt) <= 200 else stmt[:197] + "…"
        if truth:
            body = f"The wording matches the relevant rule for \"{title}\". {theory} Applied here: \"{snippet}\""
        else:
            body = (
                f"Absolute or misapplied wording conflicts with the rule for \"{title}\". {theory} "
                f"Rejected claim: \"{snippet}\""
            )
    return wrap(truth, lead, body)


def deepen_case(case: dict) -> list[str]:
    tables = parse_tables(case.get("context") or "")
    out = []
    for stmt, key in zip(case["statements"], case["answer_key"]):
        truth = bool(key)
        expl = try_numeric(stmt, truth, tables)
        if expl is None:
            expl = conceptual(stmt, truth, case.get("subsection") or "6.1", case.get("title") or "")
        want = "TRUE — " if truth else "FALSE — "
        if not expl.startswith(want):
            expl = want + expl.split(" — ", 1)[1]
        closer = "The statement is true." if truth else "The statement is false."
        if not expl.rstrip().endswith(closer):
            expl = expl.rstrip() + "\n\n" + closer
        if "A student who" in expl:
            expl = re.sub(r"\s*A student who.*?$", "", expl, flags=re.S).rstrip() + "\n\n" + closer
        out.append(expl)
    return out


def audit(case: dict) -> list[str]:
    errs = []
    for i, (expl, key) in enumerate(zip(case["tactical_explanations"], case["answer_key"])):
        want = "TRUE — " if key else "FALSE — "
        if not expl.startswith(want):
            errs.append(f"{case['case_id']} {LETTERS[i]}: header")
        closer = "The statement is true." if key else "The statement is false."
        if not expl.rstrip().endswith(closer):
            errs.append(f"{case['case_id']} {LETTERS[i]}: closer")
        if "A student who" in expl:
            errs.append(f"{case['case_id']} {LETTERS[i]}: filler")
        if len(expl) < 100:
            errs.append(f"{case['case_id']} {LETTERS[i]}: short")
    return errs


def process_range(start: int, count: int, write: bool = True) -> dict:
    cases = json.loads(PATH.read_text())
    cases.sort(key=lambda c: c["case_id"])
    targets = cases[start : start + count]
    errs = []
    lens = []
    math_n = 0
    for case in targets:
        new = deepen_case(case)
        case["tactical_explanations"] = new
        for e in new:
            lens.append(len(e))
            if "$$" in e:
                math_n += 1
        errs.extend(audit(case))
    if write:
        by_id = {c["case_id"]: c for c in json.loads(PATH.read_text())}
        # preserve order of original file
        original = json.loads(PATH.read_text())
        updated = {c["case_id"]: c for c in targets}
        for c in original:
            if c["case_id"] in updated:
                c["tactical_explanations"] = updated[c["case_id"]]["tactical_explanations"]
        PATH.write_text(json.dumps(original, ensure_ascii=False, indent=2) + "\n")
    first = targets[0]["case_id"] if targets else None
    last = targets[-1]["case_id"] if targets else None
    return {
        "start": start,
        "count": len(targets),
        "range": f"{first}–{last}",
        "avg_len": round(sum(lens) / len(lens)) if lens else 0,
        "math": math_n,
        "errs": errs,
    }


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--count", type=int, default=25)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    info = process_range(args.start, args.count, write=not args.dry_run)
    print(info)
    if info["errs"]:
        print("ERRS", info["errs"][:15])
