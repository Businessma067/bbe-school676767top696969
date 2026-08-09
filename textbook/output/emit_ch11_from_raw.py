# -*- coding: utf-8 -*-
"""Emit src/data/math-ch11-financial.ts from ch11_raw.json (Ch5-style overviews)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
OUT = ROOT / "src" / "data" / "math-ch11-financial.ts"


def esc(s: str) -> str:
    return (s or "").replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def mathify_light(text: str) -> str:
    """Light wrap for formulas that are clearly algebraic; keep currency alone."""
    work = text or ""
    # Already has $ — leave
    if "$" in work and work.count("$") >= 2:
        return work
    return work


def format_formula_block(formulas: str) -> list[str]:
    """
    Emit Part 2 as separate bullet lines for RichMathLine.
    Do not use $$ display wrappers: Ch11 formulas mix labels + KaTeX and $$ turns them red/raw.
    Only split on existing bullets/newlines — never cut inside a $...$ span.
    """
    raw = (formulas or "").strip()
    if not raw:
        return []

    # Un-smash bullets without touching math interiors
    work = re.sub(r"([a-zA-Z0-9.%])•", r"\1\n• ", raw)
    work = re.sub(r"•([A-Za-z0-9$])", r"• \1", work)

    items: list[str] = []
    for ln in re.split(r"\n+|(?=\s*•)", work):
        ln = ln.strip()
        if not ln:
            continue
        # Also split multi-bullet single lines
        if ln.count("•") > 1 and not ln.startswith("$"):
            bits = [b.strip() for b in ln.split("•") if b.strip()]
            items.extend(bits)
        else:
            items.append(ln.lstrip("• ").strip())

    out: list[str] = []
    for item in items:
        if not item:
            continue
        out.append(f"• {item}" if not item.startswith("•") else item)
    if not out:
        out = [f"• {raw}"]
    # Blank line between bullets so ExplanationBody (\n\n split) puts each on its own paragraph
    spaced: list[str] = []
    for i, ln in enumerate(out):
        if i:
            spaced.append("")
        spaced.append(ln)
    return spaced


def bullet_paragraphs(text: str) -> str:
    """Ensure consecutive • lines become separate paragraphs (blank line between)."""
    if not text or "•" not in text:
        return text
    lines: list[str] = []
    for ln in text.splitlines():
        stripped = ln.strip()
        if stripped.startswith("•"):
            if lines and lines[-1].strip() != "":
                lines.append("")
            lines.append(stripped)
        else:
            lines.append(ln)
    # Also split rare same-line doubles: "• a • b"
    joined = "\n".join(lines)
    if re.search(r"•[^\n]*•", joined):
        pieces: list[str] = []
        for ln in joined.splitlines():
            if ln.count("•") > 1:
                bits = [b.strip() for b in ln.split("•") if b.strip()]
                for j, b in enumerate(bits):
                    if j:
                        pieces.append("")
                    pieces.append(f"• {b}")
            else:
                pieces.append(ln)
        joined = "\n".join(pieces)
    return joined


def build_overview(task: dict, sub_id: str) -> str:
    title = task["title"]
    given = task.get("given") or ""
    formulas = task.get("formulas") or ""
    steps = task.get("steps") or ""
    answers = task["answer_key"]
    letters = "ABCDE"
    ans_bits = ", ".join(
        f"{letters[i]}={'TRUE' if answers[i] else 'FALSE'}" for i in range(5)
    )

    parts = [
        task["context"],
        "",
        "**Part 1: Setup.**",
        "",
    ]
    if given:
        # Same bullet un-smash as formulas — Setup was rendering "9years•Tranche2"
        parts.extend(format_formula_block(given) if ("•" in given or "\n" in given) else [given])
        parts.append("")
    else:
        parts.append(f"This is a Section {sub_id} true/false case on {title}.")
        parts.append("")

    parts += ["**Part 2: Formula.**", ""]
    if formulas:
        # NEVER wrap Ch11 formula blobs in $$ — English labels + nested $ break KaTeX
        # (renders as red raw "$…$"). Emit one bullet per formula, prose outside math.
        parts.extend(format_formula_block(formulas))
        parts.append("")
    else:
        parts.append("Use the formulas introduced in this subsection.")
        parts.append("")

    parts += ["**Part 3: Solve.**", ""]
    if steps:
        if "•" in steps:
            parts.extend(format_formula_block(steps))
            parts.append("")
        else:
            # Split steps into numbered pieces on sentence boundaries when possible
            sents = [s.strip() for s in re.split(r"(?<=[.!?])\s+", steps) if s.strip()]
            if len(sents) >= 2:
                for i, s in enumerate(sents[:8], 1):
                    parts.append(f"**{i}.** {s}")
                    parts.append("")
            else:
                parts.append(steps)
                parts.append("")
    else:
        parts.append("Evaluate each statement against the setup and formulas above.")
        parts.append("")

    parts.append(f"**Answer.** {ans_bits}")
    return "\n".join(parts).strip()


def build_tactical(task: dict) -> list[str]:
    out = []
    letters = "ABCDE"
    for i in range(5):
        stmt = task["statements"][i]
        truth = task["answer_key"][i]
        expl = (task.get("explanations") or [""] * 5)[i] or ""
        verdict = "true" if truth else "false"
        # Strip leading verdict scraps
        expl = re.sub(r"^(TRUE|FALSE)\b\.?\s*", "", expl, flags=re.I)
        body = expl if expl else (
            "This claim matches the calculated result."
            if truth
            else "This claim does not match the calculated result — check the trap highlighted in the solution."
        )
        body = bullet_paragraphs(body)
        block = f"**{letters[i]}) {stmt}**  ({verdict})\n\n{body}"
        out.append(block)
    return out


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    global_n = 0
    lines: list[str] = []
    lines.append("/**")
    lines.append(" * Chapter 11 — Financial mathematics (subsections 11.1–11.7).")
    lines.append(" * Generated from textbook/output/ch11_raw.json — do not hand-edit bulk content.")
    lines.append(" */")
    lines.append("")
    lines.append("import type { MathTask } from \"@/data/math-chapters\";")
    lines.append("")
    lines.append("export const MATH_CH11_SUBSECTIONS = [")
    for sub in data["subsections"]:
        lines.append(f"  {{ id: \"{sub['id']}\", title: {json.dumps(sub['title'])} }},")
    lines.append("] as const;")
    lines.append("")
    lines.append("export const MATH_CH11_FINANCIAL: MathTask[] = [")

    for sub in data["subsections"]:
        sid = sub["id"]
        for task in sub["tasks"]:
            global_n += 1
            overview = build_overview(task, sid)
            tactical = build_tactical(task)
            case_id = f"MATH 11.{global_n:02d}"
            tid = f"math-11-{global_n}"

            lines.append("  {")
            lines.append(f"    id: `{tid}`,")
            lines.append(f"    case_id: `{case_id}`,")
            lines.append(f"    title: `{esc(task['title'])}`,")
            lines.append(f"    subsection: `{sid}`,")
            lines.append(f"    context: `{esc(task['context'])}`,")
            lines.append("    statements: [")
            for s in task["statements"]:
                lines.append(f"      `{esc(s)}`,")
            lines.append("    ],")
            ak = ", ".join("true" if x else "false" for x in task["answer_key"])
            lines.append(f"    answer_key: [{ak}],")
            lines.append("    tactical_explanations: [")
            for t in tactical:
                lines.append(f"      `{esc(t)}`,")
            lines.append("    ],")
            lines.append(f"    difficulty_level: `{task['difficulty_level']}`,")
            lines.append(f"    sort_order: {global_n},")
            lines.append(f"    solution_overview: `{esc(overview)}`,")
            lines.append("  },")

    lines.append("];")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {OUT} with {global_n} tasks")


if __name__ == "__main__":
    main()
