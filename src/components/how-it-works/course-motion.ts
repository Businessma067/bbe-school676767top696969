import type { DemoPlayerApi } from "@/components/news/demos/useDemoPlayer";

/** Scroll a panel that sits outside the main task scroller, then the cursor can land on the row. */
export async function scrollPanelTo(
  api: DemoPlayerApi,
  panelSelector: string,
  itemSelector: string,
) {
  await api.flush();
  const stage = api.stage();
  const panel = stage?.querySelector<HTMLElement>(panelSelector);
  const el = stage?.querySelector<HTMLElement>(itemSelector);
  if (!panel || !el) return;
  const pad = 16;
  const pb = panel.getBoundingClientRect();
  const eb = el.getBoundingClientRect();
  let delta = 0;
  if (eb.top < pb.top + pad) delta = eb.top - (pb.top + pad);
  else if (eb.bottom > pb.bottom - pad) delta = eb.bottom - (pb.bottom - pad);
  if (Math.abs(delta) < 2) return;
  const start = panel.scrollTop;
  const max = Math.max(0, panel.scrollHeight - panel.clientHeight);
  const next = Math.max(0, Math.min(start + delta, max));
  await api.tween(560, (eased) => {
    panel.scrollTop = start + (next - start) * eased;
  });
}
