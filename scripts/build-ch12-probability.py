#!/usr/bin/env python3
"""
Build Chapter 12 (Elementary probability) practice tasks from the four
probability PDF extracts already in the workspace.

Outputs:
  - src/data/math-cases-ch12-probability.json
  - src/data/math-ch12-probability.ts
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXTRACT_DIR = ROOT / "textbook" / "output" / "ch12_extract"
OUT_JSON = ROOT / "src" / "data" / "math-cases-ch12-probability.json"
OUT_TS = ROOT / "src" / "data" / "math-ch12-probability.ts"

SUBSECTIONS = [
    {
        "id": "12.1",
        "title": "Combinatorial Probability",
        "source": "Combinatorial_Probability_Practice-merged-2.pdf",
    },
    {
        "id": "12.2",
        "title": "Inclusion–Exclusion",
        "source": "Incl-Excl_Prob_ALL.pdf",
    },
    {
        "id": "12.3",
        "title": "Conditional Probability",
        "source": "Conditional_Probability_Detailed-merged.pdf",
    },
    {
        "id": "12.4",
        "title": "Expected Value, Variance & SD",
        "source": "Expected_Value_Variance_SD-2-merged.pdf",
    },
]

LETTERS = "ABCDE"


def latexify(text: str) -> str:
    """Convert \\(...\\) / \\[...\\] / bare math-ish bits into KaTeX $ delimiters."""
    if not text:
        return text
    s = text
    s = s.replace("\u2013", "-").replace("\u2014", "-").replace("\u2019", "'")
    s = s.replace("\u201c", '"').replace("\u201d", '"')

    def repl_display(m: re.Match[str]) -> str:
        body = _latex_ops(m.group(1).strip())
        return f"$$\n{body}\n$$"

    def repl_inline(m: re.Match[str]) -> str:
        body = _latex_ops(m.group(1).strip())
        return f"${body}$"

    s = re.sub(r"\\\[(.*?)\\\]", repl_display, s, flags=re.S)
    s = re.sub(r"\\\((.*?)\\\)", repl_inline, s, flags=re.S)

    # Unicode ops already inside $...$ / $$...$$
    def repl_math_chunk(m: re.Match[str]) -> str:
        return m.group(1) + _latex_ops(m.group(2)) + m.group(3)

    s = re.sub(r"(\$\$)(.*?)(\$\$)", repl_math_chunk, s, flags=re.S)
    s = re.sub(r"(?<!\$)(\$)(?!\$)(.*?)(?<!\$)(\$)(?!\$)", repl_math_chunk, s, flags=re.S)

    # Normalize double newlines
    s = re.sub(r"\n{3,}", "\n\n", s)
    # Join adjacent inline math separated by a middot
    s = re.sub(r"\$([^$]+)\$\s*[·⋅]\s*\$([^$]+)\$", r"$\1\\cdot \2$", s)
    s = re.sub(r"\$\s*\\cdot\s*\$", r"\\cdot ", s)
    s = re.sub(r"(\$[^$]+)\$\s*\\cdot\s*\$", r"\1\\cdot ", s)
    return s.strip()


def _latex_ops(s: str) -> str:
    return (
        s.replace("∩", "\\cap ")
        .replace("∪", "\\cup ")
        .replace("≤", "\\le ")
        .replace("≥", "\\ge ")
        .replace("≠", "\\ne ")
        .replace("·", "\\cdot ")
        .replace("√", "\\sqrt")
    )


def clean_statement(raw: str) -> str:
    s = raw.strip()
    s = re.sub(r"^[A-E][.)]\s*", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    if s and not s.endswith("."):
        # Keep exact wording; only add period when the source already used sentence form
        pass
    return latexify(s)


def parse_tf_line(line: str) -> tuple[bool | None, str]:
    m = re.search(r"\b(TRUE|FALSE|True|False)\b", line)
    if not m:
        return None, line
    return m.group(1).lower() == "true", line


def difficulty_of(text: str, default: str = "3/5") -> str:
    m = re.search(r"Difficulty:\s*\**\s*([1-5]\s*/\s*5)", text, flags=re.I)
    if m:
        return re.sub(r"\s+", "", m.group(1))
    m = re.search(r"Difficulty:\s*\**\s*([1-5])\s*/\s*5", text, flags=re.I)
    if m:
        return f"{m.group(1)}/5"
    # Unicode vulgar fraction ⅘ etc. appear in a few conditional pages
    if "⅘" in text or "4⁄5" in text:
        return "4/5"
    if "⅗" in text:
        return "3/5"
    if "⅕" in text:
        return "5/5"
    return default


def title_from(head: str, fallback: str) -> str:
    h = re.sub(r"^###?\s*Question\s+\d+\s*[—\-:]?\s*", "", head).strip()
    h = re.sub(r"^Difficulty:.*$", "", h).strip()
    h = re.sub(r"\s+", " ", h)
    if not h or h.lower().startswith("difficulty"):
        return fallback
    # Drop trailing difficulty crumbs
    h = re.sub(r"\s*Difficulty:.*$", "", h, flags=re.I).strip(" —-")
    return h[:90] or fallback


def extract_statements_ae(block: str) -> list[str]:
    """Pull A–E statements from a question block."""
    # Prefer lettered lines
    lines = []
    # Normalize "A. text" and "A text" and "A       text"
    chunk = block
    # Cut at worked/answer sections
    chunk = re.split(
        r"(?=\n\s*(?:\*{0,2}Worked(?:\s+answer|\s+solution)?\*{0,2}\s*:|"
        r"\*{0,2}Answers?\*{0,2}\s*:|####\s*[A-E]\s*—))",
        chunk,
        maxsplit=1,
        flags=re.I,
    )[0]

    pattern = re.compile(
        r"(?:^|\n)\s*([A-E])(?:[.)]|\s{2,}|\s(?=[A-Z\\$]))\s*(.+?)(?=(?:\n\s*[A-E](?:[.)]|\s{2,}|\s(?=[A-Z\\$])))|\Z)",
        flags=re.S,
    )
    found = pattern.findall(chunk)
    by_letter: dict[str, str] = {}
    for letter, body in found:
        # The final E statement has no following letter to terminate the regex.
        # Several source extracts place shared calculations immediately after it,
        # separated by a blank line, so stop at that question/solution boundary.
        body = re.split(
            r"\n\s*\n|(?=\n\s*(?:Worked(?:\s+answer|\s+solution)?|Answers?:|"
            r"\*\*Worked|####\s*Step|\\\[))",
            body,
            maxsplit=1,
            flags=re.I,
        )[0]
        body = re.sub(r"\s+", " ", body).strip()
        # Ignore if this looks like an answer verdict line
        if re.fullmatch(r"(TRUE|FALSE|True|False)\.?", body):
            continue
        by_letter[letter] = body

    if len(by_letter) >= 5:
        return [clean_statement(by_letter[L]) for L in LETTERS]

    # Compact "Statements: A ...; B ...;" or bare "A ...; B ...; C ..." form
    m = re.search(r"Statements?:\s*(.+)", chunk, flags=re.S | re.I)
    blob = m.group(1) if m else None
    if blob is None:
        m2 = re.search(
            r"(?:^|\n)\s*A(?:[.)]|\s+)\s*.+?(?:\n|;)\s*B(?:[.)]|\s+).+?(?:\n|;)\s*C(?:[.)]|\s+)",
            chunk,
            flags=re.S,
        )
        if m2:
            blob = chunk[m2.start() :]
            # cut before worked math / Convert / Thus / Answers
            blob = re.split(
                r"\n(?:Convert|Thus|Since|Worked|Answers?:|\\\[)",
                blob,
                maxsplit=1,
            )[0]

    if blob:
        blob = blob.lstrip()
        blob = re.split(
            r"\n\s*\n|(?=\n\s*(?:Worked(?:\s+answer|\s+solution)?|Answers?:|\\\[))",
            blob,
            maxsplit=1,
            flags=re.I,
        )[0]
        parts = re.split(r"(?:^|[;\n])\s*([A-E])(?:[.)]|\s+)\s*", blob)
        tmp: dict[str, str] = {}
        i = 1
        while i + 1 < len(parts):
            tmp[parts[i]] = parts[i + 1].strip(" ;.")
            i += 2
        if len(tmp) >= 5:
            return [clean_statement(tmp[L]) for L in LETTERS]

    raise ValueError(f"Could not find A–E statements in block starting: {block[:160]!r}")


def extract_answers_ae(block: str) -> tuple[list[bool], list[str], str]:
    """
    Return answer_key, tactical_explanations, solution_overview.
    """
    overview = ""
    # Step / worked overview before lettered verdicts
    step = re.search(
        r"((?:####\s*Step[\s\S]*?)(?=####\s*[A-E]\s*—)|(?:Worked(?:\s+answer|\s+solution)?[:\s]*[\s\S]*?)(?=(?:^|\n)\s*[-*]?\s*[A-E]\s*(?:\*\*)?(?:TRUE|FALSE|True|False)|Answers?:))",
        block,
        flags=re.I,
    )
    if step:
        overview = latexify(step.group(1))
        overview = re.sub(r"^#+\s*", "", overview).strip()

    answers: dict[str, bool] = {}
    expls: dict[str, str] = {}

    # Pattern 1: #### A — TRUE\n body
    for m in re.finditer(
        r"####\s*([A-E])\s*—\s*(TRUE|FALSE)\s*\n([\s\S]*?)(?=\n####\s*[A-E]\s*—|\Z)",
        block,
        flags=re.I,
    ):
        letter = m.group(1).upper()
        answers[letter] = m.group(2).upper() == "TRUE"
        body = m.group(3).strip()
        body = re.sub(r"^\*\*Formula:\*\*\s*", "Formula: ", body, flags=re.M)
        expls[letter] = latexify(body)

    if len(answers) >= 5:
        tactical = []
        for L in LETTERS:
            verdict = "True" if answers[L] else "False"
            body = expls.get(L, "").strip()
            if body:
                tactical.append(f"**{L}.** → {verdict}\n\n{body}")
            else:
                tactical.append(f"**{L}.** → {verdict}")
        return [answers[L] for L in LETTERS], tactical, overview

    # Pattern 2: - A TRUE: ... / A TRUE ...
    for m in re.finditer(
        r"(?:^|\n)\s*[-*]?\s*\*?([A-E])\.?\*?\s+\*?\*?(TRUE|FALSE|True|False)\*?\*?\s*[:.]?\s*([\s\S]*?)(?=(?:\n\s*[-*]?\s*\*?[A-E]\.?\*?\s+\*?\*?(?:TRUE|FALSE|True|False))|\n\s*Answers?:|\Z)",
        block,
        flags=re.I,
    ):
        letter = m.group(1).upper()
        answers[letter] = m.group(2).lower() == "true"
        expls[letter] = latexify(m.group(3).strip())

    # Pattern 3b: any Answers line with lettered TRUE/FALSE tokens
    if len(answers) < 5:
        m = re.search(r"Answers?:\s*(.+)", block, flags=re.I | re.S)
        if m:
            ans_line = m.group(1).split("\n\n")[0]
            ans_plain = ans_line.replace("*", "")
            # "all TRUE" / "all FALSE" (optionally followed by letter notes)
            m_all = re.match(
                r"\s*all\s+(TRUE|FALSE|True|False)\b",
                ans_plain,
                flags=re.I,
            )
            if m_all:
                val = m_all.group(1).lower() == "true"
                for L in LETTERS:
                    answers[L] = val
            found = re.findall(
                r"\b([A-E])\s+(TRUE|FALSE|True|False)\b",
                ans_plain,
                flags=re.I,
            )
            for letter, verdict in found:
                answers[letter.upper()] = verdict.lower() == "true"
            # Range forms inside Answers line
            m_range = re.search(
                r"A\s*[–\-]\s*([A-E])\s+(?:all\s+)?(TRUE|FALSE|True|False)\b",
                ans_plain,
                flags=re.I,
            )
            if m_range and len([L for L in LETTERS if L in answers]) < 5:
                end = m_range.group(1).upper()
                val = m_range.group(2).lower() == "true"
                for L in LETTERS:
                    if L <= end:
                        answers[L] = val
                    else:
                        break

    # Pattern 3c: bare "All TRUE:" / "All FALSE:" without Answers: label
    if len(answers) < 5:
        m = re.search(
            r"(?:^|\n)\s*All\s+\*?\*?(TRUE|FALSE|True|False)\*?\*?\s*:",
            block,
            flags=re.I,
        )
        if m:
            val = m.group(1).lower() == "true"
            for L in LETTERS:
                answers[L] = val

    # Pattern 3: Answers: A True, B False, ... (commas or semicolons)
    if len(answers) < 5:
        plain = block.replace("*", "")
        m = re.search(
            r"Answers?:\s*"
            r"A\s+(True|False|TRUE|FALSE)\s*[,;]\s*"
            r"B\s+(True|False|TRUE|FALSE)\s*[,;]\s*"
            r"C\s+(True|False|TRUE|FALSE)\s*[,;]\s*"
            r"D\s+(True|False|TRUE|FALSE)\s*[,;]\s*"
            r"E\s+(True|False|TRUE|FALSE)\b",
            plain,
            flags=re.I,
        )
        if m:
            for i, L in enumerate(LETTERS):
                answers[L] = m.group(i + 1).lower() == "true"

    # Pattern 4: Answers: A–E all TRUE / A–D FALSE; E TRUE
    if len(answers) < 5:
        m = re.search(
            r"Answers?:\s*\*?\*?\s*A\s*[–\-]\s*E\s+all\s+\*?\*?(TRUE|FALSE|True|False)\*?\*?",
            block,
            flags=re.I,
        )
        if m:
            val = m.group(1).lower() == "true"
            for L in LETTERS:
                answers[L] = val

    if len(answers) < 5:
        m = re.search(
            r"Answers?:\s*\*?\*?\s*A\s*[–\-]\s*([A-E])\s+\*?\*?(TRUE|FALSE|True|False)\*?\*?\s*[,;]\s*"
            r"([A-E])\s+\*?\*?(TRUE|FALSE|True|False)\*?\*?",
            block,
            flags=re.I,
        )
        if m:
            end = m.group(1).upper()
            val = m.group(2).lower() == "true"
            for L in LETTERS:
                if L <= end:
                    answers[L] = val
                else:
                    break
            answers[m.group(3).upper()] = m.group(4).lower() == "true"
            # continue scanning remaining letter verdicts on the same Answers line
            rest = block[m.end() :]
            for mm in re.finditer(
                r"([A-E])\s+\*?\*?(TRUE|FALSE|True|False)\*?\*?", rest, flags=re.I
            ):
                answers[mm.group(1).upper()] = mm.group(2).lower() == "true"

    # Attach any inline letter explanations when present
    if answers:
        inline = re.findall(
            r"([A-E])\s+(TRUE|FALSE|True|False)\s*[,;:]?\s*([^;\n]*?)(?=(?:\s*[A-E]\s+(?:TRUE|FALSE|True|False))|$)",
            block,
            flags=re.I,
        )
        for letter, verdict, body in inline:
            letter = letter.upper()
            answers.setdefault(letter, verdict.lower() == "true")
            if body.strip() and letter not in expls:
                expls[letter] = latexify(body.strip(" ;,"))

    if len(answers) < 5:
        raise ValueError(f"Could not parse A–E answers in block: {block[:200]!r}")

    # If overview empty, use remaining math displays from block head
    if not overview:
        mats = re.findall(r"\\\[(.*?)\\\]", block, flags=re.S)
        if mats:
            overview = latexify("\n\n".join(f"\\[{m}\\]" for m in mats[:4]))

    tactical = []
    for L in LETTERS:
        verdict = "True" if answers[L] else "False"
        body = expls.get(L, "").strip()
        if body:
            tactical.append(f"**{L}.** → {verdict}\n\n{body}")
        else:
            # Fall back to overview snippet
            tactical.append(
                f"**{L}.** → {verdict}\n\nSee the shared solution for the supporting calculation."
            )
    return [answers[L] for L in LETTERS], tactical, overview


def context_from_question(block: str) -> str:
    # Drop heading + difficulty + evaluate line
    body = block
    body = re.sub(r"^###?\s*Question[^\n]*\n", "", body)
    body = re.sub(r"^\*\*?Difficulty:[^\n]*\n", "", body, flags=re.I | re.M)
    body = re.sub(r"^Difficulty:[^\n]*\n", "", body, flags=re.I | re.M)
    body = re.sub(
        r"Evaluate each statement\.?\s*Mark it TRUE or FALSE\.?\s*",
        "",
        body,
        flags=re.I,
    )
    # Cut at first statement letter
    m = re.search(r"(?:^|\n)\s*A[.)]\s+", body)
    if not m:
        m = re.search(r"(?:^|\n)\s*A\s{2,}", body)
    if not m:
        m = re.search(r"(?:^|\n)\s*Statements?:", body, flags=re.I)
    if m:
        body = body[: m.start()]
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return latexify(body)


# ---------------------------------------------------------------------------
# Combinatorial (rich extracted markdown)
# ---------------------------------------------------------------------------


def parse_combinatorial() -> list[dict]:
    path = EXTRACT_DIR / "Combinatorial_Probability_Practice_extracted.md"
    text = path.read_text()
    blocks = re.split(r"(?=^### Question )", text, flags=re.M)[1:]
    q_blocks: list[tuple[str, str]] = []
    a_blocks: list[tuple[str, str]] = []
    for b in blocks:
        head = b.split("\n", 1)[0]
        key = re.sub(r"^### Question\s+", "", head).strip()
        if re.search(r"^#### [A-E] — (TRUE|FALSE)", b, flags=re.M):
            a_blocks.append((key, b))
        elif "Difficulty:" in b[:500]:
            q_blocks.append((key, b))

    # Pair by title, but keep duplicates in encounter order
    from collections import defaultdict, deque

    a_map: dict[str, deque[str]] = defaultdict(deque)
    for key, b in a_blocks:
        a_map[key].append(b)

    tasks = []
    for i, (key, qb) in enumerate(q_blocks, start=1):
        if not a_map[key]:
            raise ValueError(f"Missing answer block for combinatorial question {key}")
        ab = a_map[key].popleft()
        statements = extract_statements_ae(qb)
        answer_key, tactical, overview = extract_answers_ae(ab)
        title = title_from(f"### Question {key}", f"Combinatorial Probability {i}")
        if any(t["title"] == title for t in tasks):
            title = f"{title} ({i})"
        tasks.append(
            {
                "title": title,
                "context": context_from_question(qb),
                "statements": statements,
                "answer_key": answer_key,
                "tactical_explanations": tactical,
                "difficulty_level": difficulty_of(qb, "4/5"),
                "solution_overview": overview
                or latexify(
                    "Use combinations $\\binom{n}{r}$, permutations $P(n,r)$, and classical probability $P(E)=\\frac{\\#\\text{favorable}}{\\#\\text{equally likely}}$."
                ),
                "subsection": "12.1",
            }
        )
    return tasks


def _parse_incl_pdf_question(qnum: int, norm: str) -> dict:
    """Parse one inclusion-exclusion question from normalized PDF text."""
    stem_m = re.search(
        rf"Question\s+{qnum}\s+Difficulty:\s*(.+?)(?=Question\s+{qnum + 1}\s+Difficulty:|Question\s+{qnum}\s*\(|Section\s+2|Answer Key|A harder continuation|Part\s+\d)",
        norm,
        flags=re.S | re.I,
    )
    if not stem_m:
        raise ValueError(f"Missing incl-excl stem for Q{qnum}")
    stem = "Difficulty: " + stem_m.group(1)

    ans_m = re.search(
        rf"Question\s+{qnum}\s*\((\d+)\s*True,\s*(\d+)\s*False\)(.+?)(?=Question\s+{qnum + 1}\s*\(|Common traps|A harder continuation)",
        norm,
        flags=re.S | re.I,
    )
    if not ans_m:
        # Fallback: looser end boundary
        ans_m = re.search(
            rf"Question\s+{qnum}\s*\((\d+)\s*True,\s*(\d+)\s*False\)(.+?)(?=Question\s+\d+\s*\()",
            norm,
            flags=re.S | re.I,
        )
    if not ans_m:
        raise ValueError(f"Missing incl-excl answers for Q{qnum}")

    ans_block = ans_m.group(0)
    ans_block = re.sub(r"===== PAGE \d+ =====\s*", " ", ans_block)
    # Put each lettered verdict on its own line for the shared answer parser
    ans_block = re.sub(r"\s+([A-E])\s+(TRUE|FALSE)\b", r"\n\1 \2", ans_block)
    # Synthesize a markdown-like block the existing parsers understand
    diff = difficulty_of("Difficulty: " + stem_m.group(1), "5/5")
    stem_body = stem_m.group(1)
    stem_body = re.sub(r"^([1-5]\s*/\s*5)[^\n]*?Evaluate each statement\.?\s*Mark it TRUE or FALSE\.?\s*", "", stem_body, count=1, flags=re.I)
    stem_body = re.sub(r"===== PAGE \d+ =====\s*", "", stem_body)
    stem_body = re.sub(r"\s+([A-E])\s+(?=P\()", r"\n\1. ", stem_body)
    stem_block = f"## Question {qnum}\n\n**Difficulty:** {diff}\n\n{stem_body.strip()}"

    statements = extract_statements_ae(stem_block)
    answer_key, tactical, overview = extract_answers_ae(ans_block)
    ctx = context_from_question(stem_block)
    title = (ctx.split(".")[0])[:80] or f"Inclusion–Exclusion {qnum}"
    return {
        "title": title,
        "context": ctx,
        "statements": statements,
        "answer_key": answer_key,
        "tactical_explanations": tactical,
        "difficulty_level": difficulty_of(stem, "5/5"),
        "solution_overview": overview
        or latexify(
            "For three events $P(A\\cup B\\cup C)=\\sum P-\\sum P(\\mathrm{pairwise})+P(A\\cap B\\cap C)$."
        ),
        "subsection": "12.2",
        "_qnum": qnum,
    }


def parse_incl_excl() -> list[dict]:
    text = (EXTRACT_DIR / "Incl_Excl_Prob_extracted.md").read_text()
    text = text.split("the requirements. I need to ensure")[0]
    blocks = split_questions(text, r"^## Question \d+")
    by_num: dict[int, dict] = {}
    for head, block in blocks:
        m = re.search(r"Question\s+(\d+)", head)
        if not m:
            continue
        qnum = int(m.group(1))
        try:
            statements = extract_statements_ae(block)
        except ValueError:
            statements = extract_statements_ae(
                block.replace("A ", "A. ").replace("\nB ", "\nB. ")
            )
        answer_key, tactical, overview = extract_answers_ae(block)
        title = title_from(head, f"Inclusion–Exclusion {qnum}")
        ctx = context_from_question(block)
        if (
            title.lower().startswith("question")
            or title.isdigit()
            or title.lower().startswith("inclusion")
            or len(title) < 8
        ):
            title = (ctx.split(".")[0])[:80] or f"Inclusion–Exclusion {qnum}"
        by_num[qnum] = {
            "title": title,
            "context": ctx,
            "statements": statements,
            "answer_key": answer_key,
            "tactical_explanations": tactical,
            "difficulty_level": difficulty_of(block, "3/5"),
            "solution_overview": overview
            or latexify(
                "For two events $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. For three events add the triple intersection after subtracting pairwise overlaps."
            ),
            "subsection": "12.2",
            "_qnum": qnum,
        }

    # Fill gaps 6–15 (and any other missing 1–29) from normalized PDF text
    norm = (EXTRACT_DIR / "incl_excl_norm.txt").read_text()
    for qnum in range(1, 30):
        if qnum in by_num:
            continue
        by_num[qnum] = _parse_incl_pdf_question(qnum, norm)

    return [by_num[k] for k in sorted(by_num)]


def split_questions(text: str, heading_re: str) -> list[tuple[str, str]]:
    out: list[tuple[str, str]] = []
    blocks = re.split(rf"(?={heading_re})", text, flags=re.M)
    for b in blocks:
        if not re.match(heading_re, b, flags=re.M):
            continue
        head = b.split("\n", 1)[0].strip()
        out.append((head, b))
    return out


def parse_conditional() -> list[dict]:
    text = (EXTRACT_DIR / "Conditional_Probability_extracted.md").read_text()
    blocks = split_questions(text, r"^### Question \d+")
    tasks = []
    for i, (head, block) in enumerate(blocks, start=1):
        statements = extract_statements_ae(block)
        answer_key, tactical, overview = extract_answers_ae(block)
        title = title_from(head, f"Conditional Probability {i}")
        ctx = context_from_question(block)
        if "Difficulty" in title or not title.strip() or title.lower().startswith("conditional"):
            title = (ctx.split(".")[0])[:80] or f"Conditional Probability {i}"
        tasks.append(
            {
                "title": title,
                "context": ctx,
                "statements": statements,
                "answer_key": answer_key,
                "tactical_explanations": tactical,
                "difficulty_level": difficulty_of(block, "3/5"),
                "solution_overview": overview
                or latexify(
                    "Organize counts into a table. Then $P(A\\mid B)=\\dfrac{|A\\cap B|}{|B|}$ and $P(B\\mid A)=\\dfrac{|A\\cap B|}{|A|}$."
                ),
                "subsection": "12.3",
            }
        )
    return tasks


def parse_ev() -> list[dict]:
    text = (EXTRACT_DIR / "Expected_Value_Variance_SD_extracted.md").read_text()
    # Keep section labels for unique titles
    blocks = split_questions(text, r"^## Question \d+")
    # Track part labels by scanning preceding headers
    part = "Set 1"
    # Rebuild with part context by walking lines
    tasks = []
    # Better: split by part headers then questions
    sections = re.split(r"(?=^# (?:Set|Part|Harder)[^\n]*)", text, flags=re.M)
    idx = 0
    for sec in sections:
        mpart = re.match(r"^#\s+(.+)$", sec.strip(), flags=re.M)
        part_name = mpart.group(1).strip() if mpart else "Expected Value"
        qblocks = split_questions(sec, r"^## Question \d+")
        for head, block in qblocks:
            idx += 1
            statements = extract_statements_ae(block)
            answer_key, tactical, overview = extract_answers_ae(block)
            base = title_from(head, f"Expected Value {idx}")
            title = f"{base}" if base else f"Expected Value {idx}"
            # Disambiguate repeated titles across parts
            if any(t["title"] == title for t in tasks):
                title = f"{title} ({part_name.split('—')[0].strip()})"
            tasks.append(
                {
                    "title": title[:100],
                    "context": context_from_question(block),
                    "statements": statements,
                    "answer_key": answer_key,
                    "tactical_explanations": tactical,
                    "difficulty_level": difficulty_of(block, "3/5"),
                    "solution_overview": overview
                    or latexify(
                        "Compute $E(X)=\\sum xP(X=x)$ and $E(X^2)=\\sum x^2P(X=x)$, then $\\mathrm{Var}(X)=E(X^2)-[E(X)]^2$ and $\\sigma=\\sqrt{\\mathrm{Var}(X)}$."
                    ),
                    "subsection": "12.4",
                }
            )
    return tasks


def _strip_latex_text(s: str) -> str:
    s = re.sub(r"\\text\{([^}]+)\}", r"\1", s)
    s = re.sub(r"\\mathrm\{([^}]+)\}", r"\1", s)
    s = re.sub(r"\\operatorname\{([^}]+)\}", r"\1", s)
    s = s.replace("\\mid", " given ").replace("\\cap", " and ").replace("\\cup", " or ")
    s = re.sub(r"\\[a-zA-Z]+\s*", "", s)
    s = re.sub(r"[{}$\\]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def humanize_statement(raw: str) -> str:
    """Render student-facing statements as plain English (no $...$ wrappers)."""
    s = raw.strip()
    if not s:
        return s

    def prob_phrase(inner: str) -> str:
        inner = _strip_latex_text(inner)
        if " given " in inner:
            event, cond = inner.split(" given ", 1)
            return f"The probability of {event} given {cond}"
        return f"The probability that {inner[0].lower()}{inner[1:]}" if inner else "The probability"

    def repl_cond(m: re.Match[str]) -> str:
        return (
            f"the probability of {_strip_latex_text(m.group(1))} "
            f"given {_strip_latex_text(m.group(2))}"
        )

    # Conditional P(\text{A}\mid\text{B}) anywhere in the string
    s = re.sub(
        r"\$?P\(\\text\{([^}]+)\}\\mid\\text\{([^}]+)\}\)\$?",
        repl_cond,
        s,
    )
    m = re.match(r"^\$P\\(?:text\{([^}]+)\}|([^)]+))\)\$(.*)$", s)
    if m:
        inner = m.group(1) or m.group(2)
        rest = m.group(3).strip()
        phrase = prob_phrase(inner)
        if rest.startswith(" is "):
            return f"{phrase}{rest}"
        if rest:
            return f"{phrase} {rest.lstrip(' ,')}"
        return phrase

    m = re.match(r"^\$P\(([^)]+)\)\$(.*)$", s)
    if m:
        rest = m.group(2).strip()
        phrase = prob_phrase(m.group(1))
        return f"{phrase}{rest}" if rest.startswith(" is ") else f"{phrase} {rest}".strip()

    # Expected value / variance / SD shorthand
    m = re.match(r"^\$E\(X\)\$(.*)$", s)
    if m:
        rest = m.group(1).strip()
        return f"The expected value{rest}" if rest.startswith(" is ") else f"The expected value {rest}".strip()

    m = re.match(r"^\$E\(X\^2\)\$(.*)$", s)
    if m:
        rest = m.group(1).strip()
        return (
            f"The expected value of X squared{rest}"
            if rest.startswith(" is ")
            else f"The expected value of X squared {rest}".strip()
        )

    m = re.match(r"^\$\\operatorname\{Var\}\(X\)\$(.*)$", s)
    if m:
        rest = m.group(1).strip()
        return f"The variance{rest}" if rest.startswith(" is ") else f"The variance {rest}".strip()

    m = re.match(r"^\$\\sigma\$(.*)$", s)
    if m:
        rest = m.group(1).strip()
        return (
            f"The standard deviation{rest}"
            if rest.startswith(" is ")
            else f"The standard deviation {rest}".strip()
        )

    # Mid-sentence P(...), including conditional forms
    s = re.sub(
        r"P\(\\text\{([^}]+)\}\\mid\\text\{([^}]+)\}\)",
        repl_cond,
        s,
    )
    s = re.sub(
        r"P\\text\{([^}]+)\}\\mid\\text\{([^}]+)\}",
        repl_cond,
        s,
    )
    s = re.sub(
        r"P\\text\{([^}]+)\}",
        lambda m: prob_phrase(m.group(1)).replace("The probability", "the probability", 1),
        s,
    )
    s = re.sub(
        r"P\(([^)]+)\)",
        lambda m: prob_phrase(m.group(1)).replace("The probability", "the probability", 1),
        s,
    )
    s = re.sub(r"=1\s*[-−]\s*", " equals 1 minus ", s)

    # Remove stray inline $ around simple numbers or words
    s = re.sub(r"\$(\d+(?:\.\d+)?)\$", r"\1", s)
    s = s.replace("$", "")
    s = re.sub(r"\s+", " ", s).strip()
    if s and s[0].islower():
        s = s[0].upper() + s[1:]
    if s and not s.endswith((".", "?", "!")):
        s += "."
    return s


def humanize_context(raw: str) -> str:
    """Keep math tables in context but prefer readable prose where possible."""
    s = raw.strip()
    if not s:
        return s
    # EV prompts: replace terse 'Evaluate each statement.' with fuller wording
    s = re.sub(
        r"Evaluate each statement\.?\s*$",
        "For each statement below, decide whether it is true or false.",
        s,
        flags=re.I,
    )
    return latexify(s)


def clean_explanation_prose(text: str) -> str:
    s = text.strip()
    s = re.sub(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\s*\n+", "", s, flags=re.I)
    s = re.sub(r"Statement [A-E] is therefore \*\*(true|false)\*\*\.?", "", s, flags=re.I)
    s = re.sub(r"\*\*\s+\$", "$", s)
    s = re.sub(r"\*\*([^*]+)\*\*", r"\1", s)
    s = re.sub(r"\s+-\s+", " — ", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def _extract_formula_line(body: str) -> tuple[str, str | None]:
    m = re.search(r"(?mi)^Formula:\s*(.+)$", body)
    if not m:
        return body, None
    formula = m.group(1).strip().strip("$")
    prose = (body[: m.start()] + body[m.end() :]).strip()
    return prose, formula


def _is_direct_lookup(statement: str, body: str, overview: str) -> bool:
    st = statement.lower()
    if "at least one" in st or "exactly one" in st or "exactly two" in st:
        return False
    if "none" in st or "neither" in st:
        return False
    if "both " in st or "all three" in st:
        return True
    return False


def _needs_union_setup(statement: str, body: str) -> bool:
    st = statement.lower()
    if "none" in st or "neither" in st:
        return True
    return bool(re.search(r"100\s*%\s*[-−]", body) or re.search(r"1\s*[-−]\s*P\(", body))


def expand_short_explanation(
    letter: str,
    verdict: str,
    body: str,
    statement: str,
    overview: str,
    subsection: str,
) -> str:
    body = clean_explanation_prose(body)
    if not body or body.startswith("See the shared solution"):
        return body

    if len(body) >= 80 and "Formula:" in body:
        return body

    st = statement.lower()
    body_clean = body.replace("$", "").strip().rstrip(".")

    if subsection == "12.2":
        if "at least one" in st and overview:
            return (
                "Apply the three-event inclusion-exclusion formula for the union.\n\n"
                f"{overview}\n\n"
                f"Compare the union to the threshold:\n\n$$\n{body_clean}\n$$\n\n"
                f"Statement {letter} is therefore {verdict.lower()}."
            )
        if ("none" in st or "neither" in st) and overview:
            return (
                "First compute the union probability.\n\n"
                f"{overview}\n\n"
                "Members who use none of the amenities are the complement of the union:\n\n"
                f"$$\n{body_clean}\n$$\n\n"
                f"Statement {letter} is therefore {verdict.lower()}."
            )
        if _is_direct_lookup(statement, body, overview):
            return (
                "This is a direct lookup from the given data — no inclusion-exclusion calculation is required.\n\n"
                f"Given value: {body_clean}.\n\n"
                f"Compare this to the threshold in the statement → {verdict}.\n\n"
                f"Takeaway: When the problem already states an overlap probability, read it directly — do not re-run the union formula."
            )
        if overview and re.fullmatch(r"[\d.%<>=≤≥\\s]+", body_clean):
            return (
                f"{overview}\n\n"
                f"For this statement:\n\n$$\n{body_clean}\n$$\n\n"
                f"Statement {letter} is therefore {verdict.lower()}."
            )

    if subsection == "12.3":
        if re.search(r"\\frac|\\not|[<>%]|=", body_clean):
            return (
                "Organize the counts from the problem, then apply the conditional probability definition.\n\n"
                f"$$\n{body_clean}\n$$\n\n"
                f"Statement {letter} is therefore {verdict.lower()}."
            )
        if re.search(r"[a-zA-Z]{5,}", body_clean):
            return (
                "Organize the counts from the problem, then apply the conditional probability definition.\n\n"
                f"{body_clean}\n\n"
                f"Statement {letter} is therefore {verdict.lower()}."
            )
        return (
            "Organize the counts, then form the conditional or joint probability.\n\n"
            f"$$\n{body_clean}\n$$\n\n"
            f"Statement {letter} is therefore {verdict.lower()}."
        )

    if subsection == "12.4" and len(body) < 100:
        return (
            "Apply the definition and substitute the probabilities from the table.\n\n"
            f"$$\n{body_clean}\n$$\n\n"
            f"Statement {letter} is therefore {verdict.lower()}."
        )

    return body


def restructure_explanation(
    letter: str,
    verdict: str,
    body: str,
    statement: str,
) -> str:
    body = clean_explanation_prose(body)
    prose, formula = _extract_formula_line(body)

    lines = [f"**Statement {letter} — {verdict}**", ""]

    if prose:
        for para in re.split(r"\n\s*\n", prose):
            para = para.strip()
            if not para:
                continue
            # One idea per line: split on sentence boundaries for dense blocks
            sentences = re.split(r"(?<=[.!?])\s+(?=[A-Z(])", para)
            for sent in sentences:
                sent = sent.strip()
                if sent:
                    lines.append(sent)
            lines.append("")

    if formula:
        f = formula.strip().strip("$").replace("$", "")
        lines.append(f"$$\n{f}\n$$")
        lines.append("")

    close_pat = re.compile(
        r"(close call|exactly at the boundary|not greater than|not above|not below|"
        r"exactly \d|same trap|tempting but incorrect)",
        re.I,
    )
    if close_pat.search(prose + " " + (formula or "")):
        for sent in re.split(r"(?<=[.!?])\s+", prose):
            if close_pat.search(sent):
                lines.append(f"**Close call:** {sent.strip()}")
                lines.append("")
                break

    takeaway = ""
    if prose:
        takeaway_line = re.search(r"(?m)^Takeaway:\s*(.+)$", prose)
        if takeaway_line:
            takeaway = takeaway_line.group(1).strip()
            prose = re.sub(r"(?m)^Takeaway:.*$", "", prose).strip()
        sentences = [
            s.strip()
            for s in re.split(r"(?<=[.!?])\s+(?=[A-Z(])", prose.strip())
            if s.strip()
            and not re.match(r"Statement [A-E] is therefore", s, flags=re.I)
            and not s.startswith("Organize the counts")
            and not s.startswith("Apply the")
            and not s.startswith("This is a direct lookup")
            and not s.startswith("First compute")
            and not s.startswith("Members who use")
            and not s.startswith("Takeaway:")
        ]
        if sentences:
            takeaway = sentences[-1]
    if not takeaway:
        takeaway = f"The statement is {verdict.lower()} based on the calculation above."
    lines.append(f"**Takeaway:** {takeaway}")

    return "\n".join(lines).strip()


def is_substantive_explanation(body: str) -> bool:
    if not body or body.startswith("See the shared solution"):
        return False
    if len(body) >= 40:
        return True
    if re.search(r"\d+%", body):
        return True
    if re.search(r"[<>=≤≥]", body):
        return True
    if "Formula:" in body:
        return True
    if re.search(r"\\binom|\\frac|/\\d", body):
        return True
    return False


def trim_solution_overview(overview: str, tactical: list[str], subsection: str) -> str:
    """Keep shared setup concise — per-statement sections carry the full derivations."""
    if not overview:
        return ""
    ov = overview.strip()
    if subsection == "12.1":
        # Combinatorial answer blocks already include Step 1; drop duplicate mega-paragraph.
        if len(ov) > 280 and all("Formula:" in t or "Statement" in t for t in tactical):
            first = re.split(r"\.\s+", ov.replace("\n", " "), maxsplit=1)[0]
            return first.strip() + "." if first else ""
    if subsection in ("12.2", "12.3", "12.4"):
        # Single-formula overviews are useful once; don't repeat in every letter.
        if ov.count("$$") >= 2 or len(ov) > 400:
            m = re.search(r"\$\$(.*?)\$\$", ov, flags=re.S)
            if m:
                return "$$\n" + m.group(1).strip() + "\n$$"
    return ov


def clean_overview(text: str) -> str:
    s = text.strip()
    s = re.sub(
        r"^(?:####\s*)?Step\s*\d+\s*[—\-]\s*",
        "",
        s,
        count=1,
        flags=re.I,
    )
    s = re.sub(
        r"^Worked(?:\s+answer|\s+solution)?(?:\s*[—\-:]\s*[^\n]*)?\**\s*",
        "",
        s,
        count=1,
        flags=re.I,
    )
    s = re.sub(r"^\d+\s*True,\s*\d+\s*False\)?\**\s*", "", s, count=1, flags=re.I)
    s = s.strip()
    # Repair display-math blocks that lost their opening $$
    if s.count("$$") % 2 == 1 and re.match(
        r"^(?:E\(|P\(|\\[a-zA-Z]|\\operatorname|N=|Var|\\sigma|\\mu)",
        s,
    ):
        s = "$$\n" + s
    return s.strip()


def clean_task_title(title: str, fallback: str) -> str:
    """Keep generated titles short and free of source metadata/math blocks."""
    lines = [line.strip() for line in title.splitlines() if line.strip()]
    lines = [
        line
        for line in lines
        if not re.match(
            r"^\*\*(?:Subtopic|Printed subtopic|Actual content):",
            line,
            flags=re.I,
        )
        and not line.startswith("$$")
    ]
    candidate = lines[0] if lines else fallback
    candidate = re.sub(r"\*\*([^*]+)\*\*", r"\1", candidate)
    candidate = re.sub(r"\s+", " ", candidate).strip(" —-:")
    if len(candidate) >= 80:
        candidate = candidate[:80].rsplit(" ", 1)[0].rstrip(" ,;:-")
    return candidate or fallback


def enrich_tactical(
    tactical: list[str],
    overview: str,
    answer_key: list[bool],
    statements: list[str],
    subsection: str,
) -> list[str]:
    """Expand thin explanations without overwriting valid short derivations."""
    out = []
    for i, expl in enumerate(tactical):
        letter = LETTERS[i]
        verdict = "True" if answer_key[i] else "False"
        body = expl.split("\n\n", 1)[1].strip() if "\n\n" in expl else expl.strip()
        body = clean_explanation_prose(body)

        if not is_substantive_explanation(body):
            extra = overview.strip()
            if extra and not _is_direct_lookup(statements[i], body, overview):
                body = (
                    f"{extra}\n\nStatement {letter} is therefore {verdict.lower()}."
                    if not body
                    else expand_short_explanation(
                        letter, verdict, body, statements[i], overview, subsection
                    )
                )
            elif body:
                body = expand_short_explanation(
                    letter, verdict, body, statements[i], overview, subsection
                )
        else:
            body = expand_short_explanation(
                letter, verdict, body, statements[i], overview, subsection
            )

        if not body:
            body = f"See the setup above to verify Statement {letter}."

        out.append(
            restructure_explanation(letter, verdict, body, statements[i])
        )
    return out


def finalize(tasks: list[dict], start_index: int = 1) -> list[dict]:
    out = []
    for i, t in enumerate(tasks, start=start_index):
        assert len(t["statements"]) == 5, (i, t["title"], len(t["statements"]))
        assert len(t["answer_key"]) == 5, (i, t["title"])
        assert len(t["tactical_explanations"]) == 5, (i, t["title"])
        assert all("$$" not in s and "\n" not in s for s in t["statements"]), (
            i,
            t["title"],
            "statement contains worked-solution content",
        )
        overview = clean_overview(t["solution_overview"] or "")
        raw_stmts = [humanize_statement(s) for s in t["statements"]]
        tactical = enrich_tactical(
            t["tactical_explanations"],
            overview,
            t["answer_key"],
            raw_stmts,
            t["subsection"],
        )
        overview = trim_solution_overview(overview, tactical, t["subsection"])
        stmts = []
        for s in raw_stmts:
            s2 = s.replace("$", "")
            s2 = re.sub(r"\s+", " ", s2).strip()
            stmts.append(s2)
        out.append(
            {
                "id": f"math-12-{i}",
                "case_id": f"MATH 12.{i:02d}",
                "title": clean_task_title(t["title"], f"Probability {i}"),
                "context": humanize_context(t["context"]),
                "statements": stmts,
                "answer_key": t["answer_key"],
                "tactical_explanations": tactical,
                "difficulty_level": t["difficulty_level"],
                "sort_order": i,
                "subsection": t["subsection"],
                "solution_overview": overview,
            }
        )
    return out


def write_ts() -> None:
    OUT_TS.write_text(
        '''/**
 * Chapter 12 — Elementary probability (subsections 12.1–12.4).
 * Sourced from the four probability practice PDFs:
 * combinatorial, inclusion–exclusion, conditional, and E(X)/Var/SD.
 */

import type { MathTask } from "@/data/math-chapters";
import ch12 from "@/data/math-cases-ch12-probability.json";

export const MATH_CH12_SUBSECTIONS = [
  { id: "12.1", title: "Combinatorial Probability" },
  { id: "12.2", title: "Inclusion–Exclusion" },
  { id: "12.3", title: "Conditional Probability" },
  { id: "12.4", title: "Expected Value, Variance & SD" },
] as const;

export const MATH_CH12_PROBABILITY: MathTask[] = (ch12.tasks as MathTask[]).map((t) => ({
  ...t,
  placeholder: false,
}));
'''
    )


def main() -> None:
    comb = parse_combinatorial()
    incl = parse_incl_excl()
    cond = parse_conditional()
    ev = parse_ev()
    print(
        "parsed counts:",
        {"combinatorial": len(comb), "incl_excl": len(incl), "conditional": len(cond), "ev": len(ev)},
    )

    all_tasks = finalize(comb + incl + cond + ev)
    payload = {
        "chapter": 12,
        "title": "Elementary probability",
        "bbe_format": "true_false_statements",
        "subsections": SUBSECTIONS,
        "tasks": all_tasks,
        "explanation_style": "solution_overview_plus_per_statement",
    }
    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    write_ts()
    print(f"wrote {OUT_JSON} ({len(all_tasks)} tasks)")
    print(f"wrote {OUT_TS}")


if __name__ == "__main__":
    main()
