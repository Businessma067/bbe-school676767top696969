#!/usr/bin/env python3
"""Rewrite Chapter 6 explanations to match MATH 13.18 voice.

MATH 13.18 patterns:
  **A.** → False

  Opener prose ending in a colon before the first display when a formula follows:

  $$P(X = n) = p^{n}$$

  Bridge sentence.

  For side A, $p = 0.3$ and $n = 25$:

  $$P(X = 25) = (0.3)^{25}$$

  ..., so the statement is False.

Rules mirrored here:
  - no bold section labels
  - colon lead-ins in running prose, then isolated $$ displays
  - one short item per task (almost no displays)
  - closers: hanging ", so the statement is …" / "So the statement is …" /
    "Matching these figures to the claim, …" / claim-comparison against
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PRE = Path("/tmp/ch6_pre1318.json")
DST = ROOT / "src" / "data" / "math-ch6-inequalities.json"
LETTERS = "ABCDE"


def _hybrid_source() -> dict:
    """Prefer /tmp/ch6_hybrid_source.json (clean PDF-style bodies for all tasks)."""
    hybrid = Path("/tmp/ch6_hybrid_source.json")
    if hybrid.exists():
        return json.loads(hybrid.read_text())
    current = json.loads(DST.read_text())
    pre_by_id = {t["case_id"]: t for t in json.loads(PRE.read_text())["tasks"]}
    tasks = []
    for t in current["tasks"]:
        if t["case_id"] in pre_by_id:
            base = json.loads(json.dumps(pre_by_id[t["case_id"]]))
            for k in ("subsection", "sort_order", "difficulty_level", "placeholder",
                       "title", "context", "statements", "answer_key"):
                if k in t:
                    base[k] = t[k]
            tasks.append(base)
        else:
            tasks.append(json.loads(json.dumps(t)))
    return {"tasks": tasks}

_OLD_HDR = re.compile(
    r"^\*\*[A-E]\)\s*.*?\*\*\s*\((?:true|false)\)\s*",
    re.I | re.S,
)
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
_BOLD_ONLY = re.compile(r"^\*\*([^*]+)\*\*\s*$")
_BOLD_INLINE = re.compile(r"^\*\*([^*]+)\*\*\s*(.+)$", re.S)
_INLINE_ONLY = re.compile(r"^\$([^$]+)\$\.?$")


def D(formula: str) -> str:
    s = formula.strip().strip("$").strip()
    s = re.sub(r"\s+", " ", s).replace("−", "-").replace("–", "-")
    return f"$${s}$$"


def _lower_first(s: str) -> str:
    s = s.strip()
    if not s:
        return s
    # Keep leading math / caps like "Side A" alone
    if s[0] in "$\\" or (s[0].isupper() and len(s) > 1 and s[1].isupper()):
        return s
    return s[0].lower() + s[1:]


def _parse_sign_rows(block: str) -> list[tuple[str, str]]:
    rows = []
    for line in block.strip().splitlines():
        m = re.match(r"\|\s*(.+?)\s*\|\s*([+\-−–])\s*\|", line.strip())
        if m:
            rows.append(
                (
                    m.group(1).strip().strip("$"),
                    m.group(2).replace("−", "-").replace("–", "-"),
                )
            )
    return rows


def _extract_inequality(statement: str) -> str | None:
    m = re.search(r"(?i)inequality\s+\$", statement)
    if m:
        i = m.end()
        depth = 0
        j = i
        while j < len(statement):
            ch = statement[j]
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth = max(0, depth - 1)
            elif ch == "$" and depth == 0:
                return statement[i:j].strip().strip("{}")
            j += 1
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
                    return frag.strip().strip("{}")
                j = k + 1
                break
            k += 1
        else:
            break
    return None


def _is_equation_line(line: str) -> bool:
    s = line.strip().rstrip(".")
    if not s or s.startswith("**"):
        return False
    m = _INLINE_ONLY.match(s)
    if m:
        return bool(re.search(r"[=<>≤≥]|\\le|\\ge|\\leq|\\geq", m.group(1)))
    # Prose with embedded math is not a pure equation line
    if re.search(r"[A-Za-z]{3,}", s) and not re.match(r"^\$", s):
        # Allow short factorizations like (x-2)(x-3)=0 without words; reject "Current load: …"
        words = re.findall(r"[A-Za-z]{2,}", s)
        if len(words) >= 2:
            return False
    if re.search(
        r"\b(the|numerator|denominator|keep|plug|try|since|which|claim|true|false|"
        r"every|except|result|giving|gives|region|interval|solution|factor|opens|"
        r"stated|wrongly|split|compound|confirming|tempting|belongs|branch|"
        r"comparing|reading|intersecting|putting|combining|restricting|setting|"
        r"solving|evaluating|checking|equivalently|matching|current|load|with|"
        r"children|adults|fence|area|budget|storage)\b",
        s,
        re.I,
    ):
        return False
    if not re.search(r"[=<>≤≥]|\\le|\\ge|\\leq|\\geq", s):
        return False
    if len(re.findall(r"[A-Za-z]+", s)) >= 4:
        return False
    return len(s) < 140


def _eq_display(line: str) -> str:
    m = _INLINE_ONLY.match(line.strip().rstrip("."))
    return D(m.group(1) if m else line.strip().rstrip("."))


# Section headers: emit a sentence only; leave the following paragraphs alone.
_HEADER_ONLY = {
    "Critical points",
    "Analysis",
    "Conclusion",
    "Case analysis",
    "Endpoint rule",
    "Sign note",
    "Numerator note",
    "Order of operations",
    "Model",
}


def _lead_for(label: str, subsection: str) -> str | None:
    """Map a PDF bold label to a 13.18-style prose lead-in (or None to drop)."""
    lab = label.strip().rstrip(":")
    # Region / Case keep as short prose openers
    if re.match(r"^(Region \d+|Case \d+)\b", lab, re.I):
        return lab if lab.endswith(":") else lab + ":"

    if lab == "Critical points":
        if subsection.startswith("6.1"):
            return (
                "The critical points are the zeros of the numerator and the "
                "excluded zeros of the denominator."
            )
        return "The critical points are the roots of the quadratic:"

    table = {
        "Solution selection": "Reading the sign chart against the inequality symbol:",
        "Strictness": None,  # rewritten specially below
        "Solution": "The solution set is",
        "Correct solution": "The correct solution set is",
        "Correct answer": "The correct answer is",
        "Sign note": None,
        "Numerator note": None,
        "Case analysis": None,
        "Extra zero": "There is an extra zero from the numerator:",
        "Factor": "Factoring first:",
        "Analysis": None,
        "Endpoint rule": None,
        "Conclusion": None,
        "Second branch": "The other branch also belongs:",
        "Compare to claim": "Comparing with the printed claim:",
        "Solve": "Solving:",
        "Setup": "Setting up the inequality:",
        "Evaluate": "Evaluating:",
        "Inequality": "The inequality is",
        "Area": "The area condition is:",
        "Storage": "The storage condition is:",
        "Budget": "The budget condition is:",
        "Fencing": "The fencing condition is:",
        "Binding constraint": "The binding constraint is:",
        "Integer production": "With integer production:",
        "Split": "Splitting into cases:",
        "Domain": "The domain is:",
        "Rewrite": "Rewriting:",
        "Reading the wording": "Reading the wording:",
        "Choose a variable": "Choose a variable:",
        "Translate into an inequality": "Translate into an inequality:",
        "Solve step by step": "Solving step by step:",
        "Solve / compare the sets": "Solving and comparing the sets:",
        "Interpret the result": "Interpreting the result:",
        "Compare to the claim": "Comparing with the printed claim:",
        "Order of operations": None,
        "Model": None,
        "Left part": "Left part:",
        "Right part": "Right part:",
        "First inequality": "First inequality:",
        "Second inequality": "Second inequality:",
        "Intersection": "Intersecting the two pieces:",
        "Final answer": "Putting the pieces together:",
        "Domain restriction": "The domain restriction is",
        "Discriminant check": "Checking the discriminant:",
        "Quadratic formula": "By the quadratic formula:",
        "Combine cases": "Combining both cases:",
        "Combine regions": "Combining the regions:",
        "Case 1 result": "Case 1 contributes",
        "Case 2 result": "Case 2 contributes",
        "Restrict to this case": "Restricting to this case:",
        "Split |·| into branches": "Splitting the absolute value into branches:",
        "Split $| \\cdot |$ into branches": "Splitting the absolute value into branches:",
        "Result for this part": "So this part gives:",
        "Interval from this part": "The interval from this part is",
        "Equivalent form": "Equivalently,",
        "Common trap": None,
        "Quick check": None,
        "Sign chart": None,  # handled separately
    }
    if lab in table:
        return table[lab]
    # Fallbacks for near-matches
    low = lab.lower()
    if "quadratic formula" in low:
        return "By the quadratic formula:"
    if "split" in low and "branch" in low:
        return "Splitting the absolute value into branches:"
    if "interval from" in low:
        return "The interval from this part is"
    if "result for" in low:
        return "So this part gives:"
    return lab + ":"


def _opener(subsection: str, ineq: str | None) -> str:
    if subsection.startswith("6.1"):
        if ineq:
            return (
                "A rational inequality is decided by the zeros of the numerator and the "
                f"excluded zeros of the denominator. Start from\n\n{D(ineq)}"
            )
        return (
            "A rational inequality is decided by the zeros of the numerator and the "
            "excluded zeros of the denominator."
        )
    if subsection.startswith("6.2"):
        if ineq:
            return (
                "Factor the quadratic, mark the roots, and test the sign on each interval. "
                f"The claim starts from\n\n{D(ineq)}"
            )
        return (
            "Factor the quadratic, mark the roots, and test the sign on each interval. "
            "Endpoints follow the strictness of the inequality."
        )
    if subsection.startswith("6.3"):
        if ineq:
            return (
                "A compound inequality is two conditions that must hold together. Solve each "
                f"piece, then intersect. The claim is\n\n{D(ineq)}"
            )
        return (
            "A compound inequality is two conditions that must hold together. Solve each "
            "piece separately, then intersect the solution sets."
        )
    if ineq:
        return (
            "Translate the worded condition into an inequality, then solve it carefully "
            f"(watch the direction when dividing by a negative). The algebra is\n\n{D(ineq)}"
        )
    return (
        "Translate the worded condition into an inequality in one letter, then solve it "
        "step by step. Watch the direction when dividing by a negative coefficient."
    )


def _emit_lead_then(lead: str | None, displays: list[str], prose: str, out: list[str]) -> None:
    """Attach lead-in + displays + optional prose the way 13.18 does."""
    if lead is None:
        out.extend(displays)
        if prose:
            out.append(prose)
        return

    lead = lead.strip()
    # Deduplicate if prose already starts with the same phrase
    if prose:
        lead_core = lead.rstrip(":").strip().lower()
        prose_l = prose.strip().lower()
        if prose_l.startswith(lead_core):
            prose = prose.strip()
            lead = ""

    if displays:
        if lead:
            chunk = lead if lead.endswith(":") else lead.rstrip(".") + ":"
            out.append(chunk + "\n\n" + "\n\n".join(displays))
        else:
            out.extend(displays)
        if prose:
            out.append(prose)
        return

    if not prose:
        if lead:
            out.append(lead if lead.endswith((":", ".")) else lead + ":")
        return

    if not lead:
        out.append(prose)
        return

    # Sentence-style leads (end with ".") — keep following prose as its own beat
    if lead.endswith("."):
        out.append(lead)
        if prose:
            nd = _num_den_block(prose)
            if nd is not None:
                out.extend(nd)
            else:
                out.append(prose)
        return

    # Value-style leads ("The solution set is", "The correct answer is")
    if not lead.endswith(":") and not lead.endswith(","):
        prose = re.sub(
            r"(?i)^True solution(?: set)?:\s*",
            "",
            prose.strip(),
        )
        naked = prose.strip().strip(".")
        # "(-1, 2] — which matches …" → display + lowercase bridge
        m = re.match(r"^(\$?[^—–\n]+?\$?)\s*[—–]\s*(.+)$", naked)
        if (
            m
            and re.search(r"[\[\(\{]", m.group(1))
            and len(m.group(1)) < 80
            and not re.search(r"(?i)true solution|numerator|denominator", m.group(1))
        ):
            out.append(f"{lead}\n\n{D(m.group(1).strip().strip('$'))}")
            rest = m.group(2).strip()
            if rest:
                rest = _lower_first(rest) if rest[0].isupper() else rest
                if not rest.endswith((".", "!", "?")):
                    rest += "."
                out.append(rest)
            return
        if (
            len(naked) < 60
            and re.match(r"^[\[\(\{\$\-0-9]", naked)
            and not re.search(
                r"\b(which|matches|claim|stated|wrongly|confirming|true solution)\b",
                naked,
                re.I,
            )
        ):
            out.append(f"{lead}\n\n{D(naked)}")
            return
        out.append(f"{lead} {prose}")
        return

    # Colon / comma lead-in into prose
    if lead.endswith(","):
        out.append(f"{lead} {_lower_first(prose)}")
    else:
        out.append(f"{lead.rstrip(':')}: {_lower_first(prose)}")


def _split_leading_equation(text: str) -> tuple[str | None, str]:
    """Pull a leading $...$ equation off the front of a mixed paragraph."""
    s = text.strip()
    m = re.match(r"^(\$[^$]+\$)\.?\s*(.*)$", s, re.S)
    if not m:
        return None, s
    eq = m.group(1)
    rest = m.group(2).strip()
    inner = eq.strip("$")
    if not re.search(r"[=<>≤≥]|\\le|\\ge|\\leq|\\geq", inner):
        return None, s
    return _eq_display(eq), rest


def _consume_math_after(
    paras: list[str], start: int
) -> tuple[list[str], str, int]:
    """Take following equation paragraphs; return displays, leftover prose, next index."""
    j = start
    displays: list[str] = []
    prose_after = ""
    while j < len(paras):
        nxt = paras[j].strip()
        if not nxt or nxt == "__SIGN__":
            break
        if nxt.startswith("**") or _BOLD_ONLY.match(nxt) or _BOLD_INLINE.match(nxt):
            if _BOLD_ONLY.match(nxt) or (
                _BOLD_INLINE.match(nxt) and not _is_equation_line(nxt)
            ):
                break
        lines = [ln.strip() for ln in nxt.splitlines() if ln.strip()]
        if lines and all(_is_equation_line(ln) for ln in lines):
            displays.extend(_eq_display(ln) for ln in lines)
            j += 1
            continue
        # Mixed paragraph: leading $eq$. + prose
        if len(lines) == 1:
            disp, rest = _split_leading_equation(lines[0])
            if disp is not None:
                displays.append(disp)
                prose_after = rest
                j += 1
                break
        eq_prefix: list[str] = []
        rest_lines: list[str] = []
        for ln in lines:
            if not rest_lines and _is_equation_line(ln):
                eq_prefix.append(_eq_display(ln))
            else:
                # try leading equation on this line
                if not rest_lines and not eq_prefix:
                    disp, rest = _split_leading_equation(ln)
                    if disp is not None:
                        eq_prefix.append(disp)
                        if rest:
                            rest_lines.append(rest)
                        continue
                rest_lines.append(ln)
        if eq_prefix:
            displays.extend(eq_prefix)
            if rest_lines:
                prose_after = " ".join(rest_lines)
            j += 1
            break
        prose_after = nxt
        j += 1
        break
    return displays, prose_after, j


def _num_den_block(para: str) -> list[str] | None:
    """Turn numerator/denominator zero notes into 13.18 lead + display blocks."""
    p = para.strip()
    out: list[str] = []

    m = re.match(
        r"(?i)Numerator(?:\s+\(([^)]+)\))?\s+zero at\s+\$([^$]+)\$\.?",
        p,
    )
    if m:
        note, val = m.group(1), m.group(2)
        if note:
            out.append(f"The numerator ({note}) vanishes at\n\n{D(val)}")
        else:
            out.append(f"The numerator vanishes at\n\n{D(val)}")
        return out

    # Numerator $(x^{2} - 9) = 0$ at $x = \pm 3$
    m = re.match(
        r"(?i)Numerator\s+\$([^$]+)\$\s+at\s+\$([^$]+)\$\.?",
        p,
    )
    if m:
        out.append(f"The numerator vanishes when\n\n{D(m.group(1))}")
        out.append(f"so\n\n{D(m.group(2))}")
        return out

    m = re.match(
        r"(?i)Numerator\s+(\([^)]+\))\s*=\s*0\s+at\s+\$([^$]+)\$\.?",
        p,
    )
    if m:
        out.append(f"The numerator vanishes when\n\n{D(m.group(1).strip() + ' = 0')}")
        out.append(f"so\n\n{D(m.group(2))}")
        return out

    m = re.match(
        r"(?i)Denominator(?:\s+\(([^)]+)\))?\s+zero at\s+\$([^$]+)\$"
        r"(?:\s*\((?:excluded|always excluded)[^)]*\))?\.?",
        p,
    )
    if m:
        note, val = m.group(1), m.group(2)
        if note:
            out.append(f"The denominator ({note}) vanishes at\n\n{D(val)}")
        else:
            out.append(f"The denominator vanishes at\n\n{D(val)}")
        out.append("(always excluded).")
        return out

    m = re.match(
        r"(?i)Denominator\s+\$([^$]+)\$\s+zero(?:\s*\((?:excluded|always excluded)[^)]*\))?\.?",
        p,
    )
    if m:
        out.append(f"The denominator vanishes at\n\n{D(m.group(1))}")
        out.append("(always excluded).")
        return out

    return None



def _rewrite_critical_list(para: str) -> str:
    """Turn denominator/numerator zero lists into math prose."""
    s = para.strip().rstrip(".")
    den_nums: list[str] = []
    num_nums: list[str] = []
    for m in re.finditer(
        r"(-?\d+(?:\s+and\s+-?\d+)*)\s*\(([^)]*(?:numerator|denominator)[^)]*)\)",
        s,
        re.I,
    ):
        nums = re.findall(r"-?\d+", m.group(1))
        kind = m.group(2).lower()
        if "denominator" in kind:
            den_nums.extend(nums)
        elif "numerator" in kind:
            num_nums.extend(nums)
    parts = []
    if den_nums:
        parts.append(
            "denominator zero (always excluded) at "
            + ", ".join(f"${n}$" for n in den_nums)
        )
    if num_nums:
        parts.append("numerator zeros at " + ", ".join(f"${n}$" for n in num_nums))
    if not parts:
        return re.sub(r"(?<!\$)(-?\d+)(?!\$)", r"$\1$", para)
    text_out = "; ".join(parts)
    return text_out[0].upper() + text_out[1:] + "."


def _rewrite_strictness(prose: str) -> str:
    """Turn Strictness notes into 13.18 prose + display solution set (no orphan period)."""
    s = prose.strip()
    # Pull a trailing "True solution: $...$ — …" into a clean display
    true_sol = ""
    m_true = re.search(
        r"(?i)(?:True solution|The true solution(?: set)?)\s*:\s*"
        r"(\$[^$]+\$)"
        r"(?:\s*,)?\s*(?:[—–]\s*|\.\s*)?(.*)$",
        s,
    )
    if m_true:
        sol_raw = m_true.group(1).strip()
        note = m_true.group(2).strip().rstrip(".")
        # Drop a leading "an open interval…" clause that is still part of the note
        note = re.sub(
            r"(?i)^an open interval on both ends\s*[—–]?\s*",
            "",
            note,
        ).strip(" ,—–")
        true_sol = D(sol_raw.strip("$"))
        if note:
            true_sol += "\n\n" + note[0].upper() + note[1:] + "."
        s = s[: m_true.start()].rstrip(" ,;")

    m = re.match(
        r"(?i)The inequality is strict\s*\(([^)]+)\)\s*,?\s*so\s+(.+?):\s*(.+?)\.\s*$",
        s,
    )
    if m:
        rel, action, sol = m.group(1).strip(), m.group(2).strip(), m.group(3).strip()
        rel_m = rel if rel.startswith("$") else f"${rel}$"
        body = (
            f"Because the inequality is strict ({rel_m}), {_lower_first(action)}:\n\n"
            f"{D(sol.strip('$'))}"
        )
        return body if not true_sol else body + "\n\nThe true solution set is\n\n" + true_sol

    m = re.match(r"(?i)The inequality is strict\s*\(([^)]+)\)\s*,?\s*so\s+(.+)$", s)
    if m:
        rel, rest = m.group(1).strip(), m.group(2).strip().rstrip(".")
        rel_m = rel if rel.startswith("$") else f"${rel}$"
        body = f"Because the inequality is strict ({rel_m}), {_lower_first(rest)}."
        if true_sol:
            return body + "\n\nThe true solution set is\n\n" + true_sol
        return body

    m = re.match(r"(?i)The inequality is strict\s*\(([^)]+)\)\s*,?\s*(.+)$", s)
    if m:
        rel, rest = m.group(1).strip(), m.group(2).strip().rstrip(".")
        rel_m = rel if rel.startswith("$") else f"${rel}$"
        m2 = re.match(r"^(.+?):\s*(\$.+\$|[^:]+)$", rest)
        if m2:
            action, sol = m2.group(1).strip(), m2.group(2).strip()
            body = (
                f"Because the inequality is strict ({rel_m}), {_lower_first(action)}:\n\n"
                f"{D(sol.strip('$'))}"
            )
        else:
            body = f"Because the inequality is strict ({rel_m}), {_lower_first(rest)}."
        if true_sol:
            return body + "\n\nThe true solution set is\n\n" + true_sol
        return body

    if true_sol:
        lead = s if s else "The true solution set is"
        if s:
            return s + "\n\nThe true solution set is\n\n" + true_sol
        return "The true solution set is\n\n" + true_sol
    if s:
        return s if s[0].isupper() else s[0].upper() + s[1:]
    return s


def _polish_math_style(text: str) -> str:
    """Unify bare signs/intervals into math and kill orphan punctuation lines."""
    # Repair corrupted \\approx (\\a → bell) from bad source escapes
    text = text.replace("\x07pprox", r"\approx")
    text = re.sub(r"(?<!\\)\\approx", r"\\approx", text)  # no-op safety

    def wrap_rel(m: re.Match[str]) -> str:
        inner = m.group(1).strip()
        return f"(${inner}$)"

    text = re.sub(
        r"(?<!\$)\(\s*([<>≤≥]|\\le|\\ge|\\leq|\\geq)\s*0\s*\)",
        wrap_rel,
        text,
    )
    # ": $interval$." → display math (period not orphaned after KaTeX)
    def to_disp(m: re.Match[str]) -> str:
        return f":\n\n{D(m.group(1))}"

    text = re.sub(r":\s*\$([^$]+)\$\s*\.(?=\s*(?:\n|$))", to_disp, text)
    text = re.sub(r"\n\.\s*(?=\n|$)", "\n", text)
    text = re.sub(r"(?m)^\.\s*$\n?", "", text)
    text = re.sub(r"(\$\$)\s*\.", r"\1", text)
    # Clean ", which…" crumbs left when a mixed eq+prose line was split
    text = re.sub(r"(\$\$)\n\n,\s*", r"\1\n\n", text)
    text = re.sub(
        r"(\$\$)\n\n([a-z])",
        lambda m: m.group(1) + "\n\n" + m.group(2).upper(),
        text,
    )
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def _convert_body(raw: str, *, subsection: str, statement: str) -> str:
    body = _OLD_HDR.sub("", raw.strip()).strip()
    body = _CLOSER.sub("", body).strip()

    chart_rows: list[tuple[str, str]] = []
    m = _SIGN_TABLE.search(body)
    if m:
        chart_rows = _parse_sign_rows(m.group(1))
        body = body[: m.start()] + "\n\n__SIGN__\n\n" + body[m.end() :]

    paras = re.split(r"\n\n+", body)
    out: list[str] = []
    i = 0
    while i < len(paras):
        p = paras[i].strip()
        if not p:
            i += 1
            continue

        if p == "__SIGN__":
            if chart_rows:
                # Tables only when the interval method is non-trivial (3+ open pieces).
                # Simpler charts stay as a short display line.
                if len(chart_rows) >= 3:
                    rows = ["| Interval | Sign |", "| --- | --- |"]
                    for iv, sg in chart_rows:
                        rows.append(f"| ${iv}$ | ${sg}$ |")
                    out.append(
                        "Reading the signs on the open intervals made by the critical points:\n\n"
                        + "\n".join(rows)
                    )
                else:
                    pieces = [rf"{iv}:\ {sg}" for iv, sg in chart_rows]
                    out.append(
                        "The signs on the open intervals are\n\n"
                        + D(r",\quad ".join(pieces))
                    )
            i += 1
            continue
        # Numerator / denominator zero notes
        nd = _num_den_block(p)
        if nd is not None:
            out.extend(nd)
            i += 1
            continue

        # Inline labeled beats: **Quick check:** … / **Interval from this part:** …
        inline = _BOLD_INLINE.match(p)
        if inline:
            raw_label = inline.group(1).strip().rstrip(":")
            rest = inline.group(2).strip()
            low = raw_label.lower()
            if low == "common trap":
                out.append(rest[0].upper() + rest[1:] if rest else rest)
                i += 1
                continue
            if low == "quick check":
                if rest and not rest.lower().startswith(("plug", "try", "a ", "at ")):
                    out.append("A quick check: " + _lower_first(rest))
                else:
                    out.append("A quick check: " + rest)
                i += 1
                continue
            lead = _lead_for(raw_label, subsection)
            # Treat the remainder as the first following paragraph
            fake = [rest] + paras[i + 1 :]
            displays, prose_after, j = _consume_math_after(fake, 0)
            if not displays and not prose_after:
                _emit_lead_then(lead, [], rest, out)
                i += 1
            else:
                _emit_lead_then(lead, displays, prose_after, out)
                # j consumed from fake; first slot was `rest` → advance i by j
                i = i + j
            continue

        bm = _BOLD_ONLY.match(p)
        if bm:
            raw_label = bm.group(1).strip().rstrip(":")
            lead = _lead_for(raw_label, subsection)
            # Section headers: emit the sentence only; next paras convert normally
            if raw_label in _HEADER_ONLY:
                if lead:
                    out.append(lead)
                i += 1
                continue
            if raw_label == "Strictness":
                displays, prose_after, j = _consume_math_after(paras, i + 1)
                out.append(_rewrite_strictness(prose_after))
                i = j
                continue
            displays, prose_after, j = _consume_math_after(paras, i + 1)
            _emit_lead_then(lead, displays, prose_after, out)
            i = j
            continue

        # Plain paragraph: promote pure equation lines
        # Bare root lists after "critical points" → display
        if re.match(
            r"^-?\d+(\.\d+)?(?:\s+and\s+-?\d+(\.\d+)?)+\.?$",
            p.replace(",", ""),
        ) or re.match(r"^-?\d+\s+and\s+-?\d+\.?$", p):
            nums = re.findall(r"-?\d+", p)
            if 1 <= len(nums) <= 4:
                out.append(D(r",\quad ".join(f"x = {n}" for n in nums)))
                i += 1
                continue
        # "-4 (denominator zero, excluded), -1 and 2 (numerator zero)."
        if re.search(r"(?i)numerator zero|denominator zero", p) and re.match(
            r"^-?\d", p.strip()
        ):
            out.append(_rewrite_critical_list(p))
            i += 1
            continue
        if _is_equation_line(p):
            out.append(_eq_display(p))
            i += 1
            continue
        if "\n" in p:
            lines = [ln.strip() for ln in p.splitlines() if ln.strip()]
            buf: list[str] = []
            rebuilt: list[str] = []
            for ln in lines:
                if _is_equation_line(ln):
                    if buf:
                        rebuilt.append(" ".join(buf))
                        buf = []
                    rebuilt.append(_eq_display(ln))
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
    text = re.sub(
        r"(?i)The correct (?:answer|solution(?: set)?) is\s+True solution(?: set)?:\s*",
        "The correct solution set is ",
        text,
    )
    text = re.sub(r"(?i)\bTrue solution set:\s*", "The true solution set is ", text)
    text = re.sub(r"(?i)\bTrue solution:\s*", "The true solution is ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"  +", " ", text)
    text = re.sub(r"\$\$\s*\.", "$$", text)
    # Ensure a colon before a display that follows unfinished prose (not after $$ / .)
    chunks = text.split("\n\n")
    fixed: list[str] = []
    for idx, chunk in enumerate(chunks):
        if (
            idx + 1 < len(chunks)
            and chunks[idx + 1].startswith("$$")
            and not chunk.startswith("$$")
            and not chunk.rstrip().endswith((":", ".", "!", "?", ",", ";"))
            and not re.match(r"^\([^)]*\)$", chunk.strip())
        ):
            fixed.append(chunk.rstrip() + ":")
        else:
            fixed.append(chunk)
    text = "\n\n".join(fixed)

    ineq = _extract_inequality(statement)
    starts_ok = text.startswith(
        ("A rational", "Factor the", "A compound", "Translate")
    )
    if not starts_ok:
        opener = _opener(
            subsection,
            ineq
            if ineq and ineq.replace(" ", "")[:20] not in text.replace(" ", "")
            else None,
        )
        text = opener + "\n\n" + text
    elif ineq and ineq.replace(" ", "")[:18] not in text.replace(" ", ""):
        text = _opener(subsection, ineq) + "\n\n" + text

    return text.strip()


def _finish(body: str, verdict: str, style: str) -> str:
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
    if style == "against":
        if verdict == "False":
            return f"{body}\n\nThe claim’s comparison is incorrect, so the statement is False."
        return f"{body}\n\nComparing this value with the claim shows the statement is True."
    last = body.split("\n")[-1]
    if (
        body.rstrip().endswith("$$")
        or body.rstrip().endswith("|")
        or "| Interval | Sign |" in body[-200:]
        or re.search(r"\bso\b", last, re.I)
    ):
        return f"{body}\n\nSo the statement is {verdict}."
    return f"{body.rstrip('.')}, so the statement is {verdict}."


def _flatten_short(body: str) -> str:
    """13.18 B: one or two sentences of prose, no display algebra."""
    text = re.sub(r"\$\$.*?\$\$", " ", body, flags=re.S)
    # Drop markdown sign tables from short items
    text = re.sub(
        r"Reading the signs on the open intervals[^\n]*\n+(?:\|[^\n]+\n+)+",
        "",
        text,
        flags=re.I,
    )
    text = re.sub(r"\| Interval \| Sign \|[\s\S]*?(?=\n\n|\Z)", " ", text)
    text = re.sub(
        r"(?i)^A rational inequality is decided by the zeros of the numerator and the "
        r"excluded zeros of the denominator\.\s*(?:Start from\s*)?",
        "",
        text,
    )
    text = re.sub(
        r"(?i)^Factor the quadratic, mark the roots, and test the sign on each interval\.\s*"
        r"(?:The claim starts from\s*)?",
        "",
        text,
    )
    text = re.sub(
        r"(?i)^A compound inequality is two conditions that must hold together\.\s*"
        r"(?:Solve each piece(?: separately)?, then intersect(?: the solution sets)?\.\s*)?"
        r"(?:The claim is\s*)?",
        "",
        text,
    )
    text = re.sub(
        r"(?i)^Split the compound inequality into two separate parts\.\s*",
        "",
        text,
    )
    text = re.sub(
        r"(?i)^Translate the worded condition into an inequality.*?coefficient\.\s*",
        "",
        text,
    )
    text = re.sub(
        r"(?i)^Translate the worded condition into an inequality.*?negative\)\.\s*"
        r"(?:The algebra is\s*)?",
        "",
        text,
    )
    text = re.sub(r"(?i)The critical points are the (?:zeros|roots)[^.]*\.\s*", "", text)
    text = re.sub(r"(?i)The (?:numerator|denominator) vanishes[^.]*\.\s*", "", text)
    text = re.sub(
        r"(?i)(?:The sign on each open interval is|Reading the sign chart against the inequality symbol|"
        r"Factoring first|Left part|Right part|First inequality|Second inequality|"
        r"Putting the pieces together|Intersecting the two pieces|So this part gives|"
        r"The interval from this part is|By the quadratic formula|Comparing with the printed claim|"
        r"The other branch also belongs|The correct (?:answer|solution set) is|"
        r"The solution set is)\s*:?\s*",
        "",
        text,
    )
    text = re.sub(r"\s+", " ", text).strip(" :")
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Za-z“\"])", text)
    parts = [p.strip() for p in parts if p.strip()]
    # Drop tiny orphan fragments left after label stripping
    parts = [
        p
        for p in parts
        if len(p) > 35
        or re.search(
            r"(?i)claim|check|match|solution|include|exclude|belong|wrong|confirm",
            p,
        )
    ]
    if not parts:
        return text.strip() or "The printed claim matches the solved inequality."
    keep: list[str] = []
    for p in parts:
        if re.search(
            r"(?i)claim|match|solution|include|exclude|belong|contradict|confirm|"
            r"trap|check|wrong|correct|stated|interval",
            p,
        ):
            keep.append(p)
    if not keep:
        keep = parts[-2:] if len(parts) > 1 else parts[:1]
    elif len(keep) == 1:
        for p in reversed(parts):
            if p not in keep:
                keep.insert(0, p)
                break
    keep = keep[:2]
    out = " ".join(keep)
    if out and out[0].islower():
        out = out[0].upper() + out[1:]
    return out


def _assign_styles(bodies: list[str]) -> list[str]:
    n = len(bodies)
    lengths = [len(b) for b in bodies]
    # Prefer items that already look like quick checks for short
    short_i = min(
        range(n),
        key=lambda i: (
            0 if re.search(r"(?i)quick check", bodies[i]) else 1,
            lengths[i],
            i,
        ),
    )
    long_i = max(
        (i for i in range(n) if i != short_i),
        key=lambda i: (lengths[i], i),
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


def rewrite_one(
    raw: str,
    *,
    letter: str,
    truth: bool,
    subsection: str,
    statement: str,
    style: str,
) -> str:
    verdict = "True" if truth else "False"
    body = _convert_body(raw, subsection=subsection, statement=statement)
    if style == "short":
        short = _flatten_short(body)
        # Reject hollow shorts (empty leads / table crumbs / dropped key numbers)
        hollow = bool(re.search(r"(?i)(condition is:|inequality is:)\s*(The |$)", short))
        hollow = hollow or bool(re.search(r"\|\s*\$", short))  # table fragment
        hollow = hollow or bool(
            re.search(r"(?i)true solution is\s+A quick check", short)
        )
        hollow = hollow or bool(
            re.search(r"(?i)^(Or |And )\$", short.strip())
        )
        stmt_nums = set(re.findall(r"-?\d+(?:\.\d+)?", statement))
        # Keep distinctive values; drop lone 0/1 which appear everywhere
        stmt_nums = {n for n in stmt_nums if n not in {"0", "1", "-1"}}
        short_nums = set(re.findall(r"-?\d+(?:\.\d+)?", short))
        if stmt_nums and len(stmt_nums - short_nums) >= 2 and len(short) < 450:
            hollow = True
        # Fragmented leftovers from flatten
        hollow = hollow or bool(re.search(r"(?i)^(Or |And )\b", short.strip()))
        hollow = hollow or (len(short) < 220 and len(body) > 450)
        body = body if hollow else short
        style = "medium" if hollow else style
    body = _finish(body, verdict, style)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()

    def fix(m: re.Match[str]) -> str:
        inner = m.group(1).replace("$", "")
        return f"$${inner}$$"

    body = re.sub(r"\$\$(.+?)\$\$", fix, body, flags=re.S)
    # Strip any leftover bold-only section labels
    body = re.sub(r"^\*\*[A-Za-z][^*]{0,60}\*\*\s*$", "", body, flags=re.M)
    body = _polish_math_style(body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return f"**{letter}.** → {verdict}\n\n{body}"


def audit(tasks: list[dict]) -> list[str]:
    errs = []
    for t in tasks:
        for i, (truth, expl) in enumerate(
            zip(t["answer_key"], t["tactical_explanations"])
        ):
            letter = LETTERS[i]
            v = "True" if truth else "False"
            if not expl.startswith(f"**{letter}.** → {v}"):
                errs.append(f"{t['case_id']} {letter}: header")
            if not re.search(rf"the statement is {v}\.?\s*$", expl, re.I):
                errs.append(f"{t['case_id']} {letter}: closer")
            for line in expl.splitlines():
                if re.match(
                    r"^\*\*(Critical|Solution|Quick|Common|Factor|Sign chart|"
                    r"Result|Interval|Left|Right|Quadratic)",
                    line,
                ):
                    errs.append(f"{t['case_id']} {letter}: bold label {line[:50]}")
                    break
            if re.search(
                r"(?i)because the inequality is strict,\s*the inequality is strict",
                expl,
            ):
                errs.append(f"{t['case_id']} {letter}: dup strict")
            if re.search(r"(?m)^\.\s*$", expl) or re.search(r"\n\.\s*(\n|$)", expl):
                errs.append(f"{t['case_id']} {letter}: orphan period")
            # Bare (> 0) outside math
            if re.search(r"(?<!\$)\(\s*[<>≤≥]\s*0\s*\)", expl):
                errs.append(f"{t['case_id']} {letter}: bare relation")
            # Glued sentences without punctuation (heuristic)
            if re.search(
                r"(zeros|symbol|claim|formula|pieces|branches) [A-Z]",
                expl,
            ) and not re.search(
                r"(zeros|symbol|claim|formula|pieces|branches) (?:A|B|C|D|E)\b",
                expl,
            ):
                errs.append(f"{t['case_id']} {letter}: possible glue")
    return errs


def verify_statement_match(tasks: list[dict]) -> list[str]:
    """Flag explanations that drop key numbers from the matching statement."""
    errs = []
    for t in tasks:
        for i, (stmt, expl) in enumerate(
            zip(t["statements"], t["tactical_explanations"])
        ):
            letter = LETTERS[i]
            # Numbers from statement (skip lonely 0/1 noise somewhat)
            nums = set(re.findall(r"-?\d+(?:\.\d+)?", stmt.replace("{", " ").replace("}", " ")))
            # Drop tiny structural noise
            nums = {n for n in nums if n not in {"0", "1", "-1"} or n in stmt}
            # Keep distinctive numbers (>=2 digits or appears in inequality context)
            key = []
            for n in nums:
                if len(n.lstrip("-").replace(".", "")) >= 2:
                    key.append(n)
                elif n in ("2", "3", "4", "5", "6", "7", "8", "9", "-2", "-3", "-4", "-5", "-6", "-7"):
                    key.append(n)
            missing = [n for n in key if n not in expl and n.replace("-", r"\-") not in expl]
            # Also try without sign
            missing = [
                n
                for n in missing
                if n.lstrip("-") not in expl and n not in expl.replace(" ", "")
            ]
            if len(missing) >= 3:
                errs.append(
                    f"{t['case_id']} {letter}: missing nums {missing[:6]} from statement"
                )
    return errs


def main() -> None:
    data = _hybrid_source()
    tasks = data["tasks"]
    for t in tasks:
        n = len(t["statements"])
        stripped = [_OLD_HDR.sub("", e).strip() for e in t["tactical_explanations"]]
        styles = _assign_styles(stripped)
        # Rebuild from clean source each time
        t["tactical_explanations"] = [
            rewrite_one(
                t["tactical_explanations"][i],
                letter=LETTERS[i],
                truth=bool(t["answer_key"][i]),
                subsection=t["subsection"],
                statement=t["statements"][i],
                style=styles[i],
            )
            for i in range(n)
        ]

    errs = audit(tasks)
    match_errs = verify_statement_match(tasks)
    DST.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n")
    print(f"wrote explanations for {len(tasks)} tasks → {DST}")
    if errs:
        print(f"AUDIT ({len(errs)}):")
        for e in errs[:40]:
            print(" -", e)
    else:
        print("audit clean")
    if match_errs:
        print(f"MATCH WARNINGS ({len(match_errs)}):")
        for e in match_errs[:25]:
            print(" -", e)
    else:
        print("statement match clean")
    n_tables = sum(
        1
        for t in tasks
        for e in t["tactical_explanations"]
        if "| Interval | Sign |" in e
    )
    print(f"sign-chart tables: {n_tables}")
    lens = sorted(len(e) for t in tasks for e in t["tactical_explanations"])
    n_disp = sum(e.count("$$") // 2 for t in tasks for e in t["tactical_explanations"])
    print(
        f"len min/med/mean/max: {lens[0]} / {lens[len(lens)//2]} / "
        f"{sum(lens)//len(lens)} / {lens[-1]}"
    )
    print(f"display blocks: {n_disp}")


if __name__ == "__main__":
    main()
