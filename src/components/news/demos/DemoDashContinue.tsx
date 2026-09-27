import { useState } from "react";
import { ArrowRight, BookOpen, Layers, Puzzle } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const ACCENT = "#E85D3A";

/** Dashboard that remembers progress — Continue CTA + study tool hop. */
export function DemoDashContinue({ caption }: DemoProps) {
  const [pulse, setPulse] = useState(false);
  const [tool, setTool] = useState(-1);

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(async (api) => {
    setFade(true);
    await api.wait(200);
    setPulse(false);
    setTool(-1);
    setFade(false);
    await api.wait(500);

    await api.moveTo('[data-d="continue"]');
    await api.click();
    setPulse(true);
    await api.wait(700);

    await api.moveTo('[data-d="tool0"]');
    await api.click();
    setTool(0);
    await api.wait(550);
    await api.moveTo('[data-d="tool1"]');
    await api.click();
    setTool(1);
    await api.wait(1300);
  }, []);

  const tools = [
    { title: "Flashcards", icon: Layers, blurb: "Drill terms between mocks" },
    { title: "Matching", icon: Puzzle, blurb: "Connect concepts fast" },
    { title: "Tutor Exam", icon: BookOpen, blurb: "Subject-focused quiz" },
  ];

  return (
    <DemoShell url="/dashboard" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[380px] max-w-xl gap-3 transition-opacity duration-500 sm:h-[420px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <nav className="hidden w-24 shrink-0 flex-col gap-1 rounded-2xl border border-border bg-card p-2 sm:flex">
            {["Courses", "Tools", "Mocks"].map((item, i) => (
              <span
                key={item}
                className={cn(
                  "rounded-lg px-2 py-2 text-[11px] font-semibold",
                  i === 0 ? "text-white" : "text-muted-foreground",
                )}
                style={i === 0 ? { backgroundColor: ACCENT } : undefined}
              >
                {item}
              </span>
            ))}
          </nav>
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-caramel-deep">
              Signed in · BBE Full
            </p>
            <h3 className="font-display text-xl font-bold tracking-tight">Pick up Economics</h3>

            <div
              className={cn(
                "mt-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow duration-500",
                pulse && "news-uniq-pulse-ring",
              )}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Last session · Economics
                  </p>
                  <p className="font-display text-base font-semibold">
                    Mock · Ch 3 · Question 7 of 12
                  </p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border/70">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: pulse ? "58%" : "42%", backgroundColor: ACCENT }}
                    />
                  </div>
                </div>
                <span
                  data-d="continue"
                  className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
                  style={{ backgroundColor: ACCENT }}
                >
                  Continue <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            <p className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-taupe">
              Study tools
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {tools.map((t, i) => {
                const Icon = t.icon;
                const on = tool === i;
                return (
                  <div
                    key={t.title}
                    data-d={`tool${i}`}
                    className={cn(
                      "rounded-xl border bg-card p-3 text-left transition-all",
                      on ? "border-transparent shadow-[0_0_0_2px_#E85D3A]" : "border-border",
                    )}
                  >
                    <Icon className="h-4 w-4 text-caramel-deep" />
                    <p className="mt-2 font-display text-sm font-bold">{t.title}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                      {t.blurb}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
