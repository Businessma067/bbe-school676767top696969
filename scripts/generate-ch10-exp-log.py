#!/usr/bin/env python3
"""Generate Chapter 10 exponential/logarithmic T/F bank (123 tasks).

Delegates to rebuild-ch10-hard-graphs.py (hard multi-step claims, SVG figures,
MATH 13.18-length explanations).
"""
from __future__ import annotations

import runpy
from pathlib import Path

if __name__ == "__main__":
    runpy.run_path(str(Path(__file__).resolve().parent / "rebuild-ch10-hard-graphs.py"), run_name="__main__")
