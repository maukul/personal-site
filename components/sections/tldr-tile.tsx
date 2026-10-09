import { site } from '@/content'
import { Tile } from './bento'

/** Links under the recruiter quick facts. */
const PROFILE_LINKS = [
  { label: 'GitHub', href: site.links.github, external: true },
  { label: 'Upwork', href: site.links.upwork, external: true },
  { label: 'Email', href: `mailto:${site.links.email}`, external: false },
  { label: 'LinkedIn', href: site.links.linkedin, external: true },
  { label: 'Download CV', href: site.links.cv, external: false },
] as const

/** Recruiter quick facts — the whole profile in ten seconds. */
export function TldrTile() {
  const facts = [
    { label: 'Role', value: site.roleSummary },
    { label: 'Availability', value: site.availability },
    { label: 'Languages', value: site.languages },
    { label: 'Domains', value: site.domains },
  ]

  return (
    <Tile className="space-y-4 md:col-span-1 lg:col-span-2">
      <h2 className="text-lg font-semibold tracking-tight">TL;DR for recruiters</h2>
      <dl className="space-y-2 text-sm">
        {facts.map(fact => (
          <div key={fact.label} className="flex gap-3">
            <dt className="w-28 shrink-0 text-muted-foreground">{fact.label}</dt>
            <dd className="min-w-0 flex-1">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap gap-2 text-xs">
        {PROFILE_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="rounded-full border border-border/50 px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Tile>
  )
}
