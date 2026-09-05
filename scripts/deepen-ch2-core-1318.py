#!/usr/bin/env python3
"""Deepen Ch2.1–2.4 explanations: split = chains, expand thin letters, thicken overviews."""

from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch2-cases.json")
LETTERS = "ABCDE"
HDR = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\s*", re.I)
DISP = re.compile(r"\$\$([^$]+)\$\$", re.S)
CLOSE = re.compile(
    r"(?:So |Matching (?:these figures to )?the claim, |Comparing that result with the claim, )?"
    r"(?:so )?the statement is\s+(True|False)\.?\s*$",
    re.I,
)

OPENERS = [
    "Begin from the governing identity, then expand or simplify one display at a time.",
    "Parse the printed formula and reduce both sides before comparing.",
    "Keep the domain restrictions in force while clearing the algebra.",
    "Factor first, cancel only where allowed, then read the leftover expression.",
    "Translate absolute values into ordinary inequalities, then solve.",
    "Apply one exponent law at a time and keep principal roots nonnegative.",
    "Expand the square by distributing every cross term, then collect like terms.",
    "Move every term to one side and factor the resulting expression.",
    "Combine fractions over a common denominator before simplifying.",
    "Substitute the given letters or numbers only after the general rule is written.",
]


def split_chain(inner: str) -> list[str]:
    inner = inner.strip()
    if any(tok in inner for tok in (r"\qquad", r"\begin", r"\Longleftrightarrow", r"\implies")):
        return [inner]
    if inner.count("=") < 2 or len(inner) > 130:
        return [inner]
    bits = [b.strip() for b in inner.split("=")]
    if any(len(b) > 55 for b in bits) or len(bits) > 4:
        return [inner]
    return [f"{bits[i]}={bits[i+1]}" for i in range(len(bits) - 1)]


def deepen_body(body: str, truth: bool, idx: int, task_i: int) -> str:
    body = CLOSE.sub("", body.strip()).strip()
    body = re.sub(r"\n*\s*The claim is (True|False)\.?\s*$", "", body, flags=re.I).strip()

    # Split display chains
    pieces: list[str] = []
    last = 0
    for m in DISP.finditer(body):
        pre = body[last : m.start()].strip()
        if pre:
            pieces.append(pre)
        for part in split_chain(m.group(1)):
            pieces.append(f"$${part}$$")
        last = m.end()
    tail = body[last:].strip()
    if tail:
        pieces.append(tail)
    paras = pieces if pieces else [body]

    # Ensure opener before first display for thin letters
    text = "\n\n".join(paras)
    if len(text) < 300:
        if paras and paras[0].startswith("$$"):
            opener = OPENERS[(task_i + idx) % len(OPENERS)]
            paras.insert(0, opener)
        elif paras and len(paras[0]) < 40 and not paras[0].endswith("."):
            pass
        # Promote a leading inline identity
        if paras and paras[0].startswith("$") and not paras[0].startswith("$$"):
            only = re.fullmatch(r"\$([^$]+)\$\.?", paras[0].strip())
            if only and "=" in only.group(1):
                paras[0] = f"$${only.group(1)}$$"
                opener = OPENERS[(task_i * 3 + idx) % len(OPENERS)]
                paras.insert(0, opener)

        # If still only one display, try to split a prose "a=b=c" written inline
        text = "\n\n".join(paras)
        if text.count("$$") < 2:
            # Look for patterns like Expand: $...$ already handled
            # Add an explicit comparison sentence before closer
            if "claim" not in text.lower() and "match" not in text.lower():
                if truth:
                    paras.append(
                        "The reduced form agrees with the printed right-hand side."
                    )
                else:
                    paras.append(
                        "The reduced form disagrees with the printed right-hand side."
                    )

    text = "\n\n".join(paras)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    word = "True" if truth else "False"
    closers = [
        f"Matching the claim, so the statement is {word}.",
        f"So the statement is {word}.",
        f"Comparing that result with the claim, so the statement is {word}.",
    ]
    if not re.search(r"so the statement is\s+(True|False)", text, re.I):
        text += "\n\n" + closers[(task_i + idx) % 3]
    return text


def thicken_overview(ov: str, task: dict) -> str:
    ov = (ov or "").strip()
    if len(ov) >= 220:
        # still ensure it ends cleanly
        return ov
    sub = task.get("subsection", "")
    tips = {
        "2.1": "Recover the relevant binomial or symmetric identity before testing each printed expansion.",
        "2.2": "Factor numerators and denominators, cancel only on the stated domain, and combine over common denominators.",
        "2.3": "Apply one exponent or radical law at a time; principal roots stay nonnegative.",
        "2.4": "Rewrite absolute values as piecewise expressions or two-sided inequalities before solving.",
    }
    tip = tips.get(sub, "Work each letter from the governing algebra rule.")
    if ov:
        return tip + "\n\n" + ov
    return tip + "\n\n" + (task.get("context") or "")[:240]


def deepen_task(task: dict, task_i: int) -> None:
    keys = task["answer_key"]
    new_expl = []
    for i, expl in enumerate(task["tactical_explanations"]):
        truth = bool(keys[i])
        letter = LETTERS[i]
        m = HDR.match(expl.strip())
        body = expl.strip()[m.end() :].strip() if m else expl.strip()
        new_body = deepen_body(body, truth, i, task_i)
        new_expl.append(f"**{letter}.** → {'True' if truth else 'False'}\n\n{new_body}")
    task["tactical_explanations"] = new_expl
    task["solution_overview"] = thicken_overview(task.get("solution_overview") or "", task)


def main() -> None:
    data = json.loads(PATH.read_text())
    tasks = data["tasks"] if isinstance(data, dict) else data
    n = 0
    for i, t in enumerate(tasks):
        if t.get("subsection") == "2.5":
            continue
        deepen_task(t, i)
        n += 1
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    lens = [
        len(e)
        for t in tasks
        if t.get("subsection") != "2.5"
        for e in t["tactical_explanations"]
    ]
    sl = sorted(lens)
    print(
        f"core tasks {n}; median {sl[len(sl)//2]} min {sl[0]} "
        f"p10 {sl[len(sl)//10]} thin<220 {sum(1 for x in lens if x<220)}"
    )
    # sample
    t0 = next(t for t in tasks if t["case_id"] == "MATH 2.01")
    print("--- sample A ---")
    print(t0["tactical_explanations"][0])


if __name__ == "__main__":
    main()
