const STORAGE_KEY = "bbe-nav-trail";
const MAX_TRAIL = 12;

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
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeTrail(trail: NavTrailEntry[]) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(trail));
}

/** Append a visit unless it repeats the current page. */
export function recordNavVisit(pathname: string, label: string) {
  const trail = readTrail();
  const last = trail[trail.length - 1];
  if (last?.pathname === pathname) return;

  let next = [...trail, { pathname, label }];
  if (next.length > MAX_TRAIL) {
    next = next.slice(next.length - MAX_TRAIL);
  }
  writeTrail(next);
}

/** Jump back via breadcrumb — keep history up to and including that page. */
export function truncateNavTrailTo(pathname: string) {
  const trail = readTrail();
  const index = trail.findIndex((e) => e.pathname === pathname);
  if (index === -1) {
    writeTrail([{ pathname, label: "Page" }]);
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
