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
<!-- LOVABLE:END -->
