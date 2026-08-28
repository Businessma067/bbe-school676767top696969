"""Emit Chapter 2 subsection modules from task dicts."""

from __future__ import annotations

import json
import re
from typing import Any


def _escape_raw(s: str) -> str:
    if "\n" in s or "\\" in s or "$" in s or '"' in s:
        if '"""' in s:
            return "r'''" + s.replace("'''", r"\'\'\'") + "'''"
        return 'r"""' + s + '"""'
    return 'r"' + s.replace("\\", "\\\\").replace('"', r"\"") + '"'


def _emit_item(stmt: str, truth: bool, body: str | None = None) -> str:
    if body and body.strip():
        return (
            f"            (\n                {_escape_raw(stmt)},\n"
            f"                {truth},\n"
            f"                {_escape_raw(body)},\n"
            f"            ),"
        )
    return f"            (\n                {_escape_raw(stmt)},\n                {truth},\n            ),"


def emit_module(
    *,
    subsection: str,
    tasks: list[dict[str, Any]],
    module_doc: str = "",
) -> str:
    lines = [
        "from __future__ import annotations",
        "",
        "from common import task",
        "",
        'CTX = "Evaluate each statement. Mark it TRUE or FALSE."',
        "",
        "TASKS = [",
    ]
    for t in tasks:
        title = t["title"].replace('"', '\\"')
        diff = t["difficulty_level"]
        overview = t["solution_overview"].replace('"', '\\"')
        lines.append("    task(")
        lines.append(f'        title="{title}",')
        lines.append(f'        subsection="{subsection}",')
        lines.append(f'        difficulty="{diff}",')
        lines.append("        context=CTX,")
        lines.append("        items=[")
        expls = t.get("tactical_explanations") or []
        for i, (stmt, truth) in enumerate(zip(t["statements"], t["answer_key"])):
            body = expls[i] if i < len(expls) else None
            lines.append(_emit_item(stmt, bool(truth), body))
        lines.append("        ],")
        lines.append(f"        overview={_escape_raw(overview)},")
        lines.append("    ),")
    lines.append("]")
    lines.append("")
    return "\n".join(lines)
