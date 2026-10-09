import { site } from '@/content'
import { Tile } from './bento'

/** Confirmed metrics only — every number here can be asked about. */
export function StatsTile() {
  return (
    <Tile className="md:col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        {site.stats.map(stat => (
          <div key={stat.label} className="space-y-1">
            <p className="font-mono text-3xl font-semibold tracking-tight text-primary">
              {stat.value}
            </p>
            <p className="text-xs leading-5 text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </Tile>
  )
}
