'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { useViewMode } from '@/components/use-view-mode'
import { site } from '@/content'
import { cn } from '@/lib'

/** Floating mobile bar: appears after the hero, drives to pitch or booking. */
export function MobileCtaBar() {
  const [pastHero, setPastHero] = useState(false)
  const { recruiter, setRecruiter } = useViewMode()

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (hero == null) {
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting)
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const visible = pastHero && !recruiter

  return (
    <div
      className={cn(
        'fixed inset-x-4 bottom-4 z-40 flex gap-2 transition-all duration-300 md:hidden',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <Button className="h-11 flex-1" onClick={() => setRecruiter(true)}>
        1-min pitch
      </Button>
      <Button asChild variant="outline" className="h-11 flex-1">
        <a href={site.booking.href}>{site.booking.label}</a>
      </Button>
    </div>
  )
}
