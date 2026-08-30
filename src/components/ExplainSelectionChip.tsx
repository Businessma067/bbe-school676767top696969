"use client";

import { useCallback, useEffect, useState } from "react";
import { usePracticeCaseActions } from "@/lib/practice-case-context";

type ChipState = {
  text: string;
  x: number;
  y: number;
};

function selectionInsidePracticeSurface(sel: Selection): boolean {
  if (sel.rangeCount === 0) return false;
  const range = sel.getRangeAt(0);
  const node = range.commonAncestorContainer;
  const el = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
  return Boolean(el?.closest("[data-practice-surface]"));
}

function selectionRect(sel: Selection): DOMRect | null {
  if (sel.rangeCount === 0) return null;
  const rect = sel.getRangeAt(0).getBoundingClientRect();
  if (!rect || (rect.width === 0 && rect.height === 0)) return null;
  return rect;
}

export function ExplainSelectionChip() {
  const { openAssistantWithPrompt } = usePracticeCaseActions();
  const [chip, setChip] = useState<ChipState | null>(null);

  const refreshFromSelection = useCallback(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) {
      setChip(null);
      return;
    }
    const text = sel.toString().trim();
    if (text.length < 2 || !selectionInsidePracticeSurface(sel)) {
      setChip(null);
      return;
    }
    const rect = selectionRect(sel);
    if (!rect) {
      setChip(null);
      return;
    }
    const pad = 8;
    const x = Math.min(Math.max(rect.left + rect.width / 2, pad), window.innerWidth - pad);
    const y = Math.max(rect.top - 8, pad);
    setChip({ text: text.slice(0, 2000), x, y });
  }, []);

  useEffect(() => {
    const onSel = () => {
      // Defer so browser finishes updating the selection.
      requestAnimationFrame(refreshFromSelection);
    };
    document.addEventListener("selectionchange", onSel);
    document.addEventListener("mouseup", onSel);
    window.addEventListener("scroll", onSel, true);
    window.addEventListener("resize", onSel);
    return () => {
      document.removeEventListener("selectionchange", onSel);
      document.removeEventListener("mouseup", onSel);
      window.removeEventListener("scroll", onSel, true);
      window.removeEventListener("resize", onSel);
    };
  }, [refreshFromSelection]);

  if (!chip) return null;

  return (
    <button
      type="button"
      data-explain-chip
      style={{ left: chip.x, top: chip.y, transform: "translate(-50%, -100%)" }}
      className="fixed z-[60] inline-flex items-center justify-center rounded-full border border-border bg-foreground px-3 py-1.5 text-xs font-semibold text-background shadow-lg transition-opacity hover:opacity-90"
      onMouseDown={(e) => {
        // Keep selection until we read it in onClick.
        e.preventDefault();
      }}
      onClick={() => {
        openAssistantWithPrompt({ selection: chip.text, intent: "explain" });
        setChip(null);
        window.getSelection()?.removeAllRanges();
      }}
    >
      Explain
    </button>
  );
}
