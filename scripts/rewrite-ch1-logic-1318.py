#!/usr/bin/env python3
"""Deepen Ch1 logic (math-ch1-logic.ts) tactical explanations to MATH 13.18 depth.

Parses template-literal explanation arrays, expands thin one-liners into
named-rule / display / compare tutoring, and writes the TS file back.
"""

from __future__ import annotations

import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch1-logic.ts")
LETTERS = "ABCDE"

HDR = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\s*", re.I)


def unescape_tpl(s: str) -> str:
    out = []
    i = 0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s):
            nxt = s[i + 1]
            if nxt in "`\\$":
                out.append(nxt)
                i += 2
                continue
            # keep LaTeX backslash commands
            out.append("\\")
            i += 1
            continue
        out.append(s[i])
        i += 1
    return "".join(out)


def escape_tpl(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def parse_tpl_strings(block: str) -> list[str]:
    strings: list[str] = []
    j = 0
    while j < len(block):
        if block[j] == "`":
            j += 1
            buf: list[str] = []
            while j < len(block):
                if block[j] == "\\" and j + 1 < len(block):
                    buf.append(block[j : j + 2])
                    j += 2
                    continue
                if block[j] == "`":
                    j += 1
                    break
                buf.append(block[j])
                j += 1
            strings.append(unescape_tpl("".join(buf)))
        else:
            j += 1
    return strings


def extract_tasks(text: str) -> list[dict]:
    """Return list of {start, end, expl_start, expl_end, explanations, answer_key, overview spans}."""
    tasks = []
    # Find each object that has tactical_explanations
    for m in re.finditer(r"tactical_explanations:\s*\[", text):
        # walk back only to the previous task boundary
        pre = text[max(0, m.start() - 4000) : m.start()]
        # nearest case_id / answer_key just before this explanations array
        cid_ms = list(re.finditer(r"case_id:\s*`([^`]+)`", pre))
        keys_ms = list(re.finditer(r"answer_key:\s*\[([^\]]+)\]", pre))
        if not keys_ms:
            continue
        # Prefer the answer_key that sits after the last case_id and before explanations
        cid_m = cid_ms[-1] if cid_ms else None
        key_raw = keys_ms[-1].group(1)
        # If multiple keys after last case_id, take the last among those
        if cid_m:
            after_cid = [km for km in keys_ms if km.start() > cid_m.start()]
            if after_cid:
                key_raw = after_cid[-1].group(1)
        answer_key = [
            tok.lower() == "true"
            for tok in re.findall(r"\b(true|false)\b", key_raw, re.I)
        ]
        # parse explanation array
        start = m.end()
        depth = 1
        j = start
        while j < len(text) and depth > 0:
            c = text[j]
            if c == "`":
                j += 1
                while j < len(text):
                    if text[j] == "\\" and j + 1 < len(text):
                        j += 2
                        continue
                    if text[j] == "`":
                        j += 1
                        break
                    j += 1
                continue
            if c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
            j += 1
        expl_end = j - 1  # position of closing ]
        block = text[start:expl_end]
        exps = parse_tpl_strings(block)
        if len(exps) != 5 or len(answer_key) != 5:
            continue
        tasks.append(
            {
                "case_id": cid_m.group(1) if cid_m else "?",
                "expl_start": start,
                "expl_end": expl_end,
                "explanations": exps,
                "answer_key": answer_key,
                "array_open": m.start(),
            }
        )
    return tasks


OPENERS = [
    "Read the claim against the definition, then check membership or equality one object at a time.",
    "Name the set operation in force, form the resulting roster, and compare it with the printed set.",
    "Translate the propositional claim into truth conditions before testing a row or an equivalence.",
    "Instantiate the quantified sentence on the stated domain and look for a witness or a counterexample.",
    "Apply the counting rule once, substitute the given size, and compare with the claimed figure.",
    "Start from the recovered overview figure and do only the extra check this claim needs.",
    "Expand the logical connective from its truth table before judging the printed formula.",
    "List the relevant elements explicitly, then decide membership, subset, or equality.",
    "Clear the set-builder condition against the stated universe before comparing rosters.",
    "Use inclusion-exclusion or a Venn region formula, then compare with the claimed count.",
]


def deepen_letter(expl: str, truth: bool, letter: str, idx: int, task_i: int = 0) -> str:
    m = HDR.match(expl.strip())
    body = expl.strip()[m.end() :].strip() if m else expl.strip()
    word = "True" if truth else "False"

    # Already rich enough: ensure closer and header only
    if len(body) >= 320 and body.count("$$") >= 1:
        body = re.sub(
            r"\n*(?:so the statement is|So the statement is|the statement is)\s+(True|False)\.?\s*$",
            "",
            body,
            flags=re.I,
        ).strip()
        if not body.endswith("."):
            body += "."
        body += f"\n\nSo the statement is {word}."
        return f"**{letter}.** → {word}\n\n{body}"

    # Thin one-liner style: "X, so Y, so the statement is True."
    # Expand into rule → display → compare.
    body_plain = re.sub(r"\s+", " ", body).strip()

    # Self-subset pattern
    if re.search(r"Every member of \$(\w+)\$ sits in \$\1\$", body_plain):
        setname = re.search(r"Every member of \$(\w+)\$", body_plain).group(1)
        return (
            f"**{letter}.** → {word}\n\n"
            f"Subset is reflexive: every set is a subset of itself because each of its members sits in it.\n\n"
            f"Take an arbitrary element $x\\in {setname}$. By definition of membership in ${setname}$,\n\n"
            f"$$x\\in {setname}$$\n\n"
            f"so the subset test passes for every $x$. Hence\n\n"
            f"$${setname}\\subseteq {setname}$$\n\n"
            f"Matching the claim, so the statement is {word}."
        )

    # Element membership one-liner
    mem = re.search(
        r"(?:The number|The (?:integer|element)|)\s*\$([^$]+)\$ sits (?:on the roster of|in) \$(\w+)\$",
        body_plain,
    )
    if mem and len(body) < 220:
        elt, setname = mem.group(1), mem.group(2)
        return (
            f"**{letter}.** → {word}\n\n"
            f"Membership holds when the object appears among the set's listed elements.\n\n"
            f"Inspect the roster of ${setname}$ for ${elt}$:\n\n"
            f"$${elt}\\in {setname}$$\n\n"
            f"The object is present, matching the claim. So the statement is {word}."
        )

    # Subset by listing elements
    sub = re.search(
        r"Both \$([^$]+)\$ and \$([^$]+)\$ sit in \$(\w+)\$",
        body_plain,
    )
    if sub and len(body) < 240:
        a, b, setname = sub.group(1), sub.group(2), sub.group(3)
        return (
            f"**{letter}.** → {word}\n\n"
            f"A two-element set is a subset when each of its members sits in the larger set.\n\n"
            f"Check the two candidates against ${setname}$:\n\n"
            f"$${a}\\in {setname}$$\n\n"
            f"$${b}\\in {setname}$$\n\n"
            f"Hence\n\n"
            f"$$\\{{{a},{b}\\}}\\subseteq {setname}$$\n\n"
            f"So the statement is {word}."
        )

    # Overview recovered figure
    rec = re.search(
        r"The overview recovered \$([^$]+)\$\. The claim is(?: that same figure)?\s*\$([^$]+)\$",
        body_plain,
    )
    if not rec:
        rec = re.search(
            r"The overview recovered \$([^$]+)\$\. The claim is that same figure",
            body_plain,
        )
    if rec and len(body) < 260:
        val = rec.group(1)
        return (
            f"**{letter}.** → {word}\n\n"
            f"The overview already recovered the shared figure\n\n"
            f"$${val}$$\n\n"
            f"The claim asserts that same value. Comparing the two sides, so the statement is {word}."
        )

    # Generic thin expansion: add opener + ensure displays + closer
    if len(body) < 250:
        opener = OPENERS[(task_i * 5 + idx) % len(OPENERS)]
        # promote inline $eq$ to display if body is a single sentence with math
        if "$$" not in body:
            def promote(m):
                inner = m.group(1)
                if "=" in inner or "\\in" in inner or "\\subseteq" in inner or "\\cup" in inner:
                    return f"\n\n$${inner}$$\n\n"
                return m.group(0)

            promoted = re.sub(r"\$([^$]{3,80})\$", promote, body, count=2)
            body = promoted
        # strip old closer
        body = re.sub(
            r",?\s*(?:so )?the statement is\s+(True|False)\.?\s*$",
            "",
            body,
            flags=re.I,
        ).strip()
        # avoid duplicating opener
        if not body.startswith(opener[:20]):
            body = opener + "\n\n" + body
        if not body.endswith("."):
            body += "."
        body += f"\n\nSo the statement is {word}."
        # cleanup blank lines
        body = re.sub(r"\n{3,}", "\n\n", body).strip()
        return f"**{letter}.** → {word}\n\n{body}"

    # Medium letters: ensure closer
    body = re.sub(
        r"\n*(?:so the statement is|So the statement is|the statement is)\s+(True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    ).strip()
    if not re.search(r"so the statement is\s+(True|False)", body, re.I):
        body += f"\n\nSo the statement is {word}."
    return f"**{letter}.** → {word}\n\n{body}"


def rewrite_array(exps: list[str], keys: list[bool], task_i: int = 0) -> str:
    parts = []
    for i, (e, k) in enumerate(zip(exps, keys)):
        new = deepen_letter(e, bool(k), LETTERS[i], i, task_i=task_i)
        parts.append("      `" + escape_tpl(new) + "`")
    return "\n\n".join(parts)


def main() -> None:
    text = PATH.read_text(encoding="utf-8")
    tasks = extract_tasks(text)
    print(f"found {len(tasks)} tasks")
    # Replace from the end so indices stay valid
    for ti, t in enumerate(reversed(tasks)):
        task_i = len(tasks) - 1 - ti
        new_block = rewrite_array(t["explanations"], t["answer_key"], task_i=task_i)
        text = text[: t["expl_start"]] + "\n" + new_block + "\n    " + text[t["expl_end"] :]
    PATH.write_text(text, encoding="utf-8")

    # Remeasure
    tasks2 = extract_tasks(text)
    lens = [len(e) for t in tasks2 for e in t["explanations"]]
    sl = sorted(lens)
    print(
        f"after: n={len(lens)} median={sl[len(sl)//2]} min={sl[0]} "
        f"thin<200={sum(1 for x in lens if x<200)} thin<250={sum(1 for x in lens if x<250)}"
    )
    # header audit with corrected keys
    mm = 0
    for t in tasks2:
        for i, e in enumerate(t["explanations"]):
            m = HDR.match(e.strip())
            if not m or (m.group(2) == "True") != bool(t["answer_key"][i]):
                mm += 1
    print(f"header mismatches: {mm}")


if __name__ == "__main__":
    main()
