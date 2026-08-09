# -*- coding: utf-8 -*-
"""Polish ch11_raw.json: fix truncated titles and PDF-flat exponents → KaTeX."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
EXTRACT_DIR = ROOT / "textbook" / "output" / "ch11_extract"
EMIT = ROOT / "textbook" / "output" / "emit_ch11_from_raw.py"

CURRENCY_RE = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)"
    r"(?![0-9A-Za-z+\-*=<>\u2260\u2264\u2265(\\{^_$])"
)

KNOWN_TITLES: dict[tuple[str, int], str] = {
    ("11.1", 15): "Effective Rates for a 10% Nominal Rate Under Three Frequencies",
    ("11.2", 9): "How the Continuous-vs-Annual Gap Widens With Rate and Time at a Regional Bank",
    ("11.2", 10): "Continuous Compounding as the Ceiling on a Fund's Return at an Investment Advisory Firm",
    ("11.2", 12): "A Corporate Treasurer's Three-Bank Comparison With Differing Nominal Rates",
    ("11.2", 14): "Crossover Point Between a Growing Equity Stake and Shrinking Factory Equipment",
    ("11.2", 15): "Verifying the Compounding-Frequency Ceiling Across Four Schedules for a Municipal Reserve",
    ("11.2", 17): "A Logistics Company's Two-Phase Continuous Growth: Expansion Then Maturity",
    ("11.2", 18): "Reverse-Engineering a Crane's Implied Depreciation Rate for a Construction Equipment Reseller",
    ("11.2", 20): "Capstone: A Three-Asset Family Office Portfolio Under Continuous Growth and Decay",
    ("11.3", 11): "Finding an Equivalent Annual Rate for a Continuously Discounted Trust Payment",
    ("11.3", 17): "Combining a Private-Equity Exit Payment with a Short-Dated Side Payment",
    ("11.3", 20): "Pricing Two Franchise Payments Related by a Common Time Horizon",
    ("11.5", 3): "Future Value of an Ordinary Annuity for a Dental Clinic's Equipment Fund",
    ("11.5", 4): "Future Value of an Ordinary Annuity for a Logistics Company's Fleet Fund",
    ("11.5", 6): "Present Value of an Ordinary Annuity vs. a Perpetuity for a Nonprofit Scholarship",
    ("11.5", 7): "Comparing Payment Streams via Present Value for a Machinery Purchase",
    ("11.5", 13): "Combined Renovation Cost and Perpetual Maintenance Fund for a City Park",
    ("11.5", 14): "Growing Perpetuity Valuation of a Rental Property's Escalating Cash Flows",
    ("11.5", 16): "Comparing Level vs. Growing Royalty-Stream Purchase Deals for a Musician",
    ("11.5", 17): "Present Value Under Continuous Compounding for a Bond Retirement Fund",
    ("11.5", 18): "Continuous-Compounding Lump Sum vs. Discrete Annuity for a Biotech Milestone",
    ("11.5", 19): "Mixed Financial Planning: Annuity Due, Continuous Compounding & Perpetuity",
    ("11.6", 10): "Capstone: Equipment Loan Paid as an Annuity Due, Plus a Separate Reserve Fund",
    ("11.6", 12): "Capstone: Comparing Three Payment Schedules for a Hospital Imaging Center",
}

LOWER_CONTINUATION = re.compile(r"^(and|or|of|for|a|an|the|with|to|from|vs\.?|&|then)\b")
UPPER_CONTINUATION = re.compile(
    r"^(Under|Plus|Then|Frequencies|Maturity|Rates|Equipment|Bank|Payment|Horizon|"
    r"Fund|Scholarship|Purchase|Musician|Perpetuity|Park|Flows|Reseller|"
    r"Municipal|Separate|Imaging|Investment|Biotech|Trust|Factory)\b"
)
SENTENCE_START = re.compile(
    r"^(?:A\s+[a-z]|An\s+[a-z]|The\s+[a-z]|Ms\.|Mr\.|Mrs\.|Dr\.|"
    r"At\s|In\s|On\s|If\s|When\s|After\s|Before\s)"
)
TITLE_INCOMPLETE = re.compile(
    r"(?:\b(?:a|an|the|and|or|of|for|Under|Plus|Then|with|to|from|vs\.?|&|Three|Regional|"
    r"Construction|Nominal|Factory|Discounted|Side|Time|Equipment|Fleet|Nonprofit|"
    r"Machinery|City|Cash|Retirement)$|Plus a$|for a Hospital$|Under Continuous Growth$|for a$)"
)
TITLECASE_THEN_SENTENCE = re.compile(
    r"^((?:[A-Z][A-Za-z0-9\-']+(?:\s+[A-Z][A-Za-z0-9\-']+)*)\s+)"
    r"((?:A|An|The|Ms\.|Mr\.|Mrs\.|Dr\.)\b.*)$",
    re.S,
)


def protect_currency(text: str) -> tuple[str, list[str]]:
    held: list[str] = []

    def keep(m: re.Match[str]) -> str:
        held.append(m.group(0))
        return f"\x00CUR{len(held) - 1}\x00"

    return CURRENCY_RE.sub(keep, text), held


def restore_currency(text: str, held: list[str]) -> str:
    return re.sub(r"\x00CUR(\d+)\x00", lambda m: held[int(m.group(1))], text)


def protect_math(text: str) -> tuple[str, list[str]]:
    held: list[str] = []

    def keep(m: re.Match[str]) -> str:
        held.append(m.group(0))
        return f"\x00MATH{len(held) - 1}\x00"

    work = re.sub(r"\$\$[\s\S]*?\$\$", keep, text)
    work = re.sub(r"\$(?![\d\x00])[^$\n]+?\$", keep, work)
    return work, held


def restore_math(text: str, held: list[str]) -> str:
    return re.sub(r"\x00MATH(\d+)\x00", lambda m: held[int(m.group(1))], text)


def wrap(expr: str) -> str:
    expr = expr.strip()
    if expr.startswith("$") and expr.endswith("$") and expr.count("$") == 2:
        return expr
    expr = expr.replace("·", r"\cdot").replace("δ", r"\delta").replace("×", r"\times")
    # ensure space after \delta before letter
    expr = re.sub(r"\\delta(?=[A-Za-z])", r"\\delta ", expr)
    expr = re.sub(r"\s+", " ", expr).strip()
    return f"${expr}$"


def looks_numeric_paren(group: str) -> bool:
    inner = group[1:-1].strip()
    if not inner:
        return False
    if re.fullmatch(r"[A-Za-z][A-Za-z\s\-]*", inner):
        return False
    return bool(
        re.fullmatch(
            r"[0-9.+/\-*\sA-Za-z\\]+(?:\s*[+\-*/]\s*[0-9.+/\-*\sA-Za-z\\]+)*",
            inner,
        )
    )


def load_toc_titles() -> dict[tuple[str, int], str]:
    toc: dict[tuple[str, int], str] = dict(KNOWN_TITLES)
    for p in sorted(EXTRACT_DIR.glob("11.*.txt")):
        sid = p.stem
        text = p.read_text(encoding="utf-8", errors="replace")
        for m in re.finditer(r"^Task\s+(\d+)\.\s+(.+)$", text, re.M):
            num = int(m.group(1))
            title = re.sub(r"\s*\d+\.?\d*/5\s*$", "", m.group(2).strip()).strip()
            key = (sid, num)
            if key not in toc or (
                len(title) > len(toc[key]) and not TITLE_INCOMPLETE.search(title)
            ):
                toc[key] = title
        for m in re.finditer(r"(?m)^(\d{1,2})\n(.+?)\s+(\d+\.?\d*/5)\s*$", text):
            num = int(m.group(1))
            title = re.sub(r"\s*\d+\.?\d*/5\s*$", "", m.group(2).strip()).strip()
            key = (sid, num)
            if len(title) >= 8 and (
                key not in toc
                or (len(title) > len(toc[key]) and not TITLE_INCOMPLETE.search(title))
            ):
                toc[key] = title
        for m in re.finditer(r"(?m)^(\d{1,2})\n(Capstone:[^\n]+)$", text):
            num = int(m.group(1))
            title = m.group(2).strip()
            key = (sid, num)
            if key not in toc or len(title) > len(toc[key]):
                toc[key] = title
        for m in re.finditer(r"(?m)^(Capstone:[^\n]+)$", text):
            title = m.group(1).strip()
            for (s, n), old in list(toc.items()):
                if s == sid and old.startswith("Capstone:") and title.startswith(old[:50]):
                    if len(title) > len(old):
                        toc[(s, n)] = title
    toc.update(KNOWN_TITLES)
    return toc


def strip_leaked_prefix(ctx: str, leaked: str) -> str:
    words = leaked.split()
    if not words or not ctx:
        return ctx
    for k in range(len(words), 0, -1):
        pat = r"^\s*" + r"\s+".join(re.escape(w) for w in words[:k]) + r"\s*"
        new_ctx, n = re.subn(pat, "", ctx, count=1)
        if n:
            return new_ctx.lstrip()
    return ctx


def merge_title_context(
    title: str, context: str, toc_title: str | None
) -> tuple[str, str, bool]:
    changed = False
    title = (title or "").strip()
    context = (context or "").strip()
    orig_title, orig_ctx = title, context

    if toc_title:
        toc_title = re.sub(r"\s*\d+\.?\d*/5\s*$", "", toc_title.strip()).strip()
        if toc_title and len(toc_title) >= len(title) and (
            toc_title.startswith(title)
            or title.startswith(toc_title[: min(30, len(toc_title))])
        ):
            if toc_title != title:
                if toc_title.startswith(title):
                    leaked = toc_title[len(title) :].strip()
                else:
                    i = 0
                    while i < len(title) and i < len(toc_title) and title[i] == toc_title[i]:
                        i += 1
                    leaked = toc_title[i:].strip()
                title = toc_title
                if leaked:
                    context = strip_leaked_prefix(context, leaked)
                changed = True

    def peel_one() -> bool:
        nonlocal title, context
        m = re.match(r"^(\S+)(?:\s+(.*))?$", context, re.S)
        if not m:
            return False
        word, rest = m.group(1), (m.group(2) or "")
        title = f"{title} {word}".strip()
        context = rest.lstrip()
        return True

    guard = 0
    while context and guard < 30:
        guard += 1
        if context[0].islower() or LOWER_CONTINUATION.match(context):
            if not peel_one():
                break
            changed = True
            continue
        m = TITLECASE_THEN_SENTENCE.match(context)
        if m and (TITLE_INCOMPLETE.search(title) or UPPER_CONTINUATION.match(context) or changed):
            leaked = m.group(1).strip()
            title = f"{title} {leaked}".strip()
            context = m.group(2).lstrip()
            changed = True
            continue
        if UPPER_CONTINUATION.match(context) and (
            TITLE_INCOMPLETE.search(title) or not SENTENCE_START.match(context)
        ):
            if not peel_one():
                break
            changed = True
            continue
        break

    title = re.sub(r"\s+", " ", title).strip()
    context = re.sub(r"\s+", " ", context).strip() if context else ""
    if title != orig_title or context != orig_ctx:
        changed = True
    return title, context, changed


def katexify_once(text: str) -> tuple[str, int]:
    if not text:
        return text, 0
    n = 0
    work, cur_held = protect_currency(text)
    work, math_held = protect_math(work)

    def sub(pattern: str, repl, s: str, flags=0) -> str:
        nonlocal n

        def _r(m: re.Match[str]) -> str:
            nonlocal n
            out = repl(m) if callable(repl) else m.expand(repl)
            if out != m.group(0):
                n += 1
            return out

        return re.sub(pattern, _r, s, flags=flags)

    # 1. Unicode cleanup (keep × ≈ as Unicode in prose)
    work = work.replace("−", "-").replace("–", "-")
    work = work.replace("′", "'").replace("″", "''").replace("²", "^2")

    # --- Prefer compound formula wraps (order matters) ---

    # Continuous growth: S(t) = S0·e^(rt) / S0e^(rt) / S0 · ert
    work = sub(
        r"S\(t\)\s*=\s*S0\s*[·\*]\s*e(?:\^\(rt\)|\^{rt}|rt)",
        lambda m: wrap(r"S(t) = S_0 e^{rt}"),
        work,
    )
    work = sub(
        r"S\(t\)\s*=\s*S0\s*e(?:\^\(rt\)|\^{rt}|rt)",
        lambda m: wrap(r"S(t) = S_0 e^{rt}"),
        work,
    )
    work = sub(
        r"v\(t\)\s*=\s*v0\s*[·\*]\s*e\^\(?-?\s*δ\s*t\)?",
        lambda m: wrap(r"v(t) = v_0 e^{-\delta t}"),
        work,
    )
    work = sub(
        r"v\(t\)\s*=\s*v0\s*[·\*]\s*e\^\(-δt\)",
        lambda m: wrap(r"v(t) = v_0 e^{-\delta t}"),
        work,
    )

    # 15 / 7 / 5 / 4
    work = sub(
        r"R\s*=\s*\(1\s*\+\s*r/n\)n\s*-\s*1",
        lambda m: wrap(r"R = (1 + r/n)^{n} - 1"),
        work,
    )
    work = sub(
        r"S\(t\)\s*=\s*S0\(1\s*\+\s*r/n\)nt\b",
        lambda m: wrap(r"S(t) = S_0(1 + r/n)^{nt}"),
        work,
    )
    work = sub(
        r"S0\(1\s*\+\s*r/n\)nt\b",
        lambda m: wrap(r"S_0(1 + r/n)^{nt}"),
        work,
    )
    work = sub(
        r"\(1\s*\+\s*r/n\)nt\b",
        lambda m: wrap(r"(1 + r/n)^{nt}"),
        work,
    )
    work = sub(
        r"\(1\s*\+\s*r/n\)n\b",
        lambda m: wrap(r"(1 + r/n)^{n}"),
        work,
    )

    # 8. S0 · e^{rt} / S0e^{rt} / S0 ert / P · ert
    work = sub(
        r"S0\s*[·\*]\s*e(?:\^\(rt\)|\^{rt}|rt)",
        lambda m: wrap(r"S_0 e^{rt}"),
        work,
    )
    work = sub(
        r"S0\s*e(?:\^\(rt\)|\^{rt}|rt)",
        lambda m: wrap(r"S_0 e^{rt}"),
        work,
    )
    work = sub(
        r"(?<![A-Za-z])P\s*[·\*]\s*ert\b",
        lambda m: wrap(r"P e^{rt}"),
        work,
    )
    work = sub(r"(?<![A-Za-z\\$\d])ert\b", lambda m: wrap(r"e^{rt}"), work)

    # Asset A0·e^(rAt) style used in capstone
    work = sub(
        r"\b([ABC])0\s*[·\*]\s*e\^\(([^)]+)\)",
        lambda m: wrap(rf"{m.group(1)}_0 e^{{{m.group(2)}}}"),
        work,
    )

    # S(t) = S0·e^(rnett) jammed net-rate*time
    work = sub(
        r"S\(t\)\s*=\s*S0\s*[·*]\s*e\^\(rnett\)",
        lambda m: wrap(r"S(t) = S_0 e^{r_{net} t}"),
        work,
    )
    work = sub(
        r"S0\s*[·*]\s*e\^\(rnett\)",
        lambda m: wrap(r"S_0 e^{r_{net} t}"),
        work,
    )
    # Freeze wraps before atomic e/S0 rules
    work = restore_math(work, math_held)
    work = restore_currency(work, cur_held)
    work, cur_held = protect_currency(work)
    work, math_held = protect_math(work)

    # 9. e^{rt}, e-rt, e^{-δt}, e^0.05, e^(...)
    work = sub(r"(?<![\\$\w])e\^\{rt\}", lambda m: wrap(r"e^{rt}"), work)
    work = sub(
        r"(?<![\\$\w])e\^\(([^)]+)\)",
        lambda m: wrap(rf"e^{{{m.group(1)}}}"),
        work,
    )
    work = sub(
        r"(?<![\\$\w])e\^([0-9]+\.[0-9]+)\b",
        lambda m: wrap(rf"e^{{{m.group(1)}}}"),
        work,
    )
    work = sub(r"(?<![\\$\w])e-rt\b", lambda m: wrap(r"e^{-rt}"), work)
    work = sub(
        r"(?<![\\$\w])e\^\(-δt\)",
        lambda m: wrap(r"e^{-\delta t}"),
        work,
    )
    work = sub(
        r"(?<![\\$\w])e-δt\b",
        lambda m: wrap(r"e^{-\delta t}"),
        work,
    )
    work = sub(
        r"(?<![\\$\w])e-(\d+(?:\.\d+)?)\b",
        lambda m: wrap(rf"e^{{-{m.group(1)}}}"),
        work,
    )

    # 14 / Ke-rt / P(t)e-rt
    work = sub(r"P\(t\)e-rt\b", lambda m: wrap(r"P(t)e^{-rt}"), work)
    work = sub(r"(?<![A-Za-z])Ke-rt\b", lambda m: wrap(r"Ke^{-rt}"), work)
    work = sub(
        r"f\(t\)\s*=\s*P\(t\)e-rt\b",
        lambda m: wrap(r"f(t) = P(t)e^{-rt}"),
        work,
    )

    # 10 / 12. (1+r)-t etc and K(1+r)-t
    work = sub(
        r"K\(1\s*\+\s*r\)\s*-\s*t\b",
        lambda m: wrap(r"K(1+r)^{-t}"),
        work,
    )
    work = sub(
        r"\(1\s*\+\s*r\)\s*-\s*\(n-1\)",
        lambda m: wrap(r"(1+r)^{-(n-1)}"),
        work,
    )
    work = sub(
        r"\(1\s*\+\s*r\)\s*-\s*t\b",
        lambda m: wrap(r"(1+r)^{-t}"),
        work,
    )
    work = sub(
        r"\(1\s*\+\s*r\)\s*-\s*n\b",
        lambda m: wrap(r"(1+r)^{-n}"),
        work,
    )
    work = sub(
        r"\(1\s*\+\s*r\)\s*-\s*1\b",
        lambda m: wrap(r"(1+r)^{-1}"),
        work,
    )

    # 13 / 11. a/(1+r)n , (1+r)n , x(1+r)n, P(1+r)n
    work = sub(
        r"\b([AaXx]|Pn|Fn|Target|A)\s*/\s*\(1\s*\+\s*r\)n\b",
        lambda m: wrap(rf"{m.group(1)}/(1+r)^{{n}}"),
        work,
    )
    work = sub(r"1/\(1\s*\+\s*r\)n\b", lambda m: wrap(r"1/(1+r)^{n}"), work)
    work = sub(
        r"/\(1\s*\+\s*r\)(\d+)\b",
        lambda m: "/" + wrap(rf"(1+r)^{{{m.group(1)}}}"),
        work,
    )
    work = sub(r"/\(1\s*\+\s*r\)n\b", lambda m: "/" + wrap(r"(1+r)^{n}"), work)
    work = sub(r"\bx\(1\s*\+\s*r\)n\b", lambda m: wrap(r"x(1+r)^{n}"), work)
    work = sub(r"\bP\(1\s*\+\s*r\)n\b", lambda m: wrap(r"P(1+r)^{n}"), work)
    work = sub(r"\(1\s*\+\s*r\)n\b", lambda m: wrap(r"(1+r)^{n}"), work)
    work = sub(r"\(1\s*\+\s*r\)t\b", lambda m: wrap(r"(1+r)^{t}"), work)

    # 2. leftover bare S0 / S(t) / v0 as variables (after compounds)
    work = sub(r"(?<![A-Za-z\\$\x00])S0(?![A-Za-z0-9])", lambda m: wrap(r"S_0"), work)
    work = sub(r"(?<![A-Za-z\\$\x00])v0(?![A-Za-z0-9])", lambda m: wrap(r"v_0"), work)
    # Only wrap standalone S(t) when not part of larger already-wrapped expr
    work = sub(r"(?<![A-Za-z\\$\x00])S\(t\)(?![A-Za-z0-9])", lambda m: wrap(r"S(t)"), work)

    # 3. (1.006)12 numeric paren exponents
    def paren_exp(m: re.Match[str]) -> str:
        g1, g2 = m.group(1), m.group(2)
        if not looks_numeric_paren(g1):
            return m.group(0)
        return wrap(f"{g1}^{{{g2}}}")

    work = sub(r"(\([^()]+\))(\d{1,3})\b", paren_exp, work)

    # series helpers
    work = sub(r"\bak2\b", lambda m: wrap(r"ak^{2}"), work)
    work = sub(r"\bakn-1\b", lambda m: wrap(r"ak^{n-1}"), work)
    work = sub(r"\bkn-1\b", lambda m: wrap(r"k^{n-1}"), work)
    work = sub(
        r"\(target factor\)1/t\b",
        lambda m: wrap(r"(target factor)^{1/t}"),
        work,
    )

    work = restore_math(work, math_held)
    work = restore_currency(work, cur_held)

    # Merge ONLY immediately adjacent inline math (no whitespace): $a$$b$ → $ab$
    prev = None
    while prev != work:
        prev = work
        work2, c = re.subn(r"\$([^$]+)\$\$([^$]+)\$", r"$\1\2$", work)
        if c:
            n += c
            work = work2
        else:
            break

    # Spacing fixes around math / currency
    work = re.sub(r"([A-Za-z0-9×≈;,])(\$(?=[A-Za-z\\]|e\^))", r"\1 \2", work)
    work = re.sub(r"(\$)([=×])", r"\1 \2", work)
    work = re.sub(r"([A-Za-z0-9.,;:!?×≈)])(\$\d)", r"\1 \2", work)
    work = re.sub(r" {2,}", " ", work)

    return work, n


def katexify(text: str, passes: int = 3) -> tuple[str, int]:
    total = 0
    work = text
    for _ in range(passes):
        work, c = katexify_once(work)
        total += c
        if c == 0:
            break
    return work, total


STRING_FIELDS = ("title", "context", "given", "formulas", "steps")
LIST_FIELDS = ("statements", "explanations")


def polish_task(task: dict, toc: dict[tuple[str, int], str], sid: str) -> tuple[int, int]:
    titles_fixed = 0
    exp_count = 0
    num = task.get("local_num")
    toc_title = toc.get((sid, num)) if num is not None else None

    title, context, changed = merge_title_context(
        task.get("title") or "", task.get("context") or "", toc_title
    )
    if changed:
        titles_fixed = 1
        task["title"] = title
        task["context"] = context

    for field in STRING_FIELDS:
        val = task.get(field)
        if not isinstance(val, str) or not val:
            continue
        new_val, c = katexify(val)
        if new_val != val:
            task[field] = new_val
        exp_count += c

    for field in LIST_FIELDS:
        lst = task.get(field)
        if not isinstance(lst, list):
            continue
        new_list = []
        for item in lst:
            if isinstance(item, str) and item:
                new_item, c = katexify(item)
                exp_count += c
                new_list.append(new_item)
            else:
                new_list.append(item)
        task[field] = new_list

    return titles_fixed, exp_count


def is_context_scar(title: str, ctx: str) -> bool:
    if not ctx:
        return False
    if ctx[0].islower():
        return True
    if LOWER_CONTINUATION.match(ctx):
        return True
    if UPPER_CONTINUATION.match(ctx) and TITLE_INCOMPLETE.search(title or ""):
        return True
    if TITLECASE_THEN_SENTENCE.match(ctx) and TITLE_INCOMPLETE.search(title or ""):
        return True
    return False


def count_scars(data: dict) -> tuple[list[str], list[str]]:
    lower_ctx: list[str] = []
    paren_dig: list[str] = []
    scar_re = re.compile(r"(\([^)]*\d+\.\d+[^)]*\))(\d{1,3})\b")
    flat_exp = re.compile(r"(\(1\s*\+\s*r/n\))(nt|n)\b")
    for sub in data["subsections"]:
        for task in sub["tasks"]:
            ctx = task.get("context") or ""
            title = task.get("title") or ""
            if is_context_scar(title, ctx):
                lower_ctx.append(
                    f"{sub['id']}#{task['local_num']}: {title[:70]!r} || {ctx[:70]!r}"
                )

            def walk(o, path=""):
                if isinstance(o, str):
                    for m in scar_re.finditer(o):
                        if looks_numeric_paren(m.group(1)):
                            paren_dig.append(
                                f"{sub['id']}#{task['local_num']} {path}: {m.group(0)}"
                            )
                    for m in flat_exp.finditer(o):
                        paren_dig.append(
                            f"{sub['id']}#{task['local_num']} {path} flat: {m.group(0)}"
                        )
                elif isinstance(o, list):
                    for i, x in enumerate(o):
                        walk(x, f"{path}[{i}]")
                elif isinstance(o, dict):
                    for k, v in o.items():
                        if k in ("answer_key", "difficulty_raw", "difficulty_level", "local_num"):
                            continue
                        walk(v, f"{path}.{k}" if path else k)

            walk(task)
    return lower_ctx, paren_dig


def main() -> None:
    toc = load_toc_titles()
    data = json.loads(RAW.read_text(encoding="utf-8"))

    titles_fixed = 0
    exp_total = 0
    for sub in data["subsections"]:
        sid = sub["id"]
        for task in sub["tasks"]:
            tf, ex = polish_task(task, toc, sid)
            titles_fixed += tf
            exp_total += ex

    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {RAW}")

    r = subprocess.run([sys.executable, str(EMIT)], cwd=str(ROOT))
    if r.returncode != 0:
        raise SystemExit(r.returncode)

    lower_ctx, paren_dig = count_scars(data)
    print("--- summary ---")
    print(f"titles fixed: {titles_fixed}")
    print(f"exponent transforms: {exp_total}")
    print(f"leftover lowercase/continuation contexts: {len(lower_ctx)}")
    print(f")digits / flat-exp scars: {len(paren_dig)}")
    if lower_ctx:
        print("context scar samples:")
        for s in lower_ctx[:40]:
            print(" ", s)
    if paren_dig:
        print(")digits scar samples:")
        for s in paren_dig[:40]:
            print(" ", s)

    s = next(x for x in data["subsections"] if x["id"] == "11.2")
    t = next(x for x in s["tasks"] if x["local_num"] == 20)
    print("sanity 11.2#20 title:", t["title"])
    print("sanity 11.2#20 ctx[:60]:", t["context"][:60])
    s1 = next(x for x in data["subsections"] if x["id"] == "11.1")
    t1 = s1["tasks"][0]
    print("sanity 11.1#1 title:", t1["title"])
    print("sanity 11.1#1 formulas:", t1["formulas"])
    t2 = next(x for x in s["tasks"] if x["local_num"] == 1)
    print("sanity 11.2#1 formulas:", t2["formulas"])


if __name__ == "__main__":
    main()