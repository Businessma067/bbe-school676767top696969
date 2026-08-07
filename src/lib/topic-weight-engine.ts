/**
 * Continuous topic-weight engine for the Custom Mock Builder.
 * Pure math — no React. Vertices form a regular n-gon; a control point
 * inside the shape yields non-negative weights that always sum to 1.
 */

export type Vec2 = { x: number; y: number };

export type TopicWeightTopic = {
  id: string;
  label: string;
  shortLabel?: string;
};

export type WeightedTopic = TopicWeightTopic & {
  weight: number; // 0..1
  percent: number; // 0..100 (display; may have float)
  questions: number;
};

const EPS = 1e-9;
/** Inverse-distance exponent — higher = sharper near vertices. */
const ALPHA = 1.35;
/** Softening so centre stays balanced and never blows up. */
const SOFT = 0.045;

export function regularPolygonVertices(n: number, radius = 1): Vec2[] {
  if (n < 1) return [];
  if (n === 1) return [{ x: 0, y: 0 }];
  if (n === 2) return [{ x: -radius, y: 0 }, { x: radius, y: 0 }];
  const verts: Vec2[] = [];
  // Point first vertex upward for aesthetic equilateral triangle etc.
  const start = -Math.PI / 2;
  for (let i = 0; i < n; i++) {
    const a = start + (i * 2 * Math.PI) / n;
    verts.push({ x: radius * Math.cos(a), y: radius * Math.sin(a) });
  }
  return verts;
}

export function dist(a: Vec2, b: Vec2): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

export function lerp(a: Vec2, b: Vec2, t: number): Vec2 {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

export function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t));
}

/** Point-in-polygon (ray cast). For n < 3, treat as “always true” and clip separately. */
export function pointInPolygon(p: Vec2, poly: Vec2[]): boolean {
  if (poly.length < 3) return true;
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x;
    const yi = poly[i].y;
    const xj = poly[j].x;
    const yj = poly[j].y;
    const intersect =
      yi > p.y !== yj > p.y && p.x < ((xj - xi) * (p.y - yi)) / (yj - yi + EPS) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

/** Project point onto polygon interior (center → boundary). */
export function clampToPolygon(p: Vec2, poly: Vec2[], center: Vec2 = { x: 0, y: 0 }): Vec2 {
  if (poly.length === 0) return center;
  if (poly.length === 1) return { ...poly[0] };
  if (poly.length === 2) {
    // Clamp to segment
    const a = poly[0];
    const b = poly[1];
    const abx = b.x - a.x;
    const aby = b.y - a.y;
    const apx = p.x - a.x;
    const apy = p.y - a.y;
    const ab2 = abx * abx + aby * aby || EPS;
    const t = clamp01((apx * abx + apy * aby) / ab2);
    return { x: a.x + abx * t, y: a.y + aby * t };
  }
  if (pointInPolygon(p, poly)) return p;

  // Binary search along ray from center through p to boundary
  let lo = 0;
  let hi = 1;
  const dir = { x: p.x - center.x, y: p.y - center.y };
  // Extend far enough that we exit
  const scale = Math.max(2, dist(center, p) * 2 + 2);
  let outside = { x: center.x + dir.x * scale, y: center.y + dir.y * scale };
  if (pointInPolygon(outside, poly)) {
    // Fallback: nearest vertex
    let best = poly[0];
    let bestD = Infinity;
    for (const v of poly) {
      const d = dist(p, v);
      if (d < bestD) {
        bestD = d;
        best = v;
      }
    }
    return { ...best };
  }
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    const q = {
      x: center.x + (outside.x - center.x) * mid,
      y: center.y + (outside.y - center.y) * mid,
    };
    if (pointInPolygon(q, poly)) lo = mid;
    else hi = mid;
  }
  return {
    x: center.x + (outside.x - center.x) * lo,
    y: center.y + (outside.y - center.y) * lo,
  };
}

/**
 * Continuous weights via softened inverse-distance.
 * Always ≥ 0 and sum to 1.
 */
export function weightsFromPoint(point: Vec2, vertices: Vec2[]): number[] {
  const n = vertices.length;
  if (n === 0) return [];
  if (n === 1) return [1];

  if (n === 2) {
    const d0 = dist(point, vertices[0]);
    const d1 = dist(point, vertices[1]);
    const span = dist(vertices[0], vertices[1]) || 1;
    // Linear along the segment: closer to V0 → higher w0
    const t = clamp01(d0 / span); // 0 at V0, 1 at V1 if on segment
    // Prefer inverse-distance so off-segment still continuous
    const r0 = 1 / (d0 ** 2 + SOFT) ** (ALPHA * 0.5);
    const r1 = 1 / (d1 ** 2 + SOFT) ** (ALPHA * 0.5);
    const s = r0 + r1 || 1;
    // Blend with linear for nicer 50/50 at midpoint
    const w0lin = 1 - t;
    const w0 = 0.55 * (r0 / s) + 0.45 * w0lin;
    return [w0, 1 - w0];
  }

  const raw = vertices.map((v) => {
    const d = dist(point, v);
    return 1 / (d ** 2 + SOFT) ** ALPHA;
  });
  const sum = raw.reduce((a, b) => a + b, 0) || 1;
  return raw.map((r) => r / sum);
}

/** Hamilton / largest-remainder: percentages → integer counts summing to total. */
export function countsFromWeights(weights: number[], total: number): number[] {
  const n = weights.length;
  if (n === 0) return [];
  if (total <= 0) return weights.map(() => 0);
  if (n === 1) return [total];

  const exact = weights.map((w) => Math.max(0, w) * total);
  const floors = exact.map((x) => Math.floor(x));
  let used = floors.reduce((a, b) => a + b, 0);
  let rem = total - used;

  const order = exact
    .map((x, i) => ({ i, frac: x - floors[i] }))
    .sort((a, b) => b.frac - a.frac || a.i - b.i);

  const out = [...floors];
  for (let k = 0; k < rem; k++) {
    out[order[k % n].i] += 1;
  }
  // Safety: never exceed / never go negative
  return out.map((c) => Math.max(0, c));
}

export function percentsFromWeights(weights: number[]): number[] {
  // Integer percents that always sum to exactly 100.
  return countsFromWeights(weights, 100);
}

/** Renormalize floats so displayed percents aren't wildly off; keep exact sum of weights = 1. */
export function normalizeWeights(weights: number[]): number[] {
  const clipped = weights.map((w) => Math.max(0, w));
  const s = clipped.reduce((a, b) => a + b, 0);
  if (s <= EPS) return clipped.map(() => 1 / Math.max(1, clipped.length));
  return clipped.map((w) => w / s);
}

export type SnapKind = "vertex" | "center" | "edgeMid" | null;

export function snapTargets(vertices: Vec2[]): { point: Vec2; kind: SnapKind; index?: number }[] {
  const targets: { point: Vec2; kind: SnapKind; index?: number }[] = [];
  const center = { x: 0, y: 0 };
  targets.push({ point: center, kind: "center" });
  vertices.forEach((v, i) => targets.push({ point: v, kind: "vertex", index: i }));
  for (let i = 0; i < vertices.length; i++) {
    const j = (i + 1) % vertices.length;
    if (vertices.length === 2 && i === 1) break;
    targets.push({
      point: lerp(vertices[i], vertices[j], 0.5),
      kind: "edgeMid",
      index: i,
    });
  }
  return targets;
}

/**
 * Soft magnetic snap. Returns snapped point (or original) and which magnet fired.
 * strength in normalised units (radius≈1 → threshold ~0.08).
 */
export function applyMagneticSnap(
  point: Vec2,
  vertices: Vec2[],
  threshold = 0.078,
): { point: Vec2; snap: SnapKind; index?: number } {
  const targets = snapTargets(vertices);
  let best = targets[0];
  let bestD = Infinity;
  for (const t of targets) {
    const d = dist(point, t.point);
    if (d < bestD) {
      bestD = d;
      best = t;
    }
  }
  if (bestD <= threshold) {
    return { point: { ...best.point }, snap: best.kind, index: best.index };
  }
  return { point, snap: null };
}

export function balancedPoint(): Vec2 {
  return { x: 0, y: 0 };
}

export function vertexPoint(vertices: Vec2[], index: number): Vec2 {
  const v = vertices[index];
  if (!v) return balancedPoint();
  // Slightly inset so weights aren't singular if SOFT is tiny
  return lerp(balancedPoint(), v, 0.92);
}

export function randomBalancedPoint(vertices: Vec2[], radius = 0.22): Vec2 {
  const angle = Math.random() * Math.PI * 2;
  const r = Math.random() * radius;
  const p = { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
  return clampToPolygon(p, vertices);
}

export function buildWeightedTopics(
  topics: TopicWeightTopic[],
  point: Vec2,
  questionCount: number,
  options?: { snap?: boolean; snapThreshold?: number },
): {
  point: Vec2;
  vertices: Vec2[];
  weights: number[];
  topics: WeightedTopic[];
  snap: SnapKind;
  snapIndex?: number;
} {
  const vertices = regularPolygonVertices(topics.length);
  let p = clampToPolygon(point, vertices);
  let snap: SnapKind = null;
  let snapIndex: number | undefined;
  if (options?.snap !== false) {
    const s = applyMagneticSnap(p, vertices, options?.snapThreshold);
    p = s.point;
    snap = s.snap;
    snapIndex = s.index;
  }
  const weights = normalizeWeights(weightsFromPoint(p, vertices));
  const counts = countsFromWeights(weights, questionCount);
  const percents = percentsFromWeights(weights);

  return {
    point: p,
    vertices,
    weights,
    snap,
    snapIndex,
    topics: topics.map((t, i) => ({
      ...t,
      weight: weights[i] ?? 0,
      percent: percents[i] ?? 0,
      questions: counts[i] ?? 0,
    })),
  };
}

/** Convert weighted topics → Record<id, count> for the build API. */
export function topicCountsRecord(topics: WeightedTopic[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const t of topics) {
    if (t.questions > 0) out[t.id] = t.questions;
    else if (!(t.id in out)) out[t.id] = 0;
  }
  return out;
}
