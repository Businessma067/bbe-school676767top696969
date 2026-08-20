"""Rewrite Chapter 12 (12.1-12.4) explanations in the MATH 13.18 style.

Reads src/data/math-cases-ch12-probability.json, sends each task to the Lovable
AI gateway with the 13.18 gold example, validates the returned JSON against the
style contract, and writes patches to textbook/output/ch12_1318/<id>.json.
"""
import json, os, re, sys, time, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SRC = os.path.join(ROOT, "src/data/math-cases-ch12-probability.json")
OUT = os.path.join(ROOT, "textbook/output/ch12_1318")
os.makedirs(OUT, exist_ok=True)
KEY = os.environ["LOVABLE_API_KEY"]
MODEL = "google/gemini-2.5-flash"
LETTERS = "ABCDE"

data = json.load(open(SRC))
tasks = data["tasks"]
gold = [t for t in json.load(open(os.path.join(ROOT, "src/data/math-cases-ch13-binomial.json")))["tasks"] if t["case_id"] == "MATH 13.18"][0]

GOLD = json.dumps({
    "context": gold["context"],
    "statements": gold["statements"],
    "answer_key": gold["answer_key"],
    "solution_overview": gold["solution_overview"],
    "tactical_explanations": gold["tactical_explanations"][:2] + [gold["tactical_explanations"][3], gold["tactical_explanations"][4]],
}, ensure_ascii=False, indent=1)

SYSTEM = """You are a calm mathematics tutor rewriting worked solutions for a university entrance-exam prep book.

You will be given ONE probability task (context, five statements, the TRUE/FALSE answer key, and old low-quality explanations). Rewrite the solution overview and all five explanations so they match the house style of Chapter 13 exactly.

STYLE CONTRACT (follow literally):
1. Each explanation starts with a header line: `**A.** → True` or `**A.** → False` (letter matches position, verdict matches the answer key), then a blank line, then the body.
2. Body rhythm: one plain-English sentence naming the rule this statement needs; the general formula on its own line inside `$$...$$`; the substitution with the concrete numbers in a SEPARATE `$$...$$` display; one arithmetic step per display; the comparison with the claim; a closing sentence ending exactly `so the statement is True.` or `so the statement is False.` (or `Matching these figures to the claim, the statement is True.`).
3. ALL mathematics goes inside `$...$` or `$$...$$`. ALL English goes outside math. Never put bare English words inside math: write `$P(\\text{all men})$`, never `P(all men)`. Short `\\text{...}` tags are fine; whole sentences inside math are forbidden.
4. Use proper KaTeX: `\\binom{12}{4}`, `\\frac{a}{b}` (never a slash), `\\cdot` or `\\times` (never the raw character ×), `\\sum`, `\\cup`, `\\cap`, `\\mid`, `\\%` for percent inside math, `\\approx`, `\\ge`, `\\le`. Never use raw Unicode math symbols (× Σ ∪ ∩ − ≥ ≤ μ σ π) — use their LaTeX commands (`\\mu`, `\\sigma`).
5. Never write an incomplete result (like `= 62`); always finish the number with its unit or percent.
6. Length tracks the work: a lookup statement is two or three sentences with no display; a real computation gets the displays. The five letters must NOT all be the same length.
7. Forbidden: em dashes, `**Trap:**` / `**Watch.**` labels, "It is important to note", "In conclusion", references like "as shown above" or "in Step 1", bullet lists, arrows other than the header arrow, and the string `${`.
8. The solution overview restates the scenario briefly, names the model, and sets up ONLY the shared quantities every statement uses. It must not pre-solve each statement.
9. Recompute every number from the context. Keep the verdicts exactly as the answer key says, even if the old explanation disagreed in its wording.

Return ONLY a JSON object:
{"solution_overview": "...", "tactical_explanations": ["...","...","...","...","..."]}
Use real LaTeX with single backslashes inside the JSON strings (JSON-escaped as \\\\).
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


def check(obj, task):
    errs = []
    ex = obj.get("tactical_explanations")
    if not isinstance(ex, list) or len(ex) != 5:
        return ["tactical_explanations must be a list of exactly 5 strings"]
    if not isinstance(obj.get("solution_overview"), str) or len(obj["solution_overview"]) < 40:
        errs.append("solution_overview missing or too short")
    for i, e in enumerate(ex):
        L = LETTERS[i]
        want = "True" if task["answer_key"][i] else "False"
        if not e.startswith(f"**{L}.** \u2192 {want}\n\n"):
            errs.append(f"{L}: header must be exactly '**{L}.** \u2192 {want}' followed by a blank line")
        if not re.search(r"statement is (True|False)\.\s*$", e.strip()):
            errs.append(f"{L}: must end with a sentence ending 'so the statement is {want}.'")
        elif re.search(r"statement is (True|False)\.\s*$", e.strip()).group(1) != want:
            errs.append(f"{L}: closing verdict must be {want}")
        if "${" in e or "—" in e:
            errs.append(f"{L}: contains a forbidden '${{' or em dash")
        for ch in BAD_UNICODE:
            if ch in e:
                errs.append(f"{L}: contains raw unicode math symbol '{ch}', use the LaTeX command")
                break
        for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
            body = m.group(1)
            stripped = re.sub(r"\\(?:text|mathrm|operatorname)\{[^}]*\}", "", body)
            stripped = re.sub(r"\\[a-zA-Z]+", "", stripped)
            if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", stripped):
                errs.append(f"{L}: English words inside math: {body.strip()[:60]}")
                break
    for e in obj.get("solution_overview", ""), :
        for ch in BAD_UNICODE:
            if ch in e:
                errs.append(f"overview: raw unicode math symbol '{ch}'")
                break
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
    return json.loads(t)


def work(task):
    path = os.path.join(OUT, task["id"] + ".json")
    if os.path.exists(path):
        return task["id"], "cached"
    payload = {k: task[k] for k in ("case_id", "title", "context", "statements", "answer_key", "subsection")}
    payload["old_solution_overview"] = task.get("solution_overview", "")
    payload["old_tactical_explanations"] = task["tactical_explanations"]
    msgs = [
        {"role": "system", "content": SYSTEM},
        {"role": "user", "content": "GOLD EXAMPLE (MATH 13.18) — copy this voice and formatting:\n\n" + GOLD},
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
    print(f"{len(todo)} tasks", flush=True)
    fails = []
    with ThreadPoolExecutor(max_workers=8) as ex:
        for i, (tid, status) in enumerate(ex.map(work, todo), 1):
            if status.startswith("FAIL"):
                fails.append((tid, status))
            print(f"{i}/{len(todo)} {tid} {status[:120]}", flush=True)
    print("FAILED:", len(fails))
    for f in fails:
        print(f)
