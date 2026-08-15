# -*- coding: utf-8 -*-
import json
import importlib.util
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

FIX = {
    "math-1-38": (
        2,
        "**C.** → True\n\n"
        "Symmetric difference keeps elements that sit in exactly one of the two sets:\n\n"
        "$$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$$\n\n"
        "$$A \\triangle B = \\{1, 9\\} \\cup \\{11, 13\\} = \\{1, 9, 11, 13\\}$$\n\n"
        "The claim matches the facts above, so the statement is True.",
    ),
    "math-1-39": (
        2,
        "**C.** → True\n\n"
        "Symmetric difference keeps elements that sit in exactly one of the two sets:\n\n"
        "$$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$$\n\n"
        "$$A \\triangle B = \\{2, 4, 6\\} \\cup \\{1, 3, 5\\} = \\{1, 2, 3, 4, 5, 6\\}$$\n\n"
        "The claim matches the facts above, so the statement is True.",
    ),
}

tasks = json.loads(DUMP.read_text(encoding="utf-8"))
for t in tasks:
    if t["id"] in FIX:
        i, text = FIX[t["id"]]
        t["tactical_explanations"][i] = text
build.write_ts(tasks)
DUMP.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
print("fixed")
