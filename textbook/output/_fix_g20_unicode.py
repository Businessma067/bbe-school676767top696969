# -*- coding: utf-8 -*-
"""Restore identity fields from HEAD; fix mojibake in explanations."""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
PATH = ROOT / "src/data/english/grammar_parts/g.20.json"

old = json.loads(
    subprocess.check_output(
        ["git", "-C", str(ROOT), "show", "HEAD:src/data/english/grammar_parts/g.20.json"],
        text=True,
        encoding="utf-8",
    )
)
new = json.loads(PATH.read_text(encoding="utf-8"))


def clean(s: str) -> str:
    s = s.replace("\ufffd", "")
    s = s.replace("\u2014", " -- ")
    s = s.replace("\u2013", " - ")
    s = re.sub(r"\s+--\s+", " -- ", s)
    s = re.sub(r" {2,}", " ", s)
    # fix double spaces introduced awkwardly around --
    s = s.replace(" -- ", " -- ")
    return s


for ot, nt in zip(old["tasks"], new["tasks"]):
    assert ot["id"] == nt["id"]
    # restore immutable fields
    for key in (
        "statements",
        "answer_key",
        "highlights",
        "id",
        "case_id",
        "title",
        "context",
        "difficulty_level",
        "sort_order",
        "subsection",
    ):
        nt[key] = ot[key]
    # rebuild tactical headers from restored statements; keep body+tip
    letters = "ABCDE"
    fixed = []
    for i, (stmt, key, expl) in enumerate(
        zip(ot["statements"], ot["answer_key"], nt["tactical_explanations"])
    ):
        parts = expl.split("\n\n", 1)
        body_rest = parts[1] if len(parts) > 1 else ""
        body_rest = clean(body_rest)
        tag = "true" if key else "false"
        s = stmt.rstrip()
        if not s.endswith((".", "?", "!")):
            s += "."
        fixed.append(f"**{letters[i]}) {s}**  ({tag})\n\n{body_rest}")
    nt["tactical_explanations"] = fixed
    nt["solution_overview"] = clean(nt["solution_overview"])

PATH.write_text(json.dumps(new, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# verify
again = json.loads(PATH.read_text(encoding="utf-8"))
for ot, nt in zip(old["tasks"], again["tasks"]):
    assert ot["statements"] == nt["statements"], nt["id"]
    assert ot["answer_key"] == nt["answer_key"], nt["id"]
    assert ot["highlights"] == nt["highlights"], nt["id"]
text = PATH.read_text(encoding="utf-8")
assert "\ufffd" not in text
assert "café" in text
print("restored OK; cafe present:", "café" in text)
print("emdash count", text.count("\u2014"))
