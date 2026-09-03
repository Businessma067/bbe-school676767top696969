"""Accurate SVG plots of polynomials for Chapter 9 stems."""

from __future__ import annotations

from urllib.parse import quote


def _poly_eval(coeffs: list[float], x: float) -> float:
    y = 0.0
    for c in coeffs:
        y = y * x + c
    return y


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
) -> str:
    """Return a data-URI SVG of y = poly(x). coeffs are highest-degree first."""
    n = 240
    xs = [xmin + (xmax - xmin) * i / n for i in range(n + 1)]
    ys = [_poly_eval(coeffs, x) for x in xs]
    pad_y = 0.12 * (max(ys) - min(ys) or 1.0)
    y0 = ymin if ymin is not None else min(ys) - pad_y
    y1 = ymax if ymax is not None else max(ys) + pad_y
    if y0 == y1:
        y0, y1 = y0 - 1, y1 + 1
    L, T, R, B = 56, 36, 18, 42
    pw, ph = width - L - R, height - T - B

    def X(x: float) -> float:
        return L + (x - xmin) / (xmax - xmin) * pw

    def Y(y: float) -> float:
        return T + (y1 - y) / (y1 - y0) * ph

    pts = " ".join(f"{X(x):.1f},{Y(y):.1f}" for x, y in zip(xs, ys))
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

    dots = []
    for xv, lab in marks or []:
        yv = _poly_eval(coeffs, xv)
        dots.append(
            f'<circle cx="{X(xv):.1f}" cy="{Y(yv):.1f}" r="3.5" fill="#8B5A2B"/>'
            f'<text x="{X(xv)+6:.1f}" y="{Y(yv)-6:.1f}" font-size="11" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{lab}</text>'
        )

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" role="img">
<rect width="{width}" height="{height}" rx="16" fill="#f8f6f2" stroke="#d9d2c5"/>
<text x="{width/2:.0f}" y="22" text-anchor="middle" font-size="14" font-family="Georgia,serif" fill="#2b2b2b">{_esc(title)}</text>
<line x1="{L}" y1="{T}" x2="{L}" y2="{height-B}" stroke="#7a7268" stroke-width="1.4"/>
<line x1="{L}" y1="{height-B}" x2="{width-R}" y2="{height-B}" stroke="#7a7268" stroke-width="1.4"/>
{x_axis}{y_axis}
{''.join(ticks)}
<polyline fill="none" stroke="#8B5A2B" stroke-width="2.2" points="{pts}"/>
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
