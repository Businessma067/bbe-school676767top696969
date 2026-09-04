#!/usr/bin/env python3
"""Scrub Ch7/Ch9 explanation boilerplate, clarify garbled claims, rebuild clearer SVGs.

Does NOT invent new stems — only cleans wording / explanations / figures in place.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch9_svg import svg_polynomial  # noqa: E402

ROOT = Path("/workspace/src/data")
FILES = [
    ROOT / "math-ch7-mixed-exam.json",
    ROOT / "math-ch9-mixed-exam.json",
    ROOT / "math-ch7-linear-quadratic.json",
    ROOT / "math-ch9-polynomials.json",
]
LETTERS = "ABCDE"

# Boilerplate paragraphs / display "math" that must never appear.
KILL_PROSE = [
    r"Statement [A-E] rewards a full read of the stem:[^\n.]*\.?",
    r"The claim to test is:[^\n]*",
    r"Work every intermediate expansion[^\n]*",
    r"Keep the intermediate (?:number|expansion)[^\n]*",
    r"Trace the axis formula[^\n]*",
    r"Cross-check Vieta sums[^\n]*",
    r"Reject shortcuts that add degrees[^\n]*",
    r"Recheck each algebraic intermediate[^\n]*",
    r"Read the stem once more[^\n]*",
    r"Retargeted (?:false trap|true claim)\.?",
    r"Align the claim with the relation forced by the stem(?: coefficients)?\.?",
    r"The corrected claim matches the algebra\.?",
    r"Recompute carefully and compare with the named trap\.?",
    r"This settles the letter[^\n]*",
]

KILL_DISPLAY_INNER = re.compile(
    r"\\text\{(?:"
    r"read the stem fully before deciding|"
    r"translate words into algebra|"
    r"check multiplicity versus distinct roots|"
    r"end behaviour follows the leading term|"
    r"derivatives vanish at multiple roots|"
    r"model checks|"
    r"trap check|"
    r"trap|"
    r"actual|"
    r"check|"
    r"match|"
    r"stem|"
    r"algebra|"
    r"compare|"
    r"verdict|"
    r"model"
    r")[^}]*\}",
    re.I,
)

RIDER_RE = re.compile(
    r"\s*(?:for every real leading coefficient|"
    r"\(revised trap\)|"
    r"as forced by the coefficients|"
    r"— and the same holds after replacing the leading coefficient by its opposite|"
    r"for every real shift of the graph|"
    r"even when the constant term is deleted)"
    r"\.?\s*$",
    re.I,
)


def scrub_expl(letter: str, truth: bool, expl: str, stmt: str) -> str:
    text = expl.strip()
    # Drop header; rebuild later
    text = re.sub(r"^\*\*[A-E]\.\*\* → (?:True|False)\s*", "", text).strip()

    # Remove killed prose lines/sentences
    for pat in KILL_PROSE:
        text = re.sub(pat, "", text, flags=re.I)

    # Split blocks
    parts = [p.strip() for p in re.split(r"\n\n+", text) if p.strip()]
    kept: list[str] = []
    math_kept: list[str] = []
    for p in parts:
        # Drop display blocks that are only boilerplate \text{...}
        if p.startswith("$$") and p.endswith("$$"):
            inner = p[2:-2].strip()
            if KILL_DISPLAY_INNER.fullmatch(inner) or KILL_DISPLAY_INNER.search(inner) and len(inner) < 80:
                # If entire inner is junk, drop; if mixed, strip junk fragments
                cleaned = KILL_DISPLAY_INNER.sub("", inner).strip()
                if not cleaned or cleaned in {",", ";", "."}:
                    continue
                inner = cleaned
                p = f"$${inner}$$"
            # Also drop empty / near-empty
            if re.fullmatch(r"\\text\{[^}]*\}", inner.strip()):
                continue
            math_kept.append(p)
            kept.append(p)
            continue
        # Drop prose that still looks like filler
        low = p.lower()
        if any(
            s in low
            for s in (
                "rewards a full read",
                "translate the words into algebra",
                "translate words into algebra",
                "work every intermediate",
                "keep the intermediate",
                "retargeted",
                "model checks",
                "trap check",
            )
        ):
            continue
        # Drop "Graph stem: ; combine..." garbage leftover from stripped $...$
        if re.match(r"Graph stem:\s*;", p) or re.match(r"Graph stem:\s*$", p):
            continue
        if re.match(r"^[A-Za-z ]+stem:\s*;", p):
            continue
        kept.append(p)

    # Ensure closing verdict
    body = "\n\n".join(kept).strip()
    body = re.sub(r",?\s*so the statement is (?:True|False)\.?", "", body, flags=re.I).strip()
    if not body:
        # Minimal tutor-style fallback from the claim itself (no new filler slogans)
        body = (
            f"Test the claim against the stem algebra.\n\n"
            f"The claim says: {stmt}"
        )
    # Prefer keeping at least one real display if we had any
    if math_kept and body.count("$$") < 2:
        for m in math_kept[:2]:
            if m not in body:
                body += "\n\n" + m

    close = (
        f"The algebra matches the claim, so the statement is {'True' if truth else 'False'}."
        if truth
        else f"The algebra contradicts the claim, so the statement is False."
    )
    # More natural close when we already have a bridge sentence
    if not re.search(r"so the statement is", body, re.I):
        body = body.rstrip(".") + ".\n\n" + close

    out = f"**{letter}.** → {'True' if truth else 'False'}\n\n{body}"
    # Normalize $$ to single-line
    def norm(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        if not inner or KILL_DISPLAY_INNER.fullmatch(inner):
            return ""
        return f"$${inner}$$"

    out = re.sub(r"\$\$([\s\S]*?)\$\$", norm, out)
    out = re.sub(r"\n{3,}", "\n\n", out).strip()
    # Remove empty leftovers
    out = re.sub(r"\n\n(?=\n)", "\n", out)
    return out


def scrub_statement(s: str) -> str:
    s = RIDER_RE.sub("", s).strip()
    s = re.sub(r"\s+\[([A-E])\]\.$", ".", s)
    s = re.sub(r"\s{2,}", " ", s).strip()
    if not s.endswith(".") and not s.endswith("$"):
        # keep as-is if ends mid-math
        if not s.endswith("}"):
            pass
    return s


def scrub_overview(ov: str) -> str:
    if not ov:
        return ov
    # Fix "Graph stem: $...$; combine..." into plain readable overview
    ov = re.sub(
        r"^Graph stem:\s*",
        "",
        ov,
    )
    ov = re.sub(r"\s*;\s*combine ends, multiplicity, and \$p'\$ at marked points\.?", ".", ov)
    ov = re.sub(r"\s*;\s*combine ends, multiplicity, and\s+\.", ".", ov)
    ov = re.sub(r"Graph stem:\s*;\s*", "", ov)
    return ov.strip()


def scrub_context(ctx: str) -> str:
    if not ctx:
        return ctx
    # Clarify vague graph stems without inventing new task content
    replacements = [
        (
            r"Combine end behaviour, multiplicity, and the marked \$y\$-intercept\.",
            "Read end behaviour from the leading term, check whether marked zeros cross or touch, and use the marked $y$-intercept.",
        ),
        (
            r"Use the figure plus algebra for slope and intercept compounds\.",
            "Use the figure together with the algebra: slopes at marked points and the intercept.",
        ),
    ]
    for a, b in replacements:
        ctx = re.sub(a, b, ctx)
    return ctx


def coeffs_from_overview(ov: str) -> list[float] | None:
    """Best-effort parse of a monic/simple poly from overview latex."""
    if not ov:
        return None
    # Look for p(x)=... or g(x)=... expanded-ish
    m = re.search(r"(?:p|g|f)\(x\)\s*=\s*([^;]+)", ov)
    if not m:
        return None
    expr = m.group(1)
    # Too hard to parse full sympy from latex here; return None and skip
    return None


def rebuild_figure_from_task(task: dict) -> str | None:
    """Rebuild SVG if we can recover integer root marks from statements/overview."""
    if not task.get("figure"):
        return None
    ov = task.get("solution_overview") or ""
    ctx = task.get("context") or ""
    # Try to find roots listed as crossings at a, b, c
    roots = []
    for m in re.finditer(r"cross(?:es|ings)?(?: the (?:axis|x-axis))? at ([^.;]+)", ctx + " " + ov, re.I):
        chunk = m.group(1)
        nums = re.findall(r"-?\d+", chunk)
        roots.extend(int(n) for n in nums)
    if not roots:
        # marked abscissas / zeros -1, 0, 4 style
        m = re.search(r"zeros?\s+(-?\d+)[,\s]+(-?\d+)[,\s]+(?:and\s+)?(-?\d+)", ctx + " " + ov, re.I)
        if m:
            roots = [int(m.group(i)) for i in range(1, 4)]
    # Parse expanded poly with sympy if present in overview as ascii-ish latex
    try:
        from sympy import Poly, Symbol, expand, sympify
        from sympy.parsing.latex import parse_latex

        x = Symbol("x")
        m = re.search(r"(?:p|g)\(x\)\s*=\s*(\$?[^;$]+)", ov)
        expr = None
        if m:
            raw = m.group(1).strip().strip("$")
            raw = raw.replace("\\left", "").replace("\\right", "")
            raw = re.sub(r"\\,", "", raw)
            try:
                expr = parse_latex(raw)
            except Exception:
                # Fallback: unicode-ish
                try:
                    ascii_expr = (
                        raw.replace("^{", "**")
                        .replace("}", "")
                        .replace("{", "")
                        .replace("\\", "")
                        .replace(" ", "")
                    )
                    # not reliable
                    expr = None
                except Exception:
                    expr = None
        if expr is None:
            return None
        p = Poly(expand(expr), x)
        coeffs = [float(c) for c in p.all_coeffs()]
        if roots:
            xmin, xmax = min(roots) - 2.0, max(roots) + 2.0
        else:
            xmin, xmax = -4.0, 5.0
        return svg_polynomial(
            coeffs,
            xmin=xmin,
            xmax=xmax,
            title=task.get("title", "graph")[:48],
            auto_mark_roots=True,
            auto_mark_turns=True,
            width=720,
            height=420,
        )
    except Exception:
        return None


def process(path: Path) -> None:
    raw = json.loads(path.read_text())
    wrapper = isinstance(raw, dict) and "tasks" in raw
    tasks = raw["tasks"] if wrapper else raw
    changed = 0
    for t in tasks:
        # statements
        new_stmts = [scrub_statement(s) for s in t["statements"]]
        # ensure unique
        seen = set()
        for i, s in enumerate(new_stmts):
            if s in seen:
                new_stmts[i] = s.rstrip(".") + "."
            seen.add(new_stmts[i])
        if new_stmts != t["statements"]:
            changed += 1
        t["statements"] = new_stmts

        if "context" in t and t["context"]:
            nc = scrub_context(t["context"])
            if nc != t["context"]:
                changed += 1
            t["context"] = nc

        if t.get("solution_overview"):
            no = scrub_overview(t["solution_overview"])
            if no != t["solution_overview"]:
                changed += 1
            t["solution_overview"] = no

        new_expls = []
        for i, e in enumerate(t["tactical_explanations"]):
            ne = scrub_expl(LETTERS[i], bool(t["answer_key"][i]), e, t["statements"][i])
            if ne != e:
                changed += 1
            new_expls.append(ne)
        t["tactical_explanations"] = new_expls

        # Rebuild figure when possible (mixed exams)
        if t.get("figure") and path.name.endswith("mixed-exam.json"):
            fig = rebuild_figure_from_task(t)
            if fig:
                t["figure"] = fig
                changed += 1

    payload = {"tasks": tasks} if wrapper else tasks
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    print(f"{path.name}: scrubbed (~{changed} field touches), n={len(tasks)}")


def main() -> None:
    for path in FILES:
        if path.exists():
            process(path)


if __name__ == "__main__":
    main()
