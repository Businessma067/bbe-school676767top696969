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


def clean_eq_for_cases(eq: str) -> str:
    eq = eq.replace("\u2212", "-")
    # Prefer rearranged form when present (must run before multi-= peeling)
    if "which rearranges to" in eq.lower():
        right = re.split(r"which rearranges to", eq, flags=re.I)[1].strip()
        return right.split("(")[0].strip().rstrip(".")
    # Prefer final numeric result if chain: a = b - c = d
    if eq.count("=") >= 2:
        parts = [p.strip() for p in eq.split("=")]
        tail = parts[-1].split("(")[0].strip()
        if re.fullmatch(r"[+\-]?\d+(?:\.\d+)?", tail):
            left = parts[0].split("(")[0].strip()
            return f"{left} = {tail}"
    if " (" in eq:
        left = eq.split(" (")[0].strip()
        if re.search(r"[a-zA-Z].*=", left):
            return left
    return eq


def format_cases(eqs: list[str]) -> str:
    cleaned = [clean_eq_for_cases(e) for e in eqs]
    seen = []
    for e in cleaned:
        if e and e not in seen:
            seen.append(e)
    seen = seen[:4]
    if len(seen) >= 2:
        return (
            "$$\n\\begin{cases}\n"
            + " \\\\\n".join(seen[:2])
            + "\n\\end{cases}\n$$"
        )
    if seen:
        return f"$$\n{seen[0]}\n$$"
    return ""


def month_labels_from_given(given: str) -> list[str] | None:
    g = given.lower()
    if "january" in g and "february" in g:
        return ["the January row (actual data)", "the February row (actual data)"]
    return None


def describe_building_line(raw: str, index: int, row_label: str | None = None) -> str:
    raw_n = raw.replace("\u2212", "-").strip()

    if "which rearranges to" in raw_n.lower():
        left, right = re.split(r",\s*which rearranges to\s+", raw_n, flags=re.I)
        return (
            f"**Equation {index}.** Turn that story beat into symbols: "
            f"${left.strip()}$, which rearranges to "
            f"${clean_eq_for_cases('which rearranges to ' + right)}$."
        )

    note = ""
    core = raw_n
    if " (" in raw_n and raw_n.count("=") <= 1:
        core, note = raw_n.split(" (", 1)
        note = note.rstrip(")").strip()
        core = core.strip()

    # fee peel chain: 6x+4y = 70.00 - 8.00 = 62.00
    if raw_n.count("=") >= 2:
        parts = [p.strip() for p in raw_n.split("=")]
        left = parts[0]
        mid = " = ".join(parts[1:-1]) if len(parts) > 2 else parts[1]
        final = parts[-1].split("(")[0].strip()
        return (
            f"**Equation {index}.** Start from the printed total, peel the fee/tax, "
            f"then keep only food×prices: "
            f"${left} = {mid} = {final}$, so the clean system row is ${left} = {final}$."
        )

    display = clean_eq_for_cases(core if core else raw_n)
    if note:
        return f"**Equation {index}.** From {note}: ${display}$."
    if row_label:
        return f"**Equation {index}.** From {row_label}: ${display}$."
    # Hint from coefficients when bill-like: f + 40r = 29
    m = re.match(
        r"^([a-zA-Z])\s*\+\s*(\d+(?:\.\d+)?)([a-zA-Z])\s*=\s*(\d+(?:\.\d+)?)$",
        display.replace(" ", ""),
    )
    if m:
        return (
            f"**Equation {index}.** From the quoted bill with {m.group(2)} "
            f"extra units at rate ${m.group(3)}$: ${display}$."
        )
    return f"**Equation {index}.** From this independent observation: ${display}$."


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
    m = re.search(r"\*\*Solve\.\*\*\s*([\s\S]*?)(?=\n\*\*Answer\.\*\*|\Z)", text)
    if m:
        solve = m.group(1).strip()
    m = re.search(r"\*\*Answer\.\*\*\s*([^\n*]+)", text)
    if m:
        answer = m.group(1).strip()
    # trailing coach tips (**Something:** ...)
    tips = re.findall(r"(\*\*[^*]+?:\*\*[^\n]+)", text)
    # exclude What's going on / Building / Model / Solve / Answer headers that look similar
    coach_bits = []
    for t in tips:
        label = t.split(":**")[0].lower()
        if any(k in label for k in ("what", "building", "model", "solve", "answer", "setup", "computation", "direct", "where")):
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
    return "\n\n".join(f"**Step {i}.** {mathify(s)}" for i, s in enumerate(merged, 1))


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

    # Soften forced variable sermon in going if GIVEN already names them
    given_clean = (given or "").strip()
    parts = [
        f"**What's going on.** {going}",
        "",
        "**Building the system.**",
        "",
    ]

    if given_clean:
        parts.append(mathify(given_clean))
        parts.append("")

    bullets = building_from_model_lines(model_eqs, given_clean)
    if bullets:
        if given_clean:
            parts.append("In symbols that becomes:")
        else:
            parts.append("From the stem, the two independent observations become:")
        parts.append("")
        parts.extend(bullets)
        parts.append("")

    parts += [
        "**Model.**",
        "",
        format_cases(model_eqs),
        "",
        "**Solve.**",
        "",
    ]

    solve = secs["solve"] or format_solution_steps(task.get("solution") or "")
    if solve:
        parts.append(solve)
    else:
        parts.append(
            "Eliminate or substitute carefully, back-substitute, and verify both originals."
        )

    answer = secs["answer"] or (task.get("final_answer") or "")
    parts += ["", f"**Answer.** {answer}"]

    coach = (secs["coach"] or task.get("coach") or "").strip()
    if coach:
        parts += ["", coach]

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
