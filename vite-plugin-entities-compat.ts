import path from "node:path";
import type { Plugin } from "vite";

/**
 * REQUIRED for Cloudflare/Nitro builds.
 * @react-email/render imports entities v4 paths (`entities/lib/decode.js`).
 * When a hoisted entities@6 wins resolution, those subpaths are missing and
 * the Lovable preview build fails. Keep this plugin even if aliases look unused.
 */
export function entitiesCompatPlugin(): Plugin {
  const entitiesRoot = path.resolve(process.cwd(), "node_modules/entities");
  return {
    name: "entities-compat",
    enforce: "pre",
    config() {
      return {
        resolve: {
          alias: {
            "entities/lib/decode.js": path.resolve(entitiesRoot, "dist/esm/decode.js"),
            "entities/lib/encode.js": path.resolve(entitiesRoot, "dist/esm/encode.js"),
          },
        },
      };
    },
  };
}
