<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the educational guide and its seed content in a shared, typed data module so all views use the same source of truth.
- Keep account-owned data and administrative writes behind the connected hosted auth, server, and row-level permissions; never simulate admin authorization in the browser.
- Give each public content route its own Portuguese metadata and render public views through the shared app shell.
