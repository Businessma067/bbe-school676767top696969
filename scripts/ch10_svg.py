#!/usr/bin/env python3
"""SVG helpers for Chapter 10 exponential / logarithmic graph stems."""

from __future__ import annotations

import math
from typing import Callable, Sequence
from urllib.parse import quote


def _esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def _tick(v: float) -> str:
    """Human-readable axis label: integers when possible, else short decimals."""
    if abs(v) < 1e-12:
        return "0"
    av = abs(v)
    # Large magnitudes: prefer whole numbers (2000, 2200, …) never 2121.11
    if av >= 100:
        return str(int(round(v)))
    if abs(v - round(v)) < 1e-6:
        return str(int(round(v)))
    if av >= 10:
        return f"{v:.1f}".rstrip("0").rstrip(".")
    if abs(10 * v - round(10 * v)) < 1e-6:
        return f"{v:.1f}"
    if abs(100 * v - round(100 * v)) < 1e-6:
        return f"{v:.2f}"
    return f"{v:.2g}"


def _nice_num(x: float, round_step: bool) -> float:
    """Classic 'nice number' helper (Wilkinson / graphics pipeline)."""
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


def _nice_ticks(lo: float, hi: float, target: int = 5) -> list[float]:
    """Even, round tick marks on [lo, hi] — never 2121.11-style junk."""
    if not math.isfinite(lo) or not math.isfinite(hi) or hi <= lo:
        return [lo if math.isfinite(lo) else 0.0]
    # Expand a hair so edge data aren't clipped off the outer ticks
    raw_span = hi - lo
    nice_span = _nice_num(raw_span, round_step=False)
    step = _nice_num(nice_span / max(target - 1, 1), round_step=True)
    if step <= 0:
        step = raw_span / max(target - 1, 1)
    # Snap range to step grid
    nice_lo = math.floor(lo / step) * step
    nice_hi = math.ceil(hi / step) * step
    ticks: list[float] = []
    # Guard against float drift
    n_steps = int(round((nice_hi - nice_lo) / step))
    for i in range(n_steps + 1):
        v = nice_lo + i * step
        if lo - 0.25 * step <= v <= hi + 0.25 * step:
            # Clean binary float noise (e.g. 1999.999999 → 2000)
            if abs(v - round(v)) < 1e-9 * max(1.0, abs(v)):
                v = float(round(v))
            ticks.append(v)
    return ticks or [lo, hi]


def _data_uri(svg: str) -> str:
    return "data:image/svg+xml;utf8," + quote(svg, safe="")


def svg_curves(
    curves: Sequence,
    *,
    xmin: float,
    xmax: float,
    title: str,
    xlabel: str = "t",
    ylabel: str = "y",
    ymin: float | None = None,
    ymax: float | None = None,
    marks: Sequence | None = None,
    vlines: Sequence[float] | None = None,
    hlines: Sequence[float] | None = None,
    y_transform: Callable[[float], float] | None = None,
    width: int = 720,
    height: int = 420,
    n: int = 320,
) -> str:
    """Plot one or more y=f(x) curves.

    Accepts either tuples (fn, color, label) or dicts with keys
    fn/color/label and optional dash.
    """
    xs = [xmin + (xmax - xmin) * i / n for i in range(n + 1)]
    series: list[tuple[list[float], str, str, str]] = []
    all_y: list[float] = []
    for item in curves:
        dash = ""
        if isinstance(item, dict):
            fn = item["fn"]
            color = item.get("color", "#8B5A2B")
            label = item.get("label", "")
            dash = item.get("dash", "") or ""
        else:
            fn, color, label = item[0], item[1], item[2]
            if len(item) > 3:
                dash = item[3] or ""
        ys_raw = [fn(x) for x in xs]
        ys = [y_transform(y) if y_transform else y for y in ys_raw]
        series.append((ys, color, label, dash))
        all_y.extend(y for y in ys if y is not None and math.isfinite(y))

    if not all_y:
        all_y = [0.0, 1.0]
    y0 = ymin if ymin is not None else min(all_y)
    y1 = ymax if ymax is not None else max(all_y)
    if y1 <= y0:
        y1 = y0 + 1.0
    pad = 0.08 * (y1 - y0)
    y0 -= pad
    y1 += pad
    # Snap the vertical window onto the outer nice ticks so labels sit on-frame
    y_ticks_preview = _nice_ticks(y0, y1, target=5)
    if len(y_ticks_preview) >= 2:
        y0 = min(y0, y_ticks_preview[0])
        y1 = max(y1, y_ticks_preview[-1])

    L, R, T, B = 76, 28, 48, 52
    pw, ph = width - L - R, height - T - B

    def sx(x: float) -> float:
        return L + (x - xmin) / (xmax - xmin) * pw

    def sy(y: float) -> float:
        return T + (y1 - y) / (y1 - y0) * ph

    parts: list[str] = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">',
        '<rect width="100%" height="100%" fill="#f7f3ea"/>',
        f'<text x="{width / 2}" y="28" text-anchor="middle" font-size="17" font-weight="700" font-family="Georgia,serif" fill="#1a1a1a">{_esc(title)}</text>',
        f'<line x1="{L}" y1="{T}" x2="{L}" y2="{T + ph}" stroke="#333" stroke-width="1.5"/>',
        f'<line x1="{L}" y1="{T + ph}" x2="{L + pw}" y2="{T + ph}" stroke="#333" stroke-width="1.5"/>',
    ]

    for tick in _nice_ticks(xmin, xmax, target=6):
        x = sx(tick)
        parts.append(f'<line x1="{x:.1f}" y1="{T + ph}" x2="{x:.1f}" y2="{T + ph + 6}" stroke="#333"/>')
        parts.append(
            f'<text x="{x:.1f}" y="{T + ph + 20}" text-anchor="middle" font-size="12" font-family="Georgia,serif" fill="#333">{_tick(tick)}</text>'
        )
    for tick in _nice_ticks(y0, y1, target=5):
        y = sy(tick)
        if not (T - 2 <= y <= T + ph + 2):
            continue
        # faint horizontal grid
        parts.append(
            f'<line x1="{L}" y1="{y:.1f}" x2="{L + pw}" y2="{y:.1f}" stroke="#ddd" stroke-width="1"/>'
        )
        parts.append(f'<line x1="{L - 6}" y1="{y:.1f}" x2="{L}" y2="{y:.1f}" stroke="#333"/>')
        parts.append(
            f'<text x="{L - 10}" y="{y:.1f}" text-anchor="end" dominant-baseline="middle" font-size="12" font-family="Georgia,serif" fill="#333">{_tick(tick)}</text>'
        )

    if vlines:
        for xv in vlines:
            if xmin <= xv <= xmax:
                x = sx(xv)
                parts.append(
                    f'<line x1="{x:.1f}" y1="{T}" x2="{x:.1f}" y2="{T + ph}" stroke="#888" stroke-dasharray="4 4"/>'
                )
    if hlines:
        for yv in hlines:
            yy = y_transform(yv) if y_transform else yv
            if y0 <= yy <= y1:
                y = sy(yy)
                parts.append(
                    f'<line x1="{L}" y1="{y:.1f}" x2="{L + pw}" y2="{y:.1f}" stroke="#888" stroke-dasharray="4 4"/>'
                )

    legend_y = T + 8
    for ys, color, label, dash in series:
        pts = " ".join(f"{sx(x):.1f},{sy(y):.1f}" for x, y in zip(xs, ys) if math.isfinite(y))
        dash_attr = f' stroke-dasharray="{dash}"' if dash else ""
        parts.append(
            f'<polyline fill="none" stroke="{color}" stroke-width="2.5"{dash_attr} points="{pts}"/>'
        )
        if label:
            parts.append(
                f'<text x="{L + pw - 8}" y="{legend_y}" text-anchor="end" font-size="12" font-family="Georgia,serif" fill="{color}">{_esc(label)}</text>'
            )
            legend_y += 16

    if marks:
        for mark in marks:
            if isinstance(mark, dict):
                mx, my, lab = mark["x"], mark["y"], mark.get("label", "")
            else:
                mx, my, lab = mark[0], mark[1], mark[2] if len(mark) > 2 else ""
            my_plot = y_transform(my) if y_transform else my
            if not (math.isfinite(mx) and math.isfinite(my_plot)):
                continue
            if not (xmin <= mx <= xmax and y0 <= my_plot <= y1):
                continue
            parts.append(
                f'<circle cx="{sx(mx):.1f}" cy="{sy(my_plot):.1f}" r="4.5" fill="#1a1a1a"/>'
            )
            if lab:
                parts.append(
                    f'<text x="{sx(mx) + 8:.1f}" y="{sy(my_plot) - 8:.1f}" font-size="12" font-family="Georgia,serif" fill="#1a1a1a">{_esc(lab)}</text>'
                )

    parts.append(
        f'<text x="{width / 2}" y="{height - 12}" text-anchor="middle" font-size="15" font-weight="600" font-family="Georgia,serif" fill="#1a1a1a">{_esc(xlabel)}</text>'
    )
    parts.append(
        f'<text x="18" y="{T + ph / 2:.0f}" text-anchor="middle" font-size="15" font-weight="600" font-family="Georgia,serif" fill="#1a1a1a" transform="rotate(-90 18 {T + ph / 2:.0f})">{_esc(ylabel)}</text>'
    )
    parts.append("</svg>")
    return _data_uri("".join(parts))


def svg_exp(
    *,
    P0: float,
    k: float,
    tmax: float,
    title: str,
    discrete_r: float | None = None,
    mark_t: float | None = None,
    ylabel: str = "level",
) -> str:
    curves = [(lambda t, P0=P0, k=k: P0 * math.exp(k * t), "#8B5A2B", "continuous")]
    if discrete_r is not None:
        curves.append(
            (
                lambda t, P0=P0, r=discrete_r: P0 * ((1 + r) ** t),
                "#2F5D50",
                f"discrete (1+{discrete_r:g})^t",
                "6 4",
            )
        )
    marks = []
    if mark_t is not None and 0 <= mark_t <= tmax:
        marks.append((mark_t, P0 * math.exp(k * mark_t), f"t={_tick(mark_t)}"))
    return svg_curves(
        curves,
        xmin=0,
        xmax=tmax,
        title=title,
        ylabel=ylabel,
        marks=marks,
        vlines=[mark_t] if mark_t is not None else None,
    )


def svg_log(
    *,
    base: float,
    xmin: float,
    xmax: float,
    title: str,
    mark_x: float | None = None,
) -> str:
    def f(x: float, b=base) -> float:
        return math.log(x) / math.log(b)

    marks = [(1.0, 0.0, ""), (base, 1.0, f"base={_tick(base)}")]
    if mark_x is not None and mark_x > 0:
        marks.append((mark_x, f(mark_x), f"x={_tick(mark_x)}"))
    return svg_curves(
        [(f, "#8B5A2B", f"log_{_tick(base)}")],
        xmin=xmin,
        xmax=xmax,
        title=title,
        xlabel="x",
        ylabel="f(x)",
        marks=marks,
        vlines=[1.0],
        hlines=[0.0],
    )


def svg_piecewise_exp(
    *,
    P0: float,
    k1: float,
    k2: float,
    t_switch: float,
    tmax: float,
    title: str,
) -> str:
    def f(t: float, P0=P0, k1=k1, T=t_switch, k2=k2) -> float:
        if t <= T:
            return P0 * math.exp(k1 * t)
        return P0 * math.exp(k1 * T) * math.exp(k2 * (t - T))

    return svg_curves(
        [(f, "#8B5A2B", "")],
        xmin=0,
        xmax=tmax,
        title=title,
        ylabel="level",
        vlines=[t_switch],
        marks=[(t_switch, f(t_switch), "switch"), (tmax, f(tmax), "")],
    )


def exp_growth(P0: float, k: float, tmax: float, title: str, ylabel: str = "level") -> str:
    return svg_exp(P0=P0, k=k, tmax=tmax, title=title, ylabel=ylabel)


def exp_decay(m0: float, k: float, tmax: float, title: str) -> str:
    return svg_exp(P0=m0, k=-k, tmax=tmax, title=title, ylabel="mass")


def two_models(P: float, k: float, a: float, tmax: float, title: str) -> str:
    return svg_exp(P0=P, k=k, tmax=tmax, title=title, discrete_r=a - 1 if a > 1 else None)


def piecewise_kink(P0: float, k1: float, T: float, k2: float, tmax: float, title: str) -> str:
    return svg_piecewise_exp(P0=P0, k1=k1, k2=k2, t_switch=T, tmax=tmax, title=title)


def gdp_per_capita(Y0: float, g: float, N0: float, p: float, tmax: float, title: str) -> str:
    y0 = Y0 / N0
    k = g - p
    return svg_curves(
        [
            (lambda t, Y0=Y0, g=g: Y0 * math.exp(g * t) / 1000, "#2F5D50", "GDP/1000"),
            (lambda t, y0=y0, k=k: y0 * math.exp(k * t), "#8B5A2B", "per capita"),
        ],
        xmin=0,
        xmax=tmax,
        title=title,
        ylabel="index",
    )


def log_curve(b: float, xmin: float, xmax: float, title: str) -> str:
    return svg_log(base=b, xmin=xmin, xmax=xmax, title=title)


def semi_log_exp(P0: float, k: float, tmax: float, title: str) -> str:
    return svg_curves(
        [(lambda t, P0=P0, k=k: P0 * math.exp(k * t), "#8B5A2B", "ln scale")],
        xmin=0,
        xmax=tmax,
        title=title,
        ylabel="ln(level)",
        y_transform=math.log,
    )


def competing_populations(
    A0: float, kA: float, B0: float, kB: float, tmax: float, title: str
) -> str:
    return svg_curves(
        [
            (lambda t, A0=A0, kA=kA: A0 * math.exp(kA * t), "#8B5A2B", "A"),
            (lambda t, B0=B0, kB=kB: B0 * math.exp(kB * t), "#2F5D50", "B"),
        ],
        xmin=0,
        xmax=tmax,
        title=title,
        ylabel="population",
    )
