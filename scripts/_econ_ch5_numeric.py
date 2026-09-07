#!/usr/bin/env python3
"""Market-share arithmetic helpers for economics Ch5 deepen pass."""

from __future__ import annotations

import re

WORD_NUM = {
    "zero": 0.0,
    "one": 1.0,
    "two": 2.0,
    "five": 5.0,
    "ten": 10.0,
    "twelve": 12.0,
    "fourteen": 14.0,
    "fifteen": 15.0,
    "sixteen": 16.0,
    "twenty": 20.0,
    "twenty-five": 25.0,
    "thirty": 30.0,
    "forty": 40.0,
    "forty-five": 45.0,
    "fifty": 50.0,
    "one point five": 1.5,
    "zero point five": 0.5,
    "twelve point five": 12.5,
    "fourteen point three": 14.3,
    "sixteen point seven": 16.7,
}

_PCT_TOKEN_RE = re.compile(
    r"(one point five|zero point five|twelve point five|fourteen point three|"
    r"sixteen point seven|twenty-five|forty-five|fifteen|sixteen|fourteen|"
    r"twelve|thirty|twenty|fifty|forty|ten|five|two|one|zero|"
    r"\d+(?:\.\d+)?)\s*(?:per\s+cent|percent|%)",
    re.I,
)


def _parse_pct_token(token: str) -> float | None:
    t = token.lower()
    if t in WORD_NUM:
        return float(WORD_NUM[t])
    try:
        return float(t)
    except ValueError:
        return None


def ordered_pcts(text: str) -> list[float]:
    out: list[float] = []
    for m in _PCT_TOKEN_RE.finditer(text):
        v = _parse_pct_token(m.group(1))
        if v is not None:
            out.append(v)
    return out


def money_figures(text: str) -> list[float]:
    return [
        float(m.group(1).replace(",", ""))
        for m in re.finditer(r"(\d[\d,]*(?:\.\d+)?)\s*(?:million\s+)?euros?", text, re.I)
    ]


def expand_numeric(statement: str, mid: str, truth: bool) -> str | None:
    """If the statement involves market-share arithmetic, spell out the steps."""
    s = statement.lower()
    if not any(
        k in s
        for k in (
            "market share",
            "absolute share",
            "relative share",
            "per cent",
            "percent",
            "%",
        )
    ):
        return None
    if not re.search(r"\d", statement) and not _PCT_TOKEN_RE.search(s):
        return None

    paras: list[str] = []
    money = money_figures(statement)

    if len(money) >= 2 and (
        "absolute" in s
        or "divid" in s
        or "out of" in s
        or "versus" in s
        or "in a" in s
        or "yield" in s
        or "imply" in s
        or "account" in s
        or "correspond" in s
        or "represent" in s
        or "sales of" in s
        or "holding" in s
        or "holds" in s
    ):
        firm, market = money[0], money[1]
        if firm > market and ("out of" in s or "in a" in s):
            firm, market = market, firm
        if market != 0:
            share = firm / market * 100
            paras.append(
                "Absolute market share is the firm's sales divided by total market volume "
                "(all businesses' sales of the product), usually shown as a percentage."
            )
            paras.append(
                f"Take firm sales {firm:g} over market volume {market:g}:\n\n"
                f"$$\n\\frac{{{firm:g}}}{{{market:g}}} = {firm / market:.6g}\n$$\n\n"
                f"Convert to a percentage:\n\n"
                f"$$\n{firm / market:.6g} \\times 100 = {share:.4g}\\%\n$$"
            )
            claimed_list = ordered_pcts(s)
            claimed = claimed_list[-1] if claimed_list else None
            if claimed is not None and abs(claimed - share) > 0.25 and not truth:
                paras.append(
                    f"The statement claims about {claimed:g}%, which does not equal "
                    f"{share:.4g}% from this division."
                )
            elif truth:
                paras.append(
                    f"That is the absolute share the statement reports ({share:.4g}%)."
                )

    if "relative" in s:
        pcts = ordered_pcts(s)
        if len(pcts) >= 2:
            own, leader = pcts[0], pcts[1]
            if leader != 0:
                rel = own / leader
                paras.append(
                    "Relative market share equals the firm's absolute share divided by the "
                    "largest competitor's absolute share — a pure ratio, not a percentage of "
                    "the whole market."
                )
                paras.append(
                    f"With own share {own:g}% and leader share {leader:g}%:\n\n"
                    f"$$\n\\frac{{{own:g}}}{{{leader:g}}} = {rel:.4g}\n$$"
                )
                if abs(rel - 0.5) < 0.02:
                    paras.append(
                        "A relative share of 0.5 means the firm holds half the leader's "
                        "percentage of the market — not a 50% absolute share, and not half "
                        "of a geographic area."
                    )
                if not truth:
                    if "forty-five" in s or re.search(r"equals forty-five|equals 45", s):
                        paras.append(
                            "Adding the two percentage points (or otherwise treating them as "
                            "one combined absolute figure) is not the relative-share formula."
                        )
                    if re.search(r"equals zero\b|relative share equals zero", s):
                        paras.append(
                            "Equal absolute shares give relative share 1, not 0."
                        )
                    if re.search(
                        r"relative share of two|relative share equals two|has relative share of two",
                        s,
                    ):
                        paras.append(
                            "Inverting the ratio (leader ÷ firm) would give 2; the definition "
                            "uses own ÷ leader."
                        )
                    if "per cent of the total market" in s or "of the total market" in s:
                        paras.append(
                            "Relative share is a ratio of shares, not an absolute percentage "
                            "of total market sales."
                        )
                else:
                    if re.search(r"\b0\.5\b", s) or "zero point five" in s:
                        paras.append("That matches the stated relative share of 0.5.")
                    elif re.search(r"\b0\.33\b", s):
                        paras.append(
                            "That matches the stated relative share of about 0.33."
                        )
                    else:
                        paras.append(
                            f"The calculated relative share is {rel:.4g}, matching the claim."
                        )

    if not paras:
        return None

    if mid and mid.lower()[:50] not in " ".join(paras).lower():
        paras.insert(0, mid.rstrip(".") + ".")

    return "\n\n".join(paras)
