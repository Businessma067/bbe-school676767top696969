#!/usr/bin/env python3
"""Richer SVG helpers for Chapter 7/9 graph stems.

Plots match the stated polynomial: roots, turning points, and optional second
curve are marked from the coefficients, not guessed.
Larger canvas, thicker strokes, and bigger tick/root labels for exam readability.
"""

from __future__ import annotations

from urllib.parse import quote


def _poly_eval(coeffs: list[float], x: float) -> float:
    y = 0.0
    for c in coeffs:
        y = y * x + c
    return y


def _deriv(coeffs: list[float]) -> list[float]:
    n = len(coeffs) - 1
    if n <= 0:
        return [0.0]
    return [c * (n - i) for i, c in enumerate(coeffs[:-1])]


def _roots_on_interval(coeffs: list[float], xmin: float, xmax: float, samples: int = 1200) -> list[float]:
    xs = [xmin + (xmax - xmin) * i / samples for i in range(samples + 1)]
    ys = [_poly_eval(coeffs, x) for x in xs]
    roots: list[float] = []
    for i in range(len(xs) - 1):
        y0, y1 = ys[i], ys[i + 1]
        if y0 == 0:
            roots.append(xs[i])
        elif y0 * y1 < 0:
            t = abs(y0) / (abs(y0) + abs(y1))
            roots.append(xs[i] + t * (xs[i + 1] - xs[i]))
    out: list[float] = []
    for r in roots:
        if not out or abs(r - out[-1]) > 1e-3 * (xmax - xmin):
            out.append(r)
    return out


def _critical_on_interval(coeffs: list[float], xmin: float, xmax: float) -> list[float]:
    return _roots_on_interval(_deriv(coeffs), xmin, xmax)


def _nice_num(x: float, round_step: bool) -> float:
    """Classic nice-number helper (Wilkinson / graphics pipeline)."""
    import math

    if x <= 0 or not math.isfinite(x):
        return 1.0
    exp = math.floor(math.log10(x))
    f = x / (10**exp)
    if round_step:
        if f < 1.5:
            nf = 1.0
        elif f < 3.0:
            nf = 2.0
        elif f < 7.0:
            nf = 5.0
        else:
            nf = 10.0
    else:
        if f <= 1.0:
            nf = 1.0
        elif f <= 2.0:
            nf = 2.0
        elif f <= 5.0:
            nf = 5.0
        else:
            nf = 10.0
    return nf * (10**exp)


def _nice_ticks(lo: float, hi: float, target: int = 6) -> list[float]:
    """Even, round tick marks on [lo, hi] — never 157.1-style junk."""
    import math

    if not math.isfinite(lo) or not math.isfinite(hi) or hi <= lo:
        return [lo if math.isfinite(lo) else 0.0]
    raw_span = hi - lo
    nice_span = _nice_num(raw_span, round_step=False)
    step = _nice_num(nice_span / max(target - 1, 1), round_step=True)
    if step <= 0:
        step = raw_span / max(target - 1, 1)
    nice_lo = math.floor(lo / step) * step
    nice_hi = math.ceil(hi / step) * step
    ticks: list[float] = []
    n_steps = int(round((nice_hi - nice_lo) / step))
    for i in range(n_steps + 1):
        v = nice_lo + i * step
        if lo - 0.25 * step <= v <= hi + 0.25 * step:
            if abs(v - round(v)) < 1e-9 * max(1.0, abs(v)):
                v = float(round(v))
            ticks.append(v)
    return ticks or [lo, hi]


def svg_polynomial(
    coeffs: list[float],
    *,
    xmin: float,
    xmax: float,
    title: str,
    xlabel: str = "x",
    ylabel: str = "y",
    marks: list[tuple[float, str]] | None = None,
    ymin: float | None = None,
    ymax: float | None = None,
    width: int = 720,
    height: int = 420,
    auto_mark_roots: bool = False,
    auto_mark_turns: bool = False,
    second: list[float] | None = None,
    second_label: str | None = None,
    vlines: list[float] | None = None,
) -> str:
    """Return a data-URI SVG of y = poly(x). coeffs are highest-degree first."""
    n = 360
    xs = [xmin + (xmax - xmin) * i / n for i in range(n + 1)]
    ys = [_poly_eval(coeffs, x) for x in xs]
    ys2 = [_poly_eval(second, x) for x in xs] if second else None
    all_y = list(ys) + (ys2 or [])
    pad_y = 0.16 * (max(all_y) - min(all_y) or 1.0)
    y0 = ymin if ymin is not None else min(all_y) - pad_y
    y1 = ymax if ymax is not None else max(all_y) + pad_y
    if y0 == y1:
        y0, y1 = y0 - 1, y1 + 1
    # Margins sized for large tick labels
    L, T, R, B = 72, 44, 28, 56
    pw, ph = width - L - R, height - T - B

    def X(x: float) -> float:
        return L + (x - xmin) / (xmax - xmin) * pw

    def Y(y: float) -> float:
        return T + (y1 - y) / (y1 - y0) * ph

    pts = " ".join(f"{X(x):.1f},{Y(y):.1f}" for x, y in zip(xs, ys))
    pts2 = (
        " ".join(f"{X(x):.1f},{Y(y):.1f}" for x, y in zip(xs, ys2)) if ys2 else ""
    )
    x_axis = ""
    if y0 < 0 < y1:
        x_axis = (
            f'<line x1="{L}" y1="{Y(0):.1f}" x2="{width - R}" y2="{Y(0):.1f}" '
            f'stroke="#8a8074" stroke-width="1.6"/>'
        )
    y_axis = ""
    if xmin < 0 < xmax:
        y_axis = (
            f'<line x1="{X(0):.1f}" y1="{T}" x2="{X(0):.1f}" y2="{height - B}" '
            f'stroke="#8a8074" stroke-width="1.6"/>'
        )

    ticks = []
    for xv in _nice_ticks(xmin, xmax, 7):
        ticks.append(
            f'<line x1="{X(xv):.1f}" y1="{height - B}" x2="{X(xv):.1f}" y2="{height - B + 8}" '
            f'stroke="#5a534a" stroke-width="1.6"/>'
            f'<text x="{X(xv):.1f}" y="{height - B + 28}" text-anchor="middle" font-size="18" '
            f'font-weight="700" font-family="Georgia,serif" fill="#1a1a1a">{_tick(xv)}</text>'
        )
    for yv in _nice_ticks(y0, y1, 6):
        ticks.append(
            f'<line x1="{L - 8}" y1="{Y(yv):.1f}" x2="{L}" y2="{Y(yv):.1f}" '
            f'stroke="#5a534a" stroke-width="1.6"/>'
            f'<text x="{L - 12}" y="{Y(yv) + 6:.1f}" text-anchor="end" font-size="17" '
            f'font-weight="700" font-family="Georgia,serif" fill="#1a1a1a">{_tick(yv)}</text>'
        )

    auto_marks: list[tuple[float, str]] = []
    if auto_mark_roots:
        for r in _roots_on_interval(coeffs, xmin, xmax):
            auto_marks.append((r, _tick(r)))
    if auto_mark_turns:
        for c in _critical_on_interval(coeffs, xmin, xmax):
            auto_marks.append((c, f"turn {_tick(c)}"))

    dots = []
    for xv, _lab in (marks or []) + auto_marks:
        yv = _poly_eval(coeffs, xv)
        if not (xmin - 1e-9 <= xv <= xmax + 1e-9):
            continue
        if not (y0 - 1e-6 <= yv <= y1 + 1e-6):
            continue
        # Mark the point only — no text label; abscissa is read from the axis ticks.
        dots.append(
            f'<circle cx="{X(xv):.1f}" cy="{Y(yv):.1f}" r="5.5" fill="#8B5A2B" '
            f'stroke="#fff6ea" stroke-width="1.5"/>'
        )

    guides = []
    for xv in vlines or []:
        guides.append(
            f'<line x1="{X(xv):.1f}" y1="{T}" x2="{X(xv):.1f}" y2="{height - B}" '
            f'stroke="#a89880" stroke-width="1.4" stroke-dasharray="4 3"/>'
        )

    second_poly = ""
    if pts2:
        second_poly = (
            f'<polyline fill="none" stroke="#2F5D50" stroke-width="2.6" '
            f'stroke-dasharray="7 5" points="{pts2}"/>'
        )
        if second_label:
            second_poly += (
                f'<text x="{width - R - 6}" y="{T + 18}" text-anchor="end" font-size="15" '
                f'font-weight="600" font-family="Georgia,serif" fill="#2F5D50">'
                f"{_esc(second_label)}</text>"
            )

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" role="img">
<rect width="{width}" height="{height}" rx="12" fill="#f8f6f2" stroke="#d9d2c5"/>
<text x="{width / 2:.0f}" y="28" text-anchor="middle" font-size="17" font-weight="600" font-family="Georgia,serif" fill="#1a1a1a">{_esc(title)}</text>
<line x1="{L}" y1="{T}" x2="{L}" y2="{height - B}" stroke="#5a534a" stroke-width="2"/>
<line x1="{L}" y1="{height - B}" x2="{width - R}" y2="{height - B}" stroke="#5a534a" stroke-width="2"/>
{x_axis}{y_axis}
{"".join(ticks)}
{"".join(guides)}
<polyline fill="none" stroke="#8B5A2B" stroke-width="2.8" points="{pts}"/>
{second_poly}
{"".join(dots)}
<text x="{width / 2:.0f}" y="{height - 12}" text-anchor="middle" font-size="15" font-weight="600" font-family="Georgia,serif" fill="#1a1a1a">{_esc(xlabel)}</text>
<text x="18" y="{T + ph / 2:.0f}" text-anchor="middle" font-size="15" font-weight="600" font-family="Georgia,serif" fill="#1a1a1a" transform="rotate(-90 18 {T + ph / 2:.0f})">{_esc(ylabel)}</text>
</svg>'''
    return "data:image/svg+xml;utf8," + quote(svg, safe="")


def _tick(v: float) -> str:
    if abs(v) < 1e-9:
        return "0"
    av = abs(v)
    if av >= 100:
        return str(int(round(v)))
    if abs(v - round(v)) < 1e-6:
        return str(int(round(v)))
    if av >= 10:
        return f"{v:.1f}".rstrip("0").rstrip(".")
    if abs(2 * v - round(2 * v)) < 1e-6:
        return f"{v:.1f}"
    if abs(10 * v - round(10 * v)) < 1e-6:
        return f"{v:.1f}"
    return f"{v:.2g}"


def _esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )
