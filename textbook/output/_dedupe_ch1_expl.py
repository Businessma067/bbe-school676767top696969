# -*- coding: utf-8 -*-
"""Strip pad boilerplate and intra-explanation duplicate sentences in Ch1 Logic."""
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

# Exact / near-exact filler paragraphs to drop entirely (case-insensitive trim).
DROP_EXACT = [
    "the wording overreaches the shared facts, so the statement is false.",
    "that matches the shared facts, so the statement is true.",
    "nearby true facts do not rescue a wrong wording. once the mismatch is named, the claim is false.",
    "the claim holds on this reading.",
    "that counterexample kills the claim.",
    "that **counterexample** kills the claim.",
    "check containment both ways when equality is claimed, and check for a witness element that sits in one side but not the other when inclusion is claimed.",
    "check the three partition tests separately: nonempty blocks, pairwise empty intersections, and a union that recovers the whole ground set. one failed test is enough.",
    "listing the union element by element makes the count or equality mechanical.",
    "writing the intermediate set or count on a scratch line removes the ambiguity in the wording.",
    "working with the contrapositive is often easier when the original wording is awkward: deny the conclusion first, then deny the premise, and check whether that **forced** chain matches the claim.",
    "working with the contrapositive is often easier when the original wording is awkward: deny the conclusion first, then deny the premise, and check whether that forced chain matches the claim.",
    "the contrapositive keeps the same truth value as the original implication.",
    "either form can be used freely; they never disagree.",
    "a classic counter-pattern is a true implication with a false converse: every square is a rectangle, but not every rectangle is a square. the same asymmetry is what the claim is trying (and failing) to ignore.",
    "because the inverse is logically independent of the original implication, you need a separate reason before accepting it — the given arrow alone is not enough.",
    "necessary conditions can hold without being enough on their own. passing an earlier course may be required for a later one without guaranteeing enrolment.",
    "a sufficient condition forces the conclusion by itself. if further requirements remain after the named condition, sufficiency fails.",
    "that direction is easy to flip by accident in english.",
    '"p only if q" means $p \\Rightarrow q$, not $q \\Rightarrow p$.',
    '"p only if q" is $p \\Rightarrow q$ — the same direction as the implication arrow, not the converse.',
    "compute the shared intermediate facts once (intersections, forced truth values, contrapositives) before looking at the claim wording.",
    "translate the claim into formal logic or set notation so hidden swaps (converse/inverse) become visible.",
    "work the calculation or deduction in order; do not jump to the final yes/no.",
    "if the claim adds an absolute (exactly/always/never), check whether the rules only support a weaker bound.",
    "mark the verdict false only after the chain is complete.",
    "name the trap if the claim is false — that is the point of the item.",
    "independently including or excluding each of n elements produces $2^n$ subsets.",
    "missing any one of those three conditions kills the claim.",
]

# Regex drops (full paragraph match after strip)
DROP_RES = [
    re.compile(r"^with n elements the(?: \*\*)?power set(?:\*\*)? has \$2\^n\$ members because each element can be in or out of a (?:\*\*)?subset(?:\*\*)? independently\.?$", re.I),
    re.compile(r'^"?p only if q"? means \$p \\Rightarrow q\$, not \$q \\Rightarrow p\$\.?$', re.I),
    re.compile(r'^"?p only if q"? is \$p \\Rightarrow q\$ — the same direction as the implication arrow, not the converse\.?$', re.I),
    # Short meta-only equivalence restatements (not the applied versions)
    re.compile(r"^the contrapositive is always(?: logically)? equivalent to the original (?:implication|statement|theorem)\.?$", re.I),
    re.compile(r"^the contrapositive is always logically equivalent to the original implication\. the contrapositive keeps the same truth value as the original implication\.?$", re.I),
]

# Soften verbose contrapositive openers to one clean block opener
CONTRAPOS_OPEN = (
    "An implication and its **contrapositive** are equivalent:\n\n"
    "$$p \\Rightarrow q \\quad\\Leftrightarrow\\quad \\neg q \\Rightarrow \\neg p$$"
)
CONTRAPOS_OPEN_TRAP = (
    "**Trap:** an implication and its **contrapositive** are equivalent:\n\n"
    "$$p \\Rightarrow q \\quad\\Leftrightarrow\\quad \\neg q \\Rightarrow \\neg p$$"
)

CONTRAPOS_BLOB = re.compile(
    r"(?:\*\*Trap:\*\* )?An implication and its \*\*contrapositive\*\* carry the same information:\s*"
    r"\$\$p \\Rightarrow q \\quad\\Leftrightarrow\\quad \\neg q \\Rightarrow \\neg p\$\$\s*"
    r"(?:Either form can be used freely; they never disagree\.\s*)?",
    re.I,
)

CONVERSE_BLOB = re.compile(
    r"(?:\*\*Trap:\*\* )?The \*\*converse\*\* reverses the arrow\. From \$p \\Rightarrow q\$ you do not get \$q \\Rightarrow p\$ for free:\s*"
    r"\$\$q \\Rightarrow p\$\$\s*"
    r"Is a separate claim that can fail even when the original implication holds\.\s*",
    re.I,
)
CONVERSE_CLEAN = (
    "**Trap:** the **converse** reverses the arrow — $q \\Rightarrow p$ is a separate claim:\n\n"
    "$$q \\Rightarrow p$$"
)
CONVERSE_CLEAN_NOTRAP = (
    "The **converse** reverses the arrow — $q \\Rightarrow p$ is a separate claim:\n\n"
    "$$q \\Rightarrow p$$"
)

ONLY_IF_BLOB = re.compile(
    r'(?:\*\*Trap:\*\* )?"p \*\*only if\*\* q" is the same direction as the implication arrow:\s*'
    r"\$\$p \\Rightarrow q\$\$\s*"
    r"It is not the \*\*converse\*\* \$q \\Rightarrow p\$\.\s*",
    re.I,
)
ONLY_IF_CLEAN = (
    '"p **only if** q" means $p \\Rightarrow q$, not the **converse** $q \\Rightarrow p$:\n\n'
    "$$p \\Rightarrow q$$"
)


def norm_key(s: str) -> str:
    t = s.lower().strip()
    t = re.sub(r"\*\*", "", t)
    t = re.sub(r"\$[^$]*\$", " MATH ", t)
    t = re.sub(r"\$\$[^$]*\$\$", " MATH ", t)
    t = re.sub(r"[^a-z0-9\s]", " ", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def should_drop(para: str) -> bool:
    p = para.strip()
    if not p:
        return True
    key = norm_key(p)
    for d in DROP_EXACT:
        if key == norm_key(d):
            return True
    for rx in DROP_RES:
        if rx.match(p.strip()):
            return True
    # repeated only-if lines glued in one paragraph
    if p.count('"p only if q" is $p \\Rightarrow q$') >= 1 and len(p) < 220:
        if "same direction as the implication arrow" in p.lower():
            return True
    return False


def collapse_repeated_sentences(para: str) -> str:
    # Split on sentence boundaries roughly
    parts = re.split(r"(?<=[.!?])\s+", para.strip())
    out = []
    seen = set()
    for part in parts:
        k = norm_key(part)
        if not k:
            continue
        if k in seen:
            continue
        # drop if nearly identical to previous
        if out and norm_key(out[-1]) == k:
            continue
        seen.add(k)
        out.append(part.strip())
    return " ".join(out)


def dedupe_paragraphs(paras: list[str]) -> list[str]:
    out = []
    seen_keys = set()
    for p in paras:
        p = p.strip()
        if should_drop(p):
            continue
        p = collapse_repeated_sentences(p)
        if should_drop(p):
            continue
        k = norm_key(p)
        # skip near-duplicate of any earlier paragraph in this explanation
        if k in seen_keys:
            continue
        # skip if highly overlapping with previous (same first 80 normalized chars)
        if out:
            prev = norm_key(out[-1])
            if k[:80] and k[:80] == prev[:80] and abs(len(k) - len(prev)) < 40:
                continue
            # Drop short meta-only restatements of contrapositive equivalence
            # (keep paragraphs that apply the fact to the concrete claim).
            if (
                "contrapositive" in k
                and ("same truth" in k or ("always" in k and "equivalent" in k))
                and any("contrapositive" in norm_key(x) and "equivalent" in norm_key(x) for x in out)
            ):
                # Keep if it still carries a concrete application beyond the meta claim.
                concrete = any(
                    w in k
                    for w in (
                        "here",
                        "tool",
                        "proving",
                        "theorem",
                        "matches",
                        "guarantee",
                        "therefore",
                        "so if",
                        "so the",
                        "must hold",
                        "must be",
                        "false too",
                        "true too",
                        "every",
                        "bank",
                        "picnic",
                        "regulation",
                        "student",
                        "password",
                        "sequence",
                        "unbounded",
                        "divergence",
                        "inflation",
                        "organizer",
                        "did not pass",
                        "structural",
                    )
                )
                if not concrete or len(k) < 90:
                    continue
        seen_keys.add(k)
        out.append(p)
    return out


def clean_expl(text: str) -> str:
    if not text or not text.startswith("**"):
        return text

    # Normalize contrapositive / converse / only-if openers
    # Use lambda replacements so LaTeX backslashes are not re-parsed as template escapes.
    if CONTRAPOS_BLOB.search(text):
        use_trap = "**Trap:**" in text[:30]
        text = CONTRAPOS_BLOB.sub(
            lambda _m, ut=use_trap: (CONTRAPOS_OPEN_TRAP if ut else CONTRAPOS_OPEN) + "\n\n",
            text,
            count=1,
        )
    if CONVERSE_BLOB.search(text):
        use_trap = "**Trap:**" in text[:30]
        text = CONVERSE_BLOB.sub(
            lambda _m, ut=use_trap: (CONVERSE_CLEAN if ut else CONVERSE_CLEAN_NOTRAP) + "\n\n",
            text,
            count=1,
        )
    if ONLY_IF_BLOB.search(text):
        text = ONLY_IF_BLOB.sub(lambda _m: ONLY_IF_CLEAN + "\n\n", text, count=1)

    # Strip known pad phrases inline (not only whole paragraphs)
    inline_drops = [
        r"\s*The wording overreaches the shared facts, so the statement is False\.",
        r"\s*That matches the shared facts, so the statement is True\.",
        r"\s*Nearby true facts do not rescue a wrong wording\. Once the mismatch is named, the claim is False\.",
        r"\s*The claim holds on this reading\.",
        r"\s*That(?: \*\*)?counterexample(?:\*\*)? kills the claim\.",
        r"\s*The contrapositive keeps the same truth value as the original implication\.",
        r"\s*Either form can be used freely; they never disagree\.",
        r"\s*Working with the contrapositive is often easier when the original wording is awkward:[^\n]*",
        r'(?:\s*"p only if q" is \$p \\Rightarrow q\$ — the same direction as the implication arrow, not the converse\.)+',
        r'\s*"p only if q" means \$p \\Rightarrow q\$, not \$q \\Rightarrow p\$\.',
        r"\s*That direction is easy to flip by accident in English\.",
        r"\s*A classic counter-pattern is a true implication with a false converse:[^\n]*",
        r"\s*Because the inverse is logically independent of the original implication,[^\n]*",
        r"\s*Necessary conditions can hold without being enough on their own\.[^\n]*",
        r"\s*A sufficient condition forces the conclusion by itself\.[^\n]*",
        r"\s*Check containment both ways when equality is claimed,[^\n]*",
        r"\s*Check the three partition tests separately:[^\n]*",
        r"\s*Listing the union element by element makes the count or equality mechanical\.",
        r"\s*Writing the intermediate set or count on a scratch line removes the ambiguity in the wording\.",
        r"\s*Independently including or excluding each of n elements produces \$2\^n\$ subsets\.",
        r"\s*With n elements the(?: \*\*)?power set(?:\*\*)? has \$2\^n\$ members because each element can be in or out of a (?:\*\*)?subset(?:\*\*)? independently\.",
        r"\s*Compute the shared intermediate facts once[^\n]*",
        r"\s*Translate the claim into formal logic[^\n]*",
        r"\s*Work the calculation or deduction in order[^\n]*",
        r"\s*If the claim adds an absolute[^\n]*",
        r"\s*Mark the verdict false only after the chain is complete\.",
        r"\s*Name the trap if the claim is false[^\n]*",
        r"\s*The contrapositive is always(?: logically)? equivalent to the original (?:implication|statement|theorem)\.",
    ]
    for rx in inline_drops:
        text = re.sub(rx, "", text, flags=re.I)

    # Split header / body
    m = re.match(r"^(\*\*[A-E]\.\*\* → (?:True|False))\s*\n+(.*)$", text, re.S)
    if not m:
        return re.sub(r"\n{3,}", "\n\n", text).strip()
    header, body = m.group(1), m.group(2).strip()

    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    paras = dedupe_paragraphs(paras)

    # If the opener already states contrapositive equivalence, strip a leading
    # meta restatement from later paragraphs while keeping the applied content.
    has_cp_open = any(
        "contrapositive" in norm_key(p) and "equivalent" in norm_key(p) and len(norm_key(p)) < 100
        for p in paras
    )
    if has_cp_open:
        trimmed = []
        for i, p in enumerate(paras):
            if i == 0:
                trimmed.append(p)
                continue
            p2 = re.sub(
                r"^The contrapositive is always(?: logically)? equivalent to the original "
                r"(?:implication|statement|theorem),\s*which is true,\s*so the contrapositive is true too\s*[-—,]?\s*"
                r"(?:and indeed\s+)?",
                lambda _m: "Since the original is true, the contrapositive is true too — ",
                p,
                flags=re.I,
            )
            p2 = re.sub(
                r"^The contrapositive is always(?: logically)? equivalent to the original "
                r"(?:implication|statement|theorem)(?:[,.]|\s*—\s*|\s*-\s*)?\s*",
                "",
                p2,
                flags=re.I,
            )
            p2 = re.sub(
                r"^The contrapositive \$\\neg Q \\Rightarrow \\neg P\$ is always(?: logically)? equivalent to "
                r"\$P \\Rightarrow Q\$\s*[-—,]?\s*(?:a structural guarantee for any implication\.)?\s*",
                lambda _m: "So $\\neg Q \\Rightarrow \\neg P$ holds whenever $P \\Rightarrow Q$ does.\n\n",
                p2,
                flags=re.I,
            )
            p2 = re.sub(
                r"^The contrapositive ALWAYS shares the same truth value as the original statement\s*[-—.]?\s*"
                r"(?:this is a structural guarantee[^.]*\.)?\s*",
                "",
                p2,
                flags=re.I,
            )
            p2 = p2.strip()
            if p2:
                trimmed.append(p2)
        paras = [p for p in trimmed if p]

    # Ensure a short verdict closer if the last paragraph doesn't already close.
    if paras:
        last_k = norm_key(paras[-1])
        has_close = last_k.startswith("so the statement is") or last_k.endswith(
            "so the statement is true"
        ) or last_k.endswith("so the statement is false")
        if not has_close:
            if "→ True" in header:
                paras.append("So the statement is True.")
            elif "→ False" in header:
                paras.append("So the statement is False.")

    # Avoid duplicate closers
    while len(paras) >= 2 and norm_key(paras[-1]) in {
        "so the statement is true",
        "so the statement is false",
    }:
        prev = norm_key(paras[-2])
        if "so the statement is" in prev:
            paras.pop()
        else:
            break

    body = "\n\n".join(paras)
    body = re.sub(r"[ \t]+\n", "\n", body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return f"{header}\n\n{body}"


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    changed = 0
    before_chars = 0
    after_chars = 0
    for t in tasks:
        expl = t.get("tactical_explanations") or []
        new = []
        for e in expl:
            before_chars += len(e)
            c = clean_expl(e)
            after_chars += len(c)
            if c != e:
                changed += 1
            new.append(c)
        t["tactical_explanations"] = new

    out = [build.normalize_task_dollars(t) for t in tasks]
    build.write_ts(out)
    print(
        f"cleaned {changed} explanations; "
        f"chars {before_chars} -> {after_chars} ({before_chars - after_chars} removed); "
        f"tasks {len(out)}"
    )


if __name__ == "__main__":
    main()
