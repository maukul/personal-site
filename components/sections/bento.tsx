import type { ReactNode } from 'react'

import { cn } from '@/lib'

/** Shared bento tile chrome: rounded card, crisp border, padding. */
export function Tile({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <section className={cn('rounded-xl border border-border/50 bg-card p-6', className)}>
      {children}
    </section>
  )
}

/** Bento grid: 1 column on mobile, 2 on tablet, 4 columns on desktop. */
export function Bento({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  )
}
