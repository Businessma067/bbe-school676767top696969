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


def blank_between(prose_between: str) -> bool:
    return not prose_between.strip()


def _lhs_key(d: str) -> str | None:
    n = norm(d)
    if "=" not in n:
        return None
    left = n.split("=", 1)[0]
    return left or None


def _dedupe_with_prose(displays: list[str], prose: list[str]) -> list[str]:
    """prose[0] precedes first display; prose[i] is between displays[i-1] and displays[i].

    Only collapse duplicates / merge = chains when intervening prose is blank,
    so pedagogical restatements stay intact.
    """
    ds = list(displays)
    # before[i] = prose between displays[i-1] and displays[i] == prose[i]
    before = [prose[i] if i < len(prose) else "" for i in range(len(displays))]

    def drop_at(idxs: set[int]) -> None:
        nonlocal ds, before
        keep = [i for i in range(len(ds)) if i not in idxs]
        ds = [ds[i] for i in keep]
        before = [before[i] for i in keep]

    # 1) consecutive identical with blank intervening prose
    drop: set[int] = set()
    last_kept = 0
    for i in range(1, len(ds)):
        if norm(ds[last_kept]) == norm(ds[i]) and blank_between(before[i]):
            drop.add(i)
        else:
            last_kept = i
    if drop:
        drop_at(drop)

    # 2) repeated blocks with blank prose across the duplicated span
    changed = True
    while changed:
        changed = False
        best = None
        n = len(ds)
        for k in range(min(n // 2, 30), 1, -1):
            for i in range(0, n - 2 * k + 1):
                a = [norm(x) for x in ds[i : i + k]]
                b = [norm(x) for x in ds[i + k : i + 2 * k]]
                if a == b and any(a):
                    if any(not blank_between(before[j]) for j in range(i + 1, i + 2 * k)):
                        continue
                    best = (i, k)
                    break
            if best:
                break
        if best:
            i, k = best
            drop_at(set(range(i + k, i + 2 * k)))
            changed = True

    # 3) skip-one arithmetic stutter:
    #    LHS=expr / expr=val / LHS=val / expr=val  → drop the repeated expr=val
    # Require matching LHS on a and c so unrelated equal results are kept.
    i = 0
    while i + 3 < len(ds):
        a, b, c, d = ds[i], ds[i + 1], ds[i + 2], ds[i + 3]
        if (
            norm(b) == norm(d)
            and "=" in b
            and len(norm(b)) < 100
            and _lhs_key(a)
            and _lhs_key(a) == _lhs_key(c)
        ):
            if any(not blank_between(before[j]) for j in (i + 1, i + 2, i + 3)):
                i += 1
                continue
            drop_at({i + 3})
            if i + 3 < len(ds) and norm(ds[i + 3]) == norm(ds[i + 2]):
                if blank_between(before[i + 3]):
                    drop_at({i + 3})
            continue
        i += 1

    # 3b) after LHS=expr … steps … LHS=val, drop immediate replay of those steps
    i = 0
    while i < len(ds):
        lhs = _lhs_key(ds[i])
        if not lhs:
            i += 1
            continue
        j = None
        for k in range(i + 1, min(i + 8, len(ds))):
            if any(not blank_between(before[t]) for t in range(i + 1, k + 1)):
                break
            if _lhs_key(ds[k]) == lhs:
                j = k
                break
        if j is None or j <= i + 1:
            i += 1
            continue
        steps = ds[i + 1 : j]
        n = len(steps)
        drop_idxs: set[int] = set()
        t = 0
        while t < n and j + 1 + t < len(ds):
            idx = j + 1 + t
            if not blank_between(before[idx]):
                break
            sn = norm(steps[t])
            dn = norm(ds[idx])
            if dn == sn:
                drop_idxs.add(idx)
                t += 1
                continue
            # step as prefix of longer chain, e.g. 1-5=-4=-4<0
            if dn.startswith(sn) and dn[len(sn):].startswith("="):
                suffix_n = dn[len(sn):]
                val_rhs = norm(ds[j]).split("=", 1)[-1]
                # drop if novel part only restates known value (± comparison)
                if val_rhs and val_rhs in suffix_n:
                    drop_idxs.add(idx)
                break
            break
        if drop_idxs:
            drop_at(drop_idxs)
            continue
        i += 1

    # 3c) ABA claim stutter: X / Y / X with blank prose → drop second X
    i = 0
    while i + 2 < len(ds):
        if (
            norm(ds[i]) == norm(ds[i + 2])
            and blank_between(before[i + 1])
            and blank_between(before[i + 2])
            and "=" in ds[i]
            and len(norm(ds[i])) < 120
        ):
            drop_at({i + 2})
            continue
        i += 1

    # 4) merge short = chains (blank prose only)
    out: list[str] = []
    i = 0
    while i < len(ds):
        cur = ds[i]
        if (
            i + 1 < len(ds)
            and is_short_seed(cur)
            and is_cont_eq(ds[i + 1])
            and blank_between(before[i + 1])
        ):
            parts = [cur.strip()]
            j = i + 1
            while j < len(ds) and is_cont_eq(ds[j]) and blank_between(before[j]):
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
                # Between displays[oi-1] and displays[oi] is prose[oi]
                if (
                    frag.startswith("=")
                    and frag in merged_n
                    and blank_between(prose[oi])
                ):
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
    pieces = DISP_RE.split(expl)
    prose = pieces[0::2]
    original = pieces[1::2]
    if len(original) < 2:
        return expl, 0
    deduped = _dedupe_with_prose(list(original), list(prose))
    if [norm(x) for x in deduped] == [norm(x) for x in original]:
        return expl, 0
    return rebuild_by_split(expl, list(original), deduped)


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
    assigned = [
        "math-ch9-polynomials.json",
        "math-ch9-mixed-exam.json",
        "math-ch10-exp-log.json",
        "math-ch11-differentiation.ts",
        "math-ch11-exam.json",
    ]
    for name in assigned:
        path = root / name
        if not path.exists():
            continue
        if path.suffix == ".json":
            L, C = process_json(path)
        else:
            L, C = process_ts(path)
        print(f"{path.name}: changed {C}/{L} letters")
        total += C
    print(f"TOTAL letters changed: {total}")


if __name__ == "__main__":
    main()
