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
  /** Date range, e.g. '2025 – present'. */
  period?: string
  /** Employment type, e.g. 'Contract' or 'Full-time'. */
  type?: string
  /** One-line summary shown in cards and as the intro paragraph. */
  description: string
  /** Key contributions, rendered as a list inside the case study. */
  bullets?: string[]
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

  headline: 'Mykhailo Yastremsky — Senior Full-Stack Engineer',
  subheadline:
    'React, Next.js and TypeScript on the frontend; Laravel/PHP, Supabase/PostgreSQL on the backend — from pnpm monorepos to legacy migrations.',

  tagline:
    'Senior Full-Stack Engineer building web platforms for EdTech, MedTech, ERP and CRM products. Open to contract and part-time engagements, remote.',

  booking: {
    label: 'Book a 15-min intro',
    href: 'mailto:maukul06@gmail.com?subject=15-min%20intro%20call',
  },
  caseStudies: { label: 'View experience', href: '#work' },

  // Only confirmed facts — no invented metrics.
  stats: [
    { value: `${new Date().getFullYear() - START_YEAR}+`, label: 'years shipping web products' },
    { value: '2×', label: 'products led as Lead Developer (EdTech, MedTech ERP)' },
  ],

  roleSummary: 'Senior Full-Stack Engineer (React/Next.js + Laravel/PHP, Supabase/PostgreSQL)',
  availability: 'Open to senior full-stack contract and part-time engagements (remote)',
  languages: 'Ukrainian — native',
  domains: 'EdTech, MedTech, ERP, CRM, e-commerce, AI integrations',

  links: {
    github: 'https://github.com/maukul',
    email: 'maukul06@gmail.com',
    upwork: 'https://www.upwork.com/freelancers/~0119de2b8df9c5b9d8',
    linkedin: 'https://www.linkedin.com/in/mykhailo-yastremsky-339385162',
    cv: '/CV_Mihalo_Yastremsky_Senior_Frontend.pdf',
  },

  skills: [
    { title: 'Core', skills: ['React', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Laravel', 'PHP', 'PostgreSQL', 'MySQL', 'Supabase'] },
    { title: 'Data & tooling', skills: ['TanStack Query', 'Zod', 'Storybook', 'ESLint'] },
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
      text: 'Ships concrete LLM features — a streaming study assistant, AI-generated practice and feedback — through one provider-agnostic layer over the OpenAI, Anthropic and Gemini APIs.',
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
      role: 'Lead Engineer',
      company: 'AlgoAid',
      period: 'Aug 2025 – present',
      type: 'Contract',
      // TODO: demo/screenshot url.
      description:
        'Leading the engineering and architecture of a non-profit EdTech platform for technical interview preparation — an AI-powered learning environment.',
      bullets: [
        'Architected and built the full-stack infrastructure of the learning platform (Next.js, React, Tailwind CSS) as a pnpm monorepo with a shared UI layer.',
        'Integrated multi-model AI (OpenAI, Anthropic, Google Gemini) via the Vercel AI SDK to deliver real-time coding guidance.',
        'Built an interactive coding environment powered by Monaco Editor for in-browser problem solving.',
        'Implemented a spaced-repetition flashcard system driven by the FSRS algorithm for optimal retention.',
        'Engineered monetization and subscription workflows via Stripe integration using Deno Edge Functions.',
        'Own the backend and database architecture: Supabase, Drizzle ORM, Row Level Security (RLS) and pgTAP testing.',
        'Ensure continuous code quality and UI reliability with Storybook, Vitest unit testing and Playwright end-to-end suites.',
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Vercel AI SDK', 'Monaco Editor', 'Supabase', 'Drizzle ORM', 'Stripe', 'Tailwind CSS', 'Storybook', 'Playwright', 'Vitest'],
      featured: true,
    },
    {
      role: 'Lead Developer',
      company: 'Eclipse Insights',
      period: '2025',
      // TODO: confirm the exact period and employment type.
      // TODO: demo/screenshot url.
      description:
        'Led a medical ERP from blank slate to launch; Huron Consulting Group acquired the platform after launch.',
      bullets: [
        'Owned the React + Express architecture end-to-end: split the product into domain modules and built the API layer and design system the team shipped on.',
        'Ran planning and code review, mentored engineers and set the delivery process.',
        'Worked directly with the client on requirements and priorities.',
      ],
      stack: ['React', 'TypeScript', 'Tailwind', 'Express'],
      featured: true,
    },
    {
      role: 'Frontend Engineer',
      company: 'Spruce',
      url: 'https://app.getspruce.com',
      period: '2024',
      description:
        'Built an order scheduling and workforce management platform on a micro-frontend architecture: employees are assigned to orders and track their schedules.',
      stack: ['React', 'TypeScript', 'Material UI', 'micro-frontends'],
    },
    {
      role: 'Senior Full-Stack Engineer',
      company: 'SoftBee',
      period: 'Nov 2022 – Aug 2025',
      type: 'Full-time',
      description:
        'Senior full-stack work on two products for a US client — healthcare and agri-commerce.',
      bullets: [
        'MSHFA — multimodal doctor–patient platform: online appointment scheduling and payments, dedicated portals for doctors (medical records, appointments) and pharmacies (order management), plus an administrative panel.',
        'Heatleys Fast Quote — quoting system for a major agricultural and veterinary distributor: ERP integration, complex tabular data manipulation, real-time search and end-to-end test coverage.',
      ],
      stack: ['React', 'Next.js', 'TypeScript', 'Supabase', 'TanStack Query', 'Zod', 'GraphQL', 'Material UI', 'AG Grid', 'Playwright'],
    },
    {
      role: 'Lead Engineer',
      company: 'LuxWash',
      period: 'Oct 2021 – Nov 2022',
      type: 'Full-time',
      description:
        'Full-cycle development — server logic, API, UI — for a European car-wash equipment and auto care products company, across three product lines: the corporate website, an internal CRM automating business processes, and the e-commerce store.',
      stack: ['Laravel', 'PHP', 'Vue.js', 'PostgreSQL', 'REST API'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Raxkor',
      period: 'Sep 2017 – Jan 2021',
      type: 'Full-time',
      description:
        'Development of scalable server architecture and specialized web applications across logistics, e-commerce, hospitality and corporate business processes (Laravel/PHP, Vue.js).',
      bullets: [
        'Logistics & fleet management (Multi-Express): core backend services for real-time courier tracking, automated Air Waybill (AWB) generation, UPS integration and live shipment-status processing.',
        'E-commerce solutions: checkout workflows, order processing, admin panels and secure payment gateways — including a B2B wholesale store (Hozland) and a forklift marketplace (ForkLift).',
        'CRM & ERP systems (AKGroup, Slobozhanska): business-logic modules, data-processing pipelines and role-based access control (RBAC).',
        'Booking & hospitality platforms (Gloobose Bogart): direct booking engines and availability management for hotels and restaurants.',
        'Queue management system (QMS): backend architecture for real-time queues across self-service kiosks and digital information displays.',
        'Automotive data verification (DEAL): automated vehicle-history verification via VIN codes.',
      ],
      stack: ['Laravel', 'PHP', 'Vue.js', 'PostgreSQL', 'MySQL', 'REST API'],
    },
  ],
}
