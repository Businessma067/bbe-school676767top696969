#!/usr/bin/env python3
"""Universal audit for ingested true/false question banks.

Runs checks 1–12 independently on every question. A question can fail
several checks at once. Use --json to write the full report.
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
LETTERS = "ABCDE"
REPORT_PATH = ROOT / "textbook" / "output" / "question_audit.json"

DUP_NUM_RE = None  # replaced by adjacent-duplicate helpers below
MARKER_RE = re.compile(
    r"#STATEMENT\s*TRUE|#STATEMENTTRUE|#STATEMENT|#STATEMENTFALSE",
    flags=re.I,
)
LATEX_PLAIN_RE = re.compile(r"\$([^$]{1,40})\$")
CONCAT_FRAC_RE = re.compile(r"(\d[\d,]*/\d[\d,]*)\1")
FLAT_C_RE = re.compile(r"\bC(\d{2,3})(\d)\b")
BINOM_RE = re.compile(r"\\binom\{(\d+)\}\{(\d+)\}")
ANSWER_LEAK_RE = re.compile(
    r"Answers?:\s*A\s+TRUE|A\s+TRUE;\s*B\s+TRUE|Worked(?:\s+answer|\s+solution)",
    flags=re.I,
)
CASUAL_RE = re.compile(
    r"\ba close call\b|\bjust barely\b|\bjust clears\b|\bjust creep|"
    r"\bnarrow margin\b|\beasy to misread\b",
    flags=re.I,
)
UNRESOLVED_RE = re.compile(
    r"(=\s*1\s*[-−]\s*[0-9.]+%?\s*=\s*1\s*[-−]\s*[0-9.]+%?)"
    r"|(?:\$\$\s*=\s*1\s*\$\$)"
    r"|(=\s*1\s*=\s*1\b)",
)
AS_ABOVE_RE = re.compile(r"as computed above", flags=re.I)
FLAT_C_RE = re.compile(r"\bC(\d{2,3})(\d)\b")
BINOM_RE = re.compile(r"\\binom\{(\d+)\}\{(\d+)\}")
TAKEAWAY_RE = re.compile(r"(?im)^(?:\*\*)?Takeaway:")
GENERIC_LEAD_RE = re.compile(
    r"Organize counts into a table|Organize the counts from the problem",
    flags=re.I,
)


def explanation_body(text: str) -> str:
    s = (text or "").replace("**", "")
    lines = s.splitlines()
    if lines and re.match(r"^(?:Statement\s+)?[A-E](?:\.|\s+[—–-])", lines[0], flags=re.I):
        lines = lines[1:]
    return "\n".join(lines).strip()


def _norm_num_token(s: str) -> str:
    t = (s or "").replace("{,}", ",").replace("\\,", ",").replace("\\", "")
    t = t.replace("$", "").replace(" ", "")
    return t


def has_adjacent_dup_number(text: str) -> str:
    """LaTeX number immediately followed by the same digits in plain text, or concatenated fraction."""
    t = text or ""
    m = CONCAT_FRAC_RE.search(t.replace(" ", ""))
    if m:
        return m.group(0)
    for m in LATEX_PLAIN_RE.finditer(t):
        inner = _norm_num_token(m.group(1))
        if not re.fullmatch(r"\d[\d,]*(?:\.\d+)?(?:/\d[\d,]*(?:\.\d+)?)?", inner.replace(",", "")):
            # allow commas inside
            if not re.fullmatch(r"[\d,./]+", inner):
                continue
        rest = t[m.end() :]
        rest_compact = rest.lstrip()[:80].replace("{,}", ",").replace(" ", "")
        inner_plain = inner.replace(",", "")
        rest_plain = rest_compact.replace(",", "").replace("$", "")
        if inner_plain and rest_plain.startswith(inner_plain):
            return m.group(0) + rest[: len(inner)]
    return ""


def last_sentence(text: str) -> str:
    body = explanation_body(text)
    parts = [p.strip() for p in re.split(r"(?<=[.!?])\s+", body) if p.strip()]
    return parts[-1] if parts else ""


def iter_case_files() -> list[Path]:
    return sorted(
        p
        for p in DATA.glob("*.json")
        if "cases" in p.name and p.name != "book-embeddings.json"
    )


def load_json_tasks(path: Path) -> list[dict]:
    data = json.loads(path.read_text())
    if isinstance(data, list):
        return [t for t in data if isinstance(t, dict)]
    if isinstance(data, dict) and isinstance(data.get("tasks"), list):
        return data["tasks"]
    return []


def load_ts_tasks(path: Path) -> list[dict]:
    text = path.read_text()
    tasks: list[dict] = []
    chunks = re.split(r"(?=id:\s*`math-)", text)
    for chunk in chunks[1:]:
        def g(name: str) -> str:
            m = re.search(rf"{name}:\s*`([^`]*)`", chunk)
            return m.group(1) if m else ""

        def str_list(name: str) -> list[str]:
            m = re.search(rf"{name}:\s*\[(.*?)\]", chunk, flags=re.S)
            if not m:
                return []
            return [s.replace("\\n", "\n").replace("\\`", "`") for s in re.findall(r"`([^`]*)`", m.group(1))]

        def bool_list() -> list[bool]:
            m = re.search(r"answer_key:\s*\[(.*?)\]", chunk, flags=re.S)
            if not m:
                return []
            return [tok.strip() == "true" for tok in re.findall(r"\b(true|false)\b", m.group(1), flags=re.I)]

        tasks.append(
            {
                "id": g("id"),
                "case_id": g("case_id"),
                "title": g("title"),
                "subsection": g("subsection"),
                "context": g("context"),
                "statements": str_list("statements"),
                "answer_key": bool_list(),
                "tactical_explanations": str_list("tactical_explanations"),
                "solution_overview": g("solution_overview"),
            }
        )
    return tasks


def all_tasks() -> list[dict]:
    out = []
    for path in iter_case_files():
        subject = "economics" if path.name.startswith("economics") else "math"
        for t in load_json_tasks(path):
            t = dict(t)
            t["_file"] = path.name
            t["_subject"] = subject
            out.append(t)
    for path in sorted(DATA.glob("math-ch*.ts")):
        if path.name.endswith("chapters.ts"):
            continue
        for t in load_ts_tasks(path):
            if not t.get("id"):
                continue
            t["_file"] = path.name
            t["_subject"] = "math"
            out.append(t)
    return out


def hit(check: str, field: str, excerpt: str, letter: str = "") -> dict:
    return {
        "check": check,
        "field": field,
        "letter": letter,
        "excerpt": (excerpt or "").replace("\n", " / ")[:240],
    }


def check_dup_numbers(task: dict) -> list[dict]:
    hits = []
    for field, text in (
        ("stem", task.get("context") or ""),
        *[(f"statement {LETTERS[i]}", s) for i, s in enumerate(task.get("statements") or [])],
    ):
        found = has_adjacent_dup_number(text or "")
        if found:
            hits.append(hit("dup_stem_numbers", field, found or text))
    return hits


def check_markers(task: dict) -> list[dict]:
    hits = []
    blob = "\n".join(
        [task.get("context") or ""]
        + list(task.get("statements") or [])
        + list(task.get("tactical_explanations") or [])
        + [task.get("solution_overview") or ""]
    )
    if MARKER_RE.search(blob):
        hits.append(hit("parser_markers", "mixed", MARKER_RE.search(blob).group(0)))
    return hits


def check_split_labels(task: dict) -> list[dict]:
    hits = []
    for i, s in enumerate(task.get("statements") or []):
        body = (s or "").strip()
        if re.fullmatch(r"[A-E]\.?", body):
            hits.append(hit("split_statement_label", f"statement {LETTERS[i]}", body, LETTERS[i]))
    return hits


def check_leaked_solution(task: dict) -> list[dict]:
    stem = task.get("context") or ""
    if ANSWER_LEAK_RE.search(stem) or "#STATEMENT" in stem.upper():
        return [hit("leaked_solution_in_stem", "stem", stem)]
    return []


def check_truncated_stem(task: dict) -> list[dict]:
    stem = (task.get("context") or "").strip()
    if not stem:
        return []
    if stem.endswith((";", ",", "X/Y", "denied")):
        return [hit("truncated_stem", "stem", stem[-80:])]
    if re.search(r";\s*$", stem):
        return [hit("truncated_stem", "stem", stem[-80:])]
    clauses = [c.strip() for c in stem.split(";") if c.strip()]
    if len(clauses) >= 2:
        tails = [re.sub(r"\d[\d,]*(?:\.\d+)?", "N", c)[-40:] for c in clauses]
        if len(set(tails)) == 1 and len(clauses) < 3:
            return [hit("truncated_stem", "stem", stem[:160])]
    return []


def check_dup_explanations(task: dict) -> list[dict]:
    hits = []
    expls = task.get("tactical_explanations") or []
    bodies = [explanation_body(e) for e in expls]
    counts = Counter(b for b in bodies if b)
    for body, n in counts.items():
        if n < 2:
            continue
        letters = [LETTERS[i] for i, b in enumerate(bodies) if b == body]
        hits.append(hit("dup_explanation", "tactical_explanations", body, "".join(letters)))
    mistakes = [last_sentence(e) for e in expls]
    skip_true = re.compile(r"statement is true\.?$|so the statement is (true|false)\.?$", re.I)
    mc = Counter(m for m in mistakes if m and not skip_true.search(m))
    for sent, n in mc.items():
        if n < 2:
            continue
        letters = [LETTERS[i] for i, s in enumerate(mistakes) if s == sent]
        hits.append(hit("dup_mistake", "mistake_sentence", sent, "".join(letters)))
    takeaways = []
    for e in expls:
        m = TAKEAWAY_RE.search(e or "")
        if m:
            takeaways.append((e or "")[m.start() : m.start() + 160])
    tc = Counter(takeaways)
    for t, n in tc.items():
        if n >= 2:
            hits.append(hit("dup_takeaway", "takeaway", t))
    return hits


def check_percent_format(task: dict) -> list[dict]:
    hits = []
    if not str(task.get("subsection") or "").startswith(("12.", "13.")):
        return hits
    for i, e in enumerate(task.get("tactical_explanations") or []):
        result_lines = re.findall(
            r"=\s*(0\.\d+)(?!%)\s*,\s*which is\s+(?:not\s+)?(?:greater|less) than\s+\d+(?:\.\d+)?%",
            e or "",
        )
        if result_lines:
            hits.append(hit("percent_format", f"explanation {LETTERS[i]}", e, LETTERS[i]))
    return hits


def check_unresolved(task: dict) -> list[dict]:
    hits = []
    for i, e in enumerate(task.get("tactical_explanations") or []):
        if UNRESOLVED_RE.search(e or ""):
            hits.append(hit("unresolved_expression", f"explanation {LETTERS[i]}", e, LETTERS[i]))
    return hits


def check_transposed_latex(task: dict) -> list[dict]:
    hits = []
    for i, e in enumerate(task.get("tactical_explanations") or []):
        text = e or ""
        binoms = [(int(a), int(b)) for a, b in BINOM_RE.findall(text)]
        flats = [(int(a), int(b)) for a, b in FLAT_C_RE.findall(text)]
        if flats:
            hits.append(hit("transposed_latex", f"explanation {LETTERS[i]}", text, LETTERS[i]))
            continue
        for n, k in binoms:
            if (k, n) in binoms and n != k:
                hits.append(hit("transposed_latex", f"explanation {LETTERS[i]}", text, LETTERS[i]))
                break
        if re.search(r"\(42\).{0,40}\(24\)|\(24\).{0,40}\(42\)", text):
            hits.append(hit("transposed_latex", f"explanation {LETTERS[i]}", text, LETTERS[i]))
    return hits


def check_dangling_refs(task: dict) -> list[dict]:
    hits = []
    for i, e in enumerate(task.get("tactical_explanations") or []):
        if not AS_ABOVE_RE.search(e or ""):
            continue
        body = explanation_body(e or "")
        has_number = bool(re.search(r"\d", body))
        has_display = "$$" in (e or "")
        if has_display and has_number:
            # still dangling if the phrase is used instead of repeating the number
            # Flag whenever the phrase appears: the number should be inline, not deferred.
            hits.append(hit("dangling_reference", f"explanation {LETTERS[i]}", e, LETTERS[i]))
        else:
            hits.append(hit("dangling_reference", f"explanation {LETTERS[i]}", e, LETTERS[i]))
    return hits


def check_casual(task: dict) -> list[dict]:
    hits = []
    stmts = list(task.get("statements") or [])
    for i, e in enumerate(task.get("tactical_explanations") or []):
        body = explanation_body(e or "")
        # Ignore a restated statement in the first line (Ch5/8/11 headers).
        lines = [ln for ln in body.splitlines() if ln.strip()]
        if lines and i < len(stmts):
            first = re.sub(r"[*_`]", "", lines[0])
            stmt = stmts[i]
            if stmt and stmt[:40] in first:
                body = "\n".join(lines[1:])
        if CASUAL_RE.search(body):
            hits.append(hit("casual_phrasing", f"explanation {LETTERS[i]}", e, LETTERS[i]))
    return hits


def check_structure(task: dict) -> list[dict]:
    hits = []
    sub = str(task.get("subsection") or "")
    if not sub.startswith(("12.", "13.")):
        return hits
    for i, e in enumerate(task.get("tactical_explanations") or []):
        body = explanation_body(e or "")
        if not body:
            continue
        if TAKEAWAY_RE.search(e or "") or GENERIC_LEAD_RE.search(body):
            hits.append(hit("wrong_structure", f"explanation {LETTERS[i]}", e, LETTERS[i]))
            continue
        first = body.split("\n\n", 1)[0].strip()
        if first.startswith("$$"):
            continue
        if re.match(r"P\(|E\(|Var\(|σ|Which is |The statement is", first):
            hits.append(hit("wrong_structure", f"explanation {LETTERS[i]}", first, LETTERS[i]))
        elif "$$" in body and re.search(r"which is (?:not )?(?:greater|less)", first, flags=re.I):
            hits.append(hit("wrong_structure", f"explanation {LETTERS[i]}", first, LETTERS[i]))
    return hits


CHECKS = [
    ("1_dup_numbers", check_dup_numbers),
    ("2_markers", check_markers),
    ("3_split_labels", check_split_labels),
    ("4_leaked_solution", check_leaked_solution),
    ("5_truncated_stem", check_truncated_stem),
    ("6_dup_explanations", check_dup_explanations),
    ("7_percent_format", check_percent_format),
    ("8_unresolved", check_unresolved),
    ("9_transposed_latex", check_transposed_latex),
    ("10_dangling_refs", check_dangling_refs),
    ("11_casual", check_casual),
    ("12_structure", check_structure),
]


def audit_task(task: dict) -> dict | None:
    failed = []
    excerpts = []
    for _name, fn in CHECKS:
        for h in fn(task):
            failed.append(h["check"])
            excerpts.append(h)
    if not failed:
        return None
    return {
        "id": task.get("id") or task.get("case_id") or task.get("title"),
        "case_id": task.get("case_id") or "",
        "topic": task.get("subsection") or "",
        "subject": task.get("_subject") or "",
        "file": task.get("_file") or "",
        "title": (task.get("title") or "")[:80],
        "failed_checks": sorted(set(failed)),
        "details": excerpts,
    }


def main() -> int:
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    tasks = all_tasks()
    reports = [r for t in tasks if (r := audit_task(t))]
    by_check: dict[str, int] = defaultdict(int)
    by_file: dict[str, int] = defaultdict(int)
    for r in reports:
        by_file[r["file"]] += 1
        for c in r["failed_checks"]:
            by_check[c] += 1
    print(f"audited {len(tasks)} questions; flagged {len(reports)}")
    print(f"{'file':42} {'flagged':>8}")
    for name, n in sorted(by_file.items()):
        print(f"{name:42} {n:8}")
    print()
    print(f"{'check':28} {'questions':>10}")
    for name, n in sorted(by_check.items(), key=lambda kv: (-kv[1], kv[0])):
        print(f"{name:28} {n:10}")
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(json.dumps({"audited": len(tasks), "flagged": reports}, ensure_ascii=False, indent=2) + "\n")
    print(f"\nwrote {REPORT_PATH}")
    return 1 if reports else 0


if __name__ == "__main__":
    sys.exit(main())
