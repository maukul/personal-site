import { CopyEmailButton } from '@/components/copy-email-button'
import { StatusPill } from '@/components/status-pill'
import { Button } from '@/components/ui/button'
import { DeepDiveButton } from '@/components/view-mode'
import { site } from '@/content'

/** The 1-minute pitch: everything a recruiter needs, nothing else. */
export function Pitch() {
  const facts = [
    { label: 'Role', value: site.roleSummary },
    { label: 'Availability', value: site.availability },
    { label: 'Languages', value: site.languages },
    { label: 'Domains', value: site.domains },
  ]

  return (
    <div className="space-y-8 py-10 md:py-16">
      <StatusPill />
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
          {site.name}
        </h1>
        <p className="text-muted-foreground md:text-lg">{site.role}</p>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          {site.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {site.stats.map(stat => (
          <div
            key={stat.label}
            className="rounded-lg border border-border/50 bg-card p-3"
          >
            <p className="font-mono text-2xl font-semibold text-primary">
              {stat.value}
            </p>
            <p className="mt-1 text-xs leading-4 text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <dl className="space-y-2 rounded-xl border border-border/50 bg-card p-6 text-sm">
        {facts.map(fact => (
          <div key={fact.label} className="flex gap-3">
            <dt className="w-28 shrink-0 text-muted-foreground">{fact.label}</dt>
            <dd className="min-w-0 flex-1">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg" className="h-11 sm:h-10">
          <a href={site.booking.href}>{site.booking.label}</a>
        </Button>
        <CopyEmailButton size="default" className="h-11 sm:h-10">
          Copy email
        </CopyEmailButton>
        <Button asChild size="lg" variant="outline" className="h-11 sm:h-10">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 sm:h-10">
          <a href={site.links.upwork} target="_blank" rel="noopener noreferrer">
            Upwork
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 sm:h-10">
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 sm:h-10">
          <a href={site.links.cv}>Download CV</a>
        </Button>
      </div>

      <DeepDiveButton />
    </div>
  )
}
