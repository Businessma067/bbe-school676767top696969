#!/usr/bin/env python3
"""Deepen Chapter 4.1–4.4 explanations toward MATH 13.18 tutoring depth.

- Normalize every letter header to **A.** → True/False matching answer_key
- Force a plain closer: so the statement is True/False.
- Expand no-display and very thin letters with step displays where possible
- Thicken thin independent overviews
Does not change stems or answer keys.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))

from _ch4_1318_lib import join, normalize_existing, opener  # noqa: E402

PATH = ROOT / "src/data/math-ch4-cases.json"

# Varied bridges used when we inject a display from an inline equation.
BRIDGES = [
    "Write the governing equation:",
    "Record the equation to solve:",
    "Start from",
    "That rearranges to",
    "The next line is",
]


def strip_closer(text: str) -> str:
    t = text.rstrip()
    # Remove a final sentence that is only a verdict closer.
    t = re.sub(
        r"\n+(Comparing with the claim, )?so the statement is\s+(True|False)\.?\s*$",
        "",
        t,
        flags=re.I,
    )
    t = re.sub(
        r"\n+(The claim is|The statement is|Thus the statement is|Hence the statement is|Therefore the statement is)\s+(True|False)\.?\s*$",
        "",
        t,
        flags=re.I,
    )
    # If the last sentence ends with ", so the statement is True/False."
    # keep the preceding clause and drop only the verdict tail.
    t = re.sub(
        r",\s*so the statement is\s+(True|False)\.?\s*$",
        ".",
        t,
        flags=re.I,
    )
    t = re.sub(
        r"\s+so the statement is\s+(True|False)\.?\s*$",
        "",
        t,
        flags=re.I,
    )
    return t.rstrip().rstrip(".").rstrip() + ("." if t.strip() else "")


def ensure_closer(core: str, truth: bool) -> str:
    verd = "True" if truth else "False"
    core = strip_closer(core).rstrip()
    # Avoid ".."
    core = re.sub(r"\.\.+$", ".", core)
    return core + f"\n\nSo the statement is {verd}."


def inject_displays(body: str) -> str:
    """Promote inline equations into display blocks when none exist."""
    if "$$" in body:
        return body
    new = body
    m = re.search(r"\$([^$]{3,80})\$", body)
    if m and re.search(r"[=<>]", m.group(1)):
        eq = m.group(1).strip()
        new = body[: m.start()] + f"\n\n$${eq}$$\n\n" + body[m.end() :]
    new = re.sub(r"\n{3,}", "\n\n", new)
    return new


def deepen_letter(letter: str, truth: bool, text: str, idx: int) -> str:
    body = re.sub(
        r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*",
        "",
        text.strip(),
        count=1,
    ).strip()
    core = strip_closer(body)

    if "$$" not in core or len(core) < 150:
        core = inject_displays(core)

    if "$$" not in core and len(core) < 220:
        lead = opener(idx)
        if not core.lower().startswith(lead[:10].lower()):
            core = f"{lead}\n\n{core}"

    if core.lstrip().startswith("$$"):
        core = f"{opener(idx + 3)}\n\n{core}"

    core = ensure_closer(core, truth)
    verd = "True" if truth else "False"
    return f"**{letter}.** → {verd}\n\n{core}"


def thicken_overview(ov: str, subsection: str) -> str:
    ov = (ov or "").strip()
    if len(ov) >= 220 and "$$" in ov:
        return ov
    if len(ov) >= 280:
        return ov

    tips = {
        "4.1": "Isolate the unknown by inverse operations: undo addition or subtraction first, then divide by a nonzero coefficient.",
        "4.2": "Move every term to one side, factor when possible, and read roots from factors or from the quadratic formula. Keep geometric side lengths nonnegative.",
        "4.3": "Exclude values that zero a denominator, cross-multiply, then check that each recovered root lies in the allowed domain.",
        "4.4": "Use a substitution such as $u=b^{x}$ or $t=\\log_{b} x$ to reduce the equation to an algebraic one, then transfer admissible roots back.",
    }
    tip = tips.get(subsection, tips["4.1"])
    if "independent" in ov.lower() or "Five independent" in ov:
        return join(
            ov if ov else "Five independent claims.",
            tip,
            "Each letter is a separate mini-problem; do not reuse a root from another letter.",
        )
    if not ov:
        return join(
            f"Shared model for subsection {subsection}.",
            tip,
            "Recover the governing parameters once here; each letter only checks its extra claim.",
        )
    if len(ov) < 200:
        return join(ov, tip)
    return ov


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    lens: list[int] = []
    ov_lens: list[int] = []
    changed = 0
    for task in data["tasks"]:
        sub = task.get("subsection")
        if sub not in ("4.1", "4.2", "4.3", "4.4"):
            continue
        old_ov = task.get("solution_overview") or ""
        new_ov = thicken_overview(old_ov, sub)
        if new_ov != old_ov:
            task["solution_overview"] = new_ov
            changed += 1
        ov_lens.append(len(task["solution_overview"]))

        new_expls = []
        for i, letter in enumerate("ABCDE"):
            old = task["tactical_explanations"][i]
            truth = bool(task["answer_key"][i])
            new = deepen_letter(letter, truth, old, i)
            if new != old:
                changed += 1
            new_expls.append(new)
            lens.append(len(new))
        task["tactical_explanations"] = new_expls

    PATH.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"Deepened 4.1–4.4: field touches≈{changed}; "
        f"letter avg={sum(lens)/len(lens):.0f} min={min(lens)} max={max(lens)}; "
        f"overview avg={sum(ov_lens)/len(ov_lens):.0f} min={min(ov_lens)}"
    )


if __name__ == "__main__":
    main()
