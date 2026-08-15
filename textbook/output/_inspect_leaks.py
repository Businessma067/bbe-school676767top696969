# -*- coding: utf-8 -*-
import json, re, collections
from pathlib import Path

tasks = json.loads(Path(__file__).with_name("_ch1_tasks_dump.json").read_text(encoding="utf-8"))
issues = Path(__file__).with_name("_verify_render_out.txt").read_text(encoding="utf-8").splitlines()
leak = [x for x in issues if "RAW LATEX" in x]
print("leak lines", len(leak))
cmds = collections.Counter()
for line in leak[:]:
    m = re.search(r'RAW LATEX LEAKED INTO TEXT (\[.*?\])', line)
    if m:
        for c in json.loads(m.group(1)):
            cmds[c] += 1
print("top cmds", cmds.most_common(20))
print("sample leaks:")
for x in leak[:15]:
    print(x[:200])

# real scars
checks = {
    "minus": re.compile(r"(?<![A-Za-z$])-\$(?:\d|\\)"),
    "empty": re.compile(r"emptyset\)"),
    "D3": re.compile(r"\\in D 3|\\in [A-Z] \d"),
    "gloss": re.compile(r"\$[^$\n]{1,80}\([^)$]{2,50}\)"),
}
for name, pat in checks.items():
    n = 0
    samples = []
    for t in tasks:
        for f in [t["context"], t["solution_overview"], *t["statements"], *t["tactical_explanations"]]:
            m = pat.search(f)
            if m:
                n += 1
                if len(samples) < 3:
                    samples.append((t["id"], m.group(0)[:80], f[max(0, m.start() - 20) : m.end() + 20]))
    print(name, "count", n)
    for s in samples:
        print(" ", s)

t = tasks[0]
print("=== OV ===")
print(t["solution_overview"][:600])
print("=== B ===")
print(t["tactical_explanations"][1][:800])
