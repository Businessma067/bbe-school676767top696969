import json
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location("p", Path(__file__).with_name("_polish_ch1_reqs.py"))
# Don't exec polish main - import functions by loading module carefully
import runpy
# Load polish module without running main
import types, sys
ns = {}
code = Path("_polish_ch1_reqs.py").read_text(encoding="utf-8")
# strip main
code = code.replace('if __name__ == "__main__":\n    main()\n', "")
exec(compile(code, "_polish_ch1_reqs.py", "exec"), ns)

tasks = json.loads(Path("_ch1_tasks_dump.json").read_text(encoding="utf-8"))
t = tasks[0]
print("DUMP ctx:", t["context"][:100])
t2 = ns["polish_task"](dict(t))
print("OUT  ctx:", t2["context"][:120])
print("OUT  overview keyfacts snippet:")
ov = t2["solution_overview"]
idx = ov.find("Key facts")
print(ov[idx:idx+400])
print("parity overview", ns["dollar_parity_ok"](t2["solution_overview"]))
