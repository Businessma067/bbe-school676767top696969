"""Rewrite Chapter 12 subtopics 12.1-12.4 in the 12.5 (Bayes' theorem) house style.

Reads src/data/math-cases-ch12-probability.json, sends each task to the Lovable AI
gateway with two Bayes gold examples, validates against the style contract and
writes patches to textbook/output/ch12_bayesstyle/<id>.json.
"""
import json, os, re, sys, time, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, "src/data/math-cases-ch12-probability.json")
OUT = os.path.join(ROOT, "textbook/output/ch12_bayesstyle")
os.makedirs(OUT, exist_ok=True)
KEY = os.environ["LOVABLE_API_KEY"]
MODEL = "google/gemini-2.5-flash"
LETTERS = "ABCDE"

data = json.load(open(SRC))
tasks = data["tasks"]

GOLD_IDS = ("MATH 12.153", "MATH 12.160")
golds = [t for t in tasks if t["case_id"] in GOLD_IDS] or [t for t in tasks if t["subsection"] == "12.5"][:2]
GOLD = "\n\n".join(json.dumps({
    "context": g["context"],
    "statements": g["statements"],
    "answer_key": g["answer_key"],
    "solution_overview": g["solution_overview"],
    "tactical_explanations": g["tactical_explanations"],
}, ensure_ascii=False, indent=1) for g in golds)

SYSTEM = r"""You are a calm mathematics tutor rewriting worked solutions for a university entrance-exam prep book.

You will be given ONE probability task (context, five statements, the TRUE/FALSE answer key, and the old explanations). Rewrite the solution overview and all five explanations so they match the house style of the GOLD EXAMPLES (the Bayes' theorem subtopic) exactly.

STYLE CONTRACT (follow literally):
1. Each explanation starts with the header line `**A.** → True` or `**A.** → False` (letter matches position, verdict matches the answer key), then a blank line, then the body.
2. The solution overview sets the broad situation in flowing prose: what the experiment is, which probability model or counting structure applies, what each symbol stands for, and then the shared calculations that several statements reuse, each shown as its own display formula with a sentence of explanation before it. It ends by stating what the shared results mean in words.
3. Every explanation walks the reader through the whole reasoning for that claim: name in words what the claim is asking for, say which rule answers it and why that rule applies here, write the general formula as a display, substitute the concrete numbers in a further display, simplify to the final value in a further display, translate that value into plain words (a percentage or a count), then compare it with the claim and finish with `so the statement is True.` or `so the statement is False.`
4. Everything is solid, readable prose. NEVER use bullet points, dashes at the start of a line, numbered lists, markdown headings, tables, `\begin{itemize}`, `\item`, or any other list markup. Nothing but paragraphs and display formulas.
5. Formulas must look the way they would be written on paper. ALL mathematics goes inside `$...$` (inline) or `$$...$$` (display); every general formula, substitution and simplification step gets its own `$$...$$` display on its own line. ALL English goes outside math. Never put bare English words inside math: write `$P(\text{all men})$`, never `P(all men)`. Whole sentences inside math are forbidden.
6. Use proper KaTeX: `\binom{12}{4}`, `\frac{a}{b}` (never a slash), `\times` or `\cdot` (never the raw character), `\sum`, `\cup`, `\cap`, `\mid`, `\%` for percent inside math, `\approx`, `\ge`, `\le`, `\mu`, `\sigma`, `\mathrm{Var}`, `\mathrm{SD}`. Never use raw Unicode math symbols.
7. Money amounts written in English text must be escaped as `\$40`, or better, written inside math as `$40$ dollars`. A bare `$40` in ordinary prose is forbidden because it breaks the maths renderer. Every `$` in the text must either open or close a formula, or be escaped.
8. An explanation may reuse a value computed in the overview, but it must still restate that value in a sentence and show the arithmetic display that produces the answer to this particular claim. Never answer a claim with only a bare sentence and no formula.
9. Forbidden: em dashes, `**Trap:**` style labels, "It is important to note", "In conclusion", references such as "as shown in Step 1", arrows other than the header arrow, and the string `${`.
10. Vary sentence structure naturally across A to E. Do not repeat the same opening sentence pattern five times.
11. Recompute every number from the context. Keep the verdicts exactly as the answer key says, even if the old explanation disagreed.

Return ONLY a JSON object:
{"solution_overview": "...", "tactical_explanations": ["...","...","...","...","..."]}
Use real LaTeX with single backslashes inside the JSON strings (JSON-escaped as \\).
"""

BAD_UNICODE = "×Σ∪∩≥≤−μσπ√≠∞"


def normalize(obj, task):
    ex = obj.get("tactical_explanations")
    if not isinstance(ex, list):
        return obj
    fixed = []
    for i, e in enumerate(ex):
        if not isinstance(e, str):
            fixed.append(e)
            continue
        e = e.strip()
        L = LETTERS[i] if i < 5 else "?"
        want = "True" if task["answer_key"][i] else "False"
        head, sep, rest = e.partition("\n")
        if sep and re.match(r"^\**\s*(?:Statement\s+)?[A-E][.)]", head.strip()):
            e = f"**{L}.** \u2192 {want}\n\n" + rest.lstrip("\n")
        else:
            e = f"**{L}.** \u2192 {want}\n\n" + e
        fixed.append(e)
    obj["tactical_explanations"] = fixed
    return obj


def dollar_balance_error(text):
    """True when the unescaped $ delimiters do not pair up (a bare $40 in prose)."""
    t = re.sub(r"\\\$", "", text)
    t = re.sub(r"\$\$[\s\S]*?\$\$", "", t)
    return t.count("$") % 2 == 1


LIST_RE = re.compile(r"(?m)^\s*(?:[*+]\s+|-\s+|\d+[.)]\s+|#{1,6}\s+)")


def field_errors(label, text):
    errs = []
    if LIST_RE.search(text):
        errs.append(f"{label}: contains list or heading markup; write solid prose paragraphs only")
    for bad in ("\\begin{itemize}", "\\item", "\\begin{enumerate}", "\\begin{tabular}"):
        if bad in text:
            errs.append(f"{label}: contains forbidden LaTeX environment {bad}")
    for phrase in ("previous statement", "next statement", "as shown above", "as calculated above", "in Step 1"):
        if phrase.lower() in text.lower():
            errs.append(f"{label}: do not cross-reference other statements ('{phrase}'); restate the value or refer to the overview")
            break
    if "${" in text or "—" in text:
        errs.append(f"{label}: contains a forbidden '${{' or em dash")
    if dollar_balance_error(text):
        errs.append(f"{label}: unbalanced $ delimiters; escape money amounts as \\$40")
    for ch in BAD_UNICODE:
        if ch in text:
            errs.append(f"{label}: raw unicode math symbol '{ch}', use the LaTeX command")
            break
    for m in re.finditer(r"\$\$([\s\S]*?)\$\$", text):
        body = m.group(1)
        stripped = re.sub(r"\\(?:text|mathrm|operatorname)\{[^}]*\}", "", body)
        stripped = re.sub(r"\\[a-zA-Z]+", "", stripped)
        if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", stripped):
            errs.append(f"{label}: English words inside math: {body.strip()[:60]}")
            break
    return errs


def check(obj, task):
    errs = []
    ex = obj.get("tactical_explanations")
    if not isinstance(ex, list) or len(ex) != 5:
        return ["tactical_explanations must be a list of exactly 5 strings"]
    ov = obj.get("solution_overview")
    if not isinstance(ov, str) or len(ov) < 400:
        errs.append("solution_overview missing or shorter than 400 characters; set up the whole situation in prose")
    else:
        errs += field_errors("overview", ov)
        if "$$" not in ov:
            errs.append("overview: must show the shared calculations as $$...$$ displays")
    for i, e in enumerate(ex):
        L = LETTERS[i]
        want = "True" if task["answer_key"][i] else "False"
        if not e.startswith(f"**{L}.** \u2192 {want}\n\n"):
            errs.append(f"{L}: header must be exactly '**{L}.** \u2192 {want}' followed by a blank line")
        if not re.search(r"statement is (True|False)\.\s*$", e.strip()):
            errs.append(f"{L}: must end with a sentence ending 'so the statement is {want}.'")
        elif re.search(r"statement is (True|False)\.\s*$", e.strip()).group(1) != want:
            errs.append(f"{L}: closing verdict must be {want}")
        body = e.split("\n\n", 1)[1] if "\n\n" in e else e
        errs += field_errors(L, body)
        if body.count("$$") < 4:
            errs.append(f"{L}: needs at least two $$ display formulas showing the rule and the substitution")
        if len(body) < 320:
            errs.append(f"{L}: too short; walk through the reasoning, the substitution and the comparison in words")
    return errs


def call(messages):
    req = urllib.request.Request(
        "https://ai.gateway.lovable.dev/v1/chat/completions",
        data=json.dumps({"model": MODEL, "messages": messages}).encode(),
        headers={"Content-Type": "application/json", "Lovable-API-Key": KEY, "X-Lovable-AIG-SDK": "fetch"},
    )
    for attempt in range(6):
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                return json.loads(r.read())["choices"][0]["message"]["content"]
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503, 504):
                time.sleep(min(60, 5 * 2 ** attempt))
                continue
            raise RuntimeError(f"{e.code}: {e.read()[:300]}")
        except Exception:
            time.sleep(5 * (attempt + 1))
    raise RuntimeError("gateway retries exhausted")


def parse(text):
    t = text.strip()
    if t.startswith("```"):
        t = re.sub(r"^```[a-z]*\n", "", t)
        t = re.sub(r"\n```$", "", t.strip())
    start = t.find("{")
    if start < 0:
        raise ValueError("response contains no JSON object")
    obj = json.JSONDecoder(strict=False).raw_decode(t[start:])[0]
    return repair(obj)


CTRL = {"\t": "t", "\x0c": "f", "\x08": "b", "\r": "r", "\x0b": "v", "\x07": "a"}


def repair(obj):
    """Undo JSON control-escape mangling of LaTeX commands such as \text and \frac."""
    if isinstance(obj, str):
        out = obj
        for ch, letter in CTRL.items():
            out = re.sub(re.escape(ch) + r"(?=[a-zA-Z])", "\\\\" + letter, out)
        return out
    if isinstance(obj, list):
        return [repair(x) for x in obj]
    if isinstance(obj, dict):
        return {k: repair(v) for k, v in obj.items()}
    return obj


def work(task):
    path = os.path.join(OUT, task["id"] + ".json")
    if os.path.exists(path):
        return task["id"], "cached"
    payload = {k: task[k] for k in ("case_id", "title", "context", "statements", "answer_key", "subsection")}
    if task.get("tables_markdown"):
        payload["tables_markdown"] = task["tables_markdown"]
    payload["old_solution_overview"] = task.get("solution_overview", "")
    payload["old_tactical_explanations"] = task["tactical_explanations"]
    msgs = [
        {"role": "system", "content": SYSTEM},
        {"role": "user", "content": "GOLD EXAMPLES (Bayes' theorem subtopic) — copy this voice and formatting:\n\n" + GOLD},
        {"role": "user", "content": "TASK TO REWRITE:\n\n" + json.dumps(payload, ensure_ascii=False, indent=1)},
    ]
    last = None
    for attempt in range(4):
        try:
            out = parse(call(msgs))
        except Exception as e:
            last = [str(e)]
            msgs = msgs[:3]
            continue
        out = normalize(out, task)
        errs = check(out, task)
        if not errs:
            json.dump({"solution_overview": out["solution_overview"], "tactical_explanations": out["tactical_explanations"]},
                      open(path, "w"), ensure_ascii=False, indent=1)
            return task["id"], "ok"
        last = errs
        msgs = msgs[:3] + [
            {"role": "assistant", "content": json.dumps(out, ensure_ascii=False)},
            {"role": "user", "content": "Style violations to fix, return the corrected full JSON:\n- " + "\n- ".join(errs[:10])},
        ]
    return task["id"], "FAIL " + "; ".join(last or [])


if __name__ == "__main__":
    subs = sys.argv[1].split(",") if len(sys.argv) > 1 else ["12.1", "12.2", "12.3", "12.4"]
    todo = [t for t in tasks if t["subsection"] in subs]
    if os.environ.get("LIMIT"): todo = todo[: int(os.environ["LIMIT"])]
    print(f"{len(todo)} tasks", flush=True)
    fails = []
    with ThreadPoolExecutor(max_workers=8) as ex:
        for i, (tid, status) in enumerate(ex.map(work, todo), 1):
            if status.startswith("FAIL"):
                fails.append((tid, status))
            print(f"{i}/{len(todo)} {tid} {status[:160]}", flush=True)
    print("FAILED:", len(fails))
    for f in fails:
        print(f)
