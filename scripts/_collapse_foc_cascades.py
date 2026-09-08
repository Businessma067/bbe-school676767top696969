#!/usr/bin/env python3
"""Collapse FOC densify cascades: P'(x)=expr / P'(x)=0 / x=n into one line."""
from __future__ import annotations

import json
import re
from pathlib import Path

DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)


def strip(s: str) -> str:
    return re.sub(r"\s+", "", s)


def is_single_eq(body: str) -> bool:
    b = body.strip()
    if "aligned" in b or r"\\" in b:
        return False
    return b.count("=") == 1 and len(strip(b)) <= 120


def lhs(body: str) -> str:
    return strip(body.split("=", 1)[0])


def rhs(body: str) -> str:
    return body.split("=", 1)[1].strip()


def is_zero_eq(body: str) -> bool:
    return strip(rhs(body)) == "0"


def has_prime(body: str) -> bool:
    return ("\\prime" in body) or ("^{\\prime}" in body)


def is_second_deriv(body: str) -> bool:
    return ("\\prime\\prime" in body) or ("^{\\prime\\prime}" in body) or ("''" in body)


def is_symbolic_foc_lhs(body: str) -> bool:
    """Prime evaluated at a variable, not a concrete number: F'(Q)=... ok; F'(10)=... no."""
    left = body.split("=", 1)[0]
    # (digits) in lhs → point evaluation
    if re.search(r"\(\s*-?\d+", left):
        return False
    return has_prime(left) and not is_second_deriv(body)


def is_assign(body: str) -> bool:
    left, right = body.split("=", 1)
    if has_prime(left):
        return False
    rc = strip(right)
    if re.match(r"^-?\d+(\.\d+)?$", rc):
        return True
    if re.match(r"^-?\\(?:d)?frac\{[^{}]+\}\{[^{}]+\}$", rc):
        return True
    # allow \sqrt{L}=4 etc
    lc = strip(left)
    return len(lc) <= 30 and bool(re.match(r"^-?\d+(\.\d+)?$", rc) or re.match(r"^-?\\(?:d)?frac\{[^{}]+\}\{[^{}]+\}$", rc))


def collapse_text(text: str) -> tuple[str, int]:
    matches = list(DISPLAY_RE.finditer(text))
    if not matches:
        return text, 0
    bodies = [m.group(1).strip() for m in matches]
    used = [False] * len(bodies)
    replacements: dict[int, str] = {}
    collapsed = 0

    i = 0
    while i < len(bodies):
        if used[i] or not is_single_eq(bodies[i]) or not is_symbolic_foc_lhs(bodies[i]):
            i += 1
            continue

        run = [i]
        j = i + 1
        got_zero = False
        while j < len(bodies) and not used[j] and is_single_eq(bodies[j]) and len(run) < 6:
            b = bodies[j]
            if is_zero_eq(b) and lhs(b) == lhs(bodies[i]):
                run.append(j); got_zero = True; j += 1; continue
            prev = bodies[run[-1]]
            if is_zero_eq(b) and lhs(b) == strip(rhs(prev)):
                run.append(j); got_zero = True; j += 1; continue
            if got_zero and is_assign(b):
                run.append(j); j += 1; continue
            if got_zero and is_second_deriv(b):
                run.append(j); j += 1; break
            break

        if not got_zero or len(run) < 2:
            i += 1
            continue

        first = bodies[run[0]]
        chain = first
        implies = []
        second = None
        for k in run[1:]:
            b = bodies[k]
            if is_second_deriv(b):
                second = b; continue
            if is_zero_eq(b) and lhs(b) == lhs(first):
                if not strip(chain).endswith("=0"):
                    chain = chain.rstrip() + " = 0"
                continue
            if is_zero_eq(b) and lhs(b) == strip(rhs(first)):
                chain = first.split("=", 1)[0].rstrip() + " = " + b.strip()
                continue
            if is_assign(b):
                implies.append(b.strip())

        line = chain
        if implies:
            line = line + r" \implies " + r" \implies ".join(implies)
        new_block = "$$\n" + line + "\n$$"
        if second:
            new_block += "\n\n$$\n" + second + "\n$$"
        replacements[run[0]] = new_block
        for k in run[1:]:
            used[k] = True
            replacements[k] = ""
        used[run[0]] = True
        collapsed += 1
        i = run[-1] + 1

    if not collapsed:
        return text, 0
    out = text
    for idx in range(len(matches) - 1, -1, -1):
        if idx not in replacements:
            continue
        m = matches[idx]
        out = out[: m.start()] + replacements[idx] + out[m.end() :]
    return re.sub(r"\n{3,}", "\n\n", out), collapsed


def process_task(t: dict) -> int:
    total = 0
    if isinstance(t.get("solution_overview"), str):
        nt, c = collapse_text(t["solution_overview"])
        if c:
            t["solution_overview"] = nt
            total += c
    te = t.get("tactical_explanations")
    if isinstance(te, list):
        for i, v in enumerate(te):
            if isinstance(v, str):
                nt, c = collapse_text(v)
                if c:
                    te[i] = nt
                    total += c
    return total


def main() -> None:
    foc = json.loads(Path("scripts/_MATH_CROOKED_DEEP_FOC.json").read_text())
    by_file: dict[str, set[str]] = {}
    for item in foc:
        by_file.setdefault(item["file"], set()).add(item["case_id"])
    grand = 0
    for fname, ids in by_file.items():
        fp = Path("src/data") / fname
        data = json.loads(fp.read_text())
        arr = data["tasks"] if isinstance(data, dict) else data
        file_c = 0
        touched = []
        for t in arr:
            if not isinstance(t, dict) or t.get("case_id") not in ids:
                continue
            c = process_task(t)
            if c:
                file_c += c
                touched.append(f"{t['case_id']}:{c}")
        if file_c:
            fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"{fname}: collapsed {file_c} :: {', '.join(touched)}")
            grand += file_c
    print("TOTAL", grand)


if __name__ == "__main__":
    main()
