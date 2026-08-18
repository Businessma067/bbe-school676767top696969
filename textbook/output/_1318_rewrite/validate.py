import json, re, pathlib, sys

FORBIDDEN = [
    r"the fork:",
    r"discarded mix",
    r"recovered isolation",
    r"Walking through that mix",
    r"yes-or-no against",
    r"naming the mix",
    r"A solver who",
    r"A rushed solver",
    r"Part 2: The model",
    r"Extended context check",
    r"\*\*Watch\.\*\*",
    r"\*\*Trap:",
    r"It is important to note",
    r"In conclusion",
]

CH_HEADER = {
    "ch1": "dot",
    "ch5": "paren",
    "ch8": "dot",
    "ch11": "paren",
}

def dollar_ok(s):
    # \$ is currency, not a delimiter
    t = s.replace("\\$", "")
    display = t.count("$$")
    t = t.replace("$$", "")
    return t.count("$") % 2 == 0 and display % 2 == 0

def check_task(ch, t, issues):
    tid = t["id"]
    letters = "ABCDE"
    ov = t.get("solution_overview") or ""
    if "Part 2: The model" in ov:
        issues.append(f"{tid} overview: Part 2 reprint")
    if not dollar_ok(ov):
        issues.append(f"{tid} overview: unbalanced $")
    if "${" in ov:
        issues.append(f"{tid} overview: ${{")
    expls = t["tactical_explanations"]
    stmts = t["statements"]
    keys = t["answer_key"]
    if len(expls) != 5:
        issues.append(f"{tid}: {len(expls)} explanations")
        return
    for i, text in enumerate(expls):
        L = letters[i]
        verdict = "True" if keys[i] else "False"
        v2 = "true" if keys[i] else "false"
        if CH_HEADER[ch] == "dot":
            want = f"**{L}.** → {verdict}"
            if not text.startswith(want):
                issues.append(f"{tid}{L}: header want {want!r} got {text.splitlines()[0]!r}")
        else:
            want = f"**{L}) {stmts[i]}**  ({v2})"
            if not text.startswith(want):
                issues.append(f"{tid}{L}: header mismatch got {text.splitlines()[0]!r}")
        last = text.rstrip().splitlines()[-1]
        if "so the statement is" not in last.lower():
            issues.append(f"{tid}{L}: missing verdict sentence")
        if not dollar_ok(text):
            issues.append(f"{tid}{L}: unbalanced $")
        if "${" in text:
            issues.append(f"{tid}{L}: ${{")
        for pat in FORBIDDEN:
            if re.search(pat, text) or re.search(pat, ov):
                issues.append(f"{tid}{L if re.search(pat, text) else ' ov'}: forbidden {pat}")
                break
        # duplicate: letter should not restate tagged system (1) and (2) as a block after overview
        if re.search(r"\\tag\{1\}", text) and re.search(r"\\tag\{2\}", text):
            issues.append(f"{tid}{L}: reprints tagged system")

def main(paths):
    issues = []
    for p in paths:
        p = pathlib.Path(p)
        ch = p.parent.name
        tasks = json.loads(p.read_text())
        if isinstance(tasks, dict):
            tasks = [tasks]
        for t in tasks:
            check_task(ch, t, issues)
    print(f"{len(issues)} issues")
    for line in issues[:80]:
        print(line)
    if len(issues) > 80:
        print(f"... {len(issues)-80} more")
    return 1 if issues else 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
