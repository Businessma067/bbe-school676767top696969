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


# Factor: 40, 0.21u, x, 3(y-5), 0.0375(2x+4000), (55-4a)
# (?!\.\d) blocks backtracking that would truncate 3.50 into 3 + .50
_FACTOR = (
    r"(?:"
    r"[+\-]?(?:"
    r"\d+(?:\.\d+)?(?:[a-zA-Z]\d*)?"
    r"|(?:[a-zA-Z]\d*)"
    r")"
    r"(?:\([^()]*(?:\([^()]*\)[^()]*)*\))?"
    r"|\([^()]*(?:\([^()]*\)[^()]*)*\)"
    r")"
    r"(?!\.\d)"
)
_EXPR = rf"{_FACTOR}(?:\s*[+\-×·]\s*{_FACTOR})*"

# Currency compatible with FlashcardMath (never steal $6x / $360$)
_CURRENCY = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=(\\{^_$])"
)


def repair_math_artifacts(text: str) -> str:
    """Heal known KaTeX wrap scars from older mathify passes."""
    s = text or ""
    for _ in range(8):
        prev = s
        # $lhs$ = rhs$  →  $lhs = rhs$  (split across dollars)
        s = re.sub(r"\$([^$\n]+?)\$\s*=\s*([^$\n]+?)\$", r"$\1 = \2$", s)
        # $y = 620 - 360$ $= 260$  →  $y = 620 - 360 = 260$
        s = re.sub(r"\$([^$\n]+?)\$\s*\$=\s*", r"$\1 = ", s)
        # $3x + 9$(5)$= 66$  →  $3x + 9(5) = 66$
        s = re.sub(
            r"\$([^$\n]+?)\$\(([^)]+)\)\$\s*=\s*([^$\n]+?)\$",
            r"$\1(\2) = \3$",
            s,
        )
        # $y = 2$(4800)$+ 4000 = 13600$  →  $y = 2(4800) + 4000 = 13600$
        s = re.sub(
            r"\$([^$\n]+?)\$\(([^)]+)\)\$\s*([+\-])\s*",
            r"$\1(\2) \3 ",
            s,
        )
        # $x = 10.70 - 4$(1.80)$  →  $x = 10.70 - 4(1.80)$
        s = re.sub(r"\$([^$\n]+?)\$\(([^)]+)\)\$", r"$\1(\2)$", s)
        # 40(10.70 - 4y)$+ 25y = 185$  →  $40(10.70 - 4y) + 25y = 185$
        s = re.sub(
            r"(?<![A-Za-z0-9$])(\d+\([^)]+\)(?:\s*[+\-]\s*[^=$\n]+)?)\s*\$([+\-])\s*",
            r"$\1 \2 ",
            s,
        )
        # predicted $= / True Value $=  →  predicted = / True Value =
        s = re.sub(
            r"(?i)\b(predicted|value|gives|equals|is)\s*\$=\s*",
            r"\1 = ",
            s,
        )
        # $0.$1275x  →  $0.1275x
        s = re.sub(r"\$(\d+)\.\$(\d)", r"$\1.\2", s)
        # $x = $10.70 - … = 3$.50$  → try close truncated decimal
        s = re.sub(r"=\s*(\d+)\$\.(\d+)\$", r"= \1.\2$", s)
        s = re.sub(r"\$=\s*\$(\d)", r"= $\1", s)
        # currency scar inside math: $428.00 - $160y
        s = re.sub(r"\$(\d+(?:,\d{3})*(?:\.\d+)?)\s*-\s*\$(\d)", r"$\1 - \2", s)
        if s == prev:
            break
    return s


def mathify(text: str) -> str:
    """Wrap algebra in $...$ without chopping paren products or var=var eqs."""
    bag: dict[str, str] = {}

    def stash(m: re.Match) -> str:
        k = f"§M{len(bag)}§"
        bag[k] = m.group(0)
        return k

    work = (text or "").replace("\u2212", "-").replace("→", " → ")
    # Existing math first, then currency in remaining prose
    work = re.sub(r"\$\$[\s\S]*?\$\$|\$[^$\n]+\$", stash, work)
    work = _CURRENCY.sub(stash, work)

    def wrap_eq(m: re.Match) -> str:
        body = re.sub(r"\s+", " ", m.group(1).strip()).rstrip(".")
        return f"${body}$"

    # Prefer longer peel chains first: a = b = c
    work = re.sub(
        rf"(?<![A-Za-z0-9$§])({_EXPR}\s*=\s*{_EXPR}\s*=\s*{_EXPR})(?![A-Za-z0-9$§])",
        wrap_eq,
        work,
    )
    # Lock immediately so a later double-eq pass cannot nest inside
    work = re.sub(r"\$[^$\n]+\$", stash, work)
    work = re.sub(
        rf"(?<![A-Za-z0-9$§])({_EXPR}\s*=\s*{_EXPR})(?![A-Za-z0-9$§])",
        wrap_eq,
        work,
    )
    work = re.sub(r"\$[^$\n]+\$", stash, work)

    # Bare linear chunks WITHOUT nesting into eq wrappers (x - 50, 6x + 4y).
    # Must start with a letter (not digit-juxtaposition like 2x) so we never
    # split paren products such as 0.0375(2x+4000) or 4(1.80).
    work = re.sub(
        r"(?<![A-Za-z0-9$§])("
        r"[a-zA-Z]\d*"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d+)(?:[a-zA-Z]\d*)?)+"
        r")(?![A-Za-z0-9$§=(])",
        lambda m: "$" + m.group(1) + "$",
        work,
    )
    for k, v in bag.items():
        work = work.replace(k, v)
    return repair_math_artifacts(work)


def normalize_solution(sol: str) -> str:
    """Repair PDF line-breaks mid-equation before we split into steps."""
    s = (sol or "").replace("\r\n", "\n").replace("\u2212", "-")
    s = re.sub(r"Final Answer:\s*.*", "", s, flags=re.S)
    # "33 +\n0.21u = 0.29u" → "33 + 0.21u = 0.29u"
    s = re.sub(r"([+\-=×··/^])\s*\n\s*", r"\1 ", s)
    s = re.sub(r"\n\s*([+\-=])", r" \1", s)
    s = s.replace("→", " → ")
    return flatten(s)


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
    """Split 'lhs = rhs (note with possible = inside)' into core eq + note.

    Require whitespace before the paren so algebraic products like
    `x - 5 = 3(y - 5)` are NOT treated as notes.
    """
    eq = eq.replace("\u2212", "-").strip()
    # Trailing prose note: "... = 62 (food only)" — space before '('
    m = re.match(r"^(.*?\S)\s+\(([^()]*(?:\([^()]*\)[^()]*)*)\)\s*$", eq)
    if m and "=" in m.group(1):
        note = m.group(2).strip()
        # No real English word → still algebra (e.g. "y - 5"), keep intact
        if not re.search(r"[A-Za-z]{3,}", note):
            return eq, ""
        return m.group(1).strip(), note
    if " (" in eq:
        left, right = eq.split(" (", 1)
        if "=" in left:
            note = right.rstrip(")").strip()
            if not re.search(r"[A-Za-z]{3,}", note):
                return eq, ""
            return left.strip(), note
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
    """Safe Solve steps: numbered prose + inline KaTeX (no aggressive $$ lifting)."""
    sol = normalize_solution(solution)
    if not sol:
        return ""
    sents = [s.strip() for s in re.split(r"(?<=[.!?])\s+(?=[A-Z0-9$\\\"(])", sol) if s.strip()]
    merged: list[str] = []
    for s in sents:
        if merged and re.search(r"[+\-×·/=]$", merged[-1].rstrip()):
            merged[-1] = merged[-1] + " " + s
        elif merged and merged[-1].rstrip().endswith(("vs.", "vs")):
            merged[-1] = merged[-1] + " " + s
        else:
            merged.append(s)
    out: list[str] = []
    for i, s in enumerate(merged, 1):
        s = mathify(s)
        sm = re.match(r"^(.+?[.!?])\s+(.*)$", s)
        if (
            sm
            and 12 <= len(sm.group(1)) <= 110
            and not re.search(r"[+\-×·/=]$", sm.group(1).rstrip("."))
        ):
            title = sm.group(1).rstrip(".")
            rest = sm.group(2).strip()
            block = f"**{i}. {title}.**"
            if rest:
                block += f"\n\n{rest}"
            out.append(block)
        else:
            out.append(f"**{i}.** {s}")
    return "\n\n".join(out)


def polish_numbered_step(block: str) -> str:
    """No-op: equation-lifting mangled PDF mid-line breaks."""
    return block.strip()


def polish_solve_section(solve: str) -> str:
    return (solve or "").strip()


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
        given_bits = mathify(given_clean)
        given_bits = re.sub(r"\bLet ([a-zA-Z]\d*) = ", r"Let $\1 =$ ", given_bits)
        parts.append(given_bits)
        parts.append("")

    # Defining sentence above bullets (when given absent): keep screenshot $x =$ style
    if parts and parts[0]:
        parts[0] = re.sub(r"\bLet ([a-zA-Z]\d*) = ", r"Let $\1 =$ ", parts[0])

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
    solve = repair_math_artifacts(solve)
    if solve:
        parts.append(solve)
    else:
        parts.append(
            "Eliminate or substitute carefully, back-substitute, and verify both originals."
        )

    answer = secs["answer"] or (task.get("final_answer") or "")
    parts += ["", f"**Answer.** {answer}"]

    # No coaching tips / Watch / Why — screenshots are plain tutorial prose only.
    return repair_math_artifacts("\n".join(parts).strip())


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
        expls = list(data[key].get("tactical_explanations") or [])
        data[key]["tactical_explanations"] = [
            repair_math_artifacts(e or "") for e in expls
        ]

    OV_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    # sample
    for n in [1, 2, 4, 24, 41, 47]:
        print("=" * 60, n)
        ov = data[str(n)]["solution_overview"]
        m = re.search(r"\*\*Part 3: Solve\.\*\*([\s\S]*?)(?=\n\*\*Answer|\Z)", ov)
        print((m.group(1) if m else ov)[:900])
        print()


if __name__ == "__main__":
    main()
