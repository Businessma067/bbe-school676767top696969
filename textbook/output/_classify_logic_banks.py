"""
Classify parsed LOGIC.pdf tasks into Chapter 1 subsections and emit draft banks.
New filler slots are left as stubs for authoring agents.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PARSED = Path(__file__).with_name("logic_parsed.json")
OUT_DIR = Path(__file__).with_name("ch1_logic_banks")
OUT_DIR.mkdir(exist_ok=True)

SUBSECTIONS = [
    {
        "id": "1.1",
        "title": "Sets: Elements, Subsets & Power Sets",
        "pdf_nums": [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 14, 17, 18, 19, 21],
    },
    {
        "id": "1.2",
        "title": "Set Operations, Complements & Counting",
        "pdf_nums": [6, 7, 13, 15, 16, 20, 22],
    },
    {
        "id": "1.3",
        "title": "Propositional Logic & Implications",
        # 23-52 inclusive = 30
        "pdf_nums": list(range(23, 53)),
    },
    {
        "id": "1.4",
        "title": "Quantifiers, Validity & Deduction",
        # 58-87 inclusive = 30
        "pdf_nums": list(range(58, 88)),
    },
]

# leftover PDF 53-57 reserved as inspiration for unique 1.2/1.1 fillers (not copied 1:1)
LEFTOVER = [53, 54, 55, 56, 57]


def score_to_diff(score: int | None, subsection: str, idx: int) -> str:
    if score is None:
        # extra puzzles → hard end of 1.4
        return "5/5" if idx >= 20 else "4/5"
    if score <= 2:
        return "1/5"
    if score == 3:
        return "2/5"
    if score == 4:
        return "3/5"
    if score == 5:
        return "4/5"
    return "5/5"


def clean_math_text(s: str) -> str:
    """Light cleanup of PDF extraction scars; agents will fully LaTeX-ify."""
    if not s:
        return s
    replacements = [
        ("\u2208", " ∈ "),
        ("\u2209", " ∉ "),
        ("\u2229", " ∩ "),
        ("\u222a", " ∪ "),
        ("\u2286", " ⊆ "),
        ("\u2282", " ⊂ "),
        ("\u2205", "∅"),
        ("\u2206", " △ "),
        ("\u21d2", " ⇒ "),
        ("\u21d4", " ⇔ "),
        ("\u00ac", "¬"),
        ("\u2227", " ∧ "),
        ("\u2228", " ∨ "),
        ("\u2200", "∀"),
        ("\u2203", "∃"),
    ]
    for a, b in replacements:
        s = s.replace(a, b)
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\s+\n", "\n", s)
    return s.strip()


def letter(i: int) -> str:
    return "ABCDE"[i]


def draft_from_pdf(t: dict, subsection: str, sort_order: int, global_n: int) -> dict:
    stmts = [clean_math_text(x) for x in t["statements"]]
    answers = list(t["answer_key"])
    raw_expl = t.get("explanations_raw") or []
    tactical = []
    for i in range(5):
        verdict = "true" if answers[i] else "false"
        body = clean_math_text(raw_expl[i]) if i < len(raw_expl) else ""
        # strip leading "a) True. " style prefix if present
        body = re.sub(r"^[a-e]\)\s*((?:True|False|TRUE|FALSE)\b[.\s]*)?", "", body, flags=re.I)
        tactical.append(
            f"**{letter(i)}) {stmts[i]}**  ({verdict})\n\n{body}".strip()
        )

    general = clean_math_text(t.get("general_solution") or "")
    context = clean_math_text(t.get("context") or "")
    if not context and general:
        # first clause as soft context
        context = general[:280]

    overview = f"""{context}

**Part 1: Setup.**

{general}

**Part 2: Check each claim.**

"""
    for i in range(5):
        overview += f"**{i + 1}.** ({'TRUE' if answers[i] else 'FALSE'}) {stmts[i]}\n\n"
    overview += (
        "**Answer.** "
        + ", ".join(
            f"{letter(i)}={'TRUE' if answers[i] else 'FALSE'}" for i in range(5)
        )
    )

    title = clean_math_text(t.get("title") or f"Task {t['pdf_num']}")
    if title.lower().startswith("task "):
        # invent a short title from context
        title = (context[:60] + "…") if context else f"Logic Task {t['pdf_num']}"

    return {
        "id": f"math-1-{global_n}",
        "case_id": f"MATH 1.{global_n:02d}",
        "title": title.rstrip("…").strip()[:90],
        "subsection": subsection,
        "context": context,
        "statements": stmts,
        "answer_key": answers,
        "tactical_explanations": tactical,
        "difficulty_level": score_to_diff(t.get("difficulty_score_8"), subsection, sort_order - 1),
        "sort_order": sort_order,
        "solution_overview": overview.strip(),
        "source_pdf_num": t["pdf_num"],
        "needs_polish": True,
        "is_filler": False,
    }


def filler_stub(subsection: str, sort_order: int, global_n: int, diff: str, theme: str) -> dict:
    return {
        "id": f"math-1-{global_n}",
        "case_id": f"MATH 1.{global_n:02d}",
        "title": f"[FILLER] {theme}",
        "subsection": subsection,
        "context": "",
        "statements": ["", "", "", "", ""],
        "answer_key": [True, False, True, False, True],
        "tactical_explanations": ["", "", "", "", ""],
        "difficulty_level": diff,
        "sort_order": sort_order,
        "solution_overview": "",
        "source_pdf_num": None,
        "needs_polish": True,
        "is_filler": True,
        "filler_theme": theme,
    }


# Unique filler themes (NOT 1:1 copies of leftover PDF). Topic-aligned.
FILLERS_1_1 = [
    ("1/5", "Library tags: membership vs listing"),
    ("1/5", "Workshop tools: proper subsets"),
    ("1/5", "Badge colours: power set size"),
    ("1/5", "Integer solutions of x^2=16"),
    ("2/5", "Even digits set-builder equality"),
    ("2/5", "Team roster: element vs subset trap"),
    ("2/5", "Empty set as subset and as element"),
    ("2/5", "Singleton power set"),
    ("3/5", "Partitions of a 4-element set"),
    ("3/5", "Counting k-subsets of a committee"),
    ("3/5", "Set equality after reordering and repeats"),
    ("4/5", "Natural vs integer set-builder roots"),
    ("4/5", "Infinite set of even integers cardinality intuition"),
    ("4/5", "Power set of a power set size"),
    ("5/5", "Nested set membership chain a∈{{a}}"),
]

FILLERS_1_2 = [
    ("1/5", "Cafe menu: union of vegan and gluten-free"),
    ("1/5", "Shift workers: intersection of morning and weekend"),
    ("1/5", "Warehouse SKUs: set difference A\\\\B"),
    ("1/5", "Lab samples: complement in a finite universe"),
    ("2/5", "De Morgan on security camera zones"),
    ("2/5", "Cartesian product of sizes and colours"),
    ("2/5", "Symmetric difference of two mailing lists"),
    ("2/5", "Disjointness of day and night cohorts"),
    ("2/5", "Complement of an intersection (helpdesk)"),
    ("3/5", "Venn overlap: app users of Maps and Music"),
    ("3/5", "Inclusion-exclusion for two course enrolments"),
    ("3/5", "Triple intersection of tags on tickets"),
    ("3/5", "Ordered pairs from department codes"),
    ("3/5", "Irrigation zones: frost OR drought rule as union"),
    ("3/5", "Survey: neither A nor B via De Morgan"),
    ("4/5", "Three-set inclusion-exclusion partial data"),
    ("4/5", "Complement of symmetric difference identity check"),
    ("4/5", "Cartesian product non-commutativity"),
    ("4/5", "Partition induced by equivalence classes (light)"),
    ("4/5", "Counting functions via |B|^|A| as |A→B|"),
    ("5/5", "Infinite countable union of finite sets"),
    ("5/5", "Inclusion-exclusion with three departments"),
    ("5/5", "Complement identities chain with two De Morgans"),
]


def main() -> None:
    parsed = {t["pdf_num"]: t for t in json.loads(PARSED.read_text(encoding="utf-8"))}
    global_n = 1
    plan = {
        "subsections": [],
        "leftover_pdf_for_inspiration_only": LEFTOVER,
        "note": "Fillers must be unique scenarios (not 1:1 copies of leftover PDF tasks).",
    }

    all_tasks = []
    for sub in SUBSECTIONS:
        sid = sub["id"]
        bank = []
        sort_order = 1
        for num in sub["pdf_nums"]:
            if num not in parsed:
                raise SystemExit(f"missing pdf task {num}")
            bank.append(draft_from_pdf(parsed[num], sid, sort_order, global_n))
            sort_order += 1
            global_n += 1

        fillers = FILLERS_1_1 if sid == "1.1" else FILLERS_1_2 if sid == "1.2" else []
        for diff, theme in fillers:
            bank.append(filler_stub(sid, sort_order, global_n, diff, theme))
            sort_order += 1
            global_n += 1

        # ensure exactly 30
        if len(bank) != 30:
            raise SystemExit(f"{sid} has {len(bank)} tasks, expected 30")

        # renumber sort_order and ids sequentially within chapter already via global_n
        out = OUT_DIR / f"{sid}_INPUT.json"
        out.write_text(json.dumps(bank, ensure_ascii=False, indent=2), encoding="utf-8")
        pdf_count = sum(1 for x in bank if not x["is_filler"])
        filler_count = sum(1 for x in bank if x["is_filler"])
        plan["subsections"].append(
            {
                "id": sid,
                "title": sub["title"],
                "pdf_count": pdf_count,
                "filler_count": filler_count,
                "file": str(out.name),
            }
        )
        all_tasks.extend(bank)
        print(f"{sid}: {pdf_count} pdf + {filler_count} fillers = {len(bank)}")

    (OUT_DIR / "_plan.json").write_text(
        json.dumps(plan, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT_DIR / "_all_draft.json").write_text(
        json.dumps(all_tasks, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print("total", len(all_tasks))
    print("wrote", OUT_DIR)


if __name__ == "__main__":
    main()
