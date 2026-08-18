import json, pathlib, sys

def merge(ch: str):
    d = pathlib.Path("textbook/output/_1318_rewrite") / ch
    parts = sorted(d.glob("part-*.json"))
    tasks = []
    for p in parts:
        tasks.extend(json.loads(p.read_text()))
    out = d / "all.json"
    out.write_text(json.dumps(tasks, indent=2, ensure_ascii=False) + "\n")
    print(ch, len(parts), "parts", len(tasks), "tasks")

if __name__ == "__main__":
    for ch in sys.argv[1:] or ["ch1", "ch5", "ch8", "ch11"]:
        merge(ch)
