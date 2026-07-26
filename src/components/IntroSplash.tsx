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
    const t1 = setTimeout(() => setFadeOut(true), 2600);
    const t2 = setTimeout(() => setHidden(true), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-4 px-6">
        {/* Logo — sweeps in from left with gradient shine */}
        <div className="intro-logo relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-primary shadow-xl ring-1 ring-primary/30">
          <span className="font-display text-lg font-bold leading-none text-primary-foreground tracking-tight">
            BBE
          </span>
          <span className="intro-shine absolute inset-0" />
        </div>

        {/* Text — unfolds from left */}
        <div className="intro-text-wrap overflow-hidden">
          <div className="flex flex-col leading-tight whitespace-nowrap">
            <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
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
          0% { opacity: 0; transform: translateX(-40px) scale(0.85); filter: blur(6px); }
          60% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes intro-shine {
          0% { transform: translateX(-120%); opacity: 0; }
          40% { opacity: 0.9; }
          100% { transform: translateX(120%); opacity: 0; }
        }
        @keyframes intro-unfold {
          0% { max-width: 0; opacity: 0; }
          100% { max-width: 600px; opacity: 1; }
        }
        @keyframes intro-slogan-in {
          0% { opacity: 0; transform: translateY(6px); letter-spacing: 0.5em; }
          100% { opacity: 1; transform: translateY(0); letter-spacing: 0.28em; }
        }
        .intro-logo {
          animation: intro-logo-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .intro-shine {
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.7) 50%, transparent 70%);
          animation: intro-shine 1.2s ease-out 0.5s both;
        }
        .intro-text-wrap {
          animation: intro-unfold 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both;
        }
        .intro-slogan {
          display: inline-block;
          animation: intro-slogan-in 0.8s ease-out 1.4s both;
        }
      `}</style>
    </div>
  );
}
