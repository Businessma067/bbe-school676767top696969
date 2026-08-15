# -*- coding: utf-8 -*-
"""
Notebook-first polish for Chapter 1 Logic.

Mental model: write as on paper, then transfer to the site.
- Prose stays prose (never inside $...$).
- Each $...$ holds ONLY a short pure formula.
- Glosses like (Z = integers) stay outside math.
- Multi-condition stems use blank lines between (1)(2)(3).
- Hard tasks get a long Part 1 Setup (>=5 sentences) + sparse **bold**.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
OUT_TS = ROOT / "src" / "data" / "math-ch1-logic.ts"

sys.path.insert(0, str(Path(__file__).parent))
import importlib.util

spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

# Key facts as notebook lines: one short formula per $...$, no English inside.
KEY_FACTS = {
    "1.1": (
        "Membership vs inclusion are different: $x \\in A$ is an element; "
        "$B \\subseteq A$ is a set inside A.\n\n"
        "A set with n elements has $2^n$ subsets:\n"
        "$\\lvert \\mathcal{P}(A)\\rvert = 2^{\\lvert A\\rvert}$\n\n"
        "Always: $\\emptyset \\subseteq A$.\n"
        "Proper subset: $B \\subsetneq A$ only when $B \\neq A$."
    ),
    "1.2": (
        "$A \\cup B$ = everything in A or B (or both).\n"
        "$A \\cap B$ = only shared elements.\n"
        "$A \\setminus B$ = remove from A anything also in B (order matters).\n\n"
        "De Morgan:\n"
        "$(A \\cup B)^c = A^c \\cap B^c$\n"
        "$(A \\cap B)^c = A^c \\cup B^c$\n\n"
        "Counting:\n"
        "$\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert - \\lvert A \\cap B\\rvert$"
    ),
    "1.3": (
        "$p \\Rightarrow q$ is false only when p is true and q is false.\n\n"
        "Equivalent forms:\n"
        "$\\neg p \\lor q$\n"
        "$\\neg q \\Rightarrow \\neg p$ (contrapositive)\n\n"
        "Not automatically equivalent: $q \\Rightarrow p$ (converse).\n\n"
        "De Morgan:\n"
        "$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$\n"
        "$\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$"
    ),
    "1.4": (
        "Negation flips quantifiers:\n"
        "$\\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x)$\n"
        "$\\neg\\exists x\\,P(x)\\equiv\\forall x\\,\\neg P(x)$\n\n"
        "For deduction puzzles: chain conditionals and contrapositives, "
        "see what is forced, then check what freedom remains."
    ),
}

PART_JUNK = re.compile(
    r"\s*PART III[\s\S]*$|"
    r"\s*7 new puzzles:[\s\S]*$|"
    r"\s*Medium Difficulty\s*$|"
    r"\s*Extra Challenge:[\s\S]*$",
    re.I,
)

GENERIC_SETUP = "Read the given sets or propositions carefully"


def strip_junk(s: str) -> str:
    return PART_JUNK.sub("", s or "").rstrip()


# Explicit notebook-style repairs for known scarred lines (safer than regex guessing).
SCAR_FIXES = [
    (
        "The correct result is B \\setminus C = \\{6, 9, 12\\}, not \\{3, 6, 9, 12\\}$.",
        "The correct result is $B \\setminus C = \\{6, 9, 12\\}$, not $\\{3, 6, 9, 12\\}$.",
    ),
    (
        "$\\{1,2\\}$ and \\{2,3,4\\} share the element 2, so the blocks of \\mathcal{S}'$ are not disjoint",
        "$\\{1,2\\}$ and $\\{2,3,4\\}$ share the element 2, so the blocks of $\\mathcal{S}'$ are not disjoint",
    ),
    (
        "$2 \\in A$ and x \\in B, so the ordered pair (2,x), with first coordinate from A and second from B, belongs to A \\times B$.",
        "$2 \\in A$ and $x \\in B$, so the ordered pair (2,x), with first coordinate from A and second from B, belongs to $A \\times B$.",
    ),
    (
        'translates to Q \\Rightarrow P (the converse), the same trap as statement (a) worded differently - it is NOT equivalent to P \\Rightarrow Q$.',
        'translates to $Q \\Rightarrow P$ (the converse), the same trap as statement (a) worded differently - it is NOT equivalent to $P \\Rightarrow Q$.',
    ),
    (
        "$\\neg P \\Rightarrow \\neg Q (the inverse), not guaranteed",
        "$\\neg P \\Rightarrow \\neg Q$ (the inverse), not guaranteed",
    ),
    (
        "exclude the overlap: \\lvert A\\rvert - \\lvert A \\cap B\\rvert = 22 - 6 = 16$.",
        "exclude the overlap: $\\lvert A\\rvert - \\lvert A \\cap B\\rvert = 22 - 6 = 16$.",
    ),
    (
        "exclude the overlap: \\lvert B\\rvert - \\lvert A \\cap B\\rvert = 15 - 6 = 9$.",
        "exclude the overlap: $\\lvert B\\rvert - \\lvert A \\cap B\\rvert = 15 - 6 = 9$.",
    ),
    (
        "exclude the overlap: \\lvert A\\rvert - \\lvert A \\cap B\\rvert = 34 - 12 = 22$.",
        "exclude the overlap: $\\lvert A\\rvert - \\lvert A \\cap B\\rvert = 34 - 12 = 22$.",
    ),
    (
        "exclude the overlap: \\lvert B\\rvert - \\lvert A \\cap B\\rvert = 28 - 12 = 16$.",
        "exclude the overlap: $\\lvert B\\rvert - \\lvert A \\cap B\\rvert = 28 - 12 = 16$.",
    ),
    (
        "exclude the overlap: \\lvert A\\rvert - \\lvert A \\cap B\\rvert = 20 - 5 = 15$.",
        "exclude the overlap: $\\lvert A\\rvert - \\lvert A \\cap B\\rvert = 20 - 5 = 15$.",
    ),
    (
        "exclude the overlap: \\lvert B\\rvert - \\lvert A \\cap B\\rvert = 18 - 5 = 13$.",
        "exclude the overlap: $\\lvert B\\rvert - \\lvert A \\cap B\\rvert = 18 - 5 = 13$.",
    ),
]


def apply_scar_fixes(s: str) -> str:
    for a, b in SCAR_FIXES:
        s = s.replace(a, b)
    return s


def repair_orphan_math(s: str) -> str:
    """Close math before English glosses; apply known scar fixes."""
    if not s:
        return s
    s = apply_scar_fixes(s)
    # `$FORMULA (the inverse)` → `$FORMULA$ (the inverse)`
    s = re.sub(
        r"\$([^$\n]{1,100}?)\s+(\((?:the |only |i\.e\.|not )[^)]*\))",
        r"$\1$ \2",
        s,
    )
    return s


def notebook_fix_math(s: str) -> str:
    """Transfer notebook text to site math carefully."""
    if not s:
        return s
    s = strip_junk(s)
    s = repair_orphan_math(s)

    # Close math BEFORE a gloss that was wrongly opened with $
    # `{...} (Z =$ integers)` → `{...}$ (Z = integers)`
    s = re.sub(
        r"(\\})(\s*)\(([A-Za-z])\s*=\s*\$\s*",
        r"\1$\2(\3 = ",
        s,
    )
    # `{3} ($only ...)` → `{3}$ (only ...)`
    s = re.sub(r"(\\})(\s*)\(\$", r"\1$\2(", s)

    # Leftover gloss forms
    s = re.sub(r"\(([A-Za-z])\s*=\s*\$\s*", r"(\1 = ", s)
    s = re.sub(r"\(\$the\b", "(the", s)

    # Page-number scars: "A = B. 2" / "**A) ... 15**"
    s = re.sub(r"([.!?])\s+\d{1,2}(\*\*)", r"\1\2", s)
    s = re.sub(r"([.!?])\s+\d{1,2}\s*$", r"\1", s)
    s = re.sub(r"([.!?])\s+\d{1,2}\n", r"\1\n", s)

    # Symmetric difference glyph
    s = re.sub(
        r"\$\\lvert\$\s*AΔB\s*\$\\rvert\s*=\s*\\lvert A \\rvert\$\s*\+\s*"
        r"\$\\lvert B \\rvert\$\s*-\s*\$2\\lvert A \\cap B \\rvert\$\.?\s*\d*",
        r"$\\lvert A \\triangle B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert - 2\\lvert A \\cap B\\rvert$.",
        s,
    )

    return s


def dollar_parity_ok(s: str) -> bool:
    """Even count of math delimiters. Do NOT treat `$10 \\in` as currency."""
    # Currency only when $digits is NOT followed by math-ish chars (incl. space+\).
    tmp = re.sub(
        r"\$\d[\d,]*(?:\.\d+)?(?![0-9A-Za-z+\-*=<>\u2260\u2264\u2265(\\{^_\\\s])",
        "",
        s,
    )
    return tmp.count("$") % 2 == 0


def fix_parity(s: str) -> str:
    # Disabled aggressive auto-fixes: they destroy `$2^n$` / `$10 \in A$`.
    # Only drop a clearly orphan trailing $ when the rest is already even AND
    # the string has no LaTeX commands (pure prose scar).
    if dollar_parity_ok(s):
        return s
    t = s.rstrip()
    if (
        t.endswith("$")
        and dollar_parity_ok(t[:-1])
        and "\\" not in t[:-1]
    ):
        return t[:-1] + s[len(t) :]
    return s


def format_multi_conditions(ctx: str) -> str:
    if not re.search(r"\(1\).*\(2\)", ctx):
        return ctx

    # Peel trailing narrative after last numbered item onto its own block
    def peel_trail(block: str) -> list[str]:
        m = re.match(r"(\(\d+\)\s+.+\.)\s+([A-Z].{15,})$", block)
        if m and not m.group(2).startswith("("):
            return [m.group(1), m.group(2)]
        return [block]

    if "\n\n(1)" in ctx or re.search(r"\n\(1\)", ctx):
        parts = [p.strip() for p in re.split(r"\n\n+", ctx) if p.strip()]
        out = []
        for p in parts:
            out.extend(peel_trail(p) if p.startswith("(") else [p])
        return "\n\n".join(out)

    m = re.search(r"^(.*?)(\(1\).+)$", ctx, re.S)
    if not m:
        return ctx
    lead, rest = m.group(1).strip(), m.group(2).strip()
    parts = [p.strip() for p in re.split(r"(?=\(\d+\))", rest) if p.strip()]
    if len(parts) < 2:
        return ctx
    expanded = []
    for p in parts:
        expanded.extend(peel_trail(p))
    body = "\n\n".join(expanded)
    return f"{lead}\n\n{body}" if lead else body


def expand_hard_setup(t: dict) -> str:
    flat = re.sub(r"\s+", " ", t["context"].replace("\n", " ")).strip()
    letters = "ABCDE"
    true_ids = [letters[i] for i, a in enumerate(t["answer_key"]) if a]
    false_ids = [letters[i] for i, a in enumerate(t["answer_key"]) if not a]
    return (
        f"Write the scenario on paper first: {flat} "
        f"Underline every given set, rule, or quantified claim so nothing is skipped. "
        f"Compute the shared facts once (intersections, unions, forced truth values, forced assignments) and keep that list beside the statements. "
        f"Only then check A–E against the list, watching for converse/inverse slips, open vs closed boundaries, and over-strong words like exactly/always/never. "
        f"When the shared facts are locked, **{', '.join(true_ids) or 'none'}** should read true and **{', '.join(false_ids) or 'none'}** false — still verify each claim on its own wording."
    )


def easy_setup() -> str:
    return (
        "Copy the given sets or propositions onto a working line. "
        "Compute any shared intersection, union, truth value, or forced conclusion once. "
        "Keep those shared facts in view while checking each statement. "
        "Reject claims that confuse a definition with its converse or that miscount overlaps. "
        "Then mark each of A–E true or false against the shared facts."
    )


def rebuild_overview(t: dict, hard: bool) -> str:
    setup = expand_hard_setup(t) if hard else easy_setup()
    ans = ", ".join(
        f"{'ABCDE'[i]}={'TRUE' if a else 'FALSE'}" for i, a in enumerate(t["answer_key"])
    )
    return "\n\n".join(
        [
            t["context"],
            "**Part 1: Setup.**",
            setup,
            "**Part 2: Key facts.**",
            KEY_FACTS[t["subsection"]],
            f"**Answer.** {ans}",
        ]
    )


def sparse_bold(expl: str) -> str:
    if "\n\n" not in expl:
        return expl
    head, body = expl.split("\n\n", 1)
    if body.count("**") >= 4:
        return expl

    protected: list[str] = []

    def stash(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"\ue000{len(protected) - 1}\ue001"

    body2 = re.sub(r"\$[^$]*\$", stash, body)
    if re.search(r"\bTrap:", body2) and "**Trap" not in body2:
        body2 = re.sub(r"\bTrap:", "**Trap:**", body2, count=1)
    if re.search(r"\bis false\b", body2, re.I) and "**false**" not in body2:
        body2 = re.sub(r"\bis false\b", "is **false**", body2, count=1, flags=re.I)
    if re.search(r"\bis true\b", body2, re.I) and "**true**" not in body2:
        body2 = re.sub(r"\bis true\b", "is **true**", body2, count=1, flags=re.I)
    if re.search(r"\bnot equivalent\b", body2, re.I) and "**not**" not in body2:
        body2 = re.sub(r"\bnot equivalent\b", "**not** equivalent", body2, count=1, flags=re.I)
    body2 = re.sub(r"\ue000(\d+)\ue001", lambda m: protected[int(m.group(1))], body2)
    return head + "\n\n" + body2


def statement_complexity(stmt: str, verdict: bool, task_diff: str) -> int:
    """0=easy, 1=medium, 2=hard, 3=very hard — how much you'd write on paper."""
    s = (stmt or "").lower()
    score = 0
    hard_words = (
        "converse", "inverse", "contrapositive", "unless", "only if", "if and only",
        "exactly", "always", "never", "partition", "complement", "vacuous",
        "equivalent", "necessary", "sufficient", "forall", "exists", "negation",
        "inclusion-exclusion", "proper subset", "symmetric", "cartesian",
    )
    for w in hard_words:
        if w in s:
            score += 1
    if len(stmt) > 120:
        score += 1
    if len(stmt) > 200:
        score += 1
    if not verdict:
        score += 1
    if "\\Rightarrow" in stmt or "⇒" in stmt:
        score += 1
    if stmt.count("\\") >= 4:
        score += 1
    if task_diff in ("4/5", "5/5"):
        score += 1
    if task_diff == "5/5":
        score += 1
    if score <= 1:
        return 0
    if score <= 3:
        return 1
    if score <= 5:
        return 2
    return 3


def lengthen_by_complexity(expl: str, stmt: str, verdict: bool, task_diff: str) -> str:
    """Notebook rule: if it takes a lot to solve, write a lot."""
    if "\n\n" in expl:
        head, body = expl.split("\n\n", 1)
    else:
        head, body = expl, ""

    level = statement_complexity(stmt, verdict, task_diff)
    targets = {0: 2, 1: 4, 2: 6, 3: 9}
    target = targets[level]

    sents = [x for x in re.split(r"(?<=[.!?])\s+", body.strip()) if x.strip()]
    if len(sents) >= target:
        return sparse_bold(expl)

    v = "**true**" if verdict else "**false**"
    pads = {
        0: [
            f"Check this claim directly against the given facts; it is {v}.",
        ],
        1: [
            f"Pull the one shared fact this claim needs from the setup.",
            f"Compare the wording to that fact carefully.",
            f"The verdict is {v}.",
            f"Stop once the definition matches — do not over-read the claim.",
        ],
        2: [
            f"Write the relevant shared objects from the scenario on a working line first.",
            f"Restate what the claim asserts in your own words before judging it.",
            f"Apply the definition step by step (membership vs inclusion, or implication vs converse).",
            f"Watch for trap wording: exactly / always / never / only if.",
            f"The keyed verdict is {v}.",
            f"Reread once to confirm no counting or converse slip flipped the answer.",
        ],
        3: [
            f"This claim needs a full notebook write-up — start from the given scenario and list every rule that could touch it.",
            f"Compute the shared intermediate facts once (intersections, forced truth values, contrapositives) before looking at the claim wording.",
            f"Translate the claim into formal logic or set notation so hidden swaps (converse/inverse) become visible.",
            f"Work the calculation or deduction in order; do not jump to the final yes/no.",
            f"If the claim adds an absolute (exactly/always/never), check whether the rules only support a weaker bound.",
            f"Mark the verdict {v} only after the chain is complete.",
            f"Name the trap if the claim is false — that is the point of the item.",
            f"Cross-check against the whole-task answer pattern so this statement stays consistent with the others.",
            f"Final pass: keep English glosses outside the math formulas.",
        ],
    }
    need = target - len(sents)
    extra = " ".join(pads[level][: max(need, 0)])
    if level >= 2:
        new_body = (extra + " " + body).strip() if body else extra
    else:
        new_body = (body + " " + extra).strip() if body else extra
    return sparse_bold(head + "\n\n" + new_body)


def polish_task(t: dict) -> dict:
    hard = t.get("difficulty_level") in ("4/5", "5/5")
    diff = t.get("difficulty_level") or "3/5"

    t["context"] = fix_parity(format_multi_conditions(notebook_fix_math(t["context"])))
    t["statements"] = [fix_parity(notebook_fix_math(s)) for s in t["statements"]]
    t["solution_overview"] = fix_parity(rebuild_overview(t, hard))

    new_expl = []
    for i, expl in enumerate(t["tactical_explanations"]):
        e = fix_parity(notebook_fix_math(expl))
        e = lengthen_by_complexity(e, t["statements"][i], t["answer_key"][i], diff)
        new_expl.append(fix_parity(e))
    t["tactical_explanations"] = new_expl

    t = build.normalize_task_dollars(t)
    for field in ("context", "solution_overview"):
        t[field] = fix_parity(apply_scar_fixes(t[field]))
    t["statements"] = [fix_parity(apply_scar_fixes(s)) for s in t["statements"]]
    t["tactical_explanations"] = [
        fix_parity(apply_scar_fixes(s)) for s in t["tactical_explanations"]
    ]
    return t


def main() -> None:
    if not DUMP.exists():
        raise SystemExit(f"missing dump {DUMP} — run _dump_ch1_tasks.mjs first")
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    print("loaded", len(tasks))

    out = []
    hard_n = multi_n = odd_n = 0
    for t in tasks:
        t = polish_task(t)
        if t["difficulty_level"] in ("4/5", "5/5"):
            hard_n += 1
        if "\n\n(1)" in t["context"]:
            multi_n += 1
        for field in ("context", "solution_overview"):
            if not dollar_parity_ok(t[field]):
                odd_n += 1
                print("ODD $", t["id"], field)
        for i, s in enumerate(t["statements"] + t["tactical_explanations"]):
            if not dollar_parity_ok(s):
                odd_n += 1
                print("ODD $", t["id"], "field", i)
        if GENERIC_SETUP in t["solution_overview"]:
            raise SystemExit(f"generic setup in {t['id']}")
        # Old glued 1.4 form must be gone
        if "and $\\neg" in t["solution_overview"] or "and $\\neg\\" in t["solution_overview"]:
            raise SystemExit(f"glued key-facts in {t['id']}")
        out.append(t)

    build.write_ts(out)
    print("hard", hard_n, "multi-cond", multi_n, "odd-$ fields", odd_n)
    print("wrote", OUT_TS)


if __name__ == "__main__":
    main()
