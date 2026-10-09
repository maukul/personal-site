'use client'

import { MenuIcon } from 'lucide-react'

import { CopyEmailButton } from '@/components/copy-email-button'
import { StatusPill } from '@/components/status-pill'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ViewToggle } from '@/components/view-mode'
import { site } from '@/content'

/** Sticky glass header: status on the left, quick actions on the right. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="truncate text-sm font-semibold tracking-tight">
            {site.name}
          </span>
          <StatusPill className="hidden sm:inline-flex" />
        </a>
        <div className="hidden items-center gap-2 md:flex">
          <ViewToggle />
          <CopyEmailButton />
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
                <SheetDescription>{site.role}</SheetDescription>
              </SheetHeader>
              <div className="space-y-4 px-4">
                <StatusPill />
                <ViewToggle />
                <div className="flex items-center gap-2">
                  <CopyEmailButton size="sm" className="flex-1">
                    Copy email
                  </CopyEmailButton>
                  <ThemeToggle />
                </div>
                <Button asChild size="sm" className="w-full">
                  <a href={site.booking.href}>{site.booking.label}</a>
                </Button>
                <div className="flex gap-2 text-sm">
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-border/50 px-3 py-2 text-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                  <a
                    href={site.links.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-border/50 px-3 py-2 text-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Upwork
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
