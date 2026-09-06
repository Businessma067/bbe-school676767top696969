#!/usr/bin/env python3
"""Ch7–9: strip abstract rule-formula displays; expand compressed calc chains.

Does not touch statements, answer_key, titles, or figures.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

JSON_FILES = [
    ROOT / "src/data/math-ch7-linear-quadratic.json",
    ROOT / "src/data/math-ch7-mixed-exam.json",
    ROOT / "src/data/math-ch8-exam.json",
    ROOT / "src/data/math-ch9-polynomials.json",
    ROOT / "src/data/math-ch9-mixed-exam.json",
]
TS_FILES = [
    ROOT / "src/data/math-ch8-power-functions.ts",
]

DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)

# Exact (whitespace-normalized) abstract rule displays to delete.
RULE_EXACT = {
    r"\Delta=b^{2}-4ac\qquad x=-\frac{b}{2a}",
    r"x=\frac{-b\pm\sqrt{\Delta}}{2a}",
    r"x=-\frac{b}{2a}",
    r"\Delta=b^{2}-4ac",
    r"x=-\frac{b}{2a}\qquad S=-\frac{b}{a}\qquad P=\frac{c}{a}",
    r"x=-\frac{b}{2a}\qquad S=-\frac{b}{a}",
    r"\ell:\; x=-\frac{b}{2a}\qquad S=-\frac{b}{a}",
    r"y=mx+q\iff x=\frac{y-q}{m}",
    r"x=\frac{y-q}{m}",
    r"m=\frac{y_{Q}-y_{P}}{x_{Q}-x_{P}}",
    r"q=y_{P}-m\,x_{P}",
    r"P=\frac{c}{a}\implies c=aP",
    r"\Delta_{k}=k!\,a",
    r"p(x)=a(x-r)(x-s)(x-t)",
    r"\frac{Y(cx)}{Y(x)}=\frac{K(cx)^{a}}{Kx^{a}}",
    r"\frac{Y(cx)}{Y(x)}=c^{a}",
    r"\frac{dY}{dx}=Ka x^{a-1}",
    r"\frac{dY}{dx}=Ka\,x^{a-1}",
    r"\varepsilon=\frac{x}{Y}\frac{dY}{dx} =\frac{x}{Kx^a}\left(Ka x^{a-1}\right)",
    r"\varepsilon=\frac{x}{Y}\frac{dY}{dx}=\frac{x}{Kx^{a}}\cdot Ka\,x^{a-1}",
    r"\varepsilon=\frac{x}{Y}\frac{dY}{dx}=a",
    r"\varepsilon=\frac{p}{q}\frac{dq}{dp}=\frac{p}{Kp^{a}}\cdot Ka\,p^{a-1}",
    r"\varepsilon=\frac{p}{Kp^{a}}\cdot Ka\,p^{a-1}",
    r"\frac{dq}{dp}=Ka\,p^{a-1}",
    r"\varepsilon=a",
    r"\varepsilon=a\varepsilon\varepsilon",
}

# Intro sentences that exist only to present a deleted rule block.
INTRO_SENTENCES = [
    r"On unit spacing a frozen \$k\$-th difference equals \$k!\$ times the leading coefficient\.\n\n",
    r"Use the point-elasticity definition:\n\n",
    r"Point elasticity is then\n\n",
    r"Point elasticity is\n\n",
    r"For a power law \$Y=Kx\^a\$, differentiate before forming elasticity:\n\n",
    r"For a power law \$Y=Kx\^\{a\}\$, differentiate first:\n\n",
    r"For a power demand \$q=Kp\^\{a\}\$, differentiate first:\n\n",
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

    # Drop known intro sentences that now sit before blank / next content.
    for intro in INTRO_SENTENCES:
        out2, n = re.subn(intro, "", out)
        if n:
            out = out2

    # Clean leftover blank runs from deleted displays.
    out = re.sub(r"\n{3,}", "\n\n", out)
    # Clean ":\n\n\n" or dangling "then\n\nSo"
    out = re.sub(r":\n\n(?=\*\*|[A-Z]|So the|Here |The |All |Both |Read |Take |A |An |If |When |Substituting|Changing|Therefore|Two-sided|Oddness|The claim|Matching)", ".\n\n", out)
    # Fix double spaces / orphaned "then" lines
    out = re.sub(r"\nPoint elasticity is then\n\n", "\n", out)
    out = re.sub(r"\nUse the point-elasticity definition:\n\n", "\n", out)
    out = re.sub(
        r"\nFor a power law \$Y=Kx\^a\$, differentiate before forming elasticity:\n\n",
        "\n",
        out,
    )
    out = re.sub(
        r"\nFor a power law \$Y=Kx\^\{a\}\$, differentiate first:\n\n",
        "\n",
        out,
    )
    out = re.sub(
        r"\nFor a power demand \$q=Kp\^\{a\}\$, differentiate first:\n\n",
        "\n",
        out,
    )
    out = re.sub(r"\nPoint elasticity is then\n\n", "\n", out)
    out = re.sub(r"\nPoint elasticity is\n\n", "\n", out)
    out = re.sub(
        r"On unit spacing a frozen \$k\$-th difference equals \$k!\$ times the leading coefficient\.\n\n",
        "",
        out,
    )
    # Dangling colon left by deleted display after a keep-sentence
    out = re.sub(r"cancel:\n\n", "cancel.\n\n", out)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out, removed


def split_equals_outside_commands(s: str) -> list[str]:
    """Split on '=' that are not part of TeX relations like \\neq, \\leq, \\geq, \\approx, \\equiv, \\iff."""
    # Protect known relation commands by temporarily replacing them.
    protected: list[str] = []

    def protect(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"«P{len(protected) - 1}»"

    tmp = re.sub(
        r"\\(?:neq|leq|geq|approx|equiv|iff|Rightarrow|Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow)",
        protect,
        s,
    )
    # Also protect = inside \text{...} roughly
    parts = tmp.split("=")
    # Unprotect
    def unprotect(chunk: str) -> str:
        return re.sub(
            r"«P(\d+)»", lambda m: protected[int(m.group(1))], chunk
        )

    return [unprotect(p) for p in parts]


def has_stem_digit(s: str) -> bool:
    """True if s contains a digit that is not purely structural (2a, 4ac, a-1)."""
    t = s
    t = re.sub(r"\\frac\{-b\\pm\\sqrt\{[^}]+\}\}\{2a\}", "", t)
    t = re.sub(r"-\\frac\{b\}\{2a\}", "", t)
    t = re.sub(r"b\^\{?2\}?", "", t)
    t = re.sub(r"4ac", "", t)
    t = re.sub(r"2a", "", t)
    t = re.sub(r"a-1", "", t)
    t = re.sub(r"n-1", "", t)
    t = re.sub(r"k!", "", t)
    return bool(re.search(r"\d", t))


def should_expand_chain(body: str) -> bool:
    """True for compressed numerical/algebraic chains that jump in one display."""
    s = body.strip()
    if r"\qquad" in s or r"\quad" in s:
        return False
    if r"\text{" in s and s.count("=") <= 2:
        return False
    # Comparison / inequality displays are not calc chains
    if re.search(
        r"\\(?:neq|leq|geq|approx|equiv|iff|Rightarrow|Leftarrow|Leftrightarrow|Longleftrightarrow|Longrightarrow)",
        s,
    ):
        return False
    if r"\implies" in s or r"\iff" in s or r"\Longrightarrow" in s:
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
    # Avoid multi-point evaluations joined by commas
    if "," in s and len(re.findall(r"[A-Za-z]\\?\(|[A-Za-z]_?\{?\w*\}?\(", s)) >= 2:
        return False
    # Avoid expanding when a middle chunk looks like "1\neq x" style remnant risk
    # (already gated by \\neq above)
    return True


def expand_chain(body: str) -> str:
    """Split LHS = a = b = c into stepped $$ blocks.

    If the first RHS is still an abstract formula (no stem digits) but a later
    RHS is concrete, keep formula+first plug in one display so we do not leave
    a bare rule-formula block.
    """
    s = body.strip()
    parts = [p.strip() for p in split_equals_outside_commands(s)]
    blocks: list[str] = []
    i = 1
    # Merge leading abstract formula into the first concrete plug-in when needed.
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
    # Final whitespace tidy inside explanation bodies
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = text.strip() + ("\n" if text.endswith("\n") else "")
    # Ensure we don't leave trailing whitespace issues — keep as stripped content
    text = text.strip()
    return text, {"rules": n_rules, "expanded": n_exp}


def process_json(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    stats = {"rules": 0, "expanded": 0, "fields": 0}
    for t in tasks:
        for field in ("solution_overview",):
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
    """Process template-literal explanation / overview strings in a TS bank."""
    text = path.read_text(encoding="utf-8")
    stats = {"rules": 0, "expanded": 0, "fields": 0}

    # Match solution_overview: `...` and tactical explanation bodies `...`
    # Be careful with nested backticks — these banks use `...` without nested ticks.

    def overview_repl(m: re.Match) -> str:
        body = m.group(1)
        new, st = process_text(body)
        stats["rules"] += st["rules"]
        stats["expanded"] += st["expanded"]
        if new != body:
            stats["fields"] += 1
        return f"solution_overview: `{new}`"

    text2 = re.sub(
        r"solution_overview:\s*`([\s\S]*?)`", overview_repl, text
    )

    # tactical_explanations array of template literals
    def expl_array_repl(m: re.Match) -> str:
        inner = m.group(1)

        def one(mm: re.Match) -> str:
            body = mm.group(1)
            # Unescape is not needed for ` literals; content is raw
            new, st = process_text(body)
            stats["rules"] += st["rules"]
            stats["expanded"] += st["expanded"]
            if new != body:
                stats["fields"] += 1
            return f"`{new}`"

        new_inner = re.sub(r"`([\s\S]*?)`", one, inner)
        return "tactical_explanations: [" + new_inner + "\n    ],"

    text3 = re.sub(
        r"tactical_explanations:\s*\[([\s\S]*?)\n\s*\],",
        expl_array_repl,
        text2,
    )
    if text3 != text:
        path.write_text(text3, encoding="utf-8")
    return stats


def main() -> None:
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
