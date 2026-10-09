import { ArrowDownIcon, MailIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/content'

/** Value headline, role line and the two primary CTAs. */
export function Hero() {
  return (
    <section id="hero" className="relative">
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]"
      />
      <div className="relative space-y-5 pt-10 pb-8 md:pt-16 md:pb-12">
        <h1 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl md:leading-[1.1]">
          {site.headline}
        </h1>
        <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
          {site.subheadline}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-11 sm:h-10">
            <a href={site.booking.href}>
              <MailIcon />
              {site.booking.label}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 sm:h-10">
            <a href={site.caseStudies.href}>
              {site.caseStudies.label}
              <ArrowDownIcon />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
