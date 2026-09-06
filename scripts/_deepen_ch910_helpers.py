#!/usr/bin/env python3
"""Ch9/Ch10 helpers for maximal-step deepen (imported by _deepen_ch9_ch10_maximal_steps)."""
from __future__ import annotations

import re
from fractions import Fraction

DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)


def tidy(s: str) -> str:
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def norm(inner: str) -> str:
    return re.sub(r"\s+", " ", inner).strip()


def D(inner: str) -> str:
    return f"$${norm(inner)}$$"


def tex_int(n: Fraction | int) -> str:
    if isinstance(n, Fraction):
        if n.denominator == 1:
            return str(n.numerator)
        return rf"\frac{{{n.numerator}}}{{{n.denominator}}}"
    return str(n)


def tokenize(text: str) -> list[tuple[str, str]]:
    parts: list[tuple[str, str]] = []
    pos = 0
    for m in DISPLAY_RE.finditer(text):
        if m.start() > pos:
            parts.append(("prose", text[pos : m.start()]))
        parts.append(("disp", norm(m.group(1))))
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


def table_ys(tables_markdown: str | None) -> list[int] | None:
    if not tables_markdown:
        return None
    rows = [r for r in tables_markdown.strip().splitlines() if r.startswith("|")]
    data_rows = []
    for r in rows:
        if re.match(r"^\|\s*---", r):
            continue
        data_rows.append([c.strip() for c in r.strip("|").split("|")])
    if len(data_rows) < 2:
        return None
    ys: list[int] = []
    for c in data_rows[1][1:]:
        m = re.search(r"-?\d+(?:\.\d+)?", c.replace("$", ""))
        if m:
            ys.append(int(float(m.group(0))))
    return ys if len(ys) >= 3 else None


def regenerate_difference_letter(
    stmt: str, tables_markdown: str | None, letter: str, truth: bool
) -> str | None:
    ys = table_ys(tables_markdown)
    if ys is None:
        return None
    if re.search(r"first differences are", stmt, re.I):
        order = 1
        setup = (
            "On equally spaced samples the first differences are neighbouring "
            "heights subtracted in order."
        )
    elif re.search(r"second differences", stmt, re.I):
        order = 2
        setup = "Second differences are the jumps of the first-difference row."
    elif re.search(r"third differences", stmt, re.I):
        order = 3
        setup = "One more difference pass produces the third differences."
    else:
        return None

    layers = [ys]
    cur = ys[:]
    blocks: list[str] = [
        f"**{letter}.** → {'True' if truth else 'False'}",
        "",
        setup,
        "",
        D(",".join(str(y) for y in ys)),
    ]
    for o in range(order):
        blocks.append("")
        blocks.append(f"The order-{o + 1} differences of ${','.join(str(v) for v in cur)}$ are")
        nxt = []
        for i in range(len(cur) - 1):
            a, b = cur[i], cur[i + 1]
            d = b - a
            nxt.append(d)
            blocks.append("")
            blocks.append(D(f"{b}-{a}"))
            blocks.append("")
            blocks.append(D(f"={d}"))
        layers.append(nxt)
        cur = nxt

    final = layers[-1]
    blocks.append("")
    blocks.append(f"The resulting row is ${','.join(str(v) for v in final)}$.")
    blocks.append("")
    blocks.append(f"So the statement is {'True' if truth else 'False'}.")
    return tidy("\n".join(blocks))


def unpack_triple_products(text: str) -> str:
    parts = tokenize(text)
    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "disp":
            out.append((kind, val))
            i += 1
            continue
        m = re.match(r"^(.+?)=(.+)$", val)
        if not m or r"\cdot" not in m.group(2):
            out.append((kind, val))
            i += 1
            continue
        lhs, rhs = m.group(1).strip(), m.group(2).strip()
        factors = re.split(r"\\cdot", rhs.replace(" ", ""))
        cleaned: list[Fraction] = []
        ok = True
        for f in factors:
            f = f.strip()
            fm = re.fullmatch(r"\(?([+\-]?\d+(?:\.\d+)?)\)?", f)
            if not fm:
                ok = False
                break
            cleaned.append(Fraction(fm.group(1)))
        if not ok or len(cleaned) < 2:
            out.append((kind, val))
            i += 1
            continue
        out.append(("disp", f"{lhs}={rhs}"))
        run = cleaned[0]
        for n in cleaned[1:]:
            prev = run
            run = run * n
            out.append(("disp", rf"{tex_int(prev)}\cdot {tex_int(n)}={tex_int(run)}"))
        out.append(("disp", f"{lhs}={tex_int(run)}"))
        j = i + 1
        while j < len(parts) and parts[j][0] == "prose" and not parts[j][1].strip():
            j += 1
        if j < len(parts) and parts[j][0] == "disp":
            mm = re.match(r"^(.+?)=(.+)$", parts[j][1])
            if mm and mm.group(1).strip() == lhs:
                i = j + 1
                continue
        i += 1
    return reassemble(out)


def deepen_thin_explog(text: str, stmt: str, context: str, letter: str, truth: bool) -> str:
    n = text.count("$$") // 2
    if n >= 8:
        return text
    inject: list[str] = []
    blob = stmt + "\n" + text + "\n" + (context or "")

    def add(s: str) -> None:
        inject.append(D(s))

    def prose(s: str) -> None:
        inject.append(s)

    # Always surface the governing continuous model when present in context
    if re.search(r"P\(t\)\s*=\s*P_0\s*e\^\{kt\}|P_0 e\^\{kt\}", context or ""):
        if "P_0 e^{kt}" not in text.replace(" ", "") and n < 5:
            prose("The continuous path is")
            add(r"P(t)=P_0 e^{kt}")

    if re.search(r"change of base|\\log_\{|\\log_|\\ln", blob, re.I):
        if r"\frac{\ln" not in text and r"\dfrac{\ln" not in text:
            prose("Change of base with natural logs reads")
            add(r"\log_{b}a=\dfrac{\ln a}{\ln b}")
            add(r"\log_{b}a=\dfrac{\log_k a}{\log_k b}")

    m = re.search(r"\\log_\{(\d+)\}\s*\{?(\d+)\}?", stmt)
    if m:
        b, a = int(m.group(1)), int(m.group(2))
        k, p = 0, 1
        while p < a and k < 24:
            p *= b
            k += 1
        if p == a:
            prose("Evaluate by the defining power identity")
            add(rf"{b}^{{{k}}}={a}")
            add(rf"\log_{{{b}}}{a}={k}")

    # letter-log claims like \log_b a
    m = re.search(r"\\log_\{([a-zA-Z]+)\}\s*([a-zA-Z0-9]+)", stmt)
    if m and n < 5:
        b, a = m.group(1), m.group(2)
        add(rf"\log_{{{b}}}{a}=\dfrac{{\ln {a}}}{{\ln {b}}}")

    if re.search(r"e\^\{|\\exp\(|\(1\+[rk]\)", blob):
        if "e^{u+v}" not in text.replace(" ", ""):
            prose("The exponential addition law is")
            add(r"e^{u+v}=e^{u}\,e^{v}")
            add(r"e^{ut}=(e^{u})^{t}")
        if re.search(r"e\^\{k\}|1\+k|1\+r", blob):
            prose("Compare the one-year multipliers")
            add(r"e^{k}")
            add(r"1+k")
            if "e^{k}>1+k" not in text.replace(" ", ""):
                add(r"e^{k}>1+k\qquad(k>0)")
            if re.search(r"1\+r", blob):
                add(r"1+r")
                add(r"1+r=e^{k}")

    if re.search(r"\\log|\\ln", blob):
        if r"\log(ab)=\log a+\log b" not in text.replace(" ", ""):
            prose("The logarithm product / quotient / power laws are")
            add(r"\log(ab)=\log a+\log b")
            add(r"\log\!\left(\dfrac{a}{b}\right)=\log a-\log b")
            add(r"\log(a^{t})=t\log a")
        if re.search(r"\\ln|\\log_e", blob) and r"\ln(e^{" not in text.replace(" ", ""):
            add(r"\ln(e^{u})=u")
            add(r"e^{\ln u}=u\qquad(u>0)")

    if re.search(r"doubl|half-life|T_\{?2|T_\{?1/2|\\ln 2", blob, re.I):
        prose("Doubling / half-life recovers the logarithm of two")
        add(r"e^{kT}=2")
        add(r"kT=\ln 2")
        add(r"T=\dfrac{\ln 2}{|k|}")

    if re.search(r"ratio|P\(t\+1\)|successive|geometric", blob, re.I):
        prose("Successive ratios of a pure exponential are constant")
        add(r"\dfrac{P(t+1)}{P(t)}=\dfrac{P_0 e^{k(t+1)}}{P_0 e^{kt}}")
        add(r"=e^{k}")

    # solving patterns: a^x = b
    m = re.search(r"([0-9]+)\^\{?x\}?\s*=\s*([0-9]+)|([a-z])\^\{?x\}?\s*=\s*([0-9]+)", stmt.replace(" ", ""))
    if m and n < 6:
        prose("Take logarithms of both sides")
        add(r"x\ln a=\ln b")
        add(r"x=\dfrac{\ln b}{\ln a}")

    if not inject:
        # last-resort: pull display math out of the statement itself
        for dm in re.finditer(r"\$([^$]+)\$", stmt):
            inner = dm.group(1).strip()
            if len(inner) > 2 and inner not in text:
                add(inner)
                if len(inject) >= 4:
                    break
        if not inject:
            return text

    body = re.sub(r"(?i)so the statement is (?:True|False)\.\s*$", "", text.strip()).rstrip()
    body = body + "\n\n" + "\n\n".join(inject)
    verd = "True" if truth else "False"
    body = re.sub(
        r"^\*\*[A-E]\.\*\* → (?:True|False)",
        f"**{letter}.** → {verd}",
        body,
        count=1,
    )
    if not body.startswith(f"**{letter}.**"):
        body = f"**{letter}.** → {verd}\n\n" + body
    body = body.rstrip() + f"\n\nSo the statement is {verd}."
    return tidy(body)
