# -*- coding: utf-8 -*-
"""Normalize mixed explanation override JSON shapes into one canonical file."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
OUT = ROOT / "textbook" / "output"
RAW = json.loads((OUT / "linear_eq_60_raw.json").read_text(encoding="utf-8"))
BY = {t["num"]: t for t in RAW}

SOURCES = [
    OUT / "ch5_expl_override_01_15.json",
    OUT / "ch5_expl_override_16_30.json",
    OUT / "ch5_expl_override_31_45.json",
    OUT / "ch5_expl_override_46_60.json",
]


def light_mathify(text: str) -> str:
    """Wrap plain algebra fragments for KaTeX without touching money."""
    money = {}

    def keep(m: re.Match) -> str:
        k = f"§M{len(money)}§"
        money[k] = m.group(0)
        return k

    work = re.sub(r"\$\d{1,3}(?:,\d{3})*(?:\.\d+)?", keep, text)
    work = re.sub(
        r"(?<![A-Za-z0-9$§])("
        r"[+\-]?(?:\d*\.?\d*)?[a-zA-Z]"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r"\s*=\s*[+\-]?\d+(?:\.\d+)?"
        r"(?:\s*[+\-]\s*(?:\d*\.?\d*)?[a-zA-Z]?)*"
        r")(?![A-Za-z0-9$§])",
        r"$\1$",
        work,
    )
    for k, v in money.items():
        work = work.replace(k, v)
    return work


def eqs_from_model(model: str) -> list[str]:
    eqs = []
    for ln in (model or "").splitlines():
        ln = ln.strip()
        if "=" not in ln:
            continue
        if " (" in ln:
            left = ln.split(" (")[0].strip()
            if re.search(r"[a-zA-Z].*=", left):
                ln = left
        eqs.append(ln)
    # unique preserve order
    out = []
    for e in eqs:
        if e not in out:
            out.append(e)
    return out[:4]


def format_cases(eqs: list[str]) -> str:
    if len(eqs) >= 2:
        return (
            "$$\n\\begin{cases}\n"
            + " \\\\\n".join(eqs[:2])
            + "\n\\end{cases}\n$$"
        )
    if eqs:
        return f"$$\n{eqs[0]}\n$$"
    return ""


def build_overview_from_parts(parts: dict, task: dict) -> str:
    going = parts.get("what's_going_on") or parts.get("whats_going_on") or ""
    cases = parts.get("model_cases") or ""
    steps = parts.get("solve_steps") or ""
    answer = parts.get("answer") or task.get("final_answer") or ""
    coach = parts.get("coach") or task.get("coach") or ""

    eqs = [ln.strip() for ln in cases.splitlines() if "=" in ln]
    if not eqs:
        eqs = eqs_from_model(task.get("model") or "")

    # Number step sentences if plain prose
    step_block = steps.strip()
    if step_block and "**Step" not in step_block:
        sents = re.split(r"(?<=[.!?])\s+", step_block)
        sents = [s.strip() for s in sents if s.strip()]
        step_block = "\n\n".join(f"**Step {i}.** {s}" for i, s in enumerate(sents, 1))

    chunks = [
        f"**What's going on.** {going.strip()}",
        "",
        "**Model.**",
        "",
        format_cases(eqs),
        "",
        "**Solve.**",
        "",
        step_block,
        "",
        f"**Answer.** {answer.strip()}",
    ]
    if coach and str(coach).strip():
        chunks += ["", str(coach).strip()]
    return "\n".join(chunks).strip()


def format_letter_block(letter: str, stmt: str, verdict: str, reasoning: str, tip: str) -> str:
    v = verdict.strip().upper()
    if v.startswith("T"):
        v = "TRUE"
    elif v.startswith("F"):
        v = "FALSE"
    body = reasoning.strip()
    tip = (tip or "").strip()
    # Strip label if agent already included it
    tip = re.sub(r"^\*\*(Watch|Why it fails)\.\*\*\s*", "", tip).strip()
    tip = tip.rstrip(".")
    parts = [f"**{letter}) {stmt}** — **{v}**", "", body]
    # Tip selection happens later in polish_ch5_tips.py; keep here only if tip looks trap-like
    if tip and (
        re.search(
            r"(?i)\b(fee|tax|gap|transfer|percent|%|round|threshold|convert|distractor|"
            r"more than|less than|net|gross|loyalty|forecast|mis-|double)\b",
            tip + " " + stmt,
        )
    ):
        label = "**Watch.**" if v == "TRUE" else "**Why it fails.**"
        parts += ["", f"{label} {tip}"]
    return "\n".join(parts).strip()


def parse_verdict_blob(blob: str, stmt: str, letter: str) -> str:
    """Parse A–E blobs from 46–60 agent format."""
    text = blob.replace("\r\n", "\n").strip()
    # Verdict line
    vm = re.search(r"Verdict:\s*(True|False)", text, flags=re.I)
    verdict = "TRUE" if vm and vm.group(1).lower() == "true" else "FALSE"
    # Tip line
    tip_m = re.search(r"\nTip:\s*(.+)$", text, flags=re.I | re.S)
    tip = tip_m.group(1).strip() if tip_m else ""
    tip = re.sub(r"\s+", " ", tip)
    # Reasoning: prefer Solve + Model lines compressed
    going = re.search(r"What's going on:\s*(.+?)(?:\nModel:|\nSolve:|\nAnswer:|\nTip:|\Z)", text, flags=re.I | re.S)
    model = re.search(r"Model:\s*(.+?)(?:\nSolve:|\nAnswer:|\nTip:|\Z)", text, flags=re.I | re.S)
    solve = re.search(r"Solve:\s*(.+?)(?:\nAnswer:|\nTip:|\Z)", text, flags=re.I | re.S)
    bits = []
    if going:
        bits.append(flatten(going.group(1)))
    if model:
        bits.append("**Setup.** " + flatten(model.group(1)))
    if solve:
        bits.append("**Computation.** " + flatten(solve.group(1)))
    reasoning = "\n\n".join(bits)
    if not reasoning:
        reasoning = re.sub(r"Verdict:\s*(True|False)\s*", "", text, flags=re.I)
        reasoning = re.sub(r"\nTip:.*", "", reasoning, flags=re.I | re.S).strip()
        reasoning = re.sub(r"\s+", " ", reasoning)
    prefix = "**Watch.** " if verdict == "TRUE" else "**Why it fails.** "
    if tip:
        tip = tip.strip().rstrip(".")
        if not tip.startswith("**"):
            tip = prefix + tip
    # Always include tip text for polish pass to decide; attach with blank line
    if tip:
        return format_letter_block(
            letter,
            stmt,
            verdict,
            reasoning,
            re.sub(r"^\*\*(Watch|Why it fails)\.\*\*\s*", "", tip).strip(),
        )
    return format_letter_block(letter, stmt, verdict, reasoning, "")


def normalize_entry(num: int, raw_entry: dict | list) -> dict:
    task = BY[num]
    letters = "ABCDE"

    # Canonical already
    if isinstance(raw_entry, dict) and isinstance(raw_entry.get("tactical_explanations"), list):
        return {
            "solution_overview": raw_entry["solution_overview"],
            "tactical_explanations": raw_entry["tactical_explanations"],
        }

    # 31–45 structured
    if isinstance(raw_entry, dict) and isinstance(raw_entry.get("tactical_explanations"), dict):
        overview = raw_entry.get("solution_overview")
        if isinstance(overview, dict):
            overview_md = build_overview_from_parts(overview, task)
        else:
            overview_md = str(overview or "")
        te = raw_entry["tactical_explanations"]
        expls = []
        for i, L in enumerate(letters):
            cell = te.get(L) or te.get(L.lower())
            stmt = task["statements"][i]
            if isinstance(cell, dict):
                expls.append(
                    format_letter_block(
                        L,
                        stmt,
                        str(cell.get("verdict", "")),
                        str(cell.get("reasoning", "")),
                        str(cell.get("tip", "")),
                    )
                )
            else:
                expls.append(str(cell))
        return {"solution_overview": overview_md, "tactical_explanations": expls}

    # 46–60 letter-keyed strings + need synthetic overview from task
    if isinstance(raw_entry, dict) and all(k in raw_entry for k in letters):
        # Build overview from task raw fields (fallback generator style will be applied if empty)
        # Prefer a compact overview assembled from model/solution
        eqs = eqs_from_model(task.get("model") or "")
        sol = re.sub(r"\s+", " ", (task.get("solution") or "").strip())
        sol = re.sub(r"Final Answer:\s*.*", "", sol, flags=re.S).strip()
        sents = [s.strip() for s in re.split(r"(?<=[.!?])\s+(?=[A-Z0-9$\\\"(])", sol) if s.strip()]
        # Keep a trailing audit clause attached when a sentence was cut on "vs."
        merged_sents: list[str] = []
        for s in sents:
            if merged_sents and merged_sents[-1].rstrip().endswith(("vs.", "vs")):
                merged_sents[-1] = merged_sents[-1] + " " + s
            else:
                merged_sents.append(s)
        steps = "\n\n".join(
            f"**Step {i}.** {light_mathify(s)}" for i, s in enumerate(merged_sents, 1)
        )
        ctx = (task.get("context") or "").strip()
        first = ". ".join(ctx.split(". ")[:2]).strip()
        if first and not first.endswith("."):
            first += "."
        # Slightly richer lead for concentration / affine / age cases
        if re.search(r"\bmg/?mL|concentration\b", ctx, flags=re.I):
            first += (
                " The two unknowns are the concentrations; batch volumes are known coefficients "
                "(convert L → mL first)."
            )
        overview_md = "\n".join(
            [
                f"**What's going on.** {first}",
                "",
                "**Model.**",
                "",
                format_cases(eqs),
                "",
                "**Solve.**",
                "",
                steps or "Eliminate or substitute carefully, then back-substitute.",
                "",
                f"**Answer.** {task.get('final_answer') or ''}",
            ]
        ).strip()
        coach = (task.get("coach") or "").strip()
        if re.search(r"\bmg/?mL|concentration|suspension\b", ctx + " " + (task.get("final_answer") or ""), flags=re.I):
            coach = (
                "**Concentration:** Volumes are the known coefficients; the unknowns are the two "
                "concentrations (mg/mL). Convert every volume to the same unit before multiplying."
            )
        elif "Mixture:" in coach and re.search(r"\bconcentration\b", ctx, flags=re.I):
            coach = ""
        if coach:
            overview_md += "\n\n" + coach

        expls = []
        for i, L in enumerate(letters):
            expls.append(parse_verdict_blob(raw_entry[L], task["statements"][i], L))
        return {"solution_overview": overview_md, "tactical_explanations": expls}

    raise ValueError(f"Unrecognized override shape for task {num}: {type(raw_entry)} keys={list(raw_entry)[:8] if isinstance(raw_entry, dict) else None}")


def main() -> None:
    merged: dict[str, dict] = {}
    for path in SOURCES:
        data = json.loads(path.read_text(encoding="utf-8"))
        for key, val in data.items():
            num = int(key)
            merged[str(num)] = normalize_entry(num, val)
            print(f"{path.name}: normalized {num}")

    # Verdict sanity
    for key, val in merged.items():
        t = BY[int(key)]
        for i, expl in enumerate(val["tactical_explanations"]):
            want = "TRUE" if t["answer_key"][i] else "FALSE"
            if f"— **{want}**" not in expl:
                print(f"WARN verdict {key}{'ABCDE'[i]} expected {want}")

    out_path = OUT / "ch5_expl_overrides.json"
    out_path.write_text(json.dumps(merged, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", out_path, "count", len(merged))


if __name__ == "__main__":
    main()
