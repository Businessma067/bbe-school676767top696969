"""Structural audit for _ch2_bank_25_v2.py (Chapter 2.5 mixed exam bank).

Checks the schema, the header/verdict wiring, the style bans, and the
independence requirement (no task may repeat one given across its five items).
"""

from __future__ import annotations

import re
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from _ch2_bank_25_v2 import BANK_25  # noqa: E402

LETTERS = "ABCDE"
DIFFS = {"1/5", "2/5", "3/5", "4/5", "5/5"}

FORBIDDEN_FRAGMENTS = [
    r"4(2y)/(-2y)^2",
    r"3yz/4x",
    r"(4x-2)/(x^2-1)",
    r"2/x+3/y",
    r"(2x^{-1}-1)(2x^{-1}+1)",
    r"\frac{4(2y)}{(-2y)^2}",
    r"\dfrac{3yz}{4x}",
]

BANNED_VOICE = [
    "Watch.",
    "Trap:",
    "trap:",
    "Polarisation:",
    "A solver who",
    "It is important to note",
    "in conclusion",
    "—",
    "${",
]

# A claim that hands concrete numbers to letters and then asks for a value.
PLUGIN_PATTERNS = [
    re.compile(r"\bAt \$[a-z]\s*=\s*-?\d"),
    re.compile(r"\bWhenever \$[a-z]\s*=\s*-?\d"),
    re.compile(r"\bFor \$[a-z]\s*=\s*-?\d"),
    re.compile(r"\bIf \$[a-z]\s*=\s*-?\d"),
    re.compile(r"\bIf \$[a-z]\s*\+\s*[a-z]\s*=\s*-?\d"),
    re.compile(r"\bIf \$[a-z][a-z]\s*=\s*-?\d"),
    re.compile(r"\$[a-z]\s*\+\s*\\d?frac1\{?[a-z]\}?\s*=\s*-?\d"),
]

errors: list[str] = []
warnings: list[str] = []


def fail(msg: str) -> None:
    errors.append(msg)


if len(BANK_25) != 34:
    fail(f"expected 34 tasks, found {len(BANK_25)}")

titles = Counter()
statement_texts = Counter()
true_counts = []

for idx, task in enumerate(BANK_25, start=1):
    tag = f"task {idx}"
    for key in ("subsection", "title", "diff", "overview", "context", "items"):
        if key not in task:
            fail(f"{tag}: missing key {key}")
    if task.get("subsection") != "2.5":
        fail(f"{tag}: subsection is {task.get('subsection')!r}")
    if task.get("diff") not in DIFFS:
        fail(f"{tag}: bad diff {task.get('diff')!r}")
    titles[task["title"]] += 1

    if idx <= 4:
        if not task["title"].startswith("Warm-up: "):
            fail(f"{tag}: warm-up title expected, got {task['title']!r}")
        if task["diff"] not in {"1/5", "2/5"}:
            fail(f"{tag}: warm-up diff must be 1/5 or 2/5, got {task['diff']}")
    else:
        if task["title"].startswith("Warm-up"):
            fail(f"{tag}: hard task must not be titled Warm-up")
        if task["diff"] not in {"3/5", "4/5", "5/5"}:
            fail(f"{tag}: hard diff must be 3/5..5/5, got {task['diff']}")

    if "is/are correct?" not in task["context"]:
        fail(f"{tag}: context does not use the exam question form")

    items = task["items"]
    if len(items) != 5:
        fail(f"{tag}: expected 5 items, found {len(items)}")

    n_true = 0
    givens = Counter()
    for j, item in enumerate(items):
        letter = LETTERS[j] if j < 5 else "?"
        if not isinstance(item, tuple) or len(item) != 3:
            fail(f"{tag} {letter}: item is not a 3-tuple")
            continue
        statement, answer, explanation = item
        if not isinstance(answer, bool):
            fail(f"{tag} {letter}: answer is not a bool")
        n_true += bool(answer)

        statement_texts[statement.strip()] += 1

        verdict = "True" if answer else "False"
        head = explanation.splitlines()[0].strip()
        if head != f"**{letter}.** \u2192 {verdict}":
            fail(f"{tag} {letter}: header mismatch: {head!r} (answer {verdict})")
        closer = explanation.strip().splitlines()[-1].strip()
        if not closer.lower().endswith(f"the statement is {verdict.lower()}."):
            fail(f"{tag} {letter}: closer mismatch: {closer[-60:]!r}")

        if "$$" not in explanation:
            fail(f"{tag} {letter}: explanation has no display block")
        if len(explanation) < 220:
            warnings.append(f"{tag} {letter}: short explanation ({len(explanation)} chars)")

        for frag in FORBIDDEN_FRAGMENTS:
            if frag in statement or frag in explanation:
                fail(f"{tag} {letter}: forbidden fragment {frag!r}")
        for bad in BANNED_VOICE:
            if bad in statement or bad in explanation:
                fail(f"{tag} {letter}: banned voice {bad!r}")
        if "\\text{" in statement:
            fail(f"{tag} {letter}: English inside math in the statement")
        for pat in PLUGIN_PATTERNS:
            if pat.search(statement):
                fail(f"{tag} {letter}: numeric plug-in claim: {statement[:70]!r}")

        # Independence: no substantive hypothesis may drive two claims of one task.
        m = re.match(r"If .+?, then", statement.strip())
        if m:
            givens[m.group(0)] += 1

    true_counts.append(n_true)
    if n_true not in (2, 3):
        fail(f"{tag}: {n_true} True answers (expected 2 or 3)")
    for given, count in givens.items():
        if count > 1:
            fail(f"{tag}: repeated given {given!r} in {count} statements")

# ---- LaTeX balance ---------------------------------------------------------
for idx, task in enumerate(BANK_25, start=1):
    blobs = [("overview", task["overview"]), ("context", task["context"])]
    for j, (statement, _answer, explanation) in enumerate(task["items"]):
        blobs.append((f"{LETTERS[j]} statement", statement))
        blobs.append((f"{LETTERS[j]} explanation", explanation))
    for name, blob in blobs:
        if blob.count("$$") % 2:
            fail(f"task {idx} {name}: odd number of $$ delimiters")
        singles = len(re.findall(r"(?<!\$)\$(?!\$)", blob))
        if singles % 2:
            fail(f"task {idx} {name}: odd number of $ delimiters")
        if "\\\\(" in blob or "${" in blob:
            fail(f"task {idx} {name}: bad math delimiter")

# ---- explanation length variance inside each task --------------------------
for idx, task in enumerate(BANK_25, start=1):
    lengths = [len(item[2]) for item in task["items"]]
    if max(lengths) - min(lengths) < 60:
        warnings.append(f"task {idx}: explanation lengths nearly identical {lengths}")

# ---- template spam across the bank ----------------------------------------
MOTIFS = {
    "cube sum under vanishing sum": r"\^3\+.\^3\+.\^3",
    "reciprocal tower": r"\+\\dfrac1\{?[a-z]\}?=k|x\^2\+\\dfrac\{1\}\{x\^2\}",
    "difference of squares of x^2-1": r"\{[a-z]\^2-1\}",
    "quartic split": r"\^4\+.\^2.\^2\+.\^4|\^4\+[a-z]\^2\+1",
    "symmetric functions s and p": r"=s\$ and \$[a-z]{1,2}=p\$",
    "denested radical": r"\\sqrt\{\d\+\d?\\sqrt",
    "conjugate rationalisation": r"\\sqrt\{?[a-z]",
}
for label, pattern in MOTIFS.items():
    hits = [
        (idx, LETTERS[j])
        for idx, task in enumerate(BANK_25, start=1)
        for j, item in enumerate(task["items"])
        if re.search(pattern, item[0])
    ]
    per_task = Counter(idx for idx, _ in hits)
    print(f"motif {label!r}: {len(hits)} statements in {len(per_task)} tasks")
    for idx, count in per_task.items():
        if count > 1 and label != "conjugate rationalisation":
            warnings.append(f"task {idx}: motif {label!r} used {count} times in one task")

for title, count in titles.items():
    if count > 1:
        fail(f"duplicate title {title!r} ({count} times)")
for statement, count in statement_texts.items():
    if count > 1:
        fail(f"duplicate statement {statement[:70]!r} ({count} times)")

print(f"tasks: {len(BANK_25)}")
print(f"items: {sum(len(t['items']) for t in BANK_25)}")
print("diff histogram:", dict(Counter(t["diff"] for t in BANK_25)))
print("True-per-task histogram:", dict(Counter(true_counts)))
print(f"warnings: {len(warnings)}")
for w in warnings:
    print("  warn:", w)
if errors:
    print(f"ERRORS: {len(errors)}")
    for e in errors:
        print("  ", e)
    sys.exit(1)
print("structure OK")
