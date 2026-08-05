import { useCallback, useRef, useState } from "react";
import getStroke from "perfect-freehand";
import {
  ChevronDown,
  ChevronUp,
  Eraser,
  Highlighter,
  Pencil,
  Redo2,
  Trash2,
  Undo2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { AnnotationStroke, AnnotationTool } from "@/lib/mock-exam-session";

const PEN_COLORS = [
  { id: "black", value: "#1a1a1a", label: "Black" },
  { id: "orange", value: "#EA6A2C", label: "Orange" },
] as const;

const HIGHLIGHTER_COLOR = "#F7D354";

type Props = {
  enabled: boolean;
  strokes: AnnotationStroke[];
  onChange: (strokes: AnnotationStroke[]) => void;
  className?: string;
};

function strokePath(stroke: AnnotationStroke): string {
  const outline = getStroke(stroke.points, {
    size: stroke.size,
    thinning: stroke.tool === "highlighter" ? 0.1 : 0.55,
    smoothing: 0.65,
    streamline: 0.55,
    easing: (t) => t,
    start: { taper: 0, cap: true },
    end: { taper: stroke.tool === "pen" ? 8 : 0, cap: true },
  });
  if (outline.length === 0) return "";
  const d = outline.reduce((acc, [x, y], i) => {
    const cmd = i === 0 ? "M" : "L";
    return `${acc}${cmd}${x.toFixed(1)},${y.toFixed(1)} `;
  }, "");
  return `${d}Z`;
}

export function AnnotationLayer({ enabled, strokes, onChange, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tool, setTool] = useState<AnnotationTool>("pen");
  const [color, setColor] = useState<string>(PEN_COLORS[0].value);
  const [penSize, setPenSize] = useState(3);
  const [highlighterSize, setHighlighterSize] = useState(18);
  const [collapsed, setCollapsed] = useState(false);
  const [draft, setDraft] = useState<AnnotationStroke | null>(null);
  const [redoStack, setRedoStack] = useState<AnnotationStroke[]>([]);
  const drawing = useRef(false);
  const strokesRef = useRef(strokes);
  strokesRef.current = strokes;

  const size = tool === "highlighter" ? highlighterSize : tool === "eraser" ? 22 : penSize;
  const activeColor = tool === "highlighter" ? HIGHLIGHTER_COLOR : color;

  const toLocal = useCallback((e: React.PointerEvent | PointerEvent) => {
    const el = containerRef.current;
    if (!el) return [0, 0, 0.5];
    const r = el.getBoundingClientRect();
    const pressure = "pressure" in e && e.pressure > 0 ? e.pressure : 0.5;
    return [e.clientX - r.left, e.clientY - r.top, pressure];
  }, []);

  const eraseNear = useCallback(
    (x: number, y: number, radius: number) => {
      const r2 = radius * radius;
      const next = strokesRef.current.filter((s) => {
        if (s.tool === "eraser") return true;
        return !s.points.some(([px, py]) => {
          const dx = px - x;
          const dy = py - y;
          return dx * dx + dy * dy < r2;
        });
      });
      strokesRef.current = next;
      onChange(next);
    },
    [onChange],
  );

  const onPointerDown = (e: React.PointerEvent) => {
    if (!enabled) return;
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drawing.current = true;
    const [x, y, p] = toLocal(e);
    if (tool === "eraser") {
      eraseNear(x, y, size);
      return;
    }
    setRedoStack([]);
    setDraft({
      tool,
      color: activeColor,
      size,
      points: [[x, y, p]],
    });
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!enabled || !drawing.current) return;
    const [x, y, p] = toLocal(e);
    if (tool === "eraser") {
      eraseNear(x, y, size);
      return;
    }
    setDraft((prev) => {
      if (!prev) return prev;
      return { ...prev, points: [...prev.points, [x, y, p]] };
    });
  };

  const endStroke = () => {
    if (!drawing.current) return;
    drawing.current = false;
    setDraft((prev) => {
      if (prev && prev.points.length > 1) {
        onChange([...strokes, prev]);
      }
      return null;
    });
  };

  const undo = () => {
    if (strokes.length === 0) return;
    const next = strokes.slice(0, -1);
    setRedoStack((r) => [...r, strokes[strokes.length - 1]]);
    onChange(next);
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const stroke = redoStack[redoStack.length - 1];
    setRedoStack((r) => r.slice(0, -1));
    onChange([...strokes, stroke]);
  };

  const clear = () => {
    if (strokes.length === 0) return;
    setRedoStack([]);
    onChange([]);
  };

  const display = draft ? [...strokes, draft] : strokes;

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-20", className)}>
      <div
        ref={containerRef}
        className={cn(
          "absolute inset-0 touch-none",
          enabled ? "pointer-events-auto cursor-crosshair" : "pointer-events-none",
          enabled && "select-none",
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endStroke}
        onPointerCancel={endStroke}
        onPointerLeave={(e) => {
          if (drawing.current) endStroke();
          void e;
        }}
        aria-hidden={!enabled}
      >
        <svg className="h-full w-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
          {display.map((stroke, i) => {
            const d = strokePath(stroke);
            if (!d) return null;
            return (
              <path
                key={i}
                d={d}
                fill={stroke.color}
                opacity={stroke.tool === "highlighter" ? 0.35 : 1}
                style={{ mixBlendMode: stroke.tool === "highlighter" ? "multiply" : "normal" }}
              />
            );
          })}
        </svg>
      </div>

      {/* Floating toolbar — always receives clicks */}
      <div className="pointer-events-auto absolute bottom-3 left-1/2 z-30 -translate-x-1/2 sm:bottom-4">
        <div className="rounded-xl border border-border bg-card/95 shadow-lg backdrop-blur">
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            className="flex w-full items-center justify-center gap-1 border-b border-border/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-taupe hover:bg-secondary/50"
            aria-expanded={!collapsed}
          >
            Annotate
            {collapsed ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
          {!collapsed && (
            <div className="flex flex-wrap items-center gap-1 px-2 py-2">
              <ToolBtn active={tool === "pen"} onClick={() => setTool("pen")} label="Pen">
                <Pencil className="h-3.5 w-3.5" />
              </ToolBtn>
              <ToolBtn
                active={tool === "highlighter"}
                onClick={() => setTool("highlighter")}
                label="Highlighter"
              >
                <Highlighter className="h-3.5 w-3.5" />
              </ToolBtn>
              <ToolBtn active={tool === "eraser"} onClick={() => setTool("eraser")} label="Eraser">
                <Eraser className="h-3.5 w-3.5" />
              </ToolBtn>
              <span className="mx-0.5 h-5 w-px bg-border" />
              {tool !== "highlighter" &&
                PEN_COLORS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    title={c.label}
                    aria-label={c.label}
                    onClick={() => {
                      setColor(c.value);
                      setTool("pen");
                    }}
                    className={cn(
                      "h-6 w-6 rounded-full border-2 transition-transform",
                      color === c.value && tool === "pen" ? "scale-110 border-foreground" : "border-transparent",
                    )}
                    style={{ backgroundColor: c.value }}
                  />
                ))}
              {tool === "highlighter" && (
                <span
                  className="h-6 w-6 rounded-full border-2 border-foreground"
                  style={{ backgroundColor: HIGHLIGHTER_COLOR }}
                  title="Yellow highlighter"
                />
              )}
              <span className="mx-0.5 h-5 w-px bg-border" />
              <label className="flex items-center gap-1 text-[10px] text-taupe">
                Size
                <input
                  type="range"
                  min={tool === "highlighter" ? 10 : 1}
                  max={tool === "highlighter" ? 36 : 12}
                  value={tool === "highlighter" ? highlighterSize : penSize}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    if (tool === "highlighter") setHighlighterSize(v);
                    else setPenSize(v);
                  }}
                  className="w-16 accent-[var(--caramel-deep)]"
                />
              </label>
              <span className="mx-0.5 h-5 w-px bg-border" />
              <ToolBtn onClick={undo} label="Undo" disabled={strokes.length === 0}>
                <Undo2 className="h-3.5 w-3.5" />
              </ToolBtn>
              <ToolBtn onClick={redo} label="Redo" disabled={redoStack.length === 0}>
                <Redo2 className="h-3.5 w-3.5" />
              </ToolBtn>
              <ToolBtn onClick={clear} label="Clear current question" disabled={strokes.length === 0}>
                <Trash2 className="h-3.5 w-3.5" />
              </ToolBtn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ToolBtn({
  children,
  onClick,
  label,
  active,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors disabled:opacity-35",
        active ? "bg-caramel-deep text-white" : "text-foreground hover:bg-secondary",
      )}
    >
      {children}
    </button>
  );
}
