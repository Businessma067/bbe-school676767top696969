# -*- coding: utf-8 -*-
"""Rebuild solution_overview: story → how equations are built → model → solve → answer."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
OUT = ROOT / "textbook" / "output"
OV_PATH = OUT / "ch5_expl_overrides.json"
RAW = json.loads((OUT / "linear_eq_60_raw.json").read_text(encoding="utf-8"))
PDF_TXT = (OUT / "linear_eq_pdf_extract.txt").read_text(encoding="utf-8", errors="ignore")


def flatten(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").strip())


def mathify(text: str) -> str:
    money: dict[str, str] = {}

    def keep(m: re.Match) -> str:
        k = f"§M{len(money)}§"
        money[k] = m.group(0)
        return k

    work = (text or "").replace("\u2212", "-")
    work = re.sub(r"\$\d{1,3}(?:,\d{3})*(?:\.\d+)?", keep, work)
    work = re.sub(
        r"(?<![A-Za-z0-9$§])("
        r"[+\-]?(?:\d*\.?\d*)?[a-zA-Z]"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r"\s*=\s*[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r")(?![A-Za-z0-9$§])",
        lambda m: "$" + m.group(1) + "$",
        work,
    )
    work = re.sub(
        r"(?<![A-Za-z0-9$§])("
        r"(?:\d*\.?\d*)?[a-zA-Z]"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d+)(?:[a-zA-Z])?)+"
        r")(?![A-Za-z0-9$§=])",
        lambda m: "$" + m.group(1) + "$",
        work,
    )
    for k, v in money.items():
        work = work.replace(k, v)
    return work


def extract_givens() -> dict[int, str]:
    givens: dict[int, str] = {}
    for m in re.finditer(
        r"TASK\s+(\d+)\s+[—\-–][\s\S]*?\nGIVEN\n([\s\S]*?)\nSTATEMENTS\n",
        PDF_TXT,
        flags=re.I,
    ):
        givens[int(m.group(1))] = flatten(m.group(2))
    return givens


def eqs_from_model(model: str) -> list[str]:
    eqs = []
    for ln in (model or "").splitlines():
        ln = ln.strip().replace("\u2212", "-")
        if "=" not in ln:
            continue
        eqs.append(ln)
    out = []
    for e in eqs:
        if e not in out:
            out.append(e)
    return out[:6]


def split_core_and_note(eq: str) -> tuple[str, str]:
    """Split 'lhs = rhs (note with possible = inside)' into core eq + note."""
    eq = eq.replace("\u2212", "-").strip()
    # Outermost trailing parenthetical note
    m = re.match(r"^(.*?)(?:\s*\(([^()]*(?:\([^()]*\)[^()]*)*)\))\s*$", eq)
    if m and "=" in m.group(1):
        return m.group(1).strip(), m.group(2).strip()
    if " (" in eq:
        left, right = eq.split(" (", 1)
        if "=" in left:
            return left.strip(), right.rstrip(")").strip()
    return eq, ""


def is_numeric_peel_chain(eq: str) -> bool:
    """True for fee/tax peels like 6x+4y = 70.00 - 8.00 = 62.00 (not prose notes)."""
    core, _ = split_core_and_note(eq)
    if core.count("=") < 2:
        return False
    parts = [p.strip() for p in core.split("=")]
    if len(parts) < 3:
        return False
    if not re.search(r"[a-zA-Z]", parts[0]):
        return False
    numish = re.compile(r"^[+\-]?\d+(?:\.\d+)?(?:\s*[+\-]\s*\d+(?:\.\d+)?)*$")
    return all(numish.match(p) for p in parts[1:])


def clean_eq_for_cases(eq: str) -> str:
    eq = eq.replace("\u2212", "-")
    # Prefer rearranged form when present (must run before multi-= peeling)
    if "which rearranges to" in eq.lower():
        right = re.split(r"which rearranges to", eq, flags=re.I)[1].strip()
        core, _ = split_core_and_note(right)
        return core.rstrip(".")
    core, _ = split_core_and_note(eq)
    # Prefer final numeric result if chain: a = b - c = d
    if is_numeric_peel_chain(core):
        parts = [p.strip() for p in core.split("=")]
        left = parts[0].strip()
        tail = parts[-1].strip()
        return f"{left} = {tail}"
    return core


def format_cases(eqs: list[str]) -> str:
    cleaned = [clean_eq_for_cases(e) for e in eqs]
    seen = []
    for e in cleaned:
        if e and e not in seen:
            seen.append(e)
    seen = seen[:4]
    if not seen:
        return ""
    # Screenshot style: one centered equation per line with (1), (2) on the right
    blocks = [f"$$\n{eq} \\tag{{{i}}}\n$$" for i, eq in enumerate(seen[:2], 1)]
    return "\n\n".join(blocks)


def month_labels_from_given(given: str) -> list[str] | None:
    g = given.lower()
    if "january" in g and "february" in g:
        return ["the January row (actual data)", "the February row (actual data)"]
    return None


def display_eq(eq: str) -> str:
    return f"$$\n{eq}\n$$"


def describe_building_line(raw: str, index: int, row_label: str | None = None) -> str:
    raw_n = raw.replace("\u2212", "-").strip()

    if "which rearranges to" in raw_n.lower():
        left, right = re.split(r",\s*which rearranges to\s+", raw_n, flags=re.I)
        left_core, left_note = split_core_and_note(left.strip())
        rearranged = clean_eq_for_cases("which rearranges to " + right)
        note_bit = f" ({left_note})" if left_note else ""
        return (
            f"**{index}. Turn that story beat into symbols{note_bit}.** "
            f"The transfer is first written as ${left_core}$, which rearranges to a clean difference:\n\n"
            f"{display_eq(rearranged)}"
        )

    core, note = split_core_and_note(raw_n)

    # fee peel chain: 6x+4y = 70.00 - 8.00 = 62.00
    if is_numeric_peel_chain(core):
        parts = [p.strip() for p in core.split("=")]
        left = parts[0]
        mid = " = ".join(parts[1:-1])
        final = parts[-1]
        return (
            f"**{index}. Peel the fixed fee/tax, then write the food×price row.** "
            f"Start from the printed total: ${left} = {mid} = {final}$. The clean system equation is:\n\n"
            f"{display_eq(f'{left} = {final}')}"
        )

    display = clean_eq_for_cases(core)
    if note:
        return (
            f"**{index}. Translate: {note}.** "
            f"That observation becomes:\n\n{display_eq(display)}"
        )
    if row_label:
        return (
            f"**{index}. Use {row_label}.** "
            f"Write the equation:\n\n{display_eq(display)}"
        )
    m = re.match(
        r"^([a-zA-Z])\s*\+\s*(\d+(?:\.\d+)?)([a-zA-Z])\s*=\s*(\d+(?:\.\d+)?)$",
        display.replace(" ", ""),
    )
    if m:
        return (
            f"**{index}. Read the bill with {m.group(2)} extra units.** "
            f"At rate ${m.group(3)}$, that bill is:\n\n{display_eq(display)}"
        )
    return (
        f"**{index}. Record this independent observation.** "
        f"In symbols:\n\n{display_eq(display)}"
    )


def building_from_model_lines(model_eqs: list[str], given: str = "") -> list[str]:
    labels = month_labels_from_given(given) or [None] * len(model_eqs)
    out = []
    for i, eq in enumerate(model_eqs, start=1):
        lab = labels[i - 1] if i - 1 < len(labels) else None
        out.append(describe_building_line(eq, i, lab))
    return out


def existing_sections(overview: str) -> dict[str, str]:
    """Pull Solve / Answer / coach from current overview when present."""
    text = overview or ""
    solve = ""
    answer = ""
    coach = ""
    m = re.search(
        r"\*\*(?:Part\s*\d+:\s*)?Solve\.?\*\*\s*([\s\S]*?)(?=\n\*\*Answer\.?\*\*|\Z)",
        text,
        flags=re.I,
    )
    if m:
        solve = m.group(1).strip()
    m = re.search(r"\*\*Answer\.?\*\*\s*([^\n*]+)", text, flags=re.I)
    if m:
        answer = m.group(1).strip()
    tips = re.findall(r"(\*\*[^*]+?:\*\*[^\n]+)", text)
    coach_bits = []
    for t in tips:
        label = t.split(":**")[0].lower()
        if any(
            k in label
            for k in (
                "what",
                "building",
                "model",
                "solve",
                "answer",
                "setup",
                "computation",
                "direct",
                "where",
                "part",
            )
        ):
            continue
        coach_bits.append(t)
    coach = "\n\n".join(coach_bits)
    return {"solve": solve, "answer": answer, "coach": coach}


def format_solution_steps(solution: str) -> str:
    sol = re.sub(r"Final Answer:\s*.*", "", solution or "", flags=re.S).strip()
    sol = re.sub(r"\s+", " ", sol)
    if not sol:
        return ""
    sents = [s.strip() for s in re.split(r"(?<=[.!?])\s+(?=[A-Z0-9$\\\"(])", sol) if s.strip()]
    merged: list[str] = []
    for s in sents:
        if merged and merged[-1].rstrip().endswith(("vs.", "vs")):
            merged[-1] = merged[-1] + " " + s
        else:
            merged.append(s)
    return "\n\n".join(
        polish_numbered_step(f"**{i}.** {mathify(s)}") for i, s in enumerate(merged, 1)
    )


def polish_numbered_step(block: str) -> str:
    """Turn '**2.** prose: $eq$, so $x=…$' into screenshot-style title + display math."""
    text = block.strip()
    m2 = re.match(r"^\*\*(\d+)\.\*\*\s*(.*)$", text, flags=re.S)
    m1 = re.match(r"^\*\*(\d+)\.\s+([^*]+?)\.\*\*\s*(.*)$", text, flags=re.S)
    if m1:
        n, title_seed, rest = m1.group(1), m1.group(2).strip(), (m1.group(3) or "").strip()
        body = rest if rest else ""
        if not body:
            return text
    elif m2:
        n, body = m2.group(1), m2.group(2).strip()
        title_seed = ""
    else:
        return text

    if "$$" in body:
        return text

    parts = re.split(r"(\$[^$\n]+\$)", body)
    title_bits: list[str] = []
    display_eqs: list[str] = []
    trailing: list[str] = []
    seen_eq = False
    for p in parts:
        if not p:
            continue
        if p.startswith("$") and p.endswith("$"):
            inner = p[1:-1].strip().replace("\u2212", "-")
            if "=" in inner and re.search(r"[A-Za-z]", inner):
                display_eqs.append(inner)
                seen_eq = True
                continue
            (trailing if seen_eq else title_bits).append(p)
            continue
        (trailing if seen_eq else title_bits).append(p)

    title = "".join(title_bits).strip()
    title = re.sub(r"[:\s]+$", "", title).rstrip(".")
    if title_seed and not title:
        title = title_seed

    trail = "".join(trailing).strip()
    trail = re.sub(r"^[,;\s]+", "", trail)
    # "… $eq1$ and $eq2$" → both display, drop conjunction
    if display_eqs and re.fullmatch(r"and\s*\.?", trail, flags=re.I):
        trail = ""
    # "… $eq1$, so $eq2$" → keep conclusion inline
    elif display_eqs and re.fullmatch(r"so\s*\.?", trail, flags=re.I):
        last = display_eqs.pop()
        trail = f"So ${last}$."
    # "$y = 620 - 360$ = 260" → fold trailing "= 260" into the equation
    elif display_eqs and re.match(r"^=\s*[+\-]?\d", trail):
        display_eqs[-1] = f"{display_eqs[-1]} {trail.rstrip('.')}"
        trail = ""
    trail = re.sub(r"^(and|so)\s*\.\s*$", "", trail, flags=re.I).strip()
    if trail.lower().startswith("so "):
        trail = "So " + trail[3:]

    if title and title.lower() in {"then", "so", "thus", "hence", "next"}:
        title = "Find the remaining unknown"

    if not display_eqs and not title_seed:
        flat = body.strip()
        sm = re.match(r"^(.+?[.!?])\s*(.*)$", flat, flags=re.S)
        if sm and len(sm.group(1)) < 140:
            t = sm.group(1).rstrip(".")
            rest2 = sm.group(2).strip()
            out = [f"**{n}. {t}.**"]
            if rest2:
                out += ["", rest2]
            return "\n".join(out)
        return f"**{n}.** {flat}"

    if not display_eqs:
        return text

    out: list[str] = [f"**{n}. {title}.**" if title else f"**{n}.**"]
    for eq in display_eqs:
        out += ["", f"$$\n{eq}\n$$"]
    if trail:
        out += ["", trail]
    return "\n".join(out)


def polish_solve_section(solve: str) -> str:
    if not solve.strip():
        return solve
    # Split on blank lines; polish each numbered step block
    blocks = re.split(r"\n\s*\n", solve.strip())
    return "\n\n".join(polish_numbered_step(b) for b in blocks)


def build_overview(task: dict, given: str, old_overview: str) -> str:
    ctx = flatten(task.get("context") or "")
    model = task.get("model") or ""
    model_eqs = eqs_from_model(model)
    secs = existing_sections(old_overview)

    # --- What's going on ---
    going = ""
    m = re.search(r"\*\*What's going on\.\*\*\s*([\s\S]*?)(?=\n\*\*|\Z)", old_overview or "")
    if m:
        going = flatten(m.group(1))
    if not going:
        first = ". ".join(ctx.split(". ")[:2]).strip()
        if first and not first.endswith("."):
            first += "."
        going = first or flatten(task.get("title") or "")

    given_clean = (given or "").strip()
    # Plain intro paragraph (screenshots jump straight into Part 1 — no "What's going on" chip).
    parts = [
        going,
        "",
        "**Part 1: Building the system.**",
        "",
    ]

    if given_clean:
        parts.append(mathify(given_clean))
        parts.append("")

    bullets = building_from_model_lines(model_eqs, given_clean)
    if bullets:
        for b in bullets:
            parts.append(b)
            parts.append("")

    parts += [
        "**Part 2: The model.**",
        "",
        format_cases(model_eqs),
        "",
        "**Part 3: Solve.**",
        "",
    ]

    # Prefer a fresh Solve from the PDF solution text (avoids stale mangled $$ steps).
    solve = format_solution_steps(task.get("solution") or "")
    if not solve:
        solve = secs["solve"] or ""
        solve = re.sub(r"\*\*Step\s+(\d+)\.\*\*", r"**\1.**", solve)
        solve = polish_solve_section(solve)
    # Drop orphan leftovers like "and ." / "So ." from aggressive eq lifting
    solve = re.sub(r"\n\n(?:and|so)\s*\.\s*(?=\n|\Z)", "\n", solve, flags=re.I)
    solve = re.sub(r"\n{3,}", "\n\n", solve).strip()
    if solve:
        parts.append(solve)
    else:
        parts.append(
            "Eliminate or substitute carefully, back-substitute, and verify both originals."
        )

    answer = secs["answer"] or (task.get("final_answer") or "")
    parts += ["", f"**Answer.** {answer}"]

    # No coaching tips / Watch / Why — screenshots are plain tutorial prose only.
    return "\n".join(parts).strip()


def main() -> None:
    givens = extract_givens()
    print("givens found", len(givens))
    data = json.loads(OV_PATH.read_text(encoding="utf-8"))
    for t in RAW:
        n = t["num"]
        key = str(n)
        if key not in data:
            data[key] = {
                "solution_overview": "",
                "tactical_explanations": [""] * 5,
            }
        old = data[key].get("solution_overview") or ""
        data[key]["solution_overview"] = build_overview(t, givens.get(n, ""), old)

    OV_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    # sample
    for n in [1, 4, 52]:
        print("=" * 60, n)
        print(data[str(n)]["solution_overview"][:1100])
        print()


if __name__ == "__main__":
    main()
