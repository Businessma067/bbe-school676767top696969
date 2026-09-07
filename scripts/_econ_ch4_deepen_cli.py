#!/usr/bin/env python3
"""CLI: deepen economics Ch4 explanations one task range at a time."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _econ_ch4_deepen_lib import deepen_range  # noqa: E402


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--start", required=True)
    ap.add_argument("--end", required=True)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    ok, errs = deepen_range(args.start, args.end, write=not args.dry_run)
    if errs:
        print("AUDIT FAILURES:", file=sys.stderr)
        for e in errs:
            print(" ", e, file=sys.stderr)
        return 1
    if ok:
        print(f"Deepened {len(ok)} tasks: {ok[0]} … {ok[-1]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
