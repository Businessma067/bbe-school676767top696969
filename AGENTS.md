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
- Use the shared demo viewer for inline and fullscreen How it works media with frame-rate-independent smoothing, cursor/pinch-anchored zoom and bounded panning of the whole stage; this magnifies the actual content while preserving desktop layout and avoiding anchor drift.
- Keep demo pan targets in refs and update transforms through one uninterrupted animation loop; pointer movement must not rerender live demonstrations or restart frame timing.
