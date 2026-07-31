import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Highlighter, Underline, StickyNote, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type Annotation = {
  id: string;
  start: number;
  end: number;
  type: "highlight" | "underline";
  color: "yellow" | "green" | "pink" | "blue";
  note?: string;
};

const COLORS: { key: Annotation["color"]; label: string; swatch: string; bg: string; line: string }[] = [
  { key: "yellow", label: "Yellow", swatch: "#f7d354", bg: "rgba(247,211,84,0.55)", line: "#d9a400" },
  { key: "green", label: "Green", swatch: "#7fd48b", bg: "rgba(127,212,139,0.5)", line: "#2e9e4b" },
  { key: "pink", label: "Pink", swatch: "#f39ab5", bg: "rgba(243,154,181,0.5)", line: "#d4326a" },
  { key: "blue", label: "Blue", swatch: "#8ec5f0", bg: "rgba(142,197,240,0.5)", line: "#1f77c2" },
];

const colorOf = (c: Annotation["color"]) => COLORS.find((x) => x.key === c) ?? COLORS[0];

function loadAnnotations(storageKey: string): Annotation[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(`passage-annotations:${storageKey}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Annotation[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

type Segment = { start: number; end: number; text: string; anns: Annotation[]; ai: boolean };

/**
 * Reading passage with a text-annotation layer: select text to highlight,
 * underline, or attach a hover note. Annotations persist per passage in
 * localStorage. The AI highlight overlay is rendered on top of it.
 */
export function AnnotatablePassage({
  passage,
  storageKey,
  aiHighlight = "",
  reveal = false,
  aiHighlightRef,
  className,
}: {
  passage: string;
  storageKey: string;
  aiHighlight?: string;
  reveal?: boolean;
  aiHighlightRef?: React.MutableRefObject<HTMLSpanElement | null>;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [selection, setSelection] = useState<{ start: number; end: number; x: number; y: number } | null>(null);
  const [activeAnn, setActiveAnn] = useState<{ ann: Annotation; x: number; y: number } | null>(null);
  const [noteDraft, setNoteDraft] = useState<{ target: Annotation; value: string } | null>(null);
  const [color, setColor] = useState<Annotation["color"]>("yellow");
  const [mode, setMode] = useState<"highlight" | "underline" | "note" | "erase" | null>(null);


  useEffect(() => {
    setAnnotations(loadAnnotations(storageKey));
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    try {
      window.localStorage.setItem(`passage-annotations:${storageKey}`, JSON.stringify(annotations));
    } catch { /* quota — ignore */ }
  }, [annotations, storageKey, hydrated]);

  const paragraphs = useMemo(() => {
    const parts = passage.split(/\n\n+/);
    let cursor = 0;
    return parts.map((text) => {
      const start = cursor;
      cursor += text.length + 2;
      return { text, start, end: start + text.length };
    });
  }, [passage]);

  const aiRange = useMemo(() => {
    if (!aiHighlight) return null;
    const i = passage.indexOf(aiHighlight);
    return i === -1 ? null : { start: i, end: i + aiHighlight.length };
  }, [passage, aiHighlight]);

  const readSelection = useCallback(() => {
    const sel = window.getSelection();
    const root = containerRef.current;
    if (!sel || sel.isCollapsed || !root) return null;
    const range = sel.getRangeAt(0);
    if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) return null;

    const abs = (node: Node, offset: number): number | null => {
      let el: HTMLElement | null =
        node.nodeType === Node.TEXT_NODE ? node.parentElement : (node as HTMLElement);
      while (el && el.dataset?.["start"] === undefined) el = el.parentElement;
      if (!el) return null;
      return Number(el.dataset["start"]) + offset;
    };
    const s = abs(range.startContainer, range.startOffset);
    const e = abs(range.endContainer, range.endOffset);
    if (s == null || e == null || e <= s) return null;
    const rect = range.getBoundingClientRect();
    const rootRect = root.getBoundingClientRect();
    return {
      start: Math.min(s, e),
      end: Math.max(s, e),
      x: rect.left - rootRect.left + rect.width / 2 + root.scrollLeft,
      y: rect.top - rootRect.top + root.scrollTop,
    };
  }, []);

  const clearSelection = () => {
    window.getSelection()?.removeAllRanges();
    setSelection(null);
  };

  const applyAt = (
    range: { start: number; end: number; x: number; y: number },
    type: Annotation["type"],
    withNote = false,
  ) => {
    const ann: Annotation = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      start: range.start,
      end: range.end,
      type,
      color,
      ...(withNote ? { note: "" } : {}),
    };
    setAnnotations((prev) => [...prev, ann]);
    if (withNote) {
      setActiveAnn({ ann, x: range.x, y: range.y });
      setNoteDraft({ target: ann, value: "" });
    }
    clearSelection();
  };

  const eraseIn = (range: { start: number; end: number }) => {
    setAnnotations((prev) => prev.filter((a) => a.end <= range.start || a.start >= range.end));
    clearSelection();
  };

  const onMouseUp = () => {
    const next = readSelection();
    if (next && mode) {
      setActiveAnn(null);
      if (mode === "erase") eraseIn(next);
      else if (mode === "note") applyAt(next, "highlight", true);
      else applyAt(next, mode);
      return;
    }
    setSelection(next);
    if (next) setActiveAnn(null);
  };

  const addAnnotation = (type: Annotation["type"]) => {
    if (!selection) return;
    applyAt(selection, type);
  };

  const startNote = () => {
    if (!selection) return;
    applyAt(selection, "highlight", true);
  };


  const removeAnnotation = (id: string) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== id));
    setActiveAnn(null);
    setNoteDraft(null);
  };

  const saveNote = () => {
    if (!noteDraft) return;
    const { target, value } = noteDraft;
    setAnnotations((prev) =>
      prev.map((a) => (a.id === target.id ? { ...a, note: value.trim() } : a)).filter((a) => a.note !== "" || a.id !== target.id || value.trim() !== ""),
    );
    setNoteDraft(null);
  };

  const segmentsFor = (pStart: number, text: string): Segment[] => {
    const pEnd = pStart + text.length;
    const points = new Set<number>([pStart, pEnd]);
    for (const a of annotations) {
      if (a.end > pStart && a.start < pEnd) {
        points.add(Math.max(pStart, a.start));
        points.add(Math.min(pEnd, a.end));
      }
    }
    if (aiRange && aiRange.end > pStart && aiRange.start < pEnd) {
      points.add(Math.max(pStart, aiRange.start));
      points.add(Math.min(pEnd, aiRange.end));
    }
    const sorted = [...points].sort((a, b) => a - b);
    const out: Segment[] = [];
    for (let i = 0; i < sorted.length - 1; i++) {
      const s = sorted[i]!;
      const e = sorted[i + 1]!;
      if (e <= s) continue;
      out.push({
        start: s,
        end: e,
        text: text.slice(s - pStart, e - pStart),
        anns: annotations.filter((a) => a.start <= s && a.end >= e),
        ai: !!aiRange && aiRange.start <= s && aiRange.end >= e,
      });
    }
    return out;
  };

  const tools: { key: NonNullable<typeof mode>; label: string; icon: typeof Highlighter }[] = [
    { key: "highlight", label: "Highlight", icon: Highlighter },
    { key: "underline", label: "Underline", icon: Underline },
    { key: "note", label: "Note", icon: StickyNote },
    { key: "erase", label: "Erase", icon: Eraser },
  ];

  return (
    <div ref={containerRef} className={cn("relative", className)} onMouseUp={onMouseUp}>
      {/* Persistent tool bar — pick a tool first, then select text */}
      <div className="sticky top-0 z-20 -mx-1 mb-3 flex flex-wrap items-center gap-1.5 rounded-xl border border-border bg-card/95 px-2 py-1.5 font-sans shadow-sm backdrop-blur">
        <div className="flex items-center gap-1">
          {COLORS.map((c) => (
            <button
              key={c.key}
              onClick={() => setColor(c.key)}
              aria-label={c.label}
              className={cn(
                "h-4 w-4 rounded-full border transition",
                color === c.key ? "ring-2 ring-foreground ring-offset-1" : "border-border",
              )}
              style={{ backgroundColor: c.swatch }}
            />
          ))}
        </div>
        <span className="mx-0.5 h-5 w-px bg-border" />
        {tools.map((t) => {
          const Icon = t.icon;
          const on = mode === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setMode(on ? null : t.key)}
              aria-pressed={on}
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold transition",
                on
                  ? t.key === "erase"
                    ? "bg-destructive text-destructive-foreground"
                    : "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary",
              )}
            >
              <Icon className="h-3.5 w-3.5" /> {t.label}
            </button>
          );
        })}
        <span className="ml-auto pl-2 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
          {mode ? "Now select the text" : "Pick a tool, then select text"}
        </span>
      </div>

      {paragraphs.map((p) => (
        <p key={p.start} className="mb-3 whitespace-pre-line">
          {segmentsFor(p.start, p.text).map((seg) => {
            const hl = seg.anns.find((a) => a.type === "highlight");
            const ul = seg.anns.find((a) => a.type === "underline");
            const noted = seg.anns.find((a) => a.note);
            const style: React.CSSProperties = {};
            if (hl) style.backgroundColor = colorOf(hl.color).bg;
            if (ul) {
              style.textDecoration = "underline";
              style.textDecorationColor = colorOf(ul.color).line;
              style.textDecorationThickness = "2px";
              style.textUnderlineOffset = "3px";
            }
            if (noted) style.borderBottom = `2px dotted ${colorOf(noted.color).line}`;
            const primary = noted ?? hl ?? ul;
            const isAi = seg.ai && reveal;
            const content = (
              <span
                data-start={seg.start}
                className={cn(
                  isAi && "neon-highlight",
                  primary && "cursor-pointer rounded-[2px]",
                )}
                style={{ ...style, ...(seg.ai && !reveal ? { padding: "0 2px" } : {}) }}
                ref={seg.ai && aiHighlightRef && seg.start === aiRange?.start ? aiHighlightRef : undefined}
                onClick={(e) => {
                  if (!primary) return;
                  const root = containerRef.current;
                  if (!root) return;
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  const rootRect = root.getBoundingClientRect();
                  setSelection(null);
                  setActiveAnn({
                    ann: primary,
                    x: rect.left - rootRect.left + rect.width / 2 + root.scrollLeft,
                    y: rect.top - rootRect.top + root.scrollTop,
                  });
                }}
                title={primary?.note || undefined}
              >
                {seg.text}
              </span>
            );
            return <span key={seg.start}>{content}</span>;
          })}
        </p>
      ))}

      {/* Selection toolbar */}
      {selection && (
        <div
          className="absolute z-30 -translate-x-1/2 -translate-y-full rounded-xl border border-border bg-card p-1.5 shadow-lg"
          style={{ left: selection.x, top: Math.max(selection.y - 6, 0) }}
          onMouseUp={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-1">
            {COLORS.map((c) => (
              <button
                key={c.key}
                onClick={() => setColor(c.key)}
                aria-label={c.label}
                className={cn(
                  "h-4 w-4 rounded-full border transition",
                  color === c.key ? "ring-2 ring-foreground ring-offset-1" : "border-border",
                )}
                style={{ backgroundColor: c.swatch }}
              />
            ))}
            <span className="mx-1 h-5 w-px bg-border" />
            <button
              onClick={() => addAnnotation("highlight")}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary"
            >
              <Highlighter className="h-3.5 w-3.5" /> Highlight
            </button>
            <button
              onClick={() => addAnnotation("underline")}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary"
            >
              <Underline className="h-3.5 w-3.5" /> Underline
            </button>
            <button
              onClick={startNote}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary"
            >
              <StickyNote className="h-3.5 w-3.5" /> Note
            </button>
          </div>
        </div>
      )}

      {/* Existing annotation actions */}
      {activeAnn && !noteDraft && (
        <div
          className="absolute z-30 w-56 -translate-x-1/2 -translate-y-full rounded-xl border border-border bg-card p-2 shadow-lg"
          style={{ left: activeAnn.x, top: Math.max(activeAnn.y - 6, 0) }}
          onMouseUp={(e) => e.stopPropagation()}
        >
          {activeAnn.ann.note ? (
            <p className="mb-2 whitespace-pre-line rounded-md bg-secondary/70 p-2 text-[11px] leading-relaxed text-foreground">
              {activeAnn.ann.note}
            </p>
          ) : null}
          <div className="flex items-center justify-between gap-1">
            <button
              onClick={() => setNoteDraft({ target: activeAnn.ann, value: activeAnn.ann.note ?? "" })}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold text-foreground hover:bg-secondary"
            >
              <StickyNote className="h-3.5 w-3.5" /> {activeAnn.ann.note ? "Edit" : "Add note"}
            </button>
            <button
              onClick={() => removeAnnotation(activeAnn.ann.id)}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="h-3.5 w-3.5" /> Remove
            </button>
            <button
              onClick={() => setActiveAnn(null)}
              aria-label="Close"
              className="rounded-md p-1 text-muted-foreground hover:bg-secondary"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Note editor */}
      {noteDraft && (
        <div
          className="absolute z-40 w-64 -translate-x-1/2 rounded-xl border border-border bg-card p-2 shadow-xl"
          style={{
            left: activeAnn?.x ?? selection?.x ?? 120,
            top: (activeAnn?.y ?? selection?.y ?? 0) + 22,
          }}
          onMouseUp={(e) => e.stopPropagation()}
        >
          <textarea
            autoFocus
            value={noteDraft.value}
            onChange={(e) => setNoteDraft({ ...noteDraft, value: e.target.value })}
            placeholder="Your note…"
            className="h-20 w-full resize-none rounded-md border border-border bg-background p-2 font-sans text-[11px] text-foreground outline-none focus:border-primary"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => {
                if (!noteDraft.target.note) removeAnnotation(noteDraft.target.id);
                setNoteDraft(null);
              }}
              className="rounded-md px-2 py-1 text-[11px] font-semibold text-muted-foreground hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              onClick={saveNote}
              className="rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function AnnotationsToolbarInfo({ onClear, count }: { onClear: () => void; count: number }) {
  return (
    <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
      <span>{count} notes</span>
      {count > 0 && (
        <button onClick={onClear} className="rounded px-1 py-0.5 text-destructive hover:bg-destructive/10">
          Clear
        </button>
      )}
    </div>
  );
}
