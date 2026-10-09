# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Commands

- `pnpm dev` — dev server at <http://localhost:3000>
- `pnpm build` — production build (also type-checks)
- `pnpm lint` — ESLint, including code style (no Prettier)
- `pnpm typecheck` — TypeScript check
- `pnpm dlx shadcn@latest add <component>` — add a shadcn/ui component

Package manager: pnpm 11 (pinned via `packageManager` in `package.json`).
Node: 24 (`.nvmrc` and `devEngines` in `package.json`).

## Conventions

- All site copy — hero, stats, TL;DR, skills, case studies, links — lives
  in `content.ts`. Change content there, not in components. Copy must stay
  factual: no metrics that are not confirmed.
- Page sections are Server Components in `components/sections/`
  (header, hero, bento tiles, case studies, pitch, footer). Keep them
  client-free; interactivity lives in small client islands
  (`components/view-mode.tsx`, `use-view-mode.ts`, `copy-email-button.tsx`,
  `theme-toggle.tsx`, `sections/tech-showcase.tsx`, `sections/mobile-cta.tsx`).
- The page has two views — "Deep dive" and the recruiter "1-min pitch" —
  switched through `ViewModeProvider`/`ViewSwitch` (server trees as props).
- Theme: next-themes, dark by default, tokens in `app/globals.css`
  (zinc surfaces, cobalt `--primary`, emerald `--status`).
- UI primitives are shadcn/ui components in `components/ui/<name>/`
  (`index.ts` + `variants.ts`); variants files must NOT carry `'use client'`
  (it breaks server rendering of Button/Badge).
- Imports use the `@/*` alias.
- Code style: `@antfu/eslint-config` — single quotes, no semicolons.
  Husky runs `pnpm lint` on pre-commit and commitlint on commit-msg.
- Commits follow Conventional Commits (`feat:`, `fix:`, `chore:`, …).

## Verification

Before finishing any change: `pnpm lint && pnpm typecheck && pnpm build`.
