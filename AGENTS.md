<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch (`main`) sync back to Lovable and
> show up in the editor, so keep `main` in a working state.
>
> **How to land changes so Lovable can update the preview:**
> 1. `git fetch origin main` and branch from the latest `origin/main`.
> 2. Commit on the feature branch and `git push -u origin <feature-branch>`.
> 3. Update local `main` with `git pull origin main`, then
>    `git merge --ff-only <feature-branch>` and `git push origin main`.
> 4. Do **not** use `git merge --no-ff` into `main` — merge diamonds fight
>    Lovable’s own `Changes` commits and break “Update to latest preview”.
> 5. Never force-push `main`.
> 6. Do not import `*.client.ts` / `*.client.tsx` from isomorphic components
>    (e.g. `PaymentModal`) — TanStack Start import-protection fails the
>    production/Lovable preview build. Put shared types in a normal module and
>    keep browser helpers in a non-`.client` file (or a true client-only island).
<!-- LOVABLE:END -->

- Present How it works in a shared widescreen aspect with contained native recordings and fixed desktop live stages scaled as a whole in inline and enlarged views; this prevents mobile reflow from cropping the demonstration.
- Run signup-country capture in the verified signup-complete gate before enabling onward navigation; all signup methods share this gate and regular sign-ins must not record a registration country.
- Resolve all Google entry points through a shared, verified OAuth-attempt classifier before navigating; only newly created accounts receive the signup gate, and success uses a document load so URL-based conversion tracking sees the canonical page.
- Use the shared demo viewer for inline and fullscreen How it works media with frame-rate-independent smoothing, cursor/pinch-anchored zoom and bounded panning of the whole stage; this magnifies the actual content while preserving desktop layout and avoiding anchor drift.
- Keep both full-course product galleries equally wide, contain original screenshots without cropping, and use the shared fullscreen viewer for image details; this preserves source content and consistent zoom behavior.
- Build course-gallery artwork from pixel-preserved browser captures with compact callouts placed in verified empty areas and short pointers to precisely measured controls; this preserves authentic interface text and prevents annotation overlaps. Store finished artwork as CDN asset pointers.
