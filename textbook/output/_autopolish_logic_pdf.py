"""
Auto-polish PDF-sourced Chapter 1 drafts into Ch11-style MathTask JSON.
Fillers are left for human/agent authoring (still marked is_filler).
Also emits a TS-ready merged file once fillers are complete.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

BANKS = Path(__file__).with_name("ch1_logic_banks")
PARSED = Path(__file__).with_name("logic_parsed.json")


def latexify(s: str) -> str:
    if not s:
        return s
    s = s.replace("=====", "")
    s = re.sub(r"PAGE \d+", "", s)
    # Don't double-wrap
    if "$" in s:
        return s.strip()

    # Set builder
    s = re.sub(r"\{x\s*∈\s*Z\s*:", r"{x \\in \\mathbb{Z} :", s)
    s = re.sub(r"\{x\s*∈\s*N\s*:", r"{x \\in \\mathbb{N} :", s)
    s = s.replace("∈", " \\in ")
    s = s.replace("∉", " \\notin ")
    s = s.replace("∪", " \\cup ")
    s = s.replace("∩", " \\cap ")
    s = s.replace("⊆", " \\subseteq ")
    s = s.replace("⊂", " \\subset ")
    s = s.replace("∅", "\\emptyset")
    s = s.replace("△", " \\triangle ")
    s = s.replace("⇒", " \\Rightarrow ")
    s = s.replace("⇔", " \\Leftrightarrow ")
    s = s.replace("∨", " \\lor ")
    s = s.replace("∧", " \\land ")
    s = s.replace("¬", "\\neg ")
    s = s.replace("∀", "\\forall ")
    s = s.replace("∃", "\\exists ")
    s = s.replace("−", "-")
    s = s.replace("–", "-")
    s = s.replace("—", "-")
    s = s.replace("²", "^2")
    s = s.replace("³", "^3")
    s = s.replace("×", " \\times ")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def wrap_mathish(s: str) -> str:
    """Wrap expressions that look like set/logic math in $...$ if not already."""
    s = latexify(s)
    if not s or "$" in s:
        return s
    # If contains latex commands or set braces with ops, wrap whole statement carefully
    if any(
        tok in s
        for tok in (
            "\\in",
            "\\cup",
            "\\cap",
            "\\subseteq",
            "\\subset",
            "\\emptyset",
            "\\neg",
            "\\land",
            "\\lor",
            "\\Rightarrow",
            "\\Leftrightarrow",
            "\\forall",
            "\\exists",
            "\\triangle",
            "\\times",
            "\\mathbb",
        )
    ):
        # wrap contiguous math chunks - simple: wrap entire statement if short
        if len(s) < 160 and not s.lower().startswith(("the ", "if ", "at ", "there ", "both ", "exactly ", "at least", "a ", "an ", "every", "some", "no ", "all ")):
            return f"${s}$" if not s.startswith("$") else s
        # wrap latex tokens with surrounding identifiers
        def repl_cmd(m: re.Match) -> str:
            return f"${m.group(0)}$"

        # wrap set literals {..}
        s = re.sub(r"\{[^{}]{0,80}\}", lambda m: f"${m.group(0)}$", s)
        # wrap latex command sequences
        s = re.sub(
            r"(?:[A-Za-z0-9_\\]*\s*)?(?:\\(?:in|notin|cup|cap|subseteq|subset|emptyset|neg|land|lor|Rightarrow|Leftrightarrow|forall|exists|triangle|times|mathbb\{[A-Z]\}|\^\{?\d\}?)(?:\s*[A-Za-z0-9_\\]*)?)+",
            lambda m: m.group(0) if m.group(0).startswith("$") else f"${m.group(0).strip()}$",
            s,
        )
        # cleanup doubled dollars
        s = s.replace("$$", "$")
        s = re.sub(r"\$\s+\$", " ", s)
    return s


def polish_pdf_task(task: dict, parsed_by: dict) -> dict:
    if task.get("is_filler"):
        return task

    pdf = parsed_by.get(task.get("source_pdf_num"))
    ctx = wrap_mathish(task.get("context") or (pdf or {}).get("context") or "")
    # Prefer clean context from repaired parsed
    if pdf and pdf.get("context"):
        ctx = wrap_mathish(pdf["context"])
        # remove trailing "General Solution..." if leaked
        ctx = re.split(r"General Solution:", ctx, maxsplit=1)[0].strip()

    stmts = []
    src_stmts = (pdf or {}).get("statements") or task["statements"]
    for st in src_stmts:
        stmts.append(wrap_mathish(st))

    answers = list(task["answer_key"])
    letters = "ABCDE"
    tactical = []
    raw_expl = (pdf or {}).get("explanations_raw") or []
    for i in range(5):
        verdict = "true" if answers[i] else "false"
        body = ""
        if i < len(raw_expl):
            body = raw_expl[i]
            body = re.sub(r"^[a-e]\)\s*", "", body, flags=re.I)
            body = re.sub(r"^(True|False|TRUE|FALSE)\b[.\s]*", "", body)
            body = wrap_mathish(body)
        if answers[i]:
            tip = f"The claim matches the computation above, so it is **true**."
        else:
            tip = f"This is a common trap; the corrected reading shows the claim is **false**."
        tactical.append(
            f"**{letters[i]}) {stmts[i]}**  ({verdict})\n\n{body}\n\n{tip}"
        )

    general = wrap_mathish((pdf or {}).get("general_solution") or "")
    title = task.get("title") or f"Logic {task['case_id']}"
    title = re.sub(r"^\[FILLER\]\s*", "", title)
    if title.lower().startswith("task ") or title.endswith("…"):
        # derive from original pdf title if good
        pt = (pdf or {}).get("title") or ""
        if pt and not pt.lower().startswith("task "):
            title = pt
        else:
            # first 70 chars of context without math noise
            title = re.sub(r"\$.*?\$", "", ctx)[:70].strip(" .") or f"Logic case {task['sort_order']}"

    overview_parts = [
        ctx,
        "",
        "**Part 1: Setup.**",
        "",
        general or "Translate the given information into precise set/logic notation.",
        "",
        "**Part 2: Key facts.**",
        "",
    ]
    if task["subsection"].startswith("1.1") or task["subsection"].startswith("1.2"):
        overview_parts.append(
            "Use the definitions of membership, subset, union, intersection, difference, complement, and power set as needed. Compute shared objects once."
        )
    elif task["subsection"] == "1.3":
        overview_parts.append(
            "Recall: $p \\Rightarrow q$ is false only when $p$ is true and $q$ is false; $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$; the converse of an implication is not automatic."
        )
    else:
        overview_parts.append(
            "Negation switches quantifiers: $\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)$ and $\\neg \\exists x\\, P(x) \\equiv \\forall x\\, \\neg P(x)$. For deduction puzzles, exhaust consistent assignments."
        )

    overview_parts += ["", "**Part 3: Solve.**", ""]
    for i in range(5):
        body = tactical[i].split("\n\n", 1)[-1]
        overview_parts.append(f"**{i + 1}.** ({'TRUE' if answers[i] else 'FALSE'}) {stmts[i]}")
        overview_parts.append("")
        overview_parts.append(body.split("\n\n")[0])
        overview_parts.append("")
    overview_parts.append(
        "**Answer.** "
        + ", ".join(f"{letters[i]}={'TRUE' if answers[i] else 'FALSE'}" for i in range(5))
    )

    out = {
        "id": task["id"],
        "case_id": task["case_id"],
        "title": title[:100],
        "subsection": task["subsection"],
        "context": ctx,
        "statements": stmts,
        "answer_key": answers,
        "tactical_explanations": tactical,
        "difficulty_level": task["difficulty_level"],
        "sort_order": task["sort_order"],
        "solution_overview": "\n".join(overview_parts).strip(),
        "source_pdf_num": task.get("source_pdf_num"),
        "needs_polish": False,
        "is_filler": False,
    }
    return out


def main() -> None:
    parsed = {t["pdf_num"]: t for t in json.loads(PARSED.read_text(encoding="utf-8"))}
    for sid in ("1.1", "1.2", "1.3", "1.4"):
        path = BANKS / f"{sid}_INPUT.json"
        bank = json.loads(path.read_text(encoding="utf-8"))
        polished = [polish_pdf_task(t, parsed) for t in bank]
        out = BANKS / f"{sid}_AUTO.json"
        out.write_text(json.dumps(polished, ensure_ascii=False, indent=2), encoding="utf-8")
        fillers = sum(1 for t in polished if t.get("is_filler"))
        print(f"{sid}: wrote {out.name} (fillers left: {fillers})")


if __name__ == "__main__":
    main()
