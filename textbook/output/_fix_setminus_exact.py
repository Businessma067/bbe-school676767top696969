# -*- coding: utf-8 -*-
import json
import importlib.util
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

FIXES = {
    "math-1-5": {
        3: r"$(E \setminus F) \cup (F \setminus E) = \{1, 4, 6, 7\}$",
        4: r"$(E \setminus F) \cap (F \setminus E) = \emptyset$",
    },
    "math-1-38": {
        3: r"$(A \setminus B) \cap (B \setminus A) = \emptyset$.",
    },
    "math-1-39": {
        3: r"$(A \setminus B) \cap (B \setminus A) = \emptyset$.",
    },
}

# Also fix explanations that echo mangled forms
EXPL_REPL = [
    (
        r"$(A \setminus B) \cap $(B \setminus A)$ = \emptyset$",
        r"$(A \setminus B) \cap (B \setminus A) = \emptyset$",
    ),
    (
        r"$(E \setminus F) \cup $(F \setminus E)$ = \{1, 4, 6, 7\}$",
        r"$(E \setminus F) \cup (F \setminus E) = \{1, 4, 6, 7\}$",
    ),
    (
        r"$(E \setminus F) \cap $(F \setminus E)$ = \emptyset$",
        r"$(E \setminus F) \cap (F \setminus E) = \emptyset$",
    ),
]


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    for t in tasks:
        if t["id"] in FIXES:
            for i, s in FIXES[t["id"]].items():
                print(t["id"], i, "from", repr(t["statements"][i]))
                t["statements"][i] = s
                print("  to", repr(s))
        for i, e in enumerate(t["tactical_explanations"]):
            ne = e
            for a, b in EXPL_REPL:
                ne = ne.replace(a, b)
            # bare (A \setminus B) in explanations
            ne = ne.replace("(A \\setminus B)", "$(A \\setminus B)$")
            ne = ne.replace("(B \\setminus A)", "$(B \\setminus A)$")
            # avoid double-wrapping
            ne = ne.replace("$$(A \\setminus B)$$", "$(A \\setminus B)$")
            ne = ne.replace("$$(B \\setminus A)$$", "$(B \\setminus A)$")
            ne = ne.replace("$($(A \\setminus B)$)", "$(A \\setminus B)$")
            ne = ne.replace("$($(B \\setminus A)$)", "$(B \\setminus A)$")
            t["tactical_explanations"][i] = ne
        # Do NOT run normalize_task_dollars on these — it can re-split mid-formula $.
    build.write_ts(tasks)
    DUMP.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
    print("done")


if __name__ == "__main__":
    main()
