// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { loadEnv, type Plugin } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { sitemapPlugin } from "./vite-plugin-sitemap";
import { entitiesCompatPlugin } from "./vite-plugin-entities-compat";

const I18N_JSX_SOURCE = "@/lib/i18n/jsx";

/**
 * plugin-react adds `${jsxImportSource}/jsx-*runtime` to optimizeDeps.include.
 * Pre-bundling app code would serve a stale runtime and a second copy of
 * PageLangContext, so drop those entries after plugin-react's config hook.
 */
function unbundledJsxRuntimePlugin(): Plugin {
  return {
    name: "unbundled-i18n-jsx-runtime",
    enforce: "post",
    config(config) {
      const include = config.optimizeDeps?.include;
      if (include) {
        config.optimizeDeps!.include = include.filter((id) => !id.startsWith(I18N_JSX_SOURCE));
      }
    },
  };
}

// Server routes (email webhooks) need non-VITE_ env vars in process.env.
const serverEnv = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
Object.assign(process.env, serverEnv);

export default defineConfig({
  // App JSX goes through a runtime that renders translatable strings in the
  // URL's language, so /de and /uk pages are server-rendered in DE/UK. It must
  // be an aliased path: Vite SSR externalizes bare `react/*` specifiers before
  // plugins can redirect them.
  react: { jsxImportSource: I18N_JSX_SOURCE },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [sitemapPlugin(), entitiesCompatPlugin(), unbundledJsxRuntimePlugin()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/katex")) return "katex";
            if (
              id.includes("node_modules/react-markdown") ||
              id.includes("node_modules/remark-") ||
              id.includes("node_modules/rehype-") ||
              id.includes("node_modules/unified") ||
              id.includes("node_modules/mdast-") ||
              id.includes("node_modules/hast-")
            ) {
              return "markdown";
            }
            if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-")) {
              return "charts";
            }
            // Keep each math chapter bank in its own async chunk.
            const mathCh = id.match(/[/\\]src[/\\]data[/\\]math-ch(\d+)/);
            if (mathCh) return `math-ch${mathCh[1]}`;
            if (id.includes("/src/data/math-cases-ch") || id.includes("\\src\\data\\math-cases-ch")) {
              return "math-cases";
            }
            if (
              id.includes("/src/data/math-ch") ||
              id.includes("\\src\\data\\math-ch")
            ) {
              return "math-data";
            }
          },
        },
      },
    },
  },
});
