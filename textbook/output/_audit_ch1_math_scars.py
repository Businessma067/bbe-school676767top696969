"""Audit math-ch1-logic.ts for $ scars / broken inline math in statements & explanations."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DUMP = Path(__file__).resolve().parent / "_ch1_tasks_dump.json"
TS = ROOT / "src" / "data" / "math-ch1-logic.ts"


def load_tasks():
    if DUMP.exists():
        return json.loads(DUMP.read_text(encoding="utf-8"))
    # minimal fallback: not used if dump exists
    raise SystemExit("run node textbook/output/_dump_ch1_tasks.mjs first")


DOLLAR_RE = re.compile(r"(?<!\\)\$(?!\$)")


def odd_dollars(s: str) -> bool:
    # count unescaped $ ignoring $$
    i, n, count = 0, len(s), 0
    while i < n:
        if s[i] == "$":
            bs = 0
            j = i - 1
            while j >= 0 and s[j] == "\\":
                bs += 1
                j -= 1
            if bs % 2 == 0:
                if i + 1 < n and s[i + 1] == "$":
                    i += 2
                    continue
                count += 1
        i += 1
    return count % 2 == 1


PATTERNS = [
    ("split_neg", re.compile(r"\$\\neg\$\s*\(")),
    ("lone_conn", re.compile(r"\$\\(?:cap|cup|land|lor|vee|wedge|setminus|in|notin|subseteq|subset|supset|Rightarrow|Leftrightarrow|equiv|neq|leq|geq|times|cdot)\$")),
    ("c_mix", re.compile(r"[A-Z]ᶜ\s*\$")),
    ("close_mid_english", re.compile(r"\$[A-Za-z0-9\\{}_^+\-*/=<>.,;:()\[\]\\s]*\$\s*(?:is|are|for|such|then|and|or|not|the|a|an)\b", re.I)),
    ("dollar_then_neq", re.compile(r"\$\s*[≠≠]")),
    ("bare_latex_cmd", re.compile(r"(?<!\$)\\(?:exists|forall|neg|wedge|vee|Rightarrow|Leftrightarrow|cap|cup|in|notin|subseteq|emptyset|land|lor)\b")),
    ("exists_scar", re.compile(r"\$\\exists[^$]*\$,\s*P\(")),
    ("forall_day", re.compile(r"\$\\forall\$\s+\w")),
    ("pad_shared", re.compile(r"overreaches the shared facts|into symbols, the shared")),
    ("x_dollar_english", re.compile(r"\$x\$\s+is\b|\$x\$\s+≠|\$x\$\s+ne")),
    ("broken_and_x", re.compile(r"\\land x\$|x\$ ≠|\$2 \\Rightarrow x\$")),
]


def check_text(loc: str, text: str, issues: list):
    if not text:
        return
    if odd_dollars(text):
        issues.append((loc, "odd_dollar_count", text[:180].replace("\n", " | ")))
    for name, rx in PATTERNS:
        if rx.search(text):
            m = rx.search(text)
            snippet = text[max(0, m.start() - 40) : m.end() + 60].replace("\n", " | ")
            issues.append((loc, name, snippet))


def main():
    tasks = load_tasks()
    issues = []
    for t in tasks:
        tid = t["id"]
        check_text(f"{tid}.context", t.get("context") or "", issues)
        check_text(f"{tid}.overview", t.get("solution_overview") or "", issues)
        for i, s in enumerate(t.get("statements") or []):
            check_text(f"{tid}.stmt[{i}]", s, issues)
        for i, e in enumerate(t.get("explanations") or []):
            check_text(f"{tid}.expl[{i}]", e, issues)

    out = Path(__file__).resolve().parent / "_audit_ch1_math_scars.txt"
    lines = [f"issues: {len(issues)}"]
    by = {}
    for loc, kind, snip in issues:
        by.setdefault(kind, []).append((loc, snip))
    for kind, rows in sorted(by.items(), key=lambda x: -len(x[1])):
        lines.append(f"\n=== {kind} ({len(rows)}) ===")
        for loc, snip in rows[:80]:
            lines.append(f"{loc}: {snip}")
    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {out} ({len(issues)} issues, {len(by)} kinds)")
    for kind, rows in sorted(by.items(), key=lambda x: -len(x[1])):
        print(f"  {kind}: {len(rows)}")


if __name__ == "__main__":
    main()
