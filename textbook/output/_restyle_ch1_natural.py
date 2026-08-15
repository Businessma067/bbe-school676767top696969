# -*- coding: utf-8 -*-
"""
Restyle entire Ch1 Logic bank to match the user's explanation prompt:

- Situation once at the start (solution_overview), then A–E without repeating it
- Letters A–E (not numbered step titles)
- No "Part 1", "Why:", "Conclusion", "Step 1" labels
- Natural spoken phrasing
- Binomial verdict headers: **A.** → True / False
- Multi-rule stems as vertical lists
- Longer write-ups where the claim is hard (no canned notebook padding)
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
sys.path.insert(0, str(Path(__file__).parent))

import importlib.util

spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

TEMPLATE_JUNK = re.compile(
    r"(Write the scenario on paper first:.*?(?:own wording\.|freedom remains\.))"
    r"|(Start from the shared notebook facts.*?(?:own wording\.|slips\.))"
    r"|(This claim needs a full notebook write-up.*?(?:formulas\.|others\.))"
    r"|(Pull the one shared fact.*?over-read the claim\.)"
    r"|(Write the relevant shared objects.*?flipped the answer\.)"
    r"|(Check this claim directly against the given facts; it is \*\*(?:true|false)\*\*\.)"
    r"|(Copy the given sets or propositions onto a working line\..*?shared facts\.)"
    r"|(\*\*Part 1: Setup\.\*\*)"
    r"|(\*\*Part 2: Key facts\.\*\*)"
    r"|(Read the given sets or propositions carefully[^\n]*)"
    r"|(Underline every given set[^\n]*)",
    re.S | re.I,
)

PART_JUNK = re.compile(
    r"\s*PART III[\s\S]*$|"
    r"\s*7 new puzzles:[\s\S]*$|"
    r"\s*Medium Difficulty\s*$|"
    r"\s*Extra Challenge:[\s\S]*$",
    re.I,
)

HEADER_OLD = re.compile(
    r"^\*\*[A-E]\)\s*(.+?)\*\*\s*\((true|false)\)\s*\n*",
    re.I | re.S,
)
HEADER_BINOM = re.compile(
    r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n*",
    re.I,
)

KEY_FACTS = {
    "1.1": (
        "Membership and inclusion are different ideas: $x \\in A$ means a single object "
        "sits in A, while $B \\subseteq A$ means every element of B also sits in A. "
        "A set with n elements has $2^n$ subsets, written "
        "$\\lvert \\mathcal{P}(A)\\rvert = 2^{\\lvert A\\rvert}$. "
        "The empty set is always a subset: $\\emptyset \\subseteq A$. "
        "A proper subset needs $B \\subsetneq A$, which also requires $B \\neq A$."
    ),
    "1.2": (
        "$A \\cup B$ keeps everything that appears in A or in B (or both). "
        "$A \\cap B$ keeps only the shared elements. "
        "$A \\setminus B$ starts from A and drops anything that also sits in B — order matters. "
        "De Morgan says $(A \\cup B)^c = A^c \\cap B^c$ and $(A \\cap B)^c = A^c \\cup B^c$. "
        "For sizes, $\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert - \\lvert A \\cap B\\rvert$."
    ),
    "1.3": (
        "An implication $p \\Rightarrow q$ fails only when p is true and q is false. "
        "It matches $\\neg p \\lor q$ and the contrapositive $\\neg q \\Rightarrow \\neg p$, "
        "but it does not automatically match the converse $q \\Rightarrow p$. "
        "De Morgan for logic: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$ and "
        "$\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$."
    ),
    "1.4": (
        "Negation flips quantifiers: "
        "$\\neg\\forall x\\,P(x)\\equiv\\exists x\\,\\neg P(x)$ and "
        "$\\neg\\exists x\\,P(x)\\equiv\\forall x\\,\\neg P(x)$. "
        "In rule puzzles, chain the conditionals and their contrapositives until the forced "
        "assignments are clear, then see what freedom is left."
    ),
}


def strip_junk(s: str) -> str:
    s = PART_JUNK.sub("", s or "").rstrip()
    s = TEMPLATE_JUNK.sub("", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def format_rules_column(ctx: str) -> str:
    """Put numbered rules on their own lines (1. / (1) / Rule 1:)."""
    if not ctx:
        return ctx
    # Already broken into paragraphs with numbered items
    if re.search(r"\n\n(?:\(\d+\)|\d+\.)\s", ctx):
        # Still peel "1. ... 2. ..." glued on one line if any remain
        pass

    # Style: "... rules: 1. Aaa. 2. Bbb."
    m = re.search(
        r"^(.*?\b(?:rules?|conditions?|clues?|statements?)\s*:?\s*)(\d+\.\s+.+)$",
        ctx,
        re.I | re.S,
    )
    if m and re.search(r"\d+\.\s+.+\d+\.\s+", m.group(2)):
        lead, rest = m.group(1).rstrip(), m.group(2).strip()
        parts = re.split(r"(?=\d+\.\s+)", rest)
        parts = [p.strip() for p in parts if p.strip()]
        if len(parts) >= 2:
            return lead + "\n\n" + "\n\n".join(parts)

    # Style: "(1) ... (2) ..."
    if re.search(r"\(1\).*\(2\)", ctx) and "\n\n(1)" not in ctx:
        m2 = re.search(r"^(.*?)(\(1\).+)$", ctx, re.S)
        if m2:
            lead, rest = m2.group(1).strip(), m2.group(2).strip()
            parts = re.split(r"(?=\(\d+\))", rest)
            parts = [p.strip() for p in parts if p.strip()]
            # Peel trailing narrative after last rule
            last = parts[-1]
            m3 = re.match(r"(\(\d+\)\s+.+\.)\s+([A-Z].{12,})$", last)
            if m3 and not m3.group(2).startswith("("):
                parts[-1] = m3.group(1)
                parts.append(m3.group(2))
            body = "\n\n".join(parts)
            return f"{lead}\n\n{body}" if lead else body

    return ctx


def clean_body(expl: str, stmt: str) -> str:
    """Strip old headers and template padding; keep the real reasoning."""
    s = strip_junk(expl)
    s = HEADER_BINOM.sub("", s)
    m = HEADER_OLD.match(s)
    if m:
        s = s[m.end() :].lstrip()
    # Drop echoed statement at start of body
    core = re.sub(r"^\$|\$", "", stmt).strip()
    if core and s.lower().startswith(core[:40].lower()):
        s = s[len(core) :].lstrip(" .→\n")
    s = strip_junk(s)
    # Soft-remove leftover step labels
    s = re.sub(r"^\*\*(?:Why|Conclusion|Step\s*\d+|Setup|Answer|Note)\.?\*\*\s*", "", s, flags=re.I)
    s = re.sub(r"\n\*\*(?:Why|Conclusion|Step\s*\d+)\.?\*\*\s*", "\n", s, flags=re.I)
    return s.strip()


def complexity(stmt: str, verdict: bool, diff: str) -> int:
    s = (stmt or "").lower()
    score = 0
    for w in (
        "converse", "inverse", "contrapositive", "unless", "only if", "if and only",
        "exactly", "always", "never", "partition", "complement", "vacuous",
        "equivalent", "necessary", "sufficient", "forall", "exists", "roster",
        "valid", "must", "impossible", "possible",
    ):
        if w in s:
            score += 1
    if len(stmt) > 100:
        score += 1
    if len(stmt) > 180:
        score += 1
    if not verdict:
        score += 1
    if diff in ("4/5", "5/5"):
        score += 1
    if diff == "5/5":
        score += 1
    if score <= 1:
        return 0
    if score <= 3:
        return 1
    if score <= 5:
        return 2
    return 3


def natural_extend(body: str, stmt: str, verdict: bool, level: int) -> str:
    """Keep existing reasoning; do not invent canned padding.

    Length for hard claims comes from hand-tuned bodies / expand scripts,
    not from repeated template sentences.
    """
    return (body or "").strip()


def binomial_header(letter: str, verdict: bool) -> str:
    return f"**{letter}.** → {'True' if verdict else 'False'}"


def build_shared_overview(t: dict) -> str:
    """Situation + shared reasoning once. No Part titles. No A–E echo here."""
    ctx = t["context"]
    sub = t["subsection"]
    ans = t["answer_key"]
    letters = "ABCDE"
    true_ids = [letters[i] for i, a in enumerate(ans) if a]
    false_ids = [letters[i] for i, a in enumerate(ans) if not a]

    # Special long shared write-up for the seven-finalists puzzle
    if "Uma" in ctx and "Victor" in ctx and "Bianca" in ctx:
        shared = (
            "The seven people are Uma, Victor, Wendy, Xavier, Yara, Zane, and Bianca, "
            "and every valid roster has to obey all eight rules at once.\n\n"
            "Start by asking whether Victor can stay out. If Victor is out, rule 1 also keeps Uma out, "
            "and the contrapositive of rule 7 keeps Bianca out. Rule 3 then splits into two branches. "
            "Wendy in and Xavier out can bring in at most Wendy, Yara, and Zane — three people, which "
            "misses rule 8's floor of four. Xavier in and Wendy out forces Yara out by rule 4 and then "
            "Zane in by rule 5, leaving only Xavier and Zane — still short of four. So Victor cannot "
            "stay out: Victor (and therefore Uma, by rule 1) is in every valid roster. Rule 2 then puts "
            "Wendy in every time, and rule 3 therefore keeps Xavier out every time.\n\n"
            "That locks Uma, Victor, Wendy in and Xavier out. The remaining freedom sits with Yara, "
            "Zane, and Bianca under rules 5–7 (and the size floor). Several different completions still "
            "work, so the roster is forced only in part.\n\n"
            + KEY_FACTS[sub]
            + f"\n\n**Answer.** "
            + ", ".join(f"{letters[i]}={'TRUE' if a else 'FALSE'}" for i, a in enumerate(ans))
        )
        return ctx + "\n\n" + shared

    # Default shared overview: context already shown above in UI via context field,
    # but overview also starts with context for the combined panel.
    hard = t.get("difficulty_level") in ("4/5", "5/5")
    if hard:
        setup = (
            f"The shared work for every claim is the scenario above. "
            f"Read the given objects and rules once, compute the intersections, forced truth values, "
            f"or forced assignments that all five claims will reuse, and keep that list beside A–E. "
            f"Expect {', '.join(true_ids) or 'none'} true and {', '.join(false_ids) or 'none'} false "
            f"once those shared facts are locked, but still verify each claim on its own wording.\n\n"
            + KEY_FACTS[sub]
        )
    else:
        setup = (
            "Use the scenario above as the shared setup for every claim. "
            "Compute the reusable facts once — sets, truth values, or forced conclusions — "
            "then judge A–E against that list without recomputing from scratch each time.\n\n"
            + KEY_FACTS[sub]
        )
    ans_line = "**Answer.** " + ", ".join(
        f"{letters[i]}={'TRUE' if a else 'FALSE'}" for i, a in enumerate(ans)
    )
    return "\n\n".join([ctx, setup, ans_line])


# Hand-tuned A–E bodies for math-1-108 (no situation repeat; natural prose)
SEVEN_BODIES = {
    0: (
        "Suppose Victor stays out. Rule 1 then keeps Uma out, and the contrapositive of rule 7 keeps "
        "Bianca out. Under rule 3, either Wendy is in and Xavier is out, or Xavier is in and Wendy is out. "
        "In the first branch the largest possible roster is Wendy, Yara, and Zane — only three people, "
        "which already breaks rule 8. In the second branch rule 4 drops Yara and rule 5 forces Zane, "
        "leaving just Xavier and Zane — still short of four. Both branches fail, so Victor cannot stay out. "
        "Victor competes in every valid roster."
    ),
    1: (
        "From the shared chain, Victor is always in, so rule 2 always puts Wendy in. Rule 3 says exactly "
        "one of Wendy or Xavier competes, so Xavier is forced out whenever Wendy is in. There is no valid "
        "roster where Xavier competes."
    ),
    2: (
        "Rule 6 says Zane competes only if Bianca does not: Zane $\\Rightarrow$ not Bianca. "
        "The contrapositive is immediate: Bianca $\\Rightarrow$ not Zane. So whenever Bianca competes, "
        "Zane does not. That is exactly the claim."
    ),
    3: (
        "Uma, Victor, and Wendy are fixed in, and Xavier is fixed out, but Yara, Zane, and Bianca still "
        "have room under rules 5–7. For example, Yara in with Zane and Bianca out works; Yara and Bianca "
        "in with Zane out works; Zane in with Yara and Bianca out works; and Yara and Zane in with Bianca "
        "out works. Several distinct rosters satisfy every rule, so the solution is not unique."
    ),
    4: (
        "Exactly six competitors would mean everyone except Xavier is in, so Yara, Zane, and Bianca would "
        "all have to compete together. Rule 6 forbids Zane and Bianca at the same time. That combination "
        "is impossible, so a roster of size six never appears."
    ),
}


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
        "translates to Q \\Rightarrow P (the converse), the same trap as statement (a) worded differently - it is NOT equivalent to P \\Rightarrow Q$.",
        "translates to $Q \\Rightarrow P$ (the converse), the same trap as statement (a) worded differently - it is NOT equivalent to $P \\Rightarrow Q$.",
    ),
    (
        "$\\neg P \\Rightarrow \\neg Q (the inverse), not guaranteed",
        "$\\neg P \\Rightarrow \\neg Q$ (the inverse), not guaranteed",
    ),
]


def apply_scars(s: str) -> str:
    for a, b in SCAR_FIXES:
        s = s.replace(a, b)
    return s


def sparse_bold_trap(body: str) -> str:
    if body.count("**") >= 4:
        return body
    protected: list[str] = []

    def stash(m: re.Match) -> str:
        protected.append(m.group(0))
        return f"\ue000{len(protected)-1}\ue001"

    b = re.sub(r"\$[^$]*\$", stash, body)
    if re.search(r"\bTrap:", b) and "**Trap" not in b:
        b = re.sub(r"\bTrap:", "**Trap:**", b, count=1)
    b = re.sub(r"\ue000(\d+)\ue001", lambda m: protected[int(m.group(1))], b)
    return b


def restyle_task(t: dict) -> dict:
    diff = t.get("difficulty_level") or "3/5"
    t["context"] = format_rules_column(t["context"])

    # Overview: shared once
    t["solution_overview"] = apply_scars(strip_junk(build_shared_overview(t)))

    letters = "ABCDE"
    new_expl = []
    for i, expl in enumerate(t["tactical_explanations"]):
        letter = letters[i]
        verdict = bool(t["answer_key"][i])
        stmt = t["statements"][i]
        if t["id"] == "math-1-108" and i in SEVEN_BODIES:
            body = SEVEN_BODIES[i]
        else:
            body = clean_body(expl, stmt)
            body = natural_extend(body, stmt, verdict, complexity(stmt, verdict, diff))
        body = sparse_bold_trap(apply_scars(body))
        new_expl.append(f"{binomial_header(letter, verdict)}\n\n{body}")
    t["tactical_explanations"] = new_expl

    t = build.normalize_task_dollars(t)
    t["context"] = apply_scars(t["context"])
    t["solution_overview"] = apply_scars(t["solution_overview"])
    t["statements"] = [apply_scars(s) for s in t["statements"]]
    t["tactical_explanations"] = [apply_scars(s) for s in t["tactical_explanations"]]
    return t


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    print("loaded", len(tasks))
    out = [restyle_task(t) for t in tasks]
    # sanity
    for t in out:
        for e in t["tactical_explanations"]:
            if not e.startswith("**"):
                raise SystemExit(f"bad header {t['id']}: {e[:40]}")
            if "**Part 1" in t["solution_overview"]:
                raise SystemExit(f"part titles left in {t['id']}")
            if "Write the scenario on paper" in e or "Write the scenario on paper" in t["solution_overview"]:
                raise SystemExit(f"template left in {t['id']}")
    build.write_ts(out)
    print("restyled", len(out))


if __name__ == "__main__":
    main()
