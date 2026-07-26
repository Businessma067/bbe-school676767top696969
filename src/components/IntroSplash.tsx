import { useEffect, useState } from "react";

export function IntroSplash() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bbe_intro_played")) return;
    sessionStorage.setItem("bbe_intro_played", "1");
    setMounted(true);
    const t1 = setTimeout(() => setFadeOut(true), 3800);
    const t2 = setTimeout(() => setHidden(true), 5200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-5 px-6">
        {/* Logo — soft gradient reveal from left */}
        <div className="intro-logo relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-primary shadow-xl ring-1 ring-primary/30">
          <span className="font-display text-lg font-bold leading-none text-primary-foreground tracking-tight">
            BBE
          </span>
          <span className="intro-shine absolute inset-0" />
        </div>

        {/* Text — unfolds gently from the logo */}
        <div className="intro-text-wrap overflow-hidden">
          <div className="flex flex-col leading-tight whitespace-nowrap">
            <span className="intro-brand font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              BBE-School
            </span>
            <span className="intro-slogan mt-1 text-[11px] sm:text-xs font-medium uppercase tracking-[0.28em] text-taupe">
              Be ready for everything
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes intro-logo-in {
          0% {
            opacity: 0;
            transform: scale(0.85);
            filter: blur(6px);
          }
          50% {
            opacity: 0.9;
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        @keyframes intro-shine {
          0% {
            transform: translateX(-130%);
            opacity: 0;
          }
          25% {
            opacity: 0.6;
          }
          75% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(130%);
            opacity: 0;
          }
        }
        @keyframes intro-unfold {
          0% {
            max-width: 0;
            opacity: 0;
          }
          100% {
            max-width: 600px;
            opacity: 1;
          }
        }
        @keyframes intro-brand-in {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes intro-slogan-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
            letter-spacing: 0.42em;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.28em;
          }
        }
        .intro-logo {
          animation: intro-logo-in 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .intro-shine {
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.55) 50%, transparent 75%);
          animation: intro-shine 2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
        }
        .intro-text-wrap {
          animation: intro-unfold 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.9s both;
        }
        .intro-brand {
          animation: intro-brand-in 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.7s both;
        }
        .intro-slogan {
          display: inline-block;
          animation: intro-slogan-in 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s both;
        }
      `}</style>
    </div>
  );
}
