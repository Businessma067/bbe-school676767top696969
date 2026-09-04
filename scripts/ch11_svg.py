"""SVG plots for Chapter 11.4 graph-interpretation tasks.

Supports arbitrary callables (not only low-degree polynomials), single panels,
and dual/triple panels drawn as one shared figure.
"""

from __future__ import annotations

from collections.abc import Callable
from urllib.parse import quote

Fn = Callable[[float], float]


def _poly_eval(coeffs: list[float], x: float) -> float:
    y = 0.0
    for c in coeffs:
        y = y * x + c
    return y


def poly(coeffs: list[float]) -> Fn:
    """Highest-degree-first polynomial as a callable."""
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


def _panel_plot(
    fn_or_coeffs: Fn | list[float],
    *,
    xmin: float,
    xmax: float,
    ymin: float,
    ymax: float,
    ox: float,
    oy: float,
    pw: float,
    ph: float,
    title: str,
    stroke: str = "#8B5A2B",
    xticks: list[float] | None = None,
    yticks: list[float] | None = None,
    mark_points: list[tuple[float, float]] | None = None,
    show_grid: bool = True,
    show_frame: bool = True,
    sample_n: int = 280,
) -> str:
    fn = _as_fn(fn_or_coeffs)

    def X(x: float) -> float:
        return ox + (x - xmin) / (xmax - xmin) * pw

    def Y(y: float) -> float:
        return oy + (ymax - y) / (ymax - ymin) * ph

    xs = [xmin + (xmax - xmin) * i / sample_n for i in range(sample_n + 1)]
    ys = [fn(x) for x in xs]
    pts = " ".join(f"{X(x):.1f},{Y(y):.1f}" for x, y in zip(xs, ys))

    clip_id = f"clip-{abs(hash((ox, oy, pw, ph, title, stroke))) % 10_000_000}"

    parts: list[str] = []
    if show_frame:
        parts.append(
            f'<rect x="{ox-34:.1f}" y="{oy-22:.1f}" width="{pw+46:.1f}" height="{ph+50:.1f}" '
            f'rx="10" fill="#f8f6f2" stroke="#d9d2c5"/>'
        )
    if title:
        parts.append(
            f'<text x="{ox+pw/2:.1f}" y="{oy-8:.1f}" text-anchor="middle" font-size="13" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_esc(title)}</text>'
        )
    parts.append(
        f'<defs><clipPath id="{clip_id}">'
        f'<rect x="{ox:.1f}" y="{oy:.1f}" width="{pw:.1f}" height="{ph:.1f}"/>'
        f"</clipPath></defs>"
    )

    xt = xticks if xticks is not None else [
        xmin + (xmax - xmin) * k / 4 for k in range(5)
    ]
    yt = yticks if yticks is not None else [
        ymin + (ymax - ymin) * k / 4 for k in range(5)
    ]

    if show_grid:
        for xv in xt:
            parts.append(
                f'<line x1="{X(xv):.1f}" y1="{oy:.1f}" x2="{X(xv):.1f}" y2="{oy+ph:.1f}" '
                f'stroke="#e8e2d8" stroke-width="1"/>'
            )
        for yv in yt:
            parts.append(
                f'<line x1="{ox:.1f}" y1="{Y(yv):.1f}" x2="{ox+pw:.1f}" y2="{Y(yv):.1f}" '
                f'stroke="#e8e2d8" stroke-width="1"/>'
            )

    if ymin < 0 < ymax:
        parts.append(
            f'<line x1="{ox:.1f}" y1="{Y(0):.1f}" x2="{ox+pw:.1f}" y2="{Y(0):.1f}" '
            f'stroke="#c4b8a8" stroke-width="1.2"/>'
        )
    if xmin < 0 < xmax:
        parts.append(
            f'<line x1="{X(0):.1f}" y1="{oy:.1f}" x2="{X(0):.1f}" y2="{oy+ph:.1f}" '
            f'stroke="#c4b8a8" stroke-width="1.2"/>'
        )

    parts.append(
        f'<line x1="{ox:.1f}" y1="{oy:.1f}" x2="{ox:.1f}" y2="{oy+ph:.1f}" '
        f'stroke="#7a7268" stroke-width="1.4"/>'
    )
    parts.append(
        f'<line x1="{ox:.1f}" y1="{oy+ph:.1f}" x2="{ox+pw:.1f}" y2="{oy+ph:.1f}" '
        f'stroke="#7a7268" stroke-width="1.4"/>'
    )

    for xv in xt:
        parts.append(
            f'<line x1="{X(xv):.1f}" y1="{oy+ph:.1f}" x2="{X(xv):.1f}" y2="{oy+ph+5:.1f}" '
            f'stroke="#7a7268"/>'
            f'<text x="{X(xv):.1f}" y="{oy+ph+16:.1f}" text-anchor="middle" font-size="10" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_tick(xv)}</text>'
        )
    for yv in yt:
        parts.append(
            f'<line x1="{ox-5:.1f}" y1="{Y(yv):.1f}" x2="{ox:.1f}" y2="{Y(yv):.1f}" '
            f'stroke="#7a7268"/>'
            f'<text x="{ox-8:.1f}" y="{Y(yv)+3.5:.1f}" text-anchor="end" font-size="10" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_tick(yv)}</text>'
        )

    parts.append(
        f'<polyline fill="none" stroke="{stroke}" stroke-width="2.3" points="{pts}" '
        f'clip-path="url(#{clip_id})"/>'
    )

    for xv, yv in mark_points or []:
        parts.append(
            f'<circle cx="{X(xv):.1f}" cy="{Y(yv):.1f}" r="3.2" fill="{stroke}"/>'
        )

    return "\n".join(parts)


def _wrap(svg_inner: str, width: int, height: int, caption: str = "") -> str:
    cap = ""
    if caption:
        cap = (
            f'<text x="{width/2:.0f}" y="18" text-anchor="middle" font-size="13" '
            f'font-family="Georgia,serif" fill="#2b2b2b">{_esc(caption)}</text>'
        )
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" role="img">
<rect width="{width}" height="{height}" rx="16" fill="#faf8f4" stroke="#d9d2c5"/>
{cap}
{svg_inner}
</svg>'''
    return "data:image/svg+xml;utf8," + quote(svg, safe="")


def svg_single(
    fn_or_coeffs: Fn | list[float],
    *,
    xmin: float,
    xmax: float,
    ymin: float,
    ymax: float,
    title: str,
    xlabel: str = "x",
    xticks: list[float] | None = None,
    yticks: list[float] | None = None,
    mark_points: list[tuple[float, float]] | None = None,
    width: int = 560,
    height: int = 340,
) -> str:
    L, T, R, B = 48, 40, 20, 40
    pw, ph = width - L - R, height - T - B
    body = _panel_plot(
        fn_or_coeffs,
        xmin=xmin,
        xmax=xmax,
        ymin=ymin,
        ymax=ymax,
        ox=L,
        oy=T,
        pw=pw,
        ph=ph,
        title=title,
        xticks=xticks,
        yticks=yticks,
        mark_points=mark_points,
    )
    body += (
        f'\n<text x="{width/2:.0f}" y="{height-8}" text-anchor="middle" font-size="12" '
        f'font-family="Georgia,serif" fill="#2b2b2b">{_esc(xlabel)}</text>'
    )
    return _wrap(body, width, height)


def svg_dual(
    left: dict,
    right: dict,
    *,
    caption: str = "",
    width: int = 900,
    height: int = 340,
) -> str:
    """Two graphs side-by-side in one figure. Each dict: fn/coeffs + axis bounds + title."""
    gap = 28
    margin = 18
    usable = width - 2 * margin - gap
    pw = usable / 2
    ph = height - 78
    oy = 40
    bodies = []
    for i, p in enumerate((left, right)):
        ox = margin + 34 + i * (pw + gap)
        bodies.append(
            _panel_plot(
                p["fn"],
                xmin=p["xmin"],
                xmax=p["xmax"],
                ymin=p["ymin"],
                ymax=p["ymax"],
                ox=ox,
                oy=oy,
                pw=pw - 42,
                ph=ph,
                title=p["title"],
                xticks=p.get("xticks"),
                yticks=p.get("yticks"),
                mark_points=p.get("mark_points"),
                stroke=p.get("stroke", "#8B5A2B" if i == 0 else "#2F5D50"),
            )
        )
    return _wrap("".join(bodies), width, height, caption=caption)


def svg_triple(
    panels: list[dict],
    *,
    caption: str = "Graphs A, B, C in one figure (unlabeled roles)",
    width: int = 960,
    height: int = 340,
) -> str:
    """Three graphs in one figure. panels: list of dicts with fn + bounds + title."""
    assert len(panels) == 3
    gap = 16
    margin = 14
    usable = width - 2 * margin - 2 * gap
    pw = usable / 3
    ph = height - 78
    oy = 40
    strokes = ["#8B5A2B", "#2F5D50", "#5C4A2E"]
    bodies = []
    for i, p in enumerate(panels):
        ox = margin + 32 + i * (pw + gap)
        bodies.append(
            _panel_plot(
                p["fn"],
                xmin=p["xmin"],
                xmax=p["xmax"],
                ymin=p["ymin"],
                ymax=p["ymax"],
                ox=ox,
                oy=oy,
                pw=pw - 40,
                ph=ph,
                title=p["title"],
                xticks=p.get("xticks"),
                yticks=p.get("yticks"),
                mark_points=p.get("mark_points"),
                stroke=p.get("stroke", strokes[i]),
            )
        )
    return _wrap("".join(bodies), width, height, caption=caption)
