'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { site } from '@/content'
import { cn } from '@/lib'
import { Tile } from './bento'

/**
 * Tech radar + featured work, sharing one selection: clicking a tech
 * highlights every featured project built with it.
 */
export function TechShowcase() {
  const [selected, setSelected] = useState<string | null>(null)
  const featured = site.experience.filter(entry => entry.featured)
  const hasMatch
    = selected != null
      && featured.some(entry =>
        entry.stack.some(tech => tech.includes(selected) || selected.includes(tech)),
      )

  return (
    <>
      <Tile className="space-y-4 md:col-span-2 lg:col-span-2 lg:row-span-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-semibold tracking-tight">Featured work</h2>
          {selected != null && !hasMatch && (
            <span className="text-xs text-muted-foreground">
              not in the featured trio — see case studies below
            </span>
          )}
        </div>
        {/* Mobile: swipeable snap cards. Tablet and up: stacked. */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 md:mx-0 md:grid md:snap-none md:gap-4 md:overflow-visible md:px-0">
          {featured.map((entry) => {
            const matches
              = selected != null
                && entry.stack.some(tech =>
                  tech.includes(selected) || selected.includes(tech),
                )

            return (
              <article
                key={entry.company ?? entry.role}
                className={cn(
                  'min-w-[85%] snap-start space-y-3 rounded-lg border border-border/50 bg-background/40 p-4 transition-all duration-200 md:min-w-0',
                  matches && 'border-primary/60 shadow-[0_0_30px_-10px_var(--primary)]',
                  selected != null && !matches && 'opacity-40',
                  selected == null && 'hover:border-border',
                )}
              >
                <h3 className="text-sm font-semibold">
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
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {entry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.stack.map(tech => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={cn(tech === selected && 'border-primary/60 text-primary')}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </Tile>

      <Tile className="space-y-4 md:col-span-2 lg:col-span-2">
        <h2 className="text-lg font-semibold tracking-tight">Stack radar</h2>
        <p className="text-xs text-muted-foreground">
          Tap a technology to highlight related work.
        </p>
        <div className="space-y-3">
          {site.skills.map(group => (
            <div key={group.title} className="space-y-1.5">
              <p className="text-xs font-medium text-muted-foreground">{group.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map(tech => (
                  <Badge
                    key={tech}
                    asChild
                    variant={selected === tech ? 'default' : 'outline'}
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(selected === tech ? null : tech)}
                      className="cursor-pointer px-3 py-1.5"
                    >
                      {tech}
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Tile>
    </>
  )
}
