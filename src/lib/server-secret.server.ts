/**
 * Read a server-only secret at request time.
 *
 * Lovable Cloud secrets and Cloudflare Worker bindings are available on the
 * server runtime — never put payment tokens in `VITE_*` / client env.
 *
 * On Cloudflare Workers, prefer `cloudflare:workers` env (bindings), then
 * fall back to `process.env` (nodejs_compat / local `.env` via Vite loadEnv).
 */
export async function getServerSecret(name: string): Promise<string | undefined> {
  const fromProcess = trimSecret(process.env[name]);
  if (fromProcess) return fromProcess;

  try {
    // Dynamic specifier so local tooling can still resolve CF Workers bindings.
    const mod = (await import("cloudflare:workers")) as {
      env?: Record<string, unknown>;
    };
    const fromCf = trimSecret(mod.env?.[name]);
    if (fromCf) return fromCf;
  } catch {
    // Local Node / non-Workers runtime — cloudflare:workers may be unavailable.
  }

  return undefined;
}

function trimSecret(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}
