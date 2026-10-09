import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { site } from '@/content'
import { Section } from './section'

/** Expandable work history — the deep dive behind the bento trio. */
export function CaseStudies() {
  return (
    <Section id="work" title="Case studies">
      <Accordion
        type="single"
        collapsible
        defaultValue="case-0"
        className="rounded-xl border border-border/50 bg-card px-6"
      >
        {site.experience.map((entry, index) => (
          <AccordionItem
            key={entry.company ?? entry.role}
            value={`case-${index}`}
          >
            <AccordionTrigger className="py-5 hover:no-underline">
              <span className="flex flex-1 flex-col gap-1 pr-4 text-left">
                <span className="text-sm font-medium">
                  {entry.role}
                  {entry.company != null && (
                    <>
                      {' · '}
                      {entry.url != null
                        ? (
                            <a
                              href={entry.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline-offset-4 hover:underline"
                            >
                              {entry.company}
                            </a>
                          )
                        : entry.company}
                    </>
                  )}
                </span>
                {entry.period != null && (
                  <span className="text-xs font-normal text-muted-foreground">
                    {entry.period}
                  </span>
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pb-5">
              <p className="max-w-xl leading-6 text-muted-foreground">
                {entry.description}
              </p>
              {entry.stack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {entry.stack.map(tech => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
