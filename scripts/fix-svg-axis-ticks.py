#!/usr/bin/env python3
"""Rewrite axis tick labels on embedded SVG figures to nice round values.

Preserves curves, titles, marks, and legends. Replaces only numeric tick
marks/labels (and drops junk mark captions like "piecewise").
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from urllib.parse import quote, unquote

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ch10_svg import _nice_ticks, _tick  # noqa: E402

ROOT = Path("/workspace")
JSON_BANKS = [
    ROOT / "src/data/math-ch10-exp-log.json",
    ROOT / "src/data/math-ch9-polynomials.json",
    ROOT / "src/data/math-ch9-mixed-exam.json",
    ROOT / "src/data/math-ch7-mixed-exam.json",
    ROOT / "src/data/math-ch11-exam.json",
]
TS_BANKS = [
    ROOT / "src/data/math-ch11-differentiation.ts",
]

URI_RE = re.compile(r"data:image/svg\+xml[^\"'`]*")
TEXT_RE = re.compile(r"<text\b([^>]*)>([^<]*)</text>", re.I)
ATTR_RE = re.compile(r'([a-zA-Z_:][-a-zA-Z0-9_:]*)\s*=\s*"([^"]*)"')
LINE_RE = re.compile(r"<line\b[^>]*?/?>", re.I)
JUNK_LABELS = {"piecewise", "continuous", "discrete", "path", "curve"}


def _attrs(blob: str) -> dict[str, str]:
    return {m.group(1): m.group(2) for m in ATTR_RE.finditer(blob)}


def _parse_num(s: str) -> float | None:
    s = s.strip().replace(",", "")
    try:
        return float(s)
    except ValueError:
        return None


def decode_uri(uri: str) -> str:
    if "base64," in uri[:48]:
        import base64

        return base64.b64decode(uri.split("base64,", 1)[1]).decode()
    return unquote(uri.split(",", 1)[1])


def encode_uri(svg: str) -> str:
    return "data:image/svg+xml;utf8," + quote(svg, safe="")


def find_frame(svg: str) -> tuple[float, float, float, float] | None:
    """Return (L, T, pw, ph) from the main axis spines."""
    verts: list[tuple[float, float, float]] = []
    for m in LINE_RE.finditer(svg):
        a = _attrs(m.group(0))
        try:
            x1, y1, x2, y2 = float(a["x1"]), float(a["y1"]), float(a["x2"]), float(a["y2"])
        except (KeyError, ValueError):
            continue
        if abs(x1 - x2) < 0.6 and abs(y2 - y1) > 150 and min(x1, x2) < 130:
            verts.append((min(x1, x2), min(y1, y2), abs(y2 - y1)))
    if not verts:
        return None
    verts.sort(key=lambda t: t[2], reverse=True)
    L, T, ph = verts[0]

    pw = None
    for m in LINE_RE.finditer(svg):
        a = _attrs(m.group(0))
        try:
            x1, y1, x2, y2 = float(a["x1"]), float(a["y1"]), float(a["x2"]), float(a["y2"])
        except (KeyError, ValueError):
            continue
        if abs(y1 - y2) < 0.6 and abs(y1 - (T + ph)) < 2.5 and abs(x2 - x1) > 200:
            if min(x1, x2) <= L + 3:
                pw = abs(x2 - x1)
                break
    if pw is None:
        vm = re.search(r'viewBox="0\s+0\s+([\d.]+)\s+([\d.]+)"', svg)
        width = float(vm.group(1)) if vm else 720.0
        pw = width - L - 28.0
    return L, T, pw, ph


def collect_ticks(
    svg: str, L: float, T: float, pw: float, ph: float
) -> tuple[list[tuple[float, float]], list[tuple[float, float]], list[str]]:
    x_pairs: list[tuple[float, float]] = []
    y_pairs: list[tuple[float, float]] = []
    junk: list[str] = []
    for m in TEXT_RE.finditer(svg):
        attr_s, content = m.group(1), m.group(2)
        a = _attrs(attr_s)
        val = _parse_num(content)
        if val is None:
            # Drop junk curve/mark captions ("piecewise" legend, etc.)
            if content.strip().lower() in JUNK_LABELS:
                junk.append(m.group(0))
            continue
        try:
            x = float(a["x"])
            y = float(a["y"])
        except (KeyError, ValueError):
            continue
        anchor = a.get("text-anchor", "start")
        if anchor == "end" and x <= L + 4 and T - 6 <= y <= T + ph + 6:
            y_pairs.append((val, y))
            continue
        if y >= T + ph + 6 and L - 30 <= x <= L + pw + 30:
            x_pairs.append((val, x))
    return x_pairs, y_pairs, junk


def fit_linear(pairs: list[tuple[float, float]]) -> tuple[float, float] | None:
    """pixel = a + b * value."""
    if len(pairs) < 2:
        return None
    pairs = sorted(pairs, key=lambda p: p[0])
    (v0, p0), (v1, p1) = pairs[0], pairs[-1]
    if abs(v1 - v0) < 1e-15:
        return None
    b = (p1 - p0) / (v1 - v0)
    a = p0 - b * v0
    return a, b


def strip_old_ticks(svg: str, L: float, T: float, pw: float, ph: float) -> str:
    def keep_line(m: re.Match) -> str:
        tag = m.group(0)
        a = _attrs(tag)
        try:
            x1, y1, x2, y2 = float(a["x1"]), float(a["y1"]), float(a["x2"]), float(a["y2"])
        except (KeyError, ValueError):
            return tag
        stroke = (a.get("stroke") or "").lower()
        # faint horizontal grids
        if stroke in {"#ddd", "#e8e2d8", "#eee", "#e5e5e5"} and abs(y1 - y2) < 0.5:
            if L - 2 <= min(x1, x2) and max(x1, x2) <= L + pw + 2:
                return ""
        # x-tick stubs
        if abs(x1 - x2) < 0.5 and T + ph - 1 <= min(y1, y2) and max(y1, y2) <= T + ph + 14:
            if L - 2 <= x1 <= L + pw + 2:
                return ""
        # y-tick stubs
        if abs(y1 - y2) < 0.5 and L - 16 <= min(x1, x2) and max(x1, x2) <= L + 1.5:
            if T - 2 <= y1 <= T + ph + 2:
                return ""
        return tag

    svg = LINE_RE.sub(keep_line, svg)

    def keep_text(m: re.Match) -> str:
        attr_s, content = m.group(1), m.group(2)
        if _parse_num(content) is None:
            return m.group(0)
        a = _attrs(attr_s)
        try:
            x = float(a["x"])
            y = float(a["y"])
        except (KeyError, ValueError):
            return m.group(0)
        anchor = a.get("text-anchor", "start")
        if anchor == "end" and x <= L + 4 and T - 6 <= y <= T + ph + 6:
            return ""
        if y >= T + ph + 6 and L - 30 <= x <= L + pw + 30:
            return ""
        return m.group(0)

    return TEXT_RE.sub(keep_text, svg)


def detect_tick_style(svg: str) -> tuple[str, str]:
    """Infer tick font from existing numeric tick labels, not the title."""
    for m in TEXT_RE.finditer(svg):
        attr_s, content = m.group(1), m.group(2)
        if _parse_num(content) is None:
            continue
        a = _attrs(attr_s)
        fs = a.get("font-size", "12")
        fw = a.get("font-weight", "")
        weight = f' font-weight="{fw}"' if fw in {"700", "600", "bold"} else ""
        return fs, weight
    return "12", ""


def fix_svg(svg: str) -> str:
    frame = find_frame(svg)
    if frame is None:
        return svg
    L, T, pw, ph = frame
    x_pairs, y_pairs, junk = collect_ticks(svg, L, T, pw, ph)
    x_fit = fit_linear(x_pairs)
    y_fit = fit_linear(y_pairs)
    if x_fit is None or y_fit is None:
        return svg
    xa, xb = x_fit
    ya, yb = y_fit
    if abs(xb) < 1e-15 or abs(yb) < 1e-15:
        return svg

    xmin = (L - xa) / xb
    xmax = (L + pw - xa) / xb
    ymax = (T - ya) / yb
    ymin = (T + ph - ya) / yb
    if xmax < xmin:
        xmin, xmax = xmax, xmin
    if ymax < ymin:
        ymin, ymax = ymax, ymin

    font, weight = detect_tick_style(svg)
    # Chapter 10 figures use compact 12px ticks; ch9 uses heavier labels.
    # Prefer the pre-strip numeric labels; if missing, keep a clean 12px default.
    fill = "#1a1a1a" if weight else "#333"
    stroke = "#5a534a" if weight else "#333"

    for j in junk:
        svg = svg.replace(j, "")
    svg = strip_old_ticks(svg, L, T, pw, ph)

    # Slightly expand so outer nice numbers (e.g. 3000) still appear near the rim
    x_pad = 0.02 * (xmax - xmin or 1.0)
    y_pad = 0.06 * (ymax - ymin or 1.0)
    parts: list[str] = []
    for tick in _nice_ticks(xmin - x_pad, xmax + x_pad, target=7):
        x = xa + xb * tick
        if not (L - 4 <= x <= L + pw + 4):
            continue
        x_draw = min(max(x, L), L + pw)
        parts.append(
            f'<line x1="{x_draw:.1f}" y1="{T + ph:.1f}" x2="{x_draw:.1f}" y2="{T + ph + 6:.1f}" stroke="{stroke}"/>'
        )
        parts.append(
            f'<text x="{x_draw:.1f}" y="{T + ph + 20:.1f}" text-anchor="middle" font-size="{font}"'
            f'{weight} font-family="Georgia,serif" fill="{fill}">{_tick(tick)}</text>'
        )
    for tick in _nice_ticks(ymin - y_pad, ymax + y_pad, target=6):
        y = ya + yb * tick
        if not (T - 10 <= y <= T + ph + 10):
            continue
        y_draw = min(max(y, T), T + ph)
        parts.append(
            f'<line x1="{L:.1f}" y1="{y_draw:.1f}" x2="{L + pw:.1f}" y2="{y_draw:.1f}" stroke="#ddd" stroke-width="1"/>'
        )
        parts.append(
            f'<line x1="{L - 6:.1f}" y1="{y_draw:.1f}" x2="{L:.1f}" y2="{y_draw:.1f}" stroke="{stroke}"/>'
        )
        parts.append(
            f'<text x="{L - 10:.1f}" y="{y_draw:.1f}" text-anchor="end" dominant-baseline="middle" '
            f'font-size="{font}"{weight} font-family="Georgia,serif" fill="{fill}">{_tick(tick)}</text>'
        )

    insert = "".join(parts)
    m = re.search(r"<(polyline|circle|path|polygon)\b", svg)
    if m:
        i = m.start()
        svg = svg[:i] + insert + svg[i:]
    else:
        svg = svg.replace("</svg>", insert + "</svg>")
    return svg


def walk_json(obj, stats: dict[str, int]) -> None:
    if isinstance(obj, dict):
        for k, v in list(obj.items()):
            if k == "figure" and isinstance(v, str) and v.startswith("data:image/svg"):
                try:
                    svg = decode_uri(v)
                except Exception:
                    stats["skip"] += 1
                    continue
                new = fix_svg(svg)
                if new != svg:
                    obj[k] = encode_uri(new)
                    stats["fixed"] += 1
                else:
                    stats["unchanged"] += 1
            else:
                walk_json(v, stats)
    elif isinstance(obj, list):
        for item in obj:
            walk_json(item, stats)


def patch_ts(path: Path, stats: dict[str, int]) -> None:
    text = path.read_text()
    out: list[str] = []
    last = 0
    for m in URI_RE.finditer(text):
        uri = m.group(0)
        # trim trailing junk if any
        if uri.endswith("`") or uri.endswith('"'):
            uri = uri[:-1]
        try:
            svg = decode_uri(uri)
        except Exception:
            stats["skip"] += 1
            continue
        new = fix_svg(svg)
        if new != svg:
            repl = encode_uri(new)
            out.append(text[last : m.start()])
            out.append(repl)
            last = m.end()
            # if original ended mid-token differently, m.end already covers uri match
            stats["fixed"] += 1
        else:
            stats["unchanged"] += 1
    if last:
        out.append(text[last:])
        path.write_text("".join(out))


def main() -> None:
    for path in JSON_BANKS:
        if not path.exists():
            print("missing", path)
            continue
        data = json.loads(path.read_text())
        stats = {"fixed": 0, "unchanged": 0, "skip": 0}
        walk_json(data, stats)
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
        print(f"{path.name}: {stats}")

    for path in TS_BANKS:
        if not path.exists():
            print("missing", path)
            continue
        stats = {"fixed": 0, "unchanged": 0, "skip": 0}
        patch_ts(path, stats)
        print(f"{path.name}: {stats}")

    # Polar sanity
    bank = json.loads((ROOT / "src/data/math-ch10-exp-log.json").read_text())["tasks"]
    for t in bank:
        if "Polar" in t.get("title", "") and t.get("figure"):
            svg = decode_uri(t["figure"])
            nums = [c for c in re.findall(r"<text[^>]*>([^<]+)</text>", svg) if _parse_num(c) is not None]
            print("Polar ticks:", nums)
            Path("/tmp/polar_fixed.svg").write_text(svg)
            break


if __name__ == "__main__":
    main()
