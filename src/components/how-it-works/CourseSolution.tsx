import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const LETTERS = "ABCDE";

/** Right-hand solution sheet: same dim + 900ms slide as live practice. */
export function CourseSolution({
  open,
  kicker,
  answerKey,
  notes,
  active,
  footer,
}: {
  open: boolean;
  kicker: string;
  answerKey: boolean[];
  notes: { title: string; body: string }[];
  active: number;
  footer?: ReactNode;
}) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[5] bg-black/75 transition-opacity duration-700 ease-in-out",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 z-10 w-full transition-transform duration-[900ms] ease-in-out sm:w-[54%]",
          open ? "translate-x-0" : "pointer-events-none translate-x-[105%]",
        )}
      >
        <div
          data-d="expl-scroll"
          className="practice-scroll h-full overflow-y-auto border-l border-border bg-card p-4 shadow-2xl sm:p-5"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-primary">{kicker}</p>
          <section className="mb-6 overflow-x-auto border-b border-border/60 pb-5">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-widest text-foreground">
              Answer key
            </p>
            <table className="w-full min-w-[14rem] border-collapse border border-foreground/20 text-center text-[13px] shadow-sm">
              <thead>
                <tr className="bg-foreground text-background">
                  {answerKey.map((_, i) => (
                    <th
                      key={i}
                      className="border-b border-foreground/20 px-2 py-2 text-[11px] font-bold uppercase tracking-wide"
                    >
                      {LETTERS[i]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-card">
                  {answerKey.map((isTrue, i) => (
                    <td
                      key={i}
                      className="px-2 py-2.5 text-[12px] font-bold uppercase tracking-widest text-foreground"
                    >
                      {isTrue ? "TRUE" : "FALSE"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </section>
          <div className="space-y-3">
            {notes.map((note, i) => (
              <div
                key={note.title}
                data-d={`e${i}`}
                className={cn(
                  "rounded-xl border p-3 transition-all duration-700 ease-out",
                  active === i
                    ? "border-primary/40 bg-primary/5 opacity-100 shadow-sm"
                    : "border-transparent bg-transparent opacity-45",
                )}
              >
                <p className="mb-1.5 font-display text-sm font-bold text-foreground">{note.title}</p>
                <p className="text-[13px] leading-relaxed text-foreground/90">{note.body}</p>
              </div>
            ))}
          </div>
          {footer}
        </div>
      </div>
    </>
  );
}
