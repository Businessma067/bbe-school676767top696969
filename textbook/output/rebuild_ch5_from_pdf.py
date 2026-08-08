# -*- coding: utf-8 -*-
"""Deep PDF audit for Chapter 5: stem figures + cleaned tables + binomial-length explanations."""
from __future__ import annotations

import json
import math
import re
from pathlib import Path

import pymupdf

PDF = Path(r"c:\Users\bubli\Downloads\Linear_Equations_All_60_Tasks_Reranked-1.pdf")
ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW_OUT = ROOT / "textbook" / "output" / "linear_eq_60_raw.json"
FIG_DIR = ROOT / "public" / "math" / "ch5"
TS_OUT = ROOT / "src" / "data" / "math-ch5-linear-equations.ts"

FIG_DIR.mkdir(parents=True, exist_ok=True)

doc = pymupdf.open(str(PDF))


def clean(s: str) -> str:
    s = s.replace("\u2212", "-").replace("\u00d7", "\\times ").replace("\u2192", "\\to ")
    s = s.replace("\u2014", "—").replace("\u2013", "–")
    s = re.sub(r"[ \t]+\n", "\n", s)
    return s.strip()


def flatten(s: str) -> str:
    return re.sub(r"\s+", " ", clean(s)).strip()


def is_verdict_table(rows: list[list]) -> bool:
    if not rows:
        return True
    head = " ".join(str(c or "") for c in rows[0]).lower()
    return "verdict" in head or head.strip() in {"# verdict explanation", "#"}


def merge_fragment_tables(tables: list[list[list[str]]]) -> list[list[list[str]]]:
    """Merge consecutive single-row 'table' fragments that belong to one receipt block."""
    if not tables:
        return []
    out: list[list[list[str]]] = []
    buf: list[list[str]] | None = None
    for tab in tables:
        # Start a new multi-row table when header-looking
        if len(tab) >= 2:
            if buf:
                out.append(buf)
                buf = None
            out.append(tab)
            continue
        # Single row fragment
        row = tab[0]
        if buf is None:
            # If looks like a header, start buffer
            if any(str(c).lower() in {"qty", "price", "invoice", "session", "metric"} for c in row):
                buf = [row]
            else:
                # orphan label row — start new buffer anyway
                buf = [row]
        else:
            buf.append(row)
            # end buffer on total-like rows
            joined = " ".join(str(c or "") for c in row).lower()
            if "total" in joined or "combined" in joined:
                out.append(buf)
                buf = None
    if buf:
        out.append(buf)
    # Drop tiny junk
    cleaned = []
    for t in out:
        nonempty = [r for r in t if any(str(c or "").strip() for c in r)]
        if len(nonempty) >= 2:
            cleaned.append([[str(c or "").strip() for c in r] for r in nonempty])
        elif len(nonempty) == 1 and len(nonempty[0]) >= 2:
            cleaned.append([[str(c or "").strip() for c in r] for r in nonempty])
    return cleaned


def table_to_markdown(rows: list[list[str]]) -> str:
    if not rows:
        return ""
    width = max(len(r) for r in rows)
    norm = [r + [""] * (width - len(r)) for r in rows]
    header = norm[0]
    body = norm[1:] if len(norm) > 1 else []
    lines = [
        "| " + " | ".join(header) + " |",
        "| " + " | ".join("---" for _ in header) + " |",
    ]
    for r in body:
        lines.append("| " + " | ".join(r) + " |")
    return "\n".join(lines)


def extract_stem_clip(page: pymupdf.Page, task_num: int) -> str | None:
    """Render narrative+table graphics region (above GIVEN/STATEMENTS) to public PNG."""
    # Prefer left-column anchors (ignore repeated labels in answer tables on the right).
    def leftish(rects: list[pymupdf.Rect]) -> list[pymupdf.Rect]:
        return [r for r in rects if r.x0 < page.rect.width * 0.45 and r.y0 < page.rect.height * 0.65]

    given_hits = leftish(page.search_for("GIVEN"))
    stmt_hits = leftish(page.search_for("STATEMENTS"))
    anchors = given_hits + stmt_hits
    if not anchors:
        # fallback: any STATEMENTS
        anchors = page.search_for("STATEMENTS")
    if not anchors:
        return None
    bottom = min(anchors, key=lambda r: r.y0).y0 - 4

    top = 48.0
    fmt = page.search_for("Format:")
    if fmt:
        top = min(fmt, key=lambda r: r.y0).y1 + 4
    else:
        task_hits = page.search_for(f"TASK {task_num}")
        if task_hits:
            top = task_hits[0].y1 + 4

    if bottom <= top + 12:
        # widen slightly using STATEMENTS if GIVEN collapsed the clip
        if stmt_hits:
            bottom = min(stmt_hits, key=lambda r: r.y0).y0 - 4
    if bottom <= top + 12:
        return None

    clip = pymupdf.Rect(page.rect.x0 + 24, top, page.rect.x1 - 24, bottom)
    pix = page.get_pixmap(matrix=pymupdf.Matrix(2.2, 2.2), clip=clip, alpha=False)
    path = FIG_DIR / f"task-{task_num:02d}.png"
    pix.save(str(path))
    return f"/math/ch5/task-{task_num:02d}.png"


def mathify(text: str) -> str:
    text = clean(text)
    if "$$" in text:
        return text

    def wrap(m: re.Match) -> str:
        return f"${m.group(0).strip()}$"

    text = re.sub(
        r"(?<![A-Za-z0-9$])("
        r"[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*(?:[+\-]|\\times)\s*[+\-]?\d+(?:\.\d+)?)+"
        r"\s*=\s*[+\-]?\d+(?:\.\d+)?"
        r")(?![A-Za-z0-9$])",
        wrap,
        text,
    )
    text = re.sub(
        r"(?<![A-Za-z0-9$])("
        r"[+\-]?(?:\d*\.?\d*)?[a-zA-Z]"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r"\s*=\s*[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r")(?![A-Za-z0-9$])",
        wrap,
        text,
    )
    return text


def short_explanation(
    letter: str, verdict: bool, stmt: str, raw: str, model: str, final: str
) -> str:
    """Binomial-length explanation: letter + verdict — reason, key formula, tip."""
    label = "TRUE" if verdict else "FALSE"
    reason = mathify(flatten(raw))
    eqs = [ln.strip() for ln in clean(model).split("\n") if "=" in ln]
    formula = ""
    if eqs:
        eq = eqs[0]
        if " (" in eq:
            eq = eq.split(" (")[0].strip()
        if "which rearranges" in eq.lower():
            eq = re.split(r",\s*which rearranges to\s+", eq, flags=re.I)[0].strip()
        formula = f"$$\n{eq}\n$$"

    tip = (
        f"Tip: Keep the final values in view (**{final}**) when testing the claim."
        if final
        else (
            "Tip: Check the claim against the **exact** solved values — boundary words like "
            "*more than* / *less than* / *exactly* are deliberate traps."
        )
    )

    parts = [
        f"**{letter}) {label}** — {reason}",
        "",
    ]
    if formula:
        parts += ["Key relation:", "", formula, ""]
    parts.append(tip)
    return "\n".join(parts).strip()


def prose_without_table_soup(narrative: str) -> str:
    """Keep the story sentences; drop column-soup from OCR-like table dumps."""
    lines = [ln.strip() for ln in clean(narrative).split("\n") if ln.strip()]
    keep = []
    tableish = {
        "invoice",
        "notebooks",
        "pens",
        "invoice total",
        "session",
        "adult tickets",
        "child tickets",
        "revenue",
        "qty",
        "price",
        "metric",
        "value",
        "receipt 1",
        "receipt 2",
        "receipt total",
    }
    for ln in lines:
        low = ln.lower()
        if low in tableish:
            continue
        if re.fullmatch(r"#?\d+", ln):
            continue
        if re.fullmatch(r"\$?[\d,]+(?:\.\d+)?", ln):
            continue
        # Skip short spreadsheet cells
        if len(ln) <= 18 and not ln.endswith("."):
            # allow meaningful short phrases
            if low not in {"and", "or", "the"} and " " not in ln and not ln[0].isupper():
                continue
            if re.fullmatch(r"[A-Za-z0-9#.$%]+", ln) and len(ln) < 12:
                continue
        keep.append(ln)
    prose = " ".join(keep)
    prose = re.sub(r"\s{2,}", " ", prose).strip()
    return prose


# Rebuild task list from PDF pages 2..61 (task 1..60)
tasks = []
for num in range(1, 61):
    page = doc[num]  # page index = task number (page 2 = task 1 → index 1)
    text = page.get_text()
    # Parse with same structure as before
    title_m = re.search(rf"TASK\s+{num}\s+[—\-]\s*(.+)", text)
    title = title_m.group(1).split("\n")[0].strip() if title_m else f"Task {num}"

    dm = re.search(r"Difficulty:\s*([0-9.]+)/10", text)
    diff10 = float(dm.group(1)) if dm else 5.0

    gm = re.search(r"GIVEN\n([\s\S]*?)\nSTATEMENTS\n", text)
    given = gm.group(1).strip() if gm else ""

    sm = re.search(r"STATEMENTS\n([\s\S]*?)\nMATHEMATICAL MODEL", text)
    stmts_raw = sm.group(1).strip() if sm else ""
    statements = []
    for lab in "ABCDE":
        mm = re.search(rf"{lab}\.\s+(.*?)(?=\n[A-E]\.\s|\Z)", stmts_raw, re.S)
        if mm:
            statements.append(flatten(mm.group(1)))

    mm2 = re.search(r"MATHEMATICAL MODEL\n([\s\S]*?)\nSTEP-BY-STEP SOLUTION", text)
    model = mm2.group(1).strip() if mm2 else ""

    solm = re.search(r"STEP-BY-STEP SOLUTION\n([\s\S]*?)\nSTATEMENT ANALYSIS", text)
    solution = solm.group(1).strip() if solm else ""

    am = re.search(r"STATEMENT ANALYSIS\n([\s\S]*?)\nGENERAL EXPLANATION\n", text)
    analysis = am.group(1).strip() if am else ""
    answers = []
    explanations = []
    for lab in "ABCDE":
        mm = re.search(
            rf"(?:^|\n){lab}\n(TRUE|FALSE)\n([\s\S]*?)(?=\n[A-E]\n(?:TRUE|FALSE)\n|\Z)",
            analysis,
        )
        if mm:
            answers.append(mm.group(1) == "TRUE")
            explanations.append(flatten(mm.group(2)))
        else:
            answers.append(False)
            explanations.append("")

    genm = re.search(r"GENERAL EXPLANATION\n([\s\S]*)", text)
    general = flatten(genm.group(1)) if genm else ""

    # Narrative = between Format line and GIVEN
    header_end = text.find("\nGIVEN\n")
    narrative = ""
    if header_end > 0:
        head = text[:header_end]
        lines = head.split("\n")
        skip = 0
        for i, line in enumerate(lines):
            if line.startswith("TASK ") or line.startswith("Format:") or line.startswith("(previously"):
                skip = i + 1
                continue
            if not line.strip():
                skip = i + 1
                continue
            break
        narrative = "\n".join(lines[skip:]).strip()

    # Tables (skip answer-key tables)
    tabs = page.find_tables()
    data_tables: list[list[list[str]]] = []
    for t in tabs.tables:
        rows = t.extract()
        # Only tables in the stem region
        if t.bbox[1] > page.rect.height * 0.55:
            continue
        if is_verdict_table(rows):
            continue
        data_tables.append([[str(c or "").strip() for c in r] for r in rows])
    data_tables = merge_fragment_tables(data_tables)

    figure = extract_stem_clip(page, num)

    final = ""
    fm = re.search(r"Final Answer:\s*(.*)", clean(solution), re.S)
    if fm:
        final = flatten(fm.group(1))

    tasks.append(
        {
            "num": num,
            "title": title,
            "difficulty_10": diff10,
            "difficulty_level": f"{max(1, min(5, math.ceil(diff10 / 2.0)))}/5",
            "narrative": narrative,
            "narrative_prose": prose_without_table_soup(narrative),
            "given": given,
            "statements": statements,
            "answer_key": answers,
            "explanations": explanations,
            "model": model,
            "solution": solution,
            "general": general,
            "final_answer": final,
            "tables": data_tables,
            "figure": figure,
        }
    )
    print(
        f"task {num:02d}: tables={len(data_tables)} figure={'yes' if figure else 'no'} "
        f"stmt={len(statements)}"
    )

RAW_OUT.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
print("wrote raw", RAW_OUT)


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def build_context(t: dict) -> str:
    parts = [t["narrative_prose"] or flatten(t["narrative"])]
    # Prefer markdown tables when we have usable multi-row data
    usable = [tab for tab in t["tables"] if len(tab) >= 2]
    if usable and not t.get("figure"):
        parts.append("")
        for tab in usable:
            parts.append(table_to_markdown(tab))
            parts.append("")
    if t["given"]:
        parts.append("")
        parts.append(f"**Variables:** {mathify(flatten(t['given']))}")
    return "\n".join(p for p in parts if p is not None).strip()


def build_overview(t: dict) -> str:
    """Short overview — model + final answer only (binomial-scale)."""
    eqs = []
    for ln in clean(t["model"]).split("\n"):
        ln = ln.strip()
        if not ln or "=" not in ln:
            continue
        if " (" in ln:
            left = ln.split(" (")[0].strip()
            if re.search(r"[a-zA-Z].*=", left):
                ln = left
        # skip prose rearrange tails
        if "which rearranges" in ln.lower():
            parts = re.split(r",\s*which rearranges to\s+", ln, flags=re.I)
            eqs.extend([p.strip() for p in parts if "=" in p])
        else:
            eqs.append(ln)
    # dedupe
    seen = []
    for e in eqs:
        if e not in seen:
            seen.append(e)
    eqs = seen[:2]
    if len(eqs) >= 2:
        model = "$$\n\\begin{cases}\n" + " \\\\\n".join(eqs) + "\n\\end{cases}\n$$"
    elif eqs:
        model = f"$$\n{eqs[0]}\n$$"
    else:
        model = mathify(t["model"])

    final = t.get("final_answer") or ""
    lines = [
        "**Model**",
        "",
        model,
        "",
        f"**Final answer:** {final}" if final else "",
    ]
    return "\n".join(x for x in lines if x is not None).strip()


lines: list[str] = []
lines.append("/**")
lines.append(" * Chapter 5 — Linear equations in two unknowns")
lines.append(" * 60 tasks from Linear_Equations_All_60_Tasks_Reranked PDF.")
lines.append(" * Binomial-length explanations; stem figures + markdown tables from PDF.")
lines.append(" */")
lines.append("")
lines.append('import type { MathTask } from "@/data/math-chapters";')
lines.append("")
lines.append("export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [")

for t in tasks:
    d5 = max(1, min(5, math.ceil(float(t["difficulty_10"]) / 2.0)))
    n = t["num"]
    expls = [
        short_explanation(
            "ABCDE"[i],
            t["answer_key"][i],
            t["statements"][i],
            t["explanations"][i],
            t["model"],
            t.get("final_answer") or "",
        )
        for i in range(5)
    ]
    fig = t.get("figure")
    # JSON-ish figure field via optional property on task object
    lines.append("  {")
    lines.append(f'    id: "math-5-{n}",')
    lines.append(f'    case_id: "MATH 5.{n:02d}",')
    lines.append(f'    title: `{esc(clean(t["title"]))}`,')
    lines.append(f"    context: `{esc(build_context(t))}`,")
    if fig:
        lines.append(f'    figure: "{fig}",')
    # Prefer the PNG stem graphic over incomplete PDF table parses.
    if not fig and t["tables"]:
        usable = [tab for tab in t["tables"] if len(tab) >= 2]
        if usable:
            md = "\n\n".join(table_to_markdown(tab) for tab in usable)
            lines.append(f"    tables_markdown: `{esc(md)}`,")
    lines.append("    statements: [")
    for s in t["statements"]:
        lines.append(f"      `{esc(s)}`,")
    lines.append("    ],")
    lines.append(
        "    answer_key: ["
        + ", ".join("true" if a else "false" for a in t["answer_key"])
        + "],"
    )
    lines.append("    tactical_explanations: [")
    for e in expls:
        lines.append(f"      `{esc(e)}`,")
    lines.append("    ],")
    lines.append(f'    difficulty_level: "{d5}/5",')
    lines.append(f"    sort_order: {n},")
    lines.append(f"    solution_overview: `{esc(build_overview(t))}`,")
    lines.append("  },")

lines.append("];")
lines.append("")
TS_OUT.write_text("\n".join(lines), encoding="utf-8")
print("wrote", TS_OUT, "bytes", TS_OUT.stat().st_size)
print("figures", len(list(FIG_DIR.glob("task-*.png"))))
