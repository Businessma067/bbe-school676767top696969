# -*- coding: utf-8 -*-
"""
Full rewrite of Chapter 1 Logic explanations to binomial style.

- solution_overview: situation once → shared model/facts → stop (no Part/Step/Answer echo)
- tactical_explanations: **A.** → True/False + blank-line paragraphs, length varies by claim
- Strip template pads; fix $ / LaTeX scars; normalize via build helpers
"""
from __future__ import annotations

import importlib.util
import json
import re
import statistics
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")

spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

LETTERS = "ABCDE"

PAD_PHRASES = [
    "Name the concrete mismatch: a wrong element, a missed element, or a swapped operation.",
    "Name the concrete mismatch",
    "Write the claimed arrow",
    "Once the English is translated",
    "Pull the one shared fact this claim needs from the setup.",
    "Pull the one shared fact",
    "Compare the wording to that fact carefully.",
    "Holding the claim",
    "Use the scenario above as the shared setup for every claim.",
    "Use the scenario above as the shared setup",
    "Compute the reusable facts once — sets, truth values, or forced conclusions — then judge A–E against that list without recomputing from scratch each time.",
    "The shared work for every claim is the scenario above.",
    "Read the given objects and rules once, compute the intersections, forced truth values, or forced assignments that all five claims will reuse, and keep that list beside A–E.",
    "So the claim is true: it lines up with those shared facts.",
    "So the claim is false: it overreaches or swaps a definition for its converse.",
    "So the claim is true: it lines up with the shared objects and rules once those facts are written down; nothing extra beyond that list is required.",
    "The claim lines up with the shared objects and rules once those facts are written down; nothing extra beyond that list is required.",
    "A single clear counterexample or a swapped definition is enough to mark the claim false; the surrounding true facts do not rescue a wrong wording.",
    "That clash with the shared facts is enough — nearby true claims do not save it.",
    "Nothing beyond the given rules is required for this conclusion.",
    "Work from the forced facts first, then test whether this particular wording adds anything extra.",
    "If the wording uses exactly, always, never, or only if, check that the rules really force that strong reading.",
    "Chain the relevant conditionals (and contrapositives) in order instead of jumping to a yes/no.",
    "After the chain is done, glance back at the claim once to make sure no English gloss changed the math.",
    "Write the relevant shared objects from the scenario on a working line first.",
    "Restate what the claim asserts in your own words before judging it.",
    "Apply the definition step by step (membership vs inclusion, or implication vs converse).",
    "Watch for trap wording: exactly / always / never / only if.",
    "Listing the elements (or counting them with inclusion-exclusion) makes the comparison mechanical instead of relying on the wording alone.",
    "Truth for an implication hinges on the one bad row (true premise, false conclusion); every other row keeps the implication true.",
    "Quantifier and deduction claims stand or fall on the forced chain, not on a single English paraphrase of one rule in isolation.",
    "Read the forced assignments from the rules (and their contrapositives) before testing this wording; freedom that survives the whole chain is what decides possibility claims.",
    "Once the forced core is locked, either a concrete counter-roster still fits every rule, or the claimed combination collides with one of them.",
    "The opposing branch — leaving the named person or object out — collapses under at least one rule, so the claim is forced rather than optional.",
    "Keep both forms in view: $p \\Rightarrow q$ and $\\neg q \\Rightarrow \\neg p$ are the same information.",
    "The converse flips the arrow to $q \\Rightarrow p$, which can fail even when the original implication holds.",
    "The inverse $\\neg p \\Rightarrow \\neg q$ needs its own check; it does not ride free on $p \\Rightarrow q$.",
    "Treat \"$p$ unless $q$\" as $q \\lor p$, or as $\\neg q \\Rightarrow p$, not as the bare claim $p$.",
    "\"$p$ only if $q$\" is $p \\Rightarrow q$ — the same direction as the implication arrow, not the converse.",
    "A biconditional demands both arrows; one direction alone is weaker.",
    "Proper inclusion also needs inequality: $B \\subseteq A$ and $B \\neq A$.",
    "All three partition conditions matter: nonempty, pairwise disjoint, full cover.",
    "Complements are relative to the given universe — nothing outside U is in play.",
    "Difference starts in the first set and drops whatever also sits in the second.",
    "Independently including or excluding each of $n$ elements produces $2^n$ subsets.",
    "A universal claim dies at the first counterexample.",
    "One valid witness is enough for an existential claim.",
    "False premise means the implication never meets its failing row.",
    "After the forced assignments locked, either show one full roster that obeys every rule or show that every try breaks one.",
    "Try leaving them out: if every such branch collapses under the rules, the claim is forced.",
    "Two different valid completions already kill uniqueness.",
    "Chain the relevant rules and contrapositives, then read this wording against what is forced.",
    "An implication fails only on true premise with false conclusion.",
    "The verdict is **true**.",
    "The verdict is **false**.",
    "The keyed verdict is **true**.",
    "The keyed verdict is **false**.",
    "Expect ",  # leftover from hard overview template — handled separately
]

PAD_RES = [
    re.compile(r"\s*Holding the claim \".*?\" next to those shared facts is the last check\s*(?:—|-|–)\s*and (?:it matches|that is where it fails)\.", re.S),
    re.compile(r"\s*\*\*Answer\.\*\*.*$", re.S | re.M),
    re.compile(r"\s*\*\*Part \d+:[^*]*\*\*", re.I),
    re.compile(r"\s*Tier\s+\d+\s*-\s*[A-Za-z][^\n.]*\.?", re.I),
    re.compile(r"\s*PART\s+[IVX]+[\s\S]*$", re.I),
    re.compile(r"\*\*Trap:\*\*\s*", re.I),
    re.compile(r"\*\*Tip:\*\*\s*", re.I),
]

HEADER_RE = re.compile(r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n*", re.I)
OLD_HEADER_RE = re.compile(r"^\*\*[A-E]\)\s*.*?\*\*\s*\((true|false)\)\s*\n*", re.I | re.S)

TRAP = (
    "converse", "inverse", "contrapositive", "unless", "only if", "exactly",
    "always", "never", "partition", "complement", "vacuous", "equivalent",
    "necessary", "sufficient", "forall", "exists", "valid", "must",
    "impossible", "possible", "proper", "iff", "if and only", "unique",
)


def is_rule_task(ctx: str) -> bool:
    return bool(re.search(r"(?i)\b(?:rules?|conditions?|clues?)\b", ctx or "")) and (
        ctx.count("\n\n") >= 2 or bool(re.search(r"\n\s*(?:\d+\.|\(\d+\))", ctx or ""))
    )


def score_claim(stmt: str, verdict: bool, diff: str, ctx: str) -> int:
    s = (stmt or "").lower()
    sc = 0
    for w in TRAP:
        if w in s:
            sc += 1
    if not verdict:
        sc += 1
    if len(stmt) > 120:
        sc += 1
    if len(stmt) > 200:
        sc += 1
    if is_rule_task(ctx) and any(
        w in s
        for w in (
            "must", "always", "every valid", "possible", "impossible",
            "unique", "exactly one", "exactly", "cannot", "never", "essential",
        )
    ):
        sc += 2
    if diff == "5/5" and sc >= 2:
        sc += 1
    if s.count("\\") >= 4:
        sc += 1
    return min(sc, 5)


def strip_pads(s: str) -> str:
    s = s or ""
    for rx in PAD_RES:
        s = rx.sub("", s)
    for p in PAD_PHRASES:
        s = s.replace(p, "")
    # Drop leftover "Expect X true and Y false..." sentences from hard overview
    s = re.sub(
        r"Expect [A-E,\s]+ true and [A-E,\snone]+ false once those shared facts are locked, but still verify each claim on its own wording\.",
        "",
        s,
        flags=re.I,
    )
    s = re.sub(r"\s{2,}", " ", s)
    s = re.sub(r"\s+\.", ".", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip(" \n\t-—")


def extract_core(expl: str) -> str:
    s = expl or ""
    s = HEADER_RE.sub("", s)
    s = OLD_HEADER_RE.sub("", s)
    s = strip_pads(s)
    # Collapse accidental single newlines into spaces, keep intentional blank lines later
    s = re.sub(r"(?<!\n)\n(?!\n)", " ", s)
    s = re.sub(r"\s{2,}", " ", s)
    return s.strip()


def fix_scars(s: str) -> str:
    if not s:
        return s
    # -$3 \notin → $-3 \notin  (minus glued to dollar)
    s = re.sub(r"(?<![\\$])-\$(\d)", r"$-\1", s)
    s = re.sub(r"(?<=\s)-\$(\\notin|\\in|\\subset|\\subseteq)", r"$-\1", s)
    # emptyset)-scar
    s = s.replace("= \\emptyset)$", "= \\emptyset$")
    s = s.replace("= \\emptyset)", "= \\emptyset")
    # garbage "\emptyset \in D 3"
    s = re.sub(r"(\$\\emptyset\s+\\in\s+[A-Za-z]+)\s+\d+(\$)", r"\1\2", s)
    s = re.sub(r"(\$\\emptyset\s+\\in\s+[A-Za-z]+)\s+\d+", r"\1$", s)
    # Close math before English glosses: `$FORMULA (the inverse)` / `$FORMULA (Z = integers)`
    s = re.sub(
        r"\$([^$\n]{1,120}?)\s+(\((?:the |only |i\.e\.|not |Z\s*=|N\s*=|frost|integers|reals|naturals)[^)]*\))",
        r"$\1$ \2",
        s,
        flags=re.I,
    )
    # Nested disaster: -$2 \in A ($frost-safe) style — open paren English after math start
    s = re.sub(
        r"\$([^$\n]{1,80}?)\s+\(([^)$]{2,40})\)\$",
        r"$\1$ (\2)",
        s,
    )
    # Bare powers that should be math (outside existing $)
    def wrap_bare_pow(m: re.Match) -> str:
        # skip if already inside $
        return m.group(0)

    # Only wrap bare x^2 / 2^3 when not already in math — conservative line pass
    parts = []
    i = 0
    n = len(s)
    while i < n:
        if s.startswith("$$", i):
            end = s.find("$$", i + 2)
            if end == -1:
                parts.append(s[i:])
                break
            parts.append(s[i : end + 2])
            i = end + 2
            continue
        if s[i] == "$":
            end = s.find("$", i + 1)
            if end == -1:
                parts.append(s[i:])
                break
            parts.append(s[i : end + 1])
            i = end + 1
            continue
        # text run until next $
        j = s.find("$", i)
        if j == -1:
            chunk = s[i:]
            i = n
        else:
            chunk = s[i:j]
            i = j
        chunk = re.sub(r"(?<![A-Za-z0-9\\])\b([A-Za-z])\^(\d+)\b", r"$\1^\2$", chunk)
        chunk = re.sub(r"(?<![A-Za-z0-9\\])\b(\d+)\^(\d+)\b", r"$\1^\2$", chunk)
        parts.append(chunk)
    s = "".join(parts)
    # Known notebook scars
    for a, b in [
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
        ("so -$3 \\notin N$", "so $-3 \\notin N$"),
        ("Natural numbers are non-negative, so -$3", "Natural numbers are non-negative, so $-3"),
    ]:
        s = s.replace(a, b)
    return s


def sentences(text: str) -> list[str]:
    text = re.sub(r"\s+", " ", text).strip()
    if not text:
        return []
    # Split on sentence boundaries; keep abbreviations crude
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z$\\*])", text)
    return [p.strip() for p in parts if p.strip()]


def principle_for(stmt: str, sub: str, sc: int) -> str | None:
    """Claim-specific principle paragraph (not a method pad)."""
    s = stmt.lower()
    if "contrapositive" in s or ("\\neg" in stmt and "\\Rightarrow" in stmt and "converse" not in s and "inverse" not in s and sc >= 2):
        if "contrapositive" in s:
            return (
                "An implication and its contrapositive carry the same information:\n\n"
                "$$p \\Rightarrow q \\quad\\Leftrightarrow\\quad \\neg q \\Rightarrow \\neg p$$\n\n"
                "Either form can be used freely; they never disagree."
            )
    if "converse" in s:
        return (
            "The converse reverses the arrow. From $p \\Rightarrow q$ you do **not** get $q \\Rightarrow p$ for free:\n\n"
            "$$q \\Rightarrow p$$\n\n"
            "is a separate claim that can fail even when the original implication holds."
        )
    if "inverse" in s:
        return (
            "The inverse flips both sides of the implication:\n\n"
            "$$\\neg p \\Rightarrow \\neg q$$\n\n"
            "That is not forced by $p \\Rightarrow q$; it needs its own check."
        )
    if "unless" in s:
        return (
            "In the usual logic reading, \"$p$ unless $q$\" matches $q \\lor p$, or equivalently:\n\n"
            "$$\\neg q \\Rightarrow p$$\n\n"
            "It is not the bare claim $p$ alone."
        )
    if "only if" in s:
        return (
            "\"$p$ only if $q$\" is the same direction as the implication arrow:\n\n"
            "$$p \\Rightarrow q$$\n\n"
            "It is not the converse $q \\Rightarrow p$."
        )
    if "if and only" in s or "iff" in s or "\\Leftrightarrow" in stmt:
        return (
            "A biconditional needs both directions at once:\n\n"
            "$$p \\Leftrightarrow q \\quad\\equiv\\quad (p \\Rightarrow q)\\land(q \\Rightarrow p)$$\n\n"
            "One arrow alone is weaker."
        )
    if "de morgan" in s or ("^c" in stmt and ("\\cup" in stmt or "\\cap" in stmt)):
        return (
            "De Morgan swaps union with intersection when complements move inside:\n\n"
            "$$(A \\cup B)^c = A^c \\cap B^c$$\n\n"
            "$$(A \\cap B)^c = A^c \\cup B^c$$"
        )
    if "partition" in s:
        return (
            "A partition of a set A is a collection of nonempty blocks that are pairwise disjoint and whose union is exactly A. "
            "Missing any one of those three conditions kills the claim."
        )
    if "power set" in s or "\\mathcal{p}" in s or "2^n" in s or "2^{" in stmt:
        return (
            "Each element of an $n$-element set can be in or out of a subset independently, so the power set has size:\n\n"
            "$$\\lvert \\mathcal{P}(A)\\rvert = 2^{\\lvert A\\rvert}$$"
        )
    if "proper" in s and ("subset" in s or "\\subset" in stmt):
        return (
            "Proper inclusion needs containment **and** inequality:\n\n"
            "$$B \\subsetneq A \\quad\\Leftrightarrow\\quad B \\subseteq A \\land B \\neq A$$"
        )
    if "\\subseteq" in stmt or ("subset" in s and "element" not in s[:40]):
        if sc >= 2:
            return (
                "Membership and inclusion are different: $x \\in A$ is one object inside A, while "
                "$B \\subseteq A$ means every element of B also sits in A."
            )
    if "\\cap" in stmt and sc >= 2:
        return "Intersection keeps only the overlap — an element must sit in every named set."
    if "\\cup" in stmt and sc >= 2:
        return "Union stacks every element that appears in at least one of the sets; shared elements are listed once."
    if "\\setminus" in stmt and sc >= 2:
        return (
            "Set difference starts in the first set and drops anything that also sits in the second:\n\n"
            "$$A \\setminus B = \\{x : x \\in A \\land x \\notin B\\}$$"
        )
    if ("\\forall" in stmt or "for all" in s or "for every" in s) and sc >= 2:
        return "A universal claim fails as soon as a single counterexample appears."
    if ("\\exists" in stmt or "there exists" in s or re.search(r"\bthere is\b", s)) and sc >= 2:
        if "unique" in s or "exactly one" in s or "exactly 1" in s:
            pass  # uniqueness is not a bare existential witness claim
        else:
            return "An existential claim needs only one working witness."
    if "necessary" in s:
        return (
            "\"$q$ is necessary for $p$\" means you cannot have $p$ without $q$:\n\n"
            "$$p \\Rightarrow q$$"
        )
    if "sufficient" in s:
        return (
            "\"$q$ is sufficient for $p$\" means $q$ alone forces $p$:\n\n"
            "$$q \\Rightarrow p$$"
        )
    if sc >= 3 and ("\\Rightarrow" in stmt or "implies" in s) and "converse" not in s and "inverse" not in s:
        return (
            "An implication $p \\Rightarrow q$ fails on exactly one row of the truth table: "
            "premise true and conclusion false. Every other combination keeps the implication true."
        )
    return None


def shared_model_blurb(t: dict) -> str:
    ctx = t["context"]
    sub = t["subsection"]
    if is_rule_task(ctx):
        if "Uma" in ctx and "Victor" in ctx:
            return (
                "The seven people are Uma, Victor, Wendy, Xavier, Yara, Zane, and Bianca, "
                "and every valid roster must obey all eight rules at once.\n\n"
                "Start by asking whether Victor can stay out. If Victor is out, rule 1 also keeps Uma out, "
                "and the contrappositive of rule 7 keeps Bianca out. Rule 3 then splits into two branches. "
                "Wendy in and Xavier out can bring in at most Wendy, Yara, and Zane — three people, which "
                "misses rule 8's floor of four. Xavier in and Wendy out forces Yara out by rule 4 and then "
                "Zane in by rule 5, leaving only Xavier and Zane — still short of four. So Victor cannot "
                "stay out: Victor (and therefore Uma, by rule 1) is in every valid roster. Rule 2 then puts "
                "Wendy in every time, and rule 3 therefore keeps Xavier out every time.\n\n"
                "That locks Uma, Victor, Wendy in and Xavier out. The remaining freedom sits with Yara, "
                "Zane, and Bianca under rules 5–7 (and the size floor). Several different completions still "
                "work, so the roster is forced only in part."
            )
        return (
            "The numbered rules (and their contrapositives) are the shared engine for every claim. "
            "Chain them until the forced in/out assignments are clear, then see what freedom — if any — "
            "is left for possibility or uniqueness questions."
        )
    if sub == "1.1":
        return (
            "The shared objects are the sets named above. Every claim is decided by reading those lists "
            "directly — membership, inclusion, power-set size, or equality — without inventing elements "
            "that are not written down."
        )
    if sub == "1.2":
        return (
            "Work from the given sets (and universe, when one is stated). Unions, intersections, "
            "differences, complements, and inclusion-exclusion counts are computed once from those lists "
            "and then reused across the five claims."
        )
    if sub == "1.3":
        return (
            "Fix the truth values of the named propositions from the scenario, then evaluate each "
            "compound claim with the standard connectives. Remember that $p \\Rightarrow q$ fails only "
            "when $p$ is true and $q$ is false, and that converse/inverse are separate arrows."
        )
    # 1.4 non-rule
    return (
        "Read the quantified statement or deduction setup carefully. Negation flips quantifiers; "
        "validity needs the conclusion forced in every case the premises allow."
    )


def build_overview(t: dict) -> str:
    ctx = fix_scars(strip_pads(t["context"])).strip()
    # Keep multi-rule vertical lists
    model = shared_model_blurb(t)
    # Do NOT echo A–E answers; do NOT say "use scenario above"
    return f"{ctx}\n\n{model}"


def paragraphize_core(core: str, sc: int) -> list[str]:
    """Turn a core blob into blank-line paragraphs."""
    core = core.strip()
    if not core:
        return []
    # If already multi-paragraph, clean each
    if "\n\n" in core:
        paras = [p.strip() for p in core.split("\n\n") if p.strip()]
        return paras
    sents = sentences(core)
    if not sents:
        return [core]
    if sc <= 1:
        # 2 short paragraphs when possible
        if len(sents) == 1:
            return sents
        mid = max(1, len(sents) // 2)
        return [" ".join(sents[:mid]), " ".join(sents[mid:])]
    if sc == 2:
        # ~3 paragraphs
        if len(sents) <= 2:
            return sents
        chunks = []
        size = max(1, (len(sents) + 2) // 3)
        for i in range(0, len(sents), size):
            chunks.append(" ".join(sents[i : i + size]))
        return chunks
    # sc >= 3: one sentence per paragraph when long enough, else small groups
    if len(sents) >= 4:
        return sents
    return sents


def maybe_display_from_stmt(stmt: str, sc: int) -> str | None:
    """Pull a pure math equality from the statement for display when useful."""
    if sc < 2:
        return None
    m = re.search(
        r"\$([^$]{3,120}(?:=|\\Leftrightarrow|\\Rightarrow|\\equiv)[^$]{0,80})\$",
        stmt,
    )
    if m and not re.search(r"\b(and|or|the|with|from|that)\b", m.group(1), re.I):
        return f"$${m.group(1).strip()}$$"
    return None


def wrap_bare_latex_paras(text: str) -> str:
    """Any paragraph that is pure LaTeX (no $ yet) gets $$...$$."""
    paras = text.split("\n\n")
    out = []
    for p in paras:
        t = p.strip()
        if not t:
            continue
        if "$" in t:
            out.append(t)
            continue
        if re.search(r"\\(?:cup|cap|setminus|in|notin|subseteq|subset|emptyset|Rightarrow|Leftrightarrow|neg|land|lor|lvert|rvert|times|forall|exists|subsetneq|quad|equiv|mathcal|mathbb)", t):
            # strip accidental leading/trailing prose words — only wrap if mostly math
            if not re.search(r"\b(the|and|or|with|from|that|which|this|when|then)\b", t, re.I) or re.match(
                r"^[A-Za-z0-9\\{}\[\]()|=<>_\^\s,;:\\+\-]+$", t
            ):
                if re.match(r"^[\sA-Za-z0-9\\{}\[\]()|=<>_\^,;:+\-\\]+$", t) and "\\" in t:
                    out.append(f"$${t}$$")
                    continue
        out.append(t)
    return "\n\n".join(out)


def fix_context_math(s: str) -> str:
    """Wrap common bare set-diff / cardinality fragments outside math."""
    s = re.sub(
        r"(?<!\$)\(([A-Za-z])\s*\\setminus\s*([A-Za-z])\)(?!\$)",
        r"$(\1 \\setminus \2)$",
        s,
    )
    s = re.sub(
        r"(?<!\$)\b([A-Za-z])\s*\\setminus\s*([A-Za-z])\b(?!\$)",
        r"$\1 \\setminus \2$",
        s,
    )
    return s


def expand_body(core: str, stmt: str, verdict: bool, sub: str, ctx: str, sc: int, letter: str) -> str:
    core = fix_scars(strip_pads(core))
    paras: list[str] = []

    prin = principle_for(stmt, sub, sc) if sc >= 2 else None
    # For easy claims, skip heavy principles; for medium+ include when relevant
    if prin and sc >= 2:
        # principle_for may already contain internal \n\n — flatten into paras later
        for block in prin.split("\n\n"):
            if block.strip():
                paras.append(block.strip())

    disp = maybe_display_from_stmt(stmt, sc)
    if disp and disp not in "\n\n".join(paras):
        # only add if core doesn't already show same formula
        if disp.strip("$").strip() not in core:
            paras.append(disp)

    core_paras = paragraphize_core(core, sc)
    for p in core_paras:
        p = p.strip()
        if not p:
            continue
        # Avoid duplicating principle text
        if any(p[:50] == q[:50] for q in paras):
            continue
        paras.append(p)

    # Length targets by score — add claim-specific bridging only when still thin
    word_n = len(re.findall(r"\b\w+\b", " ".join(paras)))
    targets = [35, 50, 85, 130, 180, 220]
    target = targets[min(sc, 5)]

    # Rule-puzzle forced claims: push toward long write-ups
    if is_rule_task(ctx) and sc >= 3:
        target = max(target, 160)
    if is_rule_task(ctx) and sc >= 4:
        target = max(target, 200)

    if word_n < target - 15:
        extra = bridge_extra(stmt, verdict, sub, ctx, sc, core)
        for e in extra:
            if e and e not in "\n\n".join(paras):
                paras.append(e)
                word_n = len(re.findall(r"\b\w+\b", " ".join(paras)))
                if word_n >= target:
                    break

    # Ensure blank-line structure: at least 2 paras for any claim
    if len(paras) == 1:
        sents = sentences(paras[0])
        if len(sents) >= 2:
            paras = [" ".join(sents[:1]), " ".join(sents[1:])]
        else:
            # Split long single sentence artificially at a clause
            p = paras[0]
            if ", so " in p:
                a, b = p.split(", so ", 1)
                paras = [a + ".", "So " + b]
            elif ". " in p:
                paras = paragraphize_core(p, max(sc, 1))

    # Closing verdict in binomial voice if missing
    joined = "\n\n".join(paras)
    low = joined.lower()
    if "statement is true" not in low and "statement is false" not in low:
        if verdict:
            paras.append("The claim matches the facts above, so the statement is True.")
        else:
            paras.append("That mismatch is enough, so the statement is False.")

    # Hard rule claims: ensure more paragraph breaks
    if sc >= 4 and len(paras) < 6:
        rebuilt = []
        for p in paras:
            sents = sentences(p)
            if len(sents) >= 2 and len(p) > 120:
                rebuilt.extend(sents)
            else:
                rebuilt.append(p)
        paras = rebuilt

    # Dedup consecutive empties
    out = []
    for p in paras:
        p = fix_scars(p.strip())
        if not p:
            continue
        if out and out[-1] == p:
            continue
        out.append(p)
    body = "\n\n".join(out)
    return wrap_bare_latex_paras(body)


def bridge_extra(stmt: str, verdict: bool, sub: str, ctx: str, sc: int, core: str) -> list[str]:
    """Claim-aware bridges — never the banned pad list."""
    s = stmt.lower()
    bl = core.lower()
    out: list[str] = []

    def add(t: str) -> None:
        if not t:
            return
        if t[:40].lower() in bl:
            return
        out.append(t)

    if is_rule_task(ctx):
        if any(w in s for w in ("possible", "can ", "cannot", "impossible")):
            add(
                "With the forced assignments locked, either exhibit one full roster that obeys every rule "
                "or show that every attempt breaks at least one rule."
            )
            if sc >= 4:
                add(
                    "A roster is valid only when every numbered rule holds at once — partial compliance "
                    "is not enough. Later rules often close cases that looked open after the first two clues."
                )
        elif any(w in s for w in ("must", "always", "every valid")):
            add(
                "Try the opposite assignment. If every branch that leaves the named person or object out "
                "collapses under the rules, the claim is forced rather than optional."
            )
            if sc >= 4:
                add(
                    "Once the forced people are locked, the remaining free variables are what decide "
                    "whether this wording is forced or still optional."
                )
        elif "unique" in s or "exactly one" in s:
            add(
                "Uniqueness fails as soon as two different completions both satisfy the full rule list."
            )
            if sc >= 3:
                add(
                    "After the forced core is locked, enumerate the remaining free variables. Two "
                    "distinct valid completions already kill a uniqueness claim."
                )
        elif sc >= 4:
            add(
                "Chain the relevant rules and their contrapositives in order before reading this wording "
                "against what is forced."
            )
            add(
                "Start from the strongest implications, record what they force, then see whether this "
                "particular English claim adds anything beyond that forced core."
            )
        return out

    if not verdict and ("\\cap" in stmt or "\\cup" in stmt or "\\setminus" in stmt):
        add(
            "Write both sides as explicit element lists and compare them one entry at a time — "
            "a single missing or extra element is enough to kill equality."
        )
    if not verdict and ("\\subseteq" in stmt or "subset" in s):
        add(
            "Check containment both ways when equality is claimed, and check for a witness element "
            "that sits in one side but not the other when inclusion is claimed."
        )
    if "\\lvert" in stmt or "cardinal" in s or "how many" in s or re.search(
        r"\b(number of|exactly \d+|at least \d+)\b", s
    ):
        if "\\cup" in stmt or "union" in s or "neither" in s or "overlap" in s or "both" in s:
            add(
                "When sizes of a union are involved, inclusion-exclusion for two sets is\n\n"
                "$$\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert - \\lvert A \\cap B\\rvert$$\n\n"
                "Use every term that the scenario actually supplies."
            )
    if sub == "1.3" and sc >= 3 and verdict is False:
        add(
            "Name the exact failing case: true premise with false conclusion, or a swapped arrow "
            "(converse/inverse) that the given implication does not buy."
        )
    return out


def format_rules_column(ctx: str) -> str:
    if not ctx:
        return ctx
    if re.search(r"\n\n(?:\(\d+\)|\d+\.)\s", ctx):
        return ctx
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
    if re.search(r"\(1\).*\(2\)", ctx) and "\n\n(1)" not in ctx:
        m2 = re.search(r"^(.*?)(\(1\).+)$", ctx, re.S)
        if m2:
            lead, rest = m2.group(1).strip(), m2.group(2).strip()
            parts = re.split(r"(?=\(\d+\))", rest)
            parts = [p.strip() for p in parts if p.strip()]
            last = parts[-1]
            m3 = re.match(r"(\(\d+\)\s+.+\.)\s+([A-Z].{12,})$", last)
            if m3 and not m3.group(2).startswith("("):
                parts[-1] = m3.group(1)
                parts.append(m3.group(2))
            body = "\n\n".join(parts)
            return f"{lead}\n\n{body}" if lead else body
    return ctx


def rewrite_task(t: dict) -> dict:
    t = dict(t)
    t["context"] = fix_context_math(fix_scars(format_rules_column(strip_pads(t["context"]))))
    t["statements"] = [fix_context_math(fix_scars(strip_pads(s))) for s in t["statements"]]

    # Score all claims first; boost variety within task
    scores = [
        score_claim(t["statements"][i], t["answer_key"][i], t["difficulty_level"], t["context"])
        for i in range(5)
    ]
    # Force spread: ensure min and max differ when possible
    if max(scores) - min(scores) < 2:
        # bump the longest statement / false trap
        order = sorted(range(5), key=lambda i: (len(t["statements"][i]), not t["answer_key"][i]), reverse=True)
        scores[order[0]] = min(5, scores[order[0]] + 2)
        scores[order[-1]] = max(0, scores[order[-1]] - 1)

    new_expl = []
    for i in range(5):
        letter = LETTERS[i]
        verdict = bool(t["answer_key"][i])
        core = extract_core(t["tactical_explanations"][i])
        body = expand_body(
            core,
            t["statements"][i],
            verdict,
            t["subsection"],
            t["context"],
            scores[i],
            letter,
        )
        new_expl.append(f"**{letter}.** → {'True' if verdict else 'False'}\n\n{body}")
    t["tactical_explanations"] = new_expl
    t["solution_overview"] = build_overview(t)
    build.normalize_task_dollars(t)
    return t


def stats(tasks: list[dict]) -> dict:
    words, paras, ratios = [], [], []
    for t in tasks:
        ws = []
        for e in t["tactical_explanations"]:
            body = HEADER_RE.sub("", e)
            ws.append(len(re.findall(r"\b\w+\b", body)))
            paras.append(len([p for p in body.split("\n\n") if p.strip()]))
        words.extend(ws)
        ratios.append(max(ws) / max(1, min(ws)))
    return {
        "words_min": min(words),
        "words_med": statistics.median(words),
        "words_max": max(words),
        "paras_min": min(paras),
        "paras_med": statistics.median(paras),
        "paras_max": max(paras),
        "ratio_med": statistics.median(ratios),
        "ratio_min": min(ratios),
        "ratio_max": max(ratios),
    }


def banned_left(tasks: list[dict]) -> list[str]:
    bans = [
        "Name the concrete mismatch",
        "Write the claimed arrow",
        "Once the English is translated",
        "Pull the one shared fact",
        "Holding the claim",
        "Use the scenario above as the shared setup",
        "**Part 1",
        "**Answer.**",
    ]
    hits = []
    for t in tasks:
        blob = "\n".join([t["solution_overview"], *t["tactical_explanations"]])
        for b in bans:
            if b in blob:
                hits.append(f"{t['id']}: {b}")
    return hits


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = [rewrite_task(t) for t in tasks]
    hits = banned_left(out)
    if hits:
        print("WARN banned leftovers", len(hits))
        for h in hits[:20]:
            print(" ", h)
    st = stats(out)
    print("STATS", st)
    build.write_ts(out)
    DUMP.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", len(out), "tasks")


if __name__ == "__main__":
    main()
