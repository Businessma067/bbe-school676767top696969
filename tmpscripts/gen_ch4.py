"""Generate hard Chapter 4 exam tasks (4.1-4.3, 4.5) and rewrite 4.4 explanations."""
import json, os, re, sys, time
from concurrent.futures import ThreadPoolExecutor
import requests

KEY = os.environ["LOVABLE_API_KEY"]
URL = "https://ai.gateway.lovable.dev/v1/chat/completions"
MODEL = "google/gemini-3.7-flash"
OUT = "textbook/output/ch4_gen"
os.makedirs(OUT, exist_ok=True)

GOLD = json.load(open("/tmp/gold.json"))

STYLE = r"""
STYLE CONTRACT (follow exactly; this matches the site's existing gold tasks)

Every task is a WU-Vienna style exam item: one shared context paragraph, then five
closed True/False claims written as full prose sentences.

Statements:
- Written in words, as complete sentences. Nested exam prose is good
  ("A candidate reports that ...", "If ... then ...").
- NEVER a bare arithmetic check. A claim like "11 + 18 equals 29" is forbidden:
  every claim must test the subsection's actual theory (solving technique, domain,
  number and nature of solutions, parameter conditions, extraneous roots, structure).
- Prefer QUALITATIVE claims that cannot be verified by plugging in a number the
  statement itself hands over: bounds ("the solution is smaller than 5"), parity,
  integrality, sign, count of solutions, comparison of two solutions, sum/product of
  roots, admissibility, whether a value is extraneous.
- Arithmetic must stay small and clean; the difficulty comes from the algebra and
  from the reasoning, not from ugly numbers.
- The five claims must be genuinely different in idea. No synonym twins.

solution_overview:
- Flowing prose. Set up the whole situation, name the model/equation, then do the
  SHARED work once with display formulas ($$...$$), one algebraic step per display.
- Do not pre-evaluate every claim there; work only one claim needs lives in that claim.

tactical_explanations (five strings, A-E):
- Each begins with the header line "**A.** → True" (or False), matching answer_key,
  then a blank line, then the body.
- Body: name in words the rule this claim needs, show the general formula only if
  needed, substitute in a SEPARATE display, one step per display, translate the
  result into plain English, compare with the claim, and close with a sentence
  ending exactly "so the statement is True." or "so the statement is False."
- Solid prose plus display formulas. NO bullet lists, no "Step 1", no tables,
  no cross-references like "as shown above" or "in the previous part" (each letter
  is self-contained; it may restate a value recovered in the overview in one short
  sentence).
- Length tracks the work: a short lookup stays short, a real derivation gets steps.
  Do not pad, do not repeat the same paragraph across letters.
- No em dashes, no "It is important to note", no "In conclusion", no "**Trap:**".

Math formatting:
- All math inside $...$ or $$...$$, KaTeX only. English never inside math.
- \frac, never a slash. Currency outside math written as \$.
- Do not emit raw Unicode math symbols (use \cdot, \le, \ge, \neq, \pm, \sqrt, \mid).

Answer keys: mix True and False; do not make all five the same, and vary the pattern
across tasks.

Return STRICT JSON only, one object:
{"title": "...", "context": "...", "statements": [5 strings],
 "answer_key": [5 booleans], "solution_overview": "...",
 "tactical_explanations": [5 strings]}
"""

GOLD_TXT = "GOLD EXAMPLE (style reference, different topic):\n" + json.dumps(GOLD, ensure_ascii=False, indent=1)

SUBS = {
    "4.1": "Linear equations in one unknown (including equations with a parameter, literal equations, identities and contradictions, rearranged word models: mixtures, work rates, price changes, proportions)",
    "4.2": "Quadratic equations (discriminant and nature of roots, Vieta's formulas on sum and product of roots, completing the square, parameter conditions for one/two/no real roots, biquadratic and factorable higher forms, quadratic word models)",
    "4.3": "Rational, radical and absolute-value equations (domain restrictions, extraneous roots created by clearing denominators or squaring, case analysis for absolute values, equations reducible to quadratics by substitution)",
}

THEMES = {
 "4.1": ["a parameter k in the coefficient deciding unique/no/infinite solutions","a literal formula solved for one letter","a mixture of two liquids at given concentrations","two workers finishing a job at combined rate","successive percentage discounts","a fraction-coefficient linear equation with LCD","distance-speed-time with two legs","an equation that collapses to an identity","an equation that collapses to a contradiction","a linear equation with brackets on both sides","a budget split into unequal shares","an average of readings fixed by one unknown","conversion between two linear scales","a linear model of cost and revenue at break-even","an equation with a fraction of the unknown on both sides","a sequence of reverse operations described in words","a parameter making a solution an integer","a linear equation whose solution must exceed a bound","salary raise then deduction","two tanks levelling out","a linear equation with decimals cleared","a piecewise-free linear puzzle with three related quantities","a proportional split with a remainder","a linear equation arising from a perimeter condition","a parameter making the solution negative"],
 "4.2": ["discriminant sign for a parameter","sum and product of roots via Vieta","both roots positive conditions","a quadratic with a repeated root","factorising by grouping","a biquadratic in x squared","completing the square to a vertex form","a quadratic word model of area","a quadratic from a rectangle perimeter and area","a quadratic whose roots differ by a fixed amount","the reciprocal sum of the roots","a quadratic with irrational roots","a parameter shifting one root to zero","a projectile-height model","a price-demand revenue maximum","a quadratic with roots of opposite signs","an equation reducible to a quadratic by expansion","a monic quadratic reconstructed from its roots","comparing roots of two quadratics","a quadratic with rational-root test","a quadratic inequality-free bound on the larger root","a quadratic from consecutive integers","a quadratic in a substituted variable","a parameter making the roots equal","a quadratic modelling a compound area border"],
 "4.3": ["a rational equation with an excluded value that is also a root","clearing denominators producing a quadratic","a radical equation with one extraneous root","a radical equation with two radicals","an absolute-value equation with two cases","an absolute value equal to a linear expression","a nested absolute value","a rational equation reducible to linear","a substitution u equal to a radical","a rational equation with a parameter","a cube-root equation","a radical equation with no solution","an absolute-value equation with no solution","a work-rate rational model","a rate-of-flow rational model","an equation with a squared denominator","an equation with denominators differing by a factorisation","an absolute value inside a fraction","a radical equal to a negative quantity","an equation whose domain excludes the found root","a sum of two reciprocals equal to a constant","a rational equation from average speed on a round trip","an equation with a difference of two square roots","an absolute-value equation whose solutions are symmetric","a radical equation reducible to a quadratic with one admissible root"],
}


def call(prompt, tries=4):
    for i in range(tries):
        r = requests.post(URL, headers={"Authorization": f"Bearer {KEY}", "Content-Type": "application/json"},
                          json={"model": MODEL, "messages": [{"role": "user", "content": prompt}],
                                "response_format": {"type": "json_object"}}, timeout=300)
        if r.status_code == 200:
            return r.json()["choices"][0]["message"]["content"]
        if r.status_code in (429, 500, 502, 503, 504):
            time.sleep(5 * (i + 1)); continue
        raise RuntimeError(f"{r.status_code}: {r.text[:400]}")
    raise RuntimeError("retries exhausted")


def repair(s):
    # AI JSON sometimes turns \t,\f,\b inside latex into control chars
    return (s.replace("\t", "\\t").replace("\f", "\\f").replace("\b", "\\b")
             .replace("\x0b", "\\v").replace("\r", ""))


def parse(txt):
    txt = txt.strip()
    if txt.startswith("```"):
        txt = re.sub(r"^```[a-z]*\n|\n```$", "", txt)
    try:
        return json.loads(txt)
    except json.JSONDecodeError:
        return json.loads(repair(txt))


def validate(obj, need_ctx=True):
    for f in ("title", "context", "statements", "answer_key", "solution_overview", "tactical_explanations"):
        if f not in obj:
            return f"missing {f}"
    if len(obj["statements"]) != 5 or len(obj["answer_key"]) != 5 or len(obj["tactical_explanations"]) != 5:
        return "wrong lengths"
    for i, (ak, ex) in enumerate(zip(obj["answer_key"], obj["tactical_explanations"])):
        head = ex.split("\n")[0]
        letter = "ABCDE"[i]
        want = "True" if ak else "False"
        if not head.startswith(f"**{letter}.**") or want not in head:
            return f"bad header {i}: {head[:60]}"
        if not re.search(r"so the statement is (True|False)\.", ex):
            return f"no verdict close {i}"
        if re.search(r"as shown above|previous part|previous statement|Step 1|In conclusion", ex):
            return f"forbidden phrase {i}"
    joined = " ".join(obj["statements"]) + obj["solution_overview"] + " ".join(obj["tactical_explanations"])
    if joined.count("$") % 2:
        return "unbalanced $"
    if "—" in joined:
        return "em dash"
    return None


def gen_task(sub, theme, diff, idx):
    p = f"""You are writing one exam task for a WU Vienna business-mathematics prep platform.

Subsection {sub}: {SUBS[sub]}
Difficulty: {diff}
Required flavour for this task: {theme}

Write ONE task whose five claims all belong to subsection {sub}. The task must be
demanding: genuinely tricky algebra, careful traps a strong student can still resolve.
Keep the arithmetic clean.

{STYLE}

{GOLD_TXT}
"""
    return p


def gen_mixed(theme, diff, idx):
    p = f"""You are writing one MIXED EXAM SET task (subsection 4.5) for a WU Vienna
business-mathematics prep platform. This module simulates the real exam.

The single shared context is a rich, realistic scenario ({theme}) from which four
different equation types arise. The five claims TOGETHER must cover ALL FOUR subtopics:
 - 4.1 linear equations in one unknown,
 - 4.2 quadratic equations,
 - 4.3 rational, radical or absolute-value equations,
 - 4.4 exponential or logarithmic equations.
One of the five claims may combine two of these.
Difficulty: {diff} (this module is deliberately very hard and heavily worded).

{STYLE}

{GOLD_TXT}
"""
    return p


def rewrite44(task):
    p = f"""Rewrite the explanations of this existing exam task so they match the style
contract below. Keep "statements", "answer_key", "context" and "title" BYTE-IDENTICAL:
return them unchanged. Produce a NEW "solution_overview" (currently missing) and five
NEW, richer "tactical_explanations" that explain every step from the broad setup through
the algebra to the verdict. Recompute all algebra from the statements; never flip a verdict.

{STYLE}

{GOLD_TXT}

TASK TO REWRITE:
{json.dumps({k: task[k] for k in ('title','context','statements','answer_key')}, ensure_ascii=False, indent=1)}
"""
    return p


def job(spec):
    path = f"{OUT}/{spec['key']}.json"
    if os.path.exists(path):
        return spec["key"], "cached"
    last = None
    for attempt in range(3):
        prompt = spec["prompt"]
        if last:
            prompt += f"\n\nYour previous attempt was rejected: {last}. Fix it."
        try:
            obj = parse(call(prompt))
        except Exception as e:
            last = str(e)[:200]; continue
        err = validate(obj)
        if err:
            last = err; continue
        if spec.get("fixed"):
            obj["statements"] = spec["fixed"]["statements"]
            obj["answer_key"] = spec["fixed"]["answer_key"]
            obj["context"] = spec["fixed"]["context"]
            obj["title"] = spec["fixed"]["title"]
            err = validate(obj)
            if err:
                last = err; continue
        json.dump(obj, open(path, "w"), ensure_ascii=False, indent=1)
        return spec["key"], "ok"
    return spec["key"], f"FAIL {last}"


def build_specs():
    specs = []
    diffs = ["4/5", "5/5", "5/5", "4/5", "5/5"]
    for sub in ("4.1", "4.2", "4.3"):
        for i, theme in enumerate(THEMES[sub]):
            d = "3/5" if i < 3 else diffs[i % 5]
            specs.append({"key": f"{sub}-{i+1:02d}", "prompt": gen_task(sub, theme, d, i), "sub": sub, "diff": d, "n": i + 1})
    mixed_themes = [
        "a regional bakery chain planning a new plant","a logistics firm pricing two delivery tariffs","a start-up modelling user growth and break-even",
        "a hotel balancing occupancy and nightly rate","a farm mixing two fertiliser blends","an energy retailer with a fixed fee and a per-unit rate",
        "a bank account compared with a bond ladder","a factory scaling production over two shifts","a software firm with churn and acquisition",
        "a museum ticketing model with group discounts","a construction crew pouring a rectangular slab","a cargo ship burning fuel at variable speed",
        "a pharmacy diluting a solution over time","a city bus network with two fare zones","a vineyard's yield after a scaling investment",
        "a recycling plant with decaying throughput","a car dealership depreciation and lease model","a bakery franchise royalty structure",
        "a telecom bundling data and calls","a gym membership with joining fee and monthly rate","a wind farm output and maintenance cost",
        "a publisher print-run cost and unit price","a coffee importer blending two bean grades",
    ]
    for i, theme in enumerate(mixed_themes[:23]):
        d = "5/5" if i % 3 else "4/5"
        specs.append({"key": f"4.5-{i+1:02d}", "prompt": gen_mixed(theme, d, i), "sub": "4.5", "diff": d, "n": i + 1})
    ch44 = json.load(open("/tmp/ch44.json"))
    for i, t in enumerate(ch44):
        specs.append({"key": f"4.4-{i+1:02d}", "prompt": rewrite44(t), "sub": "4.4", "diff": t["difficulty_level"], "n": i + 1,
                      "fixed": {"statements": t["statements"], "answer_key": t["answer_key"], "context": t["context"], "title": t["title"]}})
    return specs


if __name__ == "__main__":
    specs = build_specs()
    only = sys.argv[1] if len(sys.argv) > 1 else None
    if only:
        specs = [s for s in specs if s["sub"] == only]
    print(f"{len(specs)} tasks")
    fails = []
    with ThreadPoolExecutor(max_workers=8) as ex:
        for key, st in ex.map(job, specs):
            print(key, st, flush=True)
            if st.startswith("FAIL"):
                fails.append(key)
    print("FAILURES:", fails)
