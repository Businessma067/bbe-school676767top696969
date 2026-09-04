#!/usr/bin/env python3
"""Richer SVG helpers for Chapter 9 graph stems.

Plots match the stated polynomial: roots, turning points, and optional second
curve are marked from the coefficients, not guessed.
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


def _roots_on_interval(coeffs: list[float], xmin: float, xmax: float, samples: int = 800) -> list[float]:
    xs = [xmin + (xmax - xmin) * i / samples for i in range(samples + 1)]
    ys = [_poly_eval(coeffs, x) for x in xs]
    roots: list[float] = []
    for i in range(len(xs) - 1):
        y0, y1 = ys[i], ys[i + 1]
        if y0 == 0:
            roots.append(xs[i])
        elif y0 * y1 < 0:
            # linear interpolate
            t = abs(y0) / (abs(y0) + abs(y1))
            roots.append(xs[i] + t * (xs[i + 1] - xs[i]))
    # dedupe nearby
    out: list[float] = []
    for r in roots:
        if not out or abs(r - out[-1]) > 1e-3 * (xmax - xmin):
            out.append(r)
    return out


def _critical_on_interval(coeffs: list[float], xmin: float, xmax: float) -> list[float]:
    return _roots_on_interval(_deriv(coeffs), xmin, xmax)


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
    width: int = 560,
    height: int = 320,
    auto_mark_roots: bool = False,
    auto_mark_turns: bool = False,
    second: list[float] | None = None,
    second_label: str | None = None,
    vlines: list[float] | None = None,
) -> str:
    """Return a data-URI SVG of y = poly(x). coeffs are highest-degree first."""
    n = 280
    xs = [xmin + (xmax - xmin) * i / n for i in range(n + 1)]
    ys = [_poly_eval(coeffs, x) for x in xs]
    ys2 = [_poly_eval(second, x) for x in xs] if second else None
    all_y = list(ys) + (ys2 or [])
    pad_y = 0.14 * (max(all_y) - min(all_y) or 1.0)
    y0 = ymin if ymin is not None else min(all_y) - pad_y
    y1 = ymax if ymax is not None else max(all_y) + pad_y
    if y0 == y1:
        y0, y1 = y0 - 1, y1 + 1
    L, T, R, B = 56, 36, 18, 42
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
        x_axis = f'<line x1="{L}" y1="{Y(0):.1f}" x2="{width-R}" y2="{Y(0):.1f}" stroke="#c4b8a8" stroke-width="1"/>'
    y_axis = ""
    if xmin < 0 < xmax:
        y_axis = f'<line x1="{X(0):.1f}" y1="{T}" x2="{X(0):.1f}" y2="{height-B}" stroke="#c4b8a8" stroke-width="1"/>'

    ticks = []
    for k in range(5):
        xv = xmin + (xmax - xmin) * k / 4
        ticks.append(
            f'<line x1="{X(xv):.1f}" y1="{height-B}" x2="{X(xv):.1f}" y2="{height-B+5}" stroke="#7a7268"/>'
            f'<text x="{X(xv):.1f}" y="{height-B+18}" text-anchor="middle" font-size="11" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_tick(xv)}</text>'
        )
    for k in range(4):
        yv = y0 + (y1 - y0) * k / 3
        ticks.append(
            f'<line x1="{L-5}" y1="{Y(yv):.1f}" x2="{L}" y2="{Y(yv):.1f}" stroke="#7a7268"/>'
            f'<text x="{L-8}" y="{Y(yv)+4:.1f}" text-anchor="end" font-size="11" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_tick(yv)}</text>'
        )

    auto_marks: list[tuple[float, str]] = []
    if auto_mark_roots:
        for r in _roots_on_interval(coeffs, xmin, xmax):
            auto_marks.append((r, _tick(r)))
    if auto_mark_turns:
        for c in _critical_on_interval(coeffs, xmin, xmax):
            auto_marks.append((c, f"t={_tick(c)}"))

    dots = []
    for xv, lab in (marks or []) + auto_marks:
        yv = _poly_eval(coeffs, xv)
        if not (xmin - 1e-9 <= xv <= xmax + 1e-9):
            continue
        if not (y0 - 1e-6 <= yv <= y1 + 1e-6):
            continue
        dots.append(
            f'<circle cx="{X(xv):.1f}" cy="{Y(yv):.1f}" r="3.5" fill="#8B5A2B"/>'
            f'<text x="{X(xv)+6:.1f}" y="{Y(yv)-6:.1f}" font-size="11" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_esc(lab)}</text>'
        )

    guides = []
    for xv in vlines or []:
        guides.append(
            f'<line x1="{X(xv):.1f}" y1="{T}" x2="{X(xv):.1f}" y2="{height-B}" '
            f'stroke="#a89880" stroke-width="1" stroke-dasharray="4 3"/>'
        )

    second_poly = ""
    if pts2:
        second_poly = (
            f'<polyline fill="none" stroke="#2F5D50" stroke-width="2" '
            f'stroke-dasharray="6 4" points="{pts2}"/>'
        )
        if second_label:
            second_poly += (
                f'<text x="{width-R-4}" y="{T+14}" text-anchor="end" font-size="11" '
                f'font-family="Georgia,serif" fill="#2F5D50">{_esc(second_label)}</text>'
            )

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" role="img">
<rect width="{width}" height="{height}" rx="16" fill="#f8f6f2" stroke="#d9d2c5"/>
<text x="{width/2:.0f}" y="22" text-anchor="middle" font-size="14" font-family="Georgia,serif" fill="#2b2b2b">{_esc(title)}</text>
<line x1="{L}" y1="{T}" x2="{L}" y2="{height-B}" stroke="#7a7268" stroke-width="1.4"/>
<line x1="{L}" y1="{height-B}" x2="{width-R}" y2="{height-B}" stroke="#7a7268" stroke-width="1.4"/>
{x_axis}{y_axis}
{''.join(ticks)}
{''.join(guides)}
<polyline fill="none" stroke="#8B5A2B" stroke-width="2.2" points="{pts}"/>
{second_poly}
{''.join(dots)}
<text x="{width/2:.0f}" y="{height-8}" text-anchor="middle" font-size="12" font-family="Georgia,serif" fill="#2b2b2b">{_esc(xlabel)}</text>
<text x="16" y="{T+ph/2:.0f}" text-anchor="middle" font-size="12" font-family="Georgia,serif" fill="#2b2b2b" transform="rotate(-90 16 {T+ph/2:.0f})">{_esc(ylabel)}</text>
</svg>'''
    return "data:image/svg+xml;utf8," + quote(svg, safe="")


def _tick(v: float) -> str:
    if abs(v) < 1e-9:
        return "0"
    if abs(v - round(v)) < 1e-6:
        return str(int(round(v)))
    return f"{v:.1f}"


def _esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )
