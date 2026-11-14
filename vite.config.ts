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
    resolve: {
      alias: {
        // The Node build of @vercel/oidc (pulled in by `ai`) requires node:fs at load,
        // which crashes every SSR request on the Worker runtime. Use its fs-free build.
        "@vercel/oidc": new URL("./node_modules/@vercel/oidc/dist/index-browser.js", import.meta.url)
          .pathname,
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // AI SDK is server-route only — keep it out of shared client vendor chunks.
            if (
              id.includes("node_modules/ai/") ||
              id.includes("node_modules\\ai\\") ||
              id.includes("node_modules/@ai-sdk/") ||
              id.includes("node_modules\\@ai-sdk\\")
            ) {
              return "ai-sdk-server";
            }
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
            if (
              id.includes("node_modules/@supabase/") ||
              id.includes("node_modules\\@supabase\\") ||
              id.includes("/integrations/supabase/") ||
              id.includes("\\integrations\\supabase\\")
            ) {
              return "supabase-client";
            }
            if (id.includes("FloatingAssistant")) {
              return "floating-assistant";
            }
            if (
              id.includes("CalendlyInlineEmbed") ||
              id.includes("BookCallSection") ||
              id.includes("BookCallTab")
            ) {
              return "calendly";
            }
            // Keep jsx runtime out of the i18n chunk — it is the app-wide import source.
            if (
              (id.includes("/src/lib/i18n/") || id.includes("\\src\\lib\\i18n\\")) &&
              !id.includes("/src/lib/i18n/jsx") &&
              !id.includes("\\src\\lib\\i18n\\jsx")
            ) {
              return "i18n";
            }
            if (
              id.includes("Ti30MathPrint") ||
              id.includes("/calculator/Ti30") ||
              id.includes("\\calculator\\Ti30")
            ) {
              return "ti30-math";
            }
            if (id.includes("FlashcardMath")) {
              return "flashcard-math";
            }
            if (
              id.includes("/src/components/theory/") ||
              id.includes("\\src\\components\\theory\\") ||
              id.includes("TheoryFigure")
            ) {
              return "theory-figures";
            }
            if (
              id.includes("course-theory") ||
              id.includes("/math-theory/") ||
              id.includes("\\math-theory\\") ||
              id.includes("/economics-theory/") ||
              id.includes("\\economics-theory\\") ||
              id.includes("/wiso-economics-theory/") ||
              id.includes("\\wiso-economics-theory\\")
            ) {
              return "course-theory";
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
            if (
              id.includes("/src/data/english/") ||
              id.includes("\\src\\data\\english\\")
            ) {
              return "english-banks";
            }
            if (
              id.includes("/src/data/wiso/german/") ||
              id.includes("\\src\\data\\wiso\\german\\")
            ) {
              return "wiso-german-bank";
            }
            if (
              id.includes("economics-cases-ch") ||
              id.includes("wiso-economics-cases-ch")
            ) {
              return "economics-banks";
            }
            // One async chunk per mock paper (BBE + WiSo), not a single mock-papers bucket.
            const wisoMock = id.match(/[/\\]wiso-mock-exam-(\d+|demo)(?:-content|-sourced|-math-de)/);
            if (wisoMock) return `wiso-mock-exam-${wisoMock[1]}`;
            const bbeMock = id.match(/[/\\]mock-exam-(\d+|demo)(?:-content|-sourced)/);
            if (bbeMock) return `mock-exam-${bbeMock[1]}`;
            // Heavy i18n packs — separate async chunks (not in EN first paint).
            if (
              id.includes("/src/lib/i18n/generated") ||
              id.includes("\\src\\lib\\i18n\\generated")
            ) {
              return "i18n-generated";
            }
            if (
              id.includes("/src/lib/i18n/wiso-hub-extra") ||
              id.includes("\\src\\lib\\i18n\\wiso-hub-extra")
            ) {
              return "i18n-wiso-hub";
            }
            if (
              id.includes("/src/lib/i18n/news-body-extra") ||
              id.includes("\\src\\lib\\i18n\\news-body-extra")
            ) {
              return "i18n-news-body";
            }
            if (
              /[/\\]src[/\\]lib[/\\]i18n[/\\](extra|ui-extra|features-extra|bbe-vs-wiso-extra|wu-vienna-extra|hub-gap-extra|home-extra|copy-voice-extra|news-extra|reviews-extra)\.ts$/.test(
                id,
              )
            ) {
              return "i18n-extras";
            }
            if (
              id.includes("/src/data/acceptance-notes") ||
              id.includes("\\src\\data\\acceptance-notes")
            ) {
              return "i18n-acceptance";
            }
          },
        },
      },
    },
  },
});
