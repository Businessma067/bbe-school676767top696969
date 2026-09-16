/** Ambient module so server code can optionally read Cloudflare Worker bindings. */
declare module "cloudflare:workers" {
  export const env: Record<string, unknown>;
}
