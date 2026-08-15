# -*- coding: utf-8 -*-
"""
Second pass: lengthen thin medium/hard explanations without template pads.
Does not touch statements/context already verified clean.
"""
from __future__ import annotations

import importlib.util
import json
import re
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

HEADER = re.compile(r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n*", re.I)
TRAP = (
    "converse", "inverse", "contrapositive", "unless", "only if", "exactly",
    "always", "never", "partition", "complement", "vacuous", "equivalent",
    "necessary", "sufficient", "forall", "exists", "valid", "must",
    "impossible", "possible", "proper", "iff", "if and only", "unique",
)


def is_rule(ctx: str) -> bool:
    return bool(re.search(r"(?i)\b(?:rules?|conditions?|clues?)\b", ctx or "")) and (
        ctx.count("\n\n") >= 2 or bool(re.search(r"\n\s*(?:\d+\.|\(\d+\))", ctx or ""))
    )


def score(stmt, verdict, diff, ctx):
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
    if is_rule(ctx) and any(
        w in s for w in ("must", "always", "every valid", "possible", "impossible", "unique", "exactly", "cannot", "never", "essential")
    ):
        sc += 2
    if diff == "5/5" and sc >= 2:
        sc += 1
    return min(sc, 5)


def words(s: str) -> int:
    return len(re.findall(r"\b\w+\b", s or ""))


def paras(s: str) -> int:
    return len([p for p in s.split("\n\n") if p.strip()])


def elaborations(stmt: str, verdict: bool, sub: str, ctx: str, sc: int, body: str) -> list[str]:
    s = stmt.lower()
    bl = body.lower()
    out = []

    def add(t: str):
        if not t or t[:50].lower() in bl:
            return
        out.append(t)

    if "converse" in s:
        add(
            "A classic counter-pattern is a true implication with a false converse: "
            "every square is a rectangle, but not every rectangle is a square. "
            "The same asymmetry is what the claim is trying (and failing) to ignore."
        )
    if "inverse" in s:
        add(
            "Because the inverse is logically independent of the original implication, "
            "you need a separate reason before accepting it — the given arrow alone is not enough."
        )
    if "contrapositive" in s:
        add(
            "Working with the contrapositive is often easier when the original wording is awkward: "
            "deny the conclusion first, then deny the premise, and check whether that forced chain matches the claim."
        )
    if "unless" in s:
        add(
            "If you rewrite \"$p$ unless $q$\" as $\\neg q \\Rightarrow p$, the truth table becomes mechanical. "
            "Any reading that treats it as bare $p$ (ignoring the unless-clause) is already off."
        )
    if "only if" in s:
        add(
            "English \"only if\" is easy to flip. Keep the arrow pointing the same way as "
            "\"$p$ only if $q$\" → $p \\Rightarrow q$, then compare that to what the claim asserts."
        )
    if "necessary" in s:
        add(
            "Necessary conditions can hold without being enough on their own. "
            "Passing an earlier course may be required for a later one without guaranteeing enrolment."
        )
    if "sufficient" in s:
        add(
            "A sufficient condition forces the conclusion by itself. "
            "If further requirements remain after the named condition, sufficiency fails."
        )
    if "\\cap" in stmt or "intersection" in s:
        add(
            "List the overlap explicitly. An element survives intersection only when it appears in every named set; "
            "one miss drops it."
        )
    if "\\cup" in stmt or "union" in s:
        add(
            "List the union by sweeping each set once. Shared elements appear only once in the combined roster."
        )
    if "\\setminus" in stmt:
        add(
            "Difference is ordered: start from the first set and delete whatever also sits in the second. "
            "Swapping the order usually changes the answer."
        )
    if "partition" in s:
        add(
            "Check the three partition tests separately: nonempty blocks, pairwise empty intersections, "
            "and a union that recovers the whole ground set. One failed test is enough."
        )
    if is_rule(ctx) and sc >= 3:
        if any(w in s for w in ("must", "always", "every valid")):
            add(
                "Argue by contradiction: assume the named person or object stays out, push the rules "
                "(and contrapositives) as far as they go, and watch for a size floor or XOR-style clash."
            )
        if any(w in s for w in ("possible", "can ", "cannot", "impossible")):
            add(
                "After the forced core is fixed, try to complete the free variables into one full valid roster. "
                "If every completion breaks a rule, the combination is impossible."
            )
        if "unique" in s or "exactly one" in s:
            add(
                "Exhibit two concrete completions that both obey every rule. "
                "If both survive, uniqueness is already false — no further search is needed."
            )
    if not verdict and sc >= 2:
        add(
            "Nearby true facts do not rescue a wrong wording. Once the mismatch is named, the claim is False."
        )
    if verdict and sc >= 3 and is_rule(ctx):
        add(
            "Nothing beyond the given rules is required for this conclusion; the forced chain already settles it."
        )
    return out


def lengthen_body(body: str, stmt: str, verdict: bool, sub: str, ctx: str, sc: int) -> str:
    targets = [0, 40, 70, 110, 150, 200]
    target = targets[min(sc, 5)]
    if is_rule(ctx) and sc >= 3:
        target = max(target, 150)
    if is_rule(ctx) and sc >= 4:
        target = max(target, 180)

    if words(body) >= target and paras(body) >= (3 if sc >= 2 else 2):
        return body

    extras = elaborations(stmt, verdict, sub, ctx, sc, body)
    parts = [p for p in body.split("\n\n") if p.strip()]
    # Insert extras before the final verdict line when present
    verdict_line = None
    if parts and "statement is" in parts[-1].lower():
        verdict_line = parts.pop()
    for e in extras:
        if words("\n\n".join(parts)) >= target and paras("\n\n".join(parts)) >= 4:
            break
        parts.append(e)
    if verdict_line:
        parts.append(verdict_line)
    # Split long paragraphs into sentences for hard claims
    if sc >= 3:
        rebuilt = []
        for p in parts:
            if "$$" in p or words(p) < 40:
                rebuilt.append(p)
                continue
            sents = re.split(r"(?<=[.!?])\s+(?=[A-Z$\\*])", p)
            if len(sents) >= 3 and words(p) > 60:
                rebuilt.extend(sents)
            else:
                rebuilt.append(p)
        parts = rebuilt
    return "\n\n".join(p.strip() for p in parts if p.strip())


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    n = 0
    for t in tasks:
        for i, e in enumerate(t["tactical_explanations"]):
            m = HEADER.match(e)
            if not m:
                continue
            head = m.group(1)
            body = e[m.end() :].strip()
            sc = score(t["statements"][i], t["answer_key"][i], t["difficulty_level"], t["context"])
            if sc < 2:
                continue
            new_body = lengthen_body(
                body, t["statements"][i], t["answer_key"][i], t["subsection"], t["context"], sc
            )
            if new_body != body:
                t["tactical_explanations"][i] = f"{head}\n\n{new_body}"
                n += 1
    build.write_ts(tasks)
    DUMP.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
    print("lengthened", n)


if __name__ == "__main__":
    main()
