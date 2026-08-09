#!/usr/bin/env python3
"""Import English Texts bank from English_Exam_Tasks_Final_v6 PDF extract.

Reads textbook/output/_english_exam_extract.txt (UTF-8) produced from the PDF,
parses 16 passages × 10 tasks, upgrades tactical explanations, writes
src/data/english/texts.json.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXTRACT = ROOT / "textbook" / "output" / "_english_exam_extract.txt"
OUT = ROOT / "src" / "data" / "english" / "texts.json"

PASSAGE_TITLES = [
    "The Rise of the Four-Day Workweek",
    "Dynamic Pricing and the Rise of Algorithmic Price Discrimination",
    "The Rise and Fall of the Classical Gold Standard",
    "Reshoring, Nearshoring, and the Post-Pandemic Reordering of Global Supply Chains",
    "The Marshall Plan and the Politics of Economic Recovery",
    "Nudge Theory and the Limits of Behavioural Public Policy",
    "The Antibiotic Discovery Void and the Economics of Resistance",
    "The Astonishing Navigation of the Arctic Tern",
    "A Century Aloft — The Compressed Evolution of Powered Flight",
    "The Improbable Global Conquest of the Potato",
    "The Silicon Chokepoint — How a Few Factories Reshaped Global Power",
    "The Doomsday Glacier — Racing to Predict a Silent Collapse",
    "Living Light — Bioluminescence in the Deep Ocean",
    "The Alien Mind — Cognition and Camouflage in Octopuses",
    "The Shifting Anatomy of Economic Sectors",
    "Voyager — Humanity's Longest-Running Conversation with the Void",
]


def clean_extract(raw: str) -> str:
    text = raw.replace("\r\n", "\n").replace("\u00a0", " ")
    text = re.sub(r"(?m)^===== PAGE \d+ =====\s*$", "\n", text)
    text = re.sub(r"(?m)^pages \d+\s*$", "", text)
    text = re.sub(r"(?m)^English\(Texts\)\s*$", "", text)
    # Drop lone page numbers
    text = re.sub(r"(?m)^\d+\s*$", "", text)
    # Normalize fancy dashes / quotes
    text = (
        text.replace("\u2013", "–")
        .replace("\u2014", "—")
        .replace("\u2018", "'")
        .replace("\u2019", "'")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
        .replace("\ufb01", "fi")
        .replace("\ufb02", "fl")
    )
    return text


def join_wrapped_lines(block: str) -> str:
    """Join soft line-wraps inside a paragraph while keeping paragraph breaks."""
    lines = [ln.rstrip() for ln in block.splitlines()]
    out: list[str] = []
    buf = ""
    for ln in lines:
        s = ln.strip()
        if not s:
            if buf:
                out.append(buf.strip())
                buf = ""
            continue
        if not buf:
            buf = s
            continue
        # Soft wrap: previous line did not end a sentence hard, and next continues lowercase/continuation
        if buf[-1] in ".!?:;\"')" and s[:1].isupper():
            out.append(buf.strip())
            buf = s
        elif buf.endswith("-") and s[:1].islower():
            buf = buf[:-1] + s
        else:
            buf = buf + " " + s
    if buf:
        out.append(buf.strip())
    return "\n\n".join(out)


def normalize_space(s: str) -> str:
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r" *\n *", "\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def fix_title_hyphens(title: str) -> str:
    t = re.sub(r"\s+", " ", title).strip(" -—")
    # Repair common PDF hyphen artefacts
    replacements = {
        "A Century Aloft The Compressed": "A Century Aloft — The Compressed",
        "The Silicon Chokepoint How a Few": "The Silicon Chokepoint — How a Few",
        "The Doomsday Glacier Racing": "The Doomsday Glacier — Racing",
        "Living Light Bioluminescence": "Living Light — Bioluminescence",
        "The Alien Mind Cognition": "The Alien Mind — Cognition",
        "Voyager Humanity": "Voyager — Humanity",
        "Humanitys": "Humanity's",
        "Humanity s": "Humanity's",
    }
    for a, b in replacements.items():
        if a in t:
            t = t.replace(a, b)
    return t


def infer_kind(exam_title: str) -> str:
    t = exam_title.lower()
    if "grammar" in t:
        return "grammar"
    if any(
        k in t
        for k in (
            "vocabulary",
            "collocation",
            "word form",
            "formal register",
            "paraphrase",
            "definition",
            "sneaky",
        )
    ):
        return "vocabulary"
    return "reading"


def difficulty_for(task_num: int, kind: str) -> str:
    # Progressive within each passage (PDF labels everything 5/5).
    if task_num <= 2:
        return "2/5"
    if task_num <= 4:
        return "3/5"
    if task_num <= 6:
        return "4/5"
    return "5/5"


def parse_answer_key(raw: str) -> list[bool]:
    pairs = re.findall(r"(\d+)\s*:\s*(True|False)", raw, flags=re.I)
    pairs.sort(key=lambda x: int(x[0]))
    if len(pairs) != 5:
        raise ValueError(f"Expected 5 answer keys, got {pairs!r} from {raw!r}")
    return [v.lower() == "true" for _, v in pairs]


def flatten_soft_wraps(body: str) -> str:
    """Join PDF soft wraps so 'Paragraph\\n3.' does not look like item 3."""
    return re.sub(r"\s+", " ", join_wrapped_lines(body)).strip()


def parse_numbered_items(body: str) -> list[str]:
    """Split '1. ... 2. ...' into five statement strings."""
    flat = flatten_soft_wraps(body)
    parts = re.split(r"(?=\b[1-5]\.\s)", flat)
    items: list[str] = []
    for part in parts:
        part = part.strip()
        if not part:
            continue
        m = re.match(r"^([1-5])\.\s*(.*)$", part, flags=re.S)
        if not m:
            continue
        text = re.sub(r"\s+", " ", m.group(2)).strip()
        text = re.sub(r"\s*Answer Key:.*$", "", text, flags=re.S).strip()
        items.append(text)
    return items


def parse_explanations(body: str) -> list[str]:
    """Split tactical explanations; require TRUE./FALSE. after the number."""
    flat = flatten_soft_wraps(body)
    parts = re.split(r"(?=\b[1-5]\.\s*(?:TRUE|FALSE)\.)", flat, flags=re.I)
    items: list[str] = []
    for part in parts:
        part = part.strip()
        if not part:
            continue
        m = re.match(r"^([1-5])\.\s*(.*)$", part, flags=re.S | re.I)
        if not m:
            continue
        text = re.sub(r"\s+", " ", m.group(2)).strip()
        items.append(text)
    return items


def extract_highlight(explanation: str, passage: str) -> str:
    """Prefer a verbatim quoted span that exists in the passage."""
    quotes = re.findall(r'"([^"]{8,180})"', explanation)
    for q in quotes:
        qn = re.sub(r"\s+", " ", q).strip()
        if qn and qn in passage:
            return qn
        # Try relaxed whitespace match
        pat = re.escape(qn).replace(r"\ ", r"\s+")
        m = re.search(pat, passage)
        if m:
            return m.group(0)
    # Fall back to Paragraph N cue — leave empty; UI still works
    return ""


def improve_explanation(
    raw: str,
    *,
    statement: str,
    is_true: bool,
    kind: str,
    exam_title: str,
    passage_title: str,
) -> str:
    """Rewrite short tactical notes into clearer, exam-ready explanations."""
    text = re.sub(r"\s+", " ", raw).strip()
    # Strip leading TRUE./FALSE. — we restate the verdict cleanly
    verdict = "TRUE" if is_true else "FALSE"
    body = re.sub(r"^(TRUE|FALSE)\.\s*", "", text, flags=re.I).strip()

    quotes = re.findall(r'"([^"]{6,200})"', body)
    quote_block = ""
    if quotes:
        q = quotes[0].strip()
        quote_block = f'\n\nEvidence from the passage: "{q}"'

    if kind == "grammar":
        tip = (
            "\n\nExam tip: After verbs like insist/recommend/require + that, use the base form "
            "(subjunctive). Watch subject–verb agreement with 'the number' vs 'a number', "
            "dangling modifiers, and mixed conditionals."
            if ("grammar" in exam_title.lower() and not is_true)
            else "\n\nExam tip: Confirm the exact grammatical pattern the sentence claims to use — "
            "one missing auxiliary or wrong form flips the item."
        )
        why = "This sentence is grammatically correct." if is_true else "This sentence is not grammatically correct."
        return f"{verdict}. {why}\n\n{body}{quote_block}{tip}".strip()

    if kind == "vocabulary":
        tip = (
            "\n\nExam tip: Do not rely on a word 'sounding right' — check whether the claimed "
            "meaning / collocation / register matches how the word is used in this sentence."
        )
        why = (
            "The wording / meaning claimed here matches standard English usage."
            if is_true
            else "The wording / meaning claimed here does not match standard English usage."
        )
        return f"{verdict}. {why}\n\n{body}{quote_block}{tip}".strip()

    # Reading / inference
    if is_true:
        lead = (
            f"TRUE — the statement matches what the passage says about «{passage_title}»."
        )
        tip = (
            "\n\nExam tip: Anchor on the exact wording (dates, quantities, causal claims). "
            "If the statement only paraphrases faithfully, it is still true."
        )
    else:
        lead = (
            f"FALSE — the statement distorts or contradicts the passage on «{passage_title}»."
        )
        tip = (
            "\n\nExam tip: Common traps flip chronology, exaggerate certainty, swap quantities, "
            "or invent claims the text never makes. Prefer the paragraph that names the fact."
        )
    return f"{lead}\n\n{body}{quote_block}{tip}".strip()


def extract_passage_before_tasks(chunk: str) -> str:
    """Chunk starts at '(1) ...' and runs until TASK 1."""
    m = re.search(r"TASK\s+1\s*:", chunk)
    if not m:
        raise ValueError("No TASK 1 in passage chunk")
    body = chunk[: m.start()]
    # Ensure we start at (1)
    start = body.find("(1)")
    if start >= 0:
        body = body[start:]
    # Normalize paragraph markers onto their own paragraphs
    body = re.sub(r"\s*\((\d+)\)\s*", r"\n\n(\1) ", body)
    body = join_wrapped_lines(body)
    # Restore paragraph numbers cleanly
    paras = []
    for m in re.finditer(r"\((\d+)\)\s*(.*?)(?=\(\d+\)\s*|\Z)", body, flags=re.S):
        n, p = m.group(1), re.sub(r"\s+", " ", m.group(2)).strip()
        paras.append(f"({n}) {p}")
    if paras:
        return "\n\n".join(paras)
    return re.sub(r"\s+", " ", body).strip()


def split_passages(text: str) -> list[tuple[str, str]]:
    """Return list of (title, chunk_starting_at_(1))."""
    starts = [m.start() for m in re.finditer(r"\(1\)\s", text)]
    results: list[tuple[str, str]] = []
    for i, s in enumerate(starts):
        end = starts[i + 1] if i + 1 < len(starts) else len(text)
        before = text[max(0, s - 500) : s]
        lines = [ln.strip() for ln in before.splitlines() if ln.strip()]
        title_lines: list[str] = []
        for ln in reversed(lines):
            if ln.startswith(
                (
                    "TASK",
                    "Difficulty",
                    "Answer",
                    "Tactical",
                    "TRUE",
                    "FALSE",
                    "Context",
                    "EXAM",
                    "Original:",
                    "English",
                )
            ):
                break
            if re.match(r"^\d+\.", ln):
                break
            if len(ln) > 100:
                break
            title_lines.append(ln)
            if len(" ".join(reversed(title_lines))) > 140:
                break
        title = fix_title_hyphens(" ".join(reversed(title_lines)))
        # Prefer canonical title if close
        if i < len(PASSAGE_TITLES):
            canon = PASSAGE_TITLES[i]
            # Use canonical when fuzzy-similar (ignore punctuation)
            def norm(x: str) -> str:
                return re.sub(r"[^a-z0-9]+", "", x.lower())

            if norm(title)[:40] == norm(canon)[:40] or norm(canon) in norm(title) or norm(title) in norm(canon):
                title = canon
            elif len(title) < 12:
                title = canon
            else:
                # Still prefer canonical list order
                title = canon
        results.append((title, text[s:end]))
    return results


TASK_RE = re.compile(
    r"TASK\s+(\d+)\s*:\s*\n"
    r"EXAM TASK\s*[—\-–-]?\s*(.*?)\n"
    r"Context:\s*(.*?)\n"
    r"(?=\d+\.\s)",
    re.S,
)


def parse_tasks(chunk: str, passage: str, subsection: str, passage_title: str) -> list[dict]:
    # Split by TASK N: headers
    pieces = re.split(r"(?m)(?=^TASK\s+\d+\s*:)", chunk)
    tasks: list[dict] = []
    for piece in pieces:
        piece = piece.strip()
        if not piece.startswith("TASK"):
            continue
        hm = re.match(
            r"TASK\s+(\d+)\s*:\s*\nEXAM TASK\s*[—\-–-]?\s*(.*?)\nContext:\s*(.*)$",
            piece,
            flags=re.S,
        )
        if not hm:
            raise ValueError(f"Bad task header: {piece[:120]!r}")
        num = int(hm.group(1))
        exam_title = re.sub(r"\s+", " ", hm.group(2)).strip()
        rest = hm.group(3)

        # Split rest into statements / answer key / explanations / difficulty
        ak = re.search(r"Answer Key:\s*\{([^}]+)\}", rest)
        if not ak:
            raise ValueError(f"Missing answer key in task {num} ({exam_title})")
        stmt_block = rest[: ak.start()]
        after = rest[ak.end() :]
        te = re.search(r"Tactical Explanations\s*\n(.*?)Difficulty Level:\s*([^\n]+)", after, flags=re.S)
        if not te:
            raise ValueError(f"Missing explanations in task {num} ({exam_title})")
        expl_block = te.group(1)
        # difficulty from PDF ignored; we assign progressively

        statements = parse_numbered_items(stmt_block)
        # Some contexts include an "Original:" line before statements — strip from context
        context = stmt_block
        # Context is only the prose before "1."
        cm = re.search(r"^(.*?)(?=\n\s*1\.\s)", rest, flags=re.S)
        context_text = join_wrapped_lines(cm.group(1)) if cm else ""
        context_text = re.sub(r"\s+", " ", context_text).strip()
        # Keep Original: line inside context if present (paraphrase tasks)
        if "Original:" in stmt_block and "Original:" not in context_text:
            om = re.search(r"Original:\s*(.*?)(?=\n\s*1\.\s)", stmt_block, flags=re.S)
            if om:
                original = re.sub(r"\s+", " ", om.group(1)).strip()
                context_text = (context_text + " Original: " + original).strip()

        if len(statements) != 5:
            # Try alternate: statements may include Original line as item — filter empties
            statements = [s for s in statements if not s.lower().startswith("original:")]
        if len(statements) != 5:
            raise ValueError(
                f"Task {num} ({exam_title}) has {len(statements)} statements: {statements!r}"
            )

        answers = parse_answer_key(ak.group(1))
        expls_raw = parse_explanations(expl_block)
        if len(expls_raw) != 5:
            raise ValueError(
                f"Task {num} ({exam_title}) has {len(expls_raw)} explanations"
            )

        kind = infer_kind(exam_title)
        explanations = [
            improve_explanation(
                expls_raw[i],
                statement=statements[i],
                is_true=answers[i],
                kind=kind,
                exam_title=exam_title,
                passage_title=passage_title,
            )
            for i in range(5)
        ]
        highlights = [extract_highlight(expls_raw[i], passage) for i in range(5)]

        tasks.append(
            {
                "id": f"en-t-{subsection[2:]}-{num:02d}",
                "case_id": f"ENG T.{subsection[2:]}.{num:02d}",
                "title": f"Task {num}",
                "exam_title": exam_title,
                "context": context_text
                or "Based on the passage, decide whether each statement is true or false.",
                "kind": kind,
                "statements": statements,
                "answer_key": answers,
                "tactical_explanations": explanations,
                "highlights": highlights,
                "difficulty_level": difficulty_for(num, kind),
                "sort_order": num,
                "subsection": subsection,
            }
        )
    return tasks


def main() -> None:
    raw = EXTRACT.read_text(encoding="utf-8")
    text = clean_extract(raw)
    passages_raw = split_passages(text)
    if len(passages_raw) != 16:
        raise SystemExit(f"Expected 16 passages, got {len(passages_raw)}")

    subsections = []
    tasks_out = []
    for i, (title, chunk) in enumerate(passages_raw, start=1):
        subsection = f"t.{i}"
        passage = extract_passage_before_tasks(chunk)
        # Sanity: at least 5 paragraphs for most; some may have fewer
        para_count = len(re.findall(r"\(\d+\)", passage))
        if para_count < 5:
            print(f"WARN {subsection} {title}: only {para_count} paragraphs")
        tasks = parse_tasks(chunk, passage, subsection, title)
        if len(tasks) != 10:
            raise SystemExit(f"{subsection} {title}: expected 10 tasks, got {len(tasks)}")
        subsections.append(
            {
                "id": subsection,
                "title": title,
                "passage": passage,
                "paragraph_count": para_count,
            }
        )
        tasks_out.extend(tasks)
        print(f"OK {subsection:4} {len(tasks):2} tasks · {para_count:2} paras · {title}")

    payload = {
        "source": "English_Exam_Tasks_Final_v6",
        "subsections": subsections,
        "tasks": tasks_out,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUT} ({len(tasks_out)} tasks, {len(subsections)} passages)")


if __name__ == "__main__":
    main()
