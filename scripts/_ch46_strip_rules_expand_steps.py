#!/usr/bin/env python3
"""Ch4–6: strip abstract rule-formula displays; expand compressed calc chains.

Does not touch statements, answer_key, titles, or figures (unless a stem is a
pure rule recitation — none found in this pass).
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

JSON_FILES = [
    ROOT / "src/data/math-ch4-cases.json",
    ROOT / "src/data/math-ch5-exam.json",
    ROOT / "src/data/math-ch6-inequalities.json",
]
TS_FILES = [
    ROOT / "src/data/math-ch5-linear-equations.ts",
]

DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)

# Exact (whitespace-normalized) abstract rule displays to delete.
RULE_EXACT = {
    # Quadratic / Vieta textbook identities
    r"\Delta = b^2 - 4ac",
    r"\Delta=b^2-4ac",
    r"\Delta=b^{2}-4ac",
    r"x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}",
    r"x=\frac{-b\pm\sqrt{\Delta}}{2a}",
    r"x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}",
    r"x_1 + x_2 = -\frac{b}{a}",
    r"x_1 x_2 = \frac{c}{a}",
    r"S=-\frac{b}{a}",
    r"P=\frac{c}{a}",
    # Area / geometry template
    r"A=\ell\cdot w",
    r"A = \ell \cdot w",
    r"A=x\cdot y",
    r"A = x \cdot y",
    # Log product identity
    r"\log_b(u \cdot v) = \log_b u + \log_b v",
    r"\log_b(u\cdot v)=\log_b u+\log_b v",
    # Ch5 linear-system templates
    r"B = f + t\cdot r",
    r"B=f+t\cdot r",
    r"C = n_x x + n_y y",
    r"C=n_x x+n_y y",
    r"d = x - y",
    r"d=x-y",
    r"x' = x - t,\quad y' = y + t",
    r"x'=x-t,\quad y'=y+t",
    r"x=\frac{\Delta_x}{\Delta}",
    r"y=\frac{\Delta_y}{\Delta}",
}

# Intro sentences that exist only to present a deleted rule block.
INTRO_SENTENCES = [
    r"Area of a rectangle is length times width:\n\n",
    r"The logarithm product identity\n\n",
    r"For the standard quadratic equation \$a x\^2 \+ b x \+ c = 0\$, the discriminant is given by:\n\n",
    r"An extended bill adds the recovered per-unit charge on top of the recovered fee:\n\n",
    r"A mixed purchase is the linear combination of the recovered unit prices:\n\n",
    r"The gap between the two recovered unknowns is their difference:\n\n",
    r"A transfer shifts one recovered holding into the other by the stated amount:\n\n",
    r"The discriminant of this quadratic equation is:\n\n",
    r"The enclosed area is the product of the two dimensions:\n\n",
    r"Vieta's formulas give their sum and product:\n\n",
]


def norm_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip())


def is_rule_block(body: str) -> bool:
    return norm_ws(body) in {norm_ws(x) for x in RULE_EXACT}


def remove_rule_displays(text: str) -> tuple[str, int]:
    """Remove abstract rule $$...$$ blocks and orphaned intro sentences."""
    removed = 0

    def repl(m: re.Match) -> str:
        nonlocal removed
        body = m.group(1)
        if is_rule_block(body):
            removed += 1
            return ""
        return m.group(0)

    out = DISPLAY_RE.sub(repl, text)

    for intro in INTRO_SENTENCES:
        out2, n = re.subn(intro, "", out)
        if n:
            out = out2

    # Cramer-style intros that only named the template
    out = re.sub(
        r"(?:Elimination on two independent linear equations recovers a unique value for each unknown\. )?"
        r"The claim names (?:the (?:first|second) recovered coordinate|the hourly rates of X and Y):\n\n",
        "",
        out,
    )

    out = re.sub(r"\n{3,}", "\n\n", out)

    # Orphan after log-identity strip: "holds if and only if..."
    out = re.sub(
        r"(\*\*E\.\*\* → True\n\n)holds if and only if both factors are strictly positive\.",
        r"\1The step that replaces $\\log_b u + \\log_b v$ by $\\log_b(u \\cdot v)$ holds if and only if both factors are strictly positive.",
        out,
    )

    # Soft lead when area rule+intro removed
    out = re.sub(
        r"(\*\*[A-E]\.\*\* → (?:True|False)\n\n)Substitute the recovered sides",
        r"\1The area is the product of the sides. Substitute the recovered sides",
        out,
    )

    # Dangling colon left by deleted display
    out = re.sub(
        r":\n\n(?=\*\*|[A-Z]|So the|Here |The |All |Both |Read |Take |A |An |If |When |Substituting|Using |Therefore|Thus |Compare |Moving |Today)",
        ".\n\n",
        out,
    )
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out, removed


def split_equals_outside_commands(s: str) -> list[str]:
    """Split on '=' that are not part of TeX relations like \\neq, \\leq, \\geq."""
    protected: list[str] = []

    def protect(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"«P{len(protected) - 1}»"

    tmp = re.sub(
        r"\\(?:neq|leq|geq|approx|equiv|iff|Rightarrow|Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)",
        protect,
        s,
    )
    # Also avoid splitting inside braces (fractions, subscripts)
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


def has_stem_digit(s: str) -> bool:
    """True if s contains a digit that is not purely structural (2a, 4ac)."""
    t = s
    t = re.sub(r"\\frac\{-b\\pm\\sqrt\{[^}]+\}\}\{2a\}", "", t)
    t = re.sub(r"-\\frac\{b\}\{2a\}", "", t)
    t = re.sub(r"b\^\{?2\}?", "", t)
    t = re.sub(r"4ac", "", t)
    t = re.sub(r"2a", "", t)
    t = re.sub(r"a-1", "", t)
    t = re.sub(r"n-1", "", t)
    return bool(re.search(r"\d", t))


def should_expand_chain(body: str) -> bool:
    s = body.strip()
    if r"\qquad" in s or r"\quad" in s:
        return False
    if r"\text{" in s and s.count("=") <= 2:
        return False
    if re.search(
        r"\\(?:neq|leq|geq|approx|equiv|iff|Rightarrow|Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow|implies)",
        s,
    ):
        return False
    if r"\implies" in s or r"\iff" in s:
        return False
    if r"\begin{" in s:
        return False
    parts = split_equals_outside_commands(s)
    if len(parts) < 3:
        return False
    if not has_stem_digit(s):
        return False
    # Avoid expanding pure coefficient lists: A=..., B=..., C=...
    if re.search(r"\bA\s*=", s) and re.search(r"\bB\s*=", s):
        return False
    return True


def expand_chain(body: str) -> str:
    """Split LHS = a = b = c into stepped $$ blocks (Ch7 style with $$=...$$)."""
    s = body.strip()
    parts = [p.strip() for p in split_equals_outside_commands(s)]
    blocks: list[str] = []
    i = 1
    if len(parts) >= 3 and not has_stem_digit(parts[1]) and has_stem_digit(parts[2]):
        blocks.append(f"$${parts[0]}={parts[1]}={parts[2]}$$")
        i = 3
    else:
        blocks.append(f"$${parts[0]}={parts[1]}$$")
        i = 2
    for p in parts[i:]:
        blocks.append(f"$$={p}$$")
    return "\n\n".join(blocks)


def expand_displays(text: str) -> tuple[str, int]:
    expanded = 0

    def repl(m: re.Match) -> str:
        nonlocal expanded
        body = m.group(1)
        if should_expand_chain(body):
            expanded += 1
            return expand_chain(body)
        return m.group(0)

    return DISPLAY_RE.sub(repl, text), expanded


def process_text(text: str) -> tuple[str, dict]:
    text, n_rules = remove_rule_displays(text)
    text, n_exp = expand_displays(text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = text.strip()
    return text, {"rules": n_rules, "expanded": n_exp}


def process_json(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    stats = {"rules": 0, "expanded": 0, "fields": 0}
    for t in data["tasks"]:
        for field in ("solution_overview", "context"):
            if not t.get(field):
                continue
            new, st = process_text(t[field])
            if new != t[field]:
                t[field] = new
                stats["fields"] += 1
            stats["rules"] += st["rules"]
            stats["expanded"] += st["expanded"]
        expls = t.get("tactical_explanations") or []
        for i, e in enumerate(expls):
            new, st = process_text(e)
            if new != e:
                expls[i] = new
                stats["fields"] += 1
            stats["rules"] += st["rules"]
            stats["expanded"] += st["expanded"]
        t["tactical_explanations"] = expls
    path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return stats


def process_ts(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    stats = {"rules": 0, "expanded": 0, "fields": 0}

    def overview_repl(m: re.Match) -> str:
        body = m.group(1)
        new, st = process_text(body)
        stats["rules"] += st["rules"]
        stats["expanded"] += st["expanded"]
        if new != body:
            stats["fields"] += 1
        return f"solution_overview: `{new}`"

    text2 = re.sub(r"solution_overview:\s*`([\s\S]*?)`", overview_repl, text)

    def expl_array_repl(m: re.Match) -> str:
        inner = m.group(1)
        closing = m.group(2)

        def one(mm: re.Match) -> str:
            body = mm.group(1)
            if not re.match(r"\*\*[A-E]\.\*\*", body.strip()):
                return mm.group(0)
            new, st = process_text(body)
            stats["rules"] += st["rules"]
            stats["expanded"] += st["expanded"]
            if new != body:
                stats["fields"] += 1
            return f"`{new}`"

        new_inner = re.sub(r"`([\s\S]*?)`", one, inner)
        return "tactical_explanations: [" + new_inner + closing

    # Allow `],` or bare `]` before the next field (Ch5 omits the comma).
    text3 = re.sub(
        r"tactical_explanations:\s*\[([\s\S]*?)(\n\s*\],?)",
        expl_array_repl,
        text2,
    )
    if text3 != text:
        path.write_text(text3, encoding="utf-8")
    return stats


def main() -> None:
    assert is_rule_block(r"A=\ell\cdot w")
    assert is_rule_block(r"\Delta = b^2 - 4ac")
    assert is_rule_block(r"B = f + t\cdot r")
    assert is_rule_block(r"x=\frac{\Delta_x}{\Delta}")
    assert should_expand_chain(r"y = 620 - 360 = 260")
    assert not should_expand_chain(r"x = 2,\quad x = 3")
    print("unit checks OK")

    grand = {"rules": 0, "expanded": 0, "fields": 0}
    for path in JSON_FILES:
        st = process_json(path)
        print(f"{path.name}: rules={st['rules']} expanded={st['expanded']} fields={st['fields']}")
        for k in grand:
            grand[k] += st[k]
    for path in TS_FILES:
        st = process_ts(path)
        print(f"{path.name}: rules={st['rules']} expanded={st['expanded']} fields={st['fields']}")
        for k in grand:
            grand[k] += st[k]
    print("TOTAL", grand)


if __name__ == "__main__":
    main()
