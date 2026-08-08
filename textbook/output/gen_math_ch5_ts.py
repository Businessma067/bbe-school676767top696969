# -*- coding: utf-8 -*-
"""Generate TypeScript math chapter-5 data from parsed PDF tasks.

Explanations are expanded into a long, textbook-style writeup tailored to each
case (intro, answer key as plain lines, detailed A–E solutions with KaTeX).
"""
from __future__ import annotations

import json
import math
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "linear_eq_60_raw.json"
OUT = ROOT / "src" / "data" / "math-ch5-linear-equations.ts"

tasks = json.loads(RAW.read_text(encoding="utf-8"))


def esc(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace("`", "\\`")
        .replace("${", "\\${")
    )


def clean_text(s: str) -> str:
    s = s.replace("\u2212", "-").replace("\u00d7", "\\times ").replace("\u2192", "\\to ")
    s = s.replace("\u2014", "—").replace("\u2013", "–").replace("\u00b7", "\\cdot ")
    s = re.sub(r"[ \t]+\n", "\n", s)
    s = re.sub(r"[ \t]{2,}", " ", s)
    return s.strip()


def flatten(s: str) -> str:
    return re.sub(r"\s+", " ", clean_text(s)).strip()


def latex_eq(eq: str) -> str:
    """Normalize a single algebraic equation for KaTeX."""
    eq = clean_text(eq)
    eq = eq.replace("−", "-")
    # Drop trailing gloss like "(Invoice #101)" once the '=' part is clean.
    if " (" in eq and "=" in eq.split(" (")[0]:
        left = eq.split(" (")[0].strip()
        if re.search(r"[a-zA-Z0-9)].*=", left) or re.search(r"[a-zA-Z].*=", left):
            eq = left
    # Escape bare underscores if any
    return eq.strip()


def extract_equations(model: str) -> list[str]:
    """Pull algebraic equations from the model text (may include prose)."""
    raw = clean_text(model)
    eqs: list[str] = []
    # Split rearrangements: "x - 50 = y + 50, which rearranges to x - y = 100"
    pieces = re.split(r",\s*which rearranges to\s+", raw, flags=re.I)
    for piece in pieces:
        for ln in piece.split("\n"):
            ln = ln.strip()
            if not ln:
                continue
            # Sometimes two equations joined by "and"
            for part in re.split(r"\band\b", ln):
                part = part.strip().rstrip(".")
                if "=" not in part:
                    continue
                # Keep only math-looking left side
                candidate = latex_eq(part)
                if re.search(r"[a-zA-Z]", candidate.split("=")[0]):
                    eqs.append(candidate)
    # Deduplicate while preserving order
    out: list[str] = []
    for e in eqs:
        if e not in out:
            out.append(e)
    return out


def display_system(eqs: list[str]) -> str:
    if len(eqs) >= 2:
        body = " \\\\\n".join(eqs[:2])
        return f"$$\n\\begin{{cases}}\n{body}\n\\end{{cases}}\n$$"
    if eqs:
        return f"$$\n{eqs[0]}\n$$"
    return ""


def mathify_inline(text: str) -> str:
    """Wrap equation-looking fragments and simple arithmetic in $...$."""
    text = clean_text(text)
    if "$$" in text:
        return text

    def wrap_eq(m: re.Match) -> str:
        eq = m.group(0).strip()
        if eq.startswith("$"):
            return eq
        return f"${eq}$"

    # Arithmetic like 360 + 30 = 390 or 78 × 6.50 = 507 (already × -> \times)
    text = re.sub(
        r"(?<![A-Za-z0-9$])("
        r"[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*(?:[+\-]|\\times|\\cdot)\s*[+\-]?\d+(?:\.\d+)?)+"
        r"\s*=\s*"
        r"[+\-]?\d+(?:\.\d+)?"
        r")(?![A-Za-z0-9$])",
        wrap_eq,
        text,
    )

    # Algebraic equations: x + y = 620, 2x = 720, -135y = -243.00
    text = re.sub(
        r"(?<![A-Za-z0-9$])("
        r"[+\-]?(?:\d*\.?\d*)?[a-zA-Z]"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r"\s*=\s*"
        r"[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r")(?![A-Za-z0-9$])",
        wrap_eq,
        text,
    )

    text = re.sub(r"\bso ([xyabcfrspn]) = ([0-9.+-]+)", r"so $\1 = \2$", text)
    text = re.sub(r"\bgiving ([xyabcfrspn]) = ([0-9.+-]+)", r"giving $\1 = \2$", text)
    text = re.sub(r"\bthen ([xyabcfrspn]) = ([0-9.+-]+)", r"then $\1 = \2$", text)
    text = re.sub(r"\bFind ([xyabcfrspn]) = ([0-9.+-]+)", r"Find $\1 = \2$", text)
    return text


def split_solution(sol: str) -> tuple[str, str]:
    sol = clean_text(sol)
    final = ""
    m = re.search(r"Final Answer:\s*(.*)", sol, re.S)
    if m:
        final = flatten(m.group(1))
        sol = sol[: m.start()].strip()
    return sol, final


def expand_solution_steps(sol: str) -> str:
    """Turn the PDF solution paragraph into clearer multi-part prose with display math."""
    sol = clean_text(sol)
    # Break into sentences without destroying decimals
    sentences = re.split(r"(?<=[.!?])\s+(?=[A-Z(\"\\$])", sol)
    sentences = [s.strip() for s in sentences if s.strip()]
    if not sentences:
        return mathify_inline(sol)

    parts: list[str] = []
    parts.append(
        "We now solve the system carefully, writing every algebra step so the "
        "unknowns can be reused when we judge the five statements."
    )
    parts.append("")
    parts.append("**Solve the system**")
    parts.append("")
    for i, sent in enumerate(sentences, start=1):
        # Prefer display math when a sentence is mostly one equation
        stripped = sent.rstrip(".")
        eqs_here = extract_equations(stripped) if "=" in stripped and len(stripped) < 80 else []
        if len(eqs_here) == 1 and re.fullmatch(r"[^=]+=[^=]+", stripped.replace(" ", "")) is None:
            # Still write as prose with inline math
            parts.append(f"{mathify_inline(sent)}")
        else:
            # Pull clearly isolated equations onto their own display lines
            text = mathify_inline(sent)
            # Promote patterns like: "Adding ... 2x = 720, so x = 360"
            text = re.sub(
                r"\$([^$]+)\$",
                lambda m: f"\n$$\n{m.group(1)}\n$$\n" if len(m.group(1)) > 18 else f"${m.group(1)}$",
                text,
            )
            parts.append(text)
        parts.append("")
    return "\n".join(parts).strip()


def skill_blurb(t: dict) -> str:
    narrative = flatten(t["narrative"])
    general = flatten(t.get("general") or "")
    given = flatten(t.get("given") or "")
    title = clean_text(t["title"])

    intro = (
        f"**{title}.** {narrative} "
        f"The skill being tested is translating this word data into a system of two "
        f"linear equations in two unknowns, solving that system, and then reusing the "
        f"solution to decide whether each of the five statements is true or false."
    )
    if given:
        intro += f" {given}"
    if general:
        # Keep the PDF's pedagogical tip but phrased as caution notes.
        intro += (
            " Watch especially for the traps highlighted for this case: "
            + general
        )
    return mathify_inline(intro)


def answer_key_block(t: dict) -> str:
    lines = ["**Answer key**", ""]
    for i, ans in enumerate(t["answer_key"]):
        letter = "ABCDE"[i]
        label = "correct" if ans else "false"
        lines.append(f"{letter}: {label}")
    return "\n".join(lines)


def key_concepts(t: dict, eqs: list[str]) -> str:
    model = " and ".join(f"${latex_eq(e)}$" for e in eqs[:2]) if eqs else "two linear equations"
    return "\n".join(
        [
            "**Key ideas for this case**",
            "",
            f"- System to solve: {model}.",
            "- Substitution: isolate one unknown in one equation, insert into the other.",
            "- Elimination: add or subtract equations (after scaling) to cancel one unknown.",
            "- Always verify by substituting the solved values back into both original equations.",
            "- Judge each statement against the *derived* values, not against a guess or a partial model.",
        ]
    )


def build_overview(t: dict) -> str:
    eqs = extract_equations(t["model"])
    model_tex = display_system(eqs) or mathify_inline(t["model"])
    sol, final = split_solution(t["solution"])
    steps = expand_solution_steps(sol)

    parts = [
        skill_blurb(t),
        "",
        answer_key_block(t),
        "",
        "**Detailed solution — setting up and solving the system**",
        "",
        "Part 1: Write the mathematical model.",
        "",
        "Translate each quantitative sentence from the stem into an equation. "
        "Every quantity named in the story should appear somehow — totals, differences, "
        "unit prices, transfers, capacities, and so on.",
        "",
        model_tex,
        "",
        "Part 2: Solve for the unknowns.",
        "",
        steps,
    ]
    if final:
        parts += [
            "",
            f"**Final answer (values used throughout):** {mathify_inline(final)}",
            "",
            "Verify by substituting these values back into both original equations before "
            "moving on to the five statements.",
        ]
    parts += ["", key_concepts(t, eqs)]
    return "\n".join(parts).strip()


def build_statement_explanation(t: dict, i: int) -> str:
    letter = "ABCDE"[i]
    correct = bool(t["answer_key"][i])
    verdict = "correct" if correct else "false"
    stmt = clean_text(t["statements"][i])
    raw = flatten(t["explanations"][i])
    sol, final = split_solution(t["solution"])
    eqs = extract_equations(t["model"])

    chunks: list[str] = []
    chunks.append(f"**{letter})** {stmt} *({verdict})*")
    chunks.append("")

    if i == 0:
        # Statement A often needs the full solve path contextualized to the claim.
        chunks.append(
            "To judge this claim we usually need the actual solved values of the unknowns "
            "(and sometimes a short extra calculation that uses those values). "
            "The system was set up and solved above; here we apply that solution to the claim."
        )
        chunks.append("")
        if eqs:
            chunks.append("Recall the model used:")
            chunks.append("")
            chunks.append(display_system(eqs))
            chunks.append("")
        if final:
            chunks.append(f"From the solution we already have: {mathify_inline(final)}.")
            chunks.append("")

    # Core PDF explanation, expanded into teaching prose
    if correct:
        chunks.append(
            f"Why the statement is correct. {mathify_inline(raw)}"
        )
        chunks.append("")
        chunks.append(
            "Check carefully against the derived numbers rather than against an estimate. "
            "If the claim equals what the algebra produces (or follows by a short, exact "
            "recomputation from those values), the statement is true."
        )
    else:
        chunks.append(
            f"Why the statement is false. {mathify_inline(raw)}"
        )
        chunks.append("")
        chunks.append(
            "The flaw is usually one of: using only part of the data when writing an equation, "
            "confusing a transfer/difference with the current gap, swapping which quantity is "
            "which, or comparing to a threshold without computing the exact value. "
            "Compare the claim with the correct solution and see where it diverges."
        )

    if final:
        chunks.append("")
        if correct:
            chunks.append(f"This is consistent with: {mathify_inline(final)}.")
        else:
            chunks.append(f"Compare with the correct values: {mathify_inline(final)}.")

    # Context-specific tip from the case's general note, only once near the end of E
    if i == 4:
        gen = flatten(t.get("general") or "")
        if gen:
            chunks.append("")
            chunks.append(f"**What this case particularly trains:** {mathify_inline(gen)}")

    return "\n".join(chunks).strip()


def format_tableish_narrative(narrative: str) -> str:
    """Keep newlines that look like mini-tables readable as spaced prose."""
    n = clean_text(narrative)
    # Collapse hard wrapping but keep blank-ish row breaks as spaces
    return re.sub(r"\s*\n\s*", " ", n).strip()


def build_context(t: dict) -> str:
    narrative = format_tableish_narrative(t["narrative"])
    given = flatten(t["given"])
    parts = [narrative]
    if given:
        parts.append("")
        parts.append(f"**Variables:** {mathify_inline(given)}")
    return "\n".join(parts).strip()


lines: list[str] = []
lines.append("/**")
lines.append(" * Chapter 5 — Linear equations in two unknowns")
lines.append(" * 60 tasks from Linear_Equations_All_60_Tasks_Reranked PDF.")
lines.append(" * Auto-generated; explanations expanded into detailed textbook prose.")
lines.append(" */")
lines.append("")
lines.append('import type { MathTask } from "@/data/math-chapters";')
lines.append("")
lines.append("export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [")

for t in tasks:
    d5 = max(1, min(5, math.ceil(float(t["difficulty_10"]) / 2.0)))
    diff = f"{d5}/5"
    n = t["num"]
    case_id = f"MATH 5.{n:02d}"
    context = build_context(t)
    overview = build_overview(t)
    stmts = t["statements"]
    answers = t["answer_key"]
    expls = [build_statement_explanation(t, i) for i in range(5)]

    lines.append("  {")
    lines.append(f'    id: "math-5-{n}",')
    lines.append(f'    case_id: "{case_id}",')
    lines.append(f'    title: `{esc(t["title"])}`,')
    lines.append(f"    context: `{esc(context)}`,")
    lines.append("    statements: [")
    for s in stmts:
        lines.append(f"      `{esc(clean_text(s))}`,")
    lines.append("    ],")
    lines.append(
        "    answer_key: ["
        + ", ".join("true" if a else "false" for a in answers)
        + "],"
    )
    lines.append("    tactical_explanations: [")
    for e in expls:
        lines.append(f"      `{esc(e)}`,")
    lines.append("    ],")
    lines.append(f'    difficulty_level: "{diff}",')
    lines.append(f"    sort_order: {n},")
    lines.append(f"    solution_overview: `{esc(overview)}`,")
    lines.append("  },")

lines.append("];")
lines.append("")

OUT.write_text("\n".join(lines), encoding="utf-8")
print("wrote", OUT, "bytes", OUT.stat().st_size)
print("tasks", len(tasks))
