# personal-site

One-page developer portfolio of Mykhailo Yastremsky — built with Next.js, Tailwind CSS and shadcn/ui.

All site content — name, bio, skills, projects, links — lives in [`content.ts`](./content.ts). Edit that file and the page updates; no component changes needed.

## Getting started

Requires Node 24 and pnpm 11 (`corepack enable`).

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

## Scripts

| Command           | What it does                    |
| ----------------- | ------------------------------- |
| `pnpm dev`        | Dev server                      |
| `pnpm build`      | Production build                |
| `pnpm start`      | Serve the production build      |
| `pnpm lint`       | ESLint, including code style    |
| `pnpm typecheck`  | TypeScript check                |

## Structure

```text
app/                  Next.js App Router: layout, page, global styles
components/sections/  Header, hero, bento tiles, case studies, pitch, footer
components/           Client islands: view mode, theme, copy-email
components/ui/        shadcn/ui primitives
content.ts            All site content — the single source of truth
```

Two page views share one layout: the **Deep dive** (bento grid + case
studies) and the recruiter's **1-min pitch**, toggled in the header.

## License

[MIT](./LICENSE)
