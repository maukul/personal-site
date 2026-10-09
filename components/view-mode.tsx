'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'

import { cn } from '@/lib'
import { useViewMode } from './use-view-mode'
import { ViewModeContext } from './view-mode-context'

/** Shares the Deep dive / 1-min pitch state between header and page. */
export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [recruiter, setRecruiter] = useState(false)

  return (
    <ViewModeContext value={{ recruiter, setRecruiter }}>
      {children}
    </ViewModeContext>
  )
}

/** Renders whichever page variant is active. Both trees are server-rendered. */
export function ViewSwitch({ deep, pitch }: { deep: ReactNode, pitch: ReactNode }) {
  const { recruiter } = useViewMode()

  return (
    <div key={recruiter ? 'pitch' : 'deep'} className="animate-in fade-in duration-200">
      {recruiter ? pitch : deep}
    </div>
  )
}

/** Compact segmented control for the header and the mobile menu. */
export function ViewToggle({ className }: { className?: string }) {
  const { recruiter, setRecruiter } = useViewMode()
  const options = [
    { label: 'Deep dive', value: false },
    { label: '1-min pitch', value: true },
  ]

  return (
    <div
      role="tablist"
      aria-label="Page view"
      className={cn(
        'flex rounded-full border border-border/50 bg-card p-1 text-xs font-medium',
        className,
      )}
    >
      {options.map(option => (
        <button
          key={option.label}
          type="button"
          role="tab"
          aria-selected={recruiter === option.value}
          onClick={() => setRecruiter(option.value)}
          className={cn(
            'rounded-full px-3 py-1.5 transition-colors',
            recruiter === option.value
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

/** Returns from the pitch view to the full page. */
export function DeepDiveButton({ className }: { className?: string }) {
  const { setRecruiter } = useViewMode()

  return (
    <button
      type="button"
      onClick={() => setRecruiter(false)}
      className={cn(
        'text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline',
        className,
      )}
    >
      Switch back to the deep dive
    </button>
  )
}
