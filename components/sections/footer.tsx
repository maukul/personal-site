import { site } from '@/content'

/** Terminal-style contact footer. */
export function Footer() {
  const links = [
    { label: 'github.com/maukul', href: site.links.github, external: true },
    { label: site.links.email, href: `mailto:${site.links.email}`, external: false },
    { label: 'upwork.com/freelancers/maukul', href: site.links.upwork, external: true },
    { label: 'LinkedIn', href: site.links.linkedin, external: true },
    { label: 'CV PDF', href: site.links.cv, external: false },
  ] as const

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto w-full max-w-6xl space-y-4 px-4 py-10 font-mono text-sm sm:px-6">
        <p>
          <span className="text-primary">$</span>
          {' whoami'}
        </p>
        <p className="text-muted-foreground">
          {'> '}
          {site.name}
          {' — '}
          {site.role}
        </p>
        <p>
          <span className="text-primary">$</span>
          {' contact '}
          <span className="text-muted-foreground">--github --email --upwork --linkedin --cv</span>
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-primary underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="pt-4 text-xs text-muted-foreground">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          {site.name}
          {' · built with Next.js · '}
          <a
            href={`${site.links.github}/personal-site`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  )
}
