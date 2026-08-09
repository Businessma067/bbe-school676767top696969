# -*- coding: utf-8 -*-
"""Merge subsection fix JSON files into ch11_raw.json and re-emit TS."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
FIX_DIR = ROOT / "textbook" / "output" / "ch11_subsection_fixes"
EMIT = ROOT / "textbook" / "output" / "emit_ch11_from_raw.py"


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    merged = []
    for sub in data["subsections"]:
        sid = sub["id"]
        path = FIX_DIR / f"{sid}.json"
        if not path.exists():
            print(f"MISSING {path}")
            continue
        tasks = json.loads(path.read_text(encoding="utf-8"))
        if not isinstance(tasks, list):
            raise SystemExit(f"{sid}: expected list of tasks")
        if len(tasks) != len(sub["tasks"]):
            raise SystemExit(f"{sid}: expected {len(sub['tasks'])} tasks, got {len(tasks)}")
        for i, t in enumerate(tasks):
            for key in ("local_num", "title", "context", "statements", "answer_key", "explanations"):
                if key not in t:
                    raise SystemExit(f"{sid} task[{i}] missing {key}")
            if t["local_num"] != sub["tasks"][i]["local_num"]:
                raise SystemExit(f"{sid}: local_num mismatch at {i}")
        sub["tasks"] = tasks
        merged.append(sid)
        print(f"merged {sid}: {len(tasks)} tasks")
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("updated", RAW, "merged", merged)
    if "--emit" in sys.argv:
        import subprocess
        subprocess.check_call([sys.executable, str(EMIT)])


if __name__ == "__main__":
    main()
