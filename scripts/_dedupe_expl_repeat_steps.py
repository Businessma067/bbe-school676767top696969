#!/usr/bin/env python3
"""Dedupe repeated $$ steps and lightly merge short continued equality chains.

Keeps maximal expansion for real algebra. Only:
- drops exact duplicate / repeated display blocks
- joins short fragments that continue the same evaluation with leading '='
"""
from __future__ import annotations

import json
import re
from pathlib import Path

DISP_RE = re.compile(r"\$\$(.*?)\$\$", re.S)


def norm(d: str) -> str:
    s = " ".join(d.split())
    s = re.sub(r"\s+", "", s)
    return s.rstrip(".,;")


def is_cont_eq(d: str) -> bool:
    """Display is a short continuation like '= 21' or '= \\frac{1}{2}'."""
    t = d.strip()
    if not t.startswith("="):
        return False
    # strip leading =
    rest = t[1:].strip()
    if len(rest) > 60:
        return False
    # shouldn't introduce a new LHS assignment like '= x = 2' with words
    if "\\Rightarrow" in t or "\\text" in t:
        return False
    return True


def is_short_seed(d: str) -> bool:
    """Previous line is a short expression worth chaining into."""
    t = " ".join(d.split())
    if len(t) > 80:
        return False
    if "\\Rightarrow" in t:
        return False
    # allow LHS=expr or bare expr / fraction
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
    """Merge seed + '= a' + '= b' into one display when fragments are short."""
    out: list[str] = []
    i = 0
    while i < len(ds):
        cur = ds[i]
        if i + 1 < len(ds) and is_short_seed(cur) and is_cont_eq(ds[i + 1]):
            # collect following = continuations
            parts = [cur.strip()]
            j = i + 1
            while j < len(ds) and is_cont_eq(ds[j]):
                cont = ds[j].strip()
                # ensure single spaces around =
                if not cont.startswith("="):
                    break
                parts.append(cont)
                j += 1
            if len(parts) >= 2:
                # only merge if total stays modest (don't glue huge algebra)
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


def rebuild_explanation(expl: str) -> tuple[str, int]:
    original = DISP_RE.findall(expl)
    if len(original) < 2:
        return expl, 0
    deduped = dedupe_display_list(list(original))
    if [norm(x) for x in deduped] == [norm(x) for x in original]:
        return expl, 0

    parts: list[str] = []
    last = 0
    di = 0
    removed = 0
    for m in DISP_RE.finditer(expl):
        parts.append(expl[last : m.start()])
        content = m.group(1)
        if di < len(deduped) and norm(content) == norm(deduped[di]):
            parts.append(f"$${content}$$")
            di += 1
        elif di < len(deduped) and norm(deduped[di]) != norm(content):
            # merged block replaces one or more originals — emit merged once
            # when we've consumed enough originals matching the merge
            # Simpler path: if content is prefix of merged or first fragment
            merged = deduped[di]
            if norm(content) == norm(merged) or norm(merged).startswith(norm(content).rstrip("=")):
                # start of a merge: emit full merged, skip until fragments consumed
                parts.append(f"$${merged}$$")
                # advance di; skip subsequent original fragments that were merged
                target = norm(merged)
                consumed = norm(content)
                last_end = m.end()
                # peek following displays in original stream via continuing loop
                di += 1
                # mark that following cont_eq originals should be skipped
                # handled below by matching remaining
            else:
                removed += 1
        else:
            removed += 1
        last = m.end()
    parts.append(expl[last:])
    # The above loop is tricky with merges — use index-aligned rebuild instead
    return rebuild_by_split(expl, original, deduped)


def rebuild_by_split(expl: str, original: list[str], deduped: list[str]) -> tuple[str, int]:
    """Split explanation on $$ displays; reassemble with deduped list.

    Always preserves trailing prose (closers). Whitespace-only prose between
    dropped duplicate displays is discarded; non-empty prose is kept.
    """
    pieces = DISP_RE.split(expl)
    prose = pieces[0::2]
    displays = pieces[1::2]
    assert len(displays) == len(original)

    out: list[str] = [prose[0]]
    oi = 0
    di = 0
    skipped = 0

    def append_prose_after(display_index: int) -> None:
        # prose[k] follows displays[k-1] for k>=1; prose[0] is prefix
        if display_index + 1 < len(prose):
            p = prose[display_index + 1]
            if p.strip():
                out.append(p)
            elif display_index + 1 == len(displays):
                # keep final newlines before EOF only if needed
                out.append(p)

    while oi < len(displays):
        if di >= len(deduped):
            # remaining displays are pure duplicates — keep any meaningful prose
            while oi < len(displays):
                skipped += 1
                append_prose_after(oi)
                oi += 1
            break

        if norm(displays[oi]) == norm(deduped[di]):
            out.append(f"$${deduped[di]}$$")
            append_prose_after(oi)
            di += 1
            oi += 1
            continue

        # merged block starting at this original fragment
        if norm(displays[oi]) in norm(deduped[di]) or norm(deduped[di]).startswith(
            norm(displays[oi])
        ):
            out.append(f"$${deduped[di]}$$")
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
            append_prose_after(last_consumed)
            di += 1
            continue

        # duplicate skip of this display
        skipped += 1
        append_prose_after(oi)
        oi += 1

    new = "".join(out)
    new = re.sub(r"\n{3,}", "\n\n", new)
    # ensure closer newline
    if not new.endswith("\n") and expl.endswith("\n"):
        new += "\n"
    return new, skipped + max(0, len(original) - len(deduped))


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
            ne, r = rebuild_explanation(e)
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
