import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";

import { LocalizedLink } from "@/components/LocalizedLink";
import { useFullCourseAccess, type FullCourseAccessState } from "@/hooks/use-full-course-access";
import { stripLocalePrefix } from "@/lib/i18n/locale-path";

const SIGNUP_DISMISS_KEY = "bbe-signup-bite-dismissed";
const BUY_DISMISS_KEY = "bbe-buy-bite-dismissed";

/** Homepage plus the three track landings. */
const BITE_PATHS = new Set(["/", "/bbe", "/wiso", "/hybrid"]);

const linkClass =
  "mt-2 inline-flex items-center justify-center rounded-md bg-foreground px-3 py-1.5 text-xs font-semibold text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-ring";

function readDismissed(key: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

/** Course for this landing. Hybrid counts as owning both single tracks. */
function ownsPageCourse(path: string, access: FullCourseAccessState): boolean {
  if (path === "/bbe") return access.ownsFullCourse || access.ownsHybridCourse;
  if (path === "/wiso") return access.ownsWisoFullCourse || access.ownsHybridCourse;
  if (path === "/hybrid") return access.ownsHybridCourse;
  return access.ownsPaidCourse || access.ownsWisoFullCourse || access.ownsHybridCourse;
}

function BiteShell({ children, onDismiss }: { children: ReactNode; onDismiss: () => void }) {
  return (
    <aside className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[calc(max(1rem,env(safe-area-inset-right))+4.25rem)] z-40 w-[min(17.5rem,calc(100vw-6.75rem))]">
      <div className="flex items-start gap-2 rounded-2xl border border-border bg-background p-3 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.45)]">
        <div className="min-w-0 flex-1">{children}</div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close"
          className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}

function RegisterCopy({ path }: { path: string }) {
  const returnTo = path === "/wiso" ? "/wiso/demo-practice" : "/demo-practice";
  return (
    <>
      <p className="font-display text-[13px] font-semibold leading-snug text-foreground">
        Register now and get 100+ free tasks
      </p>
      <LocalizedLink to="/signup" search={{ returnTo }} className={linkClass}>
        Register now
      </LocalizedLink>
    </>
  );
}

function BuyCopy({ path }: { path: string }) {
  if (path === "/bbe") {
    return (
      <>
        <p className="font-display text-[13px] font-semibold leading-snug text-foreground">
          Free tasks get you in. The full course is where the mocks and the mock builder are.
        </p>
        <LocalizedLink to="/products/full-course" className={linkClass}>
          See the full course
        </LocalizedLink>
      </>
    );
  }
  if (path === "/wiso") {
    return (
      <>
        <p className="font-display text-[13px] font-semibold leading-snug text-foreground">
          The free tasks are a start. The WiSo course is the mocks and the German explanations.
        </p>
        <LocalizedLink to="/wiso/products/full-course" className={linkClass}>
          See the WiSo course
        </LocalizedLink>
      </>
    );
  }
  if (path === "/hybrid") {
    return (
      <>
        <p className="font-display text-[13px] font-semibold leading-snug text-foreground">
          Both exams sit in one course, so you don't prepare twice.
        </p>
        <LocalizedLink to="/products/hybrid-course" className={linkClass}>
          See the hybrid course
        </LocalizedLink>
      </>
    );
  }
  return (
    <>
      <p className="font-display text-[13px] font-semibold leading-snug text-foreground">
        The free tasks are the start. The course is the mocks, the explanations, and the mock
        builder.
      </p>
      <LocalizedLink to="/products" className={linkClass}>
        See the courses
      </LocalizedLink>
    </>
  );
}

/** Signup nudge for guests; buy nudge for signed-in visitors who do not own this page's course. */
export function SignupBite() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const path = stripLocalePrefix(pathname);
  const show = BITE_PATHS.has(path);
  const access = useFullCourseAccess();
  const [signupClosed, setSignupClosed] = useState(false);
  const [buyClosed, setBuyClosed] = useState(false);
  const [clearOfHero, setClearOfHero] = useState(false);
  const [buyReady, setBuyReady] = useState(false);
  const epochSeen = useRef<number | null>(null);

  const signupDismissed = signupClosed || readDismissed(SIGNUP_DISMISS_KEY);
  const buyDismissed = buyClosed || readDismissed(BUY_DISMISS_KEY);
  const signedIn = access.ready && access.signedIn;
  const ownsCourse = buyReady && signedIn && ownsPageCourse(path, access);

  useEffect(() => {
    if (!access.ready) return;
    if (!access.signedIn) {
      epochSeen.current = access.revision;
      setBuyReady(false);
      return;
    }
    // First paint for a signed-in visitor already includes ownership.
    // A later sign-in bumps revision only after that refresh finishes,
    // so the buy card does not appear on stale "does not own" flags.
    if (epochSeen.current === null || access.revision !== epochSeen.current) {
      epochSeen.current = access.revision;
      setBuyReady(true);
    }
  }, [access.ready, access.signedIn, access.revision]);

  const offerReady = signedIn ? buyReady : true;
  const wantsCard =
    show &&
    access.ready &&
    offerReady &&
    (signedIn ? !ownsCourse && !buyDismissed : !signupDismissed);

  useEffect(() => {
    setClearOfHero(false);
  }, [path]);

  useEffect(() => {
    if (!wantsCard) return;
    const update = () => {
      const hero = document.querySelector("main > section");
      if (!hero) {
        setClearOfHero(window.scrollY > 520);
        return;
      }
      setClearOfHero(hero.getBoundingClientRect().bottom < window.innerHeight - 120);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [wantsCard, path]);

  if (!wantsCard || !clearOfHero) return null;

  const dismiss = () => {
    const key = signedIn ? BUY_DISMISS_KEY : SIGNUP_DISMISS_KEY;
    try {
      sessionStorage.setItem(key, "1");
    } catch {
      /* ignore */
    }
    if (signedIn) setBuyClosed(true);
    else setSignupClosed(true);
  };

  return (
    <BiteShell onDismiss={dismiss}>
      {signedIn ? <BuyCopy path={path} /> : <RegisterCopy path={path} />}
    </BiteShell>
  );
}
