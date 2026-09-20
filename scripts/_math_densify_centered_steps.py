#!/usr/bin/env python3
"""Merge over-fragmented centered $$ steps into normal-length lines."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DISPLAY_RE = re.compile(r"\$\$\s*\n([\s\S]*?)\n\s*\$\$")


def is_continuation(body: str) -> bool:
    t = body.strip()
    return bool(re.match(r"^(?:=|\\approx\b|\\leq\b|\\geq\b|\\le\b|\\ge\b|\\neq\b)", t))


def is_short_assignment(body: str) -> bool:
    t = re.sub(r"\s+", " ", body.strip())
    if any(x in t for x in ("\\frac", "\\sum", "\\int", "\\begin", "\\dfrac", "\\tfrac")):
        return False
    if len(t) > 56:
        return False
    return bool(re.search(r"(?<!\\)=", t)) and t.count("=") <= 2


def is_short_compare(body: str) -> bool:
    t = re.sub(r"\s+", " ", body.strip())
    if len(t) > 56:
        return False
    return bool(re.search(r"(?:\\approx|\\leq|\\geq|\\le|\\ge|\\neq|[<>≤≥≈])", t))


def merge_continuation(prev: str, cur: str) -> str:
    return f"{prev.rstrip()} {cur.strip()}"


def is_packable_assignment(body: str) -> bool:
    """Only simple `Name = value` rows — not `A - B = …` working lines."""
    t = re.sub(r"\s+", " ", body.strip())
    if not is_short_assignment(t):
        return False
    # Reject if LHS has operators beyond \text{...} / \mathrm{...} names.
    lhs = t.split("=", 1)[0]
    if re.search(r"[+\-−/×]|\\frac|\\cdot|\\times", lhs):
        return False
    return True


def densify_text(text: str) -> str:
    if "$$" not in text:
        return text

    parts: list[tuple[str, str]] = []
    last = 0
    for m in DISPLAY_RE.finditer(text):
        if m.start() > last:
            parts.append(("text", text[last : m.start()]))
        parts.append(("math", m.group(1).strip()))
        last = m.end()
    if last < len(text):
        parts.append(("text", text[last:]))

    out: list[tuple[str, str]] = []
    i = 0
    while i < len(parts):
        kind, val = parts[i]
        if kind != "math":
            out.append((kind, val))
            i += 1
            continue

        run = [val]
        j = i + 1
        while j + 1 < len(parts):
            mid_kind, mid_val = parts[j]
            nxt_kind, nxt_val = parts[j + 1]
            if mid_kind == "text" and mid_val.strip() == "" and nxt_kind == "math":
                run.append(nxt_val)
                j += 2
                continue
            break

        merged: list[str] = []
        k = 0
        while k < len(run):
            cur = run[k]
            if merged and is_continuation(cur) and len(cur) <= 72:
                merged[-1] = merge_continuation(merged[-1], cur)
                k += 1
                continue

            if is_packable_assignment(cur):
                pack = [cur]
                while (
                    k + len(pack) < len(run)
                    and len(pack) < 3
                    and is_packable_assignment(run[k + len(pack)])
                ):
                    pack.append(run[k + len(pack)])
                if len(pack) >= 2:
                    merged.append(",\\quad ".join(pack))
                    k += len(pack)
                    continue

            merged.append(cur)
            k += 1

        final: list[str] = []
        for body in merged:
            if final and is_short_compare(body) and len(final[-1]) + len(body) < 120:
                prev = final[-1]
                m_prev = re.search(r"(\\approx\s+)([\d.]+)\s*$", prev)
                m_cur = re.match(
                    r"^([\d.]+)\s*((?:\\(?:approx|leq|geq|le|ge)\b|[<>≤≥≈]).*)$",
                    body.strip(),
                )
                if m_prev and m_cur and m_prev.group(2) == m_cur.group(1):
                    final[-1] = f"{prev} {m_cur.group(2).strip()}"
                    continue
                if is_continuation(body) or re.match(
                    r"^[\d{,.}]+\s*(?:\\(?:approx|leq|geq|le|ge)\b|[<>≤≥≈])",
                    body.strip(),
                ):
                    final[-1] = merge_continuation(prev, body)
                    continue
            final.append(body)

        for idx, body in enumerate(final):
            out.append(("math", body))
            if idx != len(final) - 1:
                out.append(("text", "\n\n"))
        i = j if j > i else i + 1

    chunks: list[str] = []
    for kind, val in out:
        if kind == "text":
            chunks.append(val)
        else:
            chunks.append(f"$$\n{val}\n$$")
    rebuilt = "".join(chunks)
    rebuilt = re.sub(r"\n{3,}", "\n\n", rebuilt)
    if text.endswith("\n") and not rebuilt.endswith("\n"):
        rebuilt += "\n"
    return rebuilt


def densify_case_list(path: Path) -> int:
    data = json.loads(path.read_text())
    changed = 0
    cases = data if isinstance(data, list) else data.get("cases") or data.get("tasks") or []
    if not isinstance(cases, list):
        return 0
    for case in cases:
        if not isinstance(case, dict):
            continue
        for key in ("tactical_explanations", "explanations", "solutions", "solution_steps"):
            te = case.get(key)
            if isinstance(te, list):
                new_list = []
                for ex in te:
                    if isinstance(ex, str) and "$$" in ex:
                        nxt = densify_text(ex)
                        if nxt != ex:
                            changed += 1
                        new_list.append(nxt)
                    else:
                        new_list.append(ex)
                case[key] = new_list
            elif isinstance(te, dict):
                for L, ex in list(te.items()):
                    if isinstance(ex, str) and "$$" in ex:
                        nxt = densify_text(ex)
                        if nxt != ex:
                            changed += 1
                        te[L] = nxt
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    return changed


def densify_raw_file(path: Path) -> bool:
    raw = path.read_text()
    if raw.count("\n$$\n") < 3:
        return False
    new = densify_text(raw)
    if new == raw:
        return False
    if new.count("{") != raw.count("{") or new.count("(") != raw.count("("):
        print(f"skip {path.name}: brace/paren mismatch")
        return False
    path.write_text(new if new.endswith("\n") else new + "\n")
    return True


def main() -> None:
    total = 0
    data = ROOT / "src/data"
    for p in sorted(data.glob("economics-cases-ch*-subtopics.json")):
        n = densify_case_list(p)
        print(f"{p.name}: {n}")
        total += n
    for p in sorted(data.glob("math-*-exam.json")) + sorted(data.glob("math-cases-*.json")):
        try:
            n = densify_case_list(p)
        except Exception as e:
            print(f"{p.name}: err {e}")
            continue
        if n:
            print(f"{p.name}: {n}")
            total += n
    # Do not densify full .ts modules here — brace-sensitive and can truncate files.
    # Econ/math JSON case banks above are the safe targets.
    print(f"total={total}")


if __name__ == "__main__":
    main()
