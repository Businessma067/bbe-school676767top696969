import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Newspaper, X } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { getFreshNewsPost } from "@/data/news/posts";
import { isNewsAppPath } from "@/lib/exam-track";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

/** Soft window — not a fixed beat. */
const DWELL_MIN_MS = 9_000;
const DWELL_MAX_MS = 14_000;
const VISIBLE_MIN_MS = 4_200;
const VISIBLE_MAX_MS = 5_800;
const FRESH_DAYS = 7;
const SEEN_PREFIX = "bbe-news-toast-seen:";
const SESSION_START_KEY = "bbe-news-toast-session-start";
const SESSION_DWELL_KEY = "bbe-news-toast-session-dwell";

type Phase = "idle" | "enter" | "shown" | "leave";

function jitter(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

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
    /* ignore */
  }
}

function sessionDwellMs(): number {
  if (typeof window === "undefined") return DWELL_MIN_MS;
  try {
    const raw = sessionStorage.getItem(SESSION_DWELL_KEY);
    const saved = raw ? Number(raw) : NaN;
    if (Number.isFinite(saved) && saved >= DWELL_MIN_MS && saved <= DWELL_MAX_MS) {
      return saved;
    }
    const next = jitter(DWELL_MIN_MS, DWELL_MAX_MS);
    sessionStorage.setItem(SESSION_DWELL_KEY, String(next));
    return next;
  } catch {
    return DWELL_MIN_MS;
  }
}

function msUntilDwell(): number {
  if (typeof window === "undefined") return sessionDwellMs();
  const target = sessionDwellMs();
  try {
    const raw = sessionStorage.getItem(SESSION_START_KEY);
    const started = raw ? Number(raw) : NaN;
    if (!Number.isFinite(started)) {
      const now = Date.now();
      sessionStorage.setItem(SESSION_START_KEY, String(now));
      return target;
    }
    return Math.max(0, target - (Date.now() - started));
  } catch {
    return target;
  }
}

/**
 * After a short dwell on the site, slide the newest week-fresh News post
 * down from above the viewport, then tuck it away again.
 */
export function NewsFreshToast() {
  const path = useRouterState({
    select: (s) => stripLocalePrefix(s.location.pathname),
  });
  const post = getFreshNewsPost(FRESH_DAYS);
  const onNews = isNewsAppPath(path);
  const [armed, setArmed] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (!post || alreadySeen(post.slug)) return;
    const wait = msUntilDwell();
    const timer = setTimeout(() => setArmed(true), wait);
    return () => clearTimeout(timer);
  }, [post]);

  useEffect(() => {
    if (!post || !armed || alreadySeen(post.slug) || onNews) {
      setPhase((p) => (p === "enter" || p === "shown" ? "leave" : p));
      return;
    }

    setPhase("enter");
    const hold = jitter(VISIBLE_MIN_MS, VISIBLE_MAX_MS);
    const hide = setTimeout(() => setPhase("leave"), hold);
    return () => clearTimeout(hide);
  }, [post, armed, onNews]);

  useEffect(() => {
    if (!post) return;
    if (path === `/news/${post.slug}` || path === "/news") {
      markSeen(post.slug);
      setArmed(false);
      setPhase((p) => (p === "idle" ? p : "leave"));
    }
  }, [path, post]);

  const finishLeave = () => {
    if (post) markSeen(post.slug);
    setArmed(false);
    setPhase("idle");
  };

  const dismiss = () => {
    setPhase("leave");
  };

  if (!post || onNews || phase === "idle") return null;

  const motionClass =
    phase === "leave" ? "news-toast-leave" : phase === "enter" ? "news-toast-enter" : "";

  return (
    <aside
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex justify-center overflow-hidden px-3 pt-[max(0.75rem,env(safe-area-inset-top))]"
    >
      <div
        className={`pointer-events-auto w-full max-w-md will-change-transform ${motionClass}`}
        onAnimationEnd={(e) => {
          if (e.target !== e.currentTarget) return;
          if (phase === "enter") setPhase("shown");
          if (phase === "leave") finishLeave();
        }}
      >
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
