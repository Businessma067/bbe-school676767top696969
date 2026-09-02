# Visual identity: exam-paper / institutional dossier

Scope for this pass: the shared design tokens plus the landing page (and the header
tagline, which is shared chrome). Other pages keep working and will pick up the new
tokens automatically; a full page-by-page pass follows after you approve the tone.

## Tone target

Paper-grey ground, near-black ink, hairline rules, serif for institutional voice.
Red used only where real stakes exist. No ambient glows, no decorative gradients,
no uniform hover-lift.

## Tokens

- `--background` becomes #F2F1ED (pale paper grey); `--ivory` is remapped to the same
  value so existing `bg-ivory` usages stop reading cream.
- `--foreground` / `--espresso` become #161616.
- `--border` becomes a hairline #D8D6CE.
- New `--exam-red` = #B3392A, exposed as `text-exam-red` / `bg-exam-red`. Not applied
  broadly — only the single most urgent CTA per page, negative-marking callouts, timers.
- Dark sections stay near-black (`--why-us-bg`), but the caramel radial-gradient washes
  and `why-us-glow` shadows behind them are removed.
- Caramel/amber tokens stay defined (other pages still reference them) but are removed
  from every landing-page surface.

## Typography

- Both Source Serif 4 and Inter must be added to the font `<link>` in the root route —
  today only DM Sans and Space Grotesk are actually loaded.
- `--font-display` is repointed from Space Grotesk to Source Serif 4, so every existing
  `font-display` headline becomes the institutional serif with no per-file churn.
- `--font-sans` becomes Inter for UI chrome, data, buttons, nav, and the demo interface.
- Space Grotesk is dropped from the loaded fonts and from the token set.
- Landing headlines get a size/leading bump and lose the tight `tracking-tight`.

## Landing-page component changes

1. **Primary CTAs** — the `linear-gradient(135deg,#E85D3A,#D97706)` fill is replaced by
   solid #161616 with #F2F1ED text. Exactly one CTA on the page (the hero
   "Try demo-practice") gets solid #B3392A instead.
2. **Eyebrows** — the tracked-out uppercase labels above WU Vienna, Why Us, the parents
   letter, Field Reports, and Questions & Answers are deleted. The label above the
   interactive simulator survives as quiet sentence-case small text, no letter-spacing.
3. **Why Choose Us** — 01/02/03 markers removed and the slider's numbered framing
   replaced by three unnumbered arguments (three-column at desktop, stacked on mobile).
   The acceptance-rate ring animation (0% → 7.3%) is kept exactly as is; no new motion
   is added.
4. **Cards, differentiated by role**
   - Field-report testimonials and FAQ items: flattened to a stacked list separated by
     1px #D8D6CE hairline top borders, no card shadow, no hover-lift.
   - Product tier cards: remain real elevated cards (radius, border, shadow) — these are
     purchase decisions.
   - Live simulator module: keeps its card / browser-chrome treatment untouched.
5. **Header tagline** — "WU Vienna · Prep" loses the middle-dot meta format; becomes
   plain "Exam preparation for WU Vienna" in quiet small text.
6. Rating badge, stat rings, and testimonial flame icons are left in place.

## Verification

After the edits I capture the landing page with Playwright and post before/after
screenshots of the hero and the "Why Choose Us" section side by side.

## Technical notes

- Files touched: `src/styles.css` (tokens, font vars, glow utilities),
  `src/routes/__root.tsx` (font link tags), `src/routes/index.tsx` (hero, eyebrows,
  Why Us slider, testimonial/FAQ layout, CTA fills), `src/components/SiteHeader.tsx`
  (tagline), `src/components/FaqAccordion.tsx` / `SeoFaq` styling only.
- The SEO work from the previous pass (always-in-DOM FAQ answers, JSON-LD, canonicals)
  is preserved; FAQ changes are presentation-only.
