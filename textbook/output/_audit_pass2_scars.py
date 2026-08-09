# -*- coding: utf-8 -*-
"""Find real leftover prose-in-math / bad escapes in Ch11 (low false-positive)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
raw = json.loads((ROOT / "textbook/output/ch11_raw.json").read_text(encoding="utf-8"))

# Real `$...$` spans (unescaped delimiters)
SPAN = re.compile(r"(?<!\\)\$((?:\\.|[^$])*)\$")

ENGLISH = re.compile(
    r"\b(?:monthly|yearly|quarterly|annually|amount|invested|returned|matching|statement|"
    r"deposit|payment|years?|months?|today|tomorrow|because|approximately)\b",
    re.I,
)
# Allow and/or only if entire inner is otherwise math? Flag multi-word English.
TWO_WORDS = re.compile(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}")

# Bad: opening math delimiter escaped, closing not (already fixed mostly)
BAD_OPEN = re.compile(r"(?<!\\)\\\$[^$]{1,80}(?<!\\)\$")

# `$var$ = $num` leftover
ASSIGN = re.compile(r"(?<!\\)\$[^$\n]{1,40}\$\s*=\s*-?\$\d")

# Flat (1.05)12
FLAT = re.compile(r"\)(\d{1,3})(?![0-9.}\]])")


def walk(obj, path, acc):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "answer_key":
                continue
            walk(v, path + [k], acc)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, path + [str(i)], acc)
    elif isinstance(obj, str):
        acc.append(("/".join(path), obj))


by_sub: dict[str, list] = {f"11.{i}": [] for i in range(1, 8)}

for sub in raw["subsections"]:
    sid = sub["id"]
    for t in sub["tasks"]:
        strings = []
        walk(t, [sid, f"t{t['local_num']}"], strings)
        for path, s in strings:
            for m in ASSIGN.finditer(s):
                by_sub[sid].append(("ASSIGN", path, m.group(0)))
            for m in FLAT.finditer(s):
                # skip }^{12} and )$ boundaries
                i = m.start()
                if i >= 2 and s[i - 2 : i + 1] == "}^{":
                    continue
                by_sub[sid].append(("FLAT", path, s[max(0, i - 20) : i + 15]))
            for m in BAD_OPEN.finditer(s):
                # `\$40{,}000` prose money ending before next `$` is OK if next is new math
                # Flag when content looks algebraic: has = ^ { } \ln \times
                chunk = m.group(0)
                if re.search(r"[=^]|\\ln|\\times|\\mathrm|/\(", chunk):
                    by_sub[sid].append(("BAD_ESC_OPEN", path, chunk[:120]))
            for m in SPAN.finditer(s):
                inner = m.group(1)
                if TWO_WORDS.search(inner) or ENGLISH.search(inner):
                    # skip pure \mathrm / \text
                    if re.fullmatch(r"\\mathrm\{[^}]+\}", inner.strip()):
                        continue
                    by_sub[sid].append(("PROSE_SPAN", path, m.group(0)[:140]))

lines = []
print("=== COUNTS ===")
for sid, hits in by_sub.items():
    print(sid, len(hits))
    lines.append(f"## {sid} ({len(hits)})")
    for kind, path, snip in hits[:40]:
        safe = snip.replace("\n", "\\n").encode("ascii", "replace").decode()
        lines.append(f"  [{kind}] {path}: {safe}")
        print(f"  [{kind}] {path}: {safe}"[:200])
    if len(hits) > 40:
        lines.append(f"  ... +{len(hits)-40} more")

(ROOT / "textbook/output/_audit_pass2_scars.txt").write_text("\n".join(lines), encoding="utf-8")
print("wrote _audit_pass2_scars.txt")
