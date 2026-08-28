#!/usr/bin/env python3
"""Rewrite Chapter 6 inequality explanations into MATH 13.18 style.

Target voice (MATH 13.18 / Ch2 assemble):
  **A.** → True|False

  Opener naming the method.

  Named step:

  $$display math$$

  Bridge sentence.

  So the statement is True|False.

For inequalities every algebraic rewrite is its own display block.
Sign charts become a compact display of interval signs (no markdown tables).
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
JSON_PATH = ROOT / "src" / "data" / "math-ch6-inequalities.json"
LETTERS = "ABCDE"

_OLD_HDR = re.compile(
    r"^\*\*[A-E]\)\s*.*?\*\*\s*\((?:true|false)\)\s*",
    re.I | re.S,
)
_ARROW_HDR = re.compile(r"^\*\*[A-E]\.\*\*\s*→\s*(?:True|False)\s*", re.I)
_CLOSER = re.compile(
    r"(?:,?\s*)?(?:so |matching these figures to the claim, )?"
    r"(?:the statement is (?:True|False)\.?)\s*$",
    re.I,
)
_SIGN_TABLE = re.compile(
    r"\*\*Sign chart\*\*\s*\n\n"
    r"\| Interval \| Sign \|\s*\n"
    r"\| --- \| --- \|\s*\n"
    r"((?:\|[^\n]+\|\s*\n?)+)",
    re.I,
)
_BOLD_HEAD = re.compile(r"^\*\*([^*]+)\*\*\s*$")
_INLINE_ONLY = re.compile(r"^\$([^$]+)\$\.?$")

# Words that mark a line as prose, not a pure equation.
_PROSE = re.compile(
    r"\b("
    r"numerator|denominator|zero|zeros|at|excluded|included|undefined|division|"
    r"keep|keeping|the|inequality|asks|for|so|never|which|matches|claim|"
    r"plug|try|confirming|tempting|means|should|always|must|common|trap|"
    r"quick|check|region|regions|interval|solution|selection|strict|"
    r"true|false|every|except|result|part|giving|gives|since|when|"
    r"factor|factors|opens|parabola|discriminant|branch|stated|wrongly|"
    r"set|up|solve|solving|dividing|both|sides|flips|giving|exactly|"
    r"target|bill|points|redeem|minimum|number|restates|"
    r"split|compound|separate|left|right|first|second|intersection|"
    r"correct|answer|final|combine|case|domain|restriction"
    r")\b",
    re.I,
)


def _clean_math(s: str) -> str:
    s = s.strip().strip("$").strip()
    s = re.sub(r"\s+", " ", s)
    s = s.replace("−", "-").replace("–", "-")
    return s


def _display(formula: str) -> str:
    return f"$${_clean_math(formula)}$$"


def _is_pure_equation(line: str) -> bool:
    """True only for a line that is essentially one math equation."""
    s = line.strip().rstrip(".")
    if not s or s.startswith("**"):
        return False
    # Fully wrapped single math atom
    m = _INLINE_ONLY.match(s)
    if m:
        inner = m.group(1)
        return bool(re.search(r"[=<>≤≥]", inner)) and not _PROSE.search(inner)
    # Unwrapped: must look like algebra and not contain prose words
    if _PROSE.search(s):
        return False
    if not re.search(r"[=<>≤≥]", s):
        return False
    # Reject lines that are mostly words
    words = re.findall(r"[A-Za-z]+", s)
    if len(words) >= 4:
        return False
    return len(s) < 140


def _parse_sign_rows(block: str) -> list[tuple[str, str]]:
    rows = []
    for line in block.strip().splitlines():
        m = re.match(r"\|\s*(.+?)\s*\|\s*([+\-−–])\s*\|", line.strip())
        if m:
            rows.append(
                (
                    _clean_math(m.group(1)),
                    m.group(2).replace("−", "-").replace("–", "-"),
                )
            )
    return rows


def _sign_chart_display(rows: list[tuple[str, str]]) -> str:
    if not rows:
        return ""
    pieces = [rf"{iv}:\ {sg}" for iv, sg in rows]
    return (
        "Sign of the expression on each open interval:\n\n"
        + _display(r",\quad ".join(pieces))
    )


def _expand_critical_points(text: str) -> str:
    """Turn 'Numerator zero at $x = 2$' prose into named displays."""
    text = re.sub(
        r"(?i)Numerator(?:\s+\([^)]+\))? zero at \$([^$]+)\$\.?",
        lambda m: f"Numerator zero:\n\n$${_clean_math(m.group(1))}$$",
        text,
    )
    text = re.sub(
        r"(?i)Denominator\s+\$\(([^$]+)\)\$\s+zero at \$([^$]+)\$"
        r"(?:\s*\(excluded[^)]*\))?\.?",
        lambda m: (
            f"Denominator ${_clean_math(m.group(1))}$ zero (always excluded):\n\n"
            f"$${_clean_math(m.group(2))}$$"
        ),
        text,
    )
    text = re.sub(
        r"(?i)Denominator(?:\s+\([^)]+\))? zero at \$([^$]+)\$"
        r"(?:\s*\(excluded[^)]*\))?\.?",
        lambda m: (
            f"Denominator zero (always excluded):\n\n"
            f"$${_clean_math(m.group(1))}$$"
        ),
        text,
    )
    # "2 and 3." under Critical points → display
    text = re.sub(
        r"(Critical points:)\s*\n\n(-?\d+(?:\s+and\s+-?\d+)+)\.?",
        lambda m: (
            f"{m.group(1)}\n\n"
            + _display(m.group(2).replace(" and ", r",\ "))
        ),
        text,
    )
    # Promote solution interval lines that are mostly math
    text = re.sub(
        r"(Solution:)\s*\n\n"
        r"\$?([\(\[][^$)\]\n]+[\)\]])"
        r"(?:\s*[—–-]\s*which matches\s+\$?([^$.\n]+)\$?)?"
        r"\$?\.?",
        lambda m: _format_solution_block(m.group(1), m.group(2), m.group(3)),
        text,
    )
    # Trailing period glued to display
    text = re.sub(r"\$\$\s*\.", "$$", text)
    text = re.sub(r"\$\$\$+", "$$", text)
    text = re.sub(r"Solution::+", "Solution:", text)
    text = re.sub(r"\$\$\n([A-Z*])", r"$$\n\n\1", text)
    text = re.sub(r"\$\$\s*\n\s*(gives|giving)\b", r"$$\n\n\1", text, flags=re.I)
    text = re.sub(r"\b(gives|giving)\s*\n\n\$\$", r"\1\n\n$$", text, flags=re.I)
    text = re.sub(r"\$\$(\s+)([A-Z])", r"$$\n\n\2", text)
    return text


def _format_solution_block(label: str, interval: str, note: str | None) -> str:
    out = f"{label}\n\n{_display(interval)}"
    if note:
        note = note.strip().strip("$").rstrip(".")
        out += f"\n\nWhich matches ${note}$."
    return out


def _expand_word_algebra(text: str) -> str:
    """Lift ${...}$ inequality chunks in word explanations into displays."""
    def repl(m: re.Match[str]) -> str:
        return f"\n\n{_display(m.group(1))}\n\n"

    text = re.sub(r"\$\{([^}]+)\}\$", repl, text)
    text = re.sub(
        r"(gives|giving|flips the inequality,? giving)\s+\$([^$]+)\$\.?",
        lambda m: f"{m.group(1)}\n\n{_display(m.group(2))}",
        text,
        flags=re.I,
    )
    text = re.sub(r"\$\$\s*\.", "$$", text)
    text = re.sub(r"\n gives\n", "\nGives\n", text)
    text = re.sub(r"\$\$(\s*)(At |The |So |Which )", r"$$\n\n\2", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


def _restyle_body(body: str, *, subsection: str) -> str:
    body = body.strip()
    if not body:
        return body

    chart_block = ""
    m = _SIGN_TABLE.search(body)
    if m:
        rows = _parse_sign_rows(m.group(1))
        chart_block = _sign_chart_display(rows)
        body = body[: m.start()] + "\n\n__SIGN_CHART__\n\n" + body[m.end() :]

    label_map = {
        "Critical points": "Critical points",
        "Solution selection": "Solution selection",
        "Strictness": "Strictness",
        "Solution": "Solution",
        "Correct solution": "Correct solution",
        "Correct answer": "Correct answer",
        "Sign note": "Sign note",
        "Numerator note": "Numerator note",
        "Case analysis": "Case analysis",
        "Extra zero": "Extra zero",
        "Factor": "Factor",
        "Analysis": "Analysis",
        "Endpoint rule": "Endpoint rule",
        "Conclusion": "Conclusion",
        "Second branch": "Second branch",
        "Compare to claim": "Compare to the claim",
        "Solve": "Solve",
        "Setup": "Setup",
        "Evaluate": "Evaluate",
        "Inequality": "Inequality",
        "Order of operations": "Order of operations",
        "Model": "Model",
        "Left part": "Left part",
        "Right part": "Right part",
        "First inequality": "First inequality",
        "Second inequality": "Second inequality",
        "Intersection": "Intersection",
        "Final answer": "Final answer",
        "Domain restriction": "Domain restriction",
        "Discriminant check": "Discriminant",
        "Quadratic formula": "Quadratic formula",
        "Combine cases": "Combine cases",
        "Combine regions": "Combine regions",
        "Case 1 result": "Case 1 result",
        "Case 2 result": "Case 2 result",
        "Restrict to this case": "Restrict to this case",
        "Split |·| into branches": "Split the absolute value",
        "Result for this part": "Result for this part",
        "Interval from this part": "Interval from this part",
        "Equivalent form": "Equivalent form",
        "Common trap": "Common trap",
        "Quick check": "Quick check",
    }

    paras = re.split(r"\n\n+", body)
    out: list[str] = []
    i = 0
    while i < len(paras):
        p = paras[i].strip()
        if not p:
            i += 1
            continue
        if p == "__SIGN_CHART__":
            if chart_block:
                out.append(chart_block)
            i += 1
            continue

        bm = _BOLD_HEAD.match(p)
        if bm:
            raw = bm.group(1).strip().rstrip(":")
            if re.match(r"^(Region \d+|Case \d+)\b", raw, re.I):
                out.append(f"**{raw}**")
                i += 1
                continue
            label = label_map.get(raw, raw)

            if i + 1 < len(paras):
                nxt = paras[i + 1].strip()
                # One or more equation lines under the label
                lines = [ln.strip() for ln in nxt.splitlines() if ln.strip()]
                if lines and all(_is_pure_equation(ln) for ln in lines):
                    displays = [
                        _display(_INLINE_ONLY.match(ln).group(1) if _INLINE_ONLY.match(ln) else ln.rstrip("."))
                        for ln in lines
                    ]
                    out.append(f"{label}:\n\n" + "\n\n".join(displays))
                    i += 2
                    continue
                if _is_pure_equation(nxt):
                    inner = _INLINE_ONLY.match(nxt)
                    formula = inner.group(1) if inner else nxt.rstrip(".")
                    out.append(f"{label}:\n\n{_display(formula)}")
                    i += 2
                    continue
                # Mixed: promote equation-only lines inside the next para
                if "\n" in nxt and not nxt.startswith("**"):
                    promoted: list[str] = []
                    prose: list[str] = []
                    for ln in lines:
                        if _is_pure_equation(ln):
                            inner = _INLINE_ONLY.match(ln)
                            formula = inner.group(1) if inner else ln.rstrip(".")
                            promoted.append(_display(formula))
                        else:
                            prose.append(ln)
                    if promoted:
                        chunk = f"{label}:"
                        if prose:
                            chunk += "\n\n" + " ".join(prose)
                        chunk += "\n\n" + "\n\n".join(promoted)
                        out.append(chunk)
                        i += 2
                        continue

            out.append(f"{label}:")
            i += 1
            continue

        if p.lower().startswith("**common trap:**"):
            text = re.sub(r"^\*\*Common trap:\*\*\s*", "", p, flags=re.I)
            out.append(f"Common trap:\n\n{text}")
            i += 1
            continue
        if p.lower().startswith("**quick check:**"):
            text = re.sub(r"^\*\*Quick check:\*\*\s*", "", p, flags=re.I)
            out.append(f"Quick check:\n\n{text}")
            i += 1
            continue

        if _is_pure_equation(p):
            inner = _INLINE_ONLY.match(p)
            formula = inner.group(1) if inner else p.rstrip(".")
            out.append(_display(formula))
            i += 1
            continue

        if "\n" in p and not p.startswith("**"):
            lines = [ln.strip() for ln in p.splitlines() if ln.strip()]
            rebuilt: list[str] = []
            buf: list[str] = []
            for ln in lines:
                if _is_pure_equation(ln):
                    if buf:
                        rebuilt.append(" ".join(buf))
                        buf = []
                    inner = _INLINE_ONLY.match(ln)
                    formula = inner.group(1) if inner else ln.rstrip(".")
                    rebuilt.append(_display(formula))
                else:
                    buf.append(ln)
            if buf:
                rebuilt.append(" ".join(buf))
            out.append("\n\n".join(rebuilt))
            i += 1
            continue

        out.append(p)
        i += 1

    text = "\n\n".join(out)
    text = _expand_critical_points(text)
    if subsection.startswith("6.4"):
        text = _expand_word_algebra(text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()

    # Method openers
    if subsection.startswith("6.1") and text.startswith("Critical points"):
        text = (
            "A rational inequality is decided by the zeros of the numerator and the "
            "excluded zeros of the denominator. Mark those critical points, then read "
            "the sign on each open interval.\n\n"
            + text
        )
    elif subsection.startswith("6.2") and text.startswith("Factor"):
        text = (
            "Factor the quadratic (or read its discriminant), mark the roots, and test "
            "the sign on each interval. Endpoints follow the strictness of the inequality.\n\n"
            + text
        )
    elif subsection.startswith("6.3") and (
        text.startswith("Split") or text.startswith("A compound")
    ):
        if not text.startswith("A compound"):
            text = (
                "A compound inequality is two conditions that must hold together. Solve each "
                "piece separately, then intersect the solution sets.\n\n"
                + text
            )
    elif subsection.startswith("6.4") and text.startswith("Solve"):
        text = (
            "Translate the worded condition into an inequality in one letter, then solve "
            "it step by step. Watch the direction when dividing by a negative coefficient.\n\n"
            + text
        )

    return text


def _finish(body: str, verdict: str, *, style: str) -> str:
    body = _CLOSER.sub("", body).strip().rstrip(" ,;")
    if re.search(r"the statement is (?:True|False)\.?\s*$", body, re.I):
        return re.sub(
            r"the statement is (?:True|False)\.?\s*$",
            f"the statement is {verdict}.",
            body,
            flags=re.I,
        )
    if style == "short":
        return f"{body}\n\nSo the statement is {verdict}."
    if style == "match":
        return f"{body}\n\nMatching these figures to the claim, the statement is {verdict}."
    if style == "against" and verdict == "False":
        return (
            f"{body}\n\n"
            f"The claim’s comparison is incorrect, so the statement is False."
        )
    if body.rstrip().endswith("$$") or re.search(r"\bso\b", body.split("\n")[-1], re.I):
        return f"{body}\n\nSo the statement is {verdict}."
    body = body.rstrip(".")
    return f"{body}, so the statement is {verdict}."


def _assign_styles(bodies: list[str]) -> list[str]:
    n = len(bodies)
    lengths = [len(b) for b in bodies]
    short_i = min(range(n), key=lambda i: (lengths[i], i))
    long_i = max(
        (i for i in range(n) if i != short_i),
        key=lambda i: lengths[i],
        default=short_i,
    )
    rest = [i for i in range(n) if i not in (short_i, long_i)]
    styles = ["medium"] * n
    styles[short_i] = "short"
    styles[long_i] = "stepped"
    if rest:
        styles[rest[0]] = "match"
    if len(rest) > 1:
        styles[rest[1]] = "against"
    return styles


def _extract_inequality(statement: str) -> str | None:
    """Pull the main inequality math from a Ch6 statement."""
    # Brace-aware scan after "inequality $"
    m = re.search(r"(?i)inequality\s+\$", statement)
    if m:
        i = m.end()
        if i < len(statement) and statement[i] == "{":
            # ${...}$ form
            depth = 0
            j = i
            while j < len(statement):
                if statement[j] == "{":
                    depth += 1
                elif statement[j] == "}":
                    depth -= 1
                    if depth == 0:
                        return _clean_math(statement[i + 1 : j])
                j += 1
        else:
            # $...$ with possible nested {...}
            depth = 0
            j = i
            while j < len(statement):
                ch = statement[j]
                if ch == "{":
                    depth += 1
                elif ch == "}":
                    depth = max(0, depth - 1)
                elif ch == "$" and depth == 0:
                    return _clean_math(statement[i:j])
                j += 1
    # Fallback: first comparison-bearing math atom (brace-aware)
    j = 0
    while True:
        start = statement.find("$", j)
        if start < 0:
            break
        if start + 1 < len(statement) and statement[start + 1] == "$":
            j = start + 2
            continue
        depth = 0
        k = start + 1
        while k < len(statement):
            ch = statement[k]
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth = max(0, depth - 1)
            elif ch == "$" and depth == 0:
                frag = statement[start + 1 : k]
                if re.search(r"[<>≤≥]|\\le|\\ge", frag):
                    return _clean_math(frag)
                j = k + 1
                break
            k += 1
        else:
            break
    return None


def rewrite_explanation(
    raw: str,
    *,
    letter: str,
    truth: bool,
    subsection: str,
    style: str,
    statement: str = "",
) -> str:
    verdict = "True" if truth else "False"
    body = raw.strip()
    body = _ARROW_HDR.sub("", body).strip()
    body = _OLD_HDR.sub("", body).strip()
    body = _CLOSER.sub("", body).strip()
    body = _restyle_body(body, subsection=subsection)

    # Bind the statement's inequality as the first display when missing.
    ineq = _extract_inequality(statement) if statement else None
    if ineq and subsection in ("6.1", "6.2", "6.3", "6.4"):
        compact = re.sub(r"\s+", "", ineq)
        body_cmp = re.sub(r"\s+", "", body)
        if compact[:24] not in body_cmp:
            lead = f"The claim concerns the inequality\n\n{_display(ineq)}"
            body = f"{lead}\n\n{body}"

    body = _finish(body, verdict, style=style)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()

    def _fix_nested(m: re.Match[str]) -> str:
        inner = m.group(1)
        if "$" in inner:
            inner = inner.replace("$", "")
        return f"$${inner}$$"

    body = re.sub(r"\$\$(.+?)\$\$", _fix_nested, body, flags=re.S)
    return f"**{letter}.** → {verdict}\n\n{body}"


def audit(tasks: list[dict]) -> list[str]:
    errs: list[str] = []
    for t in tasks:
        for i, (truth, expl) in enumerate(
            zip(t["answer_key"], t["tactical_explanations"])
        ):
            letter = LETTERS[i]
            verdict = "True" if truth else "False"
            head = f"**{letter}.** → {verdict}"
            if not expl.startswith(head):
                errs.append(f"{t['case_id']} {letter}: bad header {expl[:60]!r}")
            if not re.search(rf"the statement is {verdict}\.?\s*$", expl, re.I):
                errs.append(f"{t['case_id']} {letter}: closer mismatch")
            if re.match(r"\*\*[A-E]\)", expl):
                errs.append(f"{t['case_id']} {letter}: old paren header remains")
            if "| Interval | Sign |" in expl:
                errs.append(f"{t['case_id']} {letter}: markdown sign table remains")
            if "$$$" in expl or "Solution::" in expl:
                errs.append(f"{t['case_id']} {letter}: display/label glitch")
            # Nested dollars inside $$ ... $$
            for dm in re.findall(r"\$\$(.+?)\$\$", expl, flags=re.S):
                if "$" in dm:
                    errs.append(f"{t['case_id']} {letter}: nested $ inside display")
                    break
    return errs


def main() -> None:
    data = json.loads(JSON_PATH.read_text())
    tasks = data["tasks"]
    n_rewritten = 0
    for t in tasks:
        bodies = []
        for raw in t["tactical_explanations"]:
            b = _ARROW_HDR.sub("", raw)
            b = _OLD_HDR.sub("", b).strip()
            bodies.append(b)
        styles = _assign_styles(bodies)
        new_expls = []
        for i, raw in enumerate(t["tactical_explanations"]):
            new_expls.append(
                rewrite_explanation(
                    raw,
                    letter=LETTERS[i],
                    truth=bool(t["answer_key"][i]),
                    subsection=t["subsection"],
                    style=styles[i],
                    statement=t["statements"][i],
                )
            )
            n_rewritten += 1
        t["tactical_explanations"] = new_expls

    errs = audit(tasks)
    JSON_PATH.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n")
    print(f"rewrote {n_rewritten} explanations → {JSON_PATH}")
    if errs:
        print(f"AUDIT ISSUES ({len(errs)}):")
        for e in errs[:40]:
            print(" -", e)
    else:
        print("audit clean")

    lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    n_disp = sum(e.count("$$") // 2 for t in tasks for e in t["tactical_explanations"])
    lens.sort()
    print(
        f"expl len min/med/mean/max: {lens[0]} / {lens[len(lens)//2]} / "
        f"{sum(lens)//len(lens)} / {lens[-1]}"
    )
    print(f"display-math blocks: {n_disp}")


if __name__ == "__main__":
    main()
