#!/usr/bin/env python3
"""
Rewrite Ch11 Part 3 to ONE consistent Ch13 style:
  - prose labels outside $ (no digits in prose)
  - ALL numbers and formulas inside a single $...$ span
  - never split thousands commas (42,000 stays intact)
"""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("src/data/math-ch11-financial.ts")


def fix_thousands_scars(s: str) -> str:
    """Repair `42$, $000` / `35$, $264` created by comma-splitting."""
    prev = None
    while prev != s:
        prev = s
        s = re.sub(r"(\d)\$, \$(\d)", r"\1,\2", s)
    return s


def normalize_escapes(s: str) -> str:
    s = re.sub(
        r"\\{3,}(approx|times|leq|geq|ln|frac|quad|mathrm|cdot|%)",
        r"\\\\\1",
        s,
    )
    return s


def strip_math_keep_currency(s: str) -> tuple[str, list[str]]:
    """Remove $...$ delimiters but keep \\$ currency. Return flat text + list unused."""
    currency: list[str] = []

    def save(m: re.Match[str]) -> str:
        currency.append(m.group(0))
        return f"¤{len(currency)-1}¤"

    t = re.sub(r"\\\$", save, s)
    t = t.replace("$", "")
    return t, currency


def restore_currency(s: str, currency: list[str]) -> str:
    for i, c in enumerate(currency):
        s = s.replace(f"¤{i}¤", c)
    return s


def digits_outside_math(s: str) -> bool:
    t = s.replace("\\$", "")
    t = re.sub(r"\$[^$]*\$", "", t)
    return bool(re.search(r"\d", t))


def ch13_step(body: str) -> str:
    """Force Ch13: prose (no digits) + $full equation$."""
    body = normalize_escapes(fix_thousands_scars(body.strip()))

    # Flat view without math delimiters
    flat, currency = strip_math_keep_currency(body)
    flat = flat.strip().rstrip(".")

    # --- Classify & rebuild ---

    # "Needed: PV_2 = ..." or "PV_2 needed = ..."
    m = re.match(
        r"^(?:Needed:\s*)?(?:\\mathrm\{)?PV_?([0-9])\}?\s*needed\s*=\s*(.+)$",
        flat,
        re.I,
    )
    if m:
        eq = f"PV_{m.group(1)} = {m.group(2).strip()}"
        return restore_currency(f"Needed: ${eq}$.", currency)

    m = re.match(r"^Needed:\s*(.+)$", flat, re.I)
    if m and re.search(r"\d", m.group(1)):
        return restore_currency(f"Needed: ${m.group(1).strip()}$.", currency)

    # "If t_2 = 3: K_2 = ..."
    m = re.match(r"^If\s+(.+?):\s*(.+)$", flat)
    if m:
        cond, eq = m.group(1).strip(), m.group(2).strip()
        return restore_currency(f"If ${cond}$: ${eq}$.", currency)

    # "At r = 8%: K_2 = ..."  or "At r = 8\%: ..."
    m = re.match(r"^At\s+(.+?):\s*(.+)$", flat)
    if m:
        cond, eq = m.group(1).strip(), m.group(2).strip()
        # ensure % is \\\\ in source later via restore — use \\% in flat for ts
        cond = re.sub(r"(?<!\\)%", r"\\%", cond)
        return restore_currency(f"At ${cond}$: ${eq}$.", currency)

    # "Label: equation" where label has no digits
    m = re.match(r"^([^:]+):\s*(.+)$", flat)
    if m:
        label, eq = m.group(1).strip(), m.group(2).strip()
        if not re.search(r"\d", label) and re.search(r"\d|=", eq):
            # "PV_1: 42,000 × ..." → treat as equation PV_1 = ...
            if re.match(r"^(?:\\mathrm\{)?[A-Za-z]+_?\{?[0-9A-Za-z]*\}?$", label.replace("\\mathrm{", "").replace("}", "")):
                # variable label used as "PV_1: expr" → $PV_1 = expr$
                lab = re.sub(r"\\mathrm\{([^}]+)\}", r"\1", label)
                return restore_currency(f"${lab} = {eq}$.", currency)
            return restore_currency(f"{label}: ${eq}$.", currency)

    # "Since/which/..." prose with embedded numbers — wrap number equations only
    # Pure equation (starts with var = or has mostly math)
    if re.match(r"^(?:\\mathrm\{)?[A-Za-z]", flat) and "=" in flat and not re.match(
        r"^(Since|Which|Ranking|Compound|Growth factor|115\.|Semi|Quarterly|Monthly|Annual|Offer|Option|CD|Account|Interest|Difference|Gap|Periodic|Nominal|Total|First|Second|Extra|FV of)",
        flat,
    ):
        return restore_currency(f"${flat}$.", currency)

    # Prose-leading lines: extract trailing equation if present
    m = re.match(
        r"^((?:Since|Which|Ranking confirms|Compound growth[^0-9]*|Growth factor[^0-9]*|"
        r"Offer \([^)]+\)|Option \([^)]+\)|Semi-annual|Quarterly|Monthly|Annual|"
        r"Interest for [^:]+|Difference|Gap|Periodic rate|Nominal annual rate|"
        r"Total growth|First gap|Second gap|Extra interest[^:]*|FV of [^:]+|"
        r"CD\d|Account \w+)\s*(?::\s*)?)(.+)$",
        flat,
        re.I,
    )
    if m:
        label, rest = m.group(1).rstrip(), m.group(2).strip()
        if re.search(r"\d", rest) or "=" in rest or "\\" in rest:
            # if label itself still has digits, fold all into math
            if re.search(r"\d", label):
                return restore_currency(f"${flat}$.", currency)
            return restore_currency(f"{label} ${rest}$.", currency)

    # Fallback: if any digits, wrap entire step in math
    if re.search(r"\d", flat):
        return restore_currency(f"${flat}$.", currency)
    return restore_currency(flat + ("" if flat.endswith(".") else "."), currency)


def rewrite_part3(mid: str) -> str:
    lines = []
    for line in mid.split("\n"):
        m = re.match(r"^(\*\*\d+\.\*\*)\s+(.*)$", line)
        if not m:
            lines.append(line)
            continue
        body = ch13_step(m.group(2))
        # Final: no digits outside math
        if digits_outside_math(body):
            # pull everything into one math except a leading digit-free label ending with :
            m2 = re.match(r"^([^:$\d][^:$]*):\s*\$(.+)\$$", body.rstrip().rstrip("."))
            if m2 and not re.search(r"\d", m2.group(1)):
                body = f"{m2.group(1)}: ${m2.group(2)}$."
            else:
                flat, cur = strip_math_keep_currency(body)
                body = restore_currency(f"${flat.strip().rstrip('.')} $.", cur).replace(" $.", "$.")
        body = normalize_escapes(body)
        body = fix_thousands_scars(body)
        # Ensure period after closing $
        body = body.rstrip()
        if body.endswith("$"):
            body += "."
        elif not body.endswith(".") and not body.endswith("$."):
            body += "."
        body = body.replace("$.$.", "$.")
        lines.append(f"{m.group(1)} {body}")
    text = "\n".join(lines)
    text = re.sub(r"(\*\*\d+\.\*\*[^\n]*)\n(\*\*\d+\.\*\*)", r"\1\n\n\2", text)
    return text


def main() -> None:
    src = PATH.read_text(encoding="utf-8")
    # Global thousands scar fix first (whole file)
    src = fix_thousands_scars(src)
    src = normalize_escapes(src)

    def repl(m: re.Match[str]) -> str:
        return m.group(1) + rewrite_part3(m.group(2)) + m.group(3)

    new_src, n = re.subn(
        r"(\*\*Part 3: Solve\.\*\*\n\n)(.*?)(\n\n\*\*Answer\.\*\*)",
        repl,
        src,
        flags=re.S,
    )
    PATH.write_text(new_src, encoding="utf-8")
    print("blocks", n)

    # Verify screenshot task (math-11-52)
    t = PATH.read_text(encoding="utf-8")
    i = t.find("35,264.01")
    j = t.rfind("**Part 3: Solve.**", 0, i + 100)
    # find overview part3 - search for math-11-52
    i = t.find("id: `math-11-52`")
    j = t.find("**Part 3: Solve.**", i)
    k = t.find("**Answer.**", j)
    print("--- math-11-52 Part3 ---")
    print(t[j:k])

    # Audit
    bad_thousands = len(re.findall(r"\d\$, \$", t))
    bad_digits = 0
    samples = []
    for m in re.finditer(
        r"\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*", t, re.S
    ):
        for line in m.group(1).split("\n"):
            mm = re.match(r"^\*\*\d+\.\*\*\s+(.*)$", line)
            if mm and digits_outside_math(mm.group(1)):
                bad_digits += 1
                if len(samples) < 15:
                    samples.append(mm.group(1)[:120])
    print("broken_thousands", bad_thousands, "digits_outside", bad_digits)
    for s in samples:
        print(" ", s)


if __name__ == "__main__":
    main()
