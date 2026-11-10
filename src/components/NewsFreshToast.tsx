import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Newspaper, X } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { getFreshNewsPost } from "@/data/news/posts";
import { isNewsAppPath } from "@/lib/exam-track";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

const DWELL_MS = 15_000;
const VISIBLE_MS = 7_000;
const FRESH_DAYS = 7;
const SEEN_PREFIX = "bbe-news-toast-seen:";
const SESSION_START_KEY = "bbe-news-toast-session-start";

function seenKey(slug: string) {
  return `${SEEN_PREFIX}${slug}`;
}

function alreadySeen(slug: string): boolean {
  if (typeof window === "undefined") return true;
  try {
    return sessionStorage.getItem(seenKey(slug)) === "1";
  } catch {
    return false;
  }
}

function markSeen(slug: string) {
  try {
    sessionStorage.setItem(seenKey(slug), "1");
  } catch {
    /* ignore quota / private mode */
  }
}

/** Milliseconds until the 15-second dwell is satisfied for this tab session. */
function msUntilDwell(): number {
  if (typeof window === "undefined") return DWELL_MS;
  try {
    const raw = sessionStorage.getItem(SESSION_START_KEY);
    const started = raw ? Number(raw) : NaN;
    if (!Number.isFinite(started)) {
      const now = Date.now();
      sessionStorage.setItem(SESSION_START_KEY, String(now));
      return DWELL_MS;
    }
    return Math.max(0, DWELL_MS - (Date.now() - started));
  } catch {
    return DWELL_MS;
  }
}

/**
 * After 15 seconds on the site, briefly surface the newest News post
 * that is still inside its first week.
 */
export function NewsFreshToast() {
  const path = useRouterState({
    select: (s) => stripLocalePrefix(s.location.pathname),
  });
  const post = getFreshNewsPost(FRESH_DAYS);
  const onNews = isNewsAppPath(path);
  const [armed, setArmed] = useState(false);
  const [open, setOpen] = useState(false);

  // Arm once the visitor has been on the site for 15 seconds this session.
  useEffect(() => {
    if (!post || alreadySeen(post.slug)) return;

    const wait = msUntilDwell();
    const timer = setTimeout(() => setArmed(true), wait);
    return () => clearTimeout(timer);
  }, [post]);

  // Show for 7 seconds when armed (and not already on News).
  useEffect(() => {
    if (!post || !armed || alreadySeen(post.slug) || onNews) {
      setOpen(false);
      return;
    }

    setOpen(true);
    const hide = setTimeout(() => {
      markSeen(post.slug);
      setOpen(false);
      setArmed(false);
    }, VISIBLE_MS);

    return () => clearTimeout(hide);
  }, [post, armed, onNews]);

  // Visiting the highlighted post (or the feed) counts as seen for this session.
  useEffect(() => {
    if (!post) return;
    if (path === `/news/${post.slug}` || path === "/news") {
      markSeen(post.slug);
      setOpen(false);
      setArmed(false);
    }
  }, [path, post]);

  if (!open || !post || onNews) return null;

  const dismiss = () => {
    markSeen(post.slug);
    setOpen(false);
    setArmed(false);
  };

  return (
    <aside
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-[60] flex justify-center px-3"
    >
      <div className="news-toast-enter pointer-events-auto w-full max-w-md">
        <div className="relative flex items-start gap-3 rounded-2xl border border-border bg-background/95 p-3 pr-10 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md">
          <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-caramel-deep/10 text-caramel-deep">
            <Newspaper className="h-4 w-4" strokeWidth={2.25} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              News
            </p>
            <p className="mt-0.5 font-display text-[13px] font-semibold leading-snug text-foreground">
              {post.title}
            </p>
            <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
              {post.summary}
            </p>
            <LocalizedLink
              to={`/news/${post.slug}`}
              onClick={dismiss}
              className="mt-2 inline-flex text-[11px] font-semibold text-caramel-deep hover:underline"
            >
              Read post
            </LocalizedLink>
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close"
            className="absolute right-2.5 top-2.5 grid h-7 w-7 place-items-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default NewsFreshToast;
