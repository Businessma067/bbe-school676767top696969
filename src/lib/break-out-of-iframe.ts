/**
 * After a Monobank iframe payment, redirectUrl loads inside the iframe.
 * Promote this page to the top window so the user leaves the pay widget.
 */
export function breakOutOfIframe(): void {
  if (typeof window === "undefined") return;
  try {
    if (window.top && window.top !== window.self) {
      window.top.location.replace(window.location.href);
    }
  } catch {
    // Cross-origin parent — ignore.
  }
}
