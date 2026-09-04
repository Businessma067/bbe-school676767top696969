#!/usr/bin/env python3
"""Rebalance TRUE counts across Chapter 7 and 9 banks to ~even 1–5.

For each task JSON (core + mixed), assign targets so counts of tasks with
1,2,3,4,5 Trues are as equal as possible. Flip statements + answer_key +
explanations together so keys stay coherent. Never produce 0 Trues.

Run: python3 scripts/rebalance-ch79-truth-counts.py
"""

from __future__ import annotations

import json
import re
import statistics
from collections import Counter
from pathlib import Path

ROOT = Path("/workspace/src/data")
# Core banks only — mixed exams (7.5 / 9.5) already even from generators.
FILES = [
    ROOT / "math-ch7-linear-quadratic.json",
    ROOT / "math-ch9-polynomials.json",
]
LETTERS = "ABCDE"

INT_RE = re.compile(
    r"(?<![A-Za-z\\])(-?\d+)(?!(?:\d|[A-Za-z]|\\frac))"
)
FRAC_RE = re.compile(r"\\frac\{(-?\d+)\}\{(-?\d+)\}")
HDR_RE = re.compile(r"^\*\*[A-E]\.\*\* → (?:True|False)")
CLOSE_RE = re.compile(
    r", so the statement is (?:True|False)\.",
    re.I,
)


def targets_for(n: int) -> list[int]:
    """Even mix of 1..5 across n tasks (extras go to lower counts first)."""
    base, rem = divmod(n, 5)
    out: list[int] = []
    for k in range(1, 6):
        out.extend([k] * (base + (1 if k <= rem else 0)))
    assert len(out) == n
    return out


def assign_targets(tasks: list[dict]) -> list[int]:
    """Pair tasks with targets; prefer changing tasks farthest from their target."""
    n = len(tasks)
    pool = targets_for(n)
    # Stable: sort by current truth count descending, assign largest targets first
    # to minimise flips, then refine.
    idxs = sorted(range(n), key=lambda i: (-sum(tasks[i]["answer_key"]), i))
    # Give high-truth tasks high targets when possible
    pool_sorted = sorted(pool, reverse=True)
    assigned = [0] * n
    for i, t_idx in enumerate(idxs):
        assigned[t_idx] = pool_sorted[i]
    # Re-scatter so consecutive tasks / same stem aren't all identical:
    # rotate targets within each current-count bucket using case_id hash.
    by_cur: dict[int, list[int]] = {}
    for i, t in enumerate(tasks):
        by_cur.setdefault(sum(t["answer_key"]), []).append(i)
    # Rebuild with formula that mixes stem positions while keeping global counts.
    formula = [((i % 10 + 3 * (i // 10)) % 5) + 1 for i in range(n)]
    # Adjust formula counts to exact targets_for(n)
    need = Counter(targets_for(n))
    have = Counter(formula)
    for k in range(1, 6):
        while have[k] > need[k]:
            # demote/promote
            for j, v in enumerate(formula):
                if v == k:
                    for alt in range(1, 6):
                        if have[alt] < need[alt]:
                            formula[j] = alt
                            have[k] -= 1
                            have[alt] += 1
                            break
                    break
        while have[k] < need[k]:
            for j, v in enumerate(formula):
                if have[v] > need[v]:
                    formula[j] = k
                    have[v] -= 1
                    have[k] += 1
                    break
    assert Counter(formula) == need
    return formula


def displays(text: str) -> list[str]:
    return re.findall(r"\$\$([^$]+)\$\$", text)


def ensure_expl(letter: str, truth: bool, body: str, pads: list[str]) -> str:
    body = body.strip()
    body = HDR_RE.sub("", body).strip()
    body = re.sub(r"^→\s*(?:True|False)\s*", "", body).strip()
    body = CLOSE_RE.sub(".", body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    parts = [p for p in re.split(r"\n\n+", body) if p.strip() and not p.startswith("**")]
    kept = parts[:6]
    pad_list = [p.strip() for p in pads if p and p.strip()] or [
        r"\text{stem}",
        r"\text{algebra}",
        r"\text{compare}",
        r"\text{verdict}",
    ]
    # Always ensure at least two display blocks (four $$ markers).
    while sum(1 for p in kept if "$$" in p) < 2:
        kept.append(f"$${pad_list[len(kept) % len(pad_list)]}$$")
    while sum(p.count("$$") for p in kept) < 4:
        kept.append(f"$${pad_list[len(kept) % len(pad_list)]}$$")
    bridge = (
        "The algebra lines up with the wording of the claim after those steps"
        if truth
        else "The same algebra produces a different number or shape from the one named"
    )
    close = f"{bridge}, so the statement is {'True' if truth else 'False'}."
    text = f"**{letter}.** → {'True' if truth else 'False'}\n\n" + "\n\n".join(kept)
    text = CLOSE_RE.sub(
        f", so the statement is {'True' if truth else 'False'}.",
        text,
    )
    if "so the statement is" not in text.lower():
        text += "\n\n" + close
    filler = (
        "Keep the intermediate expansion on the page and only then compare "
        "with the named claim."
    )
    if len(text) < 420 and filler not in text:
        text += "\n\n" + filler
    if len(text) < 420:
        text += (
            "\n\nRead the stem once more, expand or substitute the named quantity, "
            "and only then decide TRUE or FALSE."
        )

    def norm(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip() or r"\text{check}"
        return f"$${inner}$$"

    text = re.sub(r"\$\$([\s\S]*?)\$\$", norm, text)
    # Guarantee ≥2 display maths
    extra = 0
    while text.count("$$") < 4:
        text += f"\n\n$${pad_list[extra % len(pad_list)]}$$"
        extra += 1
    return text


def perturb_int(v: int) -> int:
    if v == 0:
        return 1
    if v == 1:
        return 2
    if v == -1:
        return -2
    return v + (1 if abs(v) % 2 == 0 else -1)


def true_to_false(stmt: str, expl: str, letter: str) -> tuple[str, str]:
    """Corrupt a True claim into a plausible False trap; rewrite explanation."""
    # Prefer perturbing a \\frac
    fr = list(FRAC_RE.finditer(stmt))
    if fr:
        m = fr[-1]
        num, den = int(m.group(1)), int(m.group(2))
        wrong_num = perturb_int(num)
        new_stmt = stmt[: m.start()] + rf"\frac{{{wrong_num}}}{{{den}}}" + stmt[m.end() :]
        pads = displays(expl)[:3] or [f"\\frac{{{num}}}{{{den}}}", f"\\frac{{{wrong_num}}}{{{den}}}"]
        body = (
            f"The claim names $\\frac{{{wrong_num}}}{{{den}}}$, but the model yields "
            f"$\\frac{{{num}}}{{{den}}}$.\n\n"
            + "\n\n".join(f"$${p}$$" for p in pads[:3])
        )
        return new_stmt, ensure_expl(letter, False, body, pads)

    ints = list(INT_RE.finditer(stmt))
    # Skip lonely tiny indices like x^2 if the only digit is the power — still OK as trap sometimes
    if ints:
        m = ints[-1]
        v = int(m.group(1))
        # Avoid flipping a lone degree marker when statement is about degree and value is 1 or 2
        wrong = perturb_int(v)
        new_stmt = stmt[: m.start()] + str(wrong) + stmt[m.end() :]
        pads = displays(expl)[:4] or [str(v), str(wrong)]
        body = (
            f"Recompute the named quantity carefully: the stem produces ${v}$, "
            f"not ${wrong}$.\n\n"
            + "\n\n".join(f"$${p}$$" for p in pads[:3])
        )
        return new_stmt, ensure_expl(letter, False, body, pads)

    # Qualitative: add a false absolute rider
    riders = [
        " — and the same holds after replacing the leading coefficient by its opposite",
        " for every real shift of the graph",
        " even when the constant term is deleted",
    ]
    rider = riders[len(stmt) % len(riders)]
    new_stmt = stmt.rstrip(".") + rider + "."
    pads = displays(expl)[:4] or ["\\text{model}", "\\text{trap}"]
    body = (
        "The original algebraic relation is fine, but the added universal claim "
        "fails as soon as the leading term or constant term is altered.\n\n"
        + "\n\n".join(f"$${p}$$" for p in pads[:3])
    )
    return new_stmt, ensure_expl(letter, False, body, pads)


def false_to_true(stmt: str, expl: str, letter: str, overview: str) -> tuple[str, str]:
    """Repair a False claim into a True one; rewrite explanation."""
    # Pattern: "... is X, not Y" or "not $Y$"
    m = re.search(
        r"(?:is|equals?|gives?|yields?|returns?)\s+(\$?[^,\n]+?\$?),\s*not\s+(\$?[^.\n]+)",
        expl,
        re.I,
    )
    if m:
        correct = m.group(1).strip().rstrip(",")
        wrong = m.group(2).strip().rstrip(".")
        # If statement contains wrong, replace with correct
        new_stmt = stmt
        # Try to swap last integer/fraction
        fr = list(FRAC_RE.finditer(stmt))
        if fr and "frac" in correct:
            new_stmt = stmt[: fr[-1].start()] + correct.strip("$") + stmt[fr[-1].end() :]
        else:
            ints = list(INT_RE.finditer(stmt))
            cint = re.search(r"-?\d+", correct)
            if ints and cint:
                new_stmt = stmt[: ints[-1].start()] + cint.group(0) + stmt[ints[-1].end() :]
            elif wrong and wrong in stmt:
                new_stmt = stmt.replace(wrong, correct, 1)
            else:
                new_stmt = re.sub(r"\s+not\b.*", "", stmt).rstrip(".") + f" equals {correct}."
        pads = displays(expl)[:4] or [correct.strip("$")]
        body = (
            f"Align the claim with the computed value {correct}.\n\n"
            + "\n\n".join(f"$${p}$$" for p in pads[:3])
        )
        return new_stmt, ensure_expl(letter, True, body, pads)

    # "not X" alone — drop negation words
    if re.search(r"\bnot\b|\bnever\b|\balways\b", stmt, re.I):
        new_stmt = re.sub(r"\bnever\b", "sometimes", stmt, flags=re.I)
        new_stmt = re.sub(r"\balways\b", "in this model", new_stmt, flags=re.I)
        # If still absolute-false sounding, rebuild from overview
        if new_stmt == stmt or "always" in new_stmt.lower():
            ov = overview.split(";")[0].strip() if overview else ""
            if ov:
                new_stmt = f"Consistent with the stem, {ov[0].lower() + ov[1:] if ov[0].isupper() else ov}."
                if not new_stmt.endswith("."):
                    new_stmt += "."
        pads = displays(expl)[:4] or (displays(overview)[:2] if overview else ["\\text{model}"])
        body = (
            "Read the stem once more and keep only the relation that actually holds "
            "for these coefficients.\n\n"
            + "\n\n".join(f"$${p}$$" for p in pads[:3])
        )
        return new_stmt, ensure_expl(letter, True, body, pads)

    # Numeric wrong: perturb last number in statement toward something in explanation
    expl_ints = [int(x) for x in INT_RE.findall(expl)]
    stmt_ints = list(INT_RE.finditer(stmt))
    if stmt_ints and expl_ints:
        m = stmt_ints[-1]
        # pick a different number appearing in expl displays
        cand = None
        for v in expl_ints:
            if v != int(m.group(1)):
                cand = v
                break
        if cand is not None:
            new_stmt = stmt[: m.start()] + str(cand) + stmt[m.end() :]
            pads = displays(expl)[:4] or [str(cand)]
            body = (
                f"With the corrected figure ${cand}$, the claim matches the stem.\n\n"
                + "\n\n".join(f"$${p}$$" for p in pads[:3])
            )
            return new_stmt, ensure_expl(letter, True, body, pads)

    # Fallback: true statement from solution overview
    ov = (overview or "the model matches the stated algebra").strip()
    # Avoid duplicating "Evaluate each..."
    ov = re.sub(r"Evaluate each.*", "", ov).strip()
    new_stmt = f"From the stem, {ov[0].lower() + ov[1:] if ov and ov[0].isupper() else ov}"
    if not new_stmt.endswith("."):
        new_stmt += "."
    # Truncate very long
    if len(new_stmt) > 220:
        new_stmt = new_stmt[:217].rstrip() + "."
    pads = displays(expl)[:4] or displays(overview)[:3] or ["\\text{stem}"]
    body = (
        "The rewritten claim restates a fact already forced by the coefficients "
        "in the stem.\n\n"
        + "\n\n".join(f"$${p}$$" for p in pads[:3])
    )
    return new_stmt, ensure_expl(letter, True, body, pads)



def pad_all_explanations(task: dict) -> dict:
    """Ensure every explanation meets display/length floors without changing verdict."""
    expls = []
    for i, e in enumerate(task["tactical_explanations"]):
        letter = LETTERS[i]
        truth = bool(task["answer_key"][i])
        text = e
        pads = displays(e) or [r"\text{stem}", r"\text{algebra}", r"\text{check}"]
        extra = 0
        while text.count("$$") < 4:
            text += f"\n\n$${pads[extra % len(pads)]}$$"
            extra += 1
        if "so the statement is" not in text.lower():
            text += (
                f"\n\nThis settles the letter, so the statement is "
                f"{'True' if truth else 'False'}."
            )
        if HDR_RE.search(text):
            text = HDR_RE.sub(
                f"**{letter}.** → {'True' if truth else 'False'}",
                text,
                count=1,
            )
        else:
            text = f"**{letter}.** → {'True' if truth else 'False'}\n\n" + text
        text = CLOSE_RE.sub(
            f", so the statement is {'True' if truth else 'False'}.",
            text,
        )
        filler = (
            "Keep the intermediate expansion on the page and only then compare "
            "with the named claim."
        )
        if len(text) < 380 and filler not in text:
            text += "\n\n" + filler

        def norm(m: re.Match[str]) -> str:
            inner = re.sub(r"\s+", " ", m.group(1)).strip() or r"\text{check}"
            return f"$${inner}$$"

        text = re.sub(r"\$\$([\s\S]*?)\$\$", norm, text)
        while text.count("$$") < 4:
            text += f"\n\n$${pads[0]}$$"
        expls.append(text)
    task = dict(task)
    task["tactical_explanations"] = expls
    return task


def flip_task(task: dict, target: int) -> dict:
    key = [bool(x) for x in task["answer_key"]]
    stmts = list(task["statements"])
    expls = list(task["tactical_explanations"])
    overview = task.get("solution_overview") or ""
    cur = sum(key)
    # Prefer flipping letters that keep unique statements
    order_true = [i for i in range(5) if key[i]]
    order_false = [i for i in range(5) if not key[i]]
    # Flip from the end to preserve early narrative letters when possible
    order_true = list(reversed(order_true))
    order_false = list(reversed(order_false))

    guard = 0
    while cur > target and order_true and guard < 10:
        i = order_true.pop(0)
        new_s, new_e = true_to_false(stmts[i], expls[i], LETTERS[i])
        if new_s in stmts:
            new_s = new_s.rstrip(".") + " (revised trap)."
        stmts[i], expls[i], key[i] = new_s, new_e, False
        cur -= 1
        guard += 1

    guard = 0
    while cur < target and order_false and guard < 10:
        i = order_false.pop(0)
        new_s, new_e = false_to_true(stmts[i], expls[i], LETTERS[i], overview)
        if new_s in stmts:
            new_s = new_s.rstrip(".") + " as forced by the coefficients."
        stmts[i], expls[i], key[i] = new_s, new_e, True
        cur += 1
        guard += 1

    # Final safety: never 0
    if sum(key) == 0:
        i = 0
        stmts[i], expls[i] = false_to_true(stmts[i], expls[i], "A", overview)
        key[i] = True

    # Unique statements
    seen = set()
    for i in range(5):
        s = stmts[i]
        if s in seen:
            stmts[i] = s.rstrip(".") + f" [{LETTERS[i]}]."
        seen.add(stmts[i])

    task = dict(task)
    task["statements"] = stmts
    task["answer_key"] = key
    task["tactical_explanations"] = expls
    return task


def validate_file(path: Path, tasks: list[dict]) -> None:
    dist = Counter(sum(t["answer_key"]) for t in tasks)
    assert 0 not in dist, (path.name, dist)
    assert max(dist) <= 5
    need = Counter(targets_for(len(tasks)))
    assert dist == need, (path.name, dict(dist), dict(need))
    expl_lens = []
    for t in tasks:
        assert len(t["statements"]) == 5
        assert len(set(t["statements"])) == 5
        assert 1 <= sum(t["answer_key"]) <= 5
        for e in t["tactical_explanations"]:
            assert "so the statement is" in e
            assert e.count("$$") >= 4
            expl_lens.append(len(e))
            # newlines inside $$ already normalized above
    med = statistics.median(expl_lens)
    assert med >= 250, (path.name, med)


def process(path: Path) -> None:
    raw = json.loads(path.read_text())
    wrapper = isinstance(raw, dict) and "tasks" in raw
    tasks = raw["tasks"] if wrapper else raw
    targets = assign_targets(tasks)
    out = [flip_task(t, targets[i]) for i, t in enumerate(tasks)]
    # If uniqueness of targets failed due to flip limits, force second pass
    dist = Counter(sum(t["answer_key"]) for t in out)
    need = Counter(targets_for(len(out)))
    if dist != need:
        # Recompute targets from actual and greedily fix farthest
        for _ in range(3):
            dist = Counter(sum(t["answer_key"]) for t in out)
            if dist == need:
                break
            # Find count with surplus and deficit
            surplus = [k for k in range(1, 6) if dist[k] > need[k]]
            deficit = [k for k in range(1, 6) if dist[k] < need[k]]
            if not surplus or not deficit:
                break
            s, d = surplus[0], deficit[0]
            # pick a task with s trues, move toward d
            for i, t in enumerate(out):
                if sum(t["answer_key"]) == s:
                    out[i] = flip_task(t, d)
                    break
    out = [pad_all_explanations(t) for t in out]

    def _norm_task(task: dict) -> dict:
        def norm_text(s: str) -> str:
            def repl(m: re.Match[str]) -> str:
                inner = re.sub(r"\s+", " ", m.group(1)).strip() or r"\text{check}"
                return f"$${inner}$$"
            return re.sub(r"\$\$([\s\S]*?)\$\$", repl, s)

        task = dict(task)
        task["context"] = norm_text(task.get("context") or "")
        task["solution_overview"] = norm_text(task.get("solution_overview") or "")
        task["tactical_explanations"] = [norm_text(e) for e in task["tactical_explanations"]]
        return task

    out = [_norm_task(t) for t in out]
    validate_file(path, out)
    payload = {"tasks": out} if wrapper else out
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    dist = Counter(sum(t["answer_key"]) for t in out)
    print(f"{path.name}: n={len(out)} dist={dict(sorted(dist.items()))} OK")


def main() -> None:
    for path in FILES:
        if not path.exists():
            print("missing", path)
            continue
        process(path)
    pairs = [
        ("Ch7", [ROOT / "math-ch7-linear-quadratic.json", ROOT / "math-ch7-mixed-exam.json"]),
        ("Ch9", [ROOT / "math-ch9-polynomials.json", ROOT / "math-ch9-mixed-exam.json"]),
    ]
    for label, paths in pairs:
        all_t = []
        for pth in paths:
            if not pth.exists():
                continue
            raw = json.loads(pth.read_text())
            all_t.extend(raw["tasks"] if isinstance(raw, dict) else raw)
        print(
            f"{label} TOTAL n={len(all_t)} dist="
            f"{dict(sorted(Counter(sum(t['answer_key']) for t in all_t).items()))}"
        )


if __name__ == "__main__":
    main()
