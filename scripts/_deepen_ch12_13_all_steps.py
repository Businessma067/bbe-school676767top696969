#!/usr/bin/env python3
r"""Deepen Ch12/Ch13 tactical explanations to maximal step density (second pass)."""
from __future__ import annotations

import json
import math
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
LETTERS = "ABCDE"
HEADER_RE = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\b", re.I)
CLOSER_RE = re.compile(
    r"(?:\n|^)\s*(?:So the statement is|so the statement is|The statement is|the statement is)\s+(True|False)\.?\s*$",
    re.I | re.M,
)
DISPLAY_RE = re.compile(r"\$\$(.*?)\$\$", re.S)
FILLER_RES = [
    re.compile(r"\bQED\.?\s*", re.I),
    re.compile(r"\n*\s*(?:Arithmetic already displayed|Accept\.|Reject\.)[^\n]*\.?\s*", re.I),
]
_NUM = r"(?:\d+\.\d+|\d+)"
_TIMES = r"(?:\\times|\\cdot|×|\*)"


def tidy(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def fmt_num(x: float) -> str:
    if abs(x - round(x)) < 1e-9 and abs(x) < 1e15:
        return str(int(round(x)))
    ax = abs(x)
    if ax != 0 and (ax < 1e-4 or ax >= 1e6):
        s = f"{x:.6e}"
        b, e = s.split("e")
        b = b.rstrip("0").rstrip(".")
        return rf"{b} \times 10^{{{int(e)}}}"
    return f"{x:.12f}".rstrip("0").rstrip(".")


def disp(inner: str) -> str:
    return f"$$\n{inner.strip()}\n$$"


def compact(s: str) -> str:
    s = re.sub(r"\s+", "", s)
    s = s.replace(r"\times", r"\cdot").replace("×", r"\cdot").replace("*", r"\cdot")
    s = s.replace(r"\dfrac", r"\frac")
    return s


def extract_binoms(inner: str) -> list[tuple[int, int]]:
    return [(int(a), int(b)) for a, b in re.findall(r"\\binom\{(\d+)\}\{(\d+)\}", inner)]


def binom_expansion_steps(n: int, k: int) -> list[str]:
    if k < 0 or k > n:
        return [rf"\binom{{{n}}}{{{k}}} = 0"]
    orig_k = k
    k_eff = min(k, n - k)
    if k_eff == 0:
        return [rf"\binom{{{n}}}{{{orig_k}}} = 1"]
    if k_eff == 1:
        return [
            rf"\binom{{{n}}}{{{orig_k}}} = \dfrac{{{n}!}}{{{orig_k}!({n}-{orig_k})!}}",
            rf"\binom{{{n}}}{{{orig_k}}} = {n}",
        ]
    val = math.comb(n, orig_k)
    if n > 80 or k_eff > 15:
        return [
            rf"\binom{{{n}}}{{{orig_k}}} = \dfrac{{{n}!}}{{{orig_k}!({n}-{orig_k})!}}",
            rf"\binom{{{n}}}{{{orig_k}}} = {fmt_num(val)}",
        ]
    numer_tex = r" \cdot ".join(str(n - i) for i in range(k_eff))
    denom_tex = r" \cdot ".join(str(i) for i in range(1, k_eff + 1))
    steps = [
        rf"\binom{{{n}}}{{{orig_k}}} = \dfrac{{{n}!}}{{{orig_k}!({n}-{orig_k})!}}",
        rf"\dfrac{{{n}!}}{{{orig_k}!({n - orig_k})!}} = \dfrac{{{numer_tex}}}{{{denom_tex}}}",
    ]
    prod = 1
    for i, f in enumerate(range(n, n - k_eff, -1)):
        prev = prod
        prod *= f
        if i == 0:
            continue
        steps.append(rf"{n} \cdot {n - 1} = {prod}" if i == 1 else rf"{prev} \cdot {f} = {prod}")
    denom_val = math.factorial(k_eff)
    if denom_val != 1:
        steps.append(rf"\dfrac{{{prod}}}{{{denom_val}}} = {val}")
    steps.append(rf"\binom{{{n}}}{{{orig_k}}} = {val}")
    return steps


def factorial_expansion_steps(n: int) -> list[str]:
    val = math.factorial(n)
    if n <= 1:
        return [rf"{n}! = 1"]
    if n > 12:
        return [rf"{n}! = {fmt_num(val)}"]
    factors = r" \cdot ".join(str(i) for i in range(n, 0, -1))
    steps = [rf"{n}! = {factors}"]
    prod = 1
    for i, f in enumerate(range(n, 0, -1)):
        prev = prod
        prod *= f
        if i == 0:
            continue
        steps.append(rf"{n} \cdot {n - 1} = {prod}" if i == 1 else rf"{prev} \cdot {f} = {prod}")
    steps.append(rf"{n}! = {val}")
    return steps


def power_expansion_steps(base: float, exp: int) -> list[str]:
    b = fmt_num(base)
    if exp == 0:
        return [rf"({b})^{{0}} = 1"]
    if exp == 1:
        return [rf"({b})^{{1}} = {b}"]
    if exp > 10 or abs(base) > 100:
        return [rf"({b})^{{{exp}}} = {fmt_num(base ** exp)}"]
    steps = [rf"({b})^{{{exp}}}"]
    prod = base
    for _i in range(2, exp + 1):
        prev = prod
        prod *= base
        steps.append(rf"{fmt_num(prev)} \times {b} = {fmt_num(prod)}")
    steps.append(rf"({b})^{{{exp}}} = {fmt_num(prod)}")
    return steps


def pmf_expansion_steps(n: int, k: int, p: float, q: float) -> list[str]:
    steps = [
        rf"P(X = {k}) = \binom{{{n}}}{{{k}}} ({fmt_num(p)})^{{{k}}} ({fmt_num(q)})^{{{n - k}}}"
    ]
    steps.extend(binom_expansion_steps(n, k))
    c = math.comb(n, k)
    if k > 0:
        steps.extend(power_expansion_steps(p, k))
        pk = p**k
    else:
        pk = 1.0
        steps.append(rf"({fmt_num(p)})^{{0}} = 1")
    m = n - k
    if m > 0:
        steps.extend(power_expansion_steps(q, m))
        qm = q**m
    else:
        qm = 1.0
        steps.append(rf"({fmt_num(q)})^{{0}} = 1")
    steps.append(rf"{c} \times {fmt_num(pk)} = {fmt_num(c * pk)}")
    steps.append(rf"{fmt_num(c * pk)} \times {fmt_num(qm)} = {fmt_num(c * pk * qm)}")
    steps.append(rf"P(X = {k}) = {fmt_num(c * pk * qm)}")
    return steps


def fix_broken_sums(text: str) -> str:
    text = re.sub(
        r"\$\$\s*(P\([^$]*?\))\s*=\s*\\sum_\{([a-zA-Z])\s*\$\$\s*"
        r"\$\$\s*=\s*(\d+)\}\^{(\d+)\}\s*([^$]*?)\$\$",
        lambda m: disp(
            rf"{m.group(1).strip()} = \sum_{{{m.group(2)} = {m.group(3)}}}^{{{m.group(4)}}} {m.group(5).strip()}"
        ),
        text,
        flags=re.S,
    )
    text = re.sub(
        r"\$\$\s*\\sum_\{([a-zA-Z])\s*\$\$\s*\$\$\s*=\s*(\d+)\}\^{(\d+)\}\s*([^$]*?)\$\$",
        lambda m: disp(
            rf"\sum_{{{m.group(1)} = {m.group(2)}}}^{{{m.group(3)}}} {m.group(4).strip()}"
        ),
        text,
        flags=re.S,
    )
    return text


def parse_pmf_display(inner: str):
    c = re.sub(r"\s+", "", inner)
    m = re.fullmatch(
        rf"\\binom\{{(\d+)}}\{{(\d+)}}(?:\\times|\\cdot)?"
        rf"\(({_NUM})\)\^\{{(\d+)}}(?:\\times|\\cdot)?"
        rf"\(({_NUM})\)\^\{{(\d+)}}",
        c,
    )
    if m:
        n, k = int(m.group(1)), int(m.group(2))
        p, ke = float(m.group(3)), int(m.group(4))
        q, me = float(m.group(5)), int(m.group(6))
        if ke + me == n:
            return n, k, p, q
        return None
    m = re.fullmatch(
        rf"\\binom\{{(\d+)}}\{{(\d+)}}({_NUM})\^\{{(\d+)}}({_NUM})\^\{{(\d+)}}",
        c,
    )
    if not m:
        return None
    n, k = int(m.group(1)), int(m.group(2))
    p, ke = float(m.group(3)), int(m.group(4))
    q, me = float(m.group(5)), int(m.group(6))
    if ke + me != n:
        return None
    return n, k, p, q


def is_pure_number_display(inner: str) -> bool:
    c = compact(inner).replace(r"\%", "%")
    return bool(
        re.fullmatch(
            rf"(?:\\approx)?{_NUM}(?:(?:\\times|\\cdot)10\^{{\-?\d+}})?%?",
            c,
        )
    )


def is_numeric_product_display(inner: str) -> bool:
    return bool(re.search(rf"{_NUM}(?:{_TIMES}{_NUM})+", compact(inner)))


def product_factors_from_display(inner: str):
    s = re.sub(r"\\text\{[^}]*\}", "", inner)
    s = re.sub(r"\\mathrm\{[^}]*\}", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    if "=" in s:
        s = s.split("=")[-1].strip()
    m2 = re.fullmatch(rf"({_NUM}(?:\s*(?:{_TIMES})\s*{_NUM})+)", s)
    if not m2:
        return None
    return [float(x) for x in re.findall(_NUM, m2.group(1))]


def unpack_product_factors(factors: list[float]) -> list[str]:
    steps = []
    running = factors[0]
    for f in factors[1:]:
        prev = running
        running *= f
        steps.append(rf"{fmt_num(prev)} \times {fmt_num(f)} = {fmt_num(running)}")
    return steps


def collapse_repeated_pairs(seq: list[str]) -> list[str]:
    deduped: list[str] = []
    for st in seq:
        if deduped and compact(deduped[-1]) == compact(st):
            continue
        deduped.append(st)
    final: list[str] = []
    j = 0
    while j < len(deduped):
        if (
            j + 3 < len(deduped)
            and compact(deduped[j]) == compact(deduped[j + 2])
            and compact(deduped[j + 1]) == compact(deduped[j + 3])
        ):
            final.append(deduped[j])
            final.append(deduped[j + 1])
            j += 2
            while (
                j + 1 < len(deduped)
                and compact(deduped[j]) == compact(final[-2])
                and compact(deduped[j + 1]) == compact(final[-1])
            ):
                j += 2
            continue
        final.append(deduped[j])
        j += 1
    return final


def deepen_math_sequence(maths: list[str]) -> list[str]:
    out: list[str] = []
    i = 0
    while i < len(maths):
        cur = maths[i].strip()
        nxt = maths[i + 1].strip() if i + 1 < len(maths) else ""

        if out and compact(out[-1]) == compact(cur):
            i += 1
            continue

        mfact = re.fullmatch(rf"({_NUM})!\s*=\s*({_NUM})", compact(cur))
        if mfact:
            n = int(float(mfact.group(1)))
            if n <= 12:
                out.extend(factorial_expansion_steps(n))
                i += 1
                continue

        mpow = re.fullmatch(rf"(=)?\(({_NUM})\)\^\{{(\d+)\}}", compact(cur))
        if mpow and nxt and is_pure_number_display(nxt):
            base, exp = float(mpow.group(2)), int(mpow.group(3))
            out.extend(power_expansion_steps(base, exp))
            i += 2
            continue

        pmf = parse_pmf_display(cur)
        if pmf and (not nxt or is_pure_number_display(nxt) or nxt.startswith(r"\approx")):
            n, k, p, q = pmf
            out.extend(pmf_expansion_steps(n, k, p, q))
            i += 2 if nxt and is_pure_number_display(nxt) else 1
            continue

        m_lhs = re.match(
            rf"^(.*?)\s*=\s*\\binom\{{(\d+)}}\{{(\d+)}}$",
            re.sub(r"\s+", " ", cur).strip(),
        )
        if m_lhs:
            lhs, n, k = m_lhs.group(1).strip(), int(m_lhs.group(2)), int(m_lhs.group(3))
            out.append(cur)
            out.extend(binom_expansion_steps(n, k))
            val = str(math.comb(n, k))
            if nxt and compact(nxt) in {compact(f"{lhs} = {val}"), val, f"={val}"}:
                i += 2
            else:
                i += 1
            continue

        if re.fullmatch(r"\\binom\{(\d+)\}\{(\d+)\}(?:=\d+)?", compact(cur)):
            n, k = extract_binoms(cur)[0]
            out.extend(binom_expansion_steps(n, k))
            val = str(math.comb(n, k))
            if nxt and (is_pure_number_display(nxt) or compact(nxt) in {val, f"={val}"}):
                i += 2
            else:
                i += 1
            continue

        binoms = extract_binoms(cur)
        if binoms and r"\binom" in cur and nxt and (
            is_numeric_product_display(nxt) or re.search(rf"={_NUM}", compact(nxt))
        ):
            if r"\frac" in cur or r"\dfrac" in cur:
                out.append(cur)
                i += 1
                continue
            out.append(cur)
            for n, k in binoms:
                out.extend(binom_expansion_steps(n, k))
            out.append(nxt)
            factors = product_factors_from_display(nxt) or []
            if len(factors) >= 2:
                for st in unpack_product_factors(factors):
                    if not out or compact(out[-1]) != compact(st):
                        out.append(st)
            skip = 2
            if i + 2 < len(maths) and re.fullmatch(
                rf"({_NUM})(?:\s*(?:{_TIMES})\s*{_NUM})+\s*=\s*{_NUM}",
                re.sub(r"\s+", " ", maths[i + 2]).strip(),
            ):
                skip = 3
            if i + skip < len(maths) and factors:
                if re.search(rf"={fmt_num(math.prod(factors))}$", compact(maths[i + skip])):
                    out.append(maths[i + skip])
                    skip += 1
            i += skip
            continue

        factors_cur = product_factors_from_display(cur)
        if factors_cur and len(factors_cur) >= 2 and (
            not nxt
            or re.fullmatch(
                rf"({_NUM})\s*(?:{_TIMES})\s*({_NUM})\s*=\s*({_NUM})",
                re.sub(r"\s+", " ", nxt).strip(),
            )
        ):
            out.append(cur)
            for st in unpack_product_factors(factors_cur):
                if not out or compact(out[-1]) != compact(st):
                    out.append(st)
            skip = 1
            while i + skip < len(maths) and re.fullmatch(
                rf"({_NUM})\s*(?:{_TIMES})\s*({_NUM})\s*=\s*({_NUM})",
                re.sub(r"\s+", " ", maths[i + skip]).strip(),
            ):
                skip += 1
                if skip > 8:
                    break
            i += skip
            continue

        prod_only = re.fullmatch(
            rf"(({_NUM})(?:\s*(?:{_TIMES})\s*{_NUM})+)(?:\s*=\s*({_NUM}))?",
            re.sub(r"\s+", " ", cur).strip(),
        )
        if prod_only and cur.count("=") <= 1:
            factors = [float(x) for x in re.findall(_NUM, prod_only.group(1))]
            if len(factors) >= 2:
                steps = unpack_product_factors(factors)
                if any(compact(cur) == compact(prev) for prev in out[-4:]):
                    i += 1
                    continue
                if len(out) >= len(steps) and all(
                    compact(out[-len(steps) + j]) == compact(steps[j]) for j in range(len(steps))
                ):
                    i += 1
                    continue
                if compact(cur) == compact(steps[-1]):
                    out.append(steps[-1])
                    i += 1
                    continue
                for st in steps:
                    if not out or compact(out[-1]) != compact(st):
                        out.append(st)
                i += 1
                continue

        out.append(cur)
        i += 1

    return collapse_repeated_pairs(out)


def strip_fillers(text: str) -> str:
    for fr in FILLER_RES:
        text = fr.sub("\n\n", text)
    return text


def overview_display_map(overview: str) -> list[str]:
    return [m.strip() for m in DISPLAY_RE.findall(overview or "")]


def inject_overview_computations(body: str, overview: str) -> str:
    if not overview:
        return body
    if not re.search(r"solution overview|from the overview|as determined in the solution", body, re.I):
        return body

    cited_nums: list[str] = []
    for m in re.finditer(
        r"(?:solution overview|from the overview|as determined in the solution).{0,260}",
        body,
        re.I | re.S,
    ):
        for num in re.findall(r"\b(\d[\d,]*)\b", m.group(0)):
            n = num.replace(",", "")
            if n not in cited_nums and n.isdigit() and int(n) > 1:
                cited_nums.append(n)
    for dm in DISPLAY_RE.findall(body):
        for a, b in re.findall(r"\\(?:d)?frac\{(\d+)\}\{(\d+)\}", dm):
            for n in (a, b):
                if n not in cited_nums and int(n) > 1:
                    cited_nums.append(n)
        break
    if not cited_nums:
        return body

    ov_maths = overview_display_map(overview)
    value_to_steps: dict[str, list[str]] = {}
    for i, dm in enumerate(ov_maths):
        binoms = extract_binoms(dm)
        if not binoms or r"\frac" in dm or r"\dfrac" in dm:
            continue
        terminal = None
        for j in range(i, min(i + 10, len(ov_maths))):
            c = compact(ov_maths[j])
            for num in cited_nums:
                if c.endswith("=" + num) or c == num:
                    terminal = num
                    break
            if terminal:
                break
        if not terminal or terminal in value_to_steps:
            continue
        if len(binoms) == 1:
            n, k = binoms[0]
            if math.comb(n, k) == int(terminal):
                value_to_steps[terminal] = binom_expansion_steps(n, k)
        else:
            factors = [math.comb(n, k) for n, k in binoms]
            if math.prod(factors) != int(terminal):
                continue
            steps = [dm]
            for n, k in binoms:
                steps.extend(binom_expansion_steps(n, k))
            steps.extend(unpack_product_factors([float(f) for f in factors]))
            value_to_steps[terminal] = steps

    for dm in ov_maths:
        binoms = extract_binoms(dm)
        if len(binoms) != 1:
            continue
        n, k = binoms[0]
        val = str(math.comb(n, k))
        if val in cited_nums and val not in value_to_steps:
            value_to_steps[val] = binom_expansion_steps(n, k)

    missing: list[str] = []
    seen: set[str] = set()
    for num in cited_nums:
        steps = value_to_steps.get(num)
        if not steps:
            continue
        key = compact(steps[0]) + "->" + num
        if key in seen:
            continue
        factors = extract_binoms(steps[0]) or extract_binoms("\n".join(steps[:4]))
        if factors and all(re.search(rf"\\binom\{{{n}}}\{{{k}}}\s*=\s*\\dfrac", body) for n, k in factors):
            continue
        seen.add(key)
        missing.extend(steps)
    if not missing:
        return body
    insert = "\n\n".join(disp(s) for s in missing)
    m = DISPLAY_RE.search(body)
    if not m:
        return body + "\n\n" + insert
    return body[: m.start()] + "\n\n" + insert + "\n\n" + body[m.start() :]


def normalize_header_closer(text: str, letter: str, is_true: bool) -> str:
    verd = "True" if is_true else "False"
    body = text.strip()
    if HEADER_RE.match(body):
        body = HEADER_RE.sub(f"**{letter}.** → {verd}", body, count=1)
    else:
        body = f"**{letter}.** → {verd}\n\n{body.lstrip()}"
    body = strip_fillers(body)
    body = CLOSER_RE.sub("", body).rstrip()
    body = re.sub(
        r"(?:,\s*)?(?:Therefore[, ]+)?(?:[Ss]o )?(?:[Tt]he statement is)\s+(?:True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    ).rstrip()
    if body and body[-1] not in ".!?":
        body += "."
    body = body + f"\n\nSo the statement is {verd}."
    body = re.sub(rf"(So the statement is {verd}\.\s*)+$", f"So the statement is {verd}.", body)
    return tidy(body) + "\n"


def parse_blocks(text: str):
    blocks = []
    pos = 0
    for m in DISPLAY_RE.finditer(text):
        prose = text[pos : m.start()]
        if prose:
            blocks.append(("prose", prose))
        blocks.append(("math", m.group(1).strip()))
        pos = m.end()
    tail = text[pos:]
    if tail:
        blocks.append(("prose", tail))
    return blocks


def render_blocks(blocks) -> str:
    out = []
    for kind, content in blocks:
        if kind == "prose":
            out.append(content)
        else:
            out.append(f"\n\n$$\n{content.strip()}\n$$\n\n")
    return tidy("".join(out))


def deepen_explanation(expl: str, letter: str, is_true: bool, overview: str = "") -> str:
    body = fix_broken_sums(strip_fillers(expl.strip()))
    hm = HEADER_RE.match(body)
    if hm:
        letter = hm.group(1).upper()
        body_wo = HEADER_RE.sub("", body, count=1)
    else:
        body_wo = body
    body_wo = CLOSER_RE.sub("", body_wo).rstrip()
    body_wo = re.sub(
        r"(?:,\s*)?(?:Therefore[, ]+)?(?:[Ss]o )?(?:[Tt]he statement is)\s+(?:True|False)\.?\s*$",
        "",
        body_wo,
        flags=re.I,
    ).rstrip()

    blocks = parse_blocks(body_wo)
    maths = [c for k, c in blocks if k == "math"]

    def consumed_count(i: int) -> int:
        cur = maths[i]
        nxt = maths[i + 1] if i + 1 < len(maths) else ""
        if re.fullmatch(rf"(=)?\(({_NUM})\)\^\{{(\d+)\}}", compact(cur)) and nxt and is_pure_number_display(nxt):
            return 2
        pf = product_factors_from_display(cur)
        if pf and len(pf) >= 2:
            skip = 1
            while i + skip < len(maths) and re.fullmatch(
                rf"({_NUM})\s*(?:{_TIMES})\s*({_NUM})\s*=\s*({_NUM})",
                re.sub(r"\s+", " ", maths[i + skip]).strip(),
            ):
                skip += 1
                if skip > 6:
                    break
            if skip > 1:
                return skip
        pmf = parse_pmf_display(cur)
        if pmf and nxt and is_pure_number_display(nxt):
            return 2
        binoms = extract_binoms(cur)
        if (
            binoms
            and r"\binom" in cur
            and r"\frac" not in cur
            and r"\dfrac" not in cur
            and nxt
            and (is_numeric_product_display(nxt) or re.search(rf"={_NUM}", compact(nxt)))
        ):
            skip = 2
            if i + 2 < len(maths) and re.fullmatch(
                rf"({_NUM})(?:\s*(?:{_TIMES})\s*{_NUM})+\s*=\s*{_NUM}",
                re.sub(r"\s+", " ", maths[i + 2]).strip(),
            ):
                skip = 3
            if i + skip < len(maths):
                factors = [math.comb(n, k) for n, k in binoms]
                if re.search(rf"={math.prod(factors)}$", compact(maths[i + skip])):
                    skip += 1
            return skip
        m_lhs = re.match(
            rf"^(.*?)\s*=\s*\\binom\{{(\d+)}}\{{(\d+)}}$",
            re.sub(r"\s+", " ", cur).strip(),
        )
        if m_lhs and nxt:
            n, k = int(m_lhs.group(2)), int(m_lhs.group(3))
            lhs = m_lhs.group(1).strip()
            val = str(math.comb(n, k))
            if compact(nxt) in {compact(f"{lhs} = {val}"), val, f"={val}"}:
                return 2
        if re.fullmatch(r"\\binom\{(\d+)\}\{(\d+)\}", compact(cur)) and nxt:
            n, k = extract_binoms(cur)[0]
            val = str(math.comb(n, k))
            if is_pure_number_display(nxt) or compact(nxt) in {val, f"={val}"}:
                return 2
        return 1

    groups = []
    sizes = []
    i = 0
    while i < len(maths):
        c = consumed_count(i)
        groups.append(deepen_math_sequence(maths[i : i + c]))
        sizes.append(c)
        i += c

    group_by_start = {}
    running = 0
    for g, sz in zip(groups, sizes):
        group_by_start[running] = g
        running += sz

    new_blocks = []
    math_token = 0
    for kind, content in blocks:
        if kind == "prose":
            new_blocks.append((kind, content))
            continue
        if math_token in group_by_start:
            for st in group_by_start[math_token]:
                new_blocks.append(("math", st))
        math_token += 1

    rebuilt = []
    run = []

    def flush_run():
        nonlocal run
        if run:
            for st in collapse_repeated_pairs(run):
                rebuilt.append(("math", st))
            run = []

    for kind, content in new_blocks:
        if kind == "math":
            run.append(content)
        else:
            flush_run()
            rebuilt.append((kind, content))
    flush_run()
    body_wo = render_blocks(rebuilt)

    verd = "True" if is_true else "False"
    body_wo = inject_overview_computations(f"**{letter}.** → {verd}\n\n{body_wo}", overview)
    body_wo = HEADER_RE.sub("", body_wo, count=1).lstrip()
    return normalize_header_closer(body_wo, letter, is_true)


def audit_explanation(expl: str, letter: str, is_true: bool, case_id: str) -> list[str]:
    errs = []
    verd = "True" if is_true else "False"
    if not expl.strip().startswith(f"**{letter}.** → {verd}"):
        errs.append(f"{case_id} {letter}: bad header")
    if expl.count("$$") % 2:
        errs.append(f"{case_id} {letter}: unbalanced $$")
    if f"So the statement is {verd}." not in expl:
        errs.append(f"{case_id} {letter}: missing closer")
    if re.search(r"\bQED\b", expl, re.I):
        errs.append(f"{case_id} {letter}: QED")
    if re.search(r"\\sum_\{[a-zA-Z]\s*\$\$", expl) or re.search(r"\$\$\s*=\s*\d+\}\{", expl):
        errs.append(f"{case_id} {letter}: broken sum")
    return errs


def deepen_task(task: dict):
    keys = task.get("answer_key") or []
    expls = task.get("tactical_explanations") or []
    overview = task.get("solution_overview") or ""
    changed = 0
    errs = []
    new_expls = []
    cid = task.get("case_id") or "?"
    for i, expl in enumerate(expls):
        letter = LETTERS[i] if i < 5 else chr(ord("A") + i)
        is_true = bool(keys[i]) if i < len(keys) else True
        new = deepen_explanation(expl, letter, is_true, overview=overview)
        if new.rstrip("\n") != (expl or "").rstrip("\n"):
            changed += 1
        new_expls.append(new if new.endswith("\n") else new + "\n")
        errs.extend(audit_explanation(new_expls[-1], letter, is_true, cid))
    task["tactical_explanations"] = new_expls
    return changed, errs


def process_range(path: Path, start: int, end: int) -> None:
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"] if isinstance(data, dict) else data
    end = min(end, len(tasks))
    total_changed = 0
    all_errs = []
    ids = []
    for idx in range(start, end):
        task = tasks[idx]
        ids.append(task.get("case_id") or "?")
        changed, errs = deepen_task(task)
        total_changed += changed
        all_errs.extend(errs)
        if errs:
            print(f"AUDIT FAIL {task.get('case_id')}: {errs}")
    if isinstance(data, dict):
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    else:
        path.write_text(json.dumps(tasks, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"{path.name}[{start}:{end}] {ids[0]}..{ids[-1]} "
        f"changed_expls={total_changed} errs={len(all_errs)}"
    )
    for e in all_errs[:20]:
        print(" ", e)


def main() -> None:
    args = sys.argv[1:]
    if len(args) < 3:
        print("Usage: _deepen_ch12_13_all_steps.py <json-filename> <start> <end>")
        sys.exit(2)
    process_range(ROOT / "src/data" / args[0], int(args[1]), int(args[2]))


if __name__ == "__main__":
    main()
