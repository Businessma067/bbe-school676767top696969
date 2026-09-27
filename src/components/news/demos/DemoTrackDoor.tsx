import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoCursor } from "./DemoCursor";
import { DemoShell, type DemoProps } from "./DemoShell";
import { useDemoPlayer } from "./useDemoPlayer";

const BBE = "#E85D3A";
const WISO = "#3a5a78";

/** Homepage BBE vs WiSo door chooser. */
export function DemoTrackDoor({ caption }: DemoProps) {
  const [picked, setPicked] = useState<"none" | "bbe" | "wiso">("none");
  const [hover, setHover] = useState<"none" | "bbe" | "wiso">("none");

  const { stageRef, scrollRef, cursorRef, clicking, fade, setFade } = useDemoPlayer(
    async (api) => {
      setFade(true);
      await api.wait(200);
      setPicked("none");
      setHover("none");
      setFade(false);
      await api.wait(500);

      await api.moveTo('[data-d="wiso"]');
      setHover("wiso");
      await api.wait(550);
      await api.moveTo('[data-d="bbe"]');
      setHover("bbe");
      await api.wait(400);
      await api.click();
      setPicked("bbe");
      setHover("bbe");
      await api.wait(900);

      await api.moveTo('[data-d="enter"]');
      await api.click();
      await api.wait(1300);
    },
    [],
  );

  return (
    <DemoShell url="/" caption={caption} stageClassName="bg-paper p-3 sm:p-4">
      <div ref={stageRef} className="relative">
        <div
          ref={scrollRef}
          className={cn(
            "mx-auto flex h-[340px] max-w-lg flex-col justify-center transition-opacity duration-500 sm:h-[380px]",
            fade ? "opacity-0" : "opacity-100",
          )}
        >
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-taupe">
            Entrance exam
          </p>
          <h3 className="text-center font-display text-xl font-bold tracking-tight sm:text-2xl">
            Which track are you preparing for?
          </h3>
          <p className="mx-auto mt-1 max-w-sm text-center text-sm text-muted-foreground">
            Two clear doors — practice stays on the path you choose.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div
              data-d="bbe"
              className={cn(
                "rounded-2xl border bg-card p-4 text-left shadow-sm transition-all duration-400",
                picked === "bbe" || hover === "bbe"
                  ? "scale-[1.02] shadow-md"
                  : "border-border opacity-85",
                picked === "wiso" && "opacity-45",
              )}
              style={
                picked === "bbe" || hover === "bbe"
                  ? { borderColor: BBE, boxShadow: `0 0 0 2px ${BBE}55` }
                  : undefined
              }
            >
              <span
                className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: BBE }}
              >
                BBE
              </span>
              <p className="mt-3 font-display text-base font-bold">Business · English</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Mathematics, English, Economics
              </p>
            </div>
            <div
              data-d="wiso"
              className={cn(
                "rounded-2xl border bg-card p-4 text-left shadow-sm transition-all duration-400",
                picked === "wiso" || hover === "wiso"
                  ? "scale-[1.02] shadow-md"
                  : "border-border opacity-85",
                picked === "bbe" && "opacity-45",
              )}
              style={
                picked === "wiso" || hover === "wiso"
                  ? { borderColor: WISO, boxShadow: `0 0 0 2px ${WISO}55` }
                  : undefined
              }
            >
              <span
                className="rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: WISO }}
              >
                WiSo
              </span>
              <p className="mt-3 font-display text-base font-bold">Wirtschaft · Deutsch</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Mathematik, Deutsch, Wirtschaft
              </p>
            </div>
          </div>

          <span
            data-d="enter"
            className={cn(
              "mx-auto mt-4 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-opacity",
              picked === "none" ? "opacity-40" : "opacity-100",
            )}
            style={{ backgroundColor: picked === "wiso" ? WISO : BBE }}
          >
            Enter {picked === "wiso" ? "WiSo" : "BBE"} <ArrowRight className="h-4 w-4" />
          </span>
        </div>
        <DemoCursor cursorRef={cursorRef} clicking={clicking} />
      </div>
    </DemoShell>
  );
}
