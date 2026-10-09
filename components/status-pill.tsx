import { site } from '@/content'
import { cn } from '@/lib'

/** Green availability pill shared by the header, hero and mobile menu. */
export function StatusPill({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-status/30 bg-status/10 px-3 py-1 text-xs font-medium whitespace-nowrap text-status',
        className,
      )}
    >
      <span className="size-1.5 animate-pulse rounded-full bg-status" />
      {site.statusPill}
    </span>
  )
}
