'use client'

import type { ReactNode } from 'react'
import { CopyIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { site } from '@/content'

interface CopyEmailButtonProps {
  children?: ReactNode
  variant?: 'outline' | 'ghost'
  size?: 'icon' | 'sm' | 'default'
  className?: string
}

/** Copies the contact email to the clipboard with instant toast feedback. */
export function CopyEmailButton({
  children,
  variant = 'outline',
  size = 'icon',
  className,
}: CopyEmailButtonProps) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(site.links.email)
      toast.success('Email copied to clipboard')
    }
    catch {
      toast.error(`Copy failed — ${site.links.email}`)
    }
  }

  return (
    <Button
      onClick={() => void copy()}
      variant={variant}
      size={size}
      className={className}
      aria-label="Copy email address"
    >
      {children ?? <CopyIcon />}
    </Button>
  )
}
