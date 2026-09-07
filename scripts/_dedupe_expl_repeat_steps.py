#!/usr/bin/env python3
"""Dedupe repeated $$ steps and lightly merge short continued equality chains."""
from __future__ import annotations

import json
import re
from pathlib import Path

DISP_RE = re.compile(r"\$\$(.*?)\$\$", re.S)


def norm(d: str) -> str:
    s = re.sub(r"\s+", "", d)
    return s.rstrip(".,;")


def is_cont_eq(d: str) -> bool:
    t = d.strip()
    if not t.startswith("="):
        return False
    rest = t[1:].strip()
    if len(rest) > 60:
        return False
    if "\\Rightarrow" in t or "\\text" in t:
        return False
    return True


def is_short_seed(d: str) -> bool:
    t = " ".join(d.split())
    if len(t) > 80:
        return False
    if "\\Rightarrow" in t:
        return False
    return True


def collapse_consecutive(ds: list[str]) -> list[str]:
    out: list[str] = []
    for d in ds:
        if out and norm(out[-1]) == norm(d):
            continue
        out.append(d)
    return out


def collapse_repeated_blocks(ds: list[str]) -> list[str]:
    changed = True
    while changed:
        changed = False
        best = None
        n = len(ds)
        for k in range(min(n // 2, 30), 1, -1):
            for i in range(0, len(ds) - 2 * k + 1):
                a = [norm(x) for x in ds[i : i + k]]
                b = [norm(x) for x in ds[i + k : i + 2 * k]]
                if a == b and any(a):
                    best = (i, k)
                    break
            if best:
                break
        if best:
            i, k = best
            ds = ds[: i + k] + ds[i + 2 * k :]
            changed = True
    return ds


def collapse_skip_one_arith(ds: list[str]) -> list[str]:
    out = ds[:]
    i = 0
    while i + 3 < len(out):
        b, d = out[i + 1], out[i + 3]
        if norm(b) == norm(d) and "=" in b and len(norm(b)) < 100:
            del out[i + 3]
            if i + 3 < len(out) and norm(out[i + 3]) == norm(out[i + 2]):
                del out[i + 3]
            continue
        i += 1
    return out


def merge_short_eq_chains(ds: list[str]) -> list[str]:
    out: list[str] = []
    i = 0
    while i < len(ds):
        cur = ds[i]
        if i + 1 < len(ds) and is_short_seed(cur) and is_cont_eq(ds[i + 1]):
            parts = [cur.strip()]
            j = i + 1
            while j < len(ds) and is_cont_eq(ds[j]):
                parts.append(ds[j].strip())
                j += 1
            if len(parts) >= 2:
                merged = " ".join(parts)
                if len(merged) <= 140:
                    out.append("\n" + merged + "\n")
                    i = j
                    continue
        out.append(cur)
        i += 1
    return out


def dedupe_display_list(ds: list[str]) -> list[str]:
    ds = collapse_consecutive(ds)
    ds = collapse_repeated_blocks(ds)
    ds = collapse_skip_one_arith(ds)
    ds = collapse_consecutive(ds)
    ds = merge_short_eq_chains(ds)
    ds = collapse_consecutive(ds)
    return ds


def rebuild_by_split(expl: str, original: list[str], deduped: list[str]) -> tuple[str, int]:
    pieces = DISP_RE.split(expl)
    prose = pieces[0::2]
    displays = pieces[1::2]
    assert len(displays) == len(original)

    chunks: list[str] = [prose[0]]
    oi = 0
    di = 0
    skipped = 0

    def trailing_prose(idx: int) -> str:
        return prose[idx + 1] if idx + 1 < len(prose) else ""

    def add_math(disp: str) -> None:
        # separate from prior content with a blank line when needed
        if chunks and not chunks[-1].endswith("\n\n"):
            if chunks[-1].endswith("\n"):
                chunks.append("\n")
            else:
                chunks.append("\n\n")
        chunks.append(f"$${disp}$$")

    while oi < len(displays):
        if di >= len(deduped):
            while oi < len(displays):
                skipped += 1
                tp = trailing_prose(oi)
                if tp.strip():
                    chunks.append(tp)
                oi += 1
            break

        if norm(displays[oi]) == norm(deduped[di]):
            add_math(deduped[di])
            tp = trailing_prose(oi)
            if tp.strip():
                chunks.append(tp if tp.startswith("\n") else "\n\n" + tp)
            else:
                chunks.append("\n\n")
            di += 1
            oi += 1
            continue

        if norm(displays[oi]) in norm(deduped[di]) or norm(deduped[di]).startswith(
            norm(displays[oi])
        ):
            add_math(deduped[di])
            merged_n = norm(deduped[di])
            oi += 1
            while oi < len(displays):
                frag = norm(displays[oi])
                if frag.startswith("=") and frag in merged_n:
                    skipped += 1
                    oi += 1
                    continue
                break
            last_consumed = oi - 1
            tp = trailing_prose(last_consumed)
            if tp.strip():
                chunks.append(tp if tp.startswith("\n") else "\n\n" + tp)
            else:
                chunks.append("\n\n")
            di += 1
            continue

        skipped += 1
        tp = trailing_prose(oi)
        if tp.strip():
            chunks.append(tp)
        oi += 1

    new = "".join(chunks)
    new = re.sub(r"\n{3,}", "\n\n", new)
    if expl.endswith("\n") and not new.endswith("\n"):
        new += "\n"
    return new, skipped + max(0, len(original) - len(deduped))


def rebuild_explanation(expl: str) -> tuple[str, int]:
    original = DISP_RE.findall(expl)
    if len(original) < 2:
        return expl, 0
    deduped = dedupe_display_list(list(original))
    if [norm(x) for x in deduped] == [norm(x) for x in original]:
        return expl, 0
    return rebuild_by_split(expl, original, deduped)


def process_json(path: Path) -> tuple[int, int]:
    data = json.loads(path.read_text())
    tasks = data if isinstance(data, list) else data.get("tasks") or data.get("cases") or []
    letters = changed = 0
    for t in tasks:
        expls = t.get("tactical_explanations")
        if not isinstance(expls, list):
            continue
        for i, e in enumerate(expls):
            if not isinstance(e, str):
                continue
            letters += 1
            ne, _ = rebuild_explanation(e)
            if ne != e:
                expls[i] = ne
                changed += 1
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    return letters, changed


def process_ts(path: Path) -> tuple[int, int]:
    text = path.read_text()
    letters = changed = 0

    def repl(m: re.Match) -> str:
        nonlocal letters, changed
        e = m.group(1)
        letters += 1
        ne, _ = rebuild_explanation(e)
        if ne != e:
            changed += 1
        return "`" + ne + "`"

    new = re.sub(r"`(\*\*[A-E]\.\*\*[\s\S]*?)`", repl, text)
    if new != text:
        path.write_text(new)
    return letters, changed


def main() -> None:
    root = Path("src/data")
    total = 0
    for jp in sorted(root.glob("math*.json")):
        L, C = process_json(jp)
        if C:
            print(f"{jp.name}: changed {C}/{L} letters")
            total += C
    for tp in sorted(root.glob("math-ch*.ts")):
        if tp.read_text().count("tactical_explanations") < 5:
            continue
        L, C = process_ts(tp)
        if C:
            print(f"{tp.name}: changed {C}/{L} letters")
            total += C
    print(f"TOTAL letters changed: {total}")


if __name__ == "__main__":
    main()
