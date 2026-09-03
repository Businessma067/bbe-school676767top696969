#!/usr/bin/env python3
"""Shared machinery for the Chapter 9 (polynomial functions) practice bank.

Three layers live here:

*   ``Pol`` — exact rational polynomials with a LaTeX printer that keeps the
    author's chosen number style (``0.00002`` stays a decimal, ``1/3`` stays a
    fraction).
*   ``plot`` — an SVG plotter that samples a real ``Pol`` and returns a
    ``data:image/svg+xml`` URI, so every graph stem is drawn from the very
    polynomial the statements talk about.
*   a claim library — each ``claim_*`` helper decides the truth value itself
    from the polynomial and writes the Chapter 4 style explanation around that
    computation, so a statement and its explanation can never disagree.

Chapter 4 voice, reproduced for every letter:

    **A.** → True

    <narrative opener naming the idea and restating the claim in words>

    $$one step, one display, always a single line$$

    <connecting prose>

    $$next step$$

    <closing clause>, so the statement is True.
"""

from __future__ import annotations

import math
import re
from dataclasses import dataclass, field
from fractions import Fraction as Fr
from urllib.parse import quote

# --------------------------------------------------------------------------- #
# Numbers
# --------------------------------------------------------------------------- #

Num = int | Fr | float


def fr(v: Num) -> Fr:
    if isinstance(v, Fr):
        return v
    if isinstance(v, float):
        return Fr(str(v))
    return Fr(v)


def _decimal_str(v: Fr) -> str | None:
    """Terminating decimal with at most six places, or None."""
    for k in range(1, 7):
        scaled = v * 10**k
        if scaled.denominator == 1:
            digits = str(abs(scaled.numerator)).rjust(k + 1, "0")
            body = f"{digits[:-k]}.{digits[-k:]}".rstrip("0").rstrip(".")
            return ("-" if v < 0 else "") + body
    return None


def numstr(v: Num, *, dec: bool = False) -> str:
    """LaTeX for one rational constant."""
    v = fr(v)
    if v.denominator == 1:
        return str(v.numerator)
    if dec:
        d = _decimal_str(v)
        if d is not None:
            return d
    sign = "-" if v < 0 else ""
    a = abs(v)
    return f"{sign}\\frac{{{a.numerator}}}{{{a.denominator}}}"


def par(v: Num, *, dec: bool = False) -> str:
    """A constant wrapped in brackets whenever a product would look ambiguous."""
    s = numstr(v, dec=dec)
    return s if fr(v) >= 0 and "\\frac" not in s else f"\\left({s}\\right)"


def approx(x: float, places: int = 2) -> str:
    """A rounded decimal for prose, without a trailing cloud of zeros."""
    s = f"{x:.{places}f}".rstrip("0").rstrip(".")
    return s if s not in ("", "-") else "0"


def is_int(v: Num) -> bool:
    return fr(v).denominator == 1


# --------------------------------------------------------------------------- #
# Polynomials
# --------------------------------------------------------------------------- #


@dataclass(frozen=True)
class Pol:
    """A polynomial with exact rational coefficients, ascending in ``coeffs``."""

    coeffs: tuple[Fr, ...]
    var: str = "x"
    dec: bool = False

    @staticmethod
    def of(*ascending: Num, var: str = "x", dec: bool = False) -> "Pol":
        return Pol(tuple(fr(c) for c in ascending), var, dec).trim()

    @staticmethod
    def desc(*descending: Num, var: str = "x", dec: bool = False) -> "Pol":
        return Pol.of(*reversed(descending), var=var, dec=dec)

    @staticmethod
    def from_roots(roots: list[Num], lead: Num = 1, *, var: str = "x", dec: bool = False) -> "Pol":
        out = Pol.of(lead, var=var, dec=dec)
        for r in roots:
            out = out * Pol.of(-fr(r), 1, var=var, dec=dec)
        return out

    def trim(self) -> "Pol":
        cs = list(self.coeffs)
        while len(cs) > 1 and cs[-1] == 0:
            cs.pop()
        return Pol(tuple(cs), self.var, self.dec)

    # -- structure ---------------------------------------------------------- #

    @property
    def degree(self) -> int:
        return len(self.trim().coeffs) - 1

    @property
    def lead(self) -> Fr:
        return self.trim().coeffs[-1]

    @property
    def const(self) -> Fr:
        return self.coeffs[0]

    def coeff(self, k: int) -> Fr:
        return self.coeffs[k] if 0 <= k < len(self.coeffs) else Fr(0)

    def is_zero(self) -> bool:
        return all(c == 0 for c in self.coeffs)

    # -- algebra ------------------------------------------------------------ #

    def __add__(self, other: "Pol | Num") -> "Pol":
        o = other if isinstance(other, Pol) else Pol.of(other, var=self.var, dec=self.dec)
        n = max(len(self.coeffs), len(o.coeffs))
        return Pol(
            tuple(self.coeff(i) + o.coeff(i) for i in range(n)), self.var, self.dec or o.dec
        ).trim()

    def __neg__(self) -> "Pol":
        return Pol(tuple(-c for c in self.coeffs), self.var, self.dec)

    def __sub__(self, other: "Pol | Num") -> "Pol":
        o = other if isinstance(other, Pol) else Pol.of(other, var=self.var, dec=self.dec)
        return self + (-o)

    def __mul__(self, other: "Pol | Num") -> "Pol":
        if not isinstance(other, Pol):
            return Pol(tuple(c * fr(other) for c in self.coeffs), self.var, self.dec).trim()
        out = [Fr(0)] * (len(self.coeffs) + len(other.coeffs) - 1)
        for i, a in enumerate(self.coeffs):
            for j, b in enumerate(other.coeffs):
                out[i + j] += a * b
        return Pol(tuple(out), self.var, self.dec or other.dec).trim()

    __rmul__ = __mul__

    def __pow__(self, k: int) -> "Pol":
        out = Pol.of(1, var=self.var, dec=self.dec)
        for _ in range(k):
            out = out * self
        return out

    def at(self, x: Num) -> Fr:
        x = fr(x)
        total = Fr(0)
        for c in reversed(self.coeffs):
            total = total * x + c
        return total

    def atf(self, x: float) -> float:
        total = 0.0
        for c in reversed(self.coeffs):
            total = total * x + float(c)
        return total

    def deriv(self) -> "Pol":
        if self.degree == 0:
            return Pol.of(0, var=self.var, dec=self.dec)
        return Pol(
            tuple(c * k for k, c in enumerate(self.coeffs) if k >= 1), self.var, self.dec
        ).trim()

    def compose(self, other: "Pol") -> "Pol":
        out = Pol.of(0, var=self.var, dec=self.dec)
        for k, c in reversed(list(enumerate(self.coeffs))):
            out = out * other + Pol.of(c, var=self.var, dec=self.dec)
        return out

    def divmod_linear(self, r: Num) -> tuple["Pol", Fr]:
        """Synthetic division by ``(x - r)``: quotient and remainder."""
        r = fr(r)
        cs = list(reversed(self.coeffs))
        out = [cs[0]]
        for c in cs[1:]:
            out.append(out[-1] * r + c)
        rem = out.pop()
        return Pol(tuple(reversed(out)), self.var, self.dec).trim(), rem

    # -- roots -------------------------------------------------------------- #

    def rational_roots(self) -> list[Fr]:
        """All rational roots, each listed once, in increasing order."""
        p = self.trim()
        if p.is_zero():
            return []
        scale = 1
        for c in p.coeffs:
            scale = scale * c.denominator // math.gcd(scale, c.denominator)
        ints = [int(c * scale) for c in p.coeffs]
        while ints and ints[0] == 0:
            ints.pop(0)
        if not ints:
            return [Fr(0)] + [r for r in Pol(p.coeffs[1:], p.var).rational_roots()]
        a0, an = abs(ints[0]), abs(ints[-1])
        cands: set[Fr] = set()
        for num in range(1, a0 + 1):
            if a0 % num:
                continue
            for den in range(1, an + 1):
                if an % den:
                    continue
                cands.add(Fr(num, den))
                cands.add(Fr(-num, den))
        if p.const == 0:
            cands.add(Fr(0))
        return sorted(r for r in cands if p.at(r) == 0)

    def real_roots(self, lo: float = -50.0, hi: float = 50.0, steps: int = 200_000) -> list[float]:
        """Distinct real roots in ``[lo, hi]`` found by sign change plus bisection."""
        found: list[float] = []
        step = (hi - lo) / steps
        prev_x = lo
        prev = self.atf(lo)
        if abs(prev) < 1e-12:
            found.append(lo)
        for i in range(1, steps + 1):
            x = lo + i * step
            cur = self.atf(x)
            if prev == 0.0:
                pass
            elif cur == 0.0:
                found.append(x)
            elif prev * cur < 0:
                a, b = prev_x, x
                for _ in range(80):
                    m = 0.5 * (a + b)
                    if self.atf(a) * self.atf(m) <= 0:
                        b = m
                    else:
                        a = m
                found.append(0.5 * (a + b))
            prev_x, prev = x, cur
        out: list[float] = []
        for r in sorted(found):
            if not out or abs(r - out[-1]) > 1e-6:
                out.append(r)
        return out

    def sign_change_roots(self) -> list[float]:
        """Real roots where the polynomial actually changes sign."""
        return [r for r in self.real_roots() if self._changes_sign(r)]

    def _changes_sign(self, r: float, h: float = 1e-4) -> bool:
        return self.atf(r - h) * self.atf(r + h) < 0

    def turning_points(self) -> list[float]:
        """Abscissas where the derivative changes sign (genuine peaks/valleys)."""
        return self.deriv().sign_change_roots()

    # -- printing ----------------------------------------------------------- #

    def latex(self, *, var: str | None = None) -> str:
        v = var or self.var
        p = self.trim()
        if p.is_zero():
            return "0"
        parts: list[str] = []
        for k in range(p.degree, -1, -1):
            c = p.coeff(k)
            if c == 0:
                continue
            body = "" if k == 0 else (v if k == 1 else f"{v}^{{{k}}}")
            mag = numstr(abs(c), dec=p.dec)
            if k > 0 and abs(c) == 1:
                mag = ""
            sign = "-" if c < 0 else "+"
            term = f"{mag}{body}" if body else mag
            if not parts:
                parts.append(("-" if c < 0 else "") + term)
            else:
                parts.append(f" {sign} {term}")
        return "".join(parts)

    def eq(self, name: str = "P", *, arg: str | None = None) -> str:
        a = arg or self.var
        return f"{name}({a})={self.latex()}"

    def factored(self, roots: list[Num], *, name: str | None = None) -> str:
        """LaTeX for the product form implied by ``roots`` (verified by caller)."""
        pieces = []
        if self.lead != 1:
            pieces.append(par(self.lead, dec=self.dec))
        for r in roots:
            r = fr(r)
            if r == 0:
                pieces.append(self.var)
            elif r > 0:
                pieces.append(f"\\left({self.var}-{numstr(r, dec=self.dec)}\\right)")
            else:
                pieces.append(f"\\left({self.var}+{numstr(-r, dec=self.dec)}\\right)")
        body = "".join(pieces) if pieces else "1"
        return f"{name}={body}" if name else body

    def subst(self, x: Num) -> str:
        """The substitution line, e.g. ``2\\cdot 3^{3}-3^{2}+4``."""
        p = self.trim()
        xs = par(x, dec=p.dec)
        parts: list[str] = []
        for k in range(p.degree, -1, -1):
            c = p.coeff(k)
            if c == 0:
                continue
            body = "" if k == 0 else (xs if k == 1 else f"{xs}^{{{k}}}")
            mag = numstr(abs(c), dec=p.dec)
            if k > 0 and abs(c) == 1:
                term = body
            elif body:
                term = f"{mag}\\cdot {body}"
            else:
                term = mag
            if not parts:
                parts.append(("-" if c < 0 else "") + term)
            else:
                parts.append(f" {'-' if c < 0 else '+'} {term}")
        return "".join(parts)


X = Pol.of(0, 1)


def mono(k: int, c: Num = 1, var: str = "x", dec: bool = False) -> Pol:
    return Pol(tuple([Fr(0)] * k + [fr(c)]), var, dec)


# --------------------------------------------------------------------------- #
# SVG plotting
# --------------------------------------------------------------------------- #

INK = "#2b2b2b"
GRID = "#e3ddd1"
AXIS = "#8a8375"
CURVE = "#b5683a"
PAPER = "#f8f6f2"
FRAME = "#d9d2c5"


def _ticks(lo: float, hi: float, step: float) -> list[float]:
    out: list[float] = []
    k = math.ceil(lo / step - 1e-9)
    while k * step <= hi + 1e-9:
        out.append(round(k * step, 10))
        k += 1
    return out


def _tick_label(v: float) -> str:
    return str(int(round(v))) if abs(v - round(v)) < 1e-9 else approx(v, 1)


def plot(
    p: Pol,
    *,
    xlim: tuple[float, float],
    ylim: tuple[float, float],
    xstep: float = 1,
    ystep: float = 1,
    label: str = "y = f(x)",
    xlabel: str = "x",
    ylabel: str = "y",
    marks: list[tuple[float, float, str]] | None = None,
    width: int = 520,
    height: int = 360,
    draw_curve: bool = True,
) -> str:
    """A data-URI SVG plot of ``p`` over ``xlim`` — axes, grid, ticks, curve."""
    pad_l, pad_r, pad_t, pad_b = 46, 18, 30, 34
    x0, x1 = xlim
    y0, y1 = ylim
    iw, ih = width - pad_l - pad_r, height - pad_t - pad_b

    def sx(x: float) -> float:
        return pad_l + (x - x0) / (x1 - x0) * iw

    def sy(y: float) -> float:
        return pad_t + (y1 - y) / (y1 - y0) * ih

    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
        f'width="{width}" height="{height}" role="img">',
        f'<rect width="{width}" height="{height}" rx="16" fill="{PAPER}" stroke="{FRAME}"/>',
    ]
    for xv in _ticks(x0, x1, xstep):
        out.append(
            f'<line x1="{sx(xv):.1f}" y1="{pad_t}" x2="{sx(xv):.1f}" y2="{pad_t + ih}" '
            f'stroke="{GRID}" stroke-width="1"/>'
        )
    for yv in _ticks(y0, y1, ystep):
        out.append(
            f'<line x1="{pad_l}" y1="{sy(yv):.1f}" x2="{pad_l + iw}" y2="{sy(yv):.1f}" '
            f'stroke="{GRID}" stroke-width="1"/>'
        )
    # axes (drawn at 0 when 0 is inside the window, else on the frame edge)
    ax_y = sy(min(max(0.0, y0), y1))
    ax_x = sx(min(max(0.0, x0), x1))
    out.append(
        f'<line x1="{pad_l}" y1="{ax_y:.1f}" x2="{pad_l + iw}" y2="{ax_y:.1f}" '
        f'stroke="{AXIS}" stroke-width="1.6"/>'
    )
    out.append(
        f'<line x1="{ax_x:.1f}" y1="{pad_t}" x2="{ax_x:.1f}" y2="{pad_t + ih}" '
        f'stroke="{AXIS}" stroke-width="1.6"/>'
    )
    font = 'font-family="Georgia,serif"'
    for xv in _ticks(x0, x1, xstep):
        if abs(xv) < 1e-9:
            continue
        out.append(
            f'<text x="{sx(xv):.1f}" y="{ax_y + 15:.1f}" text-anchor="middle" font-size="11" '
            f'{font} fill="{INK}">{_tick_label(xv)}</text>'
        )
    for yv in _ticks(y0, y1, ystep):
        if abs(yv) < 1e-9:
            continue
        out.append(
            f'<text x="{ax_x - 6:.1f}" y="{sy(yv) + 4:.1f}" text-anchor="end" font-size="11" '
            f'{font} fill="{INK}">{_tick_label(yv)}</text>'
        )
    out.append(
        f'<text x="{ax_x - 6:.1f}" y="{ax_y + 15:.1f}" text-anchor="end" font-size="11" '
        f'{font} fill="{INK}">0</text>'
    )
    out.append(
        f'<text x="{pad_l + iw:.1f}" y="{ax_y - 8:.1f}" text-anchor="end" font-size="12" '
        f'{font} fill="{AXIS}">{xlabel}</text>'
    )
    out.append(
        f'<text x="{ax_x + 8:.1f}" y="{pad_t + 12:.1f}" font-size="12" {font} '
        f'fill="{AXIS}">{ylabel}</text>'
    )
    # the curve, clipped to the window and broken where it leaves the frame
    runs: list[list[tuple[float, float]]] = [[]]
    n = 340
    for i in range(n + 1):
        xv = x0 + (x1 - x0) * i / n
        yv = p.atf(xv)
        if y0 - 0.02 * (y1 - y0) <= yv <= y1 + 0.02 * (y1 - y0):
            runs[-1].append((sx(xv), sy(min(max(yv, y0), y1))))
        elif runs[-1]:
            runs.append([])
    for run in runs if draw_curve else []:
        if len(run) < 2:
            continue
        pts = " ".join(f"{a:.1f},{b:.1f}" for a, b in run)
        out.append(
            f'<polyline points="{pts}" fill="none" stroke="{CURVE}" stroke-width="2.4" '
            'stroke-linejoin="round"/>'
        )
    for mx, my, text in marks or []:
        out.append(
            f'<circle cx="{sx(mx):.1f}" cy="{sy(my):.1f}" r="3.6" fill="{CURVE}"/>'
            f'<text x="{sx(mx) + 7:.1f}" y="{sy(my) - 7:.1f}" font-size="11" {font} '
            f'fill="{INK}">{text}</text>'
        )
    out.append(
        f'<text x="{pad_l + iw - 4:.1f}" y="{pad_t + ih + 26:.1f}" text-anchor="end" '
        f'font-size="12" {font} fill="{CURVE}">{label}</text>'
    )
    out.append("</svg>")
    svg = "".join(out)
    return "data:image/svg+xml;utf8," + quote(svg, safe="/:=,()-.")


def plot_many(
    curves: list[tuple[Pol, str, str]],
    *,
    xlim: tuple[float, float],
    ylim: tuple[float, float],
    xstep: float = 1,
    ystep: float = 1,
    xlabel: str = "x",
    ylabel: str = "y",
    width: int = 520,
    height: int = 360,
) -> str:
    """Several polynomials on one pair of axes: ``(poly, colour, label)``."""
    base = plot(
        curves[0][0],
        xlim=xlim,
        ylim=ylim,
        xstep=xstep,
        ystep=ystep,
        label="",
        xlabel=xlabel,
        ylabel=ylabel,
        width=width,
        height=height,
        draw_curve=False,
    )
    svg = _decode(base)
    pad_l, pad_r, pad_t, pad_b = 46, 18, 30, 34
    iw, ih = width - pad_l - pad_r, height - pad_t - pad_b
    x0, x1 = xlim
    y0, y1 = ylim

    def sx(x: float) -> float:
        return pad_l + (x - x0) / (x1 - x0) * iw

    def sy(y: float) -> float:
        return pad_t + (y1 - y) / (y1 - y0) * ih

    extra: list[str] = []
    legend_y = pad_t + 14
    for idx, (poly, colour, name) in enumerate(curves):
        runs: list[list[tuple[float, float]]] = [[]]
        n = 340
        for i in range(n + 1):
            xv = x0 + (x1 - x0) * i / n
            yv = poly.atf(xv)
            if y0 - 0.02 * (y1 - y0) <= yv <= y1 + 0.02 * (y1 - y0):
                runs[-1].append((sx(xv), sy(min(max(yv, y0), y1))))
            elif runs[-1]:
                runs.append([])
        dash = "" if idx == 0 else ' stroke-dasharray="7 5"'
        for run in runs:
            if len(run) < 2:
                continue
            pts = " ".join(f"{a:.1f},{b:.1f}" for a, b in run)
            extra.append(
                f'<polyline points="{pts}" fill="none" stroke="{colour}" '
                f'stroke-width="2.4" stroke-linejoin="round"{dash}/>'
            )
        extra.append(
            f'<line x1="{pad_l + iw - 96:.1f}" y1="{legend_y - 4:.1f}" '
            f'x2="{pad_l + iw - 66:.1f}" y2="{legend_y - 4:.1f}" stroke="{colour}" '
            f'stroke-width="2.4"{dash}/>'
            f'<text x="{pad_l + iw - 60:.1f}" y="{legend_y:.1f}" font-size="12" '
            f'font-family="Georgia,serif" fill="{INK}">{name}</text>'
        )
        legend_y += 18
    svg = svg.replace("</svg>", "".join(extra) + "</svg>")
    return "data:image/svg+xml;utf8," + quote(svg, safe="/:=,()-.")


def _decode(uri: str) -> str:
    from urllib.parse import unquote

    return unquote(uri.split(",", 1)[1])


def bars(
    labels: list[str],
    values: list[float],
    *,
    ylabel: str = "",
    xlabel: str = "",
    width: int = 520,
    height: int = 320,
) -> str:
    """A simple labelled bar chart for discrete interval rates."""
    pad_l, pad_r, pad_t, pad_b = 46, 16, 26, 46
    iw, ih = width - pad_l - pad_r, height - pad_t - pad_b
    top = max(values) * 1.18
    out = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
        f'width="{width}" height="{height}" role="img">',
        f'<rect width="{width}" height="{height}" rx="16" fill="{PAPER}" stroke="{FRAME}"/>',
    ]
    font = 'font-family="Georgia,serif"'
    step = max(1, round(top / 5))
    for gv in _ticks(0, top, step):
        gy = pad_t + ih - gv / top * ih
        out.append(
            f'<line x1="{pad_l}" y1="{gy:.1f}" x2="{pad_l + iw}" y2="{gy:.1f}" '
            f'stroke="{GRID}" stroke-width="1"/>'
            f'<text x="{pad_l - 6}" y="{gy + 4:.1f}" text-anchor="end" font-size="11" '
            f'{font} fill="{INK}">{_tick_label(gv)}</text>'
        )
    bw = iw / len(values) * 0.62
    gap = iw / len(values)
    for i, (lab, v) in enumerate(zip(labels, values)):
        bx = pad_l + i * gap + (gap - bw) / 2
        bh = v / top * ih
        out.append(
            f'<rect x="{bx:.1f}" y="{pad_t + ih - bh:.1f}" width="{bw:.1f}" height="{bh:.1f}" '
            f'rx="3" fill="{CURVE}" fill-opacity="0.72" stroke="{CURVE}"/>'
            f'<text x="{bx + bw / 2:.1f}" y="{pad_t + ih + 15:.1f}" text-anchor="middle" '
            f'font-size="10" {font} fill="{INK}">{lab}</text>'
        )
    out.append(
        f'<line x1="{pad_l}" y1="{pad_t + ih}" x2="{pad_l + iw}" y2="{pad_t + ih}" '
        f'stroke="{AXIS}" stroke-width="1.6"/>'
        f'<line x1="{pad_l}" y1="{pad_t}" x2="{pad_l}" y2="{pad_t + ih}" '
        f'stroke="{AXIS}" stroke-width="1.6"/>'
    )
    if ylabel:
        out.append(
            f'<text x="{pad_l + 6}" y="{pad_t + 12}" font-size="12" {font} '
            f'fill="{AXIS}">{ylabel}</text>'
        )
    if xlabel:
        out.append(
            f'<text x="{pad_l + iw}" y="{height - 10}" text-anchor="end" font-size="12" '
            f'{font} fill="{AXIS}">{xlabel}</text>'
        )
    out.append("</svg>")
    return "data:image/svg+xml;utf8," + quote("".join(out), safe="/:=,()-.")


# --------------------------------------------------------------------------- #
# Claims and specs
# --------------------------------------------------------------------------- #


@dataclass
class Claim:
    text: str
    truth: bool
    body: str


@dataclass
class Spec:
    case: str
    title: str
    context: str
    difficulty: int
    stem_kind: str
    claims: list[Claim]
    overview: str
    tables: str | None = None
    figure: str | None = None
    tags: list[str] = field(default_factory=list)


def D(inner: str) -> str:
    """One display, one line — the Chapter 4 rhythm."""
    return "$$" + re.sub(r"\s+", " ", inner).strip() + "$$"


def close(truth: bool, clause: str) -> str:
    clause = clause.strip().rstrip(".,;")
    return f"{clause}, so the statement is {'True' if truth else 'False'}."


def body(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and p.strip())


def explanation(letter: str, truth: bool, text: str) -> str:
    head = f"**{letter}.** → {'True' if truth else 'False'}"
    out = f"{head}\n\n{text.strip()}"

    def one_line(m: re.Match[str]) -> str:
        return "$$" + re.sub(r"\s+", " ", m.group(1)).strip() + "$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", one_line, out)


# --------------------------------------------------------------------------- #
# Claim library — each builder decides the truth value from the polynomial
# itself and writes the explanation around that same computation.
# --------------------------------------------------------------------------- #


def _plural(n: int, one: str, many: str | None = None) -> str:
    return one if n == 1 else (many or one + "s")


WORDS = {
    0: "no",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
}


def word(n: int) -> str:
    return WORDS.get(n, str(n))


def claim_degree(p: Pol, claimed: int, *, name: str = "P", opener: str | None = None) -> Claim:
    """"The degree of P is n." — truth read off the expanded polynomial."""
    truth = p.degree == claimed
    text = f"The degree of ${name}$ is ${claimed}$."
    op = opener or (
        "The degree is the largest power of the variable that still carries a non-zero "
        "coefficient, so order the terms by falling powers and look at the first one."
    )
    return Claim(
        text,
        truth,
        body(
            op,
            D(p.eq(name)),
            f"The largest power present is ${p.var}^{{{p.degree}}}$, and its coefficient "
            f"${numstr(p.lead, dec=p.dec)}$ is not zero.",
            D(f"\\text{{degree of }}{name}={p.degree}"),
            close(
                truth,
                f"The degree is ${p.degree}$ and the claim names ${claimed}$"
                if not truth
                else f"The degree is ${p.degree}$, exactly the number in the claim",
            ),
        ),
    )


def claim_lead(p: Pol, claimed: Num, *, name: str = "P", opener: str | None = None) -> Claim:
    truth = p.lead == fr(claimed)
    text = f"The leading coefficient of ${name}$ is ${numstr(claimed, dec=p.dec)}$."
    op = opener or (
        "The leading coefficient is the number sitting in front of the highest power, so "
        "order the terms by falling powers and read the first one."
    )
    return Claim(
        text,
        truth,
        body(
            op,
            D(p.eq(name)),
            f"The highest power is ${p.var}^{{{p.degree}}}$ and the number in front of it is "
            f"what we are after.",
            D(f"\\text{{leading coefficient}}={numstr(p.lead, dec=p.dec)}"),
            close(
                truth,
                f"That number is ${numstr(p.lead, dec=p.dec)}$, exactly what the claim says"
                if truth
                else f"That number is ${numstr(p.lead, dec=p.dec)}$ while the claim says "
                f"${numstr(claimed, dec=p.dec)}$",
            ),
        ),
    )


def claim_value(
    p: Pol,
    x0: Num,
    claimed: Num,
    *,
    name: str = "P",
    unit: str = "",
    opener: str | None = None,
    text: str | None = None,
) -> Claim:
    got = p.at(x0)
    truth = got == fr(claimed)
    u = f" {unit}" if unit else ""
    st = text or (
        f"${name}\\left({numstr(x0, dec=p.dec)}\\right)={numstr(claimed, dec=p.dec)}$" + u + "."
    )
    op = opener or (
        "Evaluating a polynomial is substitution and nothing more: put the number in place of "
        "every occurrence of the variable and finish the arithmetic."
    )
    return Claim(
        st,
        truth,
        body(
            op,
            D(p.eq(name)),
            f"Substituting ${p.var}={numstr(x0, dec=p.dec)}$ term by term:",
            D(f"{name}\\left({numstr(x0, dec=p.dec)}\\right)={p.subst(x0)}"),
            D(f"{name}\\left({numstr(x0, dec=p.dec)}\\right)={numstr(got, dec=p.dec)}"),
            close(
                truth,
                f"The value is ${numstr(got, dec=p.dec)}${u}, exactly the figure in the claim"
                if truth
                else f"The value is ${numstr(got, dec=p.dec)}${u} while the claim reports "
                f"${numstr(claimed, dec=p.dec)}${u}",
            ),
        ),
    )


def claim_root(
    p: Pol,
    r: Num,
    *,
    name: str = "P",
    style: str = "zero",
    opener: str | None = None,
) -> Claim:
    """"x = r is a zero of P" / "(x - r) is a factor of P" — same computation."""
    got = p.at(r)
    truth = got == 0
    rs = numstr(r, dec=p.dec)
    bracket = p.var if fr(r) == 0 else (
        f"\\left({p.var}-{rs}\\right)" if fr(r) > 0 else f"\\left({p.var}+{numstr(-fr(r))}\\right)"
    )
    if style == "factor":
        text = f"${bracket}$ is a factor of ${name}\\left({p.var}\\right)$."
        op = opener or (
            "A linear bracket divides a polynomial exactly when the number that makes the "
            "bracket vanish is a zero of the polynomial, so there is nothing to divide: just "
            "substitute that number."
        )
    else:
        text = f"${p.var}={rs}$ is a zero of ${name}$."
        op = opener or (
            "A zero is a number the function sends to $0$, so the check is a single "
            "substitution."
        )
    return Claim(
        text,
        truth,
        body(
            op,
            D(p.eq(name)),
            f"Putting ${p.var}={rs}$ into the expression:",
            D(f"{name}\\left({rs}\\right)={p.subst(r)}={numstr(got, dec=p.dec)}"),
            close(
                truth,
                (
                    f"The substitution returns $0$, so the bracket divides ${name}$ with nothing "
                    f"left over"
                    if style == "factor"
                    else f"The function sends ${rs}$ to $0$, which is what a zero means"
                )
                if truth
                else (
                    f"The remainder is ${numstr(got, dec=p.dec)}$ rather than $0$, so the "
                    f"division leaves something behind"
                    if style == "factor"
                    else f"The value there is ${numstr(got, dec=p.dec)}$ and not $0$"
                ),
            ),
        ),
    )


def claim_remainder(
    p: Pol, r: Num, claimed: Num, *, name: str = "P", opener: str | None = None
) -> Claim:
    q, rem = p.divmod_linear(r)
    truth = rem == fr(claimed)
    rs = numstr(r, dec=p.dec)
    bracket = f"{p.var}-{rs}" if fr(r) > 0 else f"{p.var}+{numstr(-fr(r))}"
    op = opener or (
        "Dividing by a linear bracket leaves a constant remainder, and that constant is just "
        "the value of the polynomial at the number which kills the bracket."
    )
    return Claim(
        f"Dividing ${name}\\left({p.var}\\right)$ by $\\left({bracket}\\right)$ leaves the "
        f"remainder ${numstr(claimed, dec=p.dec)}$.",
        truth,
        body(
            op,
            D(p.eq(name)),
            f"The bracket vanishes at ${p.var}={rs}$, so evaluate there:",
            D(f"{name}\\left({rs}\\right)={p.subst(r)}={numstr(rem, dec=p.dec)}"),
            f"The quotient is ${q.latex()}$, and the division reads",
            D(
                f"{p.latex()}=\\left({bracket}\\right)\\left({q.latex()}\\right)"
                + (f"+{numstr(rem, dec=p.dec)}" if rem > 0 else "")
                + (f"-{numstr(-rem, dec=p.dec)}" if rem < 0 else "")
            ),
            close(
                truth,
                f"The remainder is ${numstr(rem, dec=p.dec)}$, the constant named in the claim"
                if truth
                else f"The remainder is ${numstr(rem, dec=p.dec)}$ while the claim announces "
                f"${numstr(claimed, dec=p.dec)}$",
            ),
        ),
    )


def claim_real_root_count(
    p: Pol,
    claimed: int,
    *,
    name: str = "P",
    roots: list[Num] | None = None,
    opener: str | None = None,
    text: str | None = None,
) -> Claim:
    rr = p.rational_roots()
    actual = len(rr) if roots is None else len(roots)
    truth = actual == claimed
    shown = ", ".join(f"${p.var}={numstr(r, dec=p.dec)}$" for r in (roots or rr))
    op = opener or (
        "Zeros are easiest to count from a factorised form, because a product is $0$ exactly "
        "when one of its factors is."
    )
    return Claim(
        text
        or f"${name}$ has exactly {word(claimed)} distinct real "
        f"{_plural(claimed, 'zero', 'zeros')}.",
        truth,
        body(
            op,
            D(p.eq(name)),
            D(p.factored(list(roots or rr), name=f"{name}\\left({p.var}\\right)")),
            f"Each bracket contributes the number that makes it vanish: {shown}.",
            close(
                truth,
                f"There are {word(actual)} distinct real zeros, exactly the count claimed"
                if truth
                else f"There are {word(actual)} distinct real zeros and the claim states "
                f"{word(claimed)}",
            ),
        ),
    )


def claim_end_behaviour(
    p: Pol,
    *,
    side: str = "right",
    rises: bool = True,
    name: str = "P",
    opener: str | None = None,
) -> Claim:
    """Behaviour of P for large |x|, decided by the leading term alone."""
    n, a = p.degree, p.lead
    if side == "right":
        actually_rises = a > 0
        where = f"as ${p.var}$ grows beyond every bound"
    else:
        actually_rises = (a > 0) == (n % 2 == 0)
        where = f"as ${p.var}$ falls below every bound"
    truth = actually_rises == rises
    verb = "grows beyond every bound" if rises else "falls below every bound"
    real_verb = "grow beyond every bound" if actually_rises else "fall below every bound"
    parity = "even" if n % 2 == 0 else "odd"
    sign_word = "positive" if a > 0 else "negative"
    op = opener or (
        "Far away from the origin the highest power dwarfs everything else, so the far ends of "
        "the graph are decided by the leading term alone."
    )
    return Claim(
        f"{where[0].upper() + where[1:]}, ${name}\\left({p.var}\\right)$ {verb}.",
        truth,
        body(
            op,
            D(p.eq(name)),
            D(f"\\text{{leading term}}={mono(n, a, p.var, p.dec).latex()}"),
            f"The exponent ${n}$ is {parity} and the coefficient ${numstr(a, dec=p.dec)}$ is "
            f"{sign_word}, which fixes both ends of the picture.",
            close(
                truth,
                f"On that side the values {real_verb}"
                if truth
                else f"On that side the values {real_verb}, the opposite of the claim",
            ),
        ),
    )


def claim_sum(
    p: Pol,
    q: Pol,
    *,
    op_kind: str = "+",
    claimed: Pol | None = None,
    claimed_degree: int | None = None,
    claimed_coeff: tuple[int, Num] | None = None,
    name_p: str = "f",
    name_q: str = "g",
    opener: str | None = None,
    text: str | None = None,
) -> Claim:
    """Claims about $f\\pm g$ or $fg$: the combination, its degree, or one coefficient."""
    combo = {"+": p + q, "-": p - q, "*": p * q}[op_kind]
    label = {
        "+": f"{name_p}\\left({p.var}\\right)+{name_q}\\left({p.var}\\right)",
        "-": f"{name_p}\\left({p.var}\\right)-{name_q}\\left({p.var}\\right)",
        "*": f"{name_p}\\left({p.var}\\right)\\cdot {name_q}\\left({p.var}\\right)",
    }[op_kind]
    how = {
        "+": "Adding two polynomials means adding the coefficients of matching powers, and "
        "nothing else happens.",
        "-": "Subtracting means changing every sign in the second function and then collecting "
        "matching powers.",
        "*": "Multiplying means every term of the first function meets every term of the "
        "second, after which matching powers are collected.",
    }[op_kind]
    op = opener or how
    steps = [op, D(f"{p.eq(name_p)}\\qquad {q.eq(name_q)}"), D(f"{label}={combo.latex()}")]
    if claimed_degree is not None:
        truth = combo.degree == claimed_degree
        st = text or f"The degree of ${label}$ is ${claimed_degree}$."
        steps.append(
            f"The surviving highest power is ${combo.var}^{{{combo.degree}}}$ with coefficient "
            f"${numstr(combo.lead, dec=combo.dec)}$."
        )
        verdict = (
            f"The degree of the combination is ${combo.degree}$, the number claimed"
            if truth
            else f"The degree of the combination is ${combo.degree}$ while the claim says "
            f"${claimed_degree}$"
        )
    elif claimed_coeff is not None:
        k, cv = claimed_coeff
        truth = combo.coeff(k) == fr(cv)
        st = text or (
            f"In ${label}$ the constant term is ${numstr(cv, dec=combo.dec)}$."
            if k == 0
            else f"In ${label}$ the coefficient of ${combo.var}^{{{k}}}$ is "
            f"${numstr(cv, dec=combo.dec)}$."
        )
        steps.append(
            D(
                f"\\text{{coefficient of }}{combo.var}^{{{k}}}="
                f"{numstr(combo.coeff(k), dec=combo.dec)}"
            )
        )
        verdict = (
            f"That coefficient is ${numstr(combo.coeff(k), dec=combo.dec)}$, exactly the value "
            f"claimed"
            if truth
            else f"That coefficient is ${numstr(combo.coeff(k), dec=combo.dec)}$ and the claim "
            f"reports ${numstr(cv, dec=combo.dec)}$"
        )
    else:
        assert claimed is not None
        truth = claimed.trim().coeffs == combo.trim().coeffs
        st = text or f"${label}={claimed.latex()}$."
        verdict = (
            "The collected expression is exactly the one written in the claim"
            if truth
            else f"The collected expression is ${combo.latex()}$, not ${claimed.latex()}$"
        )
    steps.append(close(truth, verdict))
    return Claim(st, truth, body(*steps))


def claim_avg_rate(
    p: Pol,
    a: Num,
    b: Num,
    claimed: Num,
    *,
    name: str = "P",
    unit: str = "",
    relation: str = "=",
    opener: str | None = None,
    text: str | None = None,
) -> Claim:
    """Average rate of change of p across [a, b] against a claimed number."""
    va, vb = p.at(a), p.at(b)
    rate = (vb - va) / (fr(b) - fr(a))
    cl = fr(claimed)
    truth = {"=": rate == cl, ">": rate > cl, "<": rate < cl, ">=": rate >= cl}[relation]
    rel_words = {
        "=": f"is exactly ${numstr(claimed, dec=p.dec)}$",
        ">": f"is more than ${numstr(claimed, dec=p.dec)}$",
        "<": f"is less than ${numstr(claimed, dec=p.dec)}$",
        ">=": f"is at least ${numstr(claimed, dec=p.dec)}$",
    }
    u = f" {unit}" if unit else ""
    st = text or (
        f"The average rate of change of ${name}$ between ${p.var}={numstr(a, dec=p.dec)}$ and "
        f"${p.var}={numstr(b, dec=p.dec)}$ {rel_words[relation]}{u}."
    )
    op = opener or (
        "An average rate of change is the total change in the output divided by the change in "
        "the input, so both endpoint values are needed first."
    )
    return Claim(
        st,
        truth,
        body(
            op,
            D(p.eq(name)),
            D(
                f"{name}\\left({numstr(a, dec=p.dec)}\\right)={numstr(va, dec=p.dec)}\\qquad "
                f"{name}\\left({numstr(b, dec=p.dec)}\\right)={numstr(vb, dec=p.dec)}"
            ),
            "Dividing the change in the output by the change in the input:",
            D(
                f"\\frac{{{numstr(vb, dec=p.dec)}-\\left({numstr(va, dec=p.dec)}\\right)}}"
                f"{{{numstr(b, dec=p.dec)}-\\left({numstr(a, dec=p.dec)}\\right)}}"
                f"={numstr(rate, dec=p.dec)}"
            ),
            close(
                truth,
                f"The average rate is ${numstr(rate, dec=p.dec)}${u}, which is what the claim "
                f"asks for"
                if truth
                else f"The average rate is ${numstr(rate, dec=p.dec)}${u}, which fails the "
                f"comparison in the claim",
            ),
        ),
    )


def claim_turning_points(
    p: Pol, claimed: int, *, name: str = "P", opener: str | None = None, text: str | None = None
) -> Claim:
    tp = p.turning_points()
    actual = len(tp)
    truth = actual == claimed
    where = ", ".join(f"${p.var}\\approx {approx(t)}$" for t in tp) if tp else "nowhere"
    op = opener or (
        "A turning point is a place where the curve stops rising and starts falling, or the "
        "other way round; a polynomial of degree $n$ can have at most $n-1$ of them."
    )
    return Claim(
        text
        or f"The graph of ${name}$ has exactly {word(claimed)} turning "
        f"{_plural(claimed, 'point')}.",
        truth,
        body(
            op,
            D(p.eq(name)),
            f"The picture changes direction at {where}, and between those places the curve keeps "
            f"one direction throughout."
            if tp
            else "The curve never reverses direction: it climbs across the whole picture.",
            D(f"\\text{{turning points of }}{name}={actual}"),
            close(
                truth,
                f"There are {word(actual)} turning points, the number the claim names"
                if truth
                else f"There are {word(actual)} turning points while the claim insists on "
                f"{word(claimed)}",
            ),
        ),
    )


def claim_yintercept(
    p: Pol, claimed: Num, *, name: str = "P", opener: str | None = None, text: str | None = None
) -> Claim:
    got = p.const
    truth = got == fr(claimed)
    op = opener or (
        "The graph meets the vertical axis where the input is $0$, and at that input every "
        "term with a power of the variable disappears — only the constant term survives."
    )
    return Claim(
        text
        or f"The graph of ${name}$ crosses the vertical axis at "
        f"$\\left(0,{numstr(claimed, dec=p.dec)}\\right)$.",
        truth,
        body(
            op,
            D(p.eq(name)),
            D(f"{name}\\left(0\\right)={numstr(got, dec=p.dec)}"),
            close(
                truth,
                f"The crossing sits at height ${numstr(got, dec=p.dec)}$, exactly where the "
                f"claim puts it"
                if truth
                else f"The crossing sits at height ${numstr(got, dec=p.dec)}$, not at "
                f"${numstr(claimed, dec=p.dec)}$",
            ),
        ),
    )


def claim_sign_at(
    p: Pol,
    x0: Num,
    *,
    below: bool = True,
    name: str = "P",
    opener: str | None = None,
    text: str | None = None,
) -> Claim:
    got = p.at(x0)
    truth = (got < 0) if below else (got > 0)
    side = "below" if below else "above"
    op = opener or (
        "Whether the curve runs under or over the horizontal axis at a given input is decided "
        "by the sign of the value there, so evaluate and look at the sign."
    )
    return Claim(
        text
        or f"At ${p.var}={numstr(x0, dec=p.dec)}$ the graph of ${name}$ lies {side} the "
        f"horizontal axis.",
        truth,
        body(
            op,
            D(p.eq(name)),
            D(
                f"{name}\\left({numstr(x0, dec=p.dec)}\\right)={p.subst(x0)}"
                f"={numstr(got, dec=p.dec)}"
            ),
            close(
                truth,
                f"The value ${numstr(got, dec=p.dec)}$ is "
                f"{'negative' if got < 0 else 'positive'}, so the curve runs {side} the axis "
                f"there"
                if truth
                else f"The value ${numstr(got, dec=p.dec)}$ is "
                f"{'negative' if got < 0 else 'positive'}, so the curve runs "
                f"{'below' if got < 0 else 'above'} the axis there",
            ),
        ),
    )


def claim_factored_form(
    p: Pol,
    candidate: Pol,
    *,
    candidate_latex: str,
    name: str = "P",
    opener: str | None = None,
    text: str | None = None,
) -> Claim:
    truth = candidate.trim().coeffs == p.trim().coeffs
    op = opener or (
        "Two polynomials describe the same curve only when they expand to the very same "
        "coefficients, so multiply the offered product out and compare."
    )
    diff = p - candidate
    return Claim(
        text or f"The curve shown is the graph of $y={candidate_latex}$.",
        truth,
        body(
            op,
            D(f"y={candidate_latex}"),
            D(f"{candidate_latex}={candidate.latex()}"),
            f"The function behind the picture is",
            D(p.eq(name)),
            close(
                truth,
                "The two expansions agree coefficient for coefficient"
                if truth
                else f"The two expansions differ by ${diff.latex()}$, which is not the zero "
                f"polynomial",
            ),
        ),
    )


def diffs(values: list[Num]) -> list[Fr]:
    vs = [fr(v) for v in values]
    return [vs[i + 1] - vs[i] for i in range(len(vs) - 1)]


def claim_finite_differences(
    values: list[Num],
    order: int,
    *,
    constant: bool = True,
    quantity: str = "the recorded totals",
    step_note: str = "",
    opener: str | None = None,
    text: str | None = None,
) -> Claim:
    """"The k-th differences of an equally spaced table are constant."" """
    layers = [[fr(v) for v in values]]
    for _ in range(order):
        layers.append(diffs(layers[-1]))
    last = layers[-1]
    is_const = len(set(last)) == 1 and len(last) >= 2
    truth = is_const == constant
    ordinal = {1: "first", 2: "second", 3: "third", 4: "fourth"}[order]
    op = opener or (
        "For inputs spaced equally apart, differencing a table repeatedly strips one degree "
        "away each time, so a polynomial of degree $k$ flattens out to a constant exactly at "
        f"the $k$-th round of differences.{(' ' + step_note) if step_note else ''}"
    )
    steps = [op]
    for i in range(1, order + 1):
        nm = {1: "first", 2: "second", 3: "third", 4: "fourth"}[i]
        steps.append(
            D(
                f"\\text{{{nm} differences}}: "
                + ",\\ ".join(numstr(v) for v in layers[i])
            )
        )
    steps.append(
        f"The {ordinal} row repeats the single value ${numstr(last[0])}$ all the way across."
        if is_const
        else f"The {ordinal} row still moves, so the flattening has not happened yet."
    )
    steps.append(
        close(
            truth,
            f"The {ordinal} differences of {quantity} are "
            f"{'constant' if is_const else 'not constant'}, which is what the claim describes"
            if truth
            else f"The {ordinal} differences of {quantity} are "
            f"{'constant' if is_const else 'not constant'}, contrary to the claim",
        )
    )
    return Claim(
        text
        or f"The {ordinal} differences of {quantity} are "
        f"{'constant' if constant else 'not constant'}.",
        truth,
        body(*steps),
    )


def claim_deriv_sign(
    p: Pol,
    x0: Num,
    *,
    decreasing: bool = True,
    name: str = "v",
    rate_name: str = "a",
    unit: str = "",
    opener: str | None = None,
    text: str | None = None,
) -> Claim:
    d = p.deriv()
    got = d.at(x0)
    truth = (got < 0) if decreasing else (got > 0)
    shown = f"${numstr(got, dec=p.dec)}" + (f"\\ {unit}" if unit else "") + "$"
    op = opener or (
        f"The instantaneous rate of change of ${name}$ is the function ${rate_name}$ obtained by "
        f"differentiating term by term, and its sign says whether ${name}$ is falling or rising."
    )
    return Claim(
        text
        or f"At ${p.var}={numstr(x0, dec=p.dec)}$ the quantity ${name}$ is "
        f"{'decreasing' if decreasing else 'increasing'}.",
        truth,
        body(
            op,
            D(p.eq(name, arg=p.var)),
            D(d.eq(rate_name, arg=p.var)),
            f"Substituting ${p.var}={numstr(x0, dec=p.dec)}$:",
            D(
                f"{rate_name}\\left({numstr(x0, dec=p.dec)}\\right)={d.subst(x0)}"
                f"={numstr(got, dec=p.dec)}"
            ),
            close(
                truth,
                f"The rate is {shown}, which is "
                f"{'negative' if got < 0 else 'positive'}, so ${name}$ is "
                f"{'falling' if got < 0 else 'rising'} there"
                if truth
                else f"The rate is {shown}, "
                f"which is {'negative' if got < 0 else 'positive'}, so ${name}$ is actually "
                f"{'falling' if got < 0 else 'rising'} there",
            ),
        ),
    )


BANNED = ("\\deg", "Matching the claim")


def audit(spec: Spec) -> list[str]:
    problems: list[str] = []
    if len(spec.claims) != 5:
        problems.append(f"{spec.case}: {len(spec.claims)} claims")
    trues = sum(c.truth for c in spec.claims)
    if not 1 <= trues <= 4:
        problems.append(f"{spec.case}: {trues} true statements")
    for i, c in enumerate(spec.claims):
        letter = "ABCDE"[i]
        if "so the statement is" not in c.body.lower():
            problems.append(f"{spec.case} {letter}: no verdict sentence")
        verdict = "so the statement is true" if c.truth else "so the statement is false"
        if verdict not in c.body.lower():
            problems.append(f"{spec.case} {letter}: verdict disagrees with the answer key")
        for bad in BANNED:
            if bad.lower() in c.body.lower() or bad.lower() in c.text.lower():
                problems.append(f"{spec.case} {letter}: banned phrase {bad!r}")
        if c.body.count("$$") % 2:
            problems.append(f"{spec.case} {letter}: unbalanced display")
        for m in re.finditer(r"\$\$([\s\S]*?)\$\$", c.body):
            if "\n" in m.group(1):
                problems.append(f"{spec.case} {letter}: multi-line display")
    return problems
