#!/usr/bin/env python3
"""Reorder Ch 11.4 tasks by difficulty and expand tactical explanations."""

from __future__ import annotations

import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch11-differentiation.ts")


def extract_11_4_tasks(text: str) -> tuple[str, list[str], str]:
    """Return (prefix, task_blocks, suffix) for subsection 11.4 tasks."""
    # Find first task that contains subsection 11.4 by scanning objects near the end
    # Locate the first `subsection: "11.4"` and walk back to its opening `{`
    first_sub = text.find('subsection: "11.4"')
    if first_sub < 0:
        raise SystemExit("no 11.4 subsection")
    start = text.rfind("\n  {\n", 0, first_sub)
    if start < 0:
        raise SystemExit("opening brace not found")
    start = start + 1  # point at spaces before {

    prefix = text[:start]
    rest = text[start:]
    end_arr = rest.rfind("\n];")
    body = rest[:end_arr]
    suffix = rest[end_arr:]

    tasks: list[str] = []
    i = 0
    while i < len(body):
        while i < len(body) and body[i] in " \n\t,":
            i += 1
        if i >= len(body):
            break
        if body[i] != "{":
            raise SystemExit(f"expected {{ at {i}: {body[i:i+40]!r}")
        depth = 0
        in_tick = False
        j = i
        while j < len(body):
            ch = body[j]
            if in_tick:
                if ch == "\\" and j + 1 < len(body):
                    j += 2
                    continue
                if ch == "`":
                    in_tick = False
                j += 1
                continue
            if ch == "`":
                in_tick = True
                j += 1
                continue
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    j += 1
                    tasks.append(body[i:j].strip())
                    i = j
                    break
            j += 1
        else:
            raise SystemExit("unclosed task object")

    tasks_11_4 = [t for t in tasks if 'subsection: "11.4"' in t]
    if len(tasks_11_4) != 40:
        raise SystemExit(f"expected 40 11.4 tasks, got {len(tasks_11_4)} (parsed {len(tasks)})")
    return prefix, tasks_11_4, suffix


def diff_key(block: str) -> tuple[int, int]:
    m = re.search(r'difficulty_level: "(\d+)/5"', block)
    d = int(m.group(1)) if m else 9
    s = re.search(r"sort_order: (\d+)", block)
    so = int(s.group(1)) if s else 0
    return (d, so)


def expand_one_expl(expl: str) -> str:
    """Expand a single **X.** → True/False explanation."""
    # Already detailed with full scaffold?
    if "**What the figure shows.**" in expl:
        return expl
    # If already has Assumption from a prior run, still enrich Applied if thin
    m = re.match(
        r"\*\*([A-E])\.\*\* → (True|False)\s*\n\n(.*)\Z",
        expl.strip(),
        re.S,
    )
    if not m:
        return expl
    letter, verd, body = m.group(1), m.group(2), m.group(3).strip()

    # If already scaffolded, pull out the Applied paragraph and deepen it
    applied = body
    if "**Assumption.**" in body:
        am = re.search(
            r"\*\*Applied to this claim\.\*\*\s*(.*?)\s*\*\*Conclusion\.\*\*",
            body,
            re.S,
        )
        if am:
            applied = am.group(1).strip()
        else:
            applied = re.sub(r"\*\*[^*]+\*\*", "", body)
            applied = re.sub(r"\n+", " ", applied).strip()

    applied = re.sub(r"\n*The statement is (True|False)\.?\s*$", "", applied).strip()

    # Deepen thin applied notes
    applied = deepen_applied(applied, verd)

    if verd == "True":
        method = (
            "Identify which curve the claim talks about (the stem names the colours / labels). "
            "Then ask three questions of the picture: (1) Is the curve above or below the "
            "horizontal axis at the relevant $x$? (2) Does it cross the axis there, and in "
            "which direction? (3) If two curves are drawn, which one sits higher at that $x$? "
            "Use only those geometric facts — not an algebraic formula for the curve."
        )
        conclusion = (
            "The geometric reading matches the claim, so the statement is True."
        )
    else:
        method = (
            "Identify which curve the claim talks about, then check the same three geometric "
            "questions (sign, crossing direction, relative height). Also watch for category "
            "errors: a fact about $f'$ (slope) is not automatically a fact about $f$ (level), "
            "and a fact about $f''$ (concavity / whether $f'$ is rising) is not a fact about "
            "where $f$ has a local max or min."
        )
        conclusion = (
            "The picture does not support the claim (wrong sign, wrong crossing, or a "
            "confused $f$/$f'$/$f''$ role). The statement is False."
        )

    return (
        f"**{letter}.** → {verd}\n\n"
        f"**Assumption.** The figure's labels are correct (for example brown really is the "
        f"named $f'$, $P'$, or $f$), every drawn curve is continuous on the visible window, "
        f"and an axis crossing that clearly goes from one side of the axis to the other is a "
        f"genuine sign change. We read approximate heights from the vertical scale. We do "
        f"**not** invent or expand an algebraic formula when the graph already shows the "
        f"needed information.\n\n"
        f"**How to solve it.** {method}\n\n"
        f"**Applied to this claim.** {applied}\n\n"
        f"**Conclusion.** {conclusion}"
    )


# Accept either prior "How to read it" or new "How to solve it" scaffolds when re-running.


def deepen_applied(note: str, verd: str) -> str:
    """Add a bit more connective tissue to a short applied note."""
    note = note.strip()
    if len(note) > 220:
        return note
    # Avoid double-deepening
    if note.startswith("Step by step:"):
        return note
    return (
        "Step by step: "
        + note.rstrip(".")
        + ". "
        + (
            "That is exactly what the claim asserts."
            if verd == "True"
            else "That conflicts with what the claim asserts, so we reject the claim."
        )
    )


def expand_explanations(block: str) -> str:
    # Replace each template literal inside tactical_explanations
    def repl_array(m: re.Match) -> str:
        inner = m.group(1)
        # split on `,` between ticks: `...`,\n      `...`
        parts = re.findall(r"`([\s\S]*?)`", inner)
        if len(parts) != 5:
            # keep as-is if unexpected
            return m.group(0)
        expanded = []
        for p in parts:
            expanded.append("`" + expand_one_expl(p) + "`")
        return "tactical_explanations: [\n      " + ",\n      ".join(expanded) + "\n    ]"

    return re.sub(
        r"tactical_explanations: \[([\s\S]*?)\]",
        repl_array,
        block,
        count=1,
    )


def renumber(block: str, n: int) -> str:
    block = re.sub(r'id: "math-11-\d+"', f'id: "math-11-{n}"', block, count=1)
    block = re.sub(r'case_id: "MATH 11\.\d+"', f'case_id: "MATH 11.{n}"', block, count=1)
    block = re.sub(r"sort_order: \d+", f"sort_order: {n}", block, count=1)
    return block


def main() -> None:
    text = PATH.read_text()
    prefix, tasks, suffix = extract_11_4_tasks(text)

    # Sort by difficulty then old sort_order
    tasks_sorted = sorted(tasks, key=diff_key)

    out_tasks = []
    for i, block in enumerate(tasks_sorted):
        n = 121 + i
        block = expand_explanations(block)
        block = renumber(block, n)
        out_tasks.append(block)

    # Rebuild file: prefix should end before first 11.4 `{`
    # prefix currently ends right before first `{` of 11.4 — may need comma
    pref = prefix.rstrip()
    if not pref.endswith(","):
        # previous task ends with }
        if pref.endswith("}"):
            pref += ","
    new_body = ",\n".join(out_tasks)
    new_text = pref + "\n" + new_body + suffix

    # Update header comment
    new_text = new_text.replace(
        "MATH 11.121–11.160",
        "MATH 11.121–11.160, ordered by difficulty",
    )

    PATH.write_text(new_text)

    # Report order
    print("New order:")
    for b in out_tasks:
        cid = re.search(r'case_id: "(MATH 11\.\d+)"', b).group(1)
        diff = re.search(r'difficulty_level: "([^"]+)"', b).group(1)
        title = re.search(r'title: "([^"]+)"', b).group(1)
        print(f"  {cid} {diff} {title[:60]}")

    # sanity: difficulty nondecreasing
    diffs = [diff_key(b)[0] for b in out_tasks]
    assert diffs == sorted(diffs), diffs
    print("OK: difficulty nondecreasing, count", len(out_tasks))


if __name__ == "__main__":
    main()
