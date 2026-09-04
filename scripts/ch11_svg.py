"""SVG plots for Chapter 11.4 — one shared coordinate plane for 1–3 curves."""

from __future__ import annotations

from collections.abc import Callable
from urllib.parse import quote

Fn = Callable[[float], float]

STROKES = ["#8B5A2B", "#2F5D50", "#6B3FA0"]


def _poly_eval(coeffs: list[float], x: float) -> float:
    y = 0.0
    for c in coeffs:
        y = y * x + c
    return y


def poly(coeffs: list[float]) -> Fn:
    return lambda x, c=coeffs: _poly_eval(c, x)


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


def _as_fn(fn_or_coeffs: Fn | list[float]) -> Fn:
    if callable(fn_or_coeffs):
        return fn_or_coeffs  # type: ignore[return-value]
    return poly(fn_or_coeffs)  # type: ignore[arg-type]


def svg_plane(
    curves: list[dict],
    *,
    xmin: float,
    xmax: float,
    ymin: float,
    ymax: float,
    title: str,
    xlabel: str = "x",
    xticks: list[float] | None = None,
    yticks: list[float] | None = None,
    mark_points: list[tuple[float, float, str]] | None = None,
    width: int = 640,
    height: int = 400,
    sample_n: int = 320,
) -> str:
    """Plot one or more curves on a single shared coordinate plane.

    Each curve dict: {fn|coeffs, label, optional stroke}.
    Optional mark_points: (x, y, stroke_or_color).
    """
    assert 1 <= len(curves) <= 3
    L, T, R, B = 52, 44, 24, 56
    # room for legend on the right if multiple curves
    legend_w = 110 if len(curves) > 1 else 0
    pw = width - L - R - legend_w
    ph = height - T - B

    def X(x: float) -> float:
        return L + (x - xmin) / (xmax - xmin) * pw

    def Y(y: float) -> float:
        return T + (ymax - y) / (ymax - ymin) * ph

    xt = xticks if xticks is not None else [
        xmin + (xmax - xmin) * k / 4 for k in range(5)
    ]
    yt = yticks if yticks is not None else [
        ymin + (ymax - ymin) * k / 4 for k in range(5)
    ]

    clip_id = f"clip-{abs(hash((title, xmin, xmax, ymin, ymax))) % 10_000_000}"
    parts: list[str] = []
    parts.append(
        f'<rect width="{width}" height="{height}" rx="16" fill="#faf8f4" stroke="#d9d2c5"/>'
    )
    parts.append(
        f'<text x="{(L+L+pw)/2:.0f}" y="26" text-anchor="middle" font-size="14" '
        f'font-family="Georgia,serif" fill="#2b2b2b">{_esc(title)}</text>'
    )
    parts.append(
        f'<defs><clipPath id="{clip_id}">'
        f'<rect x="{L}" y="{T}" width="{pw}" height="{ph}"/>'
        f"</clipPath></defs>"
    )

    # grid
    for xv in xt:
        parts.append(
            f'<line x1="{X(xv):.1f}" y1="{T}" x2="{X(xv):.1f}" y2="{T+ph}" '
            f'stroke="#e8e2d8" stroke-width="1"/>'
        )
    for yv in yt:
        parts.append(
            f'<line x1="{L}" y1="{Y(yv):.1f}" x2="{L+pw}" y2="{Y(yv):.1f}" '
            f'stroke="#e8e2d8" stroke-width="1"/>'
        )

    if ymin < 0 < ymax:
        parts.append(
            f'<line x1="{L}" y1="{Y(0):.1f}" x2="{L+pw}" y2="{Y(0):.1f}" '
            f'stroke="#c4b8a8" stroke-width="1.3"/>'
        )
    if xmin < 0 < xmax:
        parts.append(
            f'<line x1="{X(0):.1f}" y1="{T}" x2="{X(0):.1f}" y2="{T+ph}" '
            f'stroke="#c4b8a8" stroke-width="1.3"/>'
        )

    parts.append(
        f'<line x1="{L}" y1="{T}" x2="{L}" y2="{T+ph}" stroke="#7a7268" stroke-width="1.5"/>'
    )
    parts.append(
        f'<line x1="{L}" y1="{T+ph}" x2="{L+pw}" y2="{T+ph}" stroke="#7a7268" stroke-width="1.5"/>'
    )

    for xv in xt:
        parts.append(
            f'<line x1="{X(xv):.1f}" y1="{T+ph}" x2="{X(xv):.1f}" y2="{T+ph+5}" stroke="#7a7268"/>'
            f'<text x="{X(xv):.1f}" y="{T+ph+18}" text-anchor="middle" font-size="11" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_tick(xv)}</text>'
        )
    for yv in yt:
        parts.append(
            f'<line x1="{L-5}" y1="{Y(yv):.1f}" x2="{L}" y2="{Y(yv):.1f}" stroke="#7a7268"/>'
            f'<text x="{L-8}" y="{Y(yv)+4:.1f}" text-anchor="end" font-size="11" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_tick(yv)}</text>'
        )

    for i, c in enumerate(curves):
        fn = _as_fn(c["fn"] if "fn" in c else c["coeffs"])
        stroke = c.get("stroke", STROKES[i % len(STROKES)])
        xs = [xmin + (xmax - xmin) * j / sample_n for j in range(sample_n + 1)]
        pts = " ".join(f"{X(x):.1f},{Y(fn(x)):.1f}" for x in xs)
        parts.append(
            f'<polyline fill="none" stroke="{stroke}" stroke-width="2.4" points="{pts}" '
            f'clip-path="url(#{clip_id})"/>'
        )

    for xv, yv, col in mark_points or []:
        parts.append(
            f'<circle cx="{X(xv):.1f}" cy="{Y(yv):.1f}" r="3.4" fill="{col}"/>'
        )

    # legend
    if len(curves) > 1:
        lx = L + pw + 14
        ly = T + 8
        parts.append(
            f'<rect x="{lx-6}" y="{ly-6}" width="{legend_w-4}" height="{18*len(curves)+14}" '
            f'rx="8" fill="#f8f6f2" stroke="#d9d2c5"/>'
        )
        for i, c in enumerate(curves):
            stroke = c.get("stroke", STROKES[i % len(STROKES)])
            yy = ly + 12 + i * 18
            parts.append(
                f'<line x1="{lx}" y1="{yy}" x2="{lx+18}" y2="{yy}" '
                f'stroke="{stroke}" stroke-width="2.6"/>'
                f'<text x="{lx+24}" y="{yy+4}" font-size="12" '
                f'font-family="Georgia,serif" fill="#2b2b2b">{_esc(c["label"])}</text>'
            )

    parts.append(
        f'<text x="{(L+L+pw)/2:.0f}" y="{height-12}" text-anchor="middle" font-size="12" '
        f'font-family="Georgia,serif" fill="#2b2b2b">{_esc(xlabel)}</text>'
    )

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
        f'width="{width}" height="{height}" role="img">\n'
        + "\n".join(parts)
        + "\n</svg>"
    )
    return "data:image/svg+xml;utf8," + quote(svg, safe="")


# Back-compat aliases used by older scripts
def svg_single(fn_or_coeffs, **kw):
    title = kw.pop("title", "")
    mark = kw.pop("mark_points", None)
    marks = None
    if mark:
        marks = [(x, y, "#8B5A2B") for x, y in mark]
    return svg_plane(
        [{"fn": fn_or_coeffs, "label": "y"}],
        title=title,
        mark_points=marks,
        **{k: v for k, v in kw.items() if k in {
            "xmin", "xmax", "ymin", "ymax", "xlabel", "xticks", "yticks", "width", "height"
        }},
    )
