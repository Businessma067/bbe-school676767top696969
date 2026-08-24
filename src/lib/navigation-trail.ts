import { normalizePathname } from "@/lib/breadcrumbs";

const STORAGE_KEY = "bbe-nav-trail";
const MAX_TRAIL = 16;

export type NavTrailEntry = {
  pathname: string;
  label: string;
};

function readTrail(): NavTrailEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as NavTrailEntry[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((e) => ({
      pathname: normalizePathname(e.pathname),
      label: e.label,
    }));
  } catch {
    return [];
  }
}

function writeTrail(trail: NavTrailEntry[]) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      trail.map((e) => ({
        pathname: normalizePathname(e.pathname),
        label: e.label,
      })),
    ),
  );
}

/** Append a visit unless it repeats the current page. */
export function recordNavVisit(pathname: string, label: string) {
  const path = normalizePathname(pathname);
  const trail = readTrail();
  const last = trail[trail.length - 1];
  if (last?.pathname === path) {
    if (last.label !== label) {
      writeTrail([...trail.slice(0, -1), { pathname: path, label }]);
    }
    return;
  }

  let next = [...trail, { pathname: path, label }];
  if (next.length > MAX_TRAIL) {
    next = next.slice(next.length - MAX_TRAIL);
  }
  writeTrail(next);
}

/** Refresh label when async data or document.title arrives. */
export function updateLastNavVisitLabel(pathname: string, label: string) {
  const path = normalizePathname(pathname);
  const trail = readTrail();
  const last = trail[trail.length - 1];
  if (!last || last.pathname !== path || last.label === label) return;
  writeTrail([...trail.slice(0, -1), { pathname: path, label }]);
}

/** Jump back via breadcrumb — keep history up to and including that page. */
export function truncateNavTrailTo(pathname: string, label?: string) {
  const path = normalizePathname(pathname);
  const trail = readTrail();
  const index = trail.findIndex((e) => e.pathname === path);
  if (index === -1) {
    writeTrail([{ pathname: path, label: label ?? "Page" }]);
    return;
  }
  writeTrail(trail.slice(0, index + 1));
}

export function getNavTrail(): NavTrailEntry[] {
  return readTrail();
}

export function clearNavTrail() {
  writeTrail([]);
}
