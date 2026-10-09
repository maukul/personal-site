import type { ReactNode } from 'react'

interface SectionProps {
  /** Anchor id for in-page links (e.g. the hero CTA targets #work). */
  id: string
  title: string
  children: ReactNode
}

/** Shared layout for page sections: anchor target, title, content. */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight mt-3">{title}</h2>
      {children}
    </section>
  )
}
