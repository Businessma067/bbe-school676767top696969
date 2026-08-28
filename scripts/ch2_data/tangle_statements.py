#!/usr/bin/env python3
"""Rewrite ~30% of Ch2 statements into long, tangled textual claims.

Selection is rotated across letter slots so tangled items land in different
places within each task. Mathematical content and truth values are preserved;
only the surrounding prose is thickened (Ch4 / MATH 13.18 register).
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent

# ---------------------------------------------------------------------------
# Selection: ~30% of 750 = 225 statements, spread across tasks and letters
# ---------------------------------------------------------------------------


def slots_to_tangle(global_task_i: int) -> list[int]:
    """Return item indices (0–4) to tangle for this task.

    Average 1.5 per task → 225 / 750 = 30%.
    Extra slot on even tasks; letter rotation so A–E all appear.
    """
    primary = (global_task_i * 3) % 5
    out = [primary]
    if global_task_i % 2 == 0:
        secondary = (primary + 2) % 5
        out.append(secondary)
    return sorted(set(out))


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

_LATEX = re.compile(r"\$[^$]+\$")


def _latex_bits(stmt: str) -> list[str]:
    return _LATEX.findall(stmt)


def _core_claim(stmt: str) -> str:
    """Strip trailing clerk/marker framing; keep the algebraic claim."""
    s = stmt.strip().rstrip(".")
    s = re.sub(
        r"\s*(A clerk ticks the line|The remaining terms are not needed.*|"
        r"A marker then substitutes.*|A notebook records.*)$",
        "",
        s,
        flags=re.I,
    )
    return s.strip().rstrip(".")


# ---------------------------------------------------------------------------
# Tanglers — different rhetorical shapes (rotated by seed)
# ---------------------------------------------------------------------------


def _t_nested_justification(stmt: str, truth: bool, seed: int) -> str:
    bits = _latex_bits(stmt)
    core = _core_claim(stmt)
    distractors = [
        "without solving the underlying system for each letter separately",
        "treating a single favourable test point as if it certified an identity",
        "after discarding what the marker calls 'inessential cross terms'",
        "on the strength of an abbreviated notebook line rather than a full expansion",
        "citing that the domain restrictions have already been written once in the margin",
    ]
    d = distractors[seed % len(distractors)]
    verdict_word = "ticks" if truth else "ticks"
    # Keep truth-agnostic framing — the claim content itself is true or false
    return (
        f"Having first noted the printed data and working {d}, "
        f"an examiner restates the claim as follows: {core}. "
        f"The same note then {verdict_word} the line as settled, "
        f"arguing that no further algebraic check is required once the rewritten form "
        f"has been written beside the original expression"
        + (f" involving {bits[0]}" if bits else "")
        + "."
    )


def _t_multi_hypothesis(stmt: str, truth: bool, seed: int) -> str:
    core = _core_claim(stmt)
    hooks = [
        "Under the standing hypothesis that every letter is real (and nonzero wherever a denominator appears)",
        "Granting the domain restrictions printed with the claim, and further assuming the marker's shorthand is exact",
        "With the provisional reading that like terms have already been collected correctly",
        "Taking as given that the clerk's intermediate cancellation step introduces no hidden factors",
    ]
    tails = [
        "the claim is then entered in the answer key without a second expansion",
        "the notebook treats the rewritten form as an identity on the whole stated domain",
        "a second marker initials the line after comparing only the leading terms",
        "the remaining cross-check against a concrete numerical pair is judged unnecessary",
    ]
    return (
        f"{hooks[seed % len(hooks)]}, the following assertion is recorded: {core}. "
        f"On that basis, {tails[(seed + 1) % len(tails)]}."
    )


def _t_chain_of_steps(stmt: str, truth: bool, seed: int) -> str:
    bits = _latex_bits(stmt)
    core = _core_claim(stmt)
    low = stmt.lower()
    if re.search(r"\\(?:d)?frac|cancell|reduc|denominator", low):
        step_a = "first clearing shared factors or writing a common denominator"
        step_b = "then reading the surviving expression as the claimed remainder"
    elif re.search(r"\|[^|]+\||absolute|half-line", low):
        step_a = "first replacing each absolute-value bar by its signed form on the stated side"
        step_b = "then simplifying the resulting expression to the printed constant or quotient"
    elif re.search(r"\^\{|power|exponent|\\sqrt", low):
        step_a = "first stacking or combining the exponents by the printed power rule"
        step_b = "then equating the simplified monomial with the target written in the margin"
    elif re.search(r"coefficient|mixed|cross|expand", low):
        step_a = "first expanding the binomial and collecting like terms"
        step_b = "then comparing the collected coefficient with the figure written beside the claim"
    else:
        step_a = "first rewriting the left-hand side by the named elementary identity"
        step_b = "then equating the simplified display with the printed target expression"
    extras = [
        "then substituting a single convenient test value and reading agreement as confirmation",
        "then discarding what remains after the principal operation as 'identically zero'",
        "then treating the rewritten line as settled on the whole stated domain",
    ]
    return (
        f"A multi-step margin note proceeds by {step_a}, {step_b}, and "
        f"{extras[seed % len(extras)]}. "
        f"The finished claim reads: {core}"
        + (
            f" — with the intermediate display still carrying {bits[min(1, len(bits) - 1)]}"
            if len(bits) >= 2
            else ""
        )
        + "."
    )


def _t_counter_and_claim(stmt: str, truth: bool, seed: int) -> str:
    """Embed a test-point story around the claim (works for both T/F)."""
    core = _core_claim(stmt)
    frames = [
        (
            "A candidate first checks a single convenient substitution, finds that both sides "
            "agree numerically at that point, and then elevates the agreement to a claimed identity: "
        ),
        (
            "After a quick numerical spot-check that happens to match, the notebook promotes the "
            "local agreement into a general rule: "
        ),
        (
            "Relying on the observation that a particular test pair does not immediately refute the line, "
            "the marker records the universal claim: "
        ),
        (
            "The working is arranged so that an intermediate numerical check looks supportive; "
            "from that support the following identity is asserted on the whole domain: "
        ),
    ]
    closer = [
        " No second independent substitution is attempted.",
        " The margin note closes without expanding the general case.",
        " Any remaining letters are declared free once that one check has passed.",
        " The claim is filed as settled for every admissible value of the letters.",
    ]
    return frames[seed % len(frames)] + core + "." + closer[(seed + 1) % len(closer)]


def _t_administrative_register(stmt: str, truth: bool, seed: int) -> str:
    """Ch4-style long administrative / exam-board prose."""
    core = _core_claim(stmt)
    openings = [
        "In the version circulated to markers, an administrative note asserts that",
        "According to the examiner's standardisation sheet,",
        "A standardisation remark distributed with the script states that",
        "The board's model solution records, as if it were an identity,",
    ]
    middles = [
        "and further instructs candidates to treat any matching numerical check as decisive",
        "while explicitly permitting the omission of a full symbolic expansion",
        "with the added remark that domain caveats may be left implicit once written once",
        "together with the instruction that mixed-product coefficients need not be recomputed from scratch",
    ]
    return (
        f"{openings[seed % len(openings)]} the following holds on the stated domain: {core}, "
        f"{middles[(seed + 3) % len(middles)]}."
    )


_TANGLERS = [
    _t_nested_justification,
    _t_multi_hypothesis,
    _t_chain_of_steps,
    _t_counter_and_claim,
    _t_administrative_register,
]


def tangle(stmt: str, truth: bool, seed: int) -> str:
    """Produce a long tangled textual version of ``stmt``."""
    # Already long and tangled enough — leave alone
    if len(stmt.split()) >= 40:
        return stmt
    fn = _TANGLERS[seed % len(_TANGLERS)]
    out = fn(stmt, truth, seed)
    # Collapse accidental double spaces; keep latex intact
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" \.", ".", out)
    # Ensure we actually lengthened
    if len(out.split()) < len(stmt.split()) + 12:
        out = _t_administrative_register(stmt, truth, seed + 1)
    return out.strip()


# ---------------------------------------------------------------------------
# Source rewrite
# ---------------------------------------------------------------------------

_ITEM_STMT = re.compile(
    r'(\(\s*\n\s*)(r?"(?:[^"\\]|\\.)*"|r?\'(?:[^\'\\]|\\.)*\')(\s*,\s*\n\s*)(True|False)',
    re.S,
)


def _unescape_py_string(raw: str) -> str:
    """Evaluate a Python string literal to its content."""
    return eval(raw, {"__builtins__": {}})  # noqa: S307 — controlled file content


def _escape_as_raw(s: str) -> str:
    """Emit a raw string literal safe for the source files."""
    if "\\" in s or "$" in s:
        # Prefer r"""...""" when backslashes present
        if '"""' in s:
            return "r'''" + s.replace("'''", r"\'\'\'") + "'''"
        return 'r"""' + s + '"""'
    return 'r"' + s.replace('"', r"\"") + '"'


def rewrite_file(path: Path, task_offset: int) -> tuple[int, int]:
    text = path.read_text()
    # Split into task() blocks to count per-file task index
    # Simpler: find all item statements in order globally in file
    tasks_in_file = len(re.findall(r"^\s*task\(", text, re.M))
    # Collect matches
    matches = list(_ITEM_STMT.finditer(text))
    if len(matches) != tasks_in_file * 5:
        # Fall back: still process whatever we found, warn
        print(f"  warn {path.name}: found {len(matches)} items, expected {tasks_in_file * 5}")

    replacements: list[tuple[int, int, str]] = []
    tangled_count = 0
    for idx, m in enumerate(matches):
        task_i = idx // 5
        item_i = idx % 5
        global_i = task_offset + task_i
        if item_i not in slots_to_tangle(global_i):
            continue
        lit = m.group(2)
        truth = m.group(4) == "True"
        try:
            stmt = _unescape_py_string(lit)
        except Exception as exc:  # noqa: BLE001
            print(f"  skip parse {path.name} item {idx}: {exc}")
            continue
        seed = global_i * 5 + item_i
        new_stmt = tangle(stmt, truth, seed)
        if new_stmt == stmt:
            continue
        new_lit = _escape_as_raw(new_stmt)
        replacements.append((m.start(2), m.end(2), new_lit))
        tangled_count += 1

    # Apply from the end so offsets stay valid
    out = text
    for start, end, new_lit in reversed(replacements):
        out = out[:start] + new_lit + out[end:]
    path.write_text(out)
    return tangled_count, len(matches)


def main() -> None:
    files = [
        (HERE / "s21.py", 0),
        (HERE / "s22.py", 30),
        (HERE / "s23.py", 60),
        (HERE / "s24.py", 90),
        (HERE / "s25.py", 120),
    ]
    total_t = 0
    total_n = 0
    for path, offset in files:
        t, n = rewrite_file(path, offset)
        total_t += t
        total_n += n
        print(f"{path.name}: tangled {t} / {n}")
    pct = 100.0 * total_t / total_n if total_n else 0
    print(f"TOTAL tangled {total_t} / {total_n} ({pct:.1f}%)")
    # Sanity: slot distribution
    from collections import Counter

    c = Counter()
    for gi in range(150):
        for s in slots_to_tangle(gi):
            c["ABCDE"[s]] += 1
    print("letter distribution:", dict(c))


if __name__ == "__main__":
    main()
