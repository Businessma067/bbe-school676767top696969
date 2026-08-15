# -*- coding: utf-8 -*-
"""
Strip prior pad generations, then lengthen Ch1 explanations by complexity.

Easy claims (score 0–1): leave short.
Medium/hard (2–5): grow with claim-specific prose only.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import importlib.util

spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
LETTERS = "ABCDE"
# Forced targets only from score 2 up. Score 0–1 stay as-is if already clear.
TARGET = [0, 0, 55, 80, 110, 150]

TRAP = (
    "converse", "inverse", "contrapositive", "unless", "only if", "exactly",
    "always", "never", "partition", "complement", "vacuous", "equivalent",
    "necessary", "sufficient", "forall", "exists", "valid", "must",
    "impossible", "possible", "proper", "iff", "if and only", "unique",
)

# Exact / prefix strips of known template generations (old and new).
STRIP_EXACT = [
    "Pull the one shared fact this claim needs from the setup.",
    "Compare the wording to that fact carefully.",
    "The verdict is **true**.",
    "The verdict is **false**.",
    "The keyed verdict is **true**.",
    "The keyed verdict is **false**.",
    "So the claim is true: it lines up with those shared facts.",
    "So the claim is false: it overreaches or swaps a definition for its converse.",
    "Work from the forced facts first, then test whether this particular wording adds anything extra.",
    "If the wording uses exactly, always, never, or only if, check that the rules really force that strong reading.",
    "Chain the relevant conditionals (and contrapositives) in order instead of jumping to a yes/no.",
    "After the chain is done, glance back at the claim once to make sure no English gloss changed the math.",
    "Write the relevant shared objects from the scenario on a working line first.",
    "Restate what the claim asserts in your own words before judging it.",
    "Apply the definition step by step (membership vs inclusion, or implication vs converse).",
    "Watch for trap wording: exactly / always / never / only if.",
    "The claim lines up with the shared objects and rules once those facts are written down; nothing extra beyond that list is required.",
    "A single clear counterexample or a swapped definition is enough to mark the claim false; the surrounding true facts do not rescue a wrong wording.",
    "Listing the elements (or counting them with inclusion-exclusion) makes the comparison mechanical instead of relying on the wording alone.",
    "Truth for an implication hinges on the one bad row (true premise, false conclusion); every other row keeps the implication true.",
    "Quantifier and deduction claims stand or fall on the forced chain, not on a single English paraphrase of one rule in isolation.",
    "Read the forced assignments from the rules (and their contrapositives) before testing this wording; freedom that survives the whole chain is what decides possibility claims.",
    "Once the forced core is locked, either a concrete counter-roster still fits every rule, or the claimed combination collides with one of them.",
    "The opposing branch — leaving the named person or object out — collapses under at least one rule, so the claim is forced rather than optional.",
    "An implication and its contrapositive always match: if $p \\Rightarrow q$ holds, then $\\neg q \\Rightarrow \\neg p$ holds too, and the same for the reverse direction.",
    "The converse $q \\Rightarrow p$ is a different claim from $p \\Rightarrow q$; one can be true while the other fails, so they are not interchangeable.",
    "The inverse $\\neg p \\Rightarrow \\neg q$ is not forced by $p \\Rightarrow q$; it is another separate implication that needs its own check.",
    "In ordinary logic reading, \"$p$ unless $q$\" lines up with $q \\lor p$, or equivalently $\\neg q \\Rightarrow p$ — not with the unguarded claim $p$ alone.",
    "\"$p$ only if $q$\" means $p \\Rightarrow q$, not $q \\Rightarrow p$. That direction is easy to flip by accident in English.",
    "A biconditional needs both directions: $p \\Rightarrow q$ and $q \\Rightarrow p$. One arrow alone is not enough.",
    "A proper subset must be contained in the larger set and also miss at least one element; equality is allowed for $\\subseteq$ but not for a proper-subset claim.",
    "With $n$ elements the power set has $2^n$ members because each element can be in or out of a subset independently.",
    "Disjoint means the intersection is empty — sharing even one element is enough to fail.",
    "A partition needs nonempty blocks, pairwise empty intersections, and a union that covers the whole ground set — miss any one of those three and it is not a partition.",
    "A complement is always taken relative to the stated universe: whatever sits in U but not in the set belongs to the complement, and nothing from inside the set can.",
    "Set difference keeps elements of the first set that are absent from the second; order matters, so $A \\setminus B$ and $B \\setminus A$ usually differ.",
    "Union stacks every element that appears in at least one of the sets; shared elements are still listed only once.",
    "Intersection keeps only the overlap — an element must satisfy every set named in the claim.",
    "Ordered pairs $(a,b)$ and $(b,a)$ are different when $a \\neq b$, and the product size is the product of the sizes.",
    "The empty set has no elements to violate a subset condition, so $\\emptyset \\subseteq A$ for every A, but $\\emptyset$ is not an element of A unless A lists it.",
    "Membership is about a single object sitting inside a set; do not confuse $x \\in A$ with $\\{x\\} \\subseteq A$, even though both can be true at once.",
    "A universal claim fails as soon as one counterexample appears; it is not enough that many cases work.",
    "An existential claim needs only one working witness; it does not require the property for every object in the domain.",
    "When the hypothesis is already false, an implication is vacuously true — there is no failing case with true premise and false conclusion.",
    # Prior over-long method stacks (strip before re-lengthening carefully)
    "Write both sides as explicit lists (or counts) and compare them element by element.",
    "Name the intermediate set or count on a scratch line before matching it to the claim.",
    "Watch for a missing or extra element — that is usually where a false set claim fails.",
    "Keep membership ($\\in$) and inclusion ($\\subseteq$) on separate mental tracks while you check.",
    "If inclusion-exclusion is in play, write every pairwise and triple term before simplifying.",
    "In a union, every element from either set appears; shared elements are not double-counted.",
    "In an intersection, an element must sit in every named set.",
    "Exhibit the concrete mismatch — a wrong element, a missed element, or a swapped operation.",
    "Translate the English into symbols once, then test the resulting formula against the shared facts.",
    "If the wording smells like a converse or inverse, write the original arrow beside it before deciding.",
    "Check the failing case for an implication (true premise, false conclusion) before accepting a verbal gloss.",
    "Necessary and sufficient are opposite directions — label which arrow the English actually claims.",
    "When several connectives stack, parenthesize the intended reading before judging truth.",
    "Point to the exact row or counterexample that breaks the claimed equivalence.",
    "When quantifiers appear, flip them carefully under negation instead of paraphrasing by ear.",
    "Write the forced in/out list first, then test only the free variables against the remaining rules.",
    "Start from the strongest implications and their contrapositives, then see what freedom is left.",
    "A roster is valid only if every numbered rule holds at once — partial compliance is not enough.",
    "Do not stop at the first rule that looks relevant — later rules often close the remaining cases.",
    "When a size floor or XOR-style rule is present, use it to kill branches that otherwise look fine.",
    "Either a concrete counter-roster still fits, or the claimed combination collides with a forced fact.",
    "If the claim asserts uniqueness or a large roster, enumerate the free variables after the forced core.",
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
    "That clash with the shared facts is enough — nearby true claims do not save it.",
    "Nothing beyond the given rules is required for this conclusion.",
    "An implication fails only on true premise with false conclusion.",
]

HOLDING_RE = re.compile(
    r"\s*Holding the claim \".*?\" next to those shared facts is the last check "
    r"(?:—|-|–) and (?:it matches|that is where it fails)\.",
    re.S,
)
PART_RE = re.compile(r"\s*PART\s+[IVX]+[\s\S]*$", re.I)
TIER_RE = re.compile(r"\s*Tier\s+\d+\s*-\s*[A-Za-z][^\n.]*\.?", re.I)
# Catch wording variants of old method pads
METHOD_PAD_RE = re.compile(
    r"(?:Translate the English into symbols once,[^.]*\.)|"
    r"(?:Write both sides as explicit lists[^.]*\.)|"
    r"(?:Name the intermediate set or count[^.]*\.)|"
    r"(?:Write the forced in/out list first[^.]*\.)|"
    r"(?:Compute the set or count on a scratch line[^.]*\.)|"
    r"(?:Compute the relevant set or count on a scratch line[^.]*\.)|"
    r"(?:Chain the relevant rules and contrappositives[^.]*\.)",
    re.I,
)


def words(s: str) -> int:
    return len(re.findall(r"[A-Za-z0-9\\]+", s or ""))


def score_claim(stmt: str, verdict: bool, diff: str, ctx: str) -> int:
    """Score the *claim*, not the whole task difficulty."""
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
    # Deduction-heavy claim wording on a rule puzzle — not every A–E on a hard task
    if is_rule_task(ctx) and any(
        w in s
        for w in (
            "must", "always", "every valid", "possible", "impossible",
            "unique", "exactly one", "exactly", "cannot", "never",
        )
    ):
        sc += 2
    elif is_rule_task(ctx) and any(w in s for w in ("only if", "if ", "contrapositive")):
        sc += 0  # single-rule restatement stays short
    # Task difficulty is a weak signal only
    if diff == "5/5" and sc >= 2:
        sc += 1
    if s.count("\\") >= 4:
        sc += 1
    return min(sc, 5)


def scrub(s: str) -> str:
    s = PART_RE.sub("", s or "")
    s = TIER_RE.sub("", s)
    s = HOLDING_RE.sub("", s)
    s = METHOD_PAD_RE.sub("", s)
    for phrase in STRIP_EXACT:
        s = s.replace(phrase, "")
    s = re.sub(r"\s{2,}", " ", s)
    s = re.sub(r"\s+\.", ".", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip(" \n\t-—")


def is_rule_task(ctx: str) -> bool:
    return ctx.count("\n\n") >= 3 and bool(re.search(r"(?i)\b(?:rules?|conditions?)\b", ctx))


def make_adds(stmt: str, body: str, verdict: bool, sub: str, ctx: str, sc: int) -> list[str]:
    s = stmt.lower()
    bl = body.lower()
    adds: list[str] = []

    def add(t: str) -> None:
        if t[:40].lower() in bl:
            return
        if any(t[:40].lower() == a[:40].lower() for a in adds):
            return
        adds.append(t)

    if "contrapositive" in s:
        add(
            "Keep both forms in view: $p \\Rightarrow q$ and $\\neg q \\Rightarrow \\neg p$ "
            "are the same information."
        )
    if "converse" in s:
        add(
            "The converse flips the arrow to $q \\Rightarrow p$, which can fail even when "
            "the original implication holds."
        )
    if "inverse" in s:
        add(
            "The inverse $\\neg p \\Rightarrow \\neg q$ needs its own check; it does not ride free "
            "on $p \\Rightarrow q$."
        )
    if "unless" in s:
        add(
            "Treat \"$p$ unless $q$\" as $q \\lor p$, or as $\\neg q \\Rightarrow p$, "
            "not as the bare claim $p$."
        )
    if "only if" in s:
        add(
            "\"$p$ only if $q$\" is $p \\Rightarrow q$ — the same direction as the implication arrow, "
            "not the converse."
        )
    if "if and only" in s or "iff" in s:
        add("A biconditional demands both arrows; one direction alone is weaker.")
    if "proper" in s:
        add("Proper inclusion also needs inequality: $B \\subseteq A$ and $B \\neq A$.")
    if "partition" in s:
        add("All three partition conditions matter: nonempty, pairwise disjoint, full cover.")
    if "complement" in s or "ᶜ" in stmt:
        add("Complements are relative to the given universe — nothing outside U is in play.")
    if "\\setminus" in stmt:
        add("Difference starts in the first set and drops whatever also sits in the second.")
    if "power set" in s or "\\mathcal{p}" in s:
        add("Independently including or excluding each of $n$ elements produces $2^n$ subsets.")
    if "\\forall" in stmt or re.search(r"\bfor all\b", s):
        add("A universal claim dies at the first counterexample.")
    if "\\exists" in stmt or re.search(r"\bthere exists\b", s) or re.search(r"\bsome\b", s):
        add("One valid witness is enough for an existential claim.")
    if "vacuous" in s or "vacuous" in bl:
        add("False premise means the implication never meets its failing row.")

    if is_rule_task(ctx) and sc >= 3:
        if any(w in s for w in ("possible", "can ", "cannot")):
            add(
                "With the forced assignments locked, either show one full roster that obeys every rule "
                "or show that every try breaks one."
            )
        elif any(w in s for w in ("must", "always", "every valid")):
            add(
                "Try leaving them out: if every such branch collapses under the rules, the claim is forced."
            )
        elif "exactly one" in s or "unique" in s:
            add("Two different valid completions already kill uniqueness.")
        elif sc >= 4:
            add(
                "Chain the relevant rules and contrapositives, then read this wording against what is forced."
            )

    if not verdict and sc >= 3:
        add("That clash with the shared facts is enough — nearby true claims do not save it.")
    if verdict and sc >= 4 and is_rule_task(ctx):
        add("Nothing beyond the given rules is required for this conclusion.")
    if sub == "1.3" and sc >= 3 and ("\\Rightarrow" in stmt or "implies" in s or "if " in s):
        add("An implication fails only on true premise with false conclusion.")

    return adds


def fallback_pool(stmt: str, verdict: bool, sub: str, ctx: str, sc: int, seed: str) -> list[str]:
    """At most a few claim-aware sentences — never a stack of generic method tips."""
    s = stmt.lower()
    variants: list[str] = []
    if is_rule_task(ctx):
        if any(w in s for w in ("possible", "can ", "cannot")):
            variants.append(
                "After the forced people are locked, either show one full valid roster or show that every try breaks a rule."
            )
        elif any(w in s for w in ("must", "always", "every valid")):
            variants.append(
                "Try the opposite assignment; if every branch that leaves them out collapses, the claim is forced."
            )
        elif "exactly one" in s or "unique" in s:
            variants.append(
                "Uniqueness fails as soon as two different completions both satisfy the full rule list."
            )
        elif sc >= 4:
            variants.append(
                "Chain the relevant rules and contrapositives in order before reading this wording."
            )
        if not verdict and sc >= 3:
            variants.append(
                "The clash with a forced assignment is enough to kill the claim."
            )
    elif sub in ("1.1", "1.2"):
        if not verdict:
            variants.append(
                "Name the concrete mismatch: a wrong element, a missed element, or a swapped operation."
            )
        elif "\\cup" in stmt or "union" in s:
            variants.append(
                "Listing the union element by element makes the count or equality mechanical."
            )
        elif "\\cap" in stmt or "intersection" in s:
            variants.append(
                "Listing the overlap element by element makes the count or equality mechanical."
            )
        elif sc >= 3:
            variants.append(
                "Writing the intermediate set or count on a scratch line removes the ambiguity in the wording."
            )
    else:
        if "converse" in s or "only if" in s or "sufficient" in s or "necessary" in s:
            variants.append(
                "Write the claimed arrow next to $p \\Rightarrow q$ so a converse slip is obvious."
            )
        elif "contrapositive" in s:
            variants.append(
                "The contrapositive keeps the same truth value as the original implication."
            )
        elif not verdict:
            variants.append(
                "Point to the failing truth-row or counterexample; that alone settles the claim."
            )
        elif sc >= 3:
            variants.append(
                "Once the English is translated into symbols, the shared facts decide it directly."
            )

    h = sum(ord(c) for c in seed) or 1
    ordered = [variants[i] for i in sorted(range(len(variants)), key=lambda i: (i * 37 + h) % 97)]
    # Cap how many method sentences we append
    cap = {2: 1, 3: 2, 4: 2, 5: 3}.get(sc, 1)
    return ordered[:cap]


def lengthen(stmt: str, body: str, verdict: bool, sub: str, ctx: str, sc: int, seed: str) -> str:
    body = scrub(body)
    tgt = TARGET[sc]
    if not tgt or words(body) >= int(tgt * 0.9):
        return body
    for sent in make_adds(stmt, body, verdict, sub, ctx, sc):
        if words(body) >= int(tgt * 0.92):
            break
        body = (body + " " + sent).strip()
    if words(body) < int(tgt * 0.9):
        for sent in fallback_pool(stmt, verdict, sub, ctx, sc, seed):
            if words(body) >= int(tgt * 0.92):
                break
            if sent[:40].lower() in body.lower():
                continue
            body = (body + " " + sent).strip()
    return body.strip()



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


def rebuild_overview(t: dict) -> str:
    """Shared situation once, natural prose, no Part titles."""
    ctx = t["context"]
    sub = t["subsection"]
    ans = t["answer_key"]
    letters = LETTERS
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
        )
    elif is_rule_task(ctx):
        shared = (
            "The shared work for every claim is the scenario above. Read the people and rules once, "
            "compute the forced truth values or assignments that all five claims will reuse, and keep "
            "that list beside A–E. Then judge each wording against those forced facts without "
            "restarting the whole chain.\n\n"
            + KEY_FACTS[sub]
        )
    else:
        shared = (
            "Use the scenario above as the shared setup for every claim. "
            "Compute the reusable facts once — sets, truth values, or forced conclusions — "
            "then judge A–E against that list without recomputing from scratch each time.\n\n"
            + KEY_FACTS[sub]
        )
    ans_line = "**Answer.** " + ", ".join(
        f"{letters[i]}={'TRUE' if a else 'FALSE'}" for i, a in enumerate(ans)
    )
    return "\n\n".join([ctx, shared, ans_line])


def process(t: dict) -> dict:
    diff = t.get("difficulty_level") or "3/5"
    ctx = t["context"]
    t["solution_overview"] = rebuild_overview(t)
    new = []
    for i, expl in enumerate(t["tactical_explanations"]):
        letter = LETTERS[i]
        verdict = bool(t["answer_key"][i])
        stmt = t["statements"][i]
        m = re.match(r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n?(.*)$", expl, re.S)
        if m:
            head, body = m.group(1), m.group(2)
        else:
            head = f"**{letter}.** → {'True' if verdict else 'False'}"
            body = expl
        sc = score_claim(stmt, verdict, diff, ctx)
        body = lengthen(stmt, body, verdict, t["subsection"], ctx, sc, seed=f"{t['id']}-{letter}")
        # binom brace-drop avoidance
        body = re.sub(r"\\binom\{(\d+)\}\{(\d+)\}", r"C(\1,\2)", body)
        new.append(f"{head}\n\n{body}")
    t["tactical_explanations"] = new
    t = build.normalize_task_dollars(t)
    return t


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = [process(t) for t in tasks]
    short = 0
    totals = {i: [] for i in range(6)}
    for t in out:
        for i, e in enumerate(t["tactical_explanations"]):
            body = e.split("\n\n", 1)[-1]
            sc = score_claim(t["statements"][i], t["answer_key"][i], t["difficulty_level"], t["context"])
            w = words(body)
            totals[sc].append(w)
            if TARGET[sc] and w < int(TARGET[sc] * 0.65):
                short += 1
            for bad in ("Holding the claim", "lines up with the shared objects", "Pull the one shared", "Part 1:"):
                if bad in body or bad in t["solution_overview"]:
                    raise SystemExit(f"{bad} left in {t['id']}")
    build.write_ts(out)
    print("wrote", len(out), "hard-short", short)
    for sc, ws in totals.items():
        if ws:
            print(f"score {sc}: n={len(ws)} avg={sum(ws)/len(ws):.0f} tgt={TARGET[sc]} min={min(ws)} max={max(ws)}")


if __name__ == "__main__":
    main()
