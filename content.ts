/**
 * Site content — the single source of truth.
 *
 * Everything rendered on the page lives in this file: edit it to update
 * the site, no component changes needed. Copy is English and factual —
 * do not invent metrics that are not confirmed (see AGENTS.md).
 */

/** Career start; the "years" stat is computed from it at build time. */
const START_YEAR = 2017

export interface Stat {
  /** Big number, e.g. "9+" or "0". */
  value: string
  label: string
}

export interface ExperienceEntry {
  role: string
  company?: string
  /** Live product or company site, linked from the case study. */
  url?: string
  /** Year or date range; omitted when unknown. */
  period?: string
  description: string
  /** Stack chips rendered on the case study card. */
  stack: string[]
  /** Featured entries appear in the bento "Projects" tile. */
  featured?: boolean
}

export interface Project {
  title: string
  description: string
  tech: string[]
  url: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Link {
  label: string
  href: string
}

export interface Strength {
  title: string
  text: string
}

export interface SiteContent {
  name: string
  role: string
  /** Green pill next to the name. */
  statusPill: string
  headline: string
  subheadline: string
  /** One-liner used as the meta description. */
  tagline: string
  /** Primary hero CTA — mailto until a scheduler link exists. */
  booking: Link
  caseStudies: Link
  stats: Stat[]
  /** TL;DR rows. */
  roleSummary: string
  /** Same message as the status pill. */
  availability: string
  languages: string
  domains: string
  links: {
    github: string
    email: string
    upwork: string
    /** FIXME: replace with the real LinkedIn profile URL. */
    linkedin: string
    /** FIXME: place the real CV file at public/cv.pdf. */
    cv: string
  }
  skills: SkillGroup[]
  /** "How I work" — only facts already present in the case studies. */
  strengths: Strength[]
  /** Repos; linked from the footer. */
  projects: Project[]
  /** Work history, newest first. */
  experience: ExperienceEntry[]
}

export const site: SiteContent = {
  name: 'Mykhailo Yastremsky',
  role: 'Senior Full-Stack Engineer',
  statusPill: 'Open to senior full-stack contract and part-time engagements (remote)',

  headline: 'Mykhailo Yastremsky Full-Stack Engineer',
  subheadline:
    'React 19, Next.js 16 and. TypeScript on the frontend; Laravel/PHP, Express and PostgreSQL on the backend — from pnpm monorepos to legacy migrations.',

  tagline:
    'Senior Full-Stack Engineer building web platforms for EdTech, MedTech, ERP and CRM products. Open to contract and part-time engagements, remote.',

  booking: {
    label: 'Book a 15-min intro',
    href: 'mailto:maukul06@gmail.com?subject=15-min%20intro%20call',
  },
  caseStudies: { label: 'View case studies', href: '#work' },

  // Only confirmed facts — no invented metrics.
  stats: [
    { value: `${new Date().getFullYear() - START_YEAR}+`, label: 'years shipping web products' },
    { value: '2×', label: 'products led as Lead Developer (EdTech, MedTech ERP)' },
  ],

  roleSummary: 'Senior Full-Stack Engineer (React/Next.js + Laravel/PHP)',
  availability: 'Open to senior full-stack contract and part-time engagements (remote)',
  languages: 'Ukrainian — native · English — [TODO: confirm English level]',
  domains: 'EdTech, MedTech, ERP, CRM, e-commerce, AI integrations',

  links: {
    github: 'https://github.com/maukul',
    email: 'maukul06@gmail.com',
    upwork: 'https://www.upwork.com/freelancers/~0119de2b8df9c5b9d8',
    linkedin: '[TODO: LinkedIn url]',
    cv: '[TODO: /cv.pdf]',
  },

  skills: [
    { title: 'Core', skills: ['React 19', 'Next.js 16 (App Router)', 'TypeScript', 'Tailwind CSS v4'] },
    { title: 'Backend', skills: ['Laravel', 'PHP', 'Express', 'PostgreSQL', 'MySQL', 'Supabase'] },
    { title: 'Data & tooling', skills: ['pnpm Workspaces', 'TanStack Query', 'Zod', 'Storybook', 'ESLint'] },
    { title: 'AI', skills: ['OpenAI API', 'Anthropic API', 'Gemini API'] },
  ],

  strengths: [
    {
      title: 'Monorepos',
      text: 'Runs products as pnpm monorepos with a type-safe Supabase data layer — the EdTech platform architecture.',
    },
    {
      title: 'Legacy migrations',
      text: 'Takes over legacy systems and migrates them to a modern stack without stopping the product — zero downtime at Nordicglobal.',
    },
    {
      title: 'AI integrations',
      text: 'Wires OpenAI, Anthropic and Gemini APIs into product features.',
    },
  ],

  projects: [
    {
      title: 'personal-site',
      description: 'This site (maukul.site) — a one-page developer portfolio built with Next.js, Tailwind CSS and shadcn/ui.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      url: 'https://github.com/maukul/personal-site',
    },
    {
      // FIXME: describe what "stand" actually does.
      title: 'stand',
      description: 'A PHP web application.',
      tech: ['PHP'],
      url: 'https://github.com/maukul/stand',
    },
  ],

  experience: [
    {
      role: 'Lead Developer',
      company: 'EdTech AI Ecosystem',
      period: '2025',
      // TODO: demo/screenshot url.
      description:
        'Built a learning platform as a pnpm monorepo: Next.js 16 (Turbopack), React 19, a type-safe Supabase data layer and Tailwind CSS v4. [TODO: result/metric]',
      stack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Tailwind CSS v4', 'pnpm monorepo'],
      featured: true,
    },
    {
      role: 'Lead Developer',
      company: 'Eclipse Insights',
      period: '2025',
      // TODO: confirm the exact period — both Lead roles are listed as 2025.
      // TODO: demo/screenshot url.
      description:
        'Led a medical ERP on React, TypeScript, Tailwind and Express; Huron Consulting Group acquired the platform after launch. [TODO: my concrete contribution / team size]',
      stack: ['React', 'TypeScript', 'Tailwind', 'Express'],
      featured: true,
    },
    {
      role: 'Frontend Engineer',
      company: 'Spruce',
      url: 'https://app.getspruce.com',
      period: '2024',
      description:
        'Built an order scheduling and workforce management platform on a micro-frontend architecture (React, TypeScript, Material UI): employees are assigned to orders and track their schedules. [TODO: result]',
      stack: ['React', 'TypeScript', 'Material UI', 'micro-frontends'],
    },
    {
      role: 'Frontend Engineer',
      company: 'Nordicglobal',
      url: 'https://nordicglobal.com',
      period: '2023',
      description:
        'Took over a legacy customer-management system after the original team left; migrated it to a modern stack, refreshed the UI and stabilised the product with zero downtime.',
      stack: ['React', 'TypeScript', 'legacy migration'],
      featured: true,
    },
    {
      role: 'Full-Stack Developer',
      company: 'MSHFA',
      period: '2022',
      // TODO: demo/screenshot url.
      description:
        'Built a doctor–patient platform (React, Material UI, GraphQL): patients book and pay for appointments online; doctors manage medical records; pharmacies manage patient orders; an admin panel governs all entities. [TODO: result]',
      stack: ['React', 'Material UI', 'GraphQL', 'JavaScript', 'Sass', 'Responsive Design', 'Figma'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Hozland',
      period: '2021',
      // TODO: demo/screenshot url.
      description: 'Built a B2B online store for wholesale ordering (Laravel, Vue.js).',
      stack: ['Nuxt.js', 'Vue.js', 'Laravel', 'PHP', 'PostgreSQL', 'REST API'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Multi-express',
      period: '2020',
      // TODO: demo/screenshot url.
      description:
        'Built a CRM for an international parcel-delivery company (Laravel, Vue.js, PostgreSQL): AWB bills of lading, UPS integration and a shipping-cost calculator.',
      stack: ['Laravel', 'PHP', 'Vue.js', 'PostgreSQL', 'REST API'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'ForkLift',
      period: '2019',
      // TODO: demo/screenshot url.
      description:
        'Built a bulletin board for a forklift company (Laravel, Vue.js): customers find loaders to buy or rent, and owners post offers.',
      stack: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'REST API'],
    },
    {
      role: 'Backend Developer',
      period: '2017–2020',
      description: 'Started my career building PHP and Laravel backends.',
      stack: ['PHP', 'Laravel'],
    },
  ],
}
