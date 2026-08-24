import { useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  displayTitleForCustomMock,
  isCustomExamId,
  parseCustomMockId,
} from "@/config/custom-mock-builder";
import {
  cacheCustomMock,
  fetchCustomMockById,
  readCachedCustomMock,
} from "@/lib/custom-mock-builder/client";
import { resolvePageLabel } from "@/lib/breadcrumbs";
import {
  getNavTrail,
  recordNavVisit,
  updateLastNavVisitLabel,
} from "@/lib/navigation-trail";

/**
 * Records every route change into the session trail (lives in root layout).
 * Future routes only need a page title in `head()` — labels resolve automatically.
 */
export function NavigationTrailRecorder({
  onTrailChange,
}: {
  onTrailChange?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [customTitle, setCustomTitle] = useState<string | null>(null);

  const customMockId = useMemo(() => {
    const m = pathname.match(/^\/mock-exams\/([^/]+)(?:\/(?:take|review))?\/?$/);
    if (!m || !isCustomExamId(m[1]!)) return null;
    return parseCustomMockId(decodeURIComponent(m[1]!));
  }, [pathname]);

  useEffect(() => {
    if (!customMockId) {
      setCustomTitle(null);
      return;
    }

    const cached = readCachedCustomMock(customMockId);
    if (cached) {
      setCustomTitle(displayTitleForCustomMock(cached));
      return;
    }

    let cancelled = false;
    void fetchCustomMockById(customMockId).then((row) => {
      if (cancelled || !row) return;
      cacheCustomMock(row);
      setCustomTitle(displayTitleForCustomMock(row));
    });
    return () => {
      cancelled = true;
    };
  }, [customMockId]);

  useEffect(() => {
    const ctx = { customMockTitle: customTitle };
    const label = resolvePageLabel(pathname, ctx);
    recordNavVisit(pathname, label);
    onTrailChange?.();

    // After head/title updates (incl. future file routes)
    const syncTitle = () => {
      const next = resolvePageLabel(pathname, ctx);
      updateLastNavVisitLabel(pathname, next);
      onTrailChange?.();
    };

    syncTitle();
    const t1 = window.setTimeout(syncTitle, 0);
    const t2 = window.setTimeout(syncTitle, 120);

    if (typeof document === "undefined") {
      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }

    const observer = new MutationObserver(syncTitle);
    observer.observe(document.querySelector("title") ?? document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      observer.disconnect();
    };
  }, [pathname, customTitle, onTrailChange]);

  return null;
}

export function readNavigationTrail() {
  return getNavTrail();
}
