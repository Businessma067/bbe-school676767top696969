#!/usr/bin/env python3
"""Reorder Ch 11.4 tasks by difficulty and keep natural tactical explanations.

Explanations should be continuous prose (like earlier chapter sections), not
scaffold headings such as Assumption / How to solve it / Applied / Conclusion.
"""

from __future__ import annotations

import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch11-differentiation.ts")


def extract_11_4_tasks(text: str) -> tuple[str, list[str], str]:
    """Return (prefix, task_blocks, suffix) for subsection 11.4 tasks."""
    first_sub = text.find('subsection: "11.4"')
    if first_sub < 0:
        raise SystemExit("no 11.4 subsection")
    # 11.4 objects may start as "{\n    id:" (no indent) after a previous SVG close
    start_candidates = [
        text.rfind("\n  {\n", 0, first_sub),
        text.rfind("\n{\n", 0, first_sub),
    ]
    start_candidates = [s for s in start_candidates if s >= 0]
    if not start_candidates:
        raise SystemExit("opening brace not found")
    start = max(start_candidates) + 1  # point at "{"

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


def strip_scaffold(expl: str) -> str:
    """Convert scaffolded or short notes into natural continuous prose."""
    m = re.match(
        r"\*\*([A-E])\.\*\* → (True|False)\s*\n\n(.*)\Z",
        expl.strip(),
        re.S,
    )
    if not m:
        return expl
    letter, verd, body = m.group(1), m.group(2), m.group(3).strip()

    if "**Assumption.**" in body or "**How to solve it.**" in body:
        am = re.search(
            r"\*\*Applied to this claim\.\*\*\s*(.*?)\s*\*\*Conclusion\.\*\*",
            body,
            re.S,
        )
        if am:
            body = am.group(1).strip()
        else:
            body = re.sub(r"\*\*[^*]+\*\*", "", body)
            body = re.sub(r"\n+", " ", body).strip()

    body = re.sub(r"^Step by step:\s*", "", body)
    body = re.sub(
        r"\s*That is exactly what the claim asserts\.?\s*$",
        "",
        body,
    )
    body = re.sub(
        r"\s*That conflicts with what the claim asserts, so we reject the claim\.?\s*$",
        "",
        body,
    )
    body = re.sub(r"\n*The statement is (True|False)\.?\s*$", "", body).strip()
    body = body.rstrip(".") + "."

    # Capitalize first alphabetical character if needed
    for i, ch in enumerate(body):
        if ch.isalpha():
            body = body[:i] + ch.upper() + body[i + 1 :]
            break
        if ch == "$":
            break

    if not body.lower().rstrip(".").endswith(f"the statement is {verd.lower()}"):
        body = f"{body} The statement is {verd}."

    body = re.sub(r"  +", " ", body)
    return f"**{letter}.** → {verd}\n\n{body}"


def expand_explanations(block: str) -> str:
    """Keep/repair explanations as natural prose (never reintroduce scaffolds)."""

    def repl_array(m: re.Match) -> str:
        inner = m.group(1)
        parts = re.findall(r"`([\s\S]*?)`", inner)
        if len(parts) != 5:
            return m.group(0)
        expanded = ["`" + strip_scaffold(p) + "`" for p in parts]
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

    tasks_sorted = sorted(tasks, key=diff_key)

    out_tasks = []
    for i, block in enumerate(tasks_sorted):
        n = 121 + i
        block = expand_explanations(block)
        block = renumber(block, n)
        out_tasks.append(block)

    pref = prefix.rstrip()
    if not pref.endswith(",") and pref.endswith("}"):
        pref += ","
    new_body = ",\n".join(out_tasks)
    new_text = pref + "\n" + new_body + suffix

    PATH.write_text(new_text)

    print("New order:")
    for b in out_tasks:
        cid = re.search(r'case_id: "(MATH 11\.\d+)"', b).group(1)
        diff = re.search(r'difficulty_level: "([^"]+)"', b).group(1)
        title = re.search(r'title: "([^"]+)"', b).group(1)
        print(f"  {cid} {diff} {title[:60]}")

    diffs = [diff_key(b)[0] for b in out_tasks]
    assert diffs == sorted(diffs), diffs

    # No scaffolds in 11.4
    region = new_text[new_text.find('id: "math-11-121"') :]
    for bad in (
        "**Assumption.**",
        "**How to solve it.**",
        "**Applied to this claim.**",
        "**Conclusion.**",
    ):
        assert bad not in region, bad
    print("OK: difficulty nondecreasing, natural explanations, count", len(out_tasks))


if __name__ == "__main__":
    main()
